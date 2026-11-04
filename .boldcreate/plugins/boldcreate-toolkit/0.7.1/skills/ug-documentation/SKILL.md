# UG Documentation Skill - Practical & Autonomous

Create production-ready Syncfusion User Guide documentation for any platform with evidence-based accuracy.

**Level**: Advanced | **Mode**: Autonomous Cloud Agent | **Platforms**: 12 Syncfusion frameworks

---

## Overview

This skill generates repository-ready documentation by:
- **Extracting context** from user requests automatically
- **Requesting missing information once** (single consolidated prompt)
- **Verifying evidence** transparently without artificial confidence metrics
- **Generating clean output** without internal workflow details
- **Handling gaps gracefully** while maintaining quality standards
- **Operating autonomously** without excessive human interaction

**Supported Platforms:**
Blazor, JavaScript, Angular, React, Vue, ASP.NET Core, ASP.NET MVC, MAUI, WinForms, WPF, Flutter, Xamarin

**Supported Documentation Types:**
- New Feature Documentation
- Feature Enhancement Documentation
- Documentation Correction
- API Documentation Only
- Event Documentation Only
- Migration Documentation

---

## 🛑 **ZERO-TOLERANCE RULE: NO ASSUMPTIONS, NO FILE ACCESS, EXPLICIT USER INPUT REQUIRED**

**ABSOLUTE RULES (No Exceptions):**

```
❌ NEVER assume platform (even if obvious from context)
❌ NEVER assume component (even if mentioned in passing)
❌ NEVER assume feature scope (even if partially implied)
❌ NEVER assume request type (even if context suggests it)
❌ NEVER assume source of truth location (even if mentioned vaguely)
❌ NEVER read the skill file from environment
❌ NEVER search existing documentation
❌ NEVER browse repository structure
❌ NEVER analyze code without explicit permission
❌ NEVER infer missing details from vague wording
❌ NEVER read files autonomously
❌ NEVER make ANY decision without explicit user input

✓ ONLY use explicitly stated information
✓ ONLY ask user for every missing required field
✓ ONLY proceed after explicit user confirmation
✓ ONLY read files after user permission
```

**Example of VAGUE REQUEST (REJECT immediately):**

```
Request: "Read the ug documentation skill in this environment and create 
UG documentation for foreign key column feature"

Problems:
  ❌ Platform not stated (Blazor? React? Vue? Angular? JavaScript?)
  ❌ Component not stated (DataGrid? TreeGrid? Other?)
  ❌ Feature type not stated (New? Enhancement? Correction?)
  ❌ Scope not defined (APIs? Events? Setup? Examples?)
  ❌ Source of truth not provided (Spec? PR? Code?)
  ❌ Request assumes skill should read from environment
  ❌ Request assumes documentation structure knowledge
  ❌ Request assumes "foreign key column" is on DataGrid

ACTION: REJECT with explicit required fields
```

---

## 🚨 **VAGUE REQUEST REJECTION RULES**

**When to REJECT a request immediately:**

```
❌ REJECT if Platform is not explicitly stated
❌ REJECT if Component is not explicitly stated  
❌ REJECT if Feature Name is not explicitly stated
❌ REJECT if Feature Scope is not explicitly defined
❌ REJECT if Request Type is not explicitly specified
❌ REJECT if Source of Truth is not explicitly provided
❌ REJECT if request contains any assumptions
❌ REJECT if request assumes file reading from environment
❌ REJECT if request assumes existing documentation structure
❌ REJECT if request uses vague wording like "for foreign key column feature"
```

**REJECTION Response Template:**

