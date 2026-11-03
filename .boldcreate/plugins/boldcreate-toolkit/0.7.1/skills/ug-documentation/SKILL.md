# UG Documentation Skill

Create, review, update, and maintain User Guide (UG) documentation for Syncfusion Blazor components with evidence-based accuracy and repository-ready quality.

**Level**: Advanced  
**Duration**: Variable by scope  
**Complexity**: High  
**Categories**: Documentation, Syncfusion, Blazor

---

## What This Skill Does

This skill produces Syncfusion User Guide documentation that is:

- **Repository-ready**: Can be committed with minimal or no edits
- **Evidence-based**: Every API, event, and behavior is traceable to source code
- **Standards-compliant**: Follows existing Syncfusion Blazor documentation patterns
- **Assumption-free**: Explicitly identifies missing information instead of guessing
- **SEO-optimized**: Naturally incorporates keywords without stuffing
- **Beginner-friendly**: Written for developers of all levels

The skill handles three documentation scenarios:

1. **Existing Corrections** – Fix or update existing documentation
2. **New Features** – Document new Blazor component capabilities
3. **Enhancements** – Document improvements to existing features

---

## When to Use This Skill

Use this skill when you need to:

- Document a new Syncfusion Blazor feature or component capability
- Update existing documentation due to API changes or behavioral updates
- Create documentation for feature enhancements or extensions
- Document events, APIs, or sub-features with enterprise-grade quality
- Generate documentation that follows Syncfusion standards exactly

---

## When NOT to Use This Skill

Do NOT use this skill when:

- Source code/API details are unavailable (identify missing info first)
- You lack access to the component's feature implementation
- The feature is not yet finalized or is under design discussion
- No related documentation exists to establish patterns

In these cases, escalate and provide the required source materials.

---

## Skill Workflow

### Phase 1: Mandatory Analysis

Before generating any documentation content:

#### 1.1 Analyze Existing Patterns

Search the Syncfusion Blazor documentation repository for similar features:

```bash
# Find related documentation pages
find . -path "*blazor*" -name "*.md" -type f | grep -i "feature-name"

# Look for event documentation examples
find . -path "*blazor*" -name "*.md" -type f | grep -i "events"

# Find API documentation patterns
find . -path "*blazor*" -name "*.md" -type f | grep -i "api"
```

Example reference: https://help.syncfusion.com/grid-sdk/blazor/data-grid/sorting#sorting-events

From the related documentation, identify:

- Metadata format (title, description, keywords, uid, permalink)
- H1 structure
- Introduction pattern
- Content hierarchy
- Feature explanation style
- Event documentation style
- API documentation style
- Code sample structure
- Note/Tip/Info conventions
- Cross-linking patterns
- SEO practices

**Output**: Document your findings in a pattern analysis before proceeding.

#### 1.2 Classify the Documentation Request

Determine the documentation type:

- **New Feature** – Entirely new capability being added to a component
- **Feature Enhancement** – Improvement or extension of existing functionality
- **Behavioral Update** – Change in how a feature works
- **Event Documentation** – New or updated event details
- **API Documentation** – New or updated properties, methods, parameters
- **Sub-feature Documentation** – Documentation for a nested or dependent feature
- **Breaking Change** – Documentation of incompatible API changes
- **Migration Documentation** – Guide for updating from old to new API
- **Feature Deprecation** – Documentation of removed or obsolete features

**Output**: State the classification and provide reasoning.

#### 1.3 Establish Source Priority

Gather information ONLY from these sources in priority order:

1. **Component source code** – The actual C# implementation
2. **Feature implementation code** – Feature-specific logic
3. **Event argument classes** – Event parameter definitions
4. **API reference** – Official API documentation
5. **Existing User Guide documentation** – Related documented features
6. **Feature specification** – Product requirements or design docs
7. **Approved product requirements** – PRDs or specs

**Do not use assumptions.** If a source is unavailable, mark it as "Verification Required."

**Output**: List the sources you will use and their locations.

---

### Phase 2: Evidence Gathering

For each documented element (API, event, behavior), verify the source:

#### 2.1 Source Code Verification

For APIs and events, locate the source file:

