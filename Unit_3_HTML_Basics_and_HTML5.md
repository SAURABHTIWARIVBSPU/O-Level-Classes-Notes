# NIELIT O Level (IT) — Module M2-R5.1: Web Designing & Publishing
# UNIT 3: HTML Basics & HTML5 (एचटीएमएल एवं एचटीएमएल5) — Complete Master Notes

---

## 📌 Syllabus Overview & Exam Weightage
- **Module Code:** M2-R5.1 (Web Designing & Publishing)
- **Unit 3 Name:** HTML Basics & HTML5
- **Exam Weightage:** Combined with Unit 1 & Unit 2 = **25 Marks** in written examination.
- **Key Focus Areas:** 
  - Basic Structure of HTML, Document Type Declaration (`<!DOCTYPE html>`).
  - Head Section elements (`<title>`, `<meta>`, `<link>`, `<style>`, `<script>`).
  - Formatting tags, Block vs Inline elements, `<div>`, `<span>`, `<pre>`, `<p>`, `<h1>`-`<h6>`.
  - Hyperlinks, Named Anchors, Images (`<img>`).
  - Tables & Attributes (`cellpadding`, `cellspacing`, `rowspan`, `colspan`).
  - Lists: Ordered (`<ol>`), Unordered (`<ul>`), Definition (`<dl>`).
  - Forms, Form Elements, Input Types, and HTML5 Form Validations (`required`, `pattern`, `autofocus`).
  - HTML5 Semantic Tags (`<section>`, `<nav>`, `<article>`, `<aside>`, `<footer>`, `<header>`).
  - Multimedia: `<audio>`, `<video>`, `<iframe>`.

---

# 1. Introduction to HTML (HTML का परिचय)

### 1.1 What is HTML?
- **Full Form:** **HyperText Markup Language** (हाइपरटेक्स्ट मार्कअप लैंग्वेज).
- **Invented by:** **Sir Tim Berners-Lee** in **1991** at CERN.
- **Purpose:** यह वेबपेज की संरचना (Skeleton/Structure) बनाने वाली मानक मार्कअप भाषा है।
- **Markup Language क्या है?** यह प्रोग्रामिंग भाषा (जैसे C, Python) नहीं है, बल्कि यह **Tags** और **Attributes** का एक समूह है जो वेब ब्राउज़र को बताता है कि कंटेंट को स्क्रीन पर कैसे प्रदर्शित करना है।

```
+-------------------------------------------------------------------------------+
|                       MEANING OF THE NAME "HTML"                              |
+-------------------------------------------------------------------------------+
| HyperText : ऐसा टेक्स्ट जिसमें अन्य वेबपेजों के लिंक्स (Hyperlinks) मौजूद हों|
| Markup    : टेक्स्ट को टैग्स (<tag>) के अंदर लपेटकर स्टाइल और अर्थ प्रदान करना|
| Language  : ब्राउज़र द्वारा समझी जाने वाली संचार की भाषा                     |
+-------------------------------------------------------------------------------+
```

---

# 2. Basic Structure of an HTML5 Document (HTML5 की मूल संरचना)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Webpage</title>
  </head>
  <body>
    <h1>Welcome to NIELIT O Level</h1>
    <p>This is my first webpage designed using HTML5.</p>
  </body>
