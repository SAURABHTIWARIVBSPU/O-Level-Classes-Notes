// Unit 4: CSS - Complete Topic Notes

export const unit4Topics = [
  {
    "id": "u4-t1",
    "slug": "introduction-to-css",
    "unit": 4,
    "unitSlug": "unit-4",
    "unitTitle": "Cascading Style Sheets (CSS)",
    "title": "Introduction to CSS",
    "hindiTitle": "CSS का परिचय एवं लाभ",
    "definitionEnglish": "CSS (Cascading Style Sheets) is a style sheet language used to describe the presentation, layout, colors, typography, and responsive adaptation of documents written in HTML or XML.",
    "definitionHindi": "CSS (कैस्केडिंग स्टाइल शीट्स) एक स्टाइल शीट भाषा है जिसका उपयोग HTML या XML में लिखे गए दस्तावेज़ों के प्रस्तुतीकरण, लेआउट, रंगों, फोंट्स और रिस्पॉन्सिव अनुकूलन को नियंत्रित करने के लिए किया जाता है।",
    "simpleWords": "HTML यदि घर की ईंटें और सीमेंट (कंकाल) है, तो CSS उस घर का पेंट, पर्दे, टाइल्स और इंटीरियर डिजाइन है जो उसे सुंदर और आकर्षक बनाता है।",
    "whyImportant": "बिना CSS के वेबसाइट केवल सादा ब्लैक-एंड-व्हाइट टेक्स्ट दिखेगी। CSS ही वेब को सुंदर, आधुनिक और यूजर-फ्रेंडली बनाती है।",
    "detailedExplanation": "### 1. Inception and Standardization of CSS\n- **1994:** Proposed by **Håkon Wium Lie** while working at CERN with Tim Berners-Lee.\n- **1996:** Standardized as CSS Level 1 by the W3C.\n- **Core Principle:** Strict separation of document structure (HTML) from document presentation and visual styling (CSS).\n\n### 2. The CSS Rule-Set Anatomy\nEvery standard CSS rule consists of a **Selector** and a **Declaration Block**:\n\n```css\n/* Selector */\nh1 {\n  /* Property : Value ; */\n  color: #2563eb;\n  font-size: 2.5rem;\n  text-align: center;\n}\n```\n\n### 3. Key Benefits of CSS\n1. **Consistency & Maintainability:** Change a single color value in an external stylesheet to update thousands of web pages instantly.\n2. **Bandwidth Optimization:** External stylesheets are cached by browsers after the first page load, reducing network data transfer.\n3. **Multi-Device Support:** Media queries allow the same HTML document to render customized layouts for mobile, tablet, desktop, and print media.",
    "syntax": "CSS Ruleset Syntax:\nselector {\n  property: value;\n  property: value;\n}\nExample:\nh1 {\n  color: #0284c7;\n  font-size: 24px;\n  text-align: center;\n}",
    "codeExample": "<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    /* CSS Ruleset applied to h1 */\n    h1 {\n      color: #0284c7;\n      font-family: Arial, sans-serif;\n      text-transform: uppercase;\n      letter-spacing: 1px;\n    }\n  </style>\n</head>\n<body>\n  <h1>Introduction to CSS Mastery</h1>\n  <p>The heading above is styled using a standard CSS ruleset.</p>\n</body>\n</html>",
    "outputExplanation": "हेडिंग बड़े अक्षरों (Uppercase) में, नीले रंग में और सुंदर फॉन्ट के साथ प्रदर्शित होगी।",
    "realWorldAnalogy": "जैसे एक ही सादे पुतले (Mannequin) को अलग-अलग कपड़े और गहने पहनाकर अलग-अलग लुक दिया जा सकता है, वैसे ही एक ही HTML को अलग CSS से बिल्कुल अलग रूप दिया जा सकता है।",
    "importantPoints": [
      "CSS का पूर्ण रूप: Cascading Style Sheets.",
      "आविष्कारक: Håkon Wium Lie (1994)।",
      "फाइल एक्सटेंशन: .css.",
      "CSS में कमेंट्स केवल /* comment */ रूप में लिखे जाते हैं।"
    ],
    "commonMistakes": [
      "प्रॉपर्टी और वैल्यू के बीच कोलन (:) के बजाय बराबर (=) लगा देना (उदा. `color = red;` अमान्य है, सही `color: red;` है)।",
      "नियम के अंत में सेमीकोलन (;) भूल जाना।"
    ],
    "examPerspective": "CSS का पूरा नाम, आविष्कारक, आविष्कार का वर्ष, और Cascading की परिभाषा पर हर साल प्रश्न पूछे जाते हैं।",
    "quickRevision": "CSS वेबपेज का रूप-रंग तय करती है। आविष्कारक: Håkon Wium Lie (1994)। सिंटैक्स: selector { property: value; }.",
    "relatedTopics": [
      "types-of-css",
      "css-selectors",
      "css-properties-background-block-box-list-border-positioning"
    ],
    "practiceTask": "एक HTML पेज में h1, p, और a टैग्स को अलग-अलग रंगों में स्टाइल करने के लिए इंटरनल CSS लिखें।"
  },
  {
    "id": "u4-t2",
    "slug": "types-of-css",
    "unit": 4,
    "unitSlug": "unit-4",
    "unitTitle": "Cascading Style Sheets (CSS)",
    "title": "Types of CSS (Inline, Internal, External)",
    "hindiTitle": "CSS के प्रकार (Inline, Internal, External) एवं प्राथमिकता",
    "definitionEnglish": "CSS can be applied to HTML documents in three fundamental ways: Inline CSS (using the 'style' attribute on individual HTML tags), Internal/Embedded CSS (using the <style> tag within the <head> section), and External CSS (using a separate .css file linked via the <link> tag).",
    "definitionHindi": "HTML दस्तावेज़ों में CSS को तीन मुख्य तरीकों से लागू किया जाता है: Inline CSS (व्यक्तिगत HTML टैग पर 'style' विशेषता द्वारा), Internal CSS (<head> सेक्शन में <style> टैग द्वारा), और External CSS (एक अलग .css फाइल बनाकर <link> टैग द्वारा जोड़ना)।",
    "simpleWords": "स्टाइल लगाने के 3 तरीके हैं: 1. सीधे टैग के अंदर लिखना (Inline), 2. पेज के ऊपर सिर (<head>) में लिखना (Internal), या 3. अलग फाइल बनाकर लिंक करना (External - सबसे उत्तम तरीका)।",
    "whyImportant": "बड़ी वेबसाइटों में कोड का प्रबंधन और प्राथमिकताओं (Cascading Priority) का टकराव हल करने के लिए इन तीनों तरीकों की गहरी समझ अनिवार्य है।",
    "detailedExplanation": "### 1. The Three Methods of Inserting CSS\n| Type | Implementation Syntax | Scope & Use Case | Priority Weight |\n| :--- | :--- | :--- | :--- |\n| **Inline CSS** | `<p style=\"color: red;\">` | Single HTML element. Quick testing/debugging. | Highest |\n| **Internal / Embedded CSS** | Placed inside `<style>` tags in `<head>` | Single HTML document. Standalone landing pages. | Medium |\n| **External CSS** | Linked via `<link rel=\"stylesheet\" href=\"style.css\">` | Entire website across multiple pages. Best practice. | Standard |\n\n### 2. The Cascade & Specificity Hierarchy\nWhen conflicting styles target the same element, browsers resolve precedence in this order:\n1. **`!important` flag** (Overrides all other rules).\n2. **Inline styles** (Applied directly via `style=\"\"` attribute).\n3. **ID selectors** (`#header`).\n4. **Class, pseudo-class, attribute selectors** (`.btn`, `:hover`, `[type=\"text\"]`).\n5. **Element & pseudo-element selectors** (`p`, `h1`, `::before`).\n6. **Universal selector** (`*`).",
    "syntax": "<!-- 1. Inline CSS -->\n<h1 style=\"color: blue;\">Inline</h1>\n\n<!-- 2. Internal CSS -->\n<head>\n  <style> h1 { color: green; } </style>\n</head>\n\n<!-- 3. External CSS -->\n<head>\n  <link rel=\"stylesheet\" href=\"mystyle.css\">\n</head>",
    "codeExample": "<!DOCTYPE html>\n<html>\n<head>\n  <!-- Internal CSS -->\n  <style>\n    p { color: green; font-size: 16px; }\n  </style>\n</head>\n<body>\n  <!-- This p uses Internal CSS (Green) -->\n  <p>This text is green via Internal CSS.</p>\n\n  <!-- This p uses Inline CSS which overrides Internal CSS! -->\n  <p style=\"color: red; font-weight: bold;\">\n    This text is RED because Inline CSS has higher priority than Internal CSS!\n  </p>\n</body>\n</html>",
    "outputExplanation": "पहला पैराग्राफ हरा दिखेगा, लेकिन दूसरा पैराग्राफ लाल दिखेगा क्योंकि Inline CSS की प्राथमिकता Internal CSS से अधिक होती है।",
    "realWorldAnalogy": "External CSS पूरे स्कूल की यूनिफॉर्म नीति जैसी है; Internal CSS किसी एक क्लास की विशेष टी-शर्ट जैसी है; और Inline CSS किसी छात्र द्वारा अपनी शर्ट पर लगाया गया व्यक्तिगत बैच है जो सबसे ऊपर दिखता है।",
    "importantPoints": [
      "औद्योगिक विकास में हमेशा External CSS का उपयोग किया जाता है।",
      "External CSS फाइल में कभी भी <style> टैग नहीं लिखा जाता।",
      "प्राथमिकता क्रम: Inline > Internal > External > Browser Default.",
      "!important किसी भी अन्य नियम को ओवरराइड कर देता है।"
    ],
    "commonMistakes": [
      "एक्सटर्नल .css फाइल के अंदर `<style>` टैग लिख देना (सीएसएस फाइल में केवल शुद्ध रूल्स होने चाहिए)।",
      "HTML में `<link>` टैग के बजाय `<style src=\"...\">` लिखने की कोशिश करना।"
    ],
    "examPerspective": "CSS के तीन प्रकार, उनकी प्राथमिकताओं का क्रम, और <link> टैग के सिंटैक्स पर परीक्षा में 100% प्रश्न आता है।",
    "quickRevision": "3 प्रकार: Inline (style=\"\"), Internal (<style> in head), External (.css linked via <link>). प्राथमिकता: Inline > Internal > External.",
    "relatedTopics": [
      "introduction-to-css",
      "css-selectors",
      "head-section-and-elements"
    ],
    "practiceTask": "एक ही पैराग्राफ पर Internal (नीला) और Inline (लाल) दोनों स्टाइल लगाकर देखें कि कौन सा रंग प्रभावी होता है।"
  },
  {
    "id": "u4-t3",
    "slug": "css-selectors",
    "unit": 4,
    "unitSlug": "unit-4",
    "unitTitle": "Cascading Style Sheets (CSS)",
    "title": "CSS Selectors: Universal, ID, Tag, Class, Sub Selector, Attribute, Group",
    "hindiTitle": "CSS चयनकर्ता (Universal, ID, Tag, Class, Sub Selector, Attribute, Group)",
    "definitionEnglish": "CSS Selectors define the HTML elements to which a set of CSS rules applies, including Universal (*), Tag/Type, ID (#), Class (.), Sub/Descendant, Child (>), Attribute ([attr=val]), and Grouping (comma-separated) selectors.",
    "definitionHindi": "CSS सिलेक्टर्स (चयनकर्ता) उन HTML तत्वों की पहचान करते हैं जिन पर CSS नियम लागू किए जाने हैं; इनमें यूनिवर्सल (*), टैग, ID (#), क्लास (.), सब-सिलेक्टर (डिसेंडेंट), चाइल्ड (>), एट्रिब्यूट, और ग्रुप सिलेक्टर शामिल हैं।",
    "simpleWords": "सिलेक्टर वह निशाना साधने वाला तीरंदाज है जो बताता है कि पेज के किस खास शब्द, बटन या बॉक्स को रंगना है।",
    "whyImportant": "सही सिलेक्टर का चयन कोड को छोटा, तेज और पेशेवर बनाता है। O-Level परीक्षा में सिलेक्टर्स के सिंबल्स (*, #, .) पर सीधे प्रश्न आते हैं।",
    "detailedExplanation": "### 1. Classification of Official CSS Selectors\n1. **Universal Selector (`*`):** Targets every element on the page (commonly used for CSS resets like `* { box-sizing: border-box; margin: 0; }`).\n2. **Type / Element Selector (`p`, `h2`):** Matches all elements of a given tag name.\n3. **Class Selector (`.card`):** Matches elements having the specified class attribute; reusable across multiple elements.\n4. **ID Selector (`#navbar`):** Matches a single unique element with the matching `id` attribute.\n5. **Grouping Selector (`h1, h2, h3`):** Applies identical rules to multiple selectors separated by commas.\n6. **Combinators:**\n   - **Descendant (`div p`):** Matches any `<p>` inside a `<div>`.\n   - **Child (`div > p`):** Matches direct children only.\n   - **Adjacent Sibling (`h1 + p`):** Matches the immediate next sibling.\n7. **Attribute Selector (`input[type=\"email\"]`):** Matches elements based on attribute presence or value.",
    "syntax": "CSS Selectors Quick Reference:\n*               -> Universal\nelement         -> Tag Selector\n#uniqueId       -> ID Selector\n.reusableClass  -> Class Selector\nparent child    -> Sub/Descendant Selector\nelement[attr]   -> Attribute Selector\nsel1, sel2      -> Group Selector",
    "codeExample": "<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    /* 1. Universal */\n    * { box-sizing: border-box; }\n    /* 2. Tag */\n    h2 { color: #0284c7; }\n    /* 3. ID */\n    #main-title { font-size: 28px; text-decoration: underline; }\n    /* 4. Class */\n    .highlight { background-color: #fef08a; padding: 2px 6px; }\n    /* 5. Sub-selector (p inside .box) */\n    .box p { font-style: italic; }\n    /* 6. Attribute */\n    input[type=\"password\"] { background-color: #ffe4e6; }\n    /* 7. Group */\n    th, td { border: 1px solid #cbd5e1; padding: 6px; }\n  </style>\n</head>\n<body>\n  <h2 id=\"main-title\">CSS Selectors in Action</h2>\n  <div class=\"box\">\n    <p>This paragraph is italic because of the sub-selector!</p>\n    <span class=\"highlight\">Class highlight applied!</span>\n  </div>\n  <p>Password: <input type=\"password\" value=\"secret\"></p>\n</body>\n</html>",
    "outputExplanation": "ID वाला टाइटल अंडरलाइन दिखेगा, क्लास वाला स्पैन पीला दिखेगा, सब-सिलेक्टर वाला पैराग्राफ तिरछा दिखेगा, और पासवर्ड बॉक्स हल्का गुलाबी दिखेगा।",
    "realWorldAnalogy": "Universal = पूरे स्कूल के सभी छात्र; Tag = कक्षा 10 के सभी छात्र; Class = क्रिकेट टीम के 11 खिलाड़ी; ID = रोल नंबर 101 वाला अकेला छात्र।",
    "importantPoints": [
      "ID सिलेक्टर के लिए # और Class सिलेक्टर के लिए . का उपयोग होता है।",
      "एक पेज में ID हमेशा Unique होती है, जबकि Class Reusable होती है।",
      "सब-सिलेक्टर में दोनों के बीच खाली जगह (Space) होती है।",
      "ग्रुपिंग सिलेक्टर में कॉमा (,) का उपयोग होता है।"
    ],
    "commonMistakes": [
      "ID के लिए डॉट (.) और Class के लिए हैश (#) लगा देना।",
      "एक ही पेज में एक ही ID का नाम दो अलग-अलग एलिमेंट्स को दे देना।"
    ],
    "examPerspective": "Universal (*), ID (#), Class (.), Descendant (space) और Group (comma) के प्रतीकों पर बहुविकल्पीय प्रश्न 100% आते हैं।",
    "quickRevision": "* = सभी; # = ID; . = Class; स्पेस = सब-सिलेक्टर; कॉमा = ग्रुपिंग; [attr] = एट्रिब्यूट।",
    "relatedTopics": [
      "types-of-css",
      "css-properties-background-block-box-list-border-positioning",
      "id-vs-class-selector"
    ],
    "practiceTask": "एक पेज में 3 पैराग्राफ बनाएं: पहले को ID से लाल, दूसरे को Class से हरा, और तीसरे को Tag से नीला रंग दें।"
  },
  {
    "id": "u4-t4",
    "slug": "css-properties-background-block-box-list-border-positioning",
    "unit": 4,
    "unitSlug": "unit-4",
    "unitTitle": "Cascading Style Sheets (CSS)",
    "title": "CSS Properties: Background, Block, Box, List, Border, Positioning Properties",
    "hindiTitle": "CSS प्रॉपर्टीज (Background, Block, Box Model, List, Border, Positioning)",
    "definitionEnglish": "CSS properties control the visual formatting of elements across six core categories: Backgrounds (color, image, repeat, size), Block/Typography (display, text-align, line-height), Box Model (content, padding, border, margin), Lists (style-type, position), Borders (width, style, color, radius), and Positioning (static, relative, absolute, fixed, sticky, z-index).",
    "definitionHindi": "CSS प्रॉपर्टीज तत्वों के दृश्य प्रारूप को छह मुख्य श्रेणियों में नियंत्रित करती हैं: Background (रंग, इमेज, साइज), Block/Typography (डिस्प्ले, अलाइनमेंट), Box Model (कंटेंट, पैडिंग, बॉर्डर, मार्जिन), List, Border (मोटाई, स्टाइल, रेडियस), और Positioning (static, relative, absolute, fixed, sticky, z-index)।",
    "simpleWords": "यह CSS के 6 सबसे शक्तिशाली हथियार हैं जिनसे बैकग्राउंड में रंग या फोटो लगाई जाती है, डिब्बों के चारों तरफ जगह छोड़ी जाती है, और किसी भी चीज को स्क्रीन पर ऊपर, नीचे या स्क्रॉल करने पर भी एक जगह चिपका कर रखा जा सकता है।",
    "whyImportant": "इन 6 प्रॉपर्टी समूहों पर महारत हासिल किए बिना कोई भी व्यक्ति वेब डिजाइनर नहीं बन सकता। O-Level परीक्षा का 40% CSS भाग इन्हीं पर आधारित होता है।",
    "detailedExplanation": "### 1. The Definitive CSS Box Model (Crucial Topic)\nEvery HTML element is treated as a rectangular box consisting of 4 distinct layers:\n1. **Content Area:** The actual text, image, or child element dimensions (`width` × `height`).\n2. **Padding:** Transparent space surrounding the content inside the border.\n3. **Border:** The perimeter line surrounding the padding (`border: 2px solid #333`).\n4. **Margin:** Transparent clearance outside the border separating the element from neighbors.\n\n### 2. `box-sizing: border-box` vs `content-box`\n- **`content-box` (Default):** Adding padding and border increases the total element footprint (`Total Width = Width + Padding + Border`).\n- **`border-box` (Industry Standard):** Padding and borders are absorbed inside the defined width/height, preventing layout breakage.\n\n### 3. CSS Positioning Modes (`position`)\n- **`static`:** Default normal document flow.\n- **`relative`:** Positioned relative to its normal position without disturbing surroundings.\n- **`absolute`:** Removed from normal flow, positioned relative to its nearest non-static positioned ancestor.\n- **`fixed`:** Positioned relative to the browser viewport; remains sticky during scrolling.\n- **`sticky`:** Toggles between relative and fixed based on the user's scroll position.",
    "syntax": "/* The CSS Box Model & Shorthand */\npadding: 10px 20px;          /* Top/Bottom=10px, Left/Right=20px */\nmargin: 20px auto;           /* Center-align block element */\nborder: 1px solid #cbd5e1;\nposition: fixed; top: 0; left: 0; width: 100%; z-index: 1000;",
    "codeExample": "<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    /* Sticky Navigation Bar */\n    .navbar {\n      position: sticky;\n      top: 0;\n      background: #0284c7;\n      color: white;\n      padding: 12px 20px;\n      z-index: 100;\n    }\n    /* The Box Model Card */\n    .box-card {\n      width: 260px;\n      margin: 30px auto;           /* Margin: Outside border */\n      border: 3px solid #0369a1;    /* Border: Around padding */\n      padding: 20px;               /* Padding: Inside border */\n      border-radius: 12px;\n      background-color: #f0f9ff;\n      box-shadow: 0 4px 6px rgba(0,0,0,0.1);\n    }\n  </style>\n</head>\n<body>\n  <div class=\"navbar\"><b>Sticky Navbar (Stays on Top when scrolling)</b></div>\n  <div class=\"box-card\">\n    <h3 style=\"margin-top:0;\">CSS Box Model</h3>\n    <p>Content is inside Padding, wrapped by Border, spaced by Margin.</p>\n  </div>\n  <div style=\"height: 500px; padding: 20px;\">Scroll down to test sticky navbar...</div>\n</body>\n</html>",
    "outputExplanation": "नेविगेशन बार स्क्रॉल करने पर भी स्क्रीन के सबसे ऊपर चिपका रहेगा, और बॉक्स मॉडल कार्ड में मार्जिन, बॉर्डर व पैडिंग स्पष्ट दिखेंगे।",
    "realWorldAnalogy": "बॉक्स मॉडल एक कीमती घड़ी के गिफ्ट बॉक्स जैसा है: घड़ी (Content), चारों तरफ थर्माकोल की रुई (Padding), गत्ते का डिब्बा (Border), और डिब्बे के बाहर पैकिंग पेपर व टेबल की जगह (Margin)।",
    "importantPoints": [
      "बॉक्स मॉडल का सही क्रम: Content -> Padding -> Border -> Margin.",
      "डिफ़ॉल्ट स्थिति: position: static.",
      "स्क्रॉल करने पर भी स्थिर रहने वाला: position: fixed.",
      "3D स्टैकिंग ऑर्डर तय करने वाली प्रॉपर्टी: z-index.",
      "मार्जिन बॉर्डर के बाहर होता है, पैडिंग बॉर्डर के अंदर होती है।"
    ],
    "commonMistakes": [
      "मार्जिन और पैडिंग के कार्य को आपस में उलझा देना (पैडिंग बैकग्राउंड रंग लेती है, मार्जिन पारदर्शी होता है)।",
      "position: absolute लगाने पर पैरेंट को position: relative देना भूल जाना (जिससे एलिमेंट पूरे पेज के कोने में भाग जाता है)।"
    ],
    "examPerspective": "बॉक्स मॉडल के 4 घटक, static vs fixed vs absolute पोजीशनिंग, और z-index पर हर साल 10 से 15 नंबर के प्रश्न पूछे जाते हैं।",
    "quickRevision": "बॉक्स मॉडल = Content + Padding + Border + Margin। पोजीशनिंग: static (डिफ़ॉल्ट), fixed (स्थिर), relative, absolute, sticky.",
    "relatedTopics": [
      "css-selectors",
      "css-menu-design",
      "css-image-gallery"
    ],
    "practiceTask": "एक ऐसा फ्लोटिंग 'Back to Top' बटन बनाएं जो `position: fixed` और `bottom: 20px; right: 20px;` के साथ हमेशा स्क्रीन के कोने में रहे।"
  },
  {
    "id": "u4-t5",
    "slug": "css-lists",
    "unit": 4,
    "unitSlug": "unit-4",
    "unitTitle": "Cascading Style Sheets (CSS)",
    "title": "CSS Lists",
    "hindiTitle": "CSS लिस्ट स्टाइलिंग (Custom Bullets & Markers)",
    "definitionEnglish": "CSS List properties style both ordered and unordered lists, controlling marker appearance (list-style-type), marker position inside or outside the flow (list-style-position), custom image markers (list-style-image), or removing markers entirely (list-style: none) for menus.",
    "definitionHindi": "CSS लिस्ट प्रॉपर्टीज ऑर्डर्ड और अनऑर्डर्ड लिस्ट्स को स्टाइल करती हैं, जो बुलेट मार्कर के रूप (list-style-type), मार्कर की स्थिति (list-style-position), कस्टम इमेज मार्कर (list-style-image), या मेन्यू बनाने हेतु बुलेट्स को पूरी तरह हटाने (list-style: none) को नियंत्रित करती हैं।",
    "simpleWords": "साधारण HTML में केवल काले गोल बुलेट आते हैं। CSS से आप बुलेट की जगह अपनी पसंद का तीर, इमोजी या छोटी इमेज लगा सकते हैं, या नेविगेशन मेन्यू बनाने के लिए बुलेट्स को पूरी तरह हटा सकते हैं।",
    "whyImportant": "वेबसाइट के आधुनिक मेन्यू, फीचर बुलेट पॉइंट्स, और प्राइसिंग कार्ड्स सभी CSS लिस्ट प्रॉपर्टीज द्वारा ही सजाए जाते हैं।",
    "detailedExplanation": "### 1. Styling Lists with CSS Properties\n1. **`list-style-type`:** Defines the marker style:\n   - Unordered: `disc`, `circle`, `square`, `none`.\n   - Ordered: `decimal`, `lower-alpha`, `upper-roman`.\n2. **`list-style-position`:**\n   - `inside`: List marker is drawn inside the content box.\n   - `outside` (Default): List marker hangs outside the text content.\n3. **`list-style-image`:** Replaces standard bullets with custom image icons (`url('icon.png')`).\n4. **List Navigation Bar Pattern:**\n   ```css\n   ul.nav {\n     list-style-type: none;\n     margin: 0;\n     padding: 0;\n     display: flex;\n   }\n   ```",
    "syntax": "/* Standard Navigation Reset */\nul.nav-menu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}",
    "codeExample": "<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    /* Custom Styled Feature List */\n    ul.features {\n      list-style-type: none;\n      padding: 0;\n    }\n    ul.features li {\n      padding: 8px 12px;\n      margin-bottom: 6px;\n      background: #f1f5f9;\n      border-left: 4px solid #0284c7;\n      border-radius: 4px;\n    }\n    /* Adding bullet prefix via pseudo-element */\n    ul.features li::before {\n      content: \"> \";\n      color: #16a34a;\n      font-weight: bold;\n    }\n  </style>\n</head>\n<body>\n  <h2>O-Level Course Highlights</h2>\n  <ul class=\"features\">\n    <li>Complete 8-Unit Official Syllabus Coverage</li>\n    <li>200 Chapter-Wise MCQs with Explanations</li>\n    <li>100 Golden One-Liners for Fast Revision</li>\n    <li>Hands-on Practical Lab Exercises</li>\n  </ul>\n</body>\n</html>",
    "outputExplanation": "सादे बुलेट्स की जगह हरे रंग का कस्टम बुलेट (> ) और नीले बॉर्डर वाले सुंदर कार्ड्स दिखेंगे।",
    "realWorldAnalogy": "जैसे एक सादे नोटपैड पर हाथ से स्टार या टिक का निशान बनाकर जरूरी काम लिखे जाते हैं, वैसे ही CSS लिस्ट को आकर्षक बनाती है।",
    "importantPoints": [
      "list-style: none का उपयोग नेविगेशन मेन्यू में बुलेट्स हटाने हेतु अनिवार्य है।",
      "list-style-position: inside बुलेट को टेक्स्ट ब्लॉक के अंदर ले आता है।",
      "::before स्यूडो-एलिमेंट से कस्टम फॉन्ट आइकॉन्स लगाए जा सकते हैं।"
    ],
    "commonMistakes": [
      "`list-style-type: none` करने के बाद भी बाएँ हाथ पर गैप रहना (ब्राउज़र का डिफ़ॉल्ट `padding-left: 40px` हटाना भी जरूरी होता है: `padding: 0`)."
    ],
    "examPerspective": "प्रश्न: 'HTML लिस्ट से बुलेट्स हटाने के लिए कौन सी CSS प्रॉपर्टी उपयोग होती है?' (list-style-type: none).",
    "quickRevision": "list-style-type मार्कर बदलता है, list-style: none बुलेट हटाता है, list-style-image कस्टम इमेज लगाता है।",
    "relatedTopics": [
      "lists",
      "css-menu-design",
      "css-selectors"
    ],
    "practiceTask": "एक अनऑर्डर्ड लिस्ट बनाएं और CSS से बुलेट की जगह '->' एरो या कस्टम बुलेट स्टाइल लगाएं।"
  },
  {
    "id": "u4-t6",
    "slug": "css-tables",
    "unit": 4,
    "unitSlug": "unit-4",
    "unitTitle": "Cascading Style Sheets (CSS)",
    "title": "CSS Tables",
    "hindiTitle": "CSS टेबल डिजाइन (Styling, Borders, Zebra Striping & Hover)",
    "definitionEnglish": "CSS table styling transforms plain HTML tables into attractive, legible data matrices by controlling border-collapse, spacing, alternating row colors (Zebra striping using :nth-child), hover highlighting (:hover), and responsive table wrappers.",
    "definitionHindi": "CSS टेबल स्टाइलिंग साधारण HTML टेबल्स को सुंदर और आसानी से पढ़ी जाने वाली डेटा तालिकाओं में बदलती है; इसमें border-collapse, पैडिंग, एकांतर पंक्ति रंग (Zebra striping via :nth-child), हॉवर प्रभाव (:hover) और रिस्पॉन्सिव टेबल रैपर्स शामिल हैं।",
    "simpleWords": "HTML की टेबल पुरानी 1995 जैसी दोहरी काली लाइनों वाली दिखती है। CSS से हम उसकी दोहरी लाइनों को जोड़कर एक कर देते हैं, एक पंक्ति को सफेद और अगली को हल्की नीली (Zebra Striping) बनाते हैं, और माउस ले जाने पर पंक्ति चमकने लगती है।",
    "whyImportant": "डैशबोर्ड्स, वित्तीय रिपोर्टों और परीक्षा परिणामों को आधुनिक और साफ-सुथरा दिखाने के लिए CSS टेबल डिजाइनिंग अत्यंत आवश्यक है।",
    "detailedExplanation": "### 1. Key CSS Properties for Data Tables\n1. **`border-collapse: collapse;`:** Merges adjacent cell borders into a single clean border instead of separated double lines.\n2. **Zebra Striping:** Uses the `:nth-child(even)` or `:nth-child(odd)` pseudo-class for alternating row colors:\n   ```css\n   tr:nth-child(even) { background-color: #f8fafc; }\n   tr:hover { background-color: #f1f5f9; }\n   ```\n3. **Responsive Table Containers:** Wrapping tables in a container with `overflow-x: auto` ensures clean horizontal scrolling on small mobile screens without distorting the page layout.",
    "syntax": "/* Modern Responsive Clean Table */\ntable {\n  width: 100%;\n  border-collapse: collapse;\n}\nth, td {\n  padding: 12px;\n  border-bottom: 1px solid #e2e8f0;\n}\ntr:nth-child(even) { background-color: #f8fafc; }\ntr:hover { background-color: #f0fdf4; }",
    "codeExample": "<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    table {\n      width: 100%;\n      border-collapse: collapse;\n      font-family: sans-serif;\n    }\n    th {\n      background-color: #0284c7;\n      color: white;\n      padding: 12px;\n      text-align: left;\n    }\n    td {\n      padding: 10px 12px;\n      border-bottom: 1px solid #cbd5e1;\n    }\n    /* Zebra Striping */\n    tr:nth-child(even) { background-color: #f8fafc; }\n    /* Hover effect */\n    tr:hover { background-color: #e0f2fe; cursor: pointer; }\n  </style>\n</head>\n<body>\n  <h2>O-Level Module Marks Distribution</h2>\n  <table>\n    <tr>\n      <th>Module Code</th>\n      <th>Module Name</th>\n      <th>Written Marks</th>\n    </tr>\n    <tr>\n      <td>M1-R5.1</td>\n      <td>Information Technology Tools</td>\n      <td>100</td>\n    </tr>\n    <tr>\n      <td>M2-R5.1</td>\n      <td>Web Designing & Publishing</td>\n      <td>100</td>\n    </tr>\n    <tr>\n      <td>M3-R5.1</td>\n      <td>Python Programming</td>\n      <td>100</td>\n    </tr>\n  </table>\n</body>\n</html>",
    "outputExplanation": "टेबल में नीला हेडर दिखेगा, एक पंक्ति सफेद और अगली हल्की स्लेटी दिखेगी, और माउस ले जाने पर पंक्ति हल्के नीले रंग में हाइलाइट होगी।",
    "realWorldAnalogy": "जैसे एक पेशेवर बहीखाता (Ledger) में अलग-अलग रंगों की लाइनें होती हैं ताकि आंखें एक रो से दूसरी रो में न भटकें, ज़ेबरा स्ट्राइपिंग वही काम करती है।",
    "importantPoints": [
      "border-collapse: collapse टेबल की सबसे महत्वपूर्ण प्रॉपर्टी है।",
      "ज़ेबरा स्ट्राइपिंग के लिए :nth-child(even) या :nth-child(odd) स्यूडो-क्लास का उपयोग होता है।",
      ":hover से माउस ले जाने पर रो हाइलाइट होती है।"
    ],
    "commonMistakes": [
      "`border-collapse: collapse` लगाना भूल जाना (जिससे टेबल पुरानी दोहरी लाइनों वाली दिखती है)।"
    ],
    "examPerspective": "प्रश्न: 'टेबल की दोहरी बॉर्डर को एकल बॉर्डर में बदलने वाली CSS प्रॉपर्टी कौन सी है?' (border-collapse: collapse), 'Zebra Striping के लिए कौन सा स्यूडो-क्लास उपयोग होता है?' (:nth-child).",
    "quickRevision": "border-collapse: collapse बॉर्डर मिलाता है, :nth-child(even) ज़ेबरा पंक्तियां बनाता है, :hover रो को चमकाता है।",
    "relatedTopics": [
      "tables-and-attributes",
      "w3-css-tables-and-list",
      "css-selectors"
    ],
    "practiceTask": "एक 5 पंक्तियों की टेबल बनाएं जिसमें सम पंक्तियों पर पीला बैकग्राउंड और हॉवर पर हरा बैकग्राउंड आए।"
  },
  {
    "id": "u4-t7",
    "slug": "css-menu-design",
    "unit": 4,
    "unitSlug": "unit-4",
    "unitTitle": "Cascading Style Sheets (CSS)",
    "title": "CSS Menu Design (Horizontal & Vertical Navigation)",
    "hindiTitle": "CSS मेन्यू डिजाइन (क्षैतिज एवं लंबवत नेविगेशन मेन्यू)",
    "definitionEnglish": "CSS Menu Design transforms semantic HTML unordered lists (<ul>, <li>) into interactive, accessible horizontal or vertical navigation bars using flexbox, display inline-block, list-style none, hover transitions, and dropdown visibility toggling.",
    "definitionHindi": "CSS मेन्यू डिजाइन सेमांटिक HTML अनऑर्डर्ड लिस्ट्स (<ul>, <li>) को flexbox, display inline-block, list-style none, हॉवर ट्रांजिशन्स और ड्रॉपडाउन विजिबिलिटी टॉगलिंग का उपयोग करके इंटरएक्टिव क्षैतिज या लंबवत नेविगेशन बार में परिवर्तित करता है।",
    "simpleWords": "वेबसाइट के ऊपर जो नीली या काली पट्टी होती है जिसमें Home, About, Courses, Contact लिखा होता है और माउस ले जाने पर रंग बदलता है, वही CSS नेविगेशन मेन्यू है।",
    "whyImportant": "नेविगेशन मेन्यू वेबसाइट का कम्पास है। यूजर इसके जरिए ही पूरी साइट में घूमता है। कोई भी वेबसाइट बिना मेन्यू के पूरी नहीं हो सकती।",
    "detailedExplanation": "### 1. Designing Horizontal & Vertical Navigation Menus\nModern navigation bars are constructed semantically using `<nav>` and `<ul>` elements styled with Flexbox:\n\n```css\n/* Clean Horizontal Navigation Bar */\n.navbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #0f172a;\n  padding: 1rem 2rem;\n}\n\n.nav-links {\n  display: flex;\n  gap: 1.5rem;\n  list-style: none;\n}\n\n.nav-links a {\n  color: #f8fafc;\n  text-decoration: none;\n  font-weight: 600;\n  transition: color 0.2s ease;\n}\n\n.nav-links a:hover {\n  color: #38bdf8;\n}\n```",
    "syntax": "/* Horizontal Navbar */\nnav ul {\n  display: flex;\n  list-style: none;\n  background: #1e293b;\n  margin: 0; padding: 0;\n}\nnav a {\n  display: block;\n  padding: 12px 20px;\n  color: white;\n  text-decoration: none;\n}\nnav a:hover { background: #0284c7; }",
    "codeExample": "<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    body { font-family: sans-serif; margin: 0; }\n    nav { background-color: #0f172a; }\n    nav ul {\n      list-style: none;\n      margin: 0;\n      padding: 0;\n      display: flex;\n    }\n    nav li { position: relative; }\n    nav a {\n      display: block;\n      color: #cbd5e1;\n      padding: 14px 20px;\n      text-decoration: none;\n      font-weight: bold;\n      transition: all 0.2s;\n    }\n    nav a:hover {\n      background-color: #0284c7;\n      color: white;\n    }\n  </style>\n</head>\n<body>\n  <nav>\n    <ul>\n      <li><a href=\"#\">Home</a></li>\n      <li><a href=\"#\">O-Level Syllabus</a></li>\n      <li><a href=\"#\">MCQ Practice</a></li>\n      <li><a href=\"#\">Practical Lab</a></li>\n      <li><a href=\"#\">Contact Us</a></li>\n    </ul>\n  </nav>\n  <div style=\"padding: 20px;\">\n    <h2>Hover over the menu items above!</h2>\n  </div>\n</body>\n</html>",
    "outputExplanation": "काले रंग की आधुनिक नेविगेशन पट्टी दिखेगी, और किसी भी लिंक पर माउस ले जाते ही वह नीले रंग में एनिमेट होकर बदल जाएगा।",
    "realWorldAnalogy": "जैसे एक मॉल में प्रवेश करते ही ऊपर बड़े बोर्ड पर लिखा होता है 'ग्राउंड फ्लोर: जूते | फर्स्ट फ्लोर: कपड़े | सेकंड फ्लोर: फूड कोर्ट', नेविगेशन मेन्यू वेबसाइट का दिशा-सूचक है।",
    "importantPoints": [
      "मेन्यू हमेशा <ul> और <li> से बनाया जाता है ताकि सर्च इंजनों को समझ आए।",
      "text-decoration: none से लिंक के नीचे की नीली अंडरलाइन हटती है।",
      "display: block देने से पूरे पैडिंग एरिया पर क्लिक किया जा सकता है।",
      "flexbox या inline-block से वर्टिकल लिस्ट हॉरिजॉन्टल बन जाती है।"
    ],
    "commonMistakes": [
      "एंकर टैग पर `display: block` लगाना भूल जाना (जिससे केवल टेक्स्ट पर क्लिक होता है, पूरे बटन एरिया पर नहीं)।"
    ],
    "examPerspective": "CSS हॉरिजॉन्टल मेन्यू बनाने की तकनीक, list-style: none की भूमिका, और a:hover इफेक्ट पर प्रैक्टिकल और थ्योरी दोनों में प्रश्न आते हैं।",
    "quickRevision": "<ul> + <li> + <a> को list-style: none, display: flex/inline-block, और :hover स्टाइल देकर आधुनिक मेन्यू बनाया जाता है।",
    "relatedTopics": [
      "css-lists",
      "css-properties-background-block-box-list-border-positioning",
      "anchor-links-and-named-anchors"
    ],
    "practiceTask": "एक वर्टिकल (साइडबार) मेन्यू बनाएं जिसमें 4 लिंक्स हों और माउस ले जाने पर बैकग्राउंड गहरा नीला हो जाए।"
  },
  {
    "id": "u4-t8",
    "slug": "css-image-gallery",
    "unit": 4,
    "unitSlug": "unit-4",
    "unitTitle": "Cascading Style Sheets (CSS)",
    "title": "CSS Image Gallery",
    "hindiTitle": "CSS इमेज गैलरी (Responsive Grid & Hover Effects)",
    "definitionEnglish": "A CSS Image Gallery organizes collections of images into a responsive multi-column grid layout, featuring thumbnail card borders, descriptive captions, drop shadows, and scale-on-hover zoom transitions using CSS flexbox or grid.",
    "definitionHindi": "CSS इमेज गैलरी तस्वीरों के संग्रह को एक रिस्पॉन्सिव बहु-स्तंभ ग्रिड लेआउट में व्यवस्थित करती है, जिसमें थंबनेल कार्ड बॉर्डर्स, वर्णनात्मक कैप्शन, ड्रॉप शैडो और CSS ट्रांजिशन्स द्वारा माउस ले जाने पर जूम (Scale) होने वाले प्रभाव शामिल होते हैं।",
    "simpleWords": "फोटो गैलरी का मतलब है एक सुंदर फोटो एल्बम जैसा वेबपेज, जहाँ कई छोटी तस्वीरें अगल-बगल सजी हों, और जैसे ही आप किसी फोटो पर माउस ले जाएं, वह फोटो हल्की सी बड़ी होकर (Zoom) चमकने लगे।",
    "whyImportant": "ई-कॉमर्स उत्पादों, फोटोग्राफी पोर्टफोलियो, और कॉलेज फेस्ट की तस्वीरों को प्रदर्शित करने के लिए इमेज गैलरी सबसे लोकप्रिय वेब कंपोनेंट है।",
    "detailedExplanation": "### 1. Creating Responsive CSS Image Galleries\nModern image galleries utilize CSS Grid to automatically adapt column counts based on device screen widths:\n\n```css\n.gallery-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1.5rem;\n  padding: 1rem;\n}\n\n.gallery-item {\n  border-radius: 0.75rem;\n  overflow: hidden;\n  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n\n.gallery-item:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.2);\n}\n\n.gallery-item img {\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n  display: block;\n}\n```",
    "syntax": "/* Responsive Gallery Container */\n.gallery {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 15px;\n}\n.gallery-item {\n  border: 1px solid #ccc;\n  border-radius: 8px;\n  overflow: hidden;\n}",
    "codeExample": "<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    body { font-family: sans-serif; background: #f8fafc; padding: 20px; }\n    .gallery {\n      display: grid;\n      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n      gap: 16px;\n    }\n    .card {\n      background: white;\n      border: 1px solid #e2e8f0;\n      border-radius: 8px;\n      overflow: hidden;\n      box-shadow: 0 4px 6px rgba(0,0,0,0.05);\n      transition: transform 0.3s, box-shadow 0.3s;\n    }\n    .card:hover {\n      transform: translateY(-5px);\n      box-shadow: 0 10px 15px rgba(0,0,0,0.1);\n    }\n    .card-banner {\n      height: 140px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      color: white;\n      font-weight: bold;\n      font-size: 18px;\n    }\n    .desc { padding: 12px; text-align: center; font-size: 14px; }\n  </style>\n</head>\n<body>\n  <h2>Interactive CSS Course Gallery</h2>\n  <div class=\"gallery\">\n    <div class=\"card\">\n      <div class=\"card-banner\" style=\"background:#0284c7;\">HTML5</div>\n      <div class=\"desc\">HyperText Markup Language</div>\n    </div>\n    <div class=\"card\">\n      <div class=\"card-banner\" style=\"background:#0d9488;\">CSS3</div>\n      <div class=\"desc\">Cascading Style Sheets</div>\n    </div>\n    <div class=\"card\">\n      <div class=\"card-banner\" style=\"background:#d97706;\">W3.CSS</div>\n      <div class=\"desc\">Fast Responsive Framework</div>\n    </div>\n    <div class=\"card\">\n      <div class=\"card-banner\" style=\"background:#7c3aed;\">JavaScript</div>\n      <div class=\"desc\">Client-Side Interactivity</div>\n    </div>\n  </div>\n</body>\n</html>",
    "outputExplanation": "4 सुंदर कार्ड्स अगल-बगल दिखेंगे, और किसी भी कार्ड पर माउस ले जाने पर वह थोड़ा ऊपर उठेगा और उसकी छाया गहरी हो जाएगी।",
    "realWorldAnalogy": "जैसे एक आर्ट गैलरी में दीवार पर सुंदर फ्रेम में पेंटिंग्स टंगी होती हैं और नीचे उनका नाम लिखा होता है, CSS इमेज गैलरी ठीक वही डिजिटल अनुभव देती है।",
    "importantPoints": [
      "CSS Grid से गैलरी बिना किसी मेहनत के पूरी तरह रिस्पॉन्सिव बन जाती है।",
      "transform: scale() या translateY() से स्मूथ 3D हॉवर इफेक्ट मिलता है।",
      "object-fit: cover से इमेजेस का अनुपात बिगड़े बिना वे बॉक्स में फिट हो जाती हैं।"
    ],
    "commonMistakes": [
      "`overflow: hidden` न लगाना (जिससे इमेज ज़ूम होने पर कार्ड के कोनों से बाहर निकल जाती है)।"
    ],
    "examPerspective": "CSS इमेज गैलरी के निर्माण, transform प्रॉपर्टी, और रिस्पॉन्सिव ग्रिड लेआउट पर प्रैक्टिकल परीक्षा में प्रश्न पूछा जाता है।",
    "quickRevision": "CSS इमेज गैलरी Grid/Flexbox, कार्ड कंटेनर्स, overflow: hidden, और :hover ज़ूम इफेक्ट से बनाई जाती है।",
    "relatedTopics": [
      "image-tag",
      "css-properties-background-block-box-list-border-positioning",
      "w3-css-images"
    ],
    "practiceTask": "3 कार्ड्स वाली एक इमेज गैलरी बनाएं जिसमें हॉवर करने पर कार्ड का बॉर्डर नीले रंग में चमकने लगे।"
  }
];