```
I cannot generate documentation because the request is too vague. 
I do not make assumptions or infer missing details.

Please provide ALL of the following explicitly:

□ PLATFORM (Required, must be explicit)
  Which platform? State clearly:
  - Blazor
  - JavaScript
  - Angular
  - React
  - Vue
  - ASP.NET Core
  - ASP.NET MVC
  - MAUI
  - WinForms
  - WPF
  - Flutter
  - Xamarin

□ COMPONENT (Required, must be explicit)
  Which component? State clearly:
  - DataGrid
  - TreeGrid
  - Scheduler
  - Kanban
  - Gantt
  - Diagram
  - Chart
  - Other (specify)

□ FEATURE NAME (Required, must be explicit)
  What is the feature? Examples:
  - Foreign Key Column
  - Sorting
  - Filtering
  - Grouping
  - Exporting
  - Other (specify)

□ REQUEST TYPE (Required, must be explicit)
  What type of documentation?
  - New Feature Documentation (completely new)
  - Feature Enhancement Documentation (enhancement to existing)
  - Documentation Correction (fix existing docs)
  - API Documentation Only (properties/methods only)
  - Event Documentation Only (events only)
  - Migration Documentation (migration path)

□ FEATURE SCOPE (Required, must be explicit)
  What should be documented? Select all that apply:
  - Configuration and Setup
  - Step-by-step Usage
  - API Reference (properties/methods)
  - Events and Event Handling
  - Code Examples
  - Advanced Scenarios
  - Troubleshooting
  - Other (specify)

□ SOURCE OF TRUTH (Required, must be explicit)
  Where is authoritative information?
  - Specification Document URL
  - Technical Design Document URL
  - Source Code File Path
  - Pull Request Number/URL
  - Requirements Document
  - Other (specify)

After providing ALL of the above explicitly, documentation generation will begin.
```

---

## Execution Model: Strict Single-Pass Information Collection

### Step 1: Evaluate Request Completeness (BEFORE ANY FILE OPERATIONS)

**FIRST ACTION: Check if request has ALL required information explicitly stated.**

```
User Request: "Read the ug documentation skill in this environment and create 
UG documentation for foreign key column feature"

EVALUATION:
  ❌ Platform: NOT STATED (not Blazor? React? Vue?)
  ❌ Component: NOT STATED (not DataGrid? TreeGrid?)
  ❌ Feature Name: VAGUE ("foreign key column" - unclear)
  ❌ Request Type: NOT STATED (New? Enhancement? Correction?)
  ❌ Scope: NOT STATED (APIs? Events? Setup? All?)
  ❌ Source: NOT PROVIDED (no spec, PR, or code path)

ACTION: REJECT - Ask for all missing information
NO FILE READING
NO ASSUMPTIONS
NO INFERENCES
```

**If request is COMPLETE (ALL fields explicitly stated):**

```
User Request: "Create Blazor DataGrid foreign key column documentation. 
Request Type: New Feature. Source: PR #5678 with specification."

EVALUATION:
  ✓ Platform: Blazor (explicitly stated)
  ✓ Component: DataGrid (explicitly stated)
  ✓ Feature: Foreign Key Column (explicitly stated)
  ✓ Type: New Feature (explicitly stated)
  ✓ Source: PR #5678 (explicitly provided)

ACTION: Confirm with user, wait for approval, THEN read files
```

**If request is INCOMPLETE (ANY field missing or vague):**

```
User Request: "Create Blazor documentation for the new feature"

EVALUATION:
  ✓ Platform: Blazor (stated)
  ❌ Component: NOT STATED (which component?)
  ❌ Feature: NOT STATED (which feature?)
  ❌ Type: NOT STATED (New? Enhancement?)
  ❌ Scope: NOT STATED (what sections?)
  ❌ Source: NOT PROVIDED (spec? PR? code?)

ACTION: REJECT - Ask for all missing information explicitly
DO NOT MAKE ASSUMPTIONS
DO NOT READ FILES
DO NOT INFER DETAILS
```

**If user request is complete:**

```
FROM: "Create Blazor DataGrid sorting documentation using spec PR #1234"

UNDERSTAND:
✓ Platform: Blazor (stated)
✓ Component: DataGrid (stated)
✓ Feature: Sorting (stated)
✓ Source: PR #1234 (stated)
✓ Type: New Feature (inferred)

CONFIRM WITH USER:
"I understood you need:
 • Platform: Blazor
 • Component: DataGrid
 • Feature: Sorting
 • Source: PR #1234

Is this correct? [YES/NO]"

[WAIT FOR USER RESPONSE]

If YES: Proceed to verification phase
If NO: Ask for clarification
```

