// Unit 1: Introduction to Web Design - Complete Topic Notes

export const unit1Topics = [
  {
    id: "u1-t1",
    slug: "introduction-of-internet",
    unit: 1,
    unitSlug: "unit-1",
    unitTitle: "Introduction to Web Design",
    title: "Introduction of Internet",
    hindiTitle: "इंटरनेट का परिचय",
    definitionEnglish: "The Internet (Interconnected Network) is a massive, decentralized global network of interconnected computer networks that communicate using the standard Internet Protocol Suite (TCP/IP).",
    definitionHindi: "इंटरनेट (Interconnected Network) दुनिया भर के कंप्यूटर नेटवर्कों का एक विशाल, विकेंद्रीकृत वैश्विक जाल है जो सूचनाओं के आदान-प्रदान के लिए मानक TCP/IP प्रोटोकॉल सूट का उपयोग करता है।",
    simpleWords: "सरल शब्दों में, इंटरनेट दुनिया के सभी कंप्यूटरों, स्मार्टफोनों और सर्वरों को आपस में जोड़ने वाला एक विशाल डिजिटल महामार्ग (Highway) है, जिसके जरिए हम सेकंडों में डेटा और मैसेज भेज सकते हैं।",
    whyImportant: "बिना इंटरनेट के वेब डिजाइनिंग का कोई अस्तित्व नहीं है। एक वेब डेवलपर के रूप में यह जानना आवश्यक है कि आपका बनाया वेबपेज डेटा पैकेट्स के रूप में क्लाइंट तक कैसे पहुंचता है।",
    detailedExplanation: `### 1. इंटरनेट का संक्षिप्त इतिहास एवं मुख्य पड़ाव
- **1969 — ARPANET:** अमेरिकी रक्षा विभाग (DoD) द्वारा शुरू किया गया दुनिया का पहला पैकेट-स्विचिंग नेटवर्क। यह आधुनिक इंटरनेट का सीधा पूर्वज है।
- **1974 — TCP/IP:** Vinton Cerf और Bob Kahn ने TCP/IP प्रोटोकॉल का आविष्कार किया। इन्हें **"Father of the Internet"** कहा जाता है।
- **1 जनवरी 1983 ("Flag Day"):** ARPANET ने आधिकारिक रूप से TCP/IP को मानक माना। यह आधुनिक इंटरनेट का जन्मदिवस माना जाता है।
- **15 अगस्त 1995:** भारत में आम जनता के लिए इंटरनेट सेवा **VSNL (विदेश संचार निगम लिमिटेड)** द्वारा शुरू की गई।

### 2. इंटरनेट कैसे काम करता है? (Packet Switching)
इंटरनेट सर्किट स्विचिंग (जैसे पुराना लैंडलाइन फोन) का उपयोग नहीं करता, बल्कि **Packet Switching** तकनीक पर काम करता है।
1. डेटा को छोटे टुकड़ों (Packets) में काटा जाता है।
2. प्रत्येक पैकेट में Source IP, Destination IP और Sequence Number होता है।
3. पैकेट्स अलग-अलग रास्तों से गंतव्य तक पहुंचते हैं और वहां दोबारा सही क्रम में जुड़ जाते हैं।

### 3. IP Addressing (IPv4 बनाम IPv6)
- **IPv4:** 32 बिट्स (4 बाइट्स), 4 ऑक्टेट्स डॉट द्वारा अलग (\`192.168.1.1\`), कुल ~4.29 बिलियन पते।
- **IPv6:** 128 बिट्स (16 बाइट्स), हेक्साडेसीमल 8 ग्रुप्स कोलन द्वारा अलग (\`2001:0db8::1\`), वस्तुतः असीमित पते।`,
    syntax: `IP Address Format:
IPv4: [0-255].[0-255].[0-255].[0-255] (e.g., 172.217.167.78)
IPv6: 8 groups of 4 hex digits separated by colons`,
    codeExample: `<!-- Checking IP and Network connectivity in web apps -->
<script>
  // Browsers interact with internet via fetch API
  fetch("https://api.ipify.org?format=json")
    .then(response => response.json())
    .then(data => console.log("User Public IP:", data.ip));
</script>`,
    outputExplanation: "ब्राउज़र DNS सर्वर से IP एड्रेस प्राप्त करता है और TCP 3-Way Handshake के जरिए सर्वर से कनेक्ट होकर डेटा प्राप्त करता है।",
    realWorldAnalogy: "जैसे भारतीय डाक सेवा में आपका बड़ा पार्सल अलग-अलग पोस्टल वैन से होकर गुजरता है और रिसीवर के पते पर पहुंचकर पूरा जुड़ जाता है, ठीक वैसे ही इंटरनेट डेटा पैकेट्स को भेजता है।",
    importantPoints: [
      "Internet का पूरा नाम Interconnected Network है।",
      "TCP/IP इंटरनेट का मूलभूत संचार प्रोटोकॉल है।",
      "IPv4 = 32 Bits, IPv6 = 128 Bits.",
      "भारत में इंटरनेट 15 अगस्त 1995 को VSNL द्वारा शुरू किया गया।"
    ],
    commonMistakes: [
      "इंटरनेट और WWW को एक ही समझना (इंटरनेट हार्डवेयर नेटवर्क है, WWW उस पर चलने वाली सॉफ्टवेयर सेवा है)।",
      "IPv4 को 64-bit समझना (IPv4 केवल 32-bit होता है)।"
    ],
    examPerspective: "O-Level परीक्षा में IPv4 और IPv6 की बिट लंबाई, Vinton Cerf का नाम, और भारत में इंटरनेट की शुरुआत की तारीख (15 अगस्त 1995) सीधे पूछी जाती है।",
    quickRevision: "इंटरनेट TCP/IP आधारित पैकेट-स्विचिंग वैश्विक नेटवर्क है। जनक: Vint Cerf व Bob Kahn. IPv4 = 32 bits, IPv6 = 128 bits.",
    relatedTopics: ["www", "working-of-websites", "client-side-scripting-languages"],
    practiceTask: "कमांड प्रॉम्प्ट खोलें और `ping google.com` टाइप करके देखें कि आपका कंप्यूटर गूगल सर्वर के IP एड्रेस को कैसे ढूंढता है।"
  },
  {
    id: "u1-t2",
    slug: "www",
    unit: 1,
    unitSlug: "unit-1",
    unitTitle: "Introduction to Web Design",
    title: "WWW (World Wide Web)",
    hindiTitle: "वर्ल्ड वाइड वेब (WWW)",
    definitionEnglish: "The World Wide Web (WWW or W3) is an information system where documents and other web resources are identified by URLs, interlinked by hypertext links, and accessible over the Internet.",
    definitionHindi: "वर्ल्ड वाइड वेब (WWW या W3) इंटरनेट पर आधारित सूचनाओं का एक ऐसा तंत्र है जिसमें वेब दस्तावेज़ URLs द्वारा पहचाने जाते हैं और हाइपरटेक्स्ट लिंक्स द्वारा आपस में जुड़े होते हैं।",
    simpleWords: "सरल शब्दों में, WWW इंटरनेट पर मौजूद करोड़ों वेबसाइटों और वेबपेजों की वह डिजिटल लाइब्रेरी है, जिसे हम ब्राउज़र में लिंक पर क्लिक करके खोलते और पढ़ते हैं।",
    whyImportant: "वेबसाइट डिजाइनिंग सीधे WWW के लिए ही की जाती है। HTML, CSS, और जावास्क्रिप्ट वे तीन मूलभूत तकनीकें हैं जिन पर पूरा वेब टिका है।",
    detailedExplanation: `### 1. WWW का आविष्कार
- **आविष्कारक:** **Sir Tim Berners-Lee** ने **1989** में स्विट्जरलैंड की **CERN** प्रयोगशाला में WWW का आविष्कार किया।
- उन्होंने 1990 में पहला वेब ब्राउज़र (WorldWideWeb, बाद में Nexus नाम दिया) और पहला वेब सर्वर (CERN httpd) बनाया।
- दुनिया की पहली वेबसाइट **6 अगस्त 1991** को लाइव हुई थी: \`http://info.cern.ch\`।

### 2. WWW के चार प्रमुख स्तंभ (Core Pillars)
1. **URL (Uniform Resource Locator):** वेब पर किसी भी संसाधन का अद्वितीय पता।
2. **HTTP / HTTPS:** ब्राउज़र और सर्वर के बीच वेबपेज ट्रांसफर करने का प्रोटोकॉल।
3. **HTML:** वेबपेज की संरचना तैयार करने वाली मार्कअप भाषा।
4. **Web Browser:** HTML कोड को रेंडर करके मानवीय रूप में दिखाने वाला सॉफ्टवेयर।

### 3. W3C (World Wide Web Consortium)
- 1994 में Tim Berners-Lee द्वारा स्थापित।
- यह वेब मानकों (HTML5, CSS3, SVG, Accessibility) को तय करने वाली अंतरराष्ट्रीय संस्था है।`,
    syntax: `URI Formula:
URI = URL ∪ URN
URL Format: protocol://subdomain.domain:port/path?query#fragment`,
    codeExample: `<!-- The Hyperlink that connects the World Wide Web -->
<a href="https://info.cern.ch" target="_blank" title="First Website on WWW">
  Visit the First Website on the WWW
</a>`,
    outputExplanation: "एंकर टैग पर क्लिक करते ही ब्राउज़र DNS से IP ढूंढकर उस सर्वर को HTTP GET रिक्वेस्ट भेजता है और पेज लोड करता है।",
    realWorldAnalogy: "यदि इंटरनेट राष्ट्रीय राजमार्ग (Highway) है, तो WWW उस पर चलने वाली बसें, कारें और उनमें बैठी सवारियां (सूचनाएं) हैं।",
    importantPoints: [
      "WWW का आविष्कार 1989 में Tim Berners-Lee ने CERN में किया।",
      "पहली वेबसाइट info.cern.ch थी।",
      "W3C वेब के तकनीकी मानकों को नियंत्रित और मानकीकृत करता है।"
    ],
    commonMistakes: [
      "Tim Berners-Lee को इंटरनेट का जनक मान लेना (वे WWW के जनक हैं, इंटरनेट के जनक Vint Cerf हैं)।"
    ],
    examPerspective: "सीधे पूछे जाने वाले प्रश्न: WWW का आविष्कार कब और किसने किया? CERN का मुख्यालय कहाँ है? पहली वेबसाइट कौन सी थी?",
    quickRevision: "WWW हाइपरटेक्स्ट आधारित सूचना तंत्र है। आविष्कारक: टिम बर्नर्स-ली (1989, CERN)। मानक संस्था: W3C।",
    relatedTopics: ["introduction-of-internet", "website", "webpages"],
    practiceTask: "ब्राउज़र के एड्रेस बार में `http://info.cern.ch` खोलकर दुनिया की पहली मूल वेबसाइट का लेआउट देखें।"
  },
  {
    id: "u1-t3",
    slug: "website",
    unit: 1,
    unitSlug: "unit-1",
    unitTitle: "Introduction to Web Design",
    title: "Website",
    hindiTitle: "वेबसाइट",
    definitionEnglish: "A Website is a collection of publicly accessible, interlinked web pages and multimedia assets that share a single domain name and are hosted on at least one web server.",
    definitionHindi: "वेबसाइट एक ही डोमेन नाम के तहत जुड़े हुए वेबपेजों, इमेजेस और डिजिटल संसाधनों का एक ऐसा संग्रह है जो किसी वेब सर्वर पर होस्ट किया जाता है।",
    simpleWords: "वेबसाइट इंटरनेट पर किसी व्यक्ति, कंपनी या संस्था का डिजिटल घर या ऑफिस है, जहां उनके बारे में सारी जानकारी पेजों के रूप में उपलब्ध होती है।",
    whyImportant: "वेब डिजाइनर का मुख्य काम ही संपूर्ण वेबसाइट का लेआउट, नेविगेशन फ्लो, और यूजर एक्सपीरियंस तैयार करना होता है।",
    detailedExplanation: `### 1. वेबसाइट के मुख्य घटक (Key Components)
- **Domain Name:** वेबसाइट का नाम जिसे लोग ब्राउज़र में टाइप करते हैं (उदा. \`nielit.gov.in\`)।
- **Web Hosting:** वह वेब सर्वर जहां वेबसाइट की HTML, CSS, इमेज और डेटाबेस फाइलें 24x7 स्टोर रहती हैं।
- **Home Page:** वेबसाइट का पहला मुख्य लैंडिंग पेज (आमतौर पर \`index.html\`)।
- **Navigation Bar (मेन्यू):** सभी पेजों के बीच आने-जाने के लिंक्स का समूह।

### 2. वेबसाइट का वर्गीकरण
- **उद्देश्य के आधार पर:** ई-कॉमर्स (Amazon), सोशल मीडिया (Facebook), शैक्षणिक (NIELIT), ब्लॉग, समाचार पोर्टल।
- **प्रकृति के आधार पर:** स्टैटिक वेबसाइट (स्थिर सामग्री) और डायनामिक वेबसाइट (डेटाबेस आधारित परिवर्तनशील सामग्री)।`,
    syntax: `Standard Website File Structure:
my-website/
├── index.html        (Home Page)
├── about.html        (About Page)
├── contact.html      (Contact Form)
├── css/
│   └── style.css     (Global Stylesheet)
├── js/
│   └── main.js       (Interactivity)
└── images/
    └── logo.png`,
    codeExample: `<!-- Navigation Menu of a Website -->
<nav class="site-nav">
  <a href="index.html">Home</a>
  <a href="about.html">About Us</a>
  <a href="courses.html">O-Level Courses</a>
  <a href="contact.html">Contact</a>
</nav>`,
    outputExplanation: "यह नेविगेशन बार यूजर को वेबसाइट के विभिन्न संबंधित वेबपेजों पर आसानी से जाने की सुविधा देता है।",
    realWorldAnalogy: "वेबसाइट एक पूरी किताब की तरह है जिसमें कई अध्याय (वेबपेज) एक ही जिल्द (डोमेन) के नीचे बंधे होते हैं।",
    importantPoints: [
      "वेबसाइट का डिफॉल्ट मुख्य पेज हमेशा 'index.html' नाम से सेव किया जाता है।",
      "एक वेबसाइट में एक या हजारों वेबपेज हो सकते हैं।"
    ],
    commonMistakes: [
      "होमपेज का नाम `home.html` रखकर सर्वर पर अपलोड करना (सर्वर सबसे पहले `index.html` खोजता है)।"
    ],
    examPerspective: "परीक्षा में पूछा जाता है: 'वेबसाइट का पहला पेज क्या कहलाता है?' (उत्तर: Home Page / index.html).",
    quickRevision: "वेबसाइट संबंधित वेबपेजों का संग्रह है जो एक डोमेन नाम पर किसी वेब सर्वर पर होस्ट होती है।",
    relatedTopics: ["webpages", "working-of-websites", "types-of-websites"],
    practiceTask: "अपने कंप्यूटर पर एक फोल्डर बनाएं, उसमें `index.html` और `about.html` बनाकर हाइपरलिंक से जोड़ें।"
  },
  {
    id: "u1-t4",
    slug: "working-of-websites",
    unit: 1,
    unitSlug: "unit-1",
    unitTitle: "Introduction to Web Design",
    title: "Working of Websites",
    hindiTitle: "वेबसाइट कैसे काम करती है (Client-Server Architecture)",
    definitionEnglish: "The working of websites is based on the Client-Server model, where a web browser (client) requests web resources over HTTP/HTTPS from a web server via DNS resolution, and the server processes and returns the HTML/CSS/JS payload.",
    definitionHindi: "वेबसाइट की कार्यप्रणाली क्लाइंट-सर्वर मॉडल पर आधारित है, जहां ब्राउज़र (क्लाइंट) DNS के जरिए वेब सर्वर का पता लगाकर HTTP रिक्वेस्ट भेजता है और सर्वर उस रिक्वेस्ट को प्रोसेस कर वेबपेज वापस भेजता है।",
    simpleWords: "जब आप ब्राउज़र में किसी वेबसाइट का नाम लिखते हैं, तो आपका कंप्यूटर उस नाम का IP पता पूछता है, उस पते वाले कंप्यूटर (सर्वर) से पेज मांगता है, और सर्वर उस पेज को आपके स्क्रीन पर भेज देता है।",
    whyImportant: "वेबसाइट की गति, सुरक्षा और लोडिंग प्रक्रिया को समझने से आप बेहतर, तेज और ऑप्टिमाइज्ड वेबपेज बना सकते हैं।",
    detailedExplanation: `### वेबसाइट लोडिंग के 6 मुख्य चरण:
1. **URL Typing:** यूजर ब्राउज़र में \`https://www.google.com\` लिखता है।
2. **DNS Resolution (फोनबुक लुकअप):** ब्राउज़र DNS सर्वर से पूछता है कि \`google.com\` का IP एड्रेस क्या है (उदा. \`142.250.190.46\`)।
3. **TCP Connection (Handshake):** ब्राउज़र सर्वर के IP एड्रेस और पोर्ट (80/443) पर सुरक्षित 3-Way Handshake स्थापित करता है।
4. **HTTP Request:** ब्राउज़र सर्वर को \`GET /index.html HTTP/1.1\` रिक्वेस्ट भेजता है।
5. **Server Processing & Response:** वेब सर्वर (Apache/Nginx) फाइल को खोजता है और \`200 OK\` स्टेटस कोड के साथ HTML डेटा भेजता है।
6. **Browser Rendering:** ब्राउज़र का रेंडरिंग इंजन HTML से DOM ट्री और CSS से CSSOM बनाकर स्क्रीन पर सुंदर पेज प्रदर्शित करता है।`,
    syntax: `Client-Server Workflow:
[Browser] ---1. DNS Query---> [DNS Server]
[Browser] <--2. Return IP---- [DNS Server]
[Browser] ---3. HTTP Request-> [Web Server]
[Browser] <--4. HTTP Payload- [Web Server]`,
    codeExample: `// Browser DevTools Console: Checking Network Lifecycle
console.log("Navigation started at:", performance.timing.navigationStart);
console.log("DNS Lookup time:", performance.timing.domainLookupEnd - performance.timing.domainLookupStart, "ms");
console.log("Response time:", performance.timing.responseEnd - performance.timing.requestStart, "ms");`,
    outputExplanation: "ब्राउज़र के परफॉर्मेंस API से पता चलता है कि DNS लुकअप और सर्वर रिस्पॉन्स में कितने मिलीसेकंड का समय लगा।",
    realWorldAnalogy: "जैसे आप रेस्टोरेंट में मेनू देखकर वेटर (Request) को ऑर्डर देते हैं, वेटर किचन (Server) से खाना (Response) लाकर आपकी टेबल पर परोसता है।",
    importantPoints: [
      "वेबसाइट क्लाइंट-सर्वर आर्किटेक्चर पर काम करती है।",
      "क्लाइंट = वेब ब्राउज़र (Chrome, Firefox).",
      "सर्वर = वेब सर्वर सॉफ्टवेयर (Apache, Nginx, IIS).",
      "कम्युनिकेशन = HTTP / HTTPS प्रोटोकॉल।"
    ],
    commonMistakes: [
      "यह सोचना कि ब्राउज़र डोमेन नाम को सीधे समझता है (ब्राउज़र केवल IP एड्रेस पर कनेक्ट हो सकता है, नाम को IP में DNS बदलता है)।"
    ],
    examPerspective: "DNS का कार्य, क्लाइंट-सर्वर मॉडल के घटक, और HTTP रिक्वेस्ट-रिस्पॉन्स साइकिल पर बार-बार प्रश्न आते हैं।",
    quickRevision: "यूजर URL डालता है -> DNS नाम को IP में बदलता है -> ब्राउज़र HTTP GET रिक्वेस्ट भेजता है -> सर्वर 200 OK के साथ HTML पेज भेजता है।",
    relatedTopics: ["client-side-scripting-languages", "server-side-scripting-languages", "webpages"],
    practiceTask: "ब्राउज़र में F12 दबाकर 'Network' टैब खोलें और किसी भी पेज को रीलोड करके HTTP स्टेटस कोड (200) और फाइल ट्रांसफर देखें।"
  },
  {
    id: "u1-t5",
    slug: "webpages",
    unit: 1,
    unitSlug: "unit-1",
    unitTitle: "Introduction to Web Design",
    title: "Webpages",
    hindiTitle: "वेबपेज (Webpages)",
    definitionEnglish: "A Webpage is a single digital hypertext document on the World Wide Web, typically written in HTML, that can be viewed in an internet browser and contains text, links, graphics, and multimedia.",
    definitionHindi: "वेबपेज वर्ल्ड वाइड वेब पर उपलब्ध एक अकेला डिजिटल हाइपरटेक्स्ट दस्तावेज़ होता है, जिसे HTML में लिखा जाता है और जिसमें टेक्स्ट, हाइपरलिंक्स, इमेजेस और मल्टीमीडिया शामिल होते हैं।",
    simpleWords: "वेबपेज इंटरनेट पर दिखने वाला कोई भी एक अकेला पन्ना है, जैसे विकिपीडिया का कोई एक आर्टिकल या यूट्यूब का कोई एक वीडियो पेज।",
    whyImportant: "वेबपेज ही वेब डिजाइनिंग की सबसे बुनियादी निर्माण इकाई (Building Block) है।",
    detailedExplanation: `### 1. वेबपेज के मुख्य भाग:
- **Header:** कंपनी का लोगो, स्लोगन और मुख्य हेडिंग।
- **Navigation Bar:** अन्य पेजों के लिंक्स।
- **Main Content:** उस पेज की मुख्य जानकारी, आर्टिकल, फॉर्म या उत्पाद।
- **Sidebar (वैकल्पिक):** साइड लिंक्स, विज्ञापन या संबंधित लेख।
- **Footer:** कॉपीराइट जानकारी, प्राइवेसी पॉलिसी और सोशल मीडिया लिंक्स।

### 2. वेबपेज की संरचना में प्रयुक्त भाषाएं:
- **HTML:** कंकाल (Skeleton) - हेडिंग, पैराग्राफ, टेबल, फॉर्म।
- **CSS:** रूप-रंग (Style) - रंग, फोंट, मार्जिन, बैकग्राउंड।
- **JavaScript:** व्यवहार (Interactivity) - पॉपअप, वैलिडेशन, स्लाइडर।`,
    syntax: `Basic Webpage Skeleton:
<!DOCTYPE html>
<html>
  <head><title>My Webpage</title></head>
  <body>
    <h1>Welcome to My Page</h1>
  </body>
</html>`,
    codeExample: `<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="UTF-8">
  <title>पहला वेबपेज</title>
</head>
<body>
  <h1>नमस्ते! यह एक वेबपेज है।</h1>
  <p>यह HTML में लिखा गया एक स्वतंत्र दस्तावेज़ है।</p>
  <a href="https://nielit.gov.in">NIELIT पोर्टल पर जाएं</a>
</body>
</html>`,
    outputExplanation: "ब्राउज़र इस कोड को प्रोसेस करके एक हेडिंग, एक पैराग्राफ और एक क्लिक करने योग्य नीला हाइपरलिंक दिखाता है।",
    realWorldAnalogy: "वेबसाइट अगर पूरी मैगजीन है, तो वेबपेज उस मैगजीन का कोई एक सुंदर छपा हुआ पेज है।",
    importantPoints: [
      "वेबपेज का एक्सटेंशन .html या .htm होता है।",
      "प्रत्येक वेबपेज का अपना एक यूनिक URL होता है।"
    ],
    commonMistakes: [
      "वेबसाइट और वेबपेज को पर्यायवाची समझना (वेबपेज अकेला दस्तावेज़ है, वेबसाइट उनका समूह है)।"
    ],
    examPerspective: "वेबपेज की परिभाषा और इसके मूल घटकों (Header, Content, Footer) पर प्रश्न पूछे जाते हैं।",
    quickRevision: "वेबपेज एक अकेला HTML दस्तावेज़ है जो अद्वितीय URL द्वारा पहचाना जाता है।",
    relatedTopics: ["website", "front-end", "basic-structure-of-html"],
    practiceTask: "नोटपैड में एक साधारण HTML फाइल बनाकर उसे `myfirstpage.html` नाम से सेव करें और क्रोम में खोलें।"
  },
  {
    id: "u1-t6",
    slug: "front-end",
    unit: 1,
    unitSlug: "unit-1",
    unitTitle: "Introduction to Web Design",
    title: "Front End",
    hindiTitle: "फ्रंट-एंड (Front End)",
    definitionEnglish: "The Front End (also known as client-side) of a website refers to everything that users see, interact with, and experience directly in their web browser, including layout, typography, colors, animations, and forms.",
    definitionHindi: "वेबसाइट का फ्रंट-एंड (क्लाइंट-साइड) वह दृश्यमान भाग है जिसे यूजर अपने वेब ब्राउज़र में सीधे देखता है और जिसके साथ बातचीत (क्लिक, टाइप, स्क्रॉल) करता है।",
    simpleWords: "कार का स्टीयरिंग व्हील, डैशबोर्ड, स्पीडोमीटर और आरामदायक सीटें उसका फ्रंट-एंड हैं। इसी तरह वेबसाइट के बटन, रंग, मेन्यू और टेक्स्ट उसका फ्रंट-एंड कहलाते हैं।",
    whyImportant: "O-Level M2-R5.1 मॉड्यूल मुख्य रूप से फ्रंट-एंड डेवलपमेंट (HTML, CSS, W3.CSS, JS) पर ही केंद्रित है।",
    detailedExplanation: `### फ्रंट-एंड की त्रिमूर्ति (The Front-End Triad):
1. **HTML (HyperText Markup Language):** पेज की मूल सामग्री और संरचना (Structural Layer)।
2. **CSS (Cascading Style Sheets):** रूप-रंग, सौंदर्य, स्पेसिंग और लेआउट (Presentation Layer)।
3. **JavaScript:** डायनामिक एक्शन, बटन क्लिक रिस्पॉन्स, और लॉजिक (Behavioral Layer)।

### फ्रंट-एंड डेवलपर की जिम्मेदारियां:
- वेबसाइट को मोबाइल, टैबलेट और डेस्कटॉप पर सुंदर और रिस्पॉन्सिव बनाना।
- यूजर एक्सपीरियंस (UI/UX) को सरल और सहज रखना।
- वेबपेज की लोडिंग स्पीड को तेज रखना।`,
    syntax: `Frontend Triad:
HTML (Structure) + CSS (Presentation) + JavaScript (Interactivity)`,
    codeExample: `<!-- Front-End Example: Complete Triad in One Snippet -->
<div id="card" style="border: 2px solid #0284c7; padding: 15px; border-radius: 8px; max-width: 250px;">
  <h3 style="color: #0284c7; margin-top: 0;">Frontend Card</h3>
  <button onclick="changeColor()" style="background: #0284c7; color: white; border: none; padding: 6px 12px; border-radius: 4px; cursor: pointer;">
    Click Me
  </button>
</div>

<script>
  function changeColor() {
    document.getElementById("card").style.backgroundColor = "#e0f2fe";
  }
</script>`,
    outputExplanation: "HTML ने बॉक्स बनाया, CSS ने उसे नीला बॉर्डर और पैडिंग दी, और जावास्क्रिप्ट ने बटन क्लिक पर बैकग्राउंड रंग बदल दिया।",
    realWorldAnalogy: "मानव शरीर में हड्डियां (HTML), त्वचा और कपड़े (CSS), और मांसपेशियां व दिमाग (JavaScript) मिलकर फ्रंट-एंड बनाते हैं।",
    importantPoints: [
      "फ्रंट-एंड यूजर के ब्राउज़र में निष्पादित होता है।",
      "मुख्य भाषाएं: HTML, CSS, JavaScript.",
      "फ्रेमवर्क: W3.CSS, Bootstrap, React, AngularJS."
    ],
    commonMistakes: [
      "यह सोचना कि डेटाबेस फ्रंट-एंड में होता है (डेटाबेस हमेशा सुरक्षित बैक-एंड में रहता है)।"
    ],
    examPerspective: "फ्रंट-एंड और बैक-एंड में अंतर, तथा फ्रंट-एंड में प्रयुक्त मुख्य तकनीकों पर प्रश्न आते हैं।",
    quickRevision: "फ्रंट-एंड वेबसाइट का यूजर-फेसिंग भाग है जो HTML, CSS और JS से बनता है और ब्राउज़र में चलता है।",
    relatedTopics: ["back-end", "client-side-scripting-languages", "introduction-to-css"],
    practiceTask: "एक बटन बनाएं जिस पर क्लिक करने पर उसका टेक्स्ट 'Clicked!' में बदल जाए।"
  },
  {
    id: "u1-t7",
    slug: "back-end",
    unit: 1,
    unitSlug: "unit-1",
    unitTitle: "Introduction to Web Design",
    title: "Back End",
    hindiTitle: "बैक-एंड (Back End)",
    definitionEnglish: "The Back End (also known as server-side) of a website consists of the server, application logic, and database that operate behind the scenes to process data, manage business logic, authenticate users, and serve dynamic content to the front end.",
    definitionHindi: "बैक-एंड (सर्वर-साइड) वेबसाइट का वह भीतरी अदृश्य भाग है जिसमें वेब सर्वर, ऐप्लिकेशन लॉजिक और डेटाबेस शामिल होते हैं, जो डेटा प्रोसेसिंग, यूजर ऑथेंटिकेशन और सुरक्षा का काम करते हैं।",
    simpleWords: "रेस्टोरेंट में शेफ और किचन का स्टाफ जो पर्दे के पीछे खाना पकाता है, वह उसका बैक-एंड है। वेबसाइट में यूजर का पासवर्ड चेक करना और डेटा सेव करना बैक-एंड का काम है।",
    whyImportant: "यद्यपि M2-R5.1 मुख्य रूप से फ्रंट-एंड पर है, लेकिन फॉर्म डेटा कहां जाता है और सर्वर उसे कैसे प्रोसेस करता है, यह समझना परिपक्व वेब डिजाइन के लिए जरूरी है।",
    detailedExplanation: `### बैक-एंड के तीन मुख्य घटक:
1. **Server (सर्वर):** वह शक्तिशाली कंप्यूटर और ऑपरेटिंग सिस्टम (Linux, Windows Server) जो इंटरनेट से जुड़ा रहता है।
2. **Application (सर्वर-साइड प्रोग्राम):** सर्वर पर चलने वाला कोड जो बिजनेस लॉजिक चलाता है (Python, PHP, Node.js, Java)।
3. **Database (डेटाबेस):** जहां यूजर्स, ऑर्डर्स, और पासवर्ड्स सुरक्षित स्टोर रहते हैं (MySQL, Oracle, MongoDB)।

### बैक-एंड के प्रमुख कार्य:
- यूजर लॉगिन और पासवर्ड एन्क्रिप्शन।
- डेटाबेस में नया रिकॉर्ड सेव करना या खोजना।
- पेमेंट गेटवे का सुरक्षित संचालन।
- ईमेल या OTP नोटिफिकेशन भेजना।`,
    syntax: `Backend Architecture:
[Browser / Frontend] 
       ↕ (HTTP Requests / JSON)
[Server App: Python / PHP / Node.js]
       ↕ (SQL Queries)
[Database: MySQL / PostgreSQL]`,
    codeExample: `// Conceptual Backend: Node.js / Express processing a student form
const express = require('express');
const app = express();

app.post('/register', (req, res) => {
  const student = req.body;
  // Save to Database securely
  // db.save(student);
  res.send({ status: "Success", message: "Admission Form Received!" });
});`,
    outputExplanation: "बैक-एंड कोड ब्राउज़र में नहीं दिखता, यह केवल सर्वर पर निष्पादित होकर अंतिम परिणाम भेजता है।",
    realWorldAnalogy: "बैंक में कैश काउंटर आपका फ्रंट-एंड है, जबकि बैंक का मुख्य लॉकर और डेटाबेस उसका सुरक्षित बैक-एंड है।",
    importantPoints: [
      "बैक-एंड कोड यूजर को कभी दिखाई नहीं देता।",
      "लोकप्रिय बैक-एंड भाषाएं: Python, PHP, Node.js, Java.",
      "लोकप्रिय डेटाबेस: MySQL, PostgreSQL, MongoDB."
    ],
    commonMistakes: [
      "HTML या CSS को बैक-एंड भाषा समझना (HTML/CSS विशुद्ध फ्रंट-एंड हैं)।"
    ],
    examPerspective: "बैक-एंड की परिभाषा और प्रमुख सर्वर-साइड भाषाओं (PHP, Python) पर अक्सर प्रश्न पूछे जाते हैं।",
    quickRevision: "बैक-एंड सर्वर-साइड लॉजिक, डेटाबेस और ऑथेंटिकेशन संभालता है। यूजर इसे सीधे नहीं देख सकता।",
    relatedTopics: ["front-end", "server-side-scripting-languages", "working-of-websites"],
    practiceTask: "सोचें कि जब आप फेसबुक पर लॉगिन करते हैं तो पासवर्ड जांचने का काम फ्रंट-एंड करता है या बैक-एंड?"
  },
  {
    id: "u1-t8",
    slug: "client-side-scripting-languages",
    unit: 1,
    unitSlug: "unit-1",
    unitTitle: "Introduction to Web Design",
    title: "Client Side Scripting Languages",
    hindiTitle: "क्लाइंट-साइड स्क्रिप्टिंग भाषाएं",
    definitionEnglish: "Client-side scripting languages are programming languages whose source code is downloaded to and executed directly inside the user's web browser, enabling dynamic page updates, instant input validation, and user interactivity without reloading the page.",
    definitionHindi: "क्लाइंट-साइड स्क्रिप्टिंग भाषाएं वे भाषाएं हैं जिनका कोड यूजर के कंप्यूटर/मोबाइल के वेब ब्राउज़र द्वारा सीधे निष्पादित किया जाता है, जिससे बिना पेज रीलोड किए तुरंत इंटरएक्टिविटी और इनपुट वैलिडेशन प्राप्त होता है।",
    simpleWords: "यह वह कोड है जो आपके फोन या लैपटॉप के ब्राउज़र के अंदर ही चलता है। उदाहरण के लिए, जब आप फॉर्म में फोन नंबर गलत डालते हैं और तुरंत लाल रंग में चेतावनी आ जाती है, तो यह क्लाइंट-साइड स्क्रिप्टिंग के कारण होता है।",
    whyImportant: "क्लाइंट-साइड स्क्रिप्टिंग वेबसाइट को जीवंत बनाती है और सर्वर पर बार-बार जाने का समय बचाती है। JavaScript दुनिया की सबसे लोकप्रिय क्लाइंट-साइड भाषा है।",
    detailedExplanation: `### क्लाइंट-साइड स्क्रिप्टिंग के प्रमुख लाभ:
1. **Immediate Feedback (त्वरित प्रतिक्रिया):** फॉर्म का डेटा सही है या नहीं, यह सर्वर पर भेजे बिना यूजर को तुरंत पता चल जाता है।
2. **Reduced Server Load:** छोटे-मोटे कैलकुलेशन और एनिमेशन क्लाइंट की मशीन पर होते हैं, जिससे सर्वर पर लोड कम पड़ता है।
3. **Rich Interactivity:** ड्रैग-एंड-ड्रॉप, ड्रॉपडाउन मेन्यू, इमेज स्लाइडर, और ऑडियो/वीडियो प्लेयर का नियंत्रण।
4. **No Page Reloading (AJAX):** बिना पूरा पेज रीफ्रेश किए डेटा बदलना।

### मुख्य क्लाइंट-साइड भाषाएं:
- **JavaScript (JS):** वैश्विक मानक और 99% वेब पर प्रयुक्त।
- **VBScript:** ऐतिहासिक (केवल पुराने Internet Explorer में चलती थी, अब अप्रचलित)।`,
    syntax: `<script>
  // Client-side JavaScript executed by Browser
  function validateAge(age) {
    return age >= 18;
  }
</script>`,
    codeExample: `<!-- Instant Client-Side Form Validation -->
<input type="number" id="ageInput" placeholder="Enter Age">
<button onclick="checkEligibility()">Verify</button>
<p id="msg"></p>

<script>
  function checkEligibility() {
    var age = document.getElementById("ageInput").value;
    var msg = document.getElementById("msg");
    if (age >= 18) {
      msg.innerHTML = "<span style='color:green;'>Eligible for O-Level Exam!</span>";
    } else {
      msg.innerHTML = "<span style='color:red;'>Must be 18 or older!</span>";
    }
  }
</script>`,
    outputExplanation: "बिना सर्वर को कोई रिक्वेस्ट भेजे, ब्राउज़र ने स्थानीय रूप से उम्र की जांच की और तुरंत संदेश प्रदर्शित कर दिया।",
    realWorldAnalogy: "जैसे परीक्षा हॉल में बैठा छात्र अपनी उत्तर पुस्तिका जमा करने से पहले खुद रोल नंबर चेक कर लेता है, ठीक वैसे ही क्लाइंट-साइड स्क्रिप्टिंग डेटा भेजने से पहले जांच लेती है।",
    importantPoints: [
      "JavaScript दुनिया की सबसे प्रमुख क्लाइंट-साइड स्क्रिप्टिंग भाषा है।",
      "ब्राउज़र में 'View Source' दबाकर क्लाइंट-साइड कोड को कोई भी देख सकता है।",
      "क्लाइंट-साइड कोड यूजर के ब्राउज़र सेटिंग्स में डिसेबल भी किया जा सकता है।"
    ],
    commonMistakes: [
      "गोपनीय पासवर्ड या डेटाबेस कनेक्शन स्ट्रिंग को क्लाइंट-साइड जावास्क्रिप्ट में लिखना (यह असुरक्षित है क्योंकि यूजर इसे देख सकता है)।"
    ],
    examPerspective: "क्लाइंट-साइड और सर्वर-साइड में तुलना, तथा JavaScript के आविष्कारक (Brendan Eich) पर प्रश्न आते हैं।",
    quickRevision: "क्लाइंट-साइड स्क्रिप्टिंग ब्राउज़र में निष्पादित होती है। मुख्य भाषा: JavaScript. मुख्य उपयोग: वैलिडेशन व इंटरएक्टिविटी।",
    relatedTopics: ["server-side-scripting-languages", "client-side-scripting-intro", "basic-form-validations-in-javascript"],
    practiceTask: "एक साधारण HTML पेज बनाएं जिसमें एक बटन पर क्लिक करने पर स्क्रीन पर आज की तारीख और समय दिखाई दे।"
  },
  {
    id: "u1-t9",
    slug: "server-side-scripting-languages",
    unit: 1,
    unitSlug: "unit-1",
    unitTitle: "Introduction to Web Design",
    title: "Server Side Scripting Languages",
    hindiTitle: "सर्वर-साइड स्क्रिप्टिंग भाषाएं",
    definitionEnglish: "Server-side scripting languages are programming languages executed on the web server before the page is sent to the client's browser, responsible for querying databases, managing sessions, and dynamically generating customized HTML.",
    definitionHindi: "सर्वर-साइड स्क्रिप्टिंग भाषाएं वे भाषाएं हैं जिनका कोड वेब सर्वर पर निष्पादित होता है। यह डेटाबेस से डेटा निकालता है, यूजर सेशन संभालता है, और परिणाम के रूप में तैयार HTML ब्राउज़र को भेजता है।",
    simpleWords: "यह वह कोड है जो केवल वेब सर्वर की गुप्त तिजोरी में चलता है। यूजर इसे कभी नहीं देख सकता, केवल इसका तैयार परिणाम (आउटपुट) यूजर के ब्राउज़र में आता है।",
    whyImportant: "डायनामिक वेबसाइट्स, जैसे फेसबुक, यूट्यूब या ऑनलाइन बैंकिंग, सर्वर-साइड स्क्रिप्टिंग के बिना संभव नहीं हैं।",
    detailedExplanation: `### सर्वर-साइड स्क्रिप्टिंग के प्रमुख लाभ:
1. **Complete Code Security:** सोर्स कोड सर्वर पर ही रहता है; यूजर राइट-क्लिक करके या 'View Source' से इसे कभी नहीं देख सकता।
2. **Database Integration:** MySQL, Oracle, MongoDB आदि डेटाबेस से सीधा और सुरक्षित संचार।
3. **User Authentication & Session Management:** पासवर्ड मिलान, लॉगिन सेशन, और पेमेंट प्रोसेसिंग।
4. **Browser Independence:** क्योंकि कोड सर्वर पर निष्पादित होता है, इसलिए क्लाइंट का ब्राउज़र कोई भी हो, आउटपुट हमेशा मानक HTML मिलता है।

### प्रमुख सर्वर-साइड भाषाएं:
- **PHP:** दुनिया की सबसे लोकप्रिय वेब सर्वर भाषा (WordPress इसी पर बना है)।
- **Python (Django / Flask):** डेटा साइंस, AI और आधुनिक वेब में सर्वाधिक प्रयुक्त।
- **Node.js (JavaScript on Server):** उच्च गति और रियल-टाइम ऐप्लिकेशन्स।
- **Java (JSP / Servlets):** बड़े बैंकिंग और एंटरप्राइज सिस्टम्स।`,
    syntax: `<!-- Example: PHP Server-Side Syntax -->
<?php
  $user = "Saurabh";
  echo "Hello, " . $user;
?>`,
    codeExample: `<?php
  // Server-Side Script (PHP)
  // This code runs on Apache Server
  $currentHour = date("H");
  if ($currentHour < 12) {
      $greeting = "Good Morning!";
  } else {
      $greeting = "Good Afternoon!";
  }
  // The browser only receives standard HTML:
  echo "<h1>" . $greeting . " Welcome to NIELIT Portal</h1>";
?>`,
    outputExplanation: "ब्राउज़र में 'View Source' करने पर यूजर को केवल `<h1>Good Morning! Welcome to NIELIT Portal</h1>` दिखेगा, PHP का कोड नहीं दिखेगा।",
    realWorldAnalogy: "जैसे शेफ की गुप्त रेसिपी केवल किचन में रहती है और डाइनिंग टेबल पर केवल स्वादिष्ट खाना पहुंचता है, ठीक वैसे ही सर्वर-साइड कोड छिपा रहता है।",
    importantPoints: [
      "सर्वर-साइड स्क्रिप्ट का सोर्स कोड यूजर से पूरी तरह सुरक्षित रहता है।",
      "ब्राउज़र केवल उसका आउटपुट (HTML/CSS) प्राप्त करता है।",
      "उदाहरण: PHP, Python, Ruby, Node.js, JSP."
    ],
    commonMistakes: [
      "यह सोचना कि PHP फाइल को डबल क्लिक करके बिना लोकल सर्वर (XAMPP/WAMP) के सीधे ब्राउज़र में चलाया जा सकता है (इसके लिए वेब सर्वर आवश्यक है)।"
    ],
    examPerspective: "सर्वर-साइड स्क्रिप्टिंग की परिभाषा, सुरक्षा लाभ, और PHP/Python के उदाहरणों पर प्रश्न पूछे जाते हैं।",
    quickRevision: "सर्वर-साइड भाषाएं सर्वर पर चलती हैं, डेटाबेस से जुड़ती हैं और सुरक्षित होती हैं। उदाहरण: PHP, Python, Node.js.",
    relatedTopics: ["client-side-scripting-languages", "types-of-websites", "back-end"],
    practiceTask: "एक तुलना तालिका बनाएं जिसमें Client-side और Server-side स्क्रिप्टिंग के 5 मुख्य अंतर लिखे हों।"
  },
  {
    id: "u1-t10",
    slug: "responsive-web-designing",
    unit: 1,
    unitSlug: "unit-1",
    unitTitle: "Introduction to Web Design",
    title: "Responsive Web Designing",
    hindiTitle: "रिस्पॉन्सिव वेब डिजाइनिंग (RWD)",
    definitionEnglish: "Responsive Web Design (RWD) is an approach to web development that makes web pages render well and adapt automatically to a variety of devices, screen sizes, and orientations (Mobile, Tablet, Desktop) using flexible layouts, fluid grids, and CSS media queries.",
    definitionHindi: "रिस्पॉन्सिव वेब डिजाइनिंग (RWD) वेब विकास की वह तकनीक है जिसके द्वारा एक ही वेबसाइट मोबाइल, टैबलेट, लैपटॉप और डेस्कटॉप जैसे विभिन्न स्क्रीन साइजों और ओरिएंटेशन्स पर स्वतः अनुकूलित होकर सुंदर और पठनीय दिखती है।",
    simpleWords: "जैसे पानी जिस बर्तन में डाला जाए उसी का आकार ले लेता है, वैसे ही रिस्पॉन्सिव वेबसाइट जिस स्क्रीन पर खोली जाए, उसी के अनुसार अपने फोंट्स, इमेजेस और कॉलम्स को सिकोड़ या फैला लेती है।",
    whyImportant: "आज 60% से अधिक इंटरनेट ट्रैफिक मोबाइल फोन से आता है। यदि वेबसाइट रिस्पॉन्सिव नहीं होगी, तो मोबाइल यूजर को बार-बार ज़ूम इन/आउट करना पड़ेगा और वे साइट छोड़ देंगे।",
    detailedExplanation: `### रिस्पॉन्सिव वेब डिजाइन के 3 प्रमुख स्तंभ (Three Pillars of RWD):
1. **The Viewport Meta Tag:** मोबाइल ब्राउज़रों को स्क्रीन की चौड़ाई समझने का निर्देश देता है।
   \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`
2. **Fluid Grids & Flexible Measurements:** पिक्सेल (\`px\`) के बजाय प्रतिशत (\`%\`), \`vw\`, या \`rem\` का उपयोग करना।
3. **CSS Media Queries:** स्क्रीन की चौड़ाई के आधार पर अलग-अलग CSS नियम लागू करना।
   \`@media (max-width: 768px) { ... }\`
4. **Flexible Images:** इमेजेस को अपनी पैरेंट चौड़ाई से बाहर न जाने देना (\`max-width: 100%; height: auto;\`)।`,
    syntax: `Standard Responsive Viewport Meta Tag:
<meta name="viewport" content="width=device-width, initial-scale=1.0">

Media Query Syntax:
@media screen and (max-width: 600px) {
  /* CSS rules for mobile phones */
}`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    .container {
      display: flex;
      flex-wrap: wrap;
    }
    .box {
      flex: 1 1 300px;
      padding: 20px;
      margin: 10px;
      background: #38bdf8;
      border-radius: 8px;
    }
    /* Mobile breakpoint */
    @media (max-width: 600px) {
      .box { background: #f43f5e; color: white; }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="box">Column 1 (Blue on PC, Red on Mobile)</div>
    <div class="box">Column 2 (Automatically Stacks)</div>
  </div>
</body>
</html>`,
    outputExplanation: "डेस्कटॉप पर दोनों बॉक्स अगल-बगल दिखेंगे, जबकि 600px से कम चौड़े मोबाइल पर दोनों बॉक्स एक के नीचे एक लाल रंग में दिखेंगे।",
    realWorldAnalogy: "जैसे एक इलास्टिक वाली टी-शर्ट किसी भी शरीर के आकार में सही बैठ जाती है, वैसे ही रिस्पॉन्सिव लेआउट हर स्क्रीन में फिट हो जाता है।",
    importantPoints: [
      "RWD का आधार Viewport Meta Tag है।",
      "Ethan Marcotte ने 2010 में Responsive Web Design शब्द गढ़ा था।",
      "फ्रेमवर्क्स जैसे W3.CSS और Bootstrap स्वतः रिस्पॉन्सिव ग्रिड प्रदान करते हैं।"
    ],
    commonMistakes: [
      "हेड सेक्शन में Viewport मेटा टैग भूल जाना (इसके बिना मोबाइल ब्राउज़र डेस्कटॉप पेज को बहुत छोटा ज़ूम करके दिखाते हैं)।",
      "इमेज पर निश्चित \`width: 800px\` लगा देना जिससे मोबाइल स्क्रीन पर हॉरिजॉन्टल स्क्रॉलबार आ जाए।"
    ],
    examPerspective: "Viewport मेटा टैग का पूरा सिंटैक्स, Media Queries का उद्देश्य, और RWD के तीन मूल सिद्धांतों पर प्रश्न आते हैं।",
    quickRevision: "RWD वेबसाइट को सभी स्क्रीनों पर स्वतः फिट करता है। Viewport meta tag + Fluid grid + Media queries इसके मुख्य आधार हैं।",
    relatedTopics: ["w3-css-grid", "css-selectors", "head-section-and-elements"],
    practiceTask: "ब्राउज़र की विंडो को माउस से खींचकर छोटा और बड़ा करें और देखें कि टेक्स्ट और कॉलम्स कैसे स्वतः एडजस्ट होते हैं।"
  },
  {
    id: "u1-t11",
    slug: "types-of-websites",
    unit: 1,
    unitSlug: "unit-1",
    unitTitle: "Introduction to Web Design",
    title: "Types of Websites (Static and Dynamic)",
    hindiTitle: "वेबसाइटों के प्रकार (स्टैटिक एवं डायनामिक वेबसाइट्स)",
    definitionEnglish: "Websites are fundamentally categorized into Static Websites (fixed pre-built HTML/CSS pages delivered identical to all visitors) and Dynamic Websites (database-driven sites generated on-the-fly with content personalized to user input and time).",
    definitionHindi: "वेबसाइटों को मुख्य रूप से दो प्रकारों में बांटा जाता है: स्टैटिक वेबसाइट (पूर्व-निर्मित निश्चित HTML/CSS पेज जो सभी यूजर्स को एक समान दिखते हैं) और डायनामिक वेबसाइट (डेटाबेस-आधारित पेज जो यूजर और समय के अनुसार तुरंत तैयार किए जाते हैं)।",
    simpleWords: "स्टैटिक वेबसाइट एक छपी हुई किताब जैसी है जिसे कोई भी खोले, वही शब्द दिखेंगे। डायनामिक वेबसाइट फेसबुक जैसी है, जिसमें आप लॉगिन करेंगे तो आपकी फोटो दिखेगी और आपका दोस्त करेगा तो उसकी।",
    whyImportant: "क्लाइंट की जरूरत और बजट के आधार पर सही आर्किटेक्चर (Static vs Dynamic) चुनना एक वेब आर्किटेक्ट का सबसे पहला निर्णय होता है।",
    detailedExplanation: `### 1. Static Websites (स्टैटिक वेबसाइट):
- **कैसे काम करती है:** सर्वर पर पहले से बनी \`.html\` फाइलें रखी होती हैं। जब भी कोई रिक्वेस्ट आती है, सर्वर बिना कोई प्रोसेसिंग किए वही फाइल भेज देता है।
- **फायदे:** सुपरफास्ट लोडिंग स्पीड, बहुत सस्ती होस्टिंग, उच्च सुरक्षा (कोई डेटाबेस हैक होने का खतरा नहीं)।
- **कमियां:** नया कंटेंट जोड़ने के लिए डेवलपर को HTML कोड में जाकर एडिट करना पड़ता है।
- **उपयुक्त:** पोर्टफोलियो, स्कूल का ब्रोशर, साधारण लैंडिंग पेज।

### 2. Dynamic Websites (डायनामिक वेबसाइट):
- **कैसे काम करती है:** सर्वर पर स्क्रिप्ट (PHP/Python) डेटाबेस (MySQL) से डेटा खींचती है, HTML टेम्प्लेट में भरती है और फिर ब्राउज़र को भेजती है।
- **फायदे:** यूजर खुद कंटेंट पोस्ट कर सकते हैं, सर्च और फिल्टर कर सकते हैं, आसान CMS (WordPress)।
- **कमियां:** लोडिंग में थोड़ा अधिक समय, महंगी होस्टिंग, डेटाबेस की सुरक्षा जरूरी।
- **उपयुक्त:** ई-कॉमर्स (Amazon), सोशल नेटवर्क, बैंकिंग, ऑनलाइन परीक्षा पोर्टल।`,
    syntax: `Comparison Table:
Feature        | Static Website          | Dynamic Website
---------------+-------------------------+-----------------------
Content        | Fixed for all users     | Changes dynamically
Database       | Not Required            | Required (MySQL/etc.)
Technologies   | HTML, CSS, JS           | HTML, CSS, JS + PHP/Python + DB
Speed          | Extremely Fast          | Depends on server/query
Cost           | Low hosting cost        | Higher hosting cost`,
    codeExample: `<!-- Static Webpage: The content is hard-coded in HTML -->
<div class="product">
  <h2>NIELIT M2-R5.1 Book</h2>
  <p>Price: ₹250 (Fixed in HTML)</p>
</div>

<!-- In a Dynamic Website, this price would come from database:
     <p>Price: ₹<?php echo $row['price']; ?></p> -->`,
    outputExplanation: "स्टैटिक पेज में कीमत बदलने के लिए फाइल खोलकर 250 को बदलना पड़ेगा, जबकि डायनामिक पेज में डेटाबेस बदलते ही पूरे पेज पर नया दाम दिख जाता है।",
    realWorldAnalogy: "दीवार पर टंगा छपा हुआ कैलेंडर स्टैटिक है; आपके स्मार्टफोन का डिजिटल कैलेंडर डायनामिक है।",
    importantPoints: [
      "स्टैटिक वेबसाइट में डेटाबेस की आवश्यकता नहीं होती।",
      "डायनामिक वेबसाइट में सर्वर-साइड प्रोग्रामिंग और डेटाबेस जरूरी होता है।",
      "स्टैटिक वेबसाइट अधिक सुरक्षित और तेज होती हैं।"
    ],
    commonMistakes: [
      "यह सोचना कि स्टैटिक वेबसाइट में एनीमेशन नहीं हो सकता (CSS और JS एनिमेशन स्टैटिक साइट में भी काम करते हैं)।"
    ],
    examPerspective: "स्टैटिक और डायनामिक वेबसाइट के बीच अंतर पर 5 नंबर का वर्णनात्मक प्रश्न और बहुविकल्पीय प्रश्न अक्सर पूछा जाता है।",
    quickRevision: "स्टैटिक साइट्स में निश्चित सामग्री होती है (बिना डेटाबेस), डायनामिक साइट्स में डेटाबेस आधारित परिवर्तनशील सामग्री होती है।",
    relatedTopics: ["website", "working-of-websites", "client-side-scripting-languages"],
    practiceTask: "सोचें कि विकिपीडिया, यूट्यूब और एक डॉक्टर के क्लिनिक का विजिटिंग कार्ड पेज इनमें से कौन सा स्टैटिक है और कौन सा डायनामिक?"
  }
];
