# UG Documentation Skill - Strict Validation with Autonomous Execution

Create production-ready user guide documentation by extracting explicit user input and proceeding autonomously when sufficient information exists.

**Level**: Advanced | **Mode**: Autonomous Cloud Agent | **Scope**: Platform-agnostic, all components

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
"Create documentation for Foreign Key feature using PR #2456."

EXTRACT (Do NOT question):
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
IF Feature unclear AND Source missing:

Request:
"Additional information required:

□ Feature Name
  (What feature is being documented?)

□ Source of Truth
  (Specification | PR | Code Repository | Design Document | Other)"

WAIT for response with ONLY the missing information.

Do NOT ask for already-provided information again.
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
❌ Never assume Feature Scope
   User says "Create documentation"
   → CANNOT assume all sections
   → Use default scope or ask if ambiguous

❌ Never assume Request Type
   User says "Create documentation for feature"
   → Can infer as New Feature (reasonable default)
   → OK to proceed with inference

❌ Never assume APIs/Events
   → ONLY verify from provided source
   → Never invent API names

❌ Never assume Behavior
   → Only document verified behavior from source
   → Report gaps transparently

❌ Never assume Feature Interactions
   → Only from source verification
   → Never infer from similar features
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
| Feature clear, Source provided | **PROCEED IMMEDIATELY** |
| Source missing | Ask ONLY for source |
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
"Create documentation for Foreign Key Column feature.
Type: New Feature.
Scope: APIs and Events.
Source: PR #2456 with specification."

Extract:
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
  ✗ Source: (NOT stated)

ACTION: Ask only for missing information

Request:
"I found: Feature = Foreign Key Column

Please provide:
□ Source of Truth (Spec | PR | Code | Other)"

(Do NOT ask for Feature again - already provided)
```

### Example 3: Ambiguous Request (Minimal Clarification)

```
User Input:
"Create documentation for sorting feature."

Extract:
  ✓ Feature: Sorting
  ✗ Source: (NOT stated)

ACTION: Ask only missing required information

Request:
"Feature: Sorting detected

Please provide:
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
✓ Feature: [Name provided]
✓ Source: [Reference provided]

→ All required fields present
→ Begin documentation generation immediately
```

### REQUEST Clarification When

```
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
❌ Never assume Feature Scope
❌ Never assume APIs/Events
❌ Never assume Behavior
❌ Never assume Feature Interactions
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

## Mandatory Validation Gates (Before Documentation Generation)

**CRITICAL: All gates must be verified before proceeding to documentation generation. Do not bypass any gate.**

---

### Gate 1: Supported Combination Validation

**Purpose:** Ensure feature interactions are verified, not assumed.

**Before generating documentation:**

1. **Identify target feature**
   ```
   Example: Foreign Key Column
   ```

2. **Identify major related features** (for this component)
   ```
   Example for TreeGrid:
     • Filtering
     • Searching
     • Sorting
     • Editing
     • Grouping
     • Exporting
     • Templates
     • Virtualization
   ```

3. **Validate interactions using source-of-truth**
   ```
   For each feature combination:
     TreeGrid + ForeignKey + Filtering → ✓/✗/? (VERIFY from source)
     TreeGrid + ForeignKey + Sorting   → ✓/✗/? (VERIFY from source)
     TreeGrid + ForeignKey + Editing   → ✓/✗/? (VERIFY from source)
     etc.
   ```

**Validation Rules:**

```
✓ Verified Supported
  → Include in documentation
  → Example: "Foreign Key Column works with Filtering"

✗ Verified Not Supported
  → Document as limitation
  → Example: "Foreign Key Column does not support GroupCaption templates"

? Unable to Verify
  → Flag as "Requires Validation"
  → Do NOT document without verification
  → Request additional source information
```

**Critical Rule:**
```
NEVER document cross-feature support without verification from 
an approved source. Do NOT assume compatibility based on similar components.
Do NOT infer behavior from DataGrid, Scheduler, Gantt, or any other component.
```

**Supported Interaction Examples (Validate Each):**

- Filtering + Feature
- Searching + Feature
- Sorting + Feature
- Editing + Feature
- Grouping + Feature
- Paging + Feature
- Virtualization + Feature
- Infinite Scrolling + Feature
- Exporting + Feature
- Templates + Feature
- Aggregates + Feature
- Row Drag and Drop + Feature
- Lazy Loading + Feature
- Custom Adaptor + Feature

---

### Gate 2: Source Sufficiency Validation

**Purpose:** Ensure provided source contains enough information for accurate documentation.

**Before documentation generation:**

1. **Verify source contains minimum required information**

