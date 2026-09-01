// Unit 6: JavaScript and Angular JS - Complete Topic Notes

export const unit6Topics = [
  {
    id: "u6-t1",
    slug: "client-side-scripting-intro",
    unit: 6,
    unitSlug: "unit-6",
    unitTitle: "JavaScript and Angular JS",
    title: "Introduction to Client Side Scripting Language (JavaScript)",
    hindiTitle: "क्लाइंट-साइड स्क्रिप्टिंग भाषा का परिचय (जावास्क्रिप्ट एवं जावा में अंतर)",
    definitionEnglish: "JavaScript is a lightweight, interpreted, dynamically typed, cross-platform, client-side object-based scripting language designed by Brendan Eich in 1995, standardized as ECMAScript, executed directly inside web browsers to create rich, interactive, dynamic user experiences.",
    definitionHindi: "जावास्क्रिप्ट (JS) एक हल्की, इंटरप्रिटेड, डायनामिकली टाइप्ड, क्रॉस-प्लेटफॉर्म और क्लाइंट-साइड ऑब्जेक्ट-बेस्ड स्क्रिप्टिंग भाषा है, जिसका आविष्कार 1995 में ब्रेंडन आइच ने किया था; यह सीधे वेब ब्राउज़र में निष्पादित होकर वेबपेजों को इंटरएक्टिव और जीवंत बनाती है।",
    simpleWords: "HTML से शरीर का ढांचा बनता है, CSS से सुंदरता आती है, और JavaScript उस शरीर को सोचने, चलने और बात करने की शक्ति (Brain & Logic) देती है।",
    whyImportant: "जावास्क्रिप्ट वेब की एकमात्र सार्वभौमिक प्रोग्रामिंग भाषा है जिसे हर आधुनिक वेब ब्राउज़र सीधे समझता है। O-Level परीक्षा में यह 20 अंकों का भार रखती है।",
    detailedExplanation: `### 1. इतिहास एवं विकास:
- **आविष्कारक:** **Brendan Eich** ने **1995** में Netscape Communications में केवल 10 दिनों में इसका पहला संस्करण बनाया।
- **प्रारंभिक नाम:** पहले इसका नाम **Mocha**, फिर **LiveScript**, और अंततः विपणन कारणों से **JavaScript** रखा गया।
- **मानकीकरण:** इसे **ECMA International** द्वारा **ECMAScript (ES6 / ES2015)** के रूप में मानकीकृत किया गया है।

### 2. महत्वपूर्ण परीक्षा स्पष्टीकरण: Java बनाम JavaScript
**Java और JavaScript दोनों बिल्कुल अलग-अलग भाषाएं हैं!**
- *कहावत:* जैसे कार (Car) और कालीन (Carpet) में कोई संबंध नहीं है, वैसे ही Java और JavaScript में कोई समानता नहीं है।
- **Java:** Sun Microsystems द्वारा बनाई गई भारी-भरकम कम्पाइल्ड (Compiled) ऑब्जेक्ट-ओरिएंटेड भाषा (JVM पर चलती है)।
- **JavaScript:** Netscape द्वारा बनाई गई हल्की इंटरप्रिटेड (Interpreted) स्क्रिप्टिंग भाषा (ब्राउज़र में चलती है)।

### 3. HTML में जावास्क्रिप्ट जोड़ने के तरीके:
1. **Inline:** \`<button onclick="alert('Hello')">Click</button>\`
2. **Internal:** \`<head>\` या \`<body>\` के अंदर \`<script> ... </script>\` टैग द्वारा।
3. **External:** बाहरी \`.js\` फाइल बनाकर \`<script src="app.js"></script>\` द्वारा।`,
    syntax: `<script>
  // JavaScript code inside HTML
  console.log("Hello from JavaScript!");
</script>
<script src="script.js"></script>`,
    codeExample: `<!DOCTYPE html>
<html>
<body>
  <h2>JavaScript Interactive Demo</h2>
  <p id="demo">Original text before clicking button.</p>
  
  <button type="button" onclick="changeContent()">
    Change Text with JavaScript
  </button>

  <script>
    function changeContent() {
      document.getElementById("demo").innerHTML = "Hello NIELIT! Text changed by JavaScript!";
      document.getElementById("demo").style.color = "#0284c7";
    }
  </script>
</body>
</html>`,
    outputExplanation: "बटन दबाते ही बिना पेज रीलोड हुए पैराग्राफ का टेक्स्ट बदल जाएगा और उसका रंग नीला हो जाएगा।",
    realWorldAnalogy: "यदि एक खिलौना कार में प्लास्टिक बॉडी (HTML) है और उस पर लाल रंग (CSS) है, तो उसके अंदर लगी बैटरी और रिमोट कंट्रोल सर्किट (JavaScript) है जो उसे दौड़ाता है।",
    importantPoints: [
      "JavaScript का आविष्कार 1995 में Brendan Eich ने किया।",
      "Java और JavaScript दो बिल्कुल अलग-अलग भाषाएं हैं।",
      "JavaScript एक इंटरप्रिटेड (Interpreted) भाषा है (इसे कंपाइल नहीं करना पड़ता)।",
      "बाहरी JS फाइल का एक्सटेंशन .js होता है और इसके अंदर <script> टैग नहीं लिखा जाता।"
    ],
    commonMistakes: [
      "Java और JavaScript को एक ही समझ लेना।",
      "बाहरी `.js` फाइल के अंदर `<script>` टैग लिख देना (यह केवल HTML फाइल में लिखा जाता है)।"
    ],
    examPerspective: "Brendan Eich का नाम, आविष्कार का वर्ष (1995), Java बनाम JavaScript में अंतर, और <script> टैग के उपयोग पर हर साल प्रश्न आते हैं।",
    quickRevision: "जावास्क्रिप्ट क्लाइंट-साइड इंटरप्रिटेड स्क्रिप्टिंग भाषा है। आविष्कारक: ब्रेंडन आइच (1995)। जावा और जावास्क्रिप्ट पूरी तरह अलग हैं।",
    relatedTopics: ["variables-in-javascript", "js-events", "javascript-vs-java"],
    practiceTask: "एक बटन बनाएं जिस पर क्लिक करने पर स्क्रीन पर एक अलर्ट बॉक्स (`alert()`) खुले जिसमें 'Welcome to O-Level' लिखा हो।"
  },
  {
    id: "u6-t2",
    slug: "variables-in-javascript",
    unit: 6,
    unitSlug: "unit-6",
    unitTitle: "JavaScript and Angular JS",
    title: "Variables in JavaScript",
    hindiTitle: "जावास्क्रिप्ट में वेरिएबल्स (var, let, const) एवं डेटा टाइप्स",
    definitionEnglish: "Variables in JavaScript are named memory containers used to store data values, declared using 'var' (function-scoped, legacy), 'let' (block-scoped, reassignable), or 'const' (block-scoped, immutable identifier), capable of holding primitive data types (String, Number, Boolean, Null, Undefined, Symbol, BigInt) or complex Objects.",
    definitionHindi: "जावास्क्रिप्ट में वेरिएबल्स डेटा मानों को संग्रहीत करने वाले नामित मेमोरी कंटेनर होते हैं, जिन्हें 'var' (फंक्शन-स्कोप्ड, पुराना), 'let' (ब्लॉक-स्कोप्ड, परिवर्तनीय) या 'const' (ब्लॉक-स्कोप्ड, अपरिवर्तनीय) द्वारा घोषित किया जाता है, जो प्रिमिटिव डेटा टाइप्स या ऑब्जेक्ट्स को धारण कर सकते हैं।",
    simpleWords: "वेरिएबल एक लेबल लगा हुआ खाली डिब्बा है जिसमें आप कोई संख्या (जैसे उम्र = 20) या नाम (जैसे नाम = 'सौरभ') रख सकते हैं और प्रोग्राम में जरूरत पड़ने पर उसका इस्तेमाल या बदलाव कर सकते हैं।",
    whyImportant: "बिना वेरिएबल के कोई भी प्रोग्राम डेटा याद नहीं रख सकता। आधुनिक ES6 में var, let, और const के बीच अंतर समझना तकनीकी साक्षात्कारों और परीक्षा का सबसे पसंदीदा विषय है।",
    detailedExplanation: `### 1. var बनाम let बनाम const की विस्तृत तुलना:
| विशेषता | var (ES5 - पुराना) | let (ES6 - आधुनिक) | const (ES6 - आधुनिक) |
|:---|:---|:---|:---|
| **Scope (दायरा)** | **Function Scoped** | **Block Scoped (\`{ }\`)** | **Block Scoped (\`{ }\`)** |
| **Re-declaration** | संभव है (\`var a=1; var a=2;\`) | अमान्य (Error देगा) | अमान्य (Error देगा) |
| **Re-assignment** | संभव है | संभव है (\`let x=5; x=10;\`) | असंभव (स्थिर मान) |
| **Hoisting** | \`undefined\` के साथ Hoist होता है | Temporal Dead Zone (TDZ) | Temporal Dead Zone (TDZ) |

### 2. जावास्क्रिप्ट के प्रिमिटिव डेटा टाइप्स (Data Types):
1. **String:** टेक्स्ट (कोट्स के अंदर) - \`"Hello"\` या \`'NIELIT'\`
2. **Number:** पूर्णांक और दशमलव - \`25\`, \`98.5\`
3. **Boolean:** केवल दो मान - \`true\` या \`false\`
4. **Undefined:** वेरिएबल घोषित हुआ है लेकिन मान नहीं दिया गया (\`let x;\`)।
5. **Null:** जानबूझकर खाली छोड़ा गया मान (\`let y = null;\`)।
6. **Object:** की-वैल्यू जोड़ा - \`{ name: "Amit", age: 22 }\`
7. **Array:** मानों की सूची - \`["HTML", "CSS", "JS"]\`

### 3. \`typeof\` ऑपरेटर (विशेष परीक्षा बिंदु!):
- \`typeof "Hello"\` -> \`"string"\`
- \`typeof 42\` -> \`"number"\`
- \`typeof true\` -> \`"boolean"\`
- \`typeof undefined\` -> \`"undefined"\`
- **\`typeof null\` -> \`"object"\`** (ऐतिहासिक जावास्क्रिप्ट बग - परीक्षा में बार-बार पूछा जाता है!)
- **\`typeof NaN\` -> \`"number"\`** (NaN का अर्थ Not-a-Number है लेकिन इसका टाइप नंबर होता है!)`,
    syntax: `var name = "Rahul";    // Function scope
let age = 22;           // Block scope
const PI = 3.14159;     // Immutable constant`,
    codeExample: `<!DOCTYPE html>
<html>
<body>
  <h2>JavaScript Variables Showcase</h2>
  <p id="output"></p>

  <script>
    let studentName = "Saurabh Tiwari";
    let marks = 95;
    const examPassed = true;

    // Checking types
    let info = "Student: " + studentName + "<br>" +
               "Marks: " + marks + " (Type: " + typeof marks + ")<br>" +
               "Passed: " + examPassed + " (Type: " + typeof examPassed + ")<br>" +
               "Type of null: " + typeof null;

    document.getElementById("output").innerHTML = info;
  </script>
</body>
</html>`,
    outputExplanation: "स्क्रीन पर छात्र का नाम, अंक, बूलियन पास स्थिति, और `typeof null = object` स्पष्ट रूप से प्रदर्शित होगा।",
    realWorldAnalogy: "`var` एक खुली बाल्टी जैसा है जिसका पानी कहीं भी फैल जाता है; `let` एक ढक्कनदार लंच बॉक्स (Block) जैसा है जो केवल अपनी कक्षा के अंदर खुलता है; और `const` एक सीलबंद बैंक लॉकर है जिसका मान कभी नहीं बदला जा सकता।",
    importantPoints: [
      "let और const दोनों ब्लॉक-स्कोप्ड ({ }) होते हैं।",
      "const को घोषित करते समय ही मान देना अनिवार्य है और इसे बाद में बदला नहीं जा सकता।",
      "typeof null का मान 'object' होता है।",
      "typeof NaN का मान 'number' होता है।"
    ],
    commonMistakes: [
      "`const` वेरिएबल को बाद में री-असाइन करने की कोशिश करना (TypeError देगा)।",
      "एक ही ब्लॉक में एक ही नाम से दो बार `let` घोषित करना।"
    ],
    examPerspective: "var, let, const में अंतर, ब्लॉक स्कोप की परिभाषा, और `typeof null` तथा `typeof NaN` पर प्रश्न हर बार आते हैं।",
    quickRevision: "var = फंक्शन स्कोप, let = ब्लॉक स्कोप (परिवर्तनीय), const = ब्लॉक स्कोप (स्थिर)। typeof null = object, typeof NaN = number.",
    relatedTopics: ["operators-in-js", "conditions-statements", "client-side-scripting-intro"],
    practiceTask: "कंसोल में `let a = 10; { let a = 20; console.log(a); } console.log(a);` लिखकर ब्लॉक स्कोप का प्रभाव देखें।"
  },
  {
    id: "u6-t3",
    slug: "operators-in-js",
    unit: 6,
    unitSlug: "unit-6",
    unitTitle: "JavaScript and Angular JS",
    title: "Operators in JS",
    hindiTitle: "जावास्क्रिप्ट ऑपरेटर्स (Arithmetic, Comparison, Logical, Ternary)",
    definitionEnglish: "Operators in JavaScript are special symbols that perform mathematical, relational, logical, or bitwise computations on one or more operands (variables and values), categorized into Arithmetic, Assignment, Comparison (loose == vs strict ===), Logical (&&, ||, !), and the Conditional Ternary operator (? :).",
    definitionHindi: "जावास्क्रिप्ट ऑपरेटर्स वे विशेष प्रतीक होते हैं जो एक या अधिक ऑपरेंड्स (वेरिएबल्स और मानों) पर गणितीय, संबंधपरक, तार्किक या बिटवाइज़ गणनाएं करते हैं; इन्हें अंकगणितीय, असाइनमेंट, तुलनात्मक (ढीला == बनाम सख्त ===), तार्किक और टर्नरी ऑपरेटर में वर्गीकृत किया जाता है।",
    simpleWords: "ऑपरेटर वे संकेत (जैसे +, -, *, ==, &&) हैं जो दो संख्याओं को जोड़ने, बड़ा-छोटा देखने या दो शर्तों को एक साथ जांचने का काम करते हैं।",
    whyImportant: "किसी भी प्रोग्रामिंग भाषा में निर्णय लेने और गणना करने का पूरा आधार ऑपरेटर्स ही होते हैं।",
    detailedExplanation: `### 1. Arithmetic Operators (अंकगणितीय):
\`+\` (जोड़), \`-\` (घटाव), \`*\` (गुणा), \`/\` (भाग), \`%\` (मॉड्यूलो / शेषफल), \`++\` (इंक्रीमेंट), \`--\` (डिक्रीमेंट), \`**\` (घात / Power)।
- विशेष: \`10 % 3\` का मान **\`1\`** होता है (10 को 3 से भाग देने पर बचा शेषफल)।

### 2. Comparison Operators (तुलनात्मक - अति महत्वपूर्ण!):
- **\`==\` (Loose Equality):** केवल **मान (Value)** की तुलना करता है, डेटा टाइप को अपने आप बदल देता है।
  - उदा. \`5 == "5"\` -> **\`true\`**
- **\`===\` (Strict Equality / Identity):** **मान और डेटा टाइप दोनों** की सख्त तुलना करता है।
  - उदा. \`5 === "5"\` -> **\`false\`** (क्योंकि एक Number है और दूसरा String!)
- \`!=\` (Loose Not Equal) बनाम \`!==\` (Strict Not Equal)।
- \`>\`, \`<\`, \`>=\`, \`<=\`।

### 3. Logical Operators (तार्किक):
- **\`&&\` (Logical AND):** सभी शर्तें सत्य होने पर ही \`true\` देता है।
- **\`||\` (Logical OR):** कोई एक भी शर्त सत्य होने पर \`true\` देता है।
- **\`!\` (Logical NOT):** सत्य को असत्य और असत्य को सत्य में पलट देता है।

### 4. Ternary Operator (तीन ऑपरेंड वाला ऑपरेटर):
- \`condition ? valueIfTrue : valueIfFalse\`
- उदाहरण: \`let result = (marks >= 50) ? "Pass" : "Fail";\``,
    syntax: `// Loose vs Strict Equality
5 == "5"       // Returns true (type coercion)
5 === "5"      // Returns false (different data types)

// Ternary Operator
let status = (age >= 18) ? "Adult" : "Minor";`,
    codeExample: `<!DOCTYPE html>
<html>
<body>
  <h2>JavaScript Operators Demonstration</h2>
  <p id="res"></p>

  <script>
    let a = 10;
    let b = "10";

    let looseCheck = (a == b);   // true
    let strictCheck = (a === b); // false
    let mod = (17 % 5);          // 2
    let canVote = (19 >= 18) ? "Eligible to Vote" : "Not Eligible";

    document.getElementById("res").innerHTML = 
      "10 == '10': <b>" + looseCheck + "</b> (Loose Equality)<br>" +
      "10 === '10': <b>" + strictCheck + "</b> (Strict Equality)<br>" +
      "17 % 5 (Remainder): <b>" + mod + "</b><br>" +
      "Ternary Result: <b>" + canVote + "</b>";
  </script>
</body>
</html>`,
    outputExplanation: "Loose equality सत्य देगी क्योंकि दोनों 10 हैं, लेकिन Strict equality असत्य देगी क्योंकि एक संख्या और दूसरी स्ट्रिंग है।",
    realWorldAnalogy: "`==` किसी व्यक्ति को केवल उसके चेहरे से पहचानना है (चाहे वह पुलिस की वर्दी में हो या सादे कपड़ों में); `===` चेहरे के साथ-साथ उसका आधार कार्ड और बायोमेट्रिक भी जांचना है।",
    importantPoints: [
      "== केवल मान जांचता है, === मान और डेटा टाइप दोनों जांचता है।",
      "% (मॉड्यूलो) ऑपरेटर भागफल नहीं बल्कि शेषफल लौटाता है।",
      "Ternary (? :) एकमात्र ऐसा ऑपरेटर है जो 3 ऑपरेंड्स लेता है।"
    ],
    commonMistakes: [
      "तुलना करने के लिए गलती से एकल बराबर (`=`) लिख देना (`=` असाइनमेंट है, तुलना के लिए `==` या `===` होता है)।"
    ],
    examPerspective: "`==` बनाम `===` में अंतर, `%` ऑपरेटर का शेषफल निकालना, और टर्नरी ऑपरेटर के सिंटैक्स पर परीक्षा में हर साल प्रश्न आते हैं।",
    quickRevision: "== केवल मान मिलाता है, === मान और टाइप दोनों मिलाता है। % शेषफल देता है। condition ? true : false टर्नरी है।",
    relatedTopics: ["variables-in-javascript", "conditions-statements", "basic-form-validations-in-javascript"],
    practiceTask: "जावास्क्रिप्ट में लिखें: `let num = 15; console.log(num % 2 === 0 ? 'Even' : 'Odd');` और आउटपुट देखें।"
  },
  {
    id: "u6-t4",
    slug: "conditions-statements",
    unit: 6,
    unitSlug: "unit-6",
    unitTitle: "JavaScript and Angular JS",
    title: "Conditions Statements",
    hindiTitle: "कंडीशनल स्टेटमेंट्स (if, if-else, else-if, switch)",
    definitionEnglish: "Conditional statements in JavaScript control the program flow by executing different blocks of code based on whether a specified Boolean condition evaluates to true or false, encompassing 'if', 'if...else', 'if...else if...else' ladders, and the multi-way 'switch...case' statement.",
    definitionHindi: "जावास्क्रिप्ट में कंडीशनल स्टेटमेंट्स किसी निश्चित बूलियन शर्त के सत्य (true) या असत्य (false) होने के आधार पर अलग-अलग कोड ब्लॉक्स को निष्पादित करके प्रोग्राम के प्रवाह को नियंत्रित करते हैं; इनमें 'if', 'if...else', 'else if' लैडर और 'switch...case' शामिल हैं।",
    simpleWords: "यह प्रोग्राम का चौराहा है। जैसे ट्रैफिक सिग्नल पर लाल बत्ती हो तो रुकना है, हरी हो तो चलना है, वैसे ही प्रोग्राम में शर्त सही होने पर एक काम होता है और गलत होने पर दूसरा काम होता है।",
    whyImportant: "बिना कंडीशनल स्टेटमेंट्स के कोई भी सॉफ्टवेयर निर्णय नहीं ले सकता, जैसे यूजर पासवर्ड सही है या गलत, या छात्र पास है या फेल।",
    detailedExplanation: `### 1. \`if\` स्टेटमेंट:
शर्त सत्य होने पर ही कोड चलता है:
\`if (marks >= 33) { console.log("Passed"); }\`

### 2. \`if...else\` स्टेटमेंट:
शर्त सत्य होने पर पहला ब्लॉक, और असत्य होने पर दूसरा ब्लॉक चलता है:
\`if (age >= 18) { alert("Vote"); } else { alert("Cannot vote"); }\`

### 3. \`if...else if...else\` लैडर (श्रेणी):
जब कई शर्तों को क्रम से जांचना हो (जैसे ग्रेडिंग सिस्टम):
- 85+ = S Grade
- 75+ = A Grade
- 65+ = B Grade
- 50+ = C Grade
- अन्यथा = Fail

### 4. \`switch...case\` स्टेटमेंट:
जब किसी एक ही वेरिएबल के कई निश्चित मानों (Cases) की तुलना करनी हो:
- **\`break\`:** मैच होने के बाद स्विच ब्लॉक से तुरंत बाहर निकलने हेतु (यदि break न लगाया जाए तो नीचे के सारे केस बिना शर्त चल जाएंगे, जिसे **Fall-through** कहते हैं)।
- **\`default\`:** जब कोई भी केस मैच न हो तब चलने वाला बैकअप ब्लॉक।`,
    syntax: `// if-else if-else
if (condition1) {
  // block 1
} else if (condition2) {
  // block 2
} else {
  // default block
}

// switch-case
switch (expression) {
  case x: code; break;
  case y: code; break;
  default: fallbackCode;
}`,
    codeExample: `<!DOCTYPE html>
<html>
<body>
  <h2>Conditional Grading System</h2>
  <p id="gradeMsg"></p>

  <script>
    let score = 78;
    let grade = "";

    // If-Else Ladder
    if (score >= 85) {
      grade = "S (Super Outstanding)";
    } else if (score >= 75) {
      grade = "A (Excellent)";
    } else if (score >= 65) {
      grade = "B (Good)";
    } else if (score >= 50) {
      grade = "C (Satisfactory)";
    } else {
      grade = "F (Failed)";
    }

    document.getElementById("gradeMsg").innerHTML = 
      "Score: " + score + " | NIELIT Grade: <b>" + grade + "</b>";
  </script>
</body>
</html>`,
    outputExplanation: "स्कोर 78 होने के कारण `else if (score >= 75)` की शर्त सही होगी और स्क्रीन पर 'Grade: A (Excellent)' दिखेगा।",
    realWorldAnalogy: "जैसे रेलवे टिकट चेकर देखता है: अगर कन्फर्म टिकट है तो सीट पर बैठें, अगर RAC है तो आधी सीट लें, अगर वेटिंग है तो टीटीई से मिलें।",
    importantPoints: [
      "if की शर्त हमेशा गोल कोष्ठक ( ) के अंदर लिखी जाती है।",
      "switch स्टेटमेंट में प्रत्येक case के अंत में 'break' लगाना आवश्यक है।",
      "यदि कोई case मैच न हो तो 'default' ब्लॉक निष्पादित होता है।"
    ],
    commonMistakes: [
      "switch ब्लॉक में `break` भूल जाना (जिससे नीचे के सभी केस अनावश्यक रूप से चल जाते हैं)।",
      "`if (a = 5)` लिख देना (`=` असाइनमेंट है, यह हमेशा सत्य बन जाएगा; तुलना के लिए `==` लिखें)।"
    ],
    examPerspective: "if-else का सिंटैक्स, switch स्टेटमेंट में break और default की भूमिका, और Fall-through की अवधारणा पर प्रश्न पूछे जाते हैं।",
    quickRevision: "निर्णय नियंत्रण: if (एकल), if-else (दोतरफा), else-if लैडर (बहु-शर्त), switch-case (निश्चित विकल्पों हेतु break के साथ)।",
    relatedTopics: ["operators-in-js", "variables-in-javascript", "basic-form-validations-in-javascript"],
    practiceTask: "switch-case का उपयोग करके सप्ताह के दिन (1=Monday, 2=Tuesday... 7=Sunday) प्रिंट करने का प्रोग्राम बनाएं।"
  },
  {
    id: "u6-t5",
    slug: "js-popup-boxes",
    unit: 6,
    unitSlug: "unit-6",
    unitTitle: "JavaScript and Angular JS",
    title: "JS Popup Boxes (Alert, Confirm, Prompt)",
    hindiTitle: "जावास्क्रिप्ट डायलॉग बॉक्सेज (Alert, Confirm, Prompt)",
    definitionEnglish: "JavaScript provides three built-in modal dialog popup boxes through the Window object: alert() (displays an informational message with an OK button), confirm() (displays a confirmation prompt returning true for OK and false for Cancel), and prompt() (accepts textual input from the user returning a string or null).",
    definitionHindi: "जावास्क्रिप्ट Window ऑब्जेक्ट के माध्यम से तीन अंतर्निहित मोडल डायलॉग बॉक्स प्रदान करता है: alert() (केवल सूचना और OK बटन दिखाता है), confirm() (पुष्टिकरण मांगता है और OK पर true तथा Cancel पर false लौटाता है), और prompt() (यूजर से टेक्स्ट इनपुट लेता है और स्ट्रिंग लौटाता है)।",
    simpleWords: "यह स्क्रीन पर अचानक उछलकर आने वाले 3 तरह के सूचना बक्से हैं: 1. Alert (केवल खबर देना), 2. Confirm (हाँ या ना पूछना), 3. Prompt (यूजर से उसका नाम या उम्र पूछना)।",
    whyImportant: "यूजर से त्वरित चेतावनी देने, फाइल डिलीट करने से पहले पूछने और सरल इनपुट लेने के लिए ये तीनों बॉक्सेज परीक्षा और प्रैक्टिकल में बहुत पूछे जाते हैं।",
    detailedExplanation: `### तीनों पॉपअप बॉक्सेज की विस्तृत तुलना:
1. **\`window.alert("Message")\`:**
   - **उद्देश्य:** यूजर को केवल एक महत्वपूर्ण चेतावनी या सूचना देना।
   - **बटन:** केवल **एक बटन (OK)** होता है।
   - **रिटर्न वैल्यू:** **\`undefined\`** (कोई मान नहीं लौटाता)।
   - **व्यवहार:** जब तक यूजर OK न दबाए, पूरा पेज फ्रीज रहता है।

2. **\`window.confirm("Message")\`:**
   - **उद्देश्य:** किसी कार्रवाई (जैसे डिलीट या फॉर्म सबमिट) की पुष्टि करना।
   - **बटन:** **दो बटन (OK और Cancel)** होते हैं।
   - **रिटर्न वैल्यू:**
     - यदि यूजर 'OK' दबाए -> **\`true\`** लौटाता है।
     - यदि यूजर 'Cancel' दबाए -> **\`false\`** लौटाता है।

3. **\`window.prompt("Message", "defaultText")\`:**
   - **उद्देश्य:** यूजर से टेक्स्ट या संख्या इनपुट लेना।
   - **बटन:** **OK और Cancel** + एक इनपुट टेक्स्ट बॉक्स।
   - **रिटर्न वैल्यू:**
     - यूजर द्वारा टाइप की गई **String** (यदि OK दबाया जाए)।
     - **\`null\`** (यदि Cancel दबाया जाए)।`,
    syntax: `alert("Information text");
let isAgreed = confirm("Do you agree to terms?"); // Returns true or false
let userName = prompt("Enter your name:", "Guest"); // Returns string or null`,
    codeExample: `<!DOCTYPE html>
<html>
<body>
  <h2>JavaScript Popup Dialogs Demo</h2>
  
  <button onclick="showAlert()">1. Alert</button>
  <button onclick="showConfirm()">2. Confirm</button>
  <button onclick="showPrompt()">3. Prompt</button>
  
  <p id="dialogResult" style="font-weight:bold; color:#0284c7;"></p>

  <script>
    function showAlert() {
      alert("Welcome to NIELIT O-Level Study Hub!");
    }

    function showConfirm() {
      let ans = confirm("Are you sure you want to delete your progress?");
      if (ans === true) {
        document.getElementById("dialogResult").innerText = "Confirmed: Progress deleted!";
      } else {
        document.getElementById("dialogResult").innerText = "Cancelled: Progress kept safe.";
      }
    }

    function showPrompt() {
      let name = prompt("What is your name?", "Student");
      if (name !== null && name !== "") {
        document.getElementById("dialogResult").innerText = "Hello, " + name + "! Ready for M2-R5.1 Exam?";
      }
    }
  </script>
</body>
</html>`,
    outputExplanation: "प्रत्येक बटन पर क्लिक करने पर संबंधित डायलॉग बॉक्स खुलेगा और यूजर की पसंद के अनुसार नीचे परिणाम दिखेगा।",
    realWorldAnalogy: "Alert लाउडस्पीकर की घोषणा है; Confirm अदालत में 'क्या आपको यह मंजूर है?' पूछना है; और Prompt फॉर्म काउंटर पर क्लर्क द्वारा आपका नाम पूछना है।",
    importantPoints: [
      "confirm() केवल true या false लौटाता है।",
      "prompt() यूजर का इनपुट स्ट्रिंग या Cancel पर null लौटाता है।",
      "alert() कोई मान नहीं लौटाता (undefined)।",
      "तीनों मोडल (Modal) होते हैं (इनके खुले रहने पर पीछे का पेज क्लिक नहीं किया जा सकता)।"
    ],
    commonMistakes: [
      "prompt() से ली गई संख्या को सीधे जोड़ना (चूंकि prompt स्ट्रिंग लौटाता है, इसलिए `10 + 20` जुड़कर `1020` बन जाता है; संख्या बनाने के लिए `parseInt()` या `Number()` लगाएं)।"
    ],
    examPerspective: "confirm() के रिटर्न मान (true/false), prompt() के रिटर्न मान (string/null), और alert() के बटनों की संख्या पर प्रश्न हर साल आते हैं।",
    quickRevision: "alert() = केवल OK (सूचना); confirm() = OK/Cancel (true/false); prompt() = इनपुट बॉक्स (String/null).",
    relatedTopics: ["js-events", "basic-form-validations-in-javascript", "conditions-statements"],
    practiceTask: "एक prompt बनाकर यूजर से 2 नंबर इनपुट लें, `parseInt()` से जोड़ें और `alert()` द्वारा उनका योग दिखाएं।"
  },
  {
    id: "u6-t6",
    slug: "js-events",
    unit: 6,
    unitSlug: "unit-6",
    unitTitle: "JavaScript and Angular JS",
    title: "JS Events (onclick, onmouseover, onmouseout, onchange, onsubmit, onload, onkeyup)",
    hindiTitle: "जावास्क्रिप्ट इवेंट्स (onclick, onmouseover, onchange, onsubmit, onload)",
    definitionEnglish: "JavaScript events are signals or occurrences generated by the browser or user interactions (such as mouse clicks, hovering, key presses, form submissions, or page loading) that can be intercepted and handled by JavaScript event listener functions.",
    definitionHindi: "जावास्क्रिप्ट इवेंट्स ब्राउज़र या यूजर की गतिविधियों (जैसे माउस क्लिक, होवर, कीबोर्ड की दबाना, फॉर्म सबमिट करना या पेज लोड होना) द्वारा उत्पन्न होने वाले संकेत हैं, जिन्हें जावास्क्रिप्ट इवेंट हैंडलर फंक्शन्स द्वारा पकड़ा और प्रोसेस किया जाता है।",
    simpleWords: "इवेंट का मतलब है 'कोई घटना घटना'। जैसे जब आप डोरबेल दबाते हैं तो घंटी बजती है; वैसे ही जब यूजर बटन पर क्लिक करता है (onclick) या माउस ले जाता है (onmouseover), तो जावास्क्रिप्ट कोड सक्रिय हो जाता है।",
    whyImportant: "इवेंट्स ही वेबसाइट को इंटरएक्टिव बनाते हैं। बिना इवेंट्स के जावास्क्रिप्ट को पता ही नहीं चलेगा कि यूजर ने कब कहाँ क्लिक किया।",
    detailedExplanation: `### आधिकारिक पाठ्यक्रम के प्रमुख 7 इवेंट्स:
1. **\`onclick\` (माउस क्लिक):** जब यूजर किसी बटन, लिंक या एलिमेंट पर माउस से क्लिक करता है।
2. **\`onmouseover\` (माउस ऊपर आना):** जब माउस का पॉइंटर किसी एलिमेंट की सीमा में प्रवेश करता है।
3. **\`onmouseout\` (माउस बाहर जाना):** जब माउस का पॉइंटर एलिमेंट की सीमा से बाहर निकल जाता है।
4. **\`onchange\` (मान बदलना):** जब इनपुट बॉक्स, चेकबॉक्स या ड्रॉपडाउन का मान बदलकर फोकस बाहर जाता है।
5. **\`onsubmit\` (फॉर्म सबमिशन):** जब यूजर फॉर्म का सबमिट बटन दबाता है (क्लाइंट-साइड वैलिडेशन हेतु प्रयुक्त)।
6. **\`onload\` (पेज लोडिंग):** जब वेबपेज की सभी फाइल्स, इमेजेस और स्टाइल्स पूरी तरह लोड हो जाती हैं (आमतौर पर \`<body>\` या \`window\` पर लगता है)।
7. **\`onkeyup\` / \`onkeydown\` (कीबोर्ड इवेंट):** जब यूजर कीबोर्ड की कोई कुंजी दबाता या छोड़ता है (लाइव सर्च हेतु प्रयुक्त)।`,
    syntax: `<!-- Inline Event Handler -->
<button onclick="myFunction()">Click Me</button>
<div onmouseover="hoverIn()" onmouseout="hoverOut()">Box</div>
<form onsubmit="return validateForm()">...</form>

<!-- DOM Event Listener (Modern) -->
element.addEventListener("click", myFunction);`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
  <style>
    #box {
      width: 200px;
      padding: 20px;
      background: #0284c7;
      color: white;
      text-align: center;
      border-radius: 8px;
      transition: background 0.3s;
      cursor: pointer;
    }
  </style>
</head>
<body onload="welcomeUser()">
  <h2>JavaScript Event Handling Demo</h2>
  
  <div id="box" 
       onmouseover="this.style.background='#16a34a'; this.innerText='Mouse Over!';" 
       onmouseout="this.style.background='#0284c7'; this.innerText='Hover or Click Me';"
       onclick="alert('Box was clicked!')">
    Hover or Click Me
  </div>

  <p>Live Typing: <input type="text" onkeyup="document.getElementById('mirror').innerText = this.value"></p>
  <p>Mirror: <span id="mirror" style="color:red; font-weight:bold;"></span></p>

  <script>
    function welcomeUser() {
      console.log("Page fully loaded via onload event!");
    }
  </script>
</body>
</html>`,
    outputExplanation: "माउस बॉक्स पर जाते ही रंग हरा हो जाएगा, बाहर आते ही नीला हो जाएगा, क्लिक करने पर अलर्ट आएगा, और इनपुट में टाइप करते ही नीचे लाइव मिरर दिखेगा।",
    realWorldAnalogy: "इवेंट्स घर के स्मार्ट सेंसर जैसे हैं: जैसे ही कोई दरवाजे के सामने आता है (onmouseover) लाइट जल जाती है, जैसे ही घंटी का स्विच दबता है (onclick) सायरन बजता है।",
    importantPoints: [
      "इवेंट नाम HTML में 'on' प्रीफिक्स से शुरू होते हैं (onclick, onload)।",
      "onsubmit इवेंट हमेशा <form> टैग पर लगाया जाता है, सबमिट बटन पर नहीं।",
      "फॉर्म सबमिशन रोकने के लिए onsubmit=\"return false\" का उपयोग होता है।",
      "onload पूरे पेज के लोड होने के बाद घटित होता है।"
    ],
    commonMistakes: [
      "`onsubmit` को `<input type=\"submit\">` पर लगा देना (यह हमेशा `<form>` टैग पर लगता है)।",
      "onsubmit में `return` भूल जाना (उदा. `onsubmit=\"validate()\"` लिखने पर वैलिडेशन फेल होने पर भी फॉर्म सबमिट हो जाता है; सही रूप `onsubmit=\"return validate()\"` है)।"
    ],
    examPerspective: "onsubmit, onload, onmouseover/onmouseout, और onchange के ट्रिगर होने के समय पर परीक्षा में बार-बार प्रश्न आते हैं।",
    quickRevision: "इवेंट्स यूजर की गतिविधियों पर कोड चलाते हैं: onclick (क्लिक), onmouseover/out (होवर), onchange (बदलाव), onsubmit (फॉर्म), onload (पेज लोड)।",
    relatedTopics: ["basic-form-validations-in-javascript", "js-popup-boxes", "client-side-scripting-intro"],
    practiceTask: "एक इनपुट बॉक्स बनाएं जिसमें टाइप करने पर `onkeyup` इवेंट से अक्षरों की संख्या (Length) नीचे लाइव दिखाई दे।"
  },
  {
    id: "u6-t7",
    slug: "basic-form-validations-in-javascript",
    unit: 6,
    unitSlug: "unit-6",
    unitTitle: "JavaScript and Angular JS",
    title: "Basic Form Validations in JavaScript",
    hindiTitle: "जावास्क्रिप्ट में बेसिक फॉर्म वैलिडेशन (Form Validation Workflow)",
    definitionEnglish: "Basic form validation in JavaScript intercepts the form submit event (onsubmit) to verify that mandatory fields are non-empty, input formats match constraints (such as 10-digit phone numbers, valid email patterns, and matching passwords), returning true to permit submission or false to halt it.",
    definitionHindi: "जावास्क्रिप्ट में बेसिक फॉर्म वैलिडेशन फॉर्म सबमिट इवेंट (onsubmit) को बीच में रोककर यह जांचता है कि अनिवार्य फील्ड्स खाली न हों, इनपुट प्रारूप नियमों के अनुरूप हों (जैसे 10 अंकों का फोन नंबर, वैध ईमेल और पासवर्ड मिलान), और सबमिशन जारी रखने हेतु true या रोकने हेतु false लौटाता है।",
    simpleWords: "जब कोई यूजर फॉर्म में नाम लिखना भूल जाए या 10 अंक के मोबाइल नंबर की जगह 8 अंक ही लिखे, तो जावास्क्रिप्ट फॉर्म को सर्वर पर जाने से रोक देती है और लाल रंग में गलती बता देती है।",
    whyImportant: "O-Level M2-R5.1 प्रैक्टिकल परीक्षा में फॉर्म वैलिडेशन का प्रश्न अनिवार्य रूप से पूछा जाता है। यह वेबसाइट सुरक्षा और यूजर डेटा सटीकता की पहली दीवार है।",
    detailedExplanation: `### फॉर्म वैलिडेशन के 4 सुनहरे नियम:
1. **\`<form onsubmit="return validateForm()">\`:**
   - फॉर्म टैग में \`return\` कीवर्ड लगाना **अनिवार्य** है।
   - यदि फंक्शन \`false\` लौटाएगा तो फॉर्म सबमिट नहीं होगा।
   - यदि फंक्शन \`true\` लौटाएगा तभी फॉर्म सर्वर पर जाएगा।
2. **Empty Field Check (खाली फील्ड जांच):**
   \`if (username.trim() === "") { alert("Name required"); return false; }\`
3. **Length / Numeric Check (फोन नंबर जांच):**
   \`if (isNaN(phone) || phone.length !== 10) { alert("Invalid 10-digit mobile"); return false; }\`
4. **Password Match Check (पासवर्ड मिलान):**
   \`if (pwd !== confirmPwd) { alert("Passwords do not match"); return false; }\``,
    syntax: `<form action="save.php" method="POST" onsubmit="return validateForm()">
  <input type="text" id="uname">
  <input type="submit" value="Register">
</form>

<script>
  function validateForm() {
    let name = document.getElementById("uname").value;
    if (name.trim() === "") {
      alert("Name cannot be empty!");
      return false; // Halts submission
    }
    return true; // Allows submission
  }
</script>`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
  <style>
    .err { color: #dc2626; font-size: 13px; margin: 2px 0 8px 0; }
  </style>
</head>
<body>
  <h2>Student Registration Validation</h2>
  <form onsubmit="return validateAdmission()">
    <p>
      Full Name: <br>
      <input type="text" id="sname">
      <div id="errName" class="err"></div>
    </p>
    <p>
      Mobile (10 Digits): <br>
      <input type="text" id="sphone">
      <div id="errPhone" class="err"></div>
    </p>
    <button type="submit">Submit Registration</button>
  </form>

  <script>
    function validateAdmission() {
      let name = document.getElementById("sname").value.trim();
      let phone = document.getElementById("sphone").value.trim();
      let isValid = true;

      // Clear previous errors
      document.getElementById("errName").innerText = "";
      document.getElementById("errPhone").innerText = "";

      if (name === "") {
        document.getElementById("errName").innerText = "Candidate name is mandatory!";
        isValid = false;
      }

      if (phone === "" || isNaN(phone) || phone.length !== 10) {
        document.getElementById("errPhone").innerText = "Enter valid 10-digit numeric mobile!";
        isValid = false;
      }

      return isValid; // If false, form will not submit
    }
  </script>
</body>
</html>`,
    outputExplanation: "खाली नाम या 8 अंकों का नंबर डालने पर फॉर्म सबमिट नहीं होगा और संबंधित इनपुट के नीचे लाल रंग में स्पष्ट त्रुटि संदेश दिखेगा।",
    realWorldAnalogy: "जैसे परीक्षा केंद्र के गेट पर सुरक्षा गार्ड बिना एडमिट कार्ड और आईडी प्रूफ वाले छात्र को अंदर जाने से रोक देता है, फॉर्म वैलिडेशन अमान्य डेटा को सर्वर पर जाने से रोकता है।",
    importantPoints: [
      "onsubmit=\"return functionName()\" में 'return' लिखना अनिवार्य है।",
      "isNaN() फंक्शन यह चेक करता है कि वैल्यू संख्या नहीं है (Not a Number)।",
      "trim() शुरुआत और अंत के फालतू स्पेस को हटा देता है।",
      "वैलिडेशन फेल होने पर फंक्शन false लौटाता है।"
    ],
    commonMistakes: [
      "फ़ोन नंबर चेक करते समय `isNaN()` का उपयोग न करना (जिससे यूजर 'ABCDEF' लिख दे तो भी पास हो जाता है)।",
      "`onsubmit=\"validate()\"` लिखना (बिना return के फॉर्म हमेशा सबमिट हो जाएगा चाहे एरर हो)।"
    ],
    examPerspective: "O-Level प्रैक्टिकल में जावास्क्रिप्ट फॉर्म वैलिडेशन (Name empty, Phone 10-digit, Password match) का 25 से 30 नंबर का प्रश्न पूछा जाता है।",
    quickRevision: "फॉर्म वैलिडेशन onsubmit=\"return validate()\" से होता है। खाली फील्ड, लंबाई, isNaN() और पासवर्ड मिलान जांचकर true या false लौटाया जाता है।",
    relatedTopics: ["js-events", "html5-form-validations", "forms-and-elements"],
    practiceTask: "एक पासवर्ड और कन्फर्म पासवर्ड वाला फॉर्म बनाएं और जावास्क्रिप्ट से चेक करें कि दोनों पासवर्ड एक समान हैं या नहीं।"
  },
  {
    id: "u6-t8",
    slug: "introduction-to-angular-js",
    unit: 6,
    unitSlug: "unit-6",
    unitTitle: "JavaScript and Angular JS",
    title: "Introduction to Angular JS",
    hindiTitle: "AngularJS का परिचय एवं MVC आर्किटेक्चर",
    definitionEnglish: "AngularJS is a structural open-source JavaScript front-end framework developed by Miško Hevery in 2009 and maintained by Google, based on the MVC (Model-View-Controller) architectural pattern to build dynamic Single-Page Applications (SPAs) with two-way data binding.",
    definitionHindi: "AngularJS एक संरचनात्मक ओपन-सोर्स जावास्क्रिप्ट फ्रंट-एंड फ्रेमवर्क है जिसे 2009 में मिस्को हेवेरी द्वारा विकसित किया गया और Google द्वारा मेंटेन किया गया; यह Two-Way Data Binding और MVC (Model-View-Controller) पैटर्न के आधार पर सिंगल-पेज ऐप्लिकेशन्स (SPAs) बनाने के लिए उपयोग होता है।",
    simpleWords: "साधारण जावास्क्रिप्ट में HTML में मान बदलने के लिए लंबा `document.getElementById` लिखना पड़ता है। AngularJS एक ऐसा जादुई ढांचा है जिसमें इनपुट में टाइप करते ही स्क्रीन का टेक्स्ट अपने आप (Two-Way Binding) बदल जाता है।",
    whyImportant: "NIELIT O-Level पाठ्यक्रम में आधुनिक Angular (v2+) के बजाय AngularJS (v1.x) आधिकारिक रूप से निर्धारित है। परीक्षा में इसके डायरेक्टिव्स और MVC पैटर्न पर प्रश्न आते हैं।",
    detailedExplanation: `### 1. AngularJS का इतिहास:
- **आविष्कारक:** **Miško Hevery** और **Adam Abrons** ने 2009 में इसका निर्माण किया। बाद में **Google** ने इसका अधिग्रहण कर लिया।
- **आधिकारिक CDN:** \`https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js\`

### 2. MVC आर्किटेक्चर (Model-View-Controller):
- **Model (डेटा):** ऐप्लिकेशन का डेटा और स्टेट।
- **View (HTML स्क्रीन):** यूजर को स्क्रीन पर दिखने वाला दृश्यमान रूप।
- **Controller (लॉजिक):** जावास्क्रिप्ट कोड जो बिजनेस लॉजिक चलाता है और मॉडल को व्यू से जोड़ता है।

### 3. Two-Way Data Binding (द्वि-मार्गी डेटा बाइंडिंग - मुख्य जादू!):
- साधारण JS में: मॉडल बदला तो व्यू को कोड लिखकर बदलना पड़ता है।
- **AngularJS में:** यदि यूजर इनपुट बॉक्स (View) में नाम बदलेगा, तो डेटा (Model) अपने आप अपडेट हो जाएगा; और यदि डेटा बदलेगा तो स्क्रीन अपने आप अपडेट हो जाएगी!

### 4. JavaScript बनाम AngularJS:
- JavaScript मूल प्रोग्रामिंग भाषा है; AngularJS उस पर बना एक फ्रेमवर्क है।
- JS में DOM मैनिपुलेशन मैन्युअल होता है; AngularJS में डायरेक्टिव्स द्वारा स्वचालित होता है।`,
    syntax: `<!-- Linking AngularJS CDN -->
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>

<!-- Minimal AngularJS Application -->
<div ng-app="">
  <input type="text" ng-model="name">
  <h1>Hello {{ name }}</h1>
</div>`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
</head>
<body>
  <h2>AngularJS Two-Way Data Binding Showcase</h2>
  
  <!-- ng-app initializes the AngularJS application -->
  <div ng-app="" style="border:2px solid #0284c7; padding:20px; border-radius:8px; max-width:350px;">
    <label>Type your name:</label><br>
    <!-- ng-model binds the input to variable 'student' -->
    <input type="text" ng-model="student" placeholder="Enter name here" style="padding:6px; width:90%; margin-top:6px;">
    
    <!-- Expression {{ student }} updates instantly in real time! -->
    <h3 style="color:#0284c7;">Welcome, {{ student }}!</h3>
  </div>
</body>
</html>`,
    outputExplanation: "इनपुट बॉक्स में जैसे-जैसे आप टाइप करेंगे, नीचे 'Welcome, [आपका नाम]' बिना एक लाइन भी JS कोड लिखे रियल-टाइम में बदलता जाएगा।",
    realWorldAnalogy: "Two-Way Data Binding एक शीशे (Mirror) जैसी है; आप शीशे के सामने मुस्कुराएंगे तो शीशे का प्रतिबिंब भी तुरंत मुस्कुराएगा, दोनों हमेशा सिंक रहते हैं।",
    importantPoints: [
      "AngularJS को Google द्वारा सपोर्ट प्राप्त है।",
      "यह MVC (Model-View-Controller) आर्किटेक्चर पर आधारित है।",
      "AngularJS का सबसे प्रसिद्ध फीचर Two-Way Data Binding है।",
      "सिलेबस में AngularJS 1.x शामिल है (Angular 2+ नहीं)।"
    ],
    commonMistakes: [
      "`ng-app` लगाना भूल जाना (बिना ng-app के AngularJS एक्टिवेट ही नहीं होता और स्क्रीन पर सादा `{{ student }}` लिखा रह जाता है)।"
    ],
    examPerspective: "AngularJS का डेवलपर (Miško Hevery / Google), MVC का पूर्ण रूप, और Two-Way Data Binding की परिभाषा पर वस्तुनिष्ठ प्रश्न पूछे जाते हैं।",
    quickRevision: "AngularJS Google का MVC जावास्क्रिप्ट फ्रेमवर्क है। मुख्य ताकत: Two-Way Data Binding और ng- डायरेक्टिव्स।",
    relatedTopics: ["angular-js-expressions", "angular-js-directives", "client-side-scripting-intro"],
    practiceTask: "एक AngularJS ऐप बनाएं जिसमें इनपुट बॉक्स में रंग का नाम लिखने पर नीचे उस रंग का नाम प्रदर्शित हो।"
  },
  {
    id: "u6-t9",
    slug: "angular-js-expressions",
    unit: 6,
    unitSlug: "unit-6",
    unitTitle: "JavaScript and Angular JS",
    title: "Angular JS Expressions",
    hindiTitle: "AngularJS एक्सप्रेशन्स (Expressions Syntax {{ }})",
    definitionEnglish: "AngularJS Expressions are code snippets written inside double curly braces {{ expression }} that resolve and bind data directly into HTML, evaluating mathematical operations, string concatenations, and object/array properties without throwing runtime exceptions.",
    definitionHindi: "AngularJS एक्सप्रेशन्स दोहरे घुंघराले कोष्ठकों {{ expression }} के अंदर लिखे जाने वाले कोड स्निपेट्स हैं जो डेटा को सीधे HTML में बांधते हैं और प्रदर्शित करते हैं; ये गणितीय गणनाएं, स्ट्रिंग संयोजन, और ऑब्जेक्ट/ऐरे प्रॉपर्टीज का मूल्यांकन करते हैं।",
    simpleWords: "AngularJS में जब आप `{{ 5 + 5 }}` लिखते हैं, तो ब्राउज़र स्क्रीन पर `10` दिखाता है। यह HTML के अंदर ही गणित और वेरिएबल दिखाने का सबसे सरल तरीका है।",
    whyImportant: "AngularJS में डेटा को स्क्रीन पर प्रिंट करने का मुख्य तरीका एक्सप्रेशन्स ही हैं।",
    detailedExplanation: `### 1. AngularJS एक्सप्रेशन्स का सिंटैक्स:
- एक्सप्रेशन्स हमेशा **दोहरे कर्ली ब्रेसेस \`{{ }}\`** के अंदर लिखे जाते हैं।
- **गणितीय गणना:** \`{{ 10 * 5 }}\` -> आउटपुट: **50**
- **स्ट्रिंग संयोजन:** \`{{ "Hello " + "NIELIT" }}\` -> आउटपुट: **Hello NIELIT**
- **वेरिएबल प्रिंटिंग:** \`{{ studentName }}\`
- **ऑब्जेक्ट प्रॉपर्टी:** \`{{ student.marks }}\`
- **ऐरे इंडेक्स:** \`{{ courses[0] }}\`

### 2. JavaScript एक्सप्रेशन्स बनाम AngularJS एक्सप्रेशन्स में अंतर:
1. **स्थान:** JS एक्सप्रेशन्स \`<script>\` में लिखे जाते हैं; AngularJS एक्सप्रेशन्स सीधे HTML टैग्स के बीच लिखे जाते हैं।
2. **Error Handling (Forgiving Nature):**
   - JavaScript में किसी अनडिफाइंड प्रॉपर्टी को एक्सेस करने पर कोड क्रैश (\`ReferenceError\`) हो जाता है।
   - AngularJS एक्सप्रेशन्स में यदि कोई वेरिएबल मौजूद नहीं है, तो एरर नहीं आती, वह चुपचाप खाली (Blank) छूट जाता है!
3. **No Loops/Conditions:** AngularJS एक्सप्रेशन्स के अंदर \`if-else\` या \`for\` लूप नहीं लिखा जा सकता (इसके लिए डायरेक्टिव्स होते हैं)।`,
    syntax: `{{ 10 + 20 }}              // Math calculation
{{ firstName + " " + lastName }} // String
{{ student.marks }}        // Object property
{{ subjects[1] }}          // Array item`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
</head>
<body>
  <h2>AngularJS Expressions in Action</h2>
  
  <div ng-app="" ng-init="qty=5; price=20; student={name:'Amit', city:'Lucknow'}">
    <p>Math Expression: 10 + 25 = <b>{{ 10 + 25 }}</b></p>
    <p>Billing: {{ qty }} books at ₹{{ price }} each = <b>₹{{ qty * price }}</b></p>
    <p>Student Name: <b>{{ student.name }}</b> from <b>{{ student.city }}</b></p>
  </div>
</body>
</html>`,
    outputExplanation: "स्क्रीन पर 10+25 का मान 35, 5 किताबों का बिल ₹100, और ऑब्जेक्ट से अमित व लखनऊ निकलकर प्रिंट हो जाएगा।",
    realWorldAnalogy: "जैसे एक्सेल में किसी सेल में `=A1*B1` लिखने पर वह अपने आप गुणा करके उत्तर दिखा देता है, वैसे ही `{{ }}` तुरंत मान निकाल देता है।",
    importantPoints: [
      "AngularJS एक्सप्रेशन्स {{ expression }} सिंटैक्स में लिखे जाते हैं।",
      "यह अनडिफाइंड वेरिएबल्स पर एरर फेंकने के बजाय खाली स्थान दिखाता है।",
      "एक्सप्रेशन्स के अंदर लूप्स या कंडीशंस नहीं लिखे जा सकते।"
    ],
    commonMistakes: [
      "सिंगल कर्ली ब्रेस `{ expression }` लगा देना (AngularJS में डबल कर्ली ब्रेस `{{ }}` अनिवार्य है)।"
    ],
    examPerspective: "प्रश्न: 'AngularJS में एक्सप्रेशन्स किस सिंबल के अंदर लिखे जाते हैं?' ({{ }}), 'क्या AngularJS एक्सप्रेशन्स में if-else मान्य है?' (नहीं).",
    quickRevision: "{{ expression }} दोहरे कोष्ठकों में लिखा जाता है, गणितीय गणनाएं और डेटा प्रिंट करता है, और क्रैश नहीं होता।",
    relatedTopics: ["introduction-to-angular-js", "angular-js-directives", "angular-js-modules"],
    practiceTask: "`ng-init` में `hours=120` और `fee=50` सेट करें और `{{ hours * fee }}` से कुल फीस स्क्रीन पर दिखाएं।"
  },
  {
    id: "u6-t10",
    slug: "angular-js-modules",
    unit: 6,
    unitSlug: "unit-6",
    unitTitle: "JavaScript and Angular JS",
    title: "Angular JS Modules",
    hindiTitle: "AngularJS मॉड्यूल्स एवं कंट्रोलर्स (Modules & Controllers)",
    definitionEnglish: "An AngularJS Module defines an application container using 'angular.module()', serving as the boundary that bundles controllers, services, directives, and filters together, maintaining separation of concerns and preventing global scope pollution.",
    definitionHindi: "AngularJS मॉड्यूल 'angular.module()' का उपयोग करके एक ऐप्लिकेशन कंटेनर को परिभाषित करता है, जो कंट्रोलर्स, सर्विसेज, डायरेक्टिव्स और फिल्टर्स को एक साथ बांधने वाली सीमा के रूप में कार्य करता है और कोड को व्यवस्थित रखता है।",
    simpleWords: "मॉड्यूल ऐप्लिकेशन का मुख्य बक्सा (Container) है। इस बक्से के अंदर हम कंट्रोलर (कुक/शेफ) रखते हैं जो डेटा तैयार करता है और स्क्रीन (View) को परोसता है।",
    whyImportant: "वास्तविक ऐप्लिकेशन्स में कोड को व्यवस्थित रखने और MVC पैटर्न का पालन करने के लिए मॉड्यूल्स और कंट्रोलर्स का उपयोग अनिवार्य होता है।",
    detailedExplanation: `### 1. मॉड्यूल कैसे बनाते हैं?
\`var app = angular.module("myApp", []);\`
- \`"myApp"\`: मॉड्यूल का नाम (यही नाम HTML में \`ng-app="myApp"\` में लिखा जाता है)।
- \`[]\` (खाली ऐरे): यह डिपेंडेंसी ऐरे है (अन्य बाहरी मॉड्यूल्स को जोड़ने के लिए)।

### 2. कंट्रोलर क्या है?
- कंट्रोलर जावास्क्रिप्ट का एक फंक्शन होता है जो डेटा और बिजनेस लॉजिक को नियंत्रित करता है।
- **\`$scope\` ऑब्जेक्ट (अति महत्वपूर्ण):** यह मॉडल और व्यू के बीच का पुल (ग्लू) है। जो भी वेरिएबल आप \`$scope\` पर जोड़ते हैं (\`$scope.studentName = "Rahul"\`), वह सीधे HTML में \`{{ studentName }}\` से दिखने लगता है!`,
    syntax: `// 1. Define Module
var app = angular.module("myApp", []);

// 2. Define Controller with $scope
app.controller("myCtrl", function($scope) {
  $scope.moduleName = "M2-R5.1: Web Designing";
  $scope.marks = 90;
});`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
</head>
<body ng-app="nielitApp" ng-controller="courseCtrl">
  <h2>AngularJS Module & Controller Demo</h2>
  
  <div style="background:#f0f9ff; border:1px solid #bae6fd; padding:15px; border-radius:6px; max-width:350px;">
    <p>Module: <b>{{ moduleCode }}</b></p>
    <p>Title: <b>{{ title }}</b></p>
    <p>Duration: <b>{{ hours }} Hours</b></p>
  </div>

  <script>
    // Create Application Module
    var app = angular.module("nielitApp", []);

    // Create Controller
    app.controller("courseCtrl", function($scope) {
      $scope.moduleCode = "M2-R5.1";
      $scope.title = "Web Designing & Publishing";
      $scope.hours = 120;
    });
  </script>
</body>
</html>`,
    outputExplanation: "कंट्रोलर में परिभाषित $scope वेरिएबल्स (M2-R5.1, 120 Hours) सीधे HTML में सुंदर कार्ड के रूप में दिखेंगे।",
    realWorldAnalogy: "मॉड्यूल रेस्टोरेंट का पूरा ढांचा है; कंट्रोलर उसका हेड-शेफ है; और `$scope` वह वेटर है जो किचन से खाना लेकर टेबल (View) तक पहुंचाता है।",
    importantPoints: [
      "angular.module(\"appName\", []) से मॉड्यूल बनता है।",
      "खाली ऐरे [] डिपेंडेंट मॉड्यूल्स की सूची के लिए होता है।",
      "$scope ऑब्जेक्ट मॉडल और व्यू के बीच डेटा ट्रांसफर करता है।"
    ],
    commonMistakes: [
      "`angular.module(\"myApp\")` में खाली ऐरे `[]` छोड़ देना (बिना `[]` के यह नया मॉड्यूल बनाने के बजाय पुराना मॉड्यूल ढूंढने लगता है)।"
    ],
    examPerspective: "मॉड्यूल बनाने का सिंटैक्स, $scope की भूमिका, और ng-controller डायरेक्टिव के उपयोग पर प्रश्न पूछे जाते हैं।",
    quickRevision: "angular.module(\"app\", []) मॉड्यूल बनाता है। app.controller(\"ctrl\", function($scope){}) लॉजिक और डेटा संभालता है।",
    relatedTopics: ["introduction-to-angular-js", "angular-js-directives", "angular-js-expressions"],
    practiceTask: "एक मॉड्यूल और कंट्रोलर बनाएं जिसमें `$scope.city = 'Prayagraj'` हो और उसे HTML में प्रदर्शित करें।"
  },
  {
    id: "u6-t11",
    slug: "angular-js-directives",
    unit: 6,
    unitSlug: "unit-6",
    unitTitle: "JavaScript and Angular JS",
    title: "Angular JS Directives (ng-app, ng-model, ng-bind, ng-init, ng-repeat)",
    hindiTitle: "AngularJS डायरेक्टिव्स (ng-app, ng-model, ng-bind, ng-repeat)",
    definitionEnglish: "AngularJS Directives are special HTML attributes prefixed with 'ng-' that extend standard HTML vocabulary and behavior, instructing the AngularJS compiler to attach custom behavior, perform data binding, initialize variables, or repeat DOM structures.",
    definitionHindi: "AngularJS डायरेक्टिव्स 'ng-' प्रीफिक्स वाले विशेष HTML एट्रिब्यूट्स हैं जो मानक HTML शब्दावली और व्यवहार का विस्तार करते हैं; ये AngularJS कंपाइलर को कस्टम व्यवहार जोड़ने, डेटा बाइंडिंग करने, वेरिएबल्स इनिशियलाइज़ करने या तत्वों को दोहराने का निर्देश देते हैं।",
    simpleWords: "डायरेक्टिव्स HTML टैग्स के अंदर लिखे जाने वाले विशेष आदेश (Commands) हैं जो 'ng-' से शुरू होते हैं। जैसे `ng-app` कहता है 'Angular चालू हो जाओ', `ng-model` इनपुट को बांधता है, और `ng-repeat` लिस्ट को लूप में घुमाता है।",
    whyImportant: "AngularJS का पूरा जादू डायरेक्टिव्स पर ही टिका है। O-Level परीक्षा में ng-app, ng-model, और ng-repeat पर 100% प्रश्न आता है।",
    detailedExplanation: `### आधिकारिक पाठ्यक्रम के 8 सबसे महत्वपूर्ण डायरेक्टिव्स:
1. **\`ng-app\` (ऐप्लिकेशन रूट):**
   - यह AngularJS ऐप्लिकेशन का प्रारंभिक बिंदु (Root Element) तय करता है। इसके बिना कोई भी AngularJS फीचर काम नहीं करता।
2. **\`ng-model\` (Two-Way Data Binding):**
   - फॉर्म इनपुट्स (\`<input>\`, \`<select>\`, \`<textarea>\`) को डेटा वेरिएबल से जोड़ता है।
3. **\`ng-bind\`:**
   - किसी HTML एलिमेंट के कंटेंट को डेटा वेरिएबल से बदलता है (उदा. \`<span ng-bind="name"></span>\`, यह \`{{ name }}\` का सुरक्षित विकल्प है)।
4. **\`ng-init\` (प्रारंभिक मान):**
   - ऐप्लिकेशन के शुरू होते ही वेरिएबल्स को प्रारंभिक मान देने हेतु (उदा. \`ng-init="qty=1; price=100"\`)।
5. **\`ng-repeat\` (लूपिंग - अति महत्वपूर्ण!):**
   - किसी ऐरे या सूची के प्रत्येक तत्व के लिए HTML ब्लॉक को बार-बार दोहराता है (जैसे \`for\` लूप)।
   - सिंटैक्स: \`<li ng-repeat="x in subjects">{{ x }}</li>\`
6. **\`ng-show\` और \`ng-hide\`:**
   - किसी शर्त के सत्य/असत्य होने पर एलिमेंट को स्क्रीन पर दिखाना या छिपाना।
7. **\`ng-click\`:**
   - बटन क्लिक होने पर फंक्शन या एक्सप्रेशन चलाना (\`<button ng-click="count = count + 1">\`)।`,
    syntax: `<div ng-app="" ng-init="names=['Amit', 'Priya', 'Rohan']">
  <input type="text" ng-model="search">
  <ul>
    <li ng-repeat="n in names | filter:search">{{ n }}</li>
  </ul>
</div>`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
</head>
<body ng-app="" ng-init="courses=['M1-R5.1: IT Tools', 'M2-R5.1: Web Design', 'M3-R5.1: Python', 'M4-R5.1: IoT']">
  <h2>AngularJS Directives Mastery Showcase</h2>

  <!-- ng-model with instant filtering -->
  <label>Search Syllabus Module:</label><br>
  <input type="text" ng-model="searchKeyword" placeholder="Filter courses..." style="padding:6px; width:280px; margin-top:4px;">

  <!-- ng-repeat looping over the courses array -->
  <ul style="max-width:300px; padding-left:20px; margin-top:12px;">
    <li ng-repeat="item in courses | filter:searchKeyword" style="padding:4px 0;">
      {{ item }}
    </li>
  </ul>
</body>
</html>`,
    outputExplanation: "सर्च बॉक्स में जैसे ही आप 'Web' लिखेंगे, ng-repeat लूप तुरंत बाकी कोर्स छिपा देगा और केवल 'M2-R5.1: Web Design' दिखाएगा!",
    realWorldAnalogy: "`ng-repeat` एक फोटोकॉपी मशीन जैसा है; जितने छात्र होंगे, यह उतनी ही प्रतियां (Rows) अपने आप छाप देगा।",
    importantPoints: [
      "सभी AngularJS डायरेक्टिव्स 'ng-' प्रीफिक्स से शुरू होते हैं।",
      "ng-app ऐप्लिकेशन को सक्रिय करता है।",
      "ng-model Two-Way Data Binding करता है।",
      "ng-repeat ऐरे के तत्वों पर लूप चलाता है।"
    ],
    commonMistakes: [
      "`ng-model` को साधारण `<div>` या `<p>` पर लगाना (ng-model केवल फॉर्म इनपुट कंट्रोल्स पर काम करता है; साधारण तत्वों के लिए `ng-bind` का उपयोग करें)।"
    ],
    examPerspective: "ng-app, ng-model, ng-bind, और ng-repeat के कार्य और उपयोग पर परीक्षा में 10 से 15 नंबर के प्रश्न पूछे जाते हैं।",
    quickRevision: "डायरेक्टिव्स: ng-app (शुरुआत), ng-model (डेटा बाइंडिंग), ng-bind (प्रिंट), ng-init (इनिशियलाइज़), ng-repeat (लूप दोहराव)।",
    relatedTopics: ["introduction-to-angular-js", "angular-js-expressions", "angular-js-modules"],
    practiceTask: "एक `ng-repeat` बनाकर 4 फलों के नाम वाली लिस्ट को स्क्रीन पर प्रदर्शित करें और सर्च बॉक्स से फिल्टर करें।"
  }
];
