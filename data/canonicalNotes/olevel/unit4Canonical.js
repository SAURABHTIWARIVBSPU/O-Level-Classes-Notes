// Unit 4: Cascading Style Sheets (CSS) - Comprehensive Tutorial & Textbook Grade Content for NIELIT O-Level M2-R5.1
// Standardized to W3C & MDN Specifications and Official Examination Standards

export function getUnit4Canonical() {
  return {
    unitNumber: 4,
    title: "Cascading Style Sheets (CSS)",
    officialSection: "16.6 (iv)",
    totalHours: 25,
    theoryHours: 10,
    practicalHours: 15,
    introduction: "Cascading Style Sheets (CSS) is the standardized stylesheet language used to describe the presentation, visual styling, formatting, and layout of documents written in HTML. Developed by Håkon Wium Lie and Bert Bos in 1994 and standardized by the W3C, CSS enforces a strict separation of document structure from presentation. This unit covers the complete spectrum of CSS: ruleset anatomy, the 3 implementation methods (Inline, Internal, External), cascading priority and specificity math, CSS selectors (Universal, Type, Class, ID, Combinators, Attributes, Pseudo-classes, Pseudo-elements), colors (Hex, RGB, HSL, modern formats) and backgrounds, typography, the Box Model (content-box vs border-box), borders, display modes, positioning schemes (static, relative, absolute, fixed, sticky, z-index), floats, clear and overflow, styled lists, data tables, navigation menus, image galleries, modern Flexbox 1D layout, CSS Grid 2D layout, responsive web design with media queries and modern relative units, and CSS custom properties (variables) with transitions and transforms.",
    whatYouWillLearn: [
      "The role, purpose, and cascading mechanics of CSS, including modular specification evolution.",
      "The 3 methods of adding CSS: Inline (`style=\"\"`), Internal (`<style>`), and External (`<link rel=\"stylesheet\">`), plus specificity rules.",
      "CSS Selectors: Universal (`*`), Type (`p`), Class (`.card`), ID (`#nav`), Combinators (Descendant, Child `>`, Adjacent `+`, General `~`), Attributes, and Pseudo selectors.",
      "CSS Colors (Hex, RGB/RGBA, HSL/HSLA), Gradients, and Background properties (cover, contain, position, attachment).",
      "Typography: Font stacks, web-safe fonts, Google Fonts, @font-face, text formatting, and line heights.",
      "The CSS Box Model: Content, Padding, Border, Margin, and `box-sizing: border-box`.",
      "Borders, rounded corners (`border-radius: 50%`), box-shadow elevation, and accessible outlines.",
      "Display properties: `block`, `inline`, `inline-block`, `none` vs `visibility: hidden`.",
      "Positioning modes: `static`, `relative`, `absolute`, `fixed`, `sticky`, and `z-index` stacking context.",
      "Floats, clearing floats (`clear: both`), the Clearfix hack, and content overflow management.",
      "Styling lists: `list-style: none`, custom bullet markers, and reset conventions.",
      "Styling data tables: `border-collapse: collapse`, zebra striping (`:nth-child(even)`), and responsive wrappers.",
      "Navigation Menu Design: Semantic horizontal flex navigation bars and pure CSS dropdown submenus.",
      "Image Galleries: Responsive card grids, aspect ratios, `object-fit: cover`, and hover elevations.",
      "Modern 1D Flexbox: Main axis, cross axis, `justify-content`, `align-items`, `flex: 1`, and `gap`.",
      "Modern 2D CSS Grid: Fractional units (`fr`), `repeat()`, `minmax()`, and auto-fitting responsive columns.",
      "Responsive Web Design: Viewport meta tag, `@media` queries, relative units (`rem`, `em`, `vw`, `vh`), and `clamp()`.",
      "Modern CSS: Custom properties (`--var`), dynamic theming, 2D transforms, and smooth transitions."
    ],
    topics: [
      {
        code: "4.1",
        title: "Introduction to CSS & Syntax Ruleset",
        whatIsIt: "CSS stands for **Cascading Style Sheets**. It is a declarative stylesheet language standardized by the W3C that describes the presentation, layout, typography, and visual adaptation of HTML documents across various display media.",
        whyImportant: "Prior to CSS, developers were forced to embed presentational HTML tags like `<font>` and `<center>` directly into every line of code. CSS established the foundational architectural rule: **Separation of Structure (HTML) from Presentation (CSS)**, enabling a single stylesheet to format thousands of pages simultaneously.",
        howItWorks: "A CSS ruleset consists of a **Selector** (targeting HTML elements) and a **Declaration Block** (enclosed in curly braces `{}`) containing one or more **Property: Value;** declarations separated by colons and terminated by semicolons.",
        codeSnippet: `/* CSS Ruleset Anatomy */
selector {
    property: value;
    property: value;
}

/* Concrete Production Example */
h1 {
    color: #0284c7;
    font-family: 'Segoe UI', Arial, sans-serif;
    font-size: 28px;
    text-align: center;
}`,
        componentsTitle: "ANATOMY OF A CSS RULESET",
        componentsOrTypes: [
          "Selector: Identifies the HTML element(s) to style (e.g. `h1`, `.card`, `#nav`).",
          "Declaration Block: Enclosed within opening `{` and closing `}` curly braces.",
          "Property: The specific visual attribute being formatted (e.g. `color`, `font-size`, `margin`).",
          "Value: The parameter assigned to the property (e.g. `#0284c7`, `1.5rem`, `center`), terminated by a semicolon `;`.",
          "Comments: Written strictly using `/* comment */`. HTML comments (`<!-- -->`) are invalid in CSS."
        ],
        practicalExample: "Consider a 1,000-page educational portal. If the institution changes its brand color from navy to emerald green: With CSS, the developer modifies `color: #059669;` once inside `style.css`, and all 1,000 pages update across the web instantly.",
        importantPoints: [
          "CSS was created by Håkon Wium Lie at CERN in 1994 and standardized by the W3C in 1996.",
          "File extension for external stylesheets is `.css`.",
          "There is no single monolithic 'CSS4' release; modern CSS evolves through modular W3C specifications."
        ],
        quickRevision: "CSS = Cascading Style Sheets | Proposed: Håkon Wium Lie (1994) | Standard: W3C | Syntax: selector { property: value; } | Comments: /* comment */."
      },
      {
        code: "4.2",
        title: "Types of CSS (Inline, Internal, External) & Cascade Precedence",
        whatIsIt: "There are three standardized methods to apply CSS styling rules to an HTML document: **Inline CSS**, **Internal/Embedded CSS**, and **External CSS**.",
        whyImportant: "Understanding the three methods, their performance impacts, and their cascading specificity hierarchy is critical for writing maintainable code and resolving styling collisions.",
        howItWorks: "Styles are declared either inside the HTML tag itself (`style` attribute), in the document `<head>` (`<style>` tag), or in a standalone `.css` file linked via `<link rel=\"stylesheet\">`.",
        tableTitle: "THE 3 METHODS OF APPLYING CSS COMPARED",
        table: {
          headers: ["Method / Type", "Syntax Implementation", "Scope & Maintenance", "Cascading Priority Level"],
          rows: [
            ["Inline CSS", "<h1 style=\"color: red;\">Title</h1>", "Applies to that single individual element only; tedious to maintain", "**Highest Priority** (overrides Internal and External)"],
            ["Internal CSS", "<head><style> h1 { color: red; } </style></head>", "Applies to all matching elements within that single HTML file", "Medium Priority (overrides External)"],
            ["External CSS", "<head><link rel=\"stylesheet\" href=\"style.css\"></head>", "Applies globally to unlimited linked HTML pages; industry standard", "Base Priority (cached by browser; ultra-fast)"]
          ],
          colWidths: [100, 195, 140, 71]
        },
        practicalExample: "If `style.css` declares `p { color: black; }`, an internal style declares `p { color: blue; }`, and an inline tag declares `<p style=\"color: red;\">`: The paragraph renders **red** because Inline CSS carries the highest priority.",
        importantPoints: [
          "External CSS is the industry standard because browsers cache `.css` files locally, accelerating page load speeds.",
          "Precedence order: Inline CSS > Internal CSS > External CSS > Browser Defaults.",
          "If Internal and External styles have identical specificity, the one declared **later** in code wins.",
          "The `!important` rule overrides all normal specificity declarations."
        ],
        quickRevision: "3 Types: Inline (style attribute), Internal (<style> in head), External (<link>). Precedence: Inline > Internal > External. External is best practice."
      },
      {
        code: "4.3",
        title: "CSS Selectors (Universal, Type, Class, ID, Combinators & Attributes)",
        whatIsIt: "CSS Selectors are matching patterns used to target HTML elements on a web page to apply specific styling rulesets.",
        whyImportant: "Writing precise selectors prevents unintended styling leaks, reduces stylesheet file size, and ensures clean maintainable code. Selectors and specificity are heavily weighted on NIELIT examinations.",
        howItWorks: "Browsers evaluate selectors from right to left to locate elements matching type, class, identifier, relational position, attribute state, or pseudo condition.",
        tableTitle: "COMPLETE CSS SELECTOR TAXONOMY",
        table: {
          headers: ["Selector Type", "Pattern / Syntax", "Target Description", "Example Usage"],
          rows: [
            ["Universal", "*", "Every single element in document", "* { box-sizing: border-box; }"],
            ["Type / Element", "p, h1, div", "All elements sharing specified tag name", "p { line-height: 1.6; }"],
            ["Class", ".className", "All elements carrying specified class", ".btn { padding: 10px; }"],
            ["ID", "#uniqueId", "The single element with matching id", "#navbar { background: #232850; }"],
            ["Descendant", "div p", "Any <p> nested inside a <div>", ".card p { color: #64748b; }"],
            ["Child", "ul > li", "Only direct first-level children", "ul.nav > li { display: inline; }"],
            ["Adjacent Sibling", "h2 + p", "Immediate next sibling element", "h2 + p { font-weight: bold; }"],
            ["Attribute", "input[type='email']", "Elements matching attribute presence/value", "a[href^='https'] { color: green; }"],
            ["Grouping", "h1, h2, h3", "Multiple selectors sharing identical rules", "h1, h2 { font-family: sans-serif; }"]
          ],
          colWidths: [110, 110, 160, 126]
        },
        practicalExample: "To style only primary buttons without affecting general buttons: assign `<button class=\"btn btn-primary\">`, then target `.btn-primary { background-color: #f19a27; }`.",
        importantPoints: [
          "ID selector uses `#` and must be unique per HTML page.",
          "Class selector uses `.` and is infinitely reusable.",
          "Specificity formula: `(Inline, ID, Class/Attribute/PseudoClass, Element)`.",
          "Child combinator (`>`) matches direct children only; space matches any descendant."
        ],
        quickRevision: "* = Universal | # = ID | . = Class | Space = Descendant | > = Direct Child | + = Adjacent Sibling | [attr] = Attribute."
      },
      {
        code: "4.4",
        title: "CSS Colors, Color Models, Gradients & Backgrounds",
        whatIsIt: "CSS Colors and Backgrounds govern the chromatic representations (Hexadecimal, RGB, HSL, modern formats) and surface layer rendering (solid fills, gradients, images, positioning, repeat, attachment) of web elements.",
        whyImportant: "Color palettes define brand identity, user engagement, and visual hierarchy. Ensuring adequate contrast between text and background is a mandatory legal accessibility requirement (WCAG 2.1).",
        howItWorks: "Browsers composite background colors, gradient layers, and background images from back to front, applying tiling, sizing (`cover`/`contain`), and positioning relative to the container box.",
        tableTitle: "CSS COLOR NOTATION SYSTEMS",
        table: {
          headers: ["Color System", "Syntax Format", "Range / Structure", "Concrete Example"],
          rows: [
            ["Named Colors", "keyword", "140 predefined standard names", "color: navy;"],
            ["Hexadecimal", "#RRGGBB", "Base-16 hex values (00 to FF)", "color: #232850;"],
            ["RGB / RGBA", "rgb(r, g, b, a)", "0-255 per channel; Alpha 0.0 to 1.0", "color: rgba(35, 40, 80, 0.85);"],
            ["HSL / HSLA", "hsl(h, s, l, a)", "Hue 0-360°; Saturation 0-100%; Lightness 0-100%", "color: hsl(210, 50%, 20%);"],
            ["Linear Gradient", "linear-gradient(dir, c1, c2)", "Smooth directional color progression", "background: linear-gradient(135deg, #232850, #1f64c9);"]
          ],
          colWidths: [100, 140, 160, 106]
        },
        practicalExample: "Creating a responsive hero banner that always covers the screen without distortion: `background: #232850 url('hero.jpg') no-repeat center / cover fixed;`.",
        importantPoints: [
          "#FFFFFF represents pure white; #000000 represents pure black.",
          "In RGBA/HSLA, 'A' stands for Alpha (opacity: 0.0 transparent to 1.0 opaque).",
          "`background-size: cover` scales an image to fill the container, clipping overflow.",
          "`background-attachment: fixed` keeps the image stationary during scrolling (Parallax effect)."
        ],
        quickRevision: "Colors: HEX (#RRGGBB), RGB (0-255), HSL (Hue, Sat%, Light%). Background: color, image, repeat (no-repeat), position (center), size (cover/contain), attachment (fixed)."
      },
      {
        code: "4.5",
        title: "CSS Typography, Text Formatting & Web Fonts",
        whatIsIt: "CSS Typography controls character aesthetics, readability metrics, font families (web-safe, Google Fonts, @font-face), font sizes, font weights, line heights, letter-spacing, and text alignments.",
        whyImportant: "Over 80% of web content consists of text. Professional typography enhances reading comprehension, reduces cognitive fatigue, and conveys authority and tone.",
        howItWorks: "CSS requests font families through prioritized font stacks. If the primary font is unavailable locally, the browser falls back sequentially through the stack until reaching a generic system font (`sans-serif`, `serif`, `monospace`).",
        tableTitle: "CORE CSS TYPOGRAPHY PROPERTIES",
        table: {
          headers: ["Property", "Description", "Common Values", "Best Practice Recommendation"],
          rows: [
            ["font-family", "Declares prioritized font stack", "Inter, 'Segoe UI', Arial, sans-serif", "Always terminate stack with generic fallback"],
            ["font-size", "Sets character dimensions", "16px, 1rem, 1.25rem", "Use relative rem units for accessibility font scaling"],
            ["font-weight", "Controls glyph stroke thickness", "normal (400), bold (700), 100-900", "Use 400 for body text; 600-800 for headings"],
            ["line-height", "Vertical spacing between text lines", "1.5, 1.6, 24px", "Use unitless 1.5 to 1.6 for comfortable body reading"],
            ["text-decoration", "Adds or removes line accents", "none, underline, line-through", "Use text-decoration: none to remove default link underlines"],
            ["text-transform", "Controls character casing", "uppercase, lowercase, capitalize", "Use capitalize for automatic Title Case"]
          ],
          colWidths: [110, 140, 140, 116]
        },
        practicalExample: "Truncating overflowing single-line text with an ellipsis: `white-space: nowrap; overflow: hidden; text-overflow: ellipsis;`.",
        importantPoints: [
          "Web-safe fonts (Arial, Times New Roman, Verdana) are pre-installed on most operating systems.",
          "Modern web fonts are imported via Google Fonts `<link>` or local `@font-face` rules.",
          "`rem` is relative to root `<html>` font size (default 16px); `em` is relative to parent element font size."
        ],
        quickRevision: "Font: font-family (with fallback), font-size (rem), font-weight (400/700). Text: line-height (1.5), text-align, text-decoration (none), text-transform (capitalize/uppercase)."
      },
      {
        code: "4.6",
        title: "The CSS Box Model & box-sizing: border-box",
        whatIsIt: "The CSS Box Model is the foundational layout architecture where every HTML element is treated as a rectangular box comprising four concentric layers: **Content**, **Padding**, **Border**, and **Margin**.",
        whyImportant: "The Box Model governs how every element calculates its footprint and occupies space on the page. Misunderstanding box calculation causes broken multi-column layouts, unintended horizontal scrollbars, and alignment bugs.",
        howItWorks: "From inside to outside: Content area holds the payload; Padding provides internal breathing room; Border outlines the padding; Margin creates external clearance between neighboring elements.",
        tableTitle: "THE 4 CONCENTRIC LAYERS OF THE BOX MODEL",
        table: {
          headers: ["Layer Name", "Position Relative to Border", "Takes Background Color?", "Primary Functional Purpose"],
          rows: [
            ["Content", "Innermost core", "YES (inherits element background)", "Houses text, media, or child elements (width × height)"],
            ["Padding", "Inside the border perimeter", "YES (inherits element background)", "Creates breathing space between content and outer border"],
            ["Border", "Boundary perimeter", "YES (has own color/style)", "Defines edge perimeter line surrounding padding"],
            ["Margin", "Outside the border perimeter", "**NO (completely transparent)**", "Separates element from adjacent neighboring boxes"]
          ],
          colWidths: [80, 135, 145, 146]
        },
        practicalExample: "Universal border-box reset: Under `content-box`, a 300px box with 20px padding and 5px border expands to `350px`. Under `box-sizing: border-box;`, the total width remains **exactly 300px**, absorbing padding and border internally.",
        importantPoints: [
          "Correct Box Model order from inside to outside: Content -> Padding -> Border -> Margin.",
          "Margin is completely transparent and never paints background color.",
          "Adjacent vertical margins collapse into a single margin (Margin Collapsing); horizontal margins never collapse.",
          "`margin: 0 auto;` horizontally centers a block element with a declared width."
        ],
        quickRevision: "Box Model = Content + Padding (inside) + Border + Margin (outside). Default content-box adds padding to width. border-box absorbs padding inside width. margin: auto centers block boxes."
      },
      {
        code: "4.7",
        title: "CSS Borders, Rounded Corners, Shadows & Outlines",
        whatIsIt: "CSS Border, Shadow, and Outline properties establish element boundaries, corner curvature (`border-radius`), 3D visual elevation (`box-shadow`), and layout-neutral focus indicators (`outline`).",
        whyImportant: "Card elevation, rounded buttons, and accessible keyboard focus rings rely entirely on these properties to distinguish interactive UI components from background canvas.",
        howItWorks: "Borders occupy physical layout space inside margins; `box-shadow` paints realistic drop shadows; `outline` paints outside the border edge without consuming layout space or triggering reflow.",
        tableTitle: "BORDER VS OUTLINE COMPARISON",
        table: {
          headers: ["Characteristic", "CSS Border", "CSS Outline"],
          rows: [
            ["Placement", "Inside margin; part of element box model", "Drawn entirely outside border edge"],
            ["Affects Layout Dimensions?", "**YES** (Adds to box dimensions unless border-box)", "**NO (Takes 0 layout space; zero reflow)**"],
            ["Individual Side Control?", "YES (`border-top`, `border-left`, etc.)", "NO (Surrounds all four sides uniformly)"],
            ["Primary UI Purpose", "Structural framing, cards, visual dividers", "Accessibility focus indicators (`:focus-visible`)"]
          ],
          colWidths: [130, 185, 191]
        },
        practicalExample: "Creating a circular avatar image: Ensure equal width and height, then set `border-radius: 50%; overflow: hidden;`.",
        importantPoints: [
          "`border-style` must be declared (e.g. `solid`, `dashed`, `dotted`) or the border remains invisible (default is `none`).",
          "`border-radius: 50%` creates a perfect circle on square elements.",
          "`box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);` creates subtle realistic elevation.",
          "Never set `outline: none;` without providing an accessible visual `:focus` replacement."
        ],
        quickRevision: "Border: width style color. Radius: 12px (rounded), 50% (circle). Box-shadow: x y blur spread color. Outline: drawn outside, takes 0 layout space, crucial for focus accessibility."
      },
      {
        code: "4.8",
        title: "CSS Display Property (Block, Inline, Inline-Block) & Visibility",
        whatIsIt: "The CSS `display` property determines the box formatting context of an element in normal document flow, while `visibility` controls whether an element is visible or hidden.",
        whyImportant: "Understanding inline versus block behavior is essential for building navigation bars, inline buttons, and form layouts. The difference between `display: none` and `visibility: hidden` is a classic exam question.",
        howItWorks: "Block elements start on new lines and stretch to 100% width. Inline elements sit inline with text and ignore width/height. Inline-block elements sit inline while respecting width, height, and vertical padding.",
        tableTitle: "DISPLAY: NONE VS VISIBILITY: HIDDEN",
        table: {
          headers: ["Feature / Behavior", "display: none", "visibility: hidden"],
          rows: [
            ["Visual State", "Completely hidden / invisible", "Completely hidden / invisible"],
            ["Layout Space Occupancy", "**Space is REMOVED / collapsed to 0**", "**Space is PRESERVED (blank gap remains)**"],
            ["Surrounding Elements", "Shift over to close the empty gap", "Do not shift; remain in place"],
            ["Screen Readers (A11y)", "Skipped entirely from accessibility tree", "Usually ignored, but preserves geometry"]
          ],
          colWidths: [140, 180, 186]
        },
        practicalExample: "Anchor tags (`<a>`) are inline by default. To make them behave like clickable buttons with full padding: declare `display: inline-block; padding: 10px 20px;`.",
        importantPoints: [
          "Block elements: `<div>`, `<p>`, `<h1>`, `<ul>`. Always start on new line, 100% container width.",
          "Inline elements: `<span>`, `<a>`, `<strong>`. Sit on same line; ignore `width`, `height`, `margin-top/bottom`.",
          "Inline-block elements: sit on same line but fully obey `width`, `height`, and all margins/paddings."
        ],
        quickRevision: "Block: new line, 100% width. Inline: flows with text, ignores width/height. Inline-block: flows with text, obeys width/height. display:none destroys layout space; visibility:hidden keeps blank gap."
      },
      {
        code: "4.9",
        title: "CSS Positioning Schemes (Static, Relative, Absolute, Fixed, Sticky) & Z-Index",
        whatIsIt: "CSS Positioning dictates the spatial placement coordinates (`top`, `bottom`, `left`, `right`) of elements across 5 positioning modes, orchestrated along the 3D depth axis by `z-index`.",
        whyImportant: "Sticky navigation bars, pinned floating action buttons, badge overlays on cards, and modal dialogs are constructed using CSS positioning.",
        howItWorks: "Static follows document flow. Relative offsets from natural position and anchors children. Absolute removes element from flow and offsets from nearest non-static ancestor. Fixed pins to viewport. Sticky toggles between relative and fixed on scroll.",
        tableTitle: "THE 5 CSS POSITIONING MODES",
        table: {
          headers: ["Position Value", "Removed from Flow?", "Offset Relative To:", "Primary Real-World Use Case"],
          rows: [
            ["static (Default)", "NO", "Normal document flow (offsets ignored)", "Standard text and block content"],
            ["relative", "NO (reserves space)", "Its own natural initial location", "Nudge elements; anchor for absolute children"],
            ["absolute", "**YES** (0 space)", "Nearest positioned (non-static) ancestor", "Corner badges, tooltips, dropdown menus"],
            ["fixed", "**YES** (0 space)", "Browser viewport (screen)", "Sticky navbar, Back-to-Top floating button"],
            ["sticky", "Hybrid (on scroll)", "Viewport once scroll threshold is crossed", "Table headers, sticky sub-navigation bars"]
          ],
          colWidths: [100, 120, 155, 131]
        },
        practicalExample: "Placing a 'Sale' badge on a product card: set `.card { position: relative; }` on the parent, and `.badge { position: absolute; top: 10px; right: 10px; }` on the child badge.",
        importantPoints: [
          "Default position is `static`, on which `top`, `left`, and `z-index` have zero effect.",
          "`position: absolute` requires a parent with `position: relative` (or any non-static position) to avoid escaping to the page root.",
          "`z-index` controls 3D stacking order and only functions on positioned elements (or flex/grid items)."
        ],
        quickRevision: "Static: default. Relative: offset from self, anchor for children. Absolute: offset from nearest positioned parent, removed from flow. Fixed: pinned to viewport. Sticky: sticks on scroll. z-index: 3D stacking."
      },
      {
        code: "4.10",
        title: "CSS Float, Clear, Clearfix & Overflow Handling",
        whatIsIt: "CSS Float shifts elements to the left or right edge, allowing inline text to wrap around them; Clear prevents elements from wrapping around preceding floats; Clearfix prevents parent height collapse; and Overflow governs content exceeding bounding boxes.",
        whyImportant: "Float layouts represent classic web design architecture tested extensively on NIELIT theoretical examinations. Understanding the parent collapse problem and Clearfix is an essential historical skill.",
        howItWorks: "Floated elements are taken out of normal vertical flow. Parents containing only floated children collapse to zero height unless cleared via Clearfix or `display: flow-root`.",
        tableTitle: "OVERFLOW PROPERTY VALUES COMPARED",
        table: {
          headers: ["Overflow Value", "Behavior when Content Exceeds Box", "Scrollbars Present?", "Best Practice Use Case"],
          rows: [
            ["visible (Default)", "Content spills outside container boundaries", "NO scrollbars", "Default text; rarely overridden"],
            ["hidden", "Overflowing content is clipped and made invisible", "NO scrollbars", "Rounded cards, clipping image zooms"],
            ["scroll", "Clips content; always renders scrollbars", "YES (Both horizontal & vertical)", "Terminal outputs, code consoles"],
            ["auto", "Smart mode: scrollbars appear ONLY if needed", "YES (Only when overflowing)", "Responsive data tables, scrollable cards"]
          ],
          colWidths: [100, 175, 120, 111]
        },
        practicalExample: "The modern micro-clearfix hack: `.clearfix::after { content: ''; display: table; clear: both; }` placed on the parent container prevents height collapse.",
        importantPoints: [
          "`float` was originally designed for editorial magazine text wrapping around images.",
          "`clear: both` moves an element below all preceding left and right floats.",
          "`overflow: auto` is superior to `overflow: scroll` because it only shows scrollbars when necessary."
        ],
        quickRevision: "float: left/right wraps text. clear: both stops wrapping. Clearfix (.clearfix::after) prevents parent height collapse. overflow: auto provides smart scrollbars when content overflows."
      },
      {
        code: "4.11",
        title: "CSS Lists & Custom Bullet Styling",
        whatIsIt: "CSS List properties style ordered (`<ol>`) and unordered (`<ul>`) lists by customizing marker types, marker positions, or removing bullets entirely to build navigation menus.",
        whyImportant: "Navigation bars, sidebars, feature lists, and breadcrumbs are structured semantically as HTML lists. Resetting list defaults is the first step in almost every modern UI component.",
        howItWorks: "`list-style-type` changes bullet shapes (disc, circle, square, decimal, roman); `list-style-position` toggles inside/outside marker indentation; and `list-style: none;` strips bullets completely.",
        tableTitle: "COMMON LIST-STYLE-TYPE VALUES",
        table: {
          headers: ["List Type", "CSS Value", "Marker Output Rendered", "Common Use Case"],
          rows: [
            ["Unordered", "disc (Default)", "Solid circular black dot (•)", "General bullet points"],
            ["Unordered", "circle", "Hollow circular outline (◦)", "Secondary sub-bullet items"],
            ["Unordered", "square", "Solid black square (▪)", "Stylized feature lists"],
            ["Unordered", "none", "**No marker rendered**", "Navigation bars, cards, button lists"],
            ["Ordered", "decimal", "Arabic numerals (1, 2, 3...)", "Step-by-step tutorial instructions"],
            ["Ordered", "decimal-leading-zero", "Leading zero numbers (01, 02...)", "Modern curriculum unit lists"],
            ["Ordered", "lower-roman / upper-roman", "Roman numerals (i, ii / I, II)", "Official outline numbering"]
          ],
          colWidths: [85, 135, 150, 136]
        },
        practicalExample: "Universal list reset: `ul.clean-menu { list-style: none; padding: 0; margin: 0; }`. Note that removing `padding: 0` is required to eliminate the browser's default 40px left indentation.",
        importantPoints: [
          "`list-style: none;` is mandatory when building navigation bars from `<ul>` tags.",
          "`list-style-position: inside` pulls the bullet inside the content box.",
          "Scalable modern custom bullets are best created using `li::before { content: '✓'; color: green; }`."
        ],
        quickRevision: "list-style-type: disc, circle, square, decimal, none. list-style-position: inside/outside. Reset: list-style: none; padding: 0; margin: 0."
      },
      {
        code: "4.12",
        title: "CSS Table Design: Borders, Zebra Striping & Hover",
        whatIsIt: "CSS Table design styles tabular data matrices (`<table>`, `<th>`, `<td>`) by collapsing dual borders, applying cell padding, alternating row colors (Zebra striping), and adding interactive hover highlights.",
        whyImportant: "Raw HTML tables render with double borders and cramped text. CSS transforms them into clean, scannable data dashboards used in marks sheets, fee structures, and timetable displays.",
        howItWorks: "`border-collapse: collapse;` merges adjacent cell borders into single crisp lines; `:nth-child(even)` pseudo-class applies alternating tints; and wrapping the table in `overflow-x: auto` guarantees mobile responsiveness.",
        tableTitle: "CSS TABLE STYLING ESSENTIALS",
        table: {
          headers: ["CSS Property / Rule", "Standard Value", "Visual Outcome", "Importance Level"],
          rows: [
            ["border-collapse", "collapse", "Merges adjacent borders into single lines", "**Critical (Must have)**"],
            ["padding (on th/td)", "12px 16px", "Adds breathing room around cell data", "High (Prevents cramped text)"],
            ["tbody tr:nth-child(even)", "background: #f8fafc", "Zebra striping on alternate rows", "High (Assists horizontal scanning)"],
            ["tbody tr:hover", "background: #e0f2fe", "Highlights row under user's mouse", "Medium (Interactive feedback)"],
            ["overflow-x: auto (on wrapper)", "auto", "Allows horizontal swipe on mobile phones", "Critical (Prevents viewport distortion)"]
          ],
          colWidths: [130, 110, 145, 121]
        },
        practicalExample: "Zebra-striped accessible table: `table { width: 100%; border-collapse: collapse; } th, td { padding: 12px; border-bottom: 1px solid #e2e8f0; } tr:nth-child(even) { background: #f8fafc; }`.",
        importantPoints: [
          "`border-collapse: collapse;` is the most important table property.",
          "Zebra striping is implemented using `:nth-child(even)` or `:nth-child(odd)` pseudo-classes.",
          "Always wrap wide tables inside `<div style=\"overflow-x: auto;\">` for mobile usability."
        ],
        quickRevision: "border-collapse: collapse merges cell borders. Zebra striping: tr:nth-child(even). Hover: tr:hover. Responsive: parent wrapper with overflow-x: auto."
      },
      {
        code: "4.13",
        title: "CSS Navigation Menu Design (Horizontal & Dropdown)",
        whatIsIt: "CSS Navigation Menu Design transforms semantic HTML unordered lists into accessible horizontal headers, sidebar menus, and pure CSS dropdown submenus using Flexbox, hover states, and absolute positioning.",
        whyImportant: "A website's navigation bar is its primary wayfinding component. Creating responsive navbars and pure CSS dropdowns is a regular 15-mark practical assignment in NIELIT O-Level exams.",
        howItWorks: "The navigation bar uses `display: flex` on `<ul>` to align items horizontally. The dropdown submenu is positioned absolutely below its parent `<li>` (`position: relative`), hidden by default (`display: none`), and displayed on hover (`li:hover > ul.dropdown { display: block; }`).",
        tableTitle: "PURE CSS DROPDOWN ARCHITECTURE",
        table: {
          headers: ["Component Layer", "HTML Element", "Key CSS Declarations", "Role in Dropdown Mechanism"],
          rows: [
            ["Top Nav Container", "<nav>", "background: #232850; box-shadow: ...", "Site-wide header background canvas"],
            ["Menu List", "<ul class=\"nav-menu\">", "display: flex; list-style: none;", "Arranges top-level items horizontally"],
            ["Parent Menu Item", "<li class=\"nav-item\">", "**position: relative;**", "Acts as spatial anchor for child submenu"],
            ["Menu Link", "<a class=\"nav-link\">", "display: block; padding: 16px;", "Expands full clickable target area"],
            ["Dropdown Submenu", "<ul class=\"dropdown\">", "**position: absolute; top: 100%; display: none;**", "Hidden until parent hover trigger"],
            ["Hover Trigger", "li:hover > .dropdown", "**display: block;**", "Reveals submenu smoothly on hover"]
          ],
          colWidths: [110, 110, 160, 126]
        },
        practicalExample: "Ensure `display: block` is declared on all `<a>` tags inside menus so users can click anywhere within the padded button area, not just on the text characters.",
        importantPoints: [
          "Navigation bars should always be structured semantically using `<nav>`, `<ul>`, `<li>`, and `<a>`.",
          "Parent `<li>` must have `position: relative` so the child `position: absolute` dropdown aligns correctly below it.",
          "No JavaScript is required for simple dropdown submenus; pure CSS `:hover` handles state toggling."
        ],
        quickRevision: "Nav = <nav> + <ul> + <li> + <a>. Horizontal: display: flex. Anchor: a { display: block; }. Dropdown: parent li { position: relative; } child ul { position: absolute; display: none; } li:hover > ul { display: block; }."
      },
      {
        code: "4.14",
        title: "CSS Image Gallery & Responsive Card Layouts",
        whatIsIt: "A CSS Image Gallery arranges media thumbnails and descriptive cards into a responsive multi-column grid featuring borders, drop shadows, hover elevation zooms, and `object-fit` aspect ratio protection.",
        whyImportant: "Product showcases, portfolios, and photo albums depend on card galleries. The combination of CSS Grid, aspect ratio maintenance, and micro-animations creates professional commercial web quality.",
        howItWorks: "CSS Grid automatically computes column counts using `repeat(auto-fit, minmax(220px, 1fr))`; `object-fit: cover` prevents image distortion; and `:hover` scales the card upward using `transform: translateY(-5px)`.",
        tableTitle: "IMAGE GALLERY COMPONENT TOKENS",
        table: {
          headers: ["Card Sub-Component", "CSS Properties Applied", "Visual & Functional Result"],
          rows: [
            ["Grid Container", "display: grid; repeat(auto-fit, minmax(220px, 1fr)); gap: 20px;", "Auto-responsive multi-column layout without media queries"],
            ["Card Shell", "border-radius: 12px; overflow: hidden; box-shadow: ...", "Rounded card envelope; clips overflowing image zoom edges"],
            ["Thumbnail Image", "width: 100%; height: 180px; object-fit: cover;", "Uniform banner dimensions; preserves natural image aspect ratio"],
            ["Card Body", "padding: 16px; background: white;", "Clean typography container for title and description"],
            ["Hover Interaction", "transform: translateY(-6px); box-shadow: deeper;", "Tactile card lift effect with smooth transition"]
          ],
          colWidths: [120, 205, 181]
        },
        practicalExample: "Always declare `overflow: hidden;` on the card container so that image zoom effects or child headers never breach the rounded corner boundary.",
        importantPoints: [
          "`object-fit: cover` is mandatory for images of varying sizes to fill thumbnail boxes without stretching.",
          "`repeat(auto-fit, minmax(...))` creates fluid responsive column layouts with zero media queries.",
          "`transition: transform 0.25s ease, box-shadow 0.25s ease;` delivers smooth 60fps animations."
        ],
        quickRevision: "Gallery: display: grid; repeat(auto-fit, minmax(220px, 1fr)); gap: 20px. Card: border-radius, overflow: hidden, box-shadow. Hover: transform: translateY(-6px). Image: object-fit: cover."
      },
      {
        code: "4.15",
        title: "Modern 1D Layout with CSS Flexbox",
        whatIsIt: "CSS Flexible Box Layout (Flexbox) is a one-dimensional layout model that distributes space along a single axis (row or column) between items in an interface, offering alignment, direction, wrapping, and dynamic sizing.",
        whyImportant: "Flexbox is the foundational engine of modern front-end web development. It completely eliminates legacy float/clear hacks and makes perfect vertical/horizontal centering effortless.",
        howItWorks: "Flexbox operates along two orthogonal axes: the **Main Axis** (governed by `flex-direction` and aligned with `justify-content`) and the **Cross Axis** (aligned with `align-items`).",
        tableTitle: "FLEX CONTAINER VS FLEX ITEM PROPERTIES",
        table: {
          headers: ["Target Level", "Property Name", "Primary Purpose & Accepted Values"],
          rows: [
            ["Container (Parent)", "display: flex", "Activates flexbox formatting context for direct children"],
            ["Container (Parent)", "flex-direction", "Defines main axis: row (default), row-reverse, column, column-reverse"],
            ["Container (Parent)", "justify-content", "Aligns items on Main Axis: flex-start, center, flex-end, space-between, space-around"],
            ["Container (Parent)", "align-items", "Aligns items on Cross Axis: stretch (default), center, flex-start, flex-end"],
            ["Container (Parent)", "flex-wrap", "Controls multi-line wrapping: nowrap (default), wrap, wrap-reverse"],
            ["Container (Parent)", "gap", "Defines gap spacing between items: e.g. gap: 16px (row-gap, column-gap)"],
            ["Item (Child)", "flex-grow", "Proportion of available free space item absorbs (default: 0)"],
            ["Item (Child)", "flex-shrink", "Ability to shrink when container space is constrained (default: 1)"],
            ["Item (Child)", "flex-basis", "Initial default size before grow/shrink takes effect (default: auto)"],
            ["Item (Child)", "flex: 1", "Shorthand for flex: 1 1 0%; equally distributes space across items"]
          ],
          colWidths: [110, 120, 276]
        },
        practicalExample: "Dead-center any element inside a container: `display: flex; justify-content: center; align-items: center;`.",
        importantPoints: [
          "Flexbox is a 1-Dimensional layout system (deals with either a row OR a column at a time).",
          "`justify-content` controls the Main Axis; `align-items` controls the Cross Axis.",
          "`gap` replaces traditional margin hacks between child elements.",
          "`flex: 1` causes child cards to share container width equally."
        ],
        quickRevision: "Flexbox: 1D layout. Container: display: flex, flex-direction, justify-content (main axis), align-items (cross axis), gap, flex-wrap. Items: flex-grow, flex-shrink, flex-basis, flex: 1."
      },
      {
        code: "4.16",
        title: "Modern 2D Layout with CSS Grid",
        whatIsIt: "CSS Grid Layout is a two-dimensional grid-based layout system designed for the web, allowing authors to organize content simultaneously into rows and columns with fractional units (`fr`), explicit track sizing, and template areas.",
        whyImportant: "CSS Grid is the most powerful layout system ever built into browsers. It enables complete page-level layouts (Header, Sidebar, Main, Footer) and complex dashboards without third-party frameworks like Bootstrap.",
        howItWorks: "Declaring `display: grid` creates a grid formatting context. Authors define explicit vertical column tracks (`grid-template-columns`) and horizontal row tracks (`grid-template-rows`), placing items across grid lines.",
        tableTitle: "CSS GRID CORE MECHANISMS",
        table: {
          headers: ["Grid Feature", "Syntax Example", "Functional Operation Description"],
          rows: [
            ["Grid Context", "display: grid;", "Transforms container into a 2-dimensional grid formatting context"],
            ["Fractional Unit", "1fr 2fr 1fr", "Allocates available free container space proportionally into fractions"],
            ["Repeat Function", "repeat(3, 1fr)", "Repeats track definition without redundant typing (identical to 1fr 1fr 1fr)"],
            ["MinMax Function", "minmax(200px, 1fr)", "Sets track boundaries: will not shrink below 200px, but grows to 1fr"],
            ["Auto-Fit Formula", "repeat(auto-fit, minmax(250px, 1fr))", "Creates fully responsive multi-column layouts with zero media queries"],
            ["Track Gap", "gap: 20px;", "Defines uniform gutter channels between all grid rows and columns"],
            ["Span Across Tracks", "grid-column: 1 / -1;", "Spans an item across all vertical columns from first line (1) to last (-1)"]
          ],
          colWidths: [110, 175, 221]
        },
        practicalExample: "Standard master page layout: `display: grid; grid-template-columns: 250px 1fr; grid-template-rows: auto 1fr auto;`. Header and Footer use `grid-column: 1 / -1;` to stretch completely across both columns.",
        importantPoints: [
          "Flexbox is 1D (content-out); CSS Grid is 2D (layout-in, managing rows and columns simultaneously).",
          "`fr` stands for 'Fraction of available free space'.",
          "`grid-column: 1 / -1;` spans an item from the first grid line to the last line.",
          "Use Grid for overall page skeletons and Flexbox for UI navigation and button rows."
        ],
        quickRevision: "Grid: 2D layout (rows + columns). Container: display: grid, grid-template-columns (1fr, repeat, minmax), grid-template-rows, gap. Items: grid-column (1 / -1), grid-row."
      },
      {
        code: "4.17",
        title: "Responsive Web Design, Media Queries & Modern Units",
        whatIsIt: "Responsive Web Design (RWD) is an approach whereby web documents detect user screen dimensions and device constraints, adapting layout dynamically using fluid grids, flexible media, relative units (`rem`, `em`, `vw`, `vh`, `clamp`), and CSS Media Queries (`@media`).",
        whyImportant: "With mobile devices generating over 60% of web traffic, responsive design is mandatory. Websites that fail mobile responsiveness are penalized heavily in search rankings and fail modern accessibility standards.",
        howItWorks: "The Viewport meta tag instructs mobile devices to render at physical device width. Fluid units scale elements proportionally, and Media Queries apply conditional CSS blocks at specific screen width breakpoints.",
        tableTitle: "CSS UNITS TAXONOMY: ABSOLUTE VS RELATIVE",
        table: {
          headers: ["Unit Name", "Type Category", "Calculation Reference", "Primary Recommended Use Case"],
          rows: [
            ["px (Pixel)", "Absolute", "1/96th of an inch (device pixel ratio mapped)", "Borders, hair-thin divider lines, box shadows"],
            ["rem (Root EM)", "Relative", "Relative to font-size of <html> (Default: 1rem = 16px)", "**Industry standard for typography, padding, margins**"],
            ["em", "Relative", "Relative to font-size of immediate parent element", "Scoped button paddings, compounding iconography"],
            ["%", "Relative", "Percentage of parent container's dimensions", "Column widths, fluid grid containers"],
            ["vw / vh", "Relative", "1% of browser viewport width / height", "Hero banners, fullscreen modal dialogs"],
            ["clamp(min, val, max)", "Relative Math", "Smoothly scales value between defined minimum and maximum", "Fluid typography scaling without media queries"]
          ],
          colWidths: [110, 80, 175, 141]
        },
        practicalExample: "Fluid typography with `clamp()`: `font-size: clamp(1.5rem, 4vw, 3rem);` scales headings smoothly across all screens without needing multiple media query breakpoints.",
        importantPoints: [
          "Mandatory HTML tag: `<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">`.",
          "Flexible images rule: `img { max-width: 100%; height: auto; }` prevents image overflow.",
          "Mobile-first design writes base CSS for smartphones first, adding desktop rules via `@media (min-width: 768px)`.",
          "`rem` respects user accessibility font zoom settings in browser preferences."
        ],
        quickRevision: "RWD: Fluid grids + Flexible images (max-width: 100%) + Media queries (@media). Viewport tag mandatory in head. Units: rem (root relative: 16px), em (parent relative), vw/vh (viewport %). clamp(min, pref, max)."
      },
      {
        code: "4.18",
        title: "CSS Custom Properties (Variables), Transitions & Transforms",
        whatIsIt: "CSS Custom Properties (Variables) store reusable design tokens across a stylesheet prefixed with `--` and called via `var()`; CSS Transitions interpolate property changes smoothly over time; and CSS Transforms manipulate geometry in 2D/3D space (`translate`, `rotate`, `scale`, `skew`) without triggering document reflow.",
        whyImportant: "Dark mode theming, cohesive brand color management, and performant 60fps micro-animations depend on CSS variables, transitions, and transforms without requiring heavy JavaScript libraries.",
        howItWorks: "Variables declared on `:root` inherit globally. Transitions animate property shifts between standard and `:hover` states over a duration. Transforms modify the element's visual rendering matrix without altering layout flow.",
        tableTitle: "TRANSITION VS TRANSFORM MECHANICS",
        table: {
          headers: ["Mechanism", "Primary Syntax Format", "What It Does", "Performance Characteristic"],
          rows: [
            ["Custom Property", ":root { --brand: #f19a27; } color: var(--brand);", "Stores reusable design values in tokens", "Zero performance overhead; enables dark mode"],
            ["CSS Transition", "transition: transform 0.25s ease, color 0.2s;", "Smoothly animates property changes over time", "Requires state change trigger (e.g. :hover)"],
            ["2D Translate", "transform: translateY(-5px);", "Shifts element 5px upward in vertical plane", "**GPU Accelerated; zero document reflow**"],
            ["2D Scale", "transform: scale(1.05);", "Enlarges element by 5% without shifting neighbors", "**GPU Accelerated; zero document reflow**"],
            ["2D Rotate", "transform: rotate(45deg);", "Rotates element 45 degrees clockwise", "**GPU Accelerated; zero document reflow**"],
            ["@keyframes", "@keyframes pulse { 0% {...} 100% {...} }", "Continuous multi-step autonomous animation", "Can run indefinitely with infinite loop"]
          ],
          colWidths: [90, 175, 140, 101]
        },
        practicalExample: "Interactive elevated card: `.card { transition: transform 0.2s ease, box-shadow 0.2s ease; } .card:hover { transform: translateY(-4px); box-shadow: 0 10px 15px rgba(0,0,0,0.1); }`.",
        importantPoints: [
          "CSS variables must begin with two dashes (`--`), e.g. `--primary-color: #f19a27;`.",
          "Variables are accessed using the `var(--name, fallback)` function.",
          "Always declare `transition` on the base element selector, NOT inside the `:hover` pseudo-class (otherwise the return animation snaps abruptly).",
          "Transforms (`translate`, `scale`, `rotate`) are GPU-accelerated and do not trigger costly browser layout recalculations.",
          "Respect user accessibility preferences using `@media (prefers-reduced-motion: reduce)`."
        ],
        quickRevision: "Variables: :root { --var: val; } var(--var). Transitions: property duration timing-function delay (animates state changes). Transforms: translate(x,y), scale(), rotate(deg). GPU accelerated."
      }
    ]
  };
}
