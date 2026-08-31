# NIELIT O Level (IT) — Module M2-R5.1: Web Designing & Publishing
# UNIT 6: JavaScript & AngularJS — Complete Master Notes

---

## 📌 Syllabus Overview & Exam Weightage
- **Module Code:** M2-R5.1 (Web Designing & Publishing)
- **Unit 6 Name:** JavaScript and AngularJS
- **Exam Weightage:** **20 Marks** in written examination.
- **Key Focus Areas:** 
  - Introduction to Client-Side Scripting Language (JavaScript).
  - Variables (`var`, `let`, `const`), Data Types, and Operators.
  - Conditional Statements (`if-else`, `switch`) and Loops.
  - JS Popup Boxes (`alert`, `confirm`, `prompt`).
  - JS Events (`onclick`, `onload`, `onchange`, `onsubmit`, `onmouseover`).
  - Basic Form Validations in JavaScript.
  - Introduction to AngularJS & MVC Architecture.
  - AngularJS Expressions (`{{ }}`) and Directives (`ng-app`, `ng-model`, `ng-bind`, `ng-init`, `ng-repeat`).
  - AngularJS Modules and Controllers (`$scope`).

---

# 1. Introduction to JavaScript (जावास्क्रिप्ट का परिचय)

### 1.1 What is JavaScript?
- **Definition:** JavaScript (JS) एक शक्तिशाली, लाइटवेट (Lightweight), इंटरप्रिटेड (Interpreted), और क्लाइंट-साइड (Client-Side) ऑब्जेक्ट-ओरिएंटेड प्रोग्रामिंग/स्क्रिप्टिंग भाषा है।
- **Invented by:** **Brendan Eich** in **1995** at **Netscape Communications** (पहले इसका नाम *Mocha*, फिर *LiveScript*, और अंततः *JavaScript* रखा गया).
- **Standardized By:** **ECMA International** (as ECMAScript / ES6).

```
+-------------------------------------------------------------------------------+
|                       CLIENT-SIDE SCRIPTING ADVANTAGES                        |
+-------------------------------------------------------------------------------+
| 1. Immediate Feedback : फॉर्म डेटा को सर्वर पर भेजे बिना ब्राउज़र में ही जांचना|
| 2. Reduced Server Load: छोटे-मोटे कैलकुलेशन और वैलिडेशन क्लाइंट मशीन पर होते हैं|
| 3. High Interactivity : क्लिक, ड्रैग, ड्रॉप, एनिमेशन और डायनामिक पेज अपडेट्स  |
| 4. Rich Interfaces    : बिना पूरा पेज रीलोड किए कंटेंट बदलना (AJAX)           |
+-------------------------------------------------------------------------------+
```

> ⚠️ **CRITICAL EXAM CLARIFICATION:**  
> **Java और JavaScript दोनों बिल्कुल अलग-अलग भाषाएं हैं!** Java एक भारी-भरकम कम्पाइल्ड (Compiled) प्रोग्रामिंग भाषा है जिसे Sun Microsystems ने बनाया था, जबकि JavaScript एक इंटरप्रिटेड क्लाइंट-साइड स्क्रिप्टिंग भाषा है।

---

# 2. How to Add JavaScript to HTML (JS को HTML में जोड़ने के तरीके)

```
+-------------------------------------------------------------------------------+
|                          THREE WAYS TO INCLUDE JAVASCRIPT                     |
+-------------------------------------------------------------------------------+
| 1. Inline JS   : <button onclick="alert('Hello!')">Click</button>             |
| 2. Internal JS : <script> console.log('Hello'); </script> (in head or body)   |
| 3. External JS : <script src="script.js"></script>                            |
+-------------------------------------------------------------------------------+
```

- **Best Practice:** बाहरी जावास्क्रिप्ट फाइल का एक्सटेंशन **`.js`** होता है और इसके अंदर कभी भी `<script>` टैग नहीं लिखा जाता।

---

# 3. Variables, Data Types & Operators in JavaScript

### 3.1 Variables Declaration: `var` vs. `let` vs. `const`

| Feature | `var` (Old ES5) | `let` (Modern ES6) | `const` (Constant ES6) |
|:---|:---|:---|:---|
| **Scope** | **Function Scoped** | **Block Scoped `{}`** | **Block Scoped `{}`** |
| **Re-declaration** | ✅ हाँ (एक ही नाम से दोबारा बना सकते हैं) | ❌ नहीं (Error) | ❌ नहीं (Error) |
| **Re-assignment** | ✅ हाँ (वैल्यू बदल सकते हैं) | ✅ हाँ (वैल्यू बदल सकते हैं) | ❌ नहीं (Value Fails / Fixed) |
| **Hoisting** | Hoisted (with `undefined`) | Temporal Dead Zone | Temporal Dead Zone |

