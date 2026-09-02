// CCC Chapter 4: Spreadsheet (LibreOffice Calc) - Complete Textbook Content
export const chapter4Topics = [
  {
    "chapterNumber": 4,
    "topicNumber": 1,
    "slug": "elements-of-spreadsheet-libreoffice-calc",
    "title": "Elements of Spreadsheet & LibreOffice Calc Interface",
    "hindiTitle": "स्प्रेडशीट के मूल तत्व एवं कैल्क इंटरफ़ेस",
    "definitionEnglish": "LibreOffice Calc is an open-source, multi-dimensional spreadsheet application developed by The Document Foundation that organizes numerical and textual data into a vast grid matrix of rows and columns to perform calculations, data analysis, and chart visualization.",
    "definitionHindi": "लिब्रेऑफिस कैल्क (LibreOffice Calc) एक ओपन-सोर्स स्प्रेडशीट सॉफ्टवेयर है जो डेटा को पंक्तियों (Rows) और स्तंभों (Columns) के मैट्रिक्स ग्रिड में व्यवस्थित करके गणितीय गणना, डेटा विश्लेषण और चार्ट निर्माण की सुविधा देता है।",
    "simpleWords": "लिब्रेऑफिस कैल्क एमएस एक्सेल जैसा स्प्रेडशीट सॉफ्टवेयर है जिसमें कुल 10,48,576 रो और 1024 कॉलम (A से AMJ) होते हैं।",
    "examImportance": "Very High (5-6 direct questions on total rows, total columns A-AMJ, zoom limits 20%-400%, and default file extension .ods in every CCC exam)",
    "detailedExplanation": "### 1. LibreOffice Calc Sheet Geometry and System Defaults\nLibreOffice Calc operates with strict structural boundaries essential for the CCC examination:\n- **Default Document Name:** **`Untitled 1`**\n- **Default File Extension:** **`.ods` (OpenDocument Spreadsheet)**\n- **Total Rows per Sheet:** **`1,048,576`** (`2^20` — numbered numerically from `1` to `1048576`)\n- **Total Columns per Sheet:** **`1,024`** (`2^10` — labeled alphabetically from **`A`** to **`AMJ`**)\n- **Total Cells per Sheet:** **`1,073,741,824`** (`1048576 × 1024`)\n- **First Cell Address:** **`A1`** | **Last Cell Address:** **`AMJ1048576`**\n- **Default Number of Sheets in a New Workbook:** **`1 (Sheet1)`**\n- **Maximum Sheets Allowed per Workbook:** **`10,000 Sheets`**\n- **Zoom Range Limits:** Minimum Zoom = **20%**, Maximum Zoom = **400%** (Note: Writer max is 600%, Calc max is 400%, Impress max is 3000%).\n\n### 2. Calc Interface Anatomy\n1. **Name Box:** Located on the left side of the formula strip; displays the **cell address** of the currently active cursor (e.g., `C5`).\n2. **Function Wizard Button (`Ctrl + F2` / `fx`):** Opens the interactive dialog to browse all 300+ built-in financial, statistical, and mathematical functions.\n3. **Formula Bar (Input Line):** Displays the raw formula or underlying text/numbers contained within the active cell.\n4. **Column Headers (A, B, C... AMJ):** Horizontal gray header strip across the top.\n5. **Row Headers (1, 2, 3... 1048576):** Vertical gray header strip down the left margin.\n6. **Sheet Tabs Strip:** Located at the bottom left; allows switching between sheets, renaming sheets (Right Click ➔ Rename Sheet), or adding sheets using the **`+`** button.",
    "realWorldAnalogy": "A spreadsheet is like a giant digital graph notebook with over a million horizontal lines and a thousand vertical columns where numbers automatically calculate themselves.",
    "importantPoints": [
      "Total Rows in LibreOffice Calc = 1,048,576.",
      "Total Columns in LibreOffice Calc = 1,024 (Last Column Name is AMJ).",
      "Total Cells in one Calc sheet = 1,073,741,824.",
      "Default file extension of LibreOffice Calc is .ods (OpenDocument Spreadsheet).",
      "Minimum zoom in Calc is 20%, maximum zoom is 400%.",
      "A new Calc workbook contains 1 sheet by default (Maximum allowed is 10,000 sheets).",
      "The Name Box displays the active cell address."
    ],
    "commonMistakes": [
      "Assuming the last column in Calc is XFD (XFD is in MS Excel; Calc's last column is AMJ).",
      "Thinking the maximum zoom in Calc is 600% (600% is in Writer; Calc max zoom is 400%)."
    ],
    "examTips": [
      "Guaranteed CCC Question: 'What is the name of the last column in LibreOffice Calc?' ➔ AMJ.",
      "Guaranteed CCC Question: 'How many rows are there in LibreOffice Calc?' ➔ 1,048,576.",
      "Guaranteed CCC Question: 'What is the default number of sheets in LibreOffice Calc?' ➔ 1 Sheet."
    ],
    "quickRevision": "Calc: Ext=.ods, Rows=1,048,576, Columns=1,024 (A to AMJ), Cells=1,073,741,824, First=A1, Last=AMJ1048576, Default sheets=1 (max 10,000), Zoom=20% to 400%, Name Box=Active Cell.",
    "practiceAssignment": "Launch Calc, press Ctrl + Down Arrow to reach the last row (1048576), press Ctrl + Right Arrow to reach the last column (AMJ), and press Ctrl + Home to return to A1.",
    "microQuiz": [
      {
        "question": "What is the label/name of the LAST column in LibreOffice Calc?",
        "options": [
          {
            "id": "A",
            "text": "Z"
          },
          {
            "id": "B",
            "text": "AZ"
          },
          {
            "id": "C",
            "text": "XFD"
          },
          {
            "id": "D",
            "text": "AMJ"
          }
        ],
        "correctAnswer": "D",
        "explanation": "LibreOffice Calc has 1,024 columns labeled alphabetically from A to AMJ (Column 1024)."
      },
      {
        "question": "What is the total number of ROWS present in a single sheet of LibreOffice Calc?",
        "options": [
          {
            "id": "A",
            "text": "65,536"
          },
          {
            "id": "B",
            "text": "1,048,576"
          },
          {
            "id": "C",
            "text": "10,000"
          },
          {
            "id": "D",
            "text": "1,073,741"
          }
        ],
        "correctAnswer": "B",
        "explanation": "A sheet in LibreOffice Calc contains exactly 1,048,576 rows numbered from 1 to 1048576 (2^20)."
      }
    ]
  },
  {
    "chapterNumber": 4,
    "topicNumber": 2,
    "slug": "concept-of-cell-address-and-data-entry",
    "title": "Cell Address [Row & Column] & Entering Data",
    "hindiTitle": "सेल एड्रेस (Row/Column) एवं डेटा प्रविष्टि (Text, Number, Date)",
    "definitionEnglish": "A cell is the fundamental atomic data storage unit formed by the intersection of a column and a row, uniquely identified by a Cell Address (Column Letter + Row Number), capable of storing Text, Numbers, Dates, Times, and Formulas.",
    "definitionHindi": "सेल कॉलम और रो के प्रतिच्छेदन (Intersection) से बनने वाला मूल बॉक्स है जिसका एक अद्वितीय सेल एड्रेस (कॉलम अक्षर + रो नंबर) होता है, जिसमें टेक्स्ट, संख्या, दिनांक, समय और सूत्र दर्ज किए जाते हैं।",
    "simpleWords": "कॉलम अक्षर (जैसे B) और रो नंबर (जैसे 4) मिलकर सेल एड्रेस (B4) बनाते हैं। टेक्स्ट बाईं तरफ और नंबर दाईं तरफ अपने आप अलाइन होते हैं।",
    "examImportance": "Very High (3-4 questions on cell address syntax, default text/number alignments, and entering data)",
    "detailedExplanation": "### 1. Anatomy of a Cell Address\nA cell address represents the unique coordinate location of a cell in the grid:\n- **Formula:** **`[Column Letter][Row Number]`** (e.g., Column `C` and Row `8` = Cell Address **`C8`**).\n- **Valid Cell Addresses:** `A1`, `B10`, `Z50`, `AA100`, `AMJ1048576`.\n- **Invalid Cell Addresses:** `1A` (number cannot precede column letter), `A$1` (mixed reference format), `$A$1` (absolute coordinate).\n- **Active Cell:** The currently focused cell surrounded by a thick black or blue selection border.\n\n### 2. Default Data Types & Automatic Alignments in Calc (Crucial CCC Topic)\nWhen you type data into a cell and press Enter, Calc automatically classifies and aligns the content:\n| Data Type | Example Value | Default Alignment in Cell | Notes |\n| :--- | :--- | :--- | :--- |\n| **Text / Labels** | `NIELIT`, `Name`, `Student` | **Left-Aligned** | Cannot be used directly in arithmetic math |\n| **Numbers / Values** | `100`, `45.75`, `-250` | **Right-Aligned** | Processed by mathematical operators |\n| **Date & Time** | `02/09/2026`, `10:30 AM` | **Right-Aligned** | Internally stored as serial numbers |\n| **Formula / Function** | `=A1+B1`, `=SUM(A1:A5)` | **Right-Aligned** (for numeric results) | Must always start with an **`=`** sign |\n| **Boolean Logic** | `TRUE`, `FALSE` | **Center-Aligned** | Logical comparison outputs |\n\n### 3. Entering Numbers as Text (The Single Quote Prefix)\n- To enter numbers that should NOT be treated as mathematical values (such as Phone Numbers, PIN Codes, Aadhaar Numbers, or Account numbers with leading zeros like `00123`), prefix the input with a **Single Quote (`'`)**:\n- Typing `'00123` stores the value as **Left-Aligned Text** and preserves leading zeros!",
    "realWorldAnalogy": "A cell address is like a theater seat ticket: 'Row 5, Seat C' means Row 5, Column C = C5.",
    "importantPoints": [
      "A cell is formed by the intersection of a row and a column.",
      "By default, Text is Left-Aligned in a cell.",
      "By default, Numbers and Dates are Right-Aligned in a cell.",
      "By default, Boolean values (TRUE/FALSE) are Center-Aligned.",
      "Prefixing a number with a single quote (') treats the number as text and preserves leading zeros."
    ],
    "commonMistakes": [
      "Assuming Numbers are left-aligned by default (Numbers are strictly Right-Aligned; Text is Left-Aligned).",
      "Writing a cell address as 5B (Column letter must always precede the row number: B5)."
    ],
    "examTips": [
      "Guaranteed CCC Question: 'By default, what is the alignment of numbers in LibreOffice Calc?' ➔ Right-Aligned.",
      "Guaranteed CCC Question: 'By default, what is the alignment of text in LibreOffice Calc?' ➔ Left-Aligned."
    ],
    "quickRevision": "Cell address = Column letter + Row number (e.g., B4). Alignments: Text=Left, Numbers/Dates=Right, Booleans=Center. Single quote (') forces numbers to be treated as text.",
    "practiceAssignment": "In Calc, type 'Hello' in A1 (check left alignment) and '500' in B1 (check right alignment). In C1, type ''007' and verify that leading zeros are preserved.",
    "microQuiz": [
      {
        "question": "By default, what is the horizontal ALIGNMENT of NUMERIC values entered into a cell in LibreOffice Calc?",
        "options": [
          {
            "id": "A",
            "text": "Left-Aligned"
          },
          {
            "id": "B",
            "text": "Right-Aligned"
          },
          {
            "id": "C",
            "text": "Center-Aligned"
          },
          {
            "id": "D",
            "text": "Justified"
          }
        ],
        "correctAnswer": "B",
        "explanation": "In LibreOffice Calc, numbers and dates align to the Right by default, whereas text strings align to the Left."
      },
      {
        "question": "Which character prefix should be typed before a number to store it as TEXT and retain leading zeros in Calc?",
        "options": [
          {
            "id": "A",
            "text": "Double Quote (\")"
          },
          {
            "id": "B",
            "text": "Single Quote (')"
          },
          {
            "id": "C",
            "text": "Hash (#)"
          },
          {
            "id": "D",
            "text": "Dollar ($)"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Typing a leading single quote (') forces Calc to treat subsequent characters as literal text."
      }
    ]
  },
  {
    "chapterNumber": 4,
    "topicNumber": 3,
    "slug": "manipulation-of-cells-and-sheets",
    "title": "Editing Cells, Formatting, Cut/Copy/Paste & Cell Sizing",
    "hindiTitle": "सेल संपादन, फॉर्मेटिंग, कट/कॉपी/पेस्ट एवं रो/कॉलम साइजिंग",
    "definitionEnglish": "Cell and sheet manipulation involves in-cell editing, invoking the Format Cells dialog (Ctrl+1), adjusting row heights and column widths, merging cells, wrapping text, and managing multiple worksheet tabs.",
    "definitionHindi": "सेल और शीट संपादन में सेल में एडिट करना (F2), फॉर्मेट सेल्स डायलॉग (Ctrl+1), रो की ऊंचाई और कॉलम की चौड़ाई बदलना, सेल्स मर्ज करना, टेक्स्ट रैप करना और शीट जोड़ना/नाम बदलना शामिल है।",
    "simpleWords": "सेल में सुधार करने के लिए F2 दबाएं, सेल फॉर्मेटिंग के लिए Ctrl+1 दबाएं, कॉलम चौड़ाई खींचकर बड़ी करें और शीट का नाम बदलें।",
    "examImportance": "High (3-4 questions on F2 cell edit, Ctrl+1 Format Cells dialog, and Merge Cells)",
    "detailedExplanation": "### 1. Cell Editing Modes\n- **Overwriting Cell Contents:** Selecting a cell and typing immediately overwrites and replaces all previous contents.\n- **In-Place Cell Editing (`F2`):** Pressing **`F2`** (or double-clicking the cell) places the cursor directly inside the cell at the end of the text without erasing existing data!\n- **Esc Key:** Cancels current cell edits and restores original content.\n\n### 2. Format Cells Dialog Box (`Ctrl + 1`)\nPressing **`Ctrl + 1`** opens the master **Format Cells** dialog featuring 7 comprehensive configuration tabs:\n1. **Numbers:** Formats values as Currency (`₹`), Percentage (`%`), Decimal places, Scientific notation, Date formats.\n2. **Font:** Typeface, size (pt), and color.\n3. **Alignment:**\n   - **Text Wrap (`Wrap text automatically`):** Expands row height to wrap long text sentences onto multiple lines within a single cell.\n   - **Line Break in Cell (`Ctrl + Enter`):** Inserts a manual line break inside a single cell!\n   - **Merge Cells:** Merges highlighted cells into one.\n4. **Borders:** Grid outlines, cell borders, border shadow effects.\n5. **Background:** Cell fill color.\n6. **Cell Protection:** Hides formulas or locks cells when sheet protection is enabled.\n\n### 3. Adjusting Row Height & Column Width\n- **AutoFit Column Width:** Double-clicking the dividing line between two column header letters (e.g., between `B` and `C`) automatically resizes the column to fit the widest text entry!\n- **AutoFit Row Height:** Double-clicking the dividing line between row header numbers.",
    "realWorldAnalogy": "Pressing F2 is like using an eraser to fix a single misspelled letter on a chalkboard, while typing without F2 is like wiping the entire board clean with a wet sponge.",
    "importantPoints": [
      "F2 is the keyboard shortcut to Edit the active cell in LibreOffice Calc.",
      "Ctrl + 1 opens the Format Cells dialog box in LibreOffice Calc.",
      "Ctrl + Enter inserts a manual line break inside a single cell.",
      "Double-clicking a column border executes AutoFit Column Width.",
      "Wrap Text expands row height to display multi-line text in a single cell."
    ],
    "commonMistakes": [
      "Pressing Enter to insert a line break inside a cell (Enter completes the cell and moves down; Ctrl + Enter inserts a line break inside the cell).",
      "Thinking F2 renames a cell in Calc (F2 edits the cell in Calc; F2 renames files in File Explorer)."
    ],
    "examTips": [
      "Guaranteed CCC Question: 'Which shortcut key is used to edit the active cell in LibreOffice Calc?' ➔ F2.",
      "Guaranteed CCC Question: 'What is the shortcut key to open the Format Cells dialog box in Calc?' ➔ Ctrl + 1."
    ],
    "quickRevision": "Edit cell=F2, Format Cells=Ctrl+1, In-cell line break=Ctrl+Enter, AutoFit column=Double-click header border. Sheet operations: Add, Rename, Move, Delete.",
    "practiceAssignment": "Type a long sentence in cell A1, press Ctrl + 1, enable 'Wrap text automatically' under Alignment, and observe the row expanding.",
    "microQuiz": [
      {
        "question": "Which function key is used to enter EDIT MODE for the active cell in LibreOffice Calc?",
        "options": [
          {
            "id": "A",
            "text": "F1"
          },
          {
            "id": "B",
            "text": "F2"
          },
          {
            "id": "C",
            "text": "F4"
          },
          {
            "id": "D",
            "text": "F7"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Pressing F2 activates in-cell editing mode, placing the blinking insertion cursor inside the active cell."
      },
      {
        "question": "What is the keyboard shortcut to launch the 'Format Cells' dialog box in LibreOffice Calc?",
        "options": [
          {
            "id": "A",
            "text": "Ctrl + F"
          },
          {
            "id": "B",
            "text": "Ctrl + 1"
          },
          {
            "id": "C",
            "text": "Alt + 1"
          },
          {
            "id": "D",
            "text": "Shift + F1"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Pressing Ctrl + 1 opens the master Format Cells dialog to configure numbers, borders, fonts, and alignment."
      }
    ]
  },
  {
    "chapterNumber": 4,
    "topicNumber": 4,
    "slug": "inserting-deleting-rows-columns-and-autofill",
    "title": "Inserting/Deleting Rows/Cols & AutoFill Magic",
    "hindiTitle": "रो/कॉलम जोड़ना-हटाना एवं ऑटो-फिल (AutoFill) फीचर",
    "definitionEnglish": "Row and column operations allow dynamic structure expansion by inserting and deleting grid elements, while the AutoFill handle automatically detects numerical, date, weekday, and custom patterns to populate contiguous cell ranges instantly.",
    "definitionHindi": "रो और कॉलम जोड़ने-हटाने से शीट की संरचना बदलती है, जबकि ऑटो-फिल (AutoFill) हैंडल पैटर्न को पहचानकर संख्याओं, दिनों, महीनों और तारीखों की श्रृंखला को स्वतः भर देता है।",
    "simpleWords": "नई रो/कॉलम जोड़ना (Ctrl + '+'), हटाना (Ctrl + '-'), और सेल के कोने को खींचकर 1, 2, 3... या Mon, Tue, Wed की सीरीज अपने आप भरना (AutoFill)।",
    "examImportance": "Very High (3-4 questions on Insert Row/Col shortcut Ctrl+'+', Delete Ctrl+'-', and AutoFill behavior)",
    "detailedExplanation": "### 1. Inserting and Deleting Rows & Columns Shortcuts\n- **Insert Cells / Rows / Columns Dialog:** **`Ctrl + +`** (Ctrl and Plus key).\n- **Delete Cells / Rows / Columns Dialog:** **`Ctrl + -`** (Ctrl and Minus key).\n- **Delete Contents Dialog:** Pressing the **`Delete`** key (or `Backspace`) opens the Delete Contents dialog (allows selectively removing Text, Numbers, Formulas, Date/Time, or Formats).\n\n### 2. The AutoFill Feature & Fill Handle\n- **Fill Handle:** The small solid black square located at the **bottom-right corner** of the active cell selection box.\n- When the mouse hovers over the fill handle, the cursor pointer transforms into a crisp black plus sign (`+`).\n- **Drag and Fill Patterns:**\n  - **Single Number (e.g., `1`):** Dragging simply copies `1, 1, 1, 1...` (holding `Ctrl` while dragging generates an incremental series: `1, 2, 3, 4, 5...`).\n  - **Two Numbers (e.g., `2` and `4`):** Select both cells and drag ➔ Generates an arithmetic series: `6, 8, 10, 12...`!\n  - **Days of the Week:** Type `Monday` (or `Mon`) and drag ➔ Generates `Tuesday, Wednesday, Thursday...`.\n  - **Months of the Year:** Type `January` (or `Jan`) and drag ➔ Generates `February, March, April...`.\n  - **Dates:** Type `01/01/2026` and drag ➔ Increments day by day.",
    "realWorldAnalogy": "AutoFill is like a smart assistant who notices you wrote 'Monday, Tuesday' and automatically completes the rest of the week for you without being asked.",
    "importantPoints": [
      "The shortcut to Insert cells/rows/columns in Calc is Ctrl + Plus (+).",
      "The shortcut to Delete cells/rows/columns in Calc is Ctrl + Minus (-).",
      "The Fill Handle is the small square at the bottom-right corner of the active cell.",
      "AutoFill automatically completes series of numbers, days, months, and dates."
    ],
    "commonMistakes": [
      "Typing a single number and expecting it to increment automatically without holding Ctrl (A single number copies; two numbers or Ctrl+drag increments).",
      "Confusing Ctrl + '+' (Insert) with Ctrl + '-' (Delete)."
    ],
    "examTips": [
      "Direct CCC Question: 'What is the shortcut key to Insert cells/rows in LibreOffice Calc?' ➔ Ctrl + Plus (+).",
      "Direct CCC Question: 'What is the shortcut key to Delete cells/rows in LibreOffice Calc?' ➔ Ctrl + Minus (-)."
    ],
    "quickRevision": "Insert rows/cols=Ctrl+'+', Delete rows/cols=Ctrl+'-'. AutoFill handle (bottom-right square) generates series for Days, Months, Dates, and arithmetic patterns.",
    "practiceAssignment": "Type 'Jan' in A1 and drag the Fill Handle down to A12. In B1 type '5' and B2 type '10', select both and drag down to B10 to generate the 5 times table.",
    "microQuiz": [
      {
        "question": "What is the keyboard shortcut to INSERT a new cell, row, or column in LibreOffice Calc?",
        "options": [
          {
            "id": "A",
            "text": "Ctrl + +"
          },
          {
            "id": "B",
            "text": "Ctrl + -"
          },
          {
            "id": "C",
            "text": "Alt + I"
          },
          {
            "id": "D",
            "text": "Shift + +"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Pressing Ctrl + Plus (+) brings up the Insert Cells dialog to add cells, entire rows, or entire columns."
      }
    ]
  },
  {
    "chapterNumber": 4,
    "topicNumber": 5,
    "slug": "sorting-filtering-and-freezing-panes",
    "title": "Data Sorting, Filtering & Freezing Panes",
    "hindiTitle": "डेटा सॉर्टिंग, फिल्टरिंग एवं फ्रीज पैन (Freeze Panes)",
    "definitionEnglish": "Data organization tools in Calc arrange data chronologically or alphabetically (Sorting), display records matching specific criteria while hiding others (Filtering Ctrl+Shift+L), and lock header rows/columns in place during scrolling (Freezing Panes).",
    "definitionHindi": "डेटा संगठन टूल्स में डेटा को आरोही/अवरोही क्रम में लगाना (Sorting), शर्तों के अनुसार डेटा छांटना (AutoFilter Ctrl+Shift+L) और स्क्रॉल करते समय हेडिंग रो/कॉलम को स्थिर रखना (Freeze Panes) शामिल है।",
    "simpleWords": "डेटा को A से Z क्रम में लगाना (Sort), केवल अपनी पसंद का रिकॉर्ड देखना (Filter Ctrl+Shift+L) और ऊपर की हेडिंग को जमना/रोकना (Freeze Panes)।",
    "examImportance": "High (3-4 questions on AutoFilter shortcut Ctrl+Shift+L, Ascending/Descending sort, and Freeze Panes)",
    "detailedExplanation": "### 1. Data Sorting (Data ➔ Sort)\nSorting reorganizes table records based on designated column values:\n- **Ascending Sort (`A ➔ Z` / `0 ➔ 9`):** Orders alphabetically from A to Z, numbers from smallest to largest, dates from oldest to newest.\n- **Descending Sort (`Z ➔ A` / `9 ➔ 0`):** Orders alphabetically from Z to A, numbers from largest to smallest, dates from newest to oldest.\n- **Multi-Level Sort:** Sorts primarily by *Department (A-Z)*, then secondarily by *Salary (Largest to Smallest)*.\n\n### 2. Data Filtering (AutoFilter: `Ctrl + Shift + L`)\n- **AutoFilter Shortcut:** **`Ctrl + Shift + L`** (Data ➔ AutoFilter).\n- Inserts small dropdown filter arrows in the header row of each column.\n- Clicking a dropdown arrow allows users to check/uncheck specific values (e.g., filter only students who scored `Grade = 'A'`).\n- **Standard Filter:** Applies conditional criteria (e.g., `Salary > 50000 AND City = 'Delhi'`).\n- **Reset Filter:** Displays all original records without deleting data.\n\n### 3. Freezing Panes (View ➔ Freeze Rows and Columns)\nWhen scrolling through large datasets containing thousands of rows, the topmost header row disappears off-screen. **Freeze Panes** locks headers permanently:\n- **Freeze Rows and Columns:** Locks all rows above and columns to the left of the active selected cell.\n- **Freeze First Row:** Locks Row 1 permanently at the top of the viewport.\n- **Freeze First Column:** Locks Column A permanently at the left of the viewport.",
    "realWorldAnalogy": "AutoFilter is like a tea strainer that lets pure tea pass through while catching the tea leaves; Freeze Panes is like pinning the title banner of a long notice board so it stays visible as you scroll down.",
    "importantPoints": [
      "The shortcut key to toggle AutoFilter in LibreOffice Calc is Ctrl + Shift + L.",
      "Ascending sort orders A to Z / 0 to 9; Descending sort orders Z to A / 9 to 0.",
      "Freeze Panes keeps header rows/columns visible while scrolling.",
      "AutoFilter is located under the Data menu."
    ],
    "commonMistakes": [
      "Confusing Sorting with Filtering (Sorting reorders all records; Filtering hides records that do not meet criteria).",
      "Thinking AutoFilter permanently deletes unmatched data (It merely hides unmatched rows temporarily)."
    ],
    "examTips": [
      "Guaranteed CCC Question: 'What is the shortcut key for AutoFilter in LibreOffice Calc?' ➔ Ctrl + Shift + L.",
      "Guaranteed CCC Question: 'Under which menu is Freeze Panes located?' ➔ View Menu."
    ],
    "quickRevision": "Sorting: Ascending (A-Z) vs Descending (Z-A). AutoFilter: Ctrl+Shift+L (Data menu). Freeze Panes: View menu (locks headers during scrolling).",
    "practiceAssignment": "Create a list of 5 students with marks in Calc. Select the table, press Ctrl + Shift + L to apply AutoFilter, and filter students with marks > 75.",
    "microQuiz": [
      {
        "question": "What is the keyboard shortcut to activate or deactivate 'AutoFilter' in LibreOffice Calc?",
        "options": [
          {
            "id": "A",
            "text": "Ctrl + F"
          },
          {
            "id": "B",
            "text": "Ctrl + Shift + L"
          },
          {
            "id": "C",
            "text": "Alt + D + F"
          },
          {
            "id": "D",
            "text": "Shift + F4"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Pressing Ctrl + Shift + L toggles dropdown AutoFilter arrows on the selected table headers."
      }
    ]
  },
  {
    "chapterNumber": 4,
    "topicNumber": 6,
    "slug": "basic-formulas-and-autosum",
    "title": "Using Mathematical Formulas (+, -, *, /) & AutoSum",
    "hindiTitle": "मूल गणितीय सूत्र (+, -, *, /) एवं ऑटो-सम (AutoSum)",
    "definitionEnglish": "A formula is a user-defined mathematical expression entered into a cell that performs calculations using cell references and arithmetic operators, strictly initiated with an equal sign (=), while AutoSum provides one-click aggregation.",
    "definitionHindi": "फॉर्मूला सेल में दर्ज किया गया एक गणितीय समीकरण है जो सेल संदर्भों और ऑपरेटरों का उपयोग करके गणना करता है और सदैव बराबर चिह्न (=) से शुरू होता है।",
    "simpleWords": "कैल्क में कोई भी फॉर्मूला हमेशा '=' चिह्न से शुरू होता है (जैसे =A1+B1)। ऑटो-सम (AutoSum) से तुरंत संख्याओं का जोड़ निकाला जाता है।",
    "examImportance": "Very High (4-5 direct questions on formula starting symbol '=', mathematical operator precedence, and AutoSum)",
    "detailedExplanation": "### 1. The Fundamental Rule of Calc Formulas\n- **MANDATORY RULE:** Every formula and function in LibreOffice Calc **MUST strictly begin with an EQUAL SIGN (`=`)**!\n- If you type `A1+B1` without an equal sign, Calc treats it as a static **Text Label** and performs zero calculation.\n- Typing `=A1+B1` evaluates the formula and displays the numerical sum result.\n\n### 2. Standard Arithmetic Operators & Operator Precedence (BODMAS / PEMDAS)\n1. **Parentheses `()`:** Evaluated first with highest priority.\n2. **Exponentiation `^`:** Powers (e.g., `=2^3` evaluates to `8`).\n3. **Multiplication `*` & Division `/`:** Evaluated from left to right (e.g., `=10+5*2` evaluates to `20`, NOT 30!).\n4. **Addition `+` & Subtraction `-`:** Evaluated last from left to right.\n5. **Text Concatenation Operator (`&`):** Joins two text strings together (e.g., `=\"NIELIT \" & \"CCC\"` produces `\"NIELIT CCC\"`).\n\n### 3. The AutoSum Feature (`Σ`)\n- Located on the Formula Bar and Standard Toolbar as the Greek capital Sigma icon (**`Σ`**).\n- When clicked below a column of numbers, AutoSum automatically writes the formula `=SUM(A1:A10)` by detecting the adjacent contiguous numerical range and calculates the total sum with 1-click!",
    "realWorldAnalogy": "The '=' sign in Calc is like turning on the ignition key of a car: without the key, the engine won't start; without '=', the formula won't calculate.",
    "importantPoints": [
      "Every formula in LibreOffice Calc MUST start with an equal sign (=).",
      "The multiplication operator is an asterisk (*); division is a forward slash (/).",
      "The text concatenation operator is an ampersand (&).",
      "Formulas follow standard mathematical operator precedence: Parentheses > Exponentiation > Multiply/Divide > Add/Subtract.",
      "The AutoSum symbol is the Greek letter Sigma (Σ)."
    ],
    "commonMistakes": [
      "Forgetting to type the '=' sign before writing a formula.",
      "Calculating =10+5*2 as 30 (Multiplication has higher priority than addition: 5*2=10, then 10+10=20)."
    ],
    "examTips": [
      "Guaranteed CCC Question: 'With which symbol must every formula in LibreOffice Calc begin?' ➔ = (Equal Sign).",
      "Guaranteed CCC Question: 'What is the result of the formula =5+2*3 in Calc?' ➔ 11."
    ],
    "quickRevision": "Formulas MUST start with '='. Operators: +, -, *, /, ^, &. Precedence: () > ^ > * / > + -. AutoSum (Σ) automatically generates =SUM().",
    "practiceAssignment": "In Calc, enter 10 in A1 and 20 in B1. In C1, type '=A1*2+B1/2' and verify that the result is 30.",
    "microQuiz": [
      {
        "question": "With which mandatory mathematical symbol MUST every formula in LibreOffice Calc begin?",
        "options": [
          {
            "id": "A",
            "text": "Plus (+)"
          },
          {
            "id": "B",
            "text": "Equal Sign (=)"
          },
          {
            "id": "C",
            "text": "Hash (#)"
          },
          {
            "id": "D",
            "text": "At (@)"
          }
        ],
        "correctAnswer": "B",
        "explanation": "All formulas and functions in spreadsheet applications must begin with an equal sign (=) to trigger evaluation."
      },
      {
        "question": "What will be the exact mathematical result of the formula '=10+20/2' entered in a Calc cell?",
        "options": [
          {
            "id": "A",
            "text": "15"
          },
          {
            "id": "B",
            "text": "20"
          },
          {
            "id": "C",
            "text": "25"
          },
          {
            "id": "D",
            "text": "10"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Division takes precedence over addition: 20 / 2 = 10, then 10 + 10 = 20."
      }
    ]
  },
  {
    "chapterNumber": 4,
    "topicNumber": 7,
    "slug": "essential-calc-functions",
    "title": "Core Functions: SUM, COUNT, MAX, MIN, AVERAGE",
    "hindiTitle": "प्रमुख फंक्शन्स: SUM, COUNT, MAX, MIN, AVERAGE",
    "definitionEnglish": "Built-in functions in Calc are pre-programmed formula routines that accept arguments inside parentheses and return computed results, while cell referencing modes (Relative, Absolute, Mixed) control address behavior during copy operations.",
    "definitionHindi": "कैल्क में बिल्ट-इन फंक्शन्स पूर्वनिर्मित सूत्र हैं जो कोष्ठक के अंदर तर्क (Arguments) स्वीकार करते हैं और परिणाम देते हैं, जैसे SUM, AVERAGE, COUNT, MAX, MIN और सेल रेफरेंसिंग ($A$1)।",
    "simpleWords": "कैल्क के सबसे महत्वपूर्ण फंक्शन्स: जोड़ना (=SUM), औसत (=AVERAGE), सबसे बड़ा (=MAX), सबसे छोटा (=MIN), गिनना (=COUNT) और $ चिह्न से सेल लॉक करना।",
    "examImportance": "Very High (5-6 direct questions on COUNT vs COUNTA, AVERAGE, MAX/MIN, and Absolute Referencing $A$1)",
    "detailedExplanation": "### 1. The 5 Essential Statistical & Math Functions\n1. **`=SUM(Range)`:** Calculates the total arithmetic addition of all numbers in the specified cell range.\n   - Example: `=SUM(A1:A5)` or `=SUM(10, 20, 30)` ➔ Returns `60`.\n2. **`=AVERAGE(Range)`:** Computes the arithmetic mean (Sum of values divided by count of numeric cells).\n   - Example: `=AVERAGE(10, 20, 30)` ➔ Returns `20`.\n3. **`=MAX(Range)`:** Returns the highest / maximum numerical value in the range.\n   - Example: `=MAX(45, 92, 18, 67)` ➔ Returns `92`.\n4. **`=MIN(Range)`:** Returns the lowest / minimum numerical value in the range.\n   - Example: `=MIN(45, 92, 18, 67)` ➔ Returns `18`.\n5. **`=COUNT(Range)` vs. `=COUNTA(Range)` (Crucial CCC Distinction!):**\n   - **`=COUNT(A1:A10)`:** Counts ONLY cells that contain **numerical numbers**. (Ignores text strings and blank cells).\n   - **`=COUNTA(A1:A10)`:** Counts all **non-empty cells** (counts cells containing text, numbers, dates, or symbols; ignores only blank cells).\n\n### 2. Essential Date, Time & Math Utilities\n- **`=TODAY()`:** Returns the current system **Date** (e.g., `02/09/2026`).\n- **`=NOW()`:** Returns the current system **Date and Time** (e.g., `02/09/2026 10:30 AM`).\n- **`=ROUND(number, decimals)`:** Rounds a number to specified decimal places (e.g., `=ROUND(45.678, 2)` ➔ `45.68`).\n- **`=SQRT(number)`:** Returns the square root of a positive number (e.g., `=SQRT(64)` ➔ `8`).\n- **`=POWER(base, exp)`:** Calculates base raised to exponent (e.g., `=POWER(2, 4)` ➔ `16`).\n\n### 3. The Three Cell Referencing Modes (Crucial CCC Topic)\n| Referencing Mode | Syntax | Behavior When Copied Across Cells | Shortcut to Toggle |\n| :--- | :--- | :--- | :--- |\n| **Relative Referencing** | **`A1`** | Both column letter and row number shift relatively (e.g., copying from row 1 to row 2 changes `A1` to `A2`) | Default mode |\n| **Absolute Referencing** | **`$A$1`** | Both column and row are **locked permanently** using dollar signs (`$`); address never changes when copied | Press **`Shift + F4`** (or `F4` in Excel) |\n| **Mixed Referencing** | **`$A1`** or **`A$1`** | Either column is locked (`$A1`) or row is locked (`A$1`) while the other remains relative | Press **`Shift + F4`** |",
    "realWorldAnalogy": "Relative referencing is like giving directions: 'Walk 2 houses to the right' (depends on where you are). Absolute referencing ($A$1) is giving an exact GPS coordinate: 'House #404, Main Street' (never changes).",
    "importantPoints": [
      "COUNT counts only cells with numbers; COUNTA counts all non-empty cells.",
      "=NOW() returns both current Date and Time; =TODAY() returns only Date.",
      "The dollar sign ($) is used to create Absolute cell references (e.g., $A$1).",
      "In LibreOffice Calc, Shift + F4 toggles cell reference modes (Relative ➔ Absolute ➔ Mixed).",
      "=SUM(A1:A5) calculates the sum of cells from A1 through A5."
    ],
    "commonMistakes": [
      "Confusing COUNT with COUNTA (COUNT ignores text; COUNTA counts both text and numbers).",
      "Confusing =TODAY() with =NOW() (=TODAY() gives only date; =NOW() gives date and time)."
    ],
    "examTips": [
      "Guaranteed CCC Question: 'Which function returns both current date and time in Calc?' ➔ =NOW().",
      "Guaranteed CCC Question: 'Which symbol is used for Absolute Cell Referencing in Calc?' ➔ $ (Dollar Sign).",
      "Guaranteed CCC Question: 'Which key combination toggles relative/absolute reference in Calc?' ➔ Shift + F4."
    ],
    "quickRevision": "Functions: SUM (add), AVERAGE (mean), MAX (highest), MIN (lowest), COUNT (numbers only), COUNTA (non-empty), NOW (date+time), TODAY (date). Referencing: Relative=A1, Absolute=$A$1 (Toggle: Shift+F4).",
    "practiceAssignment": "In Calc, enter 10, 20, 'Hello', 30 in cells A1:A4. In B1 test =COUNT(A1:A4) [result=3] and in B2 test =COUNTA(A1:A4) [result=4].",
    "microQuiz": [
      {
        "question": "Which function in LibreOffice Calc counts ONLY cells that contain NUMERIC data, ignoring text entries?",
        "options": [
          {
            "id": "A",
            "text": "COUNTA"
          },
          {
            "id": "B",
            "text": "COUNT"
          },
          {
            "id": "C",
            "text": "COUNTIF"
          },
          {
            "id": "D",
            "text": "SUM"
          }
        ],
        "correctAnswer": "B",
        "explanation": "The =COUNT() function strictly counts cells containing numeric values, whereas =COUNTA() counts all non-empty cells."
      },
      {
        "question": "What function should be used to display BOTH the current system Date and current system Time in a cell?",
        "options": [
          {
            "id": "A",
            "text": "=TODAY()"
          },
          {
            "id": "B",
            "text": "=NOW()"
          },
          {
            "id": "C",
            "text": "=TIME()"
          },
          {
            "id": "D",
            "text": "=DATE()"
          }
        ],
        "correctAnswer": "B",
        "explanation": "The =NOW() function dynamically returns both the active date and time timestamps."
      }
    ]
  },
  {
    "chapterNumber": 4,
    "topicNumber": 8,
    "slug": "creating-charts-bar-pie-line",
    "title": "Creating and Formatting Charts (Bar, Pie, Line)",
    "hindiTitle": "चार्ट्स बनाना और कस्टमाइज़ करना (Bar, Pie, Line Charts)",
    "definitionEnglish": "A chart is a graphical, visual representation of tabular spreadsheet data that facilitates rapid trend analysis, proportion comparison, and statistical visualization through visual elements like bars, slices, and lines.",
    "definitionHindi": "चार्ट स्प्रेडशीट डेटा का एक दृश्य और ग्राफिकल निरूपण है जो बार, स्लाइस और रेखाओं के माध्यम से डेटा के रुझान, तुलना और सांख्यिकीय विश्लेषण को आसानी से समझने योग्य बनाता है।",
    "simpleWords": "टेबल के आंकड़ों को आकर्षक ग्राफिक्स (जैसे बार चार्ट, पाई चार्ट, लाइन चार्ट) के रूप में प्रस्तुत करना (Insert ➔ Chart)।",
    "examImportance": "High (2-3 questions on chart types, Pie chart proportions, and Chart Wizard steps)",
    "detailedExplanation": "### 1. The 10 Official Chart Types in LibreOffice Calc\nAccessed via **Insert ➔ Chart** (or the Chart icon on the Standard Toolbar):\n1. **Column Chart:** Vertical vertical rectangular bars; standard for comparing discrete categories over time.\n2. **Bar Chart:** Horizontal rectangular bars; best when category labels are long text descriptions.\n3. **Pie Chart:** A circular disk divided into proportional slices; **shows parts of a whole (100% percentage distribution)** for a single data series.\n4. **Donut Chart:** A circular ring variation of a pie chart with an open center hole.\n5. **Line Chart:** Connects sequential data points with continuous lines; best for displaying continuous trends over chronological time (e.g., monthly temperature or stock prices).\n6. **Area Chart:** Emphasizes the magnitude of change over time by filling the area below lines with color.\n7. **XY (Scatter) Chart:** Plots individual coordinate points `(X, Y)`; standard in scientific and engineering correlation analysis.\n8. **Bubble Chart:** Extends XY scatter charts by representing a third variable via the radius size of the bubble.\n9. **Net (Radar) Chart:** Plots multivariate data along radial axes radiating from a central point.\n10. **Stock Chart:** Specialized financial chart displaying High, Low, Open, and Closing market prices.\n\n### 2. The 4-Step Chart Wizard\n- **Step 1: Chart Type:** Select from the 10 chart categories (and 2D / 3D look).\n- **Step 2: Data Range:** Defines cell range (e.g., `$A$1:$B$10`) and whether series are in rows or columns.\n- **Step 3: Data Series:** Customizes individual series names and data categories.\n- **Step 4: Chart Elements:** Configures Title, Subtitle, X-Axis Title, Y-Axis Title, Display Legend, and Gridlines.",
    "realWorldAnalogy": "A Pie Chart is like a physical round pizza sliced among friends: each slice represents an individual's share of the whole 100% pizza.",
    "importantPoints": [
      "Insert Chart is located under the Insert menu (Insert ➔ Chart).",
      "Pie Charts are used to represent parts of a whole (proportions of 100%).",
      "Line Charts are best for showing continuous trends over time.",
      "LibreOffice Calc provides 10 official chart types.",
      "The Chart Wizard consists of 4 sequential steps."
    ],
    "commonMistakes": [
      "Using a Pie Chart for multiple complex data series (Pie charts can only represent a single data series).",
      "Confusing Column Chart (Vertical bars) with Bar Chart (Horizontal bars in Calc terminology)."
    ],
    "examTips": [
      "Direct CCC Question: 'Which chart type is best for showing parts of a whole or percentage shares?' ➔ Pie Chart.",
      "Direct CCC Question: 'How many steps are in the Chart Wizard in Calc?' ➔ 4 Steps."
    ],
    "quickRevision": "10 Chart Types in Calc: Column (vertical), Bar (horizontal), Pie (parts of whole), Line (trends), Area, XY Scatter, Bubble, Net, Stock, Column/Line. Chart Wizard has 4 steps.",
    "practiceAssignment": "In Calc, create a simple table of Monthly Expenses (Rent, Food, Electricity) and insert a 3D Pie Chart to visualize the percentage breakdown.",
    "microQuiz": [
      {
        "question": "Which chart type in LibreOffice Calc is most effective for visualizing the percentage proportion of 'parts to a whole' (100% total)?",
        "options": [
          {
            "id": "A",
            "text": "Line Chart"
          },
          {
            "id": "B",
            "text": "Pie Chart"
          },
          {
            "id": "C",
            "text": "XY Scatter Chart"
          },
          {
            "id": "D",
            "text": "Stock Chart"
          }
        ],
        "correctAnswer": "B",
        "explanation": "A Pie Chart divides a circle into proportional slices representing percentage distributions of a single whole entity."
      }
    ]
  },
  {
    "chapterNumber": 4,
    "topicNumber": 9,
    "slug": "libreoffice-calc-shortcut-keys-and-errors",
    "title": "Calc Shortcut Keys & Common Formula Error Codes",
    "hindiTitle": "कैल्क शॉर्टकट कीज एवं फॉर्मूला एरर कोड्स (###, #DIV/0!)",
    "definitionEnglish": "Formula error codes indicate specific computational or syntax failures encountered by the Calc engine, while Calc shortcut keys accelerate workbook navigation, cell formatting, formula evaluation, and sheet operations.",
    "definitionHindi": "फॉर्मूला एरर कोड्स (जैसे ###, #DIV/0!, #NAME?) गणना या सिंटैक्स में होने वाली विशिष्ट गलतियों को दर्शाते हैं, जबकि शॉर्टकट कीज कैल्क में तेजी से काम करने में मदद करती हैं।",
    "simpleWords": "जब सेल छोटा हो तो '###' आता है, 0 से भाग देने पर '#DIV/0!' आता है, और नाम गलत होने पर '#NAME?' आता है। साथ ही कैल्क के सभी महत्वपूर्ण शॉर्टकट।",
    "examImportance": "Very High (5-6 direct questions on error codes like ###, #DIV/0!, #VALUE!, and Calc shortcuts in every CCC exam)",
    "detailedExplanation": "### 1. Common Formula Error Codes in LibreOffice Calc (Crucial CCC Topic)\nWhen a formula cannot be resolved properly, Calc displays a diagnostic error code:\n| Error Code | Root Cause / Meaning | Practical Example | Resolution |\n| :--- | :--- | :--- | :--- |\n| **`###`** | **Column Width Too Narrow** to display the formatted number, date, or currency | Number `123456789` in a tiny 5mm column | **Widen the column** by double-clicking the column header border |\n| **`#DIV/0!`** | **Division by Zero** | `=100/0` or `=A1/B1` where B1 is empty/0 | Correct the divisor to a non-zero number |\n| **`#NAME?`** | **Unrecognized Function Name** or invalid text in formula | Typing `=SUMM(A1:A5)` or `=AVERG(A1:A5)` | Correct spelling of function name |\n| **`#VALUE!`** | **Wrong Argument Data Type** (Mathematical operation on text) | `=\"Hello\" + 50` | Ensure mathematical operands are numbers |\n| **`#REF!`** | **Invalid Cell Reference** (Referenced cell was deleted) | Cell referenced in `=A1+B1` had column B deleted | Re-establish valid cell reference |\n| **`#N/A`** | **Value Not Available** | Lookup function fails to find match | Provide matching search term |\n\n### 2. Master Reference Table: Essential LibreOffice Calc Shortcuts\n| Command / Operation | Shortcut Key | Functional Description |\n| :--- | :--- | :--- |\n| **Edit Active Cell** | **`F2`** | Activates in-cell cursor editing mode |\n| **Format Cells Dialog** | **`Ctrl + 1`** | Opens master Format Cells dialog |\n| **Insert Cells / Rows** | **`Ctrl + +`** | Opens Insert Cells / Rows dialog |\n| **Delete Cells / Rows** | **`Ctrl + -`** | Opens Delete Cells / Rows dialog |\n| **Toggle AutoFilter** | **`Ctrl + Shift + L`** | Toggles dropdown filter buttons |\n| **Function Wizard** | **`Ctrl + F2`** | Opens Function Wizard dialog |\n| **Toggle Reference Mode** | **`Shift + F4`** | Toggles Relative ($) and Absolute |\n| **Insert Date Stamp** | **`Ctrl + ;`** (Semicolon) | Inserts current static date |\n| **Insert Time Stamp** | **`Ctrl + Shift + ;`** | Inserts current static time |\n| **In-Cell Line Break** | **`Ctrl + Enter`** | Adds manual newline inside active cell |\n| **Move to First Cell (A1)**| **`Ctrl + Home`** | Jumps instantly to cell A1 |\n| **Move to Last Used Cell**| **`Ctrl + End`** | Jumps to bottom-right active cell |\n| **Select Entire Row** | **`Shift + Space`** | Highlights the entire active row |\n| **Select Entire Column** | **`Ctrl + Space`** | Highlights the entire active column |\n| **Select Entire Sheet** | **`Ctrl + A`** or **`Ctrl + Shift + Space`** | Selects all 1,073,741,824 cells |\n| **Save As** | **`Ctrl + Shift + S`** | Saves sheet with new name/format |\n| **Print Preview** | **`Ctrl + Shift + O`** | Opens Print Preview layout canvas |",
    "realWorldAnalogy": "Error codes are like warning lights on a car dashboard: '###' means your suitcase is too wide for the trunk (widen it), '#DIV/0!' means trying to divide a pizza among zero people (impossible).",
    "importantPoints": [
      "The '###' error means the column is too narrow to display the number (Fixed by widening column).",
      "The '#DIV/0!' error occurs when a formula attempts to divide by zero.",
      "The '#NAME?' error occurs when a function name is misspelled (e.g., =SUMM).",
      "The '#VALUE!' error occurs when mathematical operators are applied to text.",
      "Shift + Space selects an entire Row; Ctrl + Space selects an entire Column.",
      "Ctrl + ; (Semicolon) inserts the current Date."
    ],
    "commonMistakes": [
      "Believing '###' means the formula is mathematically wrong (It simply means column width is narrow; the math is correct).",
      "Thinking #DIV/0! can be resolved by widening the column (It requires fixing the zero divisor in the formula)."
    ],
    "examTips": [
      "Guaranteed CCC Question: 'What does the ### error symbol in LibreOffice Calc indicate?' ➔ Column width is too narrow.",
      "Guaranteed CCC Question: 'What error occurs when dividing a number by 0 in Calc?' ➔ #DIV/0!.",
      "Guaranteed CCC Question: 'Which shortcut selects an entire row in Calc?' ➔ Shift + Space."
    ],
    "quickRevision": "Errors: ###=Column narrow, #DIV/0!=Divide by 0, #NAME?=Wrong formula name, #VALUE!=Wrong data type, #REF!=Deleted cell. Shortcuts: Edit=F2, Format=Ctrl+1, Filter=Ctrl+Shift+L, Row=Shift+Space, Col=Ctrl+Space, Date=Ctrl+;.",
    "practiceAssignment": "In Calc, enter '=100/0' in A1 to observe '#DIV/0!'. In B1 type 123456789 and shrink column B width to see '###'. Double-click column border to fix it.",
    "microQuiz": [
      {
        "question": "What does the error symbol '###' displayed inside a LibreOffice Calc cell signify?",
        "options": [
          {
            "id": "A",
            "text": "The formula syntax is completely wrong"
          },
          {
            "id": "B",
            "text": "The column width is too narrow to display the number"
          },
          {
            "id": "C",
            "text": "The computer has run out of memory"
          },
          {
            "id": "D",
            "text": "A division by zero was attempted"
          }
        ],
        "correctAnswer": "B",
        "explanation": "When a number or date exceeds the visible width of a cell, Calc renders '###' until the column is widened."
      },
      {
        "question": "Which keyboard shortcut selects an ENTIRE ROW in LibreOffice Calc?",
        "options": [
          {
            "id": "A",
            "text": "Ctrl + Space"
          },
          {
            "id": "B",
            "text": "Shift + Space"
          },
          {
            "id": "C",
            "text": "Alt + Space"
          },
          {
            "id": "D",
            "text": "Ctrl + Shift + R"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Pressing Shift + Space highlights the entire active horizontal row (Ctrl + Space selects the column)."
      }
    ]
  }
];
