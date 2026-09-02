// Unit 2: Editors - Complete Topic Notes

export const unit2Topics = [
  {
    "id": "u2-t1",
    "slug": "downloading-free-editors-notepad-plus-plus",
    "unit": 2,
    "unitSlug": "unit-2",
    "unitTitle": "Editors",
    "title": "Downloading Free Editors like Notepad++",
    "hindiTitle": "Notepad++ जैसे फ्री कोड एडिटर्स डाउनलोड करना",
    "definitionEnglish": "Notepad++ is a free, open-source source code editor and text editor replacement for Windows that supports tabbed document editing and syntax highlighting for over 80 programming and markup languages, written in C++.",
    "definitionHindi": "Notepad++ विंडोज ऑपरेटिंग सिस्टम के लिए एक अत्यंत लोकप्रिय, फ्री और ओपन-सोर्स सोर्स कोड एडिटर है जो 80 से अधिक प्रोग्रामिंग व मार्कअप भाषाओं के लिए सिंटैक्स हाइलाइटिंग और टैब आधारित एडिटिंग की सुविधा देता है।",
    "simpleWords": "विंडोज के साधारण नोटपैड में न तो लाइन नंबर दिखते हैं और न ही कोड के रंग। Notepad++ एक ऐसा सुपर-नोटपैड है जो कोड को रंग-बिरंगा दिखाता है, गलतियां पकड़ने में मदद करता है और बिल्कुल फ्री है।",
    "whyImportant": "O-Level प्रैक्टिकल परीक्षाओं में सरकारी परीक्षा केंद्रों पर Notepad++ सबसे आम और मानक एडिटर के रूप में उपलब्ध कराया जाता है।",
    "detailedExplanation": "### 1. Overview of Notepad++\nNotepad++ is a free, open-source source code editor and Notepad replacement that supports several programming and markup languages running in the MS Windows environment based on the powerful editing component Scintilla.\n\n### 2. Key Professional Features of Notepad++\n1. **Syntax Highlighting & Syntax Folding:** Color-codes HTML tags, CSS properties, and JavaScript syntax with collapsible code blocks.\n2. **Multi-Document & Multi-View Tabs:** Open dozens of files simultaneously with tabbed browsing and split-screen comparison.\n3. **Regular Expression Search & Replace:** Powerful RegEx search across single documents or entire project directories.\n4. **Auto-Completion:** Intelligent word completion, function completion, and auto-insertion of closing quotes and brackets.\n5. **Lightweight & High Performance:** Written in pure C++ using Win32 API and STL, ensuring instantaneous startup times and low CPU/RAM usage.\n\n### 3. Installation and Setup Procedure\n- Download the official installer (.exe) or portable archive from the official website (`notepad-plus-plus.org`).\n- Install recommended plugins via Plugin Admin (such as *XML Tools*, *NppFTP*, *AutoSave*).",
    "syntax": "Key Notepad++ Keyboard Shortcuts:\nCtrl + N     : New document\nCtrl + S     : Save file\nCtrl + D     : Duplicate current line\nCtrl + /     : Toggle Single-Line Comment\nCtrl + Q     : Toggle Block Comment\nF5           : Open Run menu (Launch in Chrome/Firefox)",
    "codeExample": "<!-- Writing in Notepad++ -->\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Notepad++ Demo</title>\n</head>\n<body>\n  <!-- Line numbers and color highlighting make this easy to spot -->\n  <h1>Created with Notepad++</h1>\n</body>\n</html>",
    "outputExplanation": "Notepad++ में `<h1>` टैग नीले रंग में, कमेंट्स हरे रंग में और टेक्स्ट काले रंग में दिखाई देते हैं, जिससे कोड पढ़ना आसान हो जाता है।",
    "realWorldAnalogy": "साधारण नोटपैड अगर एक सादा ब्लैक-एंड-व्हाइट नोटबुक है, तो Notepad++ रंगीन हाइलाइटर्स, स्केल और स्टिकी नोट्स से सुसज्जित एक पूरी स्टेशनरी किट है।",
    "importantPoints": [
      "Notepad++ केवल Microsoft Windows ऑपरेटिंग सिस्टम पर काम करता है।",
      "यह GPL (General Public License) के तहत फ्री और ओपन-सोर्स सॉफ्टवेयर है।",
      "यह C++ भाषा में लिखा गया है।"
    ],
    "commonMistakes": [
      "Notepad++ को Mac या Linux पर सीधे खोजने की कोशिश करना (Mac पर यह नहीं चलता; वहां Sublime या VS Code का उपयोग होता है)।"
    ],
    "examPerspective": "परीक्षा में प्रश्न: 'Notepad++ किस प्रकार का सॉफ्टवेयर है?' (Open-source Source Code Editor) और 'किस OS को सपोर्ट करता है?' (Windows).",
    "quickRevision": "Notepad++ विंडोज के लिए C++ में लिखा गया फ्री, हल्का और तेज सोर्स कोड एडिटर है जो सिंटैक्स हाइलाइटिंग देता है।",
    "relatedTopics": [
      "sublime-text-editor",
      "making-use-of-editors",
      "saving"
    ],
    "practiceTask": "Notepad++ खोलें, `Ctrl + N` से नई फाइल बनाएं, `Language -> H -> HTML` चुनें और एक हेडिंग टैग लिखकर रंगों का बदलाव देखें।"
  },
  {
    "id": "u2-t2",
    "slug": "sublime-text-editor",
    "unit": 2,
    "unitSlug": "unit-2",
    "unitTitle": "Editors",
    "title": "Sublime Text Editor",
    "hindiTitle": "सबलाइम टेक्स्ट एडिटर (Sublime Text Editor)",
    "definitionEnglish": "Sublime Text is a sophisticated, versatile, cross-platform source code editor built in C++ and Python, renowned for its speed, minimal interface, 'Goto Anything' navigation, multiple selection cursors, and extensive package ecosystem.",
    "definitionHindi": "Sublime Text एक आधुनिक, बहुमुखी और क्रॉस-प्लेटफॉर्म सोर्स कोड एडिटर है जो अपनी तेज गति, न्यूनतम इंटरफेस, 'Goto Anything' सर्च, मल्टी-कर्सर एडिटिंग और समृद्ध पैकेज इकोसिस्टम के लिए जाना जाता है।",
    "simpleWords": "Sublime Text पेशेवरों का पसंदीदा कोड एडिटर है। इसका डार्क-मोड इंटरफेस आंखों को सुकून देता है और इसमें 'Multi-cursor' फीचर से आप एक साथ 10 जगहों पर एक ही शब्द बदल सकते हैं।",
    "whyImportant": "Sublime Text आधुनिक वेब डेवलपमेंट में तेजी से कोडिंग करने (Emmet शॉर्टकट, ऑटो-टैग क्लोज) के लिए अत्यधिक उपयोगी है।",
    "detailedExplanation": "### 1. Overview and Architecture of Sublime Text\nSublime Text is a sophisticated, high-performance cross-platform text and source code editor natively written in C++ and Python, available for Windows, macOS, and Linux.\n\n### 2. Essential Productivity Features\n1. **Goto Anything (`Ctrl + P` / `Cmd + P`):**\n   - Instantly navigate to any file in your project, jump to line numbers (`:45`), or locate specific symbols (`@functionName`).\n2. **Multiple Selections & Multi-Cursor Editing (`Ctrl + D` / `Alt + Click`):**\n   - Simultaneously rename variables, change multiple tag names, or format tabular data in real time across multiple lines.\n3. **Command Palette (`Ctrl + Shift + P`):**\n   - Access all editor settings, syntax changers, package commands, and formatting tools without touching the mouse.\n4. **Package Control Integration:**\n   - Install thousands of community extensions, themes (Monokai, One Dark), and linters directly inside the editor.\n5. **Emmet Abbreviation Expansion:**\n   - Expand shorthand notations (e.g., `ul>li*5>a`) into fully formed HTML tags with a single keystroke (`Tab`).",
    "syntax": "Essential Sublime Text Shortcuts:\nCtrl + P           : Goto Anything (Files & Lines)\nCtrl + D           : Select next occurrence of word (Multi-cursor)\nCtrl + Shift + P   : Command Palette\nCtrl + /           : Toggle comment\nCtrl + Shift + K   : Delete entire line\nAlt + Shift + 1-4  : Split screen into multiple columns",
    "codeExample": "<!-- Using Emmet in Sublime Text -->\n<!-- Typing: div.container>ul>li*3 and hitting TAB automatically expands to: -->\n<div class=\"container\">\n  <ul>\n    <li>Item 1</li>\n    <li>Item 2</li>\n    <li>Item 3</li>\n  </ul>\n</div>",
    "outputExplanation": "Sublime Text में Emmet एक्सटेंशन के जरिए 1 लाइन का शॉर्टकट लिखकर Tab दबाने से पूरा जटिल HTML कोड अपने आप बन जाता है।",
    "realWorldAnalogy": "साधारण एडिटर अगर हाथ का पेंचकस है, तो Sublime Text एक हाई-स्पीड इलेक्ट्रिक पावर टूल है जो काम को 5 गुना तेज कर देता है।",
    "importantPoints": [
      "Sublime Text क्रॉस-प्लेटफॉर्म है (Windows, Mac, Linux).",
      "Goto Anything का शॉर्टकट Ctrl + P है।",
      "Multi-cursor सिलेक्शन का शॉर्टकट Ctrl + D है।",
      "यह Python API सपोर्ट करता है।"
    ],
    "commonMistakes": [
      "यह सोचना कि Sublime Text केवल पेड है (इसका फ्री इवैल्यूएशन वर्जन बिना किसी एक्सपायरी के इस्तेमाल किया जा सकता है)।"
    ],
    "examPerspective": "परीक्षा में शॉर्टकट कीज (`Ctrl + P` Goto Anything, `Ctrl + D` Multi-cursor) और क्रॉस-प्लेटफॉर्म सपोर्ट पर प्रश्न पूछे जाते हैं।",
    "quickRevision": "Sublime Text क्रॉस-प्लेटफॉर्म प्रीमियम सोर्स कोड एडिटर है। मुख्य ताकत: Ctrl+P Goto Anything, Ctrl+D मल्टी-कर्सर, और मिनिमैप।",
    "relatedTopics": [
      "downloading-free-editors-notepad-plus-plus",
      "making-use-of-editors",
      "file-creation-and-editing"
    ],
    "practiceTask": "Sublime Text डाउनलोड करें, 5 लाइनों में 'apple' लिखें, पहले apple पर कर्सर रखकर `Ctrl + D` दबाएं और एक साथ सबको 'mango' में बदलें।"
  },
  {
    "id": "u2-t3",
    "slug": "making-use-of-editors",
    "unit": 2,
    "unitSlug": "unit-2",
    "unitTitle": "Editors",
    "title": "Making Use of Editors",
    "hindiTitle": "एडिटर्स का प्रभावी उपयोग (Features & Productivity)",
    "definitionEnglish": "Making effective use of source code editors involves leveraging built-in features such as syntax highlighting, auto-indentation, tag auto-completion, code folding, split view editing, and integrated search/replace to write error-free, maintainable web code.",
    "definitionHindi": "कोड एडिटर्स के प्रभावी उपयोग का अर्थ है उनके अंतर्निहित फीचर्स जैसे सिंटैक्स हाइलाइटिंग, ऑटो-इंडेंटेशन, टैग ऑटो-कंप्लीशन, कोड फोल्डिंग और स्प्लिट-व्यू का उपयोग करके त्रुटि-रहित और पठनीय कोड तेजी से लिखना।",
    "simpleWords": "एडिटर का सही इस्तेमाल करने का मतलब है कि आपको हर टैग को पूरा टाइप न करना पड़े, कोड अपने आप सुंदर तरीके से व्यवस्थित रहे, और आप गलतियों को तुरंत पहचान सकें।",
    "whyImportant": "एक कुशल वेब डिजाइनर अपनी 50% कोडिंग गति एडिटर के सही टूल्स और शॉर्टकट्स का उपयोग करके हासिल करता है।",
    "detailedExplanation": "### 1. Integrated Development Tools in Modern Code Editors\nModern web development editors are not merely plain text typing tools; they serve as full productivity suites equipped with specialized features:\n1. **Code Linting & Formatting:** Automatically highlights syntax errors, unclosed tags, and enforces indentation standards (Prettier, ESLint).\n2. **Emmet Shortcuts & Snippets:** Dramatically speeds up HTML/CSS boilerplate generation.\n3. **Live Server Integration:** Automatically reloads the browser preview whenever a code file is saved locally on disk.\n4. **Integrated Terminal:** Run build commands, Node.js scripts, and Git version control workflows directly within the editor environment.\n\n### 2. Comparison Matrix: Notepad++ vs. Sublime Text vs. VS Code\n| Feature | Notepad++ | Sublime Text | VS Code |\n| :--- | :--- | :--- | :--- |\n| **License** | Free & Open Source (GPL) | Shareware / Paid | Free & Open Source (MIT) |\n| **OS Support** | Windows Only | Windows, macOS, Linux | Windows, macOS, Linux |\n| **Memory Footprint** | Extremely Low (< 20MB) | Very Low (< 50MB) | Moderate (Electron-based) |\n| **Extensibility** | C++ Plugins | Python Packages | TypeScript Extensions |",
    "syntax": "Cleanly Indented Code vs Poor Code:\nPOOR (Hard to read):\n<div><h1>Title</h1><p>Text</p></div>\n\nCLEAN (Using Editor Indentation):\n<div>\n  <h1>Title</h1>\n  <p>Text</p>\n</div>",
    "codeExample": "<!-- Demonstrating Code Folding and Indentation -->\n<section id=\"features\">\n  <div class=\"card\">\n    <h3>Syntax Highlighting</h3>\n    <p>Spots unclosed quotes instantly.</p>\n  </div>\n  <div class=\"card\">\n    <h3>Auto Indentation</h3>\n    <p>Makes code clean and readable.</p>\n  </div>\n</section>",
    "outputExplanation": "एडिटर में बाएँ हाथ पर लाइन नंबर के पास छोटे तीर (arrows) होते हैं जिन पर क्लिक करने से पूरा सेक्शन 1 लाइन में सिमट जाता है।",
    "realWorldAnalogy": "जैसे एक बढ़ई के पास हथौड़े के अलावा लेवलर, इंच-टेप और आरी होती है जिससे वह सीधा और सुंदर फर्नीचर बनाता है, वैसे ही एडिटर के ये टूल्स कोड को परफेक्ट बनाते हैं।",
    "importantPoints": [
      "इंडेंटेशन कोड की पठनीयता (Readability) के लिए अत्यंत आवश्यक है।",
      "सिंटैक्स एरर होने पर एडिटर का रंग बदल जाता है, जिससे तुरंत गलती पकड़ में आ जाती है।",
      "कमेंटिंग के लिए शॉर्टकट Ctrl + / का उपयोग करें।"
    ],
    "commonMistakes": [
      "बिना इंडेंटेशन के सारा कोड बाईं दीवार से सटाकर लिखना (इससे नेस्टेड टैग्स की गलतियां ढूंढना असंभव हो जाता है)।"
    ],
    "examPerspective": "सिंटैक्स हाइलाइटिंग, ऑटो-इंडेंटेशन, और कोड फोल्डिंग की परिभाषा पर वस्तुनिष्ठ प्रश्न पूछे जाते हैं।",
    "quickRevision": "एडिटर्स सिंटैक्स हाइलाइटिंग, ऑटो-टैग क्लोजिंग, कोड फोल्डिंग और ऑटो-इंडेंटेशन द्वारा कोडिंग को आसान और त्रुटिरहित बनाते हैं।",
    "relatedTopics": [
      "file-creation-and-editing",
      "downloading-free-editors-notepad-plus-plus",
      "saving"
    ],
    "practiceTask": "एक अव्यवस्थित HTML कोड लें और एडिटर के ऑटो-इंडेंटेशन फीचर द्वारा उसे सुंदर पदानुक्रम में बदलें।"
  },
  {
    "id": "u2-t4",
    "slug": "file-creation-and-editing",
    "unit": 2,
    "unitSlug": "unit-2",
    "unitTitle": "Editors",
    "title": "File Creation and Editing",
    "hindiTitle": "फाइल निर्माण एवं संपादन (File Creation & Editing)",
    "definitionEnglish": "File creation and editing in web development refers to initializing new plain text documents in a code editor, setting the target language syntax, writing well-formed markup or code, navigating through lines, and modifying existing codebases.",
    "definitionHindi": "वेब विकास में फाइल निर्माण और संपादन का तात्पर्य कोड एडिटर में नए प्लेन टेक्स्ट दस्तावेज़ बनाना, भाषा सिंटैक्स सेट करना, मानक कोड लिखना, और पहले से मौजूद फाइलों में सुधार व संशोधन करना है।",
    "simpleWords": "नया वेबपेज बनाने के लिए सबसे पहले एडिटर में एक खाली फाइल खोली जाती है, उसमें HTML का कोड लिखा जाता है, और जरूरत पड़ने पर उसमें बदलाव किया जाता है।",
    "whyImportant": "यह वेब डेवलपमेंट की रोजमर्रा की बुनियादी प्रक्रिया है। फाइल सही ढंग से बनेगी तभी ब्राउज़र उसे सही से दिखा पाएगा।",
    "detailedExplanation": "### 1. Professional File Creation & Structure Workflow\nWhen creating web project files, strict naming conventions and directory organization must be followed:\n\n1. **Standard Project Hierarchy:**\n   ```\n   my-web-project/\n   ├── index.html        (Homepage / Entry point)\n   ├── about.html        (About page)\n   ├── contact.html      (Contact form)\n   ├── css/\n   │   └── style.css     (Global stylesheet)\n   ├── js/\n   │   └── script.js     (Client-side scripts)\n   └── images/\n       └── logo.png      (Graphic assets)\n   ```\n\n2. **Standard File Naming Conventions:**\n   - Always use **all-lowercase letters** (e.g., `about-us.html`, not `AboutUs.HTML`).\n   - Avoid spaces in filenames — use hyphens (`-`) or underscores (`_`).\n   - Avoid special characters (`!`, `@`, `#`, `$`, `%`, `&`).",
    "syntax": "Standard HTML File Creation Template:\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Document Title</title>\n</head>\n<body>\n  <!-- Your content here -->\n</body>\n</html>",
    "codeExample": "<!DOCTYPE html>\n<html lang=\"hi\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>मेरा नया पेज</title>\n</head>\n<body>\n  <h1>सफलतापूर्वक फाइल बनाई गई!</h1>\n  <p>Ctrl + N से नई फाइल बनी, Ctrl + S से सेव हुई।</p>\n</body>\n</html>",
    "outputExplanation": "ब्राउज़र में यह कोड एक हेडिंग और एक पैराग्राफ के रूप में दिखेगा।",
    "realWorldAnalogy": "फाइल बनाना एक नई साफ डायरी खोलने जैसा है, और एडिट करना उसमें पुरानी प्रविष्टियों को ठीक करने या नई जानकारी जोड़ने जैसा है।",
    "importantPoints": [
      "नई फाइल का शॉर्टकट Ctrl + N है।",
      "सर्च का शॉर्टकट Ctrl + F और रिप्लेस का शॉर्टकट Ctrl + H है।",
      "लाइन डिलीट करने का शॉर्टकट Ctrl + Shift + K (Sublime) या Ctrl + L (Notepad++) है।"
    ],
    "commonMistakes": [
      "फाइल को बिना किसी एक्सटेंशन के सादे नाम से सेव कर देना।"
    ],
    "examPerspective": "शॉर्टकट कुंजियां (Ctrl+N, Ctrl+O, Ctrl+S, Ctrl+H) परीक्षा में बार-बार पूछी जाती हैं।",
    "quickRevision": "Ctrl+N से नई फाइल बनाएं, कोड लिखें, Ctrl+H से सर्च/रिप्लेस करें और Ctrl+S से सुरक्षित करें।",
    "relatedTopics": [
      "saving",
      "making-use-of-editors",
      "basic-structure-of-html"
    ],
    "practiceTask": "एक फाइल में 5 बार गलत स्पेलिंग लिखें और `Ctrl + H` (Find & Replace) का उपयोग करके एक साथ सभी को ठीक करें।"
  },
  {
    "id": "u2-t5",
    "slug": "saving",
    "unit": 2,
    "unitSlug": "unit-2",
    "unitTitle": "Editors",
    "title": "Saving Files and File Extensions",
    "hindiTitle": "फाइल सेव करना और फाइल एक्सटेंशन (.html, .css, .js)",
    "definitionEnglish": "Saving files in web development involves writing the editor buffer to non-volatile storage with the correct file name, standard web extensions (.html, .htm, .css, .js), and universal character encoding (UTF-8) so browsers can parse them correctly.",
    "definitionHindi": "वेब डेवलपमेंट में फाइल सेव करने का अर्थ है एडिटर में लिखे गए कोड को सही नाम, मानक वेब एक्सटेंशन (.html, .css, .js) और सार्वभौमिक कैरेक्टर एन्कोडिंग (UTF-8) के साथ कंप्यूटर की मेमोरी में सुरक्षित करना।",
    "simpleWords": "जब तक आप फाइल को सेव नहीं करते, वह उड़ सकती है। सबसे महत्वपूर्ण बात यह है कि फाइल के नाम के पीछे सही एक्सटेंशन (जैसे `.html`) लगाना जरूरी है, तभी कंप्यूटर को पता चलता है कि यह वेबपेज है।",
    "whyImportant": "शुरुआती छात्रों की 80% समस्याएं गलत फाइल एक्सटेंशन (जैसे `index.html.txt`) के कारण होती हैं। सही एक्सटेंशन के बिना ब्राउज़र कोड को सादा टेक्स्ट मान लेता है।",
    "detailedExplanation": "### 1. Essential File Extensions in Web Development\nEvery file in a web project must be saved with its exact, appropriate file extension to ensure web servers and browsers interpret its MIME type accurately:\n- **`.html` or `.htm`:** HyperText Markup Language documents (MIME type: `text/html`).\n- **`.css`:** Cascading Style Sheets (MIME type: `text/css`).\n- **`.js`:** JavaScript source code files (MIME type: `application/javascript`).\n- **`.json`:** JavaScript Object Notation data files (MIME type: `application/json`).\n- **`.svg`:** Scalable Vector Graphics XML files (MIME type: `image/svg+xml`).\n\n### 2. Critical Saving Rules & UTF-8 Encoding\n1. **Always Save as UTF-8:** Ensures that international characters, emojis, Hindi Unicode text, and mathematical symbols render properly without corrupted characters (*mojibake*).\n2. **Avoid \"Save as type: Text (.txt)\":** In basic text editors like default Windows Notepad, select \"All Files (*.*)\" to prevent Windows from silently appending an invisible `.txt` extension (creating `index.html.txt`).",
    "syntax": "File Naming Rules:\nGood: index.html, about-us.html, style.css, script.js\nBad:  My Page.HTML, student info.html.txt, about!@#.htm",
    "codeExample": "<!-- UTF-8 Encoding in HTML Head matches file save encoding -->\n<!DOCTYPE html>\n<html lang=\"hi\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>UTF-8 सुरक्षित वेबपेज</title>\n</head>\n<body>\n  <p>हिंदी फॉन्ट बिना किसी गड़बड़ी के दिखेगा क्योंकि फाइल UTF-8 में सेव है।</p>\n</body>\n</html>",
    "outputExplanation": "ब्राउज़र फाइल के `.html` एक्सटेंशन को देखकर HTML पार्सर सक्रिय करता है और सुंदर वेबपेज दिखाता है।",
    "realWorldAnalogy": "फाइल का एक्सटेंशन पार्सल के ऊपर लगे लेबल जैसा है; अगर पार्सल पर 'दवा' का लेबल लगा है तो उसे सही विभाग में भेजा जाएगा, गलत लेबल लगने पर सब गड़बड़ हो जाएगा।",
    "importantPoints": [
      "HTML का मानक एक्सटेंशन .html या .htm होता है।",
      "CSS का एक्सटेंशन .css और JavaScript का .js होता है।",
      "मानक वेब एन्कोडिंग UTF-8 होती है।",
      "वेबसाइट का मुख्य प्रवेश पेज index.html कहलाता है।"
    ],
    "commonMistakes": [
      "विंडोज में 'Hide extensions for known file types' चालू रहने पर फाइल का नाम `index.html.txt` बन जाना।",
      "फाइल के नाम में स्पेस या कैपिटल अक्षरों का अत्यधिक प्रयोग करना।"
    ],
    "examPerspective": "HTML, CSS और JS फाइलों के सही एक्सटेंशन, UTF-8 का पूर्ण रूप (8-bit Unicode Transformation Format), और सेव शॉर्टकट्स पर प्रश्न पूछे जाते हैं।",
    "quickRevision": "Ctrl+S से फाइल सेव करें। HTML के लिए .html, CSS के लिए .css, JS के लिए .js एक्सटेंशन और UTF-8 एन्कोडिंग अनिवार्य है।",
    "relatedTopics": [
      "file-creation-and-editing",
      "downloading-free-editors-notepad-plus-plus",
      "head-section-and-elements"
    ],
    "practiceTask": "एक फाइल को `mytest.html` नाम से सेव करें और जांचें कि क्या उसके आइकॉन पर क्रोम/एज का लोगो आ गया है।"
  }
];
