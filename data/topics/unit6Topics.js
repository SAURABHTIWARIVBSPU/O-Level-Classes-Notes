// Unit 6: JavaScript & AngularJS - Complete Topic Notes

export const unit6Topics = [
  {
    "id": "u6-t1",
    "slug": "client-side-scripting-intro",
    "unit": 6,
    "unitSlug": "unit-6",
    "unitTitle": "JavaScript and Angular JS",
    "title": "Introduction to Client Side Scripting Language (JavaScript)",
    "hindiTitle": "क्लाइंट-साइड स्क्रिप्टिंग भाषा का परिचय (जावास्क्रिप्ट एवं जावा में अंतर)",
    "definitionEnglish": "JavaScript is a lightweight, interpreted, dynamically typed, cross-platform, client-side object-based scripting language designed by Brendan Eich in 1995, standardized as ECMAScript, executed directly inside web browsers to create rich, interactive, dynamic user experiences.",
    "definitionHindi": "जावास्क्रिप्ट (JS) एक हल्की, इंटरप्रिटेड, डायनामिकली टाइप्ड, क्रॉस-प्लेटफॉर्म और क्लाइंट-साइड ऑब्जेक्ट-बेस्ड स्क्रिप्टिंग भाषा है, जिसका आविष्कार 1995 में ब्रेंडन आइच ने किया था; यह सीधे वेब ब्राउज़र में निष्पादित होकर वेबपेजों को इंटरएक्टिव और जीवंत बनाती है।",
    "simpleWords": "HTML से शरीर का ढांचा बनता है, CSS से सुंदरता आती है, और JavaScript उस शरीर को सोचने, चलने और बात करने की शक्ति (Brain & Logic) देती है।",
    "whyImportant": "जावास्क्रिप्ट वेब की एकमात्र सार्वभौमिक प्रोग्रामिंग भाषा है जिसे हर आधुनिक वेब ब्राउज़र सीधे समझता है। O-Level परीक्षा में यह 20 अंकों का भार रखती है।",
    "detailedExplanation": "### 1. Inception and Evolution of JavaScript\n- **1995:** Created by **Brendan Eich** at Netscape Communications in just 10 days, originally named *Mocha*, then *LiveScript*, and finally *JavaScript*.\n- **1997:** Standardized internationally as **ECMAScript (ECMA-262)** to ensure uniform browser execution.\n- **Nature:** High-level, interpreted, dynamically typed, single-threaded, event-driven programming language.\n\n### 2. The Role of JavaScript in Web Architecture\nJavaScript operates as the behavioral engine of the web:\n1. **DOM Manipulation:** Dynamically adds, updates, or deletes HTML elements and CSS styles.\n2. **Event Handling:** Responds to user actions (clicks, keypresses, mouse movements, form submissions).\n3. **Asynchronous Communication:** Exchanges data with backend servers in the background without refreshing the page (AJAX / Fetch API).",
    "syntax": "<script>\n  // JavaScript code inside HTML\n  console.log(\"Hello from JavaScript!\");\n</script>\n<script src=\"script.js\"></script>",
    "codeExample": "<!DOCTYPE html>\n<html>\n<body>\n  <h2>JavaScript Interactive Demo</h2>\n  <p id=\"demo\">Original text before clicking button.</p>\n  \n  <button type=\"button\" onclick=\"changeContent()\">\n    Change Text with JavaScript\n  </button>\n\n  <script>\n    function changeContent() {\n      document.getElementById(\"demo\").innerHTML = \"Hello NIELIT! Text changed by JavaScript!\";\n      document.getElementById(\"demo\").style.color = \"#0284c7\";\n    }\n  </script>\n</body>\n</html>",
    "outputExplanation": "बटन दबाते ही बिना पेज रीलोड हुए पैराग्राफ का टेक्स्ट बदल जाएगा और उसका रंग नीला हो जाएगा।",
    "realWorldAnalogy": "यदि एक खिलौना कार में प्लास्टिक बॉडी (HTML) है और उस पर लाल रंग (CSS) है, तो उसके अंदर लगी बैटरी और रिमोट कंट्रोल सर्किट (JavaScript) है जो उसे दौड़ाता है।",
    "importantPoints": [
      "JavaScript का आविष्कार 1995 में Brendan Eich ने किया।",
      "Java और JavaScript दो बिल्कुल अलग-अलग भाषाएं हैं।",
      "JavaScript एक इंटरप्रिटेड (Interpreted) भाषा है (इसे कंपाइल नहीं करना पड़ता)।",
      "बाहरी JS फाइल का एक्सटेंशन .js होता है और इसके अंदर <script> टैग नहीं लिखा जाता।"
    ],
    "commonMistakes": [
      "Java और JavaScript को एक ही समझ लेना।",
      "बाहरी `.js` फाइल के अंदर `<script>` टैग लिख देना (यह केवल HTML फाइल में लिखा जाता है)।"
    ],
    "examPerspective": "Brendan Eich का नाम, आविष्कार का वर्ष (1995), Java बनाम JavaScript में अंतर, और <script> टैग के उपयोग पर हर साल प्रश्न आते हैं।",
    "quickRevision": "जावास्क्रिप्ट क्लाइंट-साइड इंटरप्रिटेड स्क्रिप्टिंग भाषा है। आविष्कारक: ब्रेंडन आइच (1995)। जावा और जावास्क्रिप्ट पूरी तरह अलग हैं।",
    "relatedTopics": [
      "variables-in-javascript",
      "js-events",
      "javascript-vs-java"
    ],
    "practiceTask": "एक बटन बनाएं जिस पर क्लिक करने पर स्क्रीन पर एक अलर्ट बॉक्स (`alert()`) खुले जिसमें 'Welcome to O-Level' लिखा हो।"
  },
  {
    "id": "u6-t2",
    "slug": "variables-in-javascript",
    "unit": 6,
    "unitSlug": "unit-6",
    "unitTitle": "JavaScript and Angular JS",
    "title": "Variables in JavaScript",
    "hindiTitle": "जावास्क्रिप्ट में वेरिएबल्स (var, let, const) एवं डेटा टाइप्स",
    "definitionEnglish": "Variables in JavaScript are named memory containers used to store data values, declared using 'var' (function-scoped, legacy), 'let' (block-scoped, reassignable), or 'const' (block-scoped, immutable identifier), capable of holding primitive data types (String, Number, Boolean, Null, Undefined, Symbol, BigInt) or complex Objects.",
    "definitionHindi": "जावास्क्रिप्ट में वेरिएबल्स डेटा मानों को संग्रहीत करने वाले नामित मेमोरी कंटेनर होते हैं, जिन्हें 'var' (फंक्शन-स्कोप्ड, पुराना), 'let' (ब्लॉक-स्कोप्ड, परिवर्तनीय) या 'const' (ब्लॉक-स्कोप्ड, अपरिवर्तनीय) द्वारा घोषित किया जाता है, जो प्रिमिटिव डेटा टाइप्स या ऑब्जेक्ट्स को धारण कर सकते हैं।",
    "simpleWords": "वेरिएबल एक लेबल लगा हुआ खाली डिब्बा है जिसमें आप कोई संख्या (जैसे उम्र = 20) या नाम (जैसे नाम = 'सौरभ') रख सकते हैं और प्रोग्राम में जरूरत पड़ने पर उसका इस्तेमाल या बदलाव कर सकते हैं।",
    "whyImportant": "बिना वेरिएबल के कोई भी प्रोग्राम डेटा याद नहीं रख सकता। आधुनिक ES6 में var, let, और const के बीच अंतर समझना तकनीकी साक्षात्कारों और परीक्षा का सबसे पसंदीदा विषय है।",
    "detailedExplanation": "### 1. Variable Declarations in Modern JavaScript\n| Keyword | Scope | Re-declaration | Re-assignment | Hoisting Behavior |\n| :--- | :--- | :--- | :--- | :--- |\n| **`var`** (ES5) | Function Scope | Permitted | Permitted | Hoisted with `undefined` |\n| **`let`** (ES6) | Block Scope `{}` | Prohibited in same scope | Permitted | Temporal Dead Zone (TDZ) |\n| **`const`** (ES6) | Block Scope `{}` | Prohibited in same scope | Prohibited (Immutable binding) | Temporal Dead Zone (TDZ) |\n\n### 2. Primitive vs. Reference Data Types\n- **Primitive Types (Passed by value):** `String`, `Number`, `Boolean`, `Undefined`, `Null`, `Symbol`, `BigInt`.\n- **Reference Types (Passed by reference):** `Object`, `Array`, `Function`, `Date`, `RegExp`.",
    "syntax": "var name = \"Rahul\";    // Function scope\nlet age = 22;           // Block scope\nconst PI = 3.14159;     // Immutable constant",
    "codeExample": "<!DOCTYPE html>\n<html>\n<body>\n  <h2>JavaScript Variables Showcase</h2>\n  <p id=\"output\"></p>\n\n  <script>\n    let studentName = \"Saurabh Tiwari\";\n    let marks = 95;\n    const examPassed = true;\n\n    // Checking types\n    let info = \"Student: \" + studentName + \"<br>\" +\n               \"Marks: \" + marks + \" (Type: \" + typeof marks + \")<br>\" +\n               \"Passed: \" + examPassed + \" (Type: \" + typeof examPassed + \")<br>\" +\n               \"Type of null: \" + typeof null;\n\n    document.getElementById(\"output\").innerHTML = info;\n  </script>\n</body>\n</html>",
    "outputExplanation": "स्क्रीन पर छात्र का नाम, अंक, बूलियन पास स्थिति, और `typeof null = object` स्पष्ट रूप से प्रदर्शित होगा।",
    "realWorldAnalogy": "`var` एक खुली बाल्टी जैसा है जिसका पानी कहीं भी फैल जाता है; `let` एक ढक्कनदार लंच बॉक्स (Block) जैसा है जो केवल अपनी कक्षा के अंदर खुलता है; और `const` एक सीलबंद बैंक लॉकर है जिसका मान कभी नहीं बदला जा सकता।",
    "importantPoints": [
      "let और const दोनों ब्लॉक-स्कोप्ड ({ }) होते हैं।",
      "const को घोषित करते समय ही मान देना अनिवार्य है और इसे बाद में बदला नहीं जा सकता।",
      "typeof null का मान 'object' होता है।",
      "typeof NaN का मान 'number' होता है।"
    ],
    "commonMistakes": [
      "`const` वेरिएबल को बाद में री-असाइन करने की कोशिश करना (TypeError देगा)।",
      "एक ही ब्लॉक में एक ही नाम से दो बार `let` घोषित करना।"
    ],
    "examPerspective": "var, let, const में अंतर, ब्लॉक स्कोप की परिभाषा, और `typeof null` तथा `typeof NaN` पर प्रश्न हर बार आते हैं।",
    "quickRevision": "var = फंक्शन स्कोप, let = ब्लॉक स्कोप (परिवर्तनीय), const = ब्लॉक स्कोप (स्थिर)। typeof null = object, typeof NaN = number.",
    "relatedTopics": [
      "operators-in-js",
      "conditions-statements",
      "client-side-scripting-intro"
    ],
    "practiceTask": "कंसोल में `let a = 10; { let a = 20; console.log(a); } console.log(a);` लिखकर ब्लॉक स्कोप का प्रभाव देखें।"
  },
  {
    "id": "u6-t3",
    "slug": "operators-in-js",
    "unit": 6,
    "unitSlug": "unit-6",
    "unitTitle": "JavaScript and Angular JS",
    "title": "Operators in JS",
    "hindiTitle": "जावास्क्रिप्ट ऑपरेटर्स (Arithmetic, Comparison, Logical, Ternary)",
    "definitionEnglish": "Operators in JavaScript are special symbols that perform mathematical, relational, logical, or bitwise computations on one or more operands (variables and values), categorized into Arithmetic, Assignment, Comparison (loose == vs strict ===), Logical (&&, ||, !), and the Conditional Ternary operator (? :).",
    "definitionHindi": "जावास्क्रिप्ट ऑपरेटर्स वे विशेष प्रतीक होते हैं जो एक या अधिक ऑपरेंड्स (वेरिएबल्स और मानों) पर गणितीय, संबंधपरक, तार्किक या बिटवाइज़ गणनाएं करते हैं; इन्हें अंकगणितीय, असाइनमेंट, तुलनात्मक (ढीला == बनाम सख्त ===), तार्किक और टर्नरी ऑपरेटर में वर्गीकृत किया जाता है।",
    "simpleWords": "ऑपरेटर वे संकेत (जैसे +, -, *, ==, &&) हैं जो दो संख्याओं को जोड़ने, बड़ा-छोटा देखने या दो शर्तों को एक साथ जांचने का काम करते हैं।",
    "whyImportant": "किसी भी प्रोग्रामिंग भाषा में निर्णय लेने और गणना करने का पूरा आधार ऑपरेटर्स ही होते हैं।",
    "detailedExplanation": "### 1. Classification of JavaScript Operators\n1. **Arithmetic Operators:** `+`, `-`, `*`, `/`, `%` (Modulo remainder), `**` (Exponentiation), `++` (Increment), `--` (Decrement).\n2. **Assignment Operators:** `=`, `+=`, `-=`, `*=`, `/=`.\n3. **Comparison Operators:**\n   - **Equality (`==`):** Checks value with automatic type coercion (e.g., `5 == \"5\"` is `true`).\n   - **Strict Equality (`===`):** Checks both value AND data type without coercion (e.g., `5 === \"5\"` is `false`).\n   - `!=`, `!==`, `>`, `<`, `>=`, `<=`.\n4. **Logical Operators:** `&&` (Logical AND), `||` (Logical OR), `!` (Logical NOT).\n5. **Ternary Operator:** `condition ? expressionIfTrue : expressionIfFalse`.",
    "syntax": "// Loose vs Strict Equality\n5 == \"5\"       // Returns true (type coercion)\n5 === \"5\"      // Returns false (different data types)\n\n// Ternary Operator\nlet status = (age >= 18) ? \"Adult\" : \"Minor\";",
    "codeExample": "<!DOCTYPE html>\n<html>\n<body>\n  <h2>JavaScript Operators Demonstration</h2>\n  <p id=\"res\"></p>\n\n  <script>\n    let a = 10;\n    let b = \"10\";\n\n    let looseCheck = (a == b);   // true\n    let strictCheck = (a === b); // false\n    let mod = (17 % 5);          // 2\n    let canVote = (19 >= 18) ? \"Eligible to Vote\" : \"Not Eligible\";\n\n    document.getElementById(\"res\").innerHTML = \n      \"10 == '10': <b>\" + looseCheck + \"</b> (Loose Equality)<br>\" +\n      \"10 === '10': <b>\" + strictCheck + \"</b> (Strict Equality)<br>\" +\n      \"17 % 5 (Remainder): <b>\" + mod + \"</b><br>\" +\n      \"Ternary Result: <b>\" + canVote + \"</b>\";\n  </script>\n</body>\n</html>",
    "outputExplanation": "Loose equality सत्य देगी क्योंकि दोनों 10 हैं, लेकिन Strict equality असत्य देगी क्योंकि एक संख्या और दूसरी स्ट्रिंग है।",
    "realWorldAnalogy": "`==` किसी व्यक्ति को केवल उसके चेहरे से पहचानना है (चाहे वह पुलिस की वर्दी में हो या सादे कपड़ों में); `===` चेहरे के साथ-साथ उसका आधार कार्ड और बायोमेट्रिक भी जांचना है।",
    "importantPoints": [
      "== केवल मान जांचता है, === मान और डेटा टाइप दोनों जांचता है।",
      "% (मॉड्यूलो) ऑपरेटर भागफल नहीं बल्कि शेषफल लौटाता है।",
      "Ternary (? :) एकमात्र ऐसा ऑपरेटर है जो 3 ऑपरेंड्स लेता है।"
    ],
    "commonMistakes": [
      "तुलना करने के लिए गलती से एकल बराबर (`=`) लिख देना (`=` असाइनमेंट है, तुलना के लिए `==` या `===` होता है)।"
    ],
    "examPerspective": "`==` बनाम `===` में अंतर, `%` ऑपरेटर का शेषफल निकालना, और टर्नरी ऑपरेटर के सिंटैक्स पर परीक्षा में हर साल प्रश्न आते हैं।",
    "quickRevision": "== केवल मान मिलाता है, === मान और टाइप दोनों मिलाता है। % शेषफल देता है। condition ? true : false टर्नरी है।",
    "relatedTopics": [
      "variables-in-javascript",
      "conditions-statements",
      "basic-form-validations-in-javascript"
    ],
    "practiceTask": "जावास्क्रिप्ट में लिखें: `let num = 15; console.log(num % 2 === 0 ? 'Even' : 'Odd');` और आउटपुट देखें।"
  },
  {
    "id": "u6-t4",
    "slug": "conditions-statements",
    "unit": 6,
    "unitSlug": "unit-6",
    "unitTitle": "JavaScript and Angular JS",
    "title": "Conditions Statements",
    "hindiTitle": "कंडीशनल स्टेटमेंट्स (if, if-else, else-if, switch)",
    "definitionEnglish": "Conditional statements in JavaScript control the program flow by executing different blocks of code based on whether a specified Boolean condition evaluates to true or false, encompassing 'if', 'if...else', 'if...else if...else' ladders, and the multi-way 'switch...case' statement.",
    "definitionHindi": "जावास्क्रिप्ट में कंडीशनल स्टेटमेंट्स किसी निश्चित बूलियन शर्त के सत्य (true) या असत्य (false) होने के आधार पर अलग-अलग कोड ब्लॉक्स को निष्पादित करके प्रोग्राम के प्रवाह को नियंत्रित करते हैं; इनमें 'if', 'if...else', 'else if' लैडर और 'switch...case' शामिल हैं।",
    "simpleWords": "यह प्रोग्राम का चौराहा है। जैसे ट्रैफिक सिग्नल पर लाल बत्ती हो तो रुकना है, हरी हो तो चलना है, वैसे ही प्रोग्राम में शर्त सही होने पर एक काम होता है और गलत होने पर दूसरा काम होता है।",
    "whyImportant": "बिना कंडीशनल स्टेटमेंट्स के कोई भी सॉफ्टवेयर निर्णय नहीं ले सकता, जैसे यूजर पासवर्ड सही है या गलत, या छात्र पास है या फेल।",
    "detailedExplanation": "### 1. Control Flow Decision-Making Statements\n1. **`if` / `else if` / `else`:** Executes specific code blocks based on boolean evaluations:\n```javascript\nif (score >= 90) {\n  grade = 'S';\n} else if (score >= 60) {\n  grade = 'A';\n} else {\n  grade = 'F';\n}\n```\n2. **`switch` Statement:** Multi-branch conditional evaluating an expression against multiple `case` values with strict equality (`===`), utilizing `break` to prevent fall-through and `default` as a fallback.",
    "syntax": "// if-else if-else\nif (condition1) {\n  // block 1\n} else if (condition2) {\n  // block 2\n} else {\n  // default block\n}\n\n// switch-case\nswitch (expression) {\n  case x: code; break;\n  case y: code; break;\n  default: fallbackCode;\n}",
    "codeExample": "<!DOCTYPE html>\n<html>\n<body>\n  <h2>Conditional Grading System</h2>\n  <p id=\"gradeMsg\"></p>\n\n  <script>\n    let score = 78;\n    let grade = \"\";\n\n    // If-Else Ladder\n    if (score >= 85) {\n      grade = \"S (Super Outstanding)\";\n    } else if (score >= 75) {\n      grade = \"A (Excellent)\";\n    } else if (score >= 65) {\n      grade = \"B (Good)\";\n    } else if (score >= 50) {\n      grade = \"C (Satisfactory)\";\n    } else {\n      grade = \"F (Failed)\";\n    }\n\n    document.getElementById(\"gradeMsg\").innerHTML = \n      \"Score: \" + score + \" | NIELIT Grade: <b>\" + grade + \"</b>\";\n  </script>\n</body>\n</html>",
    "outputExplanation": "स्कोर 78 होने के कारण `else if (score >= 75)` की शर्त सही होगी और स्क्रीन पर 'Grade: A (Excellent)' दिखेगा।",
    "realWorldAnalogy": "जैसे रेलवे टिकट चेकर देखता है: अगर कन्फर्म टिकट है तो सीट पर बैठें, अगर RAC है तो आधी सीट लें, अगर वेटिंग है तो टीटीई से मिलें।",
    "importantPoints": [
      "if की शर्त हमेशा गोल कोष्ठक ( ) के अंदर लिखी जाती है।",
      "switch स्टेटमेंट में प्रत्येक case के अंत में 'break' लगाना आवश्यक है।",
      "यदि कोई case मैच न हो तो 'default' ब्लॉक निष्पादित होता है।"
    ],
    "commonMistakes": [
      "switch ब्लॉक में `break` भूल जाना (जिससे नीचे के सभी केस अनावश्यक रूप से चल जाते हैं)।",
      "`if (a = 5)` लिख देना (`=` असाइनमेंट है, यह हमेशा सत्य बन जाएगा; तुलना के लिए `==` लिखें)।"
    ],
    "examPerspective": "if-else का सिंटैक्स, switch स्टेटमेंट में break और default की भूमिका, और Fall-through की अवधारणा पर प्रश्न पूछे जाते हैं।",
    "quickRevision": "निर्णय नियंत्रण: if (एकल), if-else (दोतरफा), else-if लैडर (बहु-शर्त), switch-case (निश्चित विकल्पों हेतु break के साथ)।",
    "relatedTopics": [
      "operators-in-js",
      "variables-in-javascript",
      "basic-form-validations-in-javascript"
    ],
    "practiceTask": "switch-case का उपयोग करके सप्ताह के दिन (1=Monday, 2=Tuesday... 7=Sunday) प्रिंट करने का प्रोग्राम बनाएं।"
  },
  {
    "id": "u6-t5",
    "slug": "js-popup-boxes",
    "unit": 6,
    "unitSlug": "unit-6",
    "unitTitle": "JavaScript and Angular JS",
    "title": "JS Popup Boxes (Alert, Confirm, Prompt)",
    "hindiTitle": "जावास्क्रिप्ट डायलॉग बॉक्सेज (Alert, Confirm, Prompt)",
    "definitionEnglish": "JavaScript provides three built-in modal dialog popup boxes through the Window object: alert() (displays an informational message with an OK button), confirm() (displays a confirmation prompt returning true for OK and false for Cancel), and prompt() (accepts textual input from the user returning a string or null).",
    "definitionHindi": "जावास्क्रिप्ट Window ऑब्जेक्ट के माध्यम से तीन अंतर्निहित मोडल डायलॉग बॉक्स प्रदान करता है: alert() (केवल सूचना और OK बटन दिखाता है), confirm() (पुष्टिकरण मांगता है और OK पर true तथा Cancel पर false लौटाता है), और prompt() (यूजर से टेक्स्ट इनपुट लेता है और स्ट्रिंग लौटाता है)।",
    "simpleWords": "यह स्क्रीन पर अचानक उछलकर आने वाले 3 तरह के सूचना बक्से हैं: 1. Alert (केवल खबर देना), 2. Confirm (हाँ या ना पूछना), 3. Prompt (यूजर से उसका नाम या उम्र पूछना)।",
    "whyImportant": "यूजर से त्वरित चेतावनी देने, फाइल डिलीट करने से पहले पूछने और सरल इनपुट लेने के लिए ये तीनों बॉक्सेज परीक्षा और प्रैक्टिकल में बहुत पूछे जाते हैं।",
    "detailedExplanation": "### 1. The Three Native JavaScript Dialog Popup Boxes\n1. **`alert(\"message\")`:**\n   - Displays an informational message dialog with a single **OK** button. Halts script execution until dismissed. Returns `undefined`.\n2. **`confirm(\"question\")`:**\n   - Displays a confirmation dialog with **OK** and **Cancel** buttons. Returns a boolean (`true` if OK clicked, `false` if Cancel clicked).\n3. **`prompt(\"message\", \"default\")`:**\n   - Displays a dialog with a text input field, **OK**, and **Cancel** buttons. Returns the entered text as a string if OK clicked, or `null` if cancelled.",
    "syntax": "alert(\"Information text\");\nlet isAgreed = confirm(\"Do you agree to terms?\"); // Returns true or false\nlet userName = prompt(\"Enter your name:\", \"Guest\"); // Returns string or null",
    "codeExample": "<!DOCTYPE html>\n<html>\n<body>\n  <h2>JavaScript Popup Dialogs Demo</h2>\n  \n  <button onclick=\"showAlert()\">1. Alert</button>\n  <button onclick=\"showConfirm()\">2. Confirm</button>\n  <button onclick=\"showPrompt()\">3. Prompt</button>\n  \n  <p id=\"dialogResult\" style=\"font-weight:bold; color:#0284c7;\"></p>\n\n  <script>\n    function showAlert() {\n      alert(\"Welcome to NIELIT O-Level Study Hub!\");\n    }\n\n    function showConfirm() {\n      let ans = confirm(\"Are you sure you want to delete your progress?\");\n      if (ans === true) {\n        document.getElementById(\"dialogResult\").innerText = \"Confirmed: Progress deleted!\";\n      } else {\n        document.getElementById(\"dialogResult\").innerText = \"Cancelled: Progress kept safe.\";\n      }\n    }\n\n    function showPrompt() {\n      let name = prompt(\"What is your name?\", \"Student\");\n      if (name !== null && name !== \"\") {\n        document.getElementById(\"dialogResult\").innerText = \"Hello, \" + name + \"! Ready for M2-R5.1 Exam?\";\n      }\n    }\n  </script>\n</body>\n</html>",
    "outputExplanation": "प्रत्येक बटन पर क्लिक करने पर संबंधित डायलॉग बॉक्स खुलेगा और यूजर की पसंद के अनुसार नीचे परिणाम दिखेगा।",
    "realWorldAnalogy": "Alert लाउडस्पीकर की घोषणा है; Confirm अदालत में 'क्या आपको यह मंजूर है?' पूछना है; और Prompt फॉर्म काउंटर पर क्लर्क द्वारा आपका नाम पूछना है।",
    "importantPoints": [
      "confirm() केवल true या false लौटाता है।",
      "prompt() यूजर का इनपुट स्ट्रिंग या Cancel पर null लौटाता है।",
      "alert() कोई मान नहीं लौटाता (undefined)।",
      "तीनों मोडल (Modal) होते हैं (इनके खुले रहने पर पीछे का पेज क्लिक नहीं किया जा सकता)।"
    ],
    "commonMistakes": [
      "prompt() से ली गई संख्या को सीधे जोड़ना (चूंकि prompt स्ट्रिंग लौटाता है, इसलिए `10 + 20` जुड़कर `1020` बन जाता है; संख्या बनाने के लिए `parseInt()` या `Number()` लगाएं)।"
    ],
    "examPerspective": "confirm() के रिटर्न मान (true/false), prompt() के रिटर्न मान (string/null), और alert() के बटनों की संख्या पर प्रश्न हर साल आते हैं।",
    "quickRevision": "alert() = केवल OK (सूचना); confirm() = OK/Cancel (true/false); prompt() = इनपुट बॉक्स (String/null).",
    "relatedTopics": [
      "js-events",
      "basic-form-validations-in-javascript",
      "conditions-statements"
    ],
    "practiceTask": "एक prompt बनाकर यूजर से 2 नंबर इनपुट लें, `parseInt()` से जोड़ें और `alert()` द्वारा उनका योग दिखाएं।"
  },
  {
    "id": "u6-t6",
    "slug": "js-events",
    "unit": 6,
    "unitSlug": "unit-6",
    "unitTitle": "JavaScript and Angular JS",
    "title": "JS Events (onclick, onmouseover, onmouseout, onchange, onsubmit, onload, onkeyup)",
    "hindiTitle": "जावास्क्रिप्ट इवेंट्स (onclick, onmouseover, onchange, onsubmit, onload)",
    "definitionEnglish": "JavaScript events are signals or occurrences generated by the browser or user interactions (such as mouse clicks, hovering, key presses, form submissions, or page loading) that can be intercepted and handled by JavaScript event listener functions.",
    "definitionHindi": "जावास्क्रिप्ट इवेंट्स ब्राउज़र या यूजर की गतिविधियों (जैसे माउस क्लिक, होवर, कीबोर्ड की दबाना, फॉर्म सबमिट करना या पेज लोड होना) द्वारा उत्पन्न होने वाले संकेत हैं, जिन्हें जावास्क्रिप्ट इवेंट हैंडलर फंक्शन्स द्वारा पकड़ा और प्रोसेस किया जाता है।",
    "simpleWords": "इवेंट का मतलब है 'कोई घटना घटना'। जैसे जब आप डोरबेल दबाते हैं तो घंटी बजती है; वैसे ही जब यूजर बटन पर क्लिक करता है (onclick) या माउस ले जाता है (onmouseover), तो जावास्क्रिप्ट कोड सक्रिय हो जाता है।",
    "whyImportant": "इवेंट्स ही वेबसाइट को इंटरएक्टिव बनाते हैं। बिना इवेंट्स के जावास्क्रिप्ट को पता ही नहीं चलेगा कि यूजर ने कब कहाँ क्लिक किया।",
    "detailedExplanation": "### 1. Standard Event Handling Mechanisms\nEvents are signals dispatched by the browser when specific actions occur:\n- **Mouse Events:** `onclick`, `ondblclick`, `onmouseover`, `onmouseout`, `onmousemove`.\n- **Keyboard Events:** `onkeydown`, `onkeyup`, `onkeypress`.\n- **Form Events:** `onsubmit` (validates before submission), `onchange` (triggered on input modification), `onfocus`, `onblur`.\n- **Window Events:** `onload` (triggered when HTML, CSS, and media finish loading), `onresize`, `onunload`.\n\n### 2. `addEventListener` Best Practice\n```javascript\nconst btn = document.getElementById('myBtn');\nbtn.addEventListener('click', (e) => {\n  console.log('Button clicked!', e.target);\n});\n```",
    "syntax": "<!-- Inline Event Handler -->\n<button onclick=\"myFunction()\">Click Me</button>\n<div onmouseover=\"hoverIn()\" onmouseout=\"hoverOut()\">Box</div>\n<form onsubmit=\"return validateForm()\">...</form>\n\n<!-- DOM Event Listener (Modern) -->\nelement.addEventListener(\"click\", myFunction);",
    "codeExample": "<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    #box {\n      width: 200px;\n      padding: 20px;\n      background: #0284c7;\n      color: white;\n      text-align: center;\n      border-radius: 8px;\n      transition: background 0.3s;\n      cursor: pointer;\n    }\n  </style>\n</head>\n<body onload=\"welcomeUser()\">\n  <h2>JavaScript Event Handling Demo</h2>\n  \n  <div id=\"box\" \n       onmouseover=\"this.style.background='#16a34a'; this.innerText='Mouse Over!';\" \n       onmouseout=\"this.style.background='#0284c7'; this.innerText='Hover or Click Me';\"\n       onclick=\"alert('Box was clicked!')\">\n    Hover or Click Me\n  </div>\n\n  <p>Live Typing: <input type=\"text\" onkeyup=\"document.getElementById('mirror').innerText = this.value\"></p>\n  <p>Mirror: <span id=\"mirror\" style=\"color:red; font-weight:bold;\"></span></p>\n\n  <script>\n    function welcomeUser() {\n      console.log(\"Page fully loaded via onload event!\");\n    }\n  </script>\n</body>\n</html>",
    "outputExplanation": "माउस बॉक्स पर जाते ही रंग हरा हो जाएगा, बाहर आते ही नीला हो जाएगा, क्लिक करने पर अलर्ट आएगा, और इनपुट में टाइप करते ही नीचे लाइव मिरर दिखेगा।",
    "realWorldAnalogy": "इवेंट्स घर के स्मार्ट सेंसर जैसे हैं: जैसे ही कोई दरवाजे के सामने आता है (onmouseover) लाइट जल जाती है, जैसे ही घंटी का स्विच दबता है (onclick) सायरन बजता है।",
    "importantPoints": [
      "इवेंट नाम HTML में 'on' प्रीफिक्स से शुरू होते हैं (onclick, onload)।",
      "onsubmit इवेंट हमेशा <form> टैग पर लगाया जाता है, सबमिट बटन पर नहीं।",
      "फॉर्म सबमिशन रोकने के लिए onsubmit=\"return false\" का उपयोग होता है।",
      "onload पूरे पेज के लोड होने के बाद घटित होता है।"
    ],
    "commonMistakes": [
      "`onsubmit` को `<input type=\"submit\">` पर लगा देना (यह हमेशा `<form>` टैग पर लगता है)।",
      "onsubmit में `return` भूल जाना (उदा. `onsubmit=\"validate()\"` लिखने पर वैलिडेशन फेल होने पर भी फॉर्म सबमिट हो जाता है; सही रूप `onsubmit=\"return validate()\"` है)।"
    ],
    "examPerspective": "onsubmit, onload, onmouseover/onmouseout, और onchange के ट्रिगर होने के समय पर परीक्षा में बार-बार प्रश्न आते हैं।",
    "quickRevision": "इवेंट्स यूजर की गतिविधियों पर कोड चलाते हैं: onclick (क्लिक), onmouseover/out (होवर), onchange (बदलाव), onsubmit (फॉर्म), onload (पेज लोड)।",
    "relatedTopics": [
      "basic-form-validations-in-javascript",
      "js-popup-boxes",
      "client-side-scripting-intro"
    ],
    "practiceTask": "एक इनपुट बॉक्स बनाएं जिसमें टाइप करने पर `onkeyup` इवेंट से अक्षरों की संख्या (Length) नीचे लाइव दिखाई दे।"
  },
  {
    "id": "u6-t7",
    "slug": "basic-form-validations-in-javascript",
    "unit": 6,
    "unitSlug": "unit-6",
    "unitTitle": "JavaScript and Angular JS",
    "title": "Basic Form Validations in JavaScript",
    "hindiTitle": "जावास्क्रिप्ट में बेसिक फॉर्म वैलिडेशन (Form Validation Workflow)",
    "definitionEnglish": "Basic form validation in JavaScript intercepts the form submit event (onsubmit) to verify that mandatory fields are non-empty, input formats match constraints (such as 10-digit phone numbers, valid email patterns, and matching passwords), returning true to permit submission or false to halt it.",
    "definitionHindi": "जावास्क्रिप्ट में बेसिक फॉर्म वैलिडेशन फॉर्म सबमिट इवेंट (onsubmit) को बीच में रोककर यह जांचता है कि अनिवार्य फील्ड्स खाली न हों, इनपुट प्रारूप नियमों के अनुरूप हों (जैसे 10 अंकों का फोन नंबर, वैध ईमेल और पासवर्ड मिलान), और सबमिशन जारी रखने हेतु true या रोकने हेतु false लौटाता है।",
    "simpleWords": "जब कोई यूजर फॉर्म में नाम लिखना भूल जाए या 10 अंक के मोबाइल नंबर की जगह 8 अंक ही लिखे, तो जावास्क्रिप्ट फॉर्म को सर्वर पर जाने से रोक देती है और लाल रंग में गलती बता देती है।",
    "whyImportant": "O-Level M2-R5.1 प्रैक्टिकल परीक्षा में फॉर्म वैलिडेशन का प्रश्न अनिवार्य रूप से पूछा जाता है। यह वेबसाइट सुरक्षा और यूजर डेटा सटीकता की पहली दीवार है।",
    "detailedExplanation": "### 1. Client-Side Form Validation Architecture\nJavaScript form validation intercepts the `onsubmit` event, inspects input DOM node values against business criteria, displays contextual feedback messages, and returns `false` to abort submission if errors exist:\n\n```javascript\nfunction validateForm(event) {\n  const email = document.getElementById('email').value.trim();\n  const password = document.getElementById('password').value;\n\n  if (email === '' || !email.includes('@')) {\n    alert('Please enter a valid email address.');\n    event.preventDefault();\n    return false;\n  }\n  if (password.length < 6) {\n    alert('Password must be at least 6 characters long.');\n    event.preventDefault();\n    return false;\n  }\n  return true;\n}\n```",
    "syntax": "<form action=\"save.php\" method=\"POST\" onsubmit=\"return validateForm()\">\n  <input type=\"text\" id=\"uname\">\n  <input type=\"submit\" value=\"Register\">\n</form>\n\n<script>\n  function validateForm() {\n    let name = document.getElementById(\"uname\").value;\n    if (name.trim() === \"\") {\n      alert(\"Name cannot be empty!\");\n      return false; // Halts submission\n    }\n    return true; // Allows submission\n  }\n</script>",
    "codeExample": "<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    .err { color: #dc2626; font-size: 13px; margin: 2px 0 8px 0; }\n  </style>\n</head>\n<body>\n  <h2>Student Registration Validation</h2>\n  <form onsubmit=\"return validateAdmission()\">\n    <p>\n      Full Name: <br>\n      <input type=\"text\" id=\"sname\">\n      <div id=\"errName\" class=\"err\"></div>\n    </p>\n    <p>\n      Mobile (10 Digits): <br>\n      <input type=\"text\" id=\"sphone\">\n      <div id=\"errPhone\" class=\"err\"></div>\n    </p>\n    <button type=\"submit\">Submit Registration</button>\n  </form>\n\n  <script>\n    function validateAdmission() {\n      let name = document.getElementById(\"sname\").value.trim();\n      let phone = document.getElementById(\"sphone\").value.trim();\n      let isValid = true;\n\n      // Clear previous errors\n      document.getElementById(\"errName\").innerText = \"\";\n      document.getElementById(\"errPhone\").innerText = \"\";\n\n      if (name === \"\") {\n        document.getElementById(\"errName\").innerText = \"Candidate name is mandatory!\";\n        isValid = false;\n      }\n\n      if (phone === \"\" || isNaN(phone) || phone.length !== 10) {\n        document.getElementById(\"errPhone\").innerText = \"Enter valid 10-digit numeric mobile!\";\n        isValid = false;\n      }\n\n      return isValid; // If false, form will not submit\n    }\n  </script>\n</body>\n</html>",
    "outputExplanation": "खाली नाम या 8 अंकों का नंबर डालने पर फॉर्म सबमिट नहीं होगा और संबंधित इनपुट के नीचे लाल रंग में स्पष्ट त्रुटि संदेश दिखेगा।",
    "realWorldAnalogy": "जैसे परीक्षा केंद्र के गेट पर सुरक्षा गार्ड बिना एडमिट कार्ड और आईडी प्रूफ वाले छात्र को अंदर जाने से रोक देता है, फॉर्म वैलिडेशन अमान्य डेटा को सर्वर पर जाने से रोकता है।",
    "importantPoints": [
      "onsubmit=\"return functionName()\" में 'return' लिखना अनिवार्य है।",
      "isNaN() फंक्शन यह चेक करता है कि वैल्यू संख्या नहीं है (Not a Number)।",
      "trim() शुरुआत और अंत के फालतू स्पेस को हटा देता है।",
      "वैलिडेशन फेल होने पर फंक्शन false लौटाता है।"
    ],
    "commonMistakes": [
      "फ़ोन नंबर चेक करते समय `isNaN()` का उपयोग न करना (जिससे यूजर 'ABCDEF' लिख दे तो भी पास हो जाता है)।",
      "`onsubmit=\"validate()\"` लिखना (बिना return के फॉर्म हमेशा सबमिट हो जाएगा चाहे एरर हो)।"
    ],
    "examPerspective": "O-Level प्रैक्टिकल में जावास्क्रिप्ट फॉर्म वैलिडेशन (Name empty, Phone 10-digit, Password match) का 25 से 30 नंबर का प्रश्न पूछा जाता है।",
    "quickRevision": "फॉर्म वैलिडेशन onsubmit=\"return validate()\" से होता है। खाली फील्ड, लंबाई, isNaN() और पासवर्ड मिलान जांचकर true या false लौटाया जाता है।",
    "relatedTopics": [
      "js-events",
      "html5-form-validations",
      "forms-and-elements"
    ],
    "practiceTask": "एक पासवर्ड और कन्फर्म पासवर्ड वाला फॉर्म बनाएं और जावास्क्रिप्ट से चेक करें कि दोनों पासवर्ड एक समान हैं या नहीं।"
  },
  {
    "id": "u6-t8",
    "slug": "introduction-to-angular-js",
    "unit": 6,
    "unitSlug": "unit-6",
    "unitTitle": "JavaScript and Angular JS",
    "title": "Introduction to Angular JS",
    "hindiTitle": "AngularJS का परिचय एवं MVC आर्किटेक्चर",
    "definitionEnglish": "AngularJS is a structural open-source JavaScript front-end framework developed by Miško Hevery in 2009 and maintained by Google, based on the MVC (Model-View-Controller) architectural pattern to build dynamic Single-Page Applications (SPAs) with two-way data binding.",
    "definitionHindi": "AngularJS एक संरचनात्मक ओपन-सोर्स जावास्क्रिप्ट फ्रंट-एंड फ्रेमवर्क है जिसे 2009 में मिस्को हेवेरी द्वारा विकसित किया गया और Google द्वारा मेंटेन किया गया; यह Two-Way Data Binding और MVC (Model-View-Controller) पैटर्न के आधार पर सिंगल-पेज ऐप्लिकेशन्स (SPAs) बनाने के लिए उपयोग होता है।",
    "simpleWords": "साधारण जावास्क्रिप्ट में HTML में मान बदलने के लिए लंबा `document.getElementById` लिखना पड़ता है। AngularJS एक ऐसा जादुई ढांचा है जिसमें इनपुट में टाइप करते ही स्क्रीन का टेक्स्ट अपने आप (Two-Way Binding) बदल जाता है।",
    "whyImportant": "NIELIT O-Level पाठ्यक्रम में आधुनिक Angular (v2+) के बजाय AngularJS (v1.x) आधिकारिक रूप से निर्धारित है। परीक्षा में इसके डायरेक्टिव्स और MVC पैटर्न पर प्रश्न आते हैं।",
    "detailedExplanation": "### 1. Overview and MVC Architecture of AngularJS\nAngularJS is a structural open-source JavaScript front-end framework developed by Google (first released in 2010 by Miško Hevery). It extends standard HTML vocabulary with custom attributes (Directives) to build dynamic Single Page Applications (SPAs).\n\n### 2. Core Architectural Pillars of AngularJS\n1. **Model-View-Controller (MVC):**\n   - **Model:** Application data state stored in JavaScript objects.\n   - **View:** The HTML DOM template displaying data to the user.\n   - **Controller:** JavaScript business logic binding Model to View via `$scope`.\n2. **Two-Way Data Binding:** Any update in the Model instantly reflects in the View, and user changes in the View instantly update the Model without manual DOM manipulation.\n3. **Dependency Injection:** Automatically provides components with their required services and dependencies.",
    "syntax": "<!-- Linking AngularJS CDN -->\n<script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js\"></script>\n\n<!-- Minimal AngularJS Application -->\n<div ng-app=\"\">\n  <input type=\"text\" ng-model=\"name\">\n  <h1>Hello {{ name }}</h1>\n</div>",
    "codeExample": "<!DOCTYPE html>\n<html>\n<head>\n  <script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js\"></script>\n</head>\n<body>\n  <h2>AngularJS Two-Way Data Binding Showcase</h2>\n  \n  <!-- ng-app initializes the AngularJS application -->\n  <div ng-app=\"\" style=\"border:2px solid #0284c7; padding:20px; border-radius:8px; max-width:350px;\">\n    <label>Type your name:</label><br>\n    <!-- ng-model binds the input to variable 'student' -->\n    <input type=\"text\" ng-model=\"student\" placeholder=\"Enter name here\" style=\"padding:6px; width:90%; margin-top:6px;\">\n    \n    <!-- Expression {{ student }} updates instantly in real time! -->\n    <h3 style=\"color:#0284c7;\">Welcome, {{ student }}!</h3>\n  </div>\n</body>\n</html>",
    "outputExplanation": "इनपुट बॉक्स में जैसे-जैसे आप टाइप करेंगे, नीचे 'Welcome, [आपका नाम]' बिना एक लाइन भी JS कोड लिखे रियल-टाइम में बदलता जाएगा।",
    "realWorldAnalogy": "Two-Way Data Binding एक शीशे (Mirror) जैसी है; आप शीशे के सामने मुस्कुराएंगे तो शीशे का प्रतिबिंब भी तुरंत मुस्कुराएगा, दोनों हमेशा सिंक रहते हैं।",
    "importantPoints": [
      "AngularJS को Google द्वारा सपोर्ट प्राप्त है।",
      "यह MVC (Model-View-Controller) आर्किटेक्चर पर आधारित है।",
      "AngularJS का सबसे प्रसिद्ध फीचर Two-Way Data Binding है।",
      "सिलेबस में AngularJS 1.x शामिल है (Angular 2+ नहीं)।"
    ],
    "commonMistakes": [
      "`ng-app` लगाना भूल जाना (बिना ng-app के AngularJS एक्टिवेट ही नहीं होता और स्क्रीन पर सादा `{{ student }}` लिखा रह जाता है)।"
    ],
    "examPerspective": "AngularJS का डेवलपर (Miško Hevery / Google), MVC का पूर्ण रूप, और Two-Way Data Binding की परिभाषा पर वस्तुनिष्ठ प्रश्न पूछे जाते हैं।",
    "quickRevision": "AngularJS Google का MVC जावास्क्रिप्ट फ्रेमवर्क है। मुख्य ताकत: Two-Way Data Binding और ng- डायरेक्टिव्स।",
    "relatedTopics": [
      "angular-js-expressions",
      "angular-js-directives",
      "client-side-scripting-intro"
    ],
    "practiceTask": "एक AngularJS ऐप बनाएं जिसमें इनपुट बॉक्स में रंग का नाम लिखने पर नीचे उस रंग का नाम प्रदर्शित हो।"
  },
  {
    "id": "u6-t9",
    "slug": "angular-js-expressions",
    "unit": 6,
    "unitSlug": "unit-6",
    "unitTitle": "JavaScript and Angular JS",
    "title": "Angular JS Expressions",
    "hindiTitle": "AngularJS एक्सप्रेशन्स (Expressions Syntax {{ }})",
    "definitionEnglish": "AngularJS Expressions are code snippets written inside double curly braces {{ expression }} that resolve and bind data directly into HTML, evaluating mathematical operations, string concatenations, and object/array properties without throwing runtime exceptions.",
    "definitionHindi": "AngularJS एक्सप्रेशन्स दोहरे घुंघराले कोष्ठकों {{ expression }} के अंदर लिखे जाने वाले कोड स्निपेट्स हैं जो डेटा को सीधे HTML में बांधते हैं और प्रदर्शित करते हैं; ये गणितीय गणनाएं, स्ट्रिंग संयोजन, और ऑब्जेक्ट/ऐरे प्रॉपर्टीज का मूल्यांकन करते हैं।",
    "simpleWords": "AngularJS में जब आप `{{ 5 + 5 }}` लिखते हैं, तो ब्राउज़र स्क्रीन पर `10` दिखाता है। यह HTML के अंदर ही गणित और वेरिएबल दिखाने का सबसे सरल तरीका है।",
    "whyImportant": "AngularJS में डेटा को स्क्रीन पर प्रिंट करने का मुख्य तरीका एक्सप्रेशन्स ही हैं।",
    "detailedExplanation": "### 1. AngularJS Expressions Syntax & Rules\nAngularJS expressions are written inside double curly braces: `{{ expression }}`.\n\n### 2. Key Capabilities & Differences from Plain JavaScript\n- **Inline Binding:** Resolves variables, mathematical operations, and string concatenations directly into HTML (e.g., `{{ 5 * 10 }}` renders `50`).\n- **Filters Support:** Formats data with the pipe (`|`) symbol (e.g., `{{ price | currency }}`, `{{ name | uppercase }}`).\n- **Forgiving Evaluation:** Unlike plain JS which throws `NullPointerException` or `TypeError`, AngularJS expressions evaluate `null` and `undefined` safely without crashing the UI.\n- **Restrictions:** Expressions cannot contain loops (`for`, `while`), conditional branching (`if-else`), or direct function declarations.",
    "syntax": "{{ 10 + 20 }}              // Math calculation\n{{ firstName + \" \" + lastName }} // String\n{{ student.marks }}        // Object property\n{{ subjects[1] }}          // Array item",
    "codeExample": "<!DOCTYPE html>\n<html>\n<head>\n  <script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js\"></script>\n</head>\n<body>\n  <h2>AngularJS Expressions in Action</h2>\n  \n  <div ng-app=\"\" ng-init=\"qty=5; price=20; student={name:'Amit', city:'Lucknow'}\">\n    <p>Math Expression: 10 + 25 = <b>{{ 10 + 25 }}</b></p>\n    <p>Billing: {{ qty }} books at ₹{{ price }} each = <b>₹{{ qty * price }}</b></p>\n    <p>Student Name: <b>{{ student.name }}</b> from <b>{{ student.city }}</b></p>\n  </div>\n</body>\n</html>",
    "outputExplanation": "स्क्रीन पर 10+25 का मान 35, 5 किताबों का बिल ₹100, और ऑब्जेक्ट से अमित व लखनऊ निकलकर प्रिंट हो जाएगा।",
    "realWorldAnalogy": "जैसे एक्सेल में किसी सेल में `=A1*B1` लिखने पर वह अपने आप गुणा करके उत्तर दिखा देता है, वैसे ही `{{ }}` तुरंत मान निकाल देता है।",
    "importantPoints": [
      "AngularJS एक्सप्रेशन्स {{ expression }} सिंटैक्स में लिखे जाते हैं।",
      "यह अनडिफाइंड वेरिएबल्स पर एरर फेंकने के बजाय खाली स्थान दिखाता है।",
      "एक्सप्रेशन्स के अंदर लूप्स या कंडीशंस नहीं लिखे जा सकते।"
    ],
    "commonMistakes": [
      "सिंगल कर्ली ब्रेस `{ expression }` लगा देना (AngularJS में डबल कर्ली ब्रेस `{{ }}` अनिवार्य है)।"
    ],
    "examPerspective": "प्रश्न: 'AngularJS में एक्सप्रेशन्स किस सिंबल के अंदर लिखे जाते हैं?' ({{ }}), 'क्या AngularJS एक्सप्रेशन्स में if-else मान्य है?' (नहीं).",
    "quickRevision": "{{ expression }} दोहरे कोष्ठकों में लिखा जाता है, गणितीय गणनाएं और डेटा प्रिंट करता है, और क्रैश नहीं होता।",
    "relatedTopics": [
      "introduction-to-angular-js",
      "angular-js-directives",
      "angular-js-modules"
    ],
    "practiceTask": "`ng-init` में `hours=120` और `fee=50` सेट करें और `{{ hours * fee }}` से कुल फीस स्क्रीन पर दिखाएं।"
  },
  {
    "id": "u6-t10",
    "slug": "angular-js-modules",
    "unit": 6,
    "unitSlug": "unit-6",
    "unitTitle": "JavaScript and Angular JS",
    "title": "Angular JS Modules",
    "hindiTitle": "AngularJS मॉड्यूल्स एवं कंट्रोलर्स (Modules & Controllers)",
    "definitionEnglish": "An AngularJS Module defines an application container using 'angular.module()', serving as the boundary that bundles controllers, services, directives, and filters together, maintaining separation of concerns and preventing global scope pollution.",
    "definitionHindi": "AngularJS मॉड्यूल 'angular.module()' का उपयोग करके एक ऐप्लिकेशन कंटेनर को परिभाषित करता है, जो कंट्रोलर्स, सर्विसेज, डायरेक्टिव्स और फिल्टर्स को एक साथ बांधने वाली सीमा के रूप में कार्य करता है और कोड को व्यवस्थित रखता है।",
    "simpleWords": "मॉड्यूल ऐप्लिकेशन का मुख्य बक्सा (Container) है। इस बक्से के अंदर हम कंट्रोलर (कुक/शेफ) रखते हैं जो डेटा तैयार करता है और स्क्रीन (View) को परोसता है।",
    "whyImportant": "वास्तविक ऐप्लिकेशन्स में कोड को व्यवस्थित रखने और MVC पैटर्न का पालन करने के लिए मॉड्यूल्स और कंट्रोलर्स का उपयोग अनिवार्य होता है।",
    "detailedExplanation": "### 1. AngularJS Modules and Application Initialization\nA Module is a container for the various parts of an application (controllers, directives, filters, services).\n\n### 2. Syntax for Defining and Instantiating Modules\n```javascript\n// Step 1: Define a new application module\nconst app = angular.module(\"myApp\", []);\n\n// Step 2: Attach a controller to the module\napp.controller(\"myCtrl\", function($scope) {\n  $scope.firstName = \"Antigravity\";\n  $scope.course = \"NIELIT O-Level\";\n});\n```\n\n```html\n<!-- Step 3: Link module and controller to the HTML View -->\n<div ng-app=\"myApp\" ng-controller=\"myCtrl\">\n  <h1>Welcome to {{ course }}</h1>\n  <p>Student: {{ firstName }}</p>\n</div>\n```",
    "syntax": "// 1. Define Module\nvar app = angular.module(\"myApp\", []);\n\n// 2. Define Controller with $scope\napp.controller(\"myCtrl\", function($scope) {\n  $scope.moduleName = \"M2-R5.1: Web Designing\";\n  $scope.marks = 90;\n});",
    "codeExample": "<!DOCTYPE html>\n<html>\n<head>\n  <script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js\"></script>\n</head>\n<body ng-app=\"nielitApp\" ng-controller=\"courseCtrl\">\n  <h2>AngularJS Module & Controller Demo</h2>\n  \n  <div style=\"background:#f0f9ff; border:1px solid #bae6fd; padding:15px; border-radius:6px; max-width:350px;\">\n    <p>Module: <b>{{ moduleCode }}</b></p>\n    <p>Title: <b>{{ title }}</b></p>\n    <p>Duration: <b>{{ hours }} Hours</b></p>\n  </div>\n\n  <script>\n    // Create Application Module\n    var app = angular.module(\"nielitApp\", []);\n\n    // Create Controller\n    app.controller(\"courseCtrl\", function($scope) {\n      $scope.moduleCode = \"M2-R5.1\";\n      $scope.title = \"Web Designing & Publishing\";\n      $scope.hours = 120;\n    });\n  </script>\n</body>\n</html>",
    "outputExplanation": "कंट्रोलर में परिभाषित $scope वेरिएबल्स (M2-R5.1, 120 Hours) सीधे HTML में सुंदर कार्ड के रूप में दिखेंगे।",
    "realWorldAnalogy": "मॉड्यूल रेस्टोरेंट का पूरा ढांचा है; कंट्रोलर उसका हेड-शेफ है; और `$scope` वह वेटर है जो किचन से खाना लेकर टेबल (View) तक पहुंचाता है।",
    "importantPoints": [
      "angular.module(\"appName\", []) से मॉड्यूल बनता है।",
      "खाली ऐरे [] डिपेंडेंट मॉड्यूल्स की सूची के लिए होता है।",
      "$scope ऑब्जेक्ट मॉडल और व्यू के बीच डेटा ट्रांसफर करता है।"
    ],
    "commonMistakes": [
      "`angular.module(\"myApp\")` में खाली ऐरे `[]` छोड़ देना (बिना `[]` के यह नया मॉड्यूल बनाने के बजाय पुराना मॉड्यूल ढूंढने लगता है)।"
    ],
    "examPerspective": "मॉड्यूल बनाने का सिंटैक्स, $scope की भूमिका, और ng-controller डायरेक्टिव के उपयोग पर प्रश्न पूछे जाते हैं।",
    "quickRevision": "angular.module(\"app\", []) मॉड्यूल बनाता है। app.controller(\"ctrl\", function($scope){}) लॉजिक और डेटा संभालता है।",
    "relatedTopics": [
      "introduction-to-angular-js",
      "angular-js-directives",
      "angular-js-expressions"
    ],
    "practiceTask": "एक मॉड्यूल और कंट्रोलर बनाएं जिसमें `$scope.city = 'Prayagraj'` हो और उसे HTML में प्रदर्शित करें।"
  },
  {
    "id": "u6-t11",
    "slug": "angular-js-directives",
    "unit": 6,
    "unitSlug": "unit-6",
    "unitTitle": "JavaScript and Angular JS",
    "title": "Angular JS Directives (ng-app, ng-model, ng-bind, ng-init, ng-repeat)",
    "hindiTitle": "AngularJS डायरेक्टिव्स (ng-app, ng-model, ng-bind, ng-repeat)",
    "definitionEnglish": "AngularJS Directives are special HTML attributes prefixed with 'ng-' that extend standard HTML vocabulary and behavior, instructing the AngularJS compiler to attach custom behavior, perform data binding, initialize variables, or repeat DOM structures.",
    "definitionHindi": "AngularJS डायरेक्टिव्स 'ng-' प्रीफिक्स वाले विशेष HTML एट्रिब्यूट्स हैं जो मानक HTML शब्दावली और व्यवहार का विस्तार करते हैं; ये AngularJS कंपाइलर को कस्टम व्यवहार जोड़ने, डेटा बाइंडिंग करने, वेरिएबल्स इनिशियलाइज़ करने या तत्वों को दोहराने का निर्देश देते हैं।",
    "simpleWords": "डायरेक्टिव्स HTML टैग्स के अंदर लिखे जाने वाले विशेष आदेश (Commands) हैं जो 'ng-' से शुरू होते हैं। जैसे `ng-app` कहता है 'Angular चालू हो जाओ', `ng-model` इनपुट को बांधता है, और `ng-repeat` लिस्ट को लूप में घुमाता है।",
    "whyImportant": "AngularJS का पूरा जादू डायरेक्टिव्स पर ही टिका है। O-Level परीक्षा में ng-app, ng-model, और ng-repeat पर 100% प्रश्न आता है।",
    "detailedExplanation": "### 1. The Essential Built-in AngularJS Directives\nDirectives are custom markers on DOM elements that tell AngularJS to attach specified behaviors or transform the DOM:\n\n1. **`ng-app`:** Initializes and bootstraps an AngularJS application at the root element.\n2. **`ng-init`:** Initializes inline application variables for quick prototyping.\n3. **`ng-model`:** Binds the value of HTML form controls (`<input>`, `<select>`, `<textarea>`) to application data in `$scope` (implements Two-Way Data Binding).\n4. **`ng-bind`:** Replaces the text content of an element with the value of an expression (`<span ng-bind=\"username\"></span>`).\n5. **`ng-repeat`:** Clones HTML elements once for each item in an array (similar to a `for-in` loop):\n   ```html\n   <li ng-repeat=\"x in students\">{{ x.name }} — Marks: {{ x.marks }}</li>\n   ```\n6. **`ng-show` / `ng-hide`:** Shows or hides elements based on boolean condition expressions.\n7. **`ng-click`:** Attaches custom click event handlers directly in markup.",
    "syntax": "<div ng-app=\"\" ng-init=\"names=['Amit', 'Priya', 'Rohan']\">\n  <input type=\"text\" ng-model=\"search\">\n  <ul>\n    <li ng-repeat=\"n in names | filter:search\">{{ n }}</li>\n  </ul>\n</div>",
    "codeExample": "<!DOCTYPE html>\n<html>\n<head>\n  <script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js\"></script>\n</head>\n<body ng-app=\"\" ng-init=\"courses=['M1-R5.1: IT Tools', 'M2-R5.1: Web Design', 'M3-R5.1: Python', 'M4-R5.1: IoT']\">\n  <h2>AngularJS Directives Mastery Showcase</h2>\n\n  <!-- ng-model with instant filtering -->\n  <label>Search Syllabus Module:</label><br>\n  <input type=\"text\" ng-model=\"searchKeyword\" placeholder=\"Filter courses...\" style=\"padding:6px; width:280px; margin-top:4px;\">\n\n  <!-- ng-repeat looping over the courses array -->\n  <ul style=\"max-width:300px; padding-left:20px; margin-top:12px;\">\n    <li ng-repeat=\"item in courses | filter:searchKeyword\" style=\"padding:4px 0;\">\n      {{ item }}\n    </li>\n  </ul>\n</body>\n</html>",
    "outputExplanation": "सर्च बॉक्स में जैसे ही आप 'Web' लिखेंगे, ng-repeat लूप तुरंत बाकी कोर्स छिपा देगा और केवल 'M2-R5.1: Web Design' दिखाएगा!",
    "realWorldAnalogy": "`ng-repeat` एक फोटोकॉपी मशीन जैसा है; जितने छात्र होंगे, यह उतनी ही प्रतियां (Rows) अपने आप छाप देगा।",
    "importantPoints": [
      "सभी AngularJS डायरेक्टिव्स 'ng-' प्रीफिक्स से शुरू होते हैं।",
      "ng-app ऐप्लिकेशन को सक्रिय करता है।",
      "ng-model Two-Way Data Binding करता है।",
      "ng-repeat ऐरे के तत्वों पर लूप चलाता है।"
    ],
    "commonMistakes": [
      "`ng-model` को साधारण `<div>` या `<p>` पर लगाना (ng-model केवल फॉर्म इनपुट कंट्रोल्स पर काम करता है; साधारण तत्वों के लिए `ng-bind` का उपयोग करें)।"
    ],
    "examPerspective": "ng-app, ng-model, ng-bind, और ng-repeat के कार्य और उपयोग पर परीक्षा में 10 से 15 नंबर के प्रश्न पूछे जाते हैं।",
    "quickRevision": "डायरेक्टिव्स: ng-app (शुरुआत), ng-model (डेटा बाइंडिंग), ng-bind (प्रिंट), ng-init (इनिशियलाइज़), ng-repeat (लूप दोहराव)।",
    "relatedTopics": [
      "introduction-to-angular-js",
      "angular-js-expressions",
      "angular-js-modules"
    ],
    "practiceTask": "एक `ng-repeat` बनाकर 4 फलों के नाम वाली लिस्ट को स्क्रीन पर प्रदर्शित करें और सर्च बॉक्स से फिल्टर करें।"
  }
];
