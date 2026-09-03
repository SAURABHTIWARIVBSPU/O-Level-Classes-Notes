// Official Syllabus Data for NIELIT O-Level M2-R5.1: Web Designing and Publishing
// Primary Source: Official Syllabus PDF (O_Level_Web_Designing_Publishing_Complete_Syllabus-1.pdf)

export const syllabusMeta = {
  moduleCode: "M2-R5.1",
  moduleName: "Web Designing and Publishing",
  hindiModuleName: "वेब डिजाइनिंग एवं पब्लिशिंग",
  durationTotalHours: 120,
  theoryHours: 48,
  practicalHours: 72,
  writtenMarksMax: 100,
  purpose: "Build practical skill in designing website layouts, understanding the structure and functionality of the World Wide Web, creating web pages with HTML/CSS/JavaScript/Angular JS, integrating multimedia and images, and learning how websites are published.",
  objectives: [
    "Design and create effective web pages.",
    "Integrate graphics in web pages.",
    "Integrate various tools and techniques like HTML, CSS, JavaScript, Angular JS, etc.",
    "Design and edit images using tools.",
    "Embed the images in web pages."
  ],
  marksDistribution: [
    {
      id: 1,
      groupName: "Introduction to Web Design and Editors, HTML Basics",
      unitsCovered: ["Unit 1", "Unit 2", "Unit 3"],
      marks: 25,
      percentage: "25%"
    },
    {
      id: 2,
      groupName: "Cascading Style Sheets (CSS)",
      unitsCovered: ["Unit 4"],
      marks: 20,
      percentage: "20%"
    },
    {
      id: 3,
      groupName: "CSS Framework (W3.CSS)",
      unitsCovered: ["Unit 5"],
      marks: 15,
      percentage: "15%"
    },
    {
      id: 4,
      groupName: "JavaScript and Angular JS",
      unitsCovered: ["Unit 6"],
      marks: 20,
      percentage: "20%"
    },
    {
      id: 5,
      groupName: "Photo Editor, Web Publishing and Browsing",
      unitsCovered: ["Unit 7", "Unit 8"],
      marks: 20,
      percentage: "20%"
    }
  ]
};

