# NIELIT O Level (IT) — Module M2-R5.1: Web Designing & Publishing
# UNIT 8: Web Publishing & Browsing (वेब पब्लिशिंग एवं ब्राउजिंग) — Complete Master Notes

---

## 📌 Syllabus Overview & Exam Weightage
- **Module Code:** M2-R5.1 (Web Designing & Publishing)
- **Unit 8 Name:** Web Publishing and Browsing
- **Exam Weightage:** Combined with Unit 7 (Photo Editor) = **20 Marks** in written examination.
- **Key Focus Areas:** 
  - Overview of Web Publishing & Components of Web Publishing.
  - Web Page Design Considerations and Principles.
  - Document Interchange Standards & SGML (Standard Generalized Markup Language).
  - Web Hosting Basics (Shared, VPS, Dedicated, Cloud Hosting).
  - Domain Names, DNS Configuration, and FTP Publishing Tools (FileZilla).
  - Web Browsers, Rendering Engines, and HTTP Protocol Deep-Dive (Status Codes & Methods).
  - Search Engines vs. Meta Search Engines (Spiders, Indexing, Query Processing).
  - Document Management and CMS Basics.

---

# 1. Overview of Web Publishing (वेब पब्लिशिंग का परिचय)

### 1.1 What is Web Publishing?
- **English:** **Web Publishing** (also called Online Publishing) is the complete process of creating, uploading, configuring, and maintaining digital content (webpages, text, images, videos) on a web server so that it is publicly accessible across the globe via the World Wide Web.
- **हिन्दी सरल शब्दों में:** **Web Publishing (वेब पब्लिशिंग)** का अर्थ है अपनी बनाई गई वेबसाइट की सभी फाइलों (HTML, CSS, JS, इमेजेज) को एक वेब सर्वर पर इंटरनेट पर लाइव अपलोड करना, ताकि पूरी दुनिया में कोई भी व्यक्ति अपने वेब ब्राउज़र से उसे देख सके।

```
+-------------------------------------------------------------------------------+
|                       FOUR MAIN STEPS OF WEB PUBLISHING                       |
+-------------------------------------------------------------------------------+
| 1. Domain Registration   : वेबसाइट का नाम खरीदना (e.g., myschool.com)         |
|                                                                               |
| 2. Web Hosting Purchase  : सर्वर पर 24x7 स्टोरेज स्पेस किराये पर लेना         |
|                                                                               |
| 3. File Uploading (FTP)  : अपनी फाइलों को लोकल कंप्यूटर से सर्वर पर भेजना    |
|                                                                               |
| 4. Maintenance & SEO     : वेबसाइट को अपडेट रखना और सर्च इंजन पर इंडेक्स कराना|
+-------------------------------------------------------------------------------+
```

---

# 2. Web Page Design Considerations & Principles (वेब डिजाइनिंग के सिद्धांत)

एक सफल और पेशेवर वेबसाइट बनाने के लिए निम्नलिखित सिद्धांतों का पालन किया जाता है:

1. **User-Centric Design (उपयोगकर्ता-केंद्रित डिजाइन):** वेबसाइट यूजर्स की जरूरतों के अनुसार आसान और समझने योग्य होनी चाहिए।
2. **KISS Principle ("Keep It Simple, Stupid"):** डिजाइन को अनावश्यक रूप से जटिल बनाने के बजाय साफ-सुथरा और सरल रखना।
3. **Intuitive Navigation (सहज नेविगेशन):** यूजर को वेबसाइट के किसी भी पेज पर जाने में अधिकतम 3 क्लिक्स से ज्यादा न लगें (**3-Click Rule**).
4. **Consistency (एकरूपता):** पूरी वेबसाइट में कलर थीम, फोंट स्टाइल, बटन डिजाइन और लेआउट एक जैसा होना चाहिए।
5. **Page Loading Speed (लोडिंग स्पीड):** इमेजेज को ऑप्टिमाइज़ रखना ताकि पेज 2-3 सेकंड के अंदर खुल जाए।
6. **Mobile Responsiveness (मोबाइल फ्रेंडली):** वेबसाइट डेस्कटॉप, टैबलेट और मोबाइल सभी पर सही दिखे।
7. **Web Accessibility (WAI / WCAG):** दिव्यांग (विशेष रूप से दृष्टिबाधित) व्यक्तियों के लिए भी वेबसाइट सुलभ होनी चाहिए (`alt` टेक्स्ट, हाई कंट्रास्ट फोंट).

