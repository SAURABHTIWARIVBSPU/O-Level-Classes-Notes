// CCC Chapter 5: Presentation (LibreOffice Impress) - Complete Textbook Content
export const chapter5Topics = [
  {
    "chapterNumber": 5,
    "topicNumber": 1,
    "slug": "presentation-basics-libreoffice-impress",
    "title": "Presentation Basics & LibreOffice Impress Screen",
    "hindiTitle": "प्रेजेंटेशन बेसिक्स एवं लिब्रेऑफिस इम्प्रेस स्क्रीन",
    "definitionEnglish": "LibreOffice Impress is a full-featured, open-source presentation and slideshow software package developed by The Document Foundation that enables users to create dynamic multimedia slide decks incorporating text, graphics, charts, animations, and audio/video.",
    "definitionHindi": "लिब्रेऑफिस इम्प्रेस (LibreOffice Impress) एक ओपन-सोर्स प्रेजेंटेशन सॉफ्टवेयर है जिसकी सहायता से टेक्स्ट, चित्र, चार्ट, एनीमेशन और ऑडियो/वीडियो से युक्त आकर्षक स्लाइड शो तैयार किए जाते हैं।",
    "simpleWords": "लिब्रेऑफिस इम्प्रेस एमएस पावरपॉइंट जैसा प्रेजेंटेशन सॉफ्टवेयर है जिसका डिफ़ॉल्ट एक्सटेंशन .odp है और इसमें अधिकतम ज़ूम 3000% तक होता है।",
    "examImportance": "Very High (4-5 direct questions on extension .odp, max zoom 3000%, and default landscape orientation)",
    "detailedExplanation": "### 1. LibreOffice Impress System Defaults and Dimensions\nLibreOffice Impress contains unique architectural parameters critical for the CCC examination:\n- **Default Document Name:** **`Untitled 1`**\n- **Default File Extension:** **`.odp` (OpenDocument Presentation)**\n- **Default Slide Orientation:** **Landscape (Horizontal)** (Width is greater than Height; standard 16:9 widescreen or 4:3 format).\n- **Zoom Percentage Limits:**\n  - **Minimum Zoom:** **`5%`** (The lowest zoom in the entire suite!).\n  - **Maximum Zoom:** **`3000%`** (The highest zoom in the entire office suite — 3000%!).\n- **Default View:** **Normal View**.\n\n### 2. Anatomy of the Impress Workspace\n1. **Slides Pane (Left Panel):** Displays miniature thumbnail previews of all slides in the deck in chronological presentation order. Allows dragging to reorder, duplicating, or deleting slides.\n2. **Workspace (Center Canvas):** The main slide design canvas where elements are positioned, edited, and formatted.\n3. **Sidebar Deck (`Ctrl + F5` - Right Panel):**\n   - **Properties:** Formats slide layout, background color, gradients, and font attributes.\n   - **Slide Transition:** Configures transition effects and automatic timing durations between slides.\n   - **Animation:** Assigns Entrance, Emphasis, and Exit effects to individual text boxes and shapes.\n   - **Master Slides:** Manages master design templates.\n4. **Drawing Toolbar (Bottom Strip):** Quick-draw tools: *Lines, Rectangles, Ellipses, Text Box (F2), Arrows, Callouts, Flowcharts, 3D Objects*.",
    "realWorldAnalogy": "An Impress presentation is like an electronic photo album or lecture projector where each page (slide) tells a visual story to an audience.",
    "importantPoints": [
      "The default file extension of LibreOffice Impress is .odp (OpenDocument Presentation).",
      "The minimum zoom in Impress is 5%, and the maximum zoom is 3000%.",
      "The default slide orientation in LibreOffice Impress is Landscape.",
      "The Slides Pane is located on the left side of the screen.",
      "F2 activates the Text Box drawing tool in Impress."
    ],
    "commonMistakes": [
      "Assuming maximum zoom in Impress is 400% or 600% (Writer is 600%, Calc is 400%, Impress is 3000%).",
      "Thinking default slide orientation is Portrait (Impress defaults to Landscape)."
    ],
    "examTips": [
      "Guaranteed CCC Question: 'What is the maximum zoom percentage in LibreOffice Impress?' ➔ 3000%.",
      "Guaranteed CCC Question: 'What is the default file extension of LibreOffice Impress?' ➔ .odp.",
      "Guaranteed CCC Question: 'What is the default orientation of slides in Impress?' ➔ Landscape."
    ],
    "quickRevision": "Impress: Ext=.odp, Default name=Untitled 1, Zoom=5% to 3000% (highest), Orientation=Landscape, Normal view, Left=Slides pane, Right=Sidebar deck.",
    "practiceAssignment": "Launch LibreOffice Impress, check the zoom slider to verify it reaches 3000%, and observe the default Landscape slide canvas.",
    "microQuiz": [
      {
        "question": "What is the MAXIMUM zoom magnification percentage allowed in LibreOffice Impress?",
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
        "correctAnswer": "D",
        "explanation": "LibreOffice Impress supports an industry-leading maximum zoom magnification of 3000% (minimum is 5%)."
      },
      {
        "question": "What is the default file extension of a presentation file saved in LibreOffice Impress?",
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
            "text": ".pptx"
          }
        ],
        "correctAnswer": "C",
        "explanation": "LibreOffice Impress saves presentation documents in the open standard .odp (OpenDocument Presentation) format."
      }
    ]
  },
  {
    "chapterNumber": 5,
    "topicNumber": 2,
    "slug": "creating-saving-and-managing-slides",
    "title": "Creating Slides from Templates & Blank Presentations",
    "hindiTitle": "टेम्पलेट्स से स्लाइड बनाना एवं स्लाइड प्रबंधन",
    "definitionEnglish": "Slide management involves inserting new slides into an active presentation (Ctrl+M), applying pre-built slide layout templates, duplicating slides, reordering thumbnail sequences, and deleting obsolete slides.",
    "definitionHindi": "स्लाइड प्रबंधन में प्रेजेंटेशन में नई स्लाइड जोड़ना (Ctrl+M), स्लाइड लेआउट चुनना, डुप्लिकेट स्लाइड बनाना, स्लाइड क्रम बदलना और अनावश्यक स्लाइड्स को हटाना शामिल है।",
    "simpleWords": "नई स्लाइड जोड़ने के लिए Ctrl+M दबाएं (नया प्रेजेंटेशन बनाने के लिए Ctrl+N दबाते हैं), स्लाइड का लेआउट बदलना और डुप्लिकेट बनाना।",
    "examImportance": "Very High (3-4 questions on New Slide Ctrl+M vs New Presentation Ctrl+N, and slide layouts)",
    "detailedExplanation": "### 1. Crucial Distinction: New Slide (`Ctrl + M`) vs. New Presentation (`Ctrl + N`)\n| Command | Shortcut Key | Exact Function |\n| :--- | :--- | :--- |\n| **Insert New Slide** | **`Ctrl + M`** | Inserts a **single new blank slide** into the *currently open* presentation deck |\n| **New Presentation** | **`Ctrl + N`** | Creates an **entirely new separate presentation file** in a new window (`Untitled 2`) |\n\n### 2. Standard Slide Layouts (Format ➔ Slide Layout)\nPre-structured placeholder wireframes designed for rapid content placement:\n1. **Title Slide:** Large Title and Subtitle placeholders; standard opening slide of any deck.\n2. **Title, Content:** Standard body slide with Title at top and a multi-purpose Content box below.\n3. **Title, 2 Content:** Side-by-side dual columns; ideal for comparisons and pros/cons tables.\n4. **Title Only:** Header banner with wide empty canvas for custom charts or media.\n5. **Blank Slide:** Completely empty canvas with zero pre-formatted text boxes.\n\n### 3. Slide Operations\n- **Duplicate Slide (Slide ➔ Duplicate Slide):** Creates an exact clone of the selected slide directly beneath it.\n- **Delete Slide:** Pressing `Delete` with a slide thumbnail selected in the Slides Pane removes it.\n- **Hide Slide (Slide ➔ Hide Slide):** Keeps the slide in editing view but skips it automatically during the live F5 slide show!",
    "realWorldAnalogy": "Inserting a New Slide (Ctrl+M) is like turning to the next blank page in your current notebook; New Presentation (Ctrl+N) is buying a brand new notebook from the store.",
    "importantPoints": [
      "In LibreOffice Impress, the shortcut key to Insert a New Slide is Ctrl + M.",
      "Ctrl + N creates a New Presentation file (Not a new slide).",
      "Hide Slide prevents a slide from appearing during the slide show without deleting it.",
      "Duplicate Slide creates an exact clone of the active slide."
    ],
    "commonMistakes": [
      "Pressing Ctrl + N to insert a slide (Ctrl + N opens a brand new presentation; Ctrl + M inserts a new slide).",
      "Thinking deleted slides can be shown during slide show (Use 'Hide Slide' instead of delete to skip slides)."
    ],
    "examTips": [
      "Guaranteed CCC Question: 'What is the shortcut key to insert a New Slide in LibreOffice Impress?' ➔ Ctrl + M.",
      "Guaranteed CCC Question: 'What is the difference between Ctrl+M and Ctrl+N in Impress?' ➔ Ctrl+M=New Slide, Ctrl+N=New Presentation."
    ],
    "quickRevision": "New Slide=Ctrl+M, New Presentation=Ctrl+N. Layouts: Title, Title+Content, 2 Content, Blank. Slide operations: Duplicate, Hide (skip in show), Delete.",
    "practiceAssignment": "In Impress, create a Title slide, press Ctrl + M to insert a second slide, change its layout to 'Title, 2 Content', and test hiding slide 2.",
    "microQuiz": [
      {
        "question": "What is the keyboard shortcut to INSERT A NEW SLIDE into an active presentation in LibreOffice Impress?",
        "options": [
          {
            "id": "A",
            "text": "Ctrl + N"
          },
          {
            "id": "B",
            "text": "Ctrl + M"
          },
          {
            "id": "C",
            "text": "Shift + N"
          },
          {
            "id": "D",
            "text": "Alt + M"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Pressing Ctrl + M inserts a new slide into the active deck, whereas Ctrl + N creates a brand new presentation file."
      }
    ]
  },
  {
    "chapterNumber": 5,
    "topicNumber": 3,
    "slug": "inserting-tables-clipart-and-pictures",
    "title": "Inserting Tables, ClipArt, Pictures & Shapes",
    "hindiTitle": "टेबल, क्लिपआर्ट, चित्र एवं आकृतियां जोड़ना",
    "definitionEnglish": "Multimedia and graphic asset integration in Impress allows users to insert digital photos, vector shapes, Fontwork artistic text, and data tables to build engaging visual slides.",
    "definitionHindi": "इम्प्रेस में मल्टीमीडिया और ग्राफिक्स इंटीग्रेशन की मदद से स्लाइड्स में डिजिटल फोटो, वेक्टर आकृतियां (Shapes), फॉन्टवर्क (कलात्मक टेक्स्ट) और डेटा टेबल जोड़े जाते हैं।",
    "simpleWords": "स्लाइड में सुंदर चित्र (Insert ➔ Image), 3D आकृतियां, फॉन्टवर्क टेक्स्ट और टेबल जोड़ना।",
    "examImportance": "Medium (1-2 questions on Fontwork, Text Box shortcut F2, and graphic tools)",
    "detailedExplanation": "### 1. Inserting Graphic & Text Elements\n1. **Inserting Images (Insert ➔ Image):**\n   - Embeds raster images (JPEG, PNG) or vector graphics (SVG).\n   - Allows cropping, brightness/contrast adjustments, and transparency effects.\n2. **Text Box Tool (`F2`):**\n   - Activates the cursor to click and drag custom rectangular text frames anywhere on the slide canvas.\n3. **Fontwork Gallery (Insert ➔ Fontwork):**\n   - The LibreOffice equivalent of MS Office *WordArt*.\n   - Creates 3D curved, shaded, perspective-skewed, and stylized artistic heading text.\n4. **Drawing Shapes Toolbar:**\n   - Basic Shapes (Rectangles, Circles, Cylinders), Block Arrows, Symbol Shapes (Smiley, Hearts), Stars & Banners, Flowchart connectors.\n5. **Inserting Tables (Insert ➔ Table):**\n   - Inserts formatted tabular rows and columns directly onto the slide surface.",
    "realWorldAnalogy": "Inserting graphic shapes and Fontwork onto a slide is like sticking colorful stickers and 3D glitter headings onto a school science exhibition poster board.",
    "importantPoints": [
      "Fontwork is the LibreOffice equivalent of Microsoft WordArt.",
      "The shortcut key to activate the Text Box tool in Impress is F2.",
      "Insert ➔ Image embeds external graphics onto the slide.",
      "Shapes can be customized with fills, gradients, shadows, and 3D effects."
    ],
    "commonMistakes": [
      "Looking for 'WordArt' in LibreOffice (In LibreOffice, it is officially named 'Fontwork').",
      "Thinking text cannot be typed inside shapes (Double-clicking any drawn shape allows typing text directly inside it)."
    ],
    "examTips": [
      "Direct CCC Question: 'What is the artistic text feature in LibreOffice called?' ➔ Fontwork.",
      "Direct CCC Question: 'Which key activates Text Box in Impress?' ➔ F2."
    ],
    "quickRevision": "Graphics in Impress: Image=Insert ➔ Image, Text Box=F2, Artistic 3D Text=Fontwork (WordArt equivalent), Vector shapes from Drawing Toolbar.",
    "practiceAssignment": "In Impress, insert a circle from the Drawing toolbar, double-click to type 'CCC Exam' inside it, and insert a 3D Fontwork title.",
    "microQuiz": [
      {
        "question": "What is the official name of the artistic 3D text tool in LibreOffice Impress (equivalent to MS WordArt)?",
        "options": [
          {
            "id": "A",
            "text": "TextArt"
          },
          {
            "id": "B",
            "text": "Fontwork"
          },
          {
            "id": "C",
            "text": "SmartArt"
          },
          {
            "id": "D",
            "text": "ClipArt"
          }
        ],
        "correctAnswer": "B",
        "explanation": "LibreOffice features the 'Fontwork Gallery' to generate decorative 3D typographical headings and stylized text."
      }
    ]
  },
  {
    "chapterNumber": 5,
    "topicNumber": 4,
    "slug": "creating-and-using-master-slide",
    "title": "Creating and Using Master Slide",
    "hindiTitle": "मास्टर स्लाइड (Master Slide) का निर्माण एवं उपयोग",
    "definitionEnglish": "A Master Slide is the foundational design blueprint in LibreOffice Impress that controls the global background styling, font formatting, color schemes, logo placements, and footer placeholders across all slides in a presentation.",
    "definitionHindi": "मास्टर स्लाइड (Master Slide) प्रेजेंटेशन का वह मुख्य डिज़ाइन ढांचा है जो सभी स्लाइड्स के बैकग्राउंड, फॉन्ट स्टाइल, लोगो, रंग और फुटर को एक समान (Uniform) बनाए रखने के लिए नियंत्रित करता है।",
    "simpleWords": "मास्टर स्लाइड में जो लोगो या बैकग्राउंड एक बार लगा दिया जाए, वह प्रेजेंटेशन की सभी 100 स्लाइड्स पर अपने आप दिखाई देने लगता है।",
    "examImportance": "Very High (3-4 questions on Master Slide menu location View ➔ Master Slide, purpose, and global branding)",
    "detailedExplanation": "### 1. The Architectural Role of the Master Slide\nThe Master Slide acts as the global design template for the entire presentation:\n- **Global Consistency:** Any element placed on the Master Slide (such as a corporate company logo, header line, copyright notice, or gradient background) **automatically appears on every single slide** in the deck!\n- **Universal Typography:** Changing the Title font to *Liberation Sans Bold* on the Master Slide instantly updates the titles across all 50 slides simultaneously.\n- **Header & Footer Placeholders:** Configures universal zones for Date/Time, Footer Text, and Slide Number (`<number>`).\n\n### 2. Accessing & Editing Master Slides\n- **Location in Menu:** **`View ➔ Master Slide`** (or click Master Slides in the Sidebar).\n- **Exiting Master View:** Click **`Close Master View`** on the Master View toolbar (or select **`View ➔ Normal`**).\n- Multiple Master Slides can be assigned to different sections of the same presentation deck.",
    "realWorldAnalogy": "A Master Slide is like a rubber stamp with a company letterhead: stamp it once on the master stencil, and every page printed carries the identical header and logo automatically.",
    "importantPoints": [
      "Master Slide is located under the View menu (View ➔ Master Slide).",
      "Any object or logo placed on the Master Slide automatically reflects across all slides.",
      "To return to normal slide editing, select View ➔ Normal (or Close Master View).",
      "Master Slide controls universal font styles, background colors, and footer placeholders."
    ],
    "commonMistakes": [
      "Manually copying and pasting a logo onto 50 individual slides instead of placing it once on the Master Slide.",
      "Looking for Master Slide under Format or Tools (It is located under View ➔ Master Slide)."
    ],
    "examTips": [
      "Guaranteed CCC Question: 'Under which menu is Master Slide located in LibreOffice Impress?' ➔ View Menu.",
      "Guaranteed CCC Question: 'Which slide controls the background and font style of all slides?' ➔ Master Slide."
    ],
    "quickRevision": "Master Slide (View ➔ Master Slide) defines universal background, logos, and fonts across all slides. Return to editing via View ➔ Normal.",
    "practiceAssignment": "Open View ➔ Master Slide, insert a yellow star in the top-right corner, return to Normal view, and verify that the star appears on all slides.",
    "microQuiz": [
      {
        "question": "Under which top-level menu is the 'Master Slide' option located in LibreOffice Impress?",
        "options": [
          {
            "id": "A",
            "text": "Format Menu"
          },
          {
            "id": "B",
            "text": "Slide Menu"
          },
          {
            "id": "C",
            "text": "View Menu"
          },
          {
            "id": "D",
            "text": "Tools Menu"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Master Slide design mode is accessed via View ➔ Master Slide in LibreOffice Impress."
      }
    ]
  },
  {
    "chapterNumber": 5,
    "topicNumber": 5,
    "slug": "slide-transitions-and-animation-effects",
    "title": "Slide Transitions, Custom Animations & Slide Timings",
    "hindiTitle": "स्लाइड ट्रांज़िशन, कस्टम एनिमेशन एवं टाइमिंग्स",
    "definitionEnglish": "Slide Transitions are visual motion effects that occur when moving from one slide to the next during a slideshow, whereas Custom Animations are motion effects applied to individual text boxes, images, or shapes within a single slide.",
    "definitionHindi": "स्लाइड ट्रांज़िशन (Slide Transition) वह दृश्य प्रभाव है जो एक स्लाइड से दूसरी स्लाइड पर जाने के दौरान दिखाई देता है, जबकि कस्टम एनीमेशन (Custom Animation) किसी एक स्लाइड के अंदर टेक्स्ट, फोटो या आकृतियों पर लगाया जाता है।",
    "simpleWords": "स्लाइड बदलते समय दिखने वाला इफ़ेक्ट 'स्लाइड ट्रांज़िशन' कहलाता है, जबकि टेक्स्ट या फोटो को उड़ते हुए या घूमते हुए लाना 'कस्टम एनीमेशन' कहलाता है।",
    "examImportance": "Very High (4-5 direct questions on Slide Transition vs Custom Animation, and automated slide show timings)",
    "detailedExplanation": "### 1. Slide Transition vs. Custom Animation (Crucial CCC Distinction!)\n| Dimension | Slide Transition | Custom Animation |\n| :--- | :--- | :--- |\n| **Scope / Target** | Applied to the **Entire Slide canvas** as a whole | Applied to **individual objects** (Text, Images, Shapes) within a slide |\n| **When it Occurs** | Plays **between slides** when advancing from Slide 1 to Slide 2 | Plays **inside the slide** while viewing Slide 1 |\n| **Effect Examples** | *Wipe, Fade Smoothly, Push, Wheel, Bars, Dissolve* | *Fly In, Zoom, Spin, Fade In, Bounce, Teeter, Flash* |\n| **Sidebar Icon** | Slide Transition icon in Sidebar Deck | Animation (Star icon) in Sidebar Deck |\n\n### 2. The 4 Categories of Custom Animations\n1. **Entrance Effects (Green):** Controls how an object enters and appears onto the slide canvas (e.g., *Fly In, Appear, Zoom*).\n2. **Emphasis Effects (Yellow):** Highlights an object already on screen to draw audience attention (e.g., *Spin, Pulse, Change Font Color*).\n3. **Exit Effects (Red):** Controls how an object leaves or disappears from the slide (e.g., *Fly Out, Disappear, Fade Out*).\n4. **Motion Paths:** Animates an object along a custom trajectory curve across the slide.\n\n### 3. Transition Timing & Trigger Options\n- **Advance Slide:**\n  - **On mouse click:** Slide advances only when user clicks mouse or presses spacebar.\n  - **Automatically after [X] seconds:** Slide advances automatically for self-running kiosk presentations.\n- **Apply Transition to All Slides:** Copies the selected transition effect to every slide in the deck with 1-click.",
    "realWorldAnalogy": "Slide Transition is like turning the physical page of a book; Custom Animation is like a pop-up 3D cartoon character jumping off that page.",
    "importantPoints": [
      "Slide Transition applies to the entire slide as it appears on screen.",
      "Custom Animation applies to individual elements (Text/Images) inside a slide.",
      "Animation categories: Entrance (Green), Emphasis (Yellow), Exit (Red), and Motion Paths.",
      "Transitions can be triggered 'On mouse click' or 'Automatically after X seconds'.",
      "'Apply Transition to All Slides' applies uniform transition across the presentation."
    ],
    "commonMistakes": [
      "Confusing Slide Transition with Animation (Transition is between whole slides; Animation is on individual text/images).",
      "Believing animation cannot be applied to shapes (Animation can be applied to text, shapes, charts, and photos)."
    ],
    "examTips": [
      "Guaranteed CCC Question: 'What is the visual effect called when one slide moves to another slide during slide show?' ➔ Slide Transition.",
      "Guaranteed CCC Question: 'Which effect applies movement to text and images within a slide?' ➔ Custom Animation."
    ],
    "quickRevision": "Transition=Between whole slides (Fade, Push, Wipe). Animation=On individual objects inside slide (Entrance, Emphasis, Exit, Motion Paths). Trigger=On click or timed.",
    "practiceAssignment": "In Impress, apply a 'Fade' transition to slide 1, add a 'Fly In' entrance animation to the title text, and press F5 to observe the effects.",
    "microQuiz": [
      {
        "question": "What is the term for the visual motion effect that plays when advancing from ONE SLIDE TO ANOTHER during a slide show?",
        "options": [
          {
            "id": "A",
            "text": "Custom Animation"
          },
          {
            "id": "B",
            "text": "Slide Transition"
          },
          {
            "id": "C",
            "text": "Master Slide"
          },
          {
            "id": "D",
            "text": "Slide Sorter"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Slide Transition specifically defines the motion effect rendered during the transition interval between two slides."
      }
    ]
  },
  {
    "chapterNumber": 5,
    "topicNumber": 6,
    "slug": "adding-movie-sound-and-headers-footers",
    "title": "Adding Audio, Video, Header, Footer & Notes",
    "hindiTitle": "ऑडियो, वीडियो, हेडर, फुटर एवं स्पीकर नोट्स जोड़ना",
    "definitionEnglish": "Rich media integration in Impress allows embedding digital audio music and video clips, configuring slide headers and footers, and recording private Speaker Notes visible only to the presenter.",
    "definitionHindi": "इम्प्रेस में मल्टीमीडिया इंटीग्रेशन से स्लाइड में ऑडियो, वीडियो, हेडर, फुटर और स्पीकर नोट्स (Presenter Notes) जोड़े जाते हैं जो केवल वक्ता को दिखाई देते हैं।",
    "simpleWords": "स्लाइड में गाना या वीडियो जोड़ना (Insert ➔ Media), और नीचे स्पीकर नोट्स (Speaker Notes) लिखना जो केवल प्रेजेंटर को दिखते हैं, दर्शकों को नहीं।",
    "examImportance": "High (2-3 questions on Insert Media formats, Speaker Notes, and Handout views)",
    "detailedExplanation": "### 1. Embedding Audio & Video Media\n- **Menu Location:** **`Insert ➔ Media ➔ Audio or Video...`**\n- Supports standard media formats: **`.mp3`, `.wav`, `.mp4`, `.webm`, `.avi`, `.ogg`**.\n- A media playback floating toolbar provides controls: *Play, Pause, Stop, Seek Slider, Mute, Volume*.\n\n### 2. Speaker Notes (Notes View)\n- **Purpose:** Secret speaking cues, talking points, and reminders written by the presenter.\n- **Location:** In **Notes View** (below the main slide canvas) or the Notes panel.\n- **Presenter Console:** When connected to an external projector, the projector displays only the full-screen slide to the audience, while the presenter's laptop screen displays the **Presenter Console** showing the slide, upcoming slide, timer clock, and secret Speaker Notes!\n\n### 3. Header, Footer & Slide Numbers (Insert ➔ Header and Footer)\n- Configures:\n  - **Date and Time:** Fixed date or Variable (automatically updates).\n  - **Footer Text:** Custom copyright or subject line.\n  - **Slide Number:** Dynamic numerical counter (1, 2, 3...).\n  - **Do not show on first slide:** Checkbox to suppress headers/footers on the title cover slide.",
    "realWorldAnalogy": "Speaker Notes are like an actor's secret cue cards or a politician's teleprompter: the audience sees only the grand performance, while the speaker sees the helpful notes.",
    "importantPoints": [
      "Audio and Video are inserted via Insert ➔ Media ➔ Audio or Video.",
      "Speaker Notes are visible to the presenter in Presenter Console, but invisible to the audience.",
      "Slide numbers are inserted via Insert ➔ Header and Footer.",
      "'Do not show on first slide' keeps the title slide clean."
    ],
    "commonMistakes": [
      "Thinking Speaker Notes will be visible to the audience on the projector screen (Presenter Console keeps them private).",
      "Typing slide numbers manually on each slide instead of enabling Slide Number in Header and Footer."
    ],
    "examTips": [
      "Direct CCC Question: 'Where can a presenter write private reference notes for a slide?' ➔ Notes View / Speaker Notes.",
      "Direct CCC Question: 'How to insert audio or video in Impress?' ➔ Insert ➔ Media."
    ],
    "quickRevision": "Media=Insert ➔ Media (Audio/Video). Speaker Notes=Private notes in Notes View / Presenter Console. Header/Footer=Insert ➔ Header and Footer (Date, Footer, Slide Number).",
    "practiceAssignment": "In Impress, switch to Notes View (View ➔ Notes), type 2 bullet points for your speech, and return to Normal view.",
    "microQuiz": [
      {
        "question": "Where can a presenter record private speaking notes and cues that remain INVISIBLE to the audience during a slide show?",
        "options": [
          {
            "id": "A",
            "text": "Master Slide"
          },
          {
            "id": "B",
            "text": "Speaker Notes (Notes View)"
          },
          {
            "id": "C",
            "text": "Slide Transition Deck"
          },
          {
            "id": "D",
            "text": "Status Bar"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Speaker Notes recorded in Notes View are displayed exclusively on the presenter's monitor via Presenter Console."
      }
    ]
  },
  {
    "chapterNumber": 5,
    "topicNumber": 7,
    "slug": "running-slide-show-and-printing-handouts",
    "title": "Running Slide Shows (F5) & Printing Handouts",
    "hindiTitle": "स्लाइड शो चलाना (F5 / Shift+F5) एवं हैंडआउट्स प्रिंट करना",
    "definitionEnglish": "Running a slide show executes full-screen automated or manual presentation delivery using keyboard controls, while Handout View formats multiple slide thumbnails onto physical paper pages for audience distribution.",
    "definitionHindi": "स्लाइड शो चलाना (F5) फुल-स्क्रीन प्रेजेंटेशन प्रस्तुत करने की प्रक्रिया है, जबकि हैंडआउट व्यू (Handout View) दर्शकों को बांटने के लिए एक ही पन्ने पर 1, 2, 3, 4, 6 या 9 स्लाइड्स प्रिंट करने की सुविधा देता है।",
    "simpleWords": "पहली स्लाइड से शो चलाने के लिए F5 दबाएं, वर्तमान स्लाइड से चलाने के लिए Shift+F5 दबाएं, शो बंद करने के लिए Esc दबाएं, और 1 पन्ने पर कई स्लाइड्स (Handouts) प्रिंट करें।",
    "examImportance": "Very High (4-5 direct questions on F5 vs Shift+F5, Esc key, and number of slides per handout page in every CCC exam)",
    "detailedExplanation": "### 1. Slide Show Keyboard Execution Shortcuts (Crucial CCC Topic)\n| Command | Shortcut Key | Exact Action |\n| :--- | :--- | :--- |\n| **Start Slide Show from Beginning** | **`F5`** | Launches full-screen presentation starting from **Slide 1** |\n| **Start Slide Show from Current Slide** | **`Shift + F5`** | Launches presentation starting from the **currently selected slide** |\n| **End / Exit Slide Show** | **`Esc`** (Escape) | Immediately terminates full-screen mode and returns to Normal editor |\n| **Advance to Next Slide** | **`Spacebar`**, **`Enter`**, **`N`**, **`Page Down`**, or **`Left Click`** | Advances forward |\n| **Return to Previous Slide** | **`Backspace`**, **`P`**, **`Page Up`**, or **`↑` / `←`** | Steps backward |\n| **Toggle Black Screen** | **`B`** or **`.`** (Period) | Blanks the screen completely black to pause for class discussion |\n| **Toggle White Screen** | **`W`** or **`,`** (Comma) | Blanks the screen completely white |\n\n### 2. Printing Handouts (Audience Takeaway Material)\n- **Handout View (View ➔ Handout):** Displays the layout grid for printing multi-slide summaries on physical paper.\n- **Allowed Slides per Handout Page in LibreOffice Impress:**\n  - **`1 Slide per page`**\n  - **`2 Slides per page`**\n  - **`3 Slides per page`** (Includes printed lined notes area on the right!)\n  - **`4 Slides per page`**\n  - **`6 Slides per page`**\n  - **`9 Slides per page`** (Maximum allowed per page).",
    "realWorldAnalogy": "F5 is like opening the stage curtains for the opening scene (Act 1); Shift+F5 is resuming the play from the current scene (Act 3); Handouts are printed summary pamphlets given to the audience.",
    "importantPoints": [
      "F5 starts the slide show from the first slide (Slide 1).",
      "Shift + F5 starts the slide show from the currently active slide.",
      "Esc key terminates and exits the slide show.",
      "Pressing B turns the screen black during a slide show; pressing W turns the screen white.",
      "Handouts support printing 1, 2, 3, 4, 6, or 9 slides per page."
    ],
    "commonMistakes": [
      "Pressing F5 when you want to start from the current slide (F5 always starts from slide 1; use Shift+F5 for current slide).",
      "Thinking 8 slides can be printed per handout (Allowed counts are 1, 2, 3, 4, 6, 9)."
    ],
    "examTips": [
      "Guaranteed CCC Question: 'What is the shortcut key to start Slide Show from the first slide in Impress?' ➔ F5.",
      "Guaranteed CCC Question: 'What is the shortcut key to start Slide Show from the CURRENT slide?' ➔ Shift + F5.",
      "Guaranteed CCC Question: 'Which key stops or exits the slide show?' ➔ Esc key."
    ],
    "quickRevision": "Slide Show: F5=Start from Beginning, Shift+F5=Start from Current, Esc=Exit, Space=Next, B=Black screen, W=White screen. Handouts=1, 2, 3, 4, 6, 9 slides/page.",
    "practiceAssignment": "In Impress with 3 slides, select slide 2 and press Shift + F5 to test starting from current slide. Press B to blank the screen, then Esc to exit.",
    "microQuiz": [
      {
        "question": "What is the shortcut key to start a Slide Show from the CURRENT SLIDE in LibreOffice Impress?",
        "options": [
          {
            "id": "A",
            "text": "F5"
          },
          {
            "id": "B",
            "text": "Shift + F5"
          },
          {
            "id": "C",
            "text": "Ctrl + F5"
          },
          {
            "id": "D",
            "text": "Alt + F5"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Pressing Shift + F5 launches the slide show directly from the active selected slide, whereas F5 starts from slide 1."
      },
      {
        "question": "Which of the following numbers of slides per page is NOT a standard Handout layout in LibreOffice Impress?",
        "options": [
          {
            "id": "A",
            "text": "2 Slides"
          },
          {
            "id": "B",
            "text": "3 Slides"
          },
          {
            "id": "C",
            "text": "5 Slides"
          },
          {
            "id": "D",
            "text": "6 Slides"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Standard Handout layout options are 1, 2, 3, 4, 6, and 9 slides per page. 5 slides is not a supported layout."
      }
    ]
  },
  {
    "chapterNumber": 5,
    "topicNumber": 8,
    "slug": "libreoffice-impress-shortcut-keys",
    "title": "Essential LibreOffice Impress Shortcut Keys",
    "hindiTitle": "लिब्रेऑफिस इम्प्रेस के महत्वपूर्ण शॉर्टकट कीज",
    "definitionEnglish": "Shortcut keys in LibreOffice Impress are dedicated keyboard combinations for accelerating slide creation, layout styling, animation timing, and live presentation delivery.",
    "definitionHindi": "लिब्रेऑफिस इम्प्रेस में शॉर्टकट कीज स्लाइड निर्माण, फॉर्मेटिंग, एनीमेशन और लाइव प्रेजेंटेशन संचालन को तीव्र बनाने वाले कुंजी संयोजन हैं।",
    "simpleWords": "लिब्रेऑफिस इम्प्रेस की सभी महत्वपूर्ण शॉर्टकट कुंजियों (जैसे F5, Shift+F5, Ctrl+M, Esc, Ctrl+Shift+S) की संपूर्ण परीक्षा तालिका।",
    "examImportance": "Very High (5-6 direct questions in every CCC examination)",
    "detailedExplanation": "### 1. Master Reference Table: LibreOffice Impress Shortcuts\n| Command / Operation | Shortcut Key | Functional Description |\n| :--- | :--- | :--- |\n| **Start Slide Show (From Slide 1)**| **`F5`** | Launches presentation from the beginning |\n| **Start Slide Show (Current Slide)**| **`Shift + F5`** | Launches presentation from active slide |\n| **End / Exit Slide Show** | **`Esc`** | Returns to normal editing workspace |\n| **Insert New Slide** | **`Ctrl + M`** | Inserts a new blank slide into deck |\n| **New Presentation File** | **`Ctrl + N`** | Creates a new presentation workbook |\n| **Duplicate Slide** | **`Slide ➔ Duplicate`** | Clones active slide |\n| **Text Box Tool** | **`F2`** | Activates text box drawing cursor |\n| **Spell Check** | **`F7`** | Runs spelling proofreading dialog |\n| **Thesaurus** | **`Ctrl + F7`** | Opens synonyms dictionary |\n| **Navigator** | **`Ctrl + Shift + F5`** | Opens presentation slide navigator |\n| **Sidebar Deck Toggle** | **`Ctrl + F5`** | Collapses/Expands right-side sidebar |\n| **Group Selected Objects** | **`Ctrl + Shift + G`** | Combines multiple shapes into 1 group |\n| **Ungroup Objects** | **`Ctrl + Alt + Shift + G`** | Separates grouped shapes |\n| **Enter Group** | **`F3`** | Edits single shape inside a group |\n| **Exit Group** | **`Ctrl + F3`** | Leaves group editing mode |\n| **Bring to Front** | **`Ctrl + Shift + +`** | Moves object to top of stacking order |\n| **Send to Back** | **`Ctrl + Shift + -`** | Moves object to bottom of stack |\n| **Save As** | **`Ctrl + Shift + S`** | Saves presentation with new name |\n| **Print Presentation** | **`Ctrl + P`** | Opens the Print dialog box |\n| **Black Screen (During Show)** | **`B`** or **`.`** | Blanks the screen black |\n| **White Screen (During Show)** | **`W`** or **`,`** | Blanks the screen white |\n| **Next Slide** | **`Spacebar`** / **`Enter`** | Advances forward in show |\n| **Previous Slide** | **`Backspace`** / **`P`** | Steps backward in show |\n| **Clear Direct Formatting** | **`Ctrl + M`** (in text edit) | Clears manual formatting overrides |",
    "realWorldAnalogy": "Mastering Impress shortcuts is like a DJ using professional mixer hotkeys to seamlessly transition music without looking at the screen.",
    "importantPoints": [
      "F5 = Slide Show from Beginning | Shift + F5 = Slide Show from Current Slide | Esc = End Slide Show.",
      "Ctrl + M = Insert New Slide | Ctrl + N = New Presentation File.",
      "Ctrl + Shift + S = Save As | Ctrl + F5 = Sidebar Toggle | F2 = Text Box.",
      "B = Black screen during show | W = White screen during show.",
      "Ctrl + Shift + G = Group objects | Ctrl + Alt + Shift + G = Ungroup objects."
    ],
    "commonMistakes": [
      "Confusing Ctrl + M in Writer vs Impress (In Writer Ctrl+M clears formatting; in Impress Ctrl+M inserts a New Slide).",
      "Thinking F5 in Impress opens Navigator like in Writer (In Impress F5 starts Slide Show; Navigator is Ctrl+Shift+F5)."
    ],
    "examTips": [
      "Guaranteed CCC Question: 'What does Ctrl + M do in LibreOffice Impress?' ➔ Inserts a New Slide.",
      "Guaranteed CCC Question: 'What key starts Slide Show from beginning?' ➔ F5."
    ],
    "quickRevision": "Master Impress shortcuts: Show=F5, Show current=Shift+F5, Exit=Esc, New Slide=Ctrl+M, Text Box=F2, Save As=Ctrl+Shift+S, Sidebar=Ctrl+F5, Black=B, White=W.",
    "practiceAssignment": "Open Impress, press Ctrl + M three times to create 4 slides, and test F5, Shift + F5, B, W, and Esc during presentation.",
    "microQuiz": [
      {
        "question": "In LibreOffice Impress, what action is performed by pressing the 'Ctrl + M' keyboard shortcut?",
        "options": [
          {
            "id": "A",
            "text": "Clears direct formatting"
          },
          {
            "id": "B",
            "text": "Inserts a New Slide"
          },
          {
            "id": "C",
            "text": "Starts Slide Show"
          },
          {
            "id": "D",
            "text": "Opens Master Slide view"
          }
        ],
        "correctAnswer": "B",
        "explanation": "In LibreOffice Impress, Ctrl + M inserts a new blank slide into the current presentation deck."
      }
    ]
  }
];
