# NIELIT O Level (IT) — Module M2-R5.1: Web Designing & Publishing
# UNIT 4: Cascading Style Sheets (CSS) — Complete Master Notes

---

## 📌 Syllabus Overview & Exam Weightage
- **Module Code:** M2-R5.1 (Web Designing & Publishing)
- **Unit 4 Name:** Cascading Style Sheets (CSS)
- **Exam Weightage:** **20 Marks** in written examination.
- **Key Focus Areas:** 
  - Introduction to CSS, Advantages of CSS.
  - Three Ways to Apply CSS (Inline, Internal, External) & Cascading Priority.
  - All Types of CSS Selectors (Universal, Tag, Class, ID, Sub-selector/Descendant, Child, Attribute, Group).
  - CSS Box Model (Margin, Border, Padding, Content).
  - CSS Properties (Background, Font, Text, Border, Positioning: `static`, `relative`, `absolute`, `fixed`, `sticky`).
  - CSS Tables, CSS Lists, Navigation Menu Design (Horizontal & Vertical), and CSS Image Gallery.

---

# 1. Introduction to CSS (CSS का परिचय)

### 1.1 What is CSS?
- **Full Form:** **Cascading Style Sheets** (कैस्केडिंग स्टाइल शीट्स).
- **Invented by:** **Håkon Wium Lie** in **1994** (W3C Standard).
- **Purpose:** CSS का उपयोग HTML वेबपेजों के रंग-रूप, डिजाइन, लेआउट, फोंट, एनिमेशन और विभिन्न स्क्रीनों (Mobile, Tablet, Desktop) पर रिस्पॉन्सिव प्रदर्शन को नियंत्रित करने के लिए किया जाता है।

```
+-------------------------------------------------------------------------------+
|                      WEB DEVELOPMENT CORE TRIAD ANALOGY                       |
+-------------------------------------------------------------------------------+
| 1. HTML       : मानव शरीर का कंकाल (Skeleton / Structure)                     |
| 2. CSS        : शरीर की त्वचा, बाल, कपड़े और सुंदरता (Skin, Style & Looks)    |
| 3. JavaScript : शरीर की मांसपेशियां और सोचने की क्षमता (Brain, Logic & Motion)|
+-------------------------------------------------------------------------------+
```

### 1.2 Advantages of Using CSS (CSS के प्रमुख लाभ):
1. **Separation of Concerns:** कंटेंट (HTML) और प्रेजेंटेशन (CSS) को अलग-अलग फाइलों में रखना।
2. **Reusability & Consistency:** एक ही `.css` फाइल को सैकड़ों वेबपेजों से जोड़कर पूरी वेबसाइट का लुक एक साथ बदला जा सकता है।
3. **Faster Page Loading:** CSS फाइलें ब्राउज़र द्वारा कैश (Cache) हो जाती हैं, जिससे वेबसाइट तेजी से लोड होती है।
4. **Responsive Web Design:** विभिन्न स्क्रीन साइज (मोबाइल, टैबलेट, डेस्कटॉप) के लिए अलग-अलग स्टाइल्स लागू करना।

---

# 2. Syntax of CSS (CSS का सिंटैक्स)

CSS कोड में **Ruleset** होता है जो दो मुख्य भागों से मिलकर बनता है:
1. **Selector (चयनकर्ता):** वह HTML एलिमेंट जिसे स्टाइल करना है।
2. **Declaration Block (घोषणा खंड):** `{}` ब्रेसिज़ के अंदर लिखा जाने वाला `property: value;` का समूह।

```
  h1 { color: blue; font-size: 24px; text-align: center; }
  │    └─────────┬─────────────────────────────────────┘
  │              └──── Declaration Block (घोषणा खंड)
  │                    ├─ Property: 'color'  Value: 'blue'
  │                    └─ Property: 'font-size' Value: '24px'
  └─ Selector (चयनकर्ता)
```

