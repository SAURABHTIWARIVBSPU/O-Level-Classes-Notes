// Unit 7: Photo Editor - Tutorial & Textbook Grade Content for NIELIT O-Level M2-R5.1
export function getUnit7Content() {
  return {
    unitNumber: 7,
    title: "Photo Editor",
    officialSection: "16.6 (vii)",
    totalHours: 15,
    theoryHours: 6,
    practicalHours: 9,
    introduction: "A Photo Editor (such as Adobe Photoshop or GIMP) is a specialized graphic design software application used by web designers to create, manipulate, optimize, and export visual digital assets for the World Wide Web. High-quality web design requires optimizing images to balance visual fidelity against bandwidth consumption. This unit covers foundational digital imaging concepts (Raster bitmaps vs Vector graphics, Pixels, Resolution in DPI/PPI, Color Modes: RGB 3-channel screen display vs CMYK 4-channel print), Selection Tools (Rectangular/Elliptical Marquee, Lasso, Polygonal Lasso, Magnetic Lasso, Magic Wand tolerance), Paint & Drawing Tools (Brush hardness/opacity, Pencil, Gradient linear/radial, Paint Bucket, Eraser), Transform Tools (Scale, Rotate, Skew, Distort, Perspective, Flip, Crop Tool Rule of Thirds), Text Tool (Vector type layers, anti-aliasing), Layer Architecture (Stacking order, Opacity, Blend Modes, Non-destructive Layer Masks), Brightness & Contrast adjustments, Tonal Color Correction (Levels histogram, Curves, Hue/Saturation), and Photo Filters (Gaussian Blur, Unsharp Mask Sharpening, Noise reduction).",
    whatYouWillLearn: [
      "Digital imaging fundamentals: Raster bitmaps (pixels, JPEG/PNG/WebP) versus Vector graphics (mathematical paths, SVG).",
      "Resolution and color standards: Web display standard (72/96 PPI, RGB color mode) versus Print standard (300 DPI, CMYK color mode).",
      "Selection tools: Marquee (geometric shapes), Lasso tools (freehand, polygonal, magnetic edge-detection), and Magic Wand (color similarity tolerance).",
      "Painting and drawing tools: Brush tool (size, hardness, opacity), Pencil, Gradient tool (linear, radial), Paint Bucket, and Eraser.",
      "Transformation operations: Free Transform, Scale, Rotate, Skew, Distort, Perspective, Flip Horizontal/Vertical, and the Crop Tool.",
      "Typography in photo editing: Horizontal and vertical text tools, font tracking, leading, and anti-aliasing modes.",
      "The Layer Architecture: Non-destructive workflow, layer stacking hierarchy, opacity (0%-100%), blend modes, and layer masks.",
      "Tonal adjustments: Brightness/Contrast, Levels histogram (Shadows, Midtones, Highlights), Curves, and Hue/Saturation.",
      "Filter effects: Gaussian Blur (depth of field), Unsharp Mask (edge sharpening), and Add/Reduce Noise."
    ],
    topics: [
      {
        code: "7.1",
        title: "Features of Photo Editing & Image Fundamentals",
        whatIsIt: "Photo editing is the process of altering, enhancing, retouching, and optimizing digital raster photographs and graphics to prepare them for web publication.",
        whyImportant: "Websites with unoptimized, oversized images load slowly and drive away visitors. Web designers must understand image formats, resolution, and color modes to balance high visual quality with fast load times.",
        howItWorks: "Digital images are fundamentally divided into two distinct computational architectures: **Raster Bitmaps** (pixel grids) and **Vector Graphics** (mathematical formulas).",
        tableTitle: "RASTER IMAGES VS. VECTOR GRAPHICS COMPARISON",
        table: {
          headers: ["Attribute / Parameter", "Raster Bitmap Images", "Vector Graphics"],
          rows: [
            ["Underlying Composition", "A fixed grid of individual colored square pixels", "Mathematical equations defining lines, curves, anchors, fills"],
            ["Scaling & Zooming", "Pixelates, blurs, and degrades quality when enlarged", "**Resolution Independent**: Scales infinitely without quality loss"],
            ["File Size Behavior", "Proportional to pixel dimensions and resolution", "Very small file size regardless of canvas display size"],
            ["Common File Formats", "JPEG, PNG, GIF, BMP, WebP", "SVG (Scalable Vector Graphics), AI, EPS"],
            ["Best Practical Use Case", "Complex continuous-tone photographs and realistic art", "Company logos, icons, geometric UI graphics, typography"]
          ],
          colWidths: [110, 195, 201]
        },
        componentsTitle: "RESOLUTION & COLOR MODES FOR WEB VS. PRINT",
        componentsOrTypes: [
          "Pixel (Picture Element): The smallest addressable unit of color on a digital display.",
          "Resolution (DPI / PPI): Pixels Per Inch (PPI) for digital screens; Dots Per Inch (DPI) for physical printers. Web standard is **72 or 96 PPI**; Print standard is **300 DPI**.",
          "RGB Color Mode (Screen Display): Additive color model (Red, Green, Blue) with values from 0 to 255. Standard for all digital screens and web browsers.",
          "CMYK Color Mode (Physical Print): Subtractive color model (Cyan, Magenta, Yellow, blacK). Strictly used for commercial physical paper printing. Never use CMYK on the web!"
        ],
        practicalExample: "When creating an official website logo: Design it as an **SVG Vector**. It will look razor-sharp on a 4-inch smartphone screen and equally sharp on a 65-inch 4K television. In contrast, photograph banners must be compressed **JPEG or WebP** at 72 PPI.",
        importantPoints: [
          "Raster images are composed of pixels and lose quality when enlarged; Vector graphics scale infinitely.",
          "The color mode used for computer displays and websites is RGB (Red, Green, Blue).",
          "The color mode used for commercial printing is CMYK (Cyan, Magenta, Yellow, Black).",
          "Standard web resolution is 72 to 96 PPI; commercial print resolution is 300 DPI."
        ],
        quickRevision: "Raster images use pixels (JPEG/PNG, pixelate when zoomed). Vector graphics use math paths (SVG, scale infinitely). Web standard: RGB color mode, 72/96 PPI resolution."
      },
      {
        code: "7.2",
        title: "Selection Tools (Marquee, Lasso, Magic Wand)",
        whatIsIt: "Selection tools are editing instruments used to isolate and designate a specific area of an image canvas so adjustments, painting, or deletions affect ONLY the selected pixels, leaving the rest untouched.",
        whyImportant: "Photo editing requires precise targeting: removing backgrounds, changing eye color, or isolating a product from its packaging without altering the surrounding photograph.",
        howItWorks: "When a selection is active, its boundary is visually represented by an animated dashed border known as **'Marching Ants'**.",
        tableTitle: "CORE PHOTO EDITOR SELECTION TOOLS COMPARED",
        table: {
          headers: ["Selection Tool Category", "Specific Tool Name", "Selection Mechanism & How It Operates", "Best Practical Use Case"],
          rows: [
            ["Geometric Marquee", "Rectangular & Elliptical Marquee", "Draws precise geometric rectangular, square, circular, or oval selections", "Cropping banner boxes or circular profile avatars"],
            ["Freehand Lasso", "Standard Lasso Tool", "Traces freehand organic selections following the exact path of the mouse cursor", "Rough, fast outlines of irregular objects"],
            ["Polygonal Lasso", "Polygonal Lasso Tool", "Draws straight-line polygonal segments point-by-point with mouse clicks", "Selecting buildings, monitors, boxes with straight edges"],
            ["Magnetic Lasso", "Magnetic Lasso Tool", "Automatically detects and 'snaps' the selection path to high-contrast object edges", "Selecting objects with sharp contrasting backgrounds"],
            ["Color-Based", "Magic Wand Tool", "Selects all adjacent pixels sharing similar color values based on a **Tolerance** setting", "Selecting and removing solid white or single-color sky backgrounds in one click"]
          ],
          colWidths: [100, 115, 185, 106]
        },
        componentsTitle: "MAGIC WAND TOLERANCE SETTING",
        componentsOrTypes: [
          "Tolerance Value (0 to 255): Controls color sensitivity. Low tolerance (e.g. 10) selects only pixels nearly identical to the clicked point. High tolerance (e.g. 60) selects a wide range of similar shades.",
          "Contiguous Checkbox: When checked, selects only connected adjacent pixels; when unchecked, selects that color everywhere across the entire image canvas.",
          "Feathering: Softens the harsh hard edge of a selection, creating a smooth, gradual fade between the selected area and surrounding pixels."
        ],
        practicalExample: "A photographer takes a product photo against a plain white studio background. Using the **Magic Wand Tool** (Tolerance 20), they click the white background once and press `Delete`. The white background disappears instantly, leaving a transparent product image ready for an e-commerce website.",
        importantPoints: [
          "Selections isolate pixels; editing actions affect only pixels inside the 'marching ants'.",
          "The Magic Wand tool selects pixels based on color similarity.",
          "Tolerance in the Magic Wand tool determines the range of similar color shades selected.",
          "Feathering softens the transition edges of a selection."
        ],
        quickRevision: "Selection tools isolate pixels: Marquee (geometric rectangles/circles), Lasso (freehand/magnetic edge-snap), and Magic Wand (color similarity based on Tolerance)."
      },
      {
        code: "7.3",
        title: "Paint Tools (Brush, Pencil, Gradient, Paint Bucket, Eraser)",
        whatIsIt: "Paint tools are creative instruments used to apply colors, continuous tone gradients, textures, and digital ink strokes to an image canvas.",
        whyImportant: "Paint tools are used for photo retouching (removing skin blemishes, painting hair strands), creating background gradient banners, and illustrating digital web graphics.",
        howItWorks: "Paint tools deposit pixels based on the active **Foreground Color**, controlled by brush attributes such as Size, Hardness, and Opacity.",
        tableTitle: "CORE PHOTO EDITOR PAINT TOOLS REFERENCE",
        table: {
          headers: ["Paint Tool Name", "Core Operating Mechanism", "Key Adjustable Parameters", "Practical Web Design Use Case"],
          rows: [
            ["Brush Tool", "Applies smooth, anti-aliased, continuous-tone color strokes", "Size (diameter in px), Hardness (0% soft to 100% hard), Opacity", "Photo retouching, digital painting, softening shadows"],
            ["Pencil Tool", "Applies hard, non-anti-aliased, pixel-sharp jagged strokes", "Size (px), Opacity", "Pixel art, precise 1-pixel icon drafting"],
            ["Gradient Tool", "Fills a designated area with a gradual, smooth blend of two or more colors", "Type: Linear, Radial, Angle, Reflected, Diamond; Opacity", "Creating modern hero background gradients for website banners"],
            ["Paint Bucket Tool", "Fills contiguous adjacent pixels of similar color with the foreground color", "Tolerance, Opacity, Pattern fill mode", "Quickly coloring solid icon areas or background blocks"],
            ["Eraser Tool", "Deletes pixels or restores them to background color / transparency", "Size, Hardness, Opacity, Mode (Brush, Pencil, Block)", "Cleaning messy edges, erasing unwanted background artifacts"]
          ],
          colWidths: [110, 150, 120, 126]
        },
        componentsTitle: "GRADIENT TYPES & BRUSH ATTRIBUTES",
        componentsOrTypes: [
          "Linear Gradient: Blends colors in a straight directional line from starting click to ending release.",
          "Radial Gradient: Blends colors outward in a circular pattern from a central core point.",
          "Brush Hardness: 0% hardness creates an airbrush-like soft, feathered edge; 100% hardness creates a sharp, crisp edge.",
          "Foreground vs Background Color: The top color square is the Foreground (used by Brush, Pencil, Bucket); the bottom square is Background."
        ],
        practicalExample: "To create a modern website hero banner: Select the Gradient Tool, configure colors from Deep Blue to Purple, set type to **Linear Gradient**, and click-drag diagonally across the canvas. A rich color gradient fills the canvas in one stroke.",
        importantPoints: [
          "The Brush tool creates soft, anti-aliased strokes; the Pencil tool creates hard, pixelated strokes.",
          "The Gradient tool blends two or more colors smoothly (Linear, Radial).",
          "Brush Hardness controls the softness of brush stroke edges (0% to 100%).",
          "The Paint Bucket tool fills areas of similar color based on Tolerance."
        ],
        quickRevision: "Paint tools: Brush (soft strokes, adjustable hardness), Pencil (hard pixel strokes), Gradient (smooth multi-color blends: Linear/Radial), Paint Bucket (fill solid areas), and Eraser (deletes pixels)."
      },
      {
        code: "7.4",
        title: "Transform Tools (Scale, Rotate, Skew, Flip, Crop)",
        whatIsIt: "Transform tools are geometric manipulation commands used to resize, angle, slant, perspective-warp, reflect, and trim images or specific layers.",
        whyImportant: "Photographs rarely fit website layout dimensions perfectly out of the camera. Transforming aligns photos, straightens horizons, and resizes banners to exact pixel dimensions.",
        howItWorks: "Invoked via 'Free Transform' (`Ctrl + T`). A bounding box with 8 control handle points appears around the object, allowing interactive dragging to scale or rotate.",
        tableTitle: "CORE TRANSFORMATION COMMANDS REFERENCE",
        table: {
          headers: ["Transform Command", "Keyboard Shortcut / Action", "Geometric Transformation Effect", "Practical Application"],
          rows: [
            ["Free Transform", "`Ctrl + T` (Windows) / `Cmd + T`", "Activates bounding box allowing simultaneous scale, rotate, and move", "Universal starting point for adjusting layer size and orientation"],
            ["Scale", "Drag corner handles (Hold Shift to lock ratio)", "Increases or decreases width and height dimensions proportionally", "Resizing a large camera photo to fit a 300px website card"],
            ["Rotate", "Move cursor outside corner handle and drag", "Spins the element around its central anchor point at any angle", "Straightening tilted horizon lines in landscape photos"],
            ["Skew", "Hold `Ctrl` and drag side handle", "Slants the element vertically or horizontally along an axis", "Creating 3D perspective shadows or italicized typography"],
            ["Flip Horizontal", "Menu: `Edit -> Transform -> Flip Horizontal`", "Mirrors the element horizontally across the vertical axis", "Changing direction a model or car is facing (left to right)"],
            ["Flip Vertical", "Menu: `Edit -> Transform -> Flip Vertical`", "Mirrors the element upside down across the horizontal axis", "Creating realistic water puddle reflections beneath objects"],
            ["Crop Tool", "Press key `C` on keyboard", "Trims and cuts away unwanted outer margins of the whole canvas", "Changing photo aspect ratio (e.g. 16:9 banner to 1:1 square)"]
          ],
          colWidths: [100, 110, 165, 131]
        },
        componentsTitle: "THE CROP TOOL & THE RULE OF THIRDS",
        componentsOrTypes: [
          "Crop Tool (Key `C`): Permanently removes outer perimeter pixels, reducing physical image dimensions and file size.",
          "Rule of Thirds Overlay: Divides the crop grid into 3x3 equal sections. Placing focal points (like eyes or horizon) along the grid lines creates aesthetically balanced compositions.",
          "Locking Proportions: Always hold `Shift` while dragging corner handles in older editors to prevent accidental squishing or stretching of human faces."
        ],
        practicalExample: "A photographer captures an O-Level student reading a book, but the student is facing off-screen to the left: The designer applies `Edit -> Transform -> Flip Horizontal`. The photo flips like a mirror, so the student now naturally faces inward toward the website text.",
        importantPoints: [
          "Shortcut key to activate Free Transform is `Ctrl + T`.",
          "The Crop Tool trims away unwanted outer areas of the canvas.",
          "Holding `Shift` while scaling preserves the original aspect ratio (prevents distortion).",
          "Flip Horizontal mirrors an image across the vertical axis."
        ],
        quickRevision: "Transform tools (`Ctrl + T`) alter geometry: Scale (resize), Rotate (spin), Skew (slant), Flip Horizontal (mirror left-to-right), and Crop (key C, trims outer canvas)."
      },
      {
        code: "7.5",
        title: "Text Tool",
        whatIsIt: "The Text Tool (Type Tool, key **`T`**) is used to create and edit vector typography layers within an image document.",
        whyImportant: "Web banners, advertisements, and social media graphics require typography integrated with imagery for headlines, promotional badges, and calls to action.",
        howItWorks: "Clicking on the canvas creates a dedicated **Type Layer** (marked with a 'T' icon in the Layers panel). The text remains in a crisp, scalable vector format until explicitly rasterized.",
        componentsTitle: "TEXT TOOL MODES & TYPOGRAPHY ATTRIBUTES",
        componentsOrTypes: [
          "Horizontal Type Tool: Standard horizontal left-to-right text typing (most common).",
          "Vertical Type Tool: Types text vertically from top to bottom (used in Asian typography or creative vertical banners).",
          "Point Type vs Paragraph Type: Clicking once creates a single line of Point Type; clicking and dragging draws a bounding box for Paragraph Type.",
          "Leading: Vertical spacing distance between baseline rows of text lines.",
          "Tracking & Kerning: Horizontal letter spacing between characters.",
          "Anti-Aliasing: Smoothing algorithm that blends the jagged staircase edges of characters with surrounding pixels (modes: Sharp, Crisp, Strong, Smooth).",
          "Rasterize Type: Converts vector text into static bitmap pixels, allowing filter effects but disabling future text editing."
        ],
        practicalExample: "To design a '50% Off' discount badge on a promotional photo: Select the Text Tool (key `T`), choose font 'Impact' at 48pt, type '50% OFF', color it yellow, and add a drop shadow layer style. The text stays razor-sharp and editable.",
        importantPoints: [
          "The keyboard shortcut to activate the Text Tool is `T`.",
          "Text is created on a separate, dedicated Type Layer (vector format).",
          "Anti-aliasing smooths the jagged edges of text characters.",
          "Rasterizing a text layer converts vector fonts into editable pixels, but text can no longer be edited with the Text Tool."
        ],
        quickRevision: "The Text Tool (key `T`) creates vector typography layers. Anti-aliasing smooths character edges. Rasterizing text converts vector fonts into fixed pixel layers."
      },
      {
        code: "7.6",
        title: "Layers (Stacking, Opacity, Masks)",
        whatIsIt: "Layers are the fundamental organizational architecture of modern digital photo editing, conceptualized as a stack of transparent plastic acetate sheets placed on top of each other.",
        whyImportant: "Layers enable **non-destructive editing**: individual elements (background, person, text, logo) can be edited, repositioned, filtered, or hidden independently without destroying other parts of the artwork.",
        howItWorks: "The Layers panel displays the layer hierarchy. Higher layers in the stack visually cover and occlude layers beneath them, unless the higher layer has transparency or lower opacity.",
        componentsTitle: "CORE LAYER OPERATIONS & CAPABILITIES",
        componentsOrTypes: [
          "1. Layer Stacking Order: The vertical hierarchy in the Layers panel. Dragging Layer A above Layer B brings Layer A to the visual front.",
          "2. Opacity (0% to 100%): Controls layer transparency. 100% opacity is completely solid opaque; 0% opacity is completely invisible/transparent.",
          "3. Layer Visibility (Eye Icon): Clicking the small eye icon next to a layer toggles its visibility on or off without deleting the layer.",
          "4. Blend Modes: Mathematical algorithms (e.g. Multiply, Screen, Overlay) that blend the colors of a layer with the pixels on layers directly below it.",
          "5. Layer Mask (The Golden Rule of Masking): A non-destructive grayscale mask attached to a layer. **Black conceals (hides) pixels; White reveals (shows) pixels; Grey creates semi-transparency**."
        ],
        tableTitle: "THE POWER OF LAYER MASKS (NON-DESTRUCTIVE EDITING)",
        table: {
          headers: ["Editing Approach", "Action Taken to Remove Background", "Impact on Original Photo", "Ability to Undo Weeks Later"],
          rows: [
            ["Destructive Editing", "Erasing pixels with standard Eraser tool", "**Permanently destroys** original pixels from file", "Impossible to recover original pixels once file is saved and closed"],
            ["Non-Destructive Masking", "Painting with **Black** on a Layer Mask", "**Preserves 100% of original pixels** intact beneath mask", "Infinitely editable: simply paint with **White** to restore hidden pixels anytime"]
          ],
          colWidths: [110, 160, 140, 96]
        },
        practicalExample: "You mask out a model's background by painting black on a Layer Mask. Weeks later, the client requests: 'Can we bring back the model's earring that was accidentally hidden?' You simply take a white brush and paint over the earring on the mask-it instantly reappears with zero loss of original quality!",
        importantPoints: [
          "Layers are like transparent sheets stacked vertically on top of one another.",
          "Layers allow non-destructive editing: modifying one element does not affect others.",
          "The eye icon toggles layer visibility on and off.",
          "In a Layer Mask: Black hides/conceals pixels; White reveals/shows pixels.",
          "Opacity controls the overall transparency of a layer (0% to 100%)."
        ],
        quickRevision: "Layers stack like transparent sheets for non-destructive editing. Higher layers cover lower ones. Opacity controls transparency. Layer Masks: Black hides, White reveals."
      },
      {
        code: "7.7",
        title: "Brightness / Contrast",
        whatIsIt: "Brightness and Contrast are foundational tonal adjustments used to correct underexposed (too dark) or overexposed (washed out) digital photographs.",
        whyImportant: "Photographs taken in poor lighting conditions lack punch and visual clarity. Correcting brightness and contrast restores natural illumination, deepens blacks, and makes web images vibrant.",
        howItWorks: "Brightness shifts all tonal values across the entire pixel spectrum uniformly lighter or darker. Contrast expands or compresses the tonal difference between dark shadow areas and bright highlight areas.",
        componentsTitle: "BRIGHTNESS VS. CONTRAST DYNAMICS",
        componentsOrTypes: [
          "Brightness Slider (-150 to +150): Moving right shifts all pixel values higher toward white (brightening shadows and highlights together); moving left darkens all pixels.",
          "Contrast Slider (-50 to +100): Increasing contrast makes dark pixels darker and light pixels lighter, expanding visual separation and punch. Decreasing contrast flattens tones into uniform dull grey.",
          "Use Legacy Option: In Photoshop, modern algorithms prevent clipping highlights; 'Use Legacy' mimics old linear mathematical adjustments.",
          "Adjustment Layers: Always apply adjustments as an **Adjustment Layer** (`Layer -> New Adjustment Layer -> Brightness/Contrast`) so the underlying photo pixels remain untouched."
        ],
        practicalExample: "A photo of an indoor campus lab is dim and muddy: The designer creates a Brightness/Contrast Adjustment Layer, sets Brightness to `+25` and Contrast to `+15`. Shadows become rich and dark, indoor lights gleam, and text on computer screens becomes sharp and readable.",
        importantPoints: [
          "Brightness shifts overall image tonal values lighter or darker.",
          "Contrast increases or decreases the separation between dark shadows and light highlights.",
          "High contrast makes images punchy with deep blacks and bright whites; low contrast makes images flat and grey.",
          "Using Adjustment Layers ensures non-destructive tonal editing."
        ],
        quickRevision: "Brightness adjusts overall lightness. Contrast expands the difference between highlights and shadows. Always use Adjustment Layers for non-destructive editing."
      },
      {
        code: "7.8",
        title: "Improve Colors and Tone (Levels, Curves, Hue/Saturation)",
        whatIsIt: "Advanced color and tonal correction tools-specifically **Levels**, **Curves**, and **Hue/Saturation**-provide precise mathematical control over shadows, midtones, highlights, and color vibrancy.",
        whyImportant: "Simple brightness sliders adjust everything indiscriminately. Advanced tools allow brightening dim midtones without blowing out sky highlights, or correcting sickly yellow color casts.",
        howItWorks: "Levels uses a 256-level histogram with three draggable sliders. Curves maps tones along an interactive diagonal curve graph. Hue/Saturation shifts color spectrum angles.",
        tableTitle: "ADVANCED TONAL CORRECTION TOOLS COMPARED",
        table: {
          headers: ["Correction Tool", "Interface Mechanism", "What It Controls & Modifies", "Practical Problem It Solves"],
          rows: [
            ["Levels", "Histogram graph with 3 sliders: Black point, Grey gamma, White point", "Sets pure black (0), pure white (255), and midtone exposure (gamma 1.0)", "Fixing flat, washed-out photos that lack true black shadows or crisp whites"],
            ["Curves", "Diagonal 45-degree line graph plotted against an input/output grid", "Provides pinpoint non-linear curve control over specific tonal ranges", "Creating rich 'S-curves' that increase contrast in midtones while preserving highlights"],
            ["Hue / Saturation", "Color wheel sliders: Hue (angle -180 to +180), Saturation, Lightness", "Changes the actual color shade (Hue), color intensity/purity (Saturation), lightness", "Turning a red car blue, making dull green grass vibrant, or creating sepia/grayscale tones"]
          ],
          colWidths: [110, 160, 140, 96]
        },
        componentsTitle: "UNDERSTANDING HUE, SATURATION, AND LIGHTNESS (HSL)",
        componentsOrTypes: [
          "Hue: The actual pure spectral color identity (e.g. Red, Green, Blue, Orange), measured as a 360-degree angle on the color wheel.",
          "Saturation: The purity, richness, or intensity of a color (100% is vibrant neon; 0% is dull neutral monochrome grey).",
          "Lightness: The relative brightness of the color (100% is pure white; 0% is pure black).",
          "Color Cast: An unnatural tint of a particular color (e.g. blue tint under fluorescent lights) corrected via Levels color balance."
        ],
        practicalExample: "A real estate website photo has an overcast sky that makes the lawn look yellow and dull: The designer opens **Hue/Saturation**, targets 'Yellows' in the dropdown, and shifts the Hue slider toward Green and increases Saturation by `+20%`. The lawn turns lush, vibrant green instantly.",
        importantPoints: [
          "Levels uses a histogram to adjust shadows (black point), midtones (gamma), and highlights (white point).",
          "Curves provides the most precise non-linear tonal control; an 'S-Curve' increases punch and contrast.",
          "Hue is the color identity; Saturation is the color intensity/vividness; Lightness is the brightness.",
          "Setting Saturation to -100% converts a photo into pure black and white (grayscale)."
        ],
        quickRevision: "Tone correction: Levels uses histogram sliders (shadows/midtones/highlights). Curves gives pinpoint graph control. Hue (color shade), Saturation (vividness), Lightness (brightness)."
      },
      {
        code: "7.9",
        title: "Filters (Blur, Sharpen, Noise)",
        whatIsIt: "Filters are automated mathematical algorithms applied to pixel arrays to produce special artistic effects, simulate camera optical physics, smooth textures, or repair image flaws.",
        whyImportant: "Filters allow web designers to create depth-of-field background blurs for hero banners, restore crisp edge definition to softened photos, and remove sensor grain.",
        howItWorks: "A filter applies a convolution matrix algorithm to calculate new values for each pixel based on the color values of neighboring pixels.",
        tableTitle: "CORE PHOTO EDITOR FILTER CATEGORIES",
        table: {
          headers: ["Filter Category", "Representative Filter Names", "Mathematical Action on Pixels", "Practical Web Design Use Case"],
          rows: [
            ["Blur Filters", "Gaussian Blur, Motion Blur, Radial Blur", "Averages adjacent pixel color values, smoothing out transitions and details", "Blurring busy background photos so foreground text remains 100% legible"],
            ["Sharpen Filters", "Unsharp Mask, Smart Sharpen", "Increases high-frequency contrast along pixel boundary edges", "Crispening slightly softened camera portraits and product edges"],
            ["Noise Filters", "Add Noise, Despeckle, Reduce Noise", "Injects random pixel variations or analyzes and removes grain artifacts", "Removing ISO grain from night camera photos; adding subtle texture to flat vector cards"]
          ],
          colWidths: [110, 160, 140, 96]
        },
        componentsTitle: "SMART FILTERS (NON-DESTRUCTIVE FILTERING)",
        componentsOrTypes: [
          "Destructive Filters: Applying a filter directly to a raster layer permanently alters the pixels.",
          "Smart Filters: First convert the layer into a **Smart Object** (`Layer -> Smart Objects -> Convert to Smart Object`). Any applied filter becomes a 'Smart Filter', allowing developers to re-open the dialog, adjust blur radius, or turn the filter off at any time.",
          "Gaussian Blur Radius: Measured in pixels. A small radius (1-2px) softens fine skin texture; a large radius (15-25px) creates a dreamy, abstract blurred background."
        ],
        practicalExample: "For a website hero banner with white text on top of an office photo: The photo is so busy that white text is unreadable. The designer applies **Gaussian Blur** (Radius 12px) to the photo. The office becomes a smooth, elegant abstract backdrop, and the white headline stands out with razor-sharp contrast.",
        importantPoints: [
          "Gaussian Blur is the most commonly used blur filter for creating depth of field and soft backgrounds.",
          "Unsharp Mask sharpens images by increasing edge contrast along pixel borders.",
          "Noise filters can add artistic grain or eliminate digital ISO camera sensor noise.",
          "Applying filters to Smart Objects creates non-destructive Smart Filters that can be edited or disabled anytime."
        ],
        quickRevision: "Filters: Gaussian Blur (smooths pixels, creates soft backgrounds), Sharpen/Unsharp Mask (increases edge contrast for crispness), and Noise (adds texture or removes camera sensor grain)."
      }
    ],
    unitRevision: [
      "Raster images are composed of pixel grids (JPEG/PNG/WebP, lose quality when scaled); Vector graphics use math paths (SVG, scale infinitely).",
      "Web resolution standard is 72 to 96 PPI in RGB color mode; Print standard is 300 DPI in CMYK color mode.",
      "Selection tools isolate pixels: Marquee (geometric rectangles/circles), Lasso (freehand/magnetic edge-snap), and Magic Wand (color similarity based on Tolerance).",
      "Paint tools: Brush (soft continuous strokes, adjustable hardness), Pencil (hard pixel strokes), Gradient (smooth multi-color blends: Linear/Radial), Paint Bucket, and Eraser.",
      "Transform tools (`Ctrl + T`) alter geometry: Scale, Rotate, Skew, Flip Horizontal (mirror), and the Crop Tool (key C, trims canvas).",
      "The Text Tool (key `T`) creates vector typography layers; anti-aliasing smooths character edges.",
      "Layers enable non-destructive editing like stacked transparent sheets. Opacity sets transparency (0%-100%). In Layer Masks: Black hides, White reveals.",
      "Brightness shifts overall illumination; Contrast expands the separation between dark shadows and light highlights.",
      "Levels uses a 256-level histogram (shadows, midtones, highlights); Curves provides non-linear graph control (S-curve); Hue (color), Saturation (intensity), Lightness (brightness).",
      "Filters: Gaussian Blur (softens and blurs backgrounds), Unsharp Mask (sharpens edge contrast), and Noise (adds texture or removes sensor grain)."
    ],
    keyTerms: [
      { term: "PPI", fullForm: "Pixels Per Inch", desc: "Measurement of pixel density on digital screen displays." },
      { term: "DPI", fullForm: "Dots Per Inch", desc: "Measurement of ink dot density in physical commercial printing." },
      { term: "RGB", fullForm: "Red, Green, Blue", desc: "Additive color model used exclusively for computer monitors and digital displays." },
      { term: "CMYK", fullForm: "Cyan, Magenta, Yellow, Key (Black)", desc: "Subtractive color model used exclusively for physical color printing." },
      { term: "SVG", fullForm: "Scalable Vector Graphics", desc: "XML-based resolution-independent vector image format for the web." },
      { term: "HSL", fullForm: "Hue, Saturation, Lightness", desc: "Cylindrical-coordinate representation of points in an RGB color model." }
    ]
  };
}
