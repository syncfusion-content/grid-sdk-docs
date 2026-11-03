# UG Documentation Skill - Optimized for Enterprise

Create repository-ready Syncfusion Blazor User Guide documentation with evidence-based accuracy.

**Level**: Advanced | **Mode**: Autonomous Cloud Agent | **Token Footprint**: 60-70% reduction

---

## Overview

This optimized skill produces documentation that is:
- **Repository-ready**: Commit with minimal/no edits
- **Evidence-based**: Every API/event verified in source code
- **Standards-compliant**: Follows Syncfusion Blazor patterns
- **Assumption-free**: Explicit identification of gaps
- **SEO-optimized**: Natural keyword integration
- **Enterprise-grade**: 10/10 maintainability

**Supported Documentation Modes:**
- Mode A: New Feature Documentation
- Mode B: Enhancement Documentation
- Mode C: Documentation Correction
- Mode D: API Documentation Only
- Mode E: Event Documentation Only
- Mode F: Migration Documentation

---

## Execution Model: Two-Stage Workflow

### Stage 1: Discovery (Lightweight Scan)

Execute ONCE before proceeding to Stage 2.

**Automatically Identify:**

```
Component Name:          [Extract from context]
Feature Name:            [Extract from request]
Documentation Type:      [Mode A-F]
Existing Doc Path:       [Search repository]
Source Files:            [List component files]
Related APIs:            [From feature scope]
Related Events:          [From feature scope]
TOC Update Required:     [Yes/No]
```

**Confidence Check:**
- Component accessible? YES/NO
- Source files located? YES/NO
- Existing docs found? YES/NO

**Output:** Discovery Summary (1-2 paragraphs max)

**Decision:** PROCEED to Stage 2 only if 90%+ confident

---

### Stage 2: Verification & Generation (Targeted Scan)

Verify ONLY the APIs/events actually used in documentation.

**Phase 1: Source Verification**

For each API/event mentioned:
1. Locate source file (Component.cs, *Events.cs)
2. Extract: Name, Type, Default Value, Accepted Values
3. Record source location (file + line number)
4. Mark verification status (Verified/Requires Evidence)

**Do NOT** perform repository-wide scanning.

**Phase 2: Evidence Matrix Generation**

Create compact verification table:

```markdown
| Item | Type | Source File | Status |
|------|------|-------------|--------|
| AllowSorting | Property | Grid.cs:45 | ✓ Verified |
| SortMode | Enum | Grid.cs:67 | ✓ Verified |
| OnSorting | Event | GridEvents.cs:23 | ✓ Verified |
| OnSorted | Event | GridEvents.cs:34 | ✓ Verified |
```

Use checkmarks (✓) for verified, (?) for needs evidence.

**Phase 3: Confidence Scoring**

Calculate confidence per area:

```markdown
## Verification Confidence

| Area | Coverage | Score | Status |
|------|----------|-------|--------|
| APIs | 5/5 used | 100% | ✓ |
| Events | 2/2 used | 100% | ✓ |
| Defaults | 5/5 confirmed | 100% | ✓ |
| Code Samples | 3/3 verified | 100% | ✓ |
| URLs | 4/4 checked | 100% | ✓ |

**Overall: 100% - READY FOR COMMIT**
```

**Decision Rule:**
- If Overall ≥ 95%: PROCEED to Stage 4.5
- If Overall < 95%: List gaps and STOP

---

### Stage 4.5: Sample Validation (Compile & Verify)

Execute ONLY if documentation includes code examples.

**Phase 1: Namespace Validation**

For each code sample:
1. Extract `using` statements
2. Verify namespaces are correct:
   - `using Syncfusion.Blazor.Grids;` (DataGrid)
   - `using Syncfusion.Blazor.TreeGrid;` (TreeGrid)
   - `using Syncfusion.Blazor.Schedules;` (Scheduler)
   - etc.
3. Verify no missing namespaces
4. Record status: ✓ Valid or ? Missing

**Phase 2: API Usage Validation**

For each code sample:
1. Verify all APIs used exist in source code
2. Verify property names match source exactly
3. Verify event names match source exactly
4. Verify method signatures are correct
5. Record status: ✓ Valid or ? Invalid API

**Phase 3: Compilation Check**

For each code sample:
1. Verify Blazor syntax is correct
2. Verify type declarations are valid
3. Verify event bindings are correct
4. Verify component hierarchy is valid
5. Record status: ✓ Compiles or ? Syntax Error

**Validation Matrix:**

```markdown
| Sample # | Namespaces | API Usage | Compilation | Status |
|----------|-----------|-----------|-------------|--------|
| 1 | ✓ | ✓ | ✓ | ✓ Valid |
| 2 | ✓ | ✓ | ✓ | ✓ Valid |
| 3 | ? | ✓ | ✗ | ? Needs Fix |
```

