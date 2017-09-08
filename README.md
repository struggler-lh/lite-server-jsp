# lite-server 前端开发服务器
## lite-server

> 轻量级的node开发服务，封装了BrowserSync实现对浏览器的监控。  

众多node插件中的一种，也可选用其他类似插件，如：webpack-dev-middleware。

## 使用方法

### 文件说明
1. 需要node环境
2. npm管理node包（也可使用yarn等其他node包管理工具）
3. `package.json`不需要更改，该文件描述了环境所依赖的node包信息
4. **`bs-config.js`为lite-server默认读取的配置文件，根据情况修改相关配置**，  ***修改配置文件后需要重启服务***
5. `index-jsp.html`作为首页加载时，会请求/index.jsp页面，通过配置反向代理请求对应服务器上的index.jsp页面，返回解析好的html，渲染到浏览器。通过修改bs-config.js来配置反向代理和修改默认首页。


### 安装使用
1. 将`bs-config.js`、`package.json`、`index-jsp.html`三个文件拷贝至项目根目录
2. 打开命令行工具，执行`npm install`命令，下载node包。会生成node_moudles目录
3. 下载完成后，执行`npm start` 或 `lite-server`启动服务
4. 启动成功后，lite-server会自动打开默认浏览器

## lite-server参考文档
[lite-server](https://www.npmjs.com/package/lite-server "node服务")