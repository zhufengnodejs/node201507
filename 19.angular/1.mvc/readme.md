#angular
MVVM
模块化
双向数据绑定
语义化标签 
依赖注入
指令
服务
#MVC
- 代码规模越来越大
- 为了复用
- 为了重构方便
- MVC只是手段，模块化和复用

一切从模块开始
appModule
appCtrl->$scope

#控制器
- 不要复用controller 一个控制器只控制一个视图
- 不要在controller 操作DOM 在指令里面加
- 不要在控制器做数据格式化,也不要做数据过滤操作
- 不要互相调用控制器，通过事件来实现

#MODEL
- 当创建控制器时，会自动创建一个对应$scope
- $scope是一个JS空对象
- $scope是一个树形结构 ，与DOM标签 平行
- 每个 angular应用都有一个根作用域 $rootScope
- $scope可以传播事件，类似于DOM事件，而且 可向上也可以向下
- $scope是实现双向数据绑定的基础。绑定的时候，先找自己作用域，然后找根作用域。

#视图
- 指DOM元素。类似于模板