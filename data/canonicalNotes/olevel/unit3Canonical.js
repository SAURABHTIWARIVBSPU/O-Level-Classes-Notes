// Unit 3: HTML Basics & HTML5 - Tutorial & Textbook Grade Content for NIELIT O-Level M2-R5.1
export function getUnit3Canonical() {
  return {
    unitNumber: 3,
    title: "HTML Basics & HTML5",
    officialSection: "16.6 (iii)",
    totalHours: 25,
    theoryHours: 10,
    practicalHours: 15,
    introduction: "Hypertext Markup Language (HTML) is the universal foundational markup language used to structure web pages on the World Wide Web. First standardized by Sir Tim Berners-Lee in 1991 and evolved to the HTML5 living standard by WHATWG and W3C, HTML uses tags and attributes to define the semantic structure of digital documents. This unit covers the complete HTML document anatomy, head elements, text formatting tags, div and pre containers, hyperlinks and named bookmark anchors, image attributes, data tables with rowspan and colspan, ordered/unordered/definition lists, interactive form controls, iframes, HTML5 semantic layout elements (header, nav, main, article, section, aside, footer), native audio/video multimedia players, and HTML5 client-side form validation attributes.",
    whatYouWillLearn: [
      "The historical evolution and core syntax of HTML and HTML5.",
      "The fundamental HTML document structure: `<!DOCTYPE html>`, `<html>`, `<head>`, and `<body>`.",
      "Head section elements: `<title>`, `<meta charset='UTF-8'>`, viewport configuration, `<link>`, and `<style>`.",
      "Text formatting tags: bold, italic, underline, strikethrough, superscript, subscript, and marked text.",
      "Structural division containers: Block-level `<div>` versus inline `<span>` and preformatted `<pre>`.",
      "Hyperlinks: Absolute vs relative URLs, target attributes (`_blank`), and named in-page bookmark anchors.",
      "Image embedding: `<img>` tag attributes (`src`, `alt`, `width`, `height`, accessibility).",
      "Data tables: `<table>`, `<tr>`, `<th>`, `<td>`, cell borders, `cellpadding`, `cellspacing`, `rowspan`, and `colspan`.",
      "Lists: Ordered lists (`<ol>`), Unordered bulleted lists (`<ul>`), and Description lists (`<dl>`, `<dt>`, `<dd>`).",
      "Forms & Inputs: `<form>` action/method (GET vs POST), text, password, textarea, select dropdowns, radio, checkbox, submit, and reset.",
      "HTML5 semantic structural tags (`<section>`, `<nav>`, `<article>`, `<aside>`, `<header>`, `<footer>`).",
      "Native HTML5 multimedia: `<audio controls>`, `<video controls>`, and `<embed>` objects.",
      "HTML5 form validations: `required`, `pattern` (regex), `autofocus`, and specialized input types (`email`, `number`, `date`, `range`)."
    ],
    topics: [
      {
        code: "3.1",
        title: "HTML Introduction",
        whatIsIt: "HTML stands for **Hypertext Markup Language**. It is the standard markup language used to design the structural skeleton of web pages rendered by web browsers.",
        whyImportant: "Every single webpage on the internet, from simple personal blogs to complex enterprise web apps, relies on HTML as its structural foundation.",
        howItWorks: "HTML is NOT a programming language (it has no variables or loops); it is a **Markup Language** composed of tags that instruct web browsers how to format and display text, images, and media.",
        componentsTitle: "DECODING THE ACRONYM 'HTML'",
        componentsOrTypes: [
          "Hypertext: Text containing clickable links (hyperlinks) that navigate users to other digital documents or locations on the Web.",
          "Markup: Annotating plain text with standardized tags (e.g. `<p>`, `<h1>`, `<b>`) to define headings, paragraphs, lists, and tables.",
          "Language: A defined syntax specification understood and rendered universally by all web browsers.",
          "Inventor: Invented by Sir Tim Berners-Lee at CERN in 1991; current standard maintained by W3C and WHATWG."
        ],
        practicalExample: "A plain text file displays raw words in a single block. By surrounding words with HTML tags: `<h1>O-Level Notes</h1>` turns the text into a bold headline, while `<a href=\"syllabus.html\">Click Here</a>` turns plain text into a clickable blue hyperlink.",
        importantPoints: [
          "HTML stands for Hypertext Markup Language.",
          "HTML is a markup language, not a programming language.",
          "HTML tags are enclosed within angle brackets `< >`.",
          "Most HTML tags work in pairs: an opening tag `<tag>` and a closing tag `</tag>`."
        ],
        quickRevision: "HTML is the standard markup language of the web. It uses tags in angle brackets to give structure to text, images, and links."
      },
      {
        code: "3.2",
        title: "Basic Structure of HTML",
        whatIsIt: "The basic structure of an HTML document is the mandatory hierarchical skeleton required for all valid HTML5 web pages.",
        whyImportant: "Missing the basic structure causes browsers to enter 'Quirks Mode', leading to inconsistent layout rendering, broken CSS, and poor SEO indexing.",
        howItWorks: "The document begins with the `<!DOCTYPE html>` declaration, followed by the root `<html>` element enclosing two major sections: `<head>` (metadata) and `<body>` (visible content).",
        codeSnippet: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document Title</title>
</head>
<body>
    <h1>Welcome to My Webpage</h1>
    <p>This visible content appears inside the browser viewport.</p>
</body>
</html>`,
        componentsTitle: "CORE STRUCTURAL ELEMENTS BREAKDOWN",
        componentsOrTypes: [
          "`<!DOCTYPE html>`: Tells the browser the document is written in modern HTML5. Must be on line 1.",
          "`<html lang=\"en\">`: The root element enclosing all other HTML tags on the page; `lang` specifies the primary human language.",
          "`<head>`: Contains metadata, character encodings, title, stylesheets, and scripts (invisible to users).",
          "`<body>`: Contains all visible user-facing content (headings, paragraphs, images, tables, forms)."
        ],
        practicalExample: "Open Notepad, paste the code structure above, save as `my-page.html`, and double-click the file. Your browser window opens: the tab displays 'Document Title', and the white screen renders the large heading and paragraph.",
        importantPoints: [
          "`<!DOCTYPE html>` is not an HTML tag; it is a document type declaration instructing the browser to use HTML5.",
          "`<html>` is the root element of every HTML document.",
          "Visible webpage content must reside entirely inside the `<body>` element."
        ],
        quickRevision: "HTML structure: `<!DOCTYPE html>` -> `<html>` root -> `<head>` (metadata/title) + `<body>` (visible content)."
      },
      {
        code: "3.3",
        title: "Head Section and Elements of Head Section",
        whatIsIt: "The `<head>` section is a container for metadata (data about data) and document configuration resources that are not displayed directly on the webpage canvas.",
        whyImportant: "Head elements configure character encodings, page titles in browser tabs, mobile responsiveness, search engine SEO tags, and external CSS/JS file links.",
        howItWorks: "Browsers parse the `<head>` section first before rendering the `<body>`, loading critical stylesheets and font assets to prevent page flashes.",
        tableTitle: "CORE ELEMENTS OF THE HTML HEAD SECTION",
        table: {
          headers: ["Tag Name", "Syntax Format", "Functional Role in Web Documents"],
          rows: [
            ["`<title>`", "<title>Page Title</title>", "Mandatory; sets the title text displayed on the browser tab and search results"],
            ["`<meta charset>`", "<meta charset=\"UTF-8\">", "Declares character encoding supporting international characters and emojis"],
            ["`<meta viewport>`", "<meta name=\"viewport\" content=\"...\">", "Configures mobile device screen scaling for Responsive Web Design"],
            ["`<link>`", "<link rel=\"stylesheet\" href=\"style.css\">", "Links external resource files (CSS stylesheets, favicon icons)"],
            ["`<style>`", "<style> body { color: red; } </style>", "Embeds internal CSS styling rules directly within the document"],
            ["`<script>`", "<script src=\"app.js\"></script>", "Loads or embeds executable JavaScript code"]
          ],
          colWidths: [110, 190, 211]
        },
        practicalExample: "Without `<title>`, your browser tab shows the ugly filename `C:/users/desktop/page.html`. Adding `<title>NIELIT O-Level Result Portal</title>` makes the browser tab and Google search results display the professional official title.",
        importantPoints: [
          "The `<title>` tag is mandatory inside `<head>` for every valid HTML document.",
          "`<meta charset=\"UTF-8\">` enables universal multi-language character encoding.",
          "`<link>` is an empty self-closing tag used to connect external CSS files."
        ],
        quickRevision: "The `<head>` stores metadata: `<title>` (browser tab name), `<meta>` (encodings/viewport), `<link>` (external CSS), and `<script>` (JavaScript)."
      },
      {
        code: "3.4",
        title: "Formatting Tags: Bold, Italic, Underline, Strikethrough",
        whatIsIt: "Formatting tags are inline HTML elements used to adjust text styling and semantic visual importance in body text.",
        whyImportant: "Formatted text guides reader attention, emphasizes important terms, marks deleted corrections, and provides screen readers with semantic cues.",
        howItWorks: "Text wrapped within inline formatting tags is rendered with specific typographical styles without creating new paragraphs or line breaks.",
        tableTitle: "HTML TEXT FORMATTING TAGS SPECIFICATION",
        table: {
          headers: ["Tag Pair", "Semantic Meaning & Visual Appearance", "Modern Semantic Partner", "Practical Use Case"],
          rows: [
            ["`<b>...</b>`", "Displays text in **Bold** face (visual only)", "`<strong>` (Semantic strong importance)", "Highlighting key exam terms or names"],
            ["`<i>...</i>`", "Displays text in *Italic* slanted face (visual only)", "`<em>` (Semantic emphasized tone)", "Technical terms, foreign phrases, thoughts"],
            ["`<u>...</u>`", "Displays text with an underline", "`<ins>` (Inserted document text)", "Underlining book titles or document references"],
            ["`<s>...</s>`", "Displays text with a horizontal strikethrough line", "`<del>` (Deleted document text)", "Showing discounted original prices (e.g. ~₹500~ ₹300)"],
            ["`<sup>...</sup>`", "Displays Superscript text above baseline in smaller font", "No partner", "Mathematical powers (x<sup>2</sup>) and dates (15<sup>th</sup>)"],
            ["`<sub>...</sub>`", "Displays Subscript text below baseline in smaller font", "No partner", "Chemical chemical formulas (H<sub>2</sub>O, CO<sub>2</sub>)"],
            ["`<mark>...</mark>`", "Displays text highlighted with a bright yellow background", "No partner", "Marking search result keywords in text"]
          ],
          colWidths: [90, 150, 130, 141]
        },
        codeSnippet: `<p>Water chemical formula: H<sub>2</sub>O</p>
<p>Algebra quadratic equation: x<sup>2</sup> + y<sup>2</sup> = z<sup>2</sup></p>
<p>Original price: <del>₹1,000</del> <strong>Special Price: ₹699</strong></p>`,
        practicalExample: "In an e-commerce store: Write `<p>MRP: <del>₹999</del> <strong>Sale Price: ₹499</strong></p>`. The old price is crossed out, and the discounted price is emphasized in bold.",
        importantPoints: [
          "`<b>` and `<i>` are presentational; `<strong>` and `<em>` carry semantic meaning for accessibility.",
          "`<sup>` renders superscript text (e.g. x²); `<sub>` renders subscript text (e.g. H₂O).",
          "`<del>` displays strikethrough text representing deleted content; `<mark>` highlights text in yellow."
        ],
        quickRevision: "Formatting tags: `<b>`/`<strong>` (bold), `<i>`/`<em>` (italic), `<u>` (underline), `<s>`/`<del>` (strikethrough), `<sup>` (powers x²), `<sub>` (chemistry H₂O)."
      },
      {
        code: "3.5",
        title: "Div Tag",
        whatIsIt: "The `<div>` tag (short for Division) is a generic block-level container element used to group related HTML elements together for styling and layout structuring.",
        whyImportant: "`<div>` is the most widely used structural container in web design, serving as the foundational building block for grid cards, navigation bars, and layout sections.",
        howItWorks: "`<div>` has zero visual appearance on its own. It starts on a new line and takes up the full available width of its parent container. Developers attach CSS classes to style it.",
        codeSnippet: `<!-- Grouping elements with a div container -->
<div class="profile-card">
    <h2>Saurabh Tiwari</h2>
    <p>Senior Web Development Instructor</p>
    <a href="contact.html">Send Message</a>
</div>`,
        componentsTitle: "KEY CHARACTERISTICS OF THE DIV TAG",
        componentsOrTypes: [
          "Block-Level Element: Always starts on a new line and spans 100% of the available width.",
          "Zero Semantic Meaning: Purely a layout division container (unlike HTML5 `<section>` or `<article>`).",
          "Styling Anchor: Acts as the primary target for CSS styling (`class=\"card\"`) and JavaScript DOM manipulation (`id=\"main-box\"`).",
          "`<div>` vs `<span>`: `<div>` is a block-level container for grouping large sections; `<span>` is an inline container for styling small words inside a sentence."
        ],
        practicalExample: "To create a shaded card with 3 buttons and a title: Wrap all of them inside `<div class=\"card\">`. In CSS, apply `border: 1px solid #ccc; background: #f9f9f9; padding: 20px;`. All grouped elements instantly gain the unified card background.",
        importantPoints: [
          "`<div>` is a block-level generic container element.",
          "`<div>` always begins on a new line and occupies the full width of its parent.",
          "`<div>` is used extensively with CSS classes to create layout sections."
        ],
        quickRevision: "The `<div>` tag is a block-level container used to group elements together for CSS styling and layout structuring. It always begins on a new line."
      },
      {
        code: "3.6",
        title: "Pre Tag",
        whatIsIt: "The `<pre>` tag (short for Preformatted Text) is a block-level element that preserves both whitespace spaces and line breaks exactly as typed in the HTML source code.",
        whyImportant: "Standard HTML collapses multiple consecutive spaces into a single space and ignores keyboard `Enter` line breaks. The `<pre>` tag bypasses this whitespace collapsing.",
        howItWorks: "Browsers render text inside `<pre>` using a fixed-width **monospace font** (such as Courier or Consolas) and preserve every space, tab, and carriage return verbatim.",
        codeSnippet: `<!-- Preserving formatting with the pre tag -->
<pre>
Line 1: Item       Price     Quantity
Line 2: Keyboard   $25.00    2
Line 3: Mouse      $15.00    3
</pre>`,
        componentsTitle: "PRE TAG VS. STANDARD PARAGRAPH COMPARISON",
        componentsOrTypes: [
          "Standard `<p>` Behavior: Multiple spaces like `Hello         World` collapse into `Hello World`. Line breaks are ignored unless `<br>` is typed.",
          "`<pre>` Behavior: Every space bar hit and `Enter` key stroke is rendered faithfully on screen.",
          "Default Typography: Rendered in monospace font where all characters have identical horizontal width.",
          "Common Applications: Displaying programming source code snippets, ASCII art, and terminal command outputs."
        ],
        practicalExample: "If you type a Python code snippet inside `<p>`, all indentation disappears and lines run together. Typing it inside `<pre><code>...</code></pre>` preserves every indentation space and line break perfectly.",
        importantPoints: [
          "`<pre>` stands for Preformatted Text.",
          "`<pre>` preserves both extra spaces and line breaks without requiring `<br>` tags.",
          "Text inside `<pre>` is rendered in a monospace font by default."
        ],
        quickRevision: "`<pre>` renders preformatted text in a monospace font, preserving all spaces, tabs, and line breaks exactly as typed in the source code."
      },
      {
        code: "3.7",
        title: "Anchor Links and Named Anchors",
        whatIsIt: "The `<a>` (Anchor) tag creates hyperlinks that connect the current document to other web pages, external websites, files, email addresses, or specific bookmark sections within the same page.",
        whyImportant: "Hyperlinks are the core foundational mechanism of the World Wide Web, transforming static standalone documents into an interconnected global web of information.",
        howItWorks: "The `href` (Hypertext Reference) attribute specifies the target destination URL. Clicking the anchor triggers the browser to navigate to that address.",
        codeSnippet: `<!-- 1. External link opening in new tab -->
<a href="https://nielit.gov.in" target="_blank">Visit Official NIELIT Portal</a>

<!-- 2. Internal relative link -->
<a href="about.html">About Us</a>

<!-- 3. Named bookmark anchor (in-page jumping) -->
<a href="#syllabus-section">Jump to Syllabus</a>
...
<h2 id="syllabus-section">Official Syllabus Content</h2>`,
        tableTitle: "CORE ATTRIBUTES OF THE ANCHOR TAG",
        table: {
          headers: ["Attribute Name", "Syntax Example", "Function & Behavioral Impact"],
          rows: [
            ["`href`", "href=\"https://example.com\"", "Mandatory; specifies the target URL destination of the link"],
            ["`target=\"_blank\"`", "target=\"_blank\"", "Forces the link to open in a **New browser tab or window**"],
            ["`target=\"_self\"`", "target=\"_self\"", "Default; opens the destination in the same active browser tab"],
            ["`mailto:`", "href=\"mailto:info@nielit.gov.in\"", "Opens user's default email client with recipient address pre-filled"],
            ["In-Page Bookmark", "href=\"#faq\"", "Jumps browser scroll immediately to the element with `id=\"faq\"`"]
          ],
          colWidths: [110, 190, 211]
        },
        practicalExample: "On a long terms-and-conditions page: Place `<a href=\"#section4\">Jump to Privacy</a>` at the top. At the bottom, add `<h3 id=\"section4\">Privacy Policy</h3>`. Clicking the link jumps the page directly down to section 4 without reloading.",
        importantPoints: [
          "The `<a>` tag creates hyperlinks using the `href` attribute.",
          "`target=\"_blank\"` opens the linked document in a new tab.",
          "Named in-page bookmarks are linked using the hash `#` symbol (e.g. `href=\"#contact\"`)."
        ],
        quickRevision: "Anchor `<a>` tags create hyperlinks using `href`. `target=\"_blank\"` opens in a new tab. In-page bookmarks jump to matching `id`s using `#`."
      },
      {
        code: "3.8",
        title: "Image Tag",
        whatIsIt: "The `<img>` tag is an empty (self-closing) inline element used to embed raster or vector graphics (JPEG, PNG, GIF, SVG, WebP) into an HTML webpage.",
        whyImportant: "Images improve visual aesthetics, communicate concepts faster than text, display brand logos, and enhance user engagement.",
        howItWorks: "Images are not physically embedded into HTML files; rather, the `src` attribute creates a reference link that directs the browser to download and render the image file.",
        codeSnippet: `<!-- Embedding an image with required attributes -->
<img src="images/logo.png" 
     alt="NIELIT Official Organization Logo" 
     width="250" 
     height="100">`,
        tableTitle: "ESSENTIAL ATTRIBUTES OF THE IMG TAG",
        table: {
          headers: ["Attribute", "Syntax Example", "Technical Purpose & Impact"],
          rows: [
            ["`src` (Source)", "src=\"images/photo.jpg\"", "Mandatory; specifies relative or absolute path to the image file"],
            ["`alt` (Alternative)", "alt=\"Campus Main Building\"", "Mandatory for accessibility; displays descriptive text if image fails to load; read by screen readers for blind users"],
            ["`width`", "width=\"300\"", "Sets image width in pixels (or percentages in CSS)"],
            ["`height`", "height=\"200\"", "Sets image height in pixels, preventing Cumulative Layout Shift (CLS)"]
          ],
          colWidths: [110, 180, 221]
        },
        practicalExample: "If a slow mobile connection fails to download `hero.jpg`: The browser renders a broken icon with the text 'Students studying in computer lab' (from the `alt` attribute), so the user still understands what was shown.",
        importantPoints: [
          "`<img>` is an empty (void / self-closing) tag; it has no closing `</img>` tag.",
          "The `src` (source) attribute specifies the file path of the image.",
          "The `alt` (alternative text) attribute is critical for web accessibility and displays text if the image cannot load."
        ],
        quickRevision: "The `<img>` tag embeds graphics. It is self-closing and requires `src` (file path) and `alt` (accessibility description). Width and height set dimensions."
      },
      {
        code: "3.9",
        title: "Paragraphs and Line Breaks",
        whatIsIt: "The `<p>` tag defines a block of paragraph text, while the `<br>` tag inserts a single line break without starting a new paragraph.",
        whyImportant: "Web browsers automatically ignore keyboard `Enter` line breaks in HTML source code. Paragraphs and breaks structure raw words into readable text units.",
        howItWorks: "Browsers automatically add margin space before and after every `<p>` block. The `<br>` tag is an empty tag that immediately breaks text onto the next line without adding paragraph margins.",
        codeSnippet: `<!-- Using paragraphs and line breaks -->
<p>This is the first standalone paragraph. Browsers add vertical spacing around it.</p>

<p>National Institute of Electronics & Information Technology<br>
Electronics Niketan, 6 CGO Complex<br>
Lodhi Road, New Delhi - 110003</p>`,
        componentsTitle: "PARAGRAPHS VS. LINE BREAKS",
        componentsOrTypes: [
          "`<p>` Tag (Paragraph): Block-level element with automatic top and bottom margins.",
          "`<br>` Tag (Break): Void inline element that terminates the current line and resumes text immediately below.",
          "`<hr>` Tag (Horizontal Rule): Void block element that draws a horizontal thematic dividing line across the page width."
        ],
        practicalExample: "When typing a postal address or poem, using `<p>` for each line creates huge, awkward vertical gaps. Using a single `<p>` container with `<br>` at the end of each line formats the lines closely together.",
        importantPoints: [
          "`<p>` is a block-level element that creates vertical margin spacing around text.",
          "`<br>` is an empty tag used to insert a line break without extra paragraph spacing.",
          "`<hr>` inserts a horizontal thematic break line across the page."
        ],
        quickRevision: "`<p>` defines paragraphs with automatic margins. `<br>` inserts a simple line break. `<hr>` draws a horizontal dividing line."
      },
      {
        code: "3.10",
        title: "Comments in HTML",
        whatIsIt: "HTML comments are explanatory notes and annotations written in the source code that are ignored by the browser and never displayed to users on the rendered webpage.",
        whyImportant: "Comments help developers document complex sections, explain design rationale, leave revision notes for teammates, and temporarily disable code during debugging.",
        howItWorks: "Any text placed between `<!--` and `-->` is completely skipped by the browser's HTML parser.",
        codeSnippet: `<!-- This is a single-line HTML comment -->
<!-- 
  =========================================
  HEADER SECTION - AUTHOR: SAURABH TIWARI
  =========================================
-->
<header>
    <h1>Web Development Course</h1>
</header>

<!-- <p>This paragraph is temporarily disabled for debugging</p> -->`,
        componentsTitle: "HTML COMMENT SYNTAX RULES",
        componentsOrTypes: [
          "Opening Delimiter: Starts with `<!--` (less-than, exclamation mark, two hyphens).",
          "Closing Delimiter: Ends with `-->` (two hyphens, greater-than).",
          "Multi-Line Support: Comments can span across multiple lines without repeating delimiters.",
          "Code Disabling: Wrapping existing HTML elements inside comments prevents them from rendering without deleting the code."
        ],
        practicalExample: "You are testing two different banner designs. Instead of deleting design A, wrap it in `<!-- <div class=\"banner-a\">...</div> -->`. Design A disappears from the screen but remains safely in the file for later use.",
        importantPoints: [
          "HTML comment syntax: `<!-- comment text here -->`.",
          "Comments are invisible in the browser window, but anyone can view them by selecting 'View Page Source' (`Ctrl + U`). Never store passwords or secrets in comments!",
          "Keyboard shortcut to toggle comments in Sublime Text / modern editors: `Ctrl + /`."
        ],
        quickRevision: "HTML comments (`<!-- text -->`) are ignored by the browser. Used to document code and temporarily disable elements during debugging."
      },
      {
        code: "3.11",
        title: "Tables and Attributes: Border, Cellpadding, Cellspacing, Rowspan, Colspan",
        whatIsIt: "HTML tables organize structured data into a two-dimensional grid matrix of horizontal rows and vertical columns.",
        whyImportant: "Tables are the standard medium for presenting financial statements, exam marks, railway timetables, pricing plans, and comparative specifications.",
        howItWorks: "A table is constructed using `<table>`, rows are created with `<tr>`, header cells are defined with `<th>` (bold and centered by default), and data cells are defined with `<td>`.",
        tableTitle: "CORE HTML TABLE ELEMENTS & ATTRIBUTES",
        table: {
          headers: ["Tag / Attribute", "Syntax Example", "Structural Meaning & Visual Behavior"],
          rows: [
            ["`<table>`", "<table>...</table>", "Root wrapper container defining the data table"],
            ["`<tr>`", "<tr>...</tr>", "Table Row; horizontal container for cells"],
            ["`<th>`", "<th>Roll No</th>", "Table Header; text is **Bold and Centered** by default"],
            ["`<td>`", "<td>1001</td>", "Table Data; standard content cell (regular text, left-aligned)"],
            ["`border`", "<table border=\"1\">", "Sets thickness of border lines surrounding cells"],
            ["`cellpadding`", "cellpadding=\"10\"", "Internal space in pixels between cell content and cell border"],
            ["`cellspacing`", "cellspacing=\"5\"", "External space in pixels between neighboring individual cells"],
            ["`rowspan`", "<td rowspan=\"2\">", "Merges a cell vertically across multiple rows down"],
            ["`colspan`", "<th colspan=\"3\">", "Merges a cell horizontally across multiple columns"]
          ],
          colWidths: [100, 160, 241]
        },
        codeSnippet: `<!-- Complete HTML Table demonstrating Colspan and Rowspan -->
<table border="1" cellpadding="8" cellspacing="0">
    <tr>
        <th colspan="3">NIELIT O-Level Student Marksheet</th>
    </tr>
    <tr>
        <th>Subject Code</th>
        <th>Subject Title</th>
        <th>Marks Obtained</th>
    </tr>
    <tr>
        <td>M1-R5</td>
        <td>IT Tools & Network Basics</td>
        <td>85</td>
    </tr>
    <tr>
        <td>M2-R5.1</td>
        <td>Web Designing & Publishing</td>
        <td>92</td>
    </tr>
</table>`,
        practicalExample: "A report card header: To create a main title that stretches across all 3 columns: Write `<th colspan=\"3\">Annual Examination Results</th>`. The cell merges across columns 1, 2, and 3 seamlessly.",
        importantPoints: [
          "`<th>` text is bold and centered by default; `<td>` text is regular and left-aligned.",
          "`rowspan` merges cells vertically down rows; `colspan` merges cells horizontally across columns.",
          "`cellpadding` controls internal space inside cells; `cellspacing` controls space between cells."
        ],
        quickRevision: "Tables: `<table>` -> `<tr>` rows -> `<th>` headers (bold/centered) or `<td>` data. Use `colspan` to merge columns and `rowspan` to merge rows."
      },
      {
        code: "3.12",
        title: "Lists: Ordered List, Unordered List, Definition List",
        whatIsIt: "HTML lists group related text items into structured, sequential, bulleted, or term-definition formats.",
        whyImportant: "Lists structure navigation menus, recipe instructions, syllabus topics, and feature summaries into clear, scannable visual units.",
        howItWorks: "HTML provides three distinct list types: Ordered Lists (`<ol>`), Unordered Lists (`<ul>`), and Description / Definition Lists (`<dl>`).",
        tableTitle: "THE 3 TYPES OF HTML LISTS",
        table: {
          headers: ["List Type", "Container Tag & Item Tag", "Default Marker Style", "Marker Customization Types"],
          rows: [
            ["Ordered List", "`<ol>` with `<li>` items", "Arabic numbers (1, 2, 3...)", "`type=\"1\"`, `type=\"A\"`, `type=\"a\"`, `type=\"I\"`, `type=\"i\"`"],
            ["Unordered List", "`<ul>` with `<li>` items", "Solid disc bullets (-)", "`type=\"disc\"`, `type=\"circle\"`, `type=\"square\"` (or CSS `list-style-type`)"],
            ["Description List", "`<dl>` with `<dt>` & `<dd>`", "Indented term-definition pairs", "No bullet; `<dt>` = Term, `<dd>` = Definition description"]
          ],
          colWidths: [110, 160, 110, 121]
        },
        codeSnippet: `<!-- Ordered List with uppercase letters -->
<ol type="A">
    <li>HTML Fundamentals</li>
    <li>CSS Styling</li>
    <li>JavaScript Logic</li>
</ol>

<!-- Description List -->
<dl>
    <dt>HTML</dt>
    <dd>Standard markup language for web page structure.</dd>
    <dt>CSS</dt>
    <dd>Language used for describing presentation and styles.</dd>
</dl>`,
        practicalExample: "When writing a recipe: Step 1, Step 2, Step 3 must use an **Ordered List** (`<ol>`) because the sequence matters. The ingredient checklist (salt, sugar, milk) uses an **Unordered List** (`<ul>`) because order is irrelevant.",
        importantPoints: [
          "`<ol>` creates ordered numbered lists; items use `<li>`.",
          "`<ul>` creates unordered bulleted lists; items use `<li>`.",
          "`<dl>` defines a description list; `<dt>` defines terms; `<dd>` defines descriptions."
        ],
        quickRevision: "Lists: `<ol>` (numbered 1, A, I), `<ul>` (bulleted disc/circle), `<dl>` (definitions with `<dt>` term and `<dd>` description)."
      },
      {
        code: "3.13",
        title: "Forms and Form Elements",
        whatIsIt: "An HTML form is an interactive document container (`<form>`) used to collect user inputs (text, selections, files, passwords) and transmit them to a web server for processing.",
        whyImportant: "Forms are the primary medium for interactive digital transactions, including user registration, login authentication, online exams, search bars, and checkout payment.",
        howItWorks: "The `<form>` tag encloses interactive controls. When the user clicks 'Submit', the browser packages form inputs and dispatches an HTTP request to the URL specified in the `action` attribute using the method specified in `method`.",
        codeSnippet: `<!-- Basic HTML Form Structure -->
<form action="submit-admission.php" method="POST">
    <label for="student-name">Full Name:</label>
    <input type="text" id="student-name" name="fullname" required>
    
    <label for="email-addr">Email Address:</label>
    <input type="email" id="email-addr" name="email" required>
    
    <input type="submit" value="Register Now">
</form>`,
        tableTitle: "CRITICAL FORM ATTRIBUTES: GET VS. POST",
        table: {
          headers: ["Attribute / Parameter", "GET Method (`method=\"GET\"`)", "POST Method (`method=\"POST\"`)"],
          rows: [
            ["Data Transmission", "Appends form data directly into URL query string (`?user=john`)", "Sends form data securely in the HTTP Request Body payload"],
            ["Visibility & Privacy", "Data is visible in browser address bar (Never use for passwords!)", "Data is invisible in URL; secure for passwords and credit cards"],
            ["Data Size Limit", "Limited (~2,048 characters max due to URL length limits)", "Virtually unlimited data; supports large file uploads"],
            ["Bookmarking / Caching", "Can be bookmarked and cached by browsers", "Cannot be bookmarked; never cached"],
            ["Primary Use Cases", "Search engine queries (e.g. Google search)", "Login forms, registrations, payments, file uploads"]
          ],
          colWidths: [110, 195, 201]
        },
        practicalExample: "A search bar uses `method=\"GET\"` because searching 'O-Level syllabus' can be bookmarked and shared as a link. A login form uses `method=\"POST\"` because sending passwords in a visible URL is an extreme security hazard.",
        importantPoints: [
          "`<form>` attributes: `action` specifies the destination script URL; `method` specifies GET or POST.",
          "GET sends data visible in the URL; POST sends data securely inside the HTTP request body.",
          "Never send passwords or credit cards via GET."
        ],
        quickRevision: "Forms collect user data. `action` sets destination URL; `method` sets GET (visible in URL, searches) or POST (secure inside request body, passwords/registrations)."
      },
      {
        code: "3.14",
        title: "Input Types and Attributes (Text, Textarea, Dropdown, Radio, Checkbox, Buttons)",
        whatIsIt: "Form controls are interactive UI widgets placed inside forms to capture specific types of user information.",
        whyImportant: "Using appropriate input types ensures intuitive user input, enforces mobile keyboard adaptations (e.g. numeric keypads for numbers), and simplifies validation.",
        howItWorks: "The `<input>` tag adapts into distinct controls based on its `type` attribute. Multi-line text uses `<textarea>`, and dropdowns use `<select>` with `<option>` tags.",
        tableTitle: "CORE HTML FORM INPUT CONTROLS",
        table: {
          headers: ["Input Type / Tag", "HTML Code Syntax", "Visual Control & User Behavior"],
          rows: [
            ["`type=\"text\"`", "<input type=\"text\" name=\"user\">", "Single-line text input field for names, usernames"],
            ["`type=\"password\"`", "<input type=\"password\" name=\"pass\">", "Masks characters with dots or asterisks for secrecy"],
            ["`type=\"radio\"`", "<input type=\"radio\" name=\"gender\" value=\"M\">", "Single choice from a mutually exclusive group (must share same `name`)"],
            ["`type=\"checkbox\"`", "<input type=\"checkbox\" name=\"course\" value=\"CCC\">", "Multiple independent selections allowed"],
            ["`<select>` Dropdown", "<select><option>Delhi</option></select>", "Compact drop-down selection list"],
            ["`<textarea>`", "<textarea rows=\"4\" cols=\"50\"></textarea>", "Multi-line text area for addresses, comments, or feedback"],
            ["`type=\"submit\"`", "<input type=\"submit\" value=\"Send\">", "Button that transmits form data to the server `action`"],
            ["`type=\"reset\"`", "<input type=\"reset\" value=\"Clear\">", "Button that clears all form fields back to default empty state"]
          ],
          colWidths: [110, 190, 211]
        },
        practicalExample: "For selecting 'Gender' (Male / Female): Use `type=\"radio\"` with the same `name=\"gender\"` on both options. Selecting Male automatically unchecks Female. For selecting 'Languages Known' (Hindi, English): Use `type=\"checkbox\"` so users can check both.",
        importantPoints: [
          "Radio buttons must share the exact same `name` attribute to operate as a mutually exclusive single-choice group.",
          "Checkboxes allow selecting multiple options simultaneously.",
          "`<textarea>` requires an explicit closing tag `</textarea>`, unlike self-closing `<input>`.",
          "`type=\"reset\"` restores all form fields to default values."
        ],
        quickRevision: "Input types: text, password (masked), radio (single choice with shared name), checkbox (multiple choices), `<select>` (dropdown), `<textarea>` (multi-line), submit (send), reset (clear)."
      },
      {
        code: "3.15",
        title: "Frames: Frameset, Nested Frames, and HTML Iframe",
        whatIsIt: "Frames allow dividing a browser window into multiple independent sections, each capable of loading a completely separate HTML document. In modern HTML5, legacy `<frameset>` has been deprecated and replaced by the inline frame: `<iframe>`.",
        whyImportant: "Iframes allow embedding external web resources-such as Google Maps, YouTube video players, and payment gateways-directly inside an existing webpage.",
        howItWorks: "An `<iframe>` (Inline Frame) defines a rectangular sandboxed browser window inside the current webpage canvas, loading an external URL specified in `src`.",
        codeSnippet: `<!-- Modern HTML5 Inline Frame (iframe) -->
<iframe src="https://maps.google.com/embed?..." 
        width="600" 
        height="400" 
        style="border:0;" 
        loading="lazy" 
        title="NIELIT Center Location Map">
</iframe>`,
        componentsTitle: "FRAMESET (LEGACY) VS. IFRAME (HTML5 STANDARD)",
        componentsOrTypes: [
          "Legacy `<frameset>` (Deprecated): Replaced the `<body>` element to divide the whole screen into rows and cols. Deprecated in HTML5 due to severe SEO, accessibility, and navigation flaws.",
          "HTML5 `<iframe>` (Inline Frame): Lives inside standard `<body>` tags. Seamlessly embeds an external webpage or media player inside a defined box.",
          "`src` Attribute: Specifies the web address of the document to embed.",
          "`sandbox` Attribute: Security feature that restricts script execution, popups, and form submissions inside the embedded frame.",
          "`loading=\"lazy\"`: Postpones loading the iframe until the user scrolls near it, improving initial page load performance."
        ],
        practicalExample: "To embed a location map on a 'Contact Us' page: Instead of linking to Google Maps externally, paste Google's `<iframe>` code into your HTML. A fully interactive, zoomable map renders right inside your page.",
        importantPoints: [
          "`<frameset>` is obsolete and completely deprecated in HTML5.",
          "The modern standard for embedding external pages is the `<iframe>` (Inline Frame) tag.",
          "`<iframe>` lives inside the `<body>` element and uses `src`, `width`, and `height` attributes."
        ],
        quickRevision: "Legacy `<frameset>` is deprecated in HTML5. Modern web pages use `<iframe>` (Inline Frame) inside `<body>` to embed maps, YouTube videos, and external widgets."
      },
      {
        code: "3.16",
        title: "HTML 5 Introduction",
        whatIsIt: "HTML5 is the fifth and current major version of Hypertext Markup Language, finalized by W3C and WHATWG as a modern 'Living Standard' for the modern World Wide Web.",
        whyImportant: "HTML5 eliminated the need for third-party proprietary plugins (like Adobe Flash and Microsoft Silverlight) by introducing native video/audio, vector graphics canvas, offline storage, and semantic tags.",
        howItWorks: "HTML5 streamlined document declarations to a simple `<!DOCTYPE html>`, added semantic layout containers, introduced native multimedia elements, and expanded client-side form validation APIs.",
        tableTitle: "HTML4.01 VS. HTML5 COMPARISON",
        table: {
          headers: ["Feature / Dimension", "HTML 4.01 (Legacy 1999 Standard)", "HTML5 (Modern Standard)"],
          rows: [
            ["Doctype Declaration", "Complex SGML DTD declaration (>100 characters)", "Ultra-simple: `<!DOCTYPE html>`"],
            ["Character Encoding", "Long: `<meta http-equiv=\"Content-Type\" ...>`", "Streamlined: `<meta charset=\"UTF-8\">`"],
            ["Multimedia Support", "Required external browser plugins (Adobe Flash)", "Native `<audio>` and `<video>` elements built-in"],
            ["Semantic Elements", "Relied on generic `<div id=\"header\">`, `<div id=\"nav\">`", "Native semantic tags: `<header>`, `<nav>`, `<article>`, `<footer>`"],
            ["Form Validations", "Required extensive custom JavaScript code", "Built-in HTML attributes: `required`, `pattern`, `type=\"email\"`"],
            ["Vector Graphics", "Required external vector viewer plugins", "Native SVG (`<svg>`) and 2D scriptable Canvas (`<canvas>`)"]
          ],
          colWidths: [110, 195, 201]
        },
        practicalExample: "In 2005, watching a video required installing Adobe Flash Player. In HTML5, typing `<video src=\"lecture.mp4\" controls></video>` plays high-definition video instantly on iPhones, Android phones, and laptops with zero plugins.",
        importantPoints: [
          "HTML5 is the latest version of HTML and is maintained as a Living Standard.",
          "HTML5 introduces native multimedia (`<audio>`, `<video>`) without third-party plugins.",
          "The HTML5 doctype declaration is simply: `<!DOCTYPE html>`."
        ],
        quickRevision: "HTML5 modernizes the web: simple `<!DOCTYPE html>`, native `<audio>`/`<video>` without Flash, semantic tags (`<header>`, `<nav>`), and built-in form validation."
      },
      {
        code: "3.17",
        title: "HTML5 New Semantic Elements: Section, Nav, Article, Aside",
        whatIsIt: "Semantic elements are HTML tags that clearly describe their meaning and purpose to both the browser engine, screen readers, and search engine crawlers.",
        whyImportant: "Before HTML5, web pages were confusing tag soups of generic `<div class=\"nav\">` and `<div class=\"footer\">`. Semantic elements provide standardized document structure, boosting SEO and accessibility.",
        howItWorks: "Developers replace generic `<div>` containers with meaningful semantic tags that define the structural anatomy of the page.",
        tableTitle: "CORE HTML5 SEMANTIC STRUCTURAL ELEMENTS",
        table: {
          headers: ["Semantic Tag", "Structural Purpose & Role", "Typical Placement & Practical Use Case"],
          rows: [
            ["`<header>`", "Container for introductory branding, site logo, headings, search bar", "Top of webpage or top of an `<article>`"],
            ["`<nav>`", "Designates the primary navigational link menu block", "Main menu bar, breadcrumb navigation, table of contents"],
            ["`<main>`", "Encloses the dominant, unique central content of the document", "Used once per page; excludes repeated headers and footers"],
            ["`<section>`", "Thematic grouping of content, typically with a heading", "Chapters, numbered sections, tabbed content blocks"],
            ["`<article>`", "Independent, self-contained reusable content block", "Blog posts, news articles, forum comments, product cards"],
            ["`<aside>`", "Content tangentially related to main text (sidebars)", "Related links, author bio, advertising banners, glossary"],
            ["`<footer>`", "Closing bottom footer section of page or article", "Copyright notices, privacy links, contact info, sitemap"]
          ],
          colWidths: [95, 200, 211]
        },
        codeSnippet: `<!-- Modern HTML5 Semantic Document Structure -->
<header>
    <h1>NIELIT Web Portal</h1>
    <nav>
        <a href="#home">Home</a> | <a href="#courses">Courses</a>
    </nav>
</header>
<main>
    <section>
        <h2>Module M2-R5.1 Overview</h2>
        <article>
            <h3>Unit 3: HTML Basics</h3>
            <p>HTML5 semantic elements improve SEO and accessibility.</p>
        </article>
    </section>
    <aside>
        <h4>Important Notices</h4>
        <p>Exam form submission deadline: 31st March.</p>
    </aside>
</main>
<footer>
    <p>&copy; 2026 NIELIT. All Rights Reserved.</p>
</footer>`,
        practicalExample: "A Google search spider scans a news portal. Finding `<article>`, it indexes the text as a news story. Finding `<nav>`, it understands the site structure. Finding `<aside>`, it knows the sidebar is supplementary, improving ranking accuracy.",
        importantPoints: [
          "`<nav>` represents navigation links; `<article>` represents self-contained content.",
          "`<section>` represents a thematic grouping of content.",
          "`<aside>` represents sidebar or supplementary content.",
          "Semantic tags improve SEO search rankings and screen reader accessibility."
        ],
        quickRevision: "HTML5 semantic elements: `<header>` (top), `<nav>` (menus), `<main>` (core content), `<article>` (standalone post), `<section>` (thematic block), `<aside>` (sidebar), `<footer>` (bottom)."
      },
      {
        code: "3.18",
        title: "Audio Tag and Video Tag",
        whatIsIt: "The HTML5 `<audio>` and `<video>` elements provide native browser playback of sound clips and video streams without requiring third-party plugins or browser extensions.",
        whyImportant: "Prior to HTML5, media playback required Adobe Flash Player, which was insecure, drained mobile batteries, and failed completely on smartphones. Native tags standardized web media.",
        howItWorks: "The browser's internal multimedia decoder streams and plays media files directly. Multiple `<source>` tags provide fallback formats across different browsers.",
        codeSnippet: `<!-- Native HTML5 Audio Player -->
<audio controls preload="auto">
    <source src="podcast.mp3" type="audio/mpeg">
    <source src="podcast.ogg" type="audio/ogg">
    Your browser does not support the audio element.
</audio>

<!-- Native HTML5 Video Player -->
<video width="640" height="360" controls poster="images/thumbnail.jpg">
    <source src="lectures/html5.mp4" type="video/mp4">
    <source src="lectures/html5.webm" type="video/webm">
    Your browser does not support the video element.
</video>`,
        tableTitle: "CORE ATTRIBUTES OF AUDIO & VIDEO ELEMENTS",
        table: {
          headers: ["Attribute Name", "Syntax Example", "Playback Behavior & Functional Effect"],
          rows: [
            ["`controls`", "controls", "Displays native play/pause button, volume slider, timeline scrubber"],
            ["`autoplay`", "autoplay muted", "Starts playback automatically upon loading (browsers require `muted`)"],
            ["`loop`", "loop", "Automatically restarts playback from beginning when finished"],
            ["`muted`", "muted", "Mutes audio track by default"],
            ["`poster` (video only)", "poster=\"preview.jpg\"", "Displays a preview image before video playback begins"],
            ["`preload`", "preload=\"metadata\"", "Controls buffering behavior: `none`, `metadata`, or `auto`"]
          ],
          colWidths: [110, 160, 236]
        },
        practicalExample: "An online tutorial video: Set `<video controls poster=\"cover.jpg\" width=\"600\">`. Visitors see an attractive thumbnail cover image. Clicking 'Play' streams the MP4 video with native full-screen, speed adjustment, and volume controls.",
        importantPoints: [
          "`<audio>` and `<video>` tags are native to HTML5 and eliminate Flash plugins.",
          "The `controls` attribute is required to show the play/pause button and volume slider.",
          "The `poster` attribute displays a thumbnail preview image before video playback begins.",
          "`<source>` tags provide fallback file formats (MP4, WebM, OGG)."
        ],
        quickRevision: "`<audio>` and `<video>` provide native media playback. Key attributes: `controls` (buttons), `autoplay`, `loop`, `muted`, and `poster` (video thumbnail)."
      },
      {
        code: "3.19",
        title: "HTML Embed Multimedia",
        whatIsIt: "The `<embed>` and `<object>` elements are general-purpose integration containers used to embed external multimedia, PDF documents, and interactive plugins into an HTML document.",
        whyImportant: "While `<audio>` and `<video>` handle standard media, websites frequently need to embed external PDF manuals, SVG vector graphics, or specialized multimedia plugins.",
        howItWorks: "The `<embed>` tag is an empty element that creates an integration point for external content, while `<object>` supports nested fallback content if the resource fails to load.",
        codeSnippet: `<!-- Embedding an external PDF document using embed -->
<embed src="syllabus.pdf" 
       type="application/pdf" 
       width="100%" 
       height="500px">

<!-- Embedding using object with fallback message -->
<object data="syllabus.pdf" type="application/pdf" width="100%" height="500px">
    <p>Your browser cannot view PDFs. <a href="syllabus.pdf">Download PDF here.</a></p>
</object>`,
        componentsTitle: "EMBED VS. OBJECT SPECIFICATION",
        componentsOrTypes: [
          "`<embed>`: Empty (self-closing) tag providing a direct container for external resources (`src`, `type`, `width`, `height`).",
          "`<object>`: Container element with an opening and closing tag; allows nesting fallback HTML content if the resource cannot be loaded.",
          "PDF Viewing: Widely used to embed digital textbooks, marksheets, and syllabus PDFs directly within web applications.",
          "MIME Types: `type=\"application/pdf\"` informs the browser to launch its internal PDF reader component."
        ],
        practicalExample: "On the NIELIT student portal: Instead of forcing students to download the syllabus PDF file, the developer writes `<embed src=\"syllabus.pdf\" width=\"100%\" height=\"600px\">`. The full multi-page PDF renders interactively right on the screen.",
        importantPoints: [
          "`<embed>` is a self-closing element used for external resources like PDFs.",
          "`<object>` allows nested fallback HTML if the resource fails to load.",
          "`type=\"application/pdf\"` identifies a PDF MIME type."
        ],
        quickRevision: "`<embed>` and `<object>` embed external files (like PDFs and interactive media) directly into web pages. `<object>` supports fallback HTML."
      },
      {
        code: "3.20",
        title: "HTML Layout",
        whatIsIt: "HTML Layout refers to the architectural arrangement of web page sections (header, navigation bar, content columns, sidebars, and footer) to produce an organized visual reading hierarchy.",
        whyImportant: "A coherent webpage layout ensures intuitive navigation, highlights core information, and adapts smoothly across desktop monitors, laptops, and mobile screens.",
        howItWorks: "Modern web layout uses HTML5 semantic tags for structure (`<header>`, `<nav>`, `<main>`, `<aside>`, `<footer>`) combined with CSS layout systems (Flexbox, CSS Grid, or CSS frameworks like W3.CSS).",
        componentsTitle: "STANDARD 5-SECTION WEBPAGE LAYOUT ARCHITECTURE",
        componentsOrTypes: [
          "1. Header: Top horizontal banner containing organization logo, website title, and search box.",
          "2. Navigation Bar: Horizontal menu bar (`<nav>`) placed immediately below or inside the header.",
          "3. Main Content Area (`<main>`): Central 2-column or 3-column area where primary articles and forms reside.",
          "4. Sidebar (`<aside>`): Narrow left or right column displaying quick links, notices, advertisements, or filters.",
          "5. Footer: Bottom horizontal band containing copyright, contact links, sitemap, and social icons."
        ],
        practicalExample: "Open any major news website: Top is the Logo and Date (Header). Below is the category menu (Nav). Center displays today's top news stories (Main/Section). Right column displays trending tweets (Aside). Bottom displays editorial contacts (Footer).",
        importantPoints: [
          "Modern web layout combines HTML5 semantic containers with CSS Grid and Flexbox.",
          "A webpage should contain only one primary `<main>` element.",
          "Layouts should be designed mobile-first to ensure responsive performance."
        ],
        quickRevision: "Webpage layout structures pages into 5 standard areas: Header (top), Nav (menus), Main (articles), Aside (sidebars), and Footer (bottom)."
      },
      {
        code: "3.21",
        title: "HTML5 Form Validations: Require, Pattern, Autofocus, Email, Number, Date, Range",
        whatIsIt: "HTML5 form validation provides built-in, native browser-level data checking on form inputs before the form is submitted to the server, with zero JavaScript required.",
        whyImportant: "Before HTML5, verifying that an email had an `@` symbol or that a required field was not blank required writing dozens of lines of complex JavaScript. HTML5 makes validation instant and declarative.",
        howItWorks: "Developers add specialized HTML5 attributes and input types. When the user clicks 'Submit', the browser checks inputs against rules and displays native error tooltips if violations occur.",
        tableTitle: "HTML5 VALIDATION ATTRIBUTES & INPUT TYPES",
        table: {
          headers: ["Attribute / Type", "Syntax Example", "Validation Rule & Browser Behavior"],
          rows: [
            ["`required`", "<input type=\"text\" required>", "Prevents submission if field is left empty; shows 'Please fill out this field'"],
            ["`type=\"email\"`", "<input type=\"email\">", "Automatically validates email syntax (checks for `@` and domain dot)"],
            ["`type=\"number\"`", "<input type=\"number\" min=\"18\" max=\"60\">", "Restricts input to numbers; validates minimum and maximum value range"],
            ["`type=\"date\"`", "<input type=\"date\">", "Opens native visual calendar date picker"],
            ["`type=\"range\"`", "<input type=\"range\" min=\"0\" max=\"100\">", "Displays a draggable horizontal slider widget"],
            ["`pattern`", "pattern=\"[0-9]{10}\"", "Enforces a Regular Expression (Regex) format (e.g. exactly 10 digits for mobile)"],
            ["`autofocus`", "<input type=\"text\" autofocus>", "Automatically places the text cursor in this field upon page load"],
            ["`placeholder`", "placeholder=\"Enter your Name\"", "Displays greyed-out temporary hint text inside the field"]
          ],
          colWidths: [110, 180, 216]
        },
        codeSnippet: `<!-- Complete HTML5 Validated Registration Form -->
<form action="register.php" method="POST">
    <!-- Required text with autofocus -->
    <label>Student Name:</label>
    <input type="text" name="name" required autofocus placeholder="Full Name"><br><br>

    <!-- Native Email check -->
    <label>Email ID:</label>
    <input type="email" name="email" required placeholder="name@example.com"><br><br>

    <!-- Number with Min/Max -->
    <label>Age (18-65):</label>
    <input type="number" name="age" min="18" max="65" required><br><br>

    <!-- Pattern Regex for 10-digit Indian Mobile -->
    <label>Mobile Number (10 Digits):</label>
    <input type="tel" name="phone" pattern="[6-9][0-9]{9}" required placeholder="10-digit mobile"><br><br>

    <input type="submit" value="Submit Application">
</form>`,
        practicalExample: "In the form above: If a user leaves 'Student Name' empty and clicks Submit, the browser halts and pops up a bubble: 'Please fill out this field'. If they type `abc` into mobile, it warns: 'Please match the requested format'. No JavaScript is needed!",
        importantPoints: [
          "`required` prevents form submission if the input field is empty.",
          "`pattern` validates input values using Regular Expressions (Regex).",
          "`autofocus` automatically focuses the cursor on the field when the page loads.",
          "`type=\"email\"`, `type=\"number\"`, `type=\"date\"` provide built-in semantic validation."
        ],
        quickRevision: "HTML5 validates forms natively without JavaScript: `required` (mandatory), `pattern` (regex), `autofocus` (cursor focus), `type=\"email\"`, `min`/`max`, and `type=\"date\"`."
      }
    ],
    unitRevision: [
      "HTML (Hypertext Markup Language) defines the structural skeleton of web pages; standardized by W3C and WHATWG.",
      "The basic document structure begins with `<!DOCTYPE html>`, followed by `<html>` enclosing `<head>` (metadata/title) and `<body>` (visible content).",
      "Head elements: `<title>` (tab name), `<meta charset=\"UTF-8\">` (encodings), `<link>` (external CSS), and `<style>`.",
      "Formatting tags: `<b>`/`<strong>` (bold), `<i>`/`<em>` (italic), `<u>` (underline), `<del>` (strikethrough), `<sup>` (superscript x²), `<sub>` (subscript H₂O).",
      "`<div>` is a generic block-level layout container; `<span>` is an inline container; `<pre>` preserves all spaces and line breaks in monospace.",
      "Anchor `<a>` tags create hyperlinks using `href`; `target=\"_blank\"` opens in a new tab; named bookmarks jump using `#`.",
      "`<img>` is a self-closing tag embedding graphics using `src` (path) and `alt` (accessibility description).",
      "Tables: `<table>` -> `<tr>` (row) -> `<th>` (bold header) or `<td>` (data cell). `colspan` merges columns; `rowspan` merges rows.",
      "Lists: Ordered `<ol>` (numbered 1, A, I), Unordered `<ul>` (bulleted disc/circle), Description `<dl>` with `<dt>` (term) and `<dd>` (description).",
      "Forms (`<form>`) collect data via `action` (URL) and `method` (GET appends to URL, POST sends in request body).",
      "Input types: text, password (masked), radio (single choice with shared `name`), checkbox (multi-choice), `<select>` (dropdown), `<textarea>`.",
      "Legacy `<frameset>` is deprecated in HTML5; modern sites use `<iframe>` to embed maps, videos, and external pages.",
      "HTML5 features simple `<!DOCTYPE html>`, native `<audio>`/`<video>`, canvas, and semantic tags (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`).",
      "HTML5 form validations: `required`, `pattern` (regex), `autofocus`, `type=\"email\"`, `type=\"number\"`, `min`, `max`, `type=\"date\"`."
    ],
    keyTerms: [
      { term: "HTML", fullForm: "Hypertext Markup Language", desc: "Standard markup language used to structure web pages." },
      { term: "WHATWG", fullForm: "Web Hypertext Application Technology Working Group", desc: "Organization maintaining the HTML Living Standard." },
      { term: "DTD", fullForm: "Document Type Definition", desc: "Declaration establishing document rules and specification versions." },
      { term: "URL", fullForm: "Uniform Resource Locator", desc: "Global address pointing to a web document or file." },
      { term: "DOM", fullForm: "Document Object Model", desc: "In-memory tree of HTML nodes constructed by web browsers." },
      { term: "CLS", fullForm: "Cumulative Layout Shift", desc: "Web performance metric tracking unwanted visual page jumps during loading." },
      { term: "MIME", fullForm: "Multipurpose Internet Mail Extensions", desc: "Standard identifying digital file types sent over HTTP." }
    ]
  };
}