</html>
```

### Breakdown of Structure Elements:
1. **`<!DOCTYPE html>`:** 
   - यह ब्राउज़र को सूचित करता है कि यह डॉक्यूमेंट **HTML5** मानक के अनुसार लिखा गया है।
   - यह कोई HTML टैग नहीं है, बल्कि एक घोषणा (Declaration) है। यह Case-Insensitive होती है।
2. **`<html lang="en">`:** 
   - यह पूरे HTML डॉक्यूमेंट का **Root Element** है। अन्य सभी टैग्स इसी के अंदर आते हैं। `lang="en"` भाषा (English) को दर्शाता है।
3. **`<head>` Section:** 
   - इसमें वेबपेज का **मेटाडेटा (Metadata - Data about Data)** होता है जो स्क्रीन पर सीधे दिखाई नहीं देता (जैसे Title, Character Encoding, CSS/JS फाइलों के लिंक्स)।
4. **`<title>` Tag:** 
   - ब्राउज़र के **Title Bar / Tab** में प्रदर्शित होने वाला नाम निर्धारित करता है। यह सर्च इंजन (SEO) और बुकमार्क के लिए अत्यंत महत्वपूर्ण है।
5. **`<body>` Section:** 
   - इसमें वेबपेज का संपूर्ण **दृश्यमान कंटेंट (Visible Content)** जैसे हेडिंग, पैराग्राफ, टेबल, इमेजेज, फॉर्म आदि होते हैं।

---

# 3. Elements and Tags (एलिमेंट्स और टैग्स)

### 3.1 Tags vs. Elements vs. Attributes
- **Tag:** एंगुलर ब्रैकेट के अंदर लिखा गया कीवर्ड (उदा. `<p>` ओपनिंग टैग, `</p>` क्लोजिंग टैग)।
- **Element:** ओपनिंग टैग, उसके अंदर का कंटेंट, और क्लोजिंग टैग का पूरा समूह (उदा. `<p>Hello World</p>`).
- **Attribute:** टैग के बारे में अतिरिक्त जानकारी प्रदान करता है (उदा. `<a href="https://google.com" target="_blank">`). एट्रिब्यूट हमेशा **ओपनिंग टैग** में `name="value"` के रूप में लिखे जाते हैं।

### 3.2 Types of Tags: Paired vs Empty (सैलरी और अनपेयर्ड टैग्स)
1. **Paired / Container Tags (कंटेनर टैग्स):** जिनका ओपनिंग और क्लोजिंग दोनों टैग होता है।
   - *Examples:* `<html>...</html>`, `<head>...</head>`, `<body>...</body>`, `<p>...</p>`, `<b>...</b>`, `<table>...</table>`.
2. **Empty / Void / Standalone Tags (एम्प्टी टैग्स):** जिनका कोई क्लोजिंग टैग नहीं होता और न ही इनके अंदर कोई टेक्स्ट कंटेंट होता है।
   - *Examples:* `<br>` (Line Break), `<hr>` (Horizontal Rule), `<img>` (Image), `<input>` (Form Input), `<meta>` (Metadata), `<link>` (External Stylesheet).

---

# 4. Text Formatting & Basic Content Tags (टेक्स्ट फॉर्मेटिंग टैग्स)

### 4.1 Headings (`<h1>` to `<h6>`)
HTML में 6 प्रकार की हेडिंग्स होती हैं:
- `<h1>`: सबसे बड़ी और सबसे महत्वपूर्ण हेडिंग (Highest Importance).
- `<h6>`: सबसे छोटी और सबसे कम महत्वपूर्ण हेडिंग (Lowest Importance).

### 4.2 Formatting Tags Summary Table:

| Tag | Full Name / Purpose | Visual Output | Semantic Meaning |
|:---|:---|:---|:---|
| **`<b>`** | Bold | **Bold Text** | केवल टेक्स्ट को गहरा (Bold) दिखाना |
| **`<strong>`** | Strong Importance | **Important Text** | महत्वपूर्ण टेक्स्ट (Screen Readers जोर देकर पढ़ते हैं) |
| **`<i>`** | Italic | *Italic Text* | तिरछा (Italic) दिखाना |
| **`<em>`** | Emphasized | *Emphasized Text* | टेक्स्ट पर जोर (Emphasis) देना |
| **`<u>` / `<ins>`**| Underline / Inserted | <u>Underlined Text</u> | नीचे रेखा खींचना / नया जोड़ा गया टेक्स्ट |
| **`<s>` / `<del>`**| Strikethrough / Deleted | ~~Deleted Text~~ | बीच में से कटी हुई रेखा (पुराना/हटाया गया मूल्य) |
| **`<mark>`** | Highlight | ==Highlighted Text== | पीले बैकग्राउंड से हाईलाइट करना |
| **`<sup>`** | Superscript | $X^2$ (ऊपर घात) | गणितीय घात या क्रम ($10^{\text{th}}$) |
| **`<sub>`** | Subscript | $H_2O$ (नीचे पाद) | रासायनिक सूत्र ($H_2O, CO_2$) |
| **`<small>`** | Small text | <small>Smaller text</small> | सामान्य से एक साइज छोटा टेक्स्ट |
| **`<pre>`** | Preformatted Text | `Monospace` | स्पेस और लाइन ब्रेक को जस का तस रखना |
| **`<br>`** | Line Break | अगली लाइन पर जाना | खाली (Empty) टैग |
| **`<hr>`** | Horizontal Rule | क्षैतिज रेखा बनाना | सेक्शन डिवाइडर लाइन |

```html
<!-- Example of Preformatted Text vs Normal Paragraph -->
<pre>
    Item       Quantity    Price
    Notebook   5           Rs. 250
    Pen        10          Rs. 100
