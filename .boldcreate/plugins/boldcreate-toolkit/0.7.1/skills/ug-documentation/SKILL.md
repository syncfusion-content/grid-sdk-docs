# UG Documentation Skill - Strict Validation with Autonomous Execution

Create production-ready Syncfusion User Guide documentation by extracting explicit user input and proceeding autonomously when sufficient information exists.

**Level**: Advanced | **Mode**: Autonomous Cloud Agent | **Platforms**: 12 Syncfusion frameworks

---

## Core Philosophy

**EXTRACTION ≠ ASSUMPTION**

```
✓ EXTRACT: Information explicitly provided by user (use immediately)
✗ ASSUME: Information missing, inferred, or guessed (NEVER do this)
✓ PROCEED: When all required information available (act autonomously)
✗ CONFIRM: Unnecessary confirmation loops (eliminate these)
```

---

## Supported Platforms (12)

Blazor, JavaScript, Angular, React, Vue, ASP.NET Core, ASP.NET MVC, MAUI, WinForms, WPF, Flutter, Xamarin

---

## Documentation Types

- New Feature Documentation
- Feature Enhancement Documentation
- Documentation Correction
- API Documentation Only
- Event Documentation Only
- Migration Documentation

---

## Execution Model: Extract, Validate, Proceed

### Step 1: Automatic Context Extraction (No Questions Yet)

**When user provides request, extract ALL explicitly stated information:**

```
User Input:
"Create Blazor TreeGrid Foreign Key documentation using PR #2456."

EXTRACT (Do NOT question):
  ✓ Platform: Blazor (explicitly stated)
  ✓ Component: TreeGrid (explicitly stated)
  ✓ Feature: Foreign Key (explicitly stated)
  ✓ Source: PR #2456 (explicitly stated)
  ✓ Type: New Feature (inferred from context as reasonable default)

NO QUESTIONS ASKED YET
```

**Extraction Rules:**
- Extract platform if explicitly named
- Extract component if explicitly named
- Extract feature if explicitly named
- Extract source if URL, PR, or path provided
- Infer type from context as default (New Feature, Enhancement, etc.)
- Do NOT question what is explicitly provided

---

### Step 2: Identify Missing Required Information

**Check if all required fields are available:**

```
Required Fields:
  ✓ Platform: Available?
  ✓ Component: Available?
  ✓ Feature: Available?
  ✓ Source of Truth: Available?

Optional Fields (infer if needed):
  • Request Type: Can infer from context
  • Feature Scope: Can use defaults
```

---

### Step 3: Request Clarification (ONLY for Missing Fields)

**If any required field is missing, ask ONLY for missing fields:**

```
IF Platform missing AND Component missing AND Source missing:

Request:
"Additional information required:

□ Platform
  (Blazor | JavaScript | Angular | React | Vue | ASP.NET Core | 
   ASP.NET MVC | MAUI | WinForms | WPF | Flutter | Xamarin)

□ Component
  (DataGrid | TreeGrid | Scheduler | Kanban | Gantt | Chart | Diagram | Other)

□ Feature Name
  (What feature is being documented?)

□ Source of Truth
  (Specification | PR | Code Repository | Design Document | Other)"

WAIT for response with ONLY the missing information.

Do NOT ask for Platform, Component, Source again if already provided.
```

**Clarification Rule:**
- Ask only for genuinely missing information
- Never ask for information already provided
- Provide context for what is requested

---

### Step 4: Proceed Autonomously (NO Confirmation Step)

**When all required information is available, proceed immediately:**

```
Required Information Available:
  ✓ Platform: Blazor
  ✓ Component: TreeGrid
  ✓ Feature: Foreign Key
  ✓ Source: PR #2456

ACTION: Begin documentation generation immediately
        (NO confirmation step needed)
```

**Proceed Automatically When:**
- ✓ Platform available
- ✓ Component available
- ✓ Feature available
- ✓ Source of Truth available

**Do NOT ask:** "Is this correct? YES/NO" - This step is eliminated.

---

## Strict No-Assumption Policy

### What NEVER to Assume