```bash
# Find component source files
find . -path "*Components*" -name "*.cs" -type f | grep -i "ComponentName"

# Search for event definitions
grep -r "public event EventHandler<" . --include="*.cs"

# Search for property definitions
grep -r "public.*{.*get;.*set;.*}" . --include="*.cs"
```

**Extract and document**:

- Property names and types
- Event names and handler types
- Method signatures and return types
- Default values (from initialization)
- Accepted values (from validation or enum types)
- Behavioral descriptions (from implementation logic)

#### 2.2 Event Argument Verification

For events, locate the event arguments class:

```bash
# Find event argument classes
find . -name "*EventArgs.cs" -o -name "*Args.cs" | grep -i "FeatureName"
```

**Extract**:

- Property names, types, and descriptions
- Required vs optional parameters
- Default values
- Validation rules

#### 2.3 API Reference Verification

Cross-reference with official Syncfusion API documentation:

- Component API reference
- Method signatures
- Property descriptors
- Return type documentation

#### 2.4 Existing Documentation Patterns

Locate 2-3 similar existing documentation pages to extract patterns:

```bash
# Find similar feature documentation
find . -path "*user-guide*" -name "*.md" | grep -i "similar-feature"
```

**Extract patterns for**:

- Metadata structure
- Section headings
- Code sample format
- Note/tip conventions
- Cross-link style
- Example structure

**Output**: Create an evidence summary with:
- Each verified API/event
- Source file and line number
- Extracted details
- Verification confidence

---

### Phase 3: Assessment

#### 3.1 Complete Documentation Assessment

For each section needed, determine if you have sufficient information:

```
Section: Event Documentation
Status: ✓ VERIFIED
Source: /Components/DataGrid/GridEvents.cs line 145
Details: EventName, Handler type, EventArgs class location
Action: Proceed with documentation

Section: API Documentation – Property XYZ
Status: ✗ VERIFICATION REQUIRED
Missing: Default value source, validation rules
Source Location Searched: /Components/DataGrid/GridProperties.cs
Action: Request missing information
```

#### 3.2 Gap Analysis

Identify all missing information:

```
Missing Information:
1. Default value for ShowGroupDropArea (searched source, not found in initialization)
2. List of accepted values for GroupDropAreaPosition (enum location needed)
3. Event firing order when multiple events occur
```

#### 3.3 Proceed or Escalate Decision

- **Proceed**: If 90%+ of required information is verified
- **Escalate**: If critical information is missing (API details, event arguments, default values)

**Output**: Documentation Assessment Report

---

### Phase 4: Content Generation

#### 4.1 Section: What is This Feature?

Write one concise paragraph that:

- Defines the feature in plain English
- Explains what problem it solves
- Avoids marketing language
- Targets beginners first

**Example**:

> Sorting allows users to arrange DataGrid rows in ascending or descending order based on one or more columns. This helps users quickly locate data and analyze information organized by specific criteria.

#### 4.2 Section: Why Would a Developer Use It?

Provide 2-3 real-world use cases:

- E-commerce scenarios (sort by price, rating, date)
- Business dashboards (sort by metrics, dates, categories)
- Data analysis workflows (sort by values, frequency, regions)
- Admin interfaces (sort by user activity, status, timestamps)

**Example**:

> You might use sorting when:
> - Displaying a product catalog and allowing customers to sort by price or popularity
> - Managing user accounts in an admin panel sorted by registration date or activity status
> - Analyzing sales data sorted by region, date, or revenue to identify trends

#### 4.3 Section: What Developer Problem Does It Solve?

Explain the limitation before the feature:

**Example**:

> Without built-in sorting, developers must manually manage row order in code, requiring custom logic for each data type and sort direction. This increases complexity and performance impact for large datasets. The built-in sorting feature handles these concerns automatically.

#### 4.4 Section: How Does It Work?

Explain the feature workflow:

- User interactions that trigger the feature
- Component behavior in response
- Configuration required
- Dependencies or prerequisites

**Example**:

> When sorting is enabled, users can click column headers to sort that column in ascending order. Clicking again reverses to descending order. Multiple columns can be sorted simultaneously by holding Ctrl while clicking additional columns. The component maintains sort state and can be sorted programmatically using the SortBy API.

