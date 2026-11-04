# UG Documentation Skill - Platform-Agnostic & Enterprise-Grade

Create repository-ready Syncfusion User Guide documentation for any platform with evidence-based accuracy.

**Level**: Advanced | **Mode**: Autonomous Cloud Agent | **Token Footprint**: 60-70% reduction | **Platforms**: All Syncfusion

---

## 🛑 **MANDATORY: Information Collection Gate - FIRST STEP**

**CRITICAL RULE: Do not proceed to Discovery until this gate is complete.**

---

### Information Completeness Validation

**BEFORE performing ANY of the following:**
- ❌ Start Discovery
- ❌ Analyze repositories
- ❌ Analyze source code
- ❌ Search existing documentation
- ❌ Search similar features
- ❌ Search similar components
- ❌ Extract platform standards
- ❌ Generate documentation plans
- ❌ Generate documentation drafts

**FIRST: Validate that sufficient information is available.**

---

### Vague Request Detection

If ANY required information is missing, incomplete, ambiguous, or cannot be confidently determined:

**STOP IMMEDIATELY**

Do NOT infer, assume, or fill gaps. Instead:

1. **Identify** which information is missing
2. **Ask the user** for the missing information
3. **Wait** for the user response
4. **Validate** completeness before proceeding

---

### Processing Rule (MANDATORY)

```
Step 1: Information Collection
         ↓
Step 2: Validate Completeness
         ↓
Step 3: Confirm All Required Inputs Available
         ↓
Step 4: Begin Discovery
         ↓
Step 5: Extract Platform Standards
         ↓
Step 6: Verify Evidence
         ↓
Step 7: Generate Documentation
```

**DISCOVERY MUST NEVER BEGIN BEFORE STEP 3 IS COMPLETE**

---

### Golden Rule

**If required information is missing, ask the user immediately.**

Never attempt to:
- ❌ Fill gaps using assumptions
- ❌ Infer details from existing documentation
- ❌ Use similar components as reference
- ❌ Infer behavior from related features
- ❌ Assume repository patterns
- ❌ Assume platform-specific details

**User-provided information ALWAYS takes precedence over assumptions.**

---

### Required Information Checklist

**VALIDATE ALL items before proceeding:**

```
☐ Platform specified
   (Blazor, Angular, React, Vue, JavaScript, ASP.NET Core, ASP.NET MVC, MAUI, WinForms, WPF, Flutter, Xamarin)

☐ Component identified
   (DataGrid, TreeGrid, Scheduler, Kanban, Gantt, Diagram, Chart, etc.)

☐ Request type known
   (New Feature, Enhancement, Correction, API Only, Event Only, Migration)

☐ Feature scope clearly defined
   (What APIs, Events, Capabilities to document)

☐ Source of truth available
   (Spec, Design Doc, Source Code, PR, Requirements, or Documentation)
```

**If ANY item is UNCHECKED: STOP and collect missing information**

---

### Information Collection Questions

**Ask ONLY for missing fields:**

#### 1. Platform (REQUIRED)

```
What platform is this documentation for?

Options:
  • Blazor (C#, Razor)
  • JavaScript (JS/TS)
  • Angular (TypeScript)
  • React (TypeScript/JSX)
  • Vue (Vue SFC, TypeScript)
  • ASP.NET Core (C#)
  • ASP.NET MVC (C#)
  • MAUI (C#)
  • WinForms (C#)
  • WPF (C#)
  • Flutter (Dart)
  • Xamarin (C#)
```

#### 2. Component (REQUIRED)

```
Which Syncfusion component is being documented?

Examples: DataGrid, TreeGrid, Scheduler, Kanban, Gantt, Diagram, Chart, Pivot Table, Splitter, etc.

Provide the exact component name.
```

#### 3. Request Type (REQUIRED)

```
What type of documentation is requested?

  A) New Feature Documentation
     → Feature is new, not in existing component
     → Requires full documentation (all sections)

  B) Feature Enhancement Documentation
     → Feature enhancement to existing component
     → May require updates to existing documentation

  C) Documentation Correction
     → Fix errors in existing documentation
     → Clarify ambiguous documentation
     → Update outdated information

  D) API Documentation Only
     → Document APIs/Properties only
     → No narrative sections needed

  E) Event Documentation Only
     → Document events only
     → No narrative sections needed

  F) Migration Documentation
     → Document migration path
     → Before/After comparison
     → Breaking changes

Select one: A, B, C, D, E, or F
```

