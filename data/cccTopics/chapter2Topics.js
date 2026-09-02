// CCC Chapter 2: Introduction to Operating System - Complete Textbook Content
export const chapter2Topics = [
  {
    "chapterNumber": 2,
    "topicNumber": 1,
    "slug": "basics-of-operating-system",
    "title": "Basics of Operating System (Desktop, Laptop & Mobile)",
    "hindiTitle": "ऑपरेटिंग सिस्टम की मूल बातें (डेस्कटॉप, लैपटॉप एवं मोबाइल OS)",
    "definitionEnglish": "An Operating System (OS) is the primary system software that manages computer hardware, memory, processing, storage, and peripheral devices while providing essential services and an interface for application programs and end users.",
    "definitionHindi": "ऑपरेटिंग सिस्टम (OS) वह मुख्य सिस्टम सॉफ्टवेयर है जो कंप्यूटर हार्डवेयर, मेमोरी, प्रोसेसिंग, स्टोरेज और इनपुट/आउटपुट उपकरणों का प्रबंधन करता है तथा उपयोगकर्ताओं एवं एप्लीकेशन प्रोग्रामों को एक इंटरफ़ेस प्रदान करता है।",
    "simpleWords": "ऑपरेटिंग सिस्टम कंप्यूटर का मुख्य प्रबंधक (Manager) है। बिना ऑपरेटिंग सिस्टम के कोई भी कंप्यूटर या स्मार्टफोन शुरू नहीं हो सकता।",
    "examImportance": "Very High (3-4 questions on OS functions, types, and desktop vs mobile OS)",
    "detailedExplanation": "### 1. The 5 Core Functions of an Operating System\nAn Operating System acts as an intermediary resource manager between hardware and user applications:\n1. **Processor & Process Management:** Allocates CPU time slices across multitasking processes using scheduling algorithms (FIFO, Round Robin, Priority Scheduling, Shortest Job First).\n2. **Memory Management (RAM):** Dynamically allocates and deallocates memory blocks for executing programs; manages **Virtual Memory** (Paging and Swapping to SSD/HDD when physical RAM is exhausted).\n3. **File System Management:** Organizes files and folders in hierarchical directory trees, manages access permissions, and handles storage file formats (**NTFS, FAT32, ext4**).\n4. **Device & I/O Management:** Coordinates hardware communication via dedicated **Device Drivers** and hardware interrupt signals.\n5. **Security & User Protection:** Enforces user account authentication, password policies, firewall filtering, and file permission Access Control Lists (ACLs).\n\n### 2. User Interfaces: CLI vs. GUI\n| Feature | CLI (Command Line Interface) | GUI (Graphical User Interface) |\n| :--- | :--- | :--- |\n| **Interaction Mode** | Typing text commands into a terminal prompt shell | Visual point-and-click using **WIMP** (Windows, Icons, Menus, Pointer) |\n| **Memory Footprint** | Extremely low RAM and CPU consumption | Higher graphics memory and processing usage |\n| **Learning Curve** | High (requires memorizing exact commands and syntax) | Intuitive and beginner-friendly |\n| **Examples** | **MS-DOS, Linux Bash Shell, Windows Command Prompt (cmd), PowerShell** | **Windows 11, macOS, Ubuntu Desktop, Android, iOS** |\n\n### 3. Classification of Operating Systems\n- **Single-User Single-Tasking:** Runs one program for one user at a time (e.g., MS-DOS).\n- **Single-User Multi-Tasking:** Allows a single user to run multiple applications simultaneously (e.g., Windows 11, macOS, Ubuntu).\n- **Multi-User Operating System:** Allows hundreds of concurrent users to access a central server simultaneously (e.g., UNIX, Linux Server, Windows Server).\n- **Real-Time Operating System (RTOS):** Guarantees task completion within strict microsecond timing deadlines (used in missile guidance systems, spacecrafts, automobile ABS brakes, medical ventilators; e.g., VxWorks, QNX).",
    "realWorldAnalogy": "The Operating System is like the Principal and Administrative Office of a school: managing classrooms (memory), teachers' schedules (CPU processing), student records (file system), and school security.",
    "importantPoints": [
      "The Operating System is the first software loaded into RAM during computer boot-up.",
      "GUI stands for Graphical User Interface and is based on the WIMP (Windows, Icons, Menus, Pointer) paradigm.",
      "CLI stands for Command Line Interface (e.g., MS-DOS, Linux Bash).",
      "Virtual Memory is hard disk space used by the OS as temporary RAM when physical memory is exhausted.",
      "RTOS (Real-Time Operating System) is used in high-precision time-critical systems like missile defense and space missions."
    ],
    "commonMistakes": [
      "Believing MS-DOS is a GUI operating system (MS-DOS is strictly a Character/Command Line Interface - CLI).",
      "Thinking Linux is developed by Microsoft (Linux was created by Linus Torvalds and is open source)."
    ],
    "examTips": [
      "Direct CCC Question: 'Which interface uses Windows, Icons, Menus, and Pointer?' ➔ GUI (WIMP).",
      "Direct CCC Question: 'MS-DOS is what type of operating system?' ➔ Single-User, Single-Tasking, CLI."
    ],
    "quickRevision": "Operating System manages CPU, Memory, Files, and Devices. Types: Single-user, Multi-user, Multi-tasking, RTOS. Interfaces: CLI (text-based, MS-DOS) and GUI (visual WIMP, Windows/Ubuntu).",
    "practiceAssignment": "Open Command Prompt in Windows (Win + R -> cmd) and type `dir` to see the CLI way of viewing folder files.",
    "microQuiz": [
      {
        "question": "Which of the following is an example of a Command Line Interface (CLI) Operating System?",
        "options": [
          {
            "id": "A",
            "text": "Windows 11"
          },
          {
            "id": "B",
            "text": "MS-DOS"
          },
          {
            "id": "C",
            "text": "Ubuntu Desktop"
          },
          {
            "id": "D",
            "text": "macOS"
          }
        ],
        "correctAnswer": "B",
        "explanation": "MS-DOS (Microsoft Disk Operating System) is a character-based, single-user Command Line Interface (CLI) OS."
      }
    ]
  },
  {
    "chapterNumber": 2,
    "topicNumber": 2,
    "slug": "user-interface-taskbar-icons-shortcuts",
    "title": "User Interface: Taskbar, Icons & Shortcuts",
    "hindiTitle": "यूजर इंटरफेस: टास्कबार, आइकन्स एवं शॉर्टकट्स",
    "definitionEnglish": "The Desktop User Interface is the primary visual workspace displayed upon logging into a graphical operating system, comprising the Desktop background, Icons, Taskbar, Start Menu, and Notification Area.",
    "definitionHindi": "डेस्कटॉप यूजर इंटरफेस ग्राफिकल ऑपरेटिंग सिस्टम में लॉगिन करने के बाद दिखने वाला मुख्य दृश्य कार्यक्षेत्र है, जिसमें डेस्कटॉप बैकग्राउंड, आइकन्स, टास्कबार, स्टार्ट मेनू और नोटिफिकेशन एरिया शामिल होते हैं।",
    "simpleWords": "कंप्यूटर ऑन होते ही जो पहली स्क्रीन दिखती है उसे डेस्कटॉप कहते हैं, जिसमें नीचे की पट्टी को टास्कबार और छोटे चित्रों को आइकन्स कहते हैं।",
    "examImportance": "High (2-3 questions on desktop components, shortcut keys, and taskbar functions)",
    "detailedExplanation": "### 1. Desktop Anatomy and Graphical Components\nUpon successful system boot and user authentication, the operating system displays the **Desktop Workspace**:\n\n1. **Desktop Icons:**\n   - Graphical visual symbols representing programs, files, folders, or system utilities.\n   - **System Icons:** *This PC (Computer)*, *Recycle Bin*, *Control Panel*, *Network*, *User Files*.\n   - **Shortcut Icons (.lnk):** Pointers to target files characterized by a **small curved arrow overlay** at the bottom-left corner of the icon. Deleting a shortcut icon does NOT delete the original source program.\n\n2. **The Taskbar (Horizontal Strip):**\n   - By default anchored at the bottom of the screen (can be repositioned to top, left, or right).\n   - **Start Button / Menu (`Win` key):** Launches installed applications, settings, power options (Sleep, Restart, Shut Down).\n   - **Pinned & Active Applications Bar:** Displays quick-launch icons and glowing highlights indicating currently active windows.\n   - **Notification Area (System Tray):** Located at the far right; displays background status widgets (System Clock, Wi-Fi connectivity, Audio volume, Battery status, Antivirus shield).\n   - **Show Desktop Button (Aero Peek):** Located at the extreme right corner of the taskbar (`Win + D`) to instantly minimize all open windows and reveal the desktop.",
    "realWorldAnalogy": "The computer Desktop is like a physical office desk: the desk surface holds active documents (desktop area), desktop trays hold tools (icons), and a drawer organizer provides quick access to supplies (taskbar).",
    "importantPoints": [
      "A shortcut icon is identified by a small curved arrow overlay at its bottom-left corner.",
      "Deleting a shortcut does NOT delete the original parent application file.",
      "The Notification Area (System Tray) is located on the right side of the Taskbar.",
      "Pressing Windows Key + D instantly minimizes all open windows and shows the Desktop.",
      "The Start Menu provides access to all installed programs and system settings."
    ],
    "commonMistakes": [
      "Believing that deleting a desktop shortcut removes the installed software from the computer.",
      "Thinking the System Tray is located on the desktop top-left (System Tray is on the bottom-right taskbar)."
    ],
    "examTips": [
      "Direct CCC Question: 'How to identify a shortcut icon?' ➔ Small curved arrow on the icon.",
      "Shortcut to open Start Menu: Windows Key or Ctrl + Esc."
    ],
    "quickRevision": "Desktop workspace consists of Icons (System vs Shortcut with small arrow) and the Taskbar (Start Menu, Pinned Apps, System Tray / Notification Area, and Show Desktop button).",
    "practiceAssignment": "Create a desktop shortcut for any text file on your PC and verify the presence of the small curved arrow icon.",
    "microQuiz": [
      {
        "question": "How can a user visually distinguish a Shortcut icon from an original file icon on the Desktop?",
        "options": [
          {
            "id": "A",
            "text": "Shortcut icons are displayed in red color"
          },
          {
            "id": "B",
            "text": "Shortcut icons contain a small curved arrow overlay"
          },
          {
            "id": "C",
            "text": "Shortcut icons have no file extension"
          },
          {
            "id": "D",
            "text": "Shortcut icons cannot be clicked"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Operating systems display a distinctive small curved arrow badge in the lower-left corner of shortcut icons."
      }
    ]
  },
  {
    "chapterNumber": 2,
    "topicNumber": 3,
    "slug": "running-an-application",
    "title": "Running and Managing Applications in OS",
    "hindiTitle": "एप्लीकेशन रन करना और टास्क मैनेजर",
    "definitionEnglish": "Running and managing applications involves launching software programs into active memory, switching between concurrent windows, and monitoring or terminating unresponsive processes using the Task Manager.",
    "definitionHindi": "एप्लीकेशन प्रबंधन से तात्पर्य सॉफ्टवेयर प्रोग्रामों को मेमोरी में लोड करके रन करना, खुली हुई विंडोज़ के बीच स्विच करना और टास्क मैनेजर द्वारा हैंग या अनुत्तरदायी प्रोग्रामों को बंद करना है।",
    "simpleWords": "प्रोग्राम्स को ओपन करना, Alt+Tab से एक ऐप से दूसरी ऐप में जाना, और टास्क मैनेजर (Ctrl+Shift+Esc) से हैंग प्रोग्राम्स को बंद करना।",
    "examImportance": "High (2 questions on Task Manager shortcuts, Run command dialog, and window switching)",
    "detailedExplanation": "### 1. Methods of Launching Applications\n1. **Double-Clicking Desktop Icons:** Double-clicking with left mouse button loads executable file into RAM.\n2. **Start Menu Search:** Press `Win` key, type application name (e.g., 'Writer' or 'Calc'), press `Enter`.\n3. **The Run Dialog Box (`Win + R`):**\n   - Type `calc` ➔ Launches Calculator.\n   - Type `notepad` ➔ Launches Notepad.\n   - Type `winword` ➔ Launches MS Word (or `swriter` for LibreOffice Writer).\n   - Type `cmd` ➔ Launches Command Prompt.\n\n### 2. Multi-Tasking & Window Management Shortcuts\n- **`Alt + Tab`:** Rapid graphical switcher to cycle between open application windows.\n- **`Win + Tab`:** Launches Task View (displays virtual desktops and timeline history).\n- **`Alt + F4`:** Closes the currently active application window (or prompts System Shutdown if on Desktop).\n- **`Win + Arrow Keys` (Snap Assist):** Snaps window to Left, Right, Maximize (Up), or Minimize (Down).\n\n### 3. Using Task Manager to Monitor and Terminate Unresponsive Apps\n- **Task Manager Shortcut Keys:** **`Ctrl + Shift + Esc`** (Direct launch) or **`Ctrl + Alt + Delete`** (Security options screen).\n- **Core Tabs in Task Manager:**\n  - **Processes:** Displays real-time CPU, Memory (RAM), Disk, Network, and GPU usage percentage per application.\n  - **Performance:** Graphical graphs showing CPU clock speed, RAM utilization, and network throughput.\n  - **Startup:** Enables or disables programs that launch automatically when Windows boots.\n  - **End Task Button:** Forcefully terminates frozen or unresponsive applications (kills process tree).",
    "realWorldAnalogy": "Task Manager is like an emergency doctor checking the pulse, heartbeat (CPU/RAM usage) of each patient (running app) and administering medicine or ending frozen sessions.",
    "importantPoints": [
      "Task Manager can be opened directly using the shortcut Ctrl + Shift + Esc.",
      "Alt + Tab is used to quickly switch between open application windows.",
      "Win + R opens the Run dialog box.",
      "Alt + F4 closes the active program window.",
      "The 'End Task' command in Task Manager forcefully shuts down frozen/unresponsive programs."
    ],
    "commonMistakes": [
      "Thinking Alt + Tab closes a window (Alt + Tab switches windows; Alt + F4 closes windows).",
      "Believing Ctrl + Shift + Esc restarts the computer (It directly opens Task Manager)."
    ],
    "examTips": [
      "Direct CCC Question: 'Which shortcut key opens Task Manager directly?' ➔ Ctrl + Shift + Esc.",
      "Direct CCC Question: 'Which key combination is used to switch between active tasks?' ➔ Alt + Tab."
    ],
    "quickRevision": "Launch apps via Start, Desktop, or Run (Win+R). Switch apps with Alt+Tab. Terminate frozen apps using Task Manager (Ctrl+Shift+Esc ➔ End Task). Close windows with Alt+F4.",
    "practiceAssignment": "Press Ctrl + Shift + Esc to open Task Manager and identify which process is currently consuming the highest RAM memory on your PC.",
    "microQuiz": [
      {
        "question": "Which keyboard shortcut combination directly opens the Task Manager window in Windows?",
        "options": [
          {
            "id": "A",
            "text": "Ctrl + Alt + Delete"
          },
          {
            "id": "B",
            "text": "Ctrl + Shift + Esc"
          },
          {
            "id": "C",
            "text": "Win + R"
          },
          {
            "id": "D",
            "text": "Alt + Tab"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Pressing Ctrl + Shift + Esc opens Task Manager directly without going through the intermediate security lock screen."
      }
    ]
  },
  {
    "chapterNumber": 2,
    "topicNumber": 4,
    "slug": "operating-system-simple-settings",
    "title": "OS Settings: Mouse, Date & Time, Display Settings",
    "hindiTitle": "ओएस सेटिंग्स: माउस, दिनांक-समय, डिस्प्ले सेटिंग्स",
    "definitionEnglish": "Operating System settings allow users to customize hardware behavior, display resolution, screen scaling, system date/time synchronization, regional localization, and mouse button configurations through the Control Panel or Settings app.",
    "definitionHindi": "ऑपरेटिंग सिस्टम सेटिंग्स उपयोगकर्ताओं को कंट्रोल पैनल या सेटिंग्स ऐप के माध्यम से हार्डवेयर व्यवहार, डिस्प्ले रिज़ॉल्यूशन, दिनांक-समय, क्षेत्रीय भाषा और माउस बटनों को कस्टमाइज़ करने की सुविधा देती हैं।",
    "simpleWords": "कंप्यूटर की सेटिंग्स जैसे स्क्रीन ब्राइटनेस, डिस्प्ले रिज़ॉल्यूशन, टाइम जोन और माउस की लेफ्ट/राइट क्लिक बदलना।",
    "examImportance": "Medium (1-2 questions on Control Panel, display resolution, and mouse primary button switching)",
    "detailedExplanation": "### 1. The Control Panel & Windows Settings App\n- **Settings App (`Win + I`):** Modern touch-friendly interface for configuring System, Devices, Network, Personalization, and Accounts.\n- **Control Panel (`control` in Run):** Classic centralized administrative console for configuring advanced hardware and system policies.\n\n### 2. Key System Settings\n1. **Display & Screen Resolution Settings:**\n   - **Screen Resolution:** Adjusts pixel density (e.g., `1920 × 1080`). Higher resolution provides sharper visuals and larger workspace area.\n   - **Scale & Layout (DPI Scaling):** Scales UI text and icons (100%, 125%, 150%) for readability on high-DPI monitors.\n   - **Night Light / Blue Light Filter:** Warmer screen color temperature at night to reduce eye fatigue.\n   - **Screen Refresh Rate:** Number of times per second screen updates pixels (e.g., 60Hz, 120Hz, 144Hz).\n\n2. **Date & Time and Regional Settings:**\n   - Synchronizes time automatically with internet **NTP (Network Time Protocol)** servers (e.g., `time.windows.com`).\n   - India Standard Time zone is **UTC+05:30 (Chennai, Kolkata, Mumbai, New Delhi)**.\n\n3. **Mouse & Pointer Configuration:**\n   - **Switch Primary and Secondary Buttons:** Reverses left and right click functions for left-handed users.\n   - **Double-Click Speed:** Adjusts time threshold required between consecutive clicks to register a double-click.\n   - **Pointer Speed & Pointer Trails:** Controls cursor acceleration sensitivity and visual movement trails.",
    "realWorldAnalogy": "OS Settings are like the dashboard and control knobs inside a car: adjusting the rear-view mirror (display), setting the clock (date/time), and adjusting seat distance (mouse sensitivity).",
    "importantPoints": [
      "The keyboard shortcut to open Windows Settings app directly is Windows Key + I.",
      "India's Standard Time Zone in computer systems is UTC+05:30.",
      "Mouse buttons can be swapped for left-handed users via Mouse Properties.",
      "Display resolution controls the total number of pixels rendered horizontally and vertically."
    ],
    "commonMistakes": [
      "Assuming changing mouse primary button damages hardware (It simply swaps software click handlers).",
      "Confusing UTC+05:30 with UTC-05:30 (India is 5 hours 30 minutes ahead of UTC/GMT, hence +05:30)."
    ],
    "examTips": [
      "Shortcut to open Windows Settings: Windows Key + I.",
      "India Time Zone: UTC +05:30."
    ],
    "quickRevision": "Control Panel & Settings (Win+I) configure Display (Resolution, Scale), Date/Time (UTC+05:30 NTP sync), and Mouse (Pointer speed, Left-handed button swap).",
    "practiceAssignment": "Press Win + I to open Settings, check your display resolution, and verify that your time zone is set to UTC+05:30.",
    "microQuiz": [
      {
        "question": "What is the official Indian Standard Time (IST) offset relative to UTC/GMT in computer date and time settings?",
        "options": [
          {
            "id": "A",
            "text": "UTC -05:30"
          },
          {
            "id": "B",
            "text": "UTC +05:30"
          },
          {
            "id": "C",
            "text": "UTC +06:00"
          },
          {
            "id": "D",
            "text": "UTC +04:30"
          }
        ],
        "correctAnswer": "B",
        "explanation": "India Standard Time is exactly 5 hours and 30 minutes ahead of Coordinated Universal Time (UTC +05:30)."
      }
    ]
  },
  {
    "chapterNumber": 2,
    "topicNumber": 5,
    "slug": "add-remove-programs-and-printers",
    "title": "Add/Remove Programs and Printer Sharing",
    "hindiTitle": "प्रोग्राम इंस्टॉल/अनइंस्टॉल करना एवं प्रिंटर शेयरिंग",
    "definitionEnglish": "Adding and removing programs involves installing application software packages from official installers and uninstalling unwanted programs cleanly from the system registry, while printer sharing allows multiple networked computers to send print jobs to a single shared printer.",
    "definitionHindi": "प्रोग्राम इंस्टॉल और अनइंस्टॉल करने से तात्पर्य सॉफ्टवेयर को सिस्टम में जोड़ना या रजिस्ट्री से पूरी तरह हटाना है, जबकि प्रिंटर शेयरिंग एक ही नेटवर्क पर जुड़े कई कंप्यूटरों को एक साझा प्रिंटर से प्रिंट निकालने की अनुमति देती है।",
    "simpleWords": "कंप्यूटर में नए सॉफ्टवेयर डालना (Install), बेकार सॉफ्टवेयर हटाना (Uninstall) और एक ही प्रिंटर को नेटवर्क के कई कंप्यूटरों से शेयर करना।",
    "examImportance": "Medium (1-2 questions on Program Uninstall vs Delete, and Default Printer concepts)",
    "detailedExplanation": "### 1. Installing and Uninstalling Applications\n1. **Installation Process:**\n   - Executing an installation setup wizard (`setup.exe`, `installer.msi`, `.deb`, `.rpm`).\n   - Unpacks compiled binaries into `Program Files`, registers dynamic link libraries (`.dll`), creates system registry keys, and adds Start Menu shortcuts.\n2. **Uninstalling (Never Just Delete the Folder!):**\n   - Simply deleting a program's folder in File Explorer leaves orphaned registry entries, background services, and cached files.\n   - Correct Procedure: Open **Settings ➔ Apps ➔ Installed Apps** (or Control Panel ➔ **Programs and Features**), select the software, and click **Uninstall**. The dedicated uninstaller cleanly removes binaries and registry keys.\n\n### 2. Managing Printers and Printer Sharing\n1. **Installing Printers:**\n   - **Plug and Play (PnP):** USB printers automatically detected and configured by Windows using generic drivers.\n   - **Network / Wi-Fi Printers:** Installed by querying IP address on the local network (LAN).\n2. **Default Printer Concept:**\n   - The specific printer automatically pre-selected by applications when a user triggers the Print command (`Ctrl + P`). Marked with a green checkmark icon in Control Panel.\n3. **Printer Sharing Over Local Network (LAN):**\n   - In Printer Properties ➔ **Sharing Tab**, check *\"Share this printer\"*, and assign a Share Name.\n   - Other PCs on the same LAN can connect to `\\\\Host-Computer-Name\\SharedPrinterName` to print documents without physical cable connections.",
    "realWorldAnalogy": "Installing a program is like officially enrolling a student in school with an ID card and roll register; uninstalling is issuing a Transfer Certificate (TC) and clearing records. Merely deleting the folder is like the student skipping class without telling anyone.",
    "importantPoints": [
      "Always uninstall programs through Settings/Control Panel, never by merely deleting the Program Files folder.",
      "The Default Printer is automatically selected by default when pressing Ctrl + P.",
      "Printers can be shared across multiple computers on a Local Area Network (LAN).",
      "MSI stands for Microsoft Installer package."
    ],
    "commonMistakes": [
      "Thinking deleting a desktop shortcut uninstalls the program (It only deletes the link icon).",
      "Assuming every computer in an office requires its own separate physical printer (Printer Sharing allows sharing 1 printer across 50+ PCs)."
    ],
    "examTips": [
      "Direct CCC Question: 'How should an application be removed from Windows?' ➔ Control Panel / Settings ➔ Uninstall.",
      "Default Printer is indicated by a green checkmark symbol."
    ],
    "quickRevision": "Install software via setup wizards; remove cleanly via Control Panel ➔ Uninstall (removes registry keys). Printer Sharing allows multiple LAN PCs to print to 1 shared default printer.",
    "practiceAssignment": "Open Control Panel ➔ Devices and Printers to identify which printer is currently set as the Default Printer on your machine.",
    "microQuiz": [
      {
        "question": "What is the proper and recommended method to remove an installed software application from a Windows PC?",
        "options": [
          {
            "id": "A",
            "text": "Drag and drop the desktop icon into the Recycle Bin"
          },
          {
            "id": "B",
            "text": "Delete the program folder from C:\\Program Files"
          },
          {
            "id": "C",
            "text": "Use 'Uninstall a Program' from Settings / Control Panel"
          },
          {
            "id": "D",
            "text": "Rename the application file extension to .bak"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Using the official 'Uninstall a Program' utility ensures that all program files, configuration scripts, and registry keys are cleanly removed."
      }
    ]
  },
  {
    "chapterNumber": 2,
    "topicNumber": 6,
    "slug": "file-and-folder-management",
    "title": "File and Folder Management Operations",
    "hindiTitle": "फाइल एवं फोल्डर प्रबंधन",
    "definitionEnglish": "File and folder management is the structured organization, creation, renaming, copying, moving, deleting, restoring, and attribute configuration of digital files and directories within an operating system's storage file system.",
    "definitionHindi": "फाइल एवं फोल्डर प्रबंधन से तात्पर्य ऑपरेटिंग सिस्टम के स्टोरेज में फाइलों और डायरेक्ट्रीज का निर्माण, नाम बदलना (Rename), कॉपी, मूव, डिलीट, रीसायकल बिन से रीस्टोर और उनके एट्रीब्यूट्स को व्यवस्थित करना है।",
    "simpleWords": "फाइल और फोल्डर बनाना, कट/कॉपी/पेस्ट करना, नाम बदलना (F2) और डिलीट फाइलों को रीसायकल बिन से वापस लाना या Shift+Del से स्थायी रूप से मिटाना।",
    "examImportance": "Very High (3-4 questions on Cut/Copy/Paste shortcuts, Recycle Bin, and Permanent Delete Shift+Del)",
    "detailedExplanation": "### 1. Files vs. Folders (Directories)\n- **File:** A self-contained collection of recorded digital data, text, audio, video, or program code identified by a filename and extension (e.g., `Notes.odt`).\n- **Folder (Directory):** A virtual container used to organize, group, and store multiple files and nested sub-folders in a hierarchical tree structure.\n\n### 2. Essential File & Folder Operations and Shortcuts\n1. **Creation:**\n   - **New Folder Shortcut:** **`Ctrl + Shift + N`** (or Right Click ➔ New ➔ Folder).\n2. **Renaming:**\n   - **Rename Shortcut:** **`F2`** (Select file/folder and press F2).\n3. **Copy vs. Cut (Move):**\n   - **Copy (`Ctrl + C`):** Duplicates file; original stays in place, copy created in clipboard.\n   - **Cut (`Ctrl + X`):** Moves file; original removed from source upon pasting.\n   - **Paste (`Ctrl + V`):** Writes clipboard data to target destination directory.\n4. **Selecting Multiple Files:**\n   - **Select All (`Ctrl + A`):** Highlights all items in the current folder.\n   - **Contiguous Selection (`Shift + Click`):** Selects a continuous block of consecutive files.\n   - **Non-Contiguous Selection (`Ctrl + Click`):** Selects individual scattered files selectively.\n\n### 3. Deletion and The Recycle Bin\n- **Standard Deletion (`Delete` or `Ctrl + D`):**\n  - Moves deleted file to the **Recycle Bin** on the hard disk.\n  - File can be easily recovered with full original properties using **Restore**.\n- **Permanent Deletion (`Shift + Delete`):**\n  - Completely deletes the file immediately **bypassing the Recycle Bin**.\n  - Space is marked as free; file cannot be restored through standard Windows features.\n\n### 4. File Attributes\n- **Read-Only:** Prevents editing, overwriting, or saving changes to file contents.\n- **Hidden:** Hides the file from standard folder views unless \"Show Hidden Files\" is enabled.",
    "realWorldAnalogy": "A file is like a single printed document sheet, a folder is like a cardboard file folder holding those sheets, and the Recycle Bin is the office paper wastebasket where you can still retrieve papers before the janitor empties it.",
    "importantPoints": [
      "F2 is the universal keyboard shortcut to Rename a selected file or folder.",
      "Ctrl + Shift + N creates a New Folder in Windows File Explorer.",
      "Shift + Delete deletes a file permanently bypassing the Recycle Bin.",
      "Ctrl + C copies; Ctrl + X cuts (moves); Ctrl + V pastes; Ctrl + A selects all.",
      "The Recycle Bin temporarily holds deleted files and allows them to be Restored."
    ],
    "commonMistakes": [
      "Confusing Shift + Delete with regular Delete (Regular Delete sends to Recycle Bin; Shift + Delete deletes permanently).",
      "Thinking renaming a file changes its internal file type if you don't change the extension."
    ],
    "examTips": [
      "Direct CCC Question: 'Which key is used to rename a selected file or folder?' ➔ F2.",
      "Direct CCC Question: 'How to delete a file permanently without sending to Recycle Bin?' ➔ Shift + Delete."
    ],
    "quickRevision": "Manage files via Copy (Ctrl+C), Cut (Ctrl+X), Paste (Ctrl+V), Rename (F2), New Folder (Ctrl+Shift+N). Delete sends to Recycle Bin (Restorable); Shift+Delete deletes permanently.",
    "practiceAssignment": "Create a new folder on Desktop using Ctrl + Shift + N, rename it to 'CCC_Notes' using F2, and delete a test file with Shift + Delete.",
    "microQuiz": [
      {
        "question": "Which keyboard shortcut permanently deletes a file or folder immediately without sending it to the Recycle Bin?",
        "options": [
          {
            "id": "A",
            "text": "Ctrl + Delete"
          },
          {
            "id": "B",
            "text": "Shift + Delete"
          },
          {
            "id": "C",
            "text": "Alt + Delete"
          },
          {
            "id": "D",
            "text": "F2 + Delete"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Pressing Shift + Delete bypasses the Recycle Bin and deletes the selected file or folder permanently from disk."
      },
      {
        "question": "What is the standard functional shortcut key to rename a selected file or folder in Windows?",
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
            "text": "F5"
          }
        ],
        "correctAnswer": "B",
        "explanation": "The F2 function key instantly activates in-place text renaming for any selected file or folder icon."
      }
    ]
  },
  {
    "chapterNumber": 2,
    "topicNumber": 7,
    "slug": "types-of-file-extensions",
    "title": "Standard File Extensions and Formats",
    "hindiTitle": "मानक फाइल एक्सटेंशन्स एवं उनके प्रकार",
    "definitionEnglish": "A file extension is a 3 to 4 character suffix separated by a period (dot) at the end of a filename that identifies the file's encoding format and tells the operating system which default application to use when opening it.",
    "definitionHindi": "फाइल एक्सटेंशन किसी फाइल के नाम के अंत में डॉट (.) के बाद लगने वाला 3 या 4 अक्षरों का प्रत्यय (Suffix) होता है जो फाइल के प्रारूप (Format) को दर्शाता है और ओएस को बताता है कि इसे किस सॉफ्टवेयर में खोलना है।",
    "simpleWords": "फाइल नाम के पीछे लगा डॉट और 3-4 अक्षर (जैसे .odt, .jpg, .mp3, .pdf) जो यह बताते हैं कि फाइल किस प्रकार की है।",
    "examImportance": "Very High (4-5 direct questions on LibreOffice extensions .odt, .ods, .odp, and standard media formats)",
    "detailedExplanation": "### 1. Crucial File Extensions for CCC Examination\nFile extensions indicate the MIME type and structure of files:\n\n| Category | File Extension | Format Full Name & Description | Default Software Package |\n| :--- | :--- | :--- | :--- |\n| **OpenDocument (LibreOffice)** | **`.odt`** | **OpenDocument Text Document** | **LibreOffice Writer** |\n| | **`.ods`** | **OpenDocument Spreadsheet** | **LibreOffice Calc** |\n| | **`.odp`** | **OpenDocument Presentation** | **LibreOffice Impress** |\n| | **`.odb`** | OpenDocument Database | LibreOffice Base |\n| | **`.odg`** | OpenDocument Graphics / Drawings | LibreOffice Draw |\n| **MS Office Documents** | **`.docx`** | Word Open XML Document | Microsoft Word |\n| | **`.xlsx`** | Excel Open XML Spreadsheet | Microsoft Excel |\n| | **`.pptx`** | PowerPoint Open XML Presentation | Microsoft PowerPoint |\n| **Portable & Text** | **`.pdf`** | **Portable Document Format** | Adobe Acrobat Reader, Web Browsers |\n| | **`.txt`** | Plain Unformatted Text File | Notepad, TextEdit |\n| | **`.rtf`** | Rich Text Format | WordPad |\n| **Image & Graphics** | **`.jpg` / `.jpeg`** | Joint Photographic Experts Group (Lossy photos) | Photos App, Photoshop |\n| | **`.png`** | Portable Network Graphics (Lossless transparency) | Paint, Web Browsers |\n| | **`.gif`** | Graphics Interchange Format (Animated) | Web Browsers |\n| | **`.bmp`** | Bitmap Image (Uncompressed) | MS Paint |\n| **Audio & Video** | **`.mp3`** | MPEG Audio Layer III | Media Players, VLC |\n| | **`.mp4`** | MPEG-4 Video Format | VLC Player, Windows Media |\n| | **`.wav`** | Waveform Audio File (Uncompressed) | Audio Recorders |\n| **Executable & System** | **`.exe`** | Executable Application Binary | Windows OS |\n| | **`.apk`** | Android Package Kit | Android OS |\n| | **`.zip` / `.rar`** | Compressed Archive Package | 7-Zip, WinRAR |",
    "realWorldAnalogy": "A file extension is like a person's surname or uniform: seeing a doctor's white coat tells you their profession; seeing `.odt` tells the computer it's a LibreOffice Writer document.",
    "importantPoints": [
      "LibreOffice Writer default extension is .odt (OpenDocument Text).",
      "LibreOffice Calc default extension is .ods (OpenDocument Spreadsheet).",
      "LibreOffice Impress default extension is .odp (OpenDocument Presentation).",
      "PDF stands for Portable Document Format, created by Adobe.",
      "JPEG/JPG is for photos, PNG supports transparency, and MP4 is universal video."
    ],
    "commonMistakes": [
      "Confusing .ods with .odp (.ods is for Calc Spreadsheet; .odp is for Impress Presentation).",
      "Thinking .docx is the default extension of LibreOffice Writer (.docx is MS Word; .odt is LibreOffice Writer)."
    ],
    "examTips": [
      "Guaranteed CCC Question: 'What is the default file extension of LibreOffice Writer?' ➔ .odt.",
      "Guaranteed CCC Question: 'What is the default file extension of LibreOffice Calc?' ➔ .ods.",
      "Guaranteed CCC Question: 'What is the default file extension of LibreOffice Impress?' ➔ .odp."
    ],
    "quickRevision": "Master CCC extensions: Writer=.odt, Calc=.ods, Impress=.odp, Word=.docx, Excel=.xlsx, PowerPoint=.pptx, Portable Document=.pdf, Android=.apk, Executable=.exe.",
    "practiceAssignment": "Save a sample document in LibreOffice Writer, open File Properties, and verify that its extension is .odt.",
    "microQuiz": [
      {
        "question": "What is the default file extension of a spreadsheet document saved in LibreOffice Calc?",
        "options": [
          {
            "id": "A",
            "text": ".odt"
          },
          {
            "id": "B",
            "text": ".ods"
          },
          {
            "id": "C",
            "text": ".odp"
          },
          {
            "id": "D",
            "text": ".xlsx"
          }
        ],
        "correctAnswer": "B",
        "explanation": "LibreOffice Calc saves spreadsheet workbooks using the open standard .ods (OpenDocument Spreadsheet) file format."
      },
      {
        "question": "What does the file extension acronym 'PDF' stand for?",
        "options": [
          {
            "id": "A",
            "text": "Portable Document Format"
          },
          {
            "id": "B",
            "text": "Program Data File"
          },
          {
            "id": "C",
            "text": "Printed Document File"
          },
          {
            "id": "D",
            "text": "Primary Digital Format"
          }
        ],
        "correctAnswer": "A",
        "explanation": "PDF stands for Portable Document Format, designed by Adobe for cross-platform document sharing."
      }
    ]
  }
];