#### 4.5 Section: Feature Explanation (Detailed)

For each major capability, create a subsection:

```markdown
### [Capability Name]

Brief explanation of what this capability enables.

#### How It Works

Step-by-step or conceptual explanation of the workflow.

#### Configuration

Required or optional API calls/properties to enable this capability.

#### Example

Code sample demonstrating usage (if API is verified).
```

#### 4.6 Section: Events Documentation

For each event, use this template:

```markdown
## [EventName]

### Description

One-sentence explanation of what the event represents.

### When It Occurs

Precise timing or condition that triggers the event:
- "Occurs immediately after a user clicks the sort button"
- "Fires when the sort column changes programmatically"
- "Raised when sort direction transitions from ascending to descending"

### Why Use This Event

Practical use cases for handling this event:
- Validating sort requests before applying
- Logging sort changes for analytics
- Updating dependent UI elements when sort changes

### Event Arguments

| Property | Type | Description |
|----------|------|-------------|
| Column | string | Name of the column being sorted |
| Direction | SortDirection | The sort direction (Ascending/Descending) |

**Source**: Verify each property in the event arguments class

### Example

```csharp
<SfGrid @ref="GridRef" DataSource="@Orders">
    <GridEvents OnSorting="@OnSortingHandler"></GridEvents>
    <GridColumns>
        <GridColumn Field="OrderID" Header="Order ID"></GridColumn>
    </GridColumns>
</SfGrid>

@code {
    SfGrid<OrderData> GridRef;

    private void OnSortingHandler(SortingEventArgs args)
    {
        Console.WriteLine($"Sorting by {args.Column} in {args.Direction} order");
    }
}
```

**Source Verification**: Confirm event name, handler signature, and event arguments from source code.
```

#### 4.7 Section: API Documentation

For each property or method, use this template:

```markdown
## [PropertyName]

### Description

Explain the purpose of this API in one sentence.

### Type

`ReturnType` or parameter type

### Default Value

Verified default value or "None"

### Accepted Values

- List specific values if enum
- Describe constraints if numeric
- Explain valid types if complex

### Remarks

Additional behavioral information:
- When this property is used
- Constraints or limitations
- Related properties
- Performance considerations (if relevant)

### Related APIs

- [RelatedAPI1](link)
- [RelatedAPI2](link)

### Example

```csharp
<SfGrid DataSource="@Orders" AllowSorting="true">
    <GridColumns>
        <GridColumn Field="OrderID" AllowSorting="true"></GridColumn>
    </GridColumns>
</SfGrid>
```

**Source Verification**: Property exists in GridColumn.cs, default value confirmed in documentation
```

#### 4.8 Code Sample Requirements

Generate code samples ONLY when:

✓ All APIs are verified in source code  
✓ Event names are confirmed  
✓ Event handler signatures are verified  
✓ Property types and defaults are confirmed  
✓ Example is realistic and production-grade  

Do NOT generate code when:

✗ Any API is unverified  
✗ Event signatures are unknown  
✗ Default behaviors are assumed  
✗ Examples would require API assumptions  

**Code Sample Standards**:

- Include required using statements
- Show complete component setup
- Include all required properties
- Demonstrate event wiring if applicable
- Include backing C# code
- Be compilation-ready
- Be production-quality
- Omit unnecessary complexity

---

### Phase 5: Documentation Structure

#### 5.1 Metadata Block

Create a YAML metadata block following the repository standard:

```yaml
---
layout: post
title: [Feature Name] in Blazor [Component Name]
description: Learn how to use [Feature Name] in the Syncfusion Blazor [Component] component for [use case]. Includes examples and API documentation.
platform: Blazor
control: [Component Name]
documentation: ug
---
```

**Validation**:
- [ ] title follows pattern: "[Feature] in Blazor [Component]"
- [ ] description includes feature name, component name, use case
- [ ] platform is "Blazor"
- [ ] control matches component name
- [ ] documentation is "ug"

#### 5.2 H1 Heading

Single H1 using the format:

```markdown
# [Feature Name] in Blazor [Component Name]
```

Examples:
- # Sorting in Blazor DataGrid
- # Column Chooser in Blazor DataGrid
- # Grouping in Blazor TreeGrid

