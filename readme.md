因为uni-app或者原生小程序， 使用了自定义的tabbar组件，这种组件的核心，都是使用了switchTab进行跳转的，但是switchTab会出现一个问题，就是闪屏

闪屏的原因是，触发的时候，会发出一个请求，去服务器重新请求一下目标页面的文件，然后再渲染出来，造成了闪屏

于是，可以考虑一种办法，去掉这次请求，就不会闪屏了

参考vue一开始的单页面的解决方式，考虑将所有的tabbar页面，放进同一个页面，这样切换页面就不会有新的页面请求和闪屏了

本质上，这种方式，是将本来的tabbar页面，变成一个合并页面的组件，通过v-if来和display:block/display:none；来控制当前展示某个组件，做成页面切换类似的效果即可，将多个tabbar页面，合并为一个小型的单页面应用

但是，本身来说，身为页面，会有正常的页面周期，所以，作为组件，也需要有页面的页面周期

为了解决周期问题，目前想到的解决方案是，通过本身页面的分流，来讲周期分流道对应组件中的methods中，这样，就可以完成子页面（原来的tabbar页面，也就是合并页面的组件）要有页面生命周期的需求

 [点击查看demo](https://github.com/MrXiaoHan/uni_app_switchTab_not_flicker)
 
 
 
 
声明：

1. 此方案可以突破自定义tabbar闪屏的问题
2. 此方案可以突破微信的tabbar数量限制（2-5个）
3. 此方案与uniapp及微信设计小程序的思路相反（框架主张多页面，但是此方案为单页面方式）
4. 由于多页面合并为单页面应用，性能一定不如单独的多个页面的性能
5. 注意生命周期的分流，demo只写了onShow和onLoad分流，其他生命周期可以参考这两个
6. 注意生命周期的分流，demo只写了onShow和onLoad分流，其他生命周期可以参考这两个
7. 注意生命周期的分流，demo只写了onShow和onLoad分流，其他生命周期可以参考这两个
8. 如果喜欢，可以点个star哈
9. 此方案只是提供个思路，不喜勿喷，如有更好的解决方案或者不太理解的地方，可以加本人qq：1546923394。
10. [点击加入qq群讨论技术或解答问题或提出问题](https://shang.qq.com/wpa/qunwpa?idkey=d840aa4d3c8073c6909e1e3c4d7f93556914827b59b6293d1c31e2233ca840dd)