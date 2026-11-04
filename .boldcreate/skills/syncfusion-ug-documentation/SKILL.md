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

## Mandatory Validation Gates

**Four mandatory validation gates must execute in sequence before any documentation generation begins. A failed gate stops execution immediately and requires the missing information from the user. Do not progress to the next phase when a gate fails.**

### Gate 1: Strict Input Validation Gate

**Objective:** Prevent documentation generation from insufficient inputs.

Before analyzing documentation, verify that the request contains all mandatory context.

#### Required Inputs

All of the following must be explicitly provided by the user:

- **Platform** – Blazor, Angular, React, Vue, WinForms, WPF, or other
- **Component** – Specific component name (e.g., DataGrid, TreeGrid, DatePicker)
- **Request Type** – New Feature, Enhancement, Event, API, Sub-feature, Breaking Change, Migration, Deprecation
- **Feature Name** – Exact feature or API to document
- **Feature Scope** – What is included/excluded in this documentation request
- **Source of Truth** – At least one verified source:
  - Approved Specification
  - Approved Technical Design
  - Merged Source Implementation
  - Active Implementation PR
  - Verified Component Source Code
  - Existing Related Documentation

#### Strict Validation Rules

**These are non-negotiable. Do NOT infer or assume:**

❌ Do not infer Platform  
❌ Do not infer Component  
❌ Do not infer Feature Name  
❌ Do not infer Feature Scope  
❌ Do not infer Documentation Intent  
❌ Do not infer Source of Truth  

#### Gate Response

**If all required inputs are provided:**
```
✓ Gate 1 PASSED
Proceed to Component Documentation Analysis
```

**If any required input is missing:**
```
✗ Gate 1 FAILED
STOP.
Request the missing information immediately.

Missing Information:
• [List each missing item]

Do not begin any of:
- Documentation analysis
- Source verification
- Documentation generation
- TOC planning
- Sample generation

Until all mandatory inputs are available.
```

---

### Gate 2: Source Sufficiency Gate

**Objective:** Prevent documentation generation from insufficient evidence.

Before attempting to verify or generate documentation, ensure there is adequate evidence available to accurately document the feature.

#### Minimum Evidence Requirements

At least **one** of the following must be available:

- Approved specification (written, complete)
- Approved technical design document
- Merged source implementation (in component source code)
- Active implementation PR (linked to request)
- Verified component source code (API, behavior, events)
- Existing related documentation (shows pattern)

#### Evidence Must Cover

The available evidence must be sufficient to verify:

- Feature behavior (what it does)
- User workflow (how to use it)
- All APIs (properties, methods, parameters)
- All events (event names, when triggered)
- Event arguments (all args, types, descriptions)
- Parameters (names, types, defaults, accepted values)
- Limitations (what it cannot do)
- Configuration requirements (setup, dependencies)
- Sample implementation (runnable code patterns)

#### Gate Response

**If evidence is sufficient:**
```
✓ Gate 2 PASSED
Evidence is sufficient to generate accurate documentation.
Proceed to Source Verification.
```

**If evidence is incomplete or insufficient:**
```
✗ Gate 2 FAILED
STOP.

Missing Information Report:

Evidence Status: INSUFFICIENT

Current Evidence Available:
• [List what IS available]

Missing Evidence:
• [List what is NOT available]

Cannot Generate Documentation Because:
• [Explain why evidence is insufficient]
• [List what cannot be documented without evidence]

Request the following from the user:
• [Specific missing items needed]

Verification Rule:
Never generate placeholder documentation.
Never speculate about undocumented behavior.
Verification takes priority over completeness.
```

---

### Gate 3: Supported Combination Validation Gate

**Objective:** Prevent documentation that assumes undocumented feature combinations.

Before documenting any feature, identify and verify all feature interactions and supported combinations with other component capabilities.

#### Feature Combination Analysis

Investigate the feature's behavior with all related component capabilities.

For every feature being documented, identify and verify:

- **Supported combinations** – Which features work together
- **Unsupported combinations** – Which features cannot be used together
- **Known limitations** – Edge cases, constraints, special conditions
- **Behavioral differences** – How feature behaves differently in different contexts
- **Special configuration requirements** – Setup needed for specific combinations

#### Required Output

For every feature documented, include a section documenting:

```markdown
## Supported Combinations

### Works With:
- Feature A
- Feature B
- Feature C

### Does Not Work With:
- Feature X (reason)
- Feature Y (reason)

### Known Limitations:
- [Limitation 1]
- [Limitation 2]

### Configuration Requirements:
- [If using Feature A, configure X]
- [If using Feature B, configure Y]
```

#### Gate Response

**If combinations can be verified:**
```
✓ Gate 3 PASSED
Feature combinations verified.
Proceed to documentation generation.

Verified Combinations:
• [List supported combinations]

Known Limitations:
• [List any limitations]
```

**If combination support cannot be verified:**
```
✗ Gate 3 FAILED (Non-blocking)

Verification Required – Combination support not verified.

Cannot Verify These Combinations:
• [List combinations that cannot be verified]

Action:
• Mark these sections as "Verification Required – Combination support not verified"
• Request confirmation from user or component owner

Never assume cross-feature compatibility.

You may proceed with documenting verified combinations only.
```

