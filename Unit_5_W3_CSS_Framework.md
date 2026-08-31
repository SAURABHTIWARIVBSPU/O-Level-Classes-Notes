# NIELIT O Level (IT) — Module M2-R5.1: Web Designing & Publishing
# UNIT 5: CSS Framework (W3.CSS) — Complete Master Notes

---

## 📌 Syllabus Overview & Exam Weightage
- **Module Code:** M2-R5.1 (Web Designing & Publishing)
- **Unit 5 Name:** CSS Framework (W3.CSS)
- **Exam Weightage:** **15 Marks** in written examination.
- **Key Focus Areas:** 
  - What is a CSS Framework & Introduction to W3.CSS.
  - Advantages of W3.CSS over other frameworks (Bootstrap).
  - Adding W3.CSS to Webpages (CDN vs Local).
  - W3.CSS Containers (`w3-container`) & Panels (`w3-panel`).
  - W3.CSS Colors, Text, Fonts, Borders, and Cards.
  - W3.CSS Tables, Lists, Images, and Buttons.
  - W3.CSS 12-Column Responsive Grid System (`w3-row`, `w3-col`, `s`, `m`, `l` classes).

---

# 1. Introduction to CSS Frameworks & W3.CSS (फ्रेमवर्क का परिचय)

### 1.1 What is a CSS Framework?
- **English:** A **CSS Framework** is a pre-prepared, standardized software library that provides ready-to-use CSS classes, styles, grid systems, and components to speed up web development and ensure mobile responsiveness.
- **हिन्दी:** CSS फ्रेमवर्क पहले से तैयार की गई स्टाइलशीट और क्लासों का एक ऐसा संग्रह (Library) होता है, जिसका उपयोग करके वेब डेवलपर बिना बार-बार लंबा CSS कोड लिखे बहुत कम समय में सुंदर और रिस्पॉन्सिव वेबसाइट बना सकते हैं।

```
+-------------------------------------------------------------------------------+
|                       WHY USE W3.CSS FRAMEWORK?                               |
+-------------------------------------------------------------------------------+
| Feature               | W3.CSS                        | Bootstrap             |
+-----------------------+-------------------------------+-----------------------+
| Dependency            | PURE CSS (No jQuery/JS needed)| Requires JavaScript/Popper|
| File Size             | Very Small (~23 KB) - Fast!   | Large (~160+ KB)      |
| Learning Curve        | Extremely Easy & Intuitive    | Moderate              |
| Mobile-First Design   | Native & Automatic Responsive | Responsive            |
| Developed By          | W3Schools (Free & Open)       | Twitter               |
+-----------------------+-------------------------------+-----------------------+
```

---

# 2. How to Include W3.CSS in a Webpage (W3.CSS को कैसे जोड़ें)

W3.CSS को अपने HTML डॉक्यूमेंट के `<head>` सेक्शन में जोड़ने के दो तरीके हैं:

### 2.1 Method 1: Using Official CDN (कंटेंट डिलीवरी नेटवर्क - सर्वाधिक अनुशंसित)
```html
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
</head>
```

### 2.2 Method 2: Local Download (ऑफलाइन उपयोग हेतु)
1. `w3.css` फाइल को डाउनलोड करके अपने प्रोजेक्ट फोल्डर (उदा. `css/w3.css`) में रखें।
2. HTML में लिंक करें:
```html
<link rel="stylesheet" href="css/w3.css">
```

---

# 3. Core W3.CSS Structural Classes (मूल संरचनात्मक क्लासेस)

```
+-------------------------------------------------------------------------------+
|                      W3-CONTAINER VS. W3-PANEL COMPARISON                     |
+-------------------------------------------------------------------------------+
| Class Name      | Top/Bottom Margin | Left/Right Padding | Best Used For      |
+-----------------+-------------------+--------------------+--------------------+
| w3-container    | 0px (No margin)   | 16px Padding       | Headers, Footers,  |
|                 |                   |                    | General page divs  |
+-----------------+-------------------+--------------------+--------------------+
| w3-panel        | 16px Margin       | 16px Padding       | Alert boxes, Notes,|
|                 | (ऊपर/नीचे खाली जगह) | (दाएं/बाएं पैडिंग) | Callouts, Cards    |
+-----------------+-------------------+--------------------+--------------------+
```

