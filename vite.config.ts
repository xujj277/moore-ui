import { readFileSync } from 'fs'
import { defineConfig, PluginOption } from 'vite'
import { baseParse } from '@vue/compiler-core'
import { MagicString } from '@vue/compiler-sfc'
import vue from '@vitejs/plugin-vue'
import markdown from 'vite-plugin-md'

const transformDemo = (): PluginOption => {
  const TAG = 'demo'
  return {
    name: 'transform-demo',
    transform(src, id) {
      if (!new RegExp(`vue&type=${TAG}`).test(id)) return src

      const filePath = id.split('?')[0]
      const code = readFileSync(filePath, { encoding: 'utf-8' })
      const parsed = baseParse(code).children.find(
        (c) => c.type === 1 /* NodeTypes.ELEMENT */ && c.tag === TAG
      )

      const s = new MagicString(code)
      s.remove(parsed.loc.start.offset, parsed.loc.end.offset)

      return `export default function (Component) {
        Component.__sourceCode = ${JSON.stringify(s.toString().trim())}
        Component.__sourceCodeTitle = ${JSON.stringify(src.trim())}
      }`.trim()
    },
  }
}

export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    markdown(),
    transformDemo(),
  ],
})
