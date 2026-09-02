// Unit 4: Cascading Style Sheets (CSS) - Tutorial & Textbook Grade Content for NIELIT O-Level M2-R5.1
export function getUnit4Canonical() {
  return {
    unitNumber: 4,
    title: "Cascading Style Sheets (CSS)",
    officialSection: "16.6 (iv)",
    totalHours: 25,
    theoryHours: 10,
    practicalHours: 15,
    introduction: "Cascading Style Sheets (CSS) is the standardized stylesheet language used to describe the presentation, visual styling, formatting, and layout of documents written in HTML. Developed by Håkon Wium Lie and Bert Bos in 1994 and standardized by W3C, CSS decouples presentation from document structure, enabling global site restyling by editing a single `.css` file. This unit covers CSS syntax rulesets, the 3 implementation methods (Inline, Internal, External), the cascading specificity hierarchy, CSS selectors (Universal, Type, Class, ID, Sub-selector, Attribute, Grouping, Pseudo-classes), CSS properties (Backgrounds, Typography, Box Model, Borders, Positioning modes: static, relative, absolute, fixed, sticky), styled CSS lists, styled data tables, navigation menu design (horizontal bars and dropdowns), and responsive image gallery design.",
    whatYouWillLearn: [
      "The role and purpose of CSS in modern web design and the concept of 'Cascading'.",
      "The 3 methods of adding CSS: Inline (`style=\"\"`), Internal (`<style>`), and External (`<link rel=\"stylesheet\">`).",
      "CSS Selectors in detail: Universal (`*`), Type (`p`), Class (`.btn`), ID (`#header`), Sub-selector/Descendant (`div p`), Child (`div > p`), Attribute (`[type='text']`), and Grouping (`h1, h2, h3`).",
      "CSS Properties: Background colors, gradients, background images, block formatting, line heights, and typography.",
      "The CSS Box Model: Content area, Padding, Border, Margin, and `box-sizing: border-box`.",
      "Positioning properties: `static` (normal flow), `relative`, `absolute`, `fixed`, and `sticky`.",
      "CSS Lists styling: `list-style-type`, `list-style-position`, and custom graphic markers.",
      "CSS Tables styling: `border-collapse`, zebra striping (`:nth-child(even)`), and cell padding.",
      "CSS Navigation Menu design: Horizontal flex navigation bars with hover state transitions and dropdown sub-menus.",
      "CSS Image Gallery: Responsive thumbnail grids with hover zoom transformations."
    ],
    topics: [
      {
        code: "4.1",
        title: "Introduction to CSS",
        whatIsIt: "CSS stands for **Cascading Style Sheets**. It is a stylesheet language used to control the visual presentation, color schemes, typography, layout, and responsiveness of HTML web documents.",
        whyImportant: "Before CSS, developers had to use ugly presentational HTML tags like `<font color=\"red\">` on every single line. CSS separated content from styling, allowing one stylesheet to format thousands of pages simultaneously.",
        howItWorks: "A CSS ruleset consists of a **Selector** (which targets HTML elements) and a **Declaration Block** (enclosed in curly braces `{}`) containing one or more **Property: Value;** pairs.",
        codeSnippet: `/* CSS Rule Structure */
selector {
    property: value;
    property: value;
}

/* Concrete Example */
h1 {
    color: #0056b3;
    font-family: Arial, sans-serif;
    font-size: 28px;
    text-align: center;
}`,
        componentsTitle: "ANATOMY OF A CSS RULESET",
        componentsOrTypes: [
          "Selector: Points to the HTML element you want to style (e.g. `h1`, `.card`, `#nav`).",
          "Declaration Block: Enclosed within opening `{` and closing `}` curly braces.",
          "Property: The specific visual style attribute being modified (e.g. `color`, `font-size`, `margin`).",
          "Value: The parameter assigned to the property (e.g. `blue`, `16px`, `center`), terminated by a semicolon `;`.",
          "Cascading Order: When conflicting rules exist, styles cascade based on Importance (`!important`), Specificity, and Source Order."
        ],
        practicalExample: "Imagine a 500-page university website. If the university changes its official brand color from blue to green: With CSS, the developer simply changes `color: green;` in one file (`style.css`), and all 500 pages update instantly.",
        importantPoints: [
          "CSS stands for Cascading Style Sheets.",
          "CSS was created by Håkon Wium Lie in 1994 and is standardized by the W3C.",
          "A CSS declaration always ends with a semicolon `;`, and declaration blocks are surrounded by curly braces `{}`."
        ],
        quickRevision: "CSS controls the visual presentation of HTML. A CSS rule consists of a Selector and a Declaration block containing `property: value;` pairs."
      },
      {
        code: "4.2",
        title: "Types of CSS (Inline, Internal, External)",
        whatIsIt: "There are three standardized methods to apply CSS styling rules to an HTML document: **Inline CSS**, **Internal CSS**, and **External CSS**.",
        whyImportant: "Understanding the three methods and their cascading priority hierarchy is critical for writing maintainable code and avoiding styling conflicts.",
        howItWorks: "Styles are declared either inside the HTML tag itself (`style` attribute), in the document `<head>` (`<style>` tag), or in a standalone `.css` file linked via `<link>`.",
        tableTitle: "THE 3 METHODS OF APPLYING CSS COMPARED",
        table: {
          headers: ["Method / Type", "Syntax Implementation", "Scope & Maintenance", "Cascading Priority Level"],
          rows: [
            ["Inline CSS", "<h1 style=\"color: red;\">Title</h1>", "Applies to that single individual element only; tedious to maintain", "**Highest Priority** (overrides Internal and External)"],
            ["Internal CSS", "<head><style> h1 { color: red; } </style></head>", "Applies to all matching elements within that single HTML file", "Medium Priority (overrides External)"],
            ["External CSS", "<head><link rel=\"stylesheet\" href=\"style.css\"></head>", "Applies globally to unlimited linked HTML pages; standard best practice", "Base Priority (cached by browser; ultra-fast)"]
          ],
          colWidths: [100, 195, 140, 71]
        },
        componentsTitle: "CASCADING SPECIFICITY HIERARCHY",
        componentsOrTypes: [
          "Priority Order (Lowest to Highest): 1. Browser Default Styles -> 2. External Stylesheet (`style.css`) -> 3. Internal Stylesheet (`<style>`) -> 4. Inline Styles (`style=\"\"`) -> 5. `!important` rule.",
          "External CSS Advantages: Code reusability across entire website, complete separation of concerns, faster page loads (browser caches `.css` file after first visit).",
          "When to Use Inline CSS: Strictly for quick emergency testing or dynamic styling injected via JavaScript."
        ],
        practicalExample: "If `style.css` declares `p { color: black; }`, the `<style>` tag in `<head>` declares `p { color: blue; }`, and `<p style=\"color: red;\">` is typed on the element: The paragraph displays in **RED** because Inline CSS has higher cascading priority than internal and external sheets.",
        importantPoints: [
          "External CSS is the industry standard best practice, linked via `<link rel=\"stylesheet\" href=\"style.css\">`.",
          "Inline CSS has the highest cascading priority over Internal and External CSS.",
          "External CSS files are cached by browsers, dramatically improving website load speeds."
        ],
        quickRevision: "3 types of CSS: Inline (inside tag, highest priority), Internal (inside `<style>` in head), External (separate `.css` file via `<link>`, best practice)."
      },
      {
        code: "4.3",
        title: "CSS Selectors: Universal, ID, Tag, Class, Sub Selector, Attribute, Group",
        whatIsIt: "A CSS Selector is the pattern expression at the start of a CSS rule that targets and selects specific HTML elements on the page to receive styling.",
        whyImportant: "Mastering CSS selectors allows developers to precisely target individual buttons, specific form inputs, or entire layout sections without altering HTML markup.",
        howItWorks: "The browser's CSS matching engine parses selectors from right to left, matching elements against tag names, attributes, classes, and document tree hierarchies.",
        tableTitle: "MASTER CSS SELECTORS REFERENCE TABLE",
        table: {
          headers: ["Selector Type", "CSS Selector Syntax", "Target Description", "Practical Code Example"],
          rows: [
            ["Universal Selector", "`*`", "Selects every single element on the entire page", "* { margin: 0; padding: 0; }"],
            ["Type / Tag Selector", "`element`", "Selects all elements of that specific HTML tag name", "p { font-size: 16px; }"],
            ["Class Selector", "`.classname`", "Selects elements sharing that class attribute (prefix with dot `.`)", ".btn { background: blue; color: white; }"],
            ["ID Selector", "`#idname`", "Selects the single unique element with that ID (prefix with hash `#`)", "#header { height: 80px; }"],
            ["Descendant (Sub Selector)", "`ancestor descendant`", "Selects elements nested anywhere inside the specified ancestor", "div p { color: gray; }"],
            ["Child Selector", "`parent > child`", "Selects only direct immediate children (not deeper grandchildren)", "ul > li { font-weight: bold; }"],
            ["Attribute Selector", "`[attribute='val']`", "Selects elements having that specific attribute and value", "input[type=\"text\"] { border: 1px solid blue; }"],
            ["Grouping Selector", "`sel1, sel2, sel3`", "Applies identical styles to multiple selectors (separated by comma)", "h1, h2, h3 { font-family: sans-serif; }"]
          ],
          colWidths: [110, 110, 140, 146]
        },
        codeSnippet: `/* Demonstrating various selectors */
* { box-sizing: border-box; }          /* Universal */
h1, h2, h3 { color: #1a365d; }        /* Grouping */
.alert-box { padding: 15px; }         /* Class */
#main-nav { background: #333; }       /* ID */
nav a { color: white; }               /* Descendant */
input[type="submit"] { cursor: pointer; } /* Attribute */`,
        practicalExample: "To style all submit buttons across a portal without affecting regular text boxes: Write `input[type=\"submit\"] { background: green; color: white; font-weight: bold; }`. Only submit buttons turn green.",
        importantPoints: [
          "Class selectors start with a dot `.` (e.g. `.card`); ID selectors start with a hash `#` (e.g. `#header`).",
          "An ID must be unique within a webpage; a Class can be reused on multiple elements.",
          "The Universal selector is represented by an asterisk `*`.",
          "Comma `,` groups selectors together; space represents descendant (sub-selector) nesting."
        ],
        quickRevision: "Selectors target HTML: `*` (all), `tag` (element), `.class` (shared, dot), `#id` (unique, hash), `parent child` (descendant), `[attr]` (attribute), `h1, h2` (grouped)."
      },
      {
        code: "4.4",
        title: "CSS Properties: Background, Block, Box, List, Border, Positioning Properties",
        whatIsIt: "CSS properties are the specific visual and structural attributes modified on target HTML elements. The **CSS Box Model** is the foundational layout architecture governing every element rendered on a webpage.",
        whyImportant: "Without understanding the Box Model and positioning schemes, web pages suffer overlapping text, broken margins, and misaligned layouts.",
        howItWorks: "Every HTML element is rendered by the browser as a rectangular box consisting of four concentric layers: 1. Content Area, 2. Padding, 3. Border, and 4. Margin.",
        componentsTitle: "THE 4 CONCENTRIC LAYERS OF THE CSS BOX MODEL",
        componentsOrTypes: [
          "1. Content Area: The innermost core where text, images, or child elements reside (dimensions set by `width` and `height`).",
          "2. Padding: Transparent internal clearance space between the content and the inner border (`padding: 10px;`).",
          "3. Border: The perimeter boundary line wrapping around the padding and content (`border: 2px solid black;`).",
          "4. Margin: Transparent external clearance space outside the border separating the element from neighboring elements (`margin: 15px;`).",
          "The `box-sizing: border-box` Rule: By default, padding and borders ADD to width. Setting `box-sizing: border-box` forces width to include padding and border, preventing layout overflow."
        ],
        tableTitle: "CORE CSS POSITIONING MODES EXPLAINED",
        table: {
          headers: ["Positioning Mode", "Syntax", "Behavior Relative To", "Typical Practical Use Case"],
          rows: [
            ["Static (Default)", "position: static;", "Normal document flow; top/left/right/bottom properties have NO effect", "Default paragraphs and standard text flow"],
            ["Relative", "position: relative;", "Its own normal original position (offsets without affecting neighbors)", "Slight visual nudge; acts as anchor for absolute children"],
            ["Absolute", "position: absolute;", "Nearest positioned ancestor (or viewport); removed from normal flow", "Popup badges, modal close buttons, dropdown menus"],
            ["Fixed", "position: fixed;", "The browser viewport window; remains pinned on screen during scroll", "Sticky top navigation bars, floating 'Back to Top' buttons"],
            ["Sticky", "position: sticky;", "Toggles between relative and fixed based on user's scroll position", "Sticky table header rows, category sub-menus"]
          ],
          colWidths: [100, 110, 150, 146]
        },
        codeSnippet: `/* Practical Box Model & Positioning Example */
.notification-card {
    box-sizing: border-box;
    width: 320px;
    padding: 16px;              /* Internal spacing */
    border: 1px solid #cbd5e1;  /* Perimeter line */
    margin: 20px auto;          /* External spacing & center */
    background-color: #ffffff;
    border-radius: 8px;
    position: relative;
}

.close-btn {
    position: absolute;         /* Pinned to top-right of card */
    top: 8px;
    right: 8px;
    cursor: pointer;
}`,
        practicalExample: "To create a sticky header that stays at the top of the screen when users scroll down a 10-page article: Apply `nav { position: fixed; top: 0; left: 0; width: 100%; z-index: 1000; }`. The navbar never scrolls away.",
        importantPoints: [
          "The CSS Box Model consists of 4 parts from inside out: Content -> Padding -> Border -> Margin.",
          "`padding` is inside the border; `margin` is outside the border.",
          "`position: absolute` positions an element relative to its nearest positioned ancestor.",
          "`position: fixed` locks an element to the viewport window during scrolling.",
          "`box-sizing: border-box` includes padding and borders in element width calculations."
        ],
        quickRevision: "The Box Model: Content -> Padding -> Border -> Margin. Positioning: static (default), relative (offset from self), absolute (offset from ancestor), fixed (pinned to screen)."
      },
      {
        code: "4.5",
        title: "CSS Lists",
        whatIsIt: "CSS list styling properties allow web developers to customize, position, or replace default bullet points and numbering markers in HTML lists (`<ul>` and `<ol>`).",
        whyImportant: "Default browser bullet discs look outdated. CSS list properties allow replacing bullets with custom icons or completely removing markers (`list-style: none;`) to construct navigation bars.",
        howItWorks: "Developers apply `list-style-type`, `list-style-position`, and `list-style-image` to the list container.",
        tableTitle: "CSS LIST PROPERTIES SPECIFICATION",
        table: {
          headers: ["CSS Property", "Accepted Values", "Visual Effect on List Markers"],
          rows: [
            ["`list-style-type` (Unordered)", "`none`, `disc`, `circle`, `square`", "Controls bullet shape; `none` removes bullets entirely"],
            ["`list-style-type` (Ordered)", "`decimal`, `decimal-leading-zero`, `lower-roman`, `upper-roman`, `lower-alpha`", "Controls numbering style (e.g. 01, 02, I, II, a, b)"],
            ["`list-style-position`", "`inside`, `outside` (default)", "`outside` hangs markers outside text block; `inside` brings markers inside text flow"],
            ["`list-style-image`", "url('custom-bullet.png')", "Replaces standard bullet dots with a custom miniature image"],
            ["Shorthand `list-style`", "list-style: square inside url('icon.png');", "Combines type, position, and image in a single declaration"]
          ],
          colWidths: [130, 160, 216]
        },
        codeSnippet: `/* Resetting list for modern navigation bar */
ul.nav-menu {
    list-style-type: none;      /* Removes bullet dots */
    margin: 0;
    padding: 0;
}

ul.nav-menu li {
    display: inline-block;      /* Arranges items horizontally */
    margin-right: 20px;
}`,
        practicalExample: "Every horizontal website navigation bar begins as an HTML `<ul>`. Applying `list-style-type: none; margin: 0; padding: 0;` strips away the bullet dots and indents. Adding `display: inline-block;` aligns the links horizontally across the header.",
        importantPoints: [
          "`list-style-type: none;` is the foundational reset used to turn HTML lists into navigation menus.",
          "`list-style-position: inside` indents the bullet marker within the text content boundary.",
          "`list-style-image` allows substituting graphical icons for default bullets."
        ],
        quickRevision: "CSS lists: `list-style-type` sets marker shapes (square, roman) or removes them (`none`). `list-style-position` sets inside/outside. Used to build navigation menus."
      },
      {
        code: "4.6",
        title: "CSS Tables",
        whatIsIt: "CSS table styling properties format data tables by collapsing double borders, setting zebra-striped alternating rows, and adding hover highlights.",
        whyImportant: "Raw HTML tables with `border=\"1\"` look archaic with ugly separated double lines. Modern CSS creates clean, borderless, readable spreadsheet-grade tables.",
        howItWorks: "The `border-collapse: collapse;` property merges adjacent cell borders into a single sleek line. CSS pseudo-classes (`:nth-child(even)`) automate alternating row shading.",
        codeSnippet: `/* Modern Clean CSS Table Styling */
table.styled-table {
    width: 100%;
    border-collapse: collapse;       /* Merges double cell borders into one */
    font-family: Arial, sans-serif;
}

table.styled-table th, 
table.styled-table td {
    padding: 12px 15px;              /* Internal cell breathing room */
    border: 1px solid #e2e8f0;
    text-align: left;
}

table.styled-table th {
    background-color: #1e40af;       /* Dark blue header */
    color: #ffffff;
    font-weight: bold;
}

table.styled-table tr:nth-child(even) {
    background-color: #f8fafc;       /* Zebra striping on even rows */
}

table.styled-table tr:hover {
    background-color: #e2e8f0;       /* Interactive row hover highlight */
}`,
        componentsTitle: "KEY CSS TABLE PROPERTIES",
        componentsOrTypes: [
          "`border-collapse: collapse;`: Merges individual cell borders into a single clean border line (the most important table CSS property).",
          "`border-spacing: 10px;`: Sets gap distance between cells when `border-collapse` is set to `separate`.",
          "`:nth-child(even)` or `:nth-child(odd)`: Automatically applies light background shading to alternating rows (Zebra Striping) to prevent eye strain.",
          "`tr:hover`: Highlights the active row under the cursor with a subtle color change for improved readability."
        ],
        practicalExample: "A 50-row student marks table: Adding `tr:nth-child(even) { background-color: #f2f2f2; }` shades every second row grey. Students reading across wide columns can track grades without lines blurring together.",
        importantPoints: [
          "`border-collapse: collapse;` collapses double borders into a single clean line.",
          "Zebra striping is achieved using `:nth-child(even)` or `:nth-child(odd)`.",
          "`text-align` and `vertical-align` control horizontal and vertical cell alignment."
        ],
        quickRevision: "CSS tables: Use `border-collapse: collapse;` to remove double borders, `padding` for cell spacing, and `:nth-child(even)` for alternating zebra striping."
      },
      {
        code: "4.7",
        title: "CSS Menu Design",
        whatIsIt: "CSS menu design involves styling an HTML unordered list (`<ul>` and `<li>`) into interactive horizontal or vertical navigation bars featuring hover states, active indicators, and dropdown sub-menus.",
        whyImportant: "Navigation menus are the most important interactive component on a website, guiding visitors through site pages and services.",
        howItWorks: "List items are aligned horizontally using `display: flex;` or `display: inline-block;`. Dropdown sub-menus are hidden with `display: none;` and revealed on hover using `li:hover > ul { display: block; }`.",
        codeSnippet: `<!-- CSS Dropdown Navigation Menu Example -->
<nav class="navbar">
    <ul class="nav-links">
        <li><a href="#home">Home</a></li>
        <li class="dropdown">
            <a href="#courses">Courses &#9662;</a>
            <ul class="dropdown-menu">
                <li><a href="#m1">M1-R5: IT Tools</a></li>
                <li><a href="#m2">M2-R5.1: Web Design</a></li>
                <li><a href="#m3">M3-R5: Python</a></li>
            </ul>
        </li>
        <li><a href="#contact">Contact</a></li>
    </ul>
</nav>

<style>
.navbar ul { list-style: none; margin: 0; padding: 0; background: #333; display: flex; }
.navbar a { display: block; padding: 14px 20px; color: white; text-decoration: none; }
.navbar a:hover { background: #555; }
.dropdown { position: relative; }
.dropdown-menu { display: none; position: absolute; top: 100%; left: 0; background: #444; min-width: 180px; flex-direction: column; }
.dropdown:hover .dropdown-menu { display: flex; } /* Reveal dropdown on hover */
</style>`,
        componentsTitle: "MENU DESIGN BEST PRACTICES",
        componentsOrTypes: [
          "Semantic Base: Always construct menus from semantic `<nav>` and `<ul>`/`<li>` tags for accessibility and SEO.",
          "Clickable Target Area: Set `display: block;` on `<a>` tags and add padding so the entire box area is clickable, not just the text characters.",
          "Visual Feedback: Always define `:hover` and `:focus` states so users receive instant visual confirmation of interactive elements.",
          "Mobile Hamburger Menu: On small screens, hide horizontal links and display a 3-bar hamburger icon (`&#9776;`) to toggle a vertical slide-out drawer."
        ],
        practicalExample: "When you visit a portal and hover your mouse over 'Academics': A vertical box with 'Undergraduate', 'Postgraduate', and 'Syllabus' smoothly drops down. This is powered purely by CSS `position: absolute;` and `:hover`.",
        importantPoints: [
          "Navigation menus are built using semantic `<nav>` and `<ul>` lists.",
          "Dropdown menus hide child `<ul>` lists with `display: none;` and show them on hover via `:hover`.",
          "Anchor `<a>` tags should have `display: block;` to enlarge the clickable target area."
        ],
        quickRevision: "CSS menus transform `<ul>` lists into horizontal bars using flexbox or inline-block. Dropdowns hide sub-menus (`display: none`) and reveal them on hover (`:hover`)."
      },
      {
        code: "4.8",
        title: "CSS Image Gallery",
        whatIsIt: "A CSS Image Gallery is a responsive visual grid layout designed to showcase multiple image thumbnails with borders, captions, hover zoom effects, and modal viewing capabilities.",
        whyImportant: "Image galleries are essential for product catalogs, event photos, portfolio showcases, and tourism portals, requiring fluid responsiveness across mobile screens.",
        howItWorks: "Images are organized in cards formatted with CSS Grid or Flexbox. CSS transitions and transformations (`transform: scale(1.05);`) add interactive hover micro-animations.",
        codeSnippet: `/* Responsive CSS Image Gallery */
.gallery-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 16px;
    padding: 16px;
}

.gallery-item {
    border: 1px solid #ddd;
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.gallery-item:hover {
    transform: scale(1.04);          /* Smooth hover zoom effect */
    box-shadow: 0 6px 12px rgba(0,0,0,0.2);
}

.gallery-item img {
    width: 100%;
    height: 150px;
    object-fit: cover;               /* Prevents image stretching */
    display: block;
}

.gallery-caption {
    padding: 10px;
    text-align: center;
    font-size: 14px;
    background: #fff;
}`,
        componentsTitle: "GALLERY DESIGN PRINCIPLES",
        componentsOrTypes: [
          "`grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));`: Creates an automated responsive grid that shows 4 columns on desktop and automatically wraps down to 1 column on phones.",
          "`object-fit: cover;`: Scales images to completely fill thumbnail dimensions while preserving aspect ratio, preventing distorted or squished photos.",
          "`transition` and `transform: scale()`: Produces smooth, elegant zoom animations when the mouse hovers over an image card.",
          "`box-shadow`: Adds realistic paper elevation and depth."
        ],
        practicalExample: "A photography portfolio website: Photos are displayed in a clean 4-column grid. When a user hovers over a landscape photo, the card gently lifts upward with a soft drop shadow and zooms in slightly, inviting the user to click.",
        importantPoints: [
          "`object-fit: cover;` prevents image distortion inside fixed-dimension gallery boxes.",
          "CSS Grid (`auto-fill`, `minmax`) automatically reflows gallery columns across screen widths without manual media queries.",
          "`transform: scale()` creates subtle, modern hover micro-animations."
        ],
        quickRevision: "CSS image galleries organize photos into responsive grids using CSS Grid/Flexbox. `object-fit: cover` prevents stretching, and `transform: scale()` adds hover zoom."
      }
    ],
    unitRevision: [
      "CSS (Cascading Style Sheets) separates presentation from HTML structure; rule syntax: `selector { property: value; }`.",
      "The 3 types of CSS: Inline (`style=\"\"`, highest priority), Internal (`<style>` in `<head>`), and External (`<link rel=\"stylesheet\">`, industry best practice).",
      "CSS Selectors: Universal (`*`), Type (`p`), Class (`.class`, dot), ID (`#id`, hash), Descendant (space), Child (`>`), Attribute (`[type='text']`), Grouping (comma).",
      "The CSS Box Model consists of 4 concentric layers from inside out: Content -> Padding -> Border -> Margin.",
      "`box-sizing: border-box` forces element width calculations to include padding and borders.",
      "Positioning modes: `static` (default normal flow), `relative` (offset from itself), `absolute` (relative to positioned ancestor), `fixed` (locked to viewport), and `sticky`.",
      "CSS Lists: `list-style-type: none;` strips default bullets, enabling the creation of navigation menus from `<ul>` tags.",
      "CSS Tables: `border-collapse: collapse;` merges double borders; `:nth-child(even)` automates zebra striping.",
      "CSS Menus: Built from semantic `<nav>` and `<ul>`; dropdowns hide sub-menus (`display: none`) and reveal them on hover (`:hover`).",
      "CSS Galleries: Organize thumbnails using CSS Grid with `object-fit: cover;` to prevent distortion and `transform: scale()` for hover zoom effects."
    ],
    keyTerms: [
      { term: "CSS", fullForm: "Cascading Style Sheets", desc: "Stylesheet language describing the visual presentation of HTML documents." },
      { term: "W3C", fullForm: "World Wide Web Consortium", desc: "International body maintaining CSS specifications." },
      { term: "specificity", fullForm: "CSS Specificity Weight", desc: "Algorithm determining which CSS rule applies when multiple rules target the same element." },
      { term: "box-sizing", fullForm: "CSS Box Sizing Model", desc: "Property altering default width calculations to include padding and borders." },
      { term: "CDN", fullForm: "Content Delivery Network", desc: "Geographically distributed servers delivering external CSS and JS libraries rapidly." }
    ]
  };
}
