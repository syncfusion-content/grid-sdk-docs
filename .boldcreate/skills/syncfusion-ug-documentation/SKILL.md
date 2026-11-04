# Syncfusion UG Documentation Skill

## Overview

This skill provides an end-to-end autonomous framework for creating, reviewing, and maintaining **User Guide (UG) documentation** for Syncfusion components (Blazor, Angular, React, etc.).

The skill ensures all documentation is:
- **Repository-ready** – Minimal or zero edits required
- **Evidence-based** – Every API, event, and behavior is traceable to source code
- **Technically accurate** – No assumptions; missing information is explicitly flagged
- **SEO-compliant** – Follows Syncfusion documentation standards
- **Enterprise-grade** – Production-quality samples and explanations

---

## Target Use Cases

✓ New feature documentation  
✓ Feature enhancement documentation  
✓ Event documentation  
✓ API documentation  
✓ Behavioral updates  
✓ Event argument documentation  
✓ Sub-feature documentation  
✓ Migration guides  

✗ Learning materials (tutorials, courses)  
✗ Blog posts  
✗ Release notes  

---

## Mandatory Verification Workflow

Before generating **any** documentation, complete the following workflow:

### Step 1: Clarify Component & Platform

If the user's request is vague, ask for:
1. **Component name** (e.g., DataGrid, TreeGrid, DatePicker)
2. **Platform** (e.g., Blazor, Angular, React, Vue, WinForms)
3. **Feature/API to document** (specific and detailed)

**Do NOT proceed without explicit clarification.**

### Step 2: Analyze Existing Documentation

Before writing content, examine related documentation in the repository to identify:

**Required Analysis Points:**
- Metadata format (frontmatter YAML)
- H1 structure and naming conventions
- Introduction patterns
- Content hierarchy and section structure
- Feature explanation style
- Event documentation format
- API documentation format
- Code sample structure (tabs, highlights, tags)
- Note/Warning/Info block conventions
- Cross-linking patterns (how links are formatted)
- SEO keyword placement
- File naming patterns
- Parent section organization
- Table of Contents (TOC) structure

**Where to Find Patterns:**
1. Repository: `/workspace/grid-sdk-docs/grid-sdk/<platform>/<component>/`
2. Related feature files (e.g., existing event docs, similar features)
3. Platform-specific documentation (e.g., other Blazor components)

### Step 3: Verify Source Information

For **every documented item**, verify the source:

**Source Priority (Highest to Lowest):**
1. Component source code (repository or NuGet)
2. Feature implementation code
3. Event argument classes (EventArgs)
4. API reference (Syncfusion CR or equivalent)
5. Existing User Guide documentation
6. Feature specification
7. Approved product requirements

**If source is unavailable:**
- Mark as: **Verification Required – Source information unavailable**
- Do NOT generate assumptions
- Stop generating content that would require unverifiable assumptions

### Step 4: Classify Documentation Type

Classify the request as one of:

| Classification | Description |
|---|---|
| New Feature | Previously undocumented feature |
| Feature Enhancement | Enhancement to existing feature |
| Behavioral Update | Change in existing behavior |
| Event Documentation | Single event with args |
| API Documentation | Property, method, or parameter |
| Sub-feature Documentation | Part of a larger feature |
| Breaking Change | Backward-incompatible change |
| Migration Documentation | Moving from old to new approach |
| Feature Deprecation | Feature being removed |

---

## Documentation Structure & Templates

### Required Metadata (YAML Frontmatter)

```yaml
---
layout: post
title: [Feature Name] in [Platform] [Component] | Syncfusion®
description: [SEO description, 120-160 chars, user-focused]
platform: grid-sdk
control: [ComponentName]
documentation: ug
---
```

**Metadata Rules:**
- `layout: post` – Always use "post"
- `title` – Format: `[Feature Name] in [Platform] [Component Name]`
  - Example: `Sorting in Blazor DataGrid`
  - Include component name for SEO
- `description` – 120-160 characters, benefits-focused, searchable
- `platform: grid-sdk` – Use grid-sdk for grid components
- `control: DataGrid` – Exact component name
- `documentation: ug` – Always "ug" for User Guide

### H1 Structure

**Single H1 per document** (immediately after frontmatter):

```markdown
# [Feature Name] in [Platform] [Component Name]
```

Examples:
```markdown
# Sorting in Blazor DataGrid
# Column Chooser in Blazor DataGrid
# Filtering in Blazor TreeGrid
```

### Introduction Section

**Requirements:**
- 1-3 concise paragraphs
- Begin with component link: `[Syncfusion component name](link-to-component)`
- Explain what the feature is (beginner-friendly)
- Explain why developers use it
- Keep it concrete, not marketing-focused