</pre>
```

---

# 5. Block-Level vs. Inline Elements (ब्लॉक बनाम इनलाइन एलिमेंट्स)

| Feature | Block-Level Elements (ब्लॉक-लेवल) | Inline Elements (इनलाइन) |
|:---|:---|:---|
| **Line Behavior** | हमेशा **नई लाइन** से शुरू होते हैं। | उसी लाइन में जहाँ जगह हो वहीं शुरू होते हैं। |
| **Width Taken** | स्क्रीन की **पूरी उपलब्ध चौड़ाई (100% width)** घेरते हैं। | केवल अपने **कंटेंट जितनी चौड़ाई** घेरते हैं। |
| **Common Tags** | `<div>`, `<p>`, `<h1>`-`<h6>`, `<ul>`, `<ol>`, `<li>`, `<table>`, `<form>`, `<header>`, `<footer>`, `<section>` | `<span>`, `<a>`, `<img>`, `<b>`, `<i>`, `<strong>`, `<em>`, `<label>`, `<input>`, `<button>` |
| **Generic Container**| **`<div>`** (डिवीजन / जेनेरिक ब्लॉक कंटेनर) | **`<span>`** (जेनेरिक इनलाइन कंटेनर) |

---

# 6. Hyperlinks & Named Anchors (हाइपरलिंक्स एवं एंकर टैग)

### 6.1 The Anchor Tag (`<a>`)
वेबपेज में एक पेज से दूसरे पेज पर जाने के लिए हाइपरलिंक बनाया जाता है।
```html
<a href="https://www.nielit.gov.in" target="_blank" title="Visit NIELIT">Click Here to Visit NIELIT</a>
```

#### Key Attributes of `<a>` Tag:
1. **`href` (Hypertext Reference):** टारगेट वेबपेज का URL या पता।
2. **`target` Attribute:**
   - `target="_blank"`: लिंक को **नए टैब/विंडो** में खोलता है।
   - `target="_self"`: लिंक को **उसी टैब** में खोलता है (यह Default होता है)।
   - `target="_parent"`: लिंक को पैरेंट फ्रेम में खोलता है।
   - `target="_top"`: पूरे विंडो की बॉडी में खोलता है।
3. **`title`:** लिंक पर माउस ले जाने पर टूलटिप (Tooltip) प्रदर्शित करता है।

### 6.2 Named Anchors / Bookmark Links (पेज के अंदर जंप करना)
एक ही लंबे वेबपेज के किसी विशेष सेक्शन (जैसे `#footer` या `#faq`) पर सीधे कूदने के लिए:
```html
<!-- Link at top of page -->
<a href="#syllabus-section">Jump to Syllabus</a>

<!-- Target Section somewhere down -->
<h2 id="syllabus-section">Detailed Syllabus</h2>
```

---

# 7. Images in HTML (`<img>` Tag)

- `<img>` एक **Empty Tag** (Void Tag) है।
```html
<img src="images/logo.png" alt="O Level Logo" width="300" height="150">
```

#### Attributes of `<img>` Tag:
1. **`src` (Source):** इमेज फाइल का पाथ या URL (अनिवार्य).
2. **`alt` (Alternate Text):** यदि किसी कारण इमेज लोड न हो, तो स्क्रीन पर दिखने वाला टेक्स्ट (दृष्टिबाधित उपयोगकर्ताओं और SEO के लिए अत्यंत आवश्यक).
3. **`width` & `height`:** इमेज की चौड़ाई और ऊंचाई (पिक्सेल या प्रतिशत में).

