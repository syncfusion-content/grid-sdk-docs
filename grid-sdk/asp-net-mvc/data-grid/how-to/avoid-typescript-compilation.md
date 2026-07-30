---
layout: post
title: Avoid TypeScript Compilation in the Syncfusion Grid Component for ASP.NET MVC
description: Learn here all about Avoid Typescript Compilation in Syncfusion ASP.NET MVC Grid component of Syncfusion Essential JS 2 and more.
platform: grid-sdk
control: Avoid Typescript Compilation
publishingplatform: grid-sdk
documentation: ug
---

# Avoid TypeScript Compilation

**Syncfusion.EJ2.Javascript** includes typescript declaration files. If your application is not configured to compile typescript then exception may occur. To resolve this we need to prevent the typescript compilation during MS build process by adding the below line in **.csproj** file.

```cs

<PropertyGroup>
    <TypeScriptCompileBlocked>True</TypeScriptCompileBlocked>
</PropertyGroup>

```