```
❌ Never assume Platform
   User says "Create documentation for grid"
   → CANNOT assume Blazor (Could be React, Vue, Angular, etc.)
   → MUST ask: "Which platform?"

❌ Never assume Component
   User says "Create documentation for foreign key feature"
   → CANNOT assume DataGrid (Could be TreeGrid, etc.)
   → MUST ask: "Which component?"

❌ Never assume Feature Scope
   User says "Create documentation"
   → CANNOT assume all sections
   → Use default scope or ask if ambiguous

❌ Never assume Request Type
   User says "Create documentation for sorting"
   → Can infer as New Feature (reasonable default)
   → OK to proceed with inference

❌ Never assume APIs/Events
   → ONLY verify from provided source
   → Never invent API names

❌ Never assume Behavior
   → Only document verified behavior from source
   → Report gaps transparently
```

### What CAN Infer (Reasonably)

```
✓ CAN infer Request Type from context
  "Create X" → Probably New Feature
  "Update X" → Probably Enhancement
  "Fix X" → Probably Correction

✓ CAN infer Scope with defaults
  No scope specified → Use standard sections

✓ CAN infer Type from component behavior
  "Sorting in DataGrid" → Feature Enhancement (likely)

✓ CAN infer implementation patterns
  "Blazor DataGrid" → Use Razor/C# patterns
```

---

## Source Access Rules

### Sources User Can Provide

When user provides ANY of these, they are pre-approved for analysis:

```
✓ Specification Document (URL or path)
✓ Technical Design (URL or path)
✓ Pull Request (PR number or URL)
✓ Repository Path (code location)
✓ Source Code File (direct or path)
✓ Documentation Reference (URL)
```

### Analysis Without Re-Permission

**If user provides a source, analyze it immediately:**

```
User: "Create Blazor DataGrid sorting documentation using PR #2456."

Provided: PR #2456

ACTION: Analyze PR #2456 immediately
        (NO additional permission needed)
        (Source is already approved)
```

**Rule:**
- Provided sources are considered approved
- Do not re-ask for permission
- Analyze without additional confirmation

---

## Source Priority (When Conflicts Exist)

**Use in this strict order:**

```
Priority 1: Approved Specification Document
Priority 2: Approved Technical Design Document
Priority 3: Implemented Source Code
Priority 4: Approved Pull Request
Priority 5: Existing Documentation
Priority 6: User Description/Narrative
```

**Conflict Resolution:**
- Use highest-priority source
- Report conflict under "Known Gaps"
- Document discrepancy for user review

---

## Decision Matrix for Autonomous Execution

| Situation | Action |
|-----------|--------|
| Platform explicit, Component explicit, Feature clear, Source provided | **PROCEED IMMEDIATELY** |
| Platform missing | Ask ONLY for platform |
| Component missing | Ask ONLY for component |
| Both Platform & Component missing | Ask for both (not all fields) |
| Source missing | Ask for source |
| Feature ambiguous | Ask for clarification (minimal) |
| Information complete | **PROCEED IMMEDIATELY** |
| Conflicting sources | Use highest priority, report conflict |
| Minor verification gap | Generate and report gap |
| Major source ambiguity | Request clarification before proceeding |

---

## Interaction Pattern Examples

### Example 1: Complete Request (Proceed Immediately)

```
User Input:
"Create Blazor TreeGrid Foreign Key Column documentation.
Type: New Feature.
Scope: APIs and Events.
Source: PR #2456 with specification."

Extract:
  ✓ Platform: Blazor
  ✓ Component: TreeGrid
  ✓ Feature: Foreign Key Column
  ✓ Type: New Feature
  ✓ Scope: APIs and Events
  ✓ Source: PR #2456

ACTION: Proceed immediately (no confirmation, no questions)

Output: [Generate documentation directly]
```

### Example 2: Partial Request (Ask Only Missing)

```
User Input:
"Create documentation for Foreign Key Column feature."

Extract:
  ✓ Feature: Foreign Key Column
  ✗ Platform: (NOT stated)
  ✗ Component: (NOT stated)
  ✗ Source: (NOT stated)

ACTION: Ask only for missing information

Request:
"I found: Feature = Foreign Key Column

Please provide:
□ Platform (Blazor | JavaScript | Angular | React | Vue | etc.)
□ Component (DataGrid | TreeGrid | Other)
□ Source of Truth (Spec | PR | Code | Other)"

(Do NOT ask for Feature again - already provided)
```

### Example 3: Ambiguous Request (Minimal Clarification)

