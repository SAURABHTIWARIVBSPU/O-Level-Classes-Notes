// Unit 4: Spreadsheet (LibreOffice Calc) - Tutorial & Textbook Grade Content
export function getUnit4Canonical() {
  return {
    unitNumber: 4,
    title: "Spreadsheet (LibreOffice Calc)",
    officialSection: "4.0 - 4.8",
    totalHours: 12,
    theoryHours: 4,
    practicalHours: 8,
    introduction: "A spreadsheet is an interactive digital application for organizing, calculating, analyzing, and visually presenting numerical data arranged in a two-dimensional grid of rows and columns. LibreOffice Calc is the standardized FOSS spreadsheet component taught in the NIELIT CCC curriculum. This unit covers the Calc grid matrix, cell addressing rules, data manipulation, mathematical formulas, built-in statistical functions, cell referencing modes, AutoFill series, sorting and filtering, chart creation, diagnostic error codes, and master keyboard shortcuts.",
    whatYouWillLearn: [
      "The architectural dimensions of LibreOffice Calc (1,048,576 Rows, 1,024 Columns A to AMJ, 1,073,741,824 Cells, .ods extension, Zoom range 20% to 400%).",
      "Cell addressing rules and automatic data alignment (Text = Left, Numbers/Dates = Right, Booleans = Center, Single quote ' prefix).",
      "Cell and row manipulation: In-cell editing (F2), Format Cells (Ctrl+1), In-cell line break (Ctrl+Enter), and Insert/Delete rows (Ctrl + + / Ctrl + -).",
      "Formulas and functions: Mandatory '=' prefix, operator precedence, and essential functions (SUM, AVERAGE, COUNT vs COUNTA, MAX, MIN, NOW vs TODAY).",
      "Cell referencing modes: Relative (A1), Absolute ($A$1), Mixed ($A1 / A$1), and toggling references (Shift+F4).",
      "Data organization: AutoFill drag handle, AutoFilter (Ctrl+Shift+L), multi-column sorting, and Freeze Panes.",
      "The 10 standard chart types (Column, Bar, Pie, Line...) and the 4-step Chart Wizard.",
      "Diagnostic formula error codes: ###, #DIV/0!, #NAME?, #VALUE!, #REF!.",
      "Complete Master Shortcut Table for LibreOffice Calc."
    ],
    topics: [
      {
        code: "4.1",
        title: "Introduction to Spreadsheets & Calc Interface",
        whatIsIt: "LibreOffice Calc is an advanced OpenDocument spreadsheet processor designed to handle numerical data, financial models, mathematical formulas, statistical analysis, and interactive business charts.",
        whyImportant: "Spreadsheets automate numerical calculations, eliminate human arithmetic errors in accounting and budgeting, and dynamically recompute complex formulas whenever input values change.",
        howItWorks: "A Calc document is called a **Workbook**, which contains one or more individual **Worksheets**. Each sheet is an expansive grid where horizontal **Rows** and vertical **Columns** intersect to form distinct rectangular **Cells**.",
        componentsTitle: "CALC GRID DIMENSIONS & SYSTEM DEFAULTS",
        componentsOrTypes: [
          "Total Number of Rows: Exactly 1,048,576 rows (numbered sequentially from 1 to 1048576).",
          "Total Number of Columns: Exactly 1,024 columns (lettered from A to Z, then AA to ZZ, ending at column AMJ).",
          "Total Number of Cells: 1,073,741,824 individual cells per worksheet.",
          "Default File Extension: `.ods` (OpenDocument Spreadsheet).",
          "Default Document Name: 'Untitled 1' (until saved).",
          "Zoom Percentage Range: Minimum zoom is 20%; Maximum zoom is 400%.",
          "Name Box: Located on the left above the sheet grid; displays the address of the currently active cell (e.g. `A1`).",
          "Formula Bar (Input Line): Located to the right of the Name Box; displays the actual underlying formula or text of the selected cell."
        ],
        practicalExample: "Launch Calc. Look at the top left Name Box: It shows `A1`. The last column on the far right is labeled `AMJ`. The last row at the very bottom is `1048576`. Click into cell `C5`; the Name Box immediately updates to show `C5`.",
        importantPoints: [
          "Total number of Rows in LibreOffice Calc: 1,048,576 (2^20).",
          "Total number of Columns in LibreOffice Calc: 1,024 (2^10).",
          "The last column letter in LibreOffice Calc is AMJ.",
          "Default file extension for LibreOffice Calc is `.ods`.",
          "The zoom percentage range in LibreOffice Calc is 20% to 400%."
        ],
        quickRevision: "Calc matrix: 1,048,576 Rows, 1,024 Columns (A to AMJ), .ods extension, Zoom 20%-400%. Name Box shows active cell address; Formula Bar displays cell contents."
      },
      {
        code: "4.2",
        title: "Cell Addressing and Entering Data",
        whatIsIt: "A cell address (cell reference) is the unique coordinate identifier formed by combining the column letter and row number (e.g., column `B` and row `10` = `B10`).",
        whyImportant: "Entering correct data types and understanding default cell alignments is essential for ensuring mathematical formulas calculate numerical values properly.",
        howItWorks: "When you type into a cell, Calc automatically detects the data type and applies default horizontal alignments. If a number is prefixed with a single quote (`'`), Calc forces it to be treated as plain text.",
        tableTitle: "DATA TYPES AND DEFAULT HORIZONTAL ALIGNMENTS IN CALC",
        table: {
          headers: ["Data Type", "Examples Entered", "Default Horizontal Alignment", "Behavior in Formulas"],
          rows: [
            ["Text / Labels", "Name, Product, Jaipur", "Left Aligned", "Ignored by numerical calculation functions like SUM()"],
            ["Numbers / Values", "450, -89.5, 98.75", "Right Aligned", "Treated as numeric values for mathematical operations"],
            ["Dates & Times", "25/08/2026, 14:30:00", "Right Aligned", "Stored internally as serial numbers representing elapsed days"],
            ["Boolean Logic", "TRUE, FALSE", "Center Aligned", "Represents logical 1 (TRUE) and 0 (FALSE) conditions"],
            ["Text-Forced Numbers", "'12345, '0098", "Left Aligned", "Single quote (') forces number to behave as non-numeric text"]
          ],
          colWidths: [110, 125, 125, 141]
        },
        componentsTitle: "CELL EDITING & FORMATTING SHORTCUTS",
        componentsOrTypes: [
          "In-Cell Edit Mode: Select a cell and press `F2` to place the blinking text cursor directly inside the cell to modify text without overwriting existing content.",
          "Format Cells Dialogue Box: Press `Ctrl + 1` to open the full cell formatting dialogue (Numbers, Decimals, Currency, Borders, Font, Alignment).",
          "Current Date Shortcut: Press `Ctrl + ;` (Semicolon) to insert today's static date into the active cell.",
          "Current Time Shortcut: Press `Ctrl + Shift + ;` to insert the current static time."
        ],
        practicalExample: "If you type a mobile number `0987654321` into a numeric cell, Calc automatically drops the leading zero and aligns it right as `987654321`. If you type `'0987654321` (with a single quote prefix), Calc keeps the leading zero and aligns it left as text.",
        importantPoints: [
          "In LibreOffice Calc: Text is Left-aligned; Numbers/Dates are Right-aligned; Booleans are Center-aligned.",
          "Shortcut key to edit the active cell: `F2`.",
          "Shortcut key to open the Format Cells dialogue box: `Ctrl + 1`.",
          "A single quote (`'`) prefix forces numeric digits to be stored as text.",
          "Shortcut for Current Date: `Ctrl + ;` | Shortcut for Current Time: `Ctrl + Shift + ;`."
        ],
        quickRevision: "Cell address = Column+Row (e.g. B5). Alignments: Text = Left, Numbers = Right, Booleans = Center. Edit cell = F2, Format Cells = Ctrl+1, Date = Ctrl+;, Time = Ctrl+Shift+;."
      },
      {
        code: "4.3",
        title: "Manipulating Cells, Rows, and Columns",
        whatIsIt: "Cell, row, and column manipulation includes inserting, deleting, resizing, hiding, merging, and wrapping content within the spreadsheet grid.",
        whyImportant: "Table layouts frequently change as new data is collected. Manipulating grid geometry allows spreadsheets to adjust dynamically without corrupting existing formulas.",
        howItWorks: "Calc allows users to insert new rows/columns or delete unwanted rows. When rows are inserted, all existing formulas automatically adjust their cell coordinates.",
        componentsTitle: "ROW AND COLUMN MANIPULATION SHORTCUTS",
        componentsOrTypes: [
          "Insert Rows / Columns: Press `Ctrl + +` (Control with Plus key on numeric keypad), or right-click column/row header -> Insert.",
          "Delete Rows / Columns: Press `Ctrl + -` (Control with Minus key on numeric keypad), or right-click -> Delete.",
          "In-Cell Line Break: Press `Ctrl + Enter` while typing inside a cell to start a new line within the same single cell without moving to the cell below.",
          "Select Entire Row: Press `Shift + Spacebar`.",
          "Select Entire Column: Press `Ctrl + Spacebar`.",
          "Select Entire Worksheet: Press `Ctrl + A` (or `Ctrl + Shift + Spacebar`).",
          "Wrap Text: Enables automatic text wrapping so long sentences expand the row height rather than spilling into adjacent empty cells."
        ],
        practicalExample: "You are entering a multi-line address in cell A1: Type 'House No. 42', press `Ctrl + Enter` (in-cell line break), type 'M.G. Road', press `Ctrl + Enter`, and type 'New Delhi'. All three lines reside cleanly inside the single cell A1.",
        importantPoints: [
          "Shortcut key to Insert Cells/Rows/Columns: `Ctrl + +`.",
          "Shortcut key to Delete Cells/Rows/Columns: `Ctrl + -`.",
          "Shortcut key for in-cell line break (multi-line text in single cell): `Ctrl + Enter`.",
          "Select Entire Row: `Shift + Spacebar` | Select Entire Column: `Ctrl + Spacebar`."
        ],
        quickRevision: "Insert = Ctrl++, Delete = Ctrl+-. Multi-line in cell = Ctrl+Enter. Select row = Shift+Space, select column = Ctrl+Space. Formulas automatically shift on row insertion."
      },
      {
        code: "4.4",
        title: "Formulas, Functions, and Calculations",
        whatIsIt: "A **Formula** is a user-defined mathematical expression that performs calculations on cell values (e.g. `=A1+B1`). A **Function** is a built-in, pre-programmed calculation module (e.g. `=SUM(A1:A10)`).",
        whyImportant: "Formulas and functions form the core engine of spreadsheets, executing complex financial, statistical, and logical calculations instantaneously across thousands of records.",
        howItWorks: "All formulas and functions in LibreOffice Calc **must begin with an equal sign (`=`)**. Without the `=` prefix, Calc treats the input as plain text.",
        tableTitle: "ESSENTIAL BUILT-IN FUNCTIONS IN LIBREOFFICE CALC",
        table: {
          headers: ["Function Name", "Syntax & Example", "Calculated Mathematical Output", "Key Exam Distinction"],
          rows: [
            ["SUM()", "=SUM(A1:A5)", "Adds all numbers in the specified cell range", "Ignores text cells within the specified range"],
            ["AVERAGE()", "=AVERAGE(A1:A5)", "Calculates the arithmetic mean of numeric values", "Divides sum of numbers by count of numeric cells"],
            ["COUNT()", "=COUNT(A1:A5)", "Counts only cells that contain numbers", "Strictly ignores blank cells and text strings"],
            ["COUNTA()", "=COUNTA(A1:A5)", "Counts all non-empty cells (numbers + text)", "Counts any cell that is not completely blank"],
            ["MAX() / MIN()", "=MAX(A1:A5) / =MIN(A1:A5)", "Returns the highest / lowest numerical value in range", "Quickly identifies peak or minimum marks/sales"],
            ["NOW()", "=NOW()", "Returns current system date and current time", "Dynamic: Updates every time the sheet recalculates"],
            ["TODAY()", "=TODAY()", "Returns current system date only (without time)", "Dynamic: Updates daily based on system clock"],
            ["ROUND()", "=ROUND(45.678, 2)", "Rounds a number to specified decimal places (45.68)", "Uses standard mathematical rounding rules"]
          ],
          colWidths: [95, 130, 140, 136]
        },
        componentsTitle: "MATHEMATICAL OPERATORS & EVALUATION PRECEDENCE",
        componentsOrTypes: [
          "Arithmetic Operators: Exponentiation (`^`), Multiplication (`*`), Division (`/`), Addition (`+`), Subtraction (`-`).",
          "Order of Precedence (BODMAS): Parentheses `()` are evaluated first, followed by Exponents `^`, then Multiplication/Division `* /`, and finally Addition/Subtraction `+ -`.",
          "Comparison Operators: Equal (`=`), Not Equal (`<>`), Greater Than (`>`), Less Than (`<`), Greater Than or Equal (`>=`), Less Than or Equal (`<=`)."
        ],
        practicalExample: "Evaluating the formula `=10 + 5 * 2`: Calc calculates multiplication first (`5 * 2 = 10`), then adds 10, producing `20`. If written as `=(10 + 5) * 2`, the parentheses evaluate first (`15 * 2`), producing `30`." ,
        importantPoints: [
          "Every formula in LibreOffice Calc MUST begin with an equal sign (`=`).",
          "`COUNT()` counts only numeric cells; `COUNTA()` counts all non-empty cells.",
          "`=NOW()` returns current date and time; `=TODAY()` returns current date only.",
          "The 'Not Equal To' operator in Calc is `<>`."
        ],
        quickRevision: "Every formula starts with `=`. BODMAS rules apply. SUM adds numbers, AVERAGE finds mean, COUNT counts numbers, COUNTA counts all non-blank cells. NOW() gives date+time."
      },
      {
        code: "4.5",
        title: "Cell Referencing: Relative, Absolute, and Mixed",
        whatIsIt: "Cell referencing defines how cell addresses behave when a formula is copied or dragged using the AutoFill handle from one cell to other adjacent cells.",
        whyImportant: "Understanding cell referencing is necessary to prevent calculation errors when copying formulas down a column containing fixed tax rates or discount percentages.",
        howItWorks: "Prepend a dollar sign (`$`) before a column letter or row number to lock that coordinate. The `Shift + F4` shortcut cycles through reference modes.",
        tableTitle: "THE THREE CELL REFERENCING MODES",
        table: {
          headers: ["Referencing Mode", "Syntax Example", "Behavior When Formula Is Copied", "Practical Application Scenario"],
          rows: [
            ["Relative Reference", "A1", "Both column and row change relative to the new position (e.g. copying down makes A2, A3)", "Calculating individual line-item totals (Price * Qty) down a column"],
            ["Absolute Reference", "$A$1", "Both column and row remain completely locked and fixed regardless of where copied", "Multiplying every row by a single fixed GST Tax Rate cell in $E$1"],
            ["Mixed Reference (Row)", "A$1", "Column changes when copied horizontally, but Row 1 remains locked vertically", "Multiplication tables where row headers remain fixed"],
            ["Mixed Reference (Col)", "$A1", "Column A remains locked, but row number changes when copied vertically", "Multi-column tables referencing a fixed baseline column A"]
          ],
          colWidths: [110, 85, 175, 131]
        },
        componentsTitle: "TOGGLING CELL REFERENCES VIA SHIFT + F4",
        componentsOrTypes: [
          "When typing or editing a formula: Select or place the cursor on a cell reference (e.g., `A1`) and press `Shift + F4`.",
          "Cycle Sequence: `A1` (Relative) -> `$A$1` (Absolute) -> `A$1` (Row Fixed) -> `$A1` (Column Fixed) -> `A1`."
        ],
        practicalExample: "In cell C2, you write `=A2 * $E$1`, where A2 is the product price and E1 is the fixed 18% GST rate. When you drag this formula down to C3 and C4, it automatically becomes `=A3 * $E$1` and `=A4 * $E$1`. The product row increments, but the tax cell remains locked to E1.",
        importantPoints: [
          "A dollar sign (`$`) indicates an Absolute (locked) cell reference (e.g. `$A$1`).",
          "Shortcut key to cycle between Relative, Absolute, and Mixed referencing: `Shift + F4` (in Calc).",
          "Relative referencing (e.g. `A1`) is the default mode in LibreOffice Calc."
        ],
        quickRevision: "Relative `A1` shifts when copied. Absolute `$A$1` stays locked. Mixed `$A1` or `A$1` locks one coordinate. Press `Shift + F4` to cycle referencing modes."
      },
      {
        code: "4.6",
        title: "AutoFill, Sorting, and Filtering Data",
        whatIsIt: "AutoFill automatically populates sequential data series, while Sorting reorders rows and Filtering temporarily isolates specific records matching designated criteria.",
        whyImportant: "AutoFill saves hours of repetitive typing, while sorting and filtering allow users to extract meaningful insights from large tables containing thousands of entries.",
        howItWorks: "AutoFill uses the small black square handle in the bottom-right corner of the active cell. AutoFilter attaches interactive dropdown arrows to table headers.",
        componentsTitle: "DATA MANAGEMENT TOOLS IN CALC",
        componentsOrTypes: [
          "AutoFill Drag Handle: Position the cursor on the tiny square at the bottom-right corner of the selection (cursor turns to a `+` crosshair) and drag across rows/columns.",
          "Automatic Built-in Series: Numbers (type 1, 2, highlight both and drag), Weekdays (Monday, Tuesday...), Months (January, February...), Dates (01/01/2026, 02/01/2026...).",
          "Sorting Data: Access via `Data -> Sort`. Sorts alphabetically (A-Z, Z-A) or numerically (Smallest to Largest, Largest to Smallest) across up to 3 criteria columns.",
          "AutoFilter: Press `Ctrl + Shift + L` (or menu `Data -> AutoFilter`) to insert dropdown filter arrows on header cells.",
          "Freeze Panes: Menu `View -> Freeze Rows and Columns` locks header rows at the top so they remain visible while scrolling down large sheets."
        ],
        practicalExample: "To create serial numbers 1 to 100: Type `1` in cell A1 and `2` in cell A2. Highlight both cells and double-click the AutoFill handle. Calc instantly generates numbers 1 through 100 down the column in less than a second.",
        importantPoints: [
          "Shortcut key to toggle AutoFilter on/off: `Ctrl + Shift + L`.",
          "AutoFill automatically extends days of the week, months, dates, and numeric progressions.",
          "Freeze Panes (View -> Freeze Rows and Columns) keeps header rows visible during scrolling."
        ],
        quickRevision: "AutoFill extends series via the bottom-right fill handle. AutoFilter = Ctrl+Shift+L. Sorting orders data A-Z or Z-A. Freeze Panes locks headers."
      },
      {
        code: "4.7",
        title: "Charts and Visual Data Representation",
        whatIsIt: "Charts are graphical representations of worksheet data that transform complex numerical tables into visual diagrams such as bars, lines, and pie slices.",
        whyImportant: "Visual charts make trends, proportions, comparisons, and financial forecasts immediately understandable to business managers and students.",
        howItWorks: "Select the data table, click the Chart icon or select `Insert -> Chart`, and complete the 4-step Chart Wizard to generate an embedded vector graphic chart.",
        tableTitle: "THE 10 STANDARD CHART TYPES IN LIBREOFFICE CALC",
        table: {
          headers: ["Chart Type", "Visual Appearance", "Best Analytical Use Case"],
          rows: [
            ["Column Chart", "Vertical rectangular bars", "Comparing discrete categories across different groups (e.g. quarterly sales by region)"],
            ["Bar Chart", "Horizontal rectangular bars", "Comparing categories with long label names or displaying ranked items"],
            ["Pie Chart", "Circular disc divided into percentage slices", "Showing proportional parts of a single whole (100% total distribution)"],
            ["Line Chart", "Data points connected by continuous lines", "Displaying continuous trends over time (e.g. monthly temperature, stock trends)"],
            ["Area Chart", "Shaded areas beneath line curves", "Emphasizing the magnitude of volume change over time"],
            ["Scatter (X-Y)", "Unconnected or connected point coordinates", "Scientific engineering data showing statistical correlation between 2 variables"],
            ["Bubble Chart", "Varying sized circular bubbles", "Comparing three data variables simultaneously (X, Y, and Bubble Size)"],
            ["Net (Radar)", "Spider-web grid extending from center", "Comparing performance profiles across multiple qualitative criteria"],
            ["Stock Chart", "High-Low-Close candle bars", "Visualizing financial stock market price fluctuations over trading days"],
            ["Column & Line", "Combination of vertical bars and line graphs", "Displaying two related metrics with different scales (e.g. Revenue & Profit %)"]
          ],
          colWidths: [110, 160, 231]
        },
        componentsTitle: "THE 4-STEP CHART WIZARD PROCESS (INSERT -> CHART)",
        componentsOrTypes: [
          "Step 1: Chart Type (Choose from 10 chart categories: Column, Bar, Pie, Line, etc.).",
          "Step 2: Data Range (Verify selected table range and indicate whether data series is in rows or columns).",
          "Step 3: Data Series (Customize individual legend labels and categories).",
          "Step 4: Chart Elements (Add Chart Title, Subtitle, X-Axis label, Y-Axis label, and Legend position)."
        ],
        practicalExample: "To display an annual family budget: Select the expense categories and amounts, launch the Chart Wizard, and choose 'Pie Chart'. Calc automatically draws a colored circle showing food, rent, and electricity as percentage slices adding up to 100%.",
        importantPoints: [
          "A Pie Chart is best suited for showing parts of a single whole (percentage proportions).",
          "A Line Chart is best suited for tracking continuous trends over time.",
          "The Chart Wizard in LibreOffice Calc consists of exactly 4 steps.",
          "LibreOffice Calc supports 10 distinct standard chart types."
        ],
        quickRevision: "Calc offers 10 chart types via a 4-step wizard. Pie chart = percentage parts of a whole. Line chart = trends over time. Column/Bar = category comparisons."
      },
      {
        code: "4.8",
        title: "Common Formula Errors and Printing Spreadsheets",
        whatIsIt: "Diagnostic formula error codes are error flags displayed in a cell when a formula contains invalid math, misspelled function names, or incorrect data references.",
        whyImportant: "Recognizing error codes enables users to troubleshoot broken formulas and fix accounting calculations quickly.",
        howItWorks: "When Calc encounters an invalid computational state during formula evaluation, it halts computation and writes a standardized diagnostic error string into the cell.",
        tableTitle: "COMMON CALC FORMULA ERROR CODES REFERENCE",
        table: {
          headers: ["Error Code", "Underlying Cause / Error Meaning", "Corrective Solution"],
          rows: [
            ["###", "Column width is too narrow to display the number or date", "Double-click the column header border to auto-widen the column"],
            ["#DIV/0!", "Attempting to divide a number by zero (or an empty cell)", "Check divisor cell to ensure it is not zero or empty"],
            ["#NAME?", "Unrecognized function name or invalid text without quotes", "Correct misspelled function (e.g. fix `=SUMM(A1:A5)` to `=SUM(A1:A5)`)"],
            ["#VALUE!", "Incorrect argument or operand data type (e.g. adding text to number)", "Ensure cells referenced in arithmetic contain valid numbers, not text"],
            ["#REF!", "Invalid cell reference (e.g. a referenced row/column was deleted)", "Update formula to reference an existing valid cell"],
            ["#N/A", "Data is not available (common in lookup formulas)", "Verify lookup search term exists in the target lookup table"]
          ],
          colWidths: [85, 208, 208]
        },
        componentsTitle: "SPREADSHEET PRINTING ESSENTIALS",
        componentsOrTypes: [
          "Page Break Preview: Menu `View -> Page Break Preview` displays where pages will split during physical printing with adjustable blue boundary lines.",
          "Define Print Area: Highlight specific cells -> `Format -> Print Ranges -> Define` to print only the designated data table, ignoring outer scratch calculations.",
          "Fit to Page: Configure in `Format -> Page Style -> Sheet` to scale large tables onto a single sheet of paper."
        ],
        practicalExample: "You enter `=50/0` in cell A1. Calc immediately displays `#DIV/0!`. When you enter `10000000` into a narrow column, Calc displays `###`. Double-clicking the line between column headers widens the column, instantly revealing `10,000,000`.",
        importantPoints: [
          "`###` indicates the column width is too narrow to display the number.",
          "`#DIV/0!` indicates an illegal division by zero.",
          "`#NAME?` indicates a misspelled function name or unrecognized text.",
          "`#VALUE!` indicates an incompatible data type (e.g. mathematical addition with a text string)."
        ],
        quickRevision: "Error codes: `###` = narrow column, `#DIV/0!` = division by zero, `#NAME?` = misspelled function, `#VALUE!` = wrong data type, `#REF!` = deleted cell reference."
      },
      {
        code: "4.9",
        title: "Shortcut Keys Master Reference for LibreOffice Calc",
        whatIsIt: "A master reference table of all essential keyboard shortcuts in LibreOffice Calc, categorized for rapid review before CCC examinations.",
        whyImportant: "Calc shortcuts are heavily tested in NIELIT examinations and significantly increase spreadsheet calculation speed.",
        tableTitle: "COMPLETE LIBREOFFICE CALC SHORTCUTS TABLE",
        table: {
          headers: ["Shortcut Key", "Command Name", "Action Performed inside LibreOffice Calc"],
          rows: [
            ["F2", "Edit Cell", "Places text cursor inside active cell to edit contents directly"],
            ["Ctrl + 1", "Format Cells", "Opens the complete Format Cells dialogue window"],
            ["Ctrl + Enter", "In-Cell Line Break", "Inserts a new line within the same single cell"],
            ["Ctrl + ;", "Insert Current Date", "Inserts static today's date into the active cell"],
            ["Ctrl + Shift + ;", "Insert Current Time", "Inserts static current time into the active cell"],
            ["Ctrl + +", "Insert Cells/Rows", "Opens dialogue to insert new rows, columns, or cells"],
            ["Ctrl + -", "Delete Cells/Rows", "Deletes selected cells, rows, or columns"],
            ["Shift + Spacebar", "Select Entire Row", "Selects the entire horizontal row containing the cursor"],
            ["Ctrl + Spacebar", "Select Entire Column", "Selects the entire vertical column containing the cursor"],
            ["Ctrl + Shift + L", "AutoFilter Toggle", "Applies or removes interactive filter dropdown arrows"],
            ["Shift + F4", "Toggle Reference", "Cycles reference mode: A1 -> $A$1 -> A$1 -> $A1"],
            ["Ctrl + F2", "Function Wizard", "Opens dialogue with all categorized built-in functions"],
            ["Ctrl + Home", "Go to Cell A1", "Moves active cell cursor directly to the top-left cell A1"],
            ["Ctrl + End", "Go to Last Used Cell", "Moves cursor to the bottom-rightmost cell containing data"],
            ["Ctrl + F5", "Toggle Sidebar", "Opens or closes the collapsible formatting properties sidebar"],
            ["Ctrl + Shift + O", "Print Preview", "Opens full-screen print preview of the worksheet"],
            ["Ctrl + P", "Print", "Opens standard print dialogue box"],
            ["Ctrl + S", "Save Spreadsheet", "Saves modifications to the active .ods workbook"]
          ],
          colWidths: [110, 135, 256]
        },
        practicalExample: "To format a sales column quickly: Click column header, press `Ctrl + 1` to format as currency with 2 decimal places, press `Ctrl + Shift + L` to enable AutoFilter, and press `Ctrl + Home` to return instantly to cell A1.",
        importantPoints: [
          "Edit Cell: `F2` | Format Cells: `Ctrl + 1`.",
          "Insert Date: `Ctrl + ;` | Insert Time: `Ctrl + Shift + ;`.",
          "Insert Row/Col: `Ctrl + +` | Delete Row/Col: `Ctrl + -`.",
          "AutoFilter: `Ctrl + Shift + L` | Toggle Reference: `Shift + F4`.",
          "Jump to Cell A1: `Ctrl + Home`."
        ],
        quickRevision: "Memorize key Calc hotkeys: F2 = Edit cell, Ctrl+1 = Format cells, Ctrl+; = Date, Ctrl+Shift+; = Time, Ctrl++ = Insert, Ctrl+- = Delete, Shift+F4 = Reference toggle, Ctrl+Shift+L = AutoFilter."
      }
    ],
    unitRevision: [
      "LibreOffice Calc grid dimensions: 1,048,576 Rows, 1,024 Columns (A to AMJ), .ods extension, Zoom range 20% to 400%.",
      "Cell Addressing: Column Letter + Row Number (e.g. B5). Name Box displays active address; Formula Bar displays cell content.",
      "Default Alignments: Text is Left-aligned, Numbers/Dates are Right-aligned, Booleans are Center-aligned. Single quote (') forces text mode.",
      "Key Cell Operations: Edit cell = `F2`, Format cells = `Ctrl + 1`, In-cell line break = `Ctrl + Enter`.",
      "Row & Column Shortcuts: Insert = `Ctrl + +`, Delete = `Ctrl + -`, Select Row = `Shift + Spacebar`, Select Column = `Ctrl + Spacebar`.",
      "Every formula MUST begin with an equal sign (`=`). Evaluation follows standard BODMAS mathematical precedence.",
      "Core Functions: `SUM()`, `AVERAGE()`, `COUNT()` (numbers only), `COUNTA()` (all non-empty cells), `MAX()`, `MIN()`, `NOW()` (date+time), `TODAY()` (date only).",
      "Cell Referencing: Relative `A1`, Absolute `$A$1`, Mixed `$A1` or `A$1`. Toggle reference modes with `Shift + F4`.",
      "Data Organization: AutoFill drag handle extends series. AutoFilter toggle = `Ctrl + Shift + L`. Freeze Panes keeps header rows locked.",
      "Calc supports 10 chart types created in 4 steps via the Chart Wizard. Pie charts show proportions; Line charts show continuous trends.",
      "Diagnostic Error Codes: `###` (column narrow), `#DIV/0!` (division by zero), `#NAME?` (misspelled function), `#VALUE!` (invalid data type), `#REF!` (deleted cell reference)."
    ],
    keyTerms: [
      { term: "ODS", fullForm: "OpenDocument Spreadsheet", desc: "Default file extension for LibreOffice Calc workbooks." },
      { term: "AMJ", fullForm: "Column AMJ (1,024th Column)", desc: "The final column letter in a LibreOffice Calc worksheet." },
      { term: "BODMAS", fullForm: "Brackets, Orders, Division, Multiplication, Addition, Subtraction", desc: "Mathematical evaluation order for spreadsheet formulas." },
      { term: "CSV", fullForm: "Comma Separated Values", desc: "Plain text tabular data format where commas delimit cells." },
      { term: "DPI", fullForm: "Dots Per Inch", desc: "Resolution measurement applicable to printed spreadsheet reports." }
    ]
  };
}
