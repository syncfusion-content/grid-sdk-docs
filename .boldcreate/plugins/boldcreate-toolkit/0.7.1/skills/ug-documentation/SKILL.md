# UG Documentation Skill - Platform-Agnostic & Enterprise-Grade

Create repository-ready Syncfusion User Guide documentation for any platform with evidence-based accuracy.

**Level**: Advanced | **Mode**: Autonomous Cloud Agent | **Token Footprint**: 60-70% reduction | **Platforms**: All Syncfusion

---

## 🛑 **STEP 0: INTERACTIVE INFORMATION COLLECTION (MANDATORY)**

**THIS IS THE FIRST STEP. NOTHING ELSE HAPPENS UNTIL THIS IS COMPLETE.**

---

### Vague Request Detection Algorithm

**FIRST: Analyze the user's request for completeness.**

```
IF request is vague (missing any of the following):
  ✗ Platform not specified OR unclear
  ✗ Component name not specified OR unclear
  ✗ Request type not specified OR unclear
  ✗ Feature scope not defined
  ✗ Any field is ambiguous

THEN:
  → STOP immediately
  → Do NOT proceed to Discovery
  → Do NOT analyze repositories
  → Do NOT analyze source code
  → Proceed to "Interactive Information Collection" below
  
OTHERWISE (ALL fields clear):
  → Proceed to "Information Validation" section
```

**KEY: If you cannot confidently answer all 5 questions below from the user's request, the request is VAGUE.**

---

### Interactive Information Collection (If Vague)

**When request is vague, ask the user these questions in order. Wait for responses. Collect ALL answers before proceeding.**

---

#### **QUESTION 1: PLATFORM (Required)**

```
❓ MISSING INFORMATION: Platform not specified

What platform is this documentation for?

Please select ONE:

1. Blazor (C#, Razor components)
2. JavaScript (Vanilla JS/TypeScript)
3. Angular (TypeScript, Angular framework)
4. React (TypeScript/JSX, React framework)
5. Vue (Vue SFC, TypeScript)
6. ASP.NET Core (C#, server-side)
7. ASP.NET MVC (C#, MVC pattern)
8. MAUI (C#, cross-platform)
9. WinForms (C#, desktop)
10. WPF (C#, desktop, XAML)
11. Flutter (Dart)
12. Xamarin (C#, mobile)

👉 Please respond with the number (1-12) or platform name:
```

**WAIT for user response. Record exactly as provided.**

---

#### **QUESTION 2: COMPONENT (Required)**

```
❓ MISSING INFORMATION: Component name not specified

Which Syncfusion component is being documented?

Common examples:
• DataGrid
• TreeGrid
• Scheduler
• Kanban
• Gantt Chart
• Diagram
• Chart
• Pivot Table
• Splitter
• Accordion
• Carousel
• Rating
• Slider
• TextBox

👉 Please provide the exact component name:
```

**WAIT for user response. Record exactly as provided.**

---

#### **QUESTION 3: REQUEST TYPE (Required)**

```
❓ MISSING INFORMATION: Request type not specified

What type of documentation is needed?

Select ONE:

A) NEW FEATURE DOCUMENTATION
   → Documenting a completely new feature
   → Not in existing component documentation
   → Requires full sections (intro, usage, API, events, samples)

B) FEATURE ENHANCEMENT DOCUMENTATION
   → Enhancing existing component feature
   → Updating existing documentation with new capability
   → May add new sections or update existing ones

C) DOCUMENTATION CORRECTION
   → Fixing errors in existing documentation
   → Clarifying ambiguous sections
   → Updating outdated information

D) API DOCUMENTATION ONLY
   → Document properties, methods, enumerations only
   → No narrative content or examples needed
   → Just API reference table

E) EVENT DOCUMENTATION ONLY
   → Document events and event arguments only
   → No narrative content needed
   → Just event reference table

F) MIGRATION DOCUMENTATION
   → Document migration path (e.g., v1 to v2)
   → Before/After comparison
   → Breaking changes and workarounds

👉 Please respond with letter (A, B, C, D, E, or F):
```

**WAIT for user response. Record exactly as provided.**

---

#### **QUESTION 4: FEATURE SCOPE (Required)**

