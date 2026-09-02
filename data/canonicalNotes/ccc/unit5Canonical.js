// Unit 5: Presentation (LibreOffice Impress) - Tutorial & Textbook Grade Content
export function getUnit5Canonical() {
  return {
    unitNumber: 5,
    title: "Presentation (LibreOffice Impress)",
    officialSection: "5.0 - 5.7",
    totalHours: 12,
    theoryHours: 4,
    practicalHours: 8,
    introduction: "A multimedia presentation is a structured sequence of visual slides combining typography, bullet points, charts, vector graphics, audio, and video designed to deliver lectures, business pitches, and demonstrations. LibreOffice Impress is the standardized FOSS presentation application taught in the NIELIT CCC curriculum. This unit teaches the complete Impress interface, slide layout architectures, Fontwork 3D art, Master Slides, transitions versus animations, slide show control hotkeys, speaker notes, and handout printing layouts.",
    whatYouWillLearn: [
      "LibreOffice Impress workspace defaults (.odp format, Landscape default, Slides Pane, Zoom range 5% to 3000%).",
      "Slide manipulation: New Slide (Ctrl+M) versus New Presentation (Ctrl+N), duplicate slides, and hiding slides.",
      "Graphic and textual assets: Text boxes (F2), shape drawing, and Fontwork 3D stylized text.",
      "Master Slides (View -> Master Slide) for universal background branding, logos, and slide footers.",
      "Slide Transitions (motion between slides) versus Custom Animations (motion on individual slide objects).",
      "Controlling Slide Shows: Starting from first slide (F5), starting from current slide (Shift+F5), exiting (Esc), and screen blanking (B / W).",
      "Speaker Notes, Presenter Console, and Handout printing layouts (1, 2, 3, 4, 6, 9 slides per page).",
      "Complete Master Shortcut Table for LibreOffice Impress."
    ],
    topics: [
      {
        code: "5.1",
        title: "Introduction to Presentation and Impress Interface",
        whatIsIt: "LibreOffice Impress is a full-featured OpenDocument presentation graphics program that enables users to design professional multimedia slide decks with transitions, animations, and speaker tools.",
        whyImportant: "Presentations are the standard medium for visual communication in conferences, classrooms, corporate briefings, and public administration.",
        howItWorks: "An Impress file is called a **Presentation**, which contains a series of individual **Slides**. Slides display text, images, and charts, and are presented sequentially during a digital slide show.",
        componentsTitle: "IMPRESS INTERFACE STRUCTURE & SYSTEM DEFAULTS",
        componentsOrTypes: [
          "Default Document Name: 'Untitled 1' (until saved).",
          "Default File Extension: `.odp` (OpenDocument Presentation).",
          "Default Page Orientation: Landscape (horizontal screen orientation).",
          "Zoom Percentage Range: Minimum zoom is 5%; Maximum zoom is 3000% (the highest zoom range in the LibreOffice suite).",
          "Slides Pane: Located on the left; displays vertical thumbnail previews of all slides in the deck for easy reordering and navigation.",
          "Workspace (Slide View): The central editing area where the active slide is designed.",
          "Sidebar: Located on the right (`Ctrl + F5`); provides collapsible panels for Properties, Slide Transitions, Animations, Master Slides, and Shapes."
        ],
        practicalExample: "When you launch Impress, it opens with a default blank slide in Landscape orientation. Notice the Slides Pane on the left showing thumbnail 'Slide 1'. The zoom slider at the bottom right can shrink down to 5% or zoom all the way in to 3000% to inspect microscopic graphic details.",
        importantPoints: [
          "Default file extension for LibreOffice Impress: `.odp`.",
          "Default page orientation in Impress is Landscape.",
          "The zoom percentage range in LibreOffice Impress is 5% to 3000%.",
          "Shortcut to toggle the Sidebar on or off: `Ctrl + F5`."
        ],
        quickRevision: "Impress defaults: Extension = .odp, Orientation = Landscape, Zoom = 5%-3000% (highest in suite). Interface has Slides Pane (left), Workspace (center), and Sidebar (right)."
      },
      {
        code: "5.2",
        title: "Creating Slides and Choosing Layouts",
        whatIsIt: "Slide creation and layout selection defines the structural arrangement of placeholders (text boxes, bullet lists, charts, images) across individual slides in a presentation.",
        whyImportant: "Pre-designed slide layouts ensure consistent visual balance, correct alignment, and prevent cluttered slides.",
        howItWorks: "Press `Ctrl + M` to insert a new slide into the active presentation, then select an appropriate layout from the Layouts panel in the Sidebar.",
        tableTitle: "STANDARD SLIDE LAYOUTS IN LIBREOFFICE IMPRESS",
        table: {
          headers: ["Slide Layout Name", "Placeholder Elements", "Intended Educational / Business Purpose"],
          rows: [
            ["Blank Slide", "No pre-set placeholders", "Full freedom for custom graphics, posters, or full-screen photos"],
            ["Title Slide", "Title + Subtitle placeholders", "The opening first slide displaying presentation topic and presenter name"],
            ["Title, Content", "Title header + 1 multi-purpose box", "Standard slide for bulleted explanation points or single diagram"],
            ["Title, 2 Content", "Title header + 2 side-by-side boxes", "Ideal for side-by-side comparisons, pros vs cons, or text + image"],
            ["Title, 4 Content", "Title header + 4 quadrant boxes", "Displaying 4 distinct features, metrics, or team member photos"]
          ],
          colWidths: [120, 160, 221]
        },
        componentsTitle: "SLIDE MANIPULATION OPERATIONS & SHORTCUTS",
        componentsOrTypes: [
          "Insert New Slide: Press `Ctrl + M` (or menu `Slide -> New Slide`).",
          "New Presentation: Press `Ctrl + N` (creates an entirely new separate presentation window).",
          "Duplicate Slide: Menu `Slide -> Duplicate Slide` creates an exact clone of the active slide immediately below it.",
          "Hide Slide: Right-click slide in Slides Pane -> 'Hide Slide'. Hidden slides remain visible during editing, but are automatically skipped during the actual slide show.",
          "Delete Slide: Select slide in Slides Pane and press the `Delete` key."
        ],
        practicalExample: "A presenter wants to discuss 10 slides, but slide 7 contains optional technical backup data. Rather than deleting slide 7, the presenter right-clicks it and selects 'Hide Slide'. During the main presentation, Impress smoothly transitions directly from slide 6 to slide 8, skipping slide 7.",
        importantPoints: [
          "Shortcut key to insert a New Slide in the current presentation: `Ctrl + M`.",
          "Shortcut key to create a New Presentation file: `Ctrl + N`.",
          "Hidden slides are not deleted; they are simply bypassed during the slide show.",
          "Duplicate Slide creates a carbon copy of the currently selected slide."
        ],
        quickRevision: "New Slide = Ctrl+M. New Presentation = Ctrl+N. Layouts structure content (Title, Content, 2 Content). Hiding slides bypasses them during presentation without deleting them."
      },
      {
        code: "5.3",
        title: "Working with Text Boxes and Fontwork",
        whatIsIt: "Text boxes allow typing text anywhere on a slide, while Fontwork provides decorative, stylized 3D curved typographical text effects (the LibreOffice equivalent of Microsoft WordArt).",
        whyImportant: "Standard slide placeholders are fixed in position. Text boxes allow custom annotations, while Fontwork creates striking visual titles and banner headlines.",
        howItWorks: "Press `F2` to activate the Text Box tool, then click and drag on the slide to type. Fontwork is launched from the Drawing toolbar to apply 3D shapes, curves, and shading to text.",
        componentsTitle: "TEXT BOX AND FONTWORK OPERATIONS",
        componentsOrTypes: [
          "Insert Text Box Shortcut: Press function key `F2` (or click the Text icon on the Standard/Drawing Toolbar).",
          "Text Formatting: Highlight text within the text box to adjust Font Face, Font Size, Bold (`Ctrl + B`), Italic (`Ctrl + I`), and Color via the Sidebar.",
          "Fontwork Gallery: Click the Fontwork icon on the Drawing toolbar (or menu `Insert -> Fontwork`). Select a 3D artistic style, double-click the sample text to type your custom title, and press `Esc` to finish.",
          "Shape Drawing Tools: The Drawing toolbar at the bottom provides Rectangles, Ellipses, Block Arrows, Callouts, and Flowchart symbols."
        ],
        practicalExample: "To create an eye-catching title for an annual sports day presentation: Click the Fontwork Gallery icon, select an arched 3D style, double-click the object, type 'ANNUAL SPORTS 2026', and press `Esc`. The text curves dynamically in 3D with colorful drop shadows.",
        importantPoints: [
          "Shortcut key to insert a Text Box in LibreOffice Impress: `F2`.",
          "Fontwork in LibreOffice is the functional equivalent of WordArt in Microsoft Office.",
          "Double-clicking a Fontwork object enables in-place text editing."
        ],
        quickRevision: "Insert Text Box = F2. Fontwork is the FOSS equivalent of WordArt for 3D curved title text. The Drawing toolbar provides arrows, banners, and flowchart shapes."
      },
      {
        code: "5.4",
        title: "Master Slides and Slide Templates",
        whatIsIt: "A Master Slide is a master architectural template that defines the universal background design, institutional logo, typography styles, and footer elements for all slides in a presentation.",
        whyImportant: "Modifying 100 slides individually to change a company logo or background color is tedious and error-prone. Editing the single Master Slide updates all 100 slides instantaneously.",
        howItWorks: "Access the Master Slide through menu `View -> Master Slide`. Any visual element placed on the Master Slide (e.g. college logo in top corner, date, slide number in footer) automatically replicates across every slide in the deck.",
        componentsTitle: "MASTER SLIDE ELEMENTS & WORKFLOW",
        componentsOrTypes: [
          "Access Master Slide: Select menu `View -> Master Slide` (or click Master Slide on the Sidebar).",
          "Close Master View: Click 'Close Master View' on the Master View toolbar (or select `View -> Normal`).",
          "Universal Elements: Place institutional logos, background gradients, copyright notices, and page number fields on the Master Slide.",
          "Slide Number Insertion: Select menu `Insert -> Header and Footer -> Slide Number` to enable dynamic slide numbering across all slides."
        ],
        practicalExample: "A university instructor wants the university crest on the top-right corner of all 50 lecture slides. The instructor opens `View -> Master Slide`, pastes the crest image into the top-right corner, and exits Master View. All 50 existing slides (and any newly created slides) now permanently display the crest.",
        importantPoints: [
          "Master Slide view is accessed via: `View -> Master Slide`.",
          "Elements placed on a Master Slide appear automatically on all slides that use that master.",
          "Master Slide ensures corporate design consistency, standard fonts, and universal footers."
        ],
        quickRevision: "Master Slide (`View -> Master Slide`) is the universal blueprint for a presentation. Adding a logo or background to the Master Slide updates all slides instantly."
      },
      {
        code: "5.5",
        title: "Slide Transitions and Object Animations",
        whatIsIt: "A **Slide Transition** is the visual motion effect that occurs when moving from one slide to the next. A **Custom Animation** is the motion effect applied to individual elements (text lines, images, shapes) within a single slide.",
        whyImportant: "Transitions maintain audience visual flow between topics, while animations reveal points step-by-step, preventing audiences from reading ahead of the speaker.",
        howItWorks: "Transitions and Animations are configured via their respective Sidebar tabs (`Slide Transition` icon and `Animation` star icon). Effects can trigger 'On click', 'With previous', or 'After previous'.",
        tableTitle: "SLIDE TRANSITION VS. CUSTOM ANIMATION",
        table: {
          headers: ["Feature / Parameter", "Slide Transition", "Custom Animation"],
          rows: [
            ["Scope of Application", "Applied to the entire slide canvas as a whole", "Applied to individual objects (text boxes, bullets, shapes, images)"],
            ["Point of Execution", "Triggers during the switch between two consecutive slides", "Triggers inside the current slide while it is being viewed"],
            ["Standard Effects", "Fade, Wipe, Push, Reveal, Bars, Wheel, Checkerboard", "Entrance, Emphasis, Exit, Motion Paths"],
            ["Configuration Panel", "Slide Transition panel on the Sidebar", "Animation panel on the Sidebar (Star icon)"]
          ],
          colWidths: [110, 195, 206]
        },
        componentsTitle: "THE 4 CATEGORIES OF CUSTOM ANIMATIONS",
        componentsOrTypes: [
          "1. Entrance Effects: Controls how an object appears onto the slide (e.g. Fly In, Fade In, Zoom In).",
          "2. Emphasis Effects: Draws audience attention to an already visible object (e.g. Spin, Grow/Shrink, Color Change).",
          "3. Exit Effects: Controls how an object leaves the slide (e.g. Fly Out, Fade Out, Disappear).",
          "4. Motion Paths: Moves an object along a designated linear or curved line trajectory across the screen."
        ],
        practicalExample: "During an oral exam lecture: Set a subtle 'Wipe Right' Slide Transition between slides. On slide 3, set an 'Entrance: Fly In' animation on each bullet point configured to trigger 'On Click'. Each bullet point flies in only when the speaker clicks the mouse.",
        importantPoints: [
          "Slide Transition applies between slides; Custom Animation applies to individual slide objects.",
          "The 4 types of animations are: Entrance, Emphasis, Exit, and Motion Paths.",
          "Transitions and Animations are configured from the Sidebar.",
          "Excessive animation should be avoided in professional presentations."
        ],
        quickRevision: "Transition = motion between slides. Animation = motion on slide objects (Entrance, Emphasis, Exit, Motion Path). Configured from the right-hand Sidebar."
      },
      {
        code: "5.6",
        title: "Running and Controlling Slide Shows",
        whatIsIt: "Running a slide show launches the presentation in full-screen presentation mode, allowing the speaker to control the progression of slides and animations using keyboard hotkeys and mouse clicks.",
        whyImportant: "Mastering slide show keyboard controls ensures seamless, professional delivery without fumbling with menus or cursor pointers during public addresses.",
        howItWorks: "Pressing `F5` starts the show from the very first slide. Pressing `Shift + F5` starts from the currently active slide. Keystrokes control navigation and screen blanking.",
        tableTitle: "SLIDE SHOW RUNNING SHORTCUTS & CONTROLS",
        table: {
          headers: ["Shortcut Key", "Action Performed during Slide Show", "Practical Presentation Scenario"],
          rows: [
            ["F5", "Starts Slide Show from the very First Slide", "Beginning the presentation from the opening title slide"],
            ["Shift + F5", "Starts Slide Show from the Current Slide", "Testing animations or resuming presentation after a break"],
            ["Spacebar / Right Arrow / Enter", "Advances to the Next slide or next animation", "Advancing through the presentation step-by-step"],
            ["Backspace / Left Arrow", "Returns to the Previous slide or animation", "Backtracking to answer an audience member's question"],
            ["Esc", "Exits the Slide Show immediately", "Terminating presentation mode to return to editing workspace"],
            ["B (or Period .)", "Toggles a completely Black blank screen", "Pausing the visual display to focus audience attention on speaker"],
            ["W (or Comma ,)", "Toggles a completely White blank screen", "Drawing on an interactive whiteboard or taking an open discussion pause"]
          ],
          colWidths: [130, 180, 201]
        },
        practicalExample: "A speaker is presenting slide 5 when an attendee asks a question that requires a 5-minute verbal explanation. To prevent the audience from being distracted by the slide graphics, the speaker presses `B` to black out the screen. Once the discussion concludes, the speaker presses `B` again to restore slide 5.",
        importantPoints: [
          "Shortcut key to start a Slide Show from the first slide: `F5`.",
          "Shortcut key to start a Slide Show from the current slide: `Shift + F5`.",
          "Shortcut key to exit a Slide Show: `Esc`.",
          "Pressing `B` during a slide show turns the screen Black; pressing `W` turns the screen White."
        ],
        quickRevision: "Start from slide 1 = F5. Start from current slide = Shift+F5. Exit = Esc. Screen blanking: B = Black screen, W = White screen. Advance = Spacebar/Arrow."
      },
      {
        code: "5.7",
        title: "Speaker Notes and Handout Printing",
        whatIsIt: "Speaker Notes are private explanatory cues visible only to the presenter, while Handouts are printed paper summaries containing multiple slide miniatures per page distributed to attendees.",
        whyImportant: "Speakers need detailed prompts without cluttering slides with excessive text. Attendees require compact printed slide summaries for review and note-taking.",
        howItWorks: "Speaker Notes are entered in 'Notes View' (`View -> Notes`). When connected to dual monitors (a projector and a laptop), Impress automatically activates the Presenter Console.",
        componentsTitle: "HANDOUT PRINTING CONFIGURATIONS",
        componentsOrTypes: [
          "Handout View: Access via menu `View -> Handout` to preview how slides will be formatted on physical paper.",
          "Supported Handout Layouts: LibreOffice Impress supports printing 1, 2, 3, 4, 6, or 9 slides per page.",
          "The 3-Slide Handout Feature: Specifically formats 3 slide thumbnails on the left side of the page with printed horizontal lined note-taking areas on the right side for attendees.",
          "Presenter Console: Displays the current slide, upcoming slide preview, elapsed presentation timer, and private speaker notes on the presenter's laptop, while the audience sees only the full-screen slide on the projector."
        ],
        practicalExample: "For a 2-hour corporate workshop: The trainer prints 3-slide handouts for all 30 attendees. The attendees follow along with the visual slide miniatures and write their own handwritten notes on the printed lines next to each slide.",
        importantPoints: [
          "Speaker Notes are entered via `View -> Notes`.",
          "Impress supports printing 1, 2, 3, 4, 6, or 9 slides per page on Handouts.",
          "The 3-slide handout layout includes horizontal lines for audience note-taking.",
          "Presenter Console allows the speaker to see notes and timers while the audience sees only the slide."
        ],
        quickRevision: "Speaker Notes (View -> Notes) guide the presenter. Handouts print 1, 2, 3 (with lines), 4, 6, or 9 slides per page for attendee review. Presenter Console operates dual screens."
      },
      {
        code: "5.8",
        title: "Shortcut Keys Master Reference for LibreOffice Impress",
        whatIsIt: "A comprehensive reference table of all standard keyboard shortcuts used in LibreOffice Impress, organized for fast review before CCC examinations.",
        whyImportant: "Mastery of presentation hotkeys ensures smooth slide show operation and top marks in NIELIT CCC examination assessments.",
        tableTitle: "COMPLETE LIBREOFFICE IMPRESS SHORTCUTS TABLE",
        table: {
          headers: ["Shortcut Key", "Command Name", "Action Performed inside LibreOffice Impress"],
          rows: [
            ["F5", "Start Show from Beginning", "Launches slide show from the very first slide"],
            ["Shift + F5", "Start Show from Current", "Launches slide show starting from the active slide"],
            ["Esc", "Exit Slide Show", "Terminates full-screen presentation mode immediately"],
            ["Ctrl + M", "New Slide", "Inserts a new blank slide into active presentation"],
            ["Ctrl + N", "New Presentation", "Creates an entirely new blank presentation file"],
            ["F2", "Text Box", "Activates the text box tool to draw text areas"],
            ["F3", "Edit Group", "Enters an object group to edit individual shapes"],
            ["Ctrl + F3", "Exit Group", "Exits the active object group"],
            ["B / .", "Black Screen", "Toggles completely black screen during slide show"],
            ["W / ,", "White Screen", "Toggles completely white screen during slide show"],
            ["Ctrl + F5", "Toggle Sidebar", "Opens or closes the collapsible properties sidebar"],
            ["Ctrl + Shift + S", "Save As", "Saves presentation under a new name or location"],
            ["Ctrl + S", "Save", "Saves current modifications to active .odp presentation"],
            ["Ctrl + P", "Print", "Opens the Print dialogue box (Slides, Handouts, Notes)"],
            ["Ctrl + Shift + O", "Print Preview", "Opens full-screen print preview mode"]
          ],
          colWidths: [110, 140, 261]
        },
        practicalExample: "During an oral presentation: Press `F5` to start. If the audience has questions on slide 4, press `Esc` to edit, make the adjustment, and press `Shift + F5` to immediately resume the slide show from slide 4.",
        importantPoints: [
          "Start from Slide 1: `F5` | Start from Current: `Shift + F5`.",
          "New Slide: `Ctrl + M` | New Presentation: `Ctrl + N`.",
          "Insert Text Box: `F2` | Toggle Sidebar: `Ctrl + F5`.",
          "Black Screen: `B` | White Screen: `W` | Exit Show: `Esc`."
        ],
        quickRevision: "Memorize Impress hotkeys: Start from slide 1 = F5, Start current = Shift+F5, Exit = Esc, New slide = Ctrl+M, Text box = F2, Black screen = B, White screen = W."
      }
    ],
    unitRevision: [
      "LibreOffice Impress defaults: Extension = `.odp`, Orientation = Landscape default, Zoom range = 5% to 3000% (highest in LibreOffice suite).",
      "Slide Manipulation: Insert New Slide = `Ctrl + M`, New Presentation = `Ctrl + N`. Duplicate Slide creates a clone; Hide Slide bypasses slide in slide show.",
      "Graphic Elements: Text Box = `F2`. Fontwork is the FOSS equivalent of Microsoft WordArt for 3D curved typography.",
      "Master Slide (`View -> Master Slide`) establishes universal background styling, logos, and footers across all slides.",
      "Slide Transition applies between slides; Custom Animation applies to individual slide objects (Entrance, Emphasis, Exit, Motion Paths).",
      "Slide Show Controls: Start from first slide = `F5`, Start from current slide = `Shift + F5`, Exit = `Esc`, Black screen = `B`, White screen = `W`.",
      "Speaker Notes are accessed via `View -> Notes`. Presenter Console displays notes and timers on dual monitors.",
      "Handouts support printing 1, 2, 3 (with note lines), 4, 6, or 9 slides per page for audience distribution."
    ],
    keyTerms: [
      { term: "ODP", fullForm: "OpenDocument Presentation", desc: "Default file extension for LibreOffice Impress presentations." },
      { term: "WIMP", fullForm: "Windows, Icons, Menus, Pointer", desc: "The graphical interface standard used throughout Impress." },
      { term: "DPI", fullForm: "Dots Per Inch", desc: "Resolution measurement applicable to printed slide handouts." },
      { term: "FOSS", fullForm: "Free and Open Source Software", desc: "Openly licensed productivity software suite (LibreOffice)." }
    ]
  };
}