### 3.1 `w3-container` (कंटेनर क्लास)
- HTML के किसी भी एलिमेंट (जैसे `<div>`, `<header>`, `<footer>`, `<section>`) में **16px की लेफ्ट और राइट पैडिंग** जोड़ता है।
```html
<div class="w3-container w3-teal">
  <h1>Welcome to W3.CSS</h1>
  <p>Containers provide perfect padding automatically.</p>
</div>
```

### 3.2 `w3-panel` (पैनल क्लास)
- इसमें 16px लेफ्ट-राइट पैडिंग के साथ-साथ **16px की टॉप और बॉटम मार्जिन** भी पहले से शामिल होती है।
```html
<div class="w3-panel w3-pale-yellow w3-leftbar w3-border-yellow">
  <p><strong>Note:</strong> W3.CSS is super easy to learn!</p>
</div>
```

---

# 4. Colors, Text, Fonts & Borders in W3.CSS

### 4.1 Color Classes (रंग क्लासेस)
W3.CSS में कलर्स को सीधे क्लास के रूप में लागू किया जाता है:
- **Background Colors:** `w3-red`, `w3-blue`, `w3-green`, `w3-teal`, `w3-amber`, `w3-black`, `w3-dark-grey`, `w3-light-grey`, `w3-khaki`, `w3-purple` आदि।
- **Text Colors:** `w3-text-red`, `w3-text-blue`, `w3-text-white`, `w3-text-grey` आदि।
- **Hover Colors:** `w3-hover-red`, `w3-hover-blue`, `w3-hover-shadow` (माउस कर्सर ले जाने पर रंग बदलना).

### 4.2 Text Sizing & Alignment Classes
- **Text Sizing:** `w3-tiny`, `w3-small`, `w3-medium`, `w3-large`, `w3-xlarge`, `w3-xxlarge`, `w3-xxxlarge`, `w3-jumbo`.
- **Text Alignment:** `w3-left-align`, `w3-right-align`, `w3-center`, `w3-justify`.

### 4.3 Border and Card Classes
- `w3-border`: चारों तरफ 1px ग्रे बॉर्डर लगाना।
- `w3-border-top`, `w3-border-bottom`, `w3-border-left`, `w3-border-right`: विशिष्ट दिशा में बॉर्डर।
- `w3-round`, `w3-round-large`, `w3-circle`: कोनों को गोल (Rounded) या अंडाकार/सर्कुलर बनाना।
- `w3-card-2` / `w3-card`: 2px की हल्की छाया (Box-shadow) वाला कार्ड कंटेनर।
- `w3-card-4`: 4px की गहरी छाया वाला कार्ड कंटेनर।

```html
<div class="w3-card-4 w3-white w3-round-large" style="width: 300px; margin: 20px;">
  <img src="student.jpg" alt="Student" style="width:100%" class="w3-round-large">
  <div class="w3-container w3-center">
    <h3>Saurabh Tiwari</h3>
    <p class="w3-text-grey">O Level Student</p>
  </div>
</div>
```

---

# 5. Tables & Lists in W3.CSS (टेबल और सूचियां)

### 5.1 Table Classes:
- `w3-table`: बेसिक स्टाइल टेबल।
- `w3-striped`: ज़ेबरा-स्ट्राइप्ड टेबल (बारी-बारी से पंक्तियों का बैकग्राउंड बदलना).
- `w3-bordered`: प्रत्येक पंक्ति के नीचे क्षैतिज रेखा (Divider line) जोड़ना.
- `w3-hoverable`: जिस पंक्ति (Row) पर माउस ले जाएं, वह हाईलाइट हो जाए.
- `w3-responsive`: यदि स्क्रीन छोटी हो तो टेबल में हॉरिजॉन्टल स्क्रॉलबार दिखाना.

```html
<table class="w3-table-all w3-hoverable w3-centered">
  <tr class="w3-blue">
    <th>Roll No</th>
    <th>Subject</th>
    <th>Marks</th>
  </tr>
  <tr>
    <td>101</td>
    <td>M2-R5.1 Web Design</td>
    <td>88</td>
  </tr>
  <tr>
    <td>102</td>
    <td>M3-R5.1 Python</td>
    <td>92</td>
  </tr>
</table>
```

### 5.2 List Classes:
- `w3-ul`: साफ-सुथरी अनऑर्डर्ड लिस्ट।
- `w3-hoverable`: लिस्ट आइटम्स पर माउस होवर इफ़ेक्ट।

---

# 6. W3.CSS Buttons & Badges (बटन और बैज)