export const unitsData = [
  {
    id: 1,
    unitNumber: "01",
    slug: "unit-1",
    title: "Introduction to Web Design",
    hindiTitle: "वेब डिजाइनिंग का परिचय",
    officialSection: "16.6 (i)",
    theoryHours: 2,
    practicalHours: 3,
    totalHours: 5,
    marksWeight: "25 Marks (Combined with U2 & U3)",
    marksGroup: "Group 1",
    color: "from-blue-600 to-cyan-600",
    badgeColor: "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300",
    description: "Learn fundamental networking concepts, Internet vs WWW, website architecture, client-server models, front-end vs back-end, responsive web principles, and static vs dynamic sites.",
    learningObjectives: [
      "Know the types of web site.",
      "Know the role of front end and back end application.",
      "Understand the concept of client side scripting and server side scripting."
    ],
    topics: [
      { id: "u1-t1", slug: "introduction-of-internet", title: "Introduction of Internet", hindiTitle: "इंटरनेट का परिचय" },
      { id: "u1-t2", slug: "www", title: "WWW (World Wide Web)", hindiTitle: "वर्ल्ड वाइड वेब (WWW)" },
      { id: "u1-t3", slug: "website", title: "Website", hindiTitle: "वेबसाइट" },
      { id: "u1-t4", slug: "working-of-websites", title: "Working of Websites", hindiTitle: "वेबसाइट कैसे काम करती है" },
      { id: "u1-t5", slug: "webpages", title: "Webpages", hindiTitle: "वेबपेज" },
      { id: "u1-t6", slug: "front-end", title: "Front End", hindiTitle: "फ्रंट-एंड (Front End)" },
      { id: "u1-t7", slug: "back-end", title: "Back End", hindiTitle: "बैक-एंड (Back End)" },
      { id: "u1-t8", slug: "client-side-scripting-languages", title: "Client Side Scripting Languages", hindiTitle: "क्लाइंट-साइड स्क्रिप्टिंग भाषाएं" },
      { id: "u1-t9", slug: "server-side-scripting-languages", title: "Server Side Scripting Languages", hindiTitle: "सर्वर-साइड स्क्रिप्टिंग भाषाएं" },
      { id: "u1-t10", slug: "responsive-web-designing", title: "Responsive Web Designing", hindiTitle: "रिस्पॉन्सिव वेब डिजाइनिंग" },
      { id: "u1-t11", slug: "types-of-websites", title: "Types of Websites (Static and Dynamic)", hindiTitle: "वेबसाइटों के प्रकार (स्टैटिक एवं डायनामिक)" }
    ]
  },
  {
    id: 2,
    unitNumber: "02",
    slug: "unit-2",
    title: "Editors",
    hindiTitle: "कोड एडिटर्स",
    officialSection: "16.6 (ii)",
    theoryHours: 2,
    practicalHours: 3,
    totalHours: 5,
    marksWeight: "25 Marks (Combined with U1 & U3)",
    marksGroup: "Group 1",
    color: "from-indigo-600 to-purple-600",
    badgeColor: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-300",
    description: "Understand code editors, their importance over plain text editors, installation of Notepad++ and Sublime Text, file creation, editing, saving, and coding workflows.",
    learningObjectives: [
      "Use different editors available for writing code.",
      "Understand working of editors."
    ],
    topics: [
      { id: "u2-t1", slug: "downloading-free-editors-notepad-plus-plus", title: "Downloading Free Editors like Notepad++", hindiTitle: "Notepad++ जैसे फ्री एडिटर्स डाउनलोड करना" },
      { id: "u2-t2", slug: "sublime-text-editor", title: "Sublime Text Editor", hindiTitle: "सबलाइम टेक्स्ट एडिटर" },
      { id: "u2-t3", slug: "making-use-of-editors", title: "Making Use of Editors", hindiTitle: "एडिटर्स का प्रभावी उपयोग" },
      { id: "u2-t4", slug: "file-creation-and-editing", title: "File Creation and Editing", hindiTitle: "फाइल बनाना और संपादित करना" },
      { id: "u2-t5", slug: "saving", title: "Saving Files and File Extensions", hindiTitle: "फाइल सेव करना और एक्सटेंशन" }
    ]
  },
  {
    id: 3,
    unitNumber: "03",
    slug: "unit-3",
    title: "HTML Basics & HTML5",
    hindiTitle: "एचटीएमएल बेसिक्स एवं एचटीएमएल5",
    officialSection: "16.6 (iii)",
    theoryHours: 10,
    practicalHours: 15,
    totalHours: 25,
    marksWeight: "25 Marks (Combined with U1 & U2)",
    marksGroup: "Group 1",
    color: "from-amber-600 to-orange-600",
    badgeColor: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
    description: "The core foundational pillar of web development. Master HTML document structure, formatting tags, div, pre, links, images, tables, lists, forms, frames, HTML5 semantic elements, multimedia, and form validations.",
    learningObjectives: [
      "Develop static website using different HTML Controls."
    ],
    topics: [
      { id: "u3-t1", slug: "html-introduction", title: "HTML Introduction", hindiTitle: "HTML का परिचय" },
      { id: "u3-t2", slug: "basic-structure-of-html", title: "Basic Structure of HTML", hindiTitle: "HTML की मूल संरचना" },
      { id: "u3-t3", slug: "head-section-and-elements", title: "Head Section and Elements of Head Section", hindiTitle: "Head सेक्शन और उसके एलिमेंट्स" },
      { id: "u3-t4", slug: "formatting-tags", title: "Formatting Tags: Bold, Italic, Underline, Strikethrough", hindiTitle: "फॉर्मेटिंग टैग्स: Bold, Italic, Underline, Strikethrough" },
      { id: "u3-t5", slug: "div-tag", title: "Div Tag", hindiTitle: "Div टैग (कंटेनर)" },
      { id: "u3-t6", slug: "pre-tag", title: "Pre Tag", hindiTitle: "Pre टैग (Preformatted Text)" },
      { id: "u3-t7", slug: "anchor-links-and-named-anchors", title: "Anchor Links and Named Anchors", hindiTitle: "एंकर लिंक्स और नेम्ड एंकर्स" },
      { id: "u3-t8", slug: "image-tag", title: "Image Tag", hindiTitle: "इमेज टैग (img)" },
      { id: "u3-t9", slug: "paragraphs", title: "Paragraphs and Line Breaks", hindiTitle: "पैराग्राफ और लाइन ब्रेक्स" },
      { id: "u3-t10", slug: "comments", title: "Comments in HTML", hindiTitle: "HTML में कमेंट्स" },
      { id: "u3-t11", slug: "tables-and-attributes", title: "Tables: Attributes (Border, Cellpadding, Cellspacing, height, width, TR, TH, TD, Rowspan, Colspan)", hindiTitle: "टेबल्स एवं विशेषताएं (Border, Cellpadding, Cellspacing, Rowspan, Colspan)" },
      { id: "u3-t12", slug: "lists", title: "Lists: Ordered List, Unordered List, Definition List", hindiTitle: "लिस्ट्स: ऑर्डर्ड, अनऑर्डर्ड एवं डेफिनिशन लिस्ट" },
      { id: "u3-t13", slug: "forms-and-elements", title: "Forms and Form Elements", hindiTitle: "फॉर्म्स और फॉर्म एलिमेंट्स" },
      { id: "u3-t14", slug: "input-types-and-attributes", title: "Input Types and Attributes (Text, Text Area, Dropdown, Radio, Check boxes, Submit and Reset Buttons)", hindiTitle: "इनपुट प्रकार एवं विशेषताएं (Text, Textarea, Select, Radio, Checkbox, Buttons)" },
      { id: "u3-t15", slug: "frames-and-iframe", title: "Frames: Frameset, Nested Frames, and HTML Iframe", hindiTitle: "फ्रेम्स: Frameset, Nested Frames एवं HTML Iframe" },
      { id: "u3-t16", slug: "html5-introduction", title: "HTML 5 Introduction", hindiTitle: "HTML5 का परिचय" },
      { id: "u3-t17", slug: "html5-new-semantic-elements", title: "HTML5 New Elements: Section, Nav, Article, Aside", hindiTitle: "HTML5 सेमांटिक एलिमेंट्स: Section, Nav, Article, Aside" },
      { id: "u3-t18", slug: "audio-and-video-tags", title: "Audio Tag and Video Tag", hindiTitle: "ऑडियो टैग एवं वीडियो टैग" },
      { id: "u3-t19", slug: "html-embed-multimedia", title: "HTML Embed Multimedia", hindiTitle: "मल्टीमीडिया एम्बेड करना (Embed & Object)" },
      { id: "u3-t20", slug: "html-layout", title: "HTML Layout", hindiTitle: "HTML लेआउट" },
      { id: "u3-t21", slug: "html5-form-validations", title: "HTML5 Form Validations: Require, Pattern, Autofocus, email, number, date, range", hindiTitle: "HTML5 फॉर्म वैलिडेशन (Required, Pattern, Autofocus, Types)" }
    ]
  },
  {
    id: 4,
    unitNumber: "04",
    slug: "unit-4",
    title: "Cascading Style Sheets (CSS)",
    hindiTitle: "कैस्केडिंग स्टाइल शीट्स (CSS)",
    officialSection: "16.6 (iv)",
    theoryHours: 10,
    practicalHours: 15,
    totalHours: 25,
    marksWeight: "20 Marks",
    marksGroup: "Group 2",
    color: "from-teal-600 to-emerald-600",
    badgeColor: "bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300",
    description: "Design and visually style responsive web pages using CSS rulesets, selectors, the Box Model, typography, colors, borders, positioning, modern Flexbox and Grid layouts, navigation menus, data tables, responsive media queries, CSS variables, and transitions.",
    learningObjectives: [
      "Understand the purpose, cascading mechanics, and syntax of CSS rulesets.",
      "Master CSS selectors, specificity hierarchy, and inheritance.",
      "Implement the CSS Box Model with border-box sizing and understand margin collapsing.",
      "Build modern, responsive web layouts using CSS Flexbox and CSS Grid.",
      "Design interactive navigation bars, styled data tables, and responsive card galleries.",
      "Apply responsive media queries, relative units (rem, em, vh, vw, clamp), and CSS custom properties."
    ],
    topics: [
      { id: "u4-t1", slug: "introduction-to-css", title: "Introduction to CSS & Syntax Ruleset", hindiTitle: "CSS का परिचय, इतिहास एवं सिंटैक्स रूल्स" },
      { id: "u4-t2", slug: "types-of-css", title: "Types of CSS (Inline, Internal, External) & Cascade", hindiTitle: "CSS के प्रकार एवं कैस्केड प्राथमिकता" },
      { id: "u4-t3", slug: "css-selectors", title: "CSS Selectors: Universal, Type, Class, ID, Combinators & Attributes", hindiTitle: "CSS चयनकर्ता (यूनिवर्सल, टैग, क्लास, ID, कॉम्बिनेटर्स एवं एट्रिब्यूट्स)" },
      { id: "u4-t4", slug: "css-colors-and-backgrounds", title: "CSS Colors, Color Models, Gradients & Backgrounds", hindiTitle: "CSS कलर्स, हेक्स, RGB, HSL, ग्रेडिएंट्स एवं बैकग्राउंड्स" },
      { id: "u4-t5", slug: "css-typography-and-fonts", title: "CSS Typography, Text Formatting & Web Fonts", hindiTitle: "CSS टाइपोग्राफी, टेक्स्ट फॉर्मेटिंग एवं वेब फोंट्स" },
      { id: "u4-t6", slug: "css-box-model", title: "The CSS Box Model & box-sizing: border-box", hindiTitle: "CSS बॉक्स मॉडल (Content, Padding, Border, Margin एवं box-sizing)" },
      { id: "u4-t7", slug: "css-borders-and-outlines", title: "CSS Borders, Rounded Corners, Shadows & Outlines", hindiTitle: "CSS बॉर्डर्स, राउंडेड कॉर्नर्स, बॉक्स शैडो एवं आउटलाइन्स" },
      { id: "u4-t8", slug: "css-display-and-visibility", title: "CSS Display (Block, Inline, Inline-Block) & Visibility", hindiTitle: "CSS डिस्प्ले प्रॉपर्टी (Block, Inline, Inline-Block) बनाम विजिबिलिटी" },
      { id: "u4-t9", slug: "css-positioning-and-z-index", title: "CSS Positioning (Static, Relative, Absolute, Fixed, Sticky) & Z-Index", hindiTitle: "CSS पोजीशनिंग (Static, Relative, Absolute, Fixed, Sticky) एवं Z-Index" },
      { id: "u4-t10", slug: "css-float-clear-and-overflow", title: "CSS Float, Clear, Clearfix & Overflow Handling", hindiTitle: "CSS फ्लोट, क्लियर, क्लियरफिक्स एवं ओवरफ्लो प्रबंधन" },
      { id: "u4-t11", slug: "css-lists", title: "CSS Lists & Custom Bullet Styling", hindiTitle: "CSS लिस्ट स्टाइलिंग एवं कस्टम बुलेट्स" },
      { id: "u4-t12", slug: "css-tables", title: "CSS Table Design: Borders, Zebra Striping & Hover", hindiTitle: "CSS टेबल डिजाइन (Borders, Zebra Striping एवं Hover)" },
      { id: "u4-t13", slug: "css-menu-design", title: "CSS Navigation Menu Design (Horizontal & Dropdown)", hindiTitle: "CSS नेविगेशन मेन्यू डिजाइन (Horizontal एवं Dropdown)" },
      { id: "u4-t14", slug: "css-image-gallery", title: "CSS Image Gallery & Card Layouts", hindiTitle: "CSS इमेज गैलरी एवं रिस्पॉन्सिव कार्ड्स" },
      { id: "u4-t15", slug: "css-flexbox-layout", title: "Modern 1D Layout with CSS Flexbox", hindiTitle: "CSS फ्लेक्सबॉक्स (Flexbox) 1D लेआउट सिस्टम" },
      { id: "u4-t16", slug: "css-grid-layout", title: "Modern 2D Layout with CSS Grid", hindiTitle: "CSS ग्रिड (Grid) 2D लेआउट सिस्टम" },
      { id: "u4-t17", slug: "css-responsive-design-and-units", title: "Responsive Web Design, Media Queries & Modern Units", hindiTitle: "रिस्पॉन्सिव वेब डिजाइनिंग, मीडिया क्वेरीज एवं आधुनिक यूनिट्स" },
      { id: "u4-t18", slug: "css-variables-transitions-and-transforms", title: "CSS Custom Properties (Variables), Transitions & Transforms", hindiTitle: "CSS वेरिएबल्स, 2D/3D ट्रांसफॉर्म्स एवं ट्रांजिशन्स" }
    ]
  },
  {
    id: 5,
    unitNumber: "05",
    slug: "unit-5",
    title: "CSS Framework (W3.CSS)",
    hindiTitle: "CSS फ्रेमवर्क (W3.CSS)",
    officialSection: "16.6 (v)",
    theoryHours: 6,
    practicalHours: 9,
    totalHours: 15,
    marksWeight: "15 Marks",
    marksGroup: "Group 3",
    color: "from-emerald-600 to-green-600",
    badgeColor: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300",
    description: "Learn fast and modern responsive website development with W3.CSS. Master fonts, text, colors, containers, panels, borders, the 12-column responsive grid system, tables, lists, and images.",
    learningObjectives: [
      "Use CSS Framework to develop web site effectively."
    ],
    topics: [
      { id: "u5-t1", slug: "website-development-using-w3-css", title: "Web Site Development using W3.CSS Framework", hindiTitle: "W3.CSS फ्रेमवर्क का उपयोग कर वेबसाइट विकास" },
      { id: "u5-t2", slug: "w3-css-intro", title: "W3.CSS Intro", hindiTitle: "W3.CSS का परिचय एवं लाभ" },
      { id: "u5-t3", slug: "w3-css-fonts-and-text", title: "W3.CSS Fonts and Text", hindiTitle: "W3.CSS फोंट्स एवं टेक्स्ट क्लासेज" },
      { id: "u5-t4", slug: "w3-css-colors", title: "W3.CSS Colors", hindiTitle: "W3.CSS कलर्स एवं पैलेट्स" },
      { id: "u5-t5", slug: "w3-css-containers-and-panels", title: "W3.CSS Containers and Panels", hindiTitle: "W3.CSS कंटेनर्स एवं पैनल्स" },
      { id: "u5-t6", slug: "w3-css-borders", title: "W3.CSS Borders", hindiTitle: "W3.CSS बॉर्डर्स एवं राउंडिंग" },
      { id: "u5-t7", slug: "w3-css-grid", title: "W3.CSS Grid (12-Column Responsive System)", hindiTitle: "W3.CSS 12-कॉलम रिस्पॉन्सिव ग्रिड" },
      { id: "u5-t8", slug: "w3-css-tables-and-list", title: "W3.CSS Tables and List", hindiTitle: "W3.CSS टेबल्स एवं लिस्ट्स" },
      { id: "u5-t9", slug: "w3-css-images", title: "W3.CSS Images", hindiTitle: "W3.CSS इमेजेस एवं कार्ड्स" }
    ]
  },
  {
    id: 6,
    unitNumber: "06",
    slug: "unit-6",
    title: "JavaScript and Angular JS",
    hindiTitle: "जावास्क्रिप्ट एवं एंगुलर जेएस",
    officialSection: "16.6 (vi)",
    theoryHours: 10,
    practicalHours: 15,
    totalHours: 25,
    marksWeight: "20 Marks",
    marksGroup: "Group 4",
    color: "from-yellow-600 to-amber-600",
    badgeColor: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300",
    description: "Add dynamic interactive behaviour and validation. Master variables, operators, conditions, popup boxes, DOM events, form validations in JavaScript, and AngularJS MVC architecture, expressions, modules, and directives.",
    learningObjectives: [
      "Apply client side scripting.",
      "Add validations and checks on forms (web pages)."
    ],
    topics: [
      { id: "u6-t1", slug: "client-side-scripting-intro", title: "Introduction to Client Side Scripting Language", hindiTitle: "क्लाइंट-साइड स्क्रिप्टिंग का परिचय (JS vs Java)" },
      { id: "u6-t2", slug: "variables-in-javascript", title: "Variables in JavaScript", hindiTitle: "जावास्क्रिप्ट में वेरिएबल्स (var, let, const)" },
      { id: "u6-t3", slug: "operators-in-js", title: "Operators in JS", hindiTitle: "जावास्क्रिप्ट ऑपरेटर्स" },
      { id: "u6-t4", slug: "conditions-statements", title: "Conditions Statements", hindiTitle: "कंडीशनल स्टेटमेंट्स (if, if-else, switch)" },
      { id: "u6-t5", slug: "js-popup-boxes", title: "JS Popup Boxes (Alert, Confirm, Prompt)", hindiTitle: "जावास्क्रिप्ट पॉपअप बॉक्सेज" },
      { id: "u6-t6", slug: "js-events", title: "JS Events", hindiTitle: "जावास्क्रिप्ट इवेंट्स (onclick, onmouseover, आदि)" },
      { id: "u6-t7", slug: "basic-form-validations-in-javascript", title: "Basic Form Validations in JavaScript", hindiTitle: "जावास्क्रिप्ट में फॉर्म वैलिडेशन" },
      { id: "u6-t8", slug: "introduction-to-angular-js", title: "Introduction to Angular JS", hindiTitle: "AngularJS का परिचय एवं MVC आर्किटेक्चर" },
      { id: "u6-t9", slug: "angular-js-expressions", title: "Angular JS Expressions", hindiTitle: "AngularJS एक्सप्रेशन्स {{ }}" },
      { id: "u6-t10", slug: "angular-js-modules", title: "Angular JS Modules", hindiTitle: "AngularJS मॉड्यूल्स एवं कंट्रोलर्स" },
      { id: "u6-t11", slug: "angular-js-directives", title: "Angular JS Directives (ng-app, ng-model, ng-bind, ng-repeat)", hindiTitle: "AngularJS डायरेक्टिव्स" }
    ]
  },
  {
    id: 7,
    unitNumber: "07",
    slug: "unit-7",
    title: "Photo Editor",
    hindiTitle: "फोटो एडिटर (छवि संपादन)",
    officialSection: "16.6 (vii)",
    theoryHours: 6,
    practicalHours: 9,
    totalHours: 15,
    marksWeight: "20 Marks (Combined with U8)",
    marksGroup: "Group 5",
    color: "from-pink-600 to-rose-600",
    badgeColor: "bg-pink-100 text-pink-800 dark:bg-pink-900/40 dark:text-pink-300",
    description: "Prepare and optimize visual assets for the web. Master photo editing features, selection tools, paint tools, transform tools, text tool, layers, brightness/contrast, tone correction, filters, and raster vs vector concepts.",
    learningObjectives: [
      "Edit images and embed in web pages."
    ],
    topics: [
      { id: "u7-t1", slug: "features-of-photo-editing", title: "Features of Photo Editing & Image Fundamentals", hindiTitle: "फोटो एडिटिंग की विशेषताएं एवं इमेज बेसिक्स" },
      { id: "u7-t2", slug: "selection-tools", title: "Selection Tools (Marquee, Lasso, Magic Wand)", hindiTitle: "सिलेक्शन टूल्स (Marquee, Lasso, Magic Wand)" },
      { id: "u7-t3", slug: "paint-tools", title: "Paint Tools (Brush, Pencil, Gradient, Paint Bucket, Eraser)", hindiTitle: "पेंट टूल्स (Brush, Gradient, Eraser)" },
      { id: "u7-t4", slug: "transform-tools", title: "Transform Tools (Scale, Rotate, Skew, Flip, Crop)", hindiTitle: "ट्रांसफॉर्म टूल्स (Scale, Rotate, Crop)" },
      { id: "u7-t5", slug: "text-tool", title: "Text Tool", hindiTitle: "टेक्स्ट टूल" },
      { id: "u7-t6", slug: "layers", title: "Layers (Stacking, Opacity, Masks)", hindiTitle: "लेयर्स (Layers) की अवधारणा" },
      { id: "u7-t7", slug: "brightness-contrast", title: "Brightness / Contrast", hindiTitle: "ब्राइटनेस एवं कंट्रास्ट" },
      { id: "u7-t8", slug: "improve-colors-and-tone", title: "Improve Colors and Tone (Levels, Curves, Hue/Saturation)", hindiTitle: "कलर्स एवं टोन सुधारना" },
      { id: "u7-t9", slug: "filters", title: "Filters (Blur, Sharpen, Noise)", hindiTitle: "फिल्टर्स (Blur, Sharpen, Noise)" }
    ]
  },
  {
    id: 8,
    unitNumber: "08",
    slug: "unit-8",
    title: "Web Publishing and Browsing",
    hindiTitle: "वेब पब्लिशिंग एवं ब्राउजिंग",
    officialSection: "16.6 (viii)",
    theoryHours: 2,
    practicalHours: 3,
    totalHours: 5,
    marksWeight: "20 Marks (Combined with U7)",
    marksGroup: "Group 5",
    color: "from-purple-600 to-indigo-600",
    badgeColor: "bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300",
    description: "Understand the end-to-end process of publishing a website. Learn design principles, SGML legacy, web hosting, document interchange standards, search engines vs meta search engines, browser architecture, HTTP protocol, and publishing tools.",
    learningObjectives: [
      "Finally be able to publish the web sites."
    ],
    topics: [
      { id: "u8-t1", slug: "overview-of-web-publishing", title: "Overview of Web Publishing", hindiTitle: "वेब पब्लिशिंग का परिचय एवं जीवनचक्र" },
      { id: "u8-t2", slug: "web-page-design-considerations-and-principles", title: "Web Page Design Considerations and Principles", hindiTitle: "वेब डिजाइन के सिद्धांत एवं विचार" },
      { id: "u8-t3", slug: "sgml", title: "SGML (Standard Generalized Markup Language)", hindiTitle: "SGML की अवधारणा" },
      { id: "u8-t4", slug: "web-hosting-basics", title: "Web Hosting Basics (Shared, VPS, Dedicated, Cloud)", hindiTitle: "वेब होस्टिंग के मूल सिद्धांत" },
      { id: "u8-t5", slug: "documents-interchange-standards", title: "Documents Interchange Standards (ASCII, UTF-8, MIME, XML)", hindiTitle: "दस्तावेज़ विनिमय मानक" },
      { id: "u8-t6", slug: "components-of-web-publishing", title: "Components of Web Publishing", hindiTitle: "वेब पब्लिशिंग के मुख्य घटक" },
      { id: "u8-t7", slug: "document-management", title: "Document Management & Site Architecture", hindiTitle: "दस्तावेज़ प्रबंधन एवं फोल्डर संरचना" },
      { id: "u8-t8", slug: "search-engines", title: "Search Engines (Crawlers, Indexing, Ranking, SEO)", hindiTitle: "सर्च इंजन की कार्यप्रणाली" },
      { id: "u8-t9", slug: "meta-search-engines", title: "Meta Search Engines", hindiTitle: "मेटा सर्च इंजन (Dogpile, Metacrawler)" },
      { id: "u8-t10", slug: "www-architecture", title: "WWW (World Wide Web Architecture & URLs)", hindiTitle: "WWW आर्किटेक्चर एवं URLs" },
      { id: "u8-t11", slug: "browser-architecture", title: "Browser Architecture and Rendering Engines", hindiTitle: "ब्राउज़र आर्किटेक्चर एवं रेंडरिंग इंजन" },
      { id: "u8-t12", slug: "http-protocol", title: "HTTP (Methods, Status Codes, HTTP vs HTTPS)", hindiTitle: "HTTP प्रोटोकॉल (मेथड्स, स्टेटस कोड्स)" },
      { id: "u8-t13", slug: "publishing-tools", title: "Publishing Tools (FileZilla FTP, cPanel, GitHub)", hindiTitle: "पब्लिशिंग टूल्स (FTP, cPanel, GitHub)" }
    ]
  }
];
