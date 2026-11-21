# UG Documentation Skill - Production-Grade Syncfusion Documentation Generator

Generate production-ready Syncfusion User Guide documentation by extracting explicit user input, enforcing strict validation gates, and maintaining documentation integrity through reference-based authoring.

**Level**: Advanced | **Mode**: Autonomous Cloud Agent | **Output**: Customer-facing documentation

---

## Core Philosophy

**EXTRACTION ≠ ASSUMPTION | SPECIFICATION ≠ DOCUMENTATION | REFERENCE ≠ CONTENT**

```
✓ EXTRACT: Information explicitly provided by user
✓ VERIFY: Feature content from specifications/source
✓ REFERENCE: Structure/style from existing documentation
✗ INVENT: Never generate unverified content
✗ INFER: Never assume structure, style, or organization
```

---

## Required Inputs (Five Mandatory - No Exceptions)

1. **Platform** - Blazor, EJ2 JavaScript, Angular, React, Vue, ASP.NET Core, MAUI, WinUI, WPF, or other
2. **Component** - Grid, TreeGrid, Scheduler, Gantt, Diagram, Kanban, Pivot Table, Charts, or other
3. **Request Type** - New Feature Documentation, Existing Documentation Update, API Documentation Update, Feature Enhancement Documentation, Migration Documentation, Bug Behavior Documentation, Cross-Feature Documentation, or Other
4. **Feature Name** - Exact feature being documented (specific, unambiguous)
5. **Feature Source** - Specification, Design Document, PR, Source Code, Work Item, Test Cases, or other approved source

**All five inputs are mandatory.** Documentation generation cannot proceed until all five are explicitly provided by the user. No assumptions. No inferences. No defaults.

**Documentation Reference:** Determined automatically during Step 4 (Documentation Reference Enforcement).

---

## Execution Workflow (Non-Bypassable)

```
Step 1: Input Extraction & Validation
Step 2: Feature Source Sufficiency Validation
Step 3: Supported Feature Combination Validation
Step 4: Documentation Reference Enforcement
Step 5: Documentation Pattern Analysis
Step 6: Feature Content Verification
Step 7: Runnable Sample Validation
Step 8: Documentation Generation
Step 9: Syncfusion UG Quality Gate
Step 10: Final Output
```

Each step must complete before proceeding to the next.

---

## Step 1: Input Extraction & Validation (Mandatory Gate - Zero Assumptions)

### Extract (From User Input Only)

```
✓ Platform: Explicitly stated (never inferred)
✓ Component: Explicitly stated (never inferred)
✓ Request Type: Explicitly stated (never inferred)
✓ Feature Name: Explicitly stated (never inferred)
✓ Feature Source: Explicitly stated (never inferred)
✓ Documentation Reference: Explicitly stated (never inferred)
```

### Validate Each Input

**Platform Validation:**
```
✓ Must be explicitly supplied by user
✓ Cannot be inferred from feature name, component, or repository
✓ Must be one of: Blazor, EJ2 JavaScript, Angular, React, Vue, 
                  ASP.NET Core, MAUI, WinUI, WPF, or clearly stated
✗ REJECT: "modern platform", "web framework", "your platform"
✗ REJECT: Implied from component name or documentation reference

IF MISSING: STOP
REQUEST: "Which platform?"
```

**Component Validation:**
```
✓ Must be explicitly supplied by user
✓ Cannot be inferred from feature name or documentation reference
✓ Must be one of: Grid, TreeGrid, Scheduler, Gantt, Diagram, Kanban,
                  Pivot Table, Charts, or clearly stated
✗ REJECT: "grid component", "data component", "your component"
✗ REJECT: Implied from feature name or repository

IF MISSING: STOP
REQUEST: "Which component?"
```

**Request Type Validation:**
```
✓ Must be explicitly supplied by user
✓ Cannot be inferred from wording or context
✓ Must be one of: New Feature Documentation, Existing Documentation Update,
                  API Documentation Update, Feature Enhancement Documentation,
                  Migration Documentation, Bug Behavior Documentation,
                  Cross-Feature Documentation, Other
✗ REJECT: "create documentation", "update docs", "generate article"
✗ REJECT: Inferred from feature description

IF MISSING: STOP
REQUEST: "What type of documentation?"
```

**Feature Name Validation:**
```
✓ Must be explicitly supplied and specific
✓ Must be exact feature name (not generic category)
✗ REJECT: "Foreign Key" (which feature? Column? Filter? Both?)
✗ REJECT: "Grid documentation"
✗ REJECT: "Update feature docs"
✗ REJECT: "Improve documentation"
✗ REJECT: "TreeGrid enhancement"
✗ REJECT: "Create samples"

ACCEPT: "Foreign Key Column", "Custom Editing", "Virtual Scrolling"

IF MISSING or VAGUE: STOP
REQUEST: "What is the exact feature name?"
```

