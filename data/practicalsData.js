// Practical Lab Workbook for O-Level M2-R5.1

export const practicalsData = [
  {
    id: "practical-html-table",
    unit: 3,
    title: "Practical 1: Designing an Academic Time Table using HTML Tables",
    hindiTitle: "प्रैक्टिकल 1: HTML टेबल्स का उपयोग कर टाइम टेबल बनाना",
    objective: "Create a well-structured academic timetable demonstrating border, cellpadding, cellspacing, rowspan, and colspan attributes.",
    requirements: ["HTML5", "Code Editor (Notepad++ / Sublime)", "Web Browser"],
    difficulty: "Medium",
    hoursAllocated: 2,
    steps: [
      "Create a new file named `timetable.html`.",
      "Add the standard HTML5 doctype and head section.",
      "Create a <table> with border='1', cellpadding='8', and cellspacing='0'.",
      "Use <th> for header days and period numbers.",
      "Use `rowspan` to merge lunch break across all 5 weekdays.",
      "Use `colspan` for Saturday special project activity."
    ],
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Class Time Table</title>
  <style>
    table { width: 100%; border-collapse: collapse; text-align: center; }
    th { background-color: #0284c7; color: white; padding: 10px; }
    td { padding: 8px; border: 1px solid #cbd5e1; }
    .break { background-color: #fef08a; font-weight: bold; }
  </style>
</head>
<body>
  <h2>NIELIT O-Level Weekly Schedule</h2>
  <table border="1">
    <tr>
      <th>Day</th>
      <th>09:00 - 10:30</th>
      <th>10:30 - 12:00</th>
      <th>12:00 - 01:00</th>
      <th>01:00 - 03:00</th>
    </tr>
    <tr>
      <td><b>Monday</b></td>
      <td>HTML Basics</td>
      <td>CSS Styling</td>
      <td rowspan="5" class="break">L<br>U<br>N<br>C<br>H</td>
      <td>Web Practical Lab</td>
    </tr>
    <tr>
      <td><b>Tuesday</b></td>
      <td>CSS Framework</td>
      <td>W3.CSS Grid</td>
      <td>Responsive Lab</td>
    </tr>
    <tr>
      <td><b>Wednesday</b></td>
      <td>JavaScript</td>
      <td>JS Validations</td>
      <td>JS Coding Lab</td>
    </tr>
    <tr>
      <td><b>Thursday</b></td>
      <td>AngularJS</td>
      <td>Photo Editing</td>
      <td>GIMP / Photoshop</td>
    </tr>
    <tr>
      <td><b>Friday</b></td>
      <td>Web Publishing</td>
      <td>HTTP & Hosting</td>
      <td>FTP Deployment</td>
    </tr>
    <tr>
      <td><b>Saturday</b></td>
      <td colspan="4" style="background:#e2e8f0; font-weight:bold;">
        Full Module M2-R5.1 Comprehensive Project & Viva
      </td>
    </tr>
  </table>
</body>
</html>`,
    expectedOutput: "A responsive table with 6 columns, a 5-row merged vertical Lunch column, and a full-width merged Saturday row."
  },
  {
    id: "practical-html5-form",
    unit: 3,
    title: "Practical 2: Student Registration Form with HTML5 Validations",
    hindiTitle: "प्रैक्टिकल 2: HTML5 वैलिडेशन युक्त छात्र पंजीकरण फॉर्म",
    objective: "Build an interactive student registration form with modern input types, required, pattern, and autofocus attributes.",
    requirements: ["HTML5", "Notepad++ / Sublime"],
    difficulty: "Medium",
    hoursAllocated: 3,
    steps: [
      "Use `<form>` with `method='POST'`.",
      "Include text input with `autofocus` and `required`.",
      "Include `<input type='email'>` for browser-enforced email format check.",
      "Include `<input type='tel'>` with `pattern='[0-9]{10}'` for 10-digit mobile check.",
      "Add radio buttons for gender with common `name` attribute.",
      "Add checkboxes for hobbies and a `<select>` dropdown for exam center.",
      "Add Submit and Reset buttons."
    ],
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Student Admission Form</title>
  <style>
    body { font-family: sans-serif; background: #f1f5f9; padding: 20px; }
    .card { max-width: 500px; margin: auto; background: white; padding: 25px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
    .form-group { margin-bottom: 15px; }
    label { display: block; font-weight: bold; margin-bottom: 5px; }
    input[type="text"], input[type="email"], input[type="tel"], select {
      width: 100%; padding: 8px; border: 1px solid #94a3b8; border-radius: 4px; box-sizing: border-box;
    }
    .btn { background: #2563eb; color: white; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer; }
    .btn-reset { background: #64748b; }
  </style>
</head>
<body>
  <div class="card">
    <h2>NIELIT O-Level Registration</h2>
    <form action="#" method="POST">
      <div class="form-group">
        <label for="name">Candidate Name *</label>
        <input type="text" id="name" name="student_name" required autofocus placeholder="Enter full name">
      </div>
      <div class="form-group">
        <label for="email">Email Address *</label>
        <input type="email" id="email" name="student_email" required placeholder="student@example.com">
      </div>
      <div class="form-group">
        <label for="phone">Mobile (10 Digits) *</label>
        <input type="tel" id="phone" name="student_phone" pattern="[0-9]{10}" required placeholder="9876543210">
      </div>
      <div class="form-group">
        <label>Gender *</label>
        <label><input type="radio" name="gender" value="male" required> Male</label>
        <label><input type="radio" name="gender" value="female"> Female</label>
      </div>
      <div class="form-group">
        <label for="city">Exam Center City</label>
        <select id="city" name="exam_city">
          <option value="delhi">New Delhi</option>
          <option value="lucknow">Lucknow</option>
          <option value="patna">Patna</option>
          <option value="varanasi">Varanasi</option>
        </select>
      </div>
      <button type="submit" class="btn">Register Candidate</button>
      <button type="reset" class="btn btn-reset">Clear Form</button>
    </form>
  </div>
</body>
</html>`,
    expectedOutput: "A clean card with automatic validation prevents invalid submission, highlights required fields, and validates 10 digits."
  },
  {
    id: "practical-css-menu-gallery",
    unit: 4,
    title: "Practical 3: Designing a Responsive Navigation Menu & CSS Image Gallery",
    hindiTitle: "प्रैक्टिकल 3: CSS नेविगेशन मेन्यू एवं रिस्पॉन्सिव इमेज गैलरी",
    objective: "Create a horizontal navigation bar with dropdown and a CSS flexbox image gallery with zoom-on-hover effects.",
    requirements: ["HTML5", "CSS3"],
    difficulty: "Medium",
    hoursAllocated: 3,
    steps: [
      "Use `<ul>` for menu and remove default bullets with `list-style: none`.",
      "Float items or use `display: inline-block`.",
      "Add `:hover` pseudo-class for color transition.",
      "Create image gallery container with flexbox or grid.",
      "Apply `transform: scale(1.05)` and `transition: 0.3s` on hover."
    ],
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS Menu & Gallery</title>
  <style>
    body { font-family: sans-serif; margin: 0; background: #0f172a; color: white; }
    nav { background: #1e293b; padding: 12px 24px; }
    nav ul { list-style: none; margin: 0; padding: 0; display: flex; gap: 20px; }
    nav a { color: #94a3b8; text-decoration: none; font-weight: bold; transition: color 0.2s; }
    nav a:hover { color: #38bdf8; }
    .gallery { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; padding: 24px; }
    .card { background: #1e293b; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.3); transition: transform 0.3s; }
    .card:hover { transform: translateY(-6px); }
    .card img { width: 100%; height: 160px; object-fit: cover; }
    .caption { padding: 12px; font-size: 14px; text-align: center; }
  </style>
</head>
<body>
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Syllabus</a></li>
      <li><a href="#">Gallery</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
  <div class="gallery">
    <div class="card"><div style="background:#0284c7;height:160px;"></div><div class="caption">HTML5 Basics</div></div>
    <div class="card"><div style="background:#0d9488;height:160px;"></div><div class="caption">CSS3 Box Model</div></div>
    <div class="card"><div style="background:#d97706;height:160px;"></div><div class="caption">JavaScript Logic</div></div>
    <div class="card"><div style="background:#7c3aed;height:160px;"></div><div class="caption">AngularJS Directives</div></div>
  </div>
</body>
</html>`,
    expectedOutput: "A modern dark-mode navigation bar and smooth lift-on-hover card grid."
  },
  {
    id: "practical-w3css-grid",
    unit: 5,
    title: "Practical 4: Responsive Institute Webpage using W3.CSS Grid",
    hindiTitle: "प्रैक्टिकल 4: W3.CSS ग्रिड का उपयोग कर रिस्पॉन्सिव वेबपेज",
    objective: "Master W3.CSS 12-column responsive layout using w3-row, w3-col, s, m, l classes, and containers.",
    requirements: ["W3.CSS CDN", "HTML5"],
    difficulty: "Easy",
    hoursAllocated: 2,
    steps: [
      "Include W3.CSS via CDN link.",
      "Create header with `w3-container w3-teal`.",
      "Create 3-column layout using `w3-row` and `w3-col s12 m4`.",
      "Use `w3-card-4` and `w3-panel` for courses.",
      "Create footer with `w3-container w3-dark-grey`."
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
  <title>NIELIT Study Center</title>
</head>
<body>
  <div class="w3-container w3-teal w3-center w3-padding-32">
    <h1>NIELIT Computer Center</h1>
    <p>Empowering Students with Digital Literacy</p>
  </div>

  <div class="w3-row-padding w3-margin-top">
    <div class="w3-col s12 m4">
      <div class="w3-card-4 w3-padding">
        <h3>M1-R5.1: IT Tools</h3>
        <p>Computer Fundamentals, LibreOffice, Operating Systems & Networks.</p>
        <button class="w3-button w3-blue w3-round">View Course</button>
      </div>
    </div>
    <div class="w3-col s12 m4">
      <div class="w3-card-4 w3-padding">
        <h3>M2-R5.1: Web Design</h3>
        <p>HTML5, CSS, W3.CSS, JavaScript, AngularJS & Web Publishing.</p>
        <button class="w3-button w3-teal w3-round">View Course</button>
      </div>
    </div>
    <div class="w3-col s12 m4">
      <div class="w3-card-4 w3-padding">
        <h3>M3-R5.1: Python</h3>
        <p>Programming Logic, Algorithms, Data Structures in Python.</p>
        <button class="w3-button w3-indigo w3-round">View Course</button>
      </div>
    </div>
  </div>

  <footer class="w3-container w3-dark-grey w3-center w3-margin-top w3-padding-16">
    <p>© 2026 NIELIT O-Level Study Hub</p>
  </footer>
</body>
</html>`,
    expectedOutput: "A responsive website that stacks vertically on mobile devices (s12) and spans 3 equal columns on tablets and desktops (m4)."
  },
  {
    id: "practical-js-validation",
    unit: 6,
    title: "Practical 5: Client-Side Form Validation in JavaScript",
    hindiTitle: "प्रैक्टिकल 5: जावास्क्रिप्ट में क्लाइंट-साइड फॉर्म वैलिडेशन",
    objective: "Validate user inputs before form submission: check empty fields, password length, and matching confirm password.",
    requirements: ["JavaScript", "HTML5"],
    difficulty: "Hard",
    hoursAllocated: 3,
    steps: [
      "Attach `onsubmit=\"return validateForm()\"` to form.",
      "Extract field values using `document.getElementById()`.",
      "Check if username is empty; if so, show error and return `false`.",
      "Check if password length is at least 6 characters.",
      "Check if password equals confirm password.",
      "If all checks pass, return `true`."
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <title>JS Form Validation</title>
  <style>
    .error { color: #dc2626; font-size: 13px; margin-top: 4px; }
    .box { max-width: 400px; margin: 30px auto; padding: 20px; border: 1px solid #ccc; font-family: sans-serif; }
    input { width: 100%; padding: 8px; margin-top: 4px; box-sizing: border-box; }
  </style>
</head>
<body>
  <div class="box">
    <h3>Create Student Account</h3>
    <form onsubmit="return validateForm()">
      <div>
        <label>Username:</label>
        <input type="text" id="uname">
        <div id="errName" class="error"></div>
      </div>
      <div style="margin-top:10px;">
        <label>Password (min 6 chars):</label>
        <input type="password" id="pass">
        <div id="errPass" class="error"></div>
      </div>
      <div style="margin-top:10px;">
        <label>Confirm Password:</label>
        <input type="password" id="cpass">
        <div id="errCpass" class="error"></div>
      </div>
      <button type="submit" style="margin-top:15px; padding:8px 16px;">Sign Up</button>
    </form>
  </div>

  <script>
    function validateForm() {
      var name = document.getElementById("uname").value.trim();
      var pass = document.getElementById("pass").value;
      var cpass = document.getElementById("cpass").value;
      var isValid = true;

      document.getElementById("errName").innerHTML = "";
      document.getElementById("errPass").innerHTML = "";
      document.getElementById("errCpass").innerHTML = "";

      if (name === "") {
        document.getElementById("errName").innerHTML = "Username cannot be empty!";
        isValid = false;
      }
      if (pass.length < 6) {
        document.getElementById("errPass").innerHTML = "Password must be at least 6 characters!";
        isValid = false;
      }
      if (pass !== cpass) {
        document.getElementById("errCpass").innerHTML = "Passwords do not match!";
        isValid = false;
      }
      return isValid;
    }
  </script>
</body>
</html>`,
    expectedOutput: "The script intercepts form submission, dynamically prints error messages under relevant inputs, and only submits if all criteria pass."
  }
];

export const masterPracticals = practicalsData;
