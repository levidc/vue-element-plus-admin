const { generateApi } = require('swagger-typescript-api')
const path = require('path')
const fs = require('fs')

module.exports.generate = (
  api,
  output,
  modular = true,
  singleApiFileName = null,
  renameTags = null,
  cleanOutput = false
) => {
  const templatePath = modular ? 'modular' : 'default'
  singleApiFileName = singleApiFileName || 'api.ts'
  const httpClientFilePath = path.resolve(output, 'http-client.ts')
  let httpClientFileData = null
  let apiInfo = null

  /* NOTE: all fields are optional expect one of `output`, `url`, `spec` */
  generateApi({
    name: singleApiFileName,
    output,
    url: api,
    // input: path.resolve(__dirname, './swagger.json'),
    modular, // 是否拆文件
    generateClient: true, // 是否生成api
    // spec: {
    //   swagger: '2.0',
    //   info: {
    //     version: '1.0.0',
    //     title: 'Swagger Petstore'
    //   }
    //   // ...
    // },
    templates: path.resolve(__dirname, './api-templates', templatePath),
    httpClientType: 'axios', // or "fetch"
    defaultResponseAsSuccess: false,
    generateRouteTypes: false, // 为API路由生成类型定义，默认false
    generateResponses: false, // 生成有关请求响应的其他信息，还为错误响应添加键入，默认false
    toJS: false, // 使用声明文件生成js api模块， 默认false
    extractRequestParams: false,
    extractRequestBody: false,
    prettier: {
      printWidth: 120,
      tabWidth: 2,
      trailingComma: 'none', // 尾逗号 or 'all'
      semi: false, // 尾分号
      parser: 'typescript'
    },
    defaultResponseType: 'void',
    singleHttpClient: true, // 能够将HttpClient实例发送到Api构造函数，默认false
    cleanOutput,
    enumNamesAsValues: false,
    moduleNameFirstTag: !!renameTags, // 基于第一个标记拆分路由
    generateUnionEnums: false, // 将所有“枚举”类型生成为联合类型，默认false
    extraTemplates: [],
    hooks: {
      onCreateComponent: (component) => {},
      onCreateRequestParams: (rawType) => {},
      onCreateRoute: (routeData) => {
        if (renameTags) {
          const tag =
            routeData.raw.tags && routeData.raw.tags[0] && renameTags[routeData.raw.tags[0]]
              ? renameTags[routeData.raw.tags[0]]
              : null
          if (tag) {
            routeData.namespace = tag
            return routeData
          }
        }
      },
      onCreateRouteName: (routeNameInfo, rawRouteInfo) => {},
      onFormatRouteName: (routeInfo, templateRouteName) => {
        let routeName = routeInfo.route.split('/').pop()
        if (!routeName)
          routeName = templateRouteName.replace(/Using(POST|GET|DELETE|PUT|Request)$/, '')
        routeName = toHump(routeName)
        routeName = routeName[0].toLowerCase() + routeName.substring(1)
        return routeName != 'delete' ? routeName : 'del'
      },
      onFormatTypeName: (typeName, rawTypeName) => {},
      onInit: (configuration) => {
        apiInfo = configuration.swaggerSchema.info || null
        const perfix = '      '
        console.log('')
        console.log(perfix, '===========================================')
        console.log(perfix, '接口信息')
        console.log(perfix, '  > 标题：', configuration.swaggerSchema.info.title)
        console.log(perfix, '  > 版本：', configuration.swaggerSchema.info.version)
        console.log(perfix, '  > 描述：', configuration.swaggerSchema.info.description)
        if (!renameTags) {
          console.log(perfix, '-----------------')
          console.log(perfix, '标签')
          configuration.swaggerSchema.tags.forEach((it) => {
            // console.log(perfix, it)
            const description = it.description.replace(/Controller$/, '').replace(/ /g, '')
            console.log(perfix, `  '${it.name}': '${description}',`)
          })
        }
        console.log(perfix, '===========================================')
        console.log('')
        configuration.templatePaths.base = path.resolve(__dirname, './api-templates', 'base')
        // console.log('onInit', configuration)
        if (modular && fs.existsSync(httpClientFilePath)) {
          httpClientFileData = fs.readFileSync(httpClientFilePath, 'utf8')
        }
      },
      onParseSchema: (originalSchema, parsedSchema) => {},
      onPrepareConfig: (currentConfiguration) => {}
    }
  })
    .then(({ files, configuration }) => {
      const logo =
        /\/\*\n \*(.|\n)*?THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API(.|\n)*?\*\/(\n)*/
      let comment = ''
      if (apiInfo) {
        comment =
          `/************************************************\n` +
          ` * 接口信息\n` +
          ` * > 标题：${apiInfo.title}\n` +
          ` * > 版本：${apiInfo.version}\n` +
          ` * > 描述：${apiInfo.description}\n` +
          ` ***********************************************/\n`
      }
      files.forEach(({ content, name }) => {
        const fpath = path.resolve(output, name)
        let data = fs.readFileSync(fpath, 'utf8')
        data = data.replace(logo, comment)

        fs.writeFile(fpath, data, {}, (err) => {})
        //   // console.log('  --->', name)
        //   // fs.writeFile(path.resolve(__dirname, './dist', name), content, {}, (err) => {})
      })
      if (modular && httpClientFileData) {
        setTimeout(() => {
          fs.writeFile(path.resolve(output, 'http-client.ts'), httpClientFileData, {}, (err) => {})
        }, 50)
      }
      console.log('----------')
      console.log('Finished')
    })
    .catch((e) => console.error(e))
}

function toHump(str) {
  if (str.indexOf('-') < 0 && str.indexOf('_') < 0) return str
  return str.toLowerCase().replace(/[_-]([a-z])/g, (all, val) => val.toUpperCase())
}