```javascript
var x = 10;
let age = 22;
const PI = 3.14159; // PI की वैल्यू बदली नहीं जा सकती
```

### 3.2 Data Types in JavaScript
1. **Primitive Data Types:**
   - `Number`: पूर्णांक और दशमलव (e.g., `42`, `3.14`).
   - `String`: अक्षरों का समूह (e.g., `"Hello"`, `'NIELIT'`).
   - `Boolean`: `true` या `false`.
   - `Undefined`: वेरिएबल घोषित किया गया लेकिन मान नहीं दिया गया (`let a;`).
   - `Null`: जानबूझकर खाली मान सेट करना (`let b = null;`).
   - `Symbol` & `BigInt`: बड़े अंक और अद्वितीय पहचानकर्ता।
2. **Non-Primitive (Reference) Types:** `Object`, `Array`, `Function`.

### 3.3 Operators in JavaScript

```
+-------------------------------------------------------------------------------+
|                       IMPORTANT JS OPERATORS SUMMARY                          |
+-------------------------------------------------------------------------------+
| Category      | Operators                      | Example & Note               |
+---------------+--------------------------------+------------------------------+
| Arithmetic    | +, -, *, /, % (Modulus), ++, --| 10 % 3 = 1 (Remainder)       |
| Assignment    | =, +=, -=, *=, /=              | x += 5 (same as x = x + 5)   |
| Equality (==) | Loose Equality (Converts type) | 5 == "5"  -> TRUE            |
| Strict (===)  | Strict Equality (Type + Value) | 5 === "5" -> FALSE (Number!=Str)
| Logical       | && (AND), || (OR), ! (NOT)     | (a > 5 && b < 10)            |
| Ternary       | condition ? val1 : val2        | (age >= 18) ? "Adult" : "Kid"|
| Typeof        | typeof operand                 | typeof "Hi" -> "string"      |
+-------------------------------------------------------------------------------+
```

---

# 4. Control Structures & Loops (कंट्रोल स्ट्रक्चर्स और लूप्स)

### 4.1 Conditional Statements (`if-else` & `switch`)
```javascript
// if - else if - else
let marks = 85;
if (marks >= 85) {
    grade = "S Grade";
} else if (marks >= 75) {
    grade = "A Grade";
} else {
    grade = "B Grade";
}

// Switch Case Statement
switch (day) {
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    default: console.log("Other Day");
}
```

### 4.2 Loops in JS (`for`, `while`, `do-while`)
- **`for` loop:** जब पुनरावृत्ति की संख्या पहले से ज्ञात हो।
- **`while` loop:** जब लूप चलने की शर्त पहले जांची जाती है (Entry-Controlled Loop).
- **`do-while` loop:** शर्त गलत होने पर भी **कम से कम 1 बार अवश्य चलता है** (Exit-Controlled Loop).

---

# 5. JavaScript Popup Dialog Boxes (पॉप-अप बॉक्सेस)

जावास्क्रिप्ट में 3 प्रकार के बिल्ट-इन डायलॉग बॉक्स होते हैं:

```
+-------------------------------------------------------------------------------+
|                       JAVASCRIPT POPUP BOXES COMPARISON                       |
+-------------------------------------------------------------------------------+
| Box Name | Syntax                  | Buttons       | Return Value             |
+----------+-------------------------+---------------+--------------------------+
| 1. Alert | alert("Message");       | [OK]          | undefined (कोई मान नहीं) |
| 2. Confirm| confirm("Are you sure?")| [OK] [Cancel] | true (OK) / false (Cancel)|
| 3. Prompt| prompt("Enter name:","")| [OK] [Cancel] | Entered String / null    |
+-------------------------------------------------------------------------------+
```

```javascript
// Examples:
alert("Welcome to O Level Exam!");
let userChoice = confirm("Do you want to delete this file?");
let studentName = prompt("Please enter your name:", "Guest");
```

---

# 6. JavaScript Events (जावास्क्रिप्ट इवेंट्स)

जब यूजर वेबपेज पर कोई क्रिया (Action) करता है, तो **Event** ट्रिगर होता है।

