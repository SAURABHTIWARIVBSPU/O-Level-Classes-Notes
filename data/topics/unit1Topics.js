// Unit 1: Introduction to Web Design — topic notes
// Written to CONTENT_STYLE.md. Each fact is explained once, in the topic that
// owns it; other topics point to it in one line.

const q = (question, options, correctAnswer, explanation) => ({
  question,
  options: options.map((text, i) => ({ id: 'ABCD'[i], text })),
  correctAnswer,
  explanation,
});

export const unit1Topics = [
  /* ===================================================== 1. Internet ===== */
  {
    id: 'u1-t1',
    slug: 'introduction-of-internet',
    unit: 1,
    unitSlug: 'unit-1',
    unitTitle: 'Introduction to Web Design',
    title: 'Introduction of Internet',
    hindiTitle: 'इंटरनेट का परिचय',
    definitionEnglish:
      'The Internet is a worldwide network of computer networks that are connected to each other and exchange data using the TCP/IP protocols.',
    definitionHindi:
      'इंटरनेट दुनिया भर के computer networks का एक जाल है, जो आपस में जुड़े हैं और TCP/IP protocols की मदद से data का आदान-प्रदान करते हैं।',
    simpleWords:
      'आपका फोन, आपके कॉलेज का computer और Google का server — ये सब एक ही बड़े network से जुड़े हैं। उसी जुड़ाव का नाम इंटरनेट है। इसी की वजह से आप WhatsApp पर message भेज पाते हैं या YouTube पर video देख पाते हैं।',
    whyImportant:
      'आप जो भी webpage बनाएंगे, वह इंटरनेट के जरिए ही किसी दूसरे के browser तक पहुंचेगा। इसलिए web designing की शुरुआत यहीं से होती है — और exam में इस topic से 1–2 सीधे सवाल आते ही हैं।',
    detailedExplanation: `### A network of networks

A network is a group of computers connected so they can share data. Your college lab is one network. Your mobile company runs a much bigger one. The Internet is what you get when thousands of such networks across the world are connected to each other — which is why it is called a *network of networks*.

Nobody owns the Internet. Each organisation runs its own part and agrees to follow common rules (protocols) so that everyone's computers can talk to each other.

### How it started

- **1969 — ARPANET.** The US defence department's research agency (ARPA) connected four university computers. This was the first network of its kind and the ancestor of today's Internet.
- **1974 — TCP/IP.** Vint Cerf and Bob Kahn designed the TCP/IP protocols — the common language that lets different networks connect. They are called the *fathers of the Internet*.
- **1 January 1983.** ARPANET switched fully to TCP/IP. Many books count this as the birthday of the modern Internet.
- **15 August 1995.** VSNL (Videsh Sanchar Nigam Limited) opened Internet access to the public in India.

### How data actually travels

When you send a photo on WhatsApp, the photo is not sent in one piece. It is cut into small pieces called **packets**. Each packet carries the sender's address, the receiver's address and its own serial number, and each one finds its own route through the network. At the other end, TCP puts the packets back in order and checks that none are missing. This method is called **packet switching**, and it is why the Internet keeps working even if one route is busy or broken.

### IP address — every device needs one

Just as every house needs a postal address, every device on the Internet needs an **IP address**. There are two versions:

| | IPv4 | IPv6 |
|---|---|---|
| Size | 32 bits | 128 bits |
| Looks like | \`192.168.1.1\` (four numbers, 0–255, separated by dots) | \`2001:db8::8a2e:370:7334\` (eight groups of hexadecimal digits, separated by colons) |
| Why it exists | The original scheme — about 4.3 billion addresses | IPv4 addresses ran out; IPv6 has enough for every device on earth many times over |

For the exam, remember the two sizes: **IPv4 = 32 bits, IPv6 = 128 bits.**

### Who connects you

Your device reaches the Internet through an **ISP (Internet Service Provider)** — Jio, Airtel, BSNL and so on. The ISP gives your connection an IP address and carries your packets to the rest of the world.`,
    syntax:
      'IPv4 address : 4 numbers (0–255) separated by dots      e.g. 172.217.167.78\nIPv6 address : 8 groups of hex digits separated by colons  e.g. 2001:db8::8a2e:370:7334',
    realWorldAnalogy:
      'जैसे India Post आपका बड़ा parcel कई छोटे पैकेटों में अलग-अलग गाड़ियों से भेजे और मंज़िल पर पहुंचकर उन्हें फिर से जोड़ दे — इंटरनेट पर आपका data भी ठीक इसी तरह packets में सफर करता है।',
    importantPoints: [
      'Internet = network of networks; इसका कोई एक मालिक नहीं है।',
      'TCP/IP इंटरनेट का basic protocol है; इसे Vint Cerf और Bob Kahn ने बनाया (1974)।',
      'IPv4 = 32 bits, IPv6 = 128 bits।',
      'भारत में public इंटरनेट 15 अगस्त 1995 को VSNL ने शुरू किया।',
      'ISP (Jio, Airtel, BSNL) वह company है जो आपको इंटरनेट से जोड़ती है।',
    ],
    commonMistakes: [
      'इंटरनेट और WWW को एक ही चीज़ समझना। इंटरनेट network (तार, router, server) है; WWW उस पर चलने वाली एक service है — अंतर की पूरी table अगले topic में है।',
      'IPv4 को 64-bit लिख देना। IPv4 32-bit है, IPv6 128-bit।',
    ],
    examPerspective:
      'इस topic से सवाल सीधे fact पूछते हैं — "IPv6 address कितने bits का होता है?", "TCP/IP किसने बनाया?", "भारत में इंटरनेट कब शुरू हुआ?"। History की तारीखें और bit-size याद रखें।',
    quickRevision:
      'Internet = network of networks, TCP/IP पर चलता है। ARPANET 1969 → TCP/IP 1974 (Cerf & Kahn) → भारत 1995 (VSNL)। Data packets में जाता है। IPv4 32-bit, IPv6 128-bit।',
    practiceTask:
      'Command Prompt (या Terminal) खोलें और `ping google.com` चलाएं। जो IP address दिखे, गिनें कि उसमें dots से अलग किए गए कितने numbers हैं — यही IPv4 है।',
    mcqs: [
      q(
        'How many bits does an IPv6 address have?',
        ['32', '64', '128', '256'],
        'C',
        'IPv4 addresses are 32 bits; IPv6 addresses are 128 bits, which is why they are written in eight hexadecimal groups.',
      ),
      q(
        'Who are known as the fathers of the Internet?',
        ['Tim Berners-Lee and Robert Cailliau', 'Vint Cerf and Bob Kahn', 'Bill Gates and Paul Allen', 'Larry Page and Sergey Brin'],
        'B',
        'Cerf and Kahn designed TCP/IP. Tim Berners-Lee invented the World Wide Web, which is a different thing.',
      ),
    ],
    relatedTopics: ['www', 'working-of-websites'],
  },

  /* ========================================================== 2. WWW ===== */
  {
    id: 'u1-t2',
    slug: 'www',
    unit: 1,
    unitSlug: 'unit-1',
    unitTitle: 'Introduction to Web Design',
    title: 'WWW (World Wide Web)',
    hindiTitle: 'वर्ल्ड वाइड वेब (WWW)',
    definitionEnglish:
      'The World Wide Web (WWW) is a collection of web pages and other resources on the Internet that are identified by URLs and linked to each other through hyperlinks.',
    definitionHindi:
      'World Wide Web (WWW) इंटरनेट पर मौजूद webpages और resources का वह संग्रह है, जिन्हें URL से पहचाना जाता है और जो hyperlinks से आपस में जुड़े होते हैं।',
    simpleWords:
      'इंटरनेट पर करोड़ों pages हैं और हर page पर links हैं जो दूसरे pages तक ले जाते हैं। इन जुड़े हुए pages की पूरी दुनिया ही WWW या "वेब" है। Browser वह खिड़की है जिससे आप इसे देखते हैं।',
    whyImportant:
      'HTML, CSS और JavaScript — जो कुछ भी आप इस module में सीखेंगे — वह सब WWW के लिए ही है। और Internet vs WWW का अंतर exam का पक्का सवाल है।',
    detailedExplanation: `### The Web is not the Internet

This is the single most important idea in this topic, and the most common exam question.

| | The Internet | The World Wide Web |
|---|---|---|
| What it is | The physical network — cables, routers, servers, and the TCP/IP rules that connect them | A service that runs *on* the Internet: web pages linked by hyperlinks |
| Started | 1969 (ARPANET) | 1989 (CERN) |
| Protocols | TCP/IP | HTTP / HTTPS |
| Other services on it | Email, file transfer (FTP), video calls, online games | — |

Email, WhatsApp and online games all use the Internet but are not part of the Web. The Web is one service among many — the one that browsers show you.

### Who invented it, and why

In **1989**, **Tim Berners-Lee**, a British scientist working at **CERN** (the physics laboratory in Geneva, Switzerland), wanted scientists to share documents easily across different computers. His solution had three parts, and all three are still the foundation of the Web:

1. **HTML** — a language for writing the pages.
2. **HTTP** — the rules for sending a page from a server to a browser.
3. **URL** — a unique address for every page.

He also wrote the first browser and put up the first website, \`info.cern.ch\`, which is still online.

### Hypertext: text that links

Ordinary text is read from start to finish. **Hypertext** is text with links in it — click a word and you jump to another page. This is what makes the Web a "web": pages connected in every direction rather than in a single line. When the links also lead to images, audio and video, the term used is **hypermedia**.

### Who sets the rules today

The **W3C (World Wide Web Consortium)**, founded by Tim Berners-Lee in 1994, publishes the standards for HTML, CSS and other web technologies so that every browser understands pages the same way.`,
    syntax:
      'URL parts:\nprotocol://domain-name/path\nhttps://www.nielit.gov.in/courses/o-level',
    codeExample:
      '<!-- A hyperlink: the thing that makes the Web a web -->\n<p>\n  The first website ever made is still online:\n  <a href="http://info.cern.ch">Visit info.cern.ch</a>\n</p>',
    outputExplanation:
      'Browser में एक sentence दिखेगा जिसमें "Visit info.cern.ch" नीले underline वाले link के रूप में होगा। उस पर click करते ही browser उस URL का page खोल देगा — यही hyperlink है।',
    realWorldAnalogy:
      'इंटरनेट अगर सड़कों और highways का जाल है, तो WWW उन सड़कों पर चलने वाली एक bus service है। Email और video call उसी सड़क पर चलने वाली दूसरी गाड़ियां हैं।',
    importantPoints: [
      'WWW का आविष्कार Tim Berners-Lee ने 1989 में CERN (Geneva) में किया।',
      'Web की तीन नींव: HTML, HTTP और URL।',
      'दुनिया की पहली website: info.cern.ch।',
      'Web के standards W3C बनाता है (स्थापना 1994)।',
      'Internet = network; WWW = उस पर चलने वाली एक service।',
    ],
    commonMistakes: [
      'Tim Berners-Lee को इंटरनेट का जनक बताना। वे WWW के जनक हैं; इंटरनेट के लिए Vint Cerf और Bob Kahn का नाम लिया जाता है।',
      '"Internet और WWW एक ही हैं" — नहीं। ऊपर की table exam के लिए याद कर लें।',
    ],
    examPerspective:
      'पूछा जाता है: "WWW का आविष्कार किसने और कब किया?", "CERN कहां है?", "Internet और WWW में अंतर लिखिए" (2–3 अंक)। Hypertext की definition भी एक-line question के रूप में आती है।',
    quickRevision:
      'WWW = hyperlinks से जुड़े webpages की दुनिया, HTTP पर चलती है। Tim Berners-Lee, 1989, CERN। नींव: HTML + HTTP + URL। Standards: W3C।',
    practiceTask:
      'Browser में `info.cern.ch` खोलें। ध्यान दें कि उस page पर कोई design नहीं है — सिर्फ text और links। यही 1991 का Web था।',
    mcqs: [
      q(
        'Which of these is NOT part of the World Wide Web?',
        ['A Wikipedia article', 'An email sent from Gmail to Yahoo', 'The NIELIT website', 'A YouTube video page'],
        'B',
        'Email uses the Internet but is a separate service; the Web is only the pages you open in a browser.',
      ),
      q(
        'The World Wide Web was invented at',
        ['MIT, USA', 'CERN, Switzerland', 'Bell Labs, USA', 'IIT Delhi, India'],
        'B',
        'Tim Berners-Lee invented the Web at CERN in Geneva in 1989.',
      ),
    ],
    relatedTopics: ['introduction-of-internet', 'website', 'webpages'],
  },

  /* ====================================================== 3. Website ===== */
  {
    id: 'u1-t3',
    slug: 'website',
    unit: 1,
    unitSlug: 'unit-1',
    unitTitle: 'Introduction to Web Design',
    title: 'Website',
    hindiTitle: 'वेबसाइट',
    definitionEnglish:
      'A website is a group of related web pages that share one domain name and are stored on a web server so that anyone can open them through the Internet.',
    definitionHindi:
      'Website आपस में जुड़े हुए webpages का एक समूह है, जो एक ही domain name के अंतर्गत आते हैं और एक web server पर रखे होते हैं ताकि कोई भी उन्हें इंटरनेट से खोल सके।',
    simpleWords:
      'nielit.gov.in पर आपको home page, courses का page, contact का page — कई pages मिलते हैं। ये सारे pages मिलकर एक website हैं। एक page अकेला webpage है; सबका समूह website है।',
    whyImportant:
      'Web designer का असली काम एक page नहीं, पूरी website बनाना है — उसके pages, उनके बीच का navigation और उनकी folder structure। यही चीज़ practical exam में भी बनवाई जाती है।',
    detailedExplanation: `### What makes a website a website

Three things have to be in place:

1. **A domain name** — the address people type, such as \`nielit.gov.in\`. One website, one domain.
2. **A web server** — a computer that is switched on and connected to the Internet all the time, where the website's files are kept. Renting space on such a computer is called **hosting**.
3. **Pages linked to each other** — at least one page, usually many, connected through a menu or links.

### The home page and \`index.html\`

The first page a visitor sees is the **home page**. Web servers look for a file named \`index.html\` and show it automatically when someone opens just the domain. Name your home page anything else and the visitor gets an error. This detail is asked in the exam and it also bites students in the practical.

### How the files are organised

A real website is a folder. Keep pages at the top and put each kind of file in its own sub-folder — the browser does not care, but you and your teammates will:

\`\`\`text
my-website/
├── index.html      home page
├── about.html
├── contact.html
├── css/style.css   all the styling
├── js/main.js      all the scripts
└── images/         logos, photos
\`\`\`

The links between pages use these paths — \`href="about.html"\`, \`src="images/logo.png"\`.

### Static or dynamic?

Some websites show the same pages to everyone; others build a different page for each user (your Facebook feed is not mine). This difference — static versus dynamic — has its own topic, *Types of Websites*, at the end of this unit.`,
    codeExample:
      '<!-- A menu that links the pages of one website together -->\n<nav>\n  <a href="index.html">Home</a>\n  <a href="about.html">About</a>\n  <a href="courses.html">Courses</a>\n  <a href="contact.html">Contact</a>\n</nav>',
    outputExplanation:
      'Page के ऊपर चार links एक line में दिखेंगे। हर link उसी folder की एक दूसरी .html file खोलता है — इसी तरह अलग-अलग pages मिलकर एक website बनते हैं।',
    realWorldAnalogy:
      'Website एक किताब है और webpages उसके अध्याय। किताब का नाम (domain) एक है, अंदर कई अध्याय हैं, और index (home page) से आप किसी भी अध्याय तक पहुंच सकते हैं।',
    importantPoints: [
      'Website = एक domain name के नीचे जुड़े हुए webpages का समूह।',
      'Home page की file का नाम `index.html` रखा जाता है — server इसी को सबसे पहले ढूंढता है।',
      'Website की files web server पर रखी जाती हैं; उस जगह को किराए पर लेना hosting कहलाता है।',
      'CSS, JS और images को अलग folders में रखना अच्छी practice है।',
    ],
    commonMistakes: [
      'Home page को `home.html` नाम देकर upload करना — server `index.html` ढूंढता है, इसलिए visitor को error मिलता है।',
      'Website और webpage को एक ही चीज़ समझना। Webpage एक page है; website कई pages का समूह।',
    ],
    examPerspective:
      'सीधा सवाल: "Website किसे कहते हैं?" (definition), "Website का पहला page क्या कहलाता है?" (Home page / index.html), "Website और webpage में अंतर" (2 अंक)।',
    quickRevision:
      'Website = एक domain के नीचे webpages का समूह, web server पर hosted। पहला page = home page = index.html। Files को css/, js/, images/ folders में रखें।',
    practiceTask:
      'Computer पर एक folder बनाएं। उसमें `index.html` और `about.html` बनाएं और दोनों में एक-दूसरे का link (`<a href="...">`) लगाएं। Browser में index.html खोलकर link click करके देखें।',
    mcqs: [
      q(
        'A web server shows which file by default when you open only the domain name?',
        ['home.html', 'main.html', 'index.html', 'default.txt'],
        'C',
        'Servers are configured to look for index.html first, so the home page must have that name.',
      ),
      q(
        'Which statement is correct?',
        ['A website is one page of a webpage', 'A webpage is a collection of websites', 'A website is a collection of related webpages', 'Website and webpage mean the same thing'],
        'C',
        'One webpage is a single HTML document; a website is the group of related pages under one domain.',
      ),
    ],
    relatedTopics: ['webpages', 'working-of-websites', 'types-of-websites'],
  },

  /* ========================================== 4. Working of websites ===== */
  {
    id: 'u1-t4',
    slug: 'working-of-websites',
    unit: 1,
    unitSlug: 'unit-1',
    unitTitle: 'Introduction to Web Design',
    title: 'Working of Websites',
    hindiTitle: 'वेबसाइट कैसे काम करती है',
    definitionEnglish:
      'A website works on the client–server model: the browser (client) sends a request for a page to the web server, and the server sends the page back as a response.',
    definitionHindi:
      'Website client–server model पर काम करती है: browser (client) web server को page की request भेजता है, और server जवाब में वह page भेज देता है।',
    simpleWords:
      'आप browser में एक नाम type करते हैं, browser उस नाम का पता (IP address) पूछता है, फिर उस पते वाले computer से page मांगता है, और वह computer page भेज देता है। पूरी बात एक सेकंड से भी कम में हो जाती है।',
    whyImportant:
      'Client और server में क्या-क्या होता है, यह समझे बिना आप यह तय नहीं कर पाएंगे कि कौन सा काम HTML/JavaScript से होगा और कौन सा server पर। Exam में DNS और client–server model पर सवाल हर साल आते हैं।',
    detailedExplanation: `### Two sides: client and server

- The **client** is the program that asks for a page — normally a browser such as Chrome or Firefox on your phone or laptop.
- The **server** is the computer where the website lives, running server software such as Apache or Nginx, waiting for requests.

The client always starts the conversation. The server only answers.

### What happens when you press Enter

Say you type \`www.nielit.gov.in\` and press Enter.

1. **Find the address (DNS).** Browsers cannot connect to a name, only to an IP address. So the browser asks a **DNS (Domain Name System)** server, "what is the IP address of nielit.gov.in?" DNS is the Internet's phone book — it answers with a number such as \`164.100.x.x\`.
2. **Send the request.** The browser connects to that IP address and sends an **HTTP request**: "please give me the page \`/\`".
3. **The server answers.** The server finds the file (or builds the page), and sends back an **HTTP response** — a status code plus the HTML.
4. **The browser draws the page.** It reads the HTML, fetches the CSS, images and scripts the page mentions, and displays the result.

### HTTP and HTTPS

**HTTP (HyperText Transfer Protocol)** is the language of the request and the response. **HTTPS** is HTTP with encryption added, so nobody in between can read what is sent. This is why banking and login pages always use HTTPS and why the browser shows a lock icon.

### Status codes worth knowing

The first line of every response carries a code: **200** means OK, the page was found; **404** means Not Found — the address is wrong or the page was removed; **500** means the server itself had an error.`,
    syntax:
      '1. Browser  --"IP of nielit.gov.in?"-->  DNS server\n2. Browser  <---- "164.100.x.x" ---------  DNS server\n3. Browser  --HTTP request: GET / ------>  Web server\n4. Browser  <--HTTP response: 200 + HTML-  Web server',
    realWorldAnalogy:
      'Restaurant में आप (client) waiter को order देते हैं, waiter kitchen (server) से खाना लाकर आपकी table पर रखता है। Menu में dish का नाम है, पर kitchen को order पहुंचाने के लिए waiter को table number चाहिए — वही काम DNS करता है।',
    importantPoints: [
      'Client = browser (मांगता है); Server = वह computer जहां website रखी है (देता है)।',
      'DNS domain name को IP address में बदलता है — इसके बिना browser server तक पहुंच ही नहीं सकता।',
      'Request और response HTTP में होते हैं; HTTPS = HTTP + encryption (lock icon)।',
      'Status code 200 = OK, 404 = Not Found।',
    ],
    commonMistakes: [
      'यह मानना कि browser domain name से सीधे जुड़ जाता है। Browser सिर्फ IP address से जुड़ता है; नाम को IP में DNS बदलता है।',
      'HTTP और HTTPS में सिर्फ "S" का अंतर समझना — HTTPS में data encrypted होता है, यही उसका पूरा मतलब है।',
    ],
    examPerspective:
      '"DNS का पूरा नाम और काम", "Client-server model समझाइए", "HTTP और HTTPS में अंतर", "404 error का क्या मतलब है?" — ये चारों सवाल पिछले papers में आ चुके हैं।',
    quickRevision:
      'URL type करो → DNS नाम को IP में बदलता है → browser HTTP request भेजता है → server 200 OK के साथ HTML भेजता है → browser page दिखाता है। HTTPS = secure HTTP। 404 = page नहीं मिला।',
    practiceTask:
      'Chrome में कोई page खोलें, F12 दबाकर **Network** tab खोलें और page reload करें। पहली line में Status column देखें — 200 दिखेगा। अब address में कोई गलत page नाम लिखकर देखें: 404।',
    mcqs: [
      q(
        'What does DNS do?',
        ['Encrypts web pages', 'Converts a domain name into an IP address', 'Stores website files', 'Displays HTML in the browser'],
        'B',
        'DNS is the phone book of the Internet — it turns nielit.gov.in into a number the browser can connect to.',
      ),
      q(
        'The status code 404 in an HTTP response means',
        ['The page was found', 'The server is secure', 'The page was not found', 'The browser is outdated'],
        'C',
        '200 means OK; 404 means the requested page does not exist at that address.',
      ),
    ],
    relatedTopics: ['introduction-of-internet', 'client-side-scripting-languages', 'server-side-scripting-languages'],
  },

  /* ===================================================== 5. Webpages ===== */
  {
    id: 'u1-t5',
    slug: 'webpages',
    unit: 1,
    unitSlug: 'unit-1',
    unitTitle: 'Introduction to Web Design',
    title: 'Webpages',
    hindiTitle: 'वेबपेज',
    definitionEnglish:
      'A webpage is a single document on the World Wide Web, written in HTML, that has its own URL and is displayed by a web browser.',
    definitionHindi:
      'Webpage World Wide Web पर मौजूद एक अकेला document है, जो HTML में लिखा होता है, जिसका अपना URL होता है और जिसे browser दिखाता है।',
    simpleWords:
      'Wikipedia का कोई एक article, YouTube का कोई एक video वाला page, या इस site का यही page — हर एक एक webpage है। Screen पर जो कुछ एक बार में खुलता है, वही एक webpage है।',
    whyImportant:
      'Webpage ही वह चीज़ है जो आप इस पूरे module में बनाना सीखेंगे। Unit 3 में HTML से इसी की structure बनती है, Unit 4 में CSS से इसका रूप।',
    detailedExplanation: `### One page, one file, one address

A webpage is one HTML file. Save it with the extension **\`.html\`** (or \`.htm\`) and any browser can open it. On a live website every page has its own **URL** — \`nielit.gov.in/contact\` is a different page from \`nielit.gov.in/courses\`.

A website is simply many such pages linked together (see *Website*).

### What is inside the file

Every HTML page has the same skeleton:

- \`<!DOCTYPE html>\` — tells the browser this is an HTML5 document.
- \`<head>\` — information *about* the page: its title (shown on the browser tab), character set, links to CSS. Nothing here is displayed on the page itself.
- \`<body>\` — everything the visitor actually sees: headings, paragraphs, images, links, forms.

You will study every part of this skeleton in Unit 3. For now, recognise the three pieces.

### What is usually on the page

Most pages are laid out in three areas, top to bottom: a **header** with the logo and menu, the **main content**, and a **footer** with contact details and copyright. Keeping this order makes a page easy to read and is what examiners expect when they ask for the "parts of a webpage".

### Three languages, three jobs

A page's structure comes from HTML, its appearance from CSS, and its behaviour from JavaScript. The next topic, *Front End*, explains these three roles properly.`,
    syntax:
      '<!DOCTYPE html>\n<html>\n  <head>\n    <title>Page title (browser tab)</title>\n  </head>\n  <body>\n    ...what the visitor sees...\n  </body>\n</html>',
    codeExample:
      '<!DOCTYPE html>\n<html lang="hi">\n<head>\n  <meta charset="UTF-8">\n  <title>मेरा पहला page</title>\n</head>\n<body>\n  <h1>नमस्ते!</h1>\n  <p>यह मेरा पहला webpage है।</p>\n  <a href="https://nielit.gov.in">NIELIT की website</a>\n</body>\n</html>',
    outputExplanation:
      'Browser के tab पर "मेरा पहला page" दिखेगा। Page पर एक बड़ी heading "नमस्ते!", उसके नीचे एक line और एक नीला link दिखेगा। `<head>` का कुछ भी page पर नहीं दिखता — सिर्फ tab पर title।',
    realWorldAnalogy:
      'Website अगर पूरी magazine है, तो webpage उसका एक छपा हुआ page — और हर page का अपना page number (URL) है।',
    importantPoints: [
      'Webpage = एक HTML file; extension `.html` या `.htm`।',
      'हर webpage का अपना unique URL होता है।',
      '`<head>` में page की जानकारी (title, charset); `<body>` में वह सब जो दिखता है।',
      'Page के तीन आम हिस्से: header, content, footer।',
    ],
    commonMistakes: [
      'Webpage और website को एक-दूसरे की जगह लिख देना। एक page = webpage; कई pages = website।',
      '`<title>` को page पर दिखने वाली heading समझना। Title सिर्फ browser tab पर दिखता है; page की heading `<h1>` से बनती है।',
    ],
    examPerspective:
      '"Webpage की परिभाषा दीजिए", "Webpage के मुख्य भाग बताइए" (header, content, footer), और "Website तथा webpage में अंतर" — यही तीन रूपों में यह topic पूछा जाता है।',
    quickRevision:
      'Webpage = एक HTML document, अपना URL, browser में खुलता है। Skeleton: doctype → head (title) → body (content)। Layout: header, content, footer।',
    practiceTask:
      'Notepad में ऊपर वाला code type करें, `first.html` नाम से save करें और Chrome में खोलें। फिर `<title>` बदलकर देखें — page पर नहीं, tab पर बदलाव दिखेगा।',
    mcqs: [
      q(
        'Which part of an HTML page holds the content that the visitor sees?',
        ['<head>', '<title>', '<body>', '<!DOCTYPE>'],
        'C',
        'The head describes the page; the body contains what is displayed.',
      ),
      q(
        'A webpage file is saved with the extension',
        ['.web', '.html', '.page', '.doc'],
        'B',
        'HTML documents use .html (or the older .htm).',
      ),
    ],
    relatedTopics: ['website', 'front-end', 'basic-structure-of-html'],
  },

  /* ==================================================== 6. Front end ===== */
  {
    id: 'u1-t6',
    slug: 'front-end',
    unit: 1,
    unitSlug: 'unit-1',
    unitTitle: 'Introduction to Web Design',
    title: 'Front End',
    hindiTitle: 'फ्रंट-एंड',
    definitionEnglish:
      'The front end of a website is the part that runs in the browser and that the user sees and interacts with — built with HTML, CSS and JavaScript.',
    definitionHindi:
      'Website का front end वह हिस्सा है जो browser में चलता है और जिसे user देखता व इस्तेमाल करता है — यह HTML, CSS और JavaScript से बनता है।',
    simpleWords:
      'किसी app या website पर जो भी आपको दिखता है — buttons, menu, रंग, text, forms — और जिस पर आप click करते हैं, वह सब front end है। इसे "client side" भी कहते हैं क्योंकि यह आपके device पर चलता है।',
    whyImportant:
      'O Level का यह पूरा module (M2-R5.1) front end पर ही है — HTML, CSS, W3.CSS, JavaScript। "Front end और back end में अंतर" exam का पक्का सवाल है।',
    detailedExplanation: `### Three languages, and what each one does

Every front end is built from the same three languages. Each has one job, and the exam expects you to state the job clearly.

| Language | Job | Example |
|---|---|---|
| **HTML** | Structure — what is on the page and in what order | "This is a heading, this is a paragraph, this is an image" |
| **CSS** | Presentation — how it looks | Colours, fonts, spacing, layout, responsive behaviour |
| **JavaScript** | Behaviour — what happens when the user does something | A menu that opens on click, a form that checks your input |

A useful way to remember it: HTML is the skeleton, CSS is the skin and clothes, JavaScript is the muscles.

### Where the code runs

Front-end code is downloaded to the visitor's device and executed by the browser. That has two consequences you should remember:

- Anyone can read it — right-click any page and choose *View Page Source*.
- It cannot do anything private, such as checking a password against a database. That work belongs to the back end (next topic).

### Frameworks — ready-made front-end code

Writing everything from scratch is slow, so developers use **frameworks**: libraries of ready-made styles and components. This syllabus covers **W3.CSS** (Unit 5) and **AngularJS** (Unit 6). Others you will hear of are Bootstrap, React and Vue — you do not need to know them for the exam, only that they are front-end frameworks.`,
    syntax: 'Front end = HTML (structure) + CSS (presentation) + JavaScript (behaviour)',
    codeExample:
      '<!-- All three front-end languages in one small card -->\n<style>\n  .card { border: 2px solid #5b4cd8; padding: 12px; width: 220px; }\n</style>\n\n<div class="card" id="card">\n  <h3>Hello, student</h3>\n  <button onclick="document.getElementById(\'card\').style.background = \'#f0eefd\'">\n    Click me\n  </button>\n</div>',
    outputExplanation:
      'एक बैंगनी border वाला box दिखेगा जिसमें heading और एक button है। HTML ने box और button बनाया, CSS ने border और चौड़ाई दी, और JavaScript ने button click पर background का रंग बदल दिया — तीनों का काम अलग-अलग दिख रहा है।',
    realWorldAnalogy:
      'Restaurant का dining hall — table, menu card, सजावट, waiter जिससे आप बात करते हैं — front end है। Kitchen, जहां असली काम होता है, back end है।',
    importantPoints: [
      'Front end = client side = जो browser में चलता है और user को दिखता है।',
      'HTML → structure, CSS → look, JavaScript → behaviour।',
      'Front-end code कोई भी "View Page Source" से देख सकता है।',
      'इस syllabus के front-end frameworks: W3.CSS (Unit 5) और AngularJS (Unit 6)।',
    ],
    commonMistakes: [
      'Database को front end का हिस्सा समझना। Database हमेशा back end में रहता है — front end सिर्फ उससे मांगता है।',
      'CSS को "programming language" कहना। CSS style बताती है, logic नहीं लिखती; logic JavaScript में होता है।',
    ],
    examPerspective:
      '"Front end क्या है? इसमें कौन-कौन सी technologies प्रयोग होती हैं?" (3 अंक) और "Front end व back end में अंतर" (table के रूप में) — दोनों बार-बार पूछे गए हैं।',
    quickRevision:
      'Front end = browser में चलने वाला, user को दिखने वाला हिस्सा। HTML (structure) + CSS (look) + JS (behaviour)। Frameworks: W3.CSS, AngularJS, Bootstrap।',
    practiceTask:
      'ऊपर का code एक .html file में save करके खोलें। फिर `<style>` वाला हिस्सा हटाकर reload करें — box का border गायब हो जाएगा, पर button काम करता रहेगा। यही HTML, CSS और JS का अलग-अलग होना है।',
    mcqs: [
      q(
        'Which language decides how a webpage looks — colours, fonts and spacing?',
        ['HTML', 'CSS', 'JavaScript', 'PHP'],
        'B',
        'HTML gives structure, CSS gives presentation, JavaScript gives behaviour.',
      ),
      q(
        'Front-end code runs on',
        ['The web server', 'The DNS server', "The user's browser", 'The database'],
        'C',
        'Front end is also called client side because it is executed by the browser on the user\'s device.',
      ),
    ],
    relatedTopics: ['back-end', 'client-side-scripting-languages', 'introduction-to-css'],
  },

  /* ===================================================== 7. Back end ===== */
  {
    id: 'u1-t7',
    slug: 'back-end',
    unit: 1,
    unitSlug: 'unit-1',
    unitTitle: 'Introduction to Web Design',
    title: 'Back End',
    hindiTitle: 'बैक-एंड',
    definitionEnglish:
      'The back end of a website is the part that runs on the server — the application code and the database that store data, check logins and prepare the pages the front end shows.',
    definitionHindi:
      'Website का back end वह हिस्सा है जो server पर चलता है — application code और database, जो data रखते हैं, login जांचते हैं और वे pages तैयार करते हैं जिन्हें front end दिखाता है।',
    simpleWords:
      'जब आप IRCTC पर login करते हैं, आपका password कौन जांचता है? जब आप ticket book करते हैं, seat कहां save होती है? यह सब server पर, पर्दे के पीछे होता है — यही back end है। आप इसे कभी देखते नहीं, सिर्फ इसका नतीजा देखते हैं।',
    whyImportant:
      'यह module front end का है, लेकिन form का data कहां जाता है और सुरक्षित काम server पर क्यों होते हैं — यह समझे बिना web design अधूरी है। Exam में front end vs back end का अंतर तय सवाल है।',
    detailedExplanation: `### What the back end is made of

Three pieces work together on the server:

1. **Web server software** — Apache, Nginx or similar. It receives every request from browsers and passes it to the right program.
2. **Application code** — written in a server-side language such as PHP, Python, Java or Node.js. This is where the logic lives: check the password, calculate the bill, find the trains between two stations.
3. **Database** — MySQL, PostgreSQL, MongoDB and others. This is where the data lives: users, orders, bookings, posts.

### Why some work must happen on the server

The front end runs on the visitor's device, where the visitor can see and change the code. So anything that must be trusted or kept secret has to run on the back end:

- checking a username and password,
- reading or saving anything in the database,
- payments,
- deciding what a particular user is allowed to see.

The back end does the work and sends only the *result* to the browser. The visitor never sees the server code or the database.

### Front end and back end, side by side

| | Front end | Back end |
|---|---|---|
| Runs on | The user's browser | The web server |
| Languages | HTML, CSS, JavaScript | PHP, Python, Java, Node.js + a database |
| Visible to user | Yes — View Page Source shows it | No — only the output reaches the browser |
| Typical job | Show the login form | Check the password |

The languages of the back end are covered in *Server Side Scripting Languages*, later in this unit.`,
    syntax:
      '[ Browser / front end ]\n        |  request (form data)\n        v\n[ Server: application code  (PHP / Python / Node.js) ]\n        |  query\n        v\n[ Database  (MySQL / PostgreSQL) ]',
    realWorldAnalogy:
      'Bank की branch में counter और वहां बैठा कर्मचारी front end है; पीछे का locker room और record register back end है। आप counter पर withdrawal slip देते हैं, पैसे पीछे से निकलकर आते हैं — पर पीछे जाने की अनुमति आपको नहीं है।',
    importantPoints: [
      'Back end = server side = server पर चलने वाला code + database।',
      'तीन हिस्से: web server software (Apache/Nginx), application code (PHP/Python/Java/Node.js), database (MySQL/MongoDB)।',
      'Login जांचना, data save करना, payment — यह सब back end का काम है, क्योंकि यह user से छिपा रहता है।',
      'Browser तक सिर्फ output (HTML) पहुंचता है, server का code नहीं।',
    ],
    commonMistakes: [
      'HTML या CSS को back-end language बताना। ये दोनों सिर्फ front end की हैं।',
      'यह सोचना कि password JavaScript में जांचा जा सकता है। Browser का code कोई भी पढ़-बदल सकता है, इसलिए असली जांच server पर ही होती है।',
    ],
    examPerspective:
      'सबसे आम सवाल: "Front end और back end में अंतर स्पष्ट कीजिए" (table बनाकर लिखें)। साथ में "कोई दो server-side भाषाओं के नाम" और "back end के मुख्य घटक"।',
    quickRevision:
      'Back end = server पर चलने वाला हिस्सा: web server + application code (PHP/Python/Node) + database (MySQL)। Login, data, payment यहीं होते हैं। User को सिर्फ output दिखता है।',
    practiceTask:
      'तीन कामों की सूची बनाएं जो आप किसी app में करते हैं — जैसे "profile photo देखना", "password बदलना", "order history देखना"। हर एक के आगे लिखें कि उसमें front end क्या करेगा और back end क्या।',
    mcqs: [
      q(
        'Which of these is a back-end job?',
        ['Showing the login form', 'Changing a button colour on hover', 'Checking whether the password is correct', 'Opening a dropdown menu'],
        'C',
        'Anything that needs the database or must be kept secret runs on the server.',
      ),
      q(
        'Which of the following is NOT a back-end technology?',
        ['PHP', 'MySQL', 'CSS', 'Python'],
        'C',
        'CSS is purely front end. PHP and Python are server-side languages; MySQL is a database.',
      ),
    ],
    relatedTopics: ['front-end', 'server-side-scripting-languages', 'working-of-websites'],
  },

  /* ==================================== 8. Client-side scripting ========= */
  {
    id: 'u1-t8',
    slug: 'client-side-scripting-languages',
    unit: 1,
    unitSlug: 'unit-1',
    unitTitle: 'Introduction to Web Design',
    title: 'Client Side Scripting Languages',
    hindiTitle: 'क्लाइंट-साइड स्क्रिप्टिंग भाषाएं',
    definitionEnglish:
      'A client-side scripting language is one whose code is sent to the browser along with the page and executed there, on the user\'s device, without going back to the server.',
    definitionHindi:
      'Client-side scripting language वह है जिसका code page के साथ browser तक जाता है और वहीं, user के device पर चलता है — server के पास वापस जाए बिना।',
    simpleWords:
      'Form में आप गलत mobile number डालते हैं और तुरंत लाल रंग में "10 digit होना चाहिए" आ जाता है — page reload हुए बिना। यह जांच आपके ही browser में हुई। ऐसा काम client-side script करती है, और web पर यह लगभग हमेशा JavaScript होती है।',
    whyImportant:
      'यह Unit 6 (JavaScript) की नींव है। और "client-side तथा server-side scripting में अंतर" वाला सवाल exam में लगभग हर बार आता है।',
    detailedExplanation: `### Where the script runs

The server sends the HTML page and the script together. The browser reads the page and runs the script itself, using its built-in JavaScript engine. The server is not involved after that — which is why the response is instant and why the script keeps working even if the network is slow.

### What client-side scripts are used for

- **Checking a form before it is sent** — is the email in the right format, is the password long enough? Catching mistakes here saves a trip to the server.
- **Making the page respond** — open a menu, switch a tab, show or hide a section, change an image when the mouse moves over it.
- **Small calculations** — an EMI calculator or a marks total that updates as you type.
- **Updating part of the page** without reloading it — the way search suggestions appear as you type.

### The language

**JavaScript** is the client-side language. Every browser understands it, and it is the only scripting language you need for this exam. (Older books mention VBScript, which worked only in Internet Explorer and is no longer used.)

### Two limitations to remember

1. **The code is visible.** Anyone can open *View Page Source* and read it. Never put passwords or secrets in client-side code.
2. **The user can switch it off.** Browsers allow JavaScript to be disabled, so a page must still make sense without it, and the server must re-check anything important.

The full comparison with server-side scripting is in the next topic.`,
    syntax:
      '<script>\n  // runs in the browser, after the page has loaded\n  function checkAge(age) {\n    return age >= 18;\n  }\n</script>',
    codeExample:
      '<!-- The browser checks the input; the server is not contacted -->\n<input type="number" id="age" placeholder="Enter your age">\n<button onclick="check()">Check</button>\n<p id="msg"></p>\n\n<script>\n  function check() {\n    var age = document.getElementById("age").value;\n    var msg = document.getElementById("msg");\n    if (age >= 18) {\n      msg.textContent = "Eligible";\n    } else {\n      msg.textContent = "Not eligible — must be 18 or above";\n    }\n  }\n</script>',
    codeLanguage: 'html',
    outputExplanation:
      'एक number box और Check button दिखेगा। 18 या ज्यादा डालकर button दबाएं तो नीचे तुरंत "Eligible" आएगा, कम डालें तो "Not eligible…" — page reload नहीं होगा, क्योंकि जांच browser में ही हुई।',
    realWorldAnalogy:
      'Exam hall में answer sheet जमा करने से पहले आप खुद roll number और name check कर लेते हैं — यह client-side check है। Invigilator की जांच, जो बाद में होती है, server-side है।',
    importantPoints: [
      'Client-side script browser में चलती है, server पर नहीं।',
      'Web की client-side language JavaScript है।',
      'मुख्य काम: form validation, page को interactive बनाना, बिना reload के page बदलना।',
      'Code user को दिखता है (View Source) और user इसे बंद भी कर सकता है — इसलिए secret चीज़ें इसमें नहीं रखते।',
    ],
    commonMistakes: [
      'Password या database का connection JavaScript में लिखना। Browser का code हर कोई पढ़ सकता है।',
      'यह मानना कि JavaScript से validation हो गई तो server पर दोबारा जांच की जरूरत नहीं। User JavaScript बंद कर सकता है — server हमेशा फिर से जांचता है।',
    ],
    examPerspective:
      '"Client-side scripting क्या है? उदाहरण दीजिए" (JavaScript), "इसके दो उपयोग लिखिए" (validation, interactivity), और "client-side व server-side में अंतर" (अगले topic की table से)।',
    quickRevision:
      'Client-side script = browser में चलने वाला code, भाषा JavaScript। काम: validation, interactivity, बिना reload बदलाव। कमी: code दिखता है, बंद किया जा सकता है।',
    practiceTask:
      'ऊपर का code save करके खोलें। फिर browser में Right-click → View Page Source करें — पूरा JavaScript दिख रहा है। यही वजह है कि इसमें secret नहीं रखते।',
    mcqs: [
      q(
        'Which language is used for client-side scripting on the web?',
        ['PHP', 'JavaScript', 'Python', 'SQL'],
        'B',
        'JavaScript runs in every browser; PHP and Python run on the server; SQL talks to databases.',
      ),
      q(
        'Why should a password never be checked only in client-side code?',
        ['Browsers are too slow', 'The user can read and change the code', 'JavaScript cannot compare strings', 'It would need a database in the browser'],
        'B',
        'Client-side code is visible and editable by the user, so anything that must be trusted is checked on the server.',
      ),
    ],
    relatedTopics: ['server-side-scripting-languages', 'client-side-scripting-intro', 'basic-form-validations-in-javascript'],
  },

  /* ==================================== 9. Server-side scripting ========= */
  {
    id: 'u1-t9',
    slug: 'server-side-scripting-languages',
    unit: 1,
    unitSlug: 'unit-1',
    unitTitle: 'Introduction to Web Design',
    title: 'Server Side Scripting Languages',
    hindiTitle: 'सर्वर-साइड स्क्रिप्टिंग भाषाएं',
    definitionEnglish:
      'A server-side scripting language is one whose code runs on the web server before the page is sent to the browser, typically to work with a database and build pages that change per user.',
    definitionHindi:
      'Server-side scripting language वह है जिसका code web server पर चलता है, page browser को भेजे जाने से पहले — इसका उपयोग database से काम करने और हर user के लिए अलग page बनाने में होता है।',
    simpleWords:
      'Facebook पर आप login करें तो आपका feed दिखता है, आपका दोस्त करे तो उसका। एक ही page हर user के लिए अलग-अलग बनता है — यह काम server पर चलने वाला code करता है। Browser तक सिर्फ तैयार HTML पहुंचता है; असली code server पर ही रह जाता है।',
    whyImportant:
      'हर login, हर online form, हर booking के पीछे server-side script है। Exam में इसकी definition, इसके फायदे और client-side से इसका अंतर पूछा जाता है।',
    detailedExplanation: `### How it works

The browser asks for a page. Before answering, the server runs a program — the server-side script. The script may look up the database, check who is logged in, do some calculation, and then *produce* the HTML. Only that finished HTML is sent to the browser.

If you open *View Page Source* you see the HTML the script produced, never the script itself.

### The languages

| Language | Where you will see it |
|---|---|
| **PHP** | The most common on the web; WordPress and many Indian college portals run on it |
| **Python** (Django, Flask) | Web apps, data-heavy sites |
| **Java** (JSP, Spring) | Banks, large enterprise systems |
| **Node.js** | JavaScript running on the server — same language as the front end |
| **ASP.NET** | Microsoft's platform, common in government and corporate sites |

For the exam, being able to name three or four of these is enough.

### Why the server, and not the browser?

- **Secrets stay secret.** Database passwords and business rules never leave the server.
- **The database is here.** Reading and writing data can only happen on the server.
- **The result cannot be tampered with.** The user cannot edit code they never receive.

### Client-side vs server-side — the comparison the exam wants

| | Client-side scripting | Server-side scripting |
|---|---|---|
| Runs on | The user's browser | The web server |
| Language | JavaScript | PHP, Python, Java, Node.js, ASP.NET |
| Code visible to user | Yes | No — only the output is sent |
| Needs a server round trip | No — instant | Yes — request goes to server and back |
| Can use the database | No | Yes |
| Typical use | Form validation, menus, interactivity | Login, saving data, building personalised pages |

Learn this table. It answers a 3–5 mark question directly.`,
    syntax:
      '<?php\n  // runs on the server; the browser never sees this code\n  $name = "Priya";\n  echo "Hello, " . $name;\n?>',
    codeExample:
      '<?php\n  // Server-side script (PHP): greets by time of day\n  $hour = date("H");\n  if ($hour < 12) {\n    $greeting = "Good morning";\n  } else {\n    $greeting = "Good afternoon";\n  }\n  echo "<h1>" . $greeting . ", welcome to NIELIT</h1>";\n?>',
    codeLanguage: 'php',
    outputExplanation:
      'Browser में सिर्फ एक heading दिखेगी — सुबह "Good morning, welcome to NIELIT", दोपहर बाद "Good afternoon…"। View Source करने पर सिर्फ `<h1>…</h1>` मिलेगा; PHP की एक भी line नहीं, क्योंकि वह server पर चलकर खत्म हो चुकी। (यह code चलाने के लिए XAMPP जैसा local server चाहिए।)',
    realWorldAnalogy:
      'Chef की recipe kitchen में रहती है; आपकी table तक सिर्फ बना हुआ खाना आता है। Recipe = server-side code, खाना = HTML output।',
    importantPoints: [
      'Server-side script server पर चलती है; browser को सिर्फ उसका output (HTML) मिलता है।',
      'भाषाएं: PHP, Python, Java (JSP), Node.js, ASP.NET।',
      'Database से जुड़ना, login जांचना, personalised page बनाना — यही इसके काम हैं।',
      'Client-side vs server-side की table exam के लिए याद रखें।',
    ],
    commonMistakes: [
      'PHP file पर double-click करके उसे browser में चलाने की कोशिश करना। PHP को चलाने के लिए web server चाहिए (XAMPP/WAMP); बिना server के browser code को text की तरह दिखा देगा।',
      'JavaScript को सिर्फ client-side समझना — Node.js में यही JavaScript server पर भी चलती है।',
    ],
    examPerspective:
      '"Server-side scripting क्या है? कोई दो भाषाएं" (PHP, Python), "Client-side और server-side scripting में अंतर" (5 अंक, table में लिखें), और "Server-side scripting अधिक सुरक्षित क्यों है?"',
    quickRevision:
      'Server-side script = server पर चलने वाला code (PHP, Python, Java, Node.js), database से जुड़ता है, output HTML browser को जाता है, code user को नहीं दिखता।',
    practiceTask:
      'Client-side और server-side की तुलना की table अपनी copy में 5 पंक्तियों में लिखें — बिना देखे। फिर ऊपर की table से मिलाएं।',
    mcqs: [
      q(
        'Which of these is a server-side scripting language?',
        ['HTML', 'CSS', 'PHP', 'JavaScript in the browser'],
        'C',
        'PHP runs on the server. HTML and CSS are not scripting languages, and browser JavaScript is client-side.',
      ),
      q(
        'When you view the source of a page generated by PHP, you see',
        ['The PHP code', 'The HTML that the PHP code produced', 'The database contents', 'Nothing — the page is encrypted'],
        'B',
        'The script runs on the server and only its output, the HTML, is sent to the browser.',
      ),
    ],
    relatedTopics: ['client-side-scripting-languages', 'back-end', 'types-of-websites'],
  },

  /* =============================================== 10. Responsive ======== */
  {
    id: 'u1-t10',
    slug: 'responsive-web-designing',
    unit: 1,
    unitSlug: 'unit-1',
    unitTitle: 'Introduction to Web Design',
    title: 'Responsive Web Designing',
    hindiTitle: 'रिस्पॉन्सिव वेब डिज़ाइनिंग',
    definitionEnglish:
      'Responsive web design is a way of building a page so that its layout adjusts automatically to any screen size — phone, tablet or desktop — using flexible widths and CSS media queries.',
    definitionHindi:
      'Responsive web design webpage बनाने का वह तरीका है जिसमें page हर screen size — phone, tablet, desktop — पर अपने-आप अपना layout बदलकर ठीक दिखता है; इसके लिए flexible widths और CSS media queries का उपयोग होता है।',
    simpleWords:
      'पानी जिस बर्तन में डालो उसी का आकार ले लेता है। Responsive website भी वैसी ही है — laptop पर तीन columns में दिखेगी, phone पर वही तीन चीज़ें एक के नीचे एक आ जाएंगी, बिना zoom किए।',
    whyImportant:
      'भारत में ज्यादातर लोग website phone पर खोलते हैं। जो site phone पर ठीक न दिखे, उसे लोग बंद कर देते हैं। Exam में viewport meta tag और media query — दोनों सीधे पूछे जाते हैं।',
    detailedExplanation: `### The problem it solves

A page designed for a 1366-pixel laptop screen is unreadable on a 360-pixel phone: the text is tiny and the visitor has to pinch, zoom and scroll sideways. Before responsive design, companies built a separate "m." mobile site. Responsive design means **one page that adapts** — the term was coined by Ethan Marcotte in 2010.

### The three ingredients

**1. The viewport meta tag.** Without this one line in \`<head>\`, a phone pretends to be a desktop and shrinks the whole page. With it, the phone uses its real width:

\`\`\`html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
\`\`\`

**2. Flexible widths.** Give columns and images widths in percentages rather than fixed pixels, so they shrink and grow with the screen. Images in particular should never be wider than their container:

\`\`\`css
img { max-width: 100%; height: auto; }
\`\`\`

**3. Media queries.** A media query is a CSS rule that applies only when a condition about the screen is true — usually its width. This is how you change the layout at a certain size:

\`\`\`css
@media (max-width: 600px) {
  .column { width: 100%; }   /* stack columns on phones */
}
\`\`\`

The width at which the layout changes is called a **breakpoint**.

### Mobile first

Most developers now write the phone layout as the base CSS, then add \`min-width\` media queries for larger screens. It is easier to add columns as space grows than to remove them as it shrinks.

Frameworks such as W3.CSS (Unit 5) give you a responsive grid ready-made, so you rarely write these queries by hand — but the exam expects you to know what they are.`,
    syntax:
      '<!-- 1. in <head> -->\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n\n/* 2. in CSS */\n@media (max-width: 600px) {\n  /* rules that apply only on screens up to 600px wide */\n}',
    codeExample:
      '<!DOCTYPE html>\n<html>\n<head>\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <style>\n    .box { width: 48%; display: inline-block; padding: 16px; background: #e6e2fb; }\n    @media (max-width: 600px) {\n      .box { width: 100%; background: #fde2e4; }\n    }\n  </style>\n</head>\n<body>\n  <div class="box">Column 1</div>\n  <div class="box">Column 2</div>\n</body>\n</html>',
    outputExplanation:
      'चौड़ी screen पर दो हल्के बैंगनी boxes अगल-बगल दिखेंगे। Browser की window को 600px से पतला करते ही दोनों boxes एक के नीचे एक आ जाएंगे और गुलाबी हो जाएंगे — यही media query का असर है।',
    realWorldAnalogy:
      'Stretchable कपड़ा हर नाप में fit हो जाता है; fixed नाप का कपड़ा या तो कसा होगा या ढीला। Responsive layout stretchable कपड़े जैसा है।',
    importantPoints: [
      'Responsive design = एक ही page हर screen size पर ठीक दिखे।',
      'तीन आधार: viewport meta tag, flexible (%) widths, CSS media queries।',
      'Media query syntax: `@media (max-width: 600px) { … }`; जिस width पर layout बदले उसे breakpoint कहते हैं।',
      'शब्द "Responsive Web Design" Ethan Marcotte ने 2010 में दिया।',
    ],
    commonMistakes: [
      'Viewport meta tag भूल जाना — इसके बिना phone पूरे page को छोटा करके दिखाता है और media queries ठीक से काम नहीं करतीं।',
      'Image को `width: 800px` जैसी fixed चौड़ाई देना — phone पर page बगल में scroll होने लगता है। `max-width: 100%` लगाएं।',
    ],
    examPerspective:
      'पूछा जाता है: "Responsive web design क्या है?", "Viewport meta tag लिखिए" (पूरा syntax), "Media query किसे कहते हैं? उदाहरण दीजिए"। Syntax बिना गलती के लिखने का अभ्यास करें।',
    quickRevision:
      'Responsive = हर screen पर fit। Viewport meta tag + % widths + media queries (`@media (max-width: 600px)`)। Breakpoint = वह width जहां layout बदलता है। Mobile-first तरीका आम है।',
    practiceTask:
      'ऊपर का code save करके खोलें। Browser की window को mouse से पतला-चौड़ा करें और देखें कि boxes किस width पर एक के नीचे एक आते हैं। फिर meta viewport वाली line हटाकर phone पर खोलें — फर्क देखें।',
    mcqs: [
      q(
        'Which CSS feature applies rules only when the screen is narrower than a given width?',
        ['A class selector', 'A media query', 'An id selector', 'The viewport meta tag'],
        'B',
        '@media (max-width: …) { … } is a media query; the viewport tag goes in HTML, not CSS.',
      ),
      q(
        'What does the viewport meta tag do?',
        ['Makes images smaller', 'Tells the phone to use its real screen width instead of pretending to be a desktop', 'Adds a media query automatically', 'Hides the page on small screens'],
        'B',
        'Without it, mobile browsers render the page at desktop width and shrink it, defeating responsive CSS.',
      ),
    ],
    relatedTopics: ['w3-css-grid', 'css-selectors', 'head-section-and-elements'],
  },

  /* ============================================ 11. Types of websites ==== */
  {
    id: 'u1-t11',
    slug: 'types-of-websites',
    unit: 1,
    unitSlug: 'unit-1',
    unitTitle: 'Introduction to Web Design',
    title: 'Types of Websites (Static and Dynamic)',
    hindiTitle: 'वेबसाइट के प्रकार (स्टैटिक और डायनामिक)',
    definitionEnglish:
      'A static website shows the same fixed pages to every visitor; a dynamic website builds its pages on the server, usually from a database, so content can change for each user.',
    definitionHindi:
      'Static website हर visitor को वही तय pages दिखाती है, जबकि dynamic website अपने pages server पर, आमतौर पर database से, तैयार करती है — इसलिए उसका content हर user या हर समय के लिए बदल सकता है।',
    simpleWords:
      'Doctor के clinic की website — नाम, समय, पता — सबको एक जैसी दिखती है और महीनों नहीं बदलती: static। IRCTC — जहां हर search पर अलग trains और हर user का अलग account — dynamic।',
    whyImportant:
      'Website बनाने से पहले पहला फैसला यही होता है: static काफी है या dynamic चाहिए? Exam में "Static और dynamic website में अंतर" 5 अंक का सबसे आम सवाल है।',
    detailedExplanation: `### Static websites

The pages are written once in HTML and CSS and saved as files. The server sends the same file to everyone who asks. To change anything, someone edits the file and uploads it again.

**Good for:** a personal portfolio, a clinic or school information site, a product brochure, documentation. **Advantages:** simple, fast, cheap to host, and very secure — there is no code running on the server to attack. **Limitation:** no login, no search, no user-specific content, and every update is manual.

Note that "static" does not mean "no movement". A static site can still have CSS animation and JavaScript — the *content* is fixed, not the visuals.

### Dynamic websites

The server builds the page at the moment it is requested, using a server-side language and a database. Two users asking for the "same" page get different results: your order history, my order history.

**Good for:** anything with accounts, search, shopping, booking, comments, news that updates by itself. **Advantages:** content managed through a database or admin panel; personalisation. **Cost:** needs server-side programming and a database, so it is slower to serve and more work to build and secure.

### The comparison the exam asks for

| | Static website | Dynamic website |
|---|---|---|
| Content | Same for every visitor | Changes per user, per time, per input |
| Built with | HTML, CSS (+ client-side JS) | HTML, CSS, JS **plus** a server-side language and a database |
| Database | Not needed | Needed |
| Speed | Very fast | Slower — the page is built on each request |
| Updating | Edit the file and re-upload | Change data in the database / admin panel |
| Security | Very high — nothing runs on the server | Needs careful programming |
| Examples | Clinic site, portfolio, brochure | IRCTC, Facebook, Amazon, online banking |

### Websites by purpose

The syllabus also names websites by what they are for. You only need to recognise the kinds: **e-commerce** (Amazon, Flipkart), **educational** (a college site, this platform), **blog / news**, **social networking**, **portal** (a government site that collects many services in one place), and **web applications** (Gmail, Google Docs — software that runs in the browser).`,
    codeExample:
      '<!-- STATIC: the price is typed into the HTML file -->\n<div class="product">\n  <h2>O Level M2-R5.1 textbook</h2>\n  <p>Price: ₹250</p>\n</div>\n\n<!-- DYNAMIC (PHP): the price is read from the database each time -->\n<!--\n<div class="product">\n  <h2><?php echo $book["title"]; ?></h2>\n  <p>Price: ₹<?php echo $book["price"]; ?></p>\n</div>\n-->',
    outputExplanation:
      'Static वाले हिस्से में browser में किताब का नाम और ₹250 दिखेगा — दाम बदलने के लिए file खोलकर 250 बदलना पड़ेगा। Dynamic version (comment में) में दाम database से आता है: database में बदला और हर page पर नया दाम अपने-आप दिख गया।',
    realWorldAnalogy:
      'दीवार पर टंगा छपा हुआ calendar static है — जो छपा है, वही है। Phone का calendar dynamic है — आज की तारीख, आपके reminders, हर व्यक्ति के लिए अलग।',
    importantPoints: [
      'Static website: fixed HTML files, सबको एक जैसा content, database नहीं।',
      'Dynamic website: server-side language + database से हर request पर page बनता है।',
      'Static तेज, सस्ती और ज्यादा सुरक्षित; dynamic में login, search, personalisation संभव।',
      'Purpose के हिसाब से: e-commerce, educational, blog/news, social, portal, web application।',
    ],
    commonMistakes: [
      '"Static site में animation नहीं हो सकता" — गलत। CSS/JS animation static site में भी चलता है; static का मतलब है content तय है।',
      'Database वाली site को static लिख देना। जहां भी login या search है, वह dynamic है।',
    ],
    examPerspective:
      '"Static और dynamic website में अंतर लिखिए" — 5 अंक, table में लिखें। साथ में MCQ: "IRCTC किस प्रकार की website है?" (dynamic), "Static website के लिए database चाहिए?" (नहीं)।',
    quickRevision:
      'Static = fixed HTML, सबको same, no database, fast & secure। Dynamic = server-side code + database, हर user के लिए अलग page (IRCTC, Facebook)। Purpose से: e-commerce, educational, blog, social, portal।',
    practiceTask:
      'इन पांच को static या dynamic में बांटें और कारण लिखें: Wikipedia, आपके college की notice-page, YouTube, एक restaurant का menu page, Paytm। (Hint: login या search है तो dynamic।)',
    mcqs: [
      q(
        'Which of these is a dynamic website?',
        ["A doctor's clinic page showing timings and address", 'A one-page personal portfolio', 'An online railway booking site', 'A product brochure page'],
        'C',
        'Booking needs a database, login and content that changes per user — the definition of dynamic.',
      ),
      q(
        'A static website',
        ['Cannot use CSS', 'Needs a database', 'Shows the same content to every visitor', 'Cannot be opened on a phone'],
        'C',
        'Static means the content is fixed in the HTML files; styling and animation are still possible.',
      ),
    ],
    relatedTopics: ['website', 'working-of-websites', 'server-side-scripting-languages'],
  },
];
