---
layout: post
title: Global local in JavaScript Treegrid control | Syncfusion
description: Learn here all about Global local in Syncfusion JavaScript Treegrid control of Syncfusion Essential JS 2 and more.
platform: grid-sdk
control: Global local 
publishingplatform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Global local in JavaScript Treegrid control

## Localization

The [`Localization`](../common/localization) library allows you to localize default text content of the TreeGrid. The treegrid component has static text on some features (like toolbar area text, filter menu text, pager information text, etc.) that can be changed to other cultures (Arabic, Deutsch, French, etc.) by defining the
[`locale`](../api/treegrid/#locale) value and translation object.

The following list of properties and its values are used in the treegrid.

Locale keywords |Text
-----|-----
EmptyRecord | No records to display
True | true
False | false
ExpandAll | Expand All
CollapseAll | Collapse All
RowIndent | Indent
RowOutdent | Outdent
InvalidFilterMessage | Invalid Filter Data
FilterbarTitle | \s filter bar cell
Add | Add
Edit| Edit
Cancel| Cancel
Update| Update
Delete | Delete
Print | Print
Pdfexport | PDF Export
Excelexport | Excel Export
Wordexport | Word Export
Csvexport | CSV Export
Search | Search
Save | Save
EditOperationAlert | No records selected for edit operation
DeleteOperationAlert | No records selected for delete operation
SaveButton | Save
OKButton | OK
CancelButton | Cancel
EditFormTitle | Details of
AddFormTitle | Add New Record
ConfirmDelete | Are you sure you want to Delete Record?
SearchColumns | search columns
Matchs | No Matches Found
FilterButton | Filter
ClearButton | Clear
StartsWith | Starts With
EndsWith | Ends With
Contains | Contains
Equal | Equal
NotEqual | Not Equal
LessThan | Less Than
LessThanOrEqual | Less Than Or Equal
GreaterThan | Greater Than
GreaterThanOrEqual | Greater Than Or Equal
ChooseDate | Choose a Date
EnterValue | Enter the value
autoFitAll | Auto Fit all columns
autoFit | Auto Fit this column
Export | Export
FirstPage | First Page
LastPage | Last Page
PreviousPage | Previous Page
NextPage | Next Page
SortAscending | Sort Ascending
SortDescending | Sort Descending
EditRecord | Edit Record
DeleteRecord | Delete Record
Above | Above
Below | Below
AddRow | Add Row
FilterMenu | Filter
SelectAll | Select All
Blanks | Blanks
FilterTrue | True
FilterFalse | False
NoResult | No Matches Found
ClearFilter | Clear Filter
NumberFilter | Number Filters
TextFilter | Text Filters
DateFilter | Date Filters
MatchCase | Match Case
Between | Between
CustomFilter | Custom Filter
CustomFilterPlaceHolder | Enter the value
CustomFilterDatePlaceHolder | Choose a date
AND | AND
OR | OR
ShowRowsWhere | Show rows where:
currentPageInfo | {0} of {1} pages
totalItemsInfo | ({0} items)
firstPageTooltip | Go to first page
lastPageTooltip | Go to last page
nextPageTooltip | Go to next page
previousPageTooltip | Go to previous page
nextPagerTooltip | Go to next pager
previousPagerTooltip | Go to previous pager
pagerDropDown | Items per page
pagerAllDropDown | Items
All | All

### Loading translations

To load translation object in an application, use [`load`](../api/base/l10n/#load) function of the `L10n` class.

The following example demonstrates the TreeGrid in `Deutsch` culture.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/javascript/treegrid/internationalization-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/treegrid/internationalization-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/treegrid/internationalization-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/treegrid/internationalization-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/treegrid/internationalization-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/treegrid/internationalization-cs1" %}
{% endif %}

### Localization of dependent components in TreeGrid

When localizing TreeGrid, it's important to include dependent components like DatePicker, Form Validator, and Grid, as they have their own static text that requires localization. Follow these steps to localize these components:

1. **DatePicker**: Localize placeholders, "today" text, etc., using the [DatePicker localization keys](https://ej2.syncfusion.com/javascript/documentation/datepicker/globalization)

    Example localization keys for the date picker:
    ```json
   "datepicker": {
            "placeholder": "Wählen Sie ein Datum",
            "today": "heute"
        }
    ```


2. **Form Validator**: Localize validation messages (e.g., required fields, email validation) using the [Form Validator localization keys](https://ej2.syncfusion.com/documentation/form-validator/localization).

    Example keys for form validation localization:
    ```json
    "formValidator":{
        "required": "This field is required",
        "email": "Please enter a valid email address",
        "minLength": "Please enter at least {0} characters"
    }
    ```
3. **Grid Keys**: For additional TreeGrid-related keys, use the [Grid localization keys](https://ej2.syncfusion.com/javascript/documentation/grid/global-local#localization).

   Example keys for grid keys localization:
    ```json
    "grid" :{
        "True": "true",
        "False": "false",
        "Item": "item",
        "Items": "items",
        "OKButton": "OK",
    }
    ```



    Below is an example JSON snippet consolidating the localization keys for dependent components used in TreeGrid using  [`load`](../api/base/l10n/#load) function of the `L10n` class and update the `locale` property of treegrid with the culture name used in the `load` function:

    ```json
    L10n.load({

        'de-DE': {

        "datepicker": {
                "placeholder": "Wählen Sie ein Datum",
                "today": "heute"
            },

        "formValidator":{
            "required": "This field is required",
            "email": "Please enter a valid email address",
            "minLength": "Please enter at least {0} characters"
        },

        "grid" :{
            "True": "true",
            "False": "false",
            "Item": "item",
            "Items": "items",
            "OKButton": "OK",
        }
    }
    });
    ```

## Internationalization

The [`Internationalization`](../common/internationalization) library is used to globalize number, date, and time values in treegrid component using format strings in the [`columns.format`](../api/treegrid/column/#format).

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/javascript/treegrid/internationalization-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/treegrid/internationalization-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/treegrid/internationalization-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/treegrid/internationalization-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/treegrid/internationalization-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/treegrid/internationalization-cs2" %}
{% endif %}

> * In the above sample, `Price` column is formatted by `NumberFormatOptions`.
> * By default, [`locale`](../api/treegrid/#locale) value is `en-US`. If you want to change the `en-US` culture to a different culture, you have to change  the [`locale`](../api/treegrid/#locale) accordingly.

## Right to left (RTL)

RTL provides an option to switch the text direction and layout of the TreeGrid component from right to left. It improves the user experiences and accessibility for users who use right-to-left languages (Arabic, Farsi, Urdu, etc.). To enable RTL Grid, set the [`enableRtl`](../api/treegrid/#enablertl) to true.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/javascript/treegrid/internationalization-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/treegrid/internationalization-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/treegrid/internationalization-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/treegrid/internationalization-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/treegrid/internationalization-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/treegrid/internationalization-cs3" %}
{% endif %}

## See Also

* [Internationalization](../common/internationalization)
* [Localization](../common/localization)

> You can refer to our [`JavaScript Tree Grid`](https://www.syncfusion.com/javascript-ui-controls/js-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our JavaScript Tree Grid example [`JavaScript Tree Grid example`](https://ej2.syncfusion.com/demos/#/bootstrap5/tree-grid/treegrid-overview.html) to knows how to present and manipulate data.