#### 4. Feature Scope (REQUIRED)

```
What is the scope of this documentation?

For New Feature (A) or Enhancement (B), provide:

1. Feature Name: [Name of feature being documented]

2. What should be documented?
   - All related APIs/properties?
   - All related events?
   - Step-by-step usage?
   - Configuration examples?
   - Advanced scenarios?

3. Related APIs to document: [List]
   Example: AllowSorting, SortMode, Sort(), ClearSorting()

4. Related Events to document: [List]
   Example: OnSorting, OnSorted, SortingEventArgs

5. Code samples required? [Yes/No]
```

#### 5. Source of Truth (REQUIRED)

```
What is the authoritative source for this feature?

Priority order (use highest available):

1. Approved Specification Document
   - URL or path to specification

2. Approved Technical Design Document
   - URL or path to design doc

3. Source Code Implementation
   - Component file path
   - Repository location

4. Feature Pull Request
   - PR number or URL
   - Branch name

5. Existing Documentation
   - Link to existing docs (reference only)

6. User-Provided Requirements
   - Detailed requirements in request

Which source(s) are available?
```

#### 6. Additional Info (if New Feature or Enhancement)

```
For New Feature or Enhancement documentation, provide:

1. Feature Summary: [1-2 sentence description]

2. Specification Details: [URL/attachment or "Not available"]

3. Implementation Details: [Available? Yes/No]

4. Feature PR/Branch: [Number/URL or "N/A"]

5. Supported Scenarios: [List or "Covered in spec"]

6. Unsupported Scenarios: [List or "None identified"]

7. Limitations: [Any known limitations?]

8. Browser/Platform Support: [All platforms or specific ones?]
```

---

### Information Validation Response Template

**After collecting information, confirm:**

```
✓ Platform:          [Confirmed Platform]
✓ Component:         [Confirmed Component]
✓ Request Type:      [Type A-F]
✓ Feature:           [Feature Name]
✓ Scope:             [APIs, Events, Capabilities list]
✓ Source of Truth:   [Primary source identified]
✓ Confidence:        [Complete/Ready to proceed]

Ready to begin Discovery? [YES/NO]
```

**If any item shows ✗ or uncertainty: ASK for clarification**

---

### Source of Truth Priority (STRICT ORDER)

Use sources in this exact order:

1. **Approved Specification Document** (highest priority)
   - Use when available
   - Definitive source for behavior
   - May override other sources

2. **Approved Technical Design Document**
   - Use if specification not available
   - Authoritative for architecture
   - Defines implementation approach

3. **Source Code Implementation**
   - Use for API verification
   - Use for default values
   - Use for actual behavior
   - Reference file paths and line numbers

4. **Feature Pull Request**
   - Use for implementation details
   - Use for review comments
   - Use for testing information

5. **Existing Documentation** (reference only)
   - Use ONLY for pattern/format reference
   - Never copy content
   - Never copy examples
   - Never copy descriptions
   - Use to understand repository style

6. **User-Provided Requirements** (lowest priority)
   - Use only if no higher source available
   - Combine with verification from source code
   - Confirm before using

**When conflicts exist: Higher-priority source wins**

---

### Assumption Prevention (MANDATORY)

Never:
- ❌ Assume platform details
- ❌ Assume component capabilities
- ❌ Assume API existence
- ❌ Assume event existence
- ❌ Assume default values
- ❌ Assume behavior
- ❌ Assume limitations
- ❌ Assume scenarios
- ❌ Assume platform support
- ❌ Assume implementation details
- ❌ Assume user intentions
- ❌ Copy content from other components
- ❌ Copy examples from other components
- ❌ Copy API descriptions from other components

Always:
- ✓ Collect required information
- ✓ Verify against source of truth
- ✓ Ask for clarification
- ✓ Mark gaps explicitly
- ✓ Stop if confidence < 95%
- ✓ Use only user-provided information

---

## Overview