---

# 8. Tables in HTML (`<table>` Tag)

टेबल का उपयोग डेटा को पंक्तियों (Rows) और स्तंभों (Columns) में व्यवस्थित करने के लिए किया जाता है।

```
+-------------------------------------------------------------------------------+
|                          HTML TABLE STRUCTURE                                 |
+-------------------------------------------------------------------------------+
| <table>                                                                       |
|   <caption>Student Marksheet</caption>                                       |
|   <thead>                                                                     |
|     <tr> <th>Roll No</th> <th>Name</th> <th>Marks</th> </tr>                 |
|   </thead>                                                                    |
|   <tbody>                                                                     |
|     <tr> <td>101</td>     <td>Aman</td> <td>85</td>    </tr>                 |
|     <tr> <td>102</td>     <td>Priya</td><td>92</td>    </tr>                 |
|   </tbody>                                                                    |
| </table>                                                                      |
+-------------------------------------------------------------------------------+
```

### 8.1 Key Table Tags:
- `<table>`: टेबल को परिभाषित करता है।
- `<caption>`: टेबल का शीर्षक (Title/Caption).
- `<tr>`: Table Row (टेबल की पंक्ति).
- `<th>`: Table Header Cell (टेबल हेडिंग — डिफ़ॉल्ट रूप से **Bold** और **Center Aligned** होती है).
- `<td>`: Table Data Cell (टेबल का सामान्य डेटा — डिफ़ॉल्ट रूप से **Regular** और **Left Aligned** होता है).
- `<thead>`, `<tbody>`, `<tfoot>`: टेबल के हेडर, बॉडी और फुटर को व्यवस्थित करने वाले सेमेंटिक टैग्स।

### 8.2 Critical Table Attributes:
1. **`border`:** टेबल के चारों ओर बॉर्डर की मोटाई (e.g., `border="1"`).
2. **`cellpadding`:** सेल की सामग्री (Content) और सेल की बॉर्डर के बीच की खाली जगह (स्पेस).
3. **`cellspacing`:** दो अलग-अलग सेल्स (Cells) के बीच की खाली जगह (स्पेस).
4. **`rowspan`:** दो या दो से अधिक **पंक्तियों (Rows)** को आपस में मिलाना (Merge करना).
5. **`colspan`:** दो या दो से अधिक **स्तंभों (Columns)** को आपस में मिलाना (Merge करना).

```html
<!-- Example of Colspan and Rowspan -->
<table border="1" cellpadding="8" cellspacing="0">
  <tr>
    <th colspan="2">Student Details</th> <!-- Merges 2 columns -->
  </tr>
  <tr>
    <td rowspan="2">Group A</td>       <!-- Merges 2 rows -->
    <td>Rahul Kumar</td>
  </tr>
  <tr>
    <td>Sneha Verma</td>
  </tr>
</table>
```

---

# 9. Lists in HTML (एचटीएमएल में सूचियाँ)

HTML में 3 प्रकार की सूचियाँ होती हैं:

```
+-------------------------------------------------------------------------------+
|                                TYPES OF LISTS                                 |
+-------------------------------------------------------------------------------+
| 1. Ordered List (<ol>)      2. Unordered List (<ul>)   3. Description (<dl>)  |
|    1. HTML                     • Web Design               HTML                |
|    2. CSS                      • Python                     Markup language   |
|    3. JavaScript               • IoT                      CSS                 |
|                                                             Cascading Styles  |
+-------------------------------------------------------------------------------+
```

### 9.1 Ordered List (`<ol>`) — क्रमबद्ध सूची
- आइटम नंबर, अक्षर या रोमन अंकों में आते हैं।
- **Attributes:**
  - `type="1"` (1, 2, 3 - Default)
  - `type="A"` (A, B, C)
  - `type="a"` (a, b, c)
  - `type="I"` (I, II, III)
  - `type="i"` (i, ii, iii)
  - `start="5"` (गिनती 5 से शुरू होगी)
  - `reversed` (उल्टी गिनती: 5, 4, 3, 2, 1)