```
❓ MISSING INFORMATION: Feature scope not clearly defined

What is the scope of this documentation?

Please provide:

1. FEATURE NAME (what are you documenting?)
   Example: "Sorting", "Filtering", "Grouping", "Real-time Data Updates"
   👉 Feature name: _______________

2. WHAT SHOULD BE DOCUMENTED? (select all that apply)
   ☐ Configuration/setup
   ☐ Step-by-step usage guide
   ☐ API properties/methods
   ☐ Events and event handling
   ☐ Code samples/examples
   ☐ Advanced scenarios
   ☐ Troubleshooting/FAQs
   ☐ Limitations/known issues
   
   👉 Which sections? _______________

3. LIST ALL RELATED APIS TO DOCUMENT
   Example: "AllowSorting, SortMode, Sort(), ClearSorting(), SortedColumn"
   👉 APIs: _______________

4. LIST ALL RELATED EVENTS TO DOCUMENT
   Example: "OnSorting, OnSorted, SortingEventArgs"
   👉 Events: _______________

5. CODE SAMPLES REQUIRED?
   ☐ Yes (provide working examples)
   ☐ No (reference only)
   
   👉 Response: _______________
```

**WAIT for all 5 sub-responses. Record each answer.**

---

#### **QUESTION 5: SOURCE OF TRUTH (Required)**

```
❓ MISSING INFORMATION: Source of truth not identified

What is the authoritative source for this feature?

Select the HIGHEST priority source available:

1. APPROVED SPECIFICATION DOCUMENT ⭐ (highest priority)
   - Comprehensive specification document
   - Feature behavior defined
   - 👉 URL/path: _______________

2. APPROVED TECHNICAL DESIGN DOCUMENT
   - Architecture and design decisions
   - Implementation approach
   - 👉 URL/path: _______________

3. SOURCE CODE IMPLEMENTATION
   - Component source files
   - Implementation details
   - 👉 Repository path/file: _______________

4. FEATURE PULL REQUEST
   - PR implementation
   - Review comments
   - 👉 PR number/URL: _______________

5. EXISTING DOCUMENTATION
   - Current docs (reference only, don't copy)
   - 👉 Documentation URL: _______________

6. USER-PROVIDED REQUIREMENTS
   - Detailed requirements in your request
   - 👉 Details: _______________

Which source(s) are available? (List in priority order)

👉 Primary source: _______________
👉 Secondary sources (if any): _______________
```

**WAIT for user response. Record exactly as provided.**

---

### Interactive Collection - Response Validation

**After collecting all 5 pieces of information, confirm with user:**

```
═══════════════════════════════════════════════════════════════════════════
INFORMATION COLLECTED - PLEASE CONFIRM
═══════════════════════════════════════════════════════════════════════════

✓ Platform:           [USER_PROVIDED_PLATFORM]
✓ Component:          [USER_PROVIDED_COMPONENT]
✓ Request Type:       [USER_PROVIDED_TYPE] (A/B/C/D/E/F)
✓ Feature Name:       [USER_PROVIDED_FEATURE]
✓ Feature Scope:      [USER_PROVIDED_SCOPE]
✓ Source of Truth:    [USER_PROVIDED_SOURCE]

═══════════════════════════════════════════════════════════════════════════

Is this information correct? [YES / NO]

If NO → Please clarify which information is incorrect
If YES → Proceeding to Discovery Phase
```

**WAIT for confirmation. If NO, ask them to clarify the incorrect fields.**

---

### Information Validation Checklist

**Before proceeding to Discovery, verify:**

```
✓ Platform:           [COLLECTED AND CONFIRMED] ✓
✓ Component:          [COLLECTED AND CONFIRMED] ✓
✓ Request Type:       [COLLECTED AND CONFIRMED] ✓
✓ Feature Scope:      [COLLECTED AND CONFIRMED] ✓
✓ Source of Truth:    [COLLECTED AND CONFIRMED] ✓

ALL ITEMS CONFIRMED: ✅ YES → PROCEED TO DISCOVERY

If ANY item shows ❌ NO: ASK FOR CLARIFICATION
```

---

### Critical Rules for Interactive Collection

**MANDATORY:**

1. ✓ **Ask questions ONE AT A TIME**
   - Ask Question 1 (Platform)
   - Wait for response
   - Ask Question 2 (Component)
   - Wait for response
   - (continue for all 5)

2. ✓ **Wait for user responses after each question**
   - Do NOT assume answers
   - Do NOT infer missing details
   - Do NOT proceed without user input

3. ✓ **Use user's exact terminology**
   - Record platform name as provided
   - Record component name as provided
   - Record feature name as provided
   - Do NOT normalize or change names

4. ✓ **Confirm all information before proceeding**
   - Show collected information to user
   - Ask for explicit confirmation
   - Wait for user approval
   - Do NOT assume confirmation

5. ✗ **NEVER:**
   - Assume the platform
   - Assume the component
   - Assume the request type
   - Assume the feature scope
   - Assume the source of truth
   - Skip any question
   - Proceed without confirmation

---