This platform-agnostic skill produces documentation that is:
- **Repository-ready**: Commit with minimal/no edits
- **Evidence-based**: Every API/event verified in source code
- **Standards-compliant**: Follows platform-specific standards
- **Assumption-free**: Explicit identification of gaps
- **SEO-optimized**: Natural keyword integration
- **Enterprise-grade**: 10/10 maintainability
- **Platform-aware**: Supports all Syncfusion platforms
- **Information-gated**: Requires complete information before Discovery

**Supported Platforms:**
- Blazor, JavaScript, Angular, React, Vue
- ASP.NET Core, ASP.NET MVC, MAUI
- WinForms, WPF, Flutter, Xamarin

**Supported Documentation Modes:**
- Mode A: New Feature Documentation
- Mode B: Enhancement Documentation
- Mode C: Documentation Correction
- Mode D: API Documentation Only
- Mode E: Event Documentation Only
- Mode F: Migration Documentation

---

## Stage 1: Discovery (Lightweight Scan)

Execute ONCE after information collection.

**Automatically Identify:**

```
Platform:                [Blazor/Angular/React/Vue/etc.]
Component Name:          [Extract from context]
Feature Name:            [Extract from request]
Documentation Type:      [Mode A-F]
Existing Doc Path:       [Search repository]
Source Files:            [List component files]
Related APIs:            [From feature scope]
Related Events:          [From feature scope]
TOC Update Required:     [Yes/No]
Platform Standards Path: [Locate existing docs]
```

**Confidence Check:**
- Platform known? YES/NO
- Component accessible? YES/NO
- Source files located? YES/NO
- Existing docs found? YES/NO

**Output:** Discovery Summary (1-2 paragraphs max)

**Decision:** PROCEED to Stage 2 only if 90%+ confident. If <90%: STOP and request clarification.

---

## Stage 2: Verification & Generation (Targeted Scan)

Verify ONLY the APIs/events actually used in documentation.

**Phase 1: Platform Standards Extraction**

Before generating, locate and review existing documentation for the same platform:

1. Find 2-3 similar features in the platform's existing documentation
2. Extract:
   - Documentation structure (sections, hierarchy)
   - Terminology (platform-specific naming)
   - Code sample format (language, syntax, conventions)
   - Formatting style (tables, code blocks, notes)
   - SEO patterns (titles, metadata, keywords)
   - API documentation style (properties, methods, events format)
   - Repository organization (file paths, naming conventions)

**IMPORTANT:** Use only as reference patterns. Never copy content, examples, or descriptions.

**Phase 2: Source Verification**

For each API/event mentioned:
1. Locate source file (Component.cs, *Events.cs, index.js, component.ts, etc.)
2. Extract: Name, Type, Default Value, Accepted Values
3. Record source location (file + line number)
4. Mark verification status (Verified/Requires Evidence)

**Do NOT** perform repository-wide scanning.

**Platform-Specific Source File Patterns:**

| Platform | File Pattern | Notes |
|----------|-------------|-------|
| Blazor | Component.cs, *Events.cs | C# implementation |
| JavaScript | component.js, component.d.ts | JS/TS files |
| Angular | component.ts, *.events.ts | TypeScript |
| React | component.tsx, component.ts | TypeScript/JSX |
| Vue | component.vue, component.ts | Vue SFC or TS |
| ASP.NET Core | Component.cs | C# implementation |
| MAUI | Handler.cs, Component.cs | C# implementation |
| WinForms | Component.cs, Designer.cs | C# implementation |
| WPF | Component.cs, Attached.cs | C# implementation |
| Flutter | component.dart | Dart implementation |
| Xamarin | Component.cs | C# implementation |

**Phase 3: Evidence Matrix Generation**

Create compact verification table:

```markdown
| Item | Type | Source File | Status |
|------|------|-------------|--------|
| PropertyName | Property | Component.cs:45 | ✓ Verified |
| EventName | Event | Component.events.ts:23 | ✓ Verified |
| MethodName | Method | Component.ts:67 | ✓ Verified |
```

Use checkmarks (✓) for verified, (?) for needs evidence.

**Phase 4: Confidence Scoring**

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

**Phase 1: Language-Specific Syntax Validation**

For each code sample, validate language-specific requirements:

| Platform | Validates |
|----------|-----------|
| Blazor | using statements, Razor syntax, @code block |
| JavaScript | require/import, variable declarations, callbacks |
| Angular | imports, decorators, TypeScript types, services |
| React | imports, JSX syntax, hooks, prop types |
| Vue | template, script, style syntax, SFC format |
| ASP.NET Core | using statements, async/await, dependency injection |
| MAUI | using statements, XAML (if applicable), C# syntax |
| WinForms | using statements, event handlers, control hierarchy |
| WPF | using statements, XAML, data binding syntax |
| Flutter | import statements, Dart syntax, widgets |
| Xamarin | using statements, XAML, C# syntax |

**Phase 2: API Usage Validation**

For each code sample:
1. Verify all APIs used exist in source code
2. Verify property/method names match source exactly
3. Verify event names match source exactly
4. Verify method signatures are correct
5. Record status: ✓ Valid or ? Invalid API

**Phase 3: Compilation Check**

For each code sample:
1. Verify syntax is correct for the platform
2. Verify type declarations are valid
3. Verify event bindings are correct
4. Verify component hierarchy is valid
5. Record status: ✓ Compiles or ? Syntax Error

**Validation Matrix:**

```markdown
| Sample # | Syntax | API Usage | Compilation | Status |
|----------|--------|-----------|-------------|--------|
| 1 | ✓ | ✓ | ✓ | ✓ Valid |
| 2 | ✓ | ✓ | ✓ | ✓ Valid |
| 3 | ? | ✓ | ✗ | ? Needs Fix |
```

**Decision Rule:**
- If ALL samples ✓ Valid: PROCEED to Stage 8.5
- If ANY sample ✗ Invalid: List errors and STOP (do not proceed)

---

### Stage 8.5: Global Standards Check

Execute BEFORE final output delivery.

**Phase 1: Platform Accessibility Compliance**

Check documentation meets platform accessibility standards:

| Platform | Accessibility Standards |
|----------|------------------------|
| Blazor | WCAG 2.1 AA (web standard) |
| JavaScript | WCAG 2.1 AA (web standard) |
| Angular | WCAG 2.1 AA (web standard) |
| React | WCAG 2.1 AA (web standard) |
| Vue | WCAG 2.1 AA (web standard) |
| ASP.NET Core | WCAG 2.1 AA (web standard) |
| ASP.NET MVC | WCAG 2.1 AA (web standard) |
| MAUI | MAUI Accessibility Guidelines |
| WinForms | WCAG 2.1 AA (desktop adapted) |
| WPF | WCAG 2.1 AA (desktop adapted) |
| Flutter | Flutter Accessibility Guidelines |
| Xamarin | Xamarin Accessibility Guidelines |

**Checklist:**
```markdown
✓ All images have alt text
✓ All links descriptive
✓ Information accessible without color
✓ Heading hierarchy correct
✓ Code blocks highlighted
✓ Tables have headers
✓ Lists properly formatted
✓ Keyboard navigation (if applicable)
✓ Screen reader compatible
```

**Phase 2: Localization Readiness**

Check documentation is localizable:

1. **No hardcoded strings** in code samples
2. **Strings use resource keys/i18n** (if applicable)
3. **Numbers/dates in locale-neutral format**
4. **No culture-specific examples** (when possible)
5. **UI labels match component** (Platform convention)
6. **RTL compatibility** considered for UI text

**Checklist:**
```markdown
✓ No hardcoded UI strings
✓ Resource keys used (if applicable)
✓ Locale-neutral formatting
✓ Culture-neutral examples
✓ Labels consistent
✓ RTL considerations noted
```

**Phase 3: Platform-Specific SEO**

Verify SEO optimization for platform documentation:

1. **Title**: "[Feature] in [Platform] [Component]" (60 chars max)
   - Examples:
     - Sorting in Blazor DataGrid
     - Sorting in React DataGrid
     - Sorting in Angular DataGrid

2. **Description**: Includes feature, platform, component, use case (160 chars)
3. **H1**: Single, matches title
4. **Keywords**: Feature (2-3x), Platform (1-2x), Component (2-3x)
5. **Word count**: Minimum 500 words (best practice)
6. **Readability**: Grade level 8-10
7. **Internal links**: 3-5 relevant links to related docs

**Phase 4: Cross-Link Validation**

Verify all links are correct for the platform:

