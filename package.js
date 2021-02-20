Package.describe({
  summary: 'Ant Design Components for Useraccounts-React',
  version: '1.0.18',
  name: 'bmartin1134:accounts-antd',
  git: 'https://github.com/bmartin1134/accounts-antd.git',
  documentation: null
})

Package.onUse(api => {
  api.versionsFrom('1.6.1')

  api.use('ecmascript')
  api.mainModule('index.js', 'client')
})