**Template:**

```markdown
# Feature Name in Platform Component

The [Blazor DataGrid](https://www.syncfusion.com/blazor-components/blazor-datagrid) 
includes a built-in [feature name] that helps [practical benefit]. 
To enable [feature name], set the [PropertyName] property to **true**.

[Optional: Additional context, workflow, or dependencies]
```

### Content Sections

**Recommended Hierarchy:**

```
# Main Feature Title (H1)

Introduction paragraph(s)

[Optional: YouTube video embed]

## Key Concept 1 (H2)

Explanation + Example

### Sub-concept (H3)

Details

## Key Concept 2 (H2)

Explanation + Example

## Events (H2)

### Event Name 1 (H3)

Event documentation (see template below)

## Related APIs (H2)

[Links to related properties/methods]
```

---

## Event Documentation Template

Use this template **for every event**:

### Event Name

**Description**
Brief explanation of what the event does.

**When It Occurs**
Explain the trigger timing (e.g., "Triggered when a column is sorted").

**Why Use This Event**
Practical use cases (e.g., "Validate sorting rules before applying").

**Event Arguments**

| Argument | Type | Description |
|----------|------|-------------|
| PropertyName | DataType | [Verified description] |

**Remarks**
Optional behavioral notes or limitations.

**Example**

Code example (tabs format) showing event usage.

---

## API Documentation Template

Use this for properties, methods, and parameters:

### API Name

**Description**
Purpose and usage.

**Type**
Verified data type (e.g., `bool`, `string`, `SortDirection`)

**Default Value**
Verified default only (or "Not applicable")

**Accepted Values**
Verified values only (use table format if many)

**Remarks**
Behavioral notes, constraints, or related info.

**Related APIs**
- [Related API 1](link)
- [Related API 2](link)

---

## Code Sample Standards

### Requirements

✓ **Must be compile-ready** – Developers can copy/paste and run immediately  
✓ **Minimal but complete** – All required using statements and components  
✓ **Production quality** – No placeholder or demo code  
✓ **Properly formatted** – Follow existing sample formatting exactly  
✓ **Syntax-verified** – Match component API and current platform version  

### Format: Tabs Structure

```markdown
{% tabs %}
{% highlight razor tabtitle="Index.razor" %}
@using Syncfusion.Blazor.Grids

<SfGrid DataSource="@GridData" AllowSorting="true" Height="315">
    <!-- Component markup -->
</SfGrid>

@code {
    public List<OrderData> GridData { get; set; } = new List<OrderData>();

    protected override void OnInitialized()
    {
        GridData = OrderData.GetAllRecords();
    }
}
{% endhighlight %}
{% highlight c# tabtitle="OrderData.cs" %}
public class OrderData
{
    // Data class implementation
}
{% endhighlight %}
{% endtabs %}
```

### Platform-Specific Samples

**Blazor:**
- Use `.razor` files
- Include `@using Syncfusion.Blazor.*` statements
- Use `@code { }` blocks for C#
- Match existing samples in repository

**Angular:**
- Use TypeScript and HTML templates
- Include proper imports
- Use component decorators

**React:**
- Use JSX and functional components
- Include React hooks if needed
- Follow React conventions

**Vue:**
- Use Vue 3 (if applicable) or Vue 2
- Include template and script blocks
- Follow Vue conventions

### Sample Data Pattern

Always include a minimal data class:

```csharp
public class OrderData
{
    public int OrderID { get; set; }
    public string CustomerID { get; set; }
    public string ShipCity { get; set; }
    public string ShipName { get; set; }
    
    public static List<OrderData> GetAllRecords()
    {
        return new List<OrderData>
        {
            new OrderData { OrderID = 10248, CustomerID = "VINET", ShipCity = "Reims", ShipName = "..." },
            // ... more records
        };
    }
}
```

---

## Cross-Linking Standards

**Internal Links:**
- Always use relative paths or links to CR (Component Reference)
- Format: `[LinkText](https://help.syncfusion.com/cr/blazor/Path)`
- Include link text as anchor

**Valid Link Types:**
- Component API reference (CR)
- Related UG pages (relative paths)
- Event arguments (CR)
- Getting Started (relative)
- Feature tour
- Related components

**Never:**
- Invent URLs
- Link to external sites (except official Syncfusion)
- Use broken links
- Link to non-existent documentation

---

## SEO Standards

### Keyword Placement

Include primary terms naturally:
- Component name (e.g., "DataGrid", "Blazor DataGrid")
- Platform name (e.g., "Blazor", "Angular")
- Feature name (main topic)