**Decision Rule:**
- If ALL samples ✓ Valid: PROCEED to Stage 8.5
- If ANY sample ✗ Invalid: List errors and STOP (do not proceed)

---

## Content Generation: Mode-Specific Workflows

### Mode A: New Feature Documentation

**Execute these phases ONLY:**

1. **Classify** – Document type (Phase 1)
2. **Discover** – Identify all scope items (Stage 1)
3. **Verify** – Targeted API/Event verification (Stage 2)
4. **Structure** – Generate markdown (Phase 4)
5. **Validate** – Self-review (Phase 8)
6. **Deliver** – 9-section output (Phase 9)

**Skip:** Pattern analysis (reuse existing), full repository search

**Section Template:**

```markdown
---
layout: post
title: [Feature] in Blazor [Component]
description: Learn how to use [Feature] in Syncfusion Blazor [Component]. Includes examples and API reference.
platform: Blazor
control: [Component]
documentation: ug
---

# [Feature] in Blazor [Component]

[1 paragraph definition]

## Enabling [Feature]

[Configuration code block]

## [Capability 1]

### How It Works
[Explanation]

### Configuration
[Code]

### Example
[Verified code]

## Events

[Verified events table]

## API Reference

[Verified properties table]

## See Also
- [Related docs]
```

### Mode B: Enhancement Documentation

**Execute these phases ONLY:**

1. **Classify** – Enhancement type (Phase 1)
2. **Discover** – Locate existing doc, identify changes (Stage 1)
3. **Verify** – New APIs/Events only (Stage 2)
4. **Update** – Merge into existing markdown (Phase 4)
5. **Validate** – Self-review (Phase 8)
6. **Deliver** – 9-section output, note existing content (Phase 9)

**Skip:** Full content generation if existing doc is sound

**Output:** Document existing sections + new sections + evidence matrix

### Mode C: Documentation Correction

**Execute these phases ONLY:**

1. **Classify** – Correction type (Phase 1)
2. **Discover** – Locate existing doc (Stage 1)
3. **Verify** – Only corrected sections (Stage 2)
4. **Update** – Fix errors in place (Phase 4)
5. **Validate** – Self-review (Phase 8)
6. **Deliver** – 9-section output, note original + corrections (Phase 9)

**Skip:** APIs/Events already verified in existing doc

### Mode D: API Documentation Only

**Execute these phases ONLY:**

1. **Classify** – API scope (Phase 1)
2. **Discover** – Locate Component.cs (Stage 1)
3. **Verify** – Extract all properties/methods (Stage 2)
4. **Structure** – Generate API reference table (Phase 5)
5. **Validate** – Self-review (Phase 8)
6. **Deliver** – 5-section output (Phase 9)

**Output:** Evidence Matrix + API Reference Table + Self-Review + Status

### Mode E: Event Documentation Only

**Execute these phases ONLY:**

1. **Classify** – Event scope (Phase 1)
2. **Discover** – Locate *Events.cs (Stage 1)
3. **Verify** – Extract all events + arguments (Stage 2)
4. **Structure** – Generate event reference table (Phase 5)
5. **Validate** – Self-review (Phase 8)
6. **Deliver** – 5-section output (Phase 9)

**Output:** Evidence Matrix + Event Reference Table + Examples + Self-Review + Status

### Mode F: Migration Documentation

**Execute these phases ONLY:**

1. **Classify** – Migration type (Phase 1)
2. **Discover** – Locate old + new component sources (Stage 1)
3. **Verify** – Breaking changes + new alternatives (Stage 2)
4. **Structure** – Before/After comparison (Phase 4)
5. **Validate** – Self-review (Phase 8)
6. **Deliver** – 9-section output with comparison matrix (Phase 9)

**Output:** Breaking Changes Table + Migration Guide + Examples + Status

---

## Source Priority & Verification Rules

### Source Priority (in order):

1. Component source code (*.cs)
2. Event argument classes (*EventArgs.cs)
3. API reference documentation
4. Existing User Guide
5. Feature specification

### Verification Rules:

✓ **Verify ONLY if used** in documentation  
✓ **Record source location** (file + line)  
✓ **Use confidence scoring** per item  
✓ **Stop searching** when confidence >95%  
✓ **Mark gaps explicitly** if <95%  
✗ **Never assume** APIs exist  
✗ **Never guess** default values  
✗ **Never invent** event names  

---

## Compact Output Format (9 Sections)

Deliver documentation in this exact order:

```
1. Classification
   - Type: [Mode A-F]
   - Reasoning: [1 sentence]

2. Discovery Summary
   - Component: [Name]
   - Feature: [Name]
   - Scope: [Items list]
   - Confidence: [Percentage]

3. Evidence Matrix
   | Item | Source | Status |
   |------|--------|--------|
   | [Verified items]

4. Verification Confidence
   Overall: [Score] - [Ready/Needs Evidence]

5. Repository Actions
   - File: [Path]
   - Action: [New/Update/Correct]
   - TOC: [Changes if needed]

6. SEO Metadata
   ✓ Title
   ✓ Description
   ✓ Keywords

7. Markdown Content
   [Complete, ready-to-commit]

8. Self-Review Summary
   ✓ [Checklist items passed]
   ✗ [Any items failed - stop if found]

9. Commit Readiness
   Status: [Ready/Needs Review]
   Reason: [If not ready]
```

---

## Key Optimization Rules

### Reduce Token Consumption:

✓ Use tables instead of prose  
✓ Use checklist marks (✓/?) instead of descriptions  
✓ Consolidate similar rules  
✓ Remove redundant explanations  
✓ Use templates, not repetitive instructions  

### Fast Execution:

✓ Execute Stage 1 ONCE  
✓ Verify ONLY used APIs/events  
✓ Use confidence-based stopping  
✓ No repository-wide scanning  
✓ No repeated checks  

### Component Agnostic:

✓ Replace "DataGrid" with "[Component]"  
✓ Replace feature names with "[Feature]"  
✓ Use generic templates  
✓ Document by pattern, not example  

### Repository Intelligence:

✓ Determine file path automatically  
✓ Calculate TOC changes automatically  
✓ Verify URLs exist (no blind links)  
✓ Identify parent section automatically  

---

### Stage 8.5: Global Standards Check

Execute BEFORE final output delivery.

**Phase 1: Accessibility Validation**

Check documentation meets accessibility standards:

1. **Images**: All images have alt text descriptions
2. **Links**: All links have descriptive text (not "click here")
3. **Color**: No information conveyed by color alone
4. **Headings**: Proper hierarchy (H1 → H2 → H3, no gaps)
5. **Code Blocks**: Syntax highlighting present
6. **Tables**: Header row marked properly
7. **Lists**: Proper formatting (bullets, numbers)

**Checklist:**
```markdown
✓ All images have alt text
✓ All links descriptive
✓ Information accessible without color
✓ Heading hierarchy correct
✓ Code blocks highlighted
✓ Tables have headers
✓ Lists properly formatted
```

**Phase 2: Localization Readiness**

Check documentation is localizable:

1. **No hardcoded strings** in code samples
2. **Strings use resource keys** (if applicable)
3. **Numbers/dates in locale-neutral format**
4. **No culture-specific examples** (when possible)
5. **UI labels match component** (Syncfusion convention)
6. **RTL compatibility** considered for UI text

**Checklist:**
```markdown
✓ No hardcoded UI strings
✓ Resource keys used
✓ Locale-neutral formatting
✓ Culture-neutral examples
✓ Labels consistent
✓ RTL considerations noted
```

**Phase 3: SEO Compliance**

Verify SEO optimization:

1. **Title**: "[Feature] in Blazor [Component]" (60 chars max)
2. **Description**: Includes feature, component, use case (160 chars)
3. **H1**: Single, matches title
4. **Keywords**: Feature (2-3x), Component (2-3x), Blazor (1-2x)
5. **Word count**: Minimum 500 words (best practice)
6. **Readability**: Grade level 8-10 (Flesch score)
7. **Internal links**: 3-5 relevant links to related docs

**Validation Table:**
```markdown
| Element | Requirement | Status |
|---------|------------|--------|
| Title | 60 chars max | ✓ |
| Description | 160 chars, keywords | ✓ |
| H1 | Single, matches title | ✓ |
| Keywords | Naturally used 2-3x | ✓ |
| Word Count | ≥500 words | ✓ |
| Readability | Grade 8-10 | ✓ |
| Links | 3-5 internal | ✓ |
```

**Phase 4: Cross-Link Validation**

Verify all links are correct:

1. **Existence**: All links reference files that exist
2. **Format**: Links use correct format:
   - `[Text](/blazor/component/feature)` for same repo
   - `[Text](https://help.syncfusion.com/...)` for external
3. **Relevance**: Links are contextually appropriate
4. **No duplicates**: Related section doesn't repeat links
5. **Anchor links**: If using `#section`, verify section exists

**Link Validation Matrix:**
```markdown
| Link | Target | Exists | Format | Status |
|------|--------|--------|--------|--------|
| Sorting | /blazor/data-grid/sorting | ✓ | ✓ | ✓ |
| Filtering | /blazor/data-grid/filtering | ✓ | ✓ | ✓ |
| Getting Started | /blazor/data-grid/getting-started | ✓ | ✓ | ✓ |
```

**Phase 5: Heading Consistency**

Verify heading structure across documentation:

1. **Single H1**: Only one `#` in entire document
2. **Hierarchy**: H1 → H2 → H3 (no H4 without H3)
3. **Pattern**: Use consistent heading patterns:
   - `## [Feature Name]` for main sections
   - `### How It Works` for subsections
   - `### Configuration` for settings
   - `### Example` for code samples
4. **No orphaned headings**: Every H2 has multiple H3s or content
5. **Length**: Headings clear and descriptive (3-8 words)

**Heading Validation:**
```markdown
# [Feature] in Blazor [Component]          (H1) ✓
## Enabling [Feature]                       (H2) ✓
### How It Works                            (H3) ✓
### Configuration                           (H3) ✓
### Example                                 (H3) ✓
## [Capability Name]                        (H2) ✓
### How It Works                            (H3) ✓
### Configuration                           (H3) ✓
### Example                                 (H3) ✓
## Events                                   (H2) ✓
## API Reference                            (H2) ✓
## See Also                                 (H2) ✓
```

**Decision Rule:**
- If ALL phases ✓ Pass: PROCEED to final output
- If ANY phase ✗ Fails: List issues and request fix (can proceed if minor)

---

## Verification Checklist (Compact)

Before final output:

```
Content:
  ☐ All APIs verified in source
  ☐ All events verified in source
  ☐ No assumptions about behavior
  ☐ Default values confirmed

Code:
  ☐ Samples use verified APIs only
  ☐ Samples compile-ready
  ☐ Blazor syntax correct

SEO:
  ☐ Single H1: "[Feature] in Blazor [Component]"
  ☐ Keywords natural (2-3x each)
  ☐ Beginner-friendly

Metadata:
  ☐ Title follows pattern
  ☐ Description includes keywords
  ☐ Platform: Blazor
  ☐ Control: Correct component name

Repository:
  ☐ File path determined
  ☐ TOC changes explicit
  ☐ All links verified
  ☐ No placeholder text

Missing:
  ☐ All gaps listed explicitly
  ☐ Or: No gaps (100% verified)
```

**Stop if ANY checkbox cannot be ✓ marked.**

---

## Common Patterns (Reusable Templates)

### API Documentation Row

```markdown
| [APIName] | [Type] | [Default] | [Description] |
```

### Event Documentation Row

```markdown
| [EventName] | [Handler] | [Trigger] | [Use Case] |
```

### Capability Section

```markdown
### [Capability]

#### How It Works
[Brief explanation]

#### Configuration
[Code block]

#### Example
[Verified code or N/A]
```

### Note/Tip/Warning

```markdown
> **Note** – [Important clarification]
> **Tip** – [Best practice]
> **Warning** – [Critical information]
```

### SEO Title Pattern

```
# [Feature] in Blazor [Component]
```

**Examples (all components):**
- # Sorting in Blazor DataGrid
- # Sorting in Blazor TreeGrid
- # Sorting in Blazor Scheduler
- # Editing in Blazor Kanban
- # Export in Blazor Diagram

---

## Intelligence Rules

### Automatic File Path Detection

```
IF new feature documentation:
  path = docs/blazor/components/[component]/[feature].md

IF enhancement to existing:
  path = [existing file path]

IF correction:
  path = [existing file path]
```

### Automatic TOC Detection

```
IF new file created:
  Find TOC file: docs/blazor/components/[component]/toc.yml
  Add entry under appropriate parent
  Show exact BEFORE/AFTER change

IF existing file updated:
  No TOC change required
```

### Automatic URL Verification

```
FOR each link in "See Also" section:
  Verify file exists in repository
  Use actual path from file system
  Never invent URLs
```

---

## Critical Don'ts

❌ Do NOT assume APIs exist  
❌ Do NOT guess default values  
❌ Do NOT invent event names  
❌ Do NOT make up code samples  
❌ Do NOT skip the Discovery phase  
❌ Do NOT modify TOC blindly  
❌ Do NOT include unverified URLs  
❌ Do NOT scan entire repository  
❌ Do NOT duplicate verification steps  
❌ Do NOT generate output below 95% confidence  

---

## Success Criteria

Documentation is **READY TO COMMIT** when ALL are true:

1. ✓ 95%+ verification confidence
2. ✓ All APIs traced to source (file + line)
3. ✓ All events traced to source (file + line)
4. ✓ Default values confirmed
5. ✓ Code samples compile-ready
6. ✓ SEO metadata valid
7. ✓ Heading structure correct
8. ✓ All links verified to exist
9. ✓ Repository actions explicit
10. ✓ Self-review complete
11. ✓ No placeholder text remains

If ANY criterion fails: **STOP and list gaps**. Do not generate output.

---

## Next Steps

When using this skill:

1. **State Documentation Mode** (A-F)
2. **Provide Component Name**
3. **Provide Feature/Scope**
4. **Provide Access to Source Code**
5. **Skill Executes Two-Stage Workflow**
6. **Deliver 9-Section Output**
7. **Document is Ready for Commit**