### 9.2 Unordered List (`<ul>`) — अक्रमबद्ध / बुलेट सूची
- आइटम बुलेट्स (प्रतीकों) के रूप में आते हैं।
- **Attributes / CSS list-style-type:**
  - `disc` (भरा हुआ काला गोला - Default)
  - `circle` (खोखला गोला)
  - `square` (भरा हुआ चौकोर डिब्बा)
  - `none` (कोई बुलेट नहीं - मेन्यू बनाने में उपयोगी)

### 9.3 Description / Definition List (`<dl>`) — परिभाषा सूची
- इसमें 3 टैग्स का संयोजन होता है:
  - `<dl>`: Description List कंटेनर
  - `<dt>`: Description Term (परिभाषित किया जाने वाला शब्द)
  - `<dd>`: Description Data / Definition (शब्द की व्याख्या या परिभाषा)

---

# 10. HTML Forms & Form Controls (फॉर्म और इनपुट कंट्रोल्स)

यूजर से डेटा (जैसे नाम, ईमेल, पासवर्ड, रजिस्ट्रेशन डिटेल्स) इनपुट लेने के लिए HTML Forms का उपयोग किया जाता है।

### 10.1 `<form>` Tag Attributes:
- **`action`:** फॉर्म सबमिट होने के बाद डेटा को प्रोसेस करने वाले सर्वर-साइड पेज/स्क्रिप्ट का URL (e.g., `action="register.php"`).
- **`method`:** डेटा भेजने की विधि (**GET** या **POST**).

```
+-------------------------------------------------------------------------------+
|                           GET VS. POST METHOD COMPARISON                      |
+-------------------------------------------------------------------------------+
| Parameter          | GET Method                     | POST Method             |
+--------------------+--------------------------------+-------------------------+
| Data Visibility    | URL एड्रेस बार में दिखता है    | छिपा रहता है (Body में) |
| Security           | असुरक्षित (No Passwords)       | सुरक्षित (Safe for Auth)|
| Data Limit         | सीमित (~2048 कैरेक्टर)         | असीमित (No size limit)  |
| Bookmark / Cache   | बुकमार्क व कैश हो सकता है      | कभी कैश नहीं होता       |
| Best Used For      | सर्च क्वेरी, डेटा प्राप्त करना | पासवर्ड, फॉर्म सबमिशन   |
+-------------------------------------------------------------------------------+
```

---

### 10.2 Form Controls and Input Types (`<input>`)

| Input Type | Syntax | Purpose / Visual Appearance |
|:---|:---|:---|
| **Text** | `<input type="text" name="uname">` | एक लाइन का सामान्य टेक्स्ट इनपुट बॉक्स |
| **Password** | `<input type="password" name="pwd">`| बुलेट्स या डॉट्स (••••) के रूप में छिपा हुआ टेक्स्ट |
| **Radio** | `<input type="radio" name="gender" value="m">` | कई विकल्पों में से **केवल एक** चुनने हेतु गोल बटन |
| **Checkbox** | `<input type="checkbox" name="hobby" value="code">`| कई विकल्पों में से **एक या अधिक** चुनने हेतु चौकोर बॉक्स |
| **Email** | `<input type="email" name="usermail">`| ईमेल फॉर्मेट (`user@domain.com`) ऑटो-चेक करता है |
| **Number** | `<input type="number" min="1" max="100">`| केवल संख्याएं इनपुट करने हेतु (अप/डाउन एरो सहित) |
| **Range** | `<input type="range" min="0" max="100">`| स्लाइडर कंट्रोल (वॉल्यूम, ब्राइटनेस आदि के लिए) |
| **Date** | `<input type="date" name="dob">` | कैलेंडर पॉप-अप से तारीख चुनने हेतु |
| **Color** | `<input type="color" name="favcolor">` | कलर पिकर पैलेट खोलने हेतु |
| **File** | `<input type="file" name="resume">` | कंप्यूटर से फाइल अपलोड करने हेतु |
| **Submit** | `<input type="submit" value="Register">`| फॉर्म का डेटा सर्वर पर भेजने वाला बटन |
| **Reset** | `<input type="reset" value="Clear">` | फॉर्म के सभी फील्ड्स को रीसेट/खाली करने वाला बटन |
| **Button** | `<input type="button" value="Click">`| जावास्क्रिप्ट द्वारा हैंडल किया जाने वाला सामान्य बटन |
| **Hidden** | `<input type="hidden" name="id" value="99">`| यूजर को न दिखने वाला गुप्त डेटा सर्वर पर भेजना |