| Event Name | Trigger Condition (कब घटित होता है) | Example Usage |
|:---|:---|:---|
| **`onclick`** | जब यूजर किसी एलिमेंट पर माउस से क्लिक करता है | `<button onclick="calculate()">Submit</button>` |
| **`ondblclick`**| जब यूजर डबल-क्लिक करता है | `<p ondblclick="zoom()">Zoom</p>` |
| **`onload`** | जब वेबपेज ब्राउज़र में पूरी तरह लोड हो जाता है | `<body onload="welcomeUser()">` |
| **`onchange`** | जब ड्रॉप-डाउन या इनपुट की वैल्यू बदलती है | `<select onchange="filterCity()">` |
| **`onsubmit`** | जब फॉर्म सबमिट बटन पर क्लिक किया जाता है | `<form onsubmit="return validateForm()">` |
| **`onmouseover`**| जब माउस कर्सर एलिमेंट के ऊपर आता है | `<img onmouseover="enlarge()" ...>` |
| **`onmouseout`**| जब माउस कर्सर एलिमेंट से बाहर जाता है | `<img onmouseout="resetSize()" ...>` |
| **`onfocus`** | जब इनपुट फील्ड एक्टिव (फोकस्ड) होती है | `<input onfocus="highlightField(this)">` |
| **`onblur`** | जब कर्सर इनपुट फील्ड से बाहर चला जाता है | `<input onblur="checkEmpty(this)">` |

---

# 7. JavaScript Form Validations (फॉर्म वैलिडेशन)

फॉर्म सबमिट करने से पहले क्लाइंट साइड पर डेटा चेक करने का क्लासिक उदाहरण:

```html
<form name="regForm" onsubmit="return validateForm()" action="success.html">
  Name: <input type="text" name="uname" id="uname"><br>
  Mobile: <input type="text" name="phone" id="phone"><br>
  <input type="submit" value="Register">
</form>

<script>
function validateForm() {
  let name = document.forms["regForm"]["uname"].value;
  let phone = document.forms["regForm"]["phone"].value;

  // Check 1: Name should not be empty
  if (name.trim() === "") {
    alert("Error: Name field cannot be empty!");
    document.getElementById("uname").focus();
    return false; // Form will NOT submit
  }

  // Check 2: Mobile must be 10 digits and numbers only
  if (isNaN(phone) || phone.length !== 10) {
    alert("Error: Please enter a valid 10-digit mobile number!");
    document.getElementById("phone").focus();
    return false;
  }

  return true; // All valid -> form submits successfully
}
</script>
```

---

# 8. Introduction to AngularJS (एंगुलरजेएस का परिचय)

### 8.1 What is AngularJS?
- **Definition:** AngularJS एक ओपन-सोर्स **JavaScript-based Front-End Web Application Framework** है जिसे **Google** द्वारा मेंटेन किया जाता है।
- **Creator:** **Miško Hevery** and **Adam Abrons** in **2009**.
- **Architecture:** यह **MVC (Model-View-Controller)** और **MVVM (Model-View-ViewModel)** डिजाइन पैटर्न पर काम करता है।
- **Core Power:** यह HTML को **Directives** द्वारा एक्सटेंड करता है और **Two-Way Data Binding** प्रदान करता है।

```
+-------------------------------------------------------------------------------+
|                       MVC ARCHITECTURE IN ANGULARJS                           |
+-------------------------------------------------------------------------------+
| 1. Model      : वास्तविक डेटा और बिजनेस लॉजिक (JavaScript Objects / $scope)  |
| 2. View       : यूजर को स्क्रीन पर दिखने वाला HTML UI (Directives & Expressions|
| 3. Controller : Model और View के बीच का मैनेजर जो डेटा को प्रोसेस करता है     |
+-------------------------------------------------------------------------------+
```

---

# 9. AngularJS Expressions & Directives (एक्सप्रेशन्स और डायरेक्टिव्स)

### 9.1 AngularJS Expressions (`{{ }}`)
- AngularJS में एक्सप्रेशन्स को **डबल कर्ली ब्रेसिज़ `{{ expression }}`** के अंदर लिखा जाता है।
- यह एक्सप्रेशन को प्रोसेस करके उसका परिणाम सीधे HTML में प्रिंट करता है।
```html
<p>Total Cost: {{ 50 * 4 }}</p>            <!-- Output: Total Cost: 200 -->
<p>Full Name: {{ firstName + " " + lastName }}</p>
```

---

### 9.2 Core AngularJS Directives (प्रमुख डायरेक्टिव्स — `ng-` से शुरू होते हैं)

