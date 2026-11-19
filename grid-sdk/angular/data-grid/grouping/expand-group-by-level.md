---
layout: post
title: Expand group by level in Angular Data Grid | Syncfusion
description: Learn how to expand grouped rows by level, expand specific groups using a callback, and keep group caption rows sticky in the Syncfusion Angular Data Grid.
control: Expand group by level
platform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Expand group by level in Angular Data Grid

When data is grouped by multiple columns, the Grid renders a hierarchy of group caption rows. By default, all groups are rendered in an expanded state. The [groupSettings](https://ej2.syncfusion.com/angular/documentation/api/grid/groupSettings) property provides options to control which groups are open initially and to keep the caption row of an expanded group visible while scrolling.

## Expanding by group level

Use the [defaultExpanded](https://ej2.syncfusion.com/angular/documentation/api/grid/groupSettings#defaultexpanded) property to expand the groups down to a specific level. A group level starts from `1` for the first grouped column. Providing a number expands all groups down to that level, and the groups below it remain collapsed. Providing `-1` expands all the groups, and `0` collapses all of them.

In the following example, the Grid is grouped by `ShipCountry` and `ShipCity`. Setting `defaultExpanded` to `1` expands the `ShipCountry` groups, while the `ShipCity` groups remain collapsed.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid-sdk/angular/grid/group-expand-level-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid-sdk/angular/grid/group-expand-level-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/samples/grid-sdk/angular/data-grid/group-expand-level-cs1" %}

## Expanding via callback

To decide granularly which groups should be expanded, use the [isGroupOpenByDefault](https://ej2.syncfusion.com/angular/documentation/api/grid/groupSettings#isgroupopenbydefault) callback. The callback is invoked for each group caption row and returns `true` to expand the group, or `false` to keep it collapsed. The callback argument provides the `field`, `key` and `level` of the group being rendered.

In the following example, only the `Germany` group at the first level is expanded by default.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid-sdk/angular/grid/group-expand-callback-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid-sdk/angular/grid/group-expand-callback-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/samples/grid-sdk/angular/data-grid/group-expand-callback-cs1" %}

> * Group keys are unique only within their parent group. Check the `level` along with the `key`, as shown above, to identify a group exactly.
> * When `isGroupOpenByDefault` is defined, it takes precedence over `defaultExpanded` for the groups it is invoked for.

## Sticky group caption row

When scrolling through an expanded group, the `enableSticky` property of [groupSettings](https://ej2.syncfusion.com/angular/documentation/api/grid/groupSettings#enablesticky) keeps the caption row of the current group fixed at the top of the content area, so the user always knows which group the visible records belong to. Set it to `true` to enable the behavior.

The following example expands the first level of groups and keeps the caption row sticky while scrolling.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid-sdk/angular/grid/group-sticky-caption-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid-sdk/angular/grid/group-sticky-caption-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/samples/grid-sdk/angular/data-grid/group-sticky-caption-cs1" %}

> The Grid must have a fixed [height](https://ej2.syncfusion.com/angular/documentation/api/grid#height) so that the content area is scrollable and the sticky caption row can be observed.