> ⚠️ **RULE:** प्रत्येक Declaration में प्रॉपर्टी और वैल्यू के बीच कोलन (`:`) और अंत में सेमीकोलन (`;`) लगाना अनिवार्य होता है।

---

# 3. Three Ways to Apply CSS (CSS लागू करने के 3 तरीके)

```
+-------------------------------------------------------------------------------+
|                             THREE TYPES OF CSS                                |
+-------------------------------------------------------------------------------+
| 1. Inline CSS   : <p style="color: red;"> ... </p> (टैग के अंदर)              |
| 2. Internal CSS : <head> <style> p { color: blue; } </style> </head>          |
| 3. External CSS : <head> <link rel="stylesheet" href="style.css"> </head>     |
+-------------------------------------------------------------------------------+
```

### 3.1 Detailed Comparison Table:

| Type | How to Apply (सिंटैक्स) | Scope / प्रभाव | Best Used For | Priority / Specificity |
|:---|:---|:---|:---|:---:|
| **1. Inline CSS** | HTML टैग के `style` एट्रिब्यूट में:<br>`<h1 style="color: green;">Hi</h1>` | केवल उसी विशेष एलिमेंट पर | त्वरित टेस्टिंग या एक बार के स्टाइल हेतु | **1st (Highest)** |
| **2. Internal CSS** | `<head>` में `<style>` टैग के अंदर:<br>`<style> h1 { color: red; } </style>` | केवल उसी एक HTML वेबपेज पर | सिंगल पेज वेबसाइट के लिए | **2nd** |
| **3. External CSS** | अलग `.css` फाइल बनाकर `<link>` द्वारा जोड़ना:<br>`<link rel="stylesheet" href="style.css">` | पूरी वेबसाइट के सभी वेबपेजों पर | बड़े प्रोजेक्ट्स व मल्टी-पेज वेबसाइट्स हेतु | **3rd** |

> 🏆 **CSS Cascading & Priority Rule (प्राथमिकता क्रम):**  
> **Inline CSS > Internal CSS / External CSS (जो बाद में लिखा हो) > Browser Default**  
> *(नोट: यदि किसी प्रॉपर्टी में `!important` लगा दिया जाए, तो वह सबसे ऊपर सर्वोच्च प्राथमिकता प्राप्त कर लेती है, उदा. `color: red !important;`).*

---

# 4. CSS Selectors (CSS के सभी महत्वपूर्ण सिलेक्टर्स)

CSS सिलेक्टर्स का उपयोग उस HTML एलिमेंट को खोजने या सेलेक्ट करने के लिए किया जाता है जिसे स्टाइल करना है।

```
+-------------------------------------------------------------------------------+
|                          MASTER CSS SELECTORS SUMMARY                         |
+-------------------------------------------------------------------------------+
| Selector Name       | Syntax              | Example         | Matches / Selects|
+---------------------+---------------------+-----------------+------------------+
| 1. Universal        | *                   | * { margin: 0; }| All elements     |
| 2. Tag / Element    | element_name        | p { color:red; }| All <p> tags     |
| 3. ID Selector      | #id_name            | #header { ... } | id="header" (1)  |
| 4. Class Selector   | .class_name         | .btn { ... }    | class="btn" (Many|
| 5. Group Selector   | el1, el2, el3       | h1, h2, p {...} | Groups together  |
| 6. Descendant / Sub | parent descendant   | div p { ... }   | Any <p> in <div> |
| 7. Direct Child     | parent > child      | div > p { ... } | Direct child <p> |
| 8. Attribute        | [attr=value]        | input[type=text]| Specific attr    |
+---------------------+---------------------+-----------------+------------------+
```

### 4.1 Detailed Breakdown of Selectors:

1. **Universal Selector (`*`):**
   - पूरे वेबपेज के हर एक एलिमेंट को सेलेक्ट करता है।
   - *Example:* `* { box-sizing: border-box; margin: 0; }`
2. **Tag / Element Selector:**
   - दिए गए नाम वाले सभी HTML टैग्स को चुनता है।
   - *Example:* `p { font-size: 16px; }` (सभी पैराग्राफ्स पर लागू)
