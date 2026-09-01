// CCC Chapter 3: Word Processing (LibreOffice Writer)
export const chapter3Topics = [
  {
    chapterNumber: 3,
    topicNumber: 1,
    slug: "word-processing-basics-libreoffice-writer",
    title: "Word Processing Basics & LibreOffice Writer Interface",
    hindiTitle: "वर्ड प्रोसेसिंग बेसिक्स एवं लिब्रेऑफिस राइटर इंटरफ़ेस",
    definitionEnglish: "LibreOffice Writer is a full-featured open-source word processor used to create letters, books, reports, newsletters, and brochures with rich typography and formatting capabilities.",
    definitionHindi: "लिब्रेऑफिस राइटर (LibreOffice Writer) एक शक्तिशाली ओपन-सोर्स वर्ड प्रोसेसिंग सॉफ्टवेयर है जिसका उपयोग पत्र, किताबें, रिपोर्ट्स, ब्रोशर और दस्तावेज़ तैयार करने और फॉर्मेट करने के लिए किया जाता है।",
    simpleWords: "कंप्यूटर पर पत्र, एप्लीकेशन, नोट्स या किताब टाइप करने और सुंदर तरीके से सजाने वाला सॉफ्टवेयर।",
    examImportance: "Extreme (Writer zoom levels, default font, title bar, and sidebar shortcuts in CCC)",
    detailedExplanation: `### 1. लिब्रेऑफिस राइटर स्क्रीन के मुख्य भाग:
- **Title Bar (शीर्षक पट्टी)**: सबसे ऊपर स्थित, जिसमें दस्तावेज़ का नाम (डिफॉल्ट: **Untitled 1**) और प्रोग्राम का नाम (\`LibreOffice Writer\`) दिखाई देता है।
- **Menu Bar (मेनू पट्टी)**: कुल **11 मेनू** होते हैं (File, Edit, View, Insert, Format, Styles, Table, Form, Tools, Window, Help).
- **Standard & Formatting Toolbars**: अक्सर उपयोग होने वाले टूल्स (Save, Print, Cut, Font, Size).
- **Sidebar (साइडबार)**: दाईं ओर स्थित पेन (शॉर्टकट: **\`Ctrl + F5\`**), जिसमें Properties, Styles, Gallery, Navigator होते हैं।
- **Status Bar (स्टेटस बार)**: सबसे नीचे स्थित पट्टी, जो पेज नंबर (\`Page 1 of 5\`), कुल शब्द एवं वर्ण (Word & Character count), भाषा (English/Hindi) और ज़ूम स्लाइडर प्रदर्शित करती है।

### 2. राइटर के महत्वपूर्ण ज़ूम प्रतिशत (Zoom Limits):
- **न्यूनतम ज़ूम (Minimum Zoom)**: **20%**
- **अधिकतम ज़ूम (Maximum Zoom)**: **600%** (CCC का सबसे प्रसिद्ध प्रश्न!)

### 3. डिफॉल्ट सेटिंग्स (Default Settings):
- **डिफॉल्ट फॉन्ट नेम (Default Font Name)**: **Liberation Serif**
- **डिफॉल्ट फॉन्ट साइज (Default Font Size)**: **12 pt**
- **डिफॉल्ट फाइल नेम (Default File Name)**: **Untitled 1**
- **डिफॉल्ट फाइल एक्सटेंशन**: **\`.odt\`** (OpenDocument Text)`,
    realWorldAnalogy: "राइटर एक डिजिटल टाइपराइटर और प्रिंटिंग प्रेस का मिला-जुला आधुनिक रूप है।",
    importantPoints: [
      "LibreOffice Writer का न्यूनतम ज़ूम **20%** और अधिकतम ज़ूम **600%** होता है।",
      "डिफॉल्ट फॉन्ट **Liberation Serif** और साइज **12 pt** होता है।",
      "मेनू बार में कुल **11 मेनू** होते हैं।",
      "साइडबार (Sidebar) को खोलने या बंद करने का शॉर्टकट **Ctrl + F5** होता है।"
    ],
    commonMistakes: [
      "अधिकतम ज़ूम 500% समझना (MS Word में 500% होता है, लेकिन LibreOffice Writer में **600%** होता है)।",
      "डिफॉल्ट फॉन्ट Times New Roman समझना (LibreOffice में **Liberation Serif** होता है)।"
    ],
    examTips: [
      "Writer का न्यूनतम ज़ूम: **20%**, अधिकतम ज़ूम: **600%**।",
      "डिफॉल्ट फॉन्ट: **Liberation Serif**, साइज: **12**।"
    ],
    quickRevision: "Writer: Zoom 20%-600%, Default Font: Liberation Serif (12pt), Default Name: Untitled 1 (.odt), Sidebar: Ctrl+F5, Menus: 11.",
    practiceAssignment: "LibreOffice Writer खोलें, नीचे स्टेटस बार में ज़ूम स्लाइडर को खींचकर न्यूनतम 20% और अधिकतम 600% तक टेस्ट करें।",
    microQuiz: [
      {
        question: "लिब्रेऑफिस राइटर में अधिकतम ज़ूम (Maximum Zoom) प्रतिशत कितना होता है?",
        options: [
          { id: "A", text: "400%" },
          { id: "B", text: "500%" },
          { id: "C", text: "600%" },
          { id: "D", text: "3000%" }
        ],
        correctAnswer: "C",
        explanation: "LibreOffice Writer में अधिकतम ज़ूम 600% और न्यूनतम ज़ूम 20% होता है (जबकि Calc में 400% और Impress में 3000% होता है)।"
      },
      {
        question: "लिब्रेऑफिस राइटर में साइडबार (Sidebar) को हाइड/अनहाइड करने की शॉर्टकट कुंजी क्या है?",
        options: [
          { id: "A", text: "Ctrl + F1" },
          { id: "B", text: "Ctrl + F5" },
          { id: "C", text: "F5" },
          { id: "D", text: "Shift + F5" }
        ],
        correctAnswer: "B",
        explanation: "Ctrl + F5 शॉर्टकट की सहायता से राइटर में साइडबार को दिखाया या छिपाया जा सकता है।"
      }
    ]
  },
  {
    chapterNumber: 3,
    topicNumber: 2,
    slug: "opening-closing-saving-and-pdf-export",
    title: "Document Operations: Save, Print Preview & PDF Export",
    hindiTitle: "दस्तावेज़ ऑपरेशन्स: सेव, प्रिंट प्रीव्यू एवं पीडीएफ एक्सपोर्ट",
    definitionEnglish: "Document management in Writer includes creating new documents (Ctrl+N), saving (Ctrl+S), Save As (Ctrl+Shift+S), closing (Ctrl+W), Direct PDF Export, and Print Preview (Ctrl+Shift+O).",
    definitionHindi: "राइटर में डॉक्यूमेंट प्रबंधन के अंतर्गत नया डॉक्यूमेंट बनाना (Ctrl+N), सेव करना (Ctrl+S), सेव ऐज़ (Ctrl+Shift+S), बंद करना (Ctrl+W), प्रिंट प्रीव्यू (Ctrl+Shift+O) और सीधे PDF एक्सपोर्ट करना शामिल है।",
    simpleWords: "फाइल को कंप्यूटर में सुरक्षित रखना, प्रिंट से पहले चेक करना और मोबाइल में आसानी से पढ़ने के लिए PDF में बदलना।",
    examImportance: "Extreme (Save As and Print Preview shortcuts in Writer are guaranteed CCC questions)",
    detailedExplanation: `### 1. फाइल ऑपरेशन्स एवं उनकी शॉर्टकट कुंजियां:
- **New Document (नया दस्तावेज़)**: \`Ctrl + N\`
- **Open Document (पहले से बनी फाइल खोलना)**: \`Ctrl + O\`
- **Save Document (सुरक्षित करना)**: \`Ctrl + S\`
- **Save As (नये नाम या स्थान पर सेव करना)**: **\`Ctrl + Shift + S\`** (अत्यंत महत्वपूर्ण!)
- **Save Remote (क्लाउड सर्वर पर सेव करना)**: File Menu ➔ Save Remote
- **Close Document (सक्रिय डॉक्यूमेंट बंद करना)**: \`Ctrl + W\`
- **Exit LibreOffice (पूरा लिब्रेऑफिस बंद करना)**: \`Ctrl + Q\`

### 2. प्रिंट एवं प्रिंट प्रीव्यू (Print & Print Preview):
- **Print Preview (प्रिंट पूर्वावलोकन)**: **\`Ctrl + Shift + O\`** (कागज पर छपने से पहले देखना).
- **Print Document (प्रिंट करना)**: \`Ctrl + P\`

### 3. एक्सपोर्ट ऐज़ पीडीएफ (Export Directly as PDF):
- लिब्रेऑफिस राइटर में स्टैंडर्ड टूलबार पर एक क्लिक में **Export Directly as PDF** का आइकन होता है।
- इसके द्वारा डॉक्यूमेंट को बिना किसी बाहरी सॉफ्टवेयर के सुरक्षित PDF फॉर्मेट में बदला जा सकता है।
- इसमें पासवर्ड सुरक्षा (PDF Encryption & Permissions) जोड़ने की सुविधा भी उपलब्ध होती है।`,
    realWorldAnalogy: "सेव करना मतलब लिखी हुई डायरी को अलमारी में ताला लगाकर रखना ताकि खो न जाए।",
    importantPoints: [
      "Save As की शॉर्टकट कुंजी **Ctrl + Shift + S** होती है (MS Word में F12 होती है)।",
      "Print Preview की शॉर्टकट कुंजी **Ctrl + Shift + O** होती है (MS Word में Ctrl+F2 होती है)।",
      "पूरा LibreOffice बंद करने की शॉर्टकट **Ctrl + Q** और केवल वर्तमान फाइल बंद करने की **Ctrl + W** है।"
    ],
    commonMistakes: [
      "Save As के लिए F12 समझना (LibreOffice में Save As = **Ctrl + Shift + S** होता है)।",
      "Print Preview के लिए Ctrl+F2 समझना (LibreOffice में Print Preview = **Ctrl + Shift + O** होता है)।"
    ],
    examTips: [
      "LibreOffice Writer में Save As: **Ctrl + Shift + S**।",
      "LibreOffice Writer में Print Preview: **Ctrl + Shift + O**।",
      "Exit LibreOffice: **Ctrl + Q**।"
    ],
    quickRevision: "New: Ctrl+N, Save: Ctrl+S, Save As: Ctrl+Shift+S, Print Preview: Ctrl+Shift+O, Print: Ctrl+P, Close File: Ctrl+W, Exit App: Ctrl+Q.",
    practiceAssignment: "राइटर में 'Ctrl + Shift + O' दबाकर प्रिंट प्रीव्यू खोलें और Esc दबाकर वापस आएं।",
    microQuiz: [
      {
        question: "लिब्रेऑफिस राइटर में 'Save As' करने की शॉर्टकट कुंजी क्या है?",
        options: [
          { id: "A", text: "F12" },
          { id: "B", text: "Ctrl + S" },
          { id: "C", text: "Ctrl + Shift + S" },
          { id: "D", text: "Alt + S" }
        ],
        correctAnswer: "C",
        explanation: "LibreOffice Writer में 'Save As' की शॉर्टकट कुंजी 'Ctrl + Shift + S' होती है।"
      },
      {
        question: "लिब्रेऑफिस राइटर में 'Print Preview' देखने की शॉर्टकट कुंजी कौन सी है?",
        options: [
          { id: "A", text: "Ctrl + F2" },
          { id: "B", text: "Ctrl + Shift + O" },
          { id: "C", text: "Ctrl + P" },
          { id: "D", text: "Alt + P" }
        ],
        correctAnswer: "B",
        explanation: "LibreOffice Writer में प्रिंट पूर्वावलोकन (Print Preview) के लिए 'Ctrl + Shift + O' दबाया जाता है।"
      }
    ]
  },
  {
    chapterNumber: 3,
    topicNumber: 3,
    slug: "text-creation-editing-and-selection",
    title: "Text Creation, Editing, Cut/Copy/Paste & Undo/Redo",
    hindiTitle: "टेक्स्ट निर्माण, संपादन, कट/कॉपी/पेस्ट एवं अनडू/रीडू",
    definitionEnglish: "Text editing in Writer covers text entry, cursor navigation, selection techniques, clipboard operations (Cut Ctrl+X, Copy Ctrl+C, Paste Ctrl+V, Paste Special Ctrl+Shift+V), and revision recovery (Undo Ctrl+Z, Redo Ctrl+Y).",
    definitionHindi: "राइटर में टेक्स्ट संपादन के अंतर्गत टाइपिंग, कर्सर मूवमेंट, टेक्स्ट का चयन, क्लिपबोर्ड क्रियाएं (कट, कॉपी, पेस्ट, पेस्ट स्पेशल) तथा अनडू (Ctrl+Z) और रीडू (Ctrl+Y) शामिल हैं।",
    simpleWords: "लिखे हुए शब्दों को मिटाना, दूसरी जगह ले जाना, दोहराना या गलती होने पर तुरंत पहले जैसा करना (Undo)।",
    examImportance: "High (Paste Special, Selection shortcuts, Undo/Redo in CCC)",
    detailedExplanation: `### 1. क्लिपबोर्ड एवं संपादन शॉर्टकट्स (Clipboard Operations):
- **Cut (काटना)**: \`Ctrl + X\` (चयनित टेक्स्ट मूल स्थान से हटकर क्लिपबोर्ड में जाता है).
- **Copy (प्रतिलिपि)**: \`Ctrl + C\` (मूल टेक्स्ट वहीं रहता है और क्लिपबोर्ड में कॉपी होता है).
- **Paste (चिपकाना)**: \`Ctrl + V\` (क्लिपबोर्ड से टेक्स्ट वर्तमान कर्सर स्थान पर आता है).
- **Paste Special (विशेष पेस्ट)**: **\`Ctrl + Shift + V\`** या **\`Ctrl + Alt + Shift + V\`** (Unformatted Text).
- **Undo (पिछली क्रिया रद्द करना)**: \`Ctrl + Z\`
- **Redo (रद्द क्रिया को पुनः लागू करना)**: \`Ctrl + Y\`

### 2. टेक्स्ट सिलेक्शन तकनीकें (Text Selection Techniques):
- **Double Click (डबल क्लिक)**: एक पूरा **शब्द (Word)** सेलेक्ट करने के लिए।
- **Triple Click (ट्रिपल क्लिक)**: पूरा **वाक्य (Sentence)** सेलेक्ट करने के लिए।
- **Quadruple Click (चार बार क्लिक)**: पूरा **पैराग्राफ (Paragraph)** सेलेक्ट करने के लिए।
- **Ctrl + A**: पूरे डॉक्यूमेंट का सारा टेक्स्ट सेलेक्ट करने के लिए।
- **Shift + Arrow Keys**: एक-एक अक्षर या लाइन सेलेक्ट करने के लिए।

### 3. कर्सर नेविगेशन (Cursor Movement):
- \`Home\`: लाइन की शुरुआत में जाना।
- \`End\`: लाइन के अंत में जाना।
- \`Ctrl + Home\`: डॉक्यूमेंट के सबसे पहले पेज के पहले अक्षर पर जाना।
- \`Ctrl + End\`: डॉक्यूमेंट के बिल्कुल अंत में जाना।`,
    realWorldAnalogy: "Undo कंप्यूटर की टाइम मशीन है जो आपको 1 सेकंड पीछे ले जाकर गलती सुधार देती है।",
    importantPoints: [
      "**Paste Special** की शॉर्टकट कुंजी **Ctrl + Shift + V** होती है।",
      "बिना फॉर्मेटिंग के टेक्स्ट पेस्ट करने (Unformatted Text) का शॉर्टकट **Ctrl + Alt + Shift + V** होता है।",
      "माउस से **डबल क्लिक** करने पर एक शब्द और **ट्रिपल क्लिक** करने पर पूरा वाक्य सेलेक्ट होता है।"
    ],
    commonMistakes: [
      "ट्रिपल क्लिक से पूरा पैराग्राफ सेलेक्ट होना समझना (ट्रिपल क्लिक से वाक्य और 4 बार क्लिक से पैराग्राफ सेलेक्ट होता है)।"
    ],
    examTips: [
      "Paste Special की शॉर्टकट: **Ctrl + Shift + V**।",
      "Unformatted Text Paste: **Ctrl + Alt + Shift + V**।"
    ],
    quickRevision: "Cut (Ctrl+X), Copy (Ctrl+C), Paste (Ctrl+V), Paste Special (Ctrl+Shift+V), Undo (Ctrl+Z), Redo (Ctrl+Y). Double-click = Word, Triple-click = Sentence.",
    practiceAssignment: "राइटर में एक पैराग्राफ लिखें, उस पर डबल क्लिक करके शब्द और तीन बार क्लिक करके वाक्य सेलेक्ट करने का अभ्यास करें।",
    microQuiz: [
      {
        question: "लिब्रेऑफिस राइटर में 'Paste Special' की शॉर्टकट कुंजी क्या है?",
        options: [
          { id: "A", text: "Ctrl + V" },
          { id: "B", text: "Ctrl + Shift + V" },
          { id: "C", text: "Alt + V" },
          { id: "D", text: "Ctrl + Alt + V" }
        ],
        correctAnswer: "B",
        explanation: "Paste Special डायलॉग बॉक्स खोलने के लिए 'Ctrl + Shift + V' शॉर्टकट का प्रयोग किया जाता है।"
      },
      {
        question: "राइटर में किसी शब्द पर माउस से 'Double Click' करने पर क्या चयनित होता है?",
        options: [
          { id: "A", text: "एक अक्षर (Character)" },
          { id: "B", text: "वह पूरा शब्द (Word)" },
          { id: "C", text: "पूरा वाक्य (Sentence)" },
          { id: "D", text: "पूरा पैराग्राफ (Paragraph)" }
        ],
        correctAnswer: "B",
        explanation: "माउस से डबल क्लिक करने पर वह पूरा शब्द (Word) सेलेक्ट हो जाता है।"
      }
    ]
  },
  {
    chapterNumber: 3,
    topicNumber: 4,
    slug: "font-color-style-and-case-conversion",
    title: "Font Formatting: Color, Style, Size & Change Case",
    hindiTitle: "फॉन्ट फॉर्मेटिंग: रंग, शैली, आकार एवं चेंज केस",
    definitionEnglish: "Font formatting controls character appearance including typeface, size (Ctrl+[ / Ctrl+]), styles (Bold Ctrl+B, Italic Ctrl+I, Underline Ctrl+U, Double Underline Ctrl+D), Superscript (Ctrl+Shift+P), Subscript (Ctrl+Shift+B), and Case conversions (Shift+F3).",
    definitionHindi: "फॉन्ट फॉर्मेटिंग अक्षरों के रूप-रंग और शैली को नियंत्रित करती है; जैसे बोल्ड (Ctrl+B), इटैलिक (Ctrl+I), अंडरलाइन (Ctrl+U), डबल अंडरलाइन (Ctrl+D), सुपरस्क्रिप्ट (Ctrl+Shift+P), सबस्क्रिप्ट (Ctrl+Shift+B) और चेंज केस (Shift+F3)।",
    simpleWords: "अक्षरों को मोटा, तिरछा, रंगीन, छोटा-बड़ा करना या रासायनिक सूत्र (H2O) और गणितीय घात (X2) लिखना।",
    examImportance: "Extreme (Superscript, Subscript, Double Underline, and Clear Formatting shortcuts in CCC)",
    detailedExplanation: `### 1. फॉन्ट स्टाइल्स एवं महत्वपूर्ण शॉर्टकट्स:
- **Bold (मोटा)**: \`Ctrl + B\`
- **Italic (तिरछा)**: \`Ctrl + I\`
- **Underline (निचली रेखा)**: \`Ctrl + U\`
- **Double Underline (दोहरी रेखा)**: **\`Ctrl + D\`** (अति महत्वपूर्ण प्रश्न!)
- **Strikethrough (शब्द के बीच से रेखा खींचना)**: Format ➔ Text ➔ Strikethrough

### 2. सुपरस्क्रिप्ट एवं सबस्क्रिप्ट (Superscript vs Subscript):
- **Superscript (अक्षर के ऊपर घात लगाना, जैसे x²)**: **\`Ctrl + Shift + P\`** (P for Power!)
- **Subscript (अक्षर के नीचे आधार लिखना, जैसे H₂O)**: **\`Ctrl + Shift + B\`** (B for Base/Bottom!)

### 3. फॉन्ट साइज नियंत्रण (Font Size Controls):
- **Increase Font Size (फॉन्ट बढ़ाना)**: **\`Ctrl + ]\`** या \`Ctrl + Alt + ]\`
- **Decrease Font Size (फॉन्ट घटाना)**: **\`Ctrl + [\`** या \`Ctrl + Alt + [\`
- राइटर के फॉन्ट साइज ड्रॉपडाउन में न्यूनतम डिफॉल्ट साइज **6 pt** और अधिकतम **96 pt** होता है (मैन्युअली 2 से 999.9 pt तक दिया जा सकता है)।

### 4. चेंज केस एवं क्लियर फॉर्मेटिंग (Change Case & Clear Formatting):
- **Cycle Case (अपरकेस/लोअरकेस/टाइटल केस बदलना)**: **\`Shift + F3\`**
- **Clear Direct Formatting (सभी फॉर्मेटिंग हटाकर सादा टेक्स्ट बनाना)**: **\`Ctrl + M\`** (अत्यंत महत्वपूर्ण प्रश्न!)`,
    realWorldAnalogy: "फॉन्ट फॉर्मेटिंग कपड़ों पर प्रेस करने और मेकअप करने जैसी है जिससे साधारण लिखावट भी आकर्षक लगने लगती है।",
    importantPoints: [
      "**Superscript** की शॉर्टकट कुंजी **Ctrl + Shift + P** होती है।",
      "**Subscript** की शॉर्टकट कुंजी **Ctrl + Shift + B** होती है।",
      "**Double Underline** की शॉर्टकट कुंजी **Ctrl + D** होती है।",
      "**Clear Direct Formatting** की शॉर्टकट कुंजी **Ctrl + M** होती है।",
      "**Cycle Case** बदलने की शॉर्टकट कुंजी **Shift + F3** होती है।"
    ],
    commonMistakes: [
      "Subscript के लिए Ctrl+= समझना (MS Word में Ctrl+= होता है, LibreOffice में **Ctrl+Shift+B** होता है)।",
      "Clear Formatting के लिए Ctrl+Space समझना (LibreOffice में **Ctrl+M** होता है)।"
    ],
    examTips: [
      "Superscript = **Ctrl + Shift + P** (Power)",
      "Subscript = **Ctrl + Shift + B** (Base)",
      "Double Underline = **Ctrl + D**",
      "Clear Direct Formatting = **Ctrl + M**"
    ],
    quickRevision: "Bold (Ctrl+B), Italic (Ctrl+I), Underline (Ctrl+U), Double Underline (Ctrl+D), Super (Ctrl+Shift+P), Sub (Ctrl+Shift+B), Clear Formatting (Ctrl+M), Case (Shift+F3).",
    practiceAssignment: "राइटर में 'H2O' और 'A2 + B2' लिखें और Subscript (Ctrl+Shift+B) व Superscript (Ctrl+Shift+P) लगाकर सही फॉर्मेट करें।",
    microQuiz: [
      {
        question: "लिब्रेऑफिस राइटर में सुपरस्क्रिप्ट (Superscript - जैसे X²) करने की शॉर्टकट कुंजी क्या है?",
        options: [
          { id: "A", text: "Ctrl + Shift + P" },
          { id: "B", text: "Ctrl + Shift + B" },
          { id: "C", text: "Ctrl + P" },
          { id: "D", text: "Alt + Shift + P" }
        ],
        correctAnswer: "A",
        explanation: "LibreOffice Writer में सुपरस्क्रिप्ट (ऊपर घात) लगाने के लिए 'Ctrl + Shift + P' का प्रयोग किया जाता है।"
      },
      {
        question: "लिब्रेऑफिस राइटर में सभी डायरेक्ट फॉर्मेटिंग को हटाने (Clear Direct Formatting) का शॉर्टकट क्या है?",
        options: [
          { id: "A", text: "Ctrl + Space" },
          { id: "B", text: "Ctrl + Shift + C" },
          { id: "C", text: "Ctrl + M" },
          { id: "D", text: "Ctrl + D" }
        ],
        correctAnswer: "C",
        explanation: "LibreOffice Writer में 'Clear Direct Formatting' की शॉर्टकट कुंजी 'Ctrl + M' होती है।"
      }
    ]
  },
  {
    chapterNumber: 3,
    topicNumber: 5,
    slug: "paragraph-indentation-alignment-and-bullets",
    title: "Paragraph Alignment, Indentation, Bullets & Numbering",
    hindiTitle: "पैराग्राफ अलाइनमेंट, इंडेंटेशन, बुलेट्स एवं नंबरिंग",
    definitionEnglish: "Paragraph formatting dictates text positioning across margins, including alignment (Left Ctrl+L, Right Ctrl+R, Center Ctrl+E, Justify Ctrl+J), indentation, line spacing, bullets (Shift+F12), and numbering (F12).",
    definitionHindi: "पैराग्राफ फॉर्मेटिंग पृष्ठ पर टेक्स्ट के संरेखण और फैलाव को तय करती है; जैसे अलाइनमेंट (बाएं Ctrl+L, दाएं Ctrl+R, मध्य Ctrl+E, जस्टिफाई Ctrl+J), इंडेंट, लाइन स्पेसिंग, बुलेट्स (Shift+F12) और नंबरिंग (F12)।",
    simpleWords: "पैराग्राफ को पन्ने के बीच में या दोनों तरफ बराबर लाइन में सेट करना और लिस्ट में बिंदु या 1, 2, 3 लगाना।",
    examImportance: "Extreme (Alignment shortcuts, Bullets F12 vs Shift+F12 in CCC)",
    detailedExplanation: `### 1. टेक्स्ट अलाइनमेंट (Text Alignment & Shortcuts):
- **Align Left (बायां संरेखण - डिफॉल्ट)**: \`Ctrl + L\` (टेक्स्ट बाईं ओर एक सीध में होता है).
- **Align Right (दायां संरेखण)**: \`Ctrl + R\` (टेक्स्ट दाईं ओर एक सीध में होता है, जैसे दिनांक या हस्ताक्षर).
- **Align Center (मध्य संरेखण)**: \`Ctrl + E\` (टेक्स्ट पृष्ठ के ठीक बीच में संरेखित होता है, जैसे शीर्षक).
- **Justify (दोनों तरफ बराबर संरेखण)**: \`Ctrl + J\` (बाएं और दाएं दोनों किनारों पर टेक्स्ट बिल्कुल सीधा व बराबर रहता है, जैसे समाचार पत्रों और किताबों में).

### 2. बुलेट्स एवं नंबरिंग (Bullets & Numbering):
- **Numbering On/Off (क्रमांकन सूची 1, 2, 3)**: **\`F12\`** (अति महत्वपूर्ण प्रश्न!)
- **Bullets On/Off (बिंदुवार सूची •, ■)**: **\`Shift + F12\`** (अति महत्वपूर्ण प्रश्न!)

### 3. लाइन स्पेसिंग एवं इंडेंटेशन (Line Spacing & Indentation):
- **Line Spacing 1 (Single)**: \`Ctrl + 1\`
- **Line Spacing 2 (Double)**: \`Ctrl + 2\`
- **Line Spacing 1.5**: \`Ctrl + 5\`
- **Increase Indent (पैराग्राफ दाईं ओर खिसकाना)**: \`Ctrl + ]\` या Tab
- **Decrease Indent (पैराग्राफ बाईं ओर खिसकाना)**: \`Ctrl + [\` या Shift + Tab`,
    realWorldAnalogy: "जैसे अखबार की खबरें दोनों तरफ से सीधी और बराबर (Justified) कतारों में छपी होती हैं।",
    importantPoints: [
      "**Justify Alignment** की शॉर्टकट कुंजी **Ctrl + J** होती है।",
      "**Center Alignment** की शॉर्टकट कुंजी **Ctrl + E** होती है।",
      "**Numbering** की शॉर्टकट कुंजी **F12** और **Bullets** की **Shift + F12** होती है।",
      "1.5 लाइन स्पेसिंग देने के लिए **Ctrl + 5** दबाया जाता है।"
    ],
    commonMistakes: [
      "Center Alignment के लिए Ctrl+C समझना (Ctrl+C कॉपी के लिए है, Center के लिए **Ctrl+E** है)।",
      "Bullets के लिए F12 समझना (F12 Numbering के लिए है, Bullets के लिए **Shift+F12** है)।"
    ],
    examTips: [
      "Align Center = **Ctrl + E**",
      "Justify = **Ctrl + J**",
      "Numbering List = **F12**",
      "Bullet List = **Shift + F12**"
    ],
    quickRevision: "Left (Ctrl+L), Right (Ctrl+R), Center (Ctrl+E), Justify (Ctrl+J). Numbering: F12, Bullets: Shift+F12, Spacing: Ctrl+1/2/5.",
    practiceAssignment: "राइटर में 3 लाइनें लिखें और F12 दबाकर नंबरिंग लगाएं, फिर Shift+F12 दबाकर उन्हें बुलेट्स में बदलें।",
    microQuiz: [
      {
        question: "लिब्रेऑफिस राइटर में नंबरिंग लिस्ट (Numbering List) चालू/बंद करने की शॉर्टकट कुंजी क्या है?",
        options: [
          { id: "A", text: "F12" },
          { id: "B", text: "Shift + F12" },
          { id: "C", text: "Ctrl + F12" },
          { id: "D", text: "Alt + F12" }
        ],
        correctAnswer: "A",
        explanation: "राइटर में नंबरिंग (1, 2, 3...) लगाने के लिए F12 और बुलेट्स लगाने के लिए Shift + F12 दबाते हैं।"
      },
      {
        question: "टेक्स्ट को दोनों तरफ (बाएं और दाएं) समान रूप से संरेखित (Justify) करने की शॉर्टकट कुंजी क्या है?",
        options: [
          { id: "A", text: "Ctrl + J" },
          { id: "B", text: "Ctrl + E" },
          { id: "C", text: "Ctrl + L" },
          { id: "D", text: "Ctrl + R" }
        ],
        correctAnswer: "A",
        explanation: "टेक्स्ट को दोनों किनारों पर बराबर संरेखित करने के लिए 'Ctrl + J' (Justify) का उपयोग किया जाता है।"
      }
    ]
  },
  {
    chapterNumber: 3,
    topicNumber: 6,
    slug: "header-footer-and-page-setup",
    title: "Headers, Footers, Page Numbers & Page Setup",
    hindiTitle: "हेडर, फुटर, पेज नंबर एवं पेज सेटअप",
    definitionEnglish: "Page setup configures document layout including Page Orientation (Portrait/Landscape), Margins, Page Breaks (Ctrl+Enter), Headers (top margin text), Footers (bottom margin text), and dynamic Page Numbers.",
    definitionHindi: "पेज सेटअप डॉक्यूमेंट के भौतिक स्वरूप को निर्धारित करता है; जिसमें ओरिएंटेशन (पोर्ट्रेट/लैंडस्केप), मार्जिन, पेज ब्रेक (Ctrl+Enter), हेडर (शीर्ष नोट), फुटर (पाद टिप्पणी) और पेज नंबरिंग शामिल हैं।",
    simpleWords: "पन्ने के चारों तरफ खाली जगह (Margin) छोड़ना, पेज के ऊपर किताब का नाम (Header) और नीचे पेज नंबर (Footer) लगाना।",
    examImportance: "High (Page break shortcut Ctrl+Enter, Portrait vs Landscape in CCC)",
    detailedExplanation: `### 1. पेज ओरिएंटेशन एवं मार्जिन (Page Orientation & Margins):
- **Page Orientation (पेज दिशा)**:
  - **Portrait (ऊर्ध्वाधर/खड़ा)**: ऊंचाई अधिक, चौड़ाई कम (डिफॉल्ट ओरिएंटेशन).
  - **Landscape (क्षैतिज/आड़ा)**: चौड़ाई अधिक, ऊंचाई कम (सर्टिफिकेट, बड़े टेबल्स के लिए).
- **Margins (हाशिया)**: पेज के किनारों पर छोड़ी गई खाली जगह (Top, Bottom, Left, Right).
- **Page Size**: डिफॉल्ट साइज **A4** (21.0 x 29.7 cm) या Letter.

### 2. हेडर एवं फुटर (Header & Footer):
- **Header (हेडर)**: प्रत्येक पृष्ठ के शीर्ष मार्जिन क्षेत्र में दोहराई जाने वाली सूचना (जैसे पुस्तक का शीर्षक, अध्याय का नाम).
- **Footer (फुटर)**: प्रत्येक पृष्ठ के निचले मार्जिन क्षेत्र में दोहराई जाने वाली सूचना (जैसे पेज नंबर, कॉपीराइट, लेखक का नाम).
- हेडर/फुटर जोड़ने का रास्ता: **Insert Menu ➔ Header and Footer ➔ Header / Footer ➔ Default Style**.

### 3. पेज ब्रेक एवं लाइन ब्रेक (Breaks):
- **Page Break (नया पेज शुरू करना)**: **\`Ctrl + Enter\`** (अति महत्वपूर्ण प्रश्न!)
- **Manual Line Break (बिना पैराग्राफ बदले नई लाइन)**: \`Shift + Enter\`
- **Column Break (अगले कॉलम में जाना)**: \`Ctrl + Shift + Enter\``,
    realWorldAnalogy: "हेडर हर पन्ने पर छपा स्कूल का लेटरहेड है और फुटर नीचे छपा ऑफिस का पता और पेज नंबर है।",
    importantPoints: [
      "**Page Break** डालने की शॉर्टकट कुंजी **Ctrl + Enter** होती है।",
      "राइटर में डिफॉल्ट पेज ओरिएंटेशन **Portrait** होता है।",
      "हेडर और फुटर प्रत्येक पेज पर अपने आप दोहराए जाते हैं।"
    ],
    commonMistakes: [
      "Page Break के लिए बार-बार Enter दबाना (सही तरीका **Ctrl + Enter** दबाना है)।"
    ],
    examTips: [
      "Insert Page Break Shortcut ➔ **Ctrl + Enter**।",
      "Default Page Orientation in Writer ➔ **Portrait**।"
    ],
    quickRevision: "Orientation: Portrait (default) vs Landscape. Page Break: Ctrl+Enter, Line Break: Shift+Enter. Header (top), Footer (bottom).",
    practiceAssignment: "राइटर में Ctrl+Enter दबाकर 3 नए पेज बनाएं और Insert मेनू से Footer में Page Number जोड़ें।",
    microQuiz: [
      {
        question: "लिब्रेऑफिस राइटर में मैनुअल पेज ब्रेक (Page Break) डालने की शॉर्टकट कुंजी क्या है?",
        options: [
          { id: "A", text: "Ctrl + Enter" },
          { id: "B", text: "Shift + Enter" },
          { id: "C", text: "Alt + Enter" },
          { id: "D", text: "Ctrl + Space" }
        ],
        correctAnswer: "A",
        explanation: "पेज ब्रेक डालने और कर्सर को तुरंत अगले नए पेज पर भेजने के लिए 'Ctrl + Enter' दबाया जाता है।"
      }
    ]
  },
  {
    chapterNumber: 3,
    topicNumber: 7,
    slug: "table-manipulation-rows-columns-borders",
    title: "Table Manipulation: Insert Rows/Cols, Merge/Split & Borders",
    hindiTitle: "टेबल मैनिपुलेशन: रो/कॉलम जोड़ना, मर्ज/स्प्लिट एवं बॉर्डर",
    definitionEnglish: "Tables in Writer arrange data into rows and columns using Table Insert (Ctrl+F12), cell navigation (Tab/Shift+Tab), Merge Cells, Split Cells, and border formatting.",
    definitionHindi: "राइटर में तालिका (Table) डेटा को पंक्तियों (Rows) और स्तंभों (Columns) में व्यवस्थित करती है; जिसे इंसर्ट टेबल (Ctrl+F12), सेल नेविगेशन (Tab), सेल मर्ज (Merge) और स्प्लिट (Split) द्वारा प्रबंधित किया जाता है।",
    simpleWords: "पन्ने पर खानों वाली तालिका (Table) बनाना, दो खानों को जोड़ना (Merge) या एक खाने को बांटना (Split)।",
    examImportance: "Extreme (Table Insert shortcut Ctrl+F12, Table menu in CCC)",
    detailedExplanation: `### 1. टेबल बनाना एवं शॉर्टकट (Inserting Tables):
- **Insert Table Shortcut**: **\`Ctrl + F12\`** (अत्यंत प्रसिद्ध CCC प्रश्न!)
- मेनू पाथ: **Table Menu ➔ Insert Table** (या Standard Toolbar से ग्रिड चुनना).
- टेबल में कम से कम 1 Row और 1 Column होना अनिवार्य है।

### 2. टेबल में नेविगेशन (Table Navigation):
- \`Tab\`: अगले सेल (Next Cell) में जाना। अंतिम सेल में Tab दबाने पर **स्वतः एक नई पंक्ति (New Row)** जुड़ जाती है।
- \`Shift + Tab\`: पिछले सेल (Previous Cell) में वापस जाना।
- Arrow Keys (\`↑ ↓ ← →\`): चारों दिशाओं के सेल्स में घूमना।

### 3. टेबल मैनिपुलेशन क्रियाएं:
- **Merge Cells (सेल मिलाना)**: दो या अधिक चयनित खानों को जोड़कर एक बड़ा सेल बनाना।
- **Split Cells (सेल बांटना)**: एक सेल को कई पंक्तियों या स्तंभों में विभाजित करना।
- **Insert Rows / Columns**: चयनित सेल के ऊपर, नीचे, दाएं या बाएं नई रो/कॉलम जोड़ना।
- **Delete Rows / Columns**: रो या कॉलम हटाना।
- **Borders & Background**: टेबल के चारों ओर विभिन्न मोटाई के बॉर्डर और बैकग्राउंड रंग लगाना।`,
    realWorldAnalogy: "टेबल एक चेसबोर्ड या समय सारणी (Time Table) की तरह खानों का ढांचा है।",
    importantPoints: [
      "टेबल इंसर्ट करने की शॉर्टकट कुंजी **Ctrl + F12** होती है।",
      "टेबल के आखिरी सेल में **Tab** दबाने से एक नई रो (Row) बन जाती है।",
      "दो सेल्स को एक करने की क्रिया को **Merge Cells** कहते हैं।"
    ],
    commonMistakes: [
      "Table इंसर्ट करने के लिए Insert Menu ढूंढना (LibreOffice में इसके लिए एक अलग समर्पित **Table Menu** होता है)।"
    ],
    examTips: [
      "LibreOffice Writer में Table Insert Shortcut ➔ **Ctrl + F12**।"
    ],
    quickRevision: "Insert Table: Ctrl+F12. Next Cell: Tab (creates new row at end), Prev Cell: Shift+Tab. Merge (combine) vs Split (divide).",
    practiceAssignment: "Ctrl+F12 दबाकर 3x3 की एक टेबल बनाएं और अंतिम सेल में Tab दबाकर नई रो जोड़ें।",
    microQuiz: [
      {
        question: "लिब्रेऑफिस राइटर में टेबल (Table) इंसर्ट करने की शॉर्टकट कुंजी क्या है?",
        options: [
          { id: "A", text: "Ctrl + T" },
          { id: "B", text: "Ctrl + F12" },
          { id: "C", text: "Shift + F12" },
          { id: "D", text: "Alt + F12" }
        ],
        correctAnswer: "B",
        explanation: "LibreOffice Writer में टेबल बनाने/इंसर्ट करने के लिए 'Ctrl + F12' शॉर्टकट दबाया जाता है।"
      }
    ]
  },
  {
    chapterNumber: 3,
    topicNumber: 8,
    slug: "mail-merge-in-libreoffice-writer",
    title: "Mail Merge in LibreOffice Writer (Step-by-Step)",
    hindiTitle: "मेल मर्ज की संपूर्ण कार्यविधि (Mail Merge Step-by-Step)",
    definitionEnglish: "Mail Merge is a powerful feature that combines a main document template with a structured data source (database/spreadsheet) to generate personalized bulk letters, certificates, envelopes, or mailing labels.",
    definitionHindi: "मेल मर्ज (Mail Merge) एक शक्तिशाली सुविधा है जो मुख्य पत्र (Main Document) को डेटा स्रोत (Data Source) के साथ जोड़कर एक साथ सैकड़ों लोगों के व्यक्तिगत पत्र, प्रवेश पत्र, लिफाफे या लेबल तैयार करती है।",
    simpleWords: "एक ही पत्र को अलग-अलग लोगों के नाम-पते के साथ एक क्लिक में सैकड़ों प्रतियों में तैयार करना।",
    examImportance: "Extreme (Mail Merge Wizard location, steps, and components in CCC)",
    detailedExplanation: `### 1. मेल मर्ज के तीन मुख्य घटक (Three Components):
1. **Main Document (मुख्य दस्तावेज़)**: वह मूल पत्र जिसमें सामान्य संदेश लिखा होता है (Common Text).
2. **Data Source (डेटा स्रोत)**: प्राप्तकर्ताओं के नाम, पते, मोबाइल नंबर आदि की तालिका (Spreadsheet .ods, Database .odb, or Text file).
3. **Merged Document (मर्ज किया गया परिणाम)**: मुख्य पत्र में डेटा जोड़कर तैयार किए गए सभी व्यक्तिगत पत्र।

### 2. मेल मर्ज विज़ार्ड के चरण (Mail Merge Wizard Steps):
- मेनू पाथ: **Tools Menu ➔ Mail Merge Wizard**
- मेल मर्ज विज़ार्ड में कुल **5 से 8 चरण** होते हैं:
  1. *Select Starting Document* (वर्तमान डॉक्यूमेंट या नया डॉक्यूमेंट चुनना)
  2. *Select Document Type* (Letter या E-mail Message)
  3. *Insert Address Block* (पता सूची और डेटा सोर्स जोड़ना)
  4. *Create Salutation* (अभिवादन जैसे Dear Mr./Ms. जोड़ना)
  5. *Adjust Layout* (मार्जिन और स्थिति सेट करना)
  6. *Edit Document & Personalize* (व्यक्तिगत बदलाव)
  7. *Save, Print or Send* (प्रिंट करना या ईमेल द्वारा भेजना).`,
    realWorldAnalogy: "शादी का निमंत्रण कार्ड एक ही होता है (Main Document), लेकिन उस पर मेहमानों के नाम की पर्चियां (Data Source) चिपकाकर सबको अलग-अलग भेजा जाता है।",
    importantPoints: [
      "Mail Merge विकल्प **Tools Menu** में स्थित होता है।",
      "मेल मर्ज के लिए दो चीजों की आवश्यकता होती है: **Main Document** और **Data Source**।",
      "मेल मर्ज से पत्र (Letters), लिफाफे (Envelopes) और लेबल्स (Labels) बनाए जा सकते हैं।"
    ],
    commonMistakes: [
      "Mail Merge को File Menu में खोजना (यह **Tools Menu** में होता है)।"
    ],
    examTips: [
      "Mail Merge Wizard किस मेनू में होता है? ➔ **Tools Menu**।"
    ],
    quickRevision: "Mail Merge = Main Doc + Data Source -> Merged Letters. Located in Tools Menu -> Mail Merge Wizard.",
    practiceAssignment: "Tools मेनू में जाकर Mail Merge Wizard खोलें और उसके विभिन्न चरणों का अवलोकन करें।",
    microQuiz: [
      {
        question: "लिब्रेऑफिस राइटर में 'Mail Merge Wizard' किस मेनू के अंतर्गत पाया जाता है?",
        options: [
          { id: "A", text: "File Menu" },
          { id: "B", text: "Insert Menu" },
          { id: "C", text: "Tools Menu" },
          { id: "D", text: "Format Menu" }
        ],
        correctAnswer: "C",
        explanation: "मेल मर्ज विज़ार्ड LibreOffice Writer के 'Tools Menu' में स्थित होता है।"
      }
    ]
  },
  {
    chapterNumber: 3,
    topicNumber: 9,
    slug: "autocorrect-spelling-and-grammar-find-replace",
    title: "AutoCorrect, Spelling & Grammar, Find and Replace",
    hindiTitle: "ऑटो-करेक्ट, स्पेलिंग-ग्रामर चेक एवं फाइंड-रिप्लेस",
    definitionEnglish: "Proofing tools in Writer ensure typographical correctness via Spelling & Grammar check (F7), Automatic Spellcheck (Shift+F7), Thesaurus (Ctrl+F7), Find (Ctrl+F), and Find & Replace (Ctrl+H).",
    definitionHindi: "राइटर के प्रूफिंग टूल्स वर्तनी और व्याकरण की शुद्धता जांचते हैं; जैसे स्पेलिंग चेक (F7), ऑटोमैटिक स्पेलचेक (Shift+F7), थिसॉरस (Ctrl+F7), फाइंड (Ctrl+F) और फाइंड एवं रिप्लेस (Ctrl+H)।",
    simpleWords: "टाइपिंग की गलत स्पेलिंग ठीक करना (लाल वेवी लाइन), पर्यायवाची शब्द खोजना (Thesaurus), और किसी शब्द को खोजकर बदलना (Find & Replace)।",
    examImportance: "Extreme (F7, Shift+F7, Ctrl+F7, and wavy line colors are classic CCC questions)",
    detailedExplanation: `### 1. स्पेलिंग और ग्रामर टूल्स (Spelling & Proofing Shortcuts):
- **Spelling Check (स्पेलिंग जांच डायलॉग)**: **\`F7\`** (अति महत्वपूर्ण!)
- **Automatic Spell Checking (लाल रेखा ऑन/ऑफ)**: **\`Shift + F7\`**
- **Thesaurus / Synonyms (पर्यायवाची शब्द कोष)**: **\`Ctrl + F7\`**
- मेनू पाथ: **Tools Menu ➔ Spelling (F7)**

### 2. तरंगित रेखाओं के रंग (Wavy Line Colors):
- **Red Wavy Line (लाल टेढ़ी-मेढ़ी रेखा)**: **Spelling Error** (गलत स्पेलिंग या डिक्शनरी में शब्द न होना).
- **Blue Wavy Line (नीली टेढ़ी-मेढ़ी रेखा)**: **Grammar Error** (व्याकरण संबंधी त्रुटि).

### 3. फाइंड एवं रिप्लेस (Find & Replace):
- **Find Bar (खोज बार खोलना)**: \`Ctrl + F\` (स्क्रीन के नीचे सर्च बॉक्स).
- **Find and Replace Dialog (खोजकर बदलना)**: **\`Ctrl + H\`** (दस्तावेज़ में किसी शब्द को दूसरे शब्द से एक साथ बदलना).`,
    realWorldAnalogy: "F7 एक सख्त हिंदी/इंग्लिश टीचर की तरह है जो लाल कलम से कॉपी में गलत वर्तनी पर गोला लगाता है।",
    importantPoints: [
      "**Spelling Check** की शॉर्टकट कुंजी **F7** होती है।",
      "**Automatic Spell Checking** की शॉर्टकट कुंजी **Shift + F7** होती है।",
      "**Thesaurus (पर्यायवाची कोष)** की शॉर्टकट कुंजी **Ctrl + F7** होती है।",
      "**Find and Replace** की शॉर्टकट कुंजी **Ctrl + H** होती है।",
      "लाल रेखा **स्पेलिंग** और नीली रेखा **व्याकरण** की गलती दर्शाती है।"
    ],
    commonMistakes: [
      "Thesaurus के लिए Shift+F7 समझना (MS Word में Shift+F7 होता है, LibreOffice में **Ctrl+F7** होता है)।",
      "लाल रेखा को व्याकरण की गलती समझना (लाल = स्पेलिंग, नीली = व्याकरण)।"
    ],
    examTips: [
      "Spelling Check = **F7**",
      "Thesaurus = **Ctrl + F7**",
      "Find and Replace = **Ctrl + H**",
      "Red Line = Spelling Error | Blue Line = Grammar Error"
    ],
    quickRevision: "F7: Spelling. Shift+F7: Auto Spell Check. Ctrl+F7: Thesaurus. Ctrl+H: Find & Replace. Red line = Spelling, Blue line = Grammar.",
    practiceAssignment: "राइटर में जानबूझकर 'computr' लिखें, F7 दबाकर स्पेलिंग चेक डायलॉग से उसे 'computer' में सुधारें।",
    microQuiz: [
      {
        question: "लिब्रेऑफिस राइटर में स्पेलिंग जांच (Spelling Check) करने की शॉर्टकट कुंजी क्या है?",
        options: [
          { id: "A", text: "F5" },
          { id: "B", text: "F7" },
          { id: "C", text: "F9" },
          { id: "D", text: "F11" }
        ],
        correctAnswer: "B",
        explanation: "स्पेलिंग और ग्रामर जांचने के लिए मानक शॉर्टकट कुंजी 'F7' होती है।"
      },
      {
        question: "टेक्स्ट के नीचे लाल रंग की टेढ़ी-मेढ़ी रेखा (Red Wavy Line) क्या दर्शाती है?",
        options: [
          { id: "A", text: "व्याकरण की गलती (Grammar Error)" },
          { id: "B", text: "वर्तनी की गलती (Spelling Error)" },
          { id: "C", text: "प्रिंटिंग त्रुटि" },
          { id: "D", text: "फॉन्ट मिसिंग" }
        ],
        correctAnswer: "B",
        explanation: "लाल रंग की रेखा वर्तनी (Spelling) की गलती को दर्शाती है।"
      }
    ]
  },
  {
    chapterNumber: 3,
    topicNumber: 10,
    slug: "libreoffice-writer-shortcut-keys",
    title: "Essential LibreOffice Writer Shortcut Keys",
    hindiTitle: "लिब्रेऑफिस राइटर के महत्वपूर्ण शॉर्टकट कीज",
    definitionEnglish: "A consolidated master reference of all high-yield shortcut keys in LibreOffice Writer essential for day-to-day productivity and cracking the NIELIT CCC exam.",
    definitionHindi: "लिब्रेऑफिस राइटर के सभी अत्यंत महत्वपूर्ण और बार-बार पूछे जाने वाले शॉर्टकट कीज का संपूर्ण मास्टर चार्ट जो सीसीसी परीक्षा के लिए अनिवार्य है।",
    simpleWords: "कीबोर्ड के जादुई बटन जिन्हें दबाते ही बिना माउस छुए सारे काम पलक झपकते हो जाते हैं।",
    examImportance: "Extreme (5-8 shortcut questions directly from Writer appear in every CCC paper)",
    detailedExplanation: `### 1. संपूर्ण राइटर शॉर्टकट मास्टर तालिका:

| कार्य (Operation) | शॉर्टकट कुंजी (Shortcut Key) |
|---|---|
| New Document (नया डॉक्यूमेंट) | \`Ctrl + N\` |
| Save As (नये नाम से सेव) | **\`Ctrl + Shift + S\`** |
| Print Preview (प्रिंट प्रीव्यू) | **\`Ctrl + Shift + O\`** |
| Exit LibreOffice (पूरा बंद करना) | **\`Ctrl + Q\`** |
| Close Document (वर्तमान फाइल बंद) | \`Ctrl + W\` |
| Double Underline (दोहरी अंडरलाइन) | **\`Ctrl + D\`** |
| Superscript (घात लगाना x²) | **\`Ctrl + Shift + P\`** |
| Subscript (आधार लिखना H₂O) | **\`Ctrl + Shift + B\`** |
| Clear Direct Formatting | **\`Ctrl + M\`** |
| Cycle Case (अपर/लोअर केस) | **\`Shift + F3\`** |
| Align Center (मध्य संरेखण) | \`Ctrl + E\` |
| Align Justify (दोनों तरफ बराबर) | \`Ctrl + J\` |
| Insert Page Break | **\`Ctrl + Enter\`** |
| Insert Table (टेबल बनाना) | **\`Ctrl + F12\`** |
| Numbering List On/Off | **\`F12\`** |
| Bullets List On/Off | **\`Shift + F12\`** |
| Spelling Check | **\`F7\`** |
| Automatic Spell Checking | **\`Shift + F7\`** |
| Thesaurus (पर्यायवाची) | **\`Ctrl + F7\`** |
| Manage Styles (स्टाइल साइडबार) | **\`F11\`** |
| Navigator (नेविगेटर खोलना) | **\`F5\`** |
| Sidebar (साइडबार ऑन/ऑफ) | **\`Ctrl + F5\`** |
| Full Screen (पूर्ण स्क्रीन) | **\`Ctrl + Shift + J\`** |`,
    realWorldAnalogy: "जैसे टीवी का रिमोट सारे चैनल और वॉल्यूम एक बटन दबाकर बदल देता है।",
    importantPoints: [
      "**Full Screen** की शॉर्टकट कुंजी **Ctrl + Shift + J** होती है।",
      "**Manage Styles** खोलने की शॉर्टकट कुंजी **F11** होती है।",
      "**Navigator** खोलने की शॉर्टकट कुंजी **F5** होती है (Impress में Slide Show के लिए F5 होता है)।"
    ],
    commonMistakes: [
      "Full Screen के लिए F11 समझना (ब्राउज़र में F11 होता है, लेकिन Writer में **Ctrl+Shift+J** होता है और F11 से Styles खुलता है)।"
    ],
    examTips: [
      "Full Screen in Writer ➔ **Ctrl + Shift + J**",
      "Manage Styles in Writer ➔ **F11**",
      "Navigator in Writer ➔ **F5**"
    ],
    quickRevision: "Memorize: Save As (Ctrl+Shift+S), Print Preview (Ctrl+Shift+O), Table (Ctrl+F12), Full Screen (Ctrl+Shift+J), Styles (F11), Navigator (F5).",
    practiceAssignment: "राइटर में Ctrl+Shift+J दबाकर फुल स्क्रीन मोड ऑन करें और दोबारा दबाकर सामान्य मोड में आएं।",
    microQuiz: [
      {
        question: "लिब्रेऑफिस राइटर में फुल स्क्रीन (Full Screen) करने की शॉर्टकट कुंजी क्या है?",
        options: [
          { id: "A", text: "F11" },
          { id: "B", text: "Ctrl + Shift + J" },
          { id: "C", text: "Ctrl + F11" },
          { id: "D", text: "Alt + Enter" }
        ],
        correctAnswer: "B",
        explanation: "LibreOffice Writer में 'Full Screen' मोड चालू/बंद करने की शॉर्टकट 'Ctrl + Shift + J' होती है।"
      },
      {
        question: "राइटर में 'Manage Styles' (स्टाइल मेनू/साइडबार) खोलने की फंक्शन कुंजी कौन सी है?",
        options: [
          { id: "A", text: "F5" },
          { id: "B", text: "F7" },
          { id: "C", text: "F11" },
          { id: "D", text: "F12" }
        ],
        correctAnswer: "C",
        explanation: "LibreOffice Writer में स्टाइल विंडो (Manage Styles) खोलने के लिए 'F11' दबाते हैं।"
      }
    ]
  }
];