**Feature Source Validation:**
```
✓ Must identify where feature behavior is documented/implemented
✓ Must be one of: Specification, Design Document, PR, Source Code,
                  Work Item, Test Cases, other approved source
✓ Must be accessible or clearly described
✗ REJECT: "Just create documentation"
✗ REJECT: "Use repository"
✗ REJECT: "Refer to code"
✗ REJECT: "No specific source"

ACCEPT: "PR #2456", "Specification URL: https://...", 
        "Source code: /src/features/ForeignKey.ts",
        "Test file: tests/ForeignKey.test.ts"

IF MISSING or VAGUE: STOP
REQUEST: "What is the feature source?"
```

### Anti-Assumption Enforcement

Before proceeding to Step 2, verify:

```
Can Platform be PROVEN from user input?
  ✓ YES → Continue
  ✗ NO → STOP, REQUEST: "Please specify platform explicitly"

Can Component be PROVEN from user input?
  ✓ YES → Continue
  ✗ NO → STOP, REQUEST: "Please specify component explicitly"

Can Request Type be PROVEN from user input?
  ✓ YES → Continue
  ✗ NO → STOP, REQUEST: "Please specify request type explicitly"

Can Feature Name be PROVEN from user input?
  ✓ YES → Continue
  ✗ NO → STOP, REQUEST: "Please specify feature name exactly"

Can Feature Source be PROVEN from user input?
  ✓ YES → Continue
  ✗ NO → STOP, REQUEST: "Please specify feature source explicitly"
```

### Mandatory Missing Input Gate

If ANY required input is missing:

**STOP immediately.**

Request ALL missing information in a single response:

```
Please provide all of the following:

□ Platform (Blazor | EJ2 JavaScript | Angular | React | Vue | 
           ASP.NET Core | MAUI | WinUI | WPF | Other)

□ Component (Grid | TreeGrid | Scheduler | Gantt | Diagram | 
            Kanban | Pivot Table | Charts | Other)

□ Request Type (New Feature Documentation | Existing Documentation Update |
               API Documentation Update | Feature Enhancement Documentation |
               Migration Documentation | Bug Behavior Documentation |
               Cross-Feature Documentation | Other)

□ Feature Name (exact, specific feature name - not generic)

□ Feature Source (Specification | Design Document | PR | Source Code | 
                 Work Item | Test Cases | Other - must be specific)

Documentation generation cannot proceed until all mandatory inputs are supplied.
```

**WAIT for user response with all five inputs before proceeding to Step 2.**

Note: Documentation Reference will be automatically determined during Step 4.

### Step 1 Success Criteria

All of the following must be true:

✓ Platform is explicitly stated and verifiable
✓ Component is explicitly stated and verifiable
✓ Request Type is explicitly stated and verifiable
✓ Feature Name is specific and unambiguous
✓ Feature Source is identified and accessible
✓ No assumptions made for any input
✓ No inference used for any input
✓ All inputs are explicit user-provided values

If all criteria met: Continue to Step 2
If any criterion not met: STOP and request missing information

Note: Documentation Reference determination is deferred to Step 4.

---

## Step 2: Feature Source Sufficiency Validation

**Required feature information:**
```
✓ Feature purpose (What does it do?)
✓ Feature behavior (How does it work?)
✓ Public APIs (Properties, Methods, Events if applicable)
✓ Supported scenarios (What can users do?)
✓ Limitations/restrictions (What doesn't work?)
```

**Validation rules:**
```
✓ ALL present → Continue
◐ PARTIAL → Identify gaps, request only missing details
✗ CRITICAL missing → STOP, request complete source
```

**Critical rule:**
```
Never invent undocumented behavior.
Never fill gaps using assumptions.
```

---

## Step 3: Supported Feature Combination Validation

**Validate feature interactions using feature source only:**

```
For target feature, verify:
  ✓ Feature + Filtering (if applicable)
  ✓ Feature + Sorting (if applicable)
  ✓ Feature + Editing (if applicable)
  ✓ Feature + Exporting (if applicable)
  [Other relevant interactions]

Validation rules:
  ✓ Verified Supported → Document as supported
  ✗ Verified Not Supported → Document as limitation
  ? Unable to Verify → Flag "Requires Validation", do NOT document
```

**Critical rule:**
```
NEVER document interactions without source verification.
NEVER infer feature parity with similar features.
```

---

## Step 4: Documentation Reference Enforcement (CRITICAL)

**This is the most critical gate. Do NOT skip or minimize.**

**Purpose:** Extract documentation structure from existing documentation, NOT from inference or assumptions.

