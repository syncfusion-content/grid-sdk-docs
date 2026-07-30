---
layout: post
title: Get or set local storage value in TypeScript Treegrid control | Syncfusion
description: Learn here all about Get or set local storage value in Syncfusion TypeScript Treegrid control of Syncfusion Essential JS 2 and more.
platform: grid-sdk
control: Get or set local storage value 
publishingplatform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Get or set local storage value in TypeScript Treegrid control

If the [`enablePersistence`](../../api/treegrid/#enablepersistence) property is set to true, the treegrid property value is saved in the `window.localStorage` for reference. You can get/set the localStorage value by using the `getItem`/`setItem` method in the `window.localStorage`.

```ts
//get the TreeGrid model.
let value: string = window.localStorage.getItem('treegridTreeGrid'); //"treegridTreeGrid" is component name + component id.
let model: Object = JSON.parse(model);

```

```ts
//set the TreeGrid model.
window.localStorage.setItem('treegridTreeGrid', JSON.stringify(model)); //"treegridTreeGrid" is component name + component id.

```
