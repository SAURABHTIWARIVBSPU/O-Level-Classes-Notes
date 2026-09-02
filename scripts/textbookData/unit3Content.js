// Unit 3: Word Processing (LibreOffice Writer) - Tutorial & Textbook Grade Content
export function getUnit3Content() {
  return {
    unitNumber: 3,
    title: "Word Processing (LibreOffice Writer)",
    officialSection: "3.0 - 3.9",
    totalHours: 12,
    theoryHours: 4,
    practicalHours: 8,
    introduction: "Word processing is the creation, composition, editing, formatting, and printing of textual and graphical documents. LibreOffice Writer is the official Free and Open Source (FOSS) word processor standardized in the NIELIT curriculum. This unit teaches the complete end-to-end operation of Writer: from workspace navigation, text manipulation, typography formatting, and paragraph alignment to tables, Mail Merge wizards, spell checking, and PDF exporting.",
    whatYouWillLearn: [
      "LibreOffice Writer workspace defaults (Untitled 1, .odt format, Liberation Serif 12pt, Portrait, Zoom range 20% to 600%).",
      "Text entry, editing modes (Insert vs Overwrite), and mouse selection mechanics (2 clicks = Word, 3 clicks = Sentence, 4 clicks = Paragraph).",
      "Character typography: Bold (Ctrl+B), Italic (Ctrl+I), Underline (Ctrl+U), Double Underline (Ctrl+D), Superscript (Ctrl+Shift+P), Subscript (Ctrl+Shift+B), and Clear Formatting (Ctrl+M).",
      "Paragraph alignment (Left Ctrl+L, Center Ctrl+E, Right Ctrl+R, Justify Ctrl+J) and line spacing shortcuts (Ctrl+1, Ctrl+5, Ctrl+2).",
      "Lists: Toggling Bullets (Shift+F12) and Numbering (F12).",
      "Table insertion (Ctrl+F12), cell navigation, row/column operations, and formula calculation (F2).",
      "The Mail Merge Wizard: Combining a main letter document with a recipient data source in 5 steps (Tools menu).",
      "Proofing tools: Spell Check (F7), Automatic Spell Check (Shift+F7), Thesaurus (Ctrl+F7), and Find & Replace (Ctrl+H).",
      "Print Preview (Ctrl+Shift+O), Print setup (Ctrl+P), and Direct PDF Export.",
      "Complete Master Shortcut Table for LibreOffice Writer."
    ],
    topics: [
      {
        code: "3.1",
        title: "Word Processing Basics & Opening/Closing Documents",
        whatIsIt: "LibreOffice Writer is a powerful, full-featured OpenDocument word processor providing rich typography, document structuring, desktop publishing, and export facilities without commercial license fees.",
        whyImportant: "Word processing is the universal core skill required in modern offices for creating official letters, legal agreements, resumes, books, and formal reports.",
        howItWorks: "When Writer launches, it creates a blank digital page using default templates. Users enter text via keyboard, format elements using menu/toolbars, and save the binary document using the ISO standard OpenDocument Text (`.odt`) specification.",
        componentsTitle: "WRITER WORKSPACE STRUCTURE & SYSTEM DEFAULTS",
        componentsOrTypes: [
          "Default Document Title: 'Untitled 1' (displays in the top Title Bar until saved).",
          "Default File Extension: `.odt` (OpenDocument Text).",
          "Default Font Family & Size: Liberation Serif, 12 pt.",
          "Default Page Orientation: Portrait (vertical page orientation).",
          "Zoom Range: Minimum zoom is 20%; Maximum zoom is 600% (displayed at the bottom right of the Status Bar).",
          "Status Bar: Located at the bottom; displays current Page Number, Word Count, Character Count, Page Style, Language, and Zoom slider.",
          "Core File Operations: New Document (`Ctrl + N`), Open Existing (`Ctrl + O`), Save (`Ctrl + S`), Save As (`Ctrl + Shift + S`), and Close Window (`Ctrl + W`)."
        ],
        practicalExample: "To begin an official letter: Launch Writer from the desktop menu. Notice the top title bar says 'Untitled 1 - LibreOffice Writer'. Type your letter heading. Press `Ctrl + S`, enter the name 'Official_Letter', and click Save. The title bar immediately updates to 'Official_Letter.odt'." ,
        importantPoints: [
          "Default document name in LibreOffice Writer is 'Untitled 1'.",
          "Default font in LibreOffice Writer is Liberation Serif, 12 pt.",
          "Default file extension for LibreOffice Writer is `.odt`.",
          "The zoom percentage range in LibreOffice Writer is 20% to 600%.",
          "Shortcut key for 'Save As' is `Ctrl + Shift + S`.",
          "Shortcut key to close the active document window is `Ctrl + W`; to exit the entire LibreOffice suite is `Ctrl + Q`."
        ],
        quickRevision: "Writer defaults: Name = Untitled 1, Extension = .odt, Font = Liberation Serif 12pt, Zoom = 20%-600%. Shortcuts: Save = Ctrl+S, Save As = Ctrl+Shift+S, Close = Ctrl+W."
      },
      {
        code: "3.2",
        title: "Text Creation, Selection, and Editing",
        whatIsIt: "Text creation and editing encompasses typing characters, positioning the blinking cursor insertion point, selecting text blocks, modifying existing text, and utilizing clipboard commands (Cut, Copy, Paste).",
        whyImportant: "Efficient text manipulation and precise selection methods dramatically accelerate document editing and revision workflows.",
        howItWorks: "Keystrokes insert characters at the cursor position. When text is selected, clipboard operations move data to/from system memory buffers.",
        tableTitle: "TEXT SELECTION MOUSE CLICK METHODOLOGY",
        table: {
          headers: ["Mouse Action", "Selected Text Scope", "Practical Use Case"],
          rows: [
            ["Single Left Click", "Positions the blinking text insertion cursor", "Place cursor to start typing or editing at exact point"],
            ["Double Left Click", "Selects the complete single Word clicked", "Quickly change, delete, or format a single word"],
            ["Triple Left Click", "Selects the entire Sentence containing the click", "Rephrase or copy an entire grammatical sentence"],
            ["Quadruple Left Click", "Selects the entire Paragraph containing the click", "Apply paragraph styling, indentation, or alignment to full block"],
            ["Ctrl + A (Keyboard)", "Selects the Entire Document (all text and tables)", "Global font changes or copying full document contents"]
          ],
          colWidths: [130, 160, 221]
        },
        componentsTitle: "INSERT MODE VS. OVERWRITE MODE",
        componentsOrTypes: [
          "Insert Mode (Default): When typing in the middle of existing text, new characters push existing text to the right without erasing anything. The Status Bar displays 'Insert'.",
          "Overwrite Mode: When typing in the middle of text, each newly typed character replaces and erases the character immediately to the right. Toggled on/off using the `Insert` keyboard key or by clicking 'Insert' on the Status Bar."
        ],
        practicalExample: "If a sentence says 'Computer is fast machine' and you want to insert 'a', position the cursor before 'fast' in Insert mode and type 'a ' to get 'Computer is a fast machine'. If Overwrite mode were active, typing 'a ' would overwrite and erase the letters 'fa' from 'fast'." ,
        importantPoints: [
          "Double-click selects a Word; Triple-click selects a Sentence; Quadruple-click selects a Paragraph.",
          "The `Insert` key toggles between Insert mode and Overwrite mode.",
          "Shortcut key to select the entire document is `Ctrl + A`.",
          "Cut (`Ctrl + X`), Copy (`Ctrl + C`), Paste (`Ctrl + V`), Undo (`Ctrl + Z`), Redo (`Ctrl + Y`).",
          "Delete key erases character to the right of cursor; Backspace key erases character to the left."
        ],
        quickRevision: "Selection clicks: 2 = Word, 3 = Sentence, 4 = Paragraph. Insert key toggles Overwrite mode. Cut = Ctrl+X, Copy = Ctrl+C, Paste = Ctrl+V, Undo = Ctrl+Z, Redo = Ctrl+Y."
      },
      {
        code: "3.3",
        title: "Formatting the Text (Character Typography)",
        whatIsIt: "Character formatting modifies the visual appearance of individual letters, words, and numbers without changing the underlying textual content, including font face, size, color, weight, and vertical positioning.",
        whyImportant: "Typography creates visual hierarchy, highlights crucial facts, and produces professional, readable publications suitable for formal distribution.",
        howItWorks: "Users highlight target characters and apply formatting attributes through the Formatting Toolbar, Sidebar (`Ctrl + F5`), or keyboard shortcut commands.",
        tableTitle: "CHARACTER FORMATTING SHORTCUTS & ATTRIBUTES",
        table: {
          headers: ["Typography Attribute", "Visual Result / Appearance", "Shortcut Key Command", "Typical Practical Application"],
          rows: [
            ["Bold", "Darkens and thickens stroke width (B)", "Ctrl + B", "Headings, titles, and important keywords"],
            ["Italic", "Slants characters to the right (I)", "Ctrl + I", "Book titles, scientific names, emphasis"],
            ["Single Underline", "Draws a single line beneath text (U)", "Ctrl + U", "Hyperlinks, document section headings"],
            ["Double Underline", "Draws two parallel lines beneath text", "Ctrl + D", "Official total amounts, formal accounting figures"],
            ["Superscript", "Raises text above baseline in smaller size (X²)", "Ctrl + Shift + P", "Mathematical powers (x²), ordinal suffixes (1st, 2nd)"],
            ["Subscript", "Lowers text below baseline in smaller size (X₂)", "Ctrl + Shift + B", "Chemical formulas (H₂O, CO₂), logarithmic bases"],
            ["Clear Direct Formatting", "Removes manual formatting, resets to default", "Ctrl + M", "Cleaning up copied text from web pages or external files"]
          ],
          colWidths: [110, 150, 110, 141]
        },
        practicalExample: "Writing a chemistry formula and an algebra equation:\n- For water 'H2O', select '2' and press `Ctrl + Shift + B` (Subscript) to get H₂O.\n- For Einstein's equation 'E=mc2', select '2' and press `Ctrl + Shift + P` (Superscript) to get E=mc².\n- If unwanted formatting is applied, select the text and press `Ctrl + M` to reset it to default clean text.",
        importantPoints: [
          "Shortcut for Superscript: `Ctrl + Shift + P` (e.g. X²).",
          "Shortcut for Subscript: `Ctrl + Shift + B` (e.g. X₂).",
          "Shortcut for Double Underline: `Ctrl + D`.",
          "Shortcut to Clear Direct Formatting: `Ctrl + M`.",
          "Shortcut to increase font size: `Ctrl + ]`; to decrease font size: `Ctrl + [`."
        ],
        quickRevision: "Key typography shortcuts: Bold = Ctrl+B, Italic = Ctrl+I, Underline = Ctrl+U, Double Underline = Ctrl+D, Superscript = Ctrl+Shift+P, Subscript = Ctrl+Shift+B, Clear Format = Ctrl+M."
      },
      {
        code: "3.4",
        title: "Paragraph Indentation and Line Spacing",
        whatIsIt: "Paragraph formatting governs the spatial alignment, horizontal margin indents, and vertical line spacing of entire blocks of text.",
        whyImportant: "Proper alignment and consistent line spacing ensure documents appear balanced, organized, and easy for readers to scan comfortably.",
        howItWorks: "Paragraph attributes apply to the entire active paragraph where the cursor currently rests without requiring full manual text highlighting.",
        tableTitle: "PARAGRAPH ALIGNMENT AND LINE SPACING COMMANDS",
        table: {
          headers: ["Formatting Feature", "Shortcut Key", "Visual Alignment Behavior", "Official Office Standards"],
          rows: [
            ["Align Left", "Ctrl + L", "Text aligns flush along left margin; right edge is ragged", "Default standard for letters, emails, and general text"],
            ["Align Center", "Ctrl + E", "Text centers evenly between left and right margins", "Used for document titles, poems, and cover page headings"],
            ["Align Right", "Ctrl + R", "Text aligns flush along right margin; left edge is ragged", "Used for dates, header signatures, and right-aligned addresses"],
            ["Justify", "Ctrl + J", "Text spaces evenly so both left and right edges are flush", "Formal standard for newspapers, textbooks, and reports"],
            ["Single Line Spacing", "Ctrl + 1", "Standard single space between lines (1.0 line height)", "Compact text for tables, notes, and dense listings"],
            ["1.5 Line Spacing", "Ctrl + 5", "One and a half space between lines (1.5 line height)", "Academic thesis standard, easy reading for reviewers"],
            ["Double Line Spacing", "Ctrl + 2", "Double space between lines (2.0 line height)", "Draft editing, legal documents requiring written annotations"]
          ],
          colWidths: [120, 75, 170, 146]
        },
        componentsTitle: "PARAGRAPH INDENTATION TYPES",
        componentsOrTypes: [
          "First Line Indent: Automatically indents only the first line of every paragraph by a set distance (e.g. 0.5 inch), leaving subsequent lines at the left margin.",
          "Hanging Indent: The first line remains at the left margin, while all subsequent lines are indented inward (commonly used for bibliographies and reference citations).",
          "Increase Indent (`Ctrl + Tab` or Toolbar icon): Pushes the entire paragraph block one tab stop inward."
        ],
        practicalExample: "When submitting an official legal application: Highlight the body paragraphs and press `Ctrl + J` to Justify both edges neatly. Then press `Ctrl + 5` to set 1.5 line spacing for clean reviewer readability. Position the date at the top right by pressing `Ctrl + R`.",
        importantPoints: [
          "Left Alignment shortcut: `Ctrl + L` (Default in Writer).",
          "Center Alignment shortcut: `Ctrl + E`.",
          "Right Alignment shortcut: `Ctrl + R`.",
          "Justify Alignment shortcut: `Ctrl + J`.",
          "Single Line Spacing: `Ctrl + 1` | 1.5 Line Spacing: `Ctrl + 5` | Double Line Spacing: `Ctrl + 2`."
        ],
        quickRevision: "Alignments: Left = Ctrl+L, Center = Ctrl+E, Right = Ctrl+R, Justify = Ctrl+J. Line Spacing: 1.0 = Ctrl+1, 1.5 = Ctrl+5, 2.0 = Ctrl+2. First line and hanging indents structure blocks."
      },
      {
        code: "3.5",
        title: "Bullets and Numbering",
        whatIsIt: "Bullets and Numbering are list formatting tools that organize unstructured blocks of text into ordered sequential steps or unordered itemized lists.",
        whyImportant: "Lists improve document readability by breaking complex ideas into distinct, scannable items.",
        howItWorks: "Bullets generate graphic symbols (dots, squares, checkmarks) before items where sequence is unimportant; Numbering generates alphanumeric sequences (1, 2, 3 or A, B, C) where order is critical.",
        componentsTitle: "LIST MANAGEMENT COMMANDS & KEYBOARD SHORTCUTS",
        componentsOrTypes: [
          "Toggle Bullets (Unordered List): Press `Shift + F12` to apply or remove bullet symbols.",
          "Toggle Numbering (Ordered List): Press `F12` to apply or remove sequential numbering.",
          "List Dialogue Box: Access via menu `Format -> Bullets and Numbering` to customize symbols, numbering styles (Roman numerals, letters), and spacing.",
          "Demote / Indent Sub-Level: Press `Tab` at the beginning of a list item to push it into a nested sub-level (e.g., from 1. to 1.1).",
          "Promote / Outdent Parent Level: Press `Shift + Tab` to move a nested sub-item back out to the parent level.",
          "Exit List: Press `Enter` twice on an empty list item to terminate list mode."
        ],
        practicalExample: "To document a 4-step computer troubleshooting procedure: Type the steps, highlight them, and press `F12`. Writer automatically numbers them 1, 2, 3, and 4. If you insert a new step between 2 and 3, Writer dynamically renumbers all subsequent steps without manual correction.",
        importantPoints: [
          "Shortcut to toggle Bullets on/off: `Shift + F12`.",
          "Shortcut to toggle Numbering on/off: `F12`.",
          "Pressing `Tab` at the start of a list item demotes it to a sub-list; `Shift + Tab` promotes it.",
          "Pressing `Enter` twice exits active list creation mode."
        ],
        quickRevision: "Bullets (unordered items) = Shift+F12. Numbering (ordered steps) = F12. Press Tab to indent to sub-level, Shift+Tab to outdent. Press Enter twice to end list."
      },
      {
        code: "3.6",
        title: "Tables in Word Processing",
        whatIsIt: "A table is a structured matrix of horizontal rows and vertical columns that intersect to form rectangular data cells, used to organize and compare numerical or tabular information.",
        whyImportant: "Tables allow precise side-by-side comparisons, price lists, time schedules, and structured reports that would be disorganized in regular paragraphs.",
        howItWorks: "Tables are created via the Table menu or shortcut `Ctrl + F12`. Each cell has a coordinate address (e.g. Column A, Row 1 = A1). Writer even includes an embedded calculation bar (`F2`) to perform basic mathematical formulas inside tables.",
        componentsTitle: "ESSENTIAL TABLE OPERATIONS & SHORTCUTS",
        componentsOrTypes: [
          "Insert Table Dialogue: Press `Ctrl + F12`, or select menu `Table -> Insert Table`.",
          "Cell Navigation: Press `Tab` to move to the next cell to the right; press `Shift + Tab` to move to the previous cell.",
          "Automatic Row Creation: Pressing `Tab` while positioned in the very last cell (bottom right) automatically appends a new blank row.",
          "Table Formula Bar: Press function key `F2` to open the formula bar and calculate sums (e.g., `=SUM(<A1:A5>)`).",
          "Merge Cells: Combines multiple selected adjacent cells into a single larger cell.",
          "Split Cells: Divides a single selected cell into multiple rows or columns."
        ],
        practicalExample: "A teacher creates a student mark sheet table with 4 columns: 'Roll No', 'Name', 'Marks', 'Grade'. After typing the marks, the teacher clicks the bottom total cell and presses `F2`. The formula bar appears; entering `=SUM(<C2:C10>)` automatically sums the student marks inside Writer.",
        importantPoints: [
          "Shortcut key to Insert Table in LibreOffice Writer: `Ctrl + F12`.",
          "Shortcut key to open the Formula Bar inside a table: `F2`.",
          "Pressing `Tab` in the last cell of a table automatically inserts a new row.",
          "Pressing `Shift + Tab` moves the cursor to the previous cell."
        ],
        quickRevision: "Insert Table = Ctrl+F12. Formula bar in table = F2. Navigate cells with Tab (forward) and Shift+Tab (backward). Pressing Tab in the last cell inserts a new row."
      },
      {
        code: "3.7",
        title: "Mail Merge Wizard",
        whatIsIt: "Mail Merge is an automated batch document processing feature in LibreOffice Writer that merges a single standardized master document with a structured database of recipient records to produce hundreds of customized personalized letters, envelopes, or mailing labels in seconds.",
        whyImportant: "Sending personalized admission letters, interview call letters, or monthly invoices to 500 candidates manually would take hours of error-prone typing. Mail Merge completes the entire task in minutes.",
        howItWorks: "Mail Merge requires two foundational components: (1) **Main Document** containing fixed boilerplate text and dynamic variable field placeholders (e.g., `<Name>`, `<City>`), and (2) **Data Source** (spreadsheet or database table containing recipient records).",
        componentsTitle: "THE 5-STEP MAIL MERGE WIZARD PROCESS (TOOLS MENU)",
        componentsOrTypes: [
          "Step 1: Select Starting Document (Use current active document or template).",
          "Step 2: Select Document Type (Choose Letter or E-mail message).",
          "Step 3: Insert Address Block / Select Data Source (Link to recipient `.ods` Calc spreadsheet).",
          "Step 4: Create Salutation (Configure personalized greeting: 'Dear Mr./Ms. <Name>').",
          "Step 5: Adjust Layout, Preview, and Save / Print / Send merged individualized documents."
        ],
        practicalExample: "A college needs to send exam admit cards to 1,000 students. The admin creates an admit card template in Writer. In Tools -> Mail Merge Wizard, they link the student database `Students.ods`. Writer automatically generates 1,000 personalized admit cards with each student's specific name, roll number, and exam center.",
        importantPoints: [
          "Mail Merge is accessed via: `Tools -> Mail Merge Wizard`.",
          "Mail Merge requires two files: Main Document and Data Source.",
          "A spreadsheet (`.ods`), database (`.odb`), or CSV file can serve as the recipient Data Source.",
          "Mail Merge outputs can be saved as a single merged document, individual files, or sent directly to a printer."
        ],
        quickRevision: "Mail Merge generates bulk personalized letters by combining a Main Document with a Data Source (Spreadsheet/Database). Accessed via Tools -> Mail Merge Wizard in 5 steps."
      },
      {
        code: "3.8",
        title: "Spelling, Grammar Checking, and Thesaurus",
        whatIsIt: "Proofing tools in LibreOffice Writer analyze written text against internal lexical dictionaries to detect spelling errors, grammatical discrepancies, and provide vocabulary synonyms.",
        whyImportant: "Spelling errors undermine document credibility and professional communication. Built-in proofing tools ensure documents are grammatically correct before printing.",
        howItWorks: "As you type, Writer compares words against the installed dictionary. Questionable words are flagged with colored wavy underlines: Red indicates a possible spelling error, while Blue indicates a potential grammatical issue.",
        componentsTitle: "PROOFING SHORTCUTS & TOOLS",
        componentsOrTypes: [
          "Spell Check Dialogue: Press function key `F7` (or menu `Tools -> Spelling`) to scan the document with suggestion alternatives, 'Ignore Once', 'Ignore All', and 'Add to Dictionary'.",
          "Automatic Spell Checking Toggle: Press `Shift + F7` to toggle background red-wavy underlining on or off.",
          "Thesaurus (Synonyms & Antonyms): Highlight a word and press `Ctrl + F7` to find contextual synonyms and improve vocabulary variety.",
          "Find and Replace: Press `Ctrl + H` to search for specific words throughout the document and replace them individually or globally.",
          "Find Only: Press `Ctrl + F` to open the quick search bar at the bottom."
        ],
        practicalExample: "If you mistype 'compuer', Writer immediately underlines it with a red wavy line. Right-clicking the word displays 'computer'. Selecting it corrects the spelling. Pressing `Ctrl + F7` on 'important' reveals synonyms like 'crucial', 'vital', and 'essential'." ,
        importantPoints: [
          "Shortcut key for Spelling and Grammar Check: `F7`.",
          "Shortcut key to toggle Automatic Spell Checking: `Shift + F7`.",
          "Shortcut key for Thesaurus (Synonyms): `Ctrl + F7`.",
          "Shortcut key for Find and Replace: `Ctrl + H`.",
          "Red squiggly line indicates a Spelling mistake; Blue squiggly line indicates a Grammar mistake."
        ],
        quickRevision: "Spelling Check = F7. Automatic Spell Check = Shift+F7. Thesaurus = Ctrl+F7. Find & Replace = Ctrl+H. Red line = spelling error; Blue line = grammar error."
      },
      {
        code: "3.9",
        title: "Printing and Exporting to PDF",
        whatIsIt: "Printing produces hardcopy paper output of the digital document, while PDF Export generates a standardized, read-only Portable Document Format file that preserves formatting across all devices.",
        whyImportant: "Previewing before printing saves paper and toner by revealing layout flaws. Exporting to PDF ensures clients see the exact document layout without requiring installed fonts.",
        howItWorks: "Print Preview renders the exact page appearance as it will emerge from the printer. Direct PDF Export converts Writer's OpenDocument elements into standard PDF page description vectors.",
        componentsTitle: "PRINTING AND PDF EXPORT OPERATIONS",
        componentsOrTypes: [
          "Print Preview: Press `Ctrl + Shift + O` (or menu `File -> Print Preview`) to inspect margins, page breaks, and alignments in a full-screen overview. Press `Esc` to exit preview.",
          "Print Dialogue Box: Press `Ctrl + P` (or menu `File -> Print`) to select target printer, page range (e.g. 1-5, 8), number of copies, and collation settings.",
          "Export Directly as PDF: Click the dedicated 'Direct PDF' toolbar icon on the Standard Toolbar to export the document with default settings in one click.",
          "Export as PDF (Advanced): Select `File -> Export As -> Export as PDF` to configure digital watermarks, password encryption, image compression quality, and PDF/A archiving standards."
        ],
        practicalExample: "Before printing 50 copies of a report, press `Ctrl + Shift + O` for Print Preview. You notice an accidental blank page at the end. You exit preview, delete the extra blank page, and then press `Ctrl + P` to print, avoiding 50 wasted sheets of paper." ,
        importantPoints: [
          "Shortcut key for Print Preview: `Ctrl + Shift + O`.",
          "Shortcut key for Print: `Ctrl + P`.",
          "LibreOffice provides a dedicated 'Export Directly as PDF' button on the Standard Toolbar.",
          "PDF/A is an ISO-standardized version of PDF specialized for digital preservation and long-term archiving."
        ],
        quickRevision: "Print Preview = Ctrl+Shift+O. Print = Ctrl+P. Direct PDF export creates universal print-ready documents that preserve fonts and layouts on any device."
      },
      {
        code: "3.10",
        title: "Shortcut Keys Master Reference for LibreOffice Writer",
        whatIsIt: "A master reference table of all standard keyboard shortcuts used in LibreOffice Writer, categorized for fast revision before examinations.",
        whyImportant: "Shortcut keys form a major component of official NIELIT CCC examination questions. Mastery of hotkeys guarantees high exam scoring and lightning-fast office productivity.",
        tableTitle: "COMPLETE LIBREOFFICE WRITER SHORTCUTS TABLE",
        table: {
          headers: ["Shortcut Key", "Command Name", "Exact Action Performed inside LibreOffice Writer"],
          rows: [
            ["Ctrl + N", "New Document", "Creates a fresh blank document based on default template"],
            ["Ctrl + O", "Open Document", "Opens an existing saved document from storage"],
            ["Ctrl + S", "Save Document", "Saves current modifications to the active file"],
            ["Ctrl + Shift + S", "Save As", "Saves the file under a new name, location, or format"],
            ["Ctrl + P", "Print", "Opens the Print configuration dialogue box"],
            ["Ctrl + Shift + O", "Print Preview", "Toggles full-screen print preview mode on or off"],
            ["Ctrl + W", "Close Window", "Closes active document window without quitting LibreOffice"],
            ["Ctrl + Q", "Exit LibreOffice", "Closes all open documents and exits the entire application"],
            ["Ctrl + F", "Find", "Opens the quick search find bar at bottom of screen"],
            ["Ctrl + H", "Find & Replace", "Opens the Find and Replace dialogue window"],
            ["Ctrl + A", "Select All", "Selects all text, images, and tables in the document"],
            ["Ctrl + B", "Bold", "Applies or removes heavy stroke weight to selected text"],
            ["Ctrl + I", "Italic", "Applies or removes slanted italic styling"],
            ["Ctrl + U", "Underline", "Applies or removes single underline beneath characters"],
            ["Ctrl + D", "Double Underline", "Applies double underline beneath selected characters"],
            ["Ctrl + Shift + P", "Superscript", "Raises text above baseline (e.g. X²)"],
            ["Ctrl + Shift + B", "Subscript", "Lowers text below baseline (e.g. X₂)"],
            ["Ctrl + M", "Clear Formatting", "Resets selected text back to default unformatted style"],
            ["Ctrl + L", "Align Left", "Aligns active paragraph flush to the left margin"],
            ["Ctrl + E", "Align Center", "Centers active paragraph between margins"],
            ["Ctrl + R", "Align Right", "Aligns active paragraph flush to the right margin"],
            ["Ctrl + J", "Justify", "Spaces text so both left and right margins are flush"],
            ["Ctrl + 1", "Single Line Spacing", "Sets paragraph line spacing to 1.0 single space"],
            ["Ctrl + 5", "1.5 Line Spacing", "Sets paragraph line spacing to 1.5 line height"],
            ["Ctrl + 2", "Double Line Spacing", "Sets paragraph line spacing to 2.0 double space"],
            ["F12", "Numbering", "Toggles ordered numbered list on or off"],
            ["Shift + F12", "Bullets", "Toggles unordered bulleted list on or off"],
            ["Ctrl + F12", "Insert Table", "Opens dialogue to create rows and columns table"],
            ["F2", "Table Formula Bar", "Opens formula entry bar inside active table cell"],
            ["F7", "Spelling Check", "Launches the full document Spelling & Grammar dialogue"],
            ["Shift + F7", "Auto Spell Check", "Toggles background red wavy spelling underline"],
            ["Ctrl + F7", "Thesaurus", "Opens dictionary synonyms for the highlighted word"],
            ["Ctrl + F5", "Sidebar", "Toggles the collapsible properties sidebar on/off"]
          ],
          colWidths: [100, 130, 271]
        },
        practicalExample: "Mastering shortcuts eliminates manual mouse menu navigation: To format an exam question, type the text, press `Ctrl + B` for Bold, press `Ctrl + E` to center it, and press `Ctrl + Shift + O` to verify its preview immediately.",
        importantPoints: [
          "Save As: `Ctrl + Shift + S` | Print Preview: `Ctrl + Shift + O`.",
          "Double Underline: `Ctrl + D` | Clear Formatting: `Ctrl + M`.",
          "Superscript: `Ctrl + Shift + P` | Subscript: `Ctrl + Shift + B`.",
          "Numbering: `F12` | Bullets: `Shift + F12` | Insert Table: `Ctrl + F12`.",
          "Spelling Check: `F7` | Thesaurus: `Ctrl + F7`."
        ],
        quickRevision: "Memorize key pairs: Double Underline = Ctrl+D, Superscript = Ctrl+Shift+P, Subscript = Ctrl+Shift+B, Clear Format = Ctrl+M, Bullets = Shift+F12, Numbering = F12, Table = Ctrl+F12, Spell = F7."
      }
    ],
    unitRevision: [
      "LibreOffice Writer defaults: Untitled 1, .odt format, Liberation Serif 12pt, Portrait orientation, Zoom 20% to 600%.",
      "Text Selection clicks: 2 clicks = Word, 3 clicks = Sentence, 4 clicks = Paragraph.",
      "The Insert key toggles between normal Insert Mode and Overwrite Mode.",
      "Typography Shortcuts: Bold = `Ctrl + B`, Italic = `Ctrl + I`, Underline = `Ctrl + U`, Double Underline = `Ctrl + D`.",
      "Vertical Shift Shortcuts: Superscript = `Ctrl + Shift + P` (X²), Subscript = `Ctrl + Shift + B` (X₂).",
      "Reset Formatting: `Ctrl + M` clears direct formatting.",
      "Paragraph Alignments: Left = `Ctrl + L`, Center = `Ctrl + E`, Right = `Ctrl + R`, Justify = `Ctrl + J`.",
      "Line Spacing Shortcuts: Single (1.0) = `Ctrl + 1`, 1.5 = `Ctrl + 5`, Double (2.0) = `Ctrl + 2`.",
      "List Toggles: Numbering = `F12`, Bullets = `Shift + F12`. Tab demotes list; Shift+Tab promotes.",
      "Table Shortcuts: Insert Table = `Ctrl + F12`, Table Formula = `F2`. Tab in last cell appends a row.",
      "Mail Merge combines a Main Document with a Data Source (Calc .ods) in 5 steps via `Tools -> Mail Merge Wizard`.",
      "Proofing Shortcuts: Spelling Check = `F7`, Auto Spell Check = `Shift + F7`, Thesaurus = `Ctrl + F7`, Find & Replace = `Ctrl + H`.",
      "Print Operations: Print Preview = `Ctrl + Shift + O`, Print = `Ctrl + P`, Direct PDF Export creates universal fixed-layout files."
    ],
    keyTerms: [
      { term: "ODT", fullForm: "OpenDocument Text", desc: "Default file extension for LibreOffice Writer documents." },
      { term: "WIMP", fullForm: "Windows, Icons, Menus, Pointer", desc: "Visual user interface model used throughout LibreOffice." },
      { term: "PDF", fullForm: "Portable Document Format", desc: "Standardized read-only digital document preserving exact layouts." },
      { term: "FOSS", fullForm: "Free and Open Source Software", desc: "Software distributed freely with accessible source code (LibreOffice)." },
      { term: "DPI", fullForm: "Dots Per Inch", desc: "Resolution measurement governing printed document sharpness." },
      { term: "GIGO", fullForm: "Garbage In, Garbage Out", desc: "Computing accuracy principle applicable to Mail Merge data sources." }
    ]
  };
}
