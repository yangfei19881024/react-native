#react-native
+ (react)[react-native|es6]
+ [getstart](https://facebook.github.io/react-native/docs/getting-started.html#content)
+ [官网教程](https://facebook.github.io/react-native/)

##安装软件
+ homebrew
+ brew install watchman
+ brew install flow
+ npm install react-native-cli -g
+ react-native init 你的项目名

##安装遇到的问题
+ **Nodejs 版本 必须4.0以上**，低于4.0 Xcode build failure
+ 使用 es6 语法报错 解决方法: 根目录新建 .babelrc 文件，内容如下

```
{
	"whitelist":[
		"es6.modules"
	]
}
```
