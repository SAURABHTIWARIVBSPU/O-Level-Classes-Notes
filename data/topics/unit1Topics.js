// Unit 1: Introduction to Web Design - Complete Topic Notes

export const unit1Topics = [
  {
    "id": "u1-t1",
    "slug": "introduction-of-internet",
    "unit": 1,
    "unitSlug": "unit-1",
    "unitTitle": "Introduction to Web Design",
    "title": "Introduction of Internet",
    "hindiTitle": "इंटरनेट का परिचय",
    "definitionEnglish": "The Internet (Interconnected Network) is a massive, decentralized global network of interconnected computer networks that communicate using the standard Internet Protocol Suite (TCP/IP).",
    "definitionHindi": "इंटरनेट (Interconnected Network) दुनिया भर के कंप्यूटर नेटवर्कों का एक विशाल, विकेंद्रीकृत वैश्विक जाल है जो सूचनाओं के आदान-प्रदान के लिए मानक TCP/IP प्रोटोकॉल सूट का उपयोग करता है।",
    "simpleWords": "सरल शब्दों में, इंटरनेट दुनिया के सभी कंप्यूटरों, स्मार्टफोनों और सर्वरों को आपस में जोड़ने वाला एक विशाल डिजिटल महामार्ग (Highway) है, जिसके जरिए हम सेकंडों में डेटा और मैसेज भेज सकते हैं।",
    "whyImportant": "बिना इंटरनेट के वेब डिजाइनिंग का कोई अस्तित्व नहीं है। एक वेब डेवलपर के रूप में यह जानना आवश्यक है कि आपका बनाया वेबपेज डेटा पैकेट्स के रूप में क्लाइंट तक कैसे पहुंचता है।",
    "detailedExplanation": "### 1. Brief History of the Internet and Major Milestones\n- **1969 — ARPANET:** The first operational packet-switching network initiated by the Advanced Research Projects Agency (DARPA) of the U.S. Department of Defense. It is the direct predecessor of the modern Internet.\n- **1974 — TCP/IP:** Vinton Cerf and Bob Kahn invented the TCP/IP protocol suite. They are universally recognized as the **\"Fathers of the Internet\"**.\n- **January 1, 1983 (\"Flag Day\"):** ARPANET officially standardized on TCP/IP protocols, marking the birth of the modern Internet.\n- **August 15, 1995:** Public commercial Internet access was launched in India by **VSNL (Videsh Sanchar Nigam Limited)**.\n\n### 2. How Does the Internet Work? (Packet Switching)\nThe Internet does not use traditional circuit switching (like legacy analog telephone lines). Instead, it operates on **Packet Switching** technology:\n1. Data files and web streams are broken down into small units called **Packets**.\n2. Each packet encapsulates a Header containing the Source IP, Destination IP, Port Numbers, and Sequence Number.\n3. Packets travel independently through various network routers and intermediate nodes across global fiber-optic and satellite networks.\n4. Upon reaching the destination, the TCP protocol reassembles all packets in the exact original sequence and verifies data integrity.\n\n### 3. IP Addressing Architecture (IPv4 vs. IPv6)\n- **IPv4 (Internet Protocol version 4):**\n  - **Size:** 32 bits (4 bytes), divided into 4 octets separated by periods (dots), e.g., `192.168.1.1`.\n  - **Address Space:** ~4.29 billion distinct addresses (`2^32`).\n- **IPv6 (Internet Protocol version 6):**\n  - **Size:** 128 bits (16 bytes), divided into 8 hexadecimal groups separated by colons, e.g., `2001:0db8:85a3:0000:0000:8a2e:0370:7334`.\n  - **Address Space:** Virtually inexhaustible (`3.4 × 10^38` unique addresses), designed to eliminate address depletion in the era of IoT.",
    "syntax": "IP Address Format:\nIPv4: [0-255].[0-255].[0-255].[0-255] (e.g., 172.217.167.78)\nIPv6: 8 groups of 4 hex digits separated by colons",
    "codeExample": "<!-- Checking IP and Network connectivity in web apps -->\n<script>\n  // Browsers interact with internet via fetch API\n  fetch(\"https://api.ipify.org?format=json\")\n    .then(response => response.json())\n    .then(data => console.log(\"User Public IP:\", data.ip));\n</script>",
    "outputExplanation": "ब्राउज़र DNS सर्वर से IP एड्रेस प्राप्त करता है और TCP 3-Way Handshake के जरिए सर्वर से कनेक्ट होकर डेटा प्राप्त करता है।",
    "realWorldAnalogy": "जैसे भारतीय डाक सेवा में आपका बड़ा पार्सल अलग-अलग पोस्टल वैन से होकर गुजरता है और रिसीवर के पते पर पहुंचकर पूरा जुड़ जाता है, ठीक वैसे ही इंटरनेट डेटा पैकेट्स को भेजता है।",
    "importantPoints": [
      "Internet का पूरा नाम Interconnected Network है।",
      "TCP/IP इंटरनेट का मूलभूत संचार प्रोटोकॉल है।",
      "IPv4 = 32 Bits, IPv6 = 128 Bits.",
      "भारत में इंटरनेट 15 अगस्त 1995 को VSNL द्वारा शुरू किया गया।"
    ],
    "commonMistakes": [
      "इंटरनेट और WWW को एक ही समझना (इंटरनेट हार्डवेयर नेटवर्क है, WWW उस पर चलने वाली सॉफ्टवेयर सेवा है)।",
      "IPv4 को 64-bit समझना (IPv4 केवल 32-bit होता है)।"
    ],
    "examPerspective": "O-Level परीक्षा में IPv4 और IPv6 की बिट लंबाई, Vinton Cerf का नाम, और भारत में इंटरनेट की शुरुआत की तारीख (15 अगस्त 1995) सीधे पूछी जाती है।",
    "quickRevision": "इंटरनेट TCP/IP आधारित पैकेट-स्विचिंग वैश्विक नेटवर्क है। जनक: Vint Cerf व Bob Kahn. IPv4 = 32 bits, IPv6 = 128 bits.",
    "relatedTopics": [
      "www",
      "working-of-websites",
      "client-side-scripting-languages"
    ],
    "practiceTask": "कमांड प्रॉम्प्ट खोलें और `ping google.com` टाइप करके देखें कि आपका कंप्यूटर गूगल सर्वर के IP एड्रेस को कैसे ढूंढता है।"
  },
  {
    "id": "u1-t2",
    "slug": "www",
    "unit": 1,
    "unitSlug": "unit-1",
    "unitTitle": "Introduction to Web Design",
    "title": "WWW (World Wide Web)",
    "hindiTitle": "वर्ल्ड वाइड वेब (WWW)",
    "definitionEnglish": "The World Wide Web (WWW or W3) is an information system where documents and other web resources are identified by URLs, interlinked by hypertext links, and accessible over the Internet.",
    "definitionHindi": "वर्ल्ड वाइड वेब (WWW या W3) इंटरनेट पर आधारित सूचनाओं का एक ऐसा तंत्र है जिसमें वेब दस्तावेज़ URLs द्वारा पहचाने जाते हैं और हाइपरटेक्स्ट लिंक्स द्वारा आपस में जुड़े होते हैं।",
    "simpleWords": "सरल शब्दों में, WWW इंटरनेट पर मौजूद करोड़ों वेबसाइटों और वेबपेजों की वह डिजिटल लाइब्रेरी है, जिसे हम ब्राउज़र में लिंक पर क्लिक करके खोलते और पढ़ते हैं।",
    "whyImportant": "वेबसाइट डिजाइनिंग सीधे WWW के लिए ही की जाती है। HTML, CSS, और जावास्क्रिप्ट वे तीन मूलभूत तकनीकें हैं जिन पर पूरा वेब टिका है।",
    "detailedExplanation": "### 1. Genesis and Invention of the World Wide Web\n- **1989:** British scientist **Sir Tim Berners-Lee** invented the World Wide Web while working at CERN in Geneva, Switzerland.\n- **Goal:** To enable scientists and researchers to automatically share information and scientific documents across heterogeneous computer systems.\n- **1990:** Tim Berners-Lee developed the three fundamental foundational pillars of the Web:\n  1. **HTML (HyperText Markup Language):** The structural formatting language for web documents.\n  2. **HTTP (HyperText Transfer Protocol):** The application protocol for fetching hypertext resources.\n  3. **URI/URL (Uniform Resource Identifier):** The global addressing system for locating web assets.\n- **First Web Browser:** Named *WorldWideWeb* (later renamed *Nexus*).\n\n### 2. Crucial Difference: Internet vs. WWW\n| Dimension | The Internet | The World Wide Web (WWW) |\n| :--- | :--- | :--- |\n| **Nature** | Global hardware and networking infrastructure | Information software service running on top of Internet |\n| **Inception** | 1969 (ARPANET) / 1983 (TCP/IP) | 1989 (CERN) |\n| **Protocols** | TCP, IP, UDP, BGP, ICMP | HTTP, HTTPS, WebSocket |\n| **Analogy** | The global highway railway tracks and cables | The trains, buses, and couriers delivering cargo |\n\n### 3. Hypertext and Hypermedia Principles\n- **Hypertext:** Text containing embedded links (hyperlinks) pointing to other documents, enabling non-linear browsing rather than sequential reading.\n- **Hypermedia:** An extension of hypertext that incorporates rich media including graphics, video, sound, animations, and interactive forms.",
    "syntax": "URI Formula:\nURI = URL ∪ URN\nURL Format: protocol://subdomain.domain:port/path?query#fragment",
    "codeExample": "<!-- The Hyperlink that connects the World Wide Web -->\n<a href=\"https://info.cern.ch\" target=\"_blank\" title=\"First Website on WWW\">\n  Visit the First Website on the WWW\n</a>",
    "outputExplanation": "एंकर टैग पर क्लिक करते ही ब्राउज़र DNS से IP ढूंढकर उस सर्वर को HTTP GET रिक्वेस्ट भेजता है और पेज लोड करता है।",
    "realWorldAnalogy": "यदि इंटरनेट राष्ट्रीय राजमार्ग (Highway) है, तो WWW उस पर चलने वाली बसें, कारें और उनमें बैठी सवारियां (सूचनाएं) हैं।",
    "importantPoints": [
      "WWW का आविष्कार 1989 में Tim Berners-Lee ने CERN में किया।",
      "पहली वेबसाइट info.cern.ch थी।",
      "W3C वेब के तकनीकी मानकों को नियंत्रित और मानकीकृत करता है।"
    ],
    "commonMistakes": [
      "Tim Berners-Lee को इंटरनेट का जनक मान लेना (वे WWW के जनक हैं, इंटरनेट के जनक Vint Cerf हैं)।"
    ],
    "examPerspective": "सीधे पूछे जाने वाले प्रश्न: WWW का आविष्कार कब और किसने किया? CERN का मुख्यालय कहाँ है? पहली वेबसाइट कौन सी थी?",
    "quickRevision": "WWW हाइपरटेक्स्ट आधारित सूचना तंत्र है। आविष्कारक: टिम बर्नर्स-ली (1989, CERN)। मानक संस्था: W3C।",
    "relatedTopics": [
      "introduction-of-internet",
      "website",
      "webpages"
    ],
    "practiceTask": "ब्राउज़र के एड्रेस बार में `http://info.cern.ch` खोलकर दुनिया की पहली मूल वेबसाइट का लेआउट देखें।"
  },
  {
    "id": "u1-t3",
    "slug": "website",
    "unit": 1,
    "unitSlug": "unit-1",
    "unitTitle": "Introduction to Web Design",
    "title": "Website",
    "hindiTitle": "वेबसाइट",
    "definitionEnglish": "A Website is a collection of publicly accessible, interlinked web pages and multimedia assets that share a single domain name and are hosted on at least one web server.",
    "definitionHindi": "वेबसाइट एक ही डोमेन नाम के तहत जुड़े हुए वेबपेजों, इमेजेस और डिजिटल संसाधनों का एक ऐसा संग्रह है जो किसी वेब सर्वर पर होस्ट किया जाता है।",
    "simpleWords": "वेबसाइट इंटरनेट पर किसी व्यक्ति, कंपनी या संस्था का डिजिटल घर या ऑफिस है, जहां उनके बारे में सारी जानकारी पेजों के रूप में उपलब्ध होती है।",
    "whyImportant": "वेब डिजाइनर का मुख्य काम ही संपूर्ण वेबसाइट का लेआउट, नेविगेशन फ्लो, और यूजर एक्सपीरियंस तैयार करना होता है।",
    "detailedExplanation": "### 1. Core Anatomy of a Modern Website\nA website is a logically connected collection of publicly accessible, interlinked web pages and multimedia assets sharing a single domain name and hosted on a dedicated web server:\n- **Domain Name:** Human-readable address (e.g., `https://www.nielit.gov.in`).\n- **Web Hosting Server:** A high-availability server connected 24/7 to the Internet containing HTML, CSS, JavaScript, media files, and databases.\n- **Index Page (`index.html`):** The default landing page served automatically by web servers when a user visits the root domain.\n\n### 2. Website Architecture and Directory Hierarchies\n1. **Root Directory (`/`):** Contains the primary homepage (`index.html`), configuration files (`robots.txt`, `sitemap.xml`), and main assets.\n2. **Subdirectories:**\n   - `/css/`: Contains external stylesheets (`styles.css`, `tailwind.css`).\n   - `/js/`: Contains client-side scripting files (`app.js`, `main.js`).\n   - `/images/` or `/assets/`: Houses optimized raster and vector graphics (`logo.svg`, `banner.webp`).\n\n### 3. Key Categories of Websites\n- **E-Commerce Portals:** Platforms providing online product catalogs, shopping carts, and secure payment gateway integrations (e.g., Amazon, Flipkart).\n- **Educational / Learning Management Systems (LMS):** Platforms delivering structured courses, interactive quizzes, and syllabus notes.\n- **Web Applications (SaaS):** Complex software accessible via browsers without local desktop installation (e.g., Google Docs, Figma).",
    "syntax": "Standard Website File Structure:\nmy-website/\n├── index.html        (Home Page)\n├── about.html        (About Page)\n├── contact.html      (Contact Form)\n├── css/\n│   └── style.css     (Global Stylesheet)\n├── js/\n│   └── main.js       (Interactivity)\n└── images/\n    └── logo.png",
    "codeExample": "<!-- Navigation Menu of a Website -->\n<nav class=\"site-nav\">\n  <a href=\"index.html\">Home</a>\n  <a href=\"about.html\">About Us</a>\n  <a href=\"courses.html\">O-Level Courses</a>\n  <a href=\"contact.html\">Contact</a>\n</nav>",
    "outputExplanation": "यह नेविगेशन बार यूजर को वेबसाइट के विभिन्न संबंधित वेबपेजों पर आसानी से जाने की सुविधा देता है।",
    "realWorldAnalogy": "वेबसाइट एक पूरी किताब की तरह है जिसमें कई अध्याय (वेबपेज) एक ही जिल्द (डोमेन) के नीचे बंधे होते हैं।",
    "importantPoints": [
      "वेबसाइट का डिफॉल्ट मुख्य पेज हमेशा 'index.html' नाम से सेव किया जाता है।",
      "एक वेबसाइट में एक या हजारों वेबपेज हो सकते हैं।"
    ],
    "commonMistakes": [
      "होमपेज का नाम `home.html` रखकर सर्वर पर अपलोड करना (सर्वर सबसे पहले `index.html` खोजता है)।"
    ],
    "examPerspective": "परीक्षा में पूछा जाता है: 'वेबसाइट का पहला पेज क्या कहलाता है?' (उत्तर: Home Page / index.html).",
    "quickRevision": "वेबसाइट संबंधित वेबपेजों का संग्रह है जो एक डोमेन नाम पर किसी वेब सर्वर पर होस्ट होती है।",
    "relatedTopics": [
      "webpages",
      "working-of-websites",
      "types-of-websites"
    ],
    "practiceTask": "अपने कंप्यूटर पर एक फोल्डर बनाएं, उसमें `index.html` और `about.html` बनाकर हाइपरलिंक से जोड़ें।"
  },
  {
    "id": "u1-t4",
    "slug": "working-of-websites",
    "unit": 1,
    "unitSlug": "unit-1",
    "unitTitle": "Introduction to Web Design",
    "title": "Working of Websites",
    "hindiTitle": "वेबसाइट कैसे काम करती है (Client-Server Architecture)",
    "definitionEnglish": "The working of websites is based on the Client-Server model, where a web browser (client) requests web resources over HTTP/HTTPS from a web server via DNS resolution, and the server processes and returns the HTML/CSS/JS payload.",
    "definitionHindi": "वेबसाइट की कार्यप्रणाली क्लाइंट-सर्वर मॉडल पर आधारित है, जहां ब्राउज़र (क्लाइंट) DNS के जरिए वेब सर्वर का पता लगाकर HTTP रिक्वेस्ट भेजता है और सर्वर उस रिक्वेस्ट को प्रोसेस कर वेबपेज वापस भेजता है।",
    "simpleWords": "जब आप ब्राउज़र में किसी वेबसाइट का नाम लिखते हैं, तो आपका कंप्यूटर उस नाम का IP पता पूछता है, उस पते वाले कंप्यूटर (सर्वर) से पेज मांगता है, और सर्वर उस पेज को आपके स्क्रीन पर भेज देता है।",
    "whyImportant": "वेबसाइट की गति, सुरक्षा और लोडिंग प्रक्रिया को समझने से आप बेहतर, तेज और ऑप्टिमाइज्ड वेबपेज बना सकते हैं।",
    "detailedExplanation": "### 1. The 5-Step Request-Response Lifecycle\nWhen a user types a URL into their browser address bar and presses Enter, the following sequence executes in milliseconds:\n\n1. **DNS Resolution (Domain Name Lookup):**\n   - The browser checks local DNS cache, operating system cache, and queries recursive DNS servers.\n   - Converts the human-readable domain name (e.g., `example.com`) into its corresponding numerical IP address (e.g., `93.184.216.34`).\n2. **TCP 3-Way Handshake & TLS Negotiation:**\n   - The client initiates a connection via SYN -> SYN-ACK -> ACK packets.\n   - For HTTPS, an encrypted TLS handshake negotiates cryptographic keys and verifies SSL certificates.\n3. **HTTP/HTTPS Request Dispatch:**\n   - The browser issues an HTTP GET request containing request headers, cookies, and accepted MIME types.\n4. **Server Processing & Response Generation:**\n   - The web server (e.g., Nginx, Apache) receives the request, queries databases if necessary, renders HTML/JSON, and returns an HTTP status code (e.g., `200 OK`) along with the payload.\n5. **Client-Side Browser Rendering (Critical Rendering Path):**\n   - Parses HTML to construct the **DOM (Document Object Model)** tree.\n   - Parses CSS to construct the **CSSOM (CSS Object Model)** tree.\n   - Combines DOM and CSSOM into a **Render Tree**, computes layout geometry, and paints pixels onto the viewport.",
    "syntax": "Client-Server Workflow:\n[Browser] ---1. DNS Query---> [DNS Server]\n[Browser] <--2. Return IP---- [DNS Server]\n[Browser] ---3. HTTP Request-> [Web Server]\n[Browser] <--4. HTTP Payload- [Web Server]",
    "codeExample": "// Browser DevTools Console: Checking Network Lifecycle\nconsole.log(\"Navigation started at:\", performance.timing.navigationStart);\nconsole.log(\"DNS Lookup time:\", performance.timing.domainLookupEnd - performance.timing.domainLookupStart, \"ms\");\nconsole.log(\"Response time:\", performance.timing.responseEnd - performance.timing.requestStart, \"ms\");",
    "outputExplanation": "ब्राउज़र के परफॉर्मेंस API से पता चलता है कि DNS लुकअप और सर्वर रिस्पॉन्स में कितने मिलीसेकंड का समय लगा।",
    "realWorldAnalogy": "जैसे आप रेस्टोरेंट में मेनू देखकर वेटर (Request) को ऑर्डर देते हैं, वेटर किचन (Server) से खाना (Response) लाकर आपकी टेबल पर परोसता है।",
    "importantPoints": [
      "वेबसाइट क्लाइंट-सर्वर आर्किटेक्चर पर काम करती है।",
      "क्लाइंट = वेब ब्राउज़र (Chrome, Firefox).",
      "सर्वर = वेब सर्वर सॉफ्टवेयर (Apache, Nginx, IIS).",
      "कम्युनिकेशन = HTTP / HTTPS प्रोटोकॉल।"
    ],
    "commonMistakes": [
      "यह सोचना कि ब्राउज़र डोमेन नाम को सीधे समझता है (ब्राउज़र केवल IP एड्रेस पर कनेक्ट हो सकता है, नाम को IP में DNS बदलता है)।"
    ],
    "examPerspective": "DNS का कार्य, क्लाइंट-सर्वर मॉडल के घटक, और HTTP रिक्वेस्ट-रिस्पॉन्स साइकिल पर बार-बार प्रश्न आते हैं।",
    "quickRevision": "यूजर URL डालता है -> DNS नाम को IP में बदलता है -> ब्राउज़र HTTP GET रिक्वेस्ट भेजता है -> सर्वर 200 OK के साथ HTML पेज भेजता है।",
    "relatedTopics": [
      "client-side-scripting-languages",
      "server-side-scripting-languages",
      "webpages"
    ],
    "practiceTask": "ब्राउज़र में F12 दबाकर 'Network' टैब खोलें और किसी भी पेज को रीलोड करके HTTP स्टेटस कोड (200) और फाइल ट्रांसफर देखें।"
  },
  {
    "id": "u1-t5",
    "slug": "webpages",
    "unit": 1,
    "unitSlug": "unit-1",
    "unitTitle": "Introduction to Web Design",
    "title": "Webpages",
    "hindiTitle": "वेबपेज (Webpages)",
    "definitionEnglish": "A Webpage is a single digital hypertext document on the World Wide Web, typically written in HTML, that can be viewed in an internet browser and contains text, links, graphics, and multimedia.",
    "definitionHindi": "वेबपेज वर्ल्ड वाइड वेब पर उपलब्ध एक अकेला डिजिटल हाइपरटेक्स्ट दस्तावेज़ होता है, जिसे HTML में लिखा जाता है और जिसमें टेक्स्ट, हाइपरलिंक्स, इमेजेस और मल्टीमीडिया शामिल होते हैं।",
    "simpleWords": "वेबपेज इंटरनेट पर दिखने वाला कोई भी एक अकेला पन्ना है, जैसे विकिपीडिया का कोई एक आर्टिकल या यूट्यूब का कोई एक वीडियो पेज।",
    "whyImportant": "वेबपेज ही वेब डिजाइनिंग की सबसे बुनियादी निर्माण इकाई (Building Block) है।",
    "detailedExplanation": "### 1. Comparison: Static Webpages vs. Dynamic Webpages\n| Feature | Static Webpage | Dynamic Webpage |\n| :--- | :--- | :--- |\n| **Source Code** | Pre-written HTML/CSS stored as flat files | Generated on-the-fly by server scripts or client frameworks |\n| **Content Delivery** | Identical content served to every visitor | Personalized content based on user session, inputs, or database queries |\n| **Database Connection** | None required | Reads and writes to SQL/NoSQL databases |\n| **Speed & Caching** | Extremely fast, effortlessly cached on CDNs | Requires computation time for rendering and database queries |\n| **Technologies** | Plain HTML, CSS, client-side JS | PHP, Node.js, Python, Java, React, Next.js |\n\n### 2. Internal Structure of a Valid Webpage\nA standard web document consists of three core layers:\n1. **Structural Layer (HTML):** Defines headings, paragraphs, tables, lists, and semantic containers.\n2. **Presentational Layer (CSS):** Controls colors, typography, layout models (Flexbox, Grid), animations, and responsiveness.\n3. **Behavioral Layer (JavaScript):** Handles DOM manipulation, asynchronous data fetching (AJAX/Fetch), form validation, and interactive UI states.",
    "syntax": "Basic Webpage Skeleton:\n<!DOCTYPE html>\n<html>\n  <head><title>My Webpage</title></head>\n  <body>\n    <h1>Welcome to My Page</h1>\n  </body>\n</html>",
    "codeExample": "<!DOCTYPE html>\n<html lang=\"hi\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>पहला वेबपेज</title>\n</head>\n<body>\n  <h1>नमस्ते! यह एक वेबपेज है।</h1>\n  <p>यह HTML में लिखा गया एक स्वतंत्र दस्तावेज़ है।</p>\n  <a href=\"https://nielit.gov.in\">NIELIT पोर्टल पर जाएं</a>\n</body>\n</html>",
    "outputExplanation": "ब्राउज़र इस कोड को प्रोसेस करके एक हेडिंग, एक पैराग्राफ और एक क्लिक करने योग्य नीला हाइपरलिंक दिखाता है।",
    "realWorldAnalogy": "वेबसाइट अगर पूरी मैगजीन है, तो वेबपेज उस मैगजीन का कोई एक सुंदर छपा हुआ पेज है।",
    "importantPoints": [
      "वेबपेज का एक्सटेंशन .html या .htm होता है।",
      "प्रत्येक वेबपेज का अपना एक यूनिक URL होता है।"
    ],
    "commonMistakes": [
      "वेबसाइट और वेबपेज को पर्यायवाची समझना (वेबपेज अकेला दस्तावेज़ है, वेबसाइट उनका समूह है)।"
    ],
    "examPerspective": "वेबपेज की परिभाषा और इसके मूल घटकों (Header, Content, Footer) पर प्रश्न पूछे जाते हैं।",
    "quickRevision": "वेबपेज एक अकेला HTML दस्तावेज़ है जो अद्वितीय URL द्वारा पहचाना जाता है।",
    "relatedTopics": [
      "website",
      "front-end",
      "basic-structure-of-html"
    ],
    "practiceTask": "नोटपैड में एक साधारण HTML फाइल बनाकर उसे `myfirstpage.html` नाम से सेव करें और क्रोम में खोलें।"
  },
  {
    "id": "u1-t6",
    "slug": "front-end",
    "unit": 1,
    "unitSlug": "unit-1",
    "unitTitle": "Introduction to Web Design",
    "title": "Front End",
    "hindiTitle": "फ्रंट-एंड (Front End)",
    "definitionEnglish": "The Front End (also known as client-side) of a website refers to everything that users see, interact with, and experience directly in their web browser, including layout, typography, colors, animations, and forms.",
    "definitionHindi": "वेबसाइट का फ्रंट-एंड (क्लाइंट-साइड) वह दृश्यमान भाग है जिसे यूजर अपने वेब ब्राउज़र में सीधे देखता है और जिसके साथ बातचीत (क्लिक, टाइप, स्क्रॉल) करता है।",
    "simpleWords": "कार का स्टीयरिंग व्हील, डैशबोर्ड, स्पीडोमीटर और आरामदायक सीटें उसका फ्रंट-एंड हैं। इसी तरह वेबसाइट के बटन, रंग, मेन्यू और टेक्स्ट उसका फ्रंट-एंड कहलाते हैं।",
    "whyImportant": "O-Level M2-R5.1 मॉड्यूल मुख्य रूप से फ्रंट-एंड डेवलपमेंट (HTML, CSS, W3.CSS, JS) पर ही केंद्रित है।",
    "detailedExplanation": "### 1. Definition and Core Objectives of Front-End Development\nFront-End development (often referred to as client-side development) is the practice of producing HTML, CSS, and JavaScript for a website or web application so that a user can see and interact with them directly.\n\n### 2. The Front-End Technology Holy Trinity\n1. **HTML (Structure & Semantics):**\n   - Forms the skeletal foundation of the page.\n   - Semantic tags (like `<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`) provide accessibility and search engine readability.\n2. **CSS (Aesthetics & Layouts):**\n   - Cascading Style Sheets control color palettes, responsive media queries, grid systems, and transitions.\n3. **JavaScript (Logic & Interactivity):**\n   - Implements dynamic behavior, event listeners (`click`, `submit`), client-side data validation, and asynchronous REST API communication.\n\n### 3. Front-End Frameworks and Tooling\n- **CSS Frameworks:** W3.CSS, TailwindCSS, Bootstrap.\n- **JavaScript Libraries & Frameworks:** React, Vue, Angular, Next.js.\n- **Build Tools:** Webpack, Vite, PostCSS.",
    "syntax": "Frontend Triad:\nHTML (Structure) + CSS (Presentation) + JavaScript (Interactivity)",
    "codeExample": "<!-- Front-End Example: Complete Triad in One Snippet -->\n<div id=\"card\" style=\"border: 2px solid #0284c7; padding: 15px; border-radius: 8px; max-width: 250px;\">\n  <h3 style=\"color: #0284c7; margin-top: 0;\">Frontend Card</h3>\n  <button onclick=\"changeColor()\" style=\"background: #0284c7; color: white; border: none; padding: 6px 12px; border-radius: 4px; cursor: pointer;\">\n    Click Me\n  </button>\n</div>\n\n<script>\n  function changeColor() {\n    document.getElementById(\"card\").style.backgroundColor = \"#e0f2fe\";\n  }\n</script>",
    "outputExplanation": "HTML ने बॉक्स बनाया, CSS ने उसे नीला बॉर्डर और पैडिंग दी, और जावास्क्रिप्ट ने बटन क्लिक पर बैकग्राउंड रंग बदल दिया।",
    "realWorldAnalogy": "मानव शरीर में हड्डियां (HTML), त्वचा और कपड़े (CSS), और मांसपेशियां व दिमाग (JavaScript) मिलकर फ्रंट-एंड बनाते हैं।",
    "importantPoints": [
      "फ्रंट-एंड यूजर के ब्राउज़र में निष्पादित होता है।",
      "मुख्य भाषाएं: HTML, CSS, JavaScript.",
      "फ्रेमवर्क: W3.CSS, Bootstrap, React, AngularJS."
    ],
    "commonMistakes": [
      "यह सोचना कि डेटाबेस फ्रंट-एंड में होता है (डेटाबेस हमेशा सुरक्षित बैक-एंड में रहता है)।"
    ],
    "examPerspective": "फ्रंट-एंड और बैक-एंड में अंतर, तथा फ्रंट-एंड में प्रयुक्त मुख्य तकनीकों पर प्रश्न आते हैं।",
    "quickRevision": "फ्रंट-एंड वेबसाइट का यूजर-फेसिंग भाग है जो HTML, CSS और JS से बनता है और ब्राउज़र में चलता है।",
    "relatedTopics": [
      "back-end",
      "client-side-scripting-languages",
      "introduction-to-css"
    ],
    "practiceTask": "एक बटन बनाएं जिस पर क्लिक करने पर उसका टेक्स्ट 'Clicked!' में बदल जाए।"
  },
  {
    "id": "u1-t7",
    "slug": "back-end",
    "unit": 1,
    "unitSlug": "unit-1",
    "unitTitle": "Introduction to Web Design",
    "title": "Back End",
    "hindiTitle": "बैक-एंड (Back End)",
    "definitionEnglish": "The Back End (also known as server-side) of a website consists of the server, application logic, and database that operate behind the scenes to process data, manage business logic, authenticate users, and serve dynamic content to the front end.",
    "definitionHindi": "बैक-एंड (सर्वर-साइड) वेबसाइट का वह भीतरी अदृश्य भाग है जिसमें वेब सर्वर, ऐप्लिकेशन लॉजिक और डेटाबेस शामिल होते हैं, जो डेटा प्रोसेसिंग, यूजर ऑथेंटिकेशन और सुरक्षा का काम करते हैं।",
    "simpleWords": "रेस्टोरेंट में शेफ और किचन का स्टाफ जो पर्दे के पीछे खाना पकाता है, वह उसका बैक-एंड है। वेबसाइट में यूजर का पासवर्ड चेक करना और डेटा सेव करना बैक-एंड का काम है।",
    "whyImportant": "यद्यपि M2-R5.1 मुख्य रूप से फ्रंट-एंड पर है, लेकिन फॉर्म डेटा कहां जाता है और सर्वर उसे कैसे प्रोसेस करता है, यह समझना परिपक्व वेब डिजाइन के लिए जरूरी है।",
    "detailedExplanation": "### 1. Architecture of Back-End Systems\nThe Back-End (server-side) represents the engine room of a web application that remains invisible to the end user. It consists of three primary components:\n1. **Web Server:** Listens for incoming HTTP network requests and routes them (e.g., Apache, Nginx, Node.js HTTP Server).\n2. **Application Logic Layer:** Executes business rules, authenticates user credentials, processes credit cards, and validates data using server-side languages (PHP, Python, JavaScript/Node.js, Java, Ruby).\n3. **Database Layer:** Manages persistent storage, transactions, and retrieval of relational or document data (MySQL, PostgreSQL, MongoDB, SQLite).\n\n### 2. API Architecture (REST & GraphQL)\n- Back-end systems expose **RESTful APIs** that return structured JSON or XML payloads to web and mobile clients.\n- Enables decoupled architectures where a single backend serves desktop browsers, mobile apps, and third-party integrations simultaneously.",
    "syntax": "Backend Architecture:\n[Browser / Frontend] \n       ↕ (HTTP Requests / JSON)\n[Server App: Python / PHP / Node.js]\n       ↕ (SQL Queries)\n[Database: MySQL / PostgreSQL]",
    "codeExample": "// Conceptual Backend: Node.js / Express processing a student form\nconst express = require('express');\nconst app = express();\n\napp.post('/register', (req, res) => {\n  const student = req.body;\n  // Save to Database securely\n  // db.save(student);\n  res.send({ status: \"Success\", message: \"Admission Form Received!\" });\n});",
    "outputExplanation": "बैक-एंड कोड ब्राउज़र में नहीं दिखता, यह केवल सर्वर पर निष्पादित होकर अंतिम परिणाम भेजता है।",
    "realWorldAnalogy": "बैंक में कैश काउंटर आपका फ्रंट-एंड है, जबकि बैंक का मुख्य लॉकर और डेटाबेस उसका सुरक्षित बैक-एंड है।",
    "importantPoints": [
      "बैक-एंड कोड यूजर को कभी दिखाई नहीं देता।",
      "लोकप्रिय बैक-एंड भाषाएं: Python, PHP, Node.js, Java.",
      "लोकप्रिय डेटाबेस: MySQL, PostgreSQL, MongoDB."
    ],
    "commonMistakes": [
      "HTML या CSS को बैक-एंड भाषा समझना (HTML/CSS विशुद्ध फ्रंट-एंड हैं)।"
    ],
    "examPerspective": "बैक-एंड की परिभाषा और प्रमुख सर्वर-साइड भाषाओं (PHP, Python) पर अक्सर प्रश्न पूछे जाते हैं।",
    "quickRevision": "बैक-एंड सर्वर-साइड लॉजिक, डेटाबेस और ऑथेंटिकेशन संभालता है। यूजर इसे सीधे नहीं देख सकता।",
    "relatedTopics": [
      "front-end",
      "server-side-scripting-languages",
      "working-of-websites"
    ],
    "practiceTask": "सोचें कि जब आप फेसबुक पर लॉगिन करते हैं तो पासवर्ड जांचने का काम फ्रंट-एंड करता है या बैक-एंड?"
  },
  {
    "id": "u1-t8",
    "slug": "client-side-scripting-languages",
    "unit": 1,
    "unitSlug": "unit-1",
    "unitTitle": "Introduction to Web Design",
    "title": "Client Side Scripting Languages",
    "hindiTitle": "क्लाइंट-साइड स्क्रिप्टिंग भाषाएं",
    "definitionEnglish": "Client-side scripting languages are programming languages whose source code is downloaded to and executed directly inside the user's web browser, enabling dynamic page updates, instant input validation, and user interactivity without reloading the page.",
    "definitionHindi": "क्लाइंट-साइड स्क्रिप्टिंग भाषाएं वे भाषाएं हैं जिनका कोड यूजर के कंप्यूटर/मोबाइल के वेब ब्राउज़र द्वारा सीधे निष्पादित किया जाता है, जिससे बिना पेज रीलोड किए तुरंत इंटरएक्टिविटी और इनपुट वैलिडेशन प्राप्त होता है।",
    "simpleWords": "यह वह कोड है जो आपके फोन या लैपटॉप के ब्राउज़र के अंदर ही चलता है। उदाहरण के लिए, जब आप फॉर्म में फोन नंबर गलत डालते हैं और तुरंत लाल रंग में चेतावनी आ जाती है, तो यह क्लाइंट-साइड स्क्रिप्टिंग के कारण होता है।",
    "whyImportant": "क्लाइंट-साइड स्क्रिप्टिंग वेबसाइट को जीवंत बनाती है और सर्वर पर बार-बार जाने का समय बचाती है। JavaScript दुनिया की सबसे लोकप्रिय क्लाइंट-साइड भाषा है।",
    "detailedExplanation": "### 1. How Client-Side Scripting Works\nClient-side scripts are downloaded by the web browser alongside HTML and CSS files, and are executed directly inside the user's browser engine using a dedicated JavaScript interpreter/JIT compiler (such as Google V8, Mozilla SpiderMonkey, or Apple JavaScriptCore).\n\n### 2. Key Characteristics & Advantages\n- **Instantaneous Feedback:** Form input validations (e.g., checking password length or email format) happen immediately without requiring a full round-trip server reload.\n- **Reduced Server Load:** Offloads computational tasks, calculations, and UI state management to the client device.\n- **Rich User Experiences:** Powers dynamic single-page applications (SPAs), drag-and-drop interfaces, charts, and interactive canvas graphics.\n\n### 3. Primary Client-Side Technologies\n- **JavaScript (ECMAScript):** The undisputed universal language of the web, natively supported by 100% of modern web browsers.\n- **TypeScript:** A strongly typed superset of JavaScript developed by Microsoft that compiles down to clean plain JavaScript.\n- **WebAssembly (Wasm):** A binary instruction format allowing high-performance code written in C++, Rust, or Go to run inside browsers at near-native speeds.",
    "syntax": "<script>\n  // Client-side JavaScript executed by Browser\n  function validateAge(age) {\n    return age >= 18;\n  }\n</script>",
    "codeExample": "<!-- Instant Client-Side Form Validation -->\n<input type=\"number\" id=\"ageInput\" placeholder=\"Enter Age\">\n<button onclick=\"checkEligibility()\">Verify</button>\n<p id=\"msg\"></p>\n\n<script>\n  function checkEligibility() {\n    var age = document.getElementById(\"ageInput\").value;\n    var msg = document.getElementById(\"msg\");\n    if (age >= 18) {\n      msg.innerHTML = \"<span style='color:green;'>Eligible for O-Level Exam!</span>\";\n    } else {\n      msg.innerHTML = \"<span style='color:red;'>Must be 18 or older!</span>\";\n    }\n  }\n</script>",
    "outputExplanation": "बिना सर्वर को कोई रिक्वेस्ट भेजे, ब्राउज़र ने स्थानीय रूप से उम्र की जांच की और तुरंत संदेश प्रदर्शित कर दिया।",
    "realWorldAnalogy": "जैसे परीक्षा हॉल में बैठा छात्र अपनी उत्तर पुस्तिका जमा करने से पहले खुद रोल नंबर चेक कर लेता है, ठीक वैसे ही क्लाइंट-साइड स्क्रिप्टिंग डेटा भेजने से पहले जांच लेती है।",
    "importantPoints": [
      "JavaScript दुनिया की सबसे प्रमुख क्लाइंट-साइड स्क्रिप्टिंग भाषा है।",
      "ब्राउज़र में 'View Source' दबाकर क्लाइंट-साइड कोड को कोई भी देख सकता है।",
      "क्लाइंट-साइड कोड यूजर के ब्राउज़र सेटिंग्स में डिसेबल भी किया जा सकता है।"
    ],
    "commonMistakes": [
      "गोपनीय पासवर्ड या डेटाबेस कनेक्शन स्ट्रिंग को क्लाइंट-साइड जावास्क्रिप्ट में लिखना (यह असुरक्षित है क्योंकि यूजर इसे देख सकता है)।"
    ],
    "examPerspective": "क्लाइंट-साइड और सर्वर-साइड में तुलना, तथा JavaScript के आविष्कारक (Brendan Eich) पर प्रश्न आते हैं।",
    "quickRevision": "क्लाइंट-साइड स्क्रिप्टिंग ब्राउज़र में निष्पादित होती है। मुख्य भाषा: JavaScript. मुख्य उपयोग: वैलिडेशन व इंटरएक्टिविटी।",
    "relatedTopics": [
      "server-side-scripting-languages",
      "client-side-scripting-intro",
      "basic-form-validations-in-javascript"
    ],
    "practiceTask": "एक साधारण HTML पेज बनाएं जिसमें एक बटन पर क्लिक करने पर स्क्रीन पर आज की तारीख और समय दिखाई दे।"
  },
  {
    "id": "u1-t9",
    "slug": "server-side-scripting-languages",
    "unit": 1,
    "unitSlug": "unit-1",
    "unitTitle": "Introduction to Web Design",
    "title": "Server Side Scripting Languages",
    "hindiTitle": "सर्वर-साइड स्क्रिप्टिंग भाषाएं",
    "definitionEnglish": "Server-side scripting languages are programming languages executed on the web server before the page is sent to the client's browser, responsible for querying databases, managing sessions, and dynamically generating customized HTML.",
    "definitionHindi": "सर्वर-साइड स्क्रिप्टिंग भाषाएं वे भाषाएं हैं जिनका कोड वेब सर्वर पर निष्पादित होता है। यह डेटाबेस से डेटा निकालता है, यूजर सेशन संभालता है, और परिणाम के रूप में तैयार HTML ब्राउज़र को भेजता है।",
    "simpleWords": "यह वह कोड है जो केवल वेब सर्वर की गुप्त तिजोरी में चलता है। यूजर इसे कभी नहीं देख सकता, केवल इसका तैयार परिणाम (आउटपुट) यूजर के ब्राउज़र में आता है।",
    "whyImportant": "डायनामिक वेबसाइट्स, जैसे फेसबुक, यूट्यूब या ऑनलाइन बैंकिंग, सर्वर-साइड स्क्रिप्टिंग के बिना संभव नहीं हैं।",
    "detailedExplanation": "### 1. Execution Model of Server-Side Scripting\nUnlike client-side scripts, server-side code is executed exclusively on the remote web hosting server before any HTML is sent to the client. The browser receives only the finalized, compiled HTML/CSS/JS output and never sees the underlying server-side source code or database queries.\n\n### 2. Prominent Server-Side Languages in Web Development\n1. **PHP (Hypertext Preprocessor):** Powers over 75% of the web, including WordPress and major CMS platforms. Highly integrated with MySQL databases.\n2. **Node.js (JavaScript on the Server):** Built on Chrome's V8 engine, allows developers to use full-stack JavaScript with asynchronous, event-driven I/O.\n3. **Python (Django / Flask / FastAPI):** Renowned for readable syntax, rapid prototyping, machine learning integrations, and clean architectural design.\n4. **Java (Spring Boot):** The enterprise standard for scalable, high-throughput, secure financial and corporate platforms.\n\n### 3. Crucial Security Imperative\n- Server-side scripting is essential for all operations requiring secret credentials, payment processing, database updates, and sensitive user authorization because client-side code can be inspected and altered by the user.",
    "syntax": "<!-- Example: PHP Server-Side Syntax -->\n<?php\n  $user = \"Saurabh\";\n  echo \"Hello, \" . $user;\n?>",
    "codeExample": "<?php\n  // Server-Side Script (PHP)\n  // This code runs on Apache Server\n  $currentHour = date(\"H\");\n  if ($currentHour < 12) {\n      $greeting = \"Good Morning!\";\n  } else {\n      $greeting = \"Good Afternoon!\";\n  }\n  // The browser only receives standard HTML:\n  echo \"<h1>\" . $greeting . \" Welcome to NIELIT Portal</h1>\";\n?>",
    "outputExplanation": "ब्राउज़र में 'View Source' करने पर यूजर को केवल `<h1>Good Morning! Welcome to NIELIT Portal</h1>` दिखेगा, PHP का कोड नहीं दिखेगा।",
    "realWorldAnalogy": "जैसे शेफ की गुप्त रेसिपी केवल किचन में रहती है और डाइनिंग टेबल पर केवल स्वादिष्ट खाना पहुंचता है, ठीक वैसे ही सर्वर-साइड कोड छिपा रहता है।",
    "importantPoints": [
      "सर्वर-साइड स्क्रिप्ट का सोर्स कोड यूजर से पूरी तरह सुरक्षित रहता है।",
      "ब्राउज़र केवल उसका आउटपुट (HTML/CSS) प्राप्त करता है।",
      "उदाहरण: PHP, Python, Ruby, Node.js, JSP."
    ],
    "commonMistakes": [
      "यह सोचना कि PHP फाइल को डबल क्लिक करके बिना लोकल सर्वर (XAMPP/WAMP) के सीधे ब्राउज़र में चलाया जा सकता है (इसके लिए वेब सर्वर आवश्यक है)।"
    ],
    "examPerspective": "सर्वर-साइड स्क्रिप्टिंग की परिभाषा, सुरक्षा लाभ, और PHP/Python के उदाहरणों पर प्रश्न पूछे जाते हैं।",
    "quickRevision": "सर्वर-साइड भाषाएं सर्वर पर चलती हैं, डेटाबेस से जुड़ती हैं और सुरक्षित होती हैं। उदाहरण: PHP, Python, Node.js.",
    "relatedTopics": [
      "client-side-scripting-languages",
      "types-of-websites",
      "back-end"
    ],
    "practiceTask": "एक तुलना तालिका बनाएं जिसमें Client-side और Server-side स्क्रिप्टिंग के 5 मुख्य अंतर लिखे हों।"
  },
  {
    "id": "u1-t10",
    "slug": "responsive-web-designing",
    "unit": 1,
    "unitSlug": "unit-1",
    "unitTitle": "Introduction to Web Design",
    "title": "Responsive Web Designing",
    "hindiTitle": "रिस्पॉन्सिव वेब डिजाइनिंग (RWD)",
    "definitionEnglish": "Responsive Web Design (RWD) is an approach to web development that makes web pages render well and adapt automatically to a variety of devices, screen sizes, and orientations (Mobile, Tablet, Desktop) using flexible layouts, fluid grids, and CSS media queries.",
    "definitionHindi": "रिस्पॉन्सिव वेब डिजाइनिंग (RWD) वेब विकास की वह तकनीक है जिसके द्वारा एक ही वेबसाइट मोबाइल, टैबलेट, लैपटॉप और डेस्कटॉप जैसे विभिन्न स्क्रीन साइजों और ओरिएंटेशन्स पर स्वतः अनुकूलित होकर सुंदर और पठनीय दिखती है।",
    "simpleWords": "जैसे पानी जिस बर्तन में डाला जाए उसी का आकार ले लेता है, वैसे ही रिस्पॉन्सिव वेबसाइट जिस स्क्रीन पर खोली जाए, उसी के अनुसार अपने फोंट्स, इमेजेस और कॉलम्स को सिकोड़ या फैला लेती है।",
    "whyImportant": "आज 60% से अधिक इंटरनेट ट्रैफिक मोबाइल फोन से आता है। यदि वेबसाइट रिस्पॉन्सिव नहीं होगी, तो मोबाइल यूजर को बार-बार ज़ूम इन/आउट करना पड़ेगा और वे साइट छोड़ देंगे।",
    "detailedExplanation": "### 1. The Core Philosophy of Responsive Web Design (RWD)\nCoined by Ethan Marcotte in 2010, Responsive Web Design ensures that web pages render seamlessly across a vast array of devices and screen viewport sizes, from 4-inch smartphones and tablets to 4K ultra-wide desktop monitors, using a single unified codebase.\n\n### 2. The 3 Technical Pillars of RWD\n1. **Fluid Grid Layouts:**\n   - Designing layout dimensions using flexible relative units (percentages `%`, viewport units `vw`/`vh`, `fr` in CSS Grid) rather than rigid fixed pixel widths.\n2. **Flexible Media (Images & Videos):**\n   - Ensuring multimedia scales within its parent container:\n   ```css\n   img, video {\n     max-width: 100%;\n     height: auto;\n   }\n   ```\n3. **CSS3 Media Queries:**\n   - Applying specific style rules selectively based on target viewport width, height, resolution, and orientation:\n   ```css\n   @media (max-width: 768px) {\n     .container { flex-direction: column; }\n   }\n   ```\n\n### 3. The Mobile-First Approach\n- Modern industry standard recommends writing base CSS styles targeting compact mobile viewports first, then layering progressive media queries (`min-width`) for tablets and large desktop screens.",
    "syntax": "Standard Responsive Viewport Meta Tag:\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n\nMedia Query Syntax:\n@media screen and (max-width: 600px) {\n  /* CSS rules for mobile phones */\n}",
    "codeExample": "<!DOCTYPE html>\n<html>\n<head>\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <style>\n    .container {\n      display: flex;\n      flex-wrap: wrap;\n    }\n    .box {\n      flex: 1 1 300px;\n      padding: 20px;\n      margin: 10px;\n      background: #38bdf8;\n      border-radius: 8px;\n    }\n    /* Mobile breakpoint */\n    @media (max-width: 600px) {\n      .box { background: #f43f5e; color: white; }\n    }\n  </style>\n</head>\n<body>\n  <div class=\"container\">\n    <div class=\"box\">Column 1 (Blue on PC, Red on Mobile)</div>\n    <div class=\"box\">Column 2 (Automatically Stacks)</div>\n  </div>\n</body>\n</html>",
    "outputExplanation": "डेस्कटॉप पर दोनों बॉक्स अगल-बगल दिखेंगे, जबकि 600px से कम चौड़े मोबाइल पर दोनों बॉक्स एक के नीचे एक लाल रंग में दिखेंगे।",
    "realWorldAnalogy": "जैसे एक इलास्टिक वाली टी-शर्ट किसी भी शरीर के आकार में सही बैठ जाती है, वैसे ही रिस्पॉन्सिव लेआउट हर स्क्रीन में फिट हो जाता है।",
    "importantPoints": [
      "RWD का आधार Viewport Meta Tag है।",
      "Ethan Marcotte ने 2010 में Responsive Web Design शब्द गढ़ा था।",
      "फ्रेमवर्क्स जैसे W3.CSS और Bootstrap स्वतः रिस्पॉन्सिव ग्रिड प्रदान करते हैं।"
    ],
    "commonMistakes": [
      "हेड सेक्शन में Viewport मेटा टैग भूल जाना (इसके बिना मोबाइल ब्राउज़र डेस्कटॉप पेज को बहुत छोटा ज़ूम करके दिखाते हैं)।",
      "इमेज पर निश्चित `width: 800px` लगा देना जिससे मोबाइल स्क्रीन पर हॉरिजॉन्टल स्क्रॉलबार आ जाए।"
    ],
    "examPerspective": "Viewport मेटा टैग का पूरा सिंटैक्स, Media Queries का उद्देश्य, और RWD के तीन मूल सिद्धांतों पर प्रश्न आते हैं।",
    "quickRevision": "RWD वेबसाइट को सभी स्क्रीनों पर स्वतः फिट करता है। Viewport meta tag + Fluid grid + Media queries इसके मुख्य आधार हैं।",
    "relatedTopics": [
      "w3-css-grid",
      "css-selectors",
      "head-section-and-elements"
    ],
    "practiceTask": "ब्राउज़र की विंडो को माउस से खींचकर छोटा और बड़ा करें और देखें कि टेक्स्ट और कॉलम्स कैसे स्वतः एडजस्ट होते हैं।"
  },
  {
    "id": "u1-t11",
    "slug": "types-of-websites",
    "unit": 1,
    "unitSlug": "unit-1",
    "unitTitle": "Introduction to Web Design",
    "title": "Types of Websites (Static and Dynamic)",
    "hindiTitle": "वेबसाइटों के प्रकार (स्टैटिक एवं डायनामिक वेबसाइट्स)",
    "definitionEnglish": "Websites are fundamentally categorized into Static Websites (fixed pre-built HTML/CSS pages delivered identical to all visitors) and Dynamic Websites (database-driven sites generated on-the-fly with content personalized to user input and time).",
    "definitionHindi": "वेबसाइटों को मुख्य रूप से दो प्रकारों में बांटा जाता है: स्टैटिक वेबसाइट (पूर्व-निर्मित निश्चित HTML/CSS पेज जो सभी यूजर्स को एक समान दिखते हैं) और डायनामिक वेबसाइट (डेटाबेस-आधारित पेज जो यूजर और समय के अनुसार तुरंत तैयार किए जाते हैं)।",
    "simpleWords": "स्टैटिक वेबसाइट एक छपी हुई किताब जैसी है जिसे कोई भी खोले, वही शब्द दिखेंगे। डायनामिक वेबसाइट फेसबुक जैसी है, जिसमें आप लॉगिन करेंगे तो आपकी फोटो दिखेगी और आपका दोस्त करेगा तो उसकी।",
    "whyImportant": "क्लाइंट की जरूरत और बजट के आधार पर सही आर्किटेक्चर (Static vs Dynamic) चुनना एक वेब आर्किटेक्ट का सबसे पहला निर्णय होता है।",
    "detailedExplanation": "### 1. Comprehensive Classification of Modern Websites\nWebsites can be systematically categorized based on their technical architecture, functionality, and purpose:\n\n1. **Static Websites:**\n   - Fixed pre-built HTML files served directly to users. Ideal for corporate portfolios, documentation, and brochures.\n2. **Dynamic & Database-Driven Websites:**\n   - Web pages built dynamically using backend databases. Users can log in, post content, and filter catalogs (e.g., WordPress, Twitter/X).\n3. **Single Page Applications (SPAs):**\n   - The initial page load downloads a JavaScript shell; subsequent page transitions and data updates occur seamlessly without full page reloads via AJAX/JSON APIs (e.g., Gmail, Trello, modern React apps).\n4. **Progressive Web Apps (PWAs):**\n   - Web applications that incorporate Service Workers, web app manifests, and caching to provide offline functionality, push notifications, and app-like installation on mobile devices.\n5. **E-Commerce Portals:**\n   - Comprehensive commercial applications handling product inventories, shopping carts, discounts, SSL checkout encryption, and payment gateway webhooks.",
    "syntax": "Comparison Table:\nFeature        | Static Website          | Dynamic Website\n---------------+-------------------------+-----------------------\nContent        | Fixed for all users     | Changes dynamically\nDatabase       | Not Required            | Required (MySQL/etc.)\nTechnologies   | HTML, CSS, JS           | HTML, CSS, JS + PHP/Python + DB\nSpeed          | Extremely Fast          | Depends on server/query\nCost           | Low hosting cost        | Higher hosting cost",
    "codeExample": "<!-- Static Webpage: The content is hard-coded in HTML -->\n<div class=\"product\">\n  <h2>NIELIT M2-R5.1 Book</h2>\n  <p>Price: ₹250 (Fixed in HTML)</p>\n</div>\n\n<!-- In a Dynamic Website, this price would come from database:\n     <p>Price: ₹<?php echo $row['price']; ?></p> -->",
    "outputExplanation": "स्टैटिक पेज में कीमत बदलने के लिए फाइल खोलकर 250 को बदलना पड़ेगा, जबकि डायनामिक पेज में डेटाबेस बदलते ही पूरे पेज पर नया दाम दिख जाता है।",
    "realWorldAnalogy": "दीवार पर टंगा छपा हुआ कैलेंडर स्टैटिक है; आपके स्मार्टफोन का डिजिटल कैलेंडर डायनामिक है।",
    "importantPoints": [
      "स्टैटिक वेबसाइट में डेटाबेस की आवश्यकता नहीं होती।",
      "डायनामिक वेबसाइट में सर्वर-साइड प्रोग्रामिंग और डेटाबेस जरूरी होता है।",
      "स्टैटिक वेबसाइट अधिक सुरक्षित और तेज होती हैं।"
    ],
    "commonMistakes": [
      "यह सोचना कि स्टैटिक वेबसाइट में एनीमेशन नहीं हो सकता (CSS और JS एनिमेशन स्टैटिक साइट में भी काम करते हैं)।"
    ],
    "examPerspective": "स्टैटिक और डायनामिक वेबसाइट के बीच अंतर पर 5 नंबर का वर्णनात्मक प्रश्न और बहुविकल्पीय प्रश्न अक्सर पूछा जाता है।",
    "quickRevision": "स्टैटिक साइट्स में निश्चित सामग्री होती है (बिना डेटाबेस), डायनामिक साइट्स में डेटाबेस आधारित परिवर्तनशील सामग्री होती है।",
    "relatedTopics": [
      "website",
      "working-of-websites",
      "client-side-scripting-languages"
    ],
    "practiceTask": "सोचें कि विकिपीडिया, यूट्यूब और एक डॉक्टर के क्लिनिक का विजिटिंग कार्ड पेज इनमें से कौन सा स्टैटिक है और कौन सा डायनामिक?"
  }
];