**Required inputs:**
```
✓ Documentation Reference (existing UG article, component docs, or guideline)
```

**If missing:**
```
REQUEST:
"Please provide a documentation reference:
□ Existing User Guide article for this component
□ Documentation for similar feature in same component
□ Repository documentation standard/template
□ Component authoring guideline"

ANALYSIS CANNOT PROCEED WITHOUT REFERENCE.
```

**Analysis to extract:**
```
From reference document, analyze and document:
  1. Heading hierarchy (H1, H2, H3 levels)
  2. Section ordering (What comes first, second, etc.)
  3. Learning flow (How topics are introduced)
  4. Sample placement (When samples appear)
  5. API reference placement (Where APIs documented)
  6. Note formatting (Style for notes)
  7. Warning formatting (Style for warnings)
  8. Cross-reference structure (How links are formatted)
  9. See Also section structure (How related topics listed)
  10. Terminology (Specific terms used in component docs)
```

**Create Documentation Blueprint:**
```
From analysis, create explicit blueprint showing:
  ✓ Exact heading levels to use
  ✓ Exact section order
  ✓ Exact note format
  ✓ Exact warning format
  ✓ Exact sample structure
  ✓ Exact API placement
```

**Critical separation:**
```
Documentation Reference provides: Structure, style, organization ONLY
Feature Source provides: All feature content (APIs, events, behavior, samples)

NEVER use documentation reference for:
  ✗ APIs (use feature source)
  ✗ Events (use feature source)
  ✗ Properties (use feature source)
  ✗ Behaviors (use feature source)
  ✗ Limitations (use feature source)
  ✗ Sample logic (use feature source)
```

---

## Step 5: Documentation Pattern Analysis

**Input:** Documentation Reference (analyzed in Step 4)

**Output:** Documentation Blueprint showing:

```
Heading Hierarchy:
  # [Feature Name]
  ## [Section Name]
  ### [Subsection Name]
  [etc.]

Section Order:
  1. [First section]
  2. [Second section]
  3. [Third section]
  [etc.]

Sample Placement:
  [Where in document samples appear]

API Reference Placement:
  [Where API documentation appears]

Note Format:
  [Exact markdown/HTML format for notes]

Warning Format:
  [Exact markdown/HTML format for warnings]

Terminology Mapping:
  [Terms used in reference for specific concepts]
```

**Generation blocked until blueprint exists.**

---

## Step 6: Feature Content Verification

**Verify every claimed feature against source:**

```
For every statement in documentation:
  ✓ Trace to: Specification, source code, PR, test, or verified documentation
  ✓ Verify: Statement accurately reflects source
  
If source cannot be found:
  ✗ REMOVE the statement
  ✗ Do NOT invent or assume
```

**Never generate without source backing:**
```
✗ Best practices (unless in source)
✗ Recommendations (unless in source)
✗ Performance tips (unless in source)
✗ Migration advice (unless in source)
✗ Known behaviors (unless in source)
```

---

## Step 7: Runnable Sample Validation

**Documentation samples must be runnable, not illustrative.**

**Sample source priority:**
```
Priority 1: Existing UG sample (from same or similar feature)
Priority 2: Existing product sample
Priority 3: Existing test case
Priority 4: Existing implementation pattern in source code
Priority 5: Generated sample (last resort only)
```

**Before generating sample, verify:**
```
✓ All APIs referenced exist in source
✓ All events referenced exist in source
✓ All properties referenced exist in source
✓ All models referenced exist in source
✓ Feature combination verified as supported
✓ Syntax valid for target platform
```

**Generated sample must:**
```
✓ Be self-contained (can run independently)
✓ Include required imports/declarations
✓ Include required model definitions
✓ Include required datasource setup
✓ Be conceptually compilable
✓ Demonstrate the feature clearly
```

**Avoid:**
```
✗ Partial snippets (unless specifically showing code snippet)
✗ Pseudo-code (use real, valid code)
✗ Code without required setup
✗ Code missing imports or models
```

---

## Step 8: Documentation Generation

**Generate using Documentation Blueprint from Step 5.**

**Rules:**
```
✓ Use ONLY verified content from Steps 2-7
✓ Follow exact structure from blueprint
✓ Use exact formatting from blueprint
✓ Use terminology from blueprint
✓ Include only verified feature combinations
✓ Use only backed samples
```

**Never:**
```
✗ Infer sections not in blueprint
✗ Reorder sections from blueprint
✗ Add content without source verification
✗ Use different formatting than blueprint
```

---

## Step 9: Syncfusion UG Quality Gate

**Before final output, verify generated documentation:**

