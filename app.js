const fs = require('fs')
const path = require('path')
const basepath = './src/pages'

function readFile(dir) {
  return fs.readdirSync(dir)
}

function getPageInfo(file) {
  const router = basepath + '/' + file
  const name = fs.readFileSync(path.resolve(__dirname, basepath, file)).toString().match(/\<title\>(.*)\<\/title\>/)[1]
  return {
    name,
    router
  }
}

function routers() {
  const routers = []
  const filesArr = readFile(path.resolve(__dirname, basepath))
  filesArr.forEach(file => {
    routers.push(getPageInfo(file))
  })
  return routers
}

function link(route) {
  return `<a href="${route.router}" title="${route.name}">${route.name}</a>`
}

function render() {
  let domStr = ''
  routers().forEach(route => {
    domStr += link(route)
  })
  return domStr
}

fs.writeFileSync('./index.html', fs.readFileSync('./src/template.html').toString().replace('<!-- 内容区域 -->', render()))
