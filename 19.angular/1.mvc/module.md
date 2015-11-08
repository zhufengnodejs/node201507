#模块的切分
app
controller directive services routes filter
控制器       指令        服务    路由    过滤器

- 任何一个 angular应用都是从模块开始的，里面可以声明上面这些组件
- 一个ng应用只有一个入口，就是ng-app.
- 入口模块可以依赖其它模块