1. **Existence**: All links reference existing files in platform-specific path
2. **Format**: Correct format for same-repo/external links
3. **Relevance**: Links are contextually appropriate
4. **No Duplicates**: Related section doesn't repeat links
5. **Anchor Links**: Verify referenced sections exist

**Example Platform Link Formats:**
- Blazor: `/blazor/components/data-grid/sorting`
- Angular: `/angular/components/data-grid/sorting`
- React: `/react/components/data-grid/sorting`
- Vue: `/vue/components/data-grid/sorting`

**Phase 5: Heading Consistency**

Verify heading structure matches platform standards:

1. **Single H1**: Only one `#` in entire document
2. **Hierarchy**: H1 → H2 → H3 (no gaps, matches platform pattern)
3. **Pattern**: Consistent heading patterns across platform
4. **No Orphans**: Every H2 has content or H3s
5. **Length**: Clear and descriptive (3-8 words)

**Decision Rule:**
- If ALL phases ✓ pass: PROCEED to Stage 9
- If ANY phase ✗ fails: REQUEST FIX (can proceed if minor)

---

## Content Generation: Mode-Specific Workflows

### Mode A: New Feature Documentation

**Execute these phases ONLY:**

1. **Classify** – Document type (Phase 1)
2. **Discover** – Identify all scope items (Stage 1)
3. **Verify** – Targeted API/Event verification (Stage 2)
4. **Validate Samples** – Code compilation (Stage 4.5)
5. **Structure** – Generate markdown (Phase 4)
6. **Standards Check** – Accessibility, SEO, links (Stage 8.5)
7. **Self-Review** – Final validation (Phase 8)
8. **Deliver** – 9-section output (Phase 9)

### Mode B: Enhancement Documentation

**Execute these phases ONLY:**

1. **Classify** – Enhancement type (Phase 1)
2. **Discover** – Locate existing doc, identify changes (Stage 1)
3. **Verify** – New APIs/Events only (Stage 2)
4. **Validate Samples** – New code compilation (Stage 4.5)
5. **Update** – Merge into existing markdown (Phase 4)
6. **Standards Check** – Full standards validation (Stage 8.5)
7. **Self-Review** – Final validation (Phase 8)
8. **Deliver** – 9-section output, note existing content (Phase 9)

### Mode C: Documentation Correction

**Execute these phases ONLY:**

1. **Classify** – Correction type (Phase 1)
2. **Discover** – Locate existing doc (Stage 1)
3. **Verify** – Only corrected sections (Stage 2)
4. **Validate Samples** – Corrected code only (Stage 4.5)
5. **Update** – Fix errors in place (Phase 4)
6. **Standards Check** – Corrected sections (Stage 8.5)
7. **Self-Review** – Final validation (Phase 8)
8. **Deliver** – 9-section output, note original + corrections (Phase 9)

### Mode D: API Documentation Only

**Execute these phases ONLY:**

1. **Classify** – API scope (Phase 1)
2. **Discover** – Locate Component source (Stage 1)
3. **Verify** – Extract all properties/methods (Stage 2)
4. **Structure** – Generate API reference table (Phase 5)
5. **Standards Check** – SEO, links (Stage 8.5)
6. **Self-Review** – Final validation (Phase 8)
7. **Deliver** – 5-section output (Phase 9)

### Mode E: Event Documentation Only

**Execute these phases ONLY:**

1. **Classify** – Event scope (Phase 1)
2. **Discover** – Locate *Events source (Stage 1)
3. **Verify** – Extract all events + arguments (Stage 2)
4. **Validate Samples** – Event handler examples (Stage 4.5)
5. **Structure** – Generate event reference table (Phase 5)
6. **Standards Check** – Accessibility, links (Stage 8.5)
7. **Self-Review** – Final validation (Phase 8)
8. **Deliver** – 5-section output (Phase 9)

### Mode F: Migration Documentation

**Execute these phases ONLY:**

1. **Classify** – Migration type (Phase 1)
2. **Discover** – Locate old + new sources (Stage 1)
3. **Verify** – Breaking changes + alternatives (Stage 2)
4. **Validate Samples** – Before/after code (Stage 4.5)
5. **Structure** – Before/After comparison (Phase 4)
6. **Standards Check** – Full standards (Stage 8.5)
7. **Self-Review** – Final validation (Phase 8)
8. **Deliver** – 9-section output with comparison (Phase 9)

---