3. **ID Selector (`#`):**
   - एक विशिष्ट `id` वाले इकलौते एलिमेंट को सेलेक्ट करता है। वेबपेज में ID यूनिक (अद्वितीय) होनी चाहिए।
   - *Example:* `#main-nav { background-color: #333; }`
4. **Class Selector (`.`):**
   - उस `class` वाले एक या एक से अधिक सभी एलिमेंट्स को सेलेक्ट करता है।
   - *Example:* `.highlight { background-color: yellow; }`
5. **Group Selector (`, `):**
   - कोड दोहराव से बचने के लिए कई सिलेक्टर्स को कॉमा लगाकर एक साथ स्टाइल करना।
   - *Example:* `h1, h2, h3, p { font-family: Arial, sans-serif; }`
6. **Descendant / Sub-Selector (Space ` `):**
   - पैरेंट के अंदर मौजूद किसी भी स्तर के वंशज (चाइल्ड, सब-चाइल्ड) को चुनना।
   - *Example:* `div p { color: blue; }` (`<div>` के अंदर कहीं भी स्थित सभी `<p>`)
7. **Direct Child Selector (`>`):**
   - केवल डायरेक्ट प्रथम-स्तरीय संतान (Immediate child) को चुनना।
   - *Example:* `div > p { color: red; }`
8. **Attribute Selector (`[ ]`):**
   - किसी विशेष एट्रिब्यूट या उसकी वैल्यू के आधार पर सेलेक्ट करना।
   - *Example:* `input[type="password"] { border: 2px solid red; }`

### 4.2 Pseudo-Classes & Pseudo-Elements (स्यूडो-क्लासेस)
- **Pseudo-Classes (`:`):** एलिमेंट की विशेष स्थिति (State) को स्टाइल करना।
  - `a:link`: बिना विज़िट किया गया सामान्य लिंक।
  - `a:visited`: यूजर द्वारा पहले खोला जा चुका लिंक।
  - `a:hover`: जब यूजर माउस कर्सर लिंक के ऊपर ले जाए।
  - `a:active`: जिस क्षण लिंक पर क्लिक दबाया जा रहा हो।
  - *(शॉर्ट ट्रिक याद रखने के लिए: **LVHA** — **L**ove **V**isits **HA**te).*
  - `:focus`: जब इनपुट बॉक्स पर कर्सर एक्टिव हो।
  - `:nth-child(even / odd)`: टेबल की सम या विषम पंक्तियों को स्ट्राइप कलर देना।
- **Pseudo-Elements (`::`):** एलिमेंट के किसी विशिष्ट भाग को स्टाइल करना।
  - `::first-letter`: पैराग्राफ का पहला अक्षर बड़ा (Drop-cap) करना।
  - `::before` और `::after`: एलिमेंट से ठीक पहले या बाद में कोई कंटेंट जोड़ना।

---

# 5. The CSS Box Model (CSS बॉक्स मॉडल)

वेबपेज का प्रत्येक HTML एलिमेंट ब्राउज़र द्वारा एक आयताकार डिब्बे (Rectangular Box) के रूप में देखा जाता है। इसे **CSS Box Model** कहते हैं।

