// Unit 5: CSS Framework (W3.CSS) - Tutorial & Textbook Grade Content for NIELIT O-Level M2-R5.1
export function getUnit5Content() {
  return {
    unitNumber: 5,
    title: "CSS Framework (W3.CSS)",
    officialSection: "16.6 (v)",
    totalHours: 15,
    theoryHours: 6,
    practicalHours: 9,
    introduction: "W3.CSS is a modern, responsive, mobile-first CSS framework developed by Refsnes Data (W3Schools) designed specifically to simplify and accelerate website development. Unlike heavy front-end frameworks (such as Bootstrap) that depend on external JavaScript libraries and complex pre-processors, W3.CSS is pure CSS, highly optimized, ultra-lightweight (under 25 KB compressed), and natively responsive. This unit covers website development workflows using W3.CSS, CDN linking, typography and font classes, color palettes and themes, container and panel box models, border styling and paper card elevations (`w3-card-4`), the 12-column responsive grid system (`w3-row`, `w3-col`, `w3-half`, `w3-quarter`, `w3-third`), styled responsive tables, list groups, and responsive image cards.",
    whatYouWillLearn: [
      "The role and advantages of CSS frameworks in professional web development.",
      "W3.CSS architecture: Pure CSS, zero JavaScript dependencies, mobile-first responsiveness, and CDN integration.",
      "W3.CSS Fonts & Text: Font sizing (`w3-tiny` to `w3-jumbo`), text alignments (`w3-center`), and font families (`w3-serif`).",
      "W3.CSS Colors: Predefined color classes (`w3-red`, `w3-blue`, `w3-teal`), text colors (`w3-text-color`), and color themes.",
      "Containers & Panels: `w3-container` (16px padded box) versus `w3-panel` (16px vertical margins for callouts and notes).",
      "Borders & Cards: `w3-border`, `w3-round`, `w3-circle`, `w3-card-2`, and `w3-card-4` paper elevation shadows.",
      "The 12-Column Responsive Grid System: `w3-row`, `w3-row-padding`, and `w3-col` sizing (`s` small, `m` medium, `l` large).",
      "W3.CSS Tables & Lists: `w3-table-all`, `w3-striped`, `w3-hoverable`, and `w3-ul` list groups.",
      "W3.CSS Images: Responsive scaling (`w3-image`), circular portraits (`w3-circle`), and hover opacity effects."
    ],
    topics: [
      {
        code: "5.1",
        title: "Web Site Development using W3.CSS Framework",
        whatIsIt: "A CSS Framework is a pre-written, standardized collection of CSS classes and layout systems that developers link into their HTML documents to build professional websites rapidly without writing custom CSS from scratch.",
        whyImportant: "Writing custom CSS for responsive grids, navigation bars, cards, and buttons across every project is repetitive and time-consuming. Frameworks enforce clean visual consistency and guarantee cross-browser compatibility.",
        howItWorks: "Developers simply attach pre-defined semantic class names (e.g. `class=\"w3-button w3-blue w3-round\"`) directly to HTML elements. The framework's stylesheet applies all padding, colors, hover animations, and responsive breakpoints automatically.",
        componentsTitle: "BENEFITS OF DEVELOPING WEBSITES WITH W3.CSS",
        componentsOrTypes: [
          "Rapid Prototyping: Build responsive web pages in minutes using ready-made UI components.",
          "Consistency: Standardizes spacing, typography scale, and color harmony across large multi-page websites.",
          "Cross-Browser Compatibility: Pre-tested and guaranteed to render identically across Chrome, Firefox, Edge, Safari, and Opera.",
          "Mobile-First Philosophy: Designed from the ground up to render flawlessly on smartphones, tablets, and desktops automatically."
        ],
        practicalExample: "To create a blue rounded submit button: Without a framework, you must write 8 lines of custom CSS (`padding`, `background`, `border-radius`, `hover`, `color`). In W3.CSS, you simply write `<button class=\"w3-button w3-blue w3-round\">Submit</button>`.",
        importantPoints: [
          "W3.CSS is a responsive CSS framework developed by W3Schools.",
          "Frameworks accelerate development by providing pre-tested, standardized CSS classes.",
          "W3.CSS operates on a mobile-first responsive design philosophy."
        ],
        quickRevision: "W3.CSS accelerates website development by providing pre-written, mobile-first responsive classes for layouts, colors, tables, and UI cards."
      },
      {
        code: "5.2",
        title: "W3.CSS Intro",
        whatIsIt: "W3.CSS is a modern, lightweight, pure-CSS framework with zero JavaScript dependencies, built by W3Schools as a fast, clean alternative to heavy frameworks like Bootstrap.",
        whyImportant: "Unlike Bootstrap which requires jQuery/Popper JavaScript and massive file downloads, W3.CSS is exceptionally fast (<25 KB), easier to learn, and requires no build tools or package managers.",
        howItWorks: "Developers link the official W3.CSS stylesheet into the HTML `<head>` section via a single `<link>` tag pointing to W3Schools' global Content Delivery Network (CDN) or local server folder.",
        codeSnippet: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>W3.CSS Web Project</title>
    <!-- Link to official W3.CSS stylesheet via CDN -->
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
</head>
<body>
    <div class="w3-container w3-teal">
        <h1>Welcome to W3.CSS</h1>
        <p>Pure CSS, ultra-fast, and responsive!</p>
    </div>
</body>
</html>`,
        tableTitle: "W3.CSS VS. BOOTSTRAP FRAMEWORK COMPARISON",
        table: {
          headers: ["Evaluation Parameter", "W3.CSS Framework", "Bootstrap Framework"],
          rows: [
            ["Dependencies", "**Pure CSS only** (Zero JavaScript dependency)", "Requires JavaScript / Popper.js for dynamic components"],
            ["File Size & Performance", "Tiny (~23 KB gzipped); ultra-fast loading", "Heavier (~160 KB+ with JS bundle); slower on mobile 2G/3G"],
            ["Learning Curve", "Extremely easy, intuitive, beginner-friendly", "Moderate to Steep (requires learning complex utility classes)"],
            ["Mobile Responsiveness", "Built-in 12-column mobile-first grid", "12-column grid system with 6 responsive tier breakpoints"],
            ["Speed & Cleanliness", "Cleaner HTML with fewer deeply nested wrapper divs", "Requires heavy nesting of `.container > .row > .col` divs"]
          ],
          colWidths: [120, 190, 196]
        },
        practicalExample: "A school in a rural area with slow internet connectivity needs an educational portal: Building the site with W3.CSS ensures the entire framework stylesheet downloads in under 0.1 seconds, delivering blazing fast page loads on low-end smartphones.",
        importantPoints: [
          "W3.CSS is a pure CSS framework; it contains NO JavaScript code.",
          "W3.CSS is linked in `<head>` via `<link rel=\"stylesheet\" href=\"w3.css\">`.",
          "W3.CSS is significantly smaller and faster than Bootstrap."
        ],
        quickRevision: "W3.CSS is a pure CSS framework with zero JS dependencies. Ultra-lightweight (<25KB), mobile-first, and linked via a single CDN `<link>` tag."
      },
      {
        code: "5.3",
        title: "W3.CSS Fonts and Text",
        whatIsIt: "W3.CSS provides a comprehensive suite of utility classes to format typography: font sizing, font weight, text alignments, font families, and letter spacing.",
        whyImportant: "Consistent typography establishes readability, visual hierarchy, and professional branding across all pages of a website.",
        howItWorks: "Applying sizing classes (like `w3-large` or `w3-jumbo`) or alignment classes (like `w3-center`) dynamically scales fonts using relative `em` units.",
        tableTitle: "W3.CSS TYPOGRAPHY & TEXT CLASSES",
        table: {
          headers: ["W3.CSS Class Name", "Relative Font Size / Effect", "Intended Educational / UI Purpose"],
          rows: [
            ["`w3-tiny`", "Font size ~10px (0.75em)", "Footnotes, fine print, copyright disclaimers"],
            ["`w3-small`", "Font size ~12px (0.85em)", "Secondary captions, date stamps, sub-labels"],
            ["`w3-medium`", "Font size ~15px (Normal body text)", "Standard paragraph reading text (default)"],
            ["`w3-large`", "Font size ~18px (1.2em)", "Sub-headings, card titles, prominent lead text"],
            ["`w3-xlarge`", "Font size ~24px (1.5em)", "Section headers, major card titles"],
            ["`w3-xxlarge`", "Font size ~36px (2.0em)", "Primary page titles, promotional banners"],
            ["`w3-jumbo`", "Font size ~64px (Massive headline)", "Hero splash page headline titles"],
            ["`w3-center`", "Centers text horizontally", "Hero titles, centered banners, callout text"],
            ["`w3-serif` / `w3-sans-serif`", "Applies Serif or Sans-Serif font family", "Styling editorial quotes or clean interface text"]
          ],
          colWidths: [110, 160, 236]
        },
        codeSnippet: `<!-- W3.CSS Typography Example -->
<div class="w3-container w3-center">
    <h1 class="w3-jumbo w3-text-blue">NIELIT</h1>
    <h2 class="w3-xxlarge">O-Level Examination</h2>
    <p class="w3-large">Module M2-R5.1: Web Designing & Publishing</p>
    <p class="w3-small w3-text-grey">Last revised: Academic Session 2026</p>
</div>`,
        practicalExample: "To create a massive welcome headline on your homepage: Write `<h1 class=\"w3-jumbo w3-center w3-text-indigo\">Welcome!</h1>`. The text instantly becomes 64px tall, centered, and colored indigo with zero custom CSS.",
        importantPoints: [
          "`w3-jumbo` creates the largest headline text (~64px).",
          "`w3-center` centers text horizontally inside its container.",
          "`w3-text-color` changes text color (e.g. `w3-text-red`, `w3-text-blue`)."
        ],
        quickRevision: "W3.CSS text classes scale fonts smoothly from `w3-tiny` up to `w3-jumbo`, align text (`w3-center`), and adjust font families (`w3-serif`)."
      },
      {
        code: "5.4",
        title: "W3.CSS Colors",
        whatIsIt: "W3.CSS features a rich, standardized color palette providing pre-defined background color classes, text color classes, and downloadable regional and brand color themes.",
        whyImportant: "Manually typing hex codes (`#1e40af`) on every element is error-prone. W3.CSS color classes provide instant, harmonious color schemes inspired by Material Design.",
        howItWorks: "Classes prefixed with `w3-` (e.g. `w3-red`, `w3-teal`) set background colors and automatically adjust text color to white for optimal contrast. Classes prefixed with `w3-text-` set text color.",
        tableTitle: "CORE W3.CSS COLOR PALETTE & FUNCTIONALITY",
        table: {
          headers: ["Color Class Category", "Class Name Examples", "Visual Color Result & Automatic Contrast"],
          rows: [
            ["Standard Colors", "`w3-red`, `w3-blue`, `w3-green`, `w3-yellow`, `w3-orange`", "Applies rich vibrant solid backgrounds; automatically sets white text for legibility"],
            ["Modern Material Colors", "`w3-teal`, `w3-cyan`, `w3-indigo`, `w3-purple`, `w3-pink`", "Contemporary tech and corporate design color palettes"],
            ["Neutral Shading", "`w3-white`, `w3-black`, `w3-light-grey`, `w3-dark-grey`", "Clean background panels, page borders, and footers"],
            ["Text Color Classes", "`w3-text-red`, `w3-text-blue`, `w3-text-grey`, `w3-text-teal`", "Colors the font characters without changing background"],
            ["Hover Color Classes", "`w3-hover-blue`, `w3-hover-red`, `w3-hover-text-teal`", "Dynamically changes background or text color when cursor hovers over element"]
          ],
          colWidths: [120, 160, 226]
        },
        codeSnippet: `<!-- W3.CSS Color & Hover Demonstration -->
<div class="w3-container w3-teal">
    <h2>Notice Board</h2>
</div>
<div class="w3-container w3-light-grey">
    <p class="w3-text-dark-grey">Classes begin next Monday at 9:00 AM.</p>
    <button class="w3-button w3-blue w3-hover-green">Accept & Enroll</button>
</div>`,
        practicalExample: "When building a navigation bar: Apply `<a class=\"w3-button w3-black w3-hover-teal\">Home</a>`. The link has a sleek black background; when the user moves the mouse over it, it smoothly transitions to vibrant teal (`w3-hover-teal`).",
        importantPoints: [
          "`w3-color` sets background color and automatically sets white text for contrast.",
          "`w3-text-color` modifies the font color without affecting the background.",
          "`w3-hover-color` dynamically changes the background color on mouse hover."
        ],
        quickRevision: "W3.CSS colors: `w3-color` sets background (e.g. `w3-teal`), `w3-text-color` sets text color, and `w3-hover-color` adds interactive hover effects."
      },
      {
        code: "5.5",
        title: "W3.CSS Containers and Panels",
        whatIsIt: "The `w3-container` and `w3-panel` classes are the two most fundamental box-model container elements in W3.CSS used to wrap and structure content.",
        whyImportant: "Raw HTML divs touch the edges of the screen awkwardly with zero padding. `w3-container` and `w3-panel` add standardized internal breathing room and margins automatically.",
        howItWorks: "Both classes are applied to `<div>`, `<header>`, `<footer>`, or `<section>` tags to enforce standard 16-pixel padding.",
        tableTitle: "W3-CONTAINER VS. W3-PANEL COMPARISON",
        table: {
          headers: ["Attribute / Behavior", "`w3-container` Class", "`w3-panel` Class"],
          rows: [
            ["Internal Padding", "Adds **16px padding on Left and Right**; 0.01em top/bottom", "Adds **16px padding on Left and Right**"],
            ["Vertical External Margin", "**Zero vertical margin** (0px top and bottom)", "Adds **16px margin on Top and Bottom**"],
            ["Intended Usage", "General page wrapper, headers, footers, card sections", "Standalone callout notes, alert messages, quote blocks"],
            ["Visual Appearance", "Blends flush with adjacent containers", "Separated from neighboring content by top/bottom breathing space"]
          ],
          colWidths: [110, 195, 201]
        },
        codeSnippet: `<!-- 1. Header using w3-container -->
<header class="w3-container w3-blue">
    <h1>Student Portal</h1>
</header>

<!-- 2. Alert message using w3-panel -->
<div class="w3-panel w3-yellow w3-border-left w3-border-red">
    <p><strong>Warning:</strong> Admit card download closes tonight at 11:59 PM.</p>
</div>`,
        practicalExample: "To display an exam warning callout box: Use `<div class=\"w3-panel w3-pale-red w3-leftbar w3-border-red\">`. It automatically gains 16px top and bottom margin, 16px internal padding, a pale red background, and a thick solid red accent bar on the left edge.",
        importantPoints: [
          "`w3-container` adds 16px left and right padding to any HTML element.",
          "`w3-panel` adds 16px left/right padding PLUS 16px top/bottom external margin.",
          "`w3-panel` is specifically designed for alert boxes, notes, and callouts."
        ],
        quickRevision: "`w3-container` adds 16px horizontal padding for general layouts. `w3-panel` adds 16px padding + 16px top/bottom margin for alerts and callout boxes."
      },
      {
        code: "5.6",
        title: "W3.CSS Borders",
        whatIsIt: "W3.CSS border classes provide utility controls to add, remove, color, round, and elevate borders around HTML elements and cards.",
        whyImportant: "Borders define visual boundaries around cards, form inputs, and callouts, while rounded corners and drop shadows create modern, elevated Material Design cards.",
        howItWorks: "Developers combine border classes (`w3-border`, `w3-round`, `w3-card-4`) to build elevated paper surfaces with soft drop shadows.",
        tableTitle: "CORE W3.CSS BORDER & CARD CLASSES",
        table: {
          headers: ["W3.CSS Class Name", "Visual Structural Effect", "Practical Application"],
          rows: [
            ["`w3-border`", "Adds a subtle 1px solid grey border around all 4 sides", "Card borders, table boundaries, form inputs"],
            ["`w3-border-top` / `bottom`", "Adds border exclusively to top or bottom edge", "Divider lines, header/footer separators"],
            ["`w3-leftbar`", "Adds a thick solid 6px accent bar on the left edge", "Important notes, quote highlights, exam callouts"],
            ["`w3-round-small`", "Adds a subtle 2px rounded corner", "Form input fields, small tags"],
            ["`w3-round` / `w3-round-large`", "Adds 4px to 8px smooth rounded corners", "Buttons, modern UI cards"],
            ["`w3-circle`", "Rounds elements into a **100% perfect circle**", "Circular user profile avatars, circular badges"],
            ["`w3-card` / `w3-card-2`", "Adds a subtle 2px drop-shadow paper elevation", "Product cards, notice board items"],
            ["`w3-card-4`", "Adds a pronounced 4px deep drop-shadow elevation", "Featured pricing cards, modal dialog boxes"]
          ],
          colWidths: [120, 195, 191]
        },
        codeSnippet: `<!-- Creating an elevated paper profile card -->
<div class="w3-card-4 w3-white w3-round" style="max-width:300px; margin:auto;">
    <div class="w3-container w3-indigo">
        <h3>Instructor Profile</h3>
    </div>
    <div class="w3-container w3-padding">
        <img src="avatar.png" class="w3-circle" style="width:80px" alt="Avatar">
        <p><strong>Saurabh Tiwari</strong><br>O-Level Web Design Faculty</p>
    </div>
</div>`,
        practicalExample: "To create an elevated user profile card: Use `<div class=\"w3-card-4 w3-round\">`. The box gains rounded corners and a soft 3D paper shadow, making it look like a physical card floating above the page.",
        importantPoints: [
          "`w3-border` adds a standard 1px border around all 4 sides.",
          "`w3-circle` transforms square images into perfect 100% circles (ideal for profile avatars).",
          "`w3-card-4` adds a rich 4px drop-shadow paper card elevation.",
          "`w3-leftbar` creates a thick accent bar on the left edge."
        ],
        quickRevision: "W3.CSS borders: `w3-border` (perimeter line), `w3-round` (curved corners), `w3-circle` (round avatar), `w3-card-2` and `w3-card-4` (paper drop shadows)."
      },
      {
        code: "5.7",
        title: "W3.CSS Grid (12-Column Responsive System)",
        whatIsIt: "The W3.CSS Grid is a 12-column responsive layout system that divides the screen width into 12 proportional columns, allowing developers to create multi-column desktop layouts that automatically rearrange into single columns on mobile phones.",
        whyImportant: "The 12-column grid is the industry standard for responsive web design. The number 12 is mathematically divisible by 1, 2, 3, 4, 6, and 12, allowing equal-width splits for 1, 2, 3, 4, or 6 columns.",
        howItWorks: "Columns reside inside a `w3-row` or `w3-row-padding` wrapper. Each column is assigned `w3-col` along with column width descriptors for small (`s`), medium (`m`), and large (`l`) screens totaling **12 columns per row**.",
        tableTitle: "THE 12-COLUMN RESPONSIVE SCREEN SIZING CLASSES",
        table: {
          headers: ["Device Category & Class Prefix", "Screen Width Breakpoint", "Grid Column Syntax (Sum must = 12)", "Practical Responsive Behavior"],
          rows: [
            ["Small Screens (`s1` to `s12`)", "< 601 pixels (Smartphones)", "`w3-col s12` (Spans all 12 columns = 100%)", "Columns stack vertically into single 1-column layouts"],
            ["Medium Screens (`m1` to `m12`)", "601px to 992px (Tablets, iPad)", "`w3-col m6` (Spans 6 columns = 50% width)", "Two columns side-by-side (6 + 6 = 12)"],
            ["Large Screens (`l1` to `l12`)", "> 992px (Laptops, Desktops)", "`w3-col l3` (Spans 3 columns = 25% width)", "Four columns side-by-side (3 + 3 + 3 + 3 = 12)"],
            ["Convenience: `w3-half`", "50% width on medium & large", "Equivalent to `w3-col m6 l6`", "Splits screen into 2 equal halves"],
            ["Convenience: `w3-quarter`", "25% width on large screens", "Equivalent to `w3-col m6 l3`", "Creates a 4-column feature row"],
            ["Convenience: `w3-third`", "33.33% width on medium/large", "Equivalent to `w3-col m4 l4`", "Creates a 3-column equal grid"]
          ],
          colWidths: [110, 110, 140, 146]
        },
        codeSnippet: `<!-- Responsive 12-Column Grid: 4 columns on desktop, 1 column on mobile -->
<div class="w3-row-padding">
    <div class="w3-col s12 m6 l3">
        <div class="w3-card w3-container w3-teal"><h3>Card 1</h3></div>
    </div>
    <div class="w3-col s12 m6 l3">
        <div class="w3-card w3-container w3-blue"><h3>Card 2</h3></div>
    </div>
    <div class="w3-col s12 m6 l3">
        <div class="w3-card w3-container w3-indigo"><h3>Card 3</h3></div>
    </div>
    <div class="w3-col s12 m6 l3">
        <div class="w3-card w3-container w3-purple"><h3>Card 4</h3></div>
    </div>
</div>`,
        practicalExample: "In the code above: On a desktop monitor (`l3`), four colored cards sit side-by-side in one row (3+3+3+3=12). On an iPad tablet (`m6`), they rearrange into 2 rows of 2 cards (6+6=12). On a smartphone (`s12`), each card expands to full width, stacking vertically. No custom media queries needed!",
        importantPoints: [
          "The W3.CSS Grid is based on a 12-column responsive layout system.",
          "The sum of column numbers in any row must equal exactly 12 (e.g. 6+6, 4+4+4, 3+3+3+3).",
          "`s` represents Small screens (<601px); `m` represents Medium (601-992px); `l` represents Large (>992px).",
          "`w3-row-padding` adds an 8px gutter padding between columns."
        ],
        quickRevision: "The 12-column grid (`w3-row` + `w3-col`) splits screens into responsive columns: `s` (mobile), `m` (tablet), `l` (desktop). Slices: `w3-half` (50%), `w3-third` (33%), `w3-quarter` (25%)."
      },
      {
        code: "5.8",
        title: "W3.CSS Tables and List",
        whatIsIt: "W3.CSS provides clean, pre-styled classes for data tables and item lists that replace raw HTML styling with modern borders, striped alternating rows, hover highlights, and card lists.",
        whyImportant: "Formatting tables and list groups with raw CSS requires extensive code. W3.CSS table classes provide professional, responsive tables with a single class name.",
        howItWorks: "Adding classes like `w3-table-all` or `w3-ul` to standard `<table>` or `<ul>` tags applies padding, borders, zebra striping, and interactive hover highlights automatically.",
        tableTitle: "W3.CSS TABLE & LIST CLASSES SPECIFICATION",
        table: {
          headers: ["Class Name", "Applied HTML Element", "Visual Formatting & Interaction Effect"],
          rows: [
            ["`w3-table`", "`<table>`", "Basic table container with 8px cell padding and clean typography"],
            ["`w3-table-all`", "`<table>`", "Comprehensive styling: borders on all cells, shaded header, zebra striping, and padding"],
            ["`w3-striped`", "`<table>`", "Applies light grey background shading to alternating even rows (Zebra Striping)"],
            ["`w3-hoverable`", "`<table>`", "Highlights the row currently hovered under the mouse cursor"],
            ["`w3-bordered`", "`<table>`", "Draws a subtle horizontal divider line under each table row"],
            ["`w3-ul`", "`<ul>`", "Formats an unordered list into a clean, bordered item list group with padding"],
            ["`w3-hoverable` (on list)", "`<ul class=\"w3-ul w3-hoverable\">`", "Turns each list item into an interactive hover-highlightable card row"]
          ],
          colWidths: [110, 110, 286]
        },
        codeSnippet: `<!-- Styled W3.CSS Table -->
<table class="w3-table-all w3-hoverable">
    <thead>
        <tr class="w3-blue">
            <th>Module Code</th>
            <th>Subject Name</th>
            <th>Duration</th>
        </tr>
    </thead>
    <tr>
        <td>M1-R5</td>
        <td>IT Tools & Network Basics</td>
        <td>120 Hours</td>
    </tr>
    <tr>
        <td>M2-R5.1</td>
        <td>Web Designing & Publishing</td>
        <td>120 Hours</td>
    </tr>
</table>

<!-- Styled W3.CSS List Group -->
<ul class="w3-ul w3-card-4 w3-hoverable" style="max-width:350px;">
    <li><h3>Syllabus Units</h3></li>
    <li>Unit 1: Introduction to Web Design</li>
    <li>Unit 2: Editors (Notepad++, Sublime)</li>
    <li>Unit 3: HTML Basics & HTML5</li>
</ul>`,
        practicalExample: "To style a raw marksheet table: Simply add `class=\"w3-table-all w3-hoverable\"` to `<table>` and `class=\"w3-teal\"` to the `<tr>` header. The table instantly gains border lines, cell padding, zebra stripes, a dark teal header, and interactive row hover effects.",
        importantPoints: [
          "`w3-table-all` combines borders, zebra striping, and padding in a single class.",
          "`w3-hoverable` highlights table rows or list items when hovered.",
          "`w3-ul` formats unordered lists into modern bordered card list groups."
        ],
        quickRevision: "W3.CSS tables: `w3-table-all` (borders + zebra striping + padding), `w3-hoverable` (hover highlight). Lists: `w3-ul` formats lists into modern item card groups."
      },
      {
        code: "5.9",
        title: "W3.CSS Images",
        whatIsIt: "W3.CSS image utility classes control the responsiveness, border shaping (circles, rounded corners), card elevations, and hover opacity effects on image elements.",
        whyImportant: "Images that are not responsive overflow mobile phone screens, breaking page layouts. W3.CSS ensures images scale smoothly while providing quick styling classes.",
        howItWorks: "Applying `w3-image` sets `max-width: 100%; height: auto;` automatically. Classes like `w3-circle` or `w3-hover-opacity` apply border-radius and CSS opacity filters.",
        tableTitle: "W3.CSS IMAGE CLASSES SPECIFICATION",
        table: {
          headers: ["W3.CSS Image Class", "Visual Style / Behavioral Effect", "Typical Practical Use Case"],
          rows: [
            ["`w3-image`", "Makes any image fully responsive (`max-width: 100%; height: auto;`)", "Hero banner graphics, responsive article photos"],
            ["`w3-circle`", "Rounds the image into a **100% perfect circular portrait**", "User profile avatars, author photos, testimonial portraits"],
            ["`w3-round` / `w3-round-large`", "Rounds the image corners with smooth curved radius", "Thumbnail cards, gallery previews, portfolio covers"],
            ["`w3-hover-opacity`", "Fades image opacity on mouse hover (interactive visual feedback)", "Clickable image cards, product catalog photos"],
            ["`w3-card-4` (on image container)", "Wraps the image in a 4px elevated paper drop shadow", "Featured product showcases, photograph presentation cards"]
          ],
          colWidths: [130, 195, 181]
        },
        codeSnippet: `<!-- W3.CSS Responsive Image Gallery Card -->
<div class="w3-card-4" style="max-width:320px;">
    <img src="campus.jpg" alt="NIELIT Campus" class="w3-image w3-hover-opacity">
    <div class="w3-container w3-center">
        <h4>NIELIT Campus Building</h4>
        <p class="w3-text-grey">Electronics Niketan, New Delhi</p>
    </div>
</div>`,
        practicalExample: "A circular faculty profile: Write `<img src=\"sir.jpg\" class=\"w3-circle w3-card-2\" style=\"width:120px;\">`. The photo is instantly clipped into a circle with an elevated shadow without writing any complex CSS clipping masks.",
        importantPoints: [
          "`w3-image` makes an image responsive, automatically scaling down on smaller screens.",
          "`w3-circle` transforms square images into circular avatar portraits.",
          "`w3-hover-opacity` adds a transparent hover effect to signal clickability."
        ],
        quickRevision: "W3.CSS images: `w3-image` (responsive scaling), `w3-circle` (circular profile avatar), `w3-round` (curved corners), and `w3-hover-opacity` (hover transparency)."
      }
    ],
    unitRevision: [
      "W3.CSS is a modern, pure-CSS responsive framework by W3Schools with zero JavaScript dependencies (<25 KB).",
      "W3.CSS is linked in `<head>` via `<link rel=\"stylesheet\" href=\"w3.css\">` with the viewport meta tag.",
      "Typography classes: `w3-tiny`, `w3-small`, `w3-large`, `w3-xlarge`, `w3-xxlarge`, `w3-jumbo` (~64px), and `w3-center`.",
      "Colors: `w3-color` sets background with automatic white text contrast (e.g. `w3-blue`, `w3-teal`); `w3-text-color` modifies font color; `w3-hover-color` triggers on hover.",
      "`w3-container` adds 16px horizontal padding; `w3-panel` adds 16px horizontal padding plus 16px vertical margins for alert callouts.",
      "Borders & Cards: `w3-border`, `w3-round`, `w3-circle` (100% round avatar), `w3-card-2`, and `w3-card-4` (4px paper shadow).",
      "The 12-Column Responsive Grid (`w3-row` + `w3-col`): `s` (small mobile <601px), `m` (medium tablet 601-992px), `l` (large desktop >992px). Slices: `w3-half` (50%), `w3-third` (33%), `w3-quarter` (25%). Sum must equal 12.",
      "Tables & Lists: `w3-table-all` (borders, zebra striping, padding), `w3-hoverable` (hover highlight), and `w3-ul` (bordered item list groups).",
      "Images: `w3-image` (responsive `max-width: 100%`), `w3-circle` (round avatars), and `w3-hover-opacity`."
    ],
    keyTerms: [
      { term: "W3.CSS", fullForm: "W3Schools Cascading Style Sheets Framework", desc: "Lightweight, pure-CSS responsive front-end framework." },
      { term: "CDN", fullForm: "Content Delivery Network", desc: "Network of global edge servers hosting frameworks like W3.CSS for fast loading." },
      { term: "RWD", fullForm: "Responsive Web Design", desc: "Web architecture enabling layouts to adapt fluidly across devices." },
      { term: "Viewport", fullForm: "Browser Viewport Window", desc: "Visible canvas area of a computer display or mobile device." }
    ]
  };
}