---

### Gate 4: Component-Specific Documentation Validation Gate

**Objective:** Ensure documentation follows component-specific conventions.

Documentation must follow the exact conventions established by existing documentation for the target component. The generated output must be indistinguishable from existing component documentation.

#### Repository Convention Analysis

Before generating any documentation, analyze existing documentation for **the same component**.

Identify and document:

- **Naming conventions** – How features are named in this component
- **Existing terminology** – Technical terms, abbreviations used
- **Documentation hierarchy** – How content is organized (sections, subsections)
- **Feature categorization** – How similar features are grouped
- **File organization** – Where documentation files are located
- **Navigation structure** – How readers move between topics
- **Sample architecture** – How code samples are structured
- **API presentation style** – How properties/methods are documented
- **Event presentation style** – How events are documented
- **Cross-linking patterns** – How related topics link to each other
- **TOC placement patterns** – Where new docs fit in table of contents

#### Documentation Format Reference Rule

**Repository documentation conventions always override generic skill guidance.**

**Priority Hierarchy:**
1. Follow repository conventions (definitive source of truth)
2. Follow component-specific conventions
3. Use skill guidance only when no repository pattern exists

#### Examples

**TreeGrid Documentation**
- Must follow TreeGrid documentation patterns
- Cannot copy structures from DataGrid docs (even if similar)
- Must match TreeGrid TOC organization
- Must match TreeGrid terminology

**DataGrid Documentation**
- Must follow DataGrid documentation patterns
- Cannot copy structures from TreeGrid docs
- Must match DataGrid TOC organization
- Must match DataGrid API naming conventions

#### Gate Response

**If conventions can be verified and followed:**
```
✓ Gate 4 PASSED
Component documentation conventions identified and will be followed.

Conventions to Follow:
• [Naming convention: describe]
• [Hierarchy: describe]
• [File organization: describe]
• [Sample architecture: describe]
• [Cross-linking: describe]

Proceed to documentation generation.
```

**If conventions are unclear or conflict with skill guidance:**
```
⚠️ Gate 4 CONFLICT DETECTED

Repository Pattern: [Description]
Skill Guidance: [Description]

Resolution:
Repository pattern takes priority.

Action:
Follow repository pattern exactly.
Ignore conflicting skill guidance.

Proceed with repository-aligned documentation.
```

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

**The workflow consists of 9 mandatory phases. A failed gate stops execution and requires user action. Do not progress to the next phase when the current phase fails.**

### Phase 1: Strict Input Validation Gate

**Objective:** Verify all required inputs are available.

**Tasks:**
1. Request clarification on Component, Platform, Request Type, Feature Name, Feature Scope, Source of Truth
2. Execute Gate 1: Strict Input Validation (see Gate 1 section above)
3. If Gate 1 FAILED → STOP and request missing information
4. If Gate 1 PASSED → Proceed to Phase 2

**Stop Conditions:**
- Platform unclear or missing
- Component unclear or missing
- Feature name not specified
- Feature scope undefined
- Source of truth not identified

---

### Phase 2: Component Documentation Analysis

**Objective:** Analyze existing documentation patterns for the component.

**Tasks:**
1. Locate existing documentation for the component in repository
2. Analyze and document:
   - Metadata format patterns
   - H1/H2/H3 hierarchy conventions
   - Introduction section style
   - Event documentation format (if applicable)
   - API documentation format
   - Code sample structure
   - Cross-linking patterns
   - File naming and organization
   - TOC structure
3. Document all patterns for reference during generation

**Output:**
- Component-specific pattern guide (documented for Phase 4)

**Proceed to Phase 3**

---

### Phase 3: Source Sufficiency Gate

**Objective:** Verify adequate evidence is available for accurate documentation.

**Tasks:**
1. Execute Gate 2: Source Sufficiency (see Gate 2 section above)
2. Identify available evidence:
   - Specification documents
   - Technical design documents
   - Source code (location)
   - Implementation PRs
   - Existing related documentation
3. Verify evidence covers all required areas (behavior, APIs, events, samples, limitations)
4. If Gate 2 FAILED → STOP and request missing evidence
5. If Gate 2 PASSED → Proceed to Phase 4

**Stop Conditions:**
- No approved specification or design
- Source code not accessible
- No existing related documentation
- Evidence does not cover required areas

---

### Phase 4: Source Verification

**Objective:** Verify all documented items against authoritative sources.

**Tasks:**
1. For each API/property/method to document:
   - Locate in component source code or CR
   - Verify name, type, default value, accepted values
   - Document verification source
2. For each event to document:
   - Locate in EventArgs class
   - Verify all event arguments and types
   - Document verification source
3. For each behavior/limitation:
   - Verify in source code or specification
   - Document verification source
4. Flag any items that cannot be verified
5. Proceed to Phase 5

**Output:**
- List of verified items with sources
- List of unverifiable items (marked for user)

---

### Phase 5: Supported Combination Validation Gate

**Objective:** Verify and document feature combinations.