```
+-------------------------------------------------------------------------------+
|                             THE CSS BOX MODEL                                 |
+-------------------------------------------------------------------------------+
|                                                                               |
|   ┌────────────────────────── MARGIN (मार्जिन) ───────────────────────────┐   |
|   │ (बॉर्डर के बाहर की खाली जगह — दो एलिमेंट्स के बीच दूरी)                │   |
|   │                                                                       │   |
|   │   ┌─────────────────────── BORDER (बॉर्डर) ───────────────────────┐   │   |
|   │   │ (पैडिंग और कंटेंट के चारों ओर की घेरा रेखा)                   │   │   |
|   │   │                                                               │   │   |
|   │   │   ┌────────────────── PADDING (पैडिंग) ───────────────────┐   │   │   |
|   │   │   │ (कंटेंट और बॉर्डर के बीच की अंदरूनी खाली जगह)         │   │   │   |
|   │   │   │                                                       │   │   │   |
|   │   │   │   ┌────────────── CONTENT (कंटेंट) ───────────────┐   │   │   │   |
|   │   │   │   │  वास्तविक टेक्स्ट, इमेज, वीडियो या डेटा        │   │   │   │   |
|   │   │   │   └───────────────────────────────────────────────┘   │   │   │   |
|   │   │   │                                                       │   │   │   |
|   │   │   └───────────────────────────────────────────────────────┘   │   │   |
|   │   │                                                               │   │   |
|   │   └───────────────────────────────────────────────────────────────┘   │   │
|   │                                                                       │   │
|   └───────────────────────────────────────────────────────────────────────┘   │
|                                                                               |
+-------------------------------------------------------------------------------+
```

### 5.1 Box Model Components Breakdown:
1. **Content:** जहाँ वास्तविक टेक्स्ट, हेडिंग या इमेज रहती है (`width` और `height`).
2. **Padding:** कंटेंट और बॉर्डर के **अंदर** का क्लियर स्पेस (पारदर्शी).
3. **Border:** पैडिंग और कंटेंट के चारों तरफ की दिखने वाली लाइन.
4. **Margin:** बॉर्डर के **बाहर** का स्पेस जो अन्य नजदीकी एलिमेंट्स को दूर धकेलता है (पारदर्शी).

#### Box Sizing Trick:
- `box-sizing: content-box;` (Default): Total Width = `width + padding + border + margin`
- `box-sizing: border-box;` (Recommended): Total Width = `width` के अंदर ही पैडिंग और बॉर्डर समाहित हो जाते हैं।

---

# 6. Core CSS Properties & Values (प्रमुख प्रॉपर्टीज)

### 6.1 Background Properties (बैकग्राउंड प्रॉपर्टीज)
- `background-color`: पृष्ठभूमि का रंग (e.g., `#f4f4f4`, `rgb(255, 0, 0)`, `rgba(0, 0, 0, 0.5)`).
- `background-image`: बैकग्राउंड में फोटो लगाना (`url('bg.jpg')`).
- `background-repeat`: फोटो को दोहराना (`repeat`, `no-repeat`, `repeat-x`, `repeat-y`).
- `background-position`: फोटो की स्थिति (`top left`, `center center`).
- `background-size`: फोटो का आकार (`cover`, `contain`, `100% 100%`).
- `background-attachment`: स्क्रॉलिंग व्यवहार (`scroll`, `fixed` - फिक्स रहने वाला बैकग्राउंड).

### 6.2 Text and Font Properties (टेक्स्ट एवं फॉन्ट)
- `color`: टेक्स्ट का रंग।
- `font-family`: फोंट का प्रकार (उदा. `Arial, "Helvetica Neue", sans-serif`).
- `font-size`: फोंट का आकार (उदा. `16px`, `1.2rem`, `120%`).
- `font-weight`: फोंट का भारीपन (`normal`, `bold`, `600`, `900`).
- `font-style`: सामान्य या इटैलिक (`normal`, `italic`, `oblique`).
- `text-align`: टेक्स्ट का संरेखण (`left`, `right`, `center`, `justify`).
- `text-decoration`: रेखाएं (`none` - लिंक का अंडरलाइन हटाने हेतु, `underline`, `line-through`).
- `text-transform`: केस बदलना (`uppercase`, `lowercase`, `capitalize`).
- `line-height`: पंक्तियों के बीच का अंतर (Line spacing).

---

# 7. CSS Positioning & Layout (CSS पोजिशनिंग और लेआउट)

HTML एलिमेंट्स को स्क्रीन पर कहाँ और कैसे रखना है, इसके लिए `position` प्रॉपर्टी का उपयोग होता है:

| Position Value | How it Works (कार्यप्रणाली) | Default Flow में रहता है? | `top/left` का प्रभाव |
|:---|:---|:---:|:---:|
| **`static`** | **डिफ़ॉल्ट स्थिति**। पेज के सामान्य क्रम में रहता है। | ✅ हाँ | ❌ कोई प्रभाव नहीं |
| **`relative`** | अपनी सामान्य मूल स्थिति के सापेक्ष खिसकता है। | ✅ हाँ | ✅ अपनी मूल जगह से शिफ्ट होता है |
| **`absolute`** | अपने सबसे करीबी `positioned parent` के सापेक्ष बैठता है। | ❌ बाहर (Floats) | ✅ पैरेंट की सीमा के अंदर सटीक जगह |
| **`fixed`** | **ब्राउज़र विंडो (Viewport)** के सापेक्ष स्थिर रहता है; स्क्रॉल करने पर भी नहीं हिलता। | ❌ बाहर | ✅ स्क्रीन पर फिक्स रहता है |
| **`sticky`** | यूजर के स्क्रॉल करने तक `relative` रहता है, फिर स्क्रीन पर चिपक (`fixed`) जाता है। | ✅ हाइब्रिड | ✅ स्क्रॉल थ्रेशोल्ड पर लॉक होता है |

- **`z-index`:** जब दो या अधिक एलिमेंट्स एक दूसरे के ऊपर ओवरलैप होते हैं, तो कौन सा एलिमेंट ऊपर दिखेगा यह `z-index` (Stack order) तय करता है। उच्च मान (High value) वाला एलिमेंट ऊपर दिखता है।

---

# 8. Practical Web Components in CSS (प्रैक्टिकल वेब कंपोनेंट्स)

### 8.1 Horizontal Navigation Menu (नेविगेशन मेन्यू डिजाइन)
```html
<nav class="navbar">
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#courses">Courses</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>
```
```css
.navbar ul {
  list-style-type: none; /* बुलेट हटाना */
  margin: 0;
  padding: 0;
  background-color: #2c3e50;
  overflow: hidden;
}

.navbar li {
  float: left; /* आइटम्स को क्षैतिज (Horizontal) कतार में रखना */
}

.navbar li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 20px;
  text-decoration: none; /* अंडरलाइन हटाना */
}

.navbar li a:hover {
  background-color: #1abc9c; /* माउस ले जाने पर बैकग्राउंड बदलना */
}
```

### 8.2 Responsive Image Gallery (इमेज गैलरी)
```css
.gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.gallery-item {
  flex: 1 1 calc(25% - 15px); /* 4 कॉलम्स डेस्कटॉप पर */
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.gallery-item:hover {
  transform: scale(1.05); /* माउस ले जाने पर हल्का ज़ूम इफ़ेक्ट */
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}
```

---

# 🔥 NIELIT Exam Quick Revision Points (गोल्डन प्वाइंट्स)

1. CSS फाइल का एक्सटेंशन हमेशा **`.css`** होता है और इसका MIME प्रकार **`text/css`** होता है।
2. हाइपरलिंक्स के नीचे की अंडरलाइन हटाने के लिए **`text-decoration: none;`** का उपयोग किया जाता है।
3. बॉक्स मॉडल के चार भाग क्रम से हैं: **Content ➔ Padding ➔ Border ➔ Margin**।
4. किसी एलिमेंट को स्क्रीन पर हमेशा एक जगह स्थिर (Sticky/Static on screen during scroll) रखने के लिए **`position: fixed;`** का प्रयोग होता है।
5. `padding: 10px 20px;` का अर्थ है — **Top/Bottom = 10px** और **Left/Right = 20px**।
6. सूचियों से बुलेट्स हटाने के लिए **`list-style-type: none;`** लिखा जाता है।
7. `z-index` केवल उन्हीं एलिमेंट्स पर काम करता है जिनकी `position` प्रॉपर्टी `relative`, `absolute`, `fixed` या `sticky` सेट हो (`static` पर काम नहीं करता)।
