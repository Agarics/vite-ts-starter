import { resolve } from 'path'
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerCompileClass,
  transformerVariantGroup,
} from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'
import presetLegacyCompat from '@unocss/preset-legacy-compat'
// loader helpers
import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'
import { presetDaisy } from 'unocss-preset-daisy'

// icons path
const iconsPath = resolve(__dirname, 'src/assets/icons')

export default defineConfig({
  presets: [
    presetUno(),
    presetDaisy(),
    presetAttributify(),
    presetTypography(),
    presetRemToPx({
      baseFontSize: 16,
    }),
    presetLegacyCompat({
      commaStyleColorFunction: true,
    }),
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
      },
      collections: {
        custom: FileSystemIconLoader(iconsPath),
      },
    }),
  ],
  transformers: [transformerCompileClass(), transformerVariantGroup()],
  shortcuts: {
    'wh-full': ['w-full', 'h-full'],
  },
})