### 10.3 Other Essential Form Elements:
1. **`<textarea>`:** कई पंक्तियों का बड़ा टेक्स्ट बॉक्स (फीडबैक, कमेंट, या पते के लिए). इसके मुख्य एट्रिब्यूट `rows` और `cols` हैं।
2. **`<select>` & `<option>`:** ड्रॉप-डाउन लिस्ट (Dropdown Combo Box) बनाने के लिए:
   ```html
   <select name="city">
     <option value="delhi">Delhi</option>
     <option value="mumbai" selected>Mumbai</option>
   </select>
   ```
3. **`<label>`:** इनपुट फील्ड का नाम/लेबल। `for` एट्रिब्यूट इनपुट के `id` से जुड़ता है।
4. **`<fieldset>` & `<legend>`:** फॉर्म के संबंधित कंट्रोल्स के चारों ओर बॉर्डर बॉक्स और बॉक्स का हेडिंग (Legend) बनाना।

---

### 10.4 HTML5 Form Validation Attributes (फॉर्म वैलिडेशन)
HTML5 में बिना जावास्क्रिप्ट के इन-बिल्ट फॉर्म वैलिडेशन की सुविधा दी गई है:

1. **`required`:** फील्ड को अनिवार्य (Mandatory) बनाता है; इसे खाली छोड़ने पर फॉर्म सबमिट नहीं होगा।
2. **`pattern`:** Regular Expression (रेगेक्स) के आधार पर इनपुट चेक करता है (उदा. `pattern="[0-9]{10}"` 10 अंकों का मोबाइल नंबर).
3. **`autofocus`:** पेज लोड होते ही कर्सर स्वतः उस इनपुट बॉक्स पर आ जाता है।
4. **`placeholder`:** इनपुट बॉक्स में हल्का ग्रे हिंट टेक्स्ट (उदा. `placeholder="Enter your email"`).
5. **`readonly`:** यूजर वैल्यू को पढ़ सकता है पर एडिट नहीं कर सकता (डेटा सबमिट होता है).
6. **`disabled`:** इनपुट फील्ड को निष्क्रिय कर देता है (डेटा सर्वर पर सबमिट नहीं होता).
7. **`min` / `max` / `step`:** नंबर और डेट इनपुट की न्यूनतम, अधिकतम सीमा तय करना।

---

# 11. HTML5 Semantic Elements (HTML5 सेमेंटिक टैग्स)

**Semantic Tags** वे टैग्स होते हैं जिनका नाम उनके अंदर रखे गए कंटेंट और उसके उद्देश्य को स्पष्ट रूप से व्यक्त करता है।

```
+-------------------------------------------------------------------------------+
|                         HTML5 SEMANTIC PAGE LAYOUT                            |
+-------------------------------------------------------------------------------+
| <header>       Site Logo, Main Header, Top Banner                             |
+-------------------------------------------------------------------------------+
| <nav>          Navigation Bar (Home | About | Courses | Contact)             |
+-------------------------------------------------------+-----------------------+
| <main>                                                | <aside>               |
|   <section>                                           |   Sidebar, Ads,       |
|     <article>                                         |   Related Links,      |
|       <h2>Article Heading</h2>                        |   Author Profile      |
|       <p>Content of independent self-contained story</p>|                     |
|     </article>                                        |                       |
|   </section>                                          |                       |
+-------------------------------------------------------+-----------------------+
| <footer>       Copyright © 2026, Privacy Policy, Contact Info                 |
+-------------------------------------------------------------------------------+
```

