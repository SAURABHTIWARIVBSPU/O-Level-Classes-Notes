// Unit 2: Editors - Complete Topic Notes

export const unit2Topics = [
  {
    id: "u2-t1",
    slug: "downloading-free-editors-notepad-plus-plus",
    unit: 2,
    unitSlug: "unit-2",
    unitTitle: "Editors",
    title: "Downloading Free Editors like Notepad++",
    hindiTitle: "Notepad++ जैसे फ्री कोड एडिटर्स डाउनलोड करना",
    definitionEnglish: "Notepad++ is a free, open-source source code editor and text editor replacement for Windows that supports tabbed document editing and syntax highlighting for over 80 programming and markup languages, written in C++.",
    definitionHindi: "Notepad++ विंडोज ऑपरेटिंग सिस्टम के लिए एक अत्यंत लोकप्रिय, फ्री और ओपन-सोर्स सोर्स कोड एडिटर है जो 80 से अधिक प्रोग्रामिंग व मार्कअप भाषाओं के लिए सिंटैक्स हाइलाइटिंग और टैब आधारित एडिटिंग की सुविधा देता है।",
    simpleWords: "विंडोज के साधारण नोटपैड में न तो लाइन नंबर दिखते हैं और न ही कोड के रंग। Notepad++ एक ऐसा सुपर-नोटपैड है जो कोड को रंग-बिरंगा दिखाता है, गलतियां पकड़ने में मदद करता है और बिल्कुल फ्री है।",
    whyImportant: "O-Level प्रैक्टिकल परीक्षाओं में सरकारी परीक्षा केंद्रों पर Notepad++ सबसे आम और मानक एडिटर के रूप में उपलब्ध कराया जाता है।",
    detailedExplanation: `### 1. Notepad++ की मुख्य विशेषताएं:
- **C++ आधारित:** यह Scintilla कंपोनेंट पर आधारित है और C++ में लिखा गया है, इसलिए यह बहुत हल्का (~4MB) और सुपरफास्ट है।
- **Syntax Highlighting & Folding:** HTML टैग्स, CSS रूल्स और JS कीवर्ड्स अलग-अलग रंगों में दिखते हैं।
- **Tabbed Interface:** एक ही विंडो में एक साथ कई फाइलों को टैब के रूप में खोलकर काम किया जा सकता है।
- **Search & Replace:** रेगुलर एक्सप्रेशन (Regex) के साथ बहु-फाइल सर्च।
- **Auto-Completion:** टैग्स और फंक्शन्स को टाइप करते ही सुझाव देना।

### 2. डाउनलोड व इंस्टॉलेशन प्रक्रिया:
1. आधिकारिक वेबसाइट \`https://notepad-plus-plus.org\` पर जाएं।
2. 'Download' सेक्शन से नवीनतम स्टेबल रिलीज (32-bit या 64-bit Installer) चुनें।
3. डाउनलोड की गई \`.exe\` फाइल पर डबल क्लिक करके डिफ़ॉल्ट सेटिंग्स के साथ इंस्टॉल करें।
4. 'Language' मेन्यू से 'H' -> 'HTML' चुनकर HTML कोडिंग शुरू करें।`,
    syntax: `Key Notepad++ Keyboard Shortcuts:
Ctrl + N     : New document
Ctrl + S     : Save file
Ctrl + D     : Duplicate current line
Ctrl + /     : Toggle Single-Line Comment
Ctrl + Q     : Toggle Block Comment
F5           : Open Run menu (Launch in Chrome/Firefox)`,
    codeExample: `<!-- Writing in Notepad++ -->
<!DOCTYPE html>
<html>
<head>
  <title>Notepad++ Demo</title>
</head>
<body>
  <!-- Line numbers and color highlighting make this easy to spot -->
  <h1>Created with Notepad++</h1>
</body>
</html>`,
    outputExplanation: "Notepad++ में `<h1>` टैग नीले रंग में, कमेंट्स हरे रंग में और टेक्स्ट काले रंग में दिखाई देते हैं, जिससे कोड पढ़ना आसान हो जाता है।",
    realWorldAnalogy: "साधारण नोटपैड अगर एक सादा ब्लैक-एंड-व्हाइट नोटबुक है, तो Notepad++ रंगीन हाइलाइटर्स, स्केल और स्टिकी नोट्स से सुसज्जित एक पूरी स्टेशनरी किट है।",
    importantPoints: [
      "Notepad++ केवल Microsoft Windows ऑपरेटिंग सिस्टम पर काम करता है।",
      "यह GPL (General Public License) के तहत फ्री और ओपन-सोर्स सॉफ्टवेयर है।",
      "यह C++ भाषा में लिखा गया है।"
    ],
    commonMistakes: [
      "Notepad++ को Mac या Linux पर सीधे खोजने की कोशिश करना (Mac पर यह नहीं चलता; वहां Sublime या VS Code का उपयोग होता है)।"
    ],
    examPerspective: "परीक्षा में प्रश्न: 'Notepad++ किस प्रकार का सॉफ्टवेयर है?' (Open-source Source Code Editor) और 'किस OS को सपोर्ट करता है?' (Windows).",
    quickRevision: "Notepad++ विंडोज के लिए C++ में लिखा गया फ्री, हल्का और तेज सोर्स कोड एडिटर है जो सिंटैक्स हाइलाइटिंग देता है।",
    relatedTopics: ["sublime-text-editor", "making-use-of-editors", "saving"],
    practiceTask: "Notepad++ खोलें, `Ctrl + N` से नई फाइल बनाएं, `Language -> H -> HTML` चुनें और एक हेडिंग टैग लिखकर रंगों का बदलाव देखें।"
  },
  {
    id: "u2-t2",
    slug: "sublime-text-editor",
    unit: 2,
    unitSlug: "unit-2",
    unitTitle: "Editors",
    title: "Sublime Text Editor",
    hindiTitle: "सबलाइम टेक्स्ट एडिटर (Sublime Text Editor)",
    definitionEnglish: "Sublime Text is a sophisticated, versatile, cross-platform source code editor built in C++ and Python, renowned for its speed, minimal interface, 'Goto Anything' navigation, multiple selection cursors, and extensive package ecosystem.",
    definitionHindi: "Sublime Text एक आधुनिक, बहुमुखी और क्रॉस-प्लेटफॉर्म सोर्स कोड एडिटर है जो अपनी तेज गति, न्यूनतम इंटरफेस, 'Goto Anything' सर्च, मल्टी-कर्सर एडिटिंग और समृद्ध पैकेज इकोसिस्टम के लिए जाना जाता है।",
    simpleWords: "Sublime Text पेशेवरों का पसंदीदा कोड एडिटर है। इसका डार्क-मोड इंटरफेस आंखों को सुकून देता है और इसमें 'Multi-cursor' फीचर से आप एक साथ 10 जगहों पर एक ही शब्द बदल सकते हैं।",
    whyImportant: "Sublime Text आधुनिक वेब डेवलपमेंट में तेजी से कोडिंग करने (Emmet शॉर्टकट, ऑटो-टैग क्लोज) के लिए अत्यधिक उपयोगी है।",
    detailedExplanation: `### 1. Sublime Text के क्रांतिकारी फीचर्स:
- **Cross-Platform:** यह Windows, macOS, और Linux तीनों प्रमुख ऑपरेटिंग सिस्टम्स पर एक समान काम करता है।
- **Goto Anything (\`Ctrl + P\`):** बिना माउस छुए सीधे किसी भी फाइल, लाइन नंबर (\`:line\`), या फंक्शन (\`@symbol\`) पर तुरंत पहुंचा जा सकता है।
- **Multiple Selections (\`Ctrl + D\`):** किसी शब्द को सेलेक्ट करके \`Ctrl + D\` दबाने पर उसके अगले सभी इंस्टैंस एक साथ सेलेक्ट हो जाते हैं और एक साथ एडिट किए जा सकते हैं।
- **Minimap:** फाइल का एक विहंगम दृश्य (Birds-eye view) दाएँ कोने में दिखता है जिससे हजारों लाइनों के कोड में तेजी से स्क्रॉल किया जा सकता है।
- **Command Palette (\`Ctrl + Shift + P\`):** सभी सेटिंग्स और टूल्स को कीबोर्ड से सर्च करके चलाना।
- **Python API:** इसमें अनगिनत प्लगइन्स (Package Control) जोड़े जा सकते हैं।`,
    syntax: `Essential Sublime Text Shortcuts:
Ctrl + P           : Goto Anything (Files & Lines)
Ctrl + D           : Select next occurrence of word (Multi-cursor)
Ctrl + Shift + P   : Command Palette
Ctrl + /           : Toggle comment
Ctrl + Shift + K   : Delete entire line
Alt + Shift + 1-4  : Split screen into multiple columns`,
    codeExample: `<!-- Using Emmet in Sublime Text -->
<!-- Typing: div.container>ul>li*3 and hitting TAB automatically expands to: -->
<div class="container">
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
</div>`,
    outputExplanation: "Sublime Text में Emmet एक्सटेंशन के जरिए 1 लाइन का शॉर्टकट लिखकर Tab दबाने से पूरा जटिल HTML कोड अपने आप बन जाता है।",
    realWorldAnalogy: "साधारण एडिटर अगर हाथ का पेंचकस है, तो Sublime Text एक हाई-स्पीड इलेक्ट्रिक पावर टूल है जो काम को 5 गुना तेज कर देता है।",
    importantPoints: [
      "Sublime Text क्रॉस-प्लेटफॉर्म है (Windows, Mac, Linux).",
      "Goto Anything का शॉर्टकट Ctrl + P है।",
      "Multi-cursor सिलेक्शन का शॉर्टकट Ctrl + D है।",
      "यह Python API सपोर्ट करता है।"
    ],
    commonMistakes: [
      "यह सोचना कि Sublime Text केवल पेड है (इसका फ्री इवैल्यूएशन वर्जन बिना किसी एक्सपायरी के इस्तेमाल किया जा सकता है)।"
    ],
    examPerspective: "परीक्षा में शॉर्टकट कीज (\`Ctrl + P\` Goto Anything, \`Ctrl + D\` Multi-cursor) और क्रॉस-प्लेटफॉर्म सपोर्ट पर प्रश्न पूछे जाते हैं।",
    quickRevision: "Sublime Text क्रॉस-प्लेटफॉर्म प्रीमियम सोर्स कोड एडिटर है। मुख्य ताकत: Ctrl+P Goto Anything, Ctrl+D मल्टी-कर्सर, और मिनिमैप।",
    relatedTopics: ["downloading-free-editors-notepad-plus-plus", "making-use-of-editors", "file-creation-and-editing"],
    practiceTask: "Sublime Text डाउनलोड करें, 5 लाइनों में 'apple' लिखें, पहले apple पर कर्सर रखकर `Ctrl + D` दबाएं और एक साथ सबको 'mango' में बदलें।"
  },
  {
    id: "u2-t3",
    slug: "making-use-of-editors",
    unit: 2,
    unitSlug: "unit-2",
    unitTitle: "Editors",
    title: "Making Use of Editors",
    hindiTitle: "एडिटर्स का प्रभावी उपयोग (Features & Productivity)",
    definitionEnglish: "Making effective use of source code editors involves leveraging built-in features such as syntax highlighting, auto-indentation, tag auto-completion, code folding, split view editing, and integrated search/replace to write error-free, maintainable web code.",
    definitionHindi: "कोड एडिटर्स के प्रभावी उपयोग का अर्थ है उनके अंतर्निहित फीचर्स जैसे सिंटैक्स हाइलाइटिंग, ऑटो-इंडेंटेशन, टैग ऑटो-कंप्लीशन, कोड फोल्डिंग और स्प्लिट-व्यू का उपयोग करके त्रुटि-रहित और पठनीय कोड तेजी से लिखना।",
    simpleWords: "एडिटर का सही इस्तेमाल करने का मतलब है कि आपको हर टैग को पूरा टाइप न करना पड़े, कोड अपने आप सुंदर तरीके से व्यवस्थित रहे, और आप गलतियों को तुरंत पहचान सकें।",
    whyImportant: "एक कुशल वेब डिजाइनर अपनी 50% कोडिंग गति एडिटर के सही टूल्स और शॉर्टकट्स का उपयोग करके हासिल करता है।",
    detailedExplanation: `### एडिटर के 5 सबसे महत्वपूर्ण उत्पादकता टूल्स:
1. **Syntax Highlighting:** अलग-अलग टोकन्स (टैग्स, एट्रिब्यूट्स, वैल्यूज, कमेंट्स) को अलग रंगों में दिखाना ताकि मिसिंग कोट्स (\`"\`) या गलत स्पेलिंग तुरंत दिख जाएं।
2. **Auto-Indentation:** जब आप पैरेंट टैग के अंदर एंटर दबाते हैं, तो एडिटर स्वतः 2 या 4 स्पेस आगे से लिखना शुरू करता है ताकि कोड का पदानुक्रम (Hierarchy) स्पष्ट दिखे।
3. **Auto-Tag Closing:** जब आप \`<div>\` लिखते हैं, तो एडिटर स्वतः उसका क्लोजिंग टैग \`</div>\` बना देता है।
4. **Code Folding (कोड समेटना):** बड़ी फाइलों में किसी बड़े ब्लॉक (जैसे पूरा \`<table>\` या \`<nav>\`) को माइनस (\`-\`) बटन दबाकर छिपाना ताकि मुख्य कोड पर ध्यान दिया जा सके।
5. **Split View (स्क्रीन विभाजन):** एक तरफ \`index.html\` और दूसरी तरफ \`style.css\` को एक साथ खोलकर काम करना।`,
    syntax: `Cleanly Indented Code vs Poor Code:
POOR (Hard to read):
<div><h1>Title</h1><p>Text</p></div>

CLEAN (Using Editor Indentation):
<div>
  <h1>Title</h1>
  <p>Text</p>
</div>`,
    codeExample: `<!-- Demonstrating Code Folding and Indentation -->
<section id="features">
  <div class="card">
    <h3>Syntax Highlighting</h3>
    <p>Spots unclosed quotes instantly.</p>
  </div>
  <div class="card">
    <h3>Auto Indentation</h3>
    <p>Makes code clean and readable.</p>
  </div>
</section>`,
    outputExplanation: "एडिटर में बाएँ हाथ पर लाइन नंबर के पास छोटे तीर (arrows) होते हैं जिन पर क्लिक करने से पूरा सेक्शन 1 लाइन में सिमट जाता है।",
    realWorldAnalogy: "जैसे एक बढ़ई के पास हथौड़े के अलावा लेवलर, इंच-टेप और आरी होती है जिससे वह सीधा और सुंदर फर्नीचर बनाता है, वैसे ही एडिटर के ये टूल्स कोड को परफेक्ट बनाते हैं।",
    importantPoints: [
      "इंडेंटेशन कोड की पठनीयता (Readability) के लिए अत्यंत आवश्यक है।",
      "सिंटैक्स एरर होने पर एडिटर का रंग बदल जाता है, जिससे तुरंत गलती पकड़ में आ जाती है।",
      "कमेंटिंग के लिए शॉर्टकट Ctrl + / का उपयोग करें।"
    ],
    commonMistakes: [
      "बिना इंडेंटेशन के सारा कोड बाईं दीवार से सटाकर लिखना (इससे नेस्टेड टैग्स की गलतियां ढूंढना असंभव हो जाता है)।"
    ],
    examPerspective: "सिंटैक्स हाइलाइटिंग, ऑटो-इंडेंटेशन, और कोड फोल्डिंग की परिभाषा पर वस्तुनिष्ठ प्रश्न पूछे जाते हैं।",
    quickRevision: "एडिटर्स सिंटैक्स हाइलाइटिंग, ऑटो-टैग क्लोजिंग, कोड फोल्डिंग और ऑटो-इंडेंटेशन द्वारा कोडिंग को आसान और त्रुटिरहित बनाते हैं।",
    relatedTopics: ["file-creation-and-editing", "downloading-free-editors-notepad-plus-plus", "saving"],
    practiceTask: "एक अव्यवस्थित HTML कोड लें और एडिटर के ऑटो-इंडेंटेशन फीचर द्वारा उसे सुंदर पदानुक्रम में बदलें।"
  },
  {
    id: "u2-t4",
    slug: "file-creation-and-editing",
    unit: 2,
    unitSlug: "unit-2",
    unitTitle: "Editors",
    title: "File Creation and Editing",
    hindiTitle: "फाइल निर्माण एवं संपादन (File Creation & Editing)",
    definitionEnglish: "File creation and editing in web development refers to initializing new plain text documents in a code editor, setting the target language syntax, writing well-formed markup or code, navigating through lines, and modifying existing codebases.",
    definitionHindi: "वेब विकास में फाइल निर्माण और संपादन का तात्पर्य कोड एडिटर में नए प्लेन टेक्स्ट दस्तावेज़ बनाना, भाषा सिंटैक्स सेट करना, मानक कोड लिखना, और पहले से मौजूद फाइलों में सुधार व संशोधन करना है।",
    simpleWords: "नया वेबपेज बनाने के लिए सबसे पहले एडिटर में एक खाली फाइल खोली जाती है, उसमें HTML का कोड लिखा जाता है, और जरूरत पड़ने पर उसमें बदलाव किया जाता है।",
    whyImportant: "यह वेब डेवलपमेंट की रोजमर्रा की बुनियादी प्रक्रिया है। फाइल सही ढंग से बनेगी तभी ब्राउज़र उसे सही से दिखा पाएगा।",
    detailedExplanation: `### 1. नई फाइल बनाने के चरण:
1. कोड एडिटर खोलें (Notepad++ / Sublime)।
2. कीबोर्ड पर **\`Ctrl + N\`** दबाएं या \`File -> New\` पर क्लिक करें।
3. एडिटर के नीचे स्टेटस बार में लैंग्वेज को 'HTML' पर सेट करें (ताकि सिंटैक्स हाइलाइटिंग चालू हो जाए)।
4. HTML5 का बुनियादी ढांचा (\`<!DOCTYPE html>\`, \`<html>\`, \`<head>\`, \`<body>\`) टाइप करें।

### 2. फाइल संपादन (Editing) की तकनीकें:
- **Search & Replace (\`Ctrl + H\`):** यदि किसी वेबसाइट में 20 जगहों पर '2025' को '2026' करना है, तो 'Replace All' से एक सेकंड में बदला जा सकता है।
- **Line Duplication (\`Ctrl + D\` in Notepad++):** टेबल की रो (\`<tr>\`) या लिस्ट आइटम (\`<li>\`) को बार-बार टाइप करने के बजाय एक क्लिक में डुप्लीकेट करना।
- **Moving Lines:** \`Ctrl + Shift + Up/Down\` दबाकर किसी पूरी लाइन को ऊपर या नीचे खिसकाना।`,
    syntax: `Standard HTML File Creation Template:
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document Title</title>
</head>
<body>
  <!-- Your content here -->
</body>
</html>`,
    codeExample: `<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="UTF-8">
  <title>मेरा नया पेज</title>
</head>
<body>
  <h1>सफलतापूर्वक फाइल बनाई गई!</h1>
  <p>Ctrl + N से नई फाइल बनी, Ctrl + S से सेव हुई।</p>
</body>
</html>`,
    outputExplanation: "ब्राउज़र में यह कोड एक हेडिंग और एक पैराग्राफ के रूप में दिखेगा।",
    realWorldAnalogy: "फाइल बनाना एक नई साफ डायरी खोलने जैसा है, और एडिट करना उसमें पुरानी प्रविष्टियों को ठीक करने या नई जानकारी जोड़ने जैसा है।",
    importantPoints: [
      "नई फाइल का शॉर्टकट Ctrl + N है।",
      "सर्च का शॉर्टकट Ctrl + F और रिप्लेस का शॉर्टकट Ctrl + H है।",
      "लाइन डिलीट करने का शॉर्टकट Ctrl + Shift + K (Sublime) या Ctrl + L (Notepad++) है।"
    ],
    commonMistakes: [
      "फाइल को बिना किसी एक्सटेंशन के सादे नाम से सेव कर देना।"
    ],
    examPerspective: "शॉर्टकट कुंजियां (Ctrl+N, Ctrl+O, Ctrl+S, Ctrl+H) परीक्षा में बार-बार पूछी जाती हैं।",
    quickRevision: "Ctrl+N से नई फाइल बनाएं, कोड लिखें, Ctrl+H से सर्च/रिप्लेस करें और Ctrl+S से सुरक्षित करें।",
    relatedTopics: ["saving", "making-use-of-editors", "basic-structure-of-html"],
    practiceTask: "एक फाइल में 5 बार गलत स्पेलिंग लिखें और `Ctrl + H` (Find & Replace) का उपयोग करके एक साथ सभी को ठीक करें।"
  },
  {
    id: "u2-t5",
    slug: "saving",
    unit: 2,
    unitSlug: "unit-2",
    unitTitle: "Editors",
    title: "Saving Files and File Extensions",
    hindiTitle: "फाइल सेव करना और फाइल एक्सटेंशन (.html, .css, .js)",
    definitionEnglish: "Saving files in web development involves writing the editor buffer to non-volatile storage with the correct file name, standard web extensions (.html, .htm, .css, .js), and universal character encoding (UTF-8) so browsers can parse them correctly.",
    definitionHindi: "वेब डेवलपमेंट में फाइल सेव करने का अर्थ है एडिटर में लिखे गए कोड को सही नाम, मानक वेब एक्सटेंशन (.html, .css, .js) और सार्वभौमिक कैरेक्टर एन्कोडिंग (UTF-8) के साथ कंप्यूटर की मेमोरी में सुरक्षित करना।",
    simpleWords: "जब तक आप फाइल को सेव नहीं करते, वह उड़ सकती है। सबसे महत्वपूर्ण बात यह है कि फाइल के नाम के पीछे सही एक्सटेंशन (जैसे `.html`) लगाना जरूरी है, तभी कंप्यूटर को पता चलता है कि यह वेबपेज है।",
    whyImportant: "शुरुआती छात्रों की 80% समस्याएं गलत फाइल एक्सटेंशन (जैसे `index.html.txt`) के कारण होती हैं। सही एक्सटेंशन के बिना ब्राउज़र कोड को सादा टेक्स्ट मान लेता है।",
    detailedExplanation: `### 1. वेब फाइलों के मानक एक्सटेंशन्स:
- **HTML Files:** \`.html\` या \`.htm\` (उदा. \`index.html\`, \`contact.html\`)।
- **CSS Stylesheets:** \`.css\` (उदा. \`style.css\`)।
- **JavaScript Files:** \`.js\` (उदा. \`app.js\`)।
- **Images:** \`.jpg\`, \`.jpeg\`, \`.png\`, \`.webp\`, \`.svg\`, \`.gif\`।

### 2. 'Save As' की सावधानियां:
1. **'Save as type' को 'All Files (*.*)'** चुनें ताकि नोटपैड अपने आप पीछे \`.txt\` न जोड़ दे।
2. **Encoding हमेशा 'UTF-8'** रखें ताकि हिंदी और अन्य अंतरराष्ट्रीय भाषाएं सही से प्रदर्शित हों।
3. **फाइल के नाम में स्पेस न दें:** \`my page.html\` के बजाय \`my-page.html\` लिखें।
4. **होमपेज का नाम हमेशा \`index.html\` रखें।**

### 3. सेव करने के शॉर्टकट्स:
- **\`Ctrl + S\`:** सामान्य सेव (Save)।
- **\`Ctrl + Shift + S\` or \`Ctrl + Alt + S\`:** दूसरे नाम या जगह पर सेव (Save As)।`,
    syntax: `File Naming Rules:
Good: index.html, about-us.html, style.css, script.js
Bad:  My Page.HTML, student info.html.txt, about!@#.htm`,
    codeExample: `<!-- UTF-8 Encoding in HTML Head matches file save encoding -->
<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="UTF-8">
  <title>UTF-8 सुरक्षित वेबपेज</title>
</head>
<body>
  <p>हिंदी फॉन्ट बिना किसी गड़बड़ी के दिखेगा क्योंकि फाइल UTF-8 में सेव है।</p>
</body>
</html>`,
    outputExplanation: "ब्राउज़र फाइल के `.html` एक्सटेंशन को देखकर HTML पार्सर सक्रिय करता है और सुंदर वेबपेज दिखाता है।",
    realWorldAnalogy: "फाइल का एक्सटेंशन पार्सल के ऊपर लगे लेबल जैसा है; अगर पार्सल पर 'दवा' का लेबल लगा है तो उसे सही विभाग में भेजा जाएगा, गलत लेबल लगने पर सब गड़बड़ हो जाएगा।",
    importantPoints: [
      "HTML का मानक एक्सटेंशन .html या .htm होता है।",
      "CSS का एक्सटेंशन .css और JavaScript का .js होता है।",
      "मानक वेब एन्कोडिंग UTF-8 होती है।",
      "वेबसाइट का मुख्य प्रवेश पेज index.html कहलाता है।"
    ],
    commonMistakes: [
      "विंडोज में 'Hide extensions for known file types' चालू रहने पर फाइल का नाम `index.html.txt` बन जाना।",
      "फाइल के नाम में स्पेस या कैपिटल अक्षरों का अत्यधिक प्रयोग करना।"
    ],
    examPerspective: "HTML, CSS और JS फाइलों के सही एक्सटेंशन, UTF-8 का पूर्ण रूप (8-bit Unicode Transformation Format), और सेव शॉर्टकट्स पर प्रश्न पूछे जाते हैं।",
    quickRevision: "Ctrl+S से फाइल सेव करें। HTML के लिए .html, CSS के लिए .css, JS के लिए .js एक्सटेंशन और UTF-8 एन्कोडिंग अनिवार्य है।",
    relatedTopics: ["file-creation-and-editing", "downloading-free-editors-notepad-plus-plus", "head-section-and-elements"],
    practiceTask: "एक फाइल को `mytest.html` नाम से सेव करें और जांचें कि क्या उसके आइकॉन पर क्रोम/एज का लोगो आ गया है।"
  }
];