**Bad (keyword stuffing):**
```
DataGrid supports sorting, DataGrid sorting, DataGrid sort feature, 
DataGrid sort events, DataGrid sort properties...
```

**Good (natural language):**
```
The Blazor DataGrid includes a built-in sorting feature that helps 
organize information. To enable sorting, set the AllowSorting property 
to true. You can apply sorting via UI or programmatically.
```

### Description Format (160 chars max)

```
[Component]: [Feature] - Learn [main benefit], including [key sub-features].
```

Example:
```
Blazor DataGrid Sorting - Learn to sort data by single or multiple columns, 
including custom sort orders and sorting events.
```

---

## Table Standards

### Format

```markdown
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Value    | Value    | Value    |
```

### Usage Patterns

**Event Arguments Table:**
```markdown
| Event Argument | Type | Description |
|---|---|---|
```

**Properties Table:**
```markdown
| Property | Type | Default | Description |
|---|---|---|---|
```

**Parameter Table:**
```markdown
| Parameter | Type | Description |
|---|---|---|
```

---

## Notes, Tips, and Warnings

### Syntax

```markdown
> Note text here
```

```markdown
> **Note** Bold label for emphasis
```

```markdown
N> Syncfusion-specific note (special syntax)
```

### Usage

- **Note (>)** – Important information, clarifications
- **Warning (>)** – Caution about incorrect usage
- **Tip (>)** – Best practices or helpful hints
- **N>** – Syncfusion-specific notes

---

## File Management

### Location Convention

Determine location based on:

1. **Feature belongs to existing feature category?** → Add to existing section
   - Example: "Custom Sort Icons" → goes in `/sorting/` as subsection
   
2. **Feature is independent?** → Create new `.md` file
   - Location: `/grid-sdk/<platform>/<component>/<feature-name>.md`
   
3. **Feature is sub-feature of major feature?** → Create subdirectory
   - Example: Data binding adaptors → `/data-binding/` directory

### Naming Convention

- Lowercase, hyphen-separated: `feature-name.md`
- Match feature name exactly
- Examples: `sorting.md`, `column-chooser.md`, `cell-editing.md`

### TOC (Table of Contents) Updates

When adding new documentation:

1. **Locate TOC file** – Usually `grid-toc.html` or platform-specific TOC
2. **Identify parent section** – Where feature logically belongs
3. **Add new node with:**
   - Display text
   - File path (relative to root)
   - Hierarchy level

**Do NOT modify TOC blindly** – Show exact change needed:

```
Old:
<ul>
    <li><a href="path/sorting.md">Sorting</a></li>
</ul>

New:
<ul>
    <li><a href="path/sorting.md">Sorting</a>
        <ul>
            <li><a href="path/sorting/custom-sort-icons.md">Custom Sort Icons</a></li>
        </ul>
    </li>
</ul>
```

---

## Never Assume Rule

**Under no circumstances invent:**

❌ APIs (properties, methods)  
❌ Event names  
❌ Event arguments  
❌ Default values  
❌ Accepted values  
❌ Behavior descriptions  
❌ Return types  
❌ Parameter names  
❌ Internal implementation details  

**If information unavailable:**
1. Generate all verifiable sections
2. List missing information explicitly
3. Mark: **Verification Required – Source information unavailable**
4. Stop generating assumptions

---

## Self-Review Checklist

Before finalizing **any** documentation, verify:

- [ ] **No API assumptions** – Every API is verified
- [ ] **No event assumptions** – Every event exists in source
- [ ] **No parameter assumptions** – All params verified
- [ ] **No behavior assumptions** – All behaviors verified
- [ ] **Metadata complete** – YAML frontmatter valid
- [ ] **Single H1** – Correct format
- [ ] **Hierarchy correct** – H2, H3 properly nested
- [ ] **Code samples compile** – Platform syntax verified
- [ ] **Links valid** – No broken links
- [ ] **Tables formatted** – Markdown valid
- [ ] **SEO compliance** – Keywords natural, description valid
- [ ] **Tone professional** – Enterprise-ready
- [ ] **No marketing language** – Developer-focused
- [ ] **Related APIs listed** – Cross-links valid
- [ ] **Repository ready** – Minimal or zero edits needed

---

## Documentation Generation Workflow

### Phase 1: Intake & Verification (Required)

1. **Clarify request** – Component, platform, feature
2. **Analyze patterns** – Study related docs
3. **Verify sources** – Check component code/CR
4. **Classify type** – New feature, enhancement, etc.
5. **Flag missing info** – Identify gaps early

### Phase 2: Documentation Structure