```
User Input:
"Create documentation for grid sorting."

Extract:
  ✓ Feature: Sorting
  ✓ Component: Grid (generic, likely DataGrid)
  ✗ Platform: (NOT stated)
  ✗ Source: (NOT stated)

ACTION: Ask only missing required information

Request:
"Feature: Sorting
Component appears to be DataGrid (grid = DataGrid?)

Please confirm or provide:
□ Platform (Blazor | JavaScript | Angular | React | Vue | etc.)
□ Exact Component if different (DataGrid | TreeGrid | Other)
□ Source of Truth (Spec | PR | Code | Other)"

(Minimal clarification, maximum extraction)
```

---

## Output Format (4 Sections)

```
1. Documentation Content
   (Production-ready markdown)

2. References Used
   (Sources verified)

3. Known Gaps
   (Unresolved items, if any)

4. Suggested Repository Updates
   (File paths, TOC changes)
```

---

## Verification Status (No Confidence Percentages)

When documenting verification, use:

```
✓ Verified       (Confirmed in source)
◐ Partially Verified (Partial confirmation found)
? Requires Validation (Mentioned but not verified)
✗ Unable to Verify (Not found in sources)
```

---

## When to Proceed vs. When to Clarify

### PROCEED Immediately When

```
✓ Platform: Blazor (or any of 12)
✓ Component: DataGrid (or any valid component)
✓ Feature: [Name provided]
✓ Source: PR #1234 (or spec URL or code path)

→ All required fields present
→ Begin documentation generation immediately
```

### REQUEST Clarification When

```
✗ Platform missing ("modern platform"?)
✗ Component missing ("for a component"?)
✗ Feature ambiguous ("that feature"?)
✗ Source missing (no reference provided)
✗ Information conflicts (sources disagree)

→ Ask for missing/conflicting information ONLY
→ Do not re-confirm already-provided information
```

---

## Rules Summary

### Extraction Rules
```
✓ Extract all explicitly provided information
✓ Use extracted information immediately
✓ Do NOT question explicit user input
✓ Do NOT ask user to repeat provided information
```

### Assumption Rules
```
❌ Never assume Platform
❌ Never assume Component
❌ Never assume APIs/Events
❌ Never assume Behavior
✓ Can infer Request Type as reasonable default
✓ Can infer Scope with defaults
```

### Clarification Rules
```
✓ Ask ONLY for genuinely missing information
✓ Ask ONLY for ambiguous information
✓ Ask ONLY for conflicting information
✗ Do NOT ask for complete info again
✗ Do NOT ask for confirmation after all info collected
```

### Autonomy Rules
```
✓ Proceed immediately when all required info available
✓ Analyze provided sources without re-permission
✓ Use source priority when conflicts exist
✓ Report gaps and conflicts transparently
✗ Do NOT wait for confirmation
✗ Do NOT repeat information collection
```

---

## Component-Specific Context Enforcement

**CRITICAL RULE: Once Component is identified, operate in component isolation mode.**

### Component Isolation Principle

```
After Component identification:

Component = TreeGrid
↓
ALL analysis, verification, documentation, examples, 
and recommendations MUST be restricted to TreeGrid ONLY

Do NOT import, copy, inherit, or assume behavior from:
  ❌ DataGrid
  ❌ Scheduler
  ❌ Gantt
  ❌ Kanban
  ❌ Diagram
  ❌ Chart
  ❌ Any other component

UNLESS source explicitly states shared behavior
```

### Component-Specific Validation (Pre-Generation)

Before generating documentation, validate feature compatibility ONLY for target component:

```
Example:
  Component: TreeGrid
  Feature: Foreign Key Column

Validate ONLY TreeGrid support:
  ✓ TreeGrid + ForeignKey + Filtering?
  ✓ TreeGrid + ForeignKey + Sorting?
  ✓ TreeGrid + ForeignKey + Editing?
  ✓ TreeGrid + ForeignKey + Exporting?
  
Do NOT validate:
  ✗ DataGrid + ForeignKey (different component)
  ✗ Grid family patterns (overgeneralization)
```

### Component-Specific API Verification

```
RULE: Property exists in DataGrid ≠ Property exists in TreeGrid

Mandatory component-specific verification:

Include ONLY:
  ✓ Properties belonging to target component
  ✓ Events belonging to target component
  ✓ Methods belonging to target component
  ✓ Interfaces for target component
  ✓ Models/Enums for target component

Exclude UNLESS verified:
  ❌ APIs from other components
  ❌ Behavior from similar components
  ❌ Inherited APIs without verification
```

### Component-Specific Sample Generation