```
Required Information:
  ✓ Feature purpose (What does this feature do?)
  ✓ Feature behavior (How does it work?)
  ✓ Public APIs (Properties, methods, events)
  ✓ Supported scenarios (What can users do with it?)
  ✓ Limitations/restrictions (What doesn't work?)
```

2. **Accept source hierarchy** (highest priority first)

```
Priority 1: Specification
Priority 2: Technical Design
Priority 3: Approved Pull Request
Priority 4: Source Code
Priority 5: Existing Documentation
Priority 6: User Explanation
```

**Validation Rules:**

```
✓ ALL required information available
  → Continue to documentation generation

◐ PARTIAL information available
  → Identify missing sections
  → Request ONLY missing details
  → Do NOT proceed without critical information

✗ CRITICAL information missing
  → Stop documentation generation
  → Request complete source information
  → Never invent undocumented behavior
  → Never fill gaps using assumptions
```

**What Counts as Source Insufficiency:**

```
❌ Behavior unclear or ambiguous
❌ API signatures incomplete
❌ Feature interactions undocumented
❌ Limitations not stated
❌ Source examples missing or incomplete
❌ Conflicting information in source
```

**Gate Action:**

```
Before proceeding, explicitly verify:
  ✓ Source is clear and unambiguous?
  ✓ All required information present?
  ✓ Conflicting information resolved?
  
If any answer is NO:
  → Do NOT proceed
  → Request clarification or additional source
```

---

### Gate 3: Documentation Standards Compliance

**Purpose:** Ensure generated documentation matches target platform and component standards.

**Before finalizing documentation:**

1. **Verify documentation structure matches target**

```
Target Standard Elements:
  ✓ Correct section ordering
  ✓ Correct heading levels
  ✓ Consistent terminology
  ✓ Consistent formatting
  ✓ Consistent sample structure
  ✓ Consistent note/warning formatting
  ✓ Consistent limitation formatting
  ✓ Repository-specific authoring standards
  ✓ Markdown conventions used in target
```

2. **Reference Standards Checklist**

```
HEADING HIERARCHY:
  ✓ Follow existing documentation heading levels
  ✓ Match section structure of similar features
  
TERMINOLOGY:
  ✓ Use terms from existing component documentation
  ✓ Use terms from existing platform documentation
  ✓ Maintain consistency throughout documentation
  
FORMATTING:
  ✓ Code block formatting matches repository
  ✓ Note/warning formatting matches existing docs
  ✓ Table formatting matches existing docs
  ✓ List formatting matches existing docs
  
SAMPLES:
  ✓ Sample structure matches platform conventions
  ✓ Sample coding style matches platform standards
  ✓ Sample naming matches platform conventions
  ✓ Complete, working samples (not fragments)
  
LIMITATIONS:
  ✓ Limitations section format matches docs
  ✓ Clear statement of unsupported scenarios
  ✓ Clear statement of unsupported combinations
```

3. **Validation Checklist (Before Finalizing)**

```
Section Ordering:
  ✓ Introduction/Overview
  ✓ APIs/Properties (if applicable)
  ✓ Events (if applicable)
  ✓ Supported Scenarios
  ✓ Code Examples
  ✓ Limitations/Restrictions
  ✓ Related Topics (if applicable)
  
Heading Levels:
  ✓ H1: Feature name
  ✓ H2: Major sections
  ✓ H3: Subsections
  ✓ Match existing documentation pattern
  
Terminology:
  ✓ Component name usage consistent
  ✓ Feature name usage consistent
  ✓ Platform terminology consistent
  ✓ No conflicting terminology
  
Formatting:
  ✓ Code samples properly formatted
  ✓ Notes properly formatted
  ✓ Warnings properly formatted
  ✓ Tables properly formatted
  ✓ Lists properly formatted
```

4. **If Documentation Reference Unavailable**

```
DO NOT guess the required structure.

REQUEST:
  ✓ Target documentation example
  ✓ Reference document (existing similar feature)
  ✓ Style guide or standards document
  ✓ Repository authoring guidelines

THEN:
  → Generate documentation matching provided reference
  → Verify compliance with provided standard
  → Ensure consistency with provided reference
```

**Critical Rule:**
```
Documentation generation must NOT be completed unless 
documentation standards compliance has been verified.

If standards reference is not available:
  ✗ Do NOT proceed with documentation generation
  → Request standards reference/example document
  → Wait for reference before generating
```

---

## Mandatory Validation Gate Sequence

**EXECUTION ORDER (Do NOT skip any gate):**