1. **Create metadata** – YAML frontmatter
2. **Write introduction** – What, why, how
3. **Plan sections** – Outline based on feature
4. **Identify examples** – What code samples are needed

### Phase 3: Content Creation

1. **Write feature explanation** – Verified only
2. **Add code examples** – Compile-ready
3. **Document events** – Using event template
4. **Document APIs** – Using API template
5. **Add cross-links** – Valid URLs only

### Phase 4: Quality Assurance

1. **Review checklist** – All items verified
2. **Check samples** – Compile-ready, production-quality
3. **Validate metadata** – SEO compliance
4. **Proof tone** – Professional, beginner-friendly
5. **Test links** – All URLs valid

### Phase 5: Repository Integration

1. **Determine file location** – Correct path
2. **Update TOC** – Show exact changes
3. **Commit ready** – Zero or minimal edits needed

---

## Example Documentation Request Workflow

**User Request:** 
> "I need documentation for the sorting events in Blazor DataGrid."

### Your Response Workflow:

**Step 1 – Verify Clarity:**
```
✓ Component: Blazor DataGrid (clear)
✓ Platform: Blazor (clear)
✓ Feature: Sorting events (specific)
✓ Request is clear, proceed
```

**Step 2 – Analyze Patterns:**
```
✓ Check /grid-sdk/blazor/data-grid/sorting.md
✓ Identify event documentation structure
✓ Review event args format
✓ Note metadata pattern
```

**Step 3 – Verify Source:**
```
✓ Check SortingEventArgs class
✓ Check SortedEventArgs class
✓ Verify event triggers
✓ Verify all event properties
```

**Step 4 – Classify:**
```
Classification: Event Documentation
Reasoning: Specific events with documented args
```

**Step 5 – Generate Documentation:**
```
1. Write metadata with SEO keywords
2. Add introduction explaining sorting events
3. Document each event (Sorting, Sorted)
4. Include verified EventArgs
5. Provide compile-ready examples
6. Add cross-links to related features
```

**Step 6 – Self-Review:**
```
✓ All events verified in source
✓ All EventArgs verified
✓ Examples compile-ready
✓ Metadata SEO-compliant
✓ Links valid
✓ No assumptions made
✓ Repository-ready
```

---

## Output Format

Generate documentation in this exact order:

1. **Documentation Classification** – Type and reasoning
2. **Documentation Assessment** – What will be covered
3. **Evidence Sources Used** – Verified sources (CR, code, docs)
4. **Missing Information Check** – Any gaps identified
5. **Proposed Documentation Location** – File path and TOC changes
6. **SEO Metadata Validation** – Metadata review
7. **Markdown Content** – Full documentation ready to commit
8. **Cross-Link Recommendations** – Related resources
9. **Required TOC Updates** – Exact changes needed
10. **Self-Review Validation Checklist** – All items verified ✓

---

## Success Criteria

✓ Documentation engineer can review output without additional context  
✓ All cited sources are verifiable  
✓ Documentation can be committed with zero or minimal edits  
✓ Code samples are compile-ready  
✓ No assumptions about undocumented features  
✓ SEO-compliant and professional tone  
✓ Repository-ready quality  

---

## Getting Started

1. **User provides request** (component, platform, feature)
2. **Run through verification workflow** (Step 1-4 above)
3. **Generate documentation** using templates
4. **Complete self-review** checklist
5. **Deliver in output format** (sections 1-10)
6. **Ready for repository commit**

---

## Support & Constraints

**This skill covers:**
✓ Blazor components (DataGrid, TreeGrid, DatePicker, etc.)  
✓ Angular components  
✓ React components  
✓ Vue components  
✓ WinForms components  
✓ WPF components  
✓ Other Syncfusion platforms  

**This skill does NOT cover:**
✗ Learning materials (courses, tutorials)  
✗ Blog posts or marketing content  
✗ Release notes  
✗ Internal documentation  

---

## Key Principles

1. **Accuracy > Completeness** – Correct > extensive
2. **Verification Required** – Every API/behavior verified
3. **No Assumptions** – Missing info explicitly flagged
4. **Repository-Ready** – Minimal or zero edits needed
5. **Evidence-Based** – Every claim traceable to source
6. **Enterprise-Grade** – Production-quality standards
7. **Developer-Focused** – Practical, clear, actionable

---

## Contact & Questions

For questions about documentation patterns or Syncfusion conventions, analyze existing documentation in the repository first. The repository contains comprehensive examples of:
- Metadata formats
- Content structure
- Event documentation
- API documentation
- Code sample formatting
- Cross-linking patterns

Use these as the definitive reference for consistency.