### Golden Rule: Interactive Collection

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  If ANY required information is missing:                    │
│                                                             │
│  1. ASK the user for that information                       │
│  2. WAIT for the user's response                            │
│  3. RECORD the user's exact response                        │
│  4. CONFIRM all information with the user                   │
│  5. Get explicit approval to proceed                        │
│                                                             │
│  THEN and ONLY THEN:                                        │
│  → Proceed to Discovery                                     │
│  → Analyze repositories                                     │
│  → Extract source information                               │
│  → Generate documentation                                   │
│                                                             │
│  NEVER:                                                     │
│  ✗ Skip questions                                           │
│  ✗ Assume answers                                           │
│  ✗ Infer missing information                                │
│  ✗ Proceed without all information                          │
│  ✗ Proceed without user confirmation                        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Stage 1: Discovery (After Information Collection Complete)

**Execute ONCE after ALL information collected and confirmed.**

**Automatically Identify:**

```
Platform:                [From user input]
Component Name:          [From user input]
Feature Name:            [From user input]
Documentation Type:      [From user input - Mode A-F]
Existing Doc Path:       [Search repository]
Source Files:            [List component files]
Related APIs:            [From feature scope]
Related Events:          [From feature scope]
TOC Update Required:     [Yes/No]
Platform Standards Path: [Locate existing docs]
```

**Confidence Check:**
- Platform confirmed? YES
- Component accessible? YES/NO
- Source files located? YES/NO
- Existing docs found? YES/NO

**Output:** Discovery Summary (1-2 paragraphs max)

**Decision:** PROCEED to Stage 2 only if 90%+ confident. If <90%: STOP and request clarification.

---

## Stage 2: Verification & Generation (Targeted Scan)

Verify ONLY the APIs/events actually used in documentation.

**Phase 1: Platform Standards Extraction**

Before generating any content:
1. Find 2-3 existing features in platform documentation
2. Extract patterns: structure, terminology, code format, API style
3. Use ONLY as reference patterns (never copy content)
4. Document which existing features were used as reference

**Phase 2: Source Verification**

For each API/event mentioned:
1. Locate source file (platform-specific)
2. Extract: Name, Type, Default Value, Accepted Values
3. Record source location (file + line number)
4. Mark verification status (Verified/Requires Evidence)

**Do NOT** perform repository-wide scanning.

**Phase 3: Evidence Matrix Generation**

Create compact verification table:

```markdown
| Item | Type | Source File | Status |
|------|------|-------------|--------|
| [API Name] | Property | ComponentName.cs:45 | ✓ Verified |
```

**Phase 4: Confidence Scoring**

```markdown
## Verification Confidence

| Area | Coverage | Score | Status |
|------|----------|-------|--------|
| APIs | 5/5 used | 100% | ✓ |
| Events | 2/2 used | 100% | ✓ |
| Defaults | 5/5 confirmed | 100% | ✓ |

Overall: 100% - READY FOR COMMIT
```

**Decision Rule:**
- If Overall ≥ 95%: PROCEED to Stage 4.5
- If Overall < 95%: List gaps and STOP

---

## Stage 4.5: Sample Validation (Compile & Verify)

Execute ONLY if documentation includes code examples.

**Phase 1: Language-Specific Syntax Validation**

For each code sample, verify platform-specific syntax:
- Blazor: using statements, Razor syntax, @code block
- JavaScript: imports, callbacks, variable declarations
- Angular: imports, decorators, TypeScript types
- React: imports, JSX, hooks, prop types
- Vue: template, script, style, SFC format
- (etc. for all 12 platforms)

**Phase 2: API Usage Validation**

For each code sample:
1. Verify all APIs exist in source code
2. Verify property names match source exactly
3. Verify event names match source exactly
4. Verify method signatures are correct

**Phase 3: Compilation Check**

For each code sample:
1. Verify platform-specific syntax correct
2. Verify type declarations valid
3. Verify event bindings correct
4. Verify component hierarchy valid

**Validation Matrix:**

```markdown
| Sample # | Syntax | API Usage | Compilation | Status |
|----------|--------|-----------|-------------|--------|
| 1 | ✓ | ✓ | ✓ | ✓ Valid |
```

**Decision Rule:**
- If ALL samples ✓ Valid: PROCEED to Stage 8.5
- If ANY sample ✗ Invalid: List errors and STOP

---

## Stage 8.5: Global Standards Check

Execute BEFORE final output delivery.

**Phase 1: Accessibility Validation**
- Images have alt text
- Links have descriptive text
- Headings proper hierarchy
- Code blocks highlighted
- Tables have headers
- Lists properly formatted

**Phase 2: Localization Readiness**
- No hardcoded UI strings
- Resource keys used
- Locale-neutral formatting
- Culture-neutral examples
- RTL considerations noted