**Rules:**
- **FIRST**: Ask user for information
- **ALWAYS**: Confirm understanding with user
- **WAIT**: For user approval before file access
- **NEVER**: Read files without explicit user permission

---

## 🛑 **FILE ACCESS RULES (MANDATORY)**

### When File Reading Is Prohibited

```
NEVER read or access files:
  ❌ Before collecting user input
  ❌ Before confirming user requirements
  ❌ Without explicit source path from user
  ❌ To "understand existing structure"
  ❌ To "look for similar documentation"
  ❌ To "extract platform standards"
  ❌ To explore the repository
  ❌ Before user says "YES, proceed"
```

### When File Reading Is Allowed

```
ONLY read files:
  ✓ After collecting all required information
  ✓ After user confirms requirements
  ✓ When user explicitly provides source (PR, spec URL, code path)
  ✓ When user says "YES, proceed with verification"
  ✓ To verify APIs in source code (ONLY if user provided source)
  ✓ To verify events in source code (ONLY if user provided source)
  ✓ To extract specifications (ONLY if user provided spec)
```

### Required User Approval Before File Access

```
User provides information → Skill confirms understanding → User approves → File access allowed

Example:
User: "Create Blazor DataGrid sorting documentation using PR #1234"
Skill: "Confirming: Platform=Blazor, Component=DataGrid, Feature=Sorting, Source=PR #1234. Correct?"
User: "Yes, proceed"
Skill: "Accessing PR #1234 for verification..."
```

---

### Step 2: Gap Detection

**If any required information is missing after extraction, ask once:**

```
The request does not contain enough information to generate accurate documentation.

Please provide the following missing details:

□ Platform
  (Blazor, JavaScript, Angular, React, Vue, ASP.NET Core, ASP.NET MVC, MAUI, WinForms, WPF, Flutter, Xamarin)

□ Component
  (DataGrid, TreeGrid, Scheduler, Kanban, Gantt, Chart, Diagram, etc.)

□ Request Type
  □ New Feature Documentation
  □ Feature Enhancement Documentation
  □ Documentation Correction
  □ API Documentation Only
  □ Event Documentation Only
  □ Migration Documentation

□ Feature Name
  (What is the specific feature being documented?)

□ Feature Scope
  (What sections: Setup? Usage? APIs? Events? Examples?)

□ Related APIs (if known)
  (Optional: AllowSorting, SortMode, Sort(), etc.)

□ Related Events (if known)
  (Optional: OnSorting, OnSorted, etc.)

□ Source of Truth
  (Where is the authoritative source? Specification? PR? Code? Requirements?)

After providing these details, documentation generation will begin immediately.
```

**Rules:**
- Ask once - collect ALL missing information in single prompt
- Do NOT ask one question at a time
- Only request fields genuinely missing from request
- Wait for complete response before proceeding

---

## Internal Processing: Discovery, Verification, Validation

### Discovery Phase (Internal)

**Platform-aware scope identification:**

```
Platform:           [Extracted or Provided]
Component:          [Extracted or Provided]
Feature:            [Extracted or Provided]
Request Type:       [Extracted or Provided]
Source of Truth:    [Extracted or Provided]
Existing Docs:      [Repository search - internal]
Related Features:   [From scope - internal]
```

### Verification Phase (Internal)

For each API/Event mentioned in scope:

```
API: AllowSorting

Source File:        Grid.cs
Status:             ✓ Verified
Type:               Property
Purpose:            Enable/disable sorting capability
```

**Verification Status Values (NOT percentages):**
- ✓ Verified (confirmed in source)
- ◐ Partially Verified (found, some details unconfirmed)
- ? Requires User Validation (mentioned in requirements, not in source)
- ✗ Unable to Verify (not found in provided sources)

**Rules:**
- Report source file (path) only - line numbers optional
- Do NOT report confidence percentages (90%, 95%, etc)
- Do NOT calculate readiness scores
- Do NOT estimate verification levels

### Validation Phase (Internal)

- Sample code compiles against source APIs
- Platform-specific syntax is correct
- Documentation follows platform conventions
- All internal links resolve

---

## Output Structure: User-Facing (Simplified)

