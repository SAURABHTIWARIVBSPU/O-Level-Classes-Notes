// Unit 8: Web Publishing and Browsing - Complete Topic Notes

export const unit8Topics = [
  {
    id: "u8-t1",
    slug: "overview-of-web-publishing",
    unit: 8,
    unitSlug: "unit-8",
    unitTitle: "Web Publishing and Browsing",
    title: "Overview of Web Publishing",
    hindiTitle: "वेब पब्लिशिंग का परिचय एवं संपूर्ण जीवनचक्र",
    definitionEnglish: "Web Publishing (Online Publishing) is the end-to-end process of creating, configuring, testing, uploading, and maintaining digital web documents, multimedia, and codebases onto an internet-connected web server so they are publicly accessible via domain names.",
    definitionHindi: "वेब पब्लिशिंग (ऑनलाइन पब्लिशिंग) डिजिटल वेब दस्तावेज़ों, मल्टीमीडिया और कोड को बनाने, टेस्ट करने, डोमेन खरीदने, होस्टिंग सर्वर पर अपलोड करने और उनका रखरखाव करने की वह संपूर्ण प्रक्रिया है जिससे वे इंटरनेट पर दुनिया भर में सार्वजनिक रूप से सुलभ हो सकें।",
    simpleWords: "वेबसाइट को अपने लैपटॉप से बाहर निकालकर इंटरनेट के मुख्य सर्वर पर लाइव करना ताकि दुनिया का कोई भी व्यक्ति आपका डोमेन (जैसे `mysite.com`) लिखकर आपकी वेबसाइट देख सके, वेब पब्लिशिंग कहलाता है।",
    whyImportant: "वेब डिजाइनिंग का अंतिम लक्ष्य ही वेबसाइट को इंटरनेट पर पब्लिश करना है। जब तक वेबसाइट लाइव नहीं होती, वह केवल डेवलपर के कंप्यूटर की एक निजी फाइल होती है।",
    detailedExplanation: `### वेब पब्लिशिंग का संपूर्ण 6-चरणीय जीवनचक्र (Web Publishing Lifecycle):
1. **Planning & Design (योजना एवं डिजाइन):** साइट का नक्शा (Wireframe) बनाना, रंग और लेआउट तय करना।
2. **Development (कोडिंग):** HTML, CSS, JavaScript और W3.CSS से पेजों का निर्माण।
3. **Local Testing (लोकल टेस्टिंग):** विभिन्न ब्राउज़रों (Chrome, Firefox) और स्क्रीनों (मोबाइल, लैपटॉप) पर कोड टेस्ट करना।
4. **Domain Registration (डोमेन खरीदना):** अपनी वेबसाइट का नाम (उदा. \`myexamhub.in\`) GoDaddy या Namecheap जैसे रजिस्ट्रार से पंजीकृत करना।
5. **Web Hosting Setup (होस्टिंग स्पेस लेना):** 24x7 चलने वाले वेब सर्वर पर स्टोरेज स्पेस खरीदना।
6. **Publishing / Deployment (फाइल अपलोड):** FTP क्लाइंट (जैसे **FileZilla**) या Git के जरिए अपनी HTML फाइलों को सर्वर के \`public_html\` फोल्डर में अपलोड करना।
7. **SEO & Maintenance (रखरखाव):** गूगल सर्च कंसोल में साइट सबमिट करना और नियमित अपडेट देना।`,
    syntax: `Publishing Lifecycle Pipeline:
Plan -> Code -> Test Locally -> Buy Domain & Host -> FTP Upload -> Go Live!`,
    codeExample: `<!-- Production-ready index.html root file ready for publishing -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="robots" content="index, follow">
  <title>Published Live Webpage</title>
</head>
<body>
  <h1>Website is Officially Live on the World Wide Web!</h1>
  <p>Uploaded via Secure FTP to Production Web Server.</p>
</body>
</html>`,
    outputExplanation: "यह फाइल सर्वर पर अपलोड होने के बाद दुनिया के किसी भी कोने से डोमेन नाम द्वारा खोली जा सकती है।",
    realWorldAnalogy: "जैसे एक लेखक किताब लिखता है (Coding), प्रूफरीड करता है (Testing), फिर प्रिंटिंग प्रेस में छपवाकर (Hosting) दुकानों में बंटवा देता है (Publishing) ताकि सब पढ़ सकें।",
    importantPoints: [
      "वेब पब्लिशिंग का पहला पेज हमेशा index.html होना चाहिए।",
      "डोमेन नाम वेबसाइट का पता है और होस्टिंग उसका घर है।",
      "फाइल अपलोड करने का सबसे लोकप्रिय प्रोटोकॉल FTP है।"
    ],
    commonMistakes: [
      "सर्वर पर फाइल अपलोड करते समय मुख्य पेज का नाम `home.html` रख देना (वेब सर्वर केवल `index.html` को स्वतः खोजता है)।"
    ],
    examPerspective: "वेब पब्लिशिंग के विभिन्न चरण, डोमेन और होस्टिंग की भूमिका, और FTP की कार्यप्रणाली पर सीधे प्रश्न आते हैं।",
    quickRevision: "वेब पब्लिशिंग = डिजाइन -> टेस्ट -> डोमेन -> होस्टिंग -> FTP अपलोड -> लाइव मेंटेनेंस।",
    relatedTopics: ["web-hosting-basics", "components-of-web-publishing", "publishing-tools"],
    practiceTask: "वेब पब्लिशिंग के सभी 6 चरणों का एक साफ फ्लोचार्ट अपनी कॉपी में बनाएं।"
  },
  {
    id: "u8-t2",
    slug: "web-page-design-considerations-and-principles",
    unit: 8,
    unitSlug: "unit-8",
    unitTitle: "Web Publishing and Browsing",
    title: "Web Page Design Considerations and Principles",
    hindiTitle: "वेबसाइट डिजाइन के सिद्धांत एवं विचार (KISS, 3-Click Rule, WAI)",
    definitionEnglish: "Web Page Design Considerations and Principles are foundational human-computer interaction guidelines governing website usability, including simplicity (KISS Principle), navigation efficiency (3-Click Rule), visual hierarchy, color contrast, typography readability, and web accessibility (WAI / WCAG standards).",
    definitionHindi: "वेबसाइट डिजाइन के सिद्धांत उपयोगकर्ता-कंप्यूटर इंटरैक्शन के वे मूलभूत नियम हैं जो वेबसाइट की उपयोगिता को नियंत्रित करते हैं; इनमें सादगी (KISS सिद्धांत), नेविगेशन दक्षता (3-Click Rule), दृश्य पदानुक्रम, कंट्रास्ट, पठनीयता और वेब एक्सेसिबिलिटी (WAI/WCAG मानक) शामिल हैं।",
    simpleWords: "यह एक अच्छी और बुरी वेबसाइट के बीच का अंतर तय करने वाले नियम हैं: साइट ऐसी हो जो इतनी आसान हो कि कोई भी बुजुर्ग या बच्चा भी उसे बिना अटके चला सके, और 3 क्लिक के अंदर अपनी मनचाही जानकारी पा सके।",
    whyImportant: "यदि वेबसाइट सुंदर हो लेकिन उसे चलाना बहुत कठिन हो, तो यूजर तुरंत साइट बंद करके भाग जाता है। उपयोगिता (Usability) ही वेबसाइट की सफलता की कुंजी है।",
    detailedExplanation: `### 7 स्वर्ण वेब डिजाइन सिद्धांत:
1. **KISS Principle ("Keep It Simple, Stupid"):**
   - वेबसाइट को अनावश्यक जटिल एनिमेशन और रंगों से भरने के बजाय साफ-सुथरा और सीधा रखना।
2. **The 3-Click Rule (3-क्लिक का नियम - अति महत्वपूर्ण!):**
   - यूजर को होमपेज से वेबसाइट की किसी भी जानकारी या उत्पाद तक पहुंचने में **अधिकतम 3 क्लिक्स** से ज्यादा न लगें।
3. **Visual Hierarchy (दृश्य पदानुक्रम):**
   - सबसे महत्वपूर्ण हेडिंग बड़ी (\`<h1>\`), उप-शीर्षक मध्यम (\`<h2>\`) और सामान्य टेक्स्ट छोटा (\`<p>\`) होना चाहिए ताकि नजरें अपने आप जरूरी चीज पर जाएं।
4. **Consistency (एकरूपता):**
   - पूरी वेबसाइट में फॉन्ट, बटन स्टाइल और कलर पैलेट एक समान होना चाहिए।
5. **Page Loading Speed (गति):**
   - इमेजेस ऑप्टिमाइज्ड होनी चाहिए ताकि पेज **2 से 3 सेकंड** के अंदर खुल जाए।
6. **Mobile Responsiveness:**
   - 60%+ ट्रैफिक मोबाइल से आता है, अतः साइट मोबाइल पर परफेक्ट दिखे।
7. **Web Accessibility (WAI / WCAG 2.1):**
   - दिव्यांग (विशेषकर दृष्टिबाधित) व्यक्तियों के लिए भी वेबसाइट सुलभ होनी चाहिए (इमेजेस पर \`alt\` टेक्स्ट, हाई कंट्रास्ट फोंट, कीबोर्ड नेविगेशन)।`,
    syntax: `Key Design Rules:
KISS Rule   : Keep It Simple, Stupid
3-Click Rule: Any content reachable within <= 3 clicks
F-Pattern   : Eye-tracking movement on text-heavy pages`,
    codeExample: `<!-- Accessible, Well-Structured Content Snippet -->
<article>
  <!-- Clear Visual Hierarchy -->
  <h1 style="font-size: 28px; color: #0284c7;">Module M2-R5.1 Guidelines</h1>
  <p style="font-size: 16px; line-height: 1.6; color: #334155;">
    High contrast text with 1.6 line-height ensures optimal readability.
  </p>
  <!-- Accessible Button -->
  <button style="background: #0284c7; color: white; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer;" aria-label="Start Learning Web Design">
    Start Learning
  </button>
</article>`,
    outputExplanation: "हाई-कंट्रास्ट फोंट और स्पष्ट पदानुक्रम के कारण यह लेआउट आंखों पर कोई तनाव नहीं देता और आसानी से पढ़ा जाता है।",
    realWorldAnalogy: "जैसे एक सुपरमार्केट में ऊपर बड़े-बड़े बोर्ड लगे होते हैं 'साबुन', 'दालें', 'बिस्कुट' ताकि ग्राहक 2 मिनट में सामान ढूंढ ले, वही काम वेबसाइट में सरल डिजाइन करता है।",
    importantPoints: [
      "KISS का पूर्ण रूप: Keep It Simple, Stupid.",
      "3-Click Rule कहता है कि कोई भी जानकारी 3 क्लिक में मिलनी चाहिए।",
      "WAI का पूर्ण रूप: Web Accessibility Initiative (W3C का भाग)।",
      "वेब पर यूजर टेक्स्ट को 'F-Pattern' में पढ़ते हैं।"
    ],
    commonMistakes: [
      "सफेद बैकग्राउंड पर हल्का पीला या हल्का स्लेटी टेक्स्ट लिखना (जिससे कंट्रास्ट कम हो जाता है और पढ़ना मुश्किल हो जाता है)।"
    ],
    examPerspective: "KISS सिद्धांत का अर्थ, 3-Click Rule, WAI का पूर्ण रूप, और वेब एक्सेसिबिलिटी के दिशा-निर्देशों पर प्रश्न पूछे जाते हैं।",
    quickRevision: "KISS = सादगी; 3-Click Rule = 3 क्लिक में जानकारी; WAI = दिव्यांगों के लिए सुलभता; Visual Hierarchy = स्पष्ट पदानुक्रम।",
    relatedTopics: ["overview-of-web-publishing", "responsive-web-designing", "sgml"],
    practiceTask: "अपनी पसंदीदा वेबसाइट पर जाएं और चेक करें कि क्या आप होमपेज से कॉन्टैक्ट फॉर्म तक 3 क्लिक में पहुंच पा रहे हैं।"
  },
  {
    id: "u8-t3",
    slug: "sgml",
    unit: 8,
    unitSlug: "unit-8",
    unitTitle: "Web Publishing and Browsing",
    title: "SGML (Standard Generalized Markup Language)",
    hindiTitle: "SGML (Standard Generalized Markup Language) — HTML का पूर्वज",
    definitionEnglish: "SGML (Standard Generalized Markup Language, ISO 8879:1986) is a foundational international meta-language standard used to define generalized markup languages, serving as the direct parent specification from which HTML and XML were derived.",
    definitionHindi: "SGML (स्टैंडर्ड जनरलाइज्ड मार्कअप लैंग्वेज, ISO 8879:1986) एक अंतरराष्ट्रीय मानक मेटा-लैंग्वेज है जिसका उपयोग अन्य मार्कअप भाषाओं को परिभाषित करने के लिए किया जाता है; यह वह मूल विनिर्देश है जिससे HTML और XML दोनों उत्पन्न हुए हैं।",
    simpleWords: "SGML सभी मार्कअप भाषाओं की 'दादी' है! SGML इतनी बड़ी और जटिल थी कि आम वेब के लिए उसे छोटा और सरल करके Tim Berners-Lee ने HTML बनाया, और डेटा ट्रांसफर के लिए XML बनाया।",
    whyImportant: "परीक्षा में यह प्रश्न हर साल आता है कि 'HTML किस भाषा से व्युत्पन्न (Derived) हुई है?' इसका सही उत्तर SGML है।",
    detailedExplanation: `### 1. SGML का इतिहास:
- **1986:** अंतरराष्ट्रीय मानकीकरण संगठन (ISO) ने **ISO 8879** के रूप में SGML को मानक घोषित किया।
- **मेटा-लैंग्वेज क्या है?** ऐसी भाषा जो अन्य भाषाएं बनाने के नियम तय करती है।

### 2. SGML का पारिवारिक वृक्ष (Family Tree):
\`\`\`
                     +----------------+
                     |  SGML (1986)   |  (ISO 8879 - मातृ भाषा)
                     +--------+-------+
                              |
            +-----------------+-----------------+
            |                                   |
            ▼                                   ▼
    +---------------+                   +---------------+
    |  HTML (1991)  |                   |  XML (1998)   |
    |  (वेबपेज हेतु) |                   |  (डेटा शेयरिंग)|
    +---------------+                   +---------------+
\`\`\`

### 3. DTD (Document Type Definition):
- SGML और पुराने HTML में DTD का उपयोग यह बताने के लिए किया जाता था कि कौन से टैग्स और एट्रिब्यूट्स मान्य हैं।
- यही कारण है कि HTML4 में बहुत लंबा \`<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01...>\` लिखना पड़ता था।
- **नोट:** HTML5 अब तकनीकी रूप से SGML पर आधारित नहीं है, इसलिए इसका डॉक्युटाइप केवल \`<!DOCTYPE html>\` होता है।`,
    syntax: `SGML ISO Standard:
ISO 8879:1986
Parent of: HTML, XML, XHTML`,
    codeExample: `<!-- Historical SGML-based HTML4 Doctype vs Modern HTML5 -->
<!-- Old SGML DTD Reference (HTML 4.01):
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
-->

<!-- Modern HTML5 (No SGML DTD required!): -->
<!DOCTYPE html>
<html>
<body>
  <p>HTML was derived from SGML (ISO 8879:1986).</p>
</body>
</html>`,
    outputExplanation: "ब्राउज़र HTML5 डॉक्युटाइप को सीधे प्रोसेस करता है बिना किसी भारी SGML पार्सर के।",
    realWorldAnalogy: "जैसे संस्कृत कई आधुनिक भारतीय भाषाओं की जननी है, वैसे ही SGML वेब की सभी मार्कअप भाषाओं (HTML और XML) की जननी है।",
    importantPoints: [
      "SGML का पूर्ण रूप: Standard Generalized Markup Language.",
      "ISO मानक संख्या: ISO 8879 (1986)।",
      "HTML और XML दोनों SGML से व्युत्पन्न हुए हैं।",
      "HTML5 को SGML के सख्त बंधनों से मुक्त कर दिया गया है।"
    ],
    commonMistakes: [
      "यह सोचना कि HTML सीधे C भाषा से बनी है (HTML पूरी तरह SGML से बनी मार्कअप भाषा है)।"
    ],
    examPerspective: "प्रश्न: 'HTML किस भाषा का सबसेट या वंशज है?' (SGML), 'SGML का पूर्ण रूप क्या है?' (Standard Generalized Markup Language).",
    quickRevision: "SGML (ISO 8879:1986) मेटा-लैंग्वेज है जिससे HTML (वेबपेज) और XML (डेटा) व्युत्पन्न हुए।",
    relatedTopics: ["overview-of-web-publishing", "html-introduction", "documents-interchange-standards"],
    practiceTask: "अपनी कॉपी में SGML, HTML और XML के बीच संबंध दर्शाने वाला वंश-वृक्ष (Tree Diagram) बनाएं।"
  },
  {
    id: "u8-t4",
    slug: "web-hosting-basics",
    unit: 8,
    unitSlug: "unit-8",
    unitTitle: "Web Publishing and Browsing",
    title: "Web Hosting Basics (Shared, VPS, Dedicated, Cloud)",
    hindiTitle: "वेब होस्टिंग के मूल सिद्धांत (Shared, VPS, Dedicated, Cloud Hosting)",
    definitionEnglish: "Web Hosting is a service provided by hosting companies that allocates server space, bandwidth, and computing infrastructure to store a website's files, databases, and assets, making them continuously accessible to global internet users 24x7x365 across four primary architectures: Shared, VPS, Dedicated, and Cloud.",
    definitionHindi: "वेब होस्टिंग इंटरनेट सेवा प्रदाताओं द्वारा दी जाने वाली वह सेवा है जो किसी वेबसाइट की फाइलों, डेटाबेस और संसाधनों को स्टोर करने के लिए सर्वर स्पेस और बैंडविड्थ प्रदान करती है, ताकि वेबसाइट 24 घंटे दुनिया भर में सुलभ रहे; यह मुख्य रूप से 4 प्रकार की होती है: Shared, VPS, Dedicated और Cloud।",
    simpleWords: "वेबसाइट का डोमेन नाम अगर आपकी दुकान का नाम-बोर्ड है, तो वेब होस्टिंग वह जमीन या दुकान का कमरा है जहाँ आपका सारा माल (फाइलें) रखा जाता है।",
    whyImportant: "वेबसाइट कितनी भी अच्छी बनी हो, यदि सही होस्टिंग नहीं चुनी गई तो वह बार-बार क्रैश होगी या बहुत धीमी चलेगी।",
    detailedExplanation: `### वेब होस्टिंग के 4 मुख्य प्रकार:
1. **Shared Hosting (साझा होस्टिंग - शुरुआती छात्रों हेतु):**
   - एक ही शक्तिशाली सर्वर पर सैकड़ों वेबसाइटें एक साथ रखी जाती हैं।
   - **फायदे:** सबसे सस्ती (₹50-100 प्रति माह), शुरुआती ब्लॉग और छोटे प्रोजेक्ट्स के लिए सर्वोत्तम।
   - **कमियां:** यदि किसी पड़ोसी वेबसाइट पर बहुत भारी ट्रैफिक आ जाए, तो आपकी साइट भी धीमी हो जाएगी।
2. **VPS Hosting (Virtual Private Server):**
   - एक भौतिक सर्वर को वर्चुअलाइजेशन द्वारा कई अलग-अलग वर्चुअल सर्वरों में बांटा जाता है।
   - प्रत्येक यूजर को अपनी निश्चित RAM, CPU और अलग ऑपरेटिंग सिस्टम मिलता है।
   - मध्यम व्यापार और ई-कॉमर्स साइटों के लिए आदर्श।
3. **Dedicated Hosting (समर्पित सर्वर):**
   - पूरा का पूरा भौतिक कंप्यूटर सर्वर केवल आपकी एक वेबसाइट के लिए आरक्षित होता है।
   - **फायदे:** सर्वोच्च गति, पूर्ण सुरक्षा, और फुल रूट एक्सेस।
   - **कमियां:** बहुत महंगी (₹8,000-20,000+ प्रति माह), बड़े बैंकों और अमेजन जैसी कंपनियों के लिए।
4. **Cloud Hosting (क्लाउड होस्टिंग - आधुनिक मानक):**
   - वेबसाइट किसी एक सर्वर पर नहीं बल्कि सैकड़ों आपस में जुड़े क्लाउड सर्वरों के समूह पर चलती है।
   - यदि एक सर्वर खराब भी हो जाए, तो दूसरा तुरंत काम संभाल लेता है (Zero Downtime)।
   - उदाहरण: AWS, Google Cloud, Microsoft Azure.

### डोमेन नाम और TLDs (Top-Level Domains):
- \`.com\` (Commercial), \`.org\` (Organization), \`.gov\` (Government), \`.edu\` (Education), \`.in\` (India country code).`,
    syntax: `Hosting Types Hierarchy:
Shared Hosting   -> Budget / Small sites (Shared resources)
VPS Hosting      -> Medium business (Virtual isolated slices)
Dedicated Server -> Enterprise / Banking (Entire physical machine)
Cloud Hosting    -> Scalable cluster (AWS / Azure / High uptime)`,
    codeExample: `<!-- Checking Domain and Host Connection -->
<p>Domain: <b>nielit.gov.in</b> (Top-Level Domain: .in / Second-Level: .gov)</p>
<p>DNS A-Record maps Domain Name -> Server IP (e.g., 164.100.158.135)</p>`,
    outputExplanation: "DNS सर्वर डोमेन नाम को होस्टिंग सर्वर के वास्तविक IP पते से जोड़ता है।",
    realWorldAnalogy: "Shared होस्टिंग हॉस्टल के डॉर्मिटरी रूम जैसी है जहाँ कई लोग एक ही कमरा शेयर करते हैं; VPS एक अपार्टमेंट बिल्डिंग के अपने फ्लैट जैसा है; Dedicated अपना पूरा स्वतंत्र बंगला है; और Cloud फाइव-स्टार होटल की पूरी चेन है।",
    importantPoints: [
      "Shared होस्टिंग सबसे सस्ती होती है।",
      "Dedicated होस्टिंग में पूरा सर्वर केवल एक ग्राहक का होता है।",
      "Cloud होस्टिंग कई सर्वरों के क्लस्टर पर चलती है और कभी क्रैश नहीं होती।",
      ".com, .in, .org को Top-Level Domain (TLD) कहा जाता है।"
    ],
    commonMistakes: [
      "डोमेन नाम खरीदने को ही होस्टिंग समझ लेना (डोमेन केवल नाम है, फाइलों को रखने के लिए होस्टिंग अलग से खरीदनी पड़ती है)।"
    ],
    examPerspective: "Shared बनाम Dedicated होस्टिंग में अंतर, Cloud होस्टिंग के लाभ, और TLDs (.com, .org, .edu) के अर्थ पर परीक्षा में प्रश्न आते हैं।",
    quickRevision: "होस्टिंग सर्वर स्पेस देती है। 4 प्रकार: Shared (सस्ती/साझा), VPS (वर्चुअल निजी), Dedicated (पूरा सर्वर), Cloud (क्लस्टर/स्केलेबल)।",
    relatedTopics: ["overview-of-web-publishing", "components-of-web-publishing", "http-protocol"],
    practiceTask: "चारों होस्टिंग प्रकारों की कीमत, गति और विश्वसनीयता की एक तुलनात्मक तालिका बनाएं।"
  },
  {
    id: "u8-t5",
    slug: "documents-interchange-standards",
    unit: 8,
    unitSlug: "unit-8",
    unitTitle: "Web Publishing and Browsing",
    title: "Documents Interchange Standards (ASCII, UTF-8, MIME, XML, JSON)",
    hindiTitle: "दस्तावेज़ विनिमय मानक (ASCII, UTF-8, MIME Types, XML, JSON)",
    definitionEnglish: "Documents Interchange Standards are universally agreed-upon encoding formats and data protocols that ensure text, characters, multimedia, and structured data can be created on one operating system and read accurately across any remote computer platform without corruption, including ASCII, Unicode UTF-8, MIME Types, XML, and JSON.",
    definitionHindi: "दस्तावेज़ विनिमय मानक सार्वभौमिक रूप से स्वीकृत एन्कोडिंग प्रारूप और डेटा प्रोटोकॉल हैं जो यह सुनिश्चित करते हैं कि किसी एक कंप्यूटर पर तैयार किया गया टेक्स्ट, कैरेक्टर, मल्टीमीडिया या डेटा दुनिया के किसी भी अन्य कंप्यूटर पर बिना किसी खराबी के सही ढंग से पढ़ा जा सके; इसमें ASCII, UTF-8, MIME Types, XML और JSON शामिल हैं।",
    simpleWords: "यदि आप अपने कंप्यूटर से हिंदी में 'नमस्ते' लिखकर भेजें, तो अमेरिका में बैठे यूजर के कंप्यूटर को कैसे पता चलेगा कि यह कौन सा अक्षर है? कैरेक्टर एन्कोडिंग (UTF-8) और डेटा मानक (JSON) ही सभी कंप्यूटरों को एक ही भाषा में बात करने की क्षमता देते हैं।",
    whyImportant: "बिना सही एन्कोडिंग के वेबपेज पर अक्षरों की जगह अजीबोगरीब '??? या ' के डिब्बे दिखने लगते हैं।",
    detailedExplanation: `### 1. कैरेक्टर एन्कोडिंग मानक:
- **ASCII (American Standard Code for Information Interchange):**
  - **7-बिट कोड:** केवल **128 कैरेक्टर्स** (अंग्रेजी वर्णमाला, 0-9 अंक, और विराम चिह्न)।
  - यह हिंदी, अरबी या चीनी जैसी अंतरराष्ट्रीय भाषाओं को सपोर्ट नहीं कर सकता।
- **Unicode (सार्वभौमिक मानक):**
  - दुनिया की प्रत्येक भाषा के प्रत्येक अक्षर को एक अद्वितीय कोड बिंदु देता है।
- **UTF-8 (8-bit Unicode Transformation Format - आधुनिक वेब मानक!):**
  - **1 से 4 बाइट्स** की वेरिएबल लंबाई का एन्कोडिंग।
  - 100% वेब पेजों में इस्तेमाल होता है।
  - HTML में डिक्लेयर करना अनिवार्य: \`<meta charset="UTF-8">\`

### 2. MIME Types (Multipurpose Internet Mail Extensions):
- जब सर्वर कोई फाइल भेजता है, तो वह हेडर में बताता है कि यह किस प्रकार की फाइल है:
  - \`text/html\`: HTML वेबपेज
  - \`text/css\`: CSS स्टाइलशीट
  - \`text/javascript\`: जावास्क्रिप्ट फाइल
  - \`image/png\`, \`image/jpeg\`: इमेजेस
  - \`application/json\`: JSON डेटा
  - \`application/pdf\`: PDF दस्तावेज़

### 3. डेटा विनिमय प्रारूप (Data Interchange Formats):
- **XML (Extensible Markup Language):** टैग-आधारित संरचित डेटा स्टोरेज।
- **JSON (JavaScript Object Notation):** आधुनिक वेब और APIs का सबसे हल्का और तेज डेटा प्रारूप (\`{"name": "Amit", "marks": 90}\`)।`,
    syntax: `MIME Type Header Example:
Content-Type: text/html; charset=UTF-8
Content-Type: application/json

JSON Interchange Format:
{ "course": "M2-R5.1", "duration": 120 }`,
    codeExample: `<!DOCTYPE html>
<html lang="hi">
<head>
  <!-- UTF-8 Character Encoding Standard -->
  <meta charset="UTF-8">
  <title>Unicode & MIME Types Standard</title>
</head>
<body>
  <h2>बहुभाषी समर्थन (Multi-language UTF-8 Support)</h2>
  <p>हिन्दी, English, संस्कृतम्, Español, 日本語 — सब कुछ UTF-8 में सही दिखता है!</p>
</body>
</html>`,
    outputExplanation: "UTF-8 के कारण हिंदी, संस्कृत और जापानी भाषाएं बिना किसी फॉन्ट इंस्टॉलेशन के स्क्रीन पर एकदम सही दिखेंगी।",
    realWorldAnalogy: "ASCII अंग्रेजी भाषा के 26 अक्षरों का छोटा सा शब्दकोश था; UTF-8 दुनिया की सभी भाषाओं और वैश्विक लिपियों का संपूर्ण महाकोश है।",
    importantPoints: [
      "ASCII 7-बिट का होता है और केवल 128 कैरेक्टर्स सपोर्ट करता है।",
      "वेब का मानक कैरेक्टर सेट UTF-8 है।",
      "MIME का पूर्ण रूप: Multipurpose Internet Mail Extensions.",
      "आधुनिक वेब APIs में डेटा ट्रांसफर के लिए JSON सर्वाधिक लोकप्रिय है।"
    ],
    commonMistakes: [
      "ASCII को 8-बिट समझना (मूल ASCII केवल 7-बिट का होता है; Extended ASCII 8-बिट का होता है)।",
      "हेड में `<meta charset=\"UTF-8\">` भूल जाना।"
    ],
    examPerspective: "ASCII की बिट लंबाई (7-bit), UTF-8 का पूर्ण रूप, MIME का पूरा नाम, और JSON की भूमिका पर परीक्षा में प्रश्न आते हैं।",
    quickRevision: "ASCII = 7-bit (128 अक्षर); UTF-8 = आधुनिक बहुभाषी वेब मानक; MIME = फाइल का प्रकार बताने वाला मानक (text/html).",
    relatedTopics: ["sgml", "head-section-and-elements", "http-protocol"],
    practiceTask: "एक वेबपेज बनाएं जिसमें `<meta charset=\"UTF-8\">` लगाकर विभिन्न भाषाओं के शब्द और इमोजी लिखकर टेस्ट करें।"
  },
  {
    id: "u8-t6",
    slug: "components-of-web-publishing",
    unit: 8,
    unitSlug: "unit-8",
    unitTitle: "Web Publishing and Browsing",
    title: "Components of Web Publishing",
    hindiTitle: "वेब पब्लिशिंग के मुख्य घटक (Hardware, Software, Domain, Protocols)",
    definitionEnglish: "The components of web publishing constitute the integrated ecosystem required to develop and deliver websites globally, consisting of the Client Workstation (development tools), Web Server Software (Apache, Nginx, IIS), Server Hardware, Domain Name System (DNS), File Transfer Protocols (FTP/SFTP), and Web Browsers.",
    definitionHindi: "वेब पब्लिशिंग के घटक उस एकीकृत तंत्र का निर्माण करते हैं जो वेबसाइटों को विकसित कर वैश्विक स्तर पर उपलब्ध कराने के लिए आवश्यक है; इसमें क्लाइंट वर्कस्टेशन (एडिटर्स), वेब सर्वर सॉफ्टवेयर (Apache, Nginx), सर्वर हार्डवेयर, DNS, फाइल ट्रांसफर प्रोटोकॉल (FTP) और वेब ब्राउज़र शामिल हैं।",
    simpleWords: "वेबसाइट को लाइव करने के लिए 5 चीजों की जरूरत होती है: 1. कोड लिखने वाला कंप्यूटर, 2. कोड एडिटर, 3. फाइलें रखने वाला वेब सर्वर, 4. वेबसाइट का नाम (Domain), और 5. फाइलें भेजने वाला तार (FTP)।",
    whyImportant: "इन सभी घटकों का आपस में सही सामंजस्य ही वेबसाइट को 24 घंटे बिना रुकावट चालू रखता है।",
    detailedExplanation: `### वेब पब्लिशिंग के 5 मुख्य घटक:
1. **Client Workstation (डेवलपर का कंप्यूटर):**
   - कोड एडिटर (Notepad++, Sublime Text)।
   - इमेज एडिटिंग टूल्स (Photoshop, GIMP) वेब ग्राफिक्स तैयार करने हेतु।
   - लोकल ब्राउज़र (Chrome, Firefox) टेस्टिंग हेतु।
2. **Domain Name & DNS:**
   - वेबसाइट का इंसानों द्वारा याद रखा जाने वाला नाम (\`myinstitute.org\`)।
   - DNS सर्वर जो इस नाम को मशीन के IP पते में बदलता है।
3. **Web Server Hardware & Software:**
   - **Hardware:** 24x7 हाई-स्पीड इंटरनेट और पावर बैकअप से जुड़ा रिमोट कंप्यूटर।
   - **Software:** **Apache HTTP Server**, **Nginx**, या **Microsoft IIS** जो आने वाली HTTP रिक्वेस्ट्स को सुनकर सही फाइल वापस भेजते हैं।
4. **File Transfer Protocol (FTP / SFTP):**
   - लोकल कंप्यूटर से सर्वर तक फाइलों को सुरक्षित अपलोड करने का प्रोटोकॉल (**Port 21 / 22**)।
   - सॉफ्टवेयर: **FileZilla**, WinSCP.
5. **End-User Web Browser:**
   - यूजर का ब्राउज़र जो HTML, CSS और JS को रेंडर करके स्क्रीन पर वेबसाइट दिखाता है।`,
    syntax: `Publishing Component Pipeline:
[Developer PC] ---FTP (Port 21)---> [Web Server (Apache/Nginx)] <---HTTP (Port 80)--- [User Browser]`,
    codeExample: `<!-- Concept of Domain to Server IP mapping -->
<div style="background:#f1f5f9; padding:15px; border-radius:6px; font-family:monospace;">
  Domain Name : nielit.gov.in<br>
  DNS Lookup  : Resolves to Server IP (164.100.158.135)<br>
  Web Server  : Apache / Linux Host<br>
  Protocol    : HTTPS over Port 443
</div>`,
    outputExplanation: "यह आरेख दिखाता है कि डोमेन से लेकर सर्वर और प्रोटोकॉल तक सभी घटक मिलकर काम करते हैं।",
    realWorldAnalogy: "जैसे टीवी प्रसारण के लिए कैमरा (Developer PC), एंटीना और सैटेलाइट (FTP & Server), चैनल का नाम (Domain), और घर का टीवी सेट (Browser) चाहिए।",
    importantPoints: [
      "वेब सर्वर सॉफ्टवेयर के लोकप्रिय उदाहरण: Apache, Nginx, Microsoft IIS.",
      "FTP का डिफ़ॉल्ट पोर्ट 21 और SFTP का 22 होता है।",
      "DNS डोमेन नाम को IP एड्रेस में मैप करता है।"
    ],
    commonMistakes: [
      "वेब सर्वर हार्डवेयर और वेब सर्वर सॉफ्टवेयर में अंतर न समझना (हार्डवेयर मशीन है, सॉफ्टवेयर Apache/Nginx है)।"
    ],
    examPerspective: "वेब पब्लिशिंग के घटकों की सूची, लोकप्रिय वेब सर्वर सॉफ्टवेयर्स के नाम, और FTP की भूमिका पर प्रश्न पूछे जाते हैं।",
    quickRevision: "घटक: 1. वर्कस्टेशन (कोड), 2. डोमेन व DNS (पता), 3. वेब सर्वर (Apache/Nginx), 4. FTP (अपलोड), 5. ब्राउज़र (डिस्प्ले)।",
    relatedTopics: ["overview-of-web-publishing", "web-hosting-basics", "publishing-tools"],
    practiceTask: "अपने कंप्यूटर पर पता करें कि आपका ब्राउज़र कौन सा रेंडरिंग इंजन उपयोग कर रहा है।"
  },
  {
    id: "u8-t7",
    slug: "document-management",
    unit: 8,
    unitSlug: "unit-8",
    unitTitle: "Web Publishing and Browsing",
    title: "Document Management & Site Architecture",
    hindiTitle: "दस्तावेज़ प्रबंधन एवं वेबसाइट फोल्डर संरचना (Site Architecture)",
    definitionEnglish: "Document Management in web publishing refers to the disciplined organization, directory structuring, asset categorization, standardized file naming conventions, version control, and backup strategies that ensure website files remain maintainable and properly linked.",
    definitionHindi: "वेब पब्लिशिंग में दस्तावेज़ प्रबंधन का तात्पर्य अनुशासित संगठन, डायरेक्टरी संरचना, एसेट वर्गीकरण, मानकीकृत फाइल नामकरण नियमों, वर्जन कंट्रोल और बैकअप रणनीतियों से है जो यह सुनिश्चित करते हैं कि वेबसाइट की फाइलें व्यवस्थित और सही ढंग से लिंक रहें।",
    simpleWords: "यह वेबसाइट की फाइलों को करीने से अलमारी में सजाने का तरीका है: सारी फोटो `images/` फोल्डर में, सारी स्टाइल `css/` फोल्डर में, और मुख्य फाइल बाहर `index.html` के नाम से रखी जाती है ताकि कोई भी लिंक कभी न टूटे।",
    whyImportant: "अव्यवस्थित डायरेक्टरी संरचना से वेबसाइट के इमेजेस और लिंक्स टूट (Broken Links / 404 Error) जाते हैं। एक पेशेवर डेवलपर हमेशा साफ फोल्डर संरचना बनाता है।",
    detailedExplanation: `### 1. पेशेवर वेबसाइट की मानक फोल्डर संरचना:
\`\`\`
my-website/
├── index.html            (होमपेज - रूट में अनिवार्य)
├── about.html            (अबाउट पेज)
├── contact.html          (कॉन्टैक्ट पेज)
├── css/                  (सभी स्टाइलशीट्स का फोल्डर)
│   ├── style.css
│   └── responsive.css
├── js/                   (सभी जावास्क्रिप्ट फाइलों का फोल्डर)
│   └── main.js
├── images/               (सभी तस्वीरों और आइकॉन्स का फोल्डर)
│   ├── logo.png
│   └── banner.jpg
└── assets/               (फॉन्ट्स, PDFs और अन्य दस्तावेज़)
    └── syllabus.pdf
\`\`\`

### 2. फाइल नामकरण के 4 सुनहरे नियम:
1. **कभी स्पेस न दें:** \`my class note.html\` के बजाय \`my-class-note.html\` लिखें।
2. **हमेशा लोअरकेस (Small Letters) रखें:** Linux वेब सर्वर केस-सेंसिटिव होते हैं; \`Photo.JPG\` और \`photo.jpg\` को वे अलग मानते हैं।
3. **अर्थपूर्ण नाम दें:** \`pic1.jpg\` के बजाय \`nielit-logo.png\` लिखें।
4. **विशेष वर्णों से बचें:** \`@, #, $, %, &\` का उपयोग फाइल नाम में कभी न करें।

### 3. बैकअप एवं वर्जन कंट्रोल (Version Control):
- वेबसाइट में कोई भी बड़ा बदलाव करने से पहले हमेशा पूरे फोल्डर का बैकअप (ZIP) बनाकर रखें।
- पेशेवर टीम्स कोड का इतिहास सुरक्षित रखने हेतु **Git और GitHub** का उपयोग करती हैं।`,
    syntax: `Relative Path Navigation Rules:
images/pic.jpg   -> Child directory
../style.css     -> Parent directory (One level up)
../../index.html -> Two levels up`,
    codeExample: `<!-- Clean relative linking according to standard folder structure -->
<link rel="stylesheet" href="css/style.css">
<script src="js/main.js"></script>
<img src="images/logo.png" alt="Company Logo">
<a href="assets/syllabus.pdf">Download Syllabus</a>`,
    outputExplanation: "जब फाइलें सही फोल्डर्स में होती हैं तो ब्राउज़र बिना किसी 404 एरर के सभी एसेट्स को तुरंत लोड कर लेता है।",
    realWorldAnalogy: "जैसे एक अच्छे ऑफिस में हर विषय की फाइल अलग-अलग दराजों (Drawers) पर लेबल लगाकर रखी जाती है ताकि 1 मिनट में कोई भी फाइल निकाली जा सके।",
    importantPoints: [
      "होमपेज हमेशा वेबसाइट के रूट फोल्डर में होना चाहिए।",
      "फाइलों के नाम में स्पेस के बजाय हाइफन (-) का प्रयोग करें।",
      "Linux सर्वर केस-सेंसिटिव (Case-sensitive) होते हैं।",
      "नियमित बैकअप डेटा को नष्ट होने से बचाता है।"
    ],
    commonMistakes: [
      "इमेज का नाम `My Photo.jpg` रख देना और कोड में `my photo.jpg` लिखना (Linux सर्वर पर यह इमेज नहीं खुलेगी)।"
    ],
    examPerspective: "वेबसाइट की डायरेक्टरी संरचना, केस-सेंसिटिविटी की अवधारणा, और रिलेटिव पाथ (`../`) पर प्रश्न पूछे जाते हैं।",
    quickRevision: "रूट में index.html; अलग फोल्डर्स: css/, js/, images/; नाम हमेशा छोटे अक्षरों में बिना स्पेस के हाइफन युक्त।",
    relatedTopics: ["overview-of-web-publishing", "saving", "publishing-tools"],
    practiceTask: "अपने कंप्यूटर पर `css`, `js`, और `images` फोल्डर बनाकर एक सही संरचना वाली 2-पेज की वेबसाइट बनाएं।"
  },
  {
    id: "u8-t8",
    slug: "search-engines",
    unit: 8,
    unitSlug: "unit-8",
    unitTitle: "Web Publishing and Browsing",
    title: "Search Engines (Crawlers, Indexing, Ranking, SEO)",
    hindiTitle: "सर्च इंजन की कार्यप्रणाली (Crawling, Indexing, Ranking एवं SEO)",
    definitionEnglish: "A Search Engine is a web-based software program that systematically scours the World Wide Web for content through automated web crawlers (spiders/bots), processes and categorizes found pages into a massive Index database, and returns ranked, algorithmically ordered results for user search queries.",
    definitionHindi: "सर्च इंजन इंटरनेट पर आधारित एक ऐसा सॉफ्टवेयर प्रोग्राम है जो स्वचालित वेब क्रॉलर्स (स्पाइडर्स या बॉट्स) के माध्यम से वर्ल्ड वाइड वेब पर सामग्री खोजता है, पाए गए पेजों को एक विशाल इंडेक्स डेटाबेस में वर्गीकृत करता है, और यूजर की सर्च क्वेरी के लिए प्रासंगिक रैंक किए गए परिणाम लौटाता है।",
    simpleWords: "गूगल एक ऐसा सुपर-लाइब्रेरियन है जिसने दुनिया की सभी किताबों (वेबपेजों) को पढ़कर अपनी एक विशाल डायरी (Index) में लिख रखा है। जब आप कुछ भी पूछते हैं, तो वह 1 सेकंड में सबसे बेहतरीन पेज निकाल कर सामने रख देता है।",
    whyImportant: "यदि सर्च इंजन आपकी वेबसाइट को नहीं ढूंढ पाएगा, तो कोई भी यूजर आपकी साइट तक नहीं पहुंच पाएगा। SEO ही वेबसाइट पर ट्रैफिक लाने का मुख्य जरिया है।",
    detailedExplanation: `### सर्च इंजन की 3-चरणीय कार्यप्रणाली:
1. **Crawling (क्रॉलिंग / मकड़ी का जाल):**
   - सर्च इंजन स्वचालित सॉफ्टवेयर बॉट्स (जिन्हें **Spiders**, **Crawlers** या **Web Bots** कहते हैं, जैसे Googlebot) को वेब पर छोड़ता है।
   - ये बॉट्स एक पेज से दूसरे पेज के हाइपरलिंक्स पर कूदते हुए नए और अपडेटेड वेबपेजों को खोजते हैं।
2. **Indexing (इंडेक्सिंग / लाइब्रेरी सूची):**
   - खोजे गए वेबपेजों के टेक्स्ट, इमेजेस, और मेटाडाटा का विश्लेषण करके सर्च इंजन के विशालकाय डेटाबेस (Index) में स्टोर किया जाता है।
3. **Ranking & Serving Results (रैंकिंग):**
   - जब यूजर सर्च करता है, तो सर्च इंजन का गुप्त एल्गोरिदम (PageRank, Relevance, Mobile-friendliness, Speed) 200+ कारकों के आधार पर तय करता है कि कौन सा पेज नंबर 1 पर दिखेगा।

### SEO (Search Engine Optimization) की मूल बातें:
- **Title Tag & Meta Description:** आकर्षक और कीवर्ड-युक्त होना।
- **Headings (H1):** पेज का मुख्य विषय स्पष्ट रूप से H1 में होना।
- **Image Alt Tags:** इमेजेस का विवरण होना।
- **Mobile Friendly & Fast Speed:** तेजी से खुलने वाली रिस्पॉन्सिव वेबसाइटों को गूगल उच्च रैंक देता है।`,
    syntax: `Basic SEO Meta Tags:
<meta name="description" content="Complete O-Level M2-R5.1 Study Notes in Hindi & English">
<meta name="keywords" content="NIELIT, O-Level, Web Design, M2-R5.1">
<meta name="robots" content="index, follow">`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>NIELIT O-Level M2-R5.1 Master Notes</title>
  <meta name="description" content="Master Web Designing & Publishing with 200 MCQs and Bilingual Notes.">
</head>
<body>
  <h1>O-Level Web Designing Complete Course</h1>
  <p>Proper H1 and meta tags allow Googlebot to index this page accurately.</p>
</body>
</html>`,
    outputExplanation: "सर्च रिजल्ट्स में नीले रंग में Title दिखेगा, नीचे URL दिखेगा, और उसके नीचे Meta Description का स्निपेट दिखेगा।",
    realWorldAnalogy: "क्रॉलर एक जासूस जैसा है जो सुराग (Links) ढूंढते हुए पूरे शहर में घूमता है; इंडेक्स पुलिस स्टेशन का मुख्य रजिस्टर है जहाँ सारी फाइलें जमा होती हैं; और रैंकिंग कोर्ट का जज है जो योग्यता के आधार पर फैसला देता है।",
    importantPoints: [
      "सर्च इंजन के बॉट्स को Crawlers या Spiders कहा जाता है।",
      "गूगल के क्रॉलर का नाम Googlebot है।",
      "सर्च इंजन 3 चरणों में काम करता है: Crawling -> Indexing -> Ranking.",
      "SEO का पूर्ण रूप: Search Engine Optimization."
    ],
    commonMistakes: [
      "ब्राउज़र और सर्च इंजन को एक ही समझ लेना (Chrome ब्राउज़र है, Google सर्च इंजन है)।"
    ],
    examPerspective: "क्रॉलर्स/स्पाइडर्स की भूमिका, इंडेक्सिंग की परिभाषा, SEO का पूर्ण रूप, और सर्च इंजन के तीनों चरणों पर प्रश्न पूछे जाते हैं।",
    quickRevision: "सर्च इंजन वेब पर सूचना ढूंढता है। 3 चरण: 1. Crawling (खोजना), 2. Indexing (स्टोर करना), 3. Ranking (परिणाम दिखाना)।",
    relatedTopics: ["meta-search-engines", "browser-architecture", "head-section-and-elements"],
    practiceTask: "गूगल पर `site:nielit.gov.in` लिखकर सर्च करें और देखें कि गूगल ने उस वेबसाइट के कितने पेजों को इंडेक्स किया हुआ है।"
  },
  {
    id: "u8-t9",
    slug: "meta-search-engines",
    unit: 8,
    unitSlug: "unit-8",
    unitTitle: "Web Publishing and Browsing",
    title: "Meta Search Engines",
    hindiTitle: "मेटा सर्च इंजन (Meta Search Engines — Dogpile, MetaCrawler)",
    definitionEnglish: "A Meta Search Engine is an information retrieval tool that does not maintain its own web crawler or index database; instead, it simultaneously queries multiple third-party search engines (like Google, Bing, Yahoo), aggregates their results, eliminates duplicates, and presents a consolidated result list to the user.",
    definitionHindi: "मेटा सर्च इंजन सूचना पुनर्प्राप्ति का एक ऐसा साधन है जिसका अपना कोई वेब क्रॉलर या इंडेक्स डेटाबेस नहीं होता; बल्कि यह यूजर की सर्च क्वेरी को एक साथ कई अन्य सर्च इंजनों (जैसे Google, Bing, Yahoo) को भेजता है, उनके परिणामों को एकत्र करता है, डुप्लीकेट हटाता है और एक संयुक्त सूची प्रस्तुत करता है।",
    simpleWords: "साधारण सर्च इंजन एक अकेले डॉक्टर जैसा है। मेटा सर्च इंजन मेडिकल बोर्ड जैसा है जो 5 बड़े डॉक्टरों (Google, Bing, Yahoo) से सलाह लेकर एक संयुक्त पर्चा बनाकर आपको दे देता है।",
    whyImportant: "O-Level परीक्षा में 'सर्च इंजन और मेटा सर्च इंजन में क्या अंतर है?' तथा 'Dogpile किसका उदाहरण है?' यह प्रश्न बार-बार पूछा जाता है।",
    detailedExplanation: `### 1. मेटा सर्च इंजन कैसे काम करता है?
1. यूजर मेटा सर्च इंजन के सर्च बॉक्स में क्वेरी टाइप करता है।
2. मेटा सर्च इंजन उस क्वेरी को एक साथ **Google, Bing, Yahoo, Yandex** आदि को फॉरवर्ड करता है।
3. सभी इंजनों से आने वाले परिणामों को इकट्ठा करता है।
4. **De-duplication (डुप्लीकेट हटाना):** जो परिणाम 2-3 इंजनों में कॉमन हों, उन्हें एक बार रखता है।
5. अपने एल्गोरिदम के आधार पर सभी परिणामों को मिलाकर एक अंतिम लिस्ट स्क्रीन पर दिखाता है।

### 2. प्रमुख मेटा सर्च इंजनों के उदाहरण:
- **Dogpile:** सबसे प्रसिद्ध मेटा सर्च इंजन (परीक्षा में सर्वाधिक पूछा जाने वाला नाम!)।
- **MetaCrawler**
- **Ixquick (अब Startpage)**
- **Info.com**

### 3. फायदे एवं सीमाएं:
- **फायदे:** एक ही जगह से पूरे वेब का व्यापक कवरेज; कई इंजनों के मिले-जुले बेहतरीन परिणाम।
- **सीमाएं:** उन्नत सर्च ऑपरेटर्स ठीक से काम नहीं करते; परिणामों के आने में थोड़ा अतिरिक्त समय लगता है।`,
    syntax: `Meta Search Architecture:
[User Query] -> [Meta Search Engine (Dogpile)]
                    ├──> Queries Google
                    ├──> Queries Bing
                    └──> Queries Yahoo
             <- Returns Consolidated Results (Duplicates Removed)`,
    codeExample: `<!-- Educational Simulation of Meta Search Aggregation -->
<div style="border: 2px solid #0284c7; padding: 15px; border-radius: 8px; font-family: sans-serif;">
  <h3>Meta Search Engine: Dogpile</h3>
  <p><b>Aggregated Search Results for: "O-Level M2-R5.1"</b></p>
  <ul>
    <li>Result 1 (Found on Google & Bing)</li>
    <li>Result 2 (Found on Yahoo)</li>
    <li>Result 3 (Found on Google)</li>
  </ul>
</div>`,
    outputExplanation: "मेटा सर्च इंजन कई अलग-अलग इंजनों से परिणाम जोड़कर एक ही जगह प्रदर्शित करता है।",
    realWorldAnalogy: "जैसे Trivago या MakeMyTrip किसी एक होटल के मालिक नहीं हैं, वे 50 अलग-अलग वेबसाइटों से रेट देखकर सबसे बढ़िया कमरा आपको दिखाते हैं।",
    importantPoints: [
      "मेटा सर्च इंजन का अपना कोई डेटाबेस या क्रॉलर नहीं होता।",
      "यह अन्य सर्च इंजनों के परिणामों को संयोजित (Aggregate) करता है।",
      "Dogpile और MetaCrawler इसके सबसे प्रमुख उदाहरण हैं।"
    ],
    commonMistakes: [
      "Dogpile को साधारण सर्च इंजन समझ लेना (Dogpile एक मेटा सर्च इंजन है)।"
    ],
    examPerspective: "प्रश्न: 'मेटा सर्च इंजन का उदाहरण कौन सा है?' (Dogpile / MetaCrawler), 'क्या मेटा सर्च इंजन का अपना वेब क्रॉलर होता है?' (नहीं).",
    quickRevision: "मेटा सर्च इंजन का अपना डेटाबेस नहीं होता; यह कई सर्च इंजनों से परिणाम एकत्र करके दिखाता है। उदाहरण: Dogpile, MetaCrawler.",
    relatedTopics: ["search-engines", "browser-architecture", "www-architecture"],
    practiceTask: "ब्राउज़र में `dogpile.com` खोलें और कोई विषय सर्च करके देखें कि परिणाम के साथ किन-किन इंजनों के नाम लिखे हैं।"
  },
  {
    id: "u8-t10",
    slug: "www-architecture",
    unit: 8,
    unitSlug: "unit-8",
    unitTitle: "Web Publishing and Browsing",
    title: "WWW (World Wide Web Architecture & URLs)",
    hindiTitle: "WWW आर्किटेक्चर एवं URL की विस्तृत संरचना (URL Anatomy)",
    definitionEnglish: "The World Wide Web Architecture is a distributed, client-server hypertext information architecture operating across the Internet, driven by three core standards: Uniform Resource Identifiers (URIs/URLs) for global naming, HTTP/HTTPS for resource transfer, and HTML for hypertext representation.",
    definitionHindi: "वर्ल्ड वाइड वेब आर्किटेक्चर इंटरनेट पर संचालित एक वितरित क्लाइंट-सर्वर हाइपरटेक्स्ट सूचना प्रणाली है, जो तीन मुख्य मानकों पर चलती है: वैश्विक नामकरण हेतु URI/URL, संसाधन स्थानांतरण हेतु HTTP/HTTPS, और हाइपरटेक्स्ट संरचना हेतु HTML।",
    simpleWords: "यह वेब का पूरा ढांचा है जिसमें हर फाइल का एक अद्वितीय पता (URL) होता है, और उस पते पर जाने के लिए एक मानक नियम (HTTP) होता है।",
    whyImportant: "URL के विभिन्न हिस्सों (प्रोटोकॉल, डोमेन, पोर्ट, पाथ, क्वेरी स्ट्रिंग) की पहचान करना तकनीकी परीक्षाओं का बुनियादी सवाल है।",
    detailedExplanation: `### URL की संपूर्ण संरचना (Complete Anatomy of a URL):
\`\`\`
https://www.nielit.gov.in:443/student/admit-card.php?id=101&course=o-level#download
|---|   |--------------| |--| |---------------------| |-----------------| |-------|
  1            2           3             4                     5             6
\`\`\`

1. **Protocol / Scheme (\`https://\`):** संसाधन प्राप्त करने के नियम (HTTP, HTTPS, FTP)।
2. **Domain Name / Host (\`www.nielit.gov.in\`):** सर्वर का इंसानी नाम।
3. **Port Number (\`:443\`):** संचार का गेटवे (HTTPS हेतु 443, HTTP हेतु 80 - आमतौर पर छिपा रहता है)।
4. **Path to Resource (\`/student/admit-card.php\`):** सर्वर की हार्ड डिस्क पर फाइल का सटीक डायरेक्टरी पाथ।
5. **Query String (\`?id=101&course=o-level\`):** \`?\` से शुरू होने वाले की-वैल्यू पैरामीटर्स जो सर्वर स्क्रिप्ट को भेजे जाते हैं।
6. **Fragment Identifier / Anchor (\`#download\`):** \`#\` से शुरू होने वाला इन-पेज बुकमार्क जो सीधे उस सेक्शन पर ले जाता है।`,
    syntax: `URL Syntax:
scheme://[user:password@]host[:port][/path][?query][#fragment]`,
    codeExample: `<!-- Parsing URL components in JavaScript -->
<script>
  console.log("Current Protocol:", window.location.protocol); // https:
  console.log("Current Hostname:", window.location.hostname); // www.example.com
  console.log("Current Pathname:", window.location.pathname); // /courses.html
  console.log("Current Search  :", window.location.search);   // ?id=10
  console.log("Current Hash    :", window.location.hash);     // #syllabus
</script>`,
    outputExplanation: "जावास्क्रिप्ट का `window.location` ऑब्जेक्ट URL के सभी टुकड़ों को अलग-अलग आसानी से पढ़ सकता है।",
    realWorldAnalogy: "जैसे आपके घर के पते में 'देश -> राज्य -> शहर -> सड़क -> मकान नंबर -> कमरा नंबर' होता है, वैसे ही URL इंटरनेट पर किसी फाइल का मुकम्मल पता है।",
    importantPoints: [
      "URL का पूर्ण रूप: Uniform Resource Locator.",
      "URI = URL ∪ URN (सभी URLs, URIs होते हैं)।",
      "क्वेरी स्ट्रिंग '?' चिन्ह से शुरू होती है।",
      "एंकर/फ्रेगमेंट '#' चिन्ह से शुरू होता है।"
    ],
    commonMistakes: [
      "URI और URL को दो अलग चीजें समझना (URL, URI का ही एक विशिष्ट प्रकार है जो स्थान बताता है)।"
    ],
    examPerspective: "URL के घटकों (प्रोटोकॉल, डोमेन, पोर्ट, पाथ, क्वेरी), डिफ़ॉल्ट पोर्ट 80/443, और URI के सूत्र पर प्रश्न आते हैं।",
    quickRevision: "URL संसाधन का पता है: Protocol (https) -> Domain (nielit.in) -> Port (443) -> Path (/page) -> Query (?id=1) -> Fragment (#sec).",
    relatedTopics: ["www", "http-protocol", "browser-architecture"],
    practiceTask: "किसी भी यूट्यूब वीडियो के URL को देखकर पहचानें कि उसमें प्रोटोकॉल, डोमेन, पाथ और क्वेरी स्ट्रिंग कहाँ है।"
  },
  {
    id: "u8-t11",
    slug: "browser-architecture",
    unit: 8,
    unitSlug: "unit-8",
    unitTitle: "Web Publishing and Browsing",
    title: "Browser Architecture and Rendering Engines",
    hindiTitle: "ब्राउज़र आर्किटेक्चर एवं रेंडरिंग इंजन (Blink, Gecko, WebKit)",
    definitionEnglish: "A Web Browser is a complex client-side software application engineered to retrieve, interpret, and render World Wide Web resources, architected around core subsystems: the User Interface, Browser Engine, Rendering Engine (HTML/CSS layout parser), JavaScript Engine (interpreter/JIT compiler), Networking layer, UI Backend, and Data Storage.",
    definitionHindi: "वेब ब्राउज़र एक जटिल क्लाइंट-साइड सॉफ्टवेयर ऐप्लिकेशन है जिसे वर्ल्ड वाइड वेब के संसाधनों को प्राप्त करने, व्याख्या करने और स्क्रीन पर प्रदर्शित करने के लिए डिज़ाइन किया गया है; इसके मुख्य घटक यूजर इंटरफेस, ब्राउज़र इंजन, रेंडरिंग इंजन (HTML/CSS पार्सर), जावास्क्रिप्ट इंजन, नेटवर्किंग, और लोकल स्टोरेज हैं।",
    simpleWords: "ब्राउज़र केवल एक खिड़की नहीं है; इसके भीतर एक शक्तिशाली कारखाना है। इसका रेंडरिंग इंजन HTML और CSS को पढ़कर सुंदर चित्र बनाता है, और इसका जावास्क्रिप्ट इंजन कोड को सुपरफास्ट स्पीड से चलाता है।",
    whyImportant: "विभिन्न ब्राउज़रों में वेबसाइट अलग-अलग क्यों दिखती है और जावास्क्रिप्ट कैसे चलती है, यह समझने के लिए ब्राउज़र इंजन की जानकारी जरूरी है।",
    detailedExplanation: `### 1. वेब ब्राउज़र के 7 मुख्य आंतरिक घटक:
1. **User Interface (UI):** एड्रेस बार, बैक/फॉरवर्ड बटन, बुकमार्क मेन्यू, रीलोड बटन।
2. **Browser Engine:** UI और रेंडरिंग इंजन के बीच का मार्शल।
3. **Rendering Engine (रेंडरिंग इंजन - मुख्य दिल!):**
   - HTML को पार्स करके **DOM Tree** बनाता है।
   - CSS को पार्स करके **CSSOM (CSS Object Model)** बनाता है।
   - दोनों को मिलाकर **Render Tree** बनाकर स्क्रीन पर पिक्सल्स पेंट करता है।
4. **JavaScript Engine (जावास्क्रिप्ट इंजन):**
   - जावास्क्रिप्ट कोड को पार्स करके मशीन कोड में बदलता है।
5. **Networking Layer:** HTTP/HTTPS नेटवर्क कॉल्स संभालना।
6. **Data Storage (लोकल स्टोरेज):** Cookies, LocalStorage, SessionStorage, Cache.

### 2. प्रमुख ब्राउज़र्स और उनके रेंडरिंग एवं जावास्क्रिप्ट इंजन:
| वेब ब्राउज़र | रेंडरिंग इंजन (Layout) | जावास्क्रिप्ट इंजन (JS Engine) |
|:---|:---|:---|
| **Google Chrome** | **Blink** | **V8 Engine** |
| **Microsoft Edge** | **Blink** (Chromium आधारित) | **V8 Engine** |
| **Mozilla Firefox** | **Gecko** | **SpiderMonkey** |
| **Apple Safari** | **WebKit** | **JavaScriptCore (Nitro)** |
| **Opera** | **Blink** | **V8 Engine** |`,
    syntax: `Browser Rendering Lifecycle:
HTML -> DOM Tree ──┐
                   ├──> Render Tree -> Layout -> Paint to Screen!
CSS  -> CSSOM   ───┘`,
    codeExample: `<!-- Inspecting Browser User Agent in JavaScript -->
<script>
  console.log("Browser Name & Version:", navigator.userAgent);
  console.log("Cookies Enabled:", navigator.cookieEnabled);
  console.log("Online Status:", navigator.onLine);
</script>`,
    outputExplanation: "जावास्क्रिप्ट का `navigator` ऑब्जेक्ट वर्तमान ब्राउज़र, ऑपरेटिंग सिस्टम और उसके इंजन का विवरण दिखाता है।",
    realWorldAnalogy: "रेंडरिंग इंजन उस आर्किटेक्ट और पेंटर जैसा है जो नक्शा देखकर घर खड़ा करता है; और जावास्क्रिप्ट इंजन उस बिजली मिस्त्री जैसा है जो घर में पंखे और लाइटें चालू करता है।",
    importantPoints: [
      "Google Chrome और Edge का रेंडरिंग इंजन Blink है।",
      "Mozilla Firefox का रेंडरिंग इंजन Gecko है।",
      "Apple Safari का रेंडरिंग इंजन WebKit है।",
      "Chrome का प्रसिद्ध जावास्क्रिप्ट इंजन V8 है।"
    ],
    commonMistakes: [
      "Google Chrome के रेंडरिंग इंजन को V8 कह देना (V8 जावास्क्रिप्ट इंजन है, रेंडरिंग इंजन Blink है)।"
    ],
    examPerspective: "Blink, Gecko, WebKit किस ब्राउज़र के इंजन हैं, और Google Chrome के JS इंजन (V8) पर प्रश्न हर परीक्षा में पूछे जाते हैं।",
    quickRevision: "Chrome/Edge: Blink + V8; Firefox: Gecko + SpiderMonkey; Safari: WebKit + JavaScriptCore.",
    relatedTopics: ["search-engines", "http-protocol", "www-architecture"],
    practiceTask: "अपने ब्राउज़र के कंसोल में `navigator.userAgent` टाइप करके अपने ब्राउज़र का इंजन चेक करें।"
  },
  {
    id: "u8-t12",
    slug: "http-protocol",
    unit: 8,
    unitSlug: "unit-8",
    unitTitle: "Web Publishing and Browsing",
    title: "HTTP Protocol (Methods, Status Codes, HTTP vs HTTPS)",
    hindiTitle: "HTTP प्रोटोकॉल (Methods, Status Codes, HTTP vs HTTPS)",
    definitionEnglish: "HTTP (HyperText Transfer Protocol) is an application-layer, stateless, collaborative, client-server communications protocol operating by default over TCP Port 80, governed by standard request methods (GET, POST, PUT, DELETE) and standardized 3-digit status code responses (200 OK, 301 Redirect, 404 Not Found, 500 Server Error).",
    definitionHindi: "HTTP (हाइपरटेक्स्ट ट्रांसफर प्रोटोकॉल) एक ऐप्लिकेशन-लेयर, स्टेटलेस, क्लाइंट-सर्वर संचार प्रोटोकॉल है जो डिफ़ॉल्ट रूप से TCP पोर्ट 80 पर काम करता है; यह मानक रिक्वेस्ट मेथड्स (GET, POST) और मानकीकृत 3-अंकों वाले स्टेटस कोड्स (200, 301, 404, 500) द्वारा संचालित होता है।",
    simpleWords: "HTTP इंटरनेट की वह भाषा है जिसमें ब्राउज़र सर्वर से कहता है 'मुझे यह पेज दो' (Request) और सर्वर कहता है 'यह लो, सब ठीक है' (Response: 200 OK) या 'यह पेज मुझे नहीं मिला' (Response: 404 Not Found)।",
    whyImportant: "यह पूरे वर्ल्ड वाइड वेब का सबसे मुख्य संचार प्रोटोकॉल है। इसके मेथड्स और स्टेटस कोड्स पर O-Level परीक्षा में सबसे अधिक प्रश्न पूछे जाते हैं।",
    detailedExplanation: `### 1. प्रमुख HTTP मेथड्स:
- **\`GET\`:** सर्वर से डेटा या वेबपेज केवल प्राप्त करना (डेटा सुरक्षित नहीं, URL में दिखता है)।
- **\`POST\`:** सर्वर पर नया डेटा भेजना (फॉर्म सबमिशन, लॉगिन, डेटा बॉडी में सुरक्षित जाता है)।
- **\`PUT\`:** सर्वर पर मौजूदा संसाधन को अपडेट या रिप्लेस करना।
- **\`DELETE\`:** सर्वर से किसी संसाधन को हटाना।

### 2. महत्वपूर्ण HTTP स्टेटस कोड्स (परीक्षा का हॉट टॉपिक!):
- **2xx (Success / सफलता):**
  - **\`200 OK\`:** रिक्वेस्ट पूरी तरह सफल रही, पेज मिल गया।
- **3xx (Redirection / पुनर्निर्देशन):**
  - **\`301 Moved Permanently\`:** पेज का URL स्थायी रूप से बदल गया है।
  - **\`302 Found / Temporary Redirect\`:** अस्थायी पुनर्निर्देशन।
- **4xx (Client Error / यूजर या ब्राउज़र की गलती):**
  - **\`400 Bad Request\`:** अमान्य सिंटैक्स।
  - **\`401 Unauthorized\`:** लॉगिन या पासवर्ड जरूरी है।
  - **\`403 Forbidden\`:** सर्वर ने एक्सेस देने से मना कर दिया (अनुमति नहीं)।
  - **\`404 Not Found\` (अति प्रसिद्ध):** मांगा गया पेज या फाइल सर्वर पर मौजूद नहीं है!
- **5xx (Server Error / सर्वर की गलती):**
  - **\`500 Internal Server Error\`:** सर्वर की स्क्रिप्ट या डेटाबेस में तकनीकी खराबी।
  - **\`503 Service Unavailable\`:** सर्वर अस्थायी रूप से ओवरलोड या मेंटेनेंस पर है।

### 3. HTTP बनाम HTTPS:
- **HTTP:** पोर्ट **80**, कोई एन्क्रिप्शन नहीं (असुरक्षित प्लेनटेक्स्ट)।
- **HTTPS:** पोर्ट **443**, **SSL/TLS** एन्क्रिप्शन (100% सुरक्षित, पैडलॉक आइकन)।`,
    syntax: `HTTP Response Structure:
HTTP/1.1 200 OK
Content-Type: text/html; charset=UTF-8
Content-Length: 1250

<!DOCTYPE html>...`,
    codeExample: `<!-- Fetching API with HTTP Status Code verification -->
<script>
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => {
      console.log("HTTP Status Code:", response.status); // 200
      console.log("Status Text:", response.statusText);   // OK
      return response.json();
    })
    .then(data => console.log("Received Payload:", data))
    .catch(err => console.error("Network Error:", err));
</script>`,
    outputExplanation: "ब्राउज़र कंसोल में `HTTP Status Code: 200` और `Status Text: OK` दिखाई देगा।",
    realWorldAnalogy: "जैसे डाक टिकट के साथ स्पीड पोस्ट की रसीद मिलती है: 'डिलीवर हो गया' (200 OK), 'पता नहीं मिला/मकान नंबर गलत' (404 Not Found), या 'डाकघर में हड़ताल है' (500 Server Error)।",
    importantPoints: [
      "HTTP का डिफ़ॉल्ट पोर्ट 80 है।",
      "HTTPS का डिफ़ॉल्ट पोर्ट 443 है।",
      "200 = Success, 301 = Permanent Redirect, 404 = Not Found, 500 = Server Error.",
      "HTTP एक स्टेटलेस (Stateless) प्रोटोकॉल है (यह पुरानी रिक्वेस्ट्स को याद नहीं रखता)।"
    ],
    commonMistakes: [
      "404 एरर को सर्वर की गलती समझना (404 क्लाइंट एरर है क्योंकि यूजर ने गलत URL टाइप किया है; 500 सर्वर एरर है)।"
    ],
    examPerspective: "HTTP और HTTPS के पोर्ट नंबर्स (80 व 443), 404 Not Found, 200 OK, 500 Internal Server Error, और GET vs POST पर प्रश्न निश्चित आते हैं।",
    quickRevision: "HTTP = पोर्ट 80; HTTPS = पोर्ट 443 (SSL)। कोड्स: 200 (सफल), 301 (रीडायरेक्ट), 404 (पेज नहीं मिला), 500 (सर्वर क्रैश)।",
    relatedTopics: ["www-architecture", "browser-architecture", "web-hosting-basics"],
    practiceTask: "ब्राउज़र में किसी वेबसाइट के आगे जानबूझकर गलत नाम लिखकर (उदा. `google.com/xyz12345`) 404 एरर पेज देखें।"
  },
  {
    id: "u8-t13",
    slug: "publishing-tools",
    unit: 8,
    unitSlug: "unit-8",
    unitTitle: "Web Publishing and Browsing",
    title: "Publishing Tools (FileZilla FTP, cPanel, GitHub Pages)",
    hindiTitle: "पब्लिशिंग टूल्स (FileZilla FTP क्लाइंट, cPanel, GitHub)",
    definitionEnglish: "Web Publishing Tools are software applications and web-based control panels used to transfer, manage, configure, deploy, and update website files on remote web servers, notably FTP/SFTP clients (FileZilla, WinSCP), hosting control panels (cPanel File Manager), and modern Git deployment platforms (GitHub Pages).",
    definitionHindi: "वेब पब्लिशिंग टूल्स वे सॉफ्टवेयर ऐप्लिकेशन्स और वेब-आधारित कंट्रोल पैनल्स हैं जिनका उपयोग रिमोट वेब सर्वर पर वेबसाइट फाइलों को ट्रांसफर करने, प्रबंधित करने, तैनात करने और अपडेट करने के लिए किया जाता है; इनमें प्रमुख रूप से FTP/SFTP क्लाइंट्स (FileZilla), होस्टिंग कंट्रोल पैनल्स (cPanel), और आधुनिक Git प्लेटफॉर्म्स (GitHub Pages) शामिल हैं।",
    simpleWords: "यह आपकी फाइलों को आपके कंप्यूटर से उठाकर इंटरनेट के सर्वर पर पहुंचाने वाले कूरियर वाहन हैं। FileZilla सबसे प्रसिद्ध मुफ्त सॉफ्टवेयर है जिससे आप फाइलों को ड्रैग-एंड-ड्रॉप करके सर्वर पर अपलोड कर देते हैं।",
    whyImportant: "वेबसाइट तैयार होने के बाद उसे लाइव करने के लिए FTP क्लाइंट का संचालन O-Level प्रैक्टिकल और थ्योरी दोनों का अभिन्न हिस्सा है।",
    detailedExplanation: `### प्रमुख पब्लिशिंग टूल्स का विस्तृत विवरण:
1. **FileZilla (सर्वाधिक लोकप्रिय FTP क्लाइंट - परीक्षा का मुख्य बिंदु!):**
   - यह एक फ्री और ओपन-सोर्स क्रॉस-प्लेटफॉर्म (Windows, Mac, Linux) **FTP / SFTP क्लाइंट** है।
   - **Quickconnect हेतु आवश्यक 4 जानकारियां:**
     1. **Host:** सर्वर का IP एड्रेस या FTP डोमेन (उदा. \`ftp.mysite.com\`)।
     2. **Username:** होस्टिंग खाता यूजरनेम।
     3. **Password:** गुप्त पासवर्ड।
     4. **Port:** डिफ़ॉल्ट रूप से **21** (FTP हेतु) या **22** (SFTP हेतु)।
   - **स्क्रीन लेआउट:** बाईं तरफ आपके कंप्यूटर की लोकल फाइलें दिखती हैं और दाईं तरफ रिमोट सर्वर की फाइलें दिखती हैं; ड्रैग-एंड-ड्रॉप से अपलोड होता है।
2. **cPanel File Manager:**
   - वेब ब्राउज़र के अंदर चलने वाला होस्टिंग कंट्रोल पैनल।
   - बिना किसी सॉफ्टवेयर के सीधे ब्राउज़र से ZIP फाइल अपलोड और अनज़िप की जा सकती है।
3. **GitHub Pages:**
   - आधुनिक Git-आधारित निःशुल्क स्टैटिक वेब होस्टिंग प्लेटफॉर्म।`,
    syntax: `FileZilla Quickconnect Parameters:
Host     : ftp.yourdomain.com
Username : ftp_user
Password : **********
Port     : 21 (FTP) or 22 (SFTP)`,
    codeExample: `<!-- Standard server public directory hierarchy in FTP -->
Remote site: /public_html/
├── index.html        <-- Uploaded via FileZilla
├── css/style.css
├── js/main.js
└── images/logo.png`,
    outputExplanation: "फाइलें सर्वर के `public_html` या `www` फोल्डर में जाते ही पूरी दुनिया के लिए तुरंत लाइव हो जाती हैं।",
    realWorldAnalogy: "FileZilla एक डिजिटल मालगाड़ी जैसा है जिसमें आप अपने कंप्यूटर से बक्से (फाइलें) लादते हैं और सर्वर के स्टेशन पर उतार देते हैं।",
    importantPoints: [
      "FileZilla एक लोकप्रिय मुफ्त FTP क्लाइंट है।",
      "FTP का डिफ़ॉल्ट पोर्ट 21 होता है।",
      "SFTP (सुरक्षित FTP) का डिफ़ॉल्ट पोर्ट 22 होता है।",
      "वेबसाइट फाइलों को हमेशा 'public_html' या 'htdocs' फोल्डर में अपलोड किया जाता है।"
    ],
    commonMistakes: [
      "फाइलों को रूट फोल्डर में अपलोड करने के बजाय किसी अंदरूनी फोल्डर में अपलोड कर देना (जिससे मुख्य डोमेन पर साइट नहीं खुलती)।"
    ],
    examPerspective: "FileZilla किस प्रकार का टूल है (FTP Client), FTP और SFTP के पोर्ट नंबर्स (21 और 22), और Quickconnect के 4 घटकों पर प्रश्न आते हैं।",
    quickRevision: "पब्लिशिंग टूल्स: FileZilla (FTP क्लाइंट, पोर्ट 21/22), cPanel (वेब मैनेजर), GitHub Pages। फाइलें public_html में अपलोड होती हैं।",
    relatedTopics: ["overview-of-web-publishing", "web-hosting-basics", "components-of-web-publishing"],
    practiceTask: "FileZilla डाउनलोड करें, उसका इंटरफेस देखें और पहचानें कि Local Site (बाएं) और Remote Site (दाएं) कहाँ है।"
  }
];