```
Step 1: Gather and Validate Required Inputs
         └─→ Extract: Platform, Component, Feature, Source

Step 2: Verify Source Sufficiency
         └─→ Check: Purpose, Behavior, APIs, Scenarios, Limitations
         └─→ Action: If insufficient, request missing information
         └─→ Status: Continue only if sufficient

Step 3: Verify Supported Feature Combinations
         └─→ Check: Feature interactions with other component features
         └─→ Action: Validate each combination from source
         └─→ Status: Document only verified combinations

Step 4: Generate Documentation
         └─→ Action: Create documentation using verified information
         └─→ Constraint: Use ONLY verified information
         └─→ Constraint: Do NOT invent or assume features

Step 5: Verify Documentation Standards Compliance
         └─→ Check: Structure, Headings, Terminology, Formatting
         └─→ Action: Compare against target standard/reference
         └─→ Status: Adjust if not compliant

Step 6: Produce Final Output
         └─→ Action: Deliver verified, standards-compliant documentation
         └─→ Include: References, Gaps, Standards applied
```

**Gate Decision Logic:**

```
For each validation gate:
  
PASS (✓):
  → Continue to next gate
  
FAIL (✗):
  → STOP documentation generation
  → Identify what failed
  → Request necessary information or resources
  → Wait for user input
  
PARTIAL (◐):
  → Identify incomplete/insufficient areas
  → Request ONLY missing information
  → Continue only after insufficiency resolved
```

---

## Component-Specific Context Enforcement

**CRITICAL RULE: Once Component is identified, operate in component isolation mode.**

### Feature-Source Isolation Principle

```
After Feature and Source identified:

Feature = [Feature Name]
Source = [Provided Source]
↓
ALL analysis, verification, documentation, examples, 
and recommendations MUST be based on PROVIDED SOURCE ONLY

Do NOT import, copy, inherit, or assume behavior from:
  ❌ Similar features
  ❌ Other implementations
  ❌ Undocumented sources
  ❌ Inferred behavior

UNLESS provided source explicitly states additional information
```

### Feature Interaction Validation (Pre-Generation)

Before generating documentation, validate feature interactions based on provided source:

```
Example:
  Feature: Foreign Key Column
  Source: PR #2456

Validate from source:
  ✓ Foreign Key + Filtering?
  ✓ Foreign Key + Sorting?
  ✓ Foreign Key + Editing?
  ✓ Foreign Key + Exporting?
  
Do NOT validate:
  ✗ Features not in source
  ✗ Assumed interactions (without source verification)
  ✗ Inferred behavior
```

### Source-Based API Verification

```
RULE: Verify all APIs from provided source only

Mandatory source-based verification:

Include ONLY:
  ✓ Properties documented in source
  ✓ Events documented in source
  ✓ Methods documented in source
  ✓ Interfaces defined in source
  ✓ Models/Enums defined in source

Exclude UNLESS verified:
  ❌ APIs not in provided source
  ❌ Behavior not documented in source
  ❌ Inferred or assumed APIs
```

### Source-Based Sample Generation

```
Rule: All samples MUST be based on provided source

Example:
  Feature: Foreign Key Column
  Source: PR #2456 with code samples
  
Generate:
  Use samples and patterns from provided source
  Match syntax and conventions shown in source
  
Do NOT generate:
  ❌ Samples not in source
  ❌ Features not documented in source
  ❌ Code using different patterns
  
Only use what is explicitly shown in provided source
```

### Source-Based Verification Checklist

Before publishing documentation, verify ALL items are from provided source:

```
Verification Checklist:
  ✓ Sample code matches source?
  ✓ API references from source?
  ✓ Event references from source?
  ✓ Property references from source?
  ✓ Behavioral statements match source?
  ✓ Feature limitations verified from source?
  ✓ Supported scenarios verified from source?
  
If any item fails verification:
  → Remove from documentation
  → Re-verify from provided source
  → Report gap if verification impossible
```

### Feature Compatibility Matrix (Source-Based)

Generate compatibility matrix based on provided source:

```
Example:
Feature:     Foreign Key Column
Source:      PR #2456

Supported Combinations (verified from source):
  ✓ Filtering + Foreign Key Column
  ✓ Sorting + Foreign Key Column
  ✓ Editing + Foreign Key Column
  ✓ Searching + Foreign Key Column

Partially Supported (verified from source):
  ◐ Virtualization + Foreign Key Column

Not Supported (verified from source):
  ✗ Group Caption Templates
  ✗ DetailRow Templates with Foreign Keys

Note: Include ONLY what is documented in provided source
```

### Documentation Accuracy Rule (Source-Based)

```
Documentation must represent:

[Feature] using provided [Source]

Verify: All documented information comes from provided source
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