**Default output contains ONLY:**

```
1. Documentation Content
   └─ Complete, production-ready markdown

2. References Used
   └─ Sources verified for this documentation

3. Known Gaps
   └─ Unresolved verification items (if any)

4. Suggested Repository Updates
   └─ File paths, TOC changes (if needed)
```

**Example Output:**

```markdown
# Sorting in Blazor DataGrid

## Overview
Sorting allows users to organize data...

## Enabling Sorting
```csharp
<GridColumn Field="Name" AllowSorting="true" />
```

## Sorting Modes
The SortMode property controls sort behavior...

[... full documentation content ...]

---

## References Used

- GridColumn.cs (Property definitions)
- GridEvents.cs (Event definitions)
- Specification: PR #1234

## Known Gaps

- SortingEventArgs inheritance chain not verified in provided code
- Browser compatibility notes not available in source

## Suggested Repository Updates

- File: docs/blazor/components/datagrid/sorting.md
- Action: Create new file
- TOC: Add under "Data Operations" section in toc.yml
```

### Optional: Detailed Reports

User can request verification reports:

```
User: "Show me the verification report and evidence matrix"

RESPONSE:
[Verification Report]
[Evidence Matrix]
[Audit Log]
[Internal Workflow Summary]
```

---

## Decision Rules (Internal - Not Exposed)

### Should Generation Proceed?

**YES** if:
- ✓ Primary feature behavior verified
- ✓ Core APIs verified
- ✓ Code samples compile
- ✓ Platform conventions followed

**NO** if:
- ✗ Core feature behavior unverified
- ✗ Source not accessible
- ✗ Request fundamentally ambiguous

### What About Gaps?

**Minor gaps (proceed with generation):**
- Event argument types unconfirmed
- Some default values unknown
- Optional API details missing
- → Generate documentation, report gaps

**Major gaps (request clarification):**
- Feature behavior unclear
- Core APIs not found
- Source of truth unavailable
- → Stop, request clarification

---

## Platform-Specific Processing (Internal)

For each platform, automatically:

1. **Identify source file patterns**
   - Blazor: Component.cs, *Events.cs
   - JavaScript: component.d.ts, component.js
   - Angular: component.ts, *.events.ts
   - (etc. for all platforms)

2. **Extract existing documentation standards**
   - Find 2-3 similar features in platform docs
   - Extract: structure, terminology, code format, SEO patterns
   - Use ONLY as reference (never copy)

3. **Validate platform-specific syntax**
   - Stage 4.5: Language-specific compilation check
   - Example: Blazor @code blocks, React JSX, Vue templates

4. **Apply platform standards**
   - Stage 8.5: Accessibility (WCAG for web, platform-specific for desktop/mobile)
   - SEO: "[Feature] in [Platform] [Component]"
   - Links: Platform-specific repository paths

---

## Documentation Modes

### Mode A: New Feature Documentation
```
Stages: Discovery → Verification → Generation → Validation → Output
Sections: Overview, Setup, Capabilities, API Reference, Events, Examples, See Also
```

### Mode B: Feature Enhancement
```
Stages: Discovery → Verification (new APIs only) → Merge with Existing → Validation → Output
Sections: Add new sections to existing doc
```

### Mode C: Documentation Correction
```
Stages: Discovery → Identify Error → Verification (corrected sections only) → Update → Output
Sections: Fix specific errors, maintain existing good content
```

### Mode D: API Documentation Only
```
Stages: Discovery → Verification → Generate API Table → Output
Sections: API Reference table, examples
```

### Mode E: Event Documentation Only
```
Stages: Discovery → Verification → Generate Event Table → Output
Sections: Event Reference table, examples
```

### Mode F: Migration Documentation
```
Stages: Discovery → Verification (old + new) → Generate Comparison → Output
Sections: Breaking Changes, Migration Path, Examples
```

---

## Evidence Handling

### When Source Code Is Available

```
API: AllowSorting

Source:          GridColumn.cs
Type:            Property (bool)
Default:         false
Setter:          Public
Getter:          Public
Status:          ✓ Verified
```

### When Source Code Is NOT Available

