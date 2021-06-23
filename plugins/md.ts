// @ts-nocheck
import path from 'path'
import fs from 'fs'
import marked from 'marked'

const mdToJs = str => {
  const content = JSON.stringify(marked(str))
  return `export default ${content}`
}

export function md() {
  return {
    configureServer: [ // 用于开发
      async ({ app }) => {
        app.use(async (ctx, next) => { // koa
          if (ctx.path.endsWith('.md')) { // 寻找路径是md的
            ctx.type = 'js'
            const filePath = path.join(process.cwd(), ctx.path)
            ctx.body = mdToJs(fs.readFileSync(filePath).toString()) // 转成js
          } else {
            await next()
          }
        })
      },
    ],
    transforms: [{  // 用于 rollup // 插件
      test: context => context.path.endsWith('.md'), // 哪些文件要编译
      transform: ({ code }) => mdToJs(code) // 转换成js
    }]
  }
} 