```
Rule: All samples MUST use target component exclusively

Example:
  Component: TreeGrid
  Feature: Foreign Key Column
  
Generate:
  <SfTreeGrid>...</SfTreeGrid>
  
Do NOT generate:
  ❌ <SfGrid>...</SfGrid>
  ❌ <SfDataGrid>...</SfDataGrid>
  ❌ Generic "grid" code
  
Even if similar functionality exists in other components
```

### Cross-Component Verification Checklist

Before publishing documentation, verify ALL items belong to target component:

```
Verification Checklist:
  ✓ Sample code uses target component?
  ✓ API references belong to component?
  ✓ Event references belong to component?
  ✓ Property references belong to component?
  ✓ Behavioral statements match component docs?
  ✓ Feature limitations verified from component?
  ✓ Supported scenarios verified from component?
  
If any item fails verification:
  → Remove from documentation
  → Re-verify from component source
  → Report gap if verification impossible
```

### Feature Compatibility Matrix (Component-Specific)

Generate compatibility matrix for IDENTIFIED COMPONENT ONLY:

```
Example:
Feature:     Foreign Key Column
Component:   TreeGrid
Platform:    Blazor

Supported Combinations (verified from TreeGrid source):
  ✓ Filtering + Foreign Key Column
  ✓ Sorting + Foreign Key Column
  ✓ Editing + Foreign Key Column
  ✓ Searching + Foreign Key Column

Partially Supported (verified from TreeGrid source):
  ◐ Virtualization + Foreign Key Column

Not Supported (verified from TreeGrid source):
  ✗ Group Caption Templates
  ✗ DetailRow Templates with Foreign Keys

Note: Do NOT include DataGrid or other components
      unless TreeGrid source explicitly confirms feature parity
```

### Documentation Accuracy Rule (Component-Specific)

```
Documentation must represent:

[Target Platform] + [Target Component] + [Target Feature]

Correct:
  "Blazor TreeGrid Foreign Key Column Documentation"

Incorrect:
  "Grid Family Foreign Key Documentation"
  (This implies cross-component applicability that may not exist)
```

---

## Platform-Specific Standards

When information available, automatically apply platform-specific standards:

```
Blazor     → C#, Razor, async/await patterns
JavaScript → TypeScript/JS, callback patterns
Angular    → TypeScript, decorators, modules
React      → TypeScript/JSX, hooks, functional
Vue        → Vue SFC, Composition API
ASP.NET    → C#, dependency injection patterns
MAUI       → C#, cross-platform XAML
Desktop    → C# (WinForms/WPF), UI patterns
Mobile     → Platform-specific patterns
```

---

## Mandatory Validation Before Final Output

**Component-Specific Accuracy Check (CRITICAL)**

Before publishing documentation, confirm ALL of the following:

```
COMPONENT VERIFICATION:
  ✓ All documented APIs belong to [Target Component]?
  ✓ All documented Events belong to [Target Component]?
  ✓ All samples use [Target Component] exclusively?
  ✓ All supported combinations verified for [Target Component]?
  ✓ No cross-component assumptions exist?
  ✓ No content copied from another component without verification?

If ANY verification item fails:
  → Remove the problematic item from documentation
  → Re-verify from component-specific source
  → Report as gap if verification impossible
  
PLATFORM VERIFICATION:
  ✓ Sample code syntax matches [Target Platform]?
  ✓ API usage patterns match [Target Platform]?
  ✓ Code conventions follow [Target Platform] standards?

FEATURE VERIFICATION:
  ✓ Feature behavior matches provided source?
  ✓ All documented scenarios are verified?
  ✓ Limitations explicitly stated from source?
```

---

## Success Criteria

Documentation generation is complete when:

1. ✓ All required information explicitly provided or extracted
2. ✓ No invalid assumptions made
3. ✓ Source(s) analyzed using priority order
4. ✓ APIs/Events verified from component-specific source
5. ✓ Code samples verified against component APIs
6. ✓ All items belong to target component (verified)
7. ✓ No cross-component content included
8. ✓ Gaps reported transparently
9. ✓ Output ready for repository commit
10. ✓ Verification status clear (✓/◐/?/✗)

---

## Next Steps for User

When requesting documentation:

**Provide explicitly:**
- Platform (if requesting specific platform)
- Component (if requesting specific component)
- Feature or scope
- Source (spec, PR, code path, etc.)

**The skill will then:**
1. Extract your explicit information
2. Identify any missing required fields
3. Ask ONLY for genuinely missing information
4. Proceed immediately when complete
5. Generate and deliver documentation