- **`w3-btn`:** स्टैंडर्ड शैडो वाला इंटरएक्टिव बटन (क्लिक करने पर शैडो बढ़ती है).
- **`w3-button`:** बिना शैडो का फ्लैट बटन (क्लिक करने पर ग्रे हाइलाइट).
- **`w3-badge` / `w3-tag`:** गोल बैज या टैग (नोटिफिकेशन काउंट आदि के लिए).

```html
<button class="w3-button w3-red w3-round">Flat Button</button>
<button class="w3-btn w3-blue w3-round-large">Raised Shadow Button</button>
<p>Unread Messages <span class="w3-badge w3-green">5</span></p>
```

---

# 7. W3.CSS Responsive Grid System (12-कॉलम रिस्पॉन्सिव ग्रिड सिस्टम)

W3.CSS में पेज लेआउट को सभी डिवाइसों (मोबाइल, टैबलेट, डेस्कटॉप) पर रिस्पॉन्सिव बनाने के लिए **12-कॉलम ग्रिड** का उपयोग किया जाता है।

```
+-------------------------------------------------------------------------------+
|                       THE 12-COLUMN GRID BREAKPOINTS                          |
+-------------------------------------------------------------------------------+
| Screen Size          | Prefix | Screen Width Range   | Target Devices         |
+----------------------+--------+----------------------+------------------------+
| Small Screens        | s1-s12 | < 601 Pixels         | Mobile Phones          |
| Medium Screens       | m1-m12 | 601px to 992px       | Tablets, iPads         |
| Large Screens        | l1-l12 | > 992 Pixels         | Laptops, Desktops, TVs |
+----------------------+--------+----------------------+------------------------+
```

### 7.1 Grid Syntax & Mathematical Rule:
- किसी भी रो (`w3-row` या `w3-row-padding`) के अंदर सभी कॉलम्स (`w3-col`) के अंकों का **कुल योग हमेशा 12 होना चाहिए** ($s + s = 12$ या $m + m = 12$ या $l + l = 12$).

```
+-------------------------------------------------------------------------------+
| [Col 1: s12 m6 l4]          | [Col 2: s12 m6 l4]         | [Col 3: s12 m12 l4]|
| (Mobile: 100% width)        | (Mobile: 100% width)       | (Mobile: 100% width|
| (Tablet: 50% width)         | (Tablet: 50% width)        | (Tablet: 100% width|
| (Desktop: 33.3% width)      | (Desktop: 33.3% width)     | (Desktop: 33.3% wid|
+-------------------------------------------------------------------------------+
```

```html
<!-- Example of a 3-Column Responsive Layout -->
<div class="w3-row-padding">
  <!-- Column 1: Mobile पर Full Width (12), Tablet पर आधा (6), Desktop पर 1/3 (4) -->
  <div class="w3-col s12 m6 l4">
    <div class="w3-card w3-container w3-blue">
      <h3>Card 1</h3>
      <p>HTML & CSS Notes</p>
    </div>
  </div>

  <!-- Column 2 -->
  <div class="w3-col s12 m6 l4">
    <div class="w3-card w3-container w3-green">
      <h3>Card 2</h3>
      <p>W3.CSS Framework Notes</p>
    </div>
  </div>

  <!-- Column 3 -->
  <div class="w3-col s12 m12 l4">
    <div class="w3-card w3-container w3-orange">
      <h3>Card 3</h3>
      <p>JavaScript & AngularJS</p>
    </div>
  </div>
</div>
```

---

# 🔥 NIELIT Exam Quick Revision Points (गोल्डन प्वाइंट्स)

1. W3.CSS एक **Pure CSS** फ्रेमवर्क है; इसमें काम करने के लिए **jQuery या JavaScript की कोई आवश्यकता नहीं** होती।
2. `w3-container` में डिफ़ॉल्ट रूप से **16px Left और 16px Right पैडिंग** होती है।
3. `w3-panel` में **16px Top/Bottom Margin** और **16px Left/Right Padding** होती है।
4. W3.CSS ग्रिड सिस्टम **12 कॉलम्स** में विभाजित होता है।
5. स्मॉल (Mobile) स्क्रीन के लिए प्रीफिक्स **`s`**, मीडियम (Tablet) के लिए **`m`**, और लार्ज (Desktop) के लिए **`l`** होता है।
6. टेबल की सभी पंक्तियों पर होवर इफ़ेक्ट और बॉर्डर लगाने के लिए **`w3-table-all`** क्लास का प्रयोग होता है।
7. 4 पिक्सेल की शैडो वाला कार्ड बनाने के लिए **`w3-card-4`** का उपयोग किया जाता है।