```
API: AllowSorting

Source:          User Requirements / PR #1234 Description
Type:            Property (from spec)
Purpose:         Enable/disable sorting capability
Status:          ? Requires User Validation
Note:            Not verified against source code
```

**Rules:**
- Do NOT block documentation for unverified source
- Mark status clearly (Verified / Partially Verified / Requires Validation)
- Report in "Known Gaps" section
- Generate documentation anyway if feature behavior is clear

### Line Numbers: Optional, Not Required

```
GOOD:
Source: Grid.cs
Status: ✓ Verified

ALSO GOOD:
Source: Grid.cs (line 245)
Status: ✓ Verified

NEITHER REQUIRED NOR BLOCKING
```

---

## Autonomous Context Resolution

### Example 1: Platform + Component Explicit

```
User: "Blazor TreeGrid"

EXTRACT:
Platform:   Blazor
Component:  TreeGrid

RESULT: No questions about platform/component
```

### Example 2: Feature + Source Explicit

```
User: "Create documentation for ForeignKey columns using spec PR #2456"

EXTRACT:
Feature:    ForeignKey columns
Source:     PR #2456

RESULT: No questions about these
```

### Example 3: Partial Information - Ask Once

```
User: "Create Blazor documentation for the new export feature"

EXTRACT:
Platform:   Blazor
Feature:    Export (new feature = Mode A)
Component:  [MISSING]

REQUEST (single, consolidated):
"Missing component name. Which component: DataGrid? TreeGrid? Other?"

RESULT: User provides component name. Proceed immediately.
```

**Rules:**
- Extract all explicitly stated information
- Only ask for genuinely missing information
- Ask once in consolidated format
- Do NOT ask twice for same information
- Do NOT ask for information user already provided

---

## Verification Output Format

**When user requests verification details:**

```
VERIFICATION SUMMARY
════════════════════════════════════════════════════════════════

APIs Verified:
✓ AllowSorting      GridColumn.cs
✓ SortMode          GridColumn.cs
✓ Sort()            Grid.cs
✓ ClearSort()       Grid.cs

Events Verified:
✓ OnSorting         GridEvents.cs
✓ OnSorted          GridEvents.cs

Defaults Verified:
◐ AllowSorting default (not in source)
✓ SortMode default: Ascending

Code Samples:
✓ Sample 1 compiles
✓ Sample 2 compiles
? Sample 3 needs user validation

Known Gaps:
- SortingEventArgs.SortDescriptors type
- Browser compatibility matrix
```

---

## Gap Handling Strategy

### Minor Gaps (Generate & Report)

```
Known Gaps:

- Event argument structure not verified in provided source
- Performance impact data not available
- Mobile browser compatibility not documented

Documentation generated with available information.
These gaps noted for future verification.
```

### Major Gaps (Request Clarification)

```
Cannot generate documentation. Missing critical information:

- Core feature behavior not described in provided sources
- Component not found in repository
- Request type ambiguous

Please provide:
1. Specification document or clear feature description
2. Source code access
3. Clarification on request intent
```

---

## Generation Workflow (Simplified)

```
User Request
    ↓
Extract Context
    ↓
Any Missing Info?
    ├─ YES: Ask Once (single prompt)
    │        Wait for response
    │        Proceed with complete information
    │
    └─ NO: Proceed immediately
    
    ↓
[INTERNAL] Discovery
[INTERNAL] Verification
[INTERNAL] Validation
    ↓
Generate Documentation
    ↓
Default Output:
1. Content
2. References
3. Known Gaps
4. Repository Updates

Optional: Detailed Reports (if requested)
```

---

## Rules for Autonomous Execution

**EXTRACT automatically:**
- ✓ Platform name (if stated)
- ✓ Component name (if stated)
- ✓ Feature name (if stated)
- ✓ Source indicators (PR, spec, file path)
- ✓ Request type (from context)

**ASK ONCE for missing:**
- Platform (if not stated)
- Component (if not stated)
- Feature name (if vague)
- Source of truth (if not indicated)
- Feature scope (if not clear)

