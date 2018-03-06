# fanfou

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).



### 技术栈：

```
vue-cli 快速搭建项目结构
vue-router 创建单页面应用
ESLint 代码检测工具实现代码规范
axios.js 与后台交互获取数据
nodejs 添加代理服务器实现跨域请求
mint-ui 添加移动端组件
vuex 状态管理工具
```

### 基础工作：

1、需要安装cnpm，替代npm，提高安装下载速度

`$ npm install -g cnpm --registry=https://registry.npm.taobao.org`

2、全局安装vue-cli `npm install -g vue-cli` 快速构建项目结构

3、`vue init webpack （+ projectName）` 初始化项目，结束后会发现文件夹中出现很多文件。

4、`cnpm install` 安装所有的依赖包，结束后文件夹中会出现`node_modules` 的文件夹。

5、`npm run dev` 会自动在浏览器中打开http://localhost:8080，看到首页

### 疑难杂症：

**1、路由如何实现的？**

index.html中引入主组件App.vue,App.vue引入components中的其他.vue文件做分组件。 即单页面应用。src—router—index.js中配置路由。

**2、index.html如何引入App.vue?**

index.html中必须要有`<div id='app'></div>`,vue-cli构建的项目会自动的寻找到。

**3、App.vue如何引入其他组件？**

主组件中必须要有`<router-view></router-view>`作为路由出口，所匹配到的组件将会自动渲染到这里。所有组件共同的部分如footer需要写到主组件App.vue中。

### axios—vue中的ajax:

1、在项目根目录下运行`cnpm install axios -S` 安装axios。

2、在main.js中引入axios`import axios from 'axios'`

 改写原型链：`Vue.prototype.$http = axios` ;

3、 在config中的index.js中的dev中添加如下代码解决跨域问题。

```
proxyTable: {
  '/api': {
      target: '你需要访问的域名',
      changeOrigin: true,
      pathRewrite: {
      '^/api': '/'
      }
  }
}
```

4、使用箭头函数获取vue的实例对象this。

```
this.$http.get(this.interfaces + '/account/verify_credentials.json', {}).then((response) => {
	this.dealData(response);
}, (response) => {
	console.log('失败了，Why, Why, Why?');
});
```

## vuex

vuex的核心是store，就像是一个仓库，里面包含很多应用中的state状态（其实就是变量)。

特点：vuex是响应式的；要想改变状态必须通过提交mutations