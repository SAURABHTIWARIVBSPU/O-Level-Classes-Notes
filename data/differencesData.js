// Curated Concept Comparison / Difference Data for O-Level M2-R5.1

export const differencesData = [
  {
    id: "internet-vs-www",
    unit: 1,
    unitName: "Introduction to Web Design",
    title: "Internet vs. WWW (World Wide Web)",
    hindiTitle: "इंटरनेट बनाम वर्ल्ड वाइड वेब",
    analogy: "Internet वैश्विक हाईवे (सड़क नेटवर्क) है, जबकि WWW उस सड़क पर चलने वाली कारें (Hypertext सूचना) हैं।",
    comparison: [
      { feature: "Full Form", itemA: "Interconnected Network", itemB: "World Wide Web" },
      { feature: "What is it?", itemA: "हार्डवेयर और नेटवर्कों का वैश्विक भौतिक जाल (Infrastructure)।", itemB: "इंटरनेट पर चलने वाली हाइपरटेक्स्ट सूचना सेवा (Software/Service)।" },
      { feature: "Inventors", itemA: "Vinton Cerf & Bob Kahn (1970s, TCP/IP)", itemB: "Tim Berners-Lee (1989, CERN)" },
      { feature: "Layer", itemA: "Network & Transport Layers (IP, TCP)", itemB: "Application Layer (HTTP, HTTPS)" },
      { feature: "Services Included", itemA: "WWW, Email, FTP, Telnet, VoIP, IoT", itemB: "केवल Webpages, HTML, Websites" },
      { feature: "Dependency", itemA: "WWW के बिना भी काम कर सकता है।", itemB: "इंटरनेट के बिना काम नहीं कर सकता।" }
    ]
  },
  {
    id: "website-vs-webpage",
    unit: 1,
    unitName: "Introduction to Web Design",
    title: "Website vs. Webpage",
    hindiTitle: "वेबसाइट बनाम वेबपेज",
    analogy: "Website एक पूरी किताब (Book) है, जबकि Webpage उस किताब का एक एकल पन्ना (Page) है।",
    comparison: [
      { feature: "Definition", itemA: "एक डोमेन के तहत जुड़े कई वेबपेजों का संपूर्ण संग्रह।", itemB: "इंटरनेट पर उपलब्ध एक अकेला डिजिटल HTML दस्तावेज़।" },
      { feature: "URL Structure", itemA: "मुख्य डोमेन (उदा. https://nielit.gov.in)", itemB: "विशिष्ट पाथ (उदा. https://nielit.gov.in/syllabus.html)" },
      { feature: "Development Time", itemA: "डिजाइन और विकास में अधिक समय लगता है।", itemB: "एकल पेज को तेजी से बनाया जा सकता है।" },
      { feature: "Content Scope", itemA: "पूरी संस्था या विषय से संबंधित संपूर्ण सामग्री।", itemB: "एक विशिष्ट विषय या फार्म पर केंद्रित सामग्री।" }
    ]
  },
  {
    id: "frontend-vs-backend",
    unit: 1,
    unitName: "Introduction to Web Design",
    title: "Front-End vs. Back-End",
    hindiTitle: "फ्रंट-एंड बनाम बैक-एंड",
    analogy: "Frontend रेस्टोरेंट का सुंदर डाइनिंग हॉल है; Backend उसका भीतरी किचन और स्टोररूम है।",
    comparison: [
      { feature: "Where It Runs", itemA: "यूजर के वेब ब्राउज़र (Client-Side) में।", itemB: "वेब सर्वर (Server-Side) पर।" },
      { feature: "User Visibility", itemA: "यूजर को सीधे स्क्रीन पर दिखाई देता है (UI/UX)।", itemB: "यूजर से पूरी तरह छिपा रहता है (Business Logic)।" },
      { feature: "Core Technologies", itemA: "HTML5, CSS3, JavaScript, W3.CSS", itemB: "Node.js, Python, PHP, Java, SQL, MongoDB" },
      { feature: "Main Role", itemA: "यूजर इंटरफेस डिजाइन करना और इनपुट लेना।", itemB: "डेटाबेस संचालन, ऑथेंटिकेशन और सर्वर सुरक्षा।" }
    ]
  },
  {
    id: "client-scripting-vs-server-scripting",
    unit: 1,
    unitName: "Introduction to Web Design",
    title: "Client-Side Scripting vs. Server-Side Scripting",
    hindiTitle: "क्लाइंट-साइड बनाम सर्वर-साइड स्क्रिप्टिंग",
    analogy: "Client-side आपके कैलकुलेटर जैसा है; Server-side बैंक के मुख्य कंप्यूटर जैसा है।",
    comparison: [
      { feature: "Execution Location", itemA: "क्लाइंट के वेब ब्राउज़र में निष्पादित होता है।", itemB: "वेब सर्वर की मशीन पर निष्पादित होता है।" },
      { feature: "Source Code Visibility", itemA: "यूजर 'View Source' से कोड देख सकता है।", itemB: "यूजर कोड कभी नहीं देख सकता, केवल आउटपुट HTML मिलता है।" },
      { feature: "Speed & Response", itemA: "अत्यंत तेज, सर्वर नेटवर्क कॉल की आवश्यकता नहीं।", itemB: "नेटवर्क स्पीड और सर्वर लोड पर निर्भर करता है।" },
      { feature: "Primary Languages", itemA: "JavaScript, VBScript (ऐतिहासिक)", itemB: "PHP, Python, Node.js, Ruby, Java" },
      { feature: "Database Access", itemA: "सीधे डेटाबेस से कनेक्ट नहीं हो सकता।", itemB: "डेटाबेस को सुरक्षित रूप से क्वेरी कर सकता है।" }
    ]
  },
  {
    id: "static-vs-dynamic-website",
    unit: 1,
    unitName: "Introduction to Web Design",
    title: "Static Website vs. Dynamic Website",
    hindiTitle: "स्टैटिक बनाम डायनामिक वेबसाइट",
    analogy: "Static छपे हुए अखबार जैसा है; Dynamic सोशल मीडिया फीड जैसा है जो यूजर के अनुसार बदलता है।",
    comparison: [
      { feature: "Content Change", itemA: "सभी यूजर्स के लिए हमेशा एक समान निश्चित कंटेंट।", itemB: "यूजर, समय और इनपुट के अनुसार बदलता हुआ कंटेंट।" },
      { feature: "Database", itemA: "डेटाबेस की कोई आवश्यकता नहीं होती।", itemB: "डेटाबेस (MySQL, MongoDB) अनिवार्य होता है।" },
      { feature: "Technologies", itemA: "शुद्ध HTML, CSS और सरल जावास्क्रिप्ट।", itemB: "HTML, CSS, JS + Server Language + Database" },
      { feature: "Speed & Cost", itemA: "लोडिंग बेहद तेज, होस्टिंग बहुत सस्ती।", itemB: "लोडिंग में थोड़ा समय लगता है, होस्टिंग महंगी।" },
      { feature: "Examples", itemA: "व्यक्तिगत पोर्टफोलियो, रेस्टोरेंट का मेनू कार्ड।", itemB: "Facebook, Amazon, YouTube, NIELIT स्टूडेंट पोर्टल।" }
    ]
  },
  {
    id: "code-editor-vs-word-processor",
    unit: 2,
    unitName: "Editors",
    title: "Code Editor (Notepad++) vs. Word Processor (MS Word)",
    hindiTitle: "कोड एडिटर बनाम वर्ड प्रोसेसर",
    analogy: "Code Editor इलेक्ट्रीशियन के पेचकस जैसा सटीक है; Word Processor सजावटी पेंटिंग ब्रश जैसा है।",
    comparison: [
      { feature: "Output Format", itemA: "शुद्ध प्लेन टेक्स्ट (Plain ASCII / UTF-8)।", itemB: "रिच टेक्स्ट फॉर्मेटिंग (XML, बाइनरी, फ़ॉन्ट्स, मार्जिन)।" },
      { feature: "HTML Suitability", itemA: "100% उपयुक्त; सिंटैक्स हाइलाइटिंग व ऑटो-कंप्लीट।", itemB: "अनुपयुक्त; बाइनरी कोड जोड़कर HTML को क्रैश कर देता है।" },
      { feature: "File Extensions", itemA: ".html, .css, .js, .py, .txt", itemB: ".docx, .doc, .rtf" },
      { feature: "Features", itemA: "लाइन नंबर, कोड फोल्डिंग, रेगुलर एक्सप्रेशन।", itemB: "स्पेल चेक, हेडर-फूटर, पेज बॉर्डर, प्रिंट लेआउट।" }
    ]
  },
  {
    id: "html-vs-css",
    unit: 4,
    unitName: "CSS Basics",
    title: "HTML vs. CSS",
    hindiTitle: "HTML बनाम CSS",
    analogy: "HTML घर की ईंटें और दीवारें (ढांचा) हैं; CSS घर का पेंट, पर्दे और इंटीरियर डिजाइन है।",
    comparison: [
      { feature: "Full Form", itemA: "HyperText Markup Language", itemB: "Cascading Style Sheets" },
      { feature: "Primary Role", itemA: "वेबपेज का कंटेंट और संरचना (Skeleton) बनाना।", itemB: "वेबपेज की सुंदरता, लेआउट और स्टाइल तय करना।" },
      { feature: "Syntax Unit", itemA: "टैग्स (<tag> ... </tag>)", itemB: "रूल्स (selector { property: value; })" },
      { feature: "Extension", itemA: ".html या .htm", itemB: ".css" }
    ]
  },
  {
    id: "id-vs-class-selector",
    unit: 4,
    unitName: "CSS",
    title: "ID Selector vs. Class Selector",
    hindiTitle: "ID सिलेक्टर बनाम Class सिलेक्टर",
    analogy: "ID आपका आधार कार्ड नंबर (अद्वितीय) है; Class आपकी कक्षा के विद्यार्थियों का समूह (पुनः प्रयोज्य) है।",
    comparison: [
      { feature: "Syntax in CSS", itemA: "#myElement { color: red; } (Hash)", itemB: ".myClass { color: blue; } (Dot)" },
      { feature: "Usage per Page", itemA: "एक पेज में एक ID केवल 1 बार उपयोग हो सकती है (Unique)।", itemB: "एक ही क्लास अनगिनत एलिमेंट्स पर बार-बार लग सकती है।" },
      { feature: "Specificity (Priority)", itemA: "उच्च प्राथमिकता (Specificity: 100)।", itemB: "मध्यम प्राथमिकता (Specificity: 10)।" },
      { feature: "HTML Attribute", itemA: '<div id="header">', itemB: '<p class="lead-text">' }
    ]
  },
  {
    id: "div-vs-span",
    unit: 3,
    unitName: "HTML Basics",
    title: "<div> Tag vs. <span> Tag",
    hindiTitle: "<div> टैग बनाम <span> टैग",
    analogy: "<div> बड़ा कंटेनर बॉक्स है; <span> टेक्स्ट के बीच का एक छोटा शब्द-हाइलाइटर है।",
    comparison: [
      { feature: "Display Type", itemA: "Block-level Element (पूरी चौड़ाई घेरता है)।", itemB: "Inline Element (केवल अपनी सामग्री जितनी जगह लेता है)।" },
      { feature: "Line Break", itemA: "हमेशा नई लाइन से शुरू होता है।", itemB: "उसी लाइन में प्रवाहित होता है, कोई ब्रेक नहीं।" },
      { feature: "Nested Contents", itemA: "अन्य ब्लॉक व इनलाइन एलिमेंट्स को समाहित कर सकता है।", itemB: "केवल टेक्स्ट या अन्य इनलाइन एलिमेंट्स को रखता है।" },
      { feature: "Primary Use", itemA: "पेज का लेआउट, सेक्शन और कार्ड्स बनाना।", itemB: "पैराग्राफ के किसी एक शब्द या वाक्य को रंगना/स्टाइल करना।" }
    ]
  },
  {
    id: "ol-vs-ul-vs-dl",
    unit: 3,
    unitName: "HTML Basics",
    title: "Ordered List (<ol>) vs. Unordered List (<ul>) vs. Definition List (<dl>)",
    hindiTitle: "ऑर्डर्ड बनाम अनऑर्डर्ड बनाम डेफिनिशन लिस्ट",
    analogy: "ol रेसिपी के चरण हैं; ul किराने की खरीदारी सूची है; dl शब्दकोश (डिक्शनरी) है।",
    comparison: [
      { feature: "Bullet Type", itemA: "संख्याएं, रोमन अंक, या वर्णमाला (1, A, i)।", itemB: "गोल बुलेट्स, डिस्क, सर्कल या स्क्वायर।", itemC: "कोई बुलेट नहीं; शीर्षक और इंडेंटेड विवरण।" },
      { feature: "Tag Structure", itemA: "<ol> <li>...</li> </ol>", itemB: "<ul> <li>...</li> </ul>", itemC: "<dl> <dt>...</dt> <dd>...</dd> </dl>" },
      { feature: "Order Importance", itemA: "क्रम महत्वपूर्ण होता है (Step 1, Step 2)।", itemB: "क्रम महत्वपूर्ण नहीं होता (Any order)।", itemC: "शब्दावली और उसकी परिभाषा हेतु।" }
    ]
  },
  {
    id: "tr-vs-th-vs-td",
    unit: 3,
    unitName: "HTML Basics",
    title: "Table Row (<tr>) vs. Header (<th>) vs. Data (<td>)",
    hindiTitle: "<tr> बनाम <th> बनाम <td>",
    analogy: "tr पूरी लाइन है; th कॉलम का शीर्षक है; td उस लाइन का सामान्य डेटा है।",
    comparison: [
      { feature: "Purpose", itemA: "टेबल में एक क्षैतिज पंक्ति (Row) बनाना।", itemB: "कॉलम का शीर्षक (Header Cell) दर्शाना।", itemC: "पंक्ति के अंदर वास्तविक डेटा (Data Cell) भरना।" },
      { feature: "Default Font Weight", itemA: "लागू नहीं (कंटेनर)", itemB: "Bold (मोटा टेक्स्ट)", itemC: "Normal (सामान्य टेक्स्ट)" },
      { feature: "Default Alignment", itemA: "लागू नहीं", itemB: "Center (केंद्र में संरेखित)", itemC: "Left (बाईं ओर संरेखित)" }
    ]
  },
  {
    id: "rowspan-vs-colspan",
    unit: 3,
    unitName: "HTML Basics",
    title: "Rowspan vs. Colspan Attributes",
    hindiTitle: "Rowspan बनाम Colspan एट्रिब्यूट्स",
    analogy: "Rowspan लिफ्ट जैसा लंबवत जोड़ता है; Colspan पुल जैसा क्षैतिज जोड़ता है।",
    comparison: [
      { feature: "Merging Direction", itemA: "लंबवत (Vertical) - ऊपर से नीचे।", itemB: "क्षैतिज (Horizontal) - बाएं से दाएं।" },
      { feature: "What It Merges", itemA: "दो या अधिक पंक्तियों (Rows) की सेल्स को मिलाता है।", itemB: "दो या अधिक स्तंभों (Columns) की सेल्स को मिलाता है।" },
      { feature: "Example Syntax", itemA: '<td rowspan="2">Two Rows</td>', itemB: '<th colspan="3">Three Columns</th>' }
    ]
  },
  {
    id: "w3css-vs-bootstrap",
    unit: 5,
    unitName: "CSS Framework",
    title: "W3.CSS vs. Bootstrap Framework",
    hindiTitle: "W3.CSS बनाम Bootstrap",
    analogy: "W3.CSS हल्की साइकिल जैसी है; Bootstrap भारी कार जैसी है जिसमें अधिक पुर्जे हैं।",
    comparison: [
      { feature: "JavaScript Dependency", itemA: "शून्य (Pure CSS, कोई JS या jQuery नहीं)।", itemB: "पॉपर और जावास्क्रिप्ट फाइलों की आवश्यकता होती है।" },
      { feature: "File Size", itemA: "अत्यंत छोटा (~23 KB Minified)।", itemB: "बड़ा (~160+ KB CSS + JS)।" },
      { feature: "Learning Curve", itemA: "अत्यंत सरल, क्लास के नाम प्राकृतिक अंग्रेजी हैं।", itemB: "मध्यम, अधिक जटिल क्लास संरचना।" },
      { feature: "Speed", itemA: "सुपरफास्ट लोडिंग गति।", itemB: "अतिरिक्त स्क्रिप्ट्स के कारण थोड़ी धीमी गति।" },
      { feature: "Syllabus Status", itemA: "NIELIT O-Level M2-R5.1 का आधिकारिक भाग।", itemB: "सिलेबस में सीधे शामिल नहीं।" }
    ]
  },
  {
    id: "javascript-vs-java",
    unit: 6,
    unitName: "JavaScript",
    title: "JavaScript vs. Java",
    hindiTitle: "जावास्क्रिप्ट बनाम जावा (महत्वपूर्ण परीक्षा अंतर)",
    analogy: "कार (Car) और कालीन (Carpet) में जितना अंतर है, उतना ही Java और JavaScript में है!",
    comparison: [
      { feature: "Language Paradigm", itemA: "लाइटवेट, इंटरप्रिटेड क्लाइंट-साइड स्क्रिप्टिंग।", itemB: "भारी, क्लास-आधारित कम्पाइल्ड ऑब्जेक्ट-ओरिएंटेड भाषा।" },
      { feature: "Developer / Origin", itemA: "Brendan Eich (Netscape, 1995)।", itemB: "James Gosling (Sun Microsystems, 1995)।" },
      { feature: "Execution Environment", itemA: "सीधे वेब ब्राउज़र (V8, SpiderMonkey) में।", itemB: "Java Virtual Machine (JVM) में।" },
      { feature: "Type System", itemA: "Dynamically Typed (वेरिएबल का टाइप रनटाइम पर तय)।", itemB: "Statically Typed (वेरिएबल टाइप पहले बताना अनिवार्य)।" }
    ]
  },
  {
    id: "javascript-vs-angularjs",
    unit: 6,
    unitName: "JavaScript & AngularJS",
    title: "JavaScript vs. AngularJS",
    hindiTitle: "जावास्क्रिप्ट बनाम एंगुलरजेएस",
    analogy: "JavaScript कच्ची ईंटें और सीमेंट है; AngularJS पहले से बना हुआ घर का प्रीफैब ढांचा है।",
    comparison: [
      { feature: "Type", itemA: "मूल प्रोग्रामिंग भाषा (Core Programming Language)।", itemB: "जावास्क्रिप्ट पर आधारित ओपन-सोर्स MVC फ्रेमवर्क।" },
      { feature: "Data Binding", itemA: "मैनुअल DOM मैनिपुलेशन (document.getElementById)।", itemB: "Two-Way Data Binding (ng-model द्वारा स्वचालित)।" },
      { feature: "Architecture", itemA: "कोई निश्चित आर्किटेक्चर तय नहीं होता।", itemB: "सख्त MVC (Model-View-Controller) आर्किटेक्चर।" },
      { feature: "Main Focus", itemA: "सामान्य वेबपेज इंटरेक्शन और वैलिडेशन।", itemB: "सिंगल पेज ऐप्लिकेशन्स (SPAs) का त्वरित विकास।" }
    ]
  },
  {
    id: "raster-vs-vector",
    unit: 7,
    unitName: "Photo Editor",
    title: "Raster (Bitmap) vs. Vector Graphics",
    hindiTitle: "रास्टर बनाम वेक्टर ग्राफिक्स",
    analogy: "Raster मोज़ेक टाइल्स की तस्वीर है; Vector कम्पास और स्केल से खींची गई ज्यामिति है।",
    comparison: [
      { feature: "Base Unit", itemA: "पिक्सल्स (Pixels) का ग्रिड।", itemB: "गणितीय सूत्र (Points, Curves, Paths)।" },
      { feature: "Zoom / Scaling", itemA: "ज़ूम करने पर पिक्सेल फटते हैं और छवि धुंधली होती है।", itemB: "अनंत स्केलेबिलिटी; गुणवत्ता कभी खराब नहीं होती।" },
      { feature: "File Formats", itemA: "JPEG, PNG, GIF, BMP, WebP", itemB: "SVG, EPS, AI, CDR" },
      { feature: "Ideal Use", itemA: "प्राकृतिक फोटोग्राफ और जटिल चित्र।", itemB: "कंपनी के लोगो, आइकॉन्स और टाइपोग्राफी।" }
    ]
  },
  {
    id: "search-engine-vs-meta-search-engine",
    unit: 8,
    unitName: "Web Publishing",
    title: "Search Engine vs. Meta Search Engine",
    hindiTitle: "सर्च इंजन बनाम मेटा सर्च इंजन",
    analogy: "Search Engine एक अकेला बड़ा पुस्तकालय है; Meta Search Engine कई पुस्तकालयों से किताबें लाकर देने वाला सहायक है।",
    comparison: [
      { feature: "Database", itemA: "अपना स्वयं का विशाल वेब इंडेक्स डेटाबेस होता है।", itemB: "अपना डेटाबेस नहीं होता; अन्य इंजनों की क्वेरी करता है।" },
      { feature: "Crawling Spiders", itemA: "अपने वेब क्रॉलर्स (Googlebot आदि) चलाता है।", itemB: "अपने क्रॉलर्स नहीं होते।" },
      { feature: "Examples", itemA: "Google, Bing, Yahoo, DuckDuckGo", itemB: "Dogpile, MetaCrawler, Info.com" },
      { feature: "Search Results", itemA: "अपने एल्गोरिदम के आधार पर रैंक किए गए परिणाम।", itemB: "कई सर्च इंजनों के संयुक्त व डुप्लीकेट-रहित परिणाम।" }
    ]
  }
];

export const masterDifferences = differencesData;