## Critical Rules

### Assumption Prevention (NEVER DO)

❌ Invent APIs  
❌ Invent events  
❌ Invent default values  
❌ Invent behaviors  
❌ Invent platform support  
❌ Copy content from another component  
❌ Copy examples from another component  
❌ Copy API descriptions from another component  
❌ Assume unverified feature behaviors  
❌ Proceed without sufficient information  

### Information Collection (ALWAYS DO)

✓ Collect platform, component, scope before starting  
✓ Verify source of truth is available  
✓ Extract platform standards from existing docs  
✓ Use reference patterns ONLY (no copying)  
✓ Verify every API against source code  
✓ Verify every event against source code  
✓ Stop if confidence falls below 95%  
✓ Mark all gaps explicitly  
✓ Request clarification for ambiguities  

---

## Compact Output Format (9 Sections)

Deliver documentation in this exact order:

```
1. Classification
   - Type: [Mode A-F]
   - Platform: [Blazor/Angular/React/etc.]
   - Reasoning: [1 sentence]

2. Discovery Summary
   - Platform: [Name]
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
   - Platform Path: [Path]
   - File: [Path]
   - Action: [New/Update/Correct]
   - TOC: [Changes if needed]

6. Platform Standards Validation
   ✓ Accessibility
   ✓ Localization
   ✓ SEO
   ✓ Cross-links
   ✓ Headings

7. Markdown Content
   [Complete, ready-to-commit]

8. Self-Review Summary
   ✓ [Checklist items passed]
   ✗ [Any items failed - stop if found]

9. Commit Readiness
   Status: [Ready/Needs Review]
   Platform: [Confirmed]
   Confidence: [Score]
   Reason: [If not ready]
```

---

## Success Criteria

Documentation is **READY TO COMMIT** when ALL are true:

1. ✓ Platform information confirmed
2. ✓ 95%+ verification confidence
3. ✓ All APIs traced to source (file + line)
4. ✓ All events traced to source (file + line)
5. ✓ Default values confirmed
6. ✓ Code samples compile-ready & platform-correct
7. ✓ Accessibility standards met
8. ✓ SEO metadata valid for platform
9. ✓ Heading structure correct
10. ✓ All links verified to exist
11. ✓ Repository actions explicit

If ANY criterion fails: **STOP and list gaps**. Do not generate output.

---

## Using This Skill

1. **State Documentation Mode** (A-F)
2. **Provide Platform Name**
3. **Provide Component Name**
4. **Provide Feature/Scope**
5. **Provide Source Code Access**
6. **Skill Validates Information Checklist**
7. **Skill Executes Two-Stage Workflow**
8. **Deliver 9-Section Output**
9. **Documentation is Ready for Commit**

---

## Platform-Specific Notes

### Blazor

- Follow Syncfusion Blazor User Guide standards
- C# component files (Component.cs, *Events.cs)
- Razor markup syntax
- Using statements for Syncfusion.Blazor.*
- Refer to existing Blazor documentation for patterns

### JavaScript/TypeScript Platforms (Angular, React, Vue)

- Follow platform-specific documentation standards
- JavaScript/TypeScript source files (.ts, .tsx, .vue, .js)
- Platform-specific import/require syntax
- Platform-specific code sample conventions
- Refer to existing platform-specific documentation for patterns

### Desktop Platforms (WinForms, WPF, MAUI)

- Follow platform documentation standards
- C# implementation files
- Designer files (if applicable)
- XAML files (if applicable)
- Refer to existing platform documentation for patterns

### Mobile Platforms (Flutter, Xamarin)

- Follow platform documentation standards
- Dart (.dart) or C# (.cs) source files
- Platform-specific package/using syntax
- Mobile-specific code sample conventions
- Refer to existing platform documentation for patterns

---

## Next Steps

When using this skill:

1. **Validate Required Information** (information collection gate)
2. **Extract Platform Standards** (from existing docs)
3. **Execute Discovery** (Stage 1)
4. **Execute Verification** (Stage 2)
5. **Validate Samples** (Stage 4.5, if applicable)
6. **Generate Content** (Modes A-F)
7. **Global Standards Check** (Stage 8.5)
8. **Self-Review** (Stage 8)
9. **Deliver Output** (9 sections)
10. **Documentation Ready for Commit**
