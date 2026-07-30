---
layout: post
title: Toolbar in ASP.NET MVC Grid Component
description: Learn here all about Toolbar in Syncfusion ASP.NET MVC Grid component of Syncfusion Essential JS 2 and more.
platform: grid-sdk
control: Toolbar
publishingplatform: grid-sdk
documentation: ug
---

# Toolbar in ASP.NET MVC Grid component

You can customize the appearance of the toolbar in the Syncfusion ASP.NET MVC Grid component using CSS. Here are examples of how to customize the toolbar root element and toolbar button element.

## Customizing the toolbar root element

To customize the appearance of toolbar root element, you can use the following CSS code:

```css
.e-grid .e-toolbar-items {
    background-color: #deecf9;
}
```

In this example, the **.e-toolbar-items** class targets the background color of the toolbar root element. You can modify the `background-color` property to change the background color of the toolbar.

![Grid toolbar root element](../images/style-and-appearance/grid-toolbar-root-element.png)

## Customizing the toolbar button element

To customize the appearance of toolbar buttons, you can use the following CSS code:

```css
.e-grid .e-toolbar .e-btn {
    background-color: #deecf9;
}
```
In this example, the **.e-toolbar .e-btn** selector targets the background color of the toolbar button elements. You can modify the `background-color` property to change the background color of the toolbar buttons.

![Grid toolbar button element](../images/style-and-appearance/grid-toolbar-button-element.png)