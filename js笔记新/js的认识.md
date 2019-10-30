---
JavaScript
---

## JavaScript的认识

#### 历史

Javascript诞生于1995.5月

Javascript之父Brendan.Eich 10天 完成任务的心态

最初是叫LiveScript(活力脚本) 傍大牌 营销手段

javascript与java没有一毛钱关系。  北大和北大青鸟   ，  雷锋和雷峰塔；

几个月后，微软推出IE3  Jscript；

微软的哲学观：当别人火了以后，就要自己捣鼓一个差不多的东西出来，并且这个东西还不好使，过段时间就没人请学，这时候才想着回头来兼容别人的东西，并且还兼容不好。

​	

​	javascript提交给了Ecma International（一个欧洲的标准化组织），在1997年这个组织就推出了EcmaScript的第一个版本

 

#### 	ECMAScript

> ECMAScript是javascript语音的标准。

​	2003年之前有一个外号：牛皮癣。  

​	2004年：google从js的内部发现了一个对象，ajax，用来进行异步操作；用来提升用户体验。

​	2008年，google推出chrome浏览器。搭载是google自行开发的V8引擎。

​	2009年，jquery是js的一个库，开始流行起来。

​	2010年，canvas画布这个技术，得到了很多浏览器的支持。

​	2011年，nodejs得到广泛的运用。

​	2015年，ECMAScript的第6个版本发布。ES2015



#### 前端三层

结构层：html标签

表现层：css

行为层：js



## 基础知识

#### 一、js代码放置位置

1. js代码写在script标签里面
2. Script的位置是任意的，一般写在body结束标签之前。



#### 二、弹窗

有三种默认弹窗方式，弹窗、确定、输入内容

```js
// 这样返回的一个值是 undefined，说明执行完就被回收了
alert(1);

// 有确定和取消按钮 点击确定返回true(真)，点击取消返回false(假)
console.log(confirm('你确定这样做吗'));

// 点击确定返回输入框的内容，点击取消返回null(空)
prompt('请输入你的用户名');
```

**注意：**定义变量不赋值（系统会在内部默认赋值undefined）



#### 三、注释

js的注释有单行和多行注释

```js
// 我是一个单行注释

/*
我这个中间
内容是多行
注释
*/
```



#### 四、console

作为调试的第一选择，调试的一种方式



## 操作DOM

#### 一、获取元素

```js
// 通过id获取元素
document.getElementById( 'box' );
```

在js里面，对象 = 标签 = 节点 = 元素

**独有标签不需要获取，直接拿来用**

body title head 这是独有标签

document.body  document.head

document.title **注意：**title获取的时候，不是标签，而是这个标签的innerHTML















