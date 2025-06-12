// uno.config.ts
import {
    defineConfig,
    presetMini,
    presetAttributify,
    presetIcons,
} from 'unocss'

export default defineConfig({
    presets: [
        presetMini(),
        presetAttributify(),
        presetIcons(),
    ],
})
