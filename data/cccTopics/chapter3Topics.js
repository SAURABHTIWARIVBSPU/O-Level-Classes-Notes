// CCC Chapter 3: Word Processing (LibreOffice Writer) - Complete Textbook Content
export const chapter3Topics = [
  {
    "chapterNumber": 3,
    "topicNumber": 1,
    "slug": "word-processing-basics-libreoffice-writer",
    "title": "Word Processing Basics & LibreOffice Writer Interface",
    "hindiTitle": "वर्ड प्रोसेसिंग बेसिक्स एवं लिब्रेऑफिस राइटर इंटरफ़ेस",
    "definitionEnglish": "LibreOffice Writer is a free, open-source, feature-rich word processor and desktop publishing application developed by The Document Foundation that enables users to create, format, edit, and publish digital text documents.",
    "definitionHindi": "लिब्रेऑफिस राइटर (LibreOffice Writer) द डॉक्यूमेंट फाउंडेशन द्वारा विकसित एक फ्री और ओपन-सोर्स वर्ड प्रोसेसिंग सॉफ्टवेयर है जिसका उपयोग पत्र, रिपोर्ट, पुस्तकें और डिजिटल दस्तावेज तैयार व प्रारूपित करने के लिए किया जाता है।",
    "simpleWords": "लिब्रेऑफिस राइटर एमएस वर्ड जैसा एक ओपन सोर्स वर्ड प्रोसेसर है जिसमें टाइपिंग, लेटर राइटिंग, टेबल और बुक फॉर्मेटिंग की जाती है।",
    "examImportance": "Very High (4-5 direct questions on default name, zoom limits, font, and interface bars in every CCC exam)",
    "detailedExplanation": "### 1. LibreOffice Writer Interface Specifications\nLibreOffice Writer is the official word processor taught in the NIELIT CCC curriculum. Essential system defaults include:\n- **Default Document Name:** **`Untitled 1`**\n- **Default File Extension:** **`.odt` (OpenDocument Text)**\n- **Default Font Name:** **`Liberation Serif`**\n- **Default Font Size:** **`12 pt`**\n- **Default Page Orientation:** **Portrait**\n- **Default Page Margins:** **0.75 inch (1.9 cm / 19 mm)** on Top, Bottom, Left, and Right.\n- **Zoom Percentage Limits:** Minimum Zoom = **20%**, Maximum Zoom = **600%**.\n\n### 2. Anatomy of the Writer Screen Workspace\n1. **Title Bar:** Topmost horizontal strip displaying the document filename (`Untitled 1 - LibreOffice Writer`) and standard Window Control Buttons (Minimize, Maximize/Restore, Close).\n2. **Menu Bar:** Displays 11 standard functional menus: *File, Edit, View, Insert, Format, Styles, Table, Form, Tools, Window, Help*.\n3. **Standard Toolbar:** Contains graphical shortcut buttons for file and clipboard tasks: *New (Ctrl+N), Open (Ctrl+O), Save (Ctrl+S), Export Direct as PDF, Print (Ctrl+P), Cut, Copy, Paste*.\n4. **Formatting Toolbar:** Contains typography buttons: *Font Name, Font Size, Bold (Ctrl+B), Italic (Ctrl+I), Underline (Ctrl+U), Font Color, Highlight Color, Alignment buttons, Bullets (Shift+F12), Numbering (F12)*.\n5. **Horizontal & Vertical Rulers (`Ctrl + Shift + R`):** Displays visual measurements in inches/centimeters and manages paragraph margin tab-stops.\n6. **Sidebar Deck (`Ctrl + F5`):** Collapsible right-hand panel hosting 7 specialized utility decks: *Properties, Page, Styles (F11), Gallery, Navigator (F5), Shapes, Style Inspector*.\n7. **Status Bar (Bottom Strip):** Displays real-time document metrics: *Page Number (e.g., Page 1 of 5), Total Word Count & Character Count, Page Style (Default Page Style), Document Language (English USA), View Layout (Single Page, Multiple Pages, Book View), and the Zoom Slider (20%–600%)*.",
    "realWorldAnalogy": "LibreOffice Writer is like a modern digital typewriter equipped with an endless roll of paper, automatic spell-checking assistants, multiple colorful pens, and instant printing presses.",
    "importantPoints": [
      "The default file extension of LibreOffice Writer is .odt (OpenDocument Text).",
      "The default document title on opening is Untitled 1.",
      "The minimum zoom in LibreOffice Writer is 20%, and the maximum zoom is 600%.",
      "The default font in LibreOffice Writer is Liberation Serif with a size of 12 pt.",
      "The shortcut key to open the Styles and Formatting deck is F11.",
      "Ruler can be toggled on/off using Ctrl + Shift + R."
    ],
    "commonMistakes": [
      "Thinking the maximum zoom in Writer is 400% (Writer zoom is 600%; Calc zoom is 400%; Impress is 3000%).",
      "Assuming the default font is Times New Roman or Calibri (LibreOffice uses Liberation Serif by default)."
    ],
    "examTips": [
      "Guaranteed CCC Question: 'What is the maximum zoom percentage in LibreOffice Writer?' ➔ 600%.",
      "Guaranteed CCC Question: 'What is the default font size in LibreOffice Writer?' ➔ 12 pt.",
      "Guaranteed CCC Question: 'Which key opens Styles sidebar in Writer?' ➔ F11."
    ],
    "quickRevision": "LibreOffice Writer: Ext=.odt, Default name=Untitled 1, Default font=Liberation Serif 12pt, Zoom=20% to 600%, Styles=F11, Navigator=F5, Ruler=Ctrl+Shift+R.",
    "practiceAssignment": "Launch LibreOffice Writer, locate the Status Bar at the bottom, change the zoom slider from 20% to 600%, and verify the default font name.",
    "microQuiz": [
      {
        "question": "What is the MAXIMUM zoom percentage permitted in LibreOffice Writer?",
        "options": [
          {
            "id": "A",
            "text": "400%"
          },
          {
            "id": "B",
            "text": "500%"
          },
          {
            "id": "C",
            "text": "600%"
          },
          {
            "id": "D",
            "text": "3000%"
          }
        ],
        "correctAnswer": "C",
        "explanation": "LibreOffice Writer supports a maximum zoom magnification of 600% (Minimum is 20%)."
      },
      {
        "question": "What is the default font family and font size in a newly created LibreOffice Writer document?",
        "options": [
          {
            "id": "A",
            "text": "Times New Roman, 12 pt"
          },
          {
            "id": "B",
            "text": "Liberation Serif, 12 pt"
          },
          {
            "id": "C",
            "text": "Calibri, 11 pt"
          },
          {
            "id": "D",
            "text": "Arial, 10 pt"
          }
        ],
        "correctAnswer": "B",
        "explanation": "The standard default font in LibreOffice Writer is Liberation Serif at a size of 12 points."
      }
    ]
  },
  {
    "chapterNumber": 3,
    "topicNumber": 2,
    "slug": "opening-closing-saving-and-pdf-export",
    "title": "Document Operations: Save, Print Preview & PDF Export",
    "hindiTitle": "दस्तावेज़ ऑपरेशन्स: सेव, प्रिंट प्रीव्यू एवं पीडीएफ एक्सपोर्ट",
    "definitionEnglish": "Document management operations encompass creating new documents, opening existing files, saving, saving with new parameters (Save As), generating print previews, printing, and exporting directly into cross-platform PDF format.",
    "definitionHindi": "दस्तावेज़ प्रबंधन में नया डॉक्यूमेंट बनाना, फाइलों को खोलना, सेव करना, दूसरे नाम से सेव करना (Save As), प्रिंट प्रीव्यू देखना, प्रिंट करना और सीधे पीडीएफ में एक्सपोर्ट करना शामिल है।",
    "simpleWords": "फाइल को सेव करना (Ctrl+S), नए नाम से सेव करना (Ctrl+Shift+S), प्रिंट प्रीव्यू (Ctrl+Shift+O) और PDF बनाकर सुरक्षित करना।",
    "examImportance": "Very High (3-4 questions on Save As shortcut Ctrl+Shift+S, Print Preview Ctrl+Shift+O, and PDF export)",
    "detailedExplanation": "### 1. Document Lifecycle Commands and Shortcuts\n1. **New Document (`Ctrl + N`):** Creates a fresh blank document (`Untitled 2`).\n2. **Open Existing Document (`Ctrl + O`):** Opens file selection dialog to browse and load `.odt`, `.docx`, or `.rtf` files.\n3. **Save (`Ctrl + S`):** Writes current modifications to disk. If the document is unsaved, prompts for filename and directory.\n4. **Save As (`Ctrl + Shift + S`):** Saves an exact duplicate copy of the active document under a **new filename, different directory, or alternate file format** (such as saving an `.odt` document as `.docx` or `.txt`).\n5. **Save a Copy:** Saves a clone of the document without switching the active editing window to the new file.\n6. **Close Document (`Ctrl + W`):** Closes the active document tab while keeping the LibreOffice suite running.\n7. **Exit LibreOffice Suite (`Ctrl + Q`):** Shuts down all open LibreOffice modules entirely.\n\n### 2. Print Preview & Printing\n- **Print Preview (`Ctrl + Shift + O`):** Displays a high-fidelity visual layout simulation of exactly how the pages will look when printed on physical paper. Enables multi-page grid views (2 pages, 4 pages, book mode).\n- **Print Dialog (`Ctrl + P`):** Configures target physical printer, number of copies, page ranges (e.g., `1-5, 8, 12`), and duplex two-sided printing.\n\n### 3. Direct Export to PDF (Portable Document Format)\n- **Direct PDF Export Icon:** Located on the Standard Toolbar; exports the document instantly to a `.pdf` file with 1-click using default compression.\n- **Export As PDF Dialog (File ➔ Export As ➔ Export as PDF):** Allows advanced configuration including **Lossless image compression**, **PDF/A-1a ISO archive compliance**, **Password Encryption (Open Password and Permission Password)**, and digital watermark overlays.",
    "realWorldAnalogy": "Save As is like photocopying your handwritten notebook and writing a friend's name on the new copy, leaving your original notebook untouched.",
    "importantPoints": [
      "In LibreOffice Writer, the shortcut key for 'Save As' is Ctrl + Shift + S (In MS Word it is F12).",
      "The shortcut key for 'Print Preview' in LibreOffice Writer is Ctrl + Shift + O (In MS Word it is Ctrl + F2).",
      "The shortcut key to close the current document window is Ctrl + W.",
      "The shortcut key to exit the entire LibreOffice application is Ctrl + Q.",
      "PDF files created via Export as PDF can be password protected."
    ],
    "commonMistakes": [
      "Pressing F12 for Save As in LibreOffice Writer (F12 in LibreOffice activates Numbered Lists; Save As is strictly Ctrl + Shift + S).",
      "Confusing Print Preview shortcut with MS Word (LibreOffice Print Preview is Ctrl + Shift + O)."
    ],
    "examTips": [
      "Guaranteed CCC Question: 'What is the shortcut key for Save As in LibreOffice Writer?' ➔ Ctrl + Shift + S.",
      "Guaranteed CCC Question: 'What is the shortcut key for Print Preview in LibreOffice Writer?' ➔ Ctrl + Shift + O.",
      "Guaranteed CCC Question: 'What is the shortcut key to exit LibreOffice?' ➔ Ctrl + Q."
    ],
    "quickRevision": "Document operations: New=Ctrl+N, Open=Ctrl+O, Save=Ctrl+S, Save As=Ctrl+Shift+S, Close=Ctrl+W, Exit=Ctrl+Q, Print Preview=Ctrl+Shift+O, Print=Ctrl+P, Direct PDF export button on Standard Toolbar.",
    "practiceAssignment": "Type a paragraph in LibreOffice Writer, press Ctrl + Shift + S to save it as 'MyNotes.odt', press Ctrl + Shift + O to inspect Print Preview, and export it as a PDF.",
    "microQuiz": [
      {
        "question": "What is the keyboard shortcut key for 'Save As' in LibreOffice Writer?",
        "options": [
          {
            "id": "A",
            "text": "F12"
          },
          {
            "id": "B",
            "text": "Ctrl + Shift + S"
          },
          {
            "id": "C",
            "text": "Ctrl + S"
          },
          {
            "id": "D",
            "text": "Alt + S"
          }
        ],
        "correctAnswer": "B",
        "explanation": "In LibreOffice Writer, Save As is executed using Ctrl + Shift + S (whereas F12 is reserved for toggling Numbered Lists)."
      },
      {
        "question": "Which keyboard shortcut activates 'Print Preview' mode in LibreOffice Writer?",
        "options": [
          {
            "id": "A",
            "text": "Ctrl + F2"
          },
          {
            "id": "B",
            "text": "Ctrl + Shift + O"
          },
          {
            "id": "C",
            "text": "Ctrl + P"
          },
          {
            "id": "D",
            "text": "Alt + P"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Pressing Ctrl + Shift + O toggles the full Print Preview layout canvas in LibreOffice Writer."
      }
    ]
  },
  {
    "chapterNumber": 3,
    "topicNumber": 3,
    "slug": "text-creation-editing-and-selection",
    "title": "Text Creation, Editing, Cut/Copy/Paste & Undo/Redo",
    "hindiTitle": "टेक्स्ट निर्माण, संपादन, कट/कॉपी/पेस्ट एवं अनडू/रीडू",
    "definitionEnglish": "Text creation and editing encompasses text typing, cursor navigation, character/word/paragraph selection techniques, clipboard operations (Cut, Copy, Paste, Paste Special), and chronological command reversal (Undo and Redo).",
    "definitionHindi": "टेक्स्ट निर्माण एवं संपादन में टेक्स्ट टाइपिंग, कर्सर नेविगेशन, टेक्स्ट सिलेक्शन तकनीक, क्लिपबोर्ड ऑपरेशन्स (कट, कॉपी, पेस्ट, पेस्ट स्पेशल) और अनडू/रीडू कमांड शामिल हैं।",
    "simpleWords": "टेक्स्ट टाइप करना, सेलेक्ट करना, कट (Ctrl+X), कॉपी (Ctrl+C), पेस्ट (Ctrl+V), अनडू (Ctrl+Z) और रीडू (Ctrl+Y) करना।",
    "examImportance": "High (2-3 questions on mouse text selection tricks, Paste Special Ctrl+Shift+V, and Undo/Redo)",
    "detailedExplanation": "### 1. Mouse Text Selection Techniques (Essential CCC Exam Shortcuts)\n- **Single Click:** Places the flashing text insertion cursor at that exact character position.\n- **Double-Click:** Instantly selects the **entire single word**.\n- **Triple-Click:** Instantly selects the **entire sentence**.\n- **Quadruple-Click (4 Clicks):** Instantly selects the **entire paragraph**.\n- **Select All (`Ctrl + A`):** Highlights the entire document from start to finish.\n\n### 2. Clipboard Operations: Cut, Copy, Paste & Paste Special\nThe Windows/Linux Clipboard is a temporary RAM holding buffer for text and media:\n1. **Copy (`Ctrl + C`):** Duplicates selected text to clipboard without removing it from document.\n2. **Cut (`Ctrl + X`):** Removes selected text from document and stores it in clipboard.\n3. **Paste (`Ctrl + V`):** Inserts clipboard contents at the active cursor position.\n4. **Paste Special (`Ctrl + Shift + V`):** Opens an options dialog allowing the user to paste text as **Unformatted Text** (stripping all colors, fonts, and HTML styles), RTF, or GDI Bitmap.\n5. **Paste Unformatted Text (`Ctrl + Alt + Shift + V`):** Directly pastes pure raw text with zero external formatting.\n\n### 3. Undo, Redo & Repeat\n- **Undo (`Ctrl + Z`):** Reverses the most recent editing action (e.g., accidental deletion).\n- **Redo (`Ctrl + Y`):** Re-applies the action that was just reversed by Undo.\n- **Repeat (`Ctrl + Shift + Y`):** Re-executes the last formatting action.",
    "realWorldAnalogy": "Undo is like a time machine taking you one step backward before an accident happened; Redo takes you forward again.",
    "importantPoints": [
      "Double-click selects a Word; Triple-click selects a Sentence; Quadruple-click selects a Paragraph.",
      "Paste Special shortcut key is Ctrl + Shift + V.",
      "Undo is Ctrl + Z; Redo is Ctrl + Y.",
      "Select All is Ctrl + A.",
      "Cut is Ctrl + X (moves text); Copy is Ctrl + C (duplicates text)."
    ],
    "commonMistakes": [
      "Confusing Triple-click in LibreOffice Writer (In Writer: 2 clicks = Word, 3 clicks = Sentence, 4 clicks = Paragraph).",
      "Thinking Paste Special is Ctrl + Alt + V (In LibreOffice Writer, Paste Special is Ctrl + Shift + V)."
    ],
    "examTips": [
      "Direct CCC Question: 'How many mouse clicks select an entire sentence in LibreOffice Writer?' ➔ Triple-Click (3 clicks).",
      "Direct CCC Question: 'What is the shortcut key for Paste Special in LibreOffice Writer?' ➔ Ctrl + Shift + V."
    ],
    "quickRevision": "Text selection: 2 clicks=Word, 3 clicks=Sentence, 4 clicks=Paragraph, Ctrl+A=All. Clipboard: Cut=Ctrl+X, Copy=Ctrl+C, Paste=Ctrl+V, Paste Special=Ctrl+Shift+V. Reversal: Undo=Ctrl+Z, Redo=Ctrl+Y.",
    "practiceAssignment": "Type three sentences in Writer. Test selecting a word with 2 clicks, a sentence with 3 clicks, and a paragraph with 4 clicks.",
    "microQuiz": [
      {
        "question": "In LibreOffice Writer, how many consecutive mouse clicks are required to select an entire SENTENCE?",
        "options": [
          {
            "id": "A",
            "text": "Single Click"
          },
          {
            "id": "B",
            "text": "Double-Click"
          },
          {
            "id": "C",
            "text": "Triple-Click"
          },
          {
            "id": "D",
            "text": "Quadruple-Click"
          }
        ],
        "correctAnswer": "C",
        "explanation": "In LibreOffice Writer, a triple-click selects the entire sentence up to the ending full stop/punctuation mark."
      },
      {
        "question": "What is the keyboard shortcut for 'Paste Special' in LibreOffice Writer?",
        "options": [
          {
            "id": "A",
            "text": "Ctrl + V"
          },
          {
            "id": "B",
            "text": "Ctrl + Shift + V"
          },
          {
            "id": "C",
            "text": "Alt + V"
          },
          {
            "id": "D",
            "text": "Shift + Insert"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Pressing Ctrl + Shift + V launches the Paste Special dialog to paste text as unformatted text or specific formats."
      }
    ]
  },
  {
    "chapterNumber": 3,
    "topicNumber": 4,
    "slug": "font-color-style-and-case-conversion",
    "title": "Font Formatting: Color, Style, Size & Change Case",
    "hindiTitle": "फॉन्ट फॉर्मेटिंग: रंग, शैली, आकार एवं चेंज केस",
    "definitionEnglish": "Font formatting controls the visual typographic presentation of text characters, including typeface family, font size, bold, italic, single/double underline, strikethrough, subscript, superscript, font color, highlighting, and case conversions.",
    "definitionHindi": "फॉन्ट फॉर्मेटिंग टेक्स्ट वर्णों के दृश्य स्वरूप को नियंत्रित करती है, जिसमें फॉन्ट शैली, आकार, बोल्ड, इटैलिक, सिंगल/डबल अंडरलाइन, सबस्क्रिप्ट, सुपरस्क्रिप्ट और चेंज केस शामिल हैं।",
    "simpleWords": "अक्षरों का रंग, साइज, बोल्ड (Ctrl+B), इटैलिक (Ctrl+I), अंडरलाइन (Ctrl+U), डबल अंडरलाइन (Ctrl+D), H2O के लिए सबस्क्रिप्ट और X2 के लिए सुपरस्क्रिप्ट लगाना।",
    "examImportance": "Very High (4-5 questions on Subscript Ctrl+Shift+B, Superscript Ctrl+Shift+P, Double Underline Ctrl+D, and Change Case options)",
    "detailedExplanation": "### 1. Character Formatting Styles and Shortcuts\n- **Bold (`Ctrl + B`):** Increases stroke weight to make text thicker and prominent.\n- **Italic (`Ctrl + I`):** Slants text forward for stylistic emphasis.\n- **Underline (`Ctrl + U`):** Adds a single horizontal line underneath text.\n- **Double Underline (`Ctrl + D`):** Adds two parallel horizontal lines beneath text (Note: In MS Word Ctrl+D opens Font dialog; in LibreOffice Writer Ctrl+D applies Double Underline!).\n- **Strikethrough:** Draws a horizontal line directly through the middle of text (e.g., ~Obsolete~).\n\n### 2. Subscript vs. Superscript (Crucial CCC Topic)\n| Feature | Subscript (`Ctrl + Shift + B`) | Superscript (`Ctrl + Shift + P`) |\n| :--- | :--- | :--- |\n| **Position** | Drops character slightly **below the baseline** in smaller type | Raises character slightly **above the baseline** in smaller type |\n| **Typical Use** | Chemical molecular formulas (e.g., `H<sub>2</sub>O`, `CO<sub>2</sub>`), math bases | Mathematical powers, exponents, footnotes (e.g., `X<sup>2</sup> + Y<sup>2</sup>`, `1<sup>st</sup>`) |\n| **Writer Shortcut** | **`Ctrl + Shift + B`** (B for Below / Base) | **`Ctrl + Shift + P`** (P for Power) |\n\n### 3. Font Size Increments & Clear Formatting\n- **Increase Font Size:** **`Ctrl + ]`** or **`Ctrl + >`**\n- **Decrease Font Size:** **`Ctrl + [`** or **`Ctrl + <`**\n- **Clear Direct Formatting (`Ctrl + M`):** Resets highlighted text back to default paragraph style, stripping all manual bold, colors, and font overrides.\n\n### 4. The 5 Change Case Modes (Format ➔ Text)\n1. **Sentence case:** Capitalizes only the first letter of the first word in every sentence.\n2. **lowercase:** Converts all highlighted characters to small letters (`ccc examination`).\n3. **UPPERCASE:** Converts all highlighted characters to capital letters (`CCC EXAMINATION`).\n4. **Capitalize Every Word (Title Case):** Capitalizes the first letter of every individual word (`Course On Computer Concepts`).\n5. **tOGGLE cASE:** Inverts the casing of every character; uppercase becomes lowercase and vice versa.\n6. **Cycle Case Shortcut:** Pressing **`Shift + F3`** toggles highlighted text sequentially through *lowercase ➔ UPPERCASE ➔ Capitalize Every Word*.",
    "realWorldAnalogy": "Formatting is like dressing up text: regular text is casual clothes, Bold is a heavy winter jacket, Italic is leaning into the wind, and Change Case is swapping between small badges and big banners.",
    "importantPoints": [
      "In LibreOffice Writer, Double Underline shortcut is Ctrl + D.",
      "Superscript shortcut is Ctrl + Shift + P (e.g., X²).",
      "Subscript shortcut is Ctrl + Shift + B (e.g., H₂O).",
      "Clear Direct Formatting shortcut is Ctrl + M.",
      "Cycle Case shortcut key is Shift + F3."
    ],
    "commonMistakes": [
      "Confusing Subscript and Superscript shortcuts (P = Power = Superscript = Ctrl+Shift+P; B = Below = Subscript = Ctrl+Shift+B).",
      "Thinking Ctrl + D opens the Font Dialog in Writer (Ctrl + D in LibreOffice Writer directly applies Double Underline)."
    ],
    "examTips": [
      "Guaranteed CCC Question: 'What is the shortcut key for Superscript in LibreOffice Writer?' ➔ Ctrl + Shift + P.",
      "Guaranteed CCC Question: 'What is the shortcut key for Subscript in LibreOffice Writer?' ➔ Ctrl + Shift + B.",
      "Guaranteed CCC Question: 'What does Ctrl + D do in LibreOffice Writer?' ➔ Double Underline."
    ],
    "quickRevision": "Font formatting: Bold=Ctrl+B, Italic=Ctrl+I, Underline=Ctrl+U, Double Underline=Ctrl+D, Superscript=Ctrl+Shift+P, Subscript=Ctrl+Shift+B, Clear Direct Formatting=Ctrl+M, Cycle Case=Shift+F3.",
    "practiceAssignment": "Type the chemical formula 'H2O' and make the '2' a subscript using Ctrl + Shift + B. Type 'A2 + B2' and make the '2's superscripts using Ctrl + Shift + P.",
    "microQuiz": [
      {
        "question": "What is the keyboard shortcut for 'Superscript' in LibreOffice Writer?",
        "options": [
          {
            "id": "A",
            "text": "Ctrl + Shift + S"
          },
          {
            "id": "B",
            "text": "Ctrl + Shift + P"
          },
          {
            "id": "C",
            "text": "Ctrl + Shift + B"
          },
          {
            "id": "D",
            "text": "Ctrl + Plus (+)"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Pressing Ctrl + Shift + P formats selected characters as Superscript (raised above baseline for powers/exponents)."
      },
      {
        "question": "What formatting action is executed when pressing 'Ctrl + D' in LibreOffice Writer?",
        "options": [
          {
            "id": "A",
            "text": "Deletes the current paragraph"
          },
          {
            "id": "B",
            "text": "Applies Double Underline to selected text"
          },
          {
            "id": "C",
            "text": "Opens the Font Dialog Box"
          },
          {
            "id": "D",
            "text": "Duplicates the active page"
          }
        ],
        "correctAnswer": "B",
        "explanation": "In LibreOffice Writer, Ctrl + D applies a Double Underline beneath selected characters."
      }
    ]
  },
  {
    "chapterNumber": 3,
    "topicNumber": 5,
    "slug": "paragraph-indentation-alignment-and-bullets",
    "title": "Paragraph Alignment, Indentation, Bullets & Numbering",
    "hindiTitle": "पैराग्राफ अलाइनमेंट, इंडेंटेशन, बुलेट्स एवं नंबरिंग",
    "definitionEnglish": "Paragraph formatting controls the alignment of text blocks relative to page margins, line spacing, paragraph before/after spacing, tab stop indents, unordered bulleted lists, and ordered numbered sequences.",
    "definitionHindi": "पैराग्राफ फॉर्मेटिंग पृष्ठ के किनारों (Margins) के सापेक्ष टेक्स्ट के संरेखण (Alignment), लाइन स्पेसिंग, इंडेंटेशन, बुलेटेड सूची और क्रमांकित (Numbered) सूचियों को नियंत्रित करती है।",
    "simpleWords": "पैराग्राफ को लेफ्ट (Ctrl+L), सेंटर (Ctrl+E), राइट (Ctrl+R), या दोनों तरफ बराबर (Justify Ctrl+J) करना, बुलेट्स (Shift+F12) और नंबरिंग (F12) लगाना।",
    "examImportance": "Very High (3-4 questions on 4 alignment types, line spacing shortcuts Ctrl+1/2/5, and Bullets Shift+F12 vs Numbering F12)",
    "detailedExplanation": "### 1. The Four Paragraph Alignment Modes\nAlignment defines how text lines are positioned horizontally between the left and right page margins:\n1. **Align Left (`Ctrl + L`):** Default alignment in LibreOffice Writer; aligns text cleanly along the left margin with a ragged right edge.\n2. **Center Alignment (`Ctrl + E`):** Centers every line equidistant from left and right margins; ideal for document titles, poems, and certificates.\n3. **Align Right (`Ctrl + R`):** Aligns text cleanly along the right margin with a ragged left edge; ideal for dates, formal sign-offs, and addresses.\n4. **Justify (`Ctrl + J`):** Automatically adjusts micro-spacing between words so that text lines align flush against **both left and right margins** simultaneously, producing a clean rectangular newspaper/book column appearance.\n\n### 2. Line Spacing Shortcuts\n- **Single Line Spacing (1.0):** **`Ctrl + 1`**\n- **Double Line Spacing (2.0):** **`Ctrl + 2`**\n- **1.5 Line Spacing:** **`Ctrl + 5`** (Note: Pressing 5 applies 1.5 spacing!).\n\n### 3. Bullets and Numbering (Crucial CCC Shortcuts)\n- **Toggle Bullets (Unordered List):** **`Shift + F12`** (Adds round circular dots/discs).\n- **Toggle Numbering (Ordered List):** **`F12`** (Adds numbers 1, 2, 3 or A, B, C).\n- **Demote / Indent List Level:** Press **`Tab`**.\n- **Promote / Outdent List Level:** Press **`Shift + Tab`**.\n\n### 4. Paragraph Indentation Types\n- **Left Indent & Right Indent:** Distance offsetting the entire paragraph away from page margins.\n- **First Line Indent:** Indents only the first line of a paragraph inward (standard in novels and essays).\n- **Hanging Indent (`Ctrl + T` in MS Word):** Leaves the first line at margin while indenting all subsequent lines inward (standard in bibliographies and references).",
    "realWorldAnalogy": "Justified text is like bricks neatly stacked in a rectangular wall; left-aligned text is like a staircase with uneven steps on the right.",
    "importantPoints": [
      "Align Left = Ctrl + L | Center = Ctrl + E | Align Right = Ctrl + R | Justify = Ctrl + J.",
      "Line Spacing: Single = Ctrl + 1 | Double = Ctrl + 2 | 1.5 Lines = Ctrl + 5.",
      "Numbering shortcut is F12 in LibreOffice Writer.",
      "Bullets shortcut is Shift + F12 in LibreOffice Writer.",
      "Tab increases list indent level; Shift + Tab decreases list indent level."
    ],
    "commonMistakes": [
      "Assuming Center alignment is Ctrl + C (Ctrl + C is Copy; Center is Ctrl + E).",
      "Confusing F12 in Writer (F12 is Numbering in Writer, whereas in MS Word it is Save As)."
    ],
    "examTips": [
      "Guaranteed CCC Question: 'What is the shortcut key for Numbering in LibreOffice Writer?' ➔ F12.",
      "Guaranteed CCC Question: 'What is the shortcut key for Bullets in LibreOffice Writer?' ➔ Shift + F12.",
      "Guaranteed CCC Question: 'What is the shortcut key for 1.5 Line Spacing?' ➔ Ctrl + 5."
    ],
    "quickRevision": "Alignments: Left=Ctrl+L, Center=Ctrl+E, Right=Ctrl+R, Justify=Ctrl+J. Line spacing: 1=Ctrl+1, 2=Ctrl+2, 1.5=Ctrl+5. Lists: Numbering=F12, Bullets=Shift+F12.",
    "practiceAssignment": "Type a 4-line paragraph in Writer. Test applying Left (Ctrl+L), Center (Ctrl+E), Right (Ctrl+R), and Justify (Ctrl+J), then apply Numbering with F12.",
    "microQuiz": [
      {
        "question": "What is the shortcut key to toggle 'Numbered Lists' (Numbering On/Off) in LibreOffice Writer?",
        "options": [
          {
            "id": "A",
            "text": "F11"
          },
          {
            "id": "B",
            "text": "F12"
          },
          {
            "id": "C",
            "text": "Shift + F12"
          },
          {
            "id": "D",
            "text": "Ctrl + F12"
          }
        ],
        "correctAnswer": "B",
        "explanation": "In LibreOffice Writer, pressing the F12 function key toggles automatic Numbering on or off."
      },
      {
        "question": "Which keyboard shortcut applies '1.5 Line Spacing' to a selected paragraph in LibreOffice Writer?",
        "options": [
          {
            "id": "A",
            "text": "Ctrl + 1.5"
          },
          {
            "id": "B",
            "text": "Ctrl + 5"
          },
          {
            "id": "C",
            "text": "Alt + 5"
          },
          {
            "id": "D",
            "text": "Shift + 5"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Pressing Ctrl + 5 applies 1.5 line spacing (Ctrl+1 is single spacing, Ctrl+2 is double spacing)."
      }
    ]
  },
  {
    "chapterNumber": 3,
    "topicNumber": 6,
    "slug": "header-footer-and-page-setup",
    "title": "Headers, Footers, Page Numbers & Page Setup",
    "hindiTitle": "हेडर, फुटर, पेज नंबर एवं पेज सेटअप",
    "definitionEnglish": "Page setup establishes document layout geometry including page size, orientation, and margins, while Headers and Footers provide designated repeating zones at the top and bottom margins of every page for titles, chapter names, dates, and dynamic page numbering fields.",
    "definitionHindi": "पेज सेटअप दस्तावेज़ के आकार, ओरिएंटेशन (Portrait/Landscape) और मार्जिन को तय करता है, जबकि हेडर और फुटर प्रत्येक पृष्ठ के शीर्ष और तल पर शीर्षक, दिनांक और पेज नंबर दोहराने वाले विशेष क्षेत्र हैं।",
    "simpleWords": "पेज का साइज (A4) और ओरिएंटेशन सेट करना, तथा हर पेज के ऊपर हेडर (शीर्षक) और नीचे फुटर (पेज नंबर) लगाना।",
    "examImportance": "High (2-3 questions on Portrait vs Landscape, default margins, and dynamic Page Number insertion)",
    "detailedExplanation": "### 1. Page Orientation & Paper Dimensions\nPage orientation defines the layout direction of the printable sheet:\n- **Portrait (Vertical / Tall):** Height is greater than width (e.g., standard A4: `210 mm × 297 mm` / `8.27\" × 11.69\"`). Default orientation for letters and books.\n- **Landscape (Horizontal / Wide):** Width is greater than height (e.g., `297 mm × 210 mm` / `11.69\" × 8.27\"`). Ideal for wide tables, spreadsheets, and certificates.\n- **Standard Paper Sizes:** **A4** (Global office standard), **Letter** (`8.5\" × 11\"`), **Legal** (`8.5\" × 14\"`).\n\n### 2. Headers and Footers Architecture\n1. **Header Zone:** Located in the top margin area above the main text boundary. Repeats automatically on every page within that Page Style. Used for Book Title, Chapter Name, and Author.\n2. **Footer Zone:** Located in the bottom margin area below the main text boundary. Used for Dynamic Page Numbers, Date of Publication, and Confidentiality Disclaimers.\n3. **Inserting Headers/Footers:** Via **Insert ➔ Header and Footer ➔ Header / Footer ➔ Default Page Style**.\n\n### 3. Inserting Dynamic Page Number Fields\n- Never type page numbers manually (typing \"1\" manually prints \"1\" on all 100 pages!).\n- Correct Procedure: Click inside Footer, navigate to **Insert ➔ Field ➔ Page Number** (inserts dynamic variable field showing `1`, `2`, `3`...).\n- Insert **Page Count Field** via **Insert ➔ Field ➔ Page Count** to display formatting like *\"Page 3 of 12\"*.",
    "realWorldAnalogy": "Headers and footers are like the pre-printed company letterhead at the top and the registered office address and page number at the bottom of official stationery.",
    "importantPoints": [
      "The two types of page orientation are Portrait (Vertical) and Landscape (Horizontal).",
      "Default page orientation in LibreOffice Writer is Portrait.",
      "Page numbers must be inserted as dynamic Fields via Insert ➔ Field ➔ Page Number.",
      "A4 paper dimensions are 210 mm × 297 mm (8.27 inches × 11.69 inches).",
      "Default page margins in LibreOffice Writer are 0.75 inches on all 4 sides."
    ],
    "commonMistakes": [
      "Typing a static digit '1' in the footer instead of inserting the dynamic Page Number field.",
      "Assuming Landscape is the default orientation in Writer (Portrait is default in Writer; Landscape is default in Impress)."
    ],
    "examTips": [
      "Direct CCC Question: 'What are the two types of page orientation?' ➔ Portrait and Landscape.",
      "Direct CCC Question: 'What is the default orientation in LibreOffice Writer?' ➔ Portrait."
    ],
    "quickRevision": "Page Setup: Portrait (Vertical, default in Writer) vs Landscape (Horizontal, default in Impress). Standard size=A4 (210x297mm). Header/Footer repeat on every page; page numbers inserted via Insert ➔ Field ➔ Page Number.",
    "practiceAssignment": "In Writer, open Format ➔ Page Style, change orientation to Landscape, insert a Header with your name and a Footer with the dynamic Page Number field.",
    "microQuiz": [
      {
        "question": "What is the DEFAULT page orientation in LibreOffice Writer?",
        "options": [
          {
            "id": "A",
            "text": "Landscape"
          },
          {
            "id": "B",
            "text": "Portrait"
          },
          {
            "id": "C",
            "text": "Square"
          },
          {
            "id": "D",
            "text": "Booklet"
          }
        ],
        "correctAnswer": "B",
        "explanation": "LibreOffice Writer creates documents in Portrait (vertical height > width) orientation by default."
      }
    ]
  },
  {
    "chapterNumber": 3,
    "topicNumber": 7,
    "slug": "table-manipulation-rows-columns-borders",
    "title": "Table Manipulation: Insert Rows/Cols, Merge/Split & Borders",
    "hindiTitle": "टेबल मैनिपुलेशन: रो/कॉलम जोड़ना, मर्ज/स्प्लिट एवं बॉर्डर",
    "definitionEnglish": "A table is a structured two-dimensional grid composed of horizontal rows and vertical columns intersecting into individual cells used to organize, format, align, and calculate tabular data within word processor documents.",
    "definitionHindi": "टेबल क्षैतिज पंक्तियों (Rows) और लंबवत स्तंभों (Columns) का एक दो-आयामी ग्रिड है जो खानों (Cells) में विभाजित होता है, जिसका उपयोग डेटा को व्यवस्थित रूप से प्रस्तुत करने के लिए किया जाता है।",
    "simpleWords": "डॉक्यूमेंट में टेबल डालना (Ctrl+F12), रो और कॉलम जोड़ना/हटाना, सेल्स को आपस में जोड़ना (Merge) या तोड़ना (Split), और फॉर्मूला (F2) लगाना।",
    "examImportance": "Very High (3-4 questions on Insert Table shortcut Ctrl+F12, Table Formula bar F2, and Merge/Split)",
    "detailedExplanation": "### 1. Inserting Tables in LibreOffice Writer\n- **Insert Table Shortcut:** **`Ctrl + F12`** (or Table ➔ Insert Table).\n- Prompts dialog to specify Number of Columns (default: 2) and Number of Rows (default: 2).\n- **Minimum Grid Size:** 1 Row × 1 Column.\n\n### 2. Table Navigation & Keyboard Movement\n- **`Tab`:** Moves cursor forward to the next cell to the right. If pressed in the **very last cell**, automatically inserts a **new blank row** at the bottom of the table!\n- **`Shift + Tab`:** Moves cursor backward to the previous cell to the left.\n- **`Arrow Keys` (`↑`, `↓`, `←`, `→`):** Navigates cell by cell across grid boundaries.\n\n### 3. Core Table Manipulation Operations\n1. **Insert / Delete Rows & Columns:**\n   - Right-click ➔ Insert ➔ Rows Above / Rows Below.\n   - Right-click ➔ Insert ➔ Columns Before / Columns After.\n   - Delete Rows / Delete Columns / Delete Table.\n2. **Merge Cells vs. Split Cells:**\n   - **Merge Cells:** Combines two or more highlighted adjacent cells into a single larger unified cell.\n   - **Split Cells:** Divides a single cell horizontally into rows or vertically into columns.\n3. **Table Borders and Background Shading:**\n   - Configures border line style (Solid, Dashed, Double), border thickness (pt), border color, and cell background fill palette.\n\n### 4. Performing Calculations inside Writer Tables (`F2`)\n- LibreOffice Writer includes an integrated Mini-Formula calculation engine:\n- Pressing **`F2`** inside any table cell opens the **Table Formula Bar**.\n- Type mathematical formulas such as `=SUM(<A1:A5>)` or `=<B1>*<C1>` to perform calculations directly inside Writer without opening Calc!",
    "realWorldAnalogy": "A table is like an ice cube tray or a medicine pill organizer with individual compartments (cells) arranged neatly in rows and columns.",
    "importantPoints": [
      "The shortcut key to Insert a Table in LibreOffice Writer is Ctrl + F12.",
      "Pressing Tab in the last cell of a table automatically inserts a new row.",
      "Pressing F2 inside a table cell opens the Formula calculation bar.",
      "Merge Cells combines multiple cells into one; Split Cells divides one cell into multiple cells.",
      "Shift + Tab navigates backward to the preceding cell."
    ],
    "commonMistakes": [
      "Confusing Ctrl + F12 with F12 (F12 is Numbering; Ctrl + F12 is Insert Table).",
      "Thinking table calculations can only be done in Calc (Writer supports basic table formulas using F2)."
    ],
    "examTips": [
      "Guaranteed CCC Question: 'What is the shortcut key to Insert a Table in LibreOffice Writer?' ➔ Ctrl + F12.",
      "Guaranteed CCC Question: 'What happens when you press Tab key in the last cell of a table?' ➔ A new row is inserted.",
      "Guaranteed CCC Question: 'Which key opens Formula bar in Writer table?' ➔ F2."
    ],
    "quickRevision": "Insert Table=Ctrl+F12, Table Formula=F2, Last cell Tab=New Row, Shift+Tab=Prev cell. Operations: Merge (join cells), Split (divide cells), Borders, Shading.",
    "practiceAssignment": "Press Ctrl + F12 to create a 3x3 table in Writer. In the last cell, enter numbers and press F2 to calculate the sum using =SUM.",
    "microQuiz": [
      {
        "question": "What is the keyboard shortcut to INSERT A TABLE in LibreOffice Writer?",
        "options": [
          {
            "id": "A",
            "text": "F12"
          },
          {
            "id": "B",
            "text": "Shift + F12"
          },
          {
            "id": "C",
            "text": "Ctrl + F12"
          },
          {
            "id": "D",
            "text": "Alt + F12"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Pressing Ctrl + F12 opens the Insert Table dialog box in LibreOffice Writer."
      },
      {
        "question": "What occurs when the user presses the 'Tab' key while situated in the very LAST cell of a table in LibreOffice Writer?",
        "options": [
          {
            "id": "A",
            "text": "The table is deleted"
          },
          {
            "id": "B",
            "text": "The cursor exits the table"
          },
          {
            "id": "C",
            "text": "A new row is automatically created at the bottom"
          },
          {
            "id": "D",
            "text": "All cell contents are erased"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Pressing Tab in the bottom-right final cell automatically appends a new empty row to the table."
      }
    ]
  },
  {
    "chapterNumber": 3,
    "topicNumber": 8,
    "slug": "mail-merge-in-libreoffice-writer",
    "title": "Mail Merge in LibreOffice Writer (Step-by-Step)",
    "hindiTitle": "मेल मर्ज की संपूर्ण कार्यविधि (Mail Merge Step-by-Step)",
    "definitionEnglish": "Mail Merge is an automated batch-processing feature in LibreOffice Writer that merges a primary form letter template with an external structured recipient database to generate personalized letters, envelopes, or email messages for multiple recipients simultaneously.",
    "definitionHindi": "मेल मर्ज लिब्रेऑफिस राइटर का एक स्वचालित टूल है जो एक मुख्य पत्र (Main Document) को एड्रेस लिस्ट (Data Source) के साथ जोड़कर सैकड़ों प्राप्तकर्ताओं के लिए व्यक्तिगत पत्र, लिफाफे या ई-मेल एक साथ तैयार करता है।",
    "simpleWords": "एक ही लेटर या एडमिट कार्ड को सैकड़ों अलग-अलग छात्रों के नाम और पते के साथ एक क्लिक में तैयार करने की तकनीक को मेल मर्ज कहते हैं।",
    "examImportance": "Very High (3-4 questions on Mail Merge components, Wizard menu location Tools ➔ Mail Merge, and 5 Wizard steps)",
    "detailedExplanation": "### 1. The 3 Fundamental Pillars of Mail Merge\nMail Merge requires three distinct data components to operate:\n1. **Main Document (Form Letter Template):** The primary document containing standard static body text along with variable placeholder fields called **Merge Fields** (e.g., `«Title» «First_Name» «City»`).\n2. **Data Source (Address List Database):** The structured data table containing individual recipient records. Can be a LibreOffice Calc spreadsheet (`.ods`), Base database (`.odb`), CSV text file, or system address book.\n3. **Merged Output Document:** The final batch-generated document where each page represents a customized personalized letter ready for printing or direct emailing.\n\n### 2. The 5-Step Mail Merge Wizard Workflow\nLocated under the menu: **Tools ➔ Mail Merge Wizard**:\n\n- **Step 1: Select Starting Document:**\n  - Choose between *Use the current document*, *Create a new document*, or *Start from existing template*.\n- **Step 2: Select Document Type:**\n  - Choose between **Letter** (printed paper letters) or **E-mail message** (direct SMTP electronic dispatch).\n- **Step 3: Insert Address Block / Select Address List:**\n  - Connect to the Data Source address list and map field names (Name, Address, PIN Code).\n- **Step 4: Create Salutation:**\n  - Define formal salutations (e.g., *\"Dear Mr. Sharma,\"* or *\"Dear Sir/Madam\"*).\n- **Step 5: Adjust Layout, Edit Document & Save/Print:**\n  - Preview personalized letters, exclude specific recipients if needed, and execute final batch printing or saving.",
    "realWorldAnalogy": "Mail Merge is like filling pre-printed wedding invitation cards where the invitation text is identical on all cards, but the guest's name is customized on each individual envelope.",
    "importantPoints": [
      "Mail Merge Wizard is located under the Tools menu (Tools ➔ Mail Merge Wizard).",
      "Mail Merge requires 3 components: Main Document, Data Source, and Merged Document.",
      "The two document types supported in Mail Merge are Letter and E-mail message.",
      "Calc spreadsheets (.ods) and CSV files can serve as Data Sources for Mail Merge."
    ],
    "commonMistakes": [
      "Looking for Mail Merge in the File or Edit menu (Mail Merge is strictly under Tools ➔ Mail Merge Wizard).",
      "Thinking Mail Merge can only generate printed letters (It can also generate electronic e-mail messages directly)."
    ],
    "examTips": [
      "Guaranteed CCC Question: 'In which menu is Mail Merge Wizard found in LibreOffice Writer?' ➔ Tools Menu.",
      "Guaranteed CCC Question: 'How many primary components are involved in Mail Merge?' ➔ 3 Components."
    ],
    "quickRevision": "Mail Merge (Tools ➔ Mail Merge Wizard) automates batch letters/emails by combining Main Document + Data Source into Merged Document through a 5-step wizard.",
    "practiceAssignment": "In Writer, create a 3-line invitation letter, open Tools ➔ Mail Merge Wizard, and explore the 5 wizard steps.",
    "microQuiz": [
      {
        "question": "In LibreOffice Writer, under which top-level menu is the 'Mail Merge Wizard' located?",
        "options": [
          {
            "id": "A",
            "text": "File Menu"
          },
          {
            "id": "B",
            "text": "Edit Menu"
          },
          {
            "id": "C",
            "text": "Insert Menu"
          },
          {
            "id": "D",
            "text": "Tools Menu"
          }
        ],
        "correctAnswer": "D",
        "explanation": "The Mail Merge Wizard is accessed via Tools ➔ Mail Merge Wizard in LibreOffice Writer."
      },
      {
        "question": "Which of the following represents the correct set of the 3 primary components required for Mail Merge?",
        "options": [
          {
            "id": "A",
            "text": "Hardware, Software, Firmware"
          },
          {
            "id": "B",
            "text": "Main Document, Data Source, Merged Document"
          },
          {
            "id": "C",
            "text": "Header, Footer, Margin"
          },
          {
            "id": "D",
            "text": "Keyboard, Mouse, Monitor"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Mail Merge combines a Main Document template with an external Data Source address list to produce the final Merged Document."
      }
    ]
  },
  {
    "chapterNumber": 3,
    "topicNumber": 9,
    "slug": "autocorrect-spelling-and-grammar-find-replace",
    "title": "AutoCorrect, Spelling & Grammar, Find and Replace",
    "hindiTitle": "ऑटो-करेक्ट, स्पेलिंग-ग्रामर चेक एवं फाइंड-रिप्लेस",
    "definitionEnglish": "Proofreading and search utilities in LibreOffice Writer automate typing correction (AutoCorrect), detect linguistic spelling errors and grammatical anomalies (Spelling & Grammar F7), provide synonyms (Thesaurus Ctrl+F7), and locate/substitute text strings (Find Ctrl+F, Find & Replace Ctrl+H).",
    "definitionHindi": "प्रूफरीडिंग और खोज टूल्स में टाइपिंग गलतियों को स्वतः सुधारना (AutoCorrect), वर्तनी व व्याकरण त्रुटियां जांचना (F7), पर्यायवाची खोजना (Thesaurus Ctrl+F7) और टेक्स्ट को खोजना/बदलना (Ctrl+H) शामिल है।",
    "simpleWords": "स्पेलिंग चेक (F7), थिसॉरस/पर्यायवाची (Ctrl+F7), टेक्स्ट खोजना (Ctrl+F) और एक शब्द को दूसरे शब्द से बदलना (Ctrl+H)।",
    "examImportance": "Very High (4-5 direct questions on F7, Shift+F7, Ctrl+F7, Ctrl+F, and Ctrl+H shortcuts)",
    "detailedExplanation": "### 1. Spelling and Grammar Checking (F7)\n- **Spelling and Grammar Dialog:** **`F7`** (Scans document from cursor and prompts suggestions for misspelled words).\n- **Automatic Spell Checking (Live Squiggly Underlines):** **`Shift + F7`** (Toggles real-time red squiggly underlines).\n- **Visual Error Indicators:**\n  - **Red Wavy Underline:** Indicates a **Spelling error** (word not found in the standard dictionary).\n  - **Blue Wavy Underline:** Indicates a **Grammatical or Punctuation error** (e.g., double spaces, subject-verb disagreement).\n\n### 2. Thesaurus / Synonym Lookup (`Ctrl + F7`)\n- **Thesaurus Shortcut:** **`Ctrl + F7`**\n- Provides a built-in dictionary dictionary of **Synonyms** (words with similar meanings) and **Antonyms** (opposite meanings) to enrich vocabulary without leaving Writer.\n\n### 3. AutoCorrect vs. AutoText\n- **AutoCorrect (Tools ➔ AutoCorrect):** Automatically fixes common typing errors in real-time as you type (e.g., typing `teh` automatically corrects to `the`, and `(c)` converts to `©`).\n- **AutoText (`Ctrl + F3`):** Inserts pre-stored formatted paragraphs or signatures upon typing a shorthand acronym and pressing **`F3`** (e.g., typing `fn` and pressing `F3` inserts your full corporate signature block).\n\n### 4. Find vs. Find and Replace\n- **Find Toolbar (`Ctrl + F`):** Opens a compact search bar at the bottom of the window to locate text strings.\n- **Find and Replace Dialog (`Ctrl + H`):**\n  - **Find Field:** Text to search for.\n  - **Replace Field:** Replacement text to substitute.\n  - **Match Case:** Enforces strict case-sensitive search.\n  - **Whole Words Only:** Prevents matching substrings (e.g., searching for \"cat\" won't match \"catalog\").\n  - **Replace All:** Instantly substitutes every occurrence across the entire document in milliseconds.",
    "realWorldAnalogy": "Spelling check is like a proofreader marking red ink on misspelled words; Thesaurus is like an English professor suggesting richer vocabulary.",
    "importantPoints": [
      "Spelling & Grammar Check shortcut key is F7.",
      "Automatic Spell Check toggle shortcut is Shift + F7.",
      "Thesaurus (Synonyms) shortcut key is Ctrl + F7.",
      "Find shortcut is Ctrl + F; Find & Replace shortcut is Ctrl + H.",
      "AutoText shortcut key is Ctrl + F3 (executed with F3 key).",
      "Red squiggly line indicates Spelling error; Blue squiggly line indicates Grammar error."
    ],
    "commonMistakes": [
      "Confusing F7 with Ctrl + F7 (F7 is Spelling & Grammar; Ctrl + F7 is Thesaurus).",
      "Confusing Ctrl + F with Ctrl + H (Ctrl + F only finds text; Ctrl + H finds and replaces text)."
    ],
    "examTips": [
      "Guaranteed CCC Question: 'What is the shortcut key for Spelling & Grammar check in LibreOffice Writer?' ➔ F7.",
      "Guaranteed CCC Question: 'What is the shortcut key for Thesaurus in LibreOffice Writer?' ➔ Ctrl + F7.",
      "Guaranteed CCC Question: 'What is the shortcut key for Find and Replace in LibreOffice Writer?' ➔ Ctrl + H."
    ],
    "quickRevision": "Spelling Check=F7, Auto Spell Check=Shift+F7, Thesaurus (Synonyms)=Ctrl+F7, Find=Ctrl+F, Find & Replace=Ctrl+H, AutoText=Ctrl+F3. Red line=Spelling, Blue line=Grammar.",
    "practiceAssignment": "Type a misspelled word 'computr' in Writer. Observe the red squiggly line, press F7 to fix it, and press Ctrl + F7 to inspect Thesaurus synonyms for 'happy'.",
    "microQuiz": [
      {
        "question": "What is the shortcut key to launch 'Spelling and Grammar Check' in LibreOffice Writer?",
        "options": [
          {
            "id": "A",
            "text": "F5"
          },
          {
            "id": "B",
            "text": "F7"
          },
          {
            "id": "C",
            "text": "Ctrl + F7"
          },
          {
            "id": "D",
            "text": "Shift + F7"
          }
        ],
        "correctAnswer": "B",
        "explanation": "The F7 function key initiates the comprehensive Spelling and Grammar dialog check."
      },
      {
        "question": "Which keyboard shortcut opens the 'Thesaurus' (Synonyms lookup) utility in LibreOffice Writer?",
        "options": [
          {
            "id": "A",
            "text": "F7"
          },
          {
            "id": "B",
            "text": "Shift + F7"
          },
          {
            "id": "C",
            "text": "Ctrl + F7"
          },
          {
            "id": "D",
            "text": "Alt + F7"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Pressing Ctrl + F7 opens the Thesaurus to find synonyms and antonyms for highlighted words."
      }
    ]
  },
  {
    "chapterNumber": 3,
    "topicNumber": 10,
    "slug": "libreoffice-writer-shortcut-keys",
    "title": "Essential LibreOffice Writer Shortcut Keys",
    "hindiTitle": "लिब्रेऑफिस राइटर के महत्वपूर्ण शॉर्टकट कीज",
    "definitionEnglish": "Shortcut keys in LibreOffice Writer are specific keyboard combinations that execute commands directly without navigating through nested menu items, dramatically accelerating document creation and formatting productivity.",
    "definitionHindi": "लिब्रेऑफिस राइटर में शॉर्टकट कीज वे विशेष कुंजी संयोजन (Key Combinations) हैं जो मेनू में जाए बिना सीधे कमांड्स को निष्पादित करते हैं और कार्य गति को बढ़ाते हैं।",
    "simpleWords": "लिब्रेऑफिस राइटर की सभी महत्वपूर्ण शॉर्टकट कुंजियों (जैसे Ctrl+S, F7, F11, F12, Ctrl+F12) की संपूर्ण परीक्षा तालिका।",
    "examImportance": "Very High (5-6 direct shortcut questions in every CCC examination)",
    "detailedExplanation": "### 1. Master Reference Table: LibreOffice Writer Shortcuts\n| Command / Operation | Shortcut Key | Functional Description |\n| :--- | :--- | :--- |\n| **New Document** | **`Ctrl + N`** | Creates a new blank text document |\n| **Open Document** | **`Ctrl + O`** | Opens existing document from storage |\n| **Save Document** | **`Ctrl + S`** | Saves active modifications to disk |\n| **Save As** | **`Ctrl + Shift + S`** | Saves document with new name or format |\n| **Print Preview** | **`Ctrl + Shift + O`** | Toggles full visual Print Preview mode |\n| **Print Document** | **`Ctrl + P`** | Opens the Print dialogue box |\n| **Close Document** | **`Ctrl + W`** | Closes the current document window |\n| **Exit Application** | **`Ctrl + Q`** | Exits the entire LibreOffice suite |\n| **Cut** | **`Ctrl + X`** | Moves selected text to clipboard |\n| **Copy** | **`Ctrl + C`** | Duplicates selected text to clipboard |\n| **Paste** | **`Ctrl + V`** | Pastes clipboard contents at cursor |\n| **Paste Special** | **`Ctrl + Shift + V`** | Opens Paste Special options dialog |\n| **Undo** | **`Ctrl + Z`** | Reverses the last action |\n| **Redo** | **`Ctrl + Y`** | Re-executes the last undone action |\n| **Select All** | **`Ctrl + A`** | Selects entire document content |\n| **Find** | **`Ctrl + F`** | Opens the Find search bar |\n| **Find and Replace** | **`Ctrl + H`** | Opens Find & Replace dialog box |\n| **Bold** | **`Ctrl + B`** | Applies heavy stroke weight |\n| **Italic** | **`Ctrl + I`** | Applies slanted text emphasis |\n| **Underline** | **`Ctrl + U`** | Applies single underline |\n| **Double Underline** | **`Ctrl + D`** | Applies double underline |\n| **Superscript** | **`Ctrl + Shift + P`** | Raises characters (e.g., X²) |\n| **Subscript** | **`Ctrl + Shift + B`** | Drops characters (e.g., H₂O) |\n| **Align Left** | **`Ctrl + L`** | Flushes text along left margin |\n| **Center Alignment** | **`Ctrl + E`** | Centers text between margins |\n| **Align Right** | **`Ctrl + R`** | Flushes text along right margin |\n| **Justify Alignment** | **`Ctrl + J`** | Aligns text along both margins |\n| **Single Line Spacing** | **`Ctrl + 1`** | Sets 1.0 line spacing |\n| **Double Line Spacing** | **`Ctrl + 2`** | Sets 2.0 line spacing |\n| **1.5 Line Spacing** | **`Ctrl + 5`** | Sets 1.5 line spacing |\n| **Insert Table** | **`Ctrl + F12`** | Launches Insert Table dialog |\n| **Numbered List (Numbering)** | **`F12`** | Toggles ordered number sequence |\n| **Bulleted List (Bullets)** | **`Shift + F12`** | Toggles unordered bullet points |\n| **Spelling & Grammar Check** | **`F7`** | Runs proofreading dialog |\n| **Auto Spell Check** | **`Shift + F7`** | Toggles live spell checking |\n| **Thesaurus (Synonyms)** | **`Ctrl + F7`** | Opens Synonyms dictionary |\n| **Navigator** | **`F5`** | Opens document Navigator tree |\n| **Styles Deck** | **`F11`** | Opens Styles & Formatting sidebar |\n| **Clear Direct Formatting** | **`Ctrl + M`** | Strips manual formatting overrides |\n| **Insert Page Break** | **`Ctrl + Enter`** | Forces text to next new page |\n| **Insert Hyperlink** | **`Ctrl + K`** | Opens Hyperlink insertion dialog |",
    "realWorldAnalogy": "Using shortcut keys is like using direct highway expressways instead of stopping at every local traffic light.",
    "importantPoints": [
      "F12 = Numbering | Shift + F12 = Bullets | Ctrl + F12 = Insert Table.",
      "F7 = Spelling Check | Shift + F7 = Auto Spell Check | Ctrl + F7 = Thesaurus.",
      "F11 = Styles Deck | F5 = Navigator | Ctrl + M = Clear Direct Formatting.",
      "Ctrl + Shift + S = Save As | Ctrl + Shift + O = Print Preview | Ctrl + Q = Exit.",
      "Ctrl + D = Double Underline | Ctrl + Shift + P = Superscript | Ctrl + Shift + B = Subscript."
    ],
    "commonMistakes": [
      "Memorizing MS Word shortcuts for LibreOffice without checking differences (e.g., Save As is Ctrl+Shift+S in Writer, not F12; Double Underline is Ctrl+D in Writer, not Ctrl+Shift+D).",
      "Confusing F11 (Styles) with F12 (Numbering)."
    ],
    "examTips": [
      "This single shortcut table covers ~5-6 direct questions in every official CCC exam paper.",
      "Review the F1 to F12 functional key mapping specifically for LibreOffice."
    ],
    "quickRevision": "Master the 40 core shortcuts: Save As=Ctrl+Shift+S, Print Preview=Ctrl+Shift+O, Table=Ctrl+F12, Numbering=F12, Bullets=Shift+F12, Spell=F7, Thesaurus=Ctrl+F7, Styles=F11, Page Break=Ctrl+Enter.",
    "practiceAssignment": "Open Writer and create a 1-page sample document utilizing at least 10 different shortcut keys from the table without touching the mouse.",
    "microQuiz": [
      {
        "question": "Which shortcut key combination inserts a manual PAGE BREAK in LibreOffice Writer?",
        "options": [
          {
            "id": "A",
            "text": "Shift + Enter"
          },
          {
            "id": "B",
            "text": "Ctrl + Enter"
          },
          {
            "id": "C",
            "text": "Alt + Enter"
          },
          {
            "id": "D",
            "text": "F12"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Pressing Ctrl + Enter inserts a hard Page Break, terminating the current page and moving the cursor to the top of the next page."
      },
      {
        "question": "What is the shortcut key to toggle the 'Navigator' dialog window in LibreOffice Writer?",
        "options": [
          {
            "id": "A",
            "text": "F2"
          },
          {
            "id": "B",
            "text": "F5"
          },
          {
            "id": "C",
            "text": "F7"
          },
          {
            "id": "D",
            "text": "F11"
          }
        ],
        "correctAnswer": "B",
        "explanation": "The F5 function key opens the Navigator panel to quickly jump between headings, tables, and bookmarks."
      }
    ]
  }
];