| Directive Name | Purpose & Working (उद्देश्य एवं कार्य) |
|:---|:---|
| **`ng-app`** | AngularJS एप्लिकेशन का **रूट एलिमेंट (Root Element)** परिभाषित करता है और ऑटो-बूटस्ट्रैप करता है। |
| **`ng-model`** | HTML इनपुट कंट्रोल्स (text, checkbox, select) के डेटा को मॉडल वेरिएबल से **Two-Way Bind** करता है। |
| **`ng-bind`** | HTML एलिमेंट के इनर टेक्स्ट को एक्सप्रेशन के मान से बदलता है (`{{ }}` का विकल्प). |
| **`ng-init`** | AngularJS एप्लिकेशन के वेरिएबल्स का प्रारंभिक मान (Initial Values) सेट करता है। |
| **`ng-repeat`** | ऐरे (Array) या लिस्ट के हर आइटम के लिए HTML एलिमेंट को बार-बार दोहराता (Loop) है। |
| **`ng-show`** | यदि एक्सप्रेशन `true` हो तो एलिमेंट को दिखाता है, `false` पर छिपाता है। |
| **`ng-hide`** | यदि एक्सप्रेशन `true` हो तो एलिमेंट को छिपाता है। |
| **`ng-click`** | बटन या एलिमेंट पर क्लिक होने पर AngularJS फंक्शन कॉल करता है। |

---

# 10. Complete Working Examples of AngularJS

### Example 1: Instant Two-Way Data Binding with `ng-app` & `ng-model`
```html
<!DOCTYPE html>
<html>
<head>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
</head>
<body ng-app="">
  <h3>AngularJS Two-Way Data Binding Demo</h3>
  <p>Enter Your Name: <input type="text" ng-model="userName"></p>
  <!-- जैसे-जैसे यूजर टाइप करेगा, नीचे तुरंत लाइव अपडेट होगा -->
  <h4>Hello, <span style="color: blue;">{{ userName }}</span>! Welcome to O Level.</h4>
</body>
</html>
```

### Example 2: Iterating Arrays with `ng-repeat` and `ng-init`
```html
<div ng-app="" ng-init="modules=['M1-R5.1 IT Tools', 'M2-R5.1 Web Design', 'M3-R5.1 Python', 'M4-R5.1 IoT']">
  <h3>NIELIT O Level Modules:</h3>
  <ul>
    <li ng-repeat="x in modules">{{ x }}</li>
  </ul>
</div>
```

### Example 3: AngularJS Module, Controller & `$scope`
```html
<div ng-app="myApp" ng-controller="myCtrl">
  <h2>Student Card: {{ name }}</h2>
  <p>Module: {{ module }}</p>
  <p>Marks: {{ marks }}</p>
</div>

<script>
// 1. Module बनाना
var app = angular.module("myApp", []);

// 2. Controller बनाना ($scope डेटा को व्यू से जोड़ता है)
app.controller("myCtrl", function($scope) {
  $scope.name = "Saurabh Tiwari";
  $scope.module = "M2-R5.1 Web Designing & Publishing";
  $scope.marks = 95;
});
</script>
```

---

# 🔥 NIELIT Exam Quick Revision Points (गोल्डन प्वाइंट्स)

1. JavaScript केस-सेंसिटिव (Case-Sensitive) भाषा है, यानी `myVar` और `myvar` दो अलग-अलग वेरिएबल्स हैं।
2. `5 == "5"` **True** रिटर्न करता है (Type Coercion), जबकि `5 === "5"` **False** रिटर्न करता है (Strict Type Check)।
3. `typeof NaN` का मान **`"number"`** और `typeof null` का मान **`"object"`** होता है।
4. `confirm()` बॉक्स **`true`** या **`false`** रिटर्न करता है, जबकि `prompt()` यूजर का इनपुट स्ट्रिंग रिटर्न करता है।
5. AngularJS डायरेक्टिव्स हमेशा **`ng-`** प्रीफिक्स से शुरू होते हैं (जैसे `ng-app`, `ng-model`).
6. AngularJS में एक्सप्रेशन्स **`{{ }}`** के अंदर लिखे जाते हैं।
7. AngularJS को **Google** द्वारा मेंटेन किया जाता है और यह **MVC** आर्किटेक्चर पर आधारित है।
8. `$scope` ऑब्जेक्ट View (HTML) और Controller (JavaScript Logic) के बीच गोंद (Glue/Bridge) का कार्य करता है।
