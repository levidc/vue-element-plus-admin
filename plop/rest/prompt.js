const toUpperCase = (str) => str.charAt(0).toUpperCase() + str.slice(1)

module.exports = {
  description: 'Create rest view',
  prompts: [
    {
      type: 'input',
      name: 'path',
      message: '请输入路径（Please enter a path）',
      default: 'views'
    },
    {
      type: 'input',
      name: 'name',
      message: '请输入模块名称（Please enter module name）'
    }
  ],
  actions: (data) => {
    const { name, path } = data
    const upperFirstName = toUpperCase(name)

    const actions = []
    if (name) {
      actions.push({
        type: 'add',
        path: `./src/${path}/${upperFirstName}/config.ts`,
        templateFile: './plop/rest/config.hbs',
        data: {
          path,
          name,
          upperFirstName
        }
      })
      actions.push({
        type: 'add',
        path: `./src/${path}/${upperFirstName}/routes.ts`,
        templateFile: './plop/rest/routes.hbs',
        data: {
          path,
          name,
          upperFirstName
        }
      })
      actions.push({
        type: 'add',
        path: `./src/${path}/${upperFirstName}/${upperFirstName}List.vue`,
        templateFile: './plop/rest/list.hbs',
        data: {
          path,
          name,
          upperFirstName
        }
      })
      actions.push({
        type: 'add',
        path: `./src/${path}/${upperFirstName}/${upperFirstName}Edit.vue`,
        templateFile: './plop/rest/edit.hbs',
        data: {
          path,
          name,
          upperFirstName
        }
      })
    }

    return actions
  }
}