**DO NOT:**
- ✗ Ask same question twice
- ✗ Ask for info already provided
- ✗ Calculate confidence percentages
- ✗ Require line numbers
- ✗ Block on minor gaps
- ✗ Expose internal workflow steps
- ✗ Ask questions one-at-a-time

**DO:**
- ✓ Extract all available context
- ✓ Ask once for missing information
- ✓ Report verification status clearly
- ✓ Transparently report gaps
- ✓ Generate gracefully with partial info
- ✓ Output clean, focused documentation
- ✓ Remain autonomous and efficient

---

## Output Examples

### Example 1: Complete Request

```
User: "Create Blazor DataGrid filtering documentation using the spec in PR #1234"

EXTRACT:
Platform: Blazor
Component: DataGrid
Feature: Filtering
Source: PR #1234
Type: New Feature (inferred)

ACTION: Generate immediately (no questions)

OUTPUT:
[Documentation content]
References Used: PR #1234
Known Gaps: None
Repository Updates: Create docs/blazor/components/datagrid/filtering.md
```

### Example 2: Partial Request

```
User: "Create Blazor documentation for the new feature"

EXTRACT:
Platform: Blazor
Feature: (generic - "new feature")
Component: MISSING
Source: MISSING

ACTION: Ask once for missing info

PROMPT:
"Please provide:
- Component (DataGrid? TreeGrid? Other?)
- Feature name
- Source (spec doc? PR? Code?)

After you provide these, documentation will be generated immediately."

[User responds]

ACTION: Generate (no further questions)
```

### Example 3: Very Vague Request

```
User: "Create documentation"

EXTRACT: None

ACTION: Ask once for all information

PROMPT:
"The request does not contain enough information.

Please provide:
- Platform
- Component
- Feature name
- Request type
- Feature scope
- Source of truth

[checklist as shown in Step 2 above]"

[User responds with details]

ACTION: Generate (no further questions)
```

---

## Success Criteria

After refactoring, the skill:

✓ **Reduces interactions by 70-80%**
  - Single consolidated prompt instead of sequential questions
  - Automatic context extraction
  - No repeated requests

✓ **Eliminates confidence hallucinations**
  - No "95% confidence" or similar metrics
  - Clear verification status (Verified / Partially Verified / etc)
  - Transparent gap reporting

✓ **Handles incomplete information gracefully**
  - Generates documentation with available data
  - Reports gaps transparently
  - Does NOT block on minor missing details

✓ **Produces clean, focused output**
  - No internal workflow details
  - Only user-relevant sections
  - Detailed reports available on request

✓ **Operates autonomously**
  - Extracts context automatically
  - Asks for missing info once
  - Proceeds immediately after
  - No excessive back-and-forth

✓ **Maintains enterprise quality**
  - Evidence-based verification
  - Platform-aware generation
  - Production-ready output
  - Transparent methodology

---

## Quick Reference

| Aspect | Before | After |
|--------|--------|-------|
| User interactions | 5-7 sequential questions | 1 consolidated prompt |
| Context extraction | Asked each time | Automatic |
| Confidence reporting | "95% confidence" | "✓ Verified" status |
| Output structure | 9+ sections with internals | 4 user-facing sections |
| Line number requirement | Mandatory | Optional |
| Gap handling | Blocks generation | Reports & continues |
| Token efficiency | ~60-70% reduction | Improved further |
| Autonomous execution | Limited | Maximum |

---

## When to Request Detailed Reports

User can explicitly request:

```
"Show me the verification report"
"Include evidence matrix"
"Show discovery details"
"Include audit log"
```

These will include:
- Discovery Summary
- Verification Report with Evidence Matrix
- Validation Details
- Internal Processing Log

But these are NOT shown by default - only on request.

---

## Final Notes

This skill now operates as a practical, autonomous tool that:

1. **Extracts context automatically** from user requests
2. **Requests missing information once** in consolidated format
3. **Generates documentation** with evidence-based verification
4. **Reports transparently** about what was verified and what gaps remain
5. **Produces clean output** without internal workflow noise
6. **Remains autonomous** without excessive human interaction
7. **Handles incomplete information** gracefully
8. **Maintains enterprise quality** standards

The focus is on **practical efficiency** while preserving **evidence-based accuracy**.
