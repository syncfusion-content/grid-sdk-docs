---
layout: post
title: ASP.NET MVC Grid Avoid TypeScript Compilation | Syncfusion
description: Learn how to prevent TypeScript compilation in ASP.NET MVC Data Grid by updating the csproj file and avoiding build errors.
platform: grid-sdk
control: Avoid Typescript Compilation
publishingplatform: grid-sdk
documentation: ug
---

# Avoid TypeScript Compilation in ASP.NET MVC Data Grid

**Syncfusion.EJ2.Javascript** includes typescript declaration files. If your application is not configured to compile typescript then exception may occur. To resolve this we need to prevent the typescript compilation during MS build process by adding the below line in **.csproj** file.

```cs

<PropertyGroup>
    <TypeScriptCompileBlocked>True</TypeScriptCompileBlocked>
</PropertyGroup>

```