### 使用在iframe中内嵌一个动态生成的指向与父页面同域的iframe实现跨域
--------------------------------------------------

## 文件列表

### A域（父页面）中的文件
* cross_domain_transfer.html 实现跨域的关键文件，B域要指向的目标跨域跳转页面URL ；
* Parent.html  A域示例页面，内嵌iframe指向B域 。

### B域（子页面）中的文件
* crossdomain.js 实现跨域的关键文件，用于动态生成跳转的iframe；
    
      var crossDomain = new CrossDomain('<A domain>/cross_domain_transfer.html');  //初始化跨域类，传入目标域的跨域跳转页面URL
      crossDomain.visit(' parent.somefunction(args...)');

* iframe.html B域示例页面，嵌入到A域Parent.html的iframe中  。