---

# 3. Document Interchange Standards & SGML (दस्तावेज़ विनिमय मानक)

```
+-------------------------------------------------------------------------------+
|                      THE MARKUP LANGUAGE FAMILY TREE                          |
+-------------------------------------------------------------------------------+
|                     SGML (ISO 8879 - Year 1986)                               |
|        (Standard Generalized Markup Language - The Mother Standard)           |
|                        ┌──────────────────┴──────────────────┐                |
|                        ▼                                     ▼                |
|               HTML (1991)                                XML (1998)           |
|     (Focus: Presentation / Display)            (Focus: Data Storage/Transport)|
|                        │                                     │                |
|                        └──────────────────┬──────────────────┘                |
|                                           ▼                                   |
|                                      XHTML (2000)                             |
|                               (Strict XML-syntax HTML)                        |
|                                           │                                   |
|                                           ▼                                   |
|                                      HTML5 (Modern)                           |
+-------------------------------------------------------------------------------+
```

### 3.1 What is SGML?
- **Full Form:** **Standard Generalized Markup Language** (ISO 8879:1986).
- **महत्व:** यह सभी आधुनिक मार्कअप भाषाओं (HTML और XML दोनों) की जननी (Mother/Predecessor) है।
- SGML बहुत जटिल और भारी मानक था, इसलिए वेब पर उपयोग के लिए इसका हल्का और सरल रूप **HTML** और **XML** बनाया गया।

### 3.2 Key Data Interchange Formats:
- **HTML:** वेब ब्राउज़र पर डेटा को **प्रदर्शित (Display)** करने के लिए।
- **XML (eXtensible Markup Language):** डेटा को **स्टोर (Store) और ट्रांसफर (Transport)** करने के लिए (यूजर अपने कस्टम टैग्स बना सकता है).
- **JSON (JavaScript Object Notation):** आधुनिक वेब और API में डेटा ट्रांसफर करने का सबसे हल्का टेक्स्ट आधारित मानक।

---

# 4. Web Hosting Basics (वेब होस्टिंग के प्रकार)

**Web Hosting** एक ऐसी सेवा है जो व्यक्तियों और संगठनों को अपनी वेबसाइट फाइलों को 24 घंटे इंटरनेट से जुड़े शक्तिशाली सर्वर कंप्यूटरों पर स्टोर करने की अनुमति देती है।

```
+-------------------------------------------------------------------------------+
|                           TYPES OF WEB HOSTING                                |
+-------------------------------------------------------------------------------+
| Type | How It Works                  | Cost       | Performance | Security    |
+------+-------------------------------+------------+-------------+-------------+
| 1. Shared    | एक ही सर्वर पर सैकड़ों    | सबसे सस्ती | सामान्य     | कम          |
|              | वेबसाइट्स शेयर होती हैं       | (Lowest)   | (Slow)      |             |
+------+-------------------------------+------------+-------------+-------------+
| 2. VPS       | एक फिजिकल सर्वर पर वर्चुअल   | मध्यम      | उच्च        | बेहतर       |
|    (Virtual) | प्राइवेट पार्टिशंस होते हैं   | (Moderate) | (Good)      |             |
+------+-------------------------------+------------+-------------+-------------+
| 3. Dedicated | पूरा फिजिकल सर्वर केवल एक    | सबसे महंगी | सर्वोच्च    | उच्चतम      |
|              | ग्राहक के लिए आरक्षित होता है| (Highest)  | (Maximum)   | (Isolated)  |
+------+-------------------------------+------------+-------------+-------------+
| 4. Cloud     | कई सर्वरों का क्लाउड क्लस्टर  | उपयोग के   | ऑटो-स्केलेबल| अत्यधिक    |
|              | (AWS, Google Cloud, Azure)    | अनुसार पे  | (No Downtime)| सुरक्षित   |
+-------------------------------------------------------------------------------+
```

---

# 5. Domain Name, DNS & FTP Publishing (डोमेन और एफटीपी)

