// Unit 2: Introduction to Operating System - Tutorial & Textbook Grade Content
export function getUnit2Content() {
  return {
    unitNumber: 2,
    title: "Introduction to Operating System",
    officialSection: "2.0 - 2.6",
    totalHours: 7,
    theoryHours: 3,
    practicalHours: 4,
    introduction: "An Operating System (OS) is the most critical system software component of any computer or mobile device. It acts as an intermediary interface between the user and raw computer hardware, coordinating system memory, CPU execution scheduling, storage drives, input/output peripherals, and application programs. This unit covers core OS functions, CLI versus GUI paradigms, desktop and mobile operating systems, user interface elements, system settings, file and folder hierarchies, and standard file extensions.",
    whatYouWillLearn: [
      "The fundamental role and 5 primary management responsibilities of an Operating System.",
      "The architectural and operational differences between Command Line Interface (CLI) and Graphical User Interface (GUI / WIMP).",
      "Desktop operating systems (Windows, Ubuntu Linux, macOS) and mobile operating systems (Android, iOS).",
      "The desktop user interface: Taskbar, System Tray, Start Menu, Desktop Icons (System vs Shortcut), and Task Manager.",
      "Managing system settings: Display resolution, mouse pointer properties, date/time configuration, and proper software uninstallation.",
      "File and folder operations: Directory trees, renaming (F2), permanent deletion (Shift+Delete), and searching.",
      "Standard digital file extensions (.odt, .ods, .odp, .pdf, .exe, .zip, etc.) and their associating applications."
    ],
    topics: [
      {
        code: "2.1",
        title: "Basics of Operating System",
        whatIsIt: "An Operating System (OS) is a master collection of system software programs that manages computer hardware resources, provides common services for application programs, and presents a user-friendly interface allowing humans to operate the machine.",
        whyImportant: "Without an operating system, a computer is completely unusable. The hardware would require users to write complex machine binary code for every simple operation, such as typing a keystroke or saving a character to disk.",
        howItWorks: "Upon computer startup, the BIOS loads the OS kernel into primary RAM. The OS kernel acts as the core supervisor, managing CPU processes, allocating memory blocks, mediating disk read/write requests, and enforcing security boundaries.",
        componentsTitle: "THE 5 CORE MANAGEMENT FUNCTIONS OF AN OPERATING SYSTEM",
        componentsOrTypes: [
          "1. Processor (CPU) Management: Schedules running processes, allocates CPU time slices, and coordinates multitasking so multiple applications run smoothly without freezing.",
          "2. Memory Management: Allocates and tracks blocks of primary RAM for active programs; reclaims memory space when applications terminate to prevent memory leaks.",
          "3. File & Storage Management: Organizes digital files into structured hierarchical directories (folders) across disks, maintaining file permissions and file allocation tables.",
          "4. Device (I/O) Management: Coordinates communication with keyboards, mice, printers, monitors, and network adapters via specialized Device Drivers.",
          "5. Security & Protection: Enforces user account authentication (passwords, PINs, biometrics) and prevents unauthorized programs from corrupting system memory."
        ],
        tableTitle: "USER INTERFACES: CLI (COMMAND LINE) VS. GUI (GRAPHICAL USER INTERFACE)",
        table: {
          headers: ["Feature / Parameter", "Command Line Interface (CLI)", "Graphical User Interface (GUI)"],
          rows: [
            ["Interaction Model", "Text-based: User types specific syntax commands at a prompt", "Visual: User interacts with graphical WIMP elements (Windows, Icons, Menus, Pointer)"],
            ["Hardware Input", "Primarily operated via Keyboard only", "Operated using Pointing Devices (Mouse, Touchscreen, Stylus) + Keyboard"],
            ["Learning Curve", "Steep: Requires memorizing precise commands, flags, and syntax", "Intuitive: Beginner-friendly with visual clickable icons, buttons, and dialogues"],
            ["Resource Consumption", "Minimal: Consumes very low RAM and CPU processing power", "Higher: Requires graphical rendering power, GPU resources, and more RAM"],
            ["Prominent Examples", "MS-DOS, Linux Bash Shell, Unix Terminal, Windows Command Prompt", "Windows 11, Ubuntu GNOME Desktop, macOS Aqua, Android Touch UI"]
          ],
          colWidths: [110, 200, 201]
        },
        practicalExample: "To list all files in a folder using a CLI (Command Prompt), the user must type `dir` and press Enter. In a GUI (File Explorer), the user simply double-clicks the folder icon with the mouse pointer to visually inspect all files immediately.",
        importantPoints: [
          "The Operating System is the primary System Software that controls computer hardware.",
          "CLI stands for Command Line Interface; GUI stands for Graphical User Interface.",
          "GUI interfaces are based on the WIMP model (Windows, Icons, Menus, Pointing Device).",
          "MS-DOS is a classic CLI operating system; Windows and Ubuntu GNOME are GUI operating systems."
        ],
        quickRevision: "The OS manages Processor, Memory, Files, Devices, and Security. CLI uses text commands (MS-DOS); GUI uses graphical WIMP elements (Windows, Ubuntu)."
      },
      {
        code: "2.2",
        title: "Operating Systems for Desktop and Laptop",
        whatIsIt: "Desktop and laptop operating systems are robust, full-featured operating environments engineered to run on personal microcomputers and workstations, supporting complex multitasking, keyboard-mouse inputs, multiple monitors, and heavy professional application suites.",
        whyImportant: "Personal computers rely on desktop operating systems for office productivity (LibreOffice), software development, graphic design, and financial administration across business and government offices.",
        howItWorks: "Desktop OS platforms manage standard x86 and 64-bit multi-core hardware architectures, supporting multi-user sessions, background server services, and local file storage with advanced security controls.",
        tableTitle: "MAJOR DESKTOP AND LAPTOP OPERATING SYSTEMS",
        table: {
          headers: ["Operating System", "Developer & Origin", "Source Model & License", "Key System Attributes & Target Usage"],
          rows: [
            ["Ubuntu Linux", "Canonical Ltd. / Linux Community (2004)", "Open Source (FOSS / GNU GPL)", "Default OS used in NIELIT practical examinations; highly secure, free, uses GNOME desktop"],
            ["Microsoft Windows", "Microsoft Corporation (1985)", "Proprietary Commercial License", "Most widely used desktop OS globally; features comprehensive legacy software compatibility"],
            ["Apple macOS", "Apple Inc. (2001)", "Proprietary Commercial (Unix-based)", "Exclusive to Apple Mac hardware; renowned for graphic design, Unix stability, and security"],
            ["ChromeOS", "Google (2011)", "Proprietary with Open-Source Base", "Lightweight, cloud-centric OS built around the Chrome browser for education and netbooks"]
          ],
          colWidths: [110, 130, 125, 146]
        },
        componentsTitle: "DISTINCTIVE CHARACTERISTICS OF LINUX & UBUNTU",
        componentsOrTypes: [
          "Multi-User & Multitasking: Multiple human users can log in simultaneously without interfering with each other's files or running background processes.",
          "Monolithic Kernel with Modules: The Linux kernel directly handles hardware interrupts and device drivers with exceptional stability.",
          "File System Hierarchy: Uses a single unified root directory (`/`) rather than separate Windows drive letters (C:, D:).",
          "Package Management: Installs and updates software packages securely via verified repositories (`apt` package manager in Ubuntu)."
        ],
        practicalExample: "In an official government office following open-standards guidelines, computers run Ubuntu Linux with LibreOffice. The system boots directly to the desktop without licensing costs, immune to standard Windows `.exe` viral infections.",
        importantPoints: [
          "Ubuntu is a popular, user-friendly distribution of the Linux operating system.",
          "Linux was originally created by Linus Torvalds in 1991.",
          "The root directory in Linux is represented by a single forward slash (`/`).",
          "Windows uses drive letters (C:, D:) to designate storage partitions; Linux uses a unified directory tree."
        ],
        quickRevision: "Major desktop OS platforms are Ubuntu Linux (Open Source FOSS), Microsoft Windows (Proprietary), and macOS (Apple). Ubuntu is the official FOSS desktop standard for NIELIT."
      },
      {
        code: "2.3",
        title: "Operating Systems for Mobile Phone and Tablets",
        whatIsIt: "A mobile operating system is a lightweight, energy-efficient OS optimized specifically for handheld wireless devices such as smartphones and tablets, prioritizing touch interaction, power preservation, cellular connectivity, and sensor integration.",
        whyImportant: "With hundreds of millions of mobile users in India, mobile OS platforms host essential everyday citizen applications including UPI digital payments, Aadhaar DigiLocker, UMANG government services, and e-learning portals.",
        howItWorks: "Mobile operating systems prioritize responsive touch feedback, aggressive battery management (putting background apps into suspended sleep states), integrated hardware sensor telemetry (accelerometer, GPS, cameras), and sandbox application security.",
        tableTitle: "ANDROID OS VS. APPLE iOS",
        table: {
          headers: ["Feature / Parameter", "Android Operating System", "Apple iOS Operating System"],
          rows: [
            ["Developer & Core Base", "Google / Open Handset Alliance (Modified Linux Kernel)", "Apple Inc. (Darwin / Unix Mach Architecture)"],
            ["Software License", "Open Source Base (AOSP under Apache 2.0 / GPL)", "Proprietary Closed Source (Exclusive to Apple iPhones)"],
            ["Application Package Format", ".apk (Android Package Kit) and modern .aab", ".ipa (iOS App Store Package)"],
            ["Official App Store", "Google Play Store (Sideloading permitted via .apk)", "Apple App Store (Sideloading strictly restricted)"],
            ["Customizability", "High: Customizable launchers, default apps, and widgets", "Controlled: Standardized user experience, tightly sandboxed"]
          ],
          colWidths: [120, 195, 196]
        },
        componentsTitle: "MOBILE OS HARDWARE & SENSOR INTEGRATIONS",
        componentsOrTypes: [
          "Capacitive Multi-Touch Gestures: Pinch-to-zoom, swipe, double-tap, and edge gestures.",
          "Wireless Communication Protocols: Seamless automated handover between 4G/5G mobile networks, Wi-Fi 6, Bluetooth, and NFC.",
          "Biometric Authentication: Integrated facial recognition and optical/capacitive fingerprint scanning for secure mobile payment authorization.",
          "Location-Based Services: Real-time satellite GPS tracking integrated with map navigation and emergency citizen safety services."
        ],
        practicalExample: "When you tap to pay at a merchant using PhonePe or Google Pay, the mobile OS validates your identity through the fingerprint scanner hardware enclave, encrypts the credentials, and communicates with the banking server via 5G data.",
        importantPoints: [
          "Android is based on the open-source Linux kernel.",
          "Android installer files use the `.apk` extension.",
          "Apple iOS is a proprietary closed-source mobile operating system.",
          "Mobile apps run inside isolated security sandboxes to protect user data."
        ],
        quickRevision: "Android (Google, Linux-based, .apk) and iOS (Apple, proprietary, .ipa) are the two primary mobile operating systems. They emphasize battery efficiency, touch gestures, and security sandboxes."
      },
      {
        code: "2.4",
        title: "User Interface for Desktop and Laptop",
        whatIsIt: "The Desktop User Interface is the visual graphical environment displayed on the monitor screen upon booting, consisting of the Desktop Workspace, Icons, Taskbar, System Tray, Start Menu, and running application windows.",
        whyImportant: "The desktop UI allows users to easily launch programs, monitor open applications, check system notifications, and navigate storage drives using intuitive point-and-click operations.",
        howItWorks: "The graphical desktop window manager listens for mouse and keyboard events. When an icon is double-clicked, the window manager instructs the OS kernel to load the corresponding executable program from disk into RAM and render its graphical window.",
        componentsTitle: "PRIMARY DESKTOP UI COMPONENTS",
        componentsOrTypes: [
          "1. Desktop Surface: The primary visual background workspace where shortcuts, documents, and active program windows are organized.",
          "2. System Icons vs. Shortcut Icons: System Icons (e.g., 'This PC', 'Recycle Bin') provide core OS functionality; Shortcut Icons represent clickable link pointers to files or applications and are identified by a small curved arrow overlay on the lower-left corner.",
          "3. Taskbar: The horizontal bar positioned at the bottom of the screen (customizable to edges), showing currently running application buttons, pinned program launchers, and the Start Menu button.",
          "4. System Tray (Notification Area): Located at the far right of the taskbar; displays real-time status indicators including current clock time, date, network Wi-Fi signal, speaker volume, battery level, and antivirus status.",
          "5. Task Manager: A critical system diagnostic tool (launched via `Ctrl + Shift + Esc` or `Ctrl + Alt + Delete`) displaying active processes, real-time CPU/RAM/Disk utilization percentages, and allowing users to forcibly terminate unresponsive programs."
        ],
        practicalExample: "If LibreOffice Calc stops responding while calculating a massive sheet, rather than restarting the entire PC, the user presses `Ctrl + Shift + Esc` to open Task Manager, selects 'LibreOffice Calc' from the list of running processes, and clicks 'End Task' to safely close the frozen program.",
        importantPoints: [
          "Shortcut icons are distinguished by a small curved arrow on the icon's bottom-left corner.",
          "Deleting a shortcut icon does NOT delete the actual underlying software application from the computer.",
          "The Notification Area (System Tray) is located on the right side of the Taskbar.",
          "Task Manager shortcut key: `Ctrl + Shift + Esc`.",
          "The Run command dialogue box is launched using the shortcut: `Windows Key + R`."
        ],
        quickRevision: "Desktop UI consists of the desktop workspace, icons (shortcuts have curved arrows), Taskbar, and System Tray. Task Manager (`Ctrl + Shift + Esc`) monitors CPU/RAM and terminates frozen apps."
      },
      {
        code: "2.5",
        title: "Operating System Simple Settings",
        whatIsIt: "Operating System Settings (found in Control Panel / Windows Settings or Ubuntu Settings) allow users to configure hardware devices, display parameters, mouse sensitivity, network connectivity, regional date/time formats, and install or remove programs.",
        whyImportant: "Proper OS configuration ensures accessible screen viewing, accurate timestamping of created files, secure printer sharing across local networks, and clean removal of unwanted software.",
        howItWorks: "When a user modifies a setting (e.g., changing screen resolution or adjusting mouse pointer speed), the OS writes the new parameters to the system registry or configuration files and instructs hardware device drivers to apply the new values immediately.",
        tableTitle: "CORE OPERATING SYSTEM SETTINGS CATEGORIES",
        table: {
          headers: ["Settings Category", "Common Configuration Parameters", "Proper Procedure & Purpose"],
          rows: [
            ["Display Settings", "Screen Resolution, Scaling (100%/125%), Refresh Rate, Orientation", "Right-click Desktop -> Display Settings; prevents eye strain and ensures sharp text"],
            ["Mouse Properties", "Primary Button Switch (Left/Right), Double-Click Speed, Pointer Trail", "Settings -> Devices -> Mouse; adapts mouse for left-handed users or accessibility"],
            ["Date and Time", "Time Zone (India Standard Time: UTC+05:30), 12h/24h Format", "Settings -> Time & Language; ensures file creation timestamps and emails are accurate"],
            ["Add / Remove Programs", "Uninstall Applications, Optional OS Features, Installed Updates", "Settings -> Apps -> Installed Apps; cleanly removes files, registries, and DLL links"],
            ["Network & Printer Sharing", "Local Network Workgroup, Shared Printer Queue, File Permissions", "Control Panel -> Devices and Printers; allows multiple office PCs to print on one device"]
          ],
          colWidths: [110, 160, 241]
        },
        componentsTitle: "PROPER SOFTWARE UNINSTALLATION VS. FOLDER DELETION",
        componentsOrTypes: [
          "Correct Method (Uninstallation): Launch 'Add or Remove Programs', select the software, and click 'Uninstall'. The built-in uninstaller cleanly unregisters system DLLs, clears registry entries, and removes background services.",
          "Incorrect Method (Manual Folder Deletion): Manually dragging the program folder from `C:\\Program Files` into the Recycle Bin leaves orphaned registry keys, broken file associations, and background startup services that degrade PC performance."
        ],
        practicalExample: "When sharing a laser printer in an educational lab: The printer is connected via USB to Computer-A. The instructor opens 'Printer Properties', checks 'Share this printer', and gives it the share name 'Lab_Printer'. All other computers on the lab network can now send print jobs directly to this shared printer.",
        importantPoints: [
          "India Standard Time (IST) is set to UTC+05:30.",
          "Programs must be removed via 'Add or Remove Programs' / 'Uninstall' to ensure clean removal.",
          "Manually deleting a program folder does NOT cleanly uninstall the software.",
          "Mouse primary button switching allows left-handed users to use the right button for primary clicking."
        ],
        quickRevision: "OS Settings configure Display, Mouse, Timezone (IST is UTC+05:30), Printers, and Programs. Always use 'Add or Remove Programs' rather than manual folder deletion."
      },
      {
        code: "2.6",
        title: "File and Folder Management",
        whatIsIt: "File and folder management is the structured system by which digital information is named, stored, modified, categorized, and retrieved on secondary storage drives using a hierarchical directory tree.",
        whyImportant: "Without systematic file and folder management, thousands of documents, photos, and spreadsheets would be scattered randomly across storage disks, making them nearly impossible to locate or backup.",
        howItWorks: "A **File** is a collection of related digital data stored under a specific name (e.g., `Report.odt`). A **Folder (Directory)** is a container that holds multiple files and sub-folders. Storage drives use File Allocation Tables (e.g., NTFS, FAT32, ext4) to track the exact sector addresses of stored files.",
        componentsTitle: "ESSENTIAL FILE AND FOLDER OPERATIONS & SHORTCUTS",
        componentsOrTypes: [
          "Create New Folder: In File Explorer, press `Ctrl + Shift + N`, or right-click empty space -> New -> Folder.",
          "Rename File / Folder: Select the item and press function key `F2`, or right-click -> Rename.",
          "Copy vs. Cut: Copy (`Ctrl + C`) duplicates the item to a new location; Cut (`Ctrl + X`) moves the original item to a new location upon Paste (`Ctrl + V`).",
          "Normal Delete vs. Permanent Delete: Normal Delete (`Delete` key) moves items to the Recycle Bin (Trash in Linux) where they can be restored; Permanent Delete (`Shift + Delete`) bypasses the Recycle Bin and deletes the item permanently from the file table.",
          "File Search: Use the search bar in File Explorer (`Ctrl + F`) or use wildcard characters (`*` represents any group of characters; `?` represents any single character; e.g., `*.odt` finds all Writer files)."
        ],
        practicalExample: "A student creates a master folder named 'CCC_Study_2026'. Inside it, they create sub-folders named 'Unit_01', 'Unit_02', and 'Practice_Tests'. If they accidentally delete a test paper with the `Delete` key, they simply open the Recycle Bin, right-click the file, and choose 'Restore' to return it to its original folder.",
        importantPoints: [
          "Shortcut key to rename a selected file or folder: `F2`.",
          "Shortcut key to create a new folder: `Ctrl + Shift + N`.",
          "Shortcut key to permanently delete a file bypassing the Recycle Bin: `Shift + Delete`.",
          "Files deleted normally can be recovered from the Recycle Bin / Trash.",
          "Wildcard character `*` matches zero or more characters; `?` matches exactly one character."
        ],
        quickRevision: "Files store data; folders store files and sub-folders. Key shortcuts: Rename = F2, New Folder = Ctrl+Shift+N, Permanent Delete = Shift+Delete. Wildcard * searches extensions."
      },
      {
        code: "2.7",
        title: "Types of File Extensions",
        whatIsIt: "A file extension is a suffix of characters preceded by a period (`.`) attached to the end of a filename (e.g., `.odt`, `.ods`, `.pdf`), identifying the internal data format of the file and instructing the OS which application program should open it.",
        whyImportant: "File extensions allow the operating system to automatically launch the correct software application when a user double-clicks a file, preventing data corruption and encoding mismatches.",
        howItWorks: "The operating system maintains a file association table linking extensions to installed applications. For example, when `Report.odt` is clicked, the OS checks `.odt`, identifies it as OpenDocument Text, and launches LibreOffice Writer.",
        tableTitle: "STANDARD FILE EXTENSIONS REFERENCE TABLE",
        table: {
          headers: ["File Extension", "Full Format Name", "Associated Application Software", "Category / Data Type"],
          rows: [
            [".odt", "OpenDocument Text", "LibreOffice Writer", "Word Processing Document (FOSS Standard)"],
            [".ods", "OpenDocument Spreadsheet", "LibreOffice Calc", "Spreadsheet / Workbook (FOSS Standard)"],
            [".odp", "OpenDocument Presentation", "LibreOffice Impress", "Slide Presentation (FOSS Standard)"],
            [".pdf", "Portable Document Format", "Adobe Acrobat Reader, Web Browsers", "Fixed-layout Document (Print-ready, read-only)"],
            [".txt", "Plain Text Document", "Notepad, TextEdit, Gedit", "Unformatted raw text file"],
            [".docx", "Office Open XML Document", "Microsoft Word / LibreOffice Writer", "Word Processing Document (Microsoft)"],
            [".xlsx", "Office Open XML Spreadsheet", "Microsoft Excel / LibreOffice Calc", "Spreadsheet Document (Microsoft)"],
            [".pptx", "Office Open XML Presentation", "Microsoft PowerPoint / LibreOffice Impress", "Slide Presentation (Microsoft)"],
            [".jpg / .jpeg", "Joint Photographic Experts Group", "Image Viewers, Web Browsers", "Compressed raster photograph image"],
            [".png", "Portable Network Graphics", "Image Viewers, Graphic Editors", "Lossless raster image with transparency"],
            [".mp3", "MPEG Audio Layer III", "Media Players (VLC, Windows Media Player)", "Compressed digital audio recording"],
            [".mp4", "MPEG-4 Part 14 Video", "Media Players, Video Editors", "Compressed digital video file"],
            [".exe", "Executable Binary File", "Windows Operating System", "Executable computer program installer"],
            [".zip / .rar", "Compressed Archive Container", "7-Zip, WinRAR, File Explorer", "Compressed archive bundling multiple files"]
          ],
          colWidths: [80, 130, 155, 146]
        },
        componentsTitle: "ESSENTIAL RULES REGARDING FILE EXTENSIONS",
        componentsOrTypes: [
          "Separating Period: The extension is always separated from the primary file name by a dot (e.g., `Document.odt`).",
          "Renaming Caution: If a user manually deletes or alters the file extension during renaming, the operating system may fail to recognize the file type until the correct extension is restored.",
          "Security Warning: Executable files ending in `.exe`, `.bat`, or `.vbs` can run arbitrary code and should never be opened from unknown email attachments."
        ],
        practicalExample: "When exporting an assignment in LibreOffice Writer: Saving as `.odt` preserves full editing capabilities for LibreOffice. Exporting as `.pdf` creates a universal document that displays identically on any smartphone, laptop, or printer without shifting fonts or layouts.",
        importantPoints: [
          "LibreOffice Writer default file extension is `.odt`.",
          "LibreOffice Calc default file extension is `.ods`.",
          "LibreOffice Impress default file extension is `.odp`.",
          "PDF stands for Portable Document Format.",
          "An `.exe` file is an executable binary application in Windows."
        ],
        quickRevision: "File extensions indicate file formats. LibreOffice defaults: Writer = .odt, Calc = .ods, Impress = .odp. PDF = Portable Document Format. Executable programs use .exe."
      }
    ],
    unitRevision: [
      "The Operating System acts as the intermediary interface between human users and computer hardware.",
      "The 5 primary OS functions: Processor Management, Memory Management, File Management, Device Management, and Security.",
      "CLI (Command Line Interface, e.g. MS-DOS) is text-based and keyboard-operated; GUI (e.g. Windows, Ubuntu GNOME) is visual and uses the WIMP model (Windows, Icons, Menus, Pointer).",
      "Ubuntu Linux is an open-source FOSS desktop operating system used officially in NIELIT curricula.",
      "Desktop UI comprises the Desktop Workspace, System Icons, Shortcut Icons (marked with a small curved arrow), Taskbar, System Tray, and Start Menu.",
      "Task Manager (`Ctrl + Shift + Esc`) monitors real-time CPU/RAM/Disk performance and terminates unresponsive processes.",
      "India Standard Time (IST) configuration is set to UTC+05:30.",
      "Always remove software via 'Add or Remove Programs' rather than manual folder deletion to prevent orphaned registry keys.",
      "File management shortcuts: Rename = `F2`, New Folder = `Ctrl + Shift + N`, Permanent Delete = `Shift + Delete`.",
      "Files deleted normally go to the Recycle Bin (Trash) and can be restored; files deleted with `Shift + Delete` are permanently removed.",
      "LibreOffice default extensions: Writer document = `.odt`, Calc spreadsheet = `.ods`, Impress presentation = `.odp`.",
      "Portable Document Format (`.pdf`) ensures universal fixed-layout presentation across all platforms."
    ],
    keyTerms: [
      { term: "OS", fullForm: "Operating System", desc: "System software managing hardware resources and software execution." },
      { term: "CLI", fullForm: "Command Line Interface", desc: "Text-based user interface requiring typed commands (e.g. MS-DOS)." },
      { term: "GUI", fullForm: "Graphical User Interface", desc: "Visual user interface utilizing clickable graphical WIMP elements." },
      { term: "WIMP", fullForm: "Windows, Icons, Menus, Pointing Device", desc: "The four architectural pillars of modern graphical user interfaces." },
      { term: "FOSS", fullForm: "Free and Open Source Software", desc: "Software distributed with open source code under licenses like GNU GPL." },
      { term: "ODT", fullForm: "OpenDocument Text", desc: "Default file extension for LibreOffice Writer documents." },
      { term: "ODS", fullForm: "OpenDocument Spreadsheet", desc: "Default file extension for LibreOffice Calc workbooks." },
      { term: "ODP", fullForm: "OpenDocument Presentation", desc: "Default file extension for LibreOffice Impress presentations." },
      { term: "PDF", fullForm: "Portable Document Format", desc: "Standardized cross-platform fixed-layout digital document format." },
      { term: "IST", fullForm: "India Standard Time", desc: "National time standard corresponding to UTC+05:30." },
      { term: "NTFS", fullForm: "New Technology File System", desc: "Default journaling file system used by modern Windows operating systems." }
    ]
  };
}
