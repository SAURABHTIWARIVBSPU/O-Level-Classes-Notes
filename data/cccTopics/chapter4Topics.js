// CCC Chapter 4: Spreadsheet (LibreOffice Calc)
export const chapter4Topics = [
  {
    chapterNumber: 4,
    topicNumber: 1,
    slug: "elements-of-spreadsheet-libreoffice-calc",
    title: "Elements of Spreadsheet & LibreOffice Calc Interface",
    hindiTitle: "स्प्रेडशीट के मूल तत्व एवं कैल्क इंटरफ़ेस",
    definitionEnglish: "LibreOffice Calc is an open-source spreadsheet application used for data analysis, calculations, mathematical modeling, and charting organized in a grid of rows and columns.",
    definitionHindi: "लिब्रेऑफिस कैल्क (LibreOffice Calc) एक ओपन-सोर्स स्प्रेडशीट प्रोग्राम है जिसका उपयोग पंक्तियों और स्तंभों के ग्रिड में डेटा विश्लेषण, गणना, गणितीय मॉडलिंग और चार्ट बनाने के लिए किया जाता है।",
    simpleWords: "संख्याओं का हिसाब-किताब रखने, बिल बनाने, गणितीय फॉर्मूले लगाने और ग्राफ बनाने वाली डिजिटल बहीखाता (Spreadsheet)।",
    examImportance: "Extreme (Calc rows/columns count, zoom levels, Name Box, and Formula Bar in CCC)",
    detailedExplanation: `### 1. लिब्रेऑफिस कैल्क शीट की क्षमता एवं संरचना:
- **कुल पंक्तियां (Total Rows)**: **10,48,576** (\`2^20\` - संख्या 1 से 1048576 तक)
- **कुल स्तंभ (Total Columns)**: **1,024** (स्तंभ \`A\` से लेकर \`AMJ\` तक) *(नोट: नवीनतम संस्करणों में 16,384 अर्थात \`XFD\` तक भी समर्थित है, लेकिन CCC में मानक उत्तर **1024 / AMJ** ही माना जाता है)*।
- **कुल सेल्स (Total Cells)**: **1,07,37,41,824** (Rows × Columns).
- **डिफॉल्ट शीट संख्या (Default Sheets)**: **1 (Sheet1)**.
- **अधिकतम शीट्स (Maximum Sheets)**: **10,000 शीट्स**.

### 2. कैल्क इंटरफ़ेस के मुख्य भाग:
- **Name Box (नेम बॉक्स)**: बाईं ओर स्थित बॉक्स जो वर्तमान सक्रिय सेल का पता (जैसे **\`A1\`**) प्रदर्शित करता है।
- **Formula Bar / Input Line (फॉर्मूला बार)**: सक्रिय सेल की सामग्री या फॉर्मूला दिखाता है (शॉर्टकट: **\`Ctrl + F2\`** से Function Wizard खुलता है).
- **Sheet Tabs (शीट टैब्स)**: नीचे बाईं ओर शीट्स के बीच स्विच करने का स्थान (\`+ Button\` से नई शीट जुड़ती है).
- **Status Bar (स्टेटस बार)**: चयनित सेल्स का औसत, योग (SUM), ज़ूम स्लाइडर प्रदर्शित करता है।

### 3. कैल्क के ज़ूम प्रतिशत:
- **न्यूनतम ज़ूम (Minimum Zoom)**: **20%**
- **अधिकतम ज़ूम (Maximum Zoom)**: **400%** (Writer में 600% और Impress में 3000% होता है!)
- **डिफॉल्ट फाइल एक्सटेंशन**: **\`.ods\`** (OpenDocument Spreadsheet).`,
    realWorldAnalogy: "कैल्क एक विशाल ग्राफ पेपर या मुनीम जी का डिजिटल खाता है जहां हर खाने का एक निश्चित पता (Address) होता है।",
    importantPoints: [
      "LibreOffice Calc में कुल रो **10,48,576** और कुल कॉलम **1,024 (AMJ)** होते हैं।",
      "Calc का न्यूनतम ज़ूम **20%** और अधिकतम ज़ूम **400%** होता है।",
      "वर्तमान सक्रिय सेल का एड्रेस **Name Box** में दिखाई देता है।",
      "पहला सेल **A1** और अंतिम सेल **AMJ1048576** होता है।",
      "Calc का डिफ़ॉल्ट फाइल एक्सटेंशन **.ods** होता है।"
    ],
    commonMistakes: [
      "Calc का अधिकतम ज़ूम 500% या 600% समझना (Calc का अधिकतम ज़ूम **400%** होता है)।",
      "अंतिम कॉलम का नाम XFD समझना (पुरानी/मानक CCC गाइड में **AMJ** पूछा जाता है)।"
    ],
    examTips: [
      "Calc Rows = **10,48,576** | Columns = **1,024 (AMJ)**।",
      "Calc Zoom Range = **20% to 400%**।",
      "Active Cell Address shows in = **Name Box**।"
    ],
    quickRevision: "Calc: Rows (1048576), Cols (1024 - AMJ), Zoom (20%-400%), Ext (.ods), Active Cell Address -> Name Box, Max Sheets (10,000).",
    practiceAssignment: "Calc खोलें, Name Box में 'AMJ1048576' लिखकर Enter दबाएं और सीधे अंतिम सेल पर जाएं।",
    microQuiz: [
      {
        question: "लिब्रेऑफिस कैल्क में कुल कॉलमों (Columns) की संख्या कितनी होती है और अंतिम कॉलम का नाम क्या है?",
        options: [
          { id: "A", text: "256, IV" },
          { id: "B", text: "1024, AMJ" },
          { id: "C", text: "16384, XFD" },
          { id: "D", text: "65536, AZ" }
        ],
        correctAnswer: "B",
        explanation: "LibreOffice Calc में कुल 1,024 कॉलम होते हैं और अंतिम कॉलम का हेडर 'AMJ' होता है।"
      },
      {
        question: "लिब्रेऑफिस कैल्क में अधिकतम ज़ूम (Maximum Zoom) प्रतिशत कितना होता है?",
        options: [
          { id: "A", text: "300%" },
          { id: "B", text: "400%" },
          { id: "C", text: "500%" },
          { id: "D", text: "600%" }
        ],
        correctAnswer: "B",
        explanation: "Calc में अधिकतम ज़ूम 400% होता है (Writer में 600% और Impress में 3000% होता है)।"
      }
    ]
  },
  {
    chapterNumber: 4,
    topicNumber: 2,
    slug: "concept-of-cell-address-and-data-entry",
    title: "Cell Address [Row & Column] & Entering Data",
    hindiTitle: "सेल एड्रेस (Row/Column) एवं डेटा प्रविष्टि (Text, Number, Date)",
    definitionEnglish: "A cell is the intersection of a column and a row identified by a unique cell reference (e.g., C5). Data entered into cells is auto-aligned: Text (Left), Numbers (Right), and Booleans/Errors (Center).",
    definitionHindi: "सेल पंक्ति और स्तंभ का प्रतिच्छेदन (Intersection) बिंदु है जिसे अद्वितीय सेल एड्रेस (जैसे C5) से पहचाना जाता है। सेल में डेटा का डिफॉल्ट अलाइनमेंट होता है: टेक्स्ट (बाएं), संख्या (दाएं) और बूलियन (मध्य)।",
    simpleWords: "रो और कॉलम के मिलने से बनने वाला चौकोर डिब्बा 'सेल' कहलाता है; इसमें नंबर दाईं तरफ और शब्द बाईं तरफ अपने आप सेट होते हैं।",
    examImportance: "Extreme (Default alignment of text vs numbers in Calc is asked in almost every exam)",
    detailedExplanation: `### 1. सेल एड्रेस की संरचना (Cell Reference Anatomy):
- कॉलम लेटर + रो नंबर (उदा. **\`B4\`** = कॉलम B, रो 4).
- **Cell Range (सेल रेंज)**: दो सेल्स के बीच कोलन (\`:\`) लगाकर व्यक्त किया जाता है; जैसे **\`A1:C10\`** (सेल A1 से C10 तक का पूरा आयताकार ब्लॉक).

### 2. सेल में डेटा के प्रकार एवं डिफॉल्ट अलाइनमेंट (Default Alignment - अति महत्वपूर्ण):
- **Text / Label (अक्षर/शब्द)**: **Left Aligned (बाईं ओर संरेखित)** (उदा. 'Rahul').
- **Numbers / Values (संख्याएं)**: **Right Aligned (दाईं ओर संरेखित)** (उदा. 4500, 3.14).
- **Logical / Boolean (TRUE / FALSE)**: **Center Aligned (मध्य संरेखित)**.
- **Date & Time (दिनांक एवं समय)**: **Right Aligned (दाईं ओर संरेखित)**.
- **Formulas**: \`=\` चिन्ह से शुरू होते हैं और गणना के बाद परिणाम के प्रकार के अनुसार अलाइन होते हैं।

### 3. सेल रेफरेंसिंग के 3 प्रकार (Types of Cell Referencing):
1. **Relative Reference (सापेक्ष संदर्भ - उदा. \`A1\`)**: कॉपी करने पर रो और कॉलम दोनों बदलते हैं (डिफॉल्ट).
2. **Absolute Reference (निरपेक्ष संदर्भ - उदा. \`$A$1\`)**: डॉलर (\`$\`) चिन्ह लगने से रो और कॉलम दोनों स्थिर रहते हैं।
3. **Mixed Reference (मिश्रित संदर्भ - उदा. \`$A1\` या \`A$1\`)**: एक भाग स्थिर (Fixed) और दूसरा परिवर्तनशील (Variable).
- संदर्भ प्रकार बदलने की शॉर्टकट कुंजी: **\`Shift + F4\`** (MS Excel में F4 होता है).`,
    realWorldAnalogy: "जैसे थिएटर में सीट नंबर 'Row B, Seat 7' (B7) होता है, वैसे ही स्प्रेडशीट में सेल का पता होता है।",
    importantPoints: [
      "कैल्क में टेक्स्ट डिफॉल्ट रूप से **Left Align** और संख्याएं **Right Align** होती हैं।",
      "सेल संदर्भ को Absolute ($) में बदलने की शॉर्टकट कुंजी **Shift + F4** होती है।",
      "सेल रेंज को अलग करने के लिए कोलन (**`:`**) चिन्ह का उपयोग होता है (जैसे A1:A10)।",
      "हर फॉर्मूला हमेशा बराबर चिन्ह (**`=`**) से शुरू होना अनिवार्य है।"
    ],
    commonMistakes: [
      "संख्याओं को Left Aligned समझना (संख्याएं हमेशा **Right** और टेक्स्ट **Left** अलाइन होता है)।",
      "Absolute Reference के लिए F4 समझना (LibreOffice Calc में **Shift + F4** होता है)।"
    ],
    examTips: [
      "Text Alignment in Calc ➔ **Left**",
      "Number Alignment in Calc ➔ **Right**",
      "Formula prefix ➔ **= (Equal to sign)**",
      "Absolute Reference sign ➔ **$ (Dollar)**"
    ],
    quickRevision: "Cell = Row x Col (e.g. B4). Text -> Left, Numbers -> Right, Boolean -> Center. Range: A1:D5. Absolute: $A$1 (Shift+F4).",
    practiceAssignment: "Calc में सेल A1 में अपना नाम और सेल A2 में अपना रोल नंबर लिखें और देखें कि नाम बाईं ओर और रोल नंबर दाईं ओर कैसे सेट होता है।",
    microQuiz: [
      {
        question: "लिब्रेऑफिस कैल्क में किसी सेल में दर्ज की गई संख्या (Number) का डिफॉल्ट अलाइनमेंट क्या होता है?",
        options: [
          { id: "A", text: "Left Aligned" },
          { id: "B", text: "Right Aligned" },
          { id: "C", text: "Center Aligned" },
          { id: "D", text: "Justified" }
        ],
        correctAnswer: "B",
        explanation: "कैल्क में संख्याएं (Numbers) डिफ़ॉल्ट रूप से दाईं ओर (Right Align) और टेक्स्ट बाईं ओर (Left Align) होता है।"
      },
      {
        question: "कैल्क में रिलेटिव सेल एड्रेस को एब्सोल्यूट सेल एड्रेस (जैसे $A$1) में बदलने का शॉर्टकट क्या है?",
        options: [
          { id: "A", text: "F4" },
          { id: "B", text: "Shift + F4" },
          { id: "C", text: "Ctrl + F4" },
          { id: "D", text: "Alt + F4" }
        ],
        correctAnswer: "B",
        explanation: "LibreOffice Calc में सेल रेफरेंस टॉगल करने के लिए 'Shift + F4' का उपयोग किया जाता है।"
      }
    ]
  },
  {
    chapterNumber: 4,
    topicNumber: 3,
    slug: "manipulation-of-cells-and-sheets",
    title: "Editing Cells, Formatting, Cut/Copy/Paste & Cell Sizing",
    hindiTitle: "सेल संपादन, फॉर्मेटिंग, कट/कॉपी/पेस्ट एवं रो/कॉलम साइजिंग",
    definitionEnglish: "Cell manipulation involves active cell editing (F2), formatting number styles (Currency Ctrl+Shift+4, Percentage Ctrl+Shift+5, Date Ctrl+Shift+3), inserting line breaks within cells (Ctrl+Enter), and adjusting column width/row height.",
    definitionHindi: "सेल संपादन में सीधे सेल एडिट करना (F2), नंबर फॉर्मेटिंग (करेंसी Ctrl+Shift+4, प्रतिशत Ctrl+Shift+5), एक ही सेल में नई लाइन बनाना (Ctrl+Enter) और रो की ऊंचाई व कॉलम की चौड़ाई बदलना शामिल है।",
    simpleWords: "सेल में लिखे नंबर को एडिट करना, करेंसी (₹) या प्रतिशत (%) का चिन्ह लगाना और एक ही सेल में दो लाइनें लिखना।",
    examImportance: "High (F2 to edit cell, Ctrl+Enter for multiline text in cell, Format Cells Ctrl+1)",
    detailedExplanation: `### 1. सेल एडिटिंग एवं नेविगेशन शॉर्टकट्स:
- **Edit Active Cell (सक्रिय सेल को एडिट मोड में खोलना)**: **\`F2\`** (कर्सर सेल के अंदर आ जाता है).
- **Line Break inside a Cell (एक ही सेल के अंदर नई लाइन)**: **\`Ctrl + Enter\`** (अति महत्वपूर्ण प्रश्न!)
- **Format Cells Dialog (सेल फॉर्मेटिंग बॉक्स)**: **\`Ctrl + 1\`**
- **Delete Selected Cell Content**: \`Delete\` या \`Backspace\` (Delete से डायलॉग बॉक्स खुलता है).

### 2. त्वरित संख्या फॉर्मेटिंग शॉर्टकट्स (Number Format Shortcuts):
- **General Number Format**: \`Ctrl + Shift + 1\`
- **Scientific / Exponential Format**: \`Ctrl + Shift + 2\`
- **Date Format (YYYY-MM-DD)**: **\`Ctrl + Shift + 3\`**
- **Currency Format (₹ / $)**: **\`Ctrl + Shift + 4\`**
- **Percentage Format (%)**: **\`Ctrl + Shift + 5\`**
- **Standard Format**: \`Ctrl + Shift + 6\`

### 3. रो और कॉलम का आकार बदलना:
- कॉलम हेडर के बीच की विभाजक रेखा पर डबल-क्लिक करने से **AutoFit Column Width** हो जाता है (कंटेंट के अनुसार सही चौड़ाई).
- जब संख्या सेल की चौड़ाई से बड़ी होती है, तो सेल में **\`###\`** प्रदर्शित होता है (कॉलम चौड़ा करने पर संख्या दिखने लगती है).`,
    realWorldAnalogy: "जैसे लिफाफे पर पता लिखते समय पिन कोड को एक निश्चित बॉक्स में ठीक से बैठाना।",
    importantPoints: [
      "सेल को एडिट करने की शॉर्टकट कुंजी **F2** होती है।",
      "एक ही सेल के अंदर नई लाइन (Multi-line text) बनाने के लिए **Ctrl + Enter** दबाते हैं।",
      "सेल फॉर्मेटिंग डायलॉग खोलने का शॉर्टकट **Ctrl + 1** होता है।",
      "करेंसी फॉर्मेट लगाने का शॉर्टकट **Ctrl + Shift + 4** और प्रतिशत का **Ctrl + Shift + 5** होता है।"
    ],
    commonMistakes: [
      "सेल में नई लाइन के लिए Enter दबाना (Enter से नीचे के सेल में चले जाते हैं, सेल के अंदर नई लाइन के लिए **Ctrl + Enter** दबाना होता है)।"
    ],
    examTips: [
      "Edit Active Cell ➔ **F2**",
      "New line within cell ➔ **Ctrl + Enter**",
      "Format Cells Dialog ➔ **Ctrl + 1**"
    ],
    quickRevision: "F2: Edit Cell. Ctrl+Enter: Wrap text / new line in cell. Ctrl+1: Format Cells. Ctrl+Shift+4: Currency ($/₹), Ctrl+Shift+5: Percentage (%).",
    practiceAssignment: "सेल B2 में 'CCC Exam' लिखें, फिर Ctrl+Enter दबाकर उसी सेल में नीचे '2026' टाइप करें।",
    microQuiz: [
      {
        question: "लिब्रेऑफिस कैल्क में एक ही सेल (Cell) के भीतर नई पंक्ति (Line Break) डालने के लिए क्या दबाया जाता है?",
        options: [
          { id: "A", text: "Enter" },
          { id: "B", text: "Shift + Enter" },
          { id: "C", text: "Ctrl + Enter" },
          { id: "D", text: "Alt + Enter" }
        ],
        correctAnswer: "C",
        explanation: "कैल्क में एक ही सेल के अंदर नई लाइन शुरू करने के लिए 'Ctrl + Enter' का प्रयोग किया जाता है।"
      },
      {
        question: "कैल्क में सक्रिय सेल को संपादन (Edit) मोड में लाने के लिए किस शॉर्टकट कुंजी का प्रयोग होता है?",
        options: [
          { id: "A", text: "F1" },
          { id: "B", text: "F2" },
          { id: "C", text: "F3" },
          { id: "D", text: "F4" }
        ],
        correctAnswer: "B",
        explanation: "F2 फंक्शन कुंजी से सक्रिय सेल तुरंत संपादन (Edit Mode) के लिए खुल जाता है।"
      }
    ]
  },
  {
    chapterNumber: 4,
    topicNumber: 4,
    slug: "inserting-deleting-rows-columns-and-autofill",
    title: "Inserting/Deleting Rows/Cols & AutoFill Magic",
    hindiTitle: "रो/कॉलम जोड़ना-हटाना एवं ऑटो-फिल (AutoFill) फीचर",
    definitionEnglish: "Managing sheet layout involves inserting/deleting cells, rows, and columns using shortcuts (Insert Ctrl+Plus, Delete Ctrl+Minus), and utilizing the AutoFill handle to rapidly generate arithmetic series, dates, and month names.",
    definitionHindi: "शीट लेआउट प्रबंधन में नई रो/कॉलम जोड़ना (Ctrl + Plus), रो/कॉलम हटाना (Ctrl + Minus) और ऑटो-फिल हैंडल द्वारा गिनती, महीनों के नाम, और तिथियों की स्वचालित श्रृंखला बनाना शामिल है।",
    simpleWords: "नई लाइन या कॉलम जोड़ना, फालतू लाइन मिटाना, और 1, 2 लिखकर खींचने पर अपने आप 100 तक गिनती लिख जाना (AutoFill)।",
    examImportance: "Extreme (Insert cell Ctrl++, Delete cell Ctrl+-, AutoFill concept in CCC)",
    detailedExplanation: `### 1. रो, कॉलम और सेल जोड़ना/हटाना (Insert & Delete Shortcuts):
- **Insert Cells / Rows / Columns (नया जोड़ना)**: **\`Ctrl + +\`** (Ctrl के साथ प्लस कुंजी).
- **Delete Cells / Rows / Columns (हटाना)**: **\`Ctrl + -\`** (Ctrl के साथ माइनस कुंजी).
- **Select Entire Row (पूरी रो सेलेक्ट करना)**: **\`Shift + Space\`**
- **Select Entire Column (पूरा कॉलम सेलेक्ट करना)**: **\`Ctrl + Space\`**
- **Select Entire Sheet (पूरी शीट सेलेक्ट करना)**: **\`Ctrl + Shift + Space\`** या \`Ctrl + A\`

### 2. ऑटो-फिल हैंडल (AutoFill Feature):
- जब आप किसी सेल का चयन करते हैं, तो निचले-दाएं कोने में एक छोटा काला चौकोर बिंदु दिखता है जिसे **Fill Handle** कहते हैं।
- माउस कर्सर वहां ले जाने पर वह काले \`+\` चिन्ह में बदल जाता है।
- **उपयोग**:
  - **Numeric Series**: \`1\` और \`2\` लिखकर दोनों को सेलेक्ट करके ड्रैग करने पर \`3, 4, 5, 6...\` स्वतः भर जाता है।
  - **Days of Week**: \`Monday\` या \`Mon\` लिखकर खींचने पर \`Tuesday, Wednesday...\` अपने आप आता है।
  - **Months**: \`Jan\` लिखकर खींचने पर \`Feb, Mar, Apr...\` आता है।
  - **Formula Replication**: ऊपर के सेल में लगे फॉर्मूले को नीचे के 1000 सेल्स में स्वतः लागू करना।`,
    realWorldAnalogy: "ऑटो-फिल एक जादुई स्टाम्प की तरह है जो पैटर्न को पहचानकर आगे की सारी गिनती खुद लिख देता है।",
    importantPoints: [
      "सेल/रो/कॉलम जोड़ने का शॉर्टकट **Ctrl + '+'** और हटाने का **Ctrl + '-'** होता है।",
      "पूरी रो सेलेक्ट करने की शॉर्टकट कुंजी **Shift + Space** होती है।",
      "पूरा कॉलम सेलेक्ट करने की शॉर्टकट कुंजी **Ctrl + Space** होती है।",
      "ऑटो-फिल हैंडल सेल के **निचले-दाएं कोने (Bottom-Right Corner)** पर स्थित होता है।"
    ],
    commonMistakes: [
      "पूरी रो सेलेक्ट करने के लिए Ctrl+Space समझना (कॉलम के लिए **Ctrl+Space** और रो के लिए **Shift+Space** होता है)।"
    ],
    examTips: [
      "Insert Cell/Row ➔ **Ctrl + +**",
      "Delete Cell/Row ➔ **Ctrl + -**",
      "Select Entire Row ➔ **Shift + Space**",
      "Select Entire Column ➔ **Ctrl + Space**"
    ],
    quickRevision: "Insert: Ctrl++, Delete: Ctrl+-. Select Row: Shift+Space, Select Col: Ctrl+Space. AutoFill handle (bottom-right corner) generates series.",
    practiceAssignment: "सेल A1 में 'Sunday' लिखें और Fill Handle को पकड़कर A7 तक खींचें।",
    microQuiz: [
      {
        question: "लिब्रेऑफिस कैल्क में एक नया सेल, रो या कॉलम जोड़ने (Insert) की शॉर्टकट कुंजी क्या है?",
        options: [
          { id: "A", text: "Ctrl + I" },
          { id: "B", text: "Ctrl + +" },
          { id: "C", text: "Alt + +" },
          { id: "D", text: "Shift + +" }
        ],
        correctAnswer: "B",
        explanation: "नया सेल, रो या कॉलम जोड़ने के लिए 'Ctrl + +' शॉर्टकट का उपयोग किया जाता है।"
      },
      {
        question: "कैल्क में पूरी पंक्ति (Entire Row) को एक बार में सेलेक्ट करने का शॉर्टकट क्या है?",
        options: [
          { id: "A", text: "Ctrl + Space" },
          { id: "B", text: "Shift + Space" },
          { id: "C", text: "Alt + Space" },
          { id: "D", text: "Ctrl + Shift + R" }
        ],
        correctAnswer: "B",
        explanation: "Shift + Space दबाने से वर्तमान पंक्ति (Row) पूरी तरह सेलेक्ट हो जाती है, जबकि Ctrl + Space से कॉलम सेलेक्ट होता है।"
      }
    ]
  },
  {
    chapterNumber: 4,
    topicNumber: 5,
    slug: "sorting-filtering-and-freezing-panes",
    title: "Data Sorting, Filtering & Freezing Panes",
    hindiTitle: "डेटा सॉर्टिंग, फिल्टरिंग एवं फ्रीज पैन (Freeze Panes)",
    definitionEnglish: "Data organization tools include Sorting (ascending A-Z / descending Z-A), AutoFilter (Ctrl+Shift+L) for criteria-based record extraction, and Freeze Panes to lock header rows/columns during scrolling.",
    definitionHindi: "डेटा संगठन टूल्स में सॉर्टिंग (आरोही A-Z / अवरोही Z-A क्रम), ऑटो-फिल्टर (Ctrl+Shift+L) द्वारा आवश्यक रिकॉर्ड छांटना, और फ्रीज पैन द्वारा स्क्रॉल करते समय हेडर रो/कॉलम को स्थिर रखना शामिल है।",
    simpleWords: "नामों को वर्णमाला (A से Z) में लगाना (Sort), केवल पास होने वाले छात्रों को छांटना (Filter), और नीचे स्क्रॉल करते समय ऊपर की हेडिंग को रोके रखना (Freeze)।",
    examImportance: "High (AutoFilter shortcut Ctrl+Shift+L, Freeze Panes menu location in CCC)",
    detailedExplanation: `### 1. डेटा सॉर्टिंग (Data Sorting):
- **Ascending (आरोही क्रम)**: A से Z या सबसे छोटे नंबर से सबसे बड़े नंबर (0-9) की ओर।
- **Descending (अवरोही क्रम)**: Z से A या सबसे बड़े नंबर से सबसे छोटे नंबर (9-0) की ओर।
- मेनू पाथ: **Data Menu ➔ Sort** (या Standard Toolbar से Sort Icons).

### 2. ऑटो-फिल्टर (AutoFilter):
- **शॉर्टकट कुंजी**: **\`Ctrl + Shift + L\`** (अति महत्वपूर्ण प्रश्न!)
- मेनू पाथ: **Data Menu ➔ AutoFilter**
- तालिका के प्रत्येक कॉलम हेडर पर एक ड्रॉपडाउन तीर बन जाता है। इस पर क्लिक करके किसी विशिष्ट शहर, ग्रेड या स्थिति वाले रिकॉर्ड्स को ही स्क्रीन पर दिखाया जा सकता है और बाकी छिप जाते हैं।

### 3. फ्रीज रोज एंड कॉलम्स (Freeze Rows and Columns):
- मेनू पाथ: **View Menu ➔ Freeze Rows and Columns**
- जब स्प्रेडशीट में 1000 से अधिक पंक्तियां होती हैं, तो नीचे स्क्रॉल करने पर पहली हेडिंग वाली रो छिप जाती है।
- Freeze लगाने से पहली पंक्ति या पहला कॉलम स्क्रीन पर **स्थिर (Lock)** हो जाता है, चाहे आप कितना भी नीचे या दाएं स्क्रॉल करें।`,
    realWorldAnalogy: "फिल्टर चाय की छलनी की तरह है जो पत्ती (अनावश्यक डेटा) रोक लेती है और केवल शुद्ध चाय (इच्छित डेटा) दिखाती है।",
    importantPoints: [
      "**AutoFilter** की शॉर्टकट कुंजी **Ctrl + Shift + L** होती है।",
      "सॉर्टिंग दो प्रकार की होती है: **Ascending (A-Z)** और **Descending (Z-A)**।",
      "स्क्रॉलिंग के दौरान हेडर को लॉक करने के लिए **Freeze Rows and Columns** (View Menu) का प्रयोग किया जाता है।"
    ],
    commonMistakes: [
      "AutoFilter के लिए Ctrl+F समझना (Ctrl+F Find के लिए होता है, AutoFilter के लिए **Ctrl+Shift+L** होता है)।"
    ],
    examTips: [
      "AutoFilter Shortcut in Calc ➔ **Ctrl + Shift + L**।",
      "Freeze Panes is located in ➔ **View Menu**।"
    ],
    quickRevision: "Sort (A-Z / Z-A). AutoFilter (Ctrl+Shift+L) in Data Menu. Freeze Rows/Columns (View Menu) locks headers while scrolling.",
    practiceAssignment: "कैल्क में 5 नाम और उनके प्राप्तांक लिखें, AutoFilter (Ctrl+Shift+L) लगाकर 80 से अधिक अंक वालों को फिल्टर करें।",
    microQuiz: [
      {
        question: "लिब्रेऑफिस कैल्क में 'AutoFilter' चालू/बंद करने की शॉर्टकट कुंजी क्या है?",
        options: [
          { id: "A", text: "Ctrl + F" },
          { id: "B", text: "Ctrl + Shift + L" },
          { id: "C", text: "Alt + D + F" },
          { id: "D", text: "Ctrl + Alt + F" }
        ],
        correctAnswer: "B",
        explanation: "LibreOffice Calc में ऑटो-फिल्टर लगाने की शॉर्टकट कुंजी 'Ctrl + Shift + L' होती है।"
      }
    ]
  },
  {
    chapterNumber: 4,
    topicNumber: 6,
    slug: "basic-formulas-and-autosum",
    title: "Using Mathematical Formulas (+, -, *, /) & AutoSum",
    hindiTitle: "मूल गणितीय सूत्र (+, -, *, /) एवं ऑटो-सम (AutoSum)",
    definitionEnglish: "Formulas in Calc are user-defined equations performing arithmetic operations using standard mathematical operators (+, -, *, /, ^) that strictly begin with an equal sign (=). AutoSum (Sum icon) provides one-click summation.",
    definitionHindi: "कैल्क में फॉर्मूले गणितीय ऑपरेटरों (+, -, *, /, ^) का उपयोग करके गणना करने वाले समीकरण हैं जो अनिवार्य रूप से बराबर (=) चिन्ह से शुरू होते हैं। ऑटो-सम (AutoSum) एक क्लिक में योग निकालने की सुविधा देता है।",
    simpleWords: "जोड़, घटाना, गुणा, भाग करने के सूत्र लिखना, जो हमेशा '=' से शुरू होते हैं।",
    examImportance: "Extreme (Formula syntax, operator precedence, and basic calculation output questions in CCC)",
    detailedExplanation: `### 1. फॉर्मूला निर्माण के नियम (Rules for Formulas):
- प्रत्येक फॉर्मूला हमेशा **\`=\` (Equal to)** चिन्ह से शुरू होना चाहिए। यदि \`=\` नहीं लगाया जाएगा, तो कैल्क उसे सादा टेक्स्ट (Label) मानेगा।
- **मूल गणितीय ऑपरेटर्स**:
  - \`+\` : Addition (जोड़) -> \`=A1 + B1\`
  - \`-\` : Subtraction (घटाव) -> \`=A1 - B1\`
  - \`*\` : Multiplication (गुणा) -> \`=A1 * B1\`
  - \`/\` : Division (भाग) -> \`=A1 / B1\`
  - \`^\` : Exponentiation (घात) -> \`=2^3\` (परिणाम: **8**)

### 2. ऑपरेटर प्राथमिकता नियम (BODMAS in Calc):
- कोष्ठक (Parentheses) \`()\` ➔ घात \`^\` ➔ गुणा \`*\` एवं भाग \`/\` ➔ जोड़ \`+\` एवं घटाना \`-\`।
- **CCC परीक्षा का उदाहरण प्रश्न**:
  - \`=5 + 2 * 3\` का मान क्या होगा? ➔ \`5 + 6\` = **11** (न कि 21!)
  - \`=(5 + 2) * 3\` का मान क्या होगा? ➔ \`7 * 3\` = **21**
  - \`=100 / 10 / 2\` का मान क्या होगा? ➔ \`10 / 2\` = **5**

### 3. ऑटो-सम (AutoSum):
- फॉर्मूला बार के पास स्थित **\`Σ\` (Sigma)** आइकन पर क्लिक करके या शॉर्टकट द्वारा एक पूरी पंक्ति या स्तंभ के अंकों का योग स्वतः निकाला जा सकता है (\`=SUM(A1:A10)\`).`,
    realWorldAnalogy: "जैसे कैलकुलेटर में नंबर दबाकर '=' दबाते ही उत्तर मिल जाता है, कैल्क में पहले '=' लगाकर सवाल लिखा जाता है।",
    importantPoints: [
      "कैल्क में सभी फॉर्मूले अनिवार्य रूप से **'='** चिन्ह से शुरू होते हैं।",
      "घात (Power) के लिए **`^` (Caret)** चिन्ह का प्रयोग किया जाता है (जैसे `=3^2` = 9)।",
      "गणना में पहले गुणा/भाग होता है, उसके बाद जोड़/घटाव (BODMAS नियम)।"
    ],
    commonMistakes: [
      "बिना '=' लगाए 10+20 लिखना (कैल्क उसे फॉर्मूला न मानकर केवल 10+20 टेक्स्ट दिखाएगा)।",
      "5+2*3 को 21 समझना (गुणा पहले होगा, इसलिए 5+6 = 11 होगा)।"
    ],
    examTips: [
      "CCC में अक्सर पूछा जाता है: 'Calc में =2^3 का मान क्या होगा?' ➔ **8**।",
      "'=5+5*2 का मान क्या होगा?' ➔ **15**।"
    ],
    quickRevision: "Formulas start with '='. Operators: +, -, *, /, ^ (Power). BODMAS precedence applies. =2^3 = 8.",
    practiceAssignment: "कैल्क में किसी खाली सेल में '=10 + 20 * 2' लिखें और Enter दबाकर देखें कि उत्तर 50 आता है।",
    microQuiz: [
      {
        question: "लिब्रेऑफिस कैल्क में सूत्र (Formula) किस प्रतीक/चिन्ह से शुरू होना अनिवार्य है?",
        options: [
          { id: "A", text: "+" },
          { id: "B", text: "=" },
          { id: "C", text: "@" },
          { id: "D", text: "#" }
        ],
        correctAnswer: "B",
        explanation: "कैल्क में प्रत्येक सूत्र की शुरुआत अनिवार्य रूप से बराबर (=) चिन्ह से होती है।"
      },
      {
        question: "कैल्क में सूत्र '=20 - 10 / 2' का परिणाम क्या होगा?",
        options: [
          { id: "A", text: "5" },
          { id: "B", text: "15" },
          { id: "C", text: "10" },
          { id: "D", text: "#VALUE!" }
        ],
        correctAnswer: "B",
        explanation: "BODMAS नियम के अनुसार पहले भाग होगा (10/2 = 5), फिर 20 - 5 = 15 परिणाम आएगा।"
      }
    ]
  },
  {
    chapterNumber: 4,
    topicNumber: 7,
    slug: "essential-calc-functions",
    title: "Core Functions: SUM, COUNT, MAX, MIN, AVERAGE",
    hindiTitle: "प्रमुख फंक्शन्स: SUM, COUNT, MAX, MIN, AVERAGE",
    definitionEnglish: "Built-in functions are predefined formulas performing standard statistical and mathematical operations on cell ranges, including SUM (total), AVERAGE (mean), COUNT (numeric cells count), COUNTA (non-empty cells count), MAX (largest value), MIN (smallest value), and ROUND/PRODUCT/MOD.",
    definitionHindi: "बिल्ट-इन फंक्शन्स पहले से तैयार फॉर्मूले हैं जो सेल रेंज पर गणना करते हैं; जैसे SUM (योग), AVERAGE (औसत), COUNT (संख्या वाले सेल्स की गिनती), COUNTA (भरे हुए सेल्स), MAX (अधिकतम), MIN (न्यूनतम), ROUND, PRODUCT और MOD।",
    simpleWords: "कैल्क के बने-बनाए जादुई फॉर्मूले जो एक सेकंड में सबसे बड़ा नंबर, सबसे छोटा नंबर, कुल योग और औसत निकाल देते हैं।",
    examImportance: "Extreme (Direct function questions like ROUND, MOD, COUNT vs COUNTA in every CCC paper)",
    detailedExplanation: `### 1. सांख्यिकीय फंक्शन्स (Statistical Functions):
- **\`=SUM(A1:A5)\`**: सभी संख्याओं का कुल जोड़ निकालता है।
- **\`=AVERAGE(A1:A5)\`**: संख्याओं का औसत निकालता है।
  - उदा. \`=AVERAGE(10, 20, 30)\` ➔ **20**
- **\`=MAX(A1:A5)\`**: रेंज में सबसे बड़ी (Maximum) संख्या लौटाता है।
  - उदा. \`=MAX(15, 85, 42)\` ➔ **85**
- **\`=MIN(A1:A5)\`**: रेंज में सबसे छोटी (Minimum) संख्या लौटाता है।
  - उदा. \`=MIN(15, 85, 42)\` ➔ **15**
- **\`=COUNT(A1:A5)\`**: केवल **संख्याओं (Numbers)** वाले सेल्स की गिनती करता है (टेक्स्ट को छोड़ देता है).
- **\`=COUNTA(A1:A5)\`**: सभी **भरे हुए (Non-empty)** सेल्स (संख्या + टेक्स्ट दोनों) की गिनती करता है.

### 2. महत्वपूर्ण गणितीय फंक्शन्स (Math Functions - CCC Special):
- **\`=PRODUCT(2, 3, 4)\`**: सभी संख्याओं का आपस में गुणा (2 × 3 × 4 = **24**).
- **\`=MOD(17, 5)\`**: शेषफल (Remainder) निकालता है (17 को 5 से भाग देने पर शेष = **2**).
- **\`=ROUND(175.678, 2)\`**: दशमलव के 2 अंकों तक राउंड करता है (उत्तर: **175.68**).
  - \`=ROUND(175.678, 0)\` ➔ **176**
  - \`=ROUND(175.678, -1)\` ➔ **180**
- **\`=NOW()\`**: वर्तमान सिस्टम दिनांक एवं समय दोनों देता है।
- **\`=TODAY()\`**: केवल वर्तमान सिस्टम दिनांक देता है।`,
    realWorldAnalogy: "फंक्शन्स रेडीमेड मसालों के पैकेट की तरह हैं—आपको अलग से सूत्र बनाने की जरूरत नहीं, बस इस्तेमाल करना है।",
    importantPoints: [
      "**COUNT** केवल अंकों वाले सेल्स को गिनता है, जबकि **COUNTA** टेक्स्ट और अंक दोनों को गिनता है।",
      "**MOD** फंक्शन भाग देने के बाद **शेषफल (Remainder)** लौटाता है।",
      "**NOW()** वर्तमान Date & Time दोनों देता है, जबकि **TODAY()** केवल Date देता है।",
      "Function Wizard खोलने का शॉर्टकट **Ctrl + F2** होता है।"
    ],
    commonMistakes: [
      "COUNT से टेक्स्ट भी गिनने की उम्मीद करना (टेक्स्ट गिनने के लिए **COUNTA** का उपयोग होता है)।",
      "MOD(10, 3) का मान 3 समझना (MOD शेषफल देता है, अतः 10/3 का शेष **1** होगा)।"
    ],
    examTips: [
      "Calc में `=MOD(10, 3)` का मान ➔ **1**",
      "`=PRODUCT(5, 2)` का मान ➔ **10**",
      "`=NOW()` ➔ Date and Time दोनों",
      "`=TODAY()` ➔ केवल Date"
    ],
    quickRevision: "SUM (total), AVG (mean), MAX/MIN (extremes), COUNT (nums only), COUNTA (all non-blank), MOD(n, d) = remainder, TODAY() = date, NOW() = date+time.",
    practiceAssignment: "खाली सेल में '=MOD(25, 4)' और '=ROUND(45.786, 1)' लिखकर Enter दबाकर परिणाम जांचें।",
    microQuiz: [
      {
        question: "लिब्रेऑफिस कैल्क में सूत्र '=MOD(15, 4)' का मान क्या होगा?",
        options: [
          { id: "A", text: "3" },
          { id: "B", text: "3.75" },
          { id: "C", text: "1" },
          { id: "D", text: "0" }
        ],
        correctAnswer: "A",
        explanation: "MOD फंक्शन शेषफल (Remainder) निकालता है। 15 को 4 से भाग देने पर (4×3 = 12) शेषफल 3 बचता है।"
      },
      {
        question: "वर्तमान सिस्टम दिनांक और समय (Date and Time) दोनों प्राप्त करने के लिए किस फंक्शन का प्रयोग किया जाता है?",
        options: [
          { id: "A", text: "=TODAY()" },
          { id: "B", text: "=NOW()" },
          { id: "C", text: "=TIME()" },
          { id: "D", text: "=CURRENT()" }
        ],
        correctAnswer: "B",
        explanation: "=NOW() फंक्शन सिस्टम की वर्तमान दिनांक और समय दोनों प्रदर्शित करता है।"
      }
    ]
  },
  {
    chapterNumber: 4,
    topicNumber: 8,
    slug: "creating-charts-bar-pie-line",
    title: "Creating and Formatting Charts (Bar, Pie, Line)",
    hindiTitle: "चार्ट्स बनाना और कस्टमाइज़ करना (Bar, Pie, Line Charts)",
    definitionEnglish: "Charts visually represent numeric spreadsheet data to identify trends, comparisons, and proportions using Chart Wizard (4 steps), supporting Bar, Column, Pie, Line, Area, and XY Scatter charts.",
    definitionHindi: "चार्ट्स स्प्रेडशीट के संख्यात्मक डेटा का दृश्य (सचित्र) निरूपण करते हैं जिससे तुलना और रुझान समझना आसान हो जाता है; इसे 4-चरणीय चार्ट विज़ार्ड द्वारा कॉलम, बार, पाई, और लाइन चार्ट के रूप में बनाया जाता है।",
    simpleWords: "नंबरों को ग्राफ या गोल पाई के रूप में दिखाना ताकि देखते ही पता चल जाए कि किसकी बिक्री ज्यादा हुई।",
    examImportance: "High (Chart Wizard steps count, types of charts like Pie vs Bar in CCC)",
    detailedExplanation: `### 1. चार्ट विज़ार्ड के 4 चरण (Chart Wizard - 4 Steps - अति महत्वपूर्ण):
- मेनू पाथ: **Insert Menu ➔ Chart** (या Standard Toolbar पर Chart आइकन).
- चार्ट विज़ार्ड में कुल **4 चरण** होते हैं:
  1. **Step 1: Chart Type** (कॉलम, बार, पाई, लाइन आदि प्रकार चुनना).
  2. **Step 2: Data Range** (डेटा का सेल विस्तार चुनना).
  3. **Step 3: Data Series** (श्रेणियों और रंगों को व्यवस्थित करना).
  4. **Step 4: Chart Elements** (शीर्षक Title, Subtitle, X-Axis, Y-Axis, Legend जोड़ना).

### 2. प्रमुख चार्ट प्रकार (Types of Charts):
- **Column Chart (कॉलम चार्ट)**: ऊर्ध्वाधर (Vertical) खंभों द्वारा विभिन्न मदों की तुलना (डिफॉल्ट चार्ट प्रकार).
- **Bar Chart (बार चार्ट)**: क्षैतिज (Horizontal) पट्टियों द्वारा तुलना.
- **Pie Chart (पाई चार्ट)**: एक गोल वृत्त को टुकड़ों में बांटकर 100% में से आनुपातिक हिस्सेदारी (Proportion) दर्शाना (केवल 1 डेटा सीरीज के लिए सर्वोत्तम).
- **Line Chart (लाइन चार्ट)**: समय के साथ रुझान और उतार-चढ़ाव (Trends over time, जैसे शेयर बाजार या तापमान).
- **XY (Scatter) Chart**: दो वैज्ञानिक चरों के बीच सहसंबंध दिखाना.`,
    realWorldAnalogy: "क्रिकेट मैच में ओवर-दर-ओवर रनों का ग्राफ (Line Chart) या खिलाड़ी के शॉट का वैगन व्हील (Pie Chart)।",
    importantPoints: [
      "Chart Wizard में कुल **4 चरण (4 Steps)** होते हैं।",
      "पाई चार्ट (Pie Chart) पूरे हिस्से में से अनुपातिक प्रतिशत दिखाने के लिए सबसे उपयुक्त होता है।",
      "चार्ट इंसर्ट करने का विकल्प **Insert Menu** में होता है।"
    ],
    commonMistakes: [
      "Chart Wizard के 4 चरणों की जगह 5 या 6 चरण समझना।"
    ],
    examTips: [
      "Chart Wizard में कितने चरण होते हैं? ➔ **4 Steps**।",
      "Proportions / Percentages के लिए सबसे अच्छा चार्ट कौन सा है? ➔ **Pie Chart**।"
    ],
    quickRevision: "Chart Wizard has 4 steps: Chart Type -> Data Range -> Data Series -> Chart Elements. Pie (proportions), Line (trends), Column (comparisons).",
    practiceAssignment: "कैल्क में 3 महीनों का खर्च लिखें और Insert मेनू से Pie Chart बनाकर उसका 3D दृश्य देखें।",
    microQuiz: [
      {
        question: "लिब्रेऑफिस कैल्क के चार्ट विज़ार्ड (Chart Wizard) में कुल कितने चरण (Steps) होते हैं?",
        options: [
          { id: "A", text: "3" },
          { id: "B", text: "4" },
          { id: "C", text: "5" },
          { id: "D", text: "6" }
        ],
        correctAnswer: "B",
        explanation: "कैल्क में चार्ट विज़ार्ड के कुल 4 चरण (Chart Type, Data Range, Data Series, Chart Elements) होते हैं।"
      },
      {
        question: "डेटा के आनुपातिक वितरण (Proportions / Percentages) को 100% के रूप में दिखाने के लिए कौन सा चार्ट सबसे उपयुक्त है?",
        options: [
          { id: "A", text: "Line Chart" },
          { id: "B", text: "Pie Chart" },
          { id: "C", text: "Scatter Chart" },
          { id: "D", text: "Bubble Chart" }
        ],
        correctAnswer: "B",
        explanation: "पाई चार्ट (Pie Chart) एक वृत्ताकार चार्ट है जो संपूर्ण में से विभिन्न भागों के प्रतिशत अनुपात को दर्शाता है।"
      }
    ]
  },
  {
    chapterNumber: 4,
    topicNumber: 9,
    slug: "libreoffice-calc-shortcut-keys-and-errors",
    title: "Calc Shortcut Keys & Common Formula Error Codes",
    hindiTitle: "कैल्क शॉर्टकट कीज एवं फॉर्मूला एरर कोड्स (###, #DIV/0!)",
    definitionEnglish: "A consolidated master reference of essential LibreOffice Calc shortcut keys and common formula error codes (#DIV/0!, ###, #NAME?, #VALUE!, #REF!) encountered during spreadsheet processing.",
    definitionHindi: "लिब्रेऑफिस कैल्क की सभी महत्वपूर्ण शॉर्टकट कीज और फॉर्मूला एरर कोड्स (###, #DIV/0!, #NAME?, #REF!) का संपूर्ण मास्टर संग्रह।",
    simpleWords: "कैल्क के शॉर्टकट बटन और फॉर्मूला गलत होने पर स्क्रीन पर दिखने वाली गलतियों के संकेत।",
    examImportance: "Extreme (Error codes like ###, #DIV/0! and shortcuts like Insert Date/Time in CCC)",
    detailedExplanation: `### 1. सामान्य फॉर्मूला एरर कोड्स (Common Error Codes):
- **\`###\` (हैश चिन्ह)**: जब सेल की चौड़ाई कम हो और संख्या या दिनांक उसमें न समा रही हो (कॉलम को चौड़ा करने पर ठीक हो जाता है).
- **\`#DIV/0!\`**: जब किसी संख्या को **शून्य (0)** से या किसी खाली सेल से भाग दिया जाए (Division by Zero).
- **\`#NAME?\`**: जब फॉर्मूले में फंक्शन की स्पेलिंग गलत लिखी हो (जैसे \`=SUMM(A1:A5)\`).
- **\`#VALUE!\`**: जब गलत प्रकार का डेटा दिया जाए (जैसे संख्या में टेक्स्ट जोड़ना: \`=5 + "Ram"\`).
- **\`#REF!\`**: जब फॉर्मूले में दिया गया सेल संदर्भ डिलीट हो चुका हो (Invalid Cell Reference).

### 2. कैल्क की महत्वपूर्ण शॉर्टकट कीज (Calc Master Shortcuts):

| कार्य (Operation) | शॉर्टकट कुंजी (Shortcut Key) |
|---|---|
| Edit Cell (सेल संपादन) | **\`F2\`** |
| Line Break in Cell (सेल में नई लाइन) | **\`Ctrl + Enter\`** |
| Insert Current Date (वर्तमान दिनांक) | **\`Ctrl + ;\`** (कंट्रोल + सेमीकोलन) |
| Insert Current Time (वर्तमान समय) | **\`Ctrl + Shift + ;\`** |
| Insert Cells / Rows (नया जोड़ना) | **\`Ctrl + +\`** |
| Delete Cells / Rows (हटाना) | **\`Ctrl + -\`** |
| Select Entire Row (पूरी रो चुनना) | **\`Shift + Space\`** |
| Select Entire Column (पूरा कॉलम चुनना) | **\`Ctrl + Space\`** |
| AutoFilter (ऑटो-फिल्टर) | **\`Ctrl + Shift + L\`** |
| Toggle Cell Reference ($) | **\`Shift + F4\`** |
| Function Wizard | **\`Ctrl + F2\`** |
| Format Cells Dialog | **\`Ctrl + 1\`** |
| Currency Format ($ / ₹) | **\`Ctrl + Shift + 4\`** |
| Percentage Format (%) | **\`Ctrl + Shift + 5\`** |
| Show/Hide Formulas in sheet | **\`Ctrl + ~\`** (कंट्रोल + टिल्डे / बैकटिक) |`,
    realWorldAnalogy: "जैसे कार के डैशबोर्ड पर 'इंजन चेक' की लाइट जलती है, वैसे ही गलत फॉर्मूले पर #DIV/0! एरर आता है।",
    importantPoints: [
      "**Current Date** डालने की शॉर्टकट कुंजी **Ctrl + ;** होती है।",
      "**Current Time** डालने की शॉर्टकट कुंजी **Ctrl + Shift + ;** होती है।",
      "**`###`** एरर कॉलम की अपर्याप्त चौड़ाई के कारण आता है।",
      "**`#DIV/0!`** एरर किसी संख्या को शून्य से भाग देने पर आता है।"
    ],
    commonMistakes: [
      "### को कोई भयानक गणना दोष समझना (यह केवल कॉलम चौड़ाई बढ़ाने से तुरंत ठीक हो जाता है)।"
    ],
    examTips: [
      "Insert Date Shortcut ➔ **Ctrl + ;**",
      "Insert Time Shortcut ➔ **Ctrl + Shift + ;**",
      "Error on Division by Zero ➔ **#DIV/0!**",
      "Error on insufficient column width ➔ **###**"
    ],
    quickRevision: "Insert Date (Ctrl+;), Insert Time (Ctrl+Shift+;), ### (width issue), #DIV/0! (divide by 0), #NAME? (spelling error).",
    practiceAssignment: "सेल में '=10/0' लिखकर Enter दबाएं और देखें कि #DIV/0! एरर कैसे प्रदर्शित होता है।",
    microQuiz: [
      {
        question: "लिब्रेऑफिस कैल्क में वर्तमान दिनांक (Current Date) डालने की शॉर्टकट कुंजी क्या है?",
        options: [
          { id: "A", text: "Ctrl + ;" },
          { id: "B", text: "Ctrl + Shift + ;" },
          { id: "C", text: "Ctrl + D" },
          { id: "D", text: "Alt + Shift + D" }
        ],
        correctAnswer: "A",
        explanation: "कैल्क में 'Ctrl + ;' (सेमीकोलन) दबाने से वर्तमान सिस्टम डेट सीधे सेल में दर्ज हो जाती है।"
      },
      {
        question: "यदि कैल्क में किसी सेल में '###' प्रदर्शित हो रहा है, तो इसका क्या अर्थ है?",
        options: [
          { id: "A", text: "फॉर्मूला गलत है" },
          { id: "B", text: "सेल की चौड़ाई कंटेंट के लिए कम है" },
          { id: "C", text: "डेटा नष्ट हो चुका है" },
          { id: "D", text: "शून्य से विभाजन हुआ है" }
        ],
        correctAnswer: "B",
        explanation: "जब सेल में संख्या या दिनांक उस सेल की चौड़ाई से बड़ी होती है, तो स्थान की कमी के कारण '###' दिखाई देता है।"
      }
    ]
  }
];