### 5.1 Domain Name & TLD (Top-Level Domain)
- डोमेन नेम सर्वर के कठिन संख्यात्मक IP एड्रेस का मानव-अनुकूल नाम होता है (उदा. `google.com`).
- **TLD (टॉप-लेवल डोमेन):**
  - `.com`: Commercial (व्यावसायिक)
  - `.org`: Non-profit Organizations (गैर-लाभकारी संगठन)
  - `.gov`: Government (सरकारी वेबसाइट्स)
  - `.edu` / `.ac`: Educational / Academic (शैक्षणिक संस्थान)
  - `.in`: India Country Code TLD (ccTLD)

---

### 5.2 FTP & Publishing Tools (फाइल ट्रांसफर प्रोटोकॉल)
- **FTP (File Transfer Protocol):** नेटवर्क पर क्लाइंट और सर्वर के बीच फाइलों को ट्रांसफर करने का मानक प्रोटोकॉल (Default **Port 20 & 21**).
- **SFTP (SSH File Transfer Protocol):** एन्क्रिप्टेड और सुरक्षित फाइल ट्रांसफर (Default **Port 22**).
- **Popular FTP Client Software:**
  1. **FileZilla** (सबसे लोकप्रिय ओपन-सोर्स FTP क्लाइंट)
  2. **Cyberduck**
  3. **WinSCP**
  4. **cPanel File Manager** (वेब-आधारित डायरेक्ट अपलोडर)

```
+-------------------------------------------------------------------------------+
|                      FILEZILLA FTP UPLOAD WORKFLOW                            |
+-------------------------------------------------------------------------------+
| 1. Connect : Enter [Host: ftp.mysite.com] [Username] [Password] [Port: 21/22] |
| 2. Left Box: Local Site (आपका कंप्यूटर - index.html, style.css)               |
| 3. Right Box: Remote Site (सर्वर डायरेक्टरी - /public_html/)                  |
| 4. Action  : Drag & Drop files from Left to Right -> Site is LIVE!            |
+-------------------------------------------------------------------------------+
```

> ⚠️ **IMPORTANT RULE:** सर्वर पर वेबसाइट की मुख्य होमपेज फाइल हमेशा **`public_html`** (या `htdocs` या `www`) फोल्डर के अंदर **`index.html`** नाम से ही रखी जानी चाहिए।

---

# 6. Web Browsers & Rendering Engines (वेब ब्राउज़र एवं रेंडरिंग इंजन)

### 6.1 What is a Web Browser?
- ब्राउज़र एक **क्लाइंट-साइड एप्लीकेशन सॉफ्टवेयर** है जो वेब सर्वर से HTML, CSS और JS फाइलों को डाउनलोड करके उन्हें दृश्यमान वेबपेज के रूप में रेंडर (प्रदर्शित) करता है।

### 6.2 Browser Engine vs. JavaScript Engine:

| Browser Name | Layout / Rendering Engine | JavaScript Engine | Developed By |
|:---|:---|:---|:---|
| **Google Chrome** | **Blink** | **V8** | Google |
| **Mozilla Firefox** | **Gecko** | **SpiderMonkey** | Mozilla Foundation |
| **Apple Safari** | **WebKit** | **JavaScriptCore (Nitro)**| Apple |
| **Microsoft Edge** | **Blink** (Chromium) | **V8** | Microsoft |

---

# 7. HTTP Protocol & Standard HTTP Status Codes (HTTP स्थिति कोड)

### 7.1 HTTP (HyperText Transfer Protocol)
- यह एक **Stateless**, **Application-Layer Protocol** है जो Port 80 (HTTP) और Port 443 (HTTPS) पर काम करता है।

### 7.2 Master HTTP Status Codes for Exam:

```
+-------------------------------------------------------------------------------+
|                        MASTER HTTP STATUS CODES TABLE                         |
+-------------------------------------------------------------------------------+
| Code Category   | Code | Meaning / Full Name     | Description                |
+-----------------+------+-------------------------+----------------------------+
| 2xx (Success)   | 200  | OK                      | रिक्वेस्ट सफल, डेटा मिला   |
|                 | 201  | Created                 | नया रिसोर्स सर्वर पर बना   |
+-----------------+------+-------------------------+----------------------------+
| 3xx (Redirection| 301  | Moved Permanently       | URL स्थायी रूप से बदल गया  |
|                 | 302  | Found (Temporary Move)  | अस्थायी रीडायरेक्शन        |
|                 | 304  | Not Modified            | कैश से लोड करो (No change) |
+-----------------+------+-------------------------+----------------------------+
| 4xx (Client Err)| 400  | Bad Request             | इनवैलिड सिंटैक्स रिक्वेस्ट|
|                 | 401  | Unauthorized            | लॉगिन / ऑथेंटिकेशन आवश्यक  |
|                 | 403  | Forbidden               | सर्वर ने एक्सेस ब्लॉक किया |
|                 | 404  | Not Found               | पेज या फाइल नहीं मिली      |
|                 | 405  | Method Not Allowed      | अमान्य HTTP मेथड           |
+-----------------+------+-------------------------+----------------------------+
| 5xx (Server Err)| 500  | Internal Server Error   | सर्वर कोड में क्रैश/खराबी |
|                 | 502  | Bad Gateway             | गेटवे/प्रॉक्सी सर्वर एरर   |
|                 | 503  | Service Unavailable     | सर्वर डाउन या ओवरलोडेड है  |
|                 | 504  | Gateway Timeout         | सर्वर रिस्पॉन्स टाइमआउट हुआ|
+-------------------------------------------------------------------------------+
```

---

# 8. Search Engines vs. Meta Search Engines (सर्च इंजन बनाम मेटा सर्च इंजन)

```
+-------------------------------------------------------------------------------+
|                   SEARCH ENGINE VS. META SEARCH ENGINE                        |
+-------------------------------------------------------------------------------+
| Feature              | Search Engine                 | Meta Search Engine     |
+----------------------+-------------------------------+------------------------+
| Database             | अपना खुद का विशाल डेटाबेस     | कोई खुद का डेटाबेस नहीं|
|                      | और इंडेक्स रखता है            | होता                   |
| Crawling             | अपने बॉट्स/स्पाइडर्स चलाता है | कोई वेब स्पाइडर नहीं   |
| How it works         | अपने इंडेक्स में से रिजल्ट    | कई सर्च इंजनों को क्वेरी|
|                      | निकालता है                    | भेजकर रिजल्ट्स मिलाता है|
| Examples             | **Google, Bing, Yahoo,**      | **Dogpile, MetaCrawler,|
|                      | **DuckDuckGo, Baidu, Yandex** | **Info.com, Ixquick**  |
+----------------------+-------------------------------+------------------------+
```

### 8.1 Three Core Components of a Search Engine:
1. **Web Crawler / Spider / Bot (वेब क्रॉलर):** इंटरनेट पर एक वेबपेज से दूसरे वेबपेज के हाइपरलिंक्स को फॉलो करके स्वचालित रूप से नए और अपडेटेड वेबपेजों को खोजना और डाउनलोड करना (e.g., Googlebot).
2. **Indexer & Database (इंडेक्सर):** डाउनलोड किए गए वेबपेजों के शब्दों, शीर्षकों, और कीवर्ड्स का एक विशाल खोज-अनुकूल इंडेक्स (कैटलॉग) बनाना।
3. **Query Processor & Ranking Algorithm (क्वेरी प्रोसेसर):** जब यूजर कोई शब्द सर्च करता है, तो एल्गोरिदम (जैसे Google PageRank) की मदद से लाखों पेजों में से सबसे सटीक और प्रासंगिक परिणाम स्क्रीन पर 0.1 सेकंड में दिखाना।

---

# 🔥 NIELIT Exam Quick Revision Points (गोल्डन प्वाइंट्स)

1. HTML और XML दोनों **SGML (Standard Generalized Markup Language)** से व्युत्पन्न (Derived) हुए हैं।
2. **HTTP 404** का अर्थ **"Page Not Found"** (क्लाइंट एरर) होता है।
3. **HTTP 500** का अर्थ **"Internal Server Error"** (सर्वर एरर) होता है।
4. **HTTP 200** का अर्थ **"OK / Success"** होता है।
5. गूगल क्रोम का रेंडरिंग इंजन **Blink** और जावास्क्रिप्ट इंजन **V8** है।
6. मोज़िला फ़ायरफ़ॉक्स का रेंडरिंग इंजन **Gecko** है।
7. **Dogpile** और **MetaCrawler** प्रसिद्ध **Meta Search Engines** के उदाहरण हैं।
8. FTP का डिफ़ॉल्ट पोर्ट नंबर **21** और SFTP का डिफ़ॉल्ट पोर्ट नंबर **22** होता है।
9. वेबसाइट की रूट फाइल हमेशा **`public_html`** डायरेक्टरी में अपलोड की जाती है।