#### 5.3 Introduction

One paragraph (2-3 sentences) that:
- Defines the feature
- Explains its benefit
- Sets reader expectations

#### 5.4 Table of Contents

Sections typically follow this order:

1. What is [Feature Name]?
2. Why use [Feature Name]?
3. Enabling [Feature Name]
4. [Capability 1]
   - How it works
   - Configuration
   - Example
5. [Capability 2]
   - How it works
   - Configuration
   - Example
6. Events
   - [EventName1]
   - [EventName2]
7. API Reference
   - Properties
   - Methods
   - Event Arguments
8. Keyboard Interaction (if applicable)
9. Accessibility (if applicable)
10. See Also / Related Resources

Adjust based on feature complexity.

#### 5.5 SEO Optimization

Natural incorporation of keywords:

- Feature name (2-3 times in first 200 words)
- Component name (2-3 times naturally)
- "Blazor" (1-2 times)
- Specific capabilities (naturally throughout)

Avoid:
- Keyword stuffing
- Awkward phrasing
- Repeated keywords

**Example**: Instead of "Sorting Blazor component sorting data", write "The Syncfusion Blazor DataGrid component includes built-in sorting capabilities that allow users to arrange rows by any column."

---

### Phase 6: Cross-Linking and References

#### 6.1 Identify Related Documentation

For each feature, identify:

- **Getting Started** guide for the component
- **Events** documentation page (if separate)
- **API Reference** page
- **Related Features** (e.g., "Also see: Filtering", "Also see: Grouping")
- **Similar Components** (e.g., TreeGrid if documenting DataGrid)

#### 6.2 Verify URLs

Use only verified URLs from:

```bash
# Search documentation directory structure
find . -path "*blazor*" -name "*.md" | grep -i "feature-or-component"

# Check URL patterns in existing documentation
grep -r "](/.*)" *.md | head -10
```

Never invent URLs. If a related page doesn't exist, do not link to it.

#### 6.3 Link Format

```markdown
### Related Topics

- [Sorting in Blazor DataGrid](/grid-sdk/blazor/data-grid/sorting)
- [Filtering in Blazor DataGrid](/grid-sdk/blazor/data-grid/filtering)
- [Getting Started with DataGrid](/grid-sdk/blazor/data-grid/getting-started)
```

---

### Phase 7: Repository Awareness

#### 7.1 Determine Documentation Location

Identify where the documentation should live:

```bash
# Explore documentation structure
tree . -d -L 3 | grep -i "blazor\|user-guide"

# Find similar documentation
find . -name "*sorting*" -o -name "*filtering*" | head -10

# Check existing feature documentation
ls -la docs/blazor/components/data-grid/
```

**Determine**:

1. Is this updating an existing file or creating a new file?
2. What is the parent section/category?
3. What should the file path be?

**Example Decision**:

```
Existing Correction: Updating docs/blazor/components/data-grid/sorting.md
New Feature: Creating docs/blazor/components/data-grid/grouping.md
Enhancement: Updating docs/blazor/components/combo-box/filtering.md
```

#### 7.2 Table of Contents (TOC) Updates

If creating a new file, identify the TOC file that needs updating:

```bash
# Find TOC files
find . -name "toc.yml" -o -name "toc.yaml" -o -name "_category_.json"

# Examine TOC structure
cat docs/blazor/components/data-grid/toc.yml
```

**Provide exact changes**:

```yaml
# BEFORE
- name: API Reference
  href: api/

# AFTER
- name: Grouping
  href: grouping.md
- name: API Reference
  href: api/
```

**Specify**:
- TOC file path
- Exact change needed
- Parent node
- Display text

#### 7.3 Avoid Blind TOC Modifications

Show the context and exact change needed so a human can verify:

```
TOC Update Required:
File: docs/blazor/components/data-grid/toc.yml
Location: After "Sorting" entry

Add this entry:
- name: "Grouping"
  href: "grouping.md"

Full context:
  - name: "Sorting"
    href: "sorting.md"
  - name: "Grouping"           <-- NEW
    href: "grouping.md"       <-- NEW
  - name: "Filtering"
    href: "filtering.md"
```

---

