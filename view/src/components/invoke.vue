<template>
    <v-dialog v-model="$.dialog" persistent width="80%" scrollable>
        <audio ref="audio" src="https://www.w3schools.com/tags/horse.mp3"></audio>
        <v-card dark>
            <v-card-title :class="$.done ? ($.totalError === 0 ? 'success--text' : 'error--text') : ''">
                {{ $.done ? `執行完畢，共計錯誤為：${$.totalError}` : `請等待執行完畢` }}
                <v-spacer></v-spacer>
                <v-btn v-if="$.done === true" text @click="copyReport">複製報告</v-btn>
            </v-card-title>
            <v-card-text>
                <p v-for="(text, index) in $.result" :key="index + text" v-html="text"></p>
                <p v-if="$.done && $.errorTest.length > 0" style="color: red">錯誤的測試：{{ errorTestReport.join(', ') }}</p>
                <div ref="done"></div>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn :loading="$.done === false" text @click="$.dialog = false">關閉</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script lang="ts">
import marked from 'marked'
import socket from '@/socket'
import { getConfig, copy } from '@/utils'
import { RefElement } from '@/vue-core'
import { status, action } from '@/alas'
import { defineComponent, reactive, watch, computed, ref } from '@vue/composition-api'
export default defineComponent({
    props: {},
    setup() {

        // =================
        //
        // ref
        //

        let done: RefElement<any> = ref(null)

        let audio: RefElement<HTMLAudioElement> = ref(null)

        // =================
        //
        // state
        //

        let $ = reactive({
            done: false,
            dialog: false,
            result: [],
            project: status.fetch('project'),
            nowTest: null,
            errorTest: [],
            totalError: 0
        })

        // =================
        //
        // computed
        //

        let errorTestReport = computed(() => {
            return [...new Set($.errorTest)]
        })

        // =================
        //
        // watch
        //

        watch(() => $.dialog, () => {
            $.done = false
            $.result = []
            $.totalError = 0
            $.nowTest = null
            $.errorTest = []
        })

        // =================
        //
        // methods
        //

        let concatParent = (spec) => {
            let output = spec.steps.items.slice()
            if (spec.parent) {
                let parent = $.project.specs.items.find(s => s.id === spec.parent)
                if (parent) {
                    output = concatParent(parent).concat(output)
                }
            }
            return output
        }

        let parseResult = (message) => {
            if (message === '.') {
                return `<font color="chartreuse">Success</font>`
            }
            if (message === 'F') {
                $.totalError += 1
                $.errorTest.push($.nowTest)
                return `<font color="red">Fail</font>`
            }
            if (message.match('說明 =>')) {
                let text = marked(message.replace('說明 =>', '').trim())
                if (text) {
                    return `<font color="aquamarine">${text}</font>`
                } else {
                    return ''
                }
            }
            if (message.match('@image:')) {
                return `<img style="min-width: 350px; max-width: 60%" src="data:image/png;base64, ${message.replace('@image:', '')}">`
            }
            if (message.match('測試 =>')) {
                $.nowTest = message.replace('測試 =>', '').trim()
                return `<font color="yellow">${message}</font>`
            }
            if (message.match('執行 =>')) {
                return `<font color="aqua">${message}</font>`
            }
            if (message.match('執行完畢')) {
                return `<font color="orchid">${message}</font>`
            }
            return message
        }

        let parseEvent = (data) => {
            let event = data.trim().split('@event:')[1]
            if (event) {
                if (event === 'play-sound') {
                    audio.value.play()
                }
            }
        }

        let copyReport = () => {
            copy($.result.join('\n\n'))
            action.message('success', '複製成功')
        }

        let play = async(ids) => {
            $.dialog = true
            let { root, releaseDir } = getConfig()
            try {
                await $.project.$o.write.start({
                    specs: ids
                })
                await socket.exec(`protractor "${root}/${releaseDir}/config.js"`, (type, data) => {
                    if (type === 'exit') {
                        $.done = true
                    } else {
                        parseEvent(data)
                        $.result.push(parseResult(data))
                        setTimeout(() => {
                            done.value.parentNode.scrollTo(0, 99999999)
                        }, 100)
                    }
                })
            } catch (error) {
                console.error(error)
            }
        }

        // =================
        //
        // done
        //

        return {
            $,
            done,
            audio,
            errorTestReport,
            concatParent,
            parseResult,
            parseEvent,
            copyReport,
            play
        }
    }
})
</script>

<style lang="scss" scoped>
    .image-bolck {
        position: relative;
        img {
            display: none;
            position: fixed;
            width: 20vw;
            min-width: 300px
        }
    }
    .image-bolck:hover {
        img {
            display: block;
        }
    }
</style>