**Tasks:**
1. Execute Gate 3: Supported Combination Validation (see Gate 3 section above)
2. Identify all related component features
3. For each related feature, verify:
   - Does it work with the current feature?
   - Any special configuration needed?
   - Any known limitations or edge cases?
4. Document supported and unsupported combinations
5. Document any configuration requirements
6. If Gate 3 FAILED (non-blocking) → Mark unverifiable combinations
7. Proceed to Phase 6

**Output:**
- Supported combinations list
- Unsupported combinations list
- Configuration requirements
- Known limitations and edge cases

---

### Phase 6: Component-Specific Validation Gate

**Objective:** Ensure documentation follows component-specific conventions.

**Tasks:**
1. Execute Gate 4: Component-Specific Documentation Validation (see Gate 4 section above)
2. Apply component-specific naming conventions
3. Match component-specific terminology
4. Follow component documentation hierarchy
5. Use component-standard feature categorization
6. Place documentation in correct component file structure
7. Match component cross-linking patterns
8. Identify correct TOC placement for component
9. If conflicts with skill guidance → Repository pattern takes priority
10. Proceed to Phase 7

**Output:**
- Documentation structure validated for component
- TOC placement identified
- All conventions documented

---

### Phase 7: Documentation Creation

**Objective:** Generate documentation using verified information and component conventions.

**Tasks:**
1. **Metadata:** Create YAML frontmatter with SEO keywords
2. **Introduction:** Write beginner-friendly explanation
3. **Content:** Add feature sections with verified information only
4. **Examples:** Create compile-ready code samples (verified platforms)
5. **Events:** Document using event template (if applicable)
6. **APIs:** Document using API template (if applicable)
7. **Combinations:** Add supported/unsupported combinations section
8. **Cross-links:** Add valid links to related features
9. **Limitations:** Document any known limitations
10. Proceed to Phase 8

**Output:**
- Complete documentation markdown
- All samples compile-ready
- All links verified
- All APIs/events verified

---

### Phase 8: Quality Assurance

**Objective:** Validate documentation before repository integration.

**Tasks:**
1. **Self-Review Checklist:**
   - [ ] No API assumptions
   - [ ] No event assumptions
   - [ ] No behavior assumptions
   - [ ] All verified items have source attribution
   - [ ] All unverifiable items marked "Verification Required"
   - [ ] Metadata SEO-compliant
   - [ ] Single H1, correct hierarchy
   - [ ] Code samples compile-ready
   - [ ] All links valid (no 404s)
   - [ ] Professional tone, no marketing language
   - [ ] Component conventions followed
   - [ ] Repository patterns matched exactly
   - [ ] No undocumented assumptions

2. **Validation Results:**
   - All items ✓ → Proceed to Phase 9
   - Any items ✗ → Return to Phase 7 for fixes

**Output:**
- Self-review checklist (all ✓)

---

### Phase 9: Repository Integration

**Objective:** Prepare documentation for repository commit.

**Tasks:**
1. **Determine file location:**
   - Existing feature → Add to existing file
   - New independent feature → Create new `.md` file
   - Sub-feature → Create subdirectory or subsection
2. **Update TOC:**
   - Identify parent section
   - Create new TOC node
   - Show exact TOC changes needed
3. **Final checks:**
   - Zero or minimal edits required
   - Follows all repository patterns
   - Ready for immediate commit
   - All verification complete

**Output:**
- Complete documentation ready to commit
- Exact file path
- Exact TOC changes needed
- Ready for repository integration

**Workflow Complete** → Documentation ready for commit

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

### Core Success Criteria

✓ Documentation engineer can review output without additional context  
✓ All cited sources are verifiable  
✓ Documentation can be committed with zero or minimal edits  
✓ Code samples are compile-ready  
✓ No assumptions about undocumented features  
✓ SEO-compliant and professional tone  
✓ Repository-ready quality  

### Validation Gate Success Criteria

✓ **Gate 1 Compliance:**
  - No documentation generated from insufficient inputs
  - All required inputs explicitly provided and verified
  - No inferred or assumed information

✓ **Gate 2 Compliance:**
  - No documentation generated from insufficient evidence
  - All documented items verified against authoritative sources
  - Unverifiable items explicitly flagged as "Verification Required"

✓ **Gate 3 Compliance:**
  - Supported and unsupported feature combinations documented
  - Cross-feature limitations documented
  - No undocumented compatibility assumptions
  - Configuration requirements specified

✓ **Gate 4 Compliance:**
  - Component-specific documentation conventions followed exactly
  - Output indistinguishable from existing component documentation
  - Repository documentation patterns are authoritative source
  - All naming, terminology, hierarchy match component standards

✓ **Documentation Behavior Accuracy:**
  - Documentation behavior matches actual component capabilities
  - All events verified to exist in component
  - All APIs verified in component source or CR
  - All defaults verified against component source
  - All accepted values verified
  - No undocumented internal implementation details exposed

✓ **Overall Quality:**
  - 9-phase workflow completed successfully
  - All gates passed or failures resolved
  - Self-review checklist 100% ✓
  - Repository-ready for immediate commit  

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