### Phase 8: Self-Review Validation

Before finalizing, validate against this checklist:

```
Pre-Submission Validation Checklist
==================================

Content Accuracy
☐ All APIs traced to source code
☐ All events traced to event classes
☐ All properties verified with types and defaults
☐ No behavioral assumptions
☐ Default values confirmed (not guessed)
☐ Event triggering conditions verified
☐ Accepted values confirmed for enums/lists
☐ Return types verified

Code Samples
☐ All samples are verified (APIs exist)
☐ Samples are compilation-ready
☐ Using statements are correct
☐ Blazor syntax is correct
☐ Samples follow Syncfusion conventions
☐ No assumptions in code

SEO & Structure
☐ Single H1 heading present
☐ H1 follows "[Feature] in Blazor [Component]" format
☐ Keywords naturally incorporated (no stuffing)
☐ Content is beginner-friendly
☐ Heading hierarchy is correct (H1 > H2 > H3)
☐ No skipped heading levels

Metadata
☐ Title field SEO-compliant
☐ Description field includes keywords naturally
☐ Metadata format matches repository standard
☐ Platform is "Blazor"
☐ Control field is correct component name

Cross-Linking
☐ All links use verified paths
☐ No broken or invented links
☐ Related topics section included (if applicable)
☐ Links are contextually relevant

Repository Readiness
☐ File location determined
☐ New file vs. update vs. correction identified
☐ TOC updates provided (if needed)
☐ Parent section identified
☐ Markdown formatting is clean
☐ No placeholder text remains

Documentation Standards
☐ Syncfusion conventions followed
☐ Similar to existing documentation style
☐ Note/Tip/Info blocks used correctly
☐ Terminology is consistent
☐ Writing is clear and active voice

Missing Information
☐ All gaps identified explicitly
☐ No "Verification Required" items remain (or justified)
☐ Incomplete sections marked if unable to verify
```

---

### Phase 9: Output Delivery

Return your documentation in this order:

1. **Documentation Classification** – Type and reasoning
2. **Existing Patterns Analysis** – What patterns exist in related docs
3. **Evidence Sources** – List of all sources used with locations
4. **Verification Summary** – Which items are verified, which need verification
5. **Missing Information** – Explicitly listed gaps (if any)
6. **Repository Assessment** – File location, new vs. update, TOC changes
7. **SEO Metadata Validation** – Metadata block validation
8. **Markdown Content** – Complete, ready-to-commit documentation
9. **Cross-Link Recommendations** – Suggested related topics
10. **Self-Review Results** – Validation checklist results
11. **Commit-Ready Status** – "Ready to Commit" or "Needs Review" with reasons

---

## Common Documentation Patterns

### Note/Tip/Info Blocks

```markdown
> **Note** – Use when providing important information or clarification.
> This is the standard format for notes in Syncfusion documentation.

> **Tip** – Use when providing helpful best practices or optimization advice.

> **Important** – Use when highlighting critical information or warnings.
```

### API Documentation Table Format

```markdown
| Property | Type | Default | Description |
|----------|------|---------|-------------|
| AllowSorting | bool | true | Enables sorting on the DataGrid |
| SortMode | SortMode | Single | Gets or sets sort mode (Single or Multiple) |
```

### Feature Capability Subsection

```markdown
### [Capability Name]

Introductory sentence explaining this capability.

#### How It Works

Step-by-step or conceptual explanation.

#### Configuration

Code or instructions to enable.

#### Example

Working code sample (if verified).
```

---

## Example: Full Documentation Output

Here's what a complete documentation output should look like:

```markdown
---
layout: post
title: Sorting in Blazor DataGrid
description: Learn how to use sorting in the Syncfusion Blazor DataGrid component to arrange rows in ascending or descending order. Includes configuration, events, and complete code examples.
platform: Blazor
control: DataGrid
documentation: ug
---

# Sorting in Blazor DataGrid

The Syncfusion Blazor DataGrid component includes built-in sorting that allows users to arrange rows in ascending or descending order based on any column. This helps users quickly locate and analyze data organized by specific criteria.

## Enabling Sorting

To enable sorting on the DataGrid, set the `AllowSorting` property to `true`:

```csharp
<SfGrid DataSource="@Orders" AllowSorting="true">
    <GridColumns>
        <GridColumn Field="OrderID" Header="Order ID"></GridColumn>
        <GridColumn Field="CustomerName" Header="Customer Name"></GridColumn>
    </GridColumns>
