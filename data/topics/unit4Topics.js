// Unit 4: Cascading Style Sheets (CSS) - Comprehensive O-Level M2-R5.1 Curriculum Notes
// Standardized to W3C & MDN Technical Accuracy and NIELIT Exam Standards

export const unit4Topics = [
  // =========================================================================
  // TOPIC 1: Introduction to CSS & Syntax Ruleset
  // =========================================================================
  {
    id: "u4-t1",
    slug: "introduction-to-css",
    unit: 4,
    unitSlug: "unit-4",
    unitTitle: "Cascading Style Sheets (CSS)",
    title: "Introduction to CSS & Syntax Ruleset",
    hindiTitle: "CSS का परिचय, इतिहास, लाभ एवं सिंटैक्स रूल्स",
    definitionEnglish: "CSS (Cascading Style Sheets) is a declarative style sheet language standardized by the W3C that describes the presentation, layout, typography, colors, and responsive visual formatting of documents written in HTML or XML.",
    definitionHindi: "CSS (कैस्केडिंग स्टाइल शीट्स) W3C द्वारा मानकीकृत एक डिक्लेरेटिव स्टाइल शीट भाषा है जो HTML या XML में लिखे गए दस्तावेज़ों के प्रस्तुतीकरण, लेआउट, टाइपोग्राफी, रंगों और रिस्पॉन्सिव विजुअल स्वरूप को नियंत्रित करती है।",
    simpleWords: "HTML यदि किसी इमारत की ईंटें, कंक्रीट और ढांचा (Structure) है, तो CSS उस इमारत का पेंट, टाइल्स, खिड़कियों की सजावट, प्रकाश व्यवस्था और आंतरिक सज्जा (Interior Design) है जो उसे सुंदर बनाती है।",
    whyImportant: "बिना CSS के पूरा इंटरनेट 1990 के दशक जैसा केवल सादा काला टेक्स्ट और नीले अंडरलाइन लिंक्स दिखेगा। CSS संरचना को रूप-रंग से अलग (Separation of Concerns) करती है, जिससे एक ही जगह से सैकड़ों पेजों का डिजाइन बदला जा सकता है।",
    detailedExplanation: `### 1. The Inception & Historical Evolution of CSS
- **1994:** Proposed by **Håkon Wium Lie** while working with Tim Berners-Lee at CERN (Switzerland). Bert Bos also joined as co-author.
- **1996:** Standardized as **CSS Level 1** by the World Wide Web Consortium (W3C).
- **1998:** **CSS Level 2** added media types (screen/print), absolute/relative positioning, and z-index.
- **Modern Modular CSS:** After CSS 2.1, the W3C abandoned monolithic versioning. Instead of a single "CSS4" release, modern CSS evolves through **independent modular specifications** (e.g., CSS Color Module Level 4/5, CSS Grid Level 2, CSS Flexbox Level 1, CSS Values and Units Level 4).

### 2. The Core Philosophy: Separation of Concerns
Before CSS, presentational tags like \`<font color="red">\`, \`<center>\`, and \`<basefont>\` were mixed into HTML markup. This made code bloated, inaccessible, and impossible to maintain. CSS enforces:
1. **HTML:** Semantic structure and content meaning.
2. **CSS:** Visual presentation, layout, and responsive design.
3. **JavaScript:** Behavior, client-side logic, and dynamic user interaction.

### 3. Anatomy of a Standard CSS Ruleset
A CSS ruleset consists of two primary parts:
1. **Selector:** Points to the HTML element(s) targeted for styling.
2. **Declaration Block:** Wrapped inside opening \`{\` and closing \`}\` curly braces.
   - Each declaration contains a **Property** (the visual characteristic, e.g., \`color\`) and a **Value** (e.g., \`#0284c7\`).
   - The property and value are separated by a **colon (\`:\`)**.
   - Every declaration MUST be terminated by a **semicolon (\`;\`)**.

\`\`\`css
/* Selector */
h1 {
  /* Property : Value ; */
  color: #0284c7;
  font-size: 2rem;
  text-align: center;
}
\`\`\`

### 4. Key Advantages of Using CSS
- **Site-wide Consistency:** Change a color or font stack in one central external \`.css\` file, and thousands of linked pages update immediately.
- **Bandwidth Optimization & Caching:** Browsers cache external stylesheets locally on the user's device, significantly speeding up subsequent page loads.
- **Multi-Device Responsiveness:** CSS Media Queries allow a single HTML file to present tailored layouts for smartphones, tablets, laptops, and print.
- **Better Search Engine Optimization (SEO) & Accessibility:** Cleaner HTML without inline presentational clutter is easier for screen readers and search spiders to index.`,
    syntax: `/* Standard CSS Ruleset Syntax */
selector {
  property: value;
  property: value;
}

/* Example */
h1 {
  color: #1e293b;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
}`,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS Syntax and Presentation Demo</title>
  <style>
    /* CSS Reset */
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: Arial, sans-serif;
      background-color: #f8fafc;
      color: #334155;
      padding: 24px;
      line-height: 1.6;
    }
    /* Targeted Header Ruleset */
    .hero-banner {
      background-color: #232850;
      color: #ffffff;
      padding: 32px;
      border-radius: 12px;
      text-align: center;
      border-bottom: 4px solid #f19a27;
    }
    .hero-banner h1 {
      font-size: 28px;
      margin-bottom: 8px;
    }
    .hero-banner p {
      font-size: 15px;
      color: #cbd5e1;
    }
  </style>
</head>
<body>
  <header class="hero-banner">
    <h1>Welcome to NIELIT O-Level CSS Mastery</h1>
    <p>Document presentation is separated completely from HTML markup.</p>
  </header>
</body>
</html>`,
    lineByLine: [
      { line: "line 8: * { box-sizing: border-box; margin: 0; padding: 0; }", explanation: "Universal reset selector removing default browser margin/padding and setting border-box model." },
      { line: "line 15: body { font-family: Arial, sans-serif; background-color: #f8fafc; ... }", explanation: "Applies clean typography, page background color, and baseline line height to the entire document body." },
      { line: "line 22: .hero-banner { background-color: #232850; ... }", explanation: "Class selector targeting header container with navy background, white text, 12px rounded corners, and primary orange bottom border." },
      { line: "line 30: .hero-banner h1 { font-size: 28px; ... }", explanation: "Descendant selector targeting the h1 specifically inside .hero-banner." }
    ],
    outputExplanation: "ब्राउज़र में एक गहरा नेवी-ब्लू कार्ड दिखाई देगा जिसके नीचे 4px की ऑरेंज पट्टी होगी, शीर्षक सफेद रंग में बड़ा दिखेगा और पैराग्राफ हल्के स्लेटी रंग में साफ दिखेगा।",
    realWorldAnalogy: "जैसे एक ही सादे पुतले (Mannequin) को अलग-अलग कपड़े, टोपी और जूते पहनाकर अलग-अलग लुक दिया जाता है, उसी तरह एक ही HTML को अलग CSS फाइलों से पूरी तरह अलग रूप दिया जा सकता है।",
    importantPoints: [
      "CSS का पूर्ण रूप: Cascading Style Sheets.",
      "आविष्कारक: Håkon Wium Lie (1994, CERN) और Bert Bos; W3C द्वारा 1996 में मानकीकृत।",
      "CSS का फाइल एक्सटेंशन: `.css`.",
      "CSS में कमेंट केवल `/* comment */` रूप में लिखे जाते हैं; HTML जैसा `<!-- -->` या JS जैसा `//` CSS में अमान्य है।",
      "CSS का कोई एकल 'CSS4' वर्जन नहीं है; यह स्वतंत्र मॉड्यूल्स (Color, Grid, Flexbox) के रूप में विकसित होता है।"
    ],
    commonMistakes: [
      "प्रॉपर्टी और वैल्यू के बीच कोलन (`:`) के बदले इक्वल साइन (`=`) लगाना (उदा. `color = red;` पूर्णतः अमान्य है, सही `color: red;` है)।",
      "नियम के अंत में सेमीकोलन (`;`) लगाना भूल जाना, जिससे ब्राउज़र अगला नियम पढ़ना बंद कर देता है।",
      "CSS फाइल के अंदर HTML कमेंट्स `<!-- -->` लिखना, जिससे पार्सिंग एरर होती है।"
    ],
    examPerspective: "NIELIT O-Level M2-R5.1 में CSS का पूरा नाम, आविष्कारक (Håkon Wium Lie), आविष्कार का वर्ष (1994/1996), कमेंट का सिंटैक्स (`/* */`), और Ruleset के घटकों (Selector, Property, Value) पर हर साल बहुविकल्पीय प्रश्न आते हैं।",
    quickRevision: "CSS = Cascading Style Sheets | आविष्कारक: Håkon Wium Lie (1994) | सिंटैक्स: selector { property: value; } | कमेंट्स: /* comment */ | उद्देश्य: Separation of Presentation from Structure.",
    relatedTopics: ["types-of-css", "css-selectors", "css-box-model"],
    practiceTask: "एक HTML फाइल बनाएं जिसमें एक `<h1>` और दो `<p>` टैग हों। इंटरनल CSS का उपयोग करके हेडिंग को नेवी ब्लू, पहले पैराग्राफ को 16px फॉन्ट व डार्क ग्रे, और बैकग्राउंड को क्रीम कलर दें।",
    quiz: [
      {
        question: "CSS का पूरा नाम क्या है?",
        options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style System"],
        correctAnswer: "B",
        explanation: "CSS का आधिकारिक पूर्ण रूप Cascading Style Sheets है।"
      },
      {
        question: "CSS का आविष्कार किसने और किस वर्ष में प्रस्तावित किया था?",
        options: ["Tim Berners-Lee (1989)", "Håkon Wium Lie (1994)", "Brendan Eich (1995)", "James Gosling (1991)"],
        correctAnswer: "B",
        explanation: "Håkon Wium Lie ने 1994 में CERN में काम करते हुए CSS का प्रस्ताव रखा था।"
      },
      {
        question: "CSS फाइल में वैध कमेंट लिखने का सही सिंटैक्स क्या है?",
        options: ["// This is a comment", "<!-- This is a comment -->", "/* This is a comment */", "# This is a comment"],
        correctAnswer: "C",
        explanation: "CSS में टिप्पणियां (Comments) केवल /* और */ के बीच लिखी जाती हैं।"
      }
    ]
  },

  // =========================================================================
  // TOPIC 2: Types of CSS & The Cascade
  // =========================================================================
  {
    id: "u4-t2",
    slug: "types-of-css",
    unit: 4,
    unitSlug: "unit-4",
    unitTitle: "Cascading Style Sheets (CSS)",
    title: "Types of CSS (Inline, Internal, External) & Cascade",
    hindiTitle: "CSS के प्रकार (Inline, Internal, External) एवं कैस्केड प्राथमिकता",
    definitionEnglish: "CSS can be integrated into HTML documents via three methods: Inline CSS (applied directly to individual elements via the 'style' attribute), Internal/Embedded CSS (declared within <style> tags in the <head> section), and External CSS (stored in an independent .css file and referenced via the <link> tag).",
    definitionHindi: "HTML में CSS को तीन विधियों द्वारा जोड़ा जाता है: Inline CSS (व्यक्तिगत HTML टैग पर 'style' एट्रिब्यूट द्वारा), Internal CSS (<head> में <style> टैग द्वारा), और External CSS (अलग .css फाइल बनाकर <link> टैग द्वारा)।",
    simpleWords: "स्टाइल लगाने के 3 तरीके हैं: 1. सीधे टैग के कान में कहना (Inline), 2. पेज के शीर्ष पर चिट्ठी चिपकाना (Internal), या 3. अलग नियम-पुस्तिका बनाकर सभी पेजों से जोड़ देना (External - जो सबसे बेहतरीन है)।",
    whyImportant: "किसी भी व्यावसायिक वेबसाइट में कोड के रखरखाव, पेज लोड स्पीड, और परस्पर विरोधी शैलियों (Cascading Conflict) को सुलझाने के लिए इन तीनों विधियों और उनके प्राथमिकता क्रम (Specificity Hierarchy) को समझना अनिवार्य है।",
    detailedExplanation: `### 1. Comparative Analysis of the Three CSS Methods

| Method | Implementation | Typical Scope | Advantages | Disadvantages |
| :--- | :--- | :--- | :--- | :--- |
| **Inline CSS** | \`<h1 style="color: red;">\` | Single element | Immediate effect, overrides others, useful for testing | Violates separation of concerns, bloated HTML, unmaintainable |
| **Internal CSS** | \`<style>\` inside \`<head>\` | Single HTML page | Self-contained, no extra HTTP request needed | Styles cannot be shared across multiple pages |
| **External CSS** | \`<link rel="stylesheet" href="style.css">\` | Entire multi-page website | Global consistency, browser caching, clean HTML | Requires an additional HTTP request (mitigated by HTTP/2 and caching) |

### 2. The Mechanics of "Cascading"
The word **Cascading** signifies that style declarations flow down like a waterfall from multiple sources. When two or more conflicting rules target the very same HTML element, the browser resolves the conflict using three criteria:
1. **Importance:** Rules with the \`!important\` directive override normal rules.
2. **Specificity:** More specific selectors beat general selectors.
3. **Source Order (Last in Rule):** If specificity and importance are equal, the rule declared latest in code wins.

### 3. The Precedence & Specificity Hierarchy
In the absence of \`!important\`, the order of precedence from highest to lowest is:
1. **Inline styles** (\`style=""\` attribute) — Specificity: \`(1, 0, 0, 0)\`
2. **ID selectors** (\`#nav\`) — Specificity: \`(0, 1, 0, 0)\`
3. **Class, attribute, and pseudo-class selectors** (\`.btn\`, \`[type="text"]\`, \`:hover\`) — Specificity: \`(0, 0, 1, 0)\`
4. **Element / tag and pseudo-element selectors** (\`p\`, \`h1\`, \`::before\`) — Specificity: \`(0, 0, 0, 1)\`
5. **Universal selector** (\`*\`) — Specificity: \`(0, 0, 0, 0)\`
6. **Browser default styles (User-agent stylesheet)**

### 4. The \`<link>\` Tag Attributes
To attach an external stylesheet inside HTML \`<head>\`:
- \`rel="stylesheet"\`: Declares the relationship of the linked resource.
- \`href="style.css"\`: Specifies the URL/relative path to the CSS file.
- \`type="text/css"\`: Optional in modern HTML5.`,
    syntax: `<!-- 1. Inline CSS -->
<p style="color: #2563eb; font-weight: bold;">Inline Text</p>

<!-- 2. Internal CSS (inside <head>) -->
<style>
  p { color: #16a34a; }
</style>

<!-- 3. External CSS (inside <head>) -->
<link rel="stylesheet" href="assets/css/main.css">`,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS Types and Cascade Priority Demo</title>
  
  <!-- External CSS Link -->
  <link rel="stylesheet" href="theme.css">

  <!-- Internal CSS -->
  <style>
    /* Tag selector */
    p {
      color: #0284c7;
      font-size: 16px;
    }
    /* Class selector (higher specificity than tag) */
    .special-text {
      color: #16a34a;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <!-- 1. Styled by Internal CSS tag selector (Blue) -->
  <p>Paragraph 1: Styled by Internal Tag Selector (Blue).</p>

  <!-- 2. Styled by Class selector (Green, beats tag selector) -->
  <p class="special-text">Paragraph 2: Styled by Class Selector (Green).</p>

  <!-- 3. Styled by Inline CSS (Red, beats Internal & External) -->
  <p class="special-text" style="color: #dc2626;">
    Paragraph 3: Inline CSS overrides class and tag rules (Red)!
  </p>
</body>
</html>`,
    lineByLine: [
      { line: "line 8: <link rel=\"stylesheet\" href=\"theme.css\">", explanation: "Links external CSS file. In a real website, site-wide rules reside here." },
      { line: "line 11: <style> ... </style>", explanation: "Internal CSS block placed in head section, applying scoped rules to this document." },
      { line: "line 28: <p class=\"special-text\" style=\"color: #dc2626;\">", explanation: "Element has both a class rule (green) and inline style (red). Inline style wins because inline specificity (1,0,0,0) beats class (0,0,1,0)." }
    ],
    outputExplanation: "पहला पैराग्राफ नीला दिखेगा, दूसरा पैराग्राफ क्लास के कारण हरा दिखेगा, और तीसरा पैराग्राफ लाल दिखेगा क्योंकि Inline CSS की प्राथमिकता Internal से अधिक होती है।",
    realWorldAnalogy: "External CSS पूरे देश के कानून जैसी है; Internal CSS राज्य सरकार के नियम जैसी है; और Inline CSS घर के मुखिया का आदेश है जो बाकी सब पर भारी पड़ता है।",
    importantPoints: [
      "प्राथमिकता क्रम: Inline CSS > Internal CSS > External CSS > Browser Default.",
      "यदि Internal और External दोनों की Specificity समान हो, तो जो कोड में बाद (Later) में लिखा होगा वह जीतेगा।",
      "औद्योगिक स्तर पर 95% काम External CSS द्वारा किया जाता है।",
      "External CSS फाइल के भीतर कभी भी `<style>` टैग नहीं लिखा जाता।",
      "`!important` का अत्यधिक उपयोग कोड डिबगिंग को कठिन बनाता है।"
    ],
    commonMistakes: [
      "External `.css` फाइल के अंदर `<style>` और `</style>` टैग लिख देना।",
      "HTML फाइल में `<link>` टैग के बदले `<style src=\"style.css\">` लिखने की भूल करना।",
      "यह समझना कि External CSS हमेशा Internal से कमजोर होती है (यदि `<link>` टैग `<style>` टैग के नीचे लिखा हो और दोनों की Specificity बराबर हो, तो External जीत जाती है)।"
    ],
    examPerspective: "O-Level में 'Which CSS has the highest priority?' (Inline), `<link>` टैग के अनिवार्य एट्रिब्यूट्स (`rel`, `href`), और `!important` की कार्यप्रणाली पर शत-प्रतिशत प्रश्न पूछे जाते हैं।",
    quickRevision: "3 प्रकार: Inline (style attribute), Internal (<style> in head), External (.css linked via <link>). प्राथमिकता: Inline > Internal/External (Source order) > Browser Defaults. !important सबको ओवरराइड करता है।",
    relatedTopics: ["introduction-to-css", "css-selectors", "css-box-model"],
    practiceTask: "एक HTML पेज बनाएं जिसमें एक ही `<h1>` टैग को External (नीला), Internal (हरा), और Inline (लाल) तीनों स्टाइल दें और आउटपुट चेक करें। फिर Inline हटाकर देखें क्या होता है।",
    quiz: [
      {
        question: "इनमें से किस प्रकार की CSS की प्राथमिकता (Precedence) सामान्यतः सबसे अधिक होती है?",
        options: ["External CSS", "Internal CSS", "Inline CSS", "Browser Default"],
        correctAnswer: "C",
        explanation: "सामान्य परिस्थितियों में Inline CSS (style attribute) की प्राथमिकता Internal और External दोनों से अधिक होती है।"
      },
      {
        question: "External CSS फाइल को HTML डॉक्यूमेंट से जोड़ने के लिए किस HTML टैग का उपयोग किया जाता है?",
        options: ["<script>", "<link>", "<style>", "<css>"],
        correctAnswer: "B",
        explanation: "External CSS को HTML के <head> में <link rel='stylesheet' href='...'> टैग द्वारा जोड़ा जाता है।"
      },
      {
        question: "किसी सामान्य CSS नियम को सभी प्राथमिकताओं के बावजूद सर्वोच्च प्रभावी बनाने के लिए किस कीवर्ड का उपयोग किया जाता है?",
        options: ["!override", "!priority", "!important", "!force"],
        correctAnswer: "C",
        explanation: "!important डिक्लेरेशन किसी भी सामान्य सेलेक्टर प्राथमिकता को ओवरराइड करके सर्वोच्च बन जाता है।"
      }
    ]
  },

  // =========================================================================
  // TOPIC 3: CSS Selectors (Complete Spectrum)
  // =========================================================================
  {
    id: "u4-t3",
    slug: "css-selectors",
    unit: 4,
    unitSlug: "unit-4",
    unitTitle: "Cascading Style Sheets (CSS)",
    title: "CSS Selectors: Universal, Type, Class, ID, Combinators & Attributes",
    hindiTitle: "CSS चयनकर्ता (यूनिवर्सल, टैग, क्लास, ID, कॉम्बिनेटर्स, एट्रिब्यूट एवं स्यूडो)",
    definitionEnglish: "CSS Selectors are patterns used to match and target HTML elements on a web page to apply specific style rulesets, encompassing Universal (*), Type, Class (.), ID (#), Combinators (Descendant, Child, Sibling), Attribute selectors, Pseudo-classes, and Pseudo-elements.",
    definitionHindi: "CSS सिलेक्टर्स वे पैटर्न हैं जिनका उपयोग वेबपेज पर उन HTML तत्वों को खोजने और लक्षित करने के लिए किया जाता है जिन पर स्टाइल नियम लागू करने हैं; इनमें यूनिवर्सल, टैग, क्लास, ID, कॉम्बिनेटर्स, एट्रिब्यूट और स्यूडो सिलेक्टर्स शामिल हैं।",
    simpleWords: "सिलेक्टर वह सटीक निशाना है जिससे ब्राउज़र को पता चलता है कि पेज की किस खास हेडिंग, बटन, कार्ड या इनपुट बॉक्स को कौन सा रंग और साइज देना है।",
    whyImportant: "सही सिलेक्टर का चुनाव करने से कोड छोटा, तेज, और साफ बनता है। O-Level परीक्षा में सिलेक्टर्स के सिंबल्स (*, #, ., >, +, ~, [ ]) और स्पेसिफिसिटी गणना पर सीधे 10-15 मार्क्स के प्रश्न आते हैं।",
    detailedExplanation: `### 1. Comprehensive Classification of CSS Selectors

#### A. Basic Selectors
1. **Universal Selector (\`*\`):** Targets every single element in the DOM tree. Commonly used in CSS resets:
   \`\`\`css
   * { box-sizing: border-box; margin: 0; padding: 0; }
   \`\`\`
2. **Type / Element Selector (\`p\`, \`h1\`, \`div\`):** Matches all elements that share the specified tag name.
3. **Class Selector (\`.badge\`):** Targets elements carrying \`class="badge"\`. Can be reused multiple times across the page.
4. **ID Selector (\`#main-nav\`):** Targets the unique element having \`id="main-nav"\`. An ID must be unique within an HTML document.
5. **Grouping Selector (\`,\`):** Groups multiple selectors sharing identical styling:
   \`\`\`css
   h1, h2, h3 { font-family: 'Poppins', sans-serif; color: #1e293b; }
   \`\`\`

#### B. Combinator Selectors
Combinators express relationships between selectors:
1. **Descendant Selector (Space):** Targets elements nested anywhere inside the ancestor:
   \`div p\` targets all \`<p>\` elements inside any \`<div>\`.
2. **Child Combinator (\`>\`):** Targets direct (first-level) children only:
   \`ul > li\` matches only \`<li>\` that are direct children of \`<ul>\`.
3. **Adjacent Sibling Combinator (\`+\`):** Targets the immediately following sibling element:
   \`h2 + p\` matches the first \`<p>\` immediately following an \`<h2>\`.
4. **General Sibling Combinator (\`~\`):** Targets all following sibling elements:
   \`h2 ~ p\` matches all sibling \`<p>\` elements that appear anywhere after \`<h2>\`.

#### C. Attribute Selectors
Targets elements based on attributes and their values:
- \`[disabled]\`: Matches elements with the disabled attribute present.
- \`input[type="email"]\`: Matches exact value.
- \`a[href^="https"]\`: Matches links whose href **starts with** https.
- \`img[src$=".png"]\`: Matches images whose src **ends with** .png.
- \`a[href*="nielit"]\`: Matches links whose href **contains** the substring 'nielit'.

#### D. Pseudo-Classes & Pseudo-Elements
- **Pseudo-classes (\`:\`):** Selects an element based on its dynamic state or position:
  - State: \`:hover\`, \`:focus\`, \`:focus-visible\`, \`:active\`, \`:visited\`, \`:disabled\`.
  - Structural: \`:first-child\`, \`:last-child\`, \`:nth-child(2n)\`, \`:not(.active)\`.
- **Pseudo-elements (\`::\`):** Styles a specific part of an element:
  - \`::before\`, \`::after\`: Injects cosmetic content before/after content.
  - \`::first-letter\`, \`::first-line\`, \`::placeholder\`, \`::selection\`.

### 2. Specificity Calculation Formula
Specificity is represented as a 4-part weight: \`(Inline, ID, Class/Attr/PseudoClass, Element/PseudoElement)\`
- \`style=""\` attribute = \`(1, 0, 0, 0)\`
- \`#header\` = \`(0, 1, 0, 0)\`
- \`.btn:hover\` = \`(0, 0, 2, 0)\` (1 class + 1 pseudo-class)
- \`div p a\` = \`(0, 0, 0, 3)\` (3 elements)
- Higher numeric value wins! If tied, the one declared later in code wins.`,
    syntax: `/* Quick Selector Reference */
*                   /* Universal */
p                   /* Element/Type */
.card               /* Class */
#header             /* ID */
div p               /* Descendant */
div > p             /* Child */
h2 + p              /* Adjacent Sibling */
h2 ~ p              /* General Sibling */
input[type="text"]  /* Attribute */
a:hover             /* Pseudo-class */
p::first-letter     /* Pseudo-element */`,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS Selectors Mastery Showcase</title>
  <style>
    /* 1. Universal Reset */
    * { box-sizing: border-box; }
    
    body { font-family: sans-serif; padding: 20px; line-height: 1.6; }

    /* 2. Grouping Selector */
    h1, h2 { color: #232850; }

    /* 3. ID Selector */
    #page-title { border-bottom: 2px solid #f19a27; padding-bottom: 8px; }

    /* 4. Class Selector */
    .highlight { background-color: #fef08a; padding: 2px 6px; border-radius: 4px; }

    /* 5. Child Combinator (Direct child only) */
    ul.menu > li { display: inline-block; margin-right: 12px; }

    /* 6. Attribute Selector */
    input[type="text"] {
      border: 2px solid #cbd5e1;
      padding: 8px 12px;
      border-radius: 6px;
    }
    input[type="text"]:focus {
      border-color: #f19a27;
      outline: none;
    }

    /* 7. Pseudo-class & Pseudo-element */
    .btn {
      display: inline-block;
      padding: 8px 16px;
      background: #0284c7;
      color: white;
      text-decoration: none;
      border-radius: 6px;
      transition: background 0.2s;
    }
    .btn:hover { background: #0369a1; }
    
    /* First letter drop cap */
    p.intro::first-letter {
      font-size: 200%;
      font-weight: bold;
      color: #f19a27;
      float: left;
      margin-right: 6px;
      line-height: 1;
    }
  </style>
</head>
<body>
  <h1 id="page-title">Demonstrating CSS Selectors</h1>
  <p class="intro">Cascading Style Sheets provide unmatched targeting precision for web developers.</p>
  
  <ul class="menu">
    <li><a href="#" class="btn">Home</a></li>
    <li><a href="#" class="btn">Notes</a></li>
    <li><span class="highlight">Current Section</span></li>
  </ul>

  <div style="margin-top: 20px;">
    <input type="text" placeholder="Type your name here...">
  </div>
</body>
</html>`,
    lineByLine: [
      { line: "line 8: h1, h2 { color: #232850; }", explanation: "Grouping selector applies identical navy color to both h1 and h2 without duplicating rules." },
      { line: "line 11: #page-title { ... }", explanation: "ID selector with high specificity targeting the single page-title element with an orange border." },
      { line: "line 17: ul.menu > li { ... }", explanation: "Child combinator ensuring only direct li children of ul.menu become inline-block horizontal items." },
      { line: "line 20: input[type=\"text\"] { ... }", explanation: "Attribute selector styling text inputs specifically while ignoring radio or submit buttons." },
      { line: "line 36: p.intro::first-letter { ... }", explanation: "Pseudo-element styling only the very first character of the introductory paragraph." }
    ],
    outputExplanation: "शीर्षक के नीचे ऑरेंज लाइन दिखेगी, पहला अक्षर बड़ा ड्रॉप-कैप दिखेगा, लिस्ट आइटम्स क्षैतिज मेन्यू में दिखेंगे, और इनपुट बॉक्स पर क्लिक करने पर ऑरेंज फोकस बॉर्डर आएगी।",
    realWorldAnalogy: "यूनिवर्सल = पूरे स्कूल की सभा; एलिमेंट = सभी छात्र; क्लास = 'मॉनिटर' बैच वाले 5 छात्र; ID = 'रोल नं. 1' वाला अकेला छात्र; एट्रिब्यूट = 'नीली शर्ट' पहने छात्र।",
    importantPoints: [
      "ID सिलेक्टर का प्रतीक `#` और Class सिलेक्टर का प्रतीक `.` है।",
      "Child (`>`) केवल प्रत्यक्ष बच्चे को चुनता है, जबकि Descendant (Space) किसी भी गहराई के बच्चे को चुनता है।",
      "Adjacent Sibling (`+`) ठीक अगला भाई चुनता है, जबकि General Sibling (`~`) बाद के सभी भाइयों को चुनता है।",
      "Pseudo-class के लिए एक कोलन (`:`) और Pseudo-element के लिए दो कोलन (`::`) मानक हैं।",
      "Specificity में 1 ID सिलेक्टर 100 क्लास सिलेक्टर्स से भी अधिक शक्तिशाली होता है।"
    ],
    commonMistakes: [
      "ID के लिए `.` और Class के लिए `#` लिख देना।",
      "एक ही HTML डॉक्यूमेंट में एक ही `id` दो अलग-अलग एलिमेंट्स को दे देना (ID पूरे पेज में यूनिक होनी चाहिए)।",
      "Child (`>`) और Descendant (Space) में अंतर न समझना।"
    ],
    examPerspective: "O-Level में सिंबल्स: Universal (`*`), ID (`#`), Class (`.`), Direct Child (`>`), Adjacent Sibling (`+`), Pseudo-class (`:hover`), और Specificity ऑर्डर पर सबसे ज्यादा प्रश्न पूछे जाते हैं।",
    quickRevision: "* = Universal | # = ID | . = Class | Space = Descendant | > = Direct Child | + = Adjacent Sibling | ~ = General Sibling | [attr] = Attribute | : = State | :: = Element Part.",
    relatedTopics: ["introduction-to-css", "types-of-css", "css-box-model"],
    practiceTask: "एक ऐसा सिलेक्टर लिखें जो केवल उन लिंक्स (`<a>`) को लाल रंग दे जिनके `href` का मान 'https://' से शुरू होता है (`a[href^='https']`).",
    quiz: [
      {
        question: "किसी विशिष्ट क्लास 'card' वाले तत्वों को लक्षित करने के लिए किस सिलेक्टर का उपयोग किया जाता है?",
        options: ["#card", ".card", "*card", "card()"],
        correctAnswer: "B",
        explanation: "क्लास सेलेक्टर को पीरियड/डॉट चिन्ह (.) के साथ लिखा जाता है, जैसे .card।"
      },
      {
        question: "इनमें से कौन सा कॉम्बिनेटर केवल 'Direct Child' (प्रत्यक्ष संतान) को चुनता है?",
        options: ["Space", "+", ">", "~"],
        correctAnswer: "C",
        explanation: "ग्रेटर-दैन चिन्ह (>) चाइल्ड कॉम्बिनेटर है जो केवल प्रत्यक्ष संतान को चुनता है।"
      },
      {
        question: "CSS Specificity पदानुक्रम में इनमें से किसका भार (Weight) सबसे अधिक होता है?",
        options: ["Class Selector", "Element Tag Selector", "ID Selector", "Universal Selector"],
        correctAnswer: "C",
        explanation: "ID सिलेक्टर का वेट (0,1,0,0) क्लास (0,0,1,0) और एलिमेंट (0,0,0,1) से अधिक होता है।"
      }
    ]
  },

  // =========================================================================
  // TOPIC 4: CSS Colors & Backgrounds
  // =========================================================================
  {
    id: "u4-t4",
    slug: "css-colors-and-backgrounds",
    unit: 4,
    unitSlug: "unit-4",
    unitTitle: "Cascading Style Sheets (CSS)",
    title: "CSS Colors, Color Models, Gradients & Backgrounds",
    hindiTitle: "CSS कलर्स, हेक्स, RGB, HSL, ग्रेडिएंट्स एवं बैकग्राउंड्स",
    definitionEnglish: "CSS Colors and Backgrounds encompass color format representations (Named, Hexadecimal, RGB/RGBA, HSL/HSLA, modern OKLCH) and background rendering properties including solid fills, linear/radial gradients, background images, positioning, sizing, and repeat controls.",
    definitionHindi: "CSS कलर्स और बैकग्राउंड्स रंग प्रारूपों (Named, Hex, RGB/RGBA, HSL/HSLA, आधुनिक OKLCH) और बैकग्राउंड रेंडरिंग प्रॉपर्टीज (सॉलिड कलर्स, लीनियर/रेडियल ग्रेडिएंट्स, बैकग्राउंड इमेज, पोजिशन, साइजिंग और रिपीट) को नियंत्रित करते हैं।",
    simpleWords: "यह वेबपेज पर किसी भी टेक्स्ट या बॉक्स को आकर्षक रंग देने, दो रंगों को मिलाकर सुंदर ग्रेडिएंट बनाने, या पीछे सुंदर फोटो लगाने की तकनीक है।",
    whyImportant: "रंग और बैकग्राउंड वेबसाइट के ब्रांड को जीवंत बनाते हैं। सही बैकग्राउंड और कलर कंट्रास्ट यूजर को आकर्षित करता है और दृष्टिबाधित लोगों (Accessibility WCAG) के लिए टेक्स्ट को पठनीय बनाता है।",
    detailedExplanation: `### 1. The Spectrum of CSS Color Formats
CSS supports multiple ways to declare colors:
1. **Named Colors (140 standard keywords):** \`red\`, \`navy\`, \`tomato\`, \`rebeccapurple\`, \`transparent\`, \`currentColor\`.
2. **Hexadecimal Notation (\`#RRGGBB\` or \`#RRGGBBAA\`):**
   - Base-16 values from \`00\` (none) to \`FF\` (full intensity).
   - Shorthand: \`#fff\` = \`#ffffff\`, \`#f00\` = \`#ff0000\`.
   - With Alpha: \`#0284c780\` (50% transparency).
3. **RGB & RGBA (\`rgb(red, green, blue, alpha)\`):**
   - Range: \`0 - 255\` or \`0% - 100%\`.
   - Example: \`rgb(35, 40, 80)\` (Navy), \`rgba(241, 154, 39, 0.8)\` (80% opacity orange).
   - Modern syntax: \`rgb(35 40 80 / 80%)\` (space-separated with slash for alpha).
4. **HSL & HSLA (\`hsl(hue, saturation, lightness, alpha)\`):**
   - **Hue:** 0° - 360° on the color wheel (0° = Red, 120° = Green, 240° = Blue).
   - **Saturation:** 0% (grey) to 100% (vibrant pure color).
   - **Lightness:** 0% (pure black) to 100% (pure white); 50% is standard color.
5. **Modern Perceptual Color Spaces (e.g. OKLCH):**
   - \`oklch(lightness chroma hue / alpha)\`: Modern CSS Color Module Level 4 standard providing uniform perceived brightness across all hues.

### 2. Comprehensive CSS Background Properties
- **\`background-color\`:** Sets a solid background color.
- **\`background-image\`:** Sets image or gradient: \`url('bg.jpg')\` or \`linear-gradient(135deg, #232850, #1f64c9)\`.
- **\`background-repeat\`:** Controls tiling: \`repeat\`, \`no-repeat\`, \`repeat-x\`, \`repeat-y\`.
- **\`background-position\`:** Positions image: \`center\`, \`top left\`, \`50% 50%\`, \`right 20px bottom 10px\`.
- **\`background-size\`:**
  - \`auto\`: Original dimensions.
  - \`cover\`: Scales image to completely cover the container, clipping overflow if aspect ratio differs.
  - \`contain\`: Scales image to fit entirely inside container without clipping.
  - Custom: \`100% auto\`, \`200px 150px\`.
- **\`background-attachment\`:**
  - \`scroll\` (Default): Background scrolls with page.
  - \`fixed\`: Background stays stationary relative to viewport (Parallax effect).
- **\`background\` Shorthand:**
  \`background: #color url(...) no-repeat center / cover fixed;\``,
    syntax: `/* Color Formats */
color: #f19a27;
color: rgb(241, 154, 39);
color: hsl(34, 88%, 55%);

/* Background Shorthand */
background: #232850 url('hero.jpg') no-repeat center / cover;

/* Linear Gradient */
background: linear-gradient(135deg, #232850 0%, #1f64c9 100%);`,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS Colors and Background Showcase</title>
  <style>
    body {
      font-family: sans-serif;
      margin: 0;
      padding: 24px;
      background-color: #fff8f3;
    }
    /* Gradient Banner Card */
    .gradient-card {
      background: linear-gradient(135deg, #232850 0%, #1f64c9 100%);
      color: #ffffff;
      padding: 32px;
      border-radius: 12px;
      margin-bottom: 24px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    }
    .gradient-card h2 { margin-top: 0; color: #f19a27; }

    /* Alpha Transparency Card */
    .glass-card {
      background-color: rgba(255, 255, 255, 0.85);
      border: 1px solid #e5e7eb;
      padding: 24px;
      border-radius: 12px;
      color: #111827;
    }
  </style>
</head>
<body>
  <div class="gradient-card">
    <h2>Linear Gradient Master Header</h2>
    <p>Using 135-degree color stop transition from Navy to Secondary Blue.</p>
  </div>

  <div class="glass-card">
    <h3>Semi-Transparent Card (RGBA)</h3>
    <p>Background uses rgba(255, 255, 255, 0.85) for soft opacity.</p>
  </div>
</body>
</html>`,
    lineByLine: [
      { line: "line 14: background: linear-gradient(135deg, #232850 0%, #1f64c9 100%);", explanation: "Creates a smooth 135-degree diagonal color transition from Navy (#232850) to Blue (#1f64c9)." },
      { line: "line 24: background-color: rgba(255, 255, 255, 0.85);", explanation: "Renders a white background with 85% opacity (15% translucency)." }
    ],
    outputExplanation: "पहला कार्ड नेवी से नीले रंग के खूबसूरत ग्रेडिएंट में दिखेगा जिस पर ऑरेंज हेडिंग होगी; दूसरा कार्ड साफ बॉर्डर वाला हल्का पारदर्शी सफेद कार्ड दिखेगा।",
    realWorldAnalogy: "RGB लाइट के तीन प्राथमिक बल्बों (लाल, हरा, नीला) की चमक मिलाकर नया रंग बनाने जैसा है; HSL एक 360-डिग्री रंग के पहिए पर उंगली रखकर रंग चुनने जैसा है।",
    importantPoints: [
      "हेक्साडेसिमल कोड 0 से F (0-9, A-F) तक 16 अंकों पर काम करता है।",
      "RGB में प्रत्येक रंग की सीमा 0 से 255 तक होती है (उदा. `rgb(255, 255, 255)` = सफेद)।",
      "RGBA और HSLA में 'A' का अर्थ Alpha (पारदर्शिता: 0.0 से 1.0) होता है।",
      "`background-size: cover` इमेज को बिना डिस्टॉर्ट किए पूरे बॉक्स को भरने के लिए सबसे ज्यादा उपयोग होता है।",
      "`background-attachment: fixed` से बैकग्राउंड इमेज स्क्रॉल नहीं होती (Parallax प्रभाव)।"
    ],
    commonMistakes: [
      "`opacity` प्रॉपर्टी और `rgba()` में अंतर न समझना (`opacity` पूरे बॉक्स और अंदर के टेक्स्ट दोनों को पारदर्शी बना देती है, जबकि `rgba()` केवल बैकग्राउंड को पारदर्शी बनाती है)।",
      "`background-repeat: no-repeat` लगाना भूल जाना, जिससे छोटी इमेज पूरे स्क्रीन पर टाइल्स की तरह रिपीट होती रहती है।"
    ],
    examPerspective: "O-Level में हेक्साडेसिमल कोड (उदा. #FFFFFF, #000000, #FF0000), RGB रेंज (0-255), Alpha वैल्यू (0-1), और `background-size: cover` पर बार-बार प्रश्न आते हैं।",
    quickRevision: "Color formats: HEX (#RRGGBB), RGB (0-255), HSL (Hue 0-360, Sat%, Light%). Backgrounds: color, image, repeat (no-repeat), position, size (cover/contain), attachment (fixed).",
    relatedTopics: ["introduction-to-css", "css-typography-and-fonts", "css-box-model"],
    practiceTask: "एक ऐसा बॉक्स बनाएं जिसका बैकग्राउंड तीन रंगों (ऑरेंज, सफेद, हरा) का लीनियर ग्रेडिएंट हो और टेक्स्ट का रंग गहरा नेवी ब्लू हो।",
    quiz: [
      {
        question: "RGB रंग मॉडल में शुद्ध लाल (Pure Red) का मान क्या होता है?",
        options: ["rgb(255, 0, 0)", "rgb(0, 255, 0)", "rgb(0, 0, 255)", "rgb(255, 255, 255)"],
        correctAnswer: "A",
        explanation: "RGB(255, 0, 0) में Red पूर्ण तीव्रता (255) पर है और Green व Blue शून्य हैं।"
      },
      {
        question: "किसी बैकग्राउंड इमेज को पूरे कंटेनर में खींचकर भरने के लिए (बिना खाली जगह छोड़े) किस मान का उपयोग किया जाता है?",
        options: ["background-size: contain", "background-size: cover", "background-size: stretch", "background-size: fill"],
        correctAnswer: "B",
        explanation: "background-size: cover कंटेनर को पूरी तरह ढकने के लिए इमेज को स्केल करता है।"
      },
      {
        question: "हेक्साडेसिमल कलर कोड #000000 किस रंग का प्रतिनिधित्व करता है?",
        options: ["White", "Black", "Blue", "Transparent"],
        correctAnswer: "B",
        explanation: "#000000 शुद्ध काला (Black) रंग दर्शाता है, जबकि #FFFFFF सफेद दर्शाता है।"
      }
    ]
  },

  // =========================================================================
  // TOPIC 5: CSS Typography & Fonts
  // =========================================================================
  {
    id: "u4-t5",
    slug: "css-typography-and-fonts",
    unit: 4,
    unitSlug: "unit-4",
    unitTitle: "Cascading Style Sheets (CSS)",
    title: "CSS Typography, Text Formatting & Web Fonts",
    hindiTitle: "CSS टाइपोग्राफी, टेक्स्ट फॉर्मेटिंग, फॉन्ट फैमिलीज एवं वेब फोंट्स",
    definitionEnglish: "CSS Typography and Text properties control the aesthetic presentation of text characters and layout flow, encompassing font families (web-safe, font stacks, Google Fonts, @font-face), font metrics (size, weight, style), text alignments, line heights, letter-spacing, and text decorations.",
    definitionHindi: "CSS टाइपोग्राफी और टेक्स्ट प्रॉपर्टीज वेबपेज पर अक्षरों के स्वरूप और टेक्स्ट लेआउट को नियंत्रित करती हैं; इसमें फॉन्ट फैमिलीज (Web-safe, Font Stacks, Google Fonts, @font-face), फॉन्ट साइज, फॉन्ट वेट, लाइन हाइट, टेक्स्ट अलाइनमेंट और टेक्स्ट डेकोरेशन शामिल हैं।",
    simpleWords: "यह वेबपेज के शब्दों को सुंदर लिखावट, सही आकार, अक्षरों के बीच जगह, और स्पष्ट पठनीयता देने की कला है ताकि पाठक बिना आंखें थकाए आसानी से पढ़ सके।",
    whyImportant: "किसी भी वेबसाइट का 80% भाग टेक्स्ट होता है। खराब टाइपोग्राफी से अच्छी वेबसाइट भी अप्रफेशनल दिखती है, जबकि सही फॉन्ट और लाइन-हाइट यूजर एंगेजमेंट और रीडेबिलिटी को 50% तक बढ़ा देते हैं।",
    detailedExplanation: `### 1. Typography Core Properties

#### A. Font Properties
- **\`font-family\`:** Prioritized list of font family names and generic fallback categories:
  - Generic Families: \`serif\` (Times New Roman), \`sans-serif\` (Arial, Inter), \`monospace\` (Courier, Fira Code), \`cursive\`, \`fantasy\`.
  - Font Stack Best Practice: Always end with a generic fallback:
    \`font-family: Inter, 'Segoe UI', system-ui, sans-serif;\`
- **\`font-size\`:** Sets text size using absolute (\`px\`, \`pt\`) or relative (\`rem\`, \`em\`, \`%\`) units.
- **\`font-weight\`:** Controls thickness: \`normal\` (400), \`bold\` (700), or numeric values \`100 - 900\`.
- **\`font-style\`:** \`normal\`, \`italic\`, \`oblique\`.

#### B. Text Formatting Properties
- **\`text-align\`:** Horizontal alignment: \`left\`, \`right\`, \`center\`, \`justify\`.
- **\`text-decoration\`:** \`none\` (removes link underlines), \`underline\`, \`line-through\` (strikethrough), \`overline\`.
- **\`text-transform\`:** \`uppercase\`, \`lowercase\`, \`capitalize\` (Title Case).
- **\`line-height\`:** Distance between lines of text (Best practice: \`1.5\` to \`1.6\` unitless for body text).
- **\`letter-spacing\`:** Spacing between characters.
- **\`word-spacing\`:** Spacing between words.
- **\`text-overflow: ellipsis\`:** Renders \`...\` when single-line text overflows an element (\`white-space: nowrap; overflow: hidden; text-overflow: ellipsis;\`).

### 2. Loading Web Fonts: Google Fonts & \`@font-face\`
Web safe fonts (Arial, Times New Roman, Verdana) are pre-installed on most machines. To use custom modern fonts:
1. **Google Fonts via \`<link>\`:**
   \`\`\`html
   <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap">
   \`\`\`
2. **Local Custom Fonts via \`@font-face\`:**
   \`\`\`css
   @font-face {
     font-family: 'CustomFont';
     src: url('fonts/custom.woff2') format('woff2');
     font-weight: 400;
     font-style: normal;
     font-display: swap;
   }
   \`\`\``,
    syntax: `/* Typography Shorthand / Declarations */
font-family: 'Inter', system-ui, sans-serif;
font-size: 1.125rem;       /* 18px relative to root */
font-weight: 600;          /* Semi-bold */
line-height: 1.6;          /* Unitless ratio */
text-align: left;
text-decoration: none;
text-transform: capitalize;`,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS Typography Showcase</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      padding: 30px;
      background: #f8fafc;
      color: #1e293b;
      line-height: 1.6;
    }
    h1 {
      font-size: 32px;
      font-weight: 800;
      color: #232850;
      letter-spacing: -0.5px;
      text-transform: uppercase;
      border-bottom: 3px solid #f19a27;
      display: inline-block;
      padding-bottom: 4px;
    }
    .lead-text {
      font-size: 18px;
      color: #475569;
      margin-top: 16px;
    }
    a.clean-link {
      color: #0284c7;
      text-decoration: none;
      font-weight: 600;
      border-bottom: 2px solid transparent;
      transition: border-color 0.2s;
    }
    a.clean-link:hover {
      border-bottom-color: #0284c7;
    }
    .truncated {
      width: 280px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      background: #e2e8f0;
      padding: 8px 12px;
      border-radius: 6px;
      margin-top: 16px;
    }
  </style>
</head>
<body>
  <h1>Typography Mastery</h1>
  <p class="lead-text">Clean line height and letter spacing create an effortless reading experience.</p>
  <p><a href="#" class="clean-link">Explore Documentation Link (No default ugly underline)</a></p>
  <div class="truncated" title="This is a very long sentence demonstrating text-overflow ellipsis clipping.">
    This is a very long sentence demonstrating text-overflow ellipsis clipping.
  </div>
</body>
</html>`,
    lineByLine: [
      { line: "line 15: font-weight: 800; letter-spacing: -0.5px; text-transform: uppercase;", explanation: "Styles heading to ultra-bold, slightly tightened letter spacing, and auto-uppercase conversion." },
      { line: "line 26: text-decoration: none;", explanation: "Removes default browser link underline for a cleaner modern interface." },
      { line: "line 36: white-space: nowrap; overflow: hidden; text-overflow: ellipsis;", explanation: "Classic 3-property combination that truncates single-line overflowing text with a clean ellipsis (...)." }
    ],
    outputExplanation: "हेडिंग बड़े अक्षरों में सुंदर नेवी ब्लू रंग में दिखेगी, लिंक के नीचे की डिफ़ॉल्ट नीली लाइन गायब होगी, और लंबा वाक्य बॉक्स से बाहर न निकलकर '...' के साथ कट जाएगा।",
    realWorldAnalogy: "फॉन्ट फैमिली किसी वक्ता की आवाज (गंभीर, चुलबुली या रोबोटिक) जैसी है; फॉन्ट साइज उसकी आवाज की तेजी जैसी है; और लाइन-हाइट शब्दों के बीच सांस लेने का विराम है।",
    importantPoints: [
      "generic fallback (जैसे `sans-serif` या `serif`) फॉन्ट स्टैक के अंत में हमेशा लिखना चाहिए।",
      "लिंक्स से डिफ़ॉल्ट अंडरलाइन हटाने के लिए `text-decoration: none;` का उपयोग होता है।",
      "बॉडी टेक्स्ट के लिए `line-height: 1.5` से `1.6` अनुशंसित अनुपात है।",
      "`font-weight: bold` का संख्यात्मक मान `700` और `normal` का `400` होता है।",
      "`rem` यूनिट रूट `<html>` फॉन्ट साइज (डिफ़ॉल्ट 16px) के सापेक्ष काम करती है।"
    ],
    commonMistakes: [
      "फॉन्ट स्टैक में स्पेस वाले नाम (जैसे 'Times New Roman' या 'Segoe UI') को कोट्स में न लिखना।",
      "`font-size: 16` लिख देना और यूनिट (`px` या `rem`) भूल जाना (यूनिट न होने पर ब्राउज़र नियम अस्वीकार कर देता है)।"
    ],
    examPerspective: "O-Level में `text-decoration: none`, `text-transform: uppercase/capitalize`, Web-safe फॉन्ट्स, और Generic Font Families (Serif vs Sans-serif) पर प्रश्न पूछे जाते हैं।",
    quickRevision: "Font: font-family (stack with fallback), font-size (px/rem), font-weight (400/700), font-style (italic). Text: text-align, text-decoration (none), text-transform (capitalize/uppercase), line-height (1.5).",
    relatedTopics: ["introduction-to-css", "css-colors-and-backgrounds", "css-box-model"],
    practiceTask: "एक ऐसा पैराग्राफ स्टाइल करें जिसमें प्रत्येक शब्द का पहला अक्षर अपने आप कैपिटल हो जाए (`text-transform: capitalize`), और लाइन-हाइट 1.8 हो।",
    quiz: [
      {
        question: "किसी हाइपरलिंक (<a>) के नीचे की डिफ़ॉल्ट अंडरलाइन हटाने के लिए किस CSS प्रॉपर्टी का उपयोग किया जाता है?",
        options: ["underline: none", "text-decoration: none", "font-style: no-underline", "text-style: clear"],
        correctAnswer: "B",
        explanation: "text-decoration: none से लिंक के नीचे की डिफ़ॉल्ट रेखा हट जाती है।"
      },
      {
        question: "अक्षरों के सिरों पर छोटे सजावटी स्ट्रोक्स (Serifs) न होने वाले आधुनिक सीधे फोंट्स किस जेनेरिक फैमिली में आते हैं?",
        options: ["serif", "sans-serif", "monospace", "cursive"],
        correctAnswer: "B",
        explanation: "Sans-serif (बिना सेरिफ के) सीधे और साफ फोंट्स होते हैं, जैसे Arial, Helvetica और Inter।"
      },
      {
        question: "किसी टेक्स्ट के सभी अक्षरों को अपरकेस (राजधानी अक्षरों) में बदलने के लिए कौन सा मान सही है?",
        options: ["text-transform: uppercase", "font-transform: capitalize", "text-style: upper", "font-case: capital"],
        correctAnswer: "A",
        explanation: "text-transform: uppercase से टेक्स्ट के सभी अक्षर कैपिटल अक्षरों में बदल जाते हैं।"
      }
    ]
  },

  // =========================================================================
  // TOPIC 6: The CSS Box Model & box-sizing
  // =========================================================================
  {
    id: "u4-t6",
    slug: "css-box-model",
    unit: 4,
    unitSlug: "unit-4",
    unitTitle: "Cascading Style Sheets (CSS)",
    title: "The CSS Box Model & box-sizing: border-box",
    hindiTitle: "CSS बॉक्स मॉडल (Content, Padding, Border, Margin एवं box-sizing)",
    definitionEnglish: "The CSS Box Model is a foundational layout paradigm in which every HTML element is treated as a rectangular box comprising four concentric layers: Content (innermost text/media), Padding (clearing inside the border), Border (perimeter line), and Margin (external clearance separating adjacent elements).",
    definitionHindi: "CSS बॉक्स मॉडल वेब लेआउट का एक मूलभूत सिद्धांत है जिसमें प्रत्येक HTML तत्व को एक आयताकार बॉक्स माना जाता है जिसमें चार संकेंद्री परतें होती हैं: Content (सामग्री), Padding (बॉर्डर के अंदर का स्थान), Border (किनारे की रेखा), और Margin (पड़ोसी तत्वों से बाहरी दूरी)।",
    simpleWords: "वेबपेज का हर तत्व एक डिब्बा है: 1. डिब्बे में रखा सामान (Content), 2. सामान के चारों ओर थर्मोकोल की पैकिंग (Padding), 3. डिब्बे का गत्ता (Border), और 4. डिब्बे के बाहर मेज पर छोड़ी गई खाली जगह (Margin)।",
    whyImportant: "बॉक्स मॉडल CSS का सबसे महत्वपूर्ण और केंद्रीय विषय है। बिना इसे समझे आप किसी भी एलिमेंट का सही आकार (Width/Height) तय नहीं कर सकते। O-Level परीक्षा में इसके क्रम और गणना पर हर साल बड़े प्रश्न आते हैं।",
    detailedExplanation: `### 1. The Four Concentric Layers of the Box Model
From inside to outside, the layers are:
1. **Content Area:** Where text, images, or child elements reside. Defined by \`width\` and \`height\`.
2. **Padding:** Transparent space between the content and the border. Padding inherits the element's \`background-color\`.
3. **Border:** The perimeter bounding the padding. Has width, style, and color (\`border: 2px solid #000\`).
4. **Margin:** Completely transparent space outside the border separating the element from other elements.

\`\`\`text
+-----------------------------------+
|               MARGIN              |
|   +---------------------------+   |
|   |          BORDER           |   |
|   |   +-------------------+   |   |
|   |   |      PADDING      |   |   |
|   |   |   +-----------+   |   |   |
|   |   |   |  CONTENT  |   |   |   |
|   |   |   +-----------+   |   |   |
|   |   +-------------------+   |   |
|   +---------------------------+   |
+-----------------------------------+
\`\`\`

### 2. The Critical Difference: \`content-box\` vs \`border-box\`

#### A. Traditional Default: \`box-sizing: content-box\`
- When you declare \`width: 300px; padding: 20px; border: 5px solid black;\`:
  - Total Rendered Width = \`300 + (20 × 2) + (5 × 2) = 350px\`!
  - Adding padding or border **expands the element**, often breaking multi-column layouts and forcing items onto new lines.

#### B. Modern Industry Standard: \`box-sizing: border-box\`
- When you declare \`width: 300px; padding: 20px; border: 5px solid black;\`:
  - Total Rendered Width = **Exactly 300px**!
  - Padding and border are absorbed inside the 300px, shrinking the inner content area rather than expanding the box.
- Modern CSS Best Practice (Universal Box-Sizing Reset):
  \`\`\`css
  *, *::before, *::after {
    box-sizing: border-box;
  }
  \`\`\`

### 3. Shorthand Syntax for Margin and Padding
Values follow the clockwise clock rule (**TRouBLe: Top, Right, Bottom, Left**):
- 4 values: \`margin: 10px 20px 30px 40px;\` (Top, Right, Bottom, Left)
- 3 values: \`padding: 10px 20px 30px;\` (Top, Left/Right, Bottom)
- 2 values: \`margin: 20px auto;\` (Top/Bottom, Left/Right — Centers block elements!)
- 1 value: \`padding: 15px;\` (All 4 sides)

### 4. Margin Collapsing
When vertical margins of two adjacent block elements touch, they **collapse** into a single margin equal to the larger of the two margins (e.g., \`margin-bottom: 30px\` and \`margin-top: 20px\` result in a 30px gap, not 50px). Horizontal margins never collapse.`,
    syntax: `/* Universal Box Sizing */
* {
  box-sizing: border-box;
}

/* Margin and Padding Clockwise Rules */
padding: 10px 20px;       /* 10px top/bottom, 20px left/right */
margin: 0 auto;           /* Centers block element horizontally */
border: 2px solid #cbd5e1;`,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS Box Model Interactive Demonstration</title>
  <style>
    /* Universal Border-Box Reset */
    * { box-sizing: border-box; margin: 0; padding: 0; }
    
    body {
      font-family: sans-serif;
      padding: 30px;
      background: #f8fafc;
    }
    
    /* Box Model Demonstration Card */
    .box-container {
      width: 320px;
      margin: 24px auto;          /* External Margin (Centers box) */
      border: 4px solid #232850;   /* Perimeter Border */
      padding: 24px;              /* Internal Padding */
      background-color: #ffffff;  /* Content Background */
      border-radius: 12px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    }

    .content-box-inner {
      background-color: #f19a27;
      color: #ffffff;
      padding: 16px;
      text-align: center;
      font-weight: bold;
      border-radius: 6px;
    }
  </style>
</head>
<body>
  <div class="box-container">
    <div class="content-box-inner">
      INNER CONTENT AREA
    </div>
    <p style="margin-top: 16px; font-size: 14px; color: #64748b; text-align: center;">
      Padding separates this text from the Navy border; Margin centers this card on the page.
    </p>
  </div>
</body>
</html>`,
    lineByLine: [
      { line: "line 8: * { box-sizing: border-box; margin: 0; padding: 0; }", explanation: "Sets universal border-box model across all elements and clears default browser margins/paddings." },
      { line: "line 18: margin: 24px auto;", explanation: "24px vertical margin and 'auto' horizontal margin, which centers the 320px block element horizontally." },
      { line: "line 19: border: 4px solid #232850;", explanation: "4px solid dark navy border surrounding the padding area." },
      { line: "line 20: padding: 24px;", explanation: "Creates 24px of internal breathing room between the outer border and inner orange content." }
    ],
    outputExplanation: "स्क्रीन के बीचों-बीच 320px का सफेद कार्ड दिखेगा जिसमें 4px का नेवी बॉर्डर, 24px की भीतरी खाली जगह (पैडिंग) और बीच में ऑरेंज कंटेंट बॉक्स होगा।",
    realWorldAnalogy: "जैसे एक कीमती घड़ी के गिफ्ट बॉक्स में: घड़ी = Content; चारों तरफ थर्मोकोल रुई = Padding; गत्ते का डिब्बा = Border; और डिब्बे के बाहर मेज पर छोड़ी गई जगह = Margin।",
    importantPoints: [
      "बॉक्स मॉडल का सही क्रम (अंदर से बाहर): Content -> Padding -> Border -> Margin.",
      "मार्जिन पारदर्शी (Transparent) होता है और बैकग्राउंड रंग नहीं लेता।",
      "पैडिंग बैकग्राउंड रंग लेती है।",
      "`box-sizing: border-box` का उपयोग करने पर पैडिंग और बॉर्डर एलिमेंट की चौड़ाई बढ़ाते नहीं हैं।",
      "`margin: 0 auto;` किसी ब्लॉक एलिमेंट को हॉरिजॉन्टली सेंटर करने का सबसे प्रसिद्ध तरीका है।",
      "वर्टिकल मार्जिन्स आपस में कोलैप्स (Margin Collapsing) हो जाते हैं, हॉरिजॉन्टल मार्जिन्स नहीं।"
    ],
    commonMistakes: [
      "`content-box` में पैडिंग जोड़ने से एलिमेंट की चौड़ाई बढ़ जाने के कारण लेआउट टूट जाना।",
      "पैडिंग और मार्जिन के कार्य को उलझा देना (पैडिंग बॉर्डर के अंदर होती है, मार्जिन बाहर)।",
      "`inline` एलिमेंट्स (जैसे `<span>`) पर टॉप और बॉटम मार्जिन लगाने की कोशिश करना जो काम नहीं करते।"
    ],
    examPerspective: "O-Level में 'Box Model का सही क्रम क्या है?', 'box-sizing: border-box का क्या काम है?', और कुल चौड़ाई की गणना (Width + Padding + Border) पर न्यूमेरिकल/थ्योरी प्रश्न 100% आते हैं।",
    quickRevision: "Box Model = Content + Padding (inside border) + Border + Margin (outside border). box-sizing: border-box keeps declared width fixed by absorbing padding/border. margin: auto centers block elements.",
    relatedTopics: ["css-selectors", "css-borders-and-outlines", "css-display-and-visibility"],
    practiceTask: "एक `<div>` बनाएं जिसकी चौड़ाई 300px, पैडिंग 20px, और बॉर्डर 5px हो। `box-sizing: content-box` और `border-box` दोनों लगाकर इंस्पेक्ट एलिमेंट में कुल चौड़ाई का अंतर देखें।",
    quiz: [
      {
        question: "CSS बॉक्स मॉडल में अंदर से बाहर की ओर सही क्रम क्या है?",
        options: [
          "Content -> Border -> Padding -> Margin",
          "Content -> Padding -> Border -> Margin",
          "Margin -> Border -> Padding -> Content",
          "Padding -> Content -> Border -> Margin"
        ],
        correctAnswer: "B",
        explanation: "बॉक्स मॉडल का क्रम: सबसे अंदर Content, फिर Padding, उसके बाहर Border, और सबसे बाहर Margin होता है।"
      },
      {
        question: "किसी ब्लॉक एलिमेंट की चौड़ाई में पैडिंग और बॉर्डर को समाहित करने वाली आधुनिक प्रॉपर्टी कौन सी है?",
        options: ["box-sizing: content-box", "box-sizing: border-box", "box-sizing: padding-box", "box-layout: fit"],
        correctAnswer: "B",
        explanation: "box-sizing: border-box करने से पैडिंग और बॉर्डर कुल चौड़ाई के अंदर ही समाहित रहते हैं और बॉक्स फैलता नहीं है।"
      },
      {
        question: "इनमें से कौन सा बॉक्स घटक पूरी तरह पारदर्शी होता है और बैकग्राउंड कलर नहीं लेता?",
        options: ["Content", "Padding", "Border", "Margin"],
        correctAnswer: "D",
        explanation: "Margin हमेशा पूरी तरह पारदर्शी होता है और उस पर कोई बैकग्राउंड रंग नहीं चढ़ता।"
      }
    ]
  },

  // =========================================================================
  // TOPIC 7: CSS Borders, Rounded Corners, Shadows & Outlines
  // =========================================================================
  {
    id: "u4-t7",
    slug: "css-borders-and-outlines",
    unit: 4,
    unitSlug: "unit-4",
    unitTitle: "Cascading Style Sheets (CSS)",
    title: "CSS Borders, Rounded Corners, Shadows & Outlines",
    hindiTitle: "CSS बॉर्डर्स, राउंडेड कॉर्नर्स, बॉक्स शैडो एवं आउटलाइन्स",
    definitionEnglish: "CSS Border and Outline properties establish the geometric perimeter lines and visual depth of elements, comprising border-width, border-style, border-color, border-radius (for pill/circle shapes), box-shadow (for elevation), and outlines (drawn outside borders without shifting page layout).",
    definitionHindi: "CSS बॉर्डर और आउटलाइन प्रॉपर्टीज तत्वों की ज्यामितीय परिधि और 3D विजुअल गहराई को नियंत्रित करती हैं; इसमें बॉर्डर की मोटाई, स्टाइल, रंग, बॉर्डर-रेडियस (गोलाकार कोनों हेतु), बॉक्स-शैडो (छाया प्रभाव हेतु), और आउटलाइन (लेआउट डिस्टर्ब किए बिना बाहर बनने वाली रेखा) शामिल हैं।",
    simpleWords: "यह किसी बॉक्स के चारों तरफ सुंदर फ्रेम बनाने, कोनों को गोलाकार करने, कार्ड के नीचे परछाई (Shadow) डालकर उसे हवा में तैरता हुआ दिखाने, और कीबोर्ड फोकस के लिए नीली आउटलाइन खींचने की तकनीक है।",
    whyImportant: "बॉर्डर और शैडो ही आधुनिक कार्ड्स, बटन्स और मॉडल्स को फ्लैट पेज से ऊपर उठाकर एक आधुनिक, आकर्षक और स्पष्ट रूप (Visual Hierarchy) प्रदान करते हैं।",
    detailedExplanation: `### 1. Border Properties Anatomy
- **\`border-width\`:** \`thin\`, \`medium\`, \`thick\`, or specific units like \`1px\`, \`3px\`.
- **\`border-style\`:** MUST be declared for the border to appear!
  - Values: \`solid\`, \`dashed\`, \`dotted\`, \`double\`, \`groove\`, \`ridge\`, \`inset\`, \`outset\`, \`none\`.
- **\`border-color\`:** Any valid color format.
- **Shorthand:** \`border: 2px solid #232850;\`
- **Individual Sides:** \`border-top\`, \`border-right\`, \`border-bottom\`, \`border-left\`.

### 2. Rounded Corners: \`border-radius\`
Controls the curvature of corners:
- Uniform: \`border-radius: 12px;\`
- Pill Button: \`border-radius: 9999px;\`
- Perfect Circle: On an element with equal width and height: \`border-radius: 50%;\`
- 4 Distinct Corners: \`border-radius: top-left top-right bottom-right bottom-left;\`
  \`\`\`css
  border-radius: 16px 4px 16px 4px;
  \`\`\`

### 3. Box Shadows: \`box-shadow\`
Adds realistic drop shadows:
\`\`\`css
/* offset-x | offset-y | blur-radius | spread-radius | color */
box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.1);
\`\`\`
- \`inset\` keyword puts the shadow inside the box (inner bevel effect).
- Multiple shadows can be chained using commas.

### 4. Border vs Outline (Critical Distinction!)
| Feature | Border | Outline |
| :--- | :--- | :--- |
| **Position** | Inside margin, part of element box model | Drawn outside the border edge |
| **Affects Layout?** | **YES** (adds to total dimensions unless border-box) | **NO** (takes 0 layout space, never causes reflow) |
| **Individual Sides?** | YES (\`border-bottom\`, etc.) | NO (surrounds all 4 sides uniformly) |
| **Corners?** | Follows \`border-radius\` | Historically rectangular (modern browsers curve) |
| **Primary Use** | UI design, framing, separators | Accessibility focus indicators (\`:focus-visible\`) |`,
    syntax: `/* Border Shorthand */
border: 2px solid #232850;
border-radius: 12px;

/* Circle */
width: 60px; height: 60px;
border-radius: 50%;

/* Box Shadow */
box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);

/* Outline (for accessibility focus) */
outline: 2px solid #f19a27;
outline-offset: 2px;`,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS Borders, Shadows and Outlines</title>
  <style>
    body { font-family: sans-serif; padding: 30px; background: #fff8f3; }

    /* Modern Rounded Card with Shadow */
    .feature-card {
      width: 300px;
      background: #ffffff;
      border: 1px solid #e5e7eb;
      border-left: 6px solid #f19a27; /* Emphasized accent border */
      border-radius: 12px;
      padding: 20px;
      box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -2px rgba(0,0,0,0.05);
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .feature-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1);
    }

    /* Accessible Button with Outline on Focus */
    .btn-action {
      display: inline-block;
      margin-top: 16px;
      padding: 10px 20px;
      background: #232850;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-weight: bold;
    }
    .btn-action:focus-visible {
      outline: 3px solid #f19a27;
      outline-offset: 3px;
    }
  </style>
</head>
<body>
  <div class="feature-card">
    <h3 style="margin-top:0; color:#232850;">Elevated Card</h3>
    <p style="font-size:14px; color:#6b7280;">Left border acts as an accent pillar. Hover to see elevation shadow.</p>
    <button class="btn-action">Tab to Focus Me</button>
  </div>
</body>
</html>`,
    lineByLine: [
      { line: "line 12: border-left: 6px solid #f19a27;", explanation: "Applies a thick 6px primary orange accent border only to the left side of the card." },
      { line: "line 13: border-radius: 12px;", explanation: "Curvatures all four corners cleanly to 12px standard container radius." },
      { line: "line 15: box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05)...", explanation: "Adds gentle, authentic shadow elevation." },
      { line: "line 33: .btn-action:focus-visible { outline: 3px solid #f19a27; ... }", explanation: "Essential accessibility feature: when keyboard tabbing focuses the button, a distinct orange outline appears without shifting the button's layout." }
    ],
    outputExplanation: "कार्ड के बायीं तरफ सुंदर ऑरेंज पट्टी होगी, कोनों में हल्का घुमाव होगा, माउस ले जाने पर कार्ड ऊपर उठेगा और कीबोर्ड से Tab दबाने पर बटन के चारों तरफ 3px की स्पष्ट ऑरेंज आउटलाइन दिखेगी।",
    realWorldAnalogy: "बॉर्डर फोटो के लकड़ी के फ्रेम जैसा है जो साइज घेरता है; आउटलाइन लेजर लाइट की बाउंड्री जैसी है जो किसी भी चीज को छुए बिना बाहर चमकती है और कोई जगह नहीं घेरती।",
    importantPoints: [
      "यदि `border-style` घोषित न किया जाए, तो डिफ़ॉल्ट मान `none` होने के कारण बॉर्डर कभी नहीं दिखेगा।",
      "सर्कल (वृत्त) बनाने के लिए चौड़ाई और ऊंचाई बराबर करके `border-radius: 50%` लगाया जाता है।",
      "आउटलाइन कभी भी पेज के लेआउट को प्रभावित नहीं करती (Takes 0 space in layout).",
      "एक्सेसिबिलिटी (WCAG) के लिए `:focus` पर कभी भी बिना विकल्प के `outline: none` नहीं लगाना चाहिए।"
    ],
    commonMistakes: [
      "`border-width: 2px; border-color: red;` लिख देना लेकिन `border-style: solid` भूल जाना (जिससे बॉर्डर गायब रहता है)।",
      "`outline: none;` लगा देना और कीबोर्ड यूजर्स के लिए कोई विकल्प न देना, जिससे वेबसाइट एक्सेसिबिलिटी फेल हो जाती है।"
    ],
    examPerspective: "O-Level में `border-style` के संभावित मान (solid, dashed, dotted, double), `border-radius: 50%` से वृत्त बनाना, और Border vs Outline के अंतर पर प्रश्न पूछे जाते हैं।",
    quickRevision: "Border: width style (solid/dashed/dotted) color. Radius: 12px (rounded), 50% (circle). Shadow: x-offset y-offset blur color. Outline: drawn outside, takes 0 layout space.",
    relatedTopics: ["css-box-model", "css-colors-and-backgrounds", "css-display-and-visibility"],
    practiceTask: "एक 100px x 100px का गोल अवतार बॉक्स बनाएं जिसमें `border-radius: 50%`, 3px का सॉलिड नेवी बॉर्डर और हल्की बॉक्स-शैडो हो।",
    quiz: [
      {
        question: "किसी वर्गाकार (Square) बॉक्स को पूर्ण वृत्त (Circle) में बदलने के लिए किस CSS नियम का उपयोग किया जाता है?",
        options: ["border-radius: 100px", "border-radius: 50%", "shape: circle", "border-circle: true"],
        correctAnswer: "B",
        explanation: "समान चौड़ाई और ऊंचाई वाले तत्व पर border-radius: 50% लगाने से वह पूर्ण वृत्त बन जाता है।"
      },
      {
        question: "Border और Outline के बीच मुख्य तकनीकी अंतर क्या है?",
        options: [
          "Border रंग नहीं ले सकता, Outline ले सकती है",
          "Outline लेआउट में जगह नहीं घेरती जबकि Border घेरता है",
          "Outline के कोने गोल हो सकते हैं, Border के नहीं",
          "दोनों में कोई अंतर नहीं है"
        ],
        correctAnswer: "B",
        explanation: "Outline तत्व के बॉक्स मॉडल से बाहर खींची जाती है और लेआउट में कोई स्थान (0 space) नहीं घेरती।"
      },
      {
        question: "किसी बॉर्डर को दिखाई देने के लिए इनमें से कौन सी प्रॉपर्टी घोषित करना अनिवार्य है?",
        options: ["border-color", "border-style", "border-width", "border-radius"],
        correctAnswer: "B",
        explanation: "border-style घोषित करना अनिवार्य है; इसका डिफ़ॉल्ट मान 'none' होता है जिसके बिना बॉर्डर अदृश्य रहता है।"
      }
    ]
  },

  // =========================================================================
  // TOPIC 8: CSS Display Property & Visibility
  // =========================================================================
  {
    id: "u4-t8",
    slug: "css-display-and-visibility",
    unit: 4,
    unitSlug: "unit-4",
    unitTitle: "Cascading Style Sheets (CSS)",
    title: "CSS Display (Block, Inline, Inline-Block) & Visibility",
    hindiTitle: "CSS डिस्प्ले प्रॉपर्टी (Block, Inline, Inline-Block) बनाम विजिबिलिटी",
    definitionEnglish: "The CSS Display property controls the rendering box behavior of an element in normal document flow (block, inline, inline-block, none, flex, grid), determining whether it occupies full container width or flows alongside text, and how width/height/margin dimensions are respected.",
    definitionHindi: "CSS डिस्प्ले प्रॉपर्टी यह निर्धारित करती है कि कोई HTML तत्व पेज के सामान्य प्रवाह में कैसे रेंडर होगा (block, inline, inline-block, none, flex, grid); यह तय करता है कि तत्व पूरी पंक्ति घेरेगा या शब्दों के बीच बहेगा, और चौड़ाई/ऊंचाई स्वीकार करेगा या नहीं।",
    simpleWords: "Block एलिमेंट एक जिद्दी बस की तरह है जो पूरी सीट (पूरी चौड़ाई) अकेले घेरता है; Inline एलिमेंट पतले मुसाफिर की तरह है जो खाली जगह में अगल-बगल बैठ जाता है; और Inline-Block दोनों की अच्छाइयों का संगम है।",
    whyImportant: "HTML तत्वों का डिफ़ॉल्ट व्यवहार समझना और बदलना ही वेब लेआउट का आधार है। `display: none` बनाम `visibility: hidden` का अंतर O-Level परीक्षा का सर्वाधिक पूछा जाने वाला प्रश्न है।",
    detailedExplanation: `### 1. The Core Display Values Compared

| Feature | \`display: block\` | \`display: inline\` | \`display: inline-block\` |
| :--- | :--- | :--- | :--- |
| **New Line?** | Always starts on a new line | Flows inline within text | Stays on the same line |
| **Width Behavior** | Expands to fill 100% of parent width | Fits content tightly (auto width) | Fits content tightly (auto width) |
| **Width & Height respected?** | **YES** | **NO** (Ignored by browser) | **YES** (Fully respected) |
| **Top & Bottom Margins/Padding?** | **YES** | **NO** (Padding paints visually but does not push adjacent lines) | **YES** (Pushes surrounding elements cleanly) |
| **Default HTML Elements** | \`<div>\`, \`<p>\`, \`<h1>\`, \`<ul>\`, \`<table>\`, \`<section>\` | \`<span>\`, \`<a>\`, \`<strong>\`, \`<em>\`, \`<code>\` | \`<img>\`, \`<button>\`, \`<input>\`, \`<select>\` |

### 2. \`display: none\` vs \`visibility: hidden\` (Crucial Distinction!)

#### A. \`display: none\`
- Completely removes the element from document layout flow.
- The browser acts as if the element does not exist at all.
- Surrounding elements shift to close the empty space.
- The element is removed from the accessibility tree (screen readers skip it).

#### B. \`visibility: hidden\`
- Hides the element visually, but **preserves its exact geometric space and dimensions**.
- A blank, transparent empty hole remains where the element was.
- Surrounding elements DO NOT shift.

\`\`\`css
/* Completely removed */
.closed-banner {
  display: none;
}

/* Invisible, but reserves space */
.hidden-placeholder {
  visibility: hidden;
}
\`\`\``,
    syntax: `/* Core Display Options */
display: block;
display: inline;
display: inline-block;
display: none;

/* Modern Layout Displays */
display: flex;
display: grid;

/* Visibility Comparison */
visibility: visible;
visibility: hidden;`,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS Display and Visibility Comparison</title>
  <style>
    body { font-family: sans-serif; padding: 24px; background: #f8fafc; }

    /* Box base */
    .box {
      width: 120px;
      height: 60px;
      background: #0284c7;
      color: white;
      text-align: center;
      line-height: 60px;
      margin: 8px;
      font-weight: bold;
      border-radius: 6px;
      display: inline-block;
    }

    .removed { display: none; }
    .hidden-spot { visibility: hidden; }
    .highlight { background: #f19a27; }
  </style>
</head>
<body>
  <h3>Standard Inline-Block Boxes:</h3>
  <div class="box">Box 1</div>
  <div class="box highlight">Box 2</div>
  <div class="box">Box 3</div>

  <h3 style="margin-top:24px;">Box 2 has visibility: hidden (Empty Gap Remains):</h3>
  <div class="box">Box 1</div>
  <div class="box hidden-spot">Box 2</div>
  <div class="box">Box 3</div>

  <h3 style="margin-top:24px;">Box 2 has display: none (Gap Collapses, Box 3 Shifts Left):</h3>
  <div class="box">Box 1</div>
  <div class="box removed">Box 2</div>
  <div class="box">Box 3</div>
</body>
</html>`,
    lineByLine: [
      { line: "line 18: display: inline-block;", explanation: "Allows boxes to sit side-by-side on the same line while strictly obeying width (120px) and height (60px)." },
      { line: "line 22: .hidden-spot { visibility: hidden; }", explanation: "Hides Box 2 visually, but its 120px x 60px footprint remains as a visible blank gap between Box 1 and Box 3." },
      { line: "line 21: .removed { display: none; }", explanation: "Completely obliterates Box 2 from layout flow; Box 3 immediately slides over into Box 2's position." }
    ],
    outputExplanation: "दूसरे उदाहरण में Box 2 अदृश्य होगा लेकिन खाली जगह बनी रहेगी; तीसरे उदाहरण में Box 2 पूरी तरह गायब होगा और Box 3 बाईं ओर खिसक कर Box 1 के पास आ जाएगा।",
    realWorldAnalogy: "display: none = किसी कर्मचारी को नौकरी से निकाल देना (उसकी खाली कुर्सी हटा दी जाती है और बाकी लोग पास आ जाते हैं); visibility: hidden = कर्मचारी का छुट्टी पर होना (कुर्सी खाली पड़ी रहती है)।",
    importantPoints: [
      "`display: inline` एलिमेंट्स पर `width`, `height`, `margin-top` और `margin-bottom` काम नहीं करते।",
      "`display: inline-block` एलिमेंट्स साइड-बाय-साइड रहते हुए भी width और height स्वीकार करते हैं।",
      "`display: none` लेआउट से जगह हटा देता है, जबकि `visibility: hidden` खाली जगह सुरक्षित रखता है।",
      "एंकर टैग `<a>` डिफ़ॉल्ट रूप से `inline` होता है, बटन जैसा पैडिंग एरिया बनाने के लिए उसे `inline-block` या `block` बनाया जाता है।"
    ],
    commonMistakes: [
      "किसी `<span>` या `<a>` पर `width: 200px` लगाकर परेशान होना कि चौड़ाई क्यों नहीं बदल रही (`display: inline-block` करना जरूरी है)।",
      "जगह बचाए रखने के लिए `display: none` लगा देना और हैरान होना कि लेआउट ऊपर क्यों खिसक गया।"
    ],
    examPerspective: "O-Level का क्लासिक प्रश्न: 'What is the difference between display: none and visibility: hidden?' (स्पेस ऑक्युपेंसी का अंतर) और 'Inline vs Block vs Inline-block' की विशेषताएं।",
    quickRevision: "Block: starts on new line, 100% width. Inline: flows with text, ignores width/height. Inline-block: flows with text, respects width/height. display:none removes space; visibility:hidden keeps blank space.",
    relatedTopics: ["css-box-model", "css-positioning-and-z-index", "css-flexbox-layout"],
    practiceTask: "तीन `<span>` टैग्स बनाएं और CSS से उन्हें `display: inline-block; width: 100px; height: 100px;` देकर अगल-बगल तीन रंगीन वर्गाकार बक्से बनाएं।",
    quiz: [
      {
        question: "display: none और visibility: hidden में क्या मुख्य अंतर है?",
        options: [
          "display: none रंग हटाता है, visibility: hidden बॉर्डर हटाता है",
          "display: none लेआउट में स्थान सुरक्षित नहीं रखता, जबकि visibility: hidden खाली स्थान बनाए रखता है",
          "visibility: hidden तत्व को पूरी तरह मिटा देता है",
          "दोनों एक समान काम करते हैं"
        ],
        correctAnswer: "B",
        explanation: "display: none तत्व को प्रवाह से हटा देता है जिससे स्थान समाप्त हो जाता है, जबकि visibility: hidden अदृश्य करने के बाद भी खाली जगह बनाए रखता है।"
      },
      {
        question: "इनमें से कौन सा HTML तत्व डिफ़ॉल्ट रूप से एक 'Block-level' तत्व है?",
        options: ["<span>", "<a>", "<div>", "<strong>"],
        correctAnswer: "C",
        explanation: "<div> डिफ़ॉल्ट रूप से ब्लॉक-लेवल तत्व है जो नई पंक्ति से शुरू होता है और 100% चौड़ाई लेता है।"
      },
      {
        question: "किसी तत्व को पंक्ति के अंदर रखते हुए भी उस पर width और height लागू करने के लिए किस मान का उपयोग किया जाता है?",
        options: ["display: inline", "display: inline-block", "display: block", "display: content"],
        correctAnswer: "B",
        explanation: "display: inline-block तत्व को इनलाइन रखते हुए भी चौड़ाई और ऊंचाई निर्धारित करने की सुविधा देता है।"
      }
    ]
  },

  // =========================================================================
  // TOPIC 9: CSS Positioning Schemes & Z-Index
  // =========================================================================
  {
    id: "u4-t9",
    slug: "css-positioning-and-z-index",
    unit: 4,
    unitSlug: "unit-4",
    unitTitle: "Cascading Style Sheets (CSS)",
    title: "CSS Positioning (Static, Relative, Absolute, Fixed, Sticky) & Z-Index",
    hindiTitle: "CSS पोजीशनिंग (Static, Relative, Absolute, Fixed, Sticky) एवं Z-Index",
    definitionEnglish: "CSS Positioning defines the exact placement coordinates of elements across five positioning schemes: static (normal document flow), relative (offset from natural location), absolute (removed from flow, anchored to nearest positioned ancestor), fixed (pinned to viewport during scroll), and sticky (toggling between relative and fixed based on scroll offset), managed vertically via the z-index stacking context.",
    definitionHindi: "CSS पोजीशनिंग तत्वों के सटीक स्थान को पांच विधियों द्वारा निर्धारित करती है: static (सामान्य प्रवाह), relative (अपने सामान्य स्थान से विस्थापन), absolute (प्रवाह से बाहर, नजदीकी गैर-स्टैटिक पूर्वज के सापेक्ष), fixed (स्क्रीन पर स्थिर), और sticky (स्क्रॉल स्थिति के अनुसार स्थिर); तथा z-index द्वारा 3D स्टैकिंग क्रम नियंत्रित किया जाता है।",
    simpleWords: "यह स्क्रीन पर किसी भी चीज को मनचाही जगह रखने का रिमोट कंट्रोल है: किसी को सामान्य रहने देना (Static), किसी को थोड़ा खिसकाना (Relative), किसी डिब्बे के कोने में पिन करना (Absolute), या स्क्रॉल करने पर भी स्क्रीन पर चिपकाए रखना (Fixed / Sticky)।",
    whyImportant: "वेबसाइट के स्टिकी नेविगेशन बार, फ्लोटिंग चैट विजेट्स, इमेज के ऊपर लगने वाले बैज ('New', 'Sale 50% Off'), और पॉपअप मॉडल्स बिना CSS पोजीशनिंग के संभव ही नहीं हैं।",
    detailedExplanation: `### 1. Detailed Breakdown of the 5 Positioning Schemes

#### 1. \`position: static\` (Default)
- The element follows normal HTML document flow.
- Coordinate properties (\`top\`, \`bottom\`, \`left\`, \`right\`) and \`z-index\` have **ZERO EFFECT**.

#### 2. \`position: relative\`
- Remains in normal document flow, but can be visually shifted using \`top\`, \`bottom\`, \`left\`, \`right\`.
- Its original space in the document remains **reserved and unchanged**; neighbors do not move.
- Crucial Superpower: Acts as the **positioning context anchor** for any child elements with \`position: absolute\`.

#### 3. \`position: absolute\`
- Completely removed from normal document flow (takes up zero layout space).
- Positioned relative to its **nearest positioned ancestor** (any ancestor having \`position: relative\`, \`absolute\`, \`fixed\`, or \`sticky\`).
- If no positioned ancestor exists, it positions itself relative to the initial containing block (\`<html>\` root).

#### 4. \`position: fixed\`
- Removed from document flow.
- Positioned relative to the **browser viewport** (the user's screen).
- **Remains glued in place** during page scrolling.
- Perfect for: Back-to-top buttons, floating WhatsApp icons, sticky headers.

#### 5. \`position: sticky\`
- A hybrid mode: Behaves as \`position: relative\` until the user scrolls past a specified threshold (e.g. \`top: 0\`), at which point it dynamically acts like \`position: fixed\`.
- Requires at least one offset property (\`top: 0\`) and a parent container with remaining scrollable height.

### 2. The 3D Stacking Order: \`z-index\`
When positioned elements overlap, \`z-index\` controls which element appears on top along the imaginary Z-axis (pointing outward toward the user):
- Default: Elements appearing later in HTML markup paint on top.
- \`z-index: 10\` appears on top of \`z-index: 1\`.
- Negative values (\`z-index: -1\`) place elements behind content.
- **Rule of Thumb:** \`z-index\` ONLY works on elements that have a \`position\` other than \`static\` (or on flex/grid items).`,
    syntax: `/* Positioning Syntax */
position: relative;
top: 10px; left: 20px;

/* Common Parent-Child Anchor Pattern */
.card-parent {
  position: relative; /* Anchor */
}
.badge-child {
  position: absolute; /* Placed in top-right corner of card */
  top: 12px;
  right: 12px;
  z-index: 10;
}

/* Sticky Header */
.header {
  position: sticky;
  top: 0;
  z-index: 1000;
}`,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS Positioning Schemes Showcase</title>
  <style>
    body { font-family: sans-serif; margin: 0; padding-bottom: 800px; background: #f8fafc; }

    /* Sticky Navbar */
    .sticky-nav {
      position: sticky;
      top: 0;
      background: #232850;
      color: white;
      padding: 16px 24px;
      font-weight: bold;
      z-index: 100;
      border-bottom: 3px solid #f19a27;
    }

    /* Relative Parent Container */
    .product-card {
      position: relative; /* ANCHOR FOR BADGE */
      width: 280px;
      margin: 40px auto;
      background: white;
      border: 1px solid #cbd5e1;
      border-radius: 12px;
      padding: 24px;
      box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
    }

    /* Absolute Child Badge */
    .sale-badge {
      position: absolute;
      top: -12px;
      right: -12px;
      background: #dc2626;
      color: white;
      font-size: 12px;
      font-weight: bold;
      padding: 6px 12px;
      border-radius: 9999px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    }

    /* Fixed Floating Button */
    .floating-help-btn {
      position: fixed;
      bottom: 24px;
      right: 24px;
      background: #f19a27;
      color: #232850;
      width: 56px;
      height: 56px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      box-shadow: 0 10px 15px -3px rgba(0,0,0,0.2);
      cursor: pointer;
      z-index: 999;
    }
  </style>
</head>
<body>
  <div class="sticky-nav">Sticky Navigation Bar (Stays on Top as You Scroll)</div>

  <div class="product-card">
    <div class="sale-badge">50% OFF</div>
    <h3>NIELIT O-Level Course</h3>
    <p>Complete notes, MCQs and lab exercises.</p>
  </div>

  <div class="floating-help-btn" title="Help Desk">?</div>

  <div style="text-align: center; color: #94a3b8; margin-top: 100px;">
    Scroll down to test Sticky Navbar and Fixed Floating Help Button...
  </div>
</body>
</html>`,
    lineByLine: [
      { line: "line 8: position: sticky; top: 0; z-index: 100;", explanation: "Glues navigation bar to the top edge of the browser viewport once the user scrolls to it, floating above cards." },
      { line: "line 19: .product-card { position: relative; ... }", explanation: "Sets relative anchor on the parent card so child absolute elements calculate coordinates from this box." },
      { line: "line 29: .sale-badge { position: absolute; top: -12px; right: -12px; ... }", explanation: "Positions sale badge overlapping the top-right corner of the parent card." },
      { line: "line 42: .floating-help-btn { position: fixed; bottom: 24px; right: 24px; ... }", explanation: "Fixes round help button to bottom-right of viewport; remains pinned even during long scrolling." }
    ],
    outputExplanation: "पेज स्क्रॉल करने पर भी नेवी नेवबार ऊपर चिपका रहेगा, प्रोडक्ट कार्ड के कोने पर लाल '50% OFF' बैज चिपका दिखेगा, और कोने में गोल '?' बटन हमेशा एक ही जगह रहेगा।",
    realWorldAnalogy: "Static = जमीन पर खड़ा आदमी; Relative = अपनी जगह पर खड़े होकर 2 कदम दाईं ओर झुकना; Absolute = किसी खास कमरे की दीवार पर घड़ी टांगना; Fixed = कार की विंडशील्ड पर चिपका हुआ फास्टैग जो कार चलने पर भी शीशे पर ही रहता है।",
    importantPoints: [
      "डिफ़ॉल्ट पोजीशनिंग `static` होती है जिस पर top, left, z-index काम नहीं करते।",
      "Absolute एलिमेंट अपने निकटतम `position: relative` (या non-static) पूर्वज के सापेक्ष स्थान तय करता है।",
      "`position: fixed` हमेशा ब्राउज़र व्यूपोर्ट (स्क्रीन) के सापेक्ष काम करता है।",
      "`z-index` केवल उन्हीं तत्वों पर काम करता है जिनकी स्थिति `static` के अलावा कुछ और हो।",
      "`top`, `bottom`, `left`, `right` को ऑफसेट (Offset) प्रॉपर्टीज कहा जाता है।"
    ],
    commonMistakes: [
      "`position: absolute` लगाने पर पैरेंट बॉक्स में `position: relative` लगाना भूल जाना (जिससे एलिमेंट पैरेंट से बाहर निकलकर पूरे पेज के कोने में पहुंच जाता है)।",
      "`static` एलिमेंट पर `z-index` लगाकर सोचना कि वह ऊपर क्यों नहीं आ रहा।"
    ],
    examPerspective: "O-Level में 'Default value of position property' (static), 'Fixed vs Absolute positioning', 'Z-index का उद्देश्य', और 'Sticky positioning' पर हर साल प्रश्न आते हैं।",
    quickRevision: "Static: default, no offset. Relative: offset from self, acts as anchor. Absolute: offset from nearest positioned parent, removed from flow. Fixed: pinned to viewport. Sticky: relative then fixed on scroll. z-index: 3D stacking order.",
    relatedTopics: ["css-box-model", "css-display-and-visibility", "css-menu-design"],
    practiceTask: "एक इमेज कार्ड बनाएं जिसमें नीचे दाईं ओर 'Verified' का हरा बैज `position: absolute; bottom: 8px; right: 8px;` के साथ लगा हो।",
    quiz: [
      {
        question: "CSS में position प्रॉपर्टी का डिफ़ॉल्ट मान क्या होता है?",
        options: ["relative", "static", "absolute", "fixed"],
        correctAnswer: "B",
        explanation: "position का डिफ़ॉल्ट मान 'static' होता है जो सामान्य डॉक्यूमेंट फ्लो का पालन करता है।"
      },
      {
        question: "पेज स्क्रॉल करने पर भी स्क्रीन के एक ही स्थान पर स्थिर रहने वाले तत्व के लिए कौन सा मान उपयोग होता है?",
        options: ["position: relative", "position: static", "position: fixed", "position: inherit"],
        correctAnswer: "C",
        explanation: "position: fixed तत्व को ब्राउज़र व्यूपोर्ट के सापेक्ष स्थिर रखता है और स्क्रॉल करने पर भी वह नहीं हिलता।"
      },
      {
        question: "ओवरलैप होने वाले दो तत्वों में से किसे ऊपर दिखाना है, यह तय करने के लिए किस प्रॉपर्टी का उपयोग किया जाता है?",
        options: ["depth-level", "z-index", "elevation", "layer-order"],
        correctAnswer: "B",
        explanation: "z-index प्रॉपर्टी 3D Z-अक्ष के साथ स्टैकिंग क्रम (Stacking Order) निर्धारित करती है।"
      }
    ]
  },

  // =========================================================================
  // TOPIC 10: CSS Float, Clear, Clearfix & Overflow
  // =========================================================================
  {
    id: "u4-t10",
    slug: "css-float-clear-and-overflow",
    unit: 4,
    unitSlug: "unit-4",
    unitTitle: "Cascading Style Sheets (CSS)",
    title: "CSS Float, Clear, Clearfix & Overflow Handling",
    hindiTitle: "CSS फ्लोट, क्लियर, क्लियरफिक्स एवं ओवरफ्लो प्रबंधन",
    definitionEnglish: "CSS Float shifts an element to the left or right of its container, allowing text and inline elements to wrap around it; Clear prevents elements from wrapping around preceding floats; the Clearfix hack prevents parent containers from collapsing; and Overflow manages content exceeding container boundaries.",
    definitionHindi: "CSS फ्लोट किसी तत्व को कंटेनर के बाएँ या दाएँ धकेलता है जिससे टेक्स्ट उसके चारों ओर बह सके; क्लियर फ्लोटेड तत्वों के बगल में आने से रोकता है; क्लियरफिक्स पैरेंट कंटेनर को सिकुड़ने से बचाता है; और ओवरफ्लो सीमा से बाहर बहने वाले कंटेंट को संभालता है।",
    simpleWords: "जैसे अखबारों में किसी तस्वीर को बाईं तरफ रखकर उसके चारों तरफ पैराग्राफ का टेक्स्ट लपेटा (Wrap) जाता है, वही काम CSS Float करता है। ओवरफ्लो यह तय करता है कि अगर डिब्बे में सामान ज्यादा हो जाए तो वह बाहर बहेगा या स्क्रॉलबार आ जाएगा।",
    whyImportant: "यद्यपि आधुनिक लेआउट्स में Flexbox और Grid का उपयोग होता है, O-Level थ्योरी और प्रैक्टिकल परीक्षा में 'Float', 'Clear', 'Clearfix' और 'Overflow' पर सवाल निश्चित रूप से आते हैं क्योंकि यह क्लासिक वेब लेआउट का आधार है।",
    detailedExplanation: `### 1. The \`float\` Property
Originally designed for editorial text wrapping around images (like newspapers):
- \`float: left;\`: Pushes element to the left edge; subsequent text wraps around its right side.
- \`float: right;\`: Pushes element to the right edge; text wraps around its left side.
- \`float: none;\`: Default behavior.

### 2. The Parent Collapse Problem & The Modern Clearfix
When all child elements inside a container are floated, they are removed from normal flow. As a result, the parent container **collapses to zero height**, causing backgrounds and borders to disappear!

#### The Micro Clearfix Hack (Industry Standard Solution)
Apply this class to the parent container:
\`\`\`css
.clearfix::after {
  content: "";
  display: table;
  clear: both;
}
\`\`\`
Modern Alternative: Adding \`overflow: auto\` or \`display: flow-root\` to the parent also prevents collapse.

### 3. The \`clear\` Property
Used to prevent an element from wrapping beside preceding floats:
- \`clear: left;\`: Moves element below any left-floated elements.
- \`clear: right;\`: Moves element below any right-floated elements.
- \`clear: both;\`: Moves element below all floated elements on either side.

### 4. Managing Content Overflow: \`overflow\`
When content exceeds an element's explicitly defined width or height:
- **\`overflow: visible\` (Default):** Content spills outside the box, overlapping neighboring content.
- **\`overflow: hidden\`:** Content outside the boundaries is clipped and made invisible.
- **\`overflow: scroll\`:** Always displays horizontal and vertical scrollbars, even if not needed.
- **\`overflow: auto\`:** Smart mode: adds scrollbars ONLY when content actually overflows.
- **Directional:** \`overflow-x: auto\` (Horizontal scroll for tables/galleries), \`overflow-y: scroll\`.`,
    syntax: `/* Float & Clear */
float: left;
float: right;
clear: both;

/* Modern Clearfix Pattern */
.clearfix::after {
  content: "";
  display: table;
  clear: both;
}

/* Overflow Controls */
overflow: auto;
overflow-x: auto;
overflow-y: hidden;`,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS Float, Clearfix and Overflow Demo</title>
  <style>
    body { font-family: sans-serif; padding: 24px; background: #fff8f3; }

    /* Clearfix Container to prevent zero-height collapse */
    .article-box {
      background: white;
      border: 1px solid #cbd5e1;
      padding: 20px;
      border-radius: 12px;
      margin-bottom: 24px;
    }
    .clearfix::after {
      content: "";
      display: table;
      clear: both;
    }

    /* Floated Thumbnail */
    .floated-img {
      float: left;
      width: 140px;
      height: 100px;
      background: #0284c7;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      margin-right: 16px;
      margin-bottom: 8px;
      border-radius: 8px;
    }

    /* Overflow Scroll Box */
    .scroll-box {
      width: 300px;
      height: 100px;
      border: 2px solid #232850;
      padding: 12px;
      overflow: auto; /* Auto scrollbars when text overflows */
      background: #ffffff;
      border-radius: 8px;
    }
  </style>
</head>
<body>
  <!-- 1. Float Demonstration with Clearfix -->
  <div class="article-box clearfix">
    <div class="floated-img">IMAGE (Float: Left)</div>
    <p>
      This paragraph text flows smoothly around the right side of the floated image box. 
      Because the parent has the clearfix hack, the white container wraps fully around both 
      the image and the text without collapsing to zero height!
    </p>
  </div>

  <!-- 2. Overflow Demonstration -->
  <h3>Overflow: Auto Box (Scroll Down to Read):</h3>
  <div class="scroll-box">
    CSS overflow controls what happens when content is too large to fit in an element's box. 
    Using overflow: auto provides a clean vertical scrollbar only when the text exceeds 
    the 100px declared height.
  </div>
</body>
</html>`,
    lineByLine: [
      { line: "line 15: .clearfix::after { content: \"\"; display: table; clear: both; }", explanation: "Injects a virtual invisible block at the end of the container to force it to stretch and enclose all floated children." },
      { line: "line 22: float: left; margin-right: 16px;", explanation: "Pushes the image to the left and reserves a 16px right margin so surrounding text does not collide." },
      { line: "line 38: overflow: auto;", explanation: "Provides a tidy scrollbar dynamically because the text exceeds the container's 100px fixed height." }
    ],
    outputExplanation: "पहले बॉक्स में नीली इमेज बाईं तरफ होगी और पैराग्राफ उसके चारों तरफ खूबसूरती से लिपटा होगा; नीचे 100px का एक स्क्रॉल बॉक्स होगा जिसमें स्क्रॉलबार दिखेगा।",
    realWorldAnalogy: "Float अखबार में तस्वीर के बगल में बहती खबर जैसा है; Clearfix वह पिन है जो तस्वीर को पन्ने से नीचे गिरने नहीं देती; Overflow पानी के गिलास में ज्यादा पानी भरने पर उसे बाल्टी में सहेजने जैसा है।",
    importantPoints: [
      "`float` का प्राथमिक उद्देश्य इमेज के चारों तरफ टेक्स्ट को लपेटना (Wrap) है।",
      "फ्लोटेड एलिमेंट्स पैरेंट के नॉर्मल फ्लो से बाहर आ जाते हैं, जिससे पैरेंट बॉक्स सिकुड़ (Collapse) जाता है।",
      "पैरेंट के सिकुड़ने की समस्या को Clearfix या `display: flow-root` से हल किया जाता है।",
      "`clear: both` एलिमेंट को पिछले दोनों तरफ के फ्लोट्स के नीचे धकेलता है।",
      "`overflow: auto` केवल जरूरत पड़ने पर ही स्क्रॉलबार दिखाता है।"
    ],
    commonMistakes: [
      "फ्लोटेड बच्चों वाले पैरेंट पर Clearfix न लगाना (जिससे पैरेंट का बैकग्राउंड और बॉर्डर गायब हो जाता है)।",
      "`overflow: scroll` का उपयोग करना जहां जरूरत न हो (जिससे गैर-जरूरी निष्क्रिय स्क्रॉलबार दिखाई देते हैं; `overflow: auto` बेहतर है)।"
    ],
    examPerspective: "O-Level में 'Clearfix का उपयोग क्यों होता है?', 'clear: both की कार्यप्रणाली', और 'overflow: hidden vs auto' पर थ्योरी और प्रैक्टिकल प्रश्न पूछे जाते हैं।",
    quickRevision: "float: left/right wraps text around elements. clear: both stops wrapping. Clearfix (.clearfix::after) prevents parent height collapse. overflow: visible (default), hidden, scroll, auto (smart scrollbars).",
    relatedTopics: ["css-box-model", "css-display-and-visibility", "css-flexbox-layout"],
    practiceTask: "एक 200px x 80px का बॉक्स बनाएं जिसमें लंबा टेक्स्ट हो और `overflow: auto` लगाकर देखें कि वर्टिकल स्क्रॉलबार कैसे सक्रिय होता है।",
    quiz: [
      {
        question: "जब किसी पैरेंट बॉक्स के सभी बच्चे फ्लोटेड हों, तो पैरेंट बॉक्स के सिकुड़ जाने की समस्या को हल करने की तकनीक क्या कहलाती है?",
        options: ["Floathack", "Clearfix", "Box-reset", "Overflow-wrap"],
        correctAnswer: "B",
        explanation: "पैरेंट कंटेनर को फ्लोटेड बच्चों के चारों ओर फैलाने के लिए Clearfix तकनीक का उपयोग किया जाता है।"
      },
      {
        question: "किसी एलिमेंट को पिछले सभी फ्लोटेड एलिमेंट्स के नीचे ले जाने के लिए किस नियम का उपयोग किया जाता है?",
        options: ["clear: both", "float: clear", "position: below", "display: break"],
        correctAnswer: "A",
        explanation: "clear: both लगाने से तत्व पिछले सभी बाएँ और दाएँ फ्लोट्स के नीचे नई लाइन में आ जाता है।"
      },
      {
        question: "कंटेंट के बॉक्स से बाहर निकलने पर केवल आवश्यकता पड़ने पर ही स्क्रॉलबार दिखाने वाला मान कौन सा है?",
        options: ["overflow: scroll", "overflow: hidden", "overflow: auto", "overflow: visible"],
        correctAnswer: "C",
        explanation: "overflow: auto केवल तभी स्क्रॉलबार प्रदर्शित करता है जब कंटेंट वास्तव में बॉक्स के आकार से बड़ा हो।"
      }
    ]
  },

  // =========================================================================
  // TOPIC 11: CSS Lists & Navigation Menus
  // =========================================================================
  {
    id: "u4-t11",
    slug: "css-lists",
    unit: 4,
    unitSlug: "unit-4",
    unitTitle: "Cascading Style Sheets (CSS)",
    title: "CSS Lists & Custom Bullet Styling",
    hindiTitle: "CSS लिस्ट स्टाइलिंग एवं कस्टम बुलेट्स (Markers & Resets)",
    definitionEnglish: "CSS List properties style ordered and unordered lists by configuring marker shapes (list-style-type), marker indentation alignment (list-style-position), custom image icons (list-style-image), or completely stripping bullets (list-style: none) for structured components.",
    definitionHindi: "CSS लिस्ट प्रॉपर्टीज ऑर्डर्ड और अनऑर्डर्ड लिस्ट्स को स्टाइल करती हैं; इसमें बुलेट मार्कर के रूप (list-style-type), मार्कर की इनसाइड/आउटसाइड स्थिति (list-style-position), कस्टम इमेज (list-style-image), या बुलेट्स को पूरी तरह हटाना (list-style: none) शामिल है।",
    simpleWords: "सादे काले गोल बुलेट्स की जगह रंगीन टिक मार्क, रोमन अंक, कस्टम तीर या इमेज लगाना, और नेविगेशन बार बनाने के लिए बुलेट्स को हटाना ही CSS लिस्ट स्टाइलिंग है।",
    whyImportant: "वेबसाइट के मेन्यू, साइडबार, फीचर बुलेट्स, और प्राइसिंग टेबल्स सभी सेमांटिक `<ul>` और `<li>` लिस्ट्स से बनाए जाते हैं। बुलेट रीसेट और कस्टम मार्कर हर वेब डिजाइनर को आने चाहिए।",
    detailedExplanation: `### 1. List Properties Overview
- **\`list-style-type\`:** Controls the bullet or numeric marker:
  - Unordered: \`disc\` (Default), \`circle\`, \`square\`, \`none\`.
  - Ordered: \`decimal\` (1, 2, 3), \`decimal-leading-zero\` (01, 02), \`lower-roman\` (i, ii), \`upper-roman\` (I, II), \`lower-alpha\` (a, b), \`upper-alpha\` (A, B).
- **\`list-style-position\`:**
  - \`outside\` (Default): The bullet hangs outside the text content flow.
  - \`inside\`: The bullet sits inside the content box, aligning with the first word.
- **\`list-style-image\`:** Sets an image icon as the marker: \`url('arrow.png')\`.
- **\`list-style: none;\`:** Removes bullets entirely (mandatory first step for navigation bars).

### 2. The Universal List Reset
Browsers automatically apply \`margin\` and \`padding-left: 40px\` to \`<ul>\` tags. When creating modern lists or menus, this reset is essential:
\`\`\`css
ul.clean-list {
  list-style: none;
  margin: 0;
  padding: 0;
}
\`\`\`

### 3. Custom Bullets using \`::before\`
Instead of low-resolution \`list-style-image\`, modern CSS uses pseudo-elements for scalable custom bullets:
\`\`\`css
li {
  position: relative;
  padding-left: 24px;
}
li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #16a34a;
  font-weight: bold;
}
\`\`\``,
    syntax: `/* Standard List Reset */
ul.menu {
  list-style: none;
  padding: 0;
  margin: 0;
}

/* Custom Marker */
ul.features li {
  list-style-type: square;
  list-style-position: inside;
}`,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS Lists & Custom Markers Showcase</title>
  <style>
    body { font-family: sans-serif; padding: 24px; background: #f8fafc; }

    /* Custom Checkmark Feature List */
    ul.checklist {
      list-style: none;
      padding: 0;
      margin: 0;
      max-width: 400px;
    }
    ul.checklist li {
      position: relative;
      padding: 10px 12px 10px 32px;
      margin-bottom: 8px;
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      font-size: 14px;
      color: #1e293b;
    }
    /* Scalable custom bullet */
    ul.checklist li::before {
      content: "✓";
      position: absolute;
      left: 10px;
      top: 10px;
      color: #16a34a;
      font-weight: bold;
      font-size: 16px;
    }
  </style>
</head>
<body>
  <h2>Course Highlights (Custom List Styling)</h2>
  <ul class="checklist">
    <li>Complete 8-Unit O-Level Syllabus Coverage</li>
    <li>Interactive 200 MCQ Practice Bank</li>
    <li>100 Golden High-Yield Exam One-Liners</li>
    <li>Hands-on Laboratory Coding Projects</li>
  </ul>
</body>
</html>`,
    lineByLine: [
      { line: "line 9: ul.checklist { list-style: none; padding: 0; ... }", explanation: "Removes default browser bullets and strips the 40px default left padding." },
      { line: "line 15: ul.checklist li { position: relative; padding: ... }", explanation: "Sets relative positioning on each list item to serve as coordinate anchor for the absolute checkmark." },
      { line: "line 24: ul.checklist li::before { content: \"✓\"; ... color: #16a34a; }", explanation: "Injects a vibrant green checkmark icon as a scalable custom bullet before each item." }
    ],
    outputExplanation: "सादे काले बुलेट्स की जगह हर पंक्ति के आगे हरे रंग का सुंदर टिक मार्क (✓) और साफ सफेद बॉर्डर वाला कार्ड दिखेगा।",
    realWorldAnalogy: "डिफ़ॉल्ट लिस्ट साधारण कच्ची लिस्ट जैसी है; CSS लिस्ट स्टाइलिंग किसी रेस्तरां के प्रिंटेड मेन्यू जैसी है जहाँ हर व्यंजन के आगे सुंदर स्टार या टिक बना होता है।",
    importantPoints: [
      "`list-style: none;` मेन्यू और कार्ड्स बनाने के लिए बुलेट हटाने का मुख्य नियम है।",
      "ब्राउज़र डिफ़ॉल्ट रूप से `<ul>` पर लगभग 40px की लेफ्ट पैडिंग लगाते हैं, जिसे `padding: 0;` से हटाना पड़ता है।",
      "`list-style-position: inside` बुलेट को टेक्स्ट के इनलाइन प्रवाह में खींच लेता है।",
      "`list-style-type: decimal-leading-zero` 01, 02, 03 जैसी संख्याएँ बनाता है।"
    ],
    commonMistakes: [
      "`list-style: none;` तो लगा देना लेकिन `padding: 0;` न लगाना (जिससे बाईं तरफ 40px की खाली जगह छूट जाती है)।"
    ],
    examPerspective: "O-Level में 'HTML लिस्ट से बुलेट्स हटाने के लिए किस प्रॉपर्टी का उपयोग होता है?' (`list-style-type: none`), और `list-style-position` के मानों (`inside`/`outside`) पर प्रश्न आते हैं।",
    quickRevision: "list-style-type: disc, circle, square, decimal, none. list-style-position: inside/outside. list-style-image: url(). Reset: list-style: none; padding: 0; margin: 0.",
    relatedTopics: ["css-menu-design", "css-selectors", "css-box-model"],
    practiceTask: "एक ऑर्डर्ड लिस्ट बनाएं जिसमें नंबरिंग 01, 02, 03 के रूप में आए (`list-style-type: decimal-leading-zero`).",
    quiz: [
      {
        question: "किसी अनऑर्डर्ड लिस्ट से बुलेट्स को पूरी तरह हटाने के लिए किस CSS नियम का उपयोग किया जाता है?",
        options: ["bullet: none", "list-style: none", "list-type: remove", "text-decoration: none"],
        correctAnswer: "B",
        explanation: "list-style: none (या list-style-type: none) से लिस्ट के सभी बुलेट्स हट जाते हैं।"
      },
      {
        question: "बुलेट को टेक्स्ट ब्लॉक के अंदर खींचने के लिए किस प्रॉपर्टी और मान का उपयोग किया जाता है?",
        options: ["list-style-position: inside", "list-style-position: outside", "list-align: inner", "bullet-indent: 0"],
        correctAnswer: "A",
        explanation: "list-style-position: inside बुलेट मार्कर को टेक्स्ट बॉक्स के अंदर ले आता है।"
      },
      {
        question: "ब्राउज़र द्वारा <ul> पर लगाई गई डिफ़ॉल्ट 40px बाईं खाली जगह को हटाने के लिए क्या करना पड़ता है?",
        options: ["margin: 0", "padding-left: 0", "border: 0", "float: left"],
        correctAnswer: "B",
        explanation: "ब्राउज़र डिफ़ॉल्ट रूप से <ul> पर padding-left लगाते हैं जिसे padding-left: 0 (या padding: 0) से साफ किया जाता है।"
      }
    ]
  },

  // =========================================================================
  // TOPIC 12: CSS Data Tables Styling
  // =========================================================================
  {
    id: "u4-t12",
    slug: "css-tables",
    unit: 4,
    unitSlug: "unit-4",
    unitTitle: "Cascading Style Sheets (CSS)",
    title: "CSS Table Design: Borders, Zebra Striping & Hover",
    hindiTitle: "CSS टेबल डिजाइन (Border-Collapse, Zebra Striping, Hover एवं Responsive Tables)",
    definitionEnglish: "CSS Table styling formats semantic HTML <table> data grids by merging adjacent cell borders into single outlines (border-collapse: collapse), establishing cell padding, creating alternating row colors (Zebra striping with :nth-child), row hover highlights, and mobile responsive overflow wrappers.",
    definitionHindi: "CSS टेबल स्टाइलिंग HTML डेटा टेबल्स को सुंदर और पठनीय तालिकाओं में बदलती है; इसमें दोहरी बॉर्डर को एकल में बदलना (border-collapse: collapse), सेल पैडिंग, एकांतर पंक्ति रंग (Zebra striping via :nth-child), माउस हॉवर प्रभाव और रिस्पॉन्सिव स्क्रॉल रैपर्स शामिल हैं।",
    simpleWords: "HTML की पुरानी टेबल 1990 के दशक जैसी काली दोहरी लाइनों वाली दिखती है। CSS से उसकी दोहरी लाइनों को जोड़कर एक कर दिया जाता है, एक लाइन सफेद और अगली हल्की रंगीन (Zebra Striping) बनाई जाती है, और माउस ले जाने पर रो चमकने लगती है।",
    whyImportant: "परीक्षा परिणाम, वित्तीय लेजर, मार्क्स डिस्ट्रीब्यूशन और टाइम-टेबल को साफ-सुथरा और पठनीय बनाने के लिए CSS टेबल डिजाइनिंग हर वेबसाइट में जरूरी होती है।",
    detailedExplanation: `### 1. Fundamental Table Properties
- **\`border-collapse: collapse;\`:** The single most important table property! Merges adjacent cell borders into a single border line instead of separated double lines.
- **\`border-spacing\`:** Controls the gap between cells when \`border-collapse: separate\` is used.
- **\`width: 100%;\`:** Stretches table across the full container width.
- **Cell Padding:** Applied to \`<th>\` and \`<td>\` elements to create internal breathing room around text.

### 2. Zebra Striping using \`:nth-child\`
Improves horizontal scanning across wide tables by giving alternate rows contrasting background tints:
\`\`\`css
/* Even rows get soft tint */
tbody tr:nth-child(even) {
  background-color: #f8fafc;
}
/* Hover highlight */
tbody tr:hover {
  background-color: #f1f5f9;
  cursor: pointer;
}
\`\`\`

### 3. Responsive Tables on Mobile
Standard tables distort on small smartphone screens. The industry-standard solution is wrapping the table in a responsive container:
\`\`\`html
<div class="table-responsive">
  <table>...</table>
</div>
\`\`\`
\`\`\`css
.table-responsive {
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}
\`\`\``,
    syntax: `/* Clean Modern Table Styling */
table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  padding: 12px 16px;
  border-bottom: 1px solid #e2e8f0;
  text-align: left;
}
th {
  background-color: #232850;
  color: #ffffff;
}
tbody tr:nth-child(even) {
  background-color: #f8fafc;
}
tbody tr:hover {
  background-color: #e0f2fe;
}`,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS Styled Data Table</title>
  <style>
    body { font-family: sans-serif; padding: 24px; background: #fff8f3; }

    .table-container {
      width: 100%;
      overflow-x: auto;
      border: 1px solid #e2e8f0;
      border-radius: 10px;
      background: white;
      box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    }

    table {
      width: 100%;
      border-collapse: collapse;
      font-size: 14px;
      text-align: left;
    }

    th {
      background-color: #232850;
      color: #ffffff;
      padding: 14px 16px;
      font-weight: 600;
      letter-spacing: 0.5px;
    }

    td {
      padding: 12px 16px;
      border-bottom: 1px solid #f1f5f9;
      color: #334155;
    }

    /* Zebra Striping */
    tbody tr:nth-child(even) {
      background-color: #f8fafc;
    }

    /* Hover State */
    tbody tr:hover {
      background-color: #e0f2fe;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <h2>NIELIT O-Level Modules (M2-R5.1 Focus)</h2>
  <div class="table-container">
    <table>
      <thead>
        <tr>
          <th>Module</th>
          <th>Subject Name</th>
          <th>Theory Hours</th>
          <th>Lab Hours</th>
          <th>Total Marks</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>M1-R5.1</td>
          <td>Information Technology Tools & Network Basics</td>
          <td>48h</td>
          <td>72h</td>
          <td>100</td>
        </tr>
        <tr>
          <td>M2-R5.1</td>
          <td>Web Designing & Publishing</td>
          <td>48h</td>
          <td>72h</td>
          <td>100</td>
        </tr>
        <tr>
          <td>M3-R5.1</td>
          <td>Programming and Problem Solving through Python</td>
          <td>48h</td>
          <td>72h</td>
          <td>100</td>
        </tr>
        <tr>
          <td>M4-R5.1</td>
          <td>Internet of Things and its Applications</td>
          <td>48h</td>
          <td>72h</td>
          <td>100</td>
        </tr>
      </tbody>
    </table>
  </div>
</body>
</html>`,
    lineByLine: [
      { line: "line 16: border-collapse: collapse;", explanation: "Merges adjacent borders into a single clean line, completely eliminating ugly double borders." },
      { line: "line 22: th { background-color: #232850; color: #ffffff; }", explanation: "Styles header cells with authoritative dark navy background and crisp white text." },
      { line: "line 36: tbody tr:nth-child(even) { background-color: #f8fafc; }", explanation: "Applies subtle gray zebra striping to all even rows for effortless horizontal reading." },
      { line: "line 41: tbody tr:hover { background-color: #e0f2fe; }", explanation: "Highlights the active row in soft sky blue when the user hovers with the mouse." }
    ],
    outputExplanation: "टेबल में नेवी ब्लू हेडर दिखेगा, एक पंक्ति सफेद और अगली हल्की स्लेटी दिखेगी, और किसी भी रो पर माउस ले जाते ही वह हल्के नीले रंग में चमक उठेगी।",
    realWorldAnalogy: "जैसे एक अकाउंटेंट के लेजर रजिस्टर में आड़ी-तिरछी लाइनें और एकांतर रंग होते हैं ताकि संख्याएँ एक-दूसरे में न मिलें, ज़ेबरा स्ट्राइपिंग वही स्पष्टता देती है।",
    importantPoints: [
      "`border-collapse: collapse;` टेबल की सर्वाधिक महत्वपूर्ण प्रॉपर्टी है।",
      "ज़ेबरा स्ट्राइपिंग के लिए `:nth-child(even)` या `:nth-child(odd)` स्यूडो-क्लास का उपयोग होता है।",
      "मोबाइल पर टेबल लेआउट को बिगड़ने से बचाने के लिए पैरेंट `div` पर `overflow-x: auto` लगाया जाता है।",
      "`text-align: right` वित्तीय या संख्यात्मक डेटा के लिए मानक संरेखण है।"
    ],
    commonMistakes: [
      "`border-collapse: collapse` लगाना भूल जाना, जिससे टेबल पुरानी दोहरी लाइनों वाली दिखती है।",
      "टेबल को रिस्पॉन्सिव रैपर (`overflow-x: auto`) में न डालना जिससे मोबाइल स्क्रीन पर पेज कट जाता है।"
    ],
    examPerspective: "O-Level में 'border-collapse: collapse की भूमिका' और 'Zebra striping के लिए किस pseudo-class का उपयोग होता है?' (:nth-child) पर प्रश्न अनिवार्य रूप से आते हैं।",
    quickRevision: "border-collapse: collapse merges borders. Zebra striping: tr:nth-child(even). Hover: tr:hover. Responsive: wrapper with overflow-x: auto.",
    relatedTopics: ["css-lists", "css-selectors", "css-box-model"],
    practiceTask: "एक 4-कॉलम की मार्कशीट टेबल बनाएं जिसमें फेल होने वाले विषयों पर लाल टेक्स्ट और पास होने वालों पर हरा टेक्स्ट दिखे।",
    quiz: [
      {
        question: "टेबल की दोहरी सीमाओं (Double Borders) को एकल सीमा में बदलने के लिए किस CSS प्रॉपर्टी का उपयोग किया जाता है?",
        options: ["border-style: single", "border-collapse: collapse", "table-layout: fixed", "border-merge: true"],
        correctAnswer: "B",
        explanation: "border-collapse: collapse संलग्न सेलों की बॉर्डर को मिलाकर एक कर देता है।"
      },
      {
        question: "टेबल की एकांतर पंक्तियों (Alternate rows) को रंगने (Zebra Striping) के लिए किस स्यूडो-क्लास का उपयोग होता है?",
        options: [":nth-child(even)", ":alternate", ":row(even)", ":stripe"],
        correctAnswer: "A",
        explanation: ":nth-child(even) या :nth-child(odd) से एकांतर पंक्तियों को आसानी से अलग रंग दिया जाता है।"
      },
      {
        question: "मोबाइल स्क्रीन पर बड़ी टेबल को क्षैतिज रूप से स्क्रॉल करने योग्य बनाने के लिए पैरेंट कंटेनर पर क्या लगाया जाता है?",
        options: ["table-scroll: true", "overflow-x: auto", "display: flex", "position: fixed"],
        correctAnswer: "B",
        explanation: "पैरेंट कंटेनर पर overflow-x: auto लगाने से टेबल मोबाइल पर साइड में स्क्रॉल हो जाती है और पेज लेआउट नहीं बिगड़ता।"
      }
    ]
  },

  // =========================================================================
  // TOPIC 13: CSS Navigation Menu Design
  // =========================================================================
  {
    id: "u4-t13",
    slug: "css-menu-design",
    unit: 4,
    unitSlug: "unit-4",
    unitTitle: "Cascading Style Sheets (CSS)",
    title: "CSS Navigation Menu Design (Horizontal & Dropdown)",
    hindiTitle: "CSS नेविगेशन मेन्यू डिजाइन (Horizontal बार एवं ड्रॉपडाउन मेन्यू)",
    definitionEnglish: "CSS Menu Design constructs responsive, accessible horizontal and vertical site navigation architectures by transforming semantic unordered lists (<ul>, <li>) using flexbox or inline-block layouts, hover transitions, and dropdown submenu visibility toggling via nested selectors.",
    definitionHindi: "CSS मेन्यू डिजाइन सेमांटिक अनऑर्डर्ड लिस्ट्स (<ul>, <li>) को Flexbox या inline-block लेआउट, हॉवर ट्रांजिशन्स और नेस्टेड सिलेक्टर्स द्वारा ड्रॉपडाउन सब-मेन्यू विजिबिलिटी को नियंत्रित करके इंटरएक्टिव क्षैतिज नेविगेशन बार में परिवर्तित करता है।",
    simpleWords: "वेबसाइट के शीर्ष पर दिखने वाली वह खूबसूरत पट्टी जिस पर Home, Syllabus, Notes, Quiz लिखा होता है और माउस ले जाने पर नीचे सब-मेन्यू खुल जाते हैं, वही CSS नेविगेशन मेन्यू है।",
    whyImportant: "नेविगेशन मेन्यू वेबसाइट का दिशा-सूचक है। यूजर इसके जरिए ही पूरी साइट में घूमता है। O-Level प्रैक्टिकल परीक्षा में हॉरिजॉन्टल मेन्यू और ड्रॉपडाउन बनाने का 15 मार्क्स का सवाल अक्सर आता है।",
    detailedExplanation: `### 1. Anatomy of a Semantic Navigation Bar
1. **Semantic HTML Foundation:**
   Always use \`<nav>\`, \`<ul>\`, \`<li>\`, and \`<a>\` tags so screen readers and search engines recognize the navigation hierarchy.
2. **Horizontal Layout Mechanisms:**
   - **Modern Standard:** \`display: flex;\` on the \`<ul>\` (effortless spacing and alignment).
   - **Classic Approach:** \`display: inline-block;\` on \`<li>\` or \`float: left;\`.
3. **Interactive Anchor Area:**
   Always declare \`display: block;\` on the \`<a>\` tag with padding so the **entire button area is clickable**, not just the text characters.

### 2. How CSS Dropdown Menus Work (Zero JavaScript!)
Pure CSS dropdowns rely on the parent-child hover relationship:
1. The parent \`<li>\` has \`position: relative;\`.
2. The nested child \`<ul class="dropdown">\` has:
   - \`position: absolute;\` (anchored below parent).
   - \`display: none;\` (hidden by default).
   - \`top: 100%; left: 0;\`.
3. When the parent \`<li>\` is hovered:
   \`\`\`css
   li:hover > ul.dropdown {
     display: block;
   }
   \`\`\``,
    syntax: `/* Modern Flexbox Navigation */
nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  background-color: #232850;
}
nav a {
  display: block;
  padding: 14px 20px;
  color: white;
  text-decoration: none;
  transition: background 0.2s;
}
nav a:hover {
  background-color: #f19a27;
  color: #111827;
}

/* Dropdown Toggle */
li { position: relative; }
li ul.dropdown {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 180px;
}
li:hover > ul.dropdown {
  display: block;
}`,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS Horizontal Navigation with Dropdown</title>
  <style>
    body { font-family: sans-serif; margin: 0; background: #fff8f3; }

    /* Navigation Container */
    nav {
      background-color: #232850;
      box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
    }
    
    /* Top-level Flex Menu */
    .nav-menu {
      list-style: none;
      margin: 0;
      padding: 0 16px;
      display: flex;
    }
    
    .nav-item {
      position: relative; /* ANCHOR FOR DROPDOWN */
    }

    .nav-link {
      display: block;
      color: #f8fafc;
      padding: 16px 20px;
      text-decoration: none;
      font-weight: 600;
      font-size: 14px;
      transition: all 0.2s ease;
    }
    .nav-link:hover {
      background-color: #f19a27;
      color: #111827;
    }

    /* Nested Dropdown Submenu */
    .dropdown {
      list-style: none;
      margin: 0;
      padding: 0;
      display: none; /* Hidden by default */
      position: absolute;
      top: 100%;
      left: 0;
      width: 200px;
      background-color: #1e242c;
      box-shadow: 0 10px 15px -3px rgba(0,0,0,0.2);
      border-radius: 0 0 8px 8px;
      overflow: hidden;
      z-index: 1000;
    }
    .dropdown a {
      display: block;
      color: #cbd5e1;
      padding: 12px 16px;
      text-decoration: none;
      font-size: 13px;
      border-bottom: 1px solid #334155;
    }
    .dropdown a:hover {
      background-color: #0284c7;
      color: white;
    }

    /* Hover Reveal Trigger */
    .nav-item:hover .dropdown {
      display: block;
    }
  </style>
</head>
<body>
  <nav>
    <ul class="nav-menu">
      <li class="nav-item"><a href="#" class="nav-link">Home</a></li>
      <li class="nav-item">
        <a href="#" class="nav-link">Syllabus ▾</a>
        <!-- Dropdown Submenu -->
        <ul class="dropdown">
          <li><a href="#">Unit 1: Internet Basics</a></li>
          <li><a href="#">Unit 2: Editors</a></li>
          <li><a href="#">Unit 3: HTML5</a></li>
          <li><a href="#">Unit 4: CSS Mastery</a></li>
        </ul>
      </li>
      <li class="nav-item"><a href="#" class="nav-link">MCQ Bank</a></li>
      <li class="nav-item"><a href="#" class="nav-link">Contact</a></li>
    </ul>
  </nav>

  <div style="padding: 30px;">
    <h2>Hover over 'Syllabus ▾' to test the Pure CSS Dropdown!</h2>
    <p>Notice how no JavaScript is required for the dropdown functionality.</p>
  </div>
</body>
</html>`,
    lineByLine: [
      { line: "line 16: display: flex;", explanation: "Arranges all top-level list items horizontally in a clean row automatically." },
      { line: "line 20: position: relative; /* ANCHOR FOR DROPDOWN */", explanation: "Prepares the parent li to act as the bounding frame for the absolute dropdown." },
      { line: "line 36: display: none; position: absolute; top: 100%;", explanation: "Hides dropdown initially and positions it exactly below the bottom edge of the parent header." },
      { line: "line 57: .nav-item:hover .dropdown { display: block; }", explanation: "Pure CSS trigger: when mouse hovers over .nav-item, the nested dropdown becomes visible." }
    ],
    outputExplanation: "गहरे नेवी रंग का हॉरिजॉन्टल मेन्यू दिखेगा; जैसे ही 'Syllabus ▾' पर माउस जाएगा, नीचे 4 यूनिट्स वाला ड्रॉपडाउन मेन्यू अपने आप खुल जाएगा।",
    realWorldAnalogy: "नेविगेशन मेन्यू किसी शॉपिंग मॉल के प्रवेश द्वार पर लगे साइनबोर्ड जैसा है; ड्रॉपडाउन उस बोर्ड पर तीर के नीचे लिखी विस्तृत श्रेणियों जैसी है।",
    importantPoints: [
      "मेन्यू हमेशा `<nav>`, `<ul>`, `<li>`, `<a>` से बनाना चाहिए (SEO और एक्सेसिबिलिटी हेतु)।",
      "एंकर टैग पर `display: block` लगाने से पूरे पैडिंग एरिया पर क्लिक किया जा सकता है।",
      "प्योर CSS ड्रॉपडाउन में पैरेंट पर `position: relative` और ड्रॉपडाउन पर `position: absolute` होना अनिवार्य है।",
      "`text-decoration: none` से लिंक के नीचे की डिफ़ॉल्ट रेखा हटाई जाती है।"
    ],
    commonMistakes: [
      "एंकर टैग पर `display: block` लगाना भूल जाना (जिससे केवल अक्षरों पर क्लिक होता है, पूरे बटन एरिया पर नहीं)।",
      "पैरेंट `<li>` पर `position: relative` लगाना भूल जाना (जिससे ड्रॉपडाउन मेन्यू मेन्यू बार से अलग होकर स्क्रीन के कोने में चला जाता है)।"
    ],
    examPerspective: "O-Level प्रैक्टिकल परीक्षा में 15 नंबर का प्रश्न: 'Create a horizontal navigation bar with dropdown submenu using HTML and CSS without JavaScript'.",
    quickRevision: "Nav = <nav> + <ul> + <li> + <a>. Flexbox creates horizontal row. a { display: block; text-decoration: none; }. Dropdown: li { position: relative; } ul.drop { display: none; position: absolute; } li:hover ul.drop { display: block; }.",
    relatedTopics: ["css-lists", "css-positioning-and-z-index", "css-flexbox-layout"],
    practiceTask: "एक 4 लिंक्स वाला नेविगेशन बार बनाएं जिसमें किसी एक लिंक पर माउस ले जाने पर 3 आइटम्स वाला वर्टिकल ड्रॉपडाउन खुले।",
    quiz: [
      {
        question: "प्योर CSS ड्रॉपडाउन मेन्यू में सब-मेन्यू को पैरेंट के नीचे सही स्थान पर रखने के लिए पैरेंट और चाइल्ड पर कौन सी पोजीशनिंग लगाई जाती है?",
        options: [
          "पैरेंट: static, चाइल्ड: relative",
          "पैरेंट: relative, चाइल्ड: absolute",
          "पैरेंट: fixed, चाइल्ड: static",
          "पैरेंट: absolute, चाइल्ड: fixed"
        ],
        correctAnswer: "B",
        explanation: "पैरेंट पर position: relative लगाया जाता है ताकि चाइल्ड position: absolute अपने पैरेंट के सापेक्ष ठीक नीचे स्थित हो सके।"
      },
      {
        question: "नेविगेशन लिंक के पूरे पैडिंग क्षेत्र को क्लिक करने योग्य बनाने के लिए <a> टैग पर क्या लगाया जाता है?",
        options: ["display: inline", "display: block", "cursor: pointer", "text-align: center"],
        correctAnswer: "B",
        explanation: "<a> टैग डिफ़ॉल्ट रूप से इनलाइन होता है; display: block लगाने से उसका पूरा पैडिंग क्षेत्र क्लिक योग्य बन जाता है।"
      },
      {
        question: "माउस हॉवर करने पर ड्रॉपडाउन दिखाने वाला सही CSS सिलेक्टर कौन सा है?",
        options: ["li:hover .dropdown", ".dropdown:hover li", "li.dropdown:active", "nav.dropdown:focus"],
        correctAnswer: "A",
        explanation: "li:hover .dropdown सिलेक्टर का अर्थ है: जब li पर हॉवर हो, तो उसके अंदर की .dropdown क्लास को दिखाओ।"
      }
    ]
  },

  // =========================================================================
  // TOPIC 14: CSS Image Gallery & Responsive Card Layouts
  // =========================================================================
  {
    id: "u4-t14",
    slug: "css-image-gallery",
    unit: 4,
    unitSlug: "unit-4",
    unitTitle: "Cascading Style Sheets (CSS)",
    title: "CSS Image Gallery & Card Layouts",
    hindiTitle: "CSS इमेज गैलरी एवं रिस्पॉन्सिव कार्ड लेआउट्स",
    definitionEnglish: "A CSS Image Gallery arranges media assets and informative cards into a multi-column responsive grid using Flexbox or CSS Grid, featuring thumbnail borders, captions, hover elevation, and object-fit image scaling.",
    definitionHindi: "CSS इमेज गैलरी मीडिया इमेजेस और सूचनात्मक कार्ड्स को Flexbox या CSS Grid द्वारा एक बहु-स्तंभ रिस्पॉन्सिव ग्रिड में व्यवस्थित करती है; इसमें थंबनेल बॉर्डर्स, कैप्शन्स, हॉवर एलिवेशन और object-fit इमेज स्केलिंग शामिल हैं।",
    simpleWords: "यह एक सुंदर डिजिटल फोटो एल्बम या ई-कॉमर्स प्रोडक्ट कैटलॉग जैसा वेबपेज है जहाँ कई तस्वीरें खूबसूरत डिब्बों में सजी होती हैं और माउस ले जाने पर कार्ड ऊपर उठकर चमकने लगता है।",
    whyImportant: "पोर्टफोलियो, उत्पाद सूची (E-commerce), कॉलेज फेस्ट तस्वीरें, और टीम प्रोफाइल पेजों को प्रदर्शित करने के लिए इमेज गैलरी और कार्ड लेआउट हर वेब डेवलपर का मुख्य प्रोजेक्ट होता है।",
    detailedExplanation: `### 1. Key Components of Modern CSS Image Galleries
1. **Responsive Grid Container:**
   Utilizes CSS Grid with \`repeat(auto-fit, minmax(240px, 1fr))\` to automatically adjust column counts across smartphones, tablets, and wide screens with ZERO media queries!
2. **Card Structure & Overflow Protection:**
   - \`overflow: hidden;\` on the card container guarantees that any image zooming effects stay neatly clipped inside rounded corners.
3. **Aspect Ratio & \`object-fit\`:**
   - \`object-fit: cover;\` ensures that images of varying dimensions uniformly fill the thumbnail box without stretching or distorting aspect ratio.
4. **Smooth Micro-Interactions:**
   - \`transition: transform 0.3s ease, box-shadow 0.3s ease;\`
   - \`:hover\` applies subtle upward translation (\`transform: translateY(-6px);\`) and deeper shadow.`,
    syntax: `/* Auto-Responsive Gallery Grid */
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}

/* Card */
.card {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
  transition: transform 0.2s, box-shadow 0.2s;
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 20px -3px rgba(0,0,0,0.15);
}
.card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}`,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS Responsive Image Gallery Showcase</title>
  <style>
    body { font-family: sans-serif; padding: 24px; background: #fff8f3; }

    /* Responsive Grid Container */
    .gallery-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 20px;
    }

    /* Gallery Item Card */
    .gallery-card {
      background: white;
      border: 1px solid #e5e7eb;
      border-radius: 12px;
      overflow: hidden; /* Clips image corners */
      box-shadow: 0 2px 4px rgba(0,0,0,0.05);
      transition: transform 0.25s ease, box-shadow 0.25s ease;
    }
    .gallery-card:hover {
      transform: translateY(-6px);
      box-shadow: 0 12px 20px -3px rgba(0,0,0,0.12);
    }

    /* Card Media Banner */
    .card-thumb {
      height: 140px;
      background: linear-gradient(135deg, #232850, #1f64c9);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      font-weight: bold;
    }

    .card-body {
      padding: 16px;
    }
    .card-body h4 {
      margin: 0 0 6px 0;
      color: #232850;
      font-size: 16px;
    }
    .card-body p {
      margin: 0;
      color: #64748b;
      font-size: 13px;
    }
  </style>
</head>
<body>
  <h2 style="color: #232850; margin-bottom: 20px;">O-Level Web Design Module Gallery</h2>
  
  <div class="gallery-grid">
    <div class="gallery-card">
      <div class="card-thumb" style="background: linear-gradient(135deg, #2563eb, #38bdf8);">HTML5</div>
      <div class="card-body">
        <h4>Unit 3: HTML5 Markup</h4>
        <p>Semantic structure, multimedia, forms and valid controls.</p>
      </div>
    </div>

    <div class="gallery-card">
      <div class="card-thumb" style="background: linear-gradient(135deg, #0d9488, #14b8a6);">CSS3</div>
      <div class="card-body">
        <h4>Unit 4: CSS Styling</h4>
        <p>Colors, box model, flexbox, grid and transitions.</p>
      </div>
    </div>

    <div class="gallery-card">
      <div class="card-thumb" style="background: linear-gradient(135deg, #d97706, #f59e0b);">W3.CSS</div>
      <div class="card-body">
        <h4>Unit 5: Frameworks</h4>
        <p>Fast modern 12-column responsive layout design.</p>
      </div>
    </div>

    <div class="gallery-card">
      <div class="card-thumb" style="background: linear-gradient(135deg, #7c3aed, #a855f7);">JS</div>
      <div class="card-body">
        <h4>Unit 6: JavaScript</h4>
        <p>Client-side interactivity, DOM control and form validation.</p>
      </div>
    </div>
  </div>
</body>
</html>`,
    lineByLine: [
      { line: "line 8: grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));", explanation: "Automatically fits as many 220px columns as screen width allows, creating a responsive multi-column layout without media queries." },
      { line: "line 17: overflow: hidden;", explanation: "Guarantees that child images or banners do not bleed outside the 12px rounded corner radius." },
      { line: "line 22: transform: translateY(-6px);", explanation: "Smoothly lifts the card upward by 6px on hover for an elevated tactile sensation." }
    ],
    outputExplanation: "चार सुंदर कार्ड्स अगल-बगल ग्रिड में दिखेंगे; किसी भी कार्ड पर माउस ले जाने पर वह 6px ऊपर उठेगा और उसकी छाया गहरी हो जाएगी; मोबाइल पर कार्ड्स अपने आप एक के नीचे एक आ जाएंगे।",
    realWorldAnalogy: "जैसे किसी कला प्रदर्शनी (Art Gallery) में दीवार पर सुंदर फ्रेम में पेंटिंग्स टंगी होती हैं और नीचे उनका नाम और विवरण लिखा होता है, CSS इमेज गैलरी वही काम डिजिटल रूप से करती है।",
    importantPoints: [
      "CSS Grid का `repeat(auto-fit, minmax(...))` गैलरी को बिना मीडिया क्वेरी के पूरी तरह रिस्पॉन्सिव बनाता है।",
      "`overflow: hidden` लगाना जरूरी है ताकि इमेज के कोने कार्ड के बॉर्डर-रेडियस से बाहर न निकलें।",
      "`object-fit: cover` विभिन्न साइज की तस्वीरों को बिना स्ट्रेच किए फ्रेम में फिट करता है।",
      "ट्रांजिशन (`transition: transform 0.2s`) से हॉवर इफेक्ट झटके के बजाय बहुत स्मूथ दिखता है।"
    ],
    commonMistakes: [
      "कार्ड पर `overflow: hidden` न लगाना (जिससे इमेज ज़ूम होने पर कार्ड के कोनों से बाहर निकल जाती है)।",
      "इमेज पर `object-fit: cover` न लगाना (जिससे फोटो का एस्पेक्ट रेशियो बिगड़ जाता है और फोटो चपटी या लंबी दिखती है)।"
    ],
    examPerspective: "O-Level प्रैक्टिकल परीक्षा में 4-कॉलम इमेज गैलरी बनाने और हॉवर पर शैडो व ज़ूम इफेक्ट डालने का प्रश्न नियमित रूप से पूछा जाता है।",
    quickRevision: "Gallery: display: grid; repeat(auto-fit, minmax(220px, 1fr)); gap: 20px. Card: border-radius, overflow: hidden, box-shadow. Hover: transform: translateY(-5px);. Image: object-fit: cover.",
    relatedTopics: ["css-box-model", "css-grid-layout", "css-variables-transitions-and-transforms"],
    practiceTask: "एक 3-कॉलम की इमेज गैलरी बनाएं जिसमें माउस ले जाने पर कार्ड की बॉर्डर का रंग बदलकर ऑरेंज हो जाए और कार्ड 4px ऊपर उठे।",
    quiz: [
      {
        question: "विभिन्न आकारों की तस्वीरों को बिना उनका अनुपात बिगाड़े (Without Distortion) एक निश्चित चौकोर फ्रेम में फिट करने वाली CSS प्रॉपर्टी कौन सी है?",
        options: ["image-fit: fill", "object-fit: cover", "background-fit: auto", "image-scale: proportional"],
        correctAnswer: "B",
        explanation: "object-fit: cover इमेज के प्राकृतिक अनुपात को बनाए रखते हुए पूरे फ्रेम को भरता है।"
      },
      {
        question: "CSS Grid में बिना मीडिया क्वेरी के स्क्रीन साइज के अनुसार स्वतः कॉलम बनाने के लिए किस फंक्शन संयोजन का उपयोग होता है?",
        options: ["grid-columns: auto-stretch", "repeat(auto-fit, minmax(200px, 1fr))", "columns: dynamic", "grid-wrap: true"],
        correctAnswer: "B",
        explanation: "repeat(auto-fit, minmax(200px, 1fr)) आधुनिक CSS का सबसे लोकप्रिय रिस्पॉन्सिव ग्रिड पैटर्न है।"
      },
      {
        question: "कार्ड पर माउस ले जाने पर उसे ऊपर उठाने के लिए किस प्रॉपर्टी का उपयोग किया जाता है?",
        options: ["top: -5px", "transform: translateY(-5px)", "margin-top: -5px", "lift: 5px"],
        correctAnswer: "B",
        explanation: "transform: translateY(-5px) बिना लेआउट रिफ्लो के तत्व को बहुत स्मूथली ऊपर उठाता है।"
      }
    ]
  },

  // =========================================================================
  // TOPIC 15: Modern 1D Layout with CSS Flexbox
  // =========================================================================
  {
    id: "u4-t15",
    slug: "css-flexbox-layout",
    unit: 4,
    unitSlug: "unit-4",
    unitTitle: "Cascading Style Sheets (CSS)",
    title: "Modern 1D Layout with CSS Flexbox",
    hindiTitle: "CSS फ्लेक्सबॉक्स (Flexbox) 1D लेआउट सिस्टम",
    definitionEnglish: "CSS Flexible Box Layout (Flexbox) is a one-dimensional layout model that distributes space along a single axis (row or column) between items in an interface, offering powerful alignment, direction, wrapping, ordering, and dynamic sizing capabilities.",
    definitionHindi: "CSS फ्लेक्सिबल बॉक्स लेआउट (Flexbox) एक 1-आयामी (One-Dimensional) लेआउट मॉडल है जो किसी इंटरफ़ेस में एक ही अक्ष (पंक्ति या स्तंभ) के साथ तत्वों के बीच स्थान वितरित करता है और शक्तिशाली अलाइनमेंट, दिशा और गतिशील आकार प्रदान करता है।",
    simpleWords: "फ्लेक्सबॉक्स एक रबर बैंड की तरह लचीला डिब्बा है जिसमें रखे सामान को आसानी से एक लाइन में सजाया जा सकता है, बीच में जगह छोड़ी जा सकती है, और स्क्रीन छोटी होने पर अपने आप अगली लाइन में भेजा जा सकता है।",
    whyImportant: "फ्लेक्सबॉक्स आधुनिक वेब डेवलपमेंट की रीढ़ है। पुराने जमाने के फ्लोट और टेबल लेआउट की सभी कमियां फ्लेक्सबॉक्स ने दूर कर दी हैं। किसी भी चीज़ को वर्टिकली और हॉरिजॉन्टली सेंटर करना फ्लेक्सबॉक्स से चुटकियों का काम बन गया है।",
    detailedExplanation: `### 1. The Two Axes of Flexbox
Flexbox always operates along two orthogonal axes:
1. **Main Axis:** The primary direction defined by \`flex-direction\` (Default: left-to-right row).
2. **Cross Axis:** Perpendicular to the main axis (Default: top-to-bottom column).

### 2. Flex Container Properties (Applied to the Parent)
- **\`display: flex;\`** Activates the flex context for all immediate children.
- **\`flex-direction\`:** Defines the main axis orientation:
  - \`row\` (Default): Left to right.
  - \`row-reverse\`: Right to left.
  - \`column\`: Top to bottom.
  - \`column-reverse\`: Bottom to top.
- **\`flex-wrap\`:** Controls whether items stay on one line or wrap:
  - \`nowrap\` (Default): Forces all items into a single line (may cause shrinking/overflow).
  - \`wrap\`: Items wrap onto multiple lines as needed.
- **\`justify-content\`:** Aligns items along the **Main Axis**:
  - \`flex-start\` (Default), \`flex-end\`, \`center\`, \`space-between\` (first item at start, last at end), \`space-around\`, \`space-evenly\`.
- **\`align-items\`:** Aligns items along the **Cross Axis**:
  - \`stretch\` (Default: fills height), \`flex-start\`, \`flex-end\`, \`center\`, \`baseline\`.
- **\`gap\`:** Space between flex items (\`gap: 16px;\` or \`row-gap\` / \`column-gap\`). Replaces messy margin hacks!

### 3. Flex Item Properties (Applied to Children)
- **\`flex-grow\`:** Proportion of available free space an item should take up (e.g. \`flex-grow: 1\`). Default is 0.
- **\`flex-shrink\`:** Ability to shrink when space is constrained. Default is 1.
- **\`flex-basis\`:** The initial default size before growing or shrinking (e.g. \`flex-basis: 250px\`).
- **\`flex\` Shorthand:** \`flex: grow shrink basis;\`
  - \`flex: 1;\` = \`flex: 1 1 0%;\` (Expands equally to share remaining space).
- **\`align-self\`:** Overrides parent's \`align-items\` for a single specific child item.
- **\`order\`:** Reorders items visually without changing HTML source order (Default: 0).

### 4. The Famous "Holy Grail" Centering Trick
Centering anything perfectly in the dead center of a box:
\`\`\`css
.center-box {
  display: flex;
  justify-content: center; /* Main axis center */
  align-items: center;     /* Cross axis center */
}
\`\`\``,
    syntax: `/* Flex Container */
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

/* Flex Item */
.item {
  flex: 1; /* Grow equally */
}`,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS Flexbox Mastery Showcase</title>
  <style>
    body { font-family: sans-serif; padding: 24px; background: #fff8f3; }

    /* Flex Navigation Bar */
    .flex-navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #232850;
      padding: 16px 24px;
      border-radius: 12px;
      color: white;
      margin-bottom: 24px;
    }
    .nav-links {
      display: flex;
      gap: 16px;
      list-style: none;
      margin: 0;
      padding: 0;
    }
    .nav-links a { color: #f8fafc; text-decoration: none; font-weight: bold; }
    .nav-links a:hover { color: #f19a27; }

    /* 3 Equal Columns Using Flex: 1 */
    .columns-container {
      display: flex;
      gap: 16px;
      flex-wrap: wrap; /* Wraps gracefully on mobile */
    }
    .col-card {
      flex: 1 1 200px; /* Grow, shrink, min base 200px */
      background: white;
      border: 1px solid #e2e8f0;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    }
    .col-card h3 { color: #232850; margin-top: 0; }
  </style>
</head>
<body>
  <!-- Flex Navigation -->
  <div class="flex-navbar">
    <div style="font-weight: 800; font-size: 18px; color: #f19a27;">O-Level Portal</div>
    <ul class="nav-links">
      <li><a href="#">Syllabus</a></li>
      <li><a href="#">Notes</a></li>
      <li><a href="#">MCQs</a></li>
    </ul>
  </div>

  <!-- 3 Equal Flex Columns -->
  <div class="columns-container">
    <div class="col-card">
      <h3>Theory (32h)</h3>
      <p>Master computer fundamentals, web architecture, and algorithms.</p>
    </div>
    <div class="col-card">
      <h3>Practical (48h)</h3>
      <p>Hands-on lab coding in HTML5, CSS3, JavaScript, and Photoshop.</p>
    </div>
    <div class="col-card">
      <h3>Project Work</h3>
      <p>Develop complete capstone static and responsive web applications.</p>
    </div>
  </div>
</body>
</html>`,
    lineByLine: [
      { line: "line 8: display: flex; justify-content: space-between; align-items: center;", explanation: "Establishes flex container; pushes brand logo to far left and navigation links to far right while centering both vertically." },
      { line: "line 17: display: flex; gap: 16px;", explanation: "Puts navigation links in a horizontal row and places a clean 16px gap between them without margin hacks." },
      { line: "line 29: flex: 1 1 200px;", explanation: "Allows each card to grow and shrink equally with a 200px baseline, wrapping into multiple rows on mobile screens." }
    ],
    outputExplanation: "शीर्ष पर एक नेवी नेवबार दिखेगा जिसमें लोगो बाईं तरफ और लिंक्स दाईं तरफ सजे होंगे; नीचे 3 बराबर चौड़ाई वाले कार्ड्स अगल-बगल सजे दिखेंगे जो स्क्रीन छोटी करने पर नीचे आ जाएंगे।",
    realWorldAnalogy: "फ्लेक्सबॉक्स एक लचीले सोफे जैसा है जिस पर 3 लोग बैठे हैं; सोफा बड़ा होने पर वे आराम से फैल जाते हैं, और सोफा छोटा होने पर वे पास-पास आ जाते हैं।",
    importantPoints: [
      "Flexbox एक 1D (One-Dimensional) लेआउट सिस्टम है (या तो Row में काम करता है या Column में)।",
      "`justify-content` हमेशा मेन एक्सिस (Main Axis) पर अलाइन करता है।",
      "`align-items` हमेशा क्रॉस एक्सिस (Cross Axis) पर अलाइन करता है।",
      "तत्वों के बीच अंतर देने के लिए `gap` प्रॉपर्टी मार्जिन से कहीं बेहतर है।",
      "`flex: 1` सभी बच्चों को उपलब्ध खाली जगह बराबर-बराबर बांटने को कहता है।"
    ],
    commonMistakes: [
      "`justify-content` और `align-items` में कन्फ्यूज हो जाना (जब `flex-direction: column` हो, तो मेन एक्सिस वर्टिकल हो जाती है!)।",
      "पैरेंट पर `display: flex` लगाए बिना ही बच्चों पर `flex-grow` या `justify-content` लगाने की कोशिश करना।"
    ],
    examPerspective: "O-Level और आधुनिक वेब इंटरव्यूज में 'Difference between justify-content and align-items', 'How to center a div horizontally and vertically', और 'flex-wrap' पर प्रश्न अवश्य आते हैं।",
    quickRevision: "Flexbox: 1D layout. Container: display: flex, flex-direction (row/column), flex-wrap, justify-content (main axis), align-items (cross axis), gap. Item: flex-grow, flex-shrink, flex-basis, flex: 1.",
    relatedTopics: ["css-grid-layout", "css-display-and-visibility", "css-menu-design"],
    practiceTask: "एक बॉक्स के अंदर किसी टेक्स्ट को `display: flex; justify-content: center; align-items: center;` द्वारा ठीक बीचों-बीच (Dead Center) वर्टिकली और हॉरिजॉन्टली रखकर दिखाएं।",
    quiz: [
      {
        question: "फ्लेक्सबॉक्स में मेन एक्सिस (Main Axis) के साथ तत्वों का संरेखण (Alignment) नियंत्रित करने वाली प्रॉपर्टी कौन सी है?",
        options: ["align-items", "justify-content", "align-content", "flex-align"],
        correctAnswer: "B",
        explanation: "justify-content मुख्य अक्ष (Main Axis) के साथ तत्वों के संरेखण और स्थान वितरण को नियंत्रित करती है।"
      },
      {
        question: "फ्लेक्सबॉक्स लेआउट किस प्रकार का मॉडल है?",
        options: ["One-Dimensional (1D)", "Two-Dimensional (2D)", "Three-Dimensional (3D)", "Tabular"],
        correctAnswer: "A",
        explanation: "Flexbox एक 1-आयामी (1D) मॉडल है जो एक समय में या तो पंक्ति (Row) या स्तंभ (Column) में काम करता है।"
      },
      {
        question: "फ्लेक्स आइटम्स के बीच खाली स्थान देने के लिए आधुनिक CSS में किस प्रॉपर्टी का उपयोग किया जाता है?",
        options: ["margin-between", "gap", "item-spacing", "flex-margin"],
        correctAnswer: "B",
        explanation: "gap प्रॉपर्टी तत्वों के बीच एकसमान अंतर देने का आधुनिक और सबसे सरल तरीका है।"
      }
    ]
  },

  // =========================================================================
  // TOPIC 16: Modern 2D Layout with CSS Grid
  // =========================================================================
  {
    id: "u4-t16",
    slug: "css-grid-layout",
    unit: 4,
    unitSlug: "unit-4",
    unitTitle: "Cascading Style Sheets (CSS)",
    title: "Modern 2D Layout with CSS Grid",
    hindiTitle: "CSS ग्रिड (Grid) 2D लेआउट सिस्टम",
    definitionEnglish: "CSS Grid Layout is a two-dimensional layout system designed for the web, allowing developers to organize content simultaneously into rows and columns with fractional units (fr), explicit tracks, template areas, and automatic cell placement.",
    definitionHindi: "CSS ग्रिड लेआउट वेब के लिए डिज़ाइन किया गया एक 2-आयामी (2D) लेआउट सिस्टम है जो डेवलपर्स को एक साथ पंक्तियों (Rows) और स्तंभों (Columns) में सामग्री को व्यवस्थित करने की सुविधा देता है; इसमें fr यूनिट, repeat(), और minmax() शामिल हैं।",
    simpleWords: "फ्लेक्सबॉक्स यदि एक दिशा में चलने वाली रेलगाड़ी है, तो CSS ग्रिड एक शतरंज का बोर्ड है जिसमें एक साथ आड़ी लाइनें (Rows) और खड़ी लाइनें (Columns) दोनों बनाकर पूरे पेज का लेआउट सजाया जाता है।",
    whyImportant: "जटिल वेब पेज लेआउट (Header, Sidebar, Main Content, Footer) और इमेज गैलरी बनाने के लिए CSS Grid दुनिया का सबसे शक्तिशाली लेआउट इंजन है। बिना किसी बाहरी फ्रेमवर्क के यह जटिलतम डिजाइन आसानी से बना देता है।",
    detailedExplanation: `### 1. Flexbox (1D) vs CSS Grid (2D)
- **Flexbox:** Designed for 1-dimensional layouts (either a single row OR a single column, like a navigation bar or button row).
- **CSS Grid:** Designed for 2-dimensional layouts (simultaneously managing BOTH rows AND columns, like a complete website page shell or newspaper dashboard).

### 2. The Fractional Unit (\`fr\`)
The \`fr\` unit represents a fraction of the available free space in the grid container:
\`\`\`css
/* 3 equal columns */
grid-template-columns: 1fr 1fr 1fr;

/* Sidebar (250px fixed) + Main Content (Takes all remaining space) */
grid-template-columns: 250px 1fr;
\`\`\`

### 3. Key Grid Container Properties
- **\`display: grid;\`:** Creates the grid formatting context.
- **\`grid-template-columns\`:** Defines column tracks (e.g. \`repeat(3, 1fr)\`).
- **\`grid-template-rows\`:** Defines row tracks (e.g. \`80px 1fr 60px\`).
- **\`gap\`:** Space between grid cells (\`gap: 20px;\`).
- **\`grid-template-areas\`:** Allows visual ASCII-art style layout mapping:
  \`\`\`css
  grid-template-areas:
    "header header"
    "sidebar content"
    "footer footer";
  \`\`\`

### 4. Powerful Functions: \`repeat()\` & \`minmax()\`
- **\`repeat(count, track-size)\`:** Avoids repetitive typing:
  \`repeat(4, 1fr)\` is identical to \`1fr 1fr 1fr 1fr\`.
- **\`minmax(min, max)\`:** Defines a flexible range:
  \`minmax(200px, 1fr)\` means the column can never shrink below 200px, but can grow to take remaining space.
- **The Ultimate Responsive Grid Formula:**
  \`\`\`css
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  \`\`\`
  This single line automatically calculates column counts based on screen width!`,
    syntax: `/* Grid Container */
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 20px;
}

/* Item Placement */
.header-item {
  grid-column: 1 / -1; /* Span across all columns */
}`,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS 2D Grid Layout Showcase</title>
  <style>
    body { font-family: sans-serif; padding: 24px; background: #fff8f3; margin: 0; }

    /* Complete Page Layout Using CSS Grid */
    .page-layout {
      display: grid;
      grid-template-columns: 240px 1fr; /* 240px Sidebar + Fluid Content */
      grid-template-rows: auto 1fr auto;  /* Header, Content, Footer */
      gap: 16px;
      min-height: 80vh;
    }

    .grid-header {
      grid-column: 1 / -1; /* Spans across both columns */
      background: #232850;
      color: white;
      padding: 20px;
      border-radius: 8px;
      text-align: center;
    }

    .grid-sidebar {
      background: #ffffff;
      border: 1px solid #cbd5e1;
      padding: 16px;
      border-radius: 8px;
    }

    .grid-content {
      background: #ffffff;
      border: 1px solid #cbd5e1;
      padding: 20px;
      border-radius: 8px;
    }

    .grid-footer {
      grid-column: 1 / -1; /* Spans across both columns */
      background: #1e293b;
      color: #94a3b8;
      padding: 12px;
      text-align: center;
      border-radius: 8px;
      font-size: 13px;
    }
  </style>
</head>
<body>
  <div class="page-layout">
    <header class="grid-header">
      <h2>CSS Grid 2D Master Page Layout</h2>
    </header>

    <aside class="grid-sidebar">
      <h4>Unit Navigation</h4>
      <ul style="padding-left: 16px; color: #475569; font-size: 14px;">
        <li>Unit 1: Internet</li>
        <li>Unit 2: Editors</li>
        <li>Unit 3: HTML5</li>
        <li>Unit 4: CSS Grid</li>
      </ul>
    </aside>

    <main class="grid-content">
      <h3>Main Study Content Area</h3>
      <p>Using grid-template-columns: 240px 1fr, this main area fluidly expands while the sidebar maintains a fixed 240px width.</p>
    </main>

    <footer class="grid-footer">
      NIELIT O-Level M2-R5.1 Web Designing & Publishing
    </footer>
  </div>
</body>
</html>`,
    lineByLine: [
      { line: "line 8: display: grid; grid-template-columns: 240px 1fr;", explanation: "Establishes a 2D grid with a fixed 240px left column and a flexible right column taking all remaining space." },
      { line: "line 15: grid-column: 1 / -1;", explanation: "Commands header and footer to span from the first vertical grid line (1) to the very last (-1), stretching across the entire width." },
      { line: "line 11: gap: 16px;", explanation: "Maintains a clean 16px gap between all grid tracks automatically." }
    ],
    outputExplanation: "हेडर पूरे पेज पर ऊपर दिखेगा, उसके नीचे बाईं तरफ 240px का साइडबार और दाईं तरफ मुख्य कंटेंट दिखेगा, और सबसे नीचे फुटर पूरे पेज पर फैला दिखेगा।",
    realWorldAnalogy: "CSS ग्रिड एक आधुनिक बहुमंजिला इमारत के ब्लूप्रिंट जैसा है जिसमें आर्किटेक्ट पहले से तय करता है कि कौन सा कमरा कितनी खिड़कियों और दीवारों के बीच फैलेगा।",
    importantPoints: [
      "CSS Grid एक 2D (Two-Dimensional) लेआउट सिस्टम है जो पंक्तियों और स्तंभों दोनों को संभालता है।",
      "`fr` यूनिट कंटेनर में बची हुई उपलब्ध जगह का हिस्सा (Fraction of Free Space) दर्शाती है।",
      "`grid-column: 1 / -1;` किसी तत्व को पहले कॉलम से अंतिम कॉलम तक पूरा फैलाने का सबसे तेज़ तरीका है।",
      "`repeat(3, 1fr)` तीन बराबर चौड़ाई के कॉलम बनाता है।",
      "`auto-fit` और `minmax` से बिना मीडिया क्वेरी के रिस्पॉन्सिव ग्रिड बनाया जा सकता है।"
    ],
    commonMistakes: [
      "फ्लेक्सबॉक्स और ग्रिड को प्रतिस्पर्धी समझना (दोनों साथ मिलकर काम करते हैं: पूरे पेज का लेआउट Grid से बनाएं और मेन्यू या बटन बार Flexbox से)।",
      "`grid-column: 1 / -1` का उपयोग करते समय कंटेनर पर इंप्लिसिट ग्रिड कॉलम परिभाषित न होना।"
    ],
    examPerspective: "O-Level में 'Difference between Flexbox (1D) and CSS Grid (2D)', 'fr यूनिट का अर्थ', और `grid-template-columns` की कार्यप्रणाली पर प्रश्न पूछे जाते हैं।",
    quickRevision: "Grid: 2D layout (rows + columns). Container: display: grid, grid-template-columns (1fr 2fr, repeat), grid-template-rows, gap. Items: grid-column (1 / -1 spans all), grid-row.",
    relatedTopics: ["css-flexbox-layout", "css-image-gallery", "css-responsive-design-and-units"],
    practiceTask: "एक 3-कॉलम ग्रिड बनाएं जिसमें `grid-template-columns: repeat(3, 1fr); gap: 15px;` हो और 6 कार्ड्स को ग्रिड में सजाएं।",
    quiz: [
      {
        question: "CSS Grid लेआउट किस प्रकार का मॉडल है?",
        options: ["One-Dimensional (1D)", "Two-Dimensional (2D)", "Linear", "Circular"],
        correctAnswer: "B",
        explanation: "CSS Grid एक 2-आयामी (2D) लेआउट मॉडल है जो एक साथ पंक्तियों (Rows) और स्तंभों (Columns) दोनों को नियंत्रित करता है।"
      },
      {
        question: "CSS Grid में 'fr' इकाई (Unit) का क्या अर्थ होता है?",
        options: ["Frame Rate", "Fraction of available free space", "Fixed Ratio", "Frequency Range"],
        correctAnswer: "B",
        explanation: "fr का अर्थ 'Fraction of available free space' होता है, जो उपलब्ध खाली स्थान का एक हिस्सा दर्शाता है।"
      },
      {
        question: "किसी ग्रिड आइटम को पहले कॉलम से लेकर अंतिम कॉलम तक पूरा फैलाने के लिए कौन सा मान सही है?",
        options: ["grid-column: all", "grid-column: 1 / -1", "grid-span: full", "grid-width: 100%"],
        correctAnswer: "B",
        explanation: "grid-column: 1 / -1 का अर्थ है पहली ग्रिड लाइन से लेकर अंतिम (-1) ग्रिड लाइन तक फैलना।"
      }
    ]
  },

  // =========================================================================
  // TOPIC 17: Responsive Web Design, Media Queries & Modern CSS Units
  // =========================================================================
  {
    id: "u4-t17",
    slug: "css-responsive-design-and-units",
    unit: 4,
    unitSlug: "unit-4",
    unitTitle: "Cascading Style Sheets (CSS)",
    title: "Responsive Web Design, Media Queries & Modern Units",
    hindiTitle: "रिस्पॉन्सिव वेब डिजाइनिंग, मीडिया क्वेरीज एवं आधुनिक यूनिट्स",
    definitionEnglish: "Responsive Web Design (RWD) is an approach whereby web pages detect the user's screen size, orientation, and device capabilities, adapting layout and styling dynamically using fluid grids, flexible images, relative CSS units (rem, em, vw, vh, clamp), and CSS Media Queries (@media).",
    definitionHindi: "रिस्पॉन्सिव वेब डिजाइनिंग (RWD) एक ऐसी तकनीक है जिसमें वेबपेज यूजर की स्क्रीन के आकार, ओरिएंटेशन और डिवाइस का पता लगाकर फ्लूइड ग्रिड्स, लचीली इमेजेस, रिलेटिव यूनिट्स (rem, em, vw, vh, clamp) और मीडिया क्वेरीज (@media) का उपयोग करके अपना लेआउट स्वतः बदल लेते हैं।",
    simpleWords: "यह ऐसी वेबसाइट बनाने का तरीका है जो मोबाइल पर खुले तो मोबाइल जैसी दिखे, टैबलेट पर टैबलेट जैसी और कंप्यूटर पर कंप्यूटर जैसी दिखे, ताकि यूजर को ज़ूम न करना पड़े।",
    whyImportant: "आज 60% से अधिक इंटरनेट ट्रैफिक स्मार्टफोन्स से आता है। अगर आपकी वेबसाइट मोबाइल पर रिस्पॉन्सिव नहीं है, तो Google उसे सर्च में नीचे धकेल देगा। O-Level यूनिट 1 और यूनिट 4 दोनों में रिस्पॉन्सिव डिजाइन पर 100% प्रश्न आते हैं।",
    detailedExplanation: `### 1. The 3 Core Pillars of Responsive Web Design (Ethan Marcotte, 2010)
1. **Fluid Grids:** Using percentage or fractional units instead of fixed pixel widths.
2. **Flexible Media:** Setting \`max-width: 100%; height: auto;\` on images and videos so they scale inside containers without overflowing.
3. **Media Queries (\`@media\`):** Applying customized CSS rules based on device breakpoints.

### 2. The Essential Viewport Meta Tag
Every responsive web page MUST include this tag inside \`<head>\`:
\`\`\`html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
\`\`\`
- Without this tag, mobile browsers assume a legacy desktop width of 980px and shrink the entire page into an unreadable miniature view!

### 3. Absolute vs Relative CSS Units
- **Absolute Units:** Fixed physical size.
  - \`px\` (Pixel: 1px = 1/96th of an inch).
  - \`pt\`, \`cm\`, \`in\` (Mainly for print stylesheets).
- **Relative Units (Essential for RWD!):**
  - \`rem\` (Root EM): Relative to font-size of the root \`<html>\` element (Default: \`1rem = 16px\`). Ideal for accessibility because it respects user browser font zoom!
  - \`em\`: Relative to font-size of the **immediate parent element** (compounds in nested elements).
  - \`%\`: Relative to the parent element's dimensions.
  - \`vw\` / \`vh\`: 1% of the viewport's width / height.
  - \`dvh\` / \`svh\`: Dynamic / Small viewport height (solves mobile browser address bar collapse).

### 4. Modern Math Functions: \`calc()\` & \`clamp()\`
- **\`calc()\`: Mixes units:**
  \`width: calc(100% - 40px);\`
- **\`clamp(MIN, PREFERRED, MAX)\` (Fluid Typography Magic!):**
  \`\`\`css
  font-size: clamp(1rem, 2.5vw, 2rem);
  \`\`\`
  The font scales smoothly with screen width, never dropping below 1rem (16px) and never exceeding 2rem (32px), with zero media queries!

### 5. Media Query Syntax & Breakpoints
The **Mobile-First Approach** writes default styles for small screens, then uses \`min-width\` media queries as screen size expands:
\`\`\`css
/* Mobile default: 1 column */
.grid { grid-template-columns: 1fr; }

/* Tablet (768px and up): 2 columns */
@media screen and (min-width: 768px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
}

/* Desktop (1024px and up): 3 columns */
@media screen and (min-width: 1024px) {
  .grid { grid-template-columns: repeat(3, 1fr); }
}
\`\`\``,
    syntax: `/* Viewport Meta Tag (HTML <head>) */
<meta name="viewport" content="width=device-width, initial-scale=1.0">

/* Mobile-First Media Query */
@media screen and (min-width: 768px) {
  .sidebar { display: block; }
}

/* Fluid Typography with clamp */
h1 {
  font-size: clamp(1.5rem, 4vw, 3rem);
}`,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <!-- 1. Mandatory Viewport Tag -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Web Design Showcase</title>
  <style>
    * { box-sizing: border-box; }
    body {
      font-family: sans-serif;
      margin: 0;
      padding: 20px;
      background: #f8fafc;
    }

    /* Fluid Heading with clamp */
    h1 {
      font-size: clamp(1.5rem, 5vw, 2.5rem);
      color: #232850;
      text-align: center;
    }

    /* Mobile Default: 1 Column */
    .responsive-deck {
      display: grid;
      grid-template-columns: 1fr;
      gap: 16px;
      margin-top: 24px;
    }

    .card {
      background: white;
      border: 1px solid #cbd5e1;
      padding: 20px;
      border-radius: 8px;
      text-align: center;
    }

    /* Tablet Breakpoint (768px and up): 2 Columns */
    @media screen and (min-width: 768px) {
      .responsive-deck {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    /* Desktop Breakpoint (1024px and up): 4 Columns */
    @media screen and (min-width: 1024px) {
      .responsive-deck {
        grid-template-columns: repeat(4, 1fr);
      }
    }
  </style>
</head>
<body>
  <h1>Responsive Web Design in Action</h1>
  <p style="text-align:center; color:#64748b;">Resize browser window to see 1 col (mobile) -> 2 cols (tablet) -> 4 cols (desktop)!</p>

  <div class="responsive-deck">
    <div class="card" style="border-top: 4px solid #f19a27;">Card 1: Mobile First</div>
    <div class="card" style="border-top: 4px solid #232850;">Card 2: Fluid Units</div>
    <div class="card" style="border-top: 4px solid #0284c7;">Card 3: Media Queries</div>
    <div class="card" style="border-top: 4px solid #16a34a;">Card 4: Accessibility</div>
  </div>
</body>
</html>`,
    lineByLine: [
      { line: "line 5: <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">", explanation: "Mandatory HTML tag that instructs mobile browsers to render at actual device pixel width instead of shrinking a 980px desktop canvas." },
      { line: "line 15: font-size: clamp(1.5rem, 5vw, 2.5rem);", explanation: "Fluid typography function scaling heading continuously between 24px (1.5rem) and 40px (2.5rem) based on viewport width." },
      { line: "line 33: @media screen and (min-width: 768px) { ... }", explanation: "Media query activating 2-column grid when screen width reaches 768px or wider." },
      { line: "line 40: @media screen and (min-width: 1024px) { ... }", explanation: "Desktop media query activating 4-column layout when screen reaches 1024px or wider." }
    ],
    outputExplanation: "मोबाइल पर एक कॉलम में 4 कार्ड्स दिखेंगे; टैबलेट पर 2-2 कार्ड्स अगल-बगल हो जाएंगे; और डेस्कटॉप पर सभी 4 कार्ड्स एक ही पंक्ति में 4 कॉलम में व्यवस्थित हो जाएंगे।",
    realWorldAnalogy: "जैसे पानी जिस बर्तन (गिलास, लोटा या बोतल) में डाला जाए, उसी का आकार ले लेता है, उसी प्रकार रिस्पॉन्सिव वेबसाइट जिस डिवाइस (मोबाइल, टैबलेट, टीवी) में खोली जाए, उसी के आकार में ढल जाती है।",
    importantPoints: [
      "`<meta name=\"viewport\">` के बिना कोई भी वेबसाइट मोबाइल पर रिस्पॉन्सिव नहीं हो सकती।",
      "इमेजेस को रिस्पॉन्सिव बनाने का जादुई नियम: `img { max-width: 100%; height: auto; }`.",
      "`rem` यूनिट रूट `<html>` के फॉन्ट साइज (डिफ़ॉल्ट 16px) पर आधारित होती है (1rem = 16px, 2rem = 32px)।",
      "`em` अपने पैरेंट के फॉन्ट साइज पर निर्भर करती है और नेस्टिंग में गुणा (Compound) होती है।",
      "`clamp(min, preferred, max)` आधुनिक फ्लूइड टाइपोग्राफी के लिए सबसे उत्तम है।"
    ],
    commonMistakes: [
      "HTML हेड में Viewport meta tag लगाना भूल जाना।",
      "इमेज पर फिक्स्ड पिक्सल चौड़ाई (जैसे `width: 800px`) दे देना जिससे मोबाइल स्क्रीन पर हॉरिजॉन्टल स्क्रॉलबार आ जाता है।",
      "`max-width` के बजाय केवल `width: 100%` देना (जिससे छोटी इमेज अपनी मूल गुणवत्ता खोकर ब्लर हो जाती है)।"
    ],
    examPerspective: "O-Level में 'Viewport meta tag का क्या कार्य है?', 'rem vs em का अंतर', '@media query का सिंटैक्स', और 'Flexible images के नियम' (`max-width: 100%`) पर प्रश्न आते हैं।",
    quickRevision: "RWD: Fluid grids + Flexible images (max-width: 100%) + Media queries (@media). Viewport tag mandatory. Units: px (absolute), rem (root-relative), em (parent-relative), vw/vh (viewport %). clamp(min, val, max).",
    relatedTopics: ["introduction-of-internet", "responsive-web-designing", "css-flexbox-layout"],
    practiceTask: "एक इमेज और पैराग्राफ बनाएं और `@media (max-width: 600px)` लिखकर ऐसा नियम बनाएं कि मोबाइल स्क्रीन पर बैकग्राउंड लाइट येलो हो जाए और इमेज की चौड़ाई 100% हो जाए।",
    quiz: [
      {
        question: "मोबाइल ब्राउज़रों को डिवाइस की वास्तविक चौड़ाई पर वेबसाइट रेंडर करने का निर्देश देने वाला अनिवार्य टैग कौन सा है?",
        options: ["<meta name='responsive'>", "<meta name='viewport' content='width=device-width, initial-scale=1.0'>", "<meta name='screen' content='mobile'>", "<link rel='viewport'>"],
        correctAnswer: "B",
        explanation: "Viewport meta tag मोबाइल ब्राउज़रों को स्क्रीन चौड़ाई के अनुसार 1:1 स्केल पर पेज रेंडर करने का निर्देश देता है।"
      },
      {
        question: "किसी इमेज को कंटेनर से बाहर निकलने से रोकने और रिस्पॉन्सिव बनाने का सही CSS नियम कौन सा है?",
        options: ["img { width: fixed; }", "img { max-width: 100%; height: auto; }", "img { display: inline; }", "img { overflow: auto; }"],
        correctAnswer: "B",
        explanation: "max-width: 100%; height: auto; इमेज को कभी भी पैरेंट से बड़ा नहीं होने देता और उसका अनुपात बनाए रखता है।"
      },
      {
        question: "1rem यूनिट का मान डिफ़ॉल्ट रूप से कितने पिक्सल के बराबर होता है?",
        options: ["10px", "12px", "16px", "20px"],
        correctAnswer: "C",
        explanation: "अधिकांश ब्राउज़रों में रूट <html> का डिफ़ॉल्ट फॉन्ट-साइज 16px होता है, इसलिए 1rem = 16px होता है।"
      }
    ]
  },

  // =========================================================================
  // TOPIC 18: CSS Variables, Transitions & Transforms
  // =========================================================================
  {
    id: "u4-t18",
    slug: "css-variables-transitions-and-transforms",
    unit: 4,
    unitSlug: "unit-4",
    unitTitle: "Cascading Style Sheets (CSS)",
    title: "CSS Custom Properties (Variables), Transitions & Transforms",
    hindiTitle: "CSS कस्टम प्रॉपर्टीज (वेरिएबल्स), ट्रांजिशन्स एवं 2D/3D ट्रांसफॉर्म्स",
    definitionEnglish: "CSS Custom Properties (Variables) store reusable design tokens across a stylesheet prefixed with '--' and retrieved with var(); CSS Transitions smoothly animate property changes over time; and CSS Transforms manipulate element geometry in 2D or 3D space (translate, rotate, scale, skew) without altering normal document flow.",
    definitionHindi: "CSS कस्टम प्रॉपर्टीज (वेरिएबल्स) '--' उपसर्ग के साथ स्टाइलशीट में पुन: प्रयोज्य मानों (जैसे कलर्स) को स्टोर करती हैं जिन्हें var() द्वारा पढ़ा जाता है; CSS ट्रांजिशन्स प्रॉपर्टी बदलावों को समय के साथ स्मूथ बनाते हैं; और CSS ट्रांसफॉर्म्स लेआउट को हिलाए बिना 2D/3D में तत्वों को घुमाने, स्केल करने और खिसकाने की सुविधा देते हैं।",
    simpleWords: "वेरिएबल एक डिब्बे जैसा है जिसमें आप अपना मुख्य रंग (#F19A27) लिखकर रख लेते हैं और पूरी साइट में इस्तेमाल करते हैं; ट्रांसफॉर्म किसी बटन को बड़ा या तिरछा करने का जादू है; और ट्रांजिशन उस बदलाव को झटके के बदले मक्खन जैसा स्मूथ (Smooth Animation) बनाता है।",
    whyImportant: "डार्क मोड (Dark Mode / Light Mode theming) लागू करने के लिए CSS वेरिएबल्स अनिवार्य हैं। आधुनिक वेब डिजाइन में इंटरेक्टिव हॉवर इफेक्ट्स और एनीमेशन बिना JavaScript के शुद्ध CSS से बनाए जाते हैं।",
    detailedExplanation: `### 1. CSS Custom Properties (Variables)
- **Declaration:** Must start with two dashes (\`--\`). Declared on \`:root\` for global availability across the entire document:
  \`\`\`css
  :root {
    --brand-orange: #f19a27;
    --navy-blue: #232850;
    --card-radius: 12px;
  }
  \`\`\`
- **Usage with \`var()\`: \`var(--variable-name, fallback-value)\`**
  \`\`\`css
  button {
    background-color: var(--brand-orange);
    border-radius: var(--card-radius);
  }
  \`\`\`
- **Instant Dark Mode Theming:**
  \`\`\`css
  :root { --bg: #ffffff; --text: #111827; }
  .dark { --bg: #232d36; --text: #f9fafb; }
  body { background-color: var(--bg); color: var(--text); }
  \`\`\`

### 2. CSS Transitions (Smooth State Changes)
Transitions interpolate property values smoothly between two states (e.g. normal and \`:hover\`):
- **\`transition-property\`:** Property being animated (\`background-color\`, \`transform\`, \`all\`).
- **\`transition-duration\`:** Time duration (\`0.3s\`, \`250ms\`).
- **\`transition-timing-function\`:** Acceleration curve (\`ease\`, \`linear\`, \`ease-in-out\`).
- **\`transition-delay\`:** Waiting time before starting (\`0.1s\`).
- **Shorthand:** \`transition: transform 0.25s ease, background-color 0.2s;\`

### 3. CSS 2D & 3D Transforms (\`transform\`)
Modifies visual geometry **without triggering browser reflow** (high performance!):
- **\`translate(x, y)\`:** Shifts element horizontally and vertically (\`translateY(-5px)\`).
- **\`scale(x, y)\`:** Enlarges or shrinks element (\`scale(1.05)\` is 5% zoom).
- **\`rotate(deg)\`:** Rotates clockwise or counter-clockwise (\`rotate(45deg)\`, \`rotate(-15deg)\`).
- **\`skew(x, y)\`:** Distorts element along an angle (\`skewX(10deg)\`).
- **\`transform-origin\`:** The pivot point around which transforms occur (Default: \`50% 50%\` center).

### 4. Keyframe Animations (\`@keyframes\`)
For complex multi-step repeating animations:
\`\`\`css
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.08); }
  100% { transform: scale(1); }
}
.live-badge {
  animation: pulse 2s infinite ease-in-out;
}
\`\`\`
- **Accessibility Check:** Always respect \`@media (prefers-reduced-motion: reduce)\` for users with motion sensitivity!`,
    syntax: `/* Variables */
:root {
  --primary: #f19a27;
}
.btn {
  background: var(--primary);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.btn:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 10px 15px rgba(0,0,0,0.1);
}`,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS Variables, Transitions & Transforms</title>
  <style>
    /* Global CSS Custom Properties */
    :root {
      --primary-color: #f19a27;
      --navy-color: #232850;
      --surface-color: #ffffff;
      --border-radius: 12px;
      --transition-speed: 0.25s;
    }

    body {
      font-family: sans-serif;
      padding: 30px;
      background-color: #fff8f3;
    }

    /* Interactive Action Card */
    .interactive-card {
      width: 300px;
      background: var(--surface-color);
      border: 2px solid #e5e7eb;
      border-radius: var(--border-radius);
      padding: 24px;
      box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
      
      /* Smooth Transition Declaration */
      transition: transform var(--transition-speed) ease, 
                  border-color var(--transition-speed) ease,
                  box-shadow var(--transition-speed) ease;
    }

    /* Hover Micro-interaction with Transform */
    .interactive-card:hover {
      transform: translateY(-6px) scale(1.01);
      border-color: var(--primary-color);
      box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1);
    }

    /* Interactive Button */
    .btn {
      display: inline-block;
      margin-top: 16px;
      padding: 10px 20px;
      background-color: var(--navy-color);
      color: white;
      text-decoration: none;
      border-radius: 8px;
      font-weight: bold;
      transition: background-color var(--transition-speed), transform 0.15s;
    }
    .btn:hover {
      background-color: var(--primary-color);
      color: #111827;
      transform: rotate(-2deg);
    }
  </style>
</head>
<body>
  <div class="interactive-card">
    <h3 style="color: var(--navy-color); margin-top: 0;">Interactive UI Card</h3>
    <p style="color: #64748b; font-size: 14px;">
      Powered by CSS Variables (:root), smooth 2D Transforms (translate, rotate), and Transitions!
    </p>
    <a href="#" class="btn">Hover Me!</a>
  </div>
</body>
</html>`,
    lineByLine: [
      { line: "line 8: :root { --primary-color: #f19a27; ... }", explanation: "Defines reusable design tokens at document root level so any selector can consume them via var()." },
      { line: "line 29: transition: transform var(--transition-speed) ease ...", explanation: "Instructs the browser to smoothly animate transform, border, and shadow over 0.25 seconds." },
      { line: "line 36: transform: translateY(-6px) scale(1.01);", explanation: "Simultaneously shifts the card 6px upward and expands it by 1% on hover with zero layout reflow." },
      { line: "line 53: transform: rotate(-2deg);", explanation: "Adds a playful 2-degree counter-clockwise tilt when hovering the action button." }
    ],
    outputExplanation: "कार्ड पर माउस ले जाने पर वह बहुत स्मूथली ऊपर उठेगा और उसका बॉर्डर ऑरेंज हो जाएगा; बटन पर माउस ले जाने पर बटन का रंग नेवी से ऑरेंज बदलेगा और वह हल्का सा तिरछा (Rotate) होगा।",
    realWorldAnalogy: "वेबसाइट में बिना ट्रांजिशन के रंग बदलना कमरे की लाइट का स्विच अचानक ऑन-ऑफ करने जैसा है; ट्रांजिशन उस लाइट पर डिमर (Dimmer) लगाने जैसा है जिससे रोशनी धीरे-धीरे बढ़ती है।",
    importantPoints: [
      "CSS वेरिएबल्स के नाम के आगे हमेशा दो डैश (`--`) लगाना अनिवार्य है।",
      "वेरिएबल की वैल्यू को पढ़ने के लिए `var(--name, fallback)` फंक्शन का उपयोग किया जाता है।",
      "ट्रांजिशन केवल तभी काम करता है जब किसी प्रॉपर्टी की दो अलग-अलग स्थितियां (जैसे नॉर्मल और `:hover`) मौजूद हों।",
      "`transform` लेआउट के फ्लो को प्रभावित नहीं करता, इसलिए यह बहुत तेज और परफॉर्मेंस-फ्रेंडली होता है।",
      "2D ट्रांसफॉर्म्स: `translate()`, `scale()`, `rotate()`, `skew()`."
    ],
    commonMistakes: [
      "वेरिएबल के नाम में दो डैश भूल जाना (उदा. `--primary` के बजाय `primary` लिख देना)।",
      "ट्रांजिशन को `:hover` ब्लॉक के अंदर लिख देना (जिससे माउस हटाने पर ट्रांजिशन झटके से वापस आ जाता है; ट्रांजिशन हमेशा बेस सेलेक्टर में लिखना चाहिए)।"
    ],
    examPerspective: "O-Level में 'CSS Variables की घोषणा कैसे होती है?' (`:root`), 'var() फंक्शन का उपयोग', 'Transition के घटक' (property, duration, timing), और '2D Transforms के प्रकार' (rotate, scale, translate) पर प्रश्न पूछे जाते हैं।",
    quickRevision: "Variables: :root { --var: val; } and var(--var). Transitions: property duration timing-function delay (smooth state change). Transforms: translate(x,y), scale(), rotate(deg), skew(). High performance.",
    relatedTopics: ["css-box-model", "css-responsive-design-and-units", "css-image-gallery"],
    practiceTask: "एक बटन बनाएं जिसका बैकग्राउंड नेवी हो, और माउस ले जाने पर वह `transform: scale(1.1);` के साथ 10% बड़ा हो जाए और ट्रांजिशन 0.3 सेकंड का हो।",
    quiz: [
      {
        question: "CSS कस्टम प्रॉपर्टी (Variable) की घोषणा किस उपसर्ग (Prefix) के साथ की जाती है?",
        options: ["$", "@", "--", "#"],
        correctAnswer: "C",
        explanation: "CSS कस्टम प्रॉपर्टीज (Variables) हमेशा दो डैश (--) के साथ घोषित की जाती हैं, जैसे --brand-color।"
      },
      {
        question: "CSS में घोषित किए गए वेरिएबल का मान प्राप्त करने के लिए किस फंक्शन का उपयोग किया जाता है?",
        options: ["get()", "var()", "val()", "use()"],
        correctAnswer: "B",
        explanation: "var() फंक्शन का उपयोग CSS वेरिएबल के मान को कॉल करने के लिए किया जाता है, जैसे var(--brand-color)।"
      },
      {
        question: "किसी तत्व को 45 डिग्री घुमाने के लिए किस ट्रांसफॉर्म फंक्शन का उपयोग किया जाता है?",
        options: ["rotate(45deg)", "spin(45)", "turn(45)", "tilt(45deg)"],
        correctAnswer: "A",
        explanation: "transform: rotate(45deg) किसी तत्व को 45 डिग्री दक्षिणावर्त (Clockwise) घुमाता है।"
      }
    ]
  }
];
