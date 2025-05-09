# Angular学习

> `Angular` 是一个基于`TypeScript` 的开源 Web 应用框架由 `Google` 的 Angular 团队以及社区共同领导。

✨最难的框架,但是我有能力去做到最好!

## 安装

```bash
npm install -g @angular/cli
```

## 使用

```bash
ng new myangular
```

## 启动项目

```bash
ng serve --open
```

## Angular 组件

你所看到的这个页面就是*应用的外壳*。 这个外壳是被一个名叫 `AppComponent` 的 Angular 组件控制的。

*组件*是 Angular 应用中的基本构造块。 它们在屏幕上显示数据，监听用户输入，并且根据这些输入执行相应的动作。

## 修改应用标题

用你最喜欢的编辑器或 IDE 打开这个项目，并访问 `src/app` 目录。

你会在这里看到 `AppComponent` 壳的三个实现文件：

1. `app.component.ts`— 组件的类代码，这是用 TypeScript 写的。
2. `app.component.html`— 组件的模板，这是用 HTML 写的。
3. `app.component.css`— 组件的私有 CSS 样式。

打开组件的类文件 (`app.component.ts`)，并把 `title` 属性的值修改为 `'helloworld'`。

```javascript
title = 'helloworld';
```

打开组件的模板文件 `app.component.html` 并清空 Angular CLI 自动生成的默认模板。改为下列 HTML 内容：

```javascript
<h1>{{title}}</h1>
```

双花括号语法是 Angular 的*插值绑定*语法。 这个插值绑定的意思是把组件的 `title` 属性的值绑定到 HTML 中的 `h1` 标记中。

浏览器自动刷新，并且显示出了新的应用标题。

> 同时我们可以在外层的`style.less`设置我们的全局样式