</SfGrid>
```

## Single and Multiple Column Sorting

The DataGrid supports sorting by a single column or multiple columns simultaneously.

### Single Column Sorting

By default, users can click a column header to sort that column. Clicking again reverses the sort direction.

### Multiple Column Sorting

Users can sort by multiple columns by holding the Ctrl key while clicking additional column headers. This is controlled by the `SortMode` property:

```csharp
<SfGrid DataSource="@Orders" AllowSorting="true" SortMode="SortMode.Multiple">
    ...
</SfGrid>
```

## Sorting Events

### OnSorting

This event occurs immediately before the sort is applied. Use it to validate or prevent sorting:

```csharp
<SfGrid DataSource="@Orders" AllowSorting="true">
    <GridEvents OnSorting="@OnSortingHandler"></GridEvents>
    ...
</SfGrid>

@code {
    private void OnSortingHandler(SortingEventArgs args)
    {
        Console.WriteLine($"Sorting by {args.Column}");
    }
}
```

### OnSorted

This event occurs after the sort is successfully applied:

```csharp
<GridEvents OnSorted="@OnSortedHandler"></GridEvents>

@code {
    private void OnSortedHandler(SortedEventArgs args)
    {
        Console.WriteLine($"Sorting completed for {args.Column}");
    }
}
```

## API Reference

### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| AllowSorting | bool | true | Enables or disables sorting feature |
| SortMode | SortMode | Single | Gets or sets the sort mode (Single or Multiple) |

### Methods

| Method | Parameters | Description |
|--------|-----------|-------------|
| Sort | string column, SortDirection direction | Sorts the DataGrid by specified column and direction |

## See Also

- [Getting Started with DataGrid](/grid-sdk/blazor/data-grid/getting-started)
- [Filtering in Blazor DataGrid](/grid-sdk/blazor/data-grid/filtering)
- [Grouping in Blazor DataGrid](/grid-sdk/blazor/data-grid/grouping)
```

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Cannot find source code for API | Search component class and related files; if not found, mark as "Verification Required" |
| Event arguments not documented in source | Locate the EventArgs class and extract property definitions |
| Default values not found | Check property initialization, null coalescing, or configuration defaults |
| Code sample uses unverified APIs | Do NOT include the sample; instead mark section as "Code example cannot be generated because..." |
| Existing documentation patterns vary | Follow the most recent or most commonly used pattern in the repository |
| TOC file structure unclear | Show exact before/after change with line numbers; don't modify blindly |

---

## Success Criteria

Your documentation is **repository-ready** when:

1. ✓ Every API is traceable to source code with file/line reference
2. ✓ Every event is verified in the event class
3. ✓ All default values and accepted values are confirmed
4. ✓ No assumptions are made about behavior
5. ✓ Code samples compile and follow Syncfusion patterns
6. ✓ SEO metadata is validated
7. ✓ Heading hierarchy and structure follow Syncfusion standards
8. ✓ Cross-links use verified URLs only
9. ✓ TOC changes are explicitly specified
10. ✓ Self-review validation is complete
11. ✓ Missing information is explicitly listed (if any)

The output should be reviewable by a documentation engineer who can verify sources and commit with confidence.

---

## Next Steps

1. **Gather Requirements** – What documentation is needed? (New feature, correction, enhancement?)
2. **Identify Component** – Which Syncfusion Blazor component?
3. **Locate Sources** – Find component source code, API reference, related docs
4. **Execute Skill Workflow** – Follow phases 1-9 above
5. **Self-Review** – Validate against checklist
6. **Deliver Output** – Provide in the 11-section format
7. **Prepare for Commit** – Documentation is ready for repository integration

---

## References

- Syncfusion Documentation Portal: https://help.syncfusion.com
- Example Pattern Reference: https://help.syncfusion.com/grid-sdk/blazor/data-grid/sorting#sorting-events
- Blazor Syntax Reference: https://docs.microsoft.com/blazor