**Phase 3: SEO Compliance**
- Title format: "[Feature] in [Platform] [Component]"
- Description includes feature, platform, component
- H1: Single, matches title
- Keywords: Feature (2-3x), Platform (1-2x), Component (2-3x)
- Word count: 500+ words
- Internal links: 3-5 relevant

**Phase 4: Cross-Link Validation**
- All links exist (verify paths)
- Links correctly formatted
- Links contextually relevant
- No duplicate links

**Phase 5: Heading Consistency**
- Single H1 only
- Proper hierarchy (H1 → H2 → H3)
- Consistent patterns
- No orphan headings

**Decision Rule:**
- If ALL phases ✓ pass: PROCEED to Stage 9
- If ANY phase fails: List issues (can proceed if minor)

---

## Content Generation: Mode-Specific Workflows

### Mode A: New Feature Documentation

Execute phases:
1. Classify – Document type
2. Discover – Identify all scope items (Stage 1)
3. Verify – Targeted API/Event verification (Stage 2)
4. Structure – Generate markdown
5. Validate – Sample validation (Stage 4.5)
6. Standards – Global check (Stage 8.5)
7. Deliver – 9-section output

### Mode B: Enhancement Documentation

Execute phases:
1. Classify – Enhancement type
2. Discover – Locate existing doc, identify changes (Stage 1)
3. Verify – New APIs/Events only (Stage 2)
4. Update – Merge into existing markdown
5. Validate – Sample validation (Stage 4.5)
6. Standards – Global check (Stage 8.5)
7. Deliver – 9-section output

### Mode C: Documentation Correction

Execute phases:
1. Classify – Correction type
2. Discover – Locate existing doc (Stage 1)
3. Verify – Only corrected sections (Stage 2)
4. Update – Fix errors in place
5. Validate – Sample validation (Stage 4.5)
6. Standards – Global check (Stage 8.5)
7. Deliver – 9-section output

### Mode D: API Documentation Only

1. Classify – API scope
2. Discover – Locate source (Stage 1)
3. Verify – Extract all properties/methods (Stage 2)
4. Structure – Generate API table
5. Standards – Global check (Stage 8.5)
6. Deliver – 5-section output

### Mode E: Event Documentation Only

1. Classify – Event scope
2. Discover – Locate events source (Stage 1)
3. Verify – Extract all events (Stage 2)
4. Structure – Generate event table
5. Standards – Global check (Stage 8.5)
6. Deliver – 5-section output

### Mode F: Migration Documentation

1. Classify – Migration type
2. Discover – Locate old + new sources (Stage 1)
3. Verify – Breaking changes + alternatives (Stage 2)
4. Structure – Before/After comparison
5. Standards – Global check (Stage 8.5)
6. Deliver – 9-section output

---

## Compact Output Format (9 Sections)

```
1. Classification
2. Discovery Summary
3. Evidence Matrix
4. Verification Confidence
5. Repository Actions
6. Platform Standards Validation
7. Markdown Content
8. Self-Review Summary
9. Commit Readiness
```

---

## Verification Checklist (Compact)

```
Content:
  ☐ All APIs verified in source
  ☐ All events verified in source
  ☐ No assumptions about behavior
  ☐ Default values confirmed

Code:
  ☐ Samples use verified APIs only
  ☐ Samples platform-correct
  ☐ Syntax correct

SEO:
  ☐ Single H1: "[Feature] in [Platform] [Component]"
  ☐ Keywords natural
  ☐ Beginner-friendly

Metadata:
  ☐ Title follows pattern
  ☐ Description includes keywords
  ☐ Platform: Correct
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

---

## Success Criteria

Documentation is **READY TO COMMIT** when ALL are true:

1. ✓ All 5 required information items collected from user
2. ✓ User confirmed all information
3. ✓ 95%+ verification confidence (overall)
4. ✓ All APIs traced to source file + line number
5. ✓ All events traced to source file + line number
6. ✓ Default values confirmed from source
7. ✓ Code samples compile-ready & platform-correct
8. ✓ Accessibility standards met
9. ✓ SEO metadata valid for platform
10. ✓ Heading structure correct
11. ✓ All links verified to exist

If ANY criterion fails: **STOP and list gaps**. Do not generate output.

---

## Next Steps

When using this skill:

1. **User provides request** (may or may not include all details)
2. **Skill analyzes completeness** (vague request detection)
3. **If vague: Skill asks for missing information** (Questions 1-5)
4. **User provides responses**
5. **Skill confirms all information with user**
6. **User approves**
7. **Skill begins Discovery → Verification → Generation**