```
✓ Looks like a Syncfusion User Guide article
✓ User scenarios presented before APIs
✓ Examples presented before API reference
✓ Structure matches documentation blueprint exactly
✓ Terminology matches reference documentation
✓ Samples are source-backed and runnable
✓ All claims are verified from source
✓ No invented content exists
✓ No hallucinated sections exist
```

**Reject if resembles:**
```
✗ Technical Design document
✗ Enhancement Proposal
✗ Feature Specification
✗ API Reference Only
✗ Release Notes
✗ Engineering documentation
✗ Generic AI-generated content
```

**If quality gate fails:**
```
IDENTIFY: What failed and why
REGENERATE: Address specific failure
RE-VERIFY: Against quality criteria
OR REPORT: Gaps preventing successful generation
```

---

## Step 10: Final Output

**Deliver:**
```
1. Documentation Content (markdown)
   - Follows blueprint structure
   - Source-backed content
   - Runnable samples
   - Verified interactions

2. References Used
   - Feature specification/source
   - Documentation reference used
   - Sample sources
   - Verified feature combinations

3. Known Gaps
   - Content that could not be verified
   - Interactions requiring clarification
   - Samples requiring testing
   - Areas needing validation

4. Documentation Blueprint Used
   - Structure applied
   - Style conventions used
   - Terminology mapping
```

---

## Strict Content Verification Rules

**For every content element:**

```
Heading: Must match blueprint structure
Paragraph: Must trace to specification or source
API: Must exist in source code
Event: Must exist in source code
Property: Must exist in source code
Sample: Must use verified APIs from source
Note: Must be formatted per blueprint
Warning: Must be formatted per blueprint
Example: Must demonstrate verified feature combination
Limitation: Must be documented in source
```

**Hallucination Prevention:**
```
Before including any content:
  ✓ Can I trace this to the feature source?
  ✓ Is this actually documented or is it my inference?
  ✓ Would a Syncfusion engineer recognize this?
  
If "maybe" or "probably":
  → REMOVE and flag as gap
  
Never guess about feature behavior.
Never invent best practices.
Never assume interactions work.
```

---

## Source Priority (When Conflicts Exist)

```
Priority 1: Specification document (approved, formal)
Priority 2: Technical design document (approved, detailed)
Priority 3: Source code (implemented truth)
Priority 4: Pull request (includes changes and reasoning)
Priority 5: Test cases (demonstrate behavior)
Priority 6: Existing documentation (proven patterns)
Priority 7: User explanation (if all above unavailable)
```

**When sources conflict:**
```
✓ Use highest-priority source
✓ Report conflict transparently
✓ Flag for review
```

---

## Decision Matrix

| Situation | Action |
|-----------|--------|
| All inputs provided | PROCEED to Step 2 |
| Feature source missing | REQUEST: "Feature source?" |
| Documentation reference missing | REQUEST: "Documentation reference?" |
| Feature behaviors unclear in source | REQUEST: "Clarify: [specific behavior]?" |
| Feature combination unverified | FLAG: "Requires validation" |
| Documentation blueprint missing | CREATE: Analyze reference first |
| Sample cannot be sourced | FLAG: "Unable to source, requires manual creation" |
| Content unverifiable | REMOVE: "No source available" |
| Quality gate fails | REPORT: Specific failures, DO NOT force output |

---

## Success Criteria

Generated documentation must:

```
✓ Follow Syncfusion documentation standards exactly
✓ Use reference only for structure and style (not content)
✓ Source all feature content from specifications/source/PRs/tests
✓ Provide source-backed, runnable samples
✓ Prevent generic AI-generated documentation
✓ Prevent hallucinated sections
✓ Produce customer-facing UG documentation
✓ Be indistinguishable from existing Syncfusion articles
✓ Remain fully traceable to sources
✓ Include transparent gap reporting
```

---

## Non-Bypassable Gates

Documentation generation can ONLY proceed through these gates in order:

1. ✓ Input Extraction & Validation
2. ✓ Feature Source Sufficiency
3. ✓ Supported Combinations
4. ✓ Documentation Reference Enforcement (CRITICAL)
5. ✓ Documentation Pattern Analysis
6. ✓ Feature Content Verification
7. ✓ Runnable Sample Validation
8. ✓ Documentation Generation
9. ✓ Syncfusion UG Quality Gate
10. ✓ Final Output Delivery

**No shortcuts. No skipping. No bypasses.**

---

## When to STOP (Do Not Proceed)

```
✗ Feature source missing or insufficient → Request source
✗ Documentation reference missing → REQUEST reference
✗ Feature behaviors cannot be verified → Request clarification
✗ Feature combination unverifiable → Flag for manual verification
✗ Sample cannot be sourced → Request sample or reference
✗ Content cannot be traced to source → Remove content
✗ Quality gate fails → Report failures, do NOT force output
```

**STOP means STOP. Do not force output. Report what's missing.**
