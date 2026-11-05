import re, sys
TECH = {"JavaScript","TypeScript","React","Angular","Vue","Blazor","ASP.NET","Core","MVC",".NET","NET","MAUI",
        "WPF","WinUI","WinForms","Windows","Forms","UWP","Flutter","Dart","XAML","Data","Grid","DataGrid","Tree",
        "Pivot","Table","SfDataGrid","SfDataPager","DataManager","UrlAdaptor","ODataV4Adaptor","WebApiAdaptor",
        "Web","API","APIs","OData","GraphQL","REST","HTML","CSS","JSON","URL","Excel","PDF","CSV","ARIA","WCAG",
        "RTL","UI","CRUD","NuGet","CLI","Syncfusion","Syncfusion®","Razor","ES5","ES6","XML","HTTP","ID","SDK",
        "Ctrl","Shift","Enter","Tab","Composition","Options","Redux","Next.js","NextJS","Preact","SharePoint","MVVM"}
BANNED = ["simply","just ","easily","seamless","powerful","robust","greatly","out of the box","leverage",
          "utilize","in order to","particularly useful","click here","learn here all about","and more.",
          "healthcare","finance","retail","banking","inventory","logistics","employee",
          "pain point","key capabilities","imagine","in today's"]
text = open(sys.argv[1], encoding="utf-8").read()
fm = re.match(r"^---\s*\n(.*?)\n---\s*\n", text, re.S)
body = text[fm.end():] if fm else text
issues = []
if fm:
    for key, lo, hi in (("title", 50, 60), ("description", 140, 160)):
        m = re.search(rf"^{key}\s*:\s*(.+)$", fm.group(1), re.M)
        if not m: issues.append(f"front matter: missing {key}")
        elif not lo <= len(m.group(1).strip()) <= hi:
            issues.append(f"front matter: {key} is {len(m.group(1).strip())} chars (want {lo}-{hi})")
    tm = re.search(r"^title\s*:\s*(.+)$", fm.group(1), re.M)
    if tm and not re.search(r"\bin\b.+(Data ?Grid|Tree Grid|Pivot Table)\s*\|\s*Syncfusion\s*$", tm.group(1)):
        issues.append("front matter: title should be '<Feature task> in <Platform> <Component> | Syncfusion'")
    if tm and re.search(r"control|component|®|and more", tm.group(1), re.I):
        issues.append("front matter: title has filler words (control, component, ®, and more)")
    if not re.search(r"^platform\s*:\s*grid-sdk", fm.group(1), re.M | re.I):
        issues.append("front matter: platform should be grid-sdk")
else:
    issues.append("front matter: missing")
clean = re.sub(r"\{%\s*(highlight|capture|raw)[^%]*%\}.*?\{%\s*end(highlight|capture|raw)\s*%\}", "", body, flags=re.S)
clean = re.sub(r"`{3}.*?`{3}", "", clean, flags=re.S)
clean = re.sub(r"\{%.*?%\}|<sup[^>]*>.*?</sup>|<[^>]+>", "", clean, flags=re.S)
h1 = re.findall(r"^# (.+)$", clean, re.M)
if len(h1) != 1: issues.append(f"H1 count is {len(h1)} (want 1)")
MINOR = {"a","an","the","and","or","but","nor","in","on","at","to","for","of","by","with","from","as","vs"}
for h in h1:
    for i, w in enumerate(re.findall(r"[A-Za-z.][\w.'®-]*", re.sub(r"`[^`]*`|\(.*?\)", "", h))):
        if i > 0 and w.lower() in MINOR:
            if w != w.lower(): issues.append(f'H1 short word should be lowercase: "{w}" in "{h.strip()}"')
        elif w[0].islower(): issues.append(f'H1 word not capitalized: "{w}" in "{h.strip()}"')
VAGUE = {"overview","introduction","more options","miscellaneous","move between matches","behavior","note","notes","others"}
for lvl, h in re.findall(r"^(#{2,6}) (.+)$", clean, re.M):
    words = re.findall(r"[A-Za-z.][\w.'®-]*", re.sub(r"`[^`]*`", "", h))
    if words and words[0][0].islower(): issues.append(f'H{len(lvl)} must start with a capital: "{h.strip()}"')
    for w in words[1:]:
        if w[0].isupper() and w not in TECH and not w.isupper() and not re.search(r"[a-z][A-Z]", w):
            issues.append(f'H{len(lvl)} not sentence case (check "{w}"): "{h.strip()}"')
    if re.search(r"[:?.]\s*$", h): issues.append(f'H{len(lvl)} ends with punctuation: "{h.strip()}"')
    if h.strip().lower() in VAGUE: issues.append(f'H{len(lvl)} is vague, rewrite as a searchable task: "{h.strip()}"')
prose = re.sub(r"`[^`]*`|^\|.*$|^#.*$|\]\([^)]*\)", "", clean, flags=re.M)
for s in re.split(r"(?<=[.!?])\s+|\n\s*\n|\n(?=\s*(?:[-*>]|\d+\.)\s)", prose):
    n = len(s.split())
    if n > 25: issues.append(f"long sentence ({n} words): {' '.join(s.split())[:90]}...")
low = prose.lower()
for b in BANNED:
    if b in low: issues.append(f'banned, filler or use-case word: "{b.strip()}"')
for m in re.finditer(r"\*\*(true|false|\d+(\.\d+)?)\*\*|(?<=to )`(true|false|\d+)`", clean):
    issues.append(f"value not in double quotes: {m.group(0)}")
for m in re.finditer(r"(?<![`\w./#-])([a-z]+[A-Z]\w*)(?![`\w])", prose):
    issues.append(f"possible API name without backticks: {m.group(1)}")
for m in re.finditer(r"!\[\s*\]\(", body): issues.append("image without alt text")
for m in re.finditer(r"\[(click here|here|this link)\]", body, re.I): issues.append(f"vague link text: {m.group(0)}")
print("\n".join(dict.fromkeys(issues)) if issues else "No issues found.")