| HTML5 Semantic Tag | Purpose & Meaning (उद्देश्य एवं अर्थ) |
|:---|:---|
| **`<header>`** | पेज या सेक्शन का इंट्रोडक्टरी हेडर (लोगो, हेडिंग) |
| **`<nav>`** | प्रमुख नेविगेशन लिंक्स का समूह |
| **`<main>`** | पूरे वेबपेज का मुख्य और अद्वितीय (Unique) कंटेंट |
| **`<section>`** | संबंधित कंटेंट का एक विशिष्ट विषयगत खंड (Thematic Section) |
| **`<article>`** | स्वतंत्र और आत्मनिर्भर कंटेंट जो अलग से भी प्रकाशित हो सके (न्यूज, ब्लॉग पोस्ट) |
| **`<aside>`** | मुख्य कंटेंट के अलावा साइडबार, विज्ञापन या अतिरिक्त जानकारी |
| **`<footer>`** | पेज या सेक्शन का निचला भाग (कॉपीराइट, संपर्क जानकारी) |
| **`<figure>`** | फोटो, डायग्राम या कोड ब्लॉक का कंटेनर |
| **`<figcaption>`**| `<figure>` के अंदर फोटो का कैप्शन/शीर्षक |

---

# 12. Multimedia & Frames in HTML5 (मल्टीमीडिया और फ्रेम्स)

### 12.1 Audio Tag (`<audio>`)
```html
<audio controls autoplay loop>
  <source src="audio/song.mp3" type="audio/mpeg">
  <source src="audio/song.ogg" type="audio/ogg">
  Your browser does not support the audio tag.
</audio>
```
- **Attributes:**
  - `controls`: प्ले, पॉज, वॉल्यूम बार दिखाता है।
  - `autoplay`: पेज खुलते ही ऑडियो स्वतः शुरू करता है।
  - `loop`: समाप्त होने पर दोबारा शुरू करता है।
  - `muted`: ऑडियो को म्यूट रखता है।

### 12.2 Video Tag (`<video>`)
```html
<video width="640" height="360" controls poster="images/thumbnail.jpg">
  <source src="videos/tutorial.mp4" type="video/mp4">
  <source src="videos/tutorial.webm" type="video/webm">
  Your browser does not support the video tag.
</video>
```
- **`poster` Attribute:** वीडियो प्ले होने से पहले प्रदर्शित होने वाला थंबनेल इमेज।

### 12.3 Inline Frame (`<iframe>`)
एक वेबपेज के अंदर किसी दूसरे वेबपेज, यूट्यूब वीडियो या गूगल मैप को एम्बेड (Embed) करने के लिए:
```html
<iframe src="https://www.wikipedia.org" width="100%" height="400" frameborder="0"></iframe>
```

> ⚠️ **OBSOLETE HTML4 TAGS NOTE:**  
> पुराने HTML4 में `<frameset>` और `<frame>` का उपयोग पूरे पेज को कई टुकड़ों में बांटने के लिए होता था, लेकिन **HTML5 में `<frameset>` को पूरी तरह हटा दिया गया है (Deprecated)** और इसके स्थान पर केवल `<iframe>` का उपयोग किया जाता है।

---

# 🔥 NIELIT Exam Quick Revision Points (गोल्डन प्वाइंट्स)

1. HTML केस-इनसेंसिटिव (Case-Insensitive) भाषा है, यानी `<b>` और `<B>` में कोई अंतर नहीं है, लेकिन W3C स्टैंडर्ड छोटे अक्षरों (lowercase) की सिफारिश करता है।
2. HTML5 का MIME Type **`text/html`** होता है।
3. डिफ़ॉल्ट रूप से `<th>` का टेक्स्ट **Bold & Center-Aligned** और `<td>` का टेक्स्ट **Regular & Left-Aligned** होता है।
4. रेडियो बटन (`<input type="radio">`) में एक समय में केवल एक विकल्प चुनने के लिए सभी विकल्पों का **`name` attribute एक समान** होना अनिवार्य है।
5. HTML में कमेंट्स `<!-- This is comment -->` सिंटैक्स द्वारा लिखे जाते हैं।
6. `target="_blank"` लिंक को नए टैब/विंडो में खोलता है।
7. दो या दो से अधिक कॉलम्स को जोड़ने के लिए **`colspan`** और पंक्तियों को जोड़ने के लिए **`rowspan`** का उपयोग होता है।
