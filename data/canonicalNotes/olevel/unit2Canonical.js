// Unit 2: Editors - Tutorial & Textbook Grade Content for NIELIT O-Level M2-R5.1
export function getUnit2Canonical() {
  return {
    unitNumber: 2,
    title: "Editors",
    officialSection: "16.6 (ii)",
    totalHours: 5,
    theoryHours: 2,
    practicalHours: 3,
    introduction: "A code editor is the foundational software workspace used by web developers to write, edit, format, and organize source code files (HTML, CSS, JavaScript). While default operating system text editors (like Windows Notepad) can save `.html` files, dedicated source code editors provide syntax highlighting, auto-completion, line numbering, multi-caret editing, and error diagnostics. This unit covers downloading, installing, and configuring leading free and popular code editors (Notepad++ and Sublime Text), professional editor features, file creation workflows, character encodings (UTF-8), and web file extension standards.",
    whatYouWillLearn: [
      "The architectural difference between basic plain text editors (Notepad) and source code editors (Notepad++, Sublime Text).",
      "Downloading, installing, and configuring Notepad++: Plugin Manager, language syntax parsers, and custom themes.",
      "Sublime Text editor capabilities: Package Control, Command Palette (Ctrl+Shift+P), Goto Anything (Ctrl+P), and multi-caret editing.",
      "Professional features of code editors: Syntax highlighting, bracket matching, code folding, auto-indentation, and line numbering.",
      "Creating, organizing, and editing web source code files within project folder hierarchies.",
      "Saving protocols: UTF-8 character encoding standards without BOM, and web file extensions (`.html`, `.css`, `.js`)."
    ],
    topics: [
      {
        code: "2.1",
        title: "Downloading Free Editors like Notepad++",
        whatIsIt: "Notepad++ is a free, open-source source code editor and text editor designed for Microsoft Windows, based on the Scintilla editing component, written in C++ for ultra-lightweight execution speed and minimal CPU consumption.",
        whyImportant: "Notepad++ provides syntax highlighting for over 80 programming languages, tabbed multi-document editing, and plugin extensibility while requiring under 10 MB of disk space.",
        howItWorks: "Users download the official installer from `notepad-plus-plus.org`. Upon launching, the editor detects the active programming language from the file extension (e.g. `.html`) and colorizes tags, attributes, and values dynamically.",
        componentsTitle: "NOTEPAD++ KEY FEATURES & CAPABILITIES",
        componentsOrTypes: [
          "Official Source: Downloaded freely from `notepad-plus-plus.org` (GPL License).",
          "Syntax Highlighting: Distinct colors for HTML tags (blue), attributes (red), string values (purple), and comments (green).",
          "Tabbed Document Interface: Multiple files open simultaneously in individual tabs for easy side-by-side reference.",
          "Language Menu: Allows manual language override (`Language -> H -> HTML`) if a file has not yet been saved with an extension.",
          "Plugins Admin: Built-in plugin manager to install tools like XML Tools (auto-closing HTML tags) and Emmet (HTML abbreviation expansion).",
          "Line Numbering & Code Folding: Margin shows line numbers and clickable arrows to fold/unfold large code blocks."
        ],
        practicalExample: "A student installs Notepad++ and writes an HTML table. In standard Windows Notepad, all text is plain black and unreadable. In Notepad++, `<table>` appears in bold blue, `border=\"1\"` highlights attributes in red, and unclosed tags are flagged immediately.",
        importantPoints: [
          "Notepad++ is a free and open-source editor licensed under GNU General Public License (GPL).",
          "It is based on the powerful Scintilla editing component and written in C++.",
          "Notepad++ natively supports syntax highlighting and code folding for over 80 programming languages."
        ],
        quickRevision: "Notepad++ is a free, fast, open-source code editor based on Scintilla. It provides syntax highlighting, tabbed editing, line numbering, and plugin support."
      },
      {
        code: "2.2",
        title: "Sublime Text Editor",
        whatIsIt: "Sublime Text is a modern, high-performance, cross-platform commercial source code editor built in C++ and Python, renowned for its sleek dark interface, speed, and advanced keyboard productivity shortcuts.",
        whyImportant: "Sublime Text revolutionized developer workflows by introducing multi-caret simultaneous editing, instant file jumping (`Goto Anything`), and rich theme customization.",
        howItWorks: "Sublime Text operates cross-platform across Windows, macOS, and Linux. It uses an internal Python API to support thousands of community packages installed via 'Package Control'.",
        tableTitle: "NOTEPAD++ VS. SUBLIME TEXT COMPARISON",
        table: {
          headers: ["Attribute / Feature", "Notepad++", "Sublime Text Editor"],
          rows: [
            ["Platform Support", "Exclusively Microsoft Windows", "Cross-Platform (Windows, macOS, Linux)"],
            ["Licensing Model", "Free and Open Source (GNU GPL)", "Shareware (Free evaluation with optional license purchase)"],
            ["Speed & Footprint", "Extremely lightweight (<10 MB installer)", "Very fast, smooth GPU rendering engine"],
            ["Goto Anything Shortcut", "Standard search dialogs", "`Ctrl + P` (instantly opens any file across project)"],
            ["Command Palette", "Standard menu bars", "`Ctrl + Shift + P` (executes any editor command by typing)"],
            ["Multi-Caret Editing", "Column mode with Alt key", "`Ctrl + Click` or `Ctrl + D` for multiple active cursors"]
          ],
          colWidths: [110, 195, 201]
        },
        componentsTitle: "ESSENTIAL SUBLIME TEXT KEYBOARD SHORTCUTS",
        componentsOrTypes: [
          "`Ctrl + P` (Goto Anything): Quickly jump to any file in your project folder by typing parts of its name.",
          "`Ctrl + Shift + P` (Command Palette): Search and trigger any editor menu command without touching the mouse.",
          "`Ctrl + D` (Select Next Occurrence): Adds the next occurrence of the highlighted word to a multi-cursor selection.",
          "`Ctrl + /` (Toggle Comment): Instantly comments or uncomments the current line or selected block (`<!-- -->` in HTML).",
          "`Alt + Shift + 2` (Split View): Splits editor into two vertical side-by-side editing columns."
        ],
        practicalExample: "You want to rename five identical `class=\"btn\"` attributes to `class=\"button\"`. In Sublime Text, highlight the first `\"btn\"` and press `Ctrl + D` four times. You now have five active cursors typing simultaneously, renaming all five in one keystroke.",
        importantPoints: [
          "Sublime Text is a cross-platform editor available on Windows, Linux, and macOS.",
          "Shortcut for 'Goto Anything' in Sublime Text is `Ctrl + P`.",
          "Shortcut for the 'Command Palette' in Sublime Text is `Ctrl + Shift + P`.",
          "Multi-cursor editing enables typing changes across multiple lines simultaneously."
        ],
        quickRevision: "Sublime Text is a sleek cross-platform code editor. Core hotkeys: Goto Anything (`Ctrl + P`), Command Palette (`Ctrl + Shift + P`), and Multi-selection (`Ctrl + D`)."
      },
      {
        code: "2.3",
        title: "Making Use of Editors",
        whatIsIt: "Making use of editors refers to leveraging specialized development features-such as syntax coloring, auto-closing tags, bracket matching, code indentation, and split views-to boost coding accuracy and speed.",
        whyImportant: "Writing code in a plain text editor without syntax highlighting leads to missing closing tags, unclosed quotes, and syntax errors that are notoriously difficult to track down manually.",
        howItWorks: "Source code editors use lexical tokenizers that analyze programming text in real time, assigning semantic visual styles and validating matching pairs of parentheses, brackets, and HTML tags.",
        componentsTitle: "CORE PRODUCTIVITY FEATURES OF CODE EDITORS",
        componentsOrTypes: [
          "1. Syntax Colorization: Distinguishes HTML elements, attributes, CSS values, and comments with distinct visual colors, making syntax typos stand out immediately.",
          "2. Bracket Matching: When the cursor is next to a parenthesis `(`, curly brace `{`, or tag `>`, the editor automatically highlights its corresponding matching partner.",
          "3. Auto-Indentation: Automatically tabs new lines inward when opening blocks (e.g. inside `<head>` or `<body>`), maintaining clean visual code hierarchy.",
          "4. Auto-Closing Tags: Automatically inserts the closing tag (e.g. typing `<p>` immediately appends `</p>` with the cursor placed between them).",
          "5. Find & Replace with Regular Expressions: Global search across single files or entire project directories with regex pattern replacement."
        ],
        practicalExample: "A developer writes a complex nested HTML table. The editor automatically indents each `<tr>` inside `<table>` and each `<td>` inside `<tr>`. If the developer accidentally forgets the closing `</tr>`, the editor highlights the opening tag in red to signal an unclosed block immediately.",
        importantPoints: [
          "Syntax highlighting colorizes code tokens to help developers identify syntax errors visually.",
          "Bracket matching prevents syntax errors by highlighting opening and closing tag pairs.",
          "Consistent code indentation is essential for code readability and maintainability."
        ],
        quickRevision: "Using code editors gives developers syntax colorization, bracket matching, auto-indentation, and auto-closing tags, making code faster to write and easier to debug."
      },
      {
        code: "2.4",
        title: "File Creation and Editing",
        whatIsIt: "File creation and editing is the disciplined workflow of organizing web project folder structures, initializing clean source code files, and following web authoring conventions.",
        whyImportant: "A messy file structure with spaces in filenames or scattered images causes broken hyperlinks and 404 image errors when published to production web servers.",
        howItWorks: "Developers create a root project directory (e.g. `my_website/`), organize subdirectories for assets (`css/`, `js/`, `images/`), and create the primary entry file `index.html`.",
        componentsTitle: "BEST PRACTICES FOR WEB FILE CREATION & NAMING",
        componentsOrTypes: [
          "1. Root Directory: Always create a dedicated project root folder to house all related site files.",
          "2. Standard Subfolders: Organize assets into clear subdirectories: `css/` for stylesheets, `js/` for scripts, `images/` for graphics.",
          "3. Lowercase Naming Rule: Always name files and folders in all lowercase letters (e.g. `contact.html`, not `Contact.HTML`). Web servers running Linux/Unix are strictly **case-sensitive**.",
          "4. NO Spaces in Filenames: Never use spaces in web filenames (e.g. use `about-us.html` or `about_us.html`, never `about us.html`). Spaces convert into messy `%20` codes in URLs.",
          "5. Default Entry Page: Name the homepage `index.html` so web servers load it automatically when visiting the directory root."
        ],
        codeSnippet: `<!-- Sample Professional HTML File Structure: index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Web Project</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <h1>Welcome to NIELIT O-Level Web Designing</h1>
    <p>This file is organized cleanly inside our project folder.</p>
</body>
</html>`,
        practicalExample: "A student creates a portfolio project: They create a folder named `portfolio`. Inside, they save `index.html`, and create folders `images` and `css`. Inside `css`, they save `style.css`. In HTML, they link it cleanly as `<link rel=\"stylesheet\" href=\"css/style.css\">`.",
        importantPoints: [
          "Web servers running Linux are case-sensitive: `About.html` and `about.html` are two completely different files.",
          "Never put spaces in web filenames; use hyphens (`-`) or underscores (`_`).",
          "The default homepage of any web directory must be named `index.html`."
        ],
        quickRevision: "Follow clean file practices: all lowercase filenames, no spaces (use hyphens), standard subfolders (`css/`, `js/`, `images/`), and name the entry file `index.html`."
      },
      {
        code: "2.5",
        title: "Saving Files and File Extensions",
        whatIsIt: "Saving files correctly involves selecting the proper web file extension (`.html`, `.css`, `.js`) and encoding standard (**UTF-8**) to ensure browser engines interpret code correctly.",
        whyImportant: "If an HTML file is accidentally saved with a `.txt` extension (a common mistake in Windows Notepad), browsers will display raw HTML tags as plain text rather than rendering a visual webpage.",
        howItWorks: "Operating systems rely on file extensions to determine MIME types and default application associations. Web servers inspect extensions to send the proper `Content-Type` header (e.g. `text/html`).",
        tableTitle: "STANDARD WEB FILE EXTENSIONS & MIME TYPES",
        table: {
          headers: ["File Extension", "Associated File Type", "Server MIME Content-Type", "Primary Functional Purpose"],
          rows: [
            ["`.html` / `.htm`", "HTML Web Document", "text/html", "Defines the structural content and layout of a webpage"],
            ["`.css`", "Cascading Style Sheet", "text/css", "Defines the visual styles, colors, and layout rules"],
            ["`.js`", "JavaScript Source File", "application/javascript", "Contains executable client-side logic and event listeners"],
            ["`.svg`", "Scalable Vector Graphic", "image/svg+xml", "XML-based resolution-independent vector graphics"],
            ["`.png` / `.jpg`", "Raster Bitmap Image", "image/png, image/jpeg", "Photographs and complex graphic illustrations"]
          ],
          colWidths: [95, 140, 135, 141]
        },
        componentsTitle: "THE UTF-8 ENCODING STANDARD",
        componentsOrTypes: [
          "Universal Encoding: UTF-8 (Unicode Transformation Format - 8 bit) is the universal character encoding of the World Wide Web.",
          "Multi-Lingual: Capable of encoding all 1,112,064 valid character code points in Unicode, including English, Hindi, Arabic, Chinese, and emojis.",
          "Save without BOM: In code editors, always save files as **UTF-8 (without BOM)**. A 'Byte Order Mark' (BOM) can cause phantom blank lines or syntax parsing errors.",
          "The 'Save As Type' Rule in Windows Notepad: When saving in Notepad, always set 'Save as type' to **All Files (*.*)** and manually type `.html` (e.g. `index.html`). Otherwise, Notepad appends `.txt` to create `index.html.txt`."
        ],
        practicalExample: "When creating a bilingual Hindi-English website: The developer sets `<meta charset=\"UTF-8\">` in the HTML `<head>` and saves the file in Notepad++ as 'UTF-8'. Both 'Welcome' and 'नमस्ते' render with sharp, accurate typography in all web browsers.",
        importantPoints: [
          "Webpages must be saved with the `.html` or `.htm` file extension.",
          "The standard character encoding for modern web pages is UTF-8.",
          "When saving HTML files in Windows Notepad, select 'All Files (*.*)' to prevent appending `.txt`.",
          "Always save code files as 'UTF-8 without BOM' to prevent hidden character glitches."
        ],
        quickRevision: "Save files with proper extensions (`.html`, `.css`, `.js`). Always use UTF-8 encoding (without BOM) for universal language and emoji support."
      }
    ],
    unitRevision: [
      "Notepad++ is a free, open-source Windows code editor based on Scintilla with syntax highlighting for 80+ languages.",
      "Sublime Text is a cross-platform editor featuring Goto Anything (`Ctrl + P`), Command Palette (`Ctrl + Shift + P`), and multi-caret editing (`Ctrl + D`).",
      "Code editors provide syntax colorization, bracket matching, auto-indentation, and auto-closing tags that prevent syntax errors.",
      "File creation best practices: Keep all filenames strictly lowercase, avoid spaces (use hyphens), and organize subfolders (`css/`, `js/`, `images/`).",
      "Web servers running Linux/Unix are case-sensitive; `index.html` is the mandatory default landing page name.",
      "Always save files with explicit web extensions (`.html`, `.css`, `.js`).",
      "UTF-8 is the universal web encoding standard; always save code as 'UTF-8 without BOM' to support international languages and emojis."
    ],
    keyTerms: [
      { term: "IDE", fullForm: "Integrated Development Environment", desc: "Software suite combining a code editor, compiler, debugger, and build tools." },
      { term: "GPL", fullForm: "General Public License", desc: "Open-source software license under which Notepad++ is freely distributed." },
      { term: "UTF-8", fullForm: "Unicode Transformation Format (8-bit)", desc: "Universal variable-width character encoding standard for the Web." },
      { term: "BOM", fullForm: "Byte Order Mark", desc: "Unicode character code at the start of text streams that should be avoided in web code." },
      { term: "MIME", fullForm: "Multipurpose Internet Mail Extensions", desc: "Standard classifying file formats transmitted across the Internet." }
    ]
  };
}
