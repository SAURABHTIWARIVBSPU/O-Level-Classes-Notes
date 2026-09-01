// Pre-configured Web Designing Educational Templates for the MSITM Teacher Whiteboard
// All templates are dynamically responsive and centered relative to canvas width & height.

export const boardTemplates = [
  {
    id: 'client-server',
    title: 'Client-Server Architecture',
    description: 'Browser → HTTP Request → Web Server → Database Response Cycle',
    unit: 1,
    draw: (ctx, width, height, isDark) => {
      const textColor = isDark ? '#f8fafc' : '#0f172a';
      const subColor = isDark ? '#94a3b8' : '#64748b';
      const accent = '#0284c7';
      const green = '#10b981';
      const purple = '#a855f7';
      const cx = width / 2;

      ctx.save();
      ctx.textAlign = 'center';

      // Title
      ctx.fillStyle = textColor;
      ctx.font = 'bold 18px sans-serif';
      ctx.fillText('Client-Server Architecture (क्लाइंट-सर्वर मॉडल)', cx, 36);

      const boxW = Math.min(180, (width - 120) / 3.5);
      const boxH = 100;
      const boxY = 70;

      const clientX = cx - boxW * 1.5 - 20;
      const serverX = cx;
      const dbX = cx + boxW * 1.5 + 20;

      // 1. Client Browser Box
      ctx.fillStyle = isDark ? '#1e293b' : '#f0f9ff';
      ctx.strokeStyle = accent;
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.roundRect(clientX - boxW / 2, boxY, boxW, boxH, 8);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = accent;
      ctx.font = 'bold 14px sans-serif';
      ctx.fillText('Client (क्लाइंट)', clientX, boxY + 28);
      ctx.fillStyle = textColor;
      ctx.font = '11px sans-serif';
      ctx.fillText('Web Browser', clientX, boxY + 52);
      ctx.fillStyle = subColor;
      ctx.fillText('Chrome / Firefox / Edge', clientX, boxY + 74);

      // 2. Web Server Box
      ctx.fillStyle = isDark ? '#1e293b' : '#f0fdf4';
      ctx.strokeStyle = green;
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.roundRect(serverX - boxW / 2, boxY, boxW, boxH, 8);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = green;
      ctx.font = 'bold 14px sans-serif';
      ctx.fillText('Web Server (सर्वर)', serverX, boxY + 28);
      ctx.fillStyle = textColor;
      ctx.font = '11px sans-serif';
      ctx.fillText('Apache / Nginx / Node', serverX, boxY + 52);
      ctx.fillStyle = subColor;
      ctx.fillText('Port 80 (HTTP) / 443 (HTTPS)', serverX, boxY + 74);

      // 3. Database Box
      ctx.fillStyle = isDark ? '#1e293b' : '#faf5ff';
      ctx.strokeStyle = purple;
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.roundRect(dbX - boxW / 2, boxY, boxW, boxH, 8);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = purple;
      ctx.font = 'bold 14px sans-serif';
      ctx.fillText('Database (डेटाबेस)', dbX, boxY + 28);
      ctx.fillStyle = textColor;
      ctx.font = '11px sans-serif';
      ctx.fillText('MySQL / MongoDB', dbX, boxY + 52);
      ctx.fillStyle = subColor;
      ctx.fillText('Data Storage & Records', dbX, boxY + 74);

      // Connecting Arrows
      // Client -> Server (Request)
      ctx.strokeStyle = accent;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(clientX + boxW / 2, boxY + 35);
      ctx.lineTo(serverX - boxW / 2, boxY + 35);
      ctx.stroke();

      ctx.fillStyle = accent;
      ctx.font = 'bold 10px sans-serif';
      ctx.fillText('1. HTTP Request (GET/POST) ➔', (clientX + serverX) / 2, boxY + 25);

      // Server -> Client (Response)
      ctx.strokeStyle = green;
      ctx.beginPath();
      ctx.moveTo(serverX - boxW / 2, boxY + 70);
      ctx.lineTo(clientX + boxW / 2, boxY + 70);
      ctx.stroke();

      ctx.fillStyle = green;
      ctx.fillText('4. 200 OK (HTML/CSS/JS) ⬅', (clientX + serverX) / 2, boxY + 86);

      // Server <-> Database
      ctx.strokeStyle = purple;
      ctx.beginPath();
      ctx.moveTo(serverX + boxW / 2, boxY + 35);
      ctx.lineTo(dbX - boxW / 2, boxY + 35);
      ctx.stroke();

      ctx.fillStyle = purple;
      ctx.fillText('2. SQL Query ➔', (serverX + dbX) / 2, boxY + 25);

      ctx.beginPath();
      ctx.moveTo(dbX - boxW / 2, boxY + 70);
      ctx.lineTo(serverX + boxW / 2, boxY + 70);
      ctx.stroke();
      ctx.fillText('3. Results ⬅', (serverX + dbX) / 2, boxY + 86);

      // Bottom Key Points
      ctx.textAlign = 'left';
      ctx.fillStyle = textColor;
      ctx.font = 'bold 12px sans-serif';
      ctx.fillText('Key NIELIT Exam Takeaways:', 40, boxY + boxH + 40);

      ctx.font = '11px sans-serif';
      ctx.fillStyle = subColor;
      ctx.fillText('• Client sends request packets over TCP/IP using URL or IP Address.', 40, boxY + boxH + 62);
      ctx.fillText('• Web Server processes request and retrieves dynamic data from database storage.', 40, boxY + boxH + 82);
      ctx.fillText('• Browser renders HTML DOM tree, paints CSS styles, and runs client-side JavaScript.', 40, boxY + boxH + 102);

      ctx.restore();
    }
  },
  {
    id: 'html-dom-tree',
    title: 'HTML DOM Tree Hierarchy',
    description: 'Hierarchical node tree: <html> → <head> & <body> anatomy',
    unit: 3,
    draw: (ctx, width, height, isDark) => {
      const textColor = isDark ? '#f8fafc' : '#0f172a';
      const cx = width / 2;

      ctx.save();
      ctx.textAlign = 'center';

      ctx.fillStyle = textColor;
      ctx.font = 'bold 18px sans-serif';
      ctx.fillText('HTML Document Object Model (DOM) Tree', cx, 36);

      const drawNode = (text, x, y, w, h, bg, border, fontCol = '#ffffff') => {
        ctx.fillStyle = bg;
        ctx.strokeStyle = border;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(x - w / 2, y - h / 2, w, h, 6);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = fontCol;
        ctx.font = 'bold 12px monospace';
        ctx.fillText(text, x, y + 4);
      };

      const connect = (x1, y1, x2, y2) => {
        ctx.strokeStyle = isDark ? '#64748b' : '#94a3b8';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      };

      // Root: <html>
      drawNode('<html> (Root)', cx, 75, 140, 32, isDark ? '#0369a1' : '#e0f2fe', '#0284c7', isDark ? '#ffffff' : '#0369a1');

      // Head & Body
      const spacingX = Math.min(180, width / 4);
      connect(cx, 91, cx - spacingX, 135);
      connect(cx, 91, cx + spacingX, 135);

      drawNode('<head>', cx - spacingX, 135, 110, 30, isDark ? '#1e293b' : '#f1f5f9', '#64748b', isDark ? '#f8fafc' : '#334155');
      drawNode('<body>', cx + spacingX, 135, 110, 30, isDark ? '#14532d' : '#dcfce7', '#16a34a', isDark ? '#ffffff' : '#15803d');

      // Head children
      connect(cx - spacingX, 150, cx - spacingX - 50, 195);
      connect(cx - spacingX, 150, cx - spacingX + 50, 195);

      drawNode('<title>', cx - spacingX - 50, 195, 80, 26, isDark ? '#0f172a' : '#ffffff', '#94a3b8', isDark ? '#cbd5e1' : '#475569');
      drawNode('<meta>', cx - spacingX + 50, 195, 80, 26, isDark ? '#0f172a' : '#ffffff', '#94a3b8', isDark ? '#cbd5e1' : '#475569');

      // Body children
      connect(cx + spacingX, 150, cx + spacingX - 60, 195);
      connect(cx + spacingX, 150, cx + spacingX, 195);
      connect(cx + spacingX, 150, cx + spacingX + 60, 195);

      drawNode('<header>', cx + spacingX - 60, 195, 75, 26, isDark ? '#0f172a' : '#ffffff', '#16a34a', isDark ? '#4ade80' : '#15803d');
      drawNode('<main>', cx + spacingX, 195, 75, 26, isDark ? '#0f172a' : '#ffffff', '#16a34a', isDark ? '#4ade80' : '#15803d');
      drawNode('<footer>', cx + spacingX + 60, 195, 75, 26, isDark ? '#0f172a' : '#ffffff', '#16a34a', isDark ? '#4ade80' : '#15803d');

      // Notes
      ctx.textAlign = 'center';
      ctx.fillStyle = isDark ? '#94a3b8' : '#64748b';
      ctx.font = '11px sans-serif';
      ctx.fillText('DOM is the programmatic tree representation of HTML used by JavaScript to manipulate web pages.', cx, 260);

      ctx.restore();
    }
  },
  {
    id: 'css-box-model',
    title: 'CSS Box Model Structure',
    description: 'Concentric anatomy: Margin ➔ Border ➔ Padding ➔ Content',
    unit: 4,
    draw: (ctx, width, height, isDark) => {
      const textColor = isDark ? '#f8fafc' : '#0f172a';
      const cx = width / 2;
      const cy = height / 2 + 10;

      ctx.save();
      ctx.textAlign = 'center';

      ctx.fillStyle = textColor;
      ctx.font = 'bold 18px sans-serif';
      ctx.fillText('CSS Box Model (बॉक्स मॉडल संरचना)', cx, 36);

      // 1. Margin
      ctx.fillStyle = isDark ? 'rgba(251, 146, 60, 0.18)' : '#ffedd5';
      ctx.strokeStyle = '#ea580c';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(cx - 240, cy - 120, 480, 240, 8);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#ea580c';
      ctx.font = 'bold 12px sans-serif';
      ctx.fillText('MARGIN (बाहरी स्पेस — पारदर्शी)', cx, cy - 102);

      // 2. Border
      ctx.fillStyle = isDark ? 'rgba(234, 179, 8, 0.22)' : '#fef08a';
      ctx.strokeStyle = '#ca8a04';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.roundRect(cx - 185, cy - 82, 370, 164, 6);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#a16207';
      ctx.font = 'bold 12px sans-serif';
      ctx.fillText('BORDER (किनारा / मोटाई)', cx, cy - 66);

      // 3. Padding
      ctx.fillStyle = isDark ? 'rgba(34, 197, 94, 0.22)' : '#dcfce7';
      ctx.strokeStyle = '#16a34a';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(cx - 130, cy - 48, 260, 96, 4);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#15803d';
      ctx.font = 'bold 12px sans-serif';
      ctx.fillText('PADDING (आंतरिक स्पेस)', cx, cy - 32);

      // 4. Content
      ctx.fillStyle = isDark ? '#0284c7' : '#bae6fd';
      ctx.strokeStyle = '#0284c7';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(cx - 75, cy - 14, 150, 44, 4);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = isDark ? '#ffffff' : '#0369a1';
      ctx.font = 'bold 12px sans-serif';
      ctx.fillText('CONTENT (सामग्री)', cx, cy + 8);
      ctx.font = '10px monospace';
      ctx.fillText('Width × Height', cx, cy + 22);

      // Bottom Formula
      ctx.fillStyle = isDark ? '#cbd5e1' : '#475569';
      ctx.font = 'bold 11px sans-serif';
      ctx.fillText('Total Element Width = Width + Left/Right Padding + Left/Right Border + Left/Right Margin', cx, cy + 145);

      ctx.restore();
    }
  },
  {
    id: 'frontend-backend',
    title: 'Frontend vs Backend Architecture',
    description: 'Client browser presentation layer vs Server business logic & DB',
    unit: 1,
    draw: (ctx, width, height, isDark) => {
      const textColor = isDark ? '#f8fafc' : '#0f172a';
      const cx = width / 2;

      ctx.save();
      ctx.textAlign = 'center';

      // Title
      ctx.fillStyle = textColor;
      ctx.font = 'bold 18px sans-serif';
      ctx.fillText('Front-End vs Back-End Architecture', cx, 36);

      const colW = Math.min(260, width / 2.3);
      const colH = 200;
      const colY = 65;

      // Left Column: Frontend
      ctx.fillStyle = isDark ? '#0f172a' : '#f0f9ff';
      ctx.strokeStyle = '#0284c7';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(cx - colW - 20, colY, colW, colH, 8);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#0284c7';
      ctx.font = 'bold 15px sans-serif';
      ctx.fillText('FRONT-END (क्लाइंट-साइड)', cx - colW / 2 - 20, colY + 28);

      ctx.textAlign = 'left';
      ctx.fillStyle = textColor;
      ctx.font = '11px sans-serif';
      ctx.fillText('• उपयोगकर्ता को दिखने वाला UI/UX', cx - colW - 8, colY + 56);
      ctx.fillText('• रन होता है: Client Browser में', cx - colW - 8, colY + 78);
      ctx.font = 'bold 11px sans-serif';
      ctx.fillText('• मुख्य तकनीकें:', cx - colW - 8, colY + 104);
      ctx.font = '11px monospace';
      ctx.fillStyle = '#0284c7';
      ctx.fillText('  - HTML5 (ढांचा / Structure)', cx - colW - 8, colY + 124);
      ctx.fillText('  - CSS3 (रूप / Presentation)', cx - colW - 8, colY + 142);
      ctx.fillText('  - JavaScript (व्यवहार / Logic)', cx - colW - 8, colY + 160);
      ctx.fillText('  - W3.CSS / AngularJS', cx - colW - 8, colY + 178);

      // Right Column: Backend
      ctx.fillStyle = isDark ? '#0f172a' : '#faf5ff';
      ctx.strokeStyle = '#a855f7';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(cx + 20, colY, colW, colH, 8);
      ctx.fill();
      ctx.stroke();

      ctx.textAlign = 'center';
      ctx.fillStyle = '#a855f7';
      ctx.font = 'bold 15px sans-serif';
      ctx.fillText('BACK-END (सर्वर-साइड)', cx + colW / 2 + 20, colY + 28);

      ctx.textAlign = 'left';
      ctx.fillStyle = textColor;
      ctx.font = '11px sans-serif';
      ctx.fillText('• पर्दे के पीछे का बिजनेस लॉजिक', cx + 32, colY + 56);
      ctx.fillText('• रन होता है: Web Server में', cx + 32, colY + 78);
      ctx.font = 'bold 11px sans-serif';
      ctx.fillText('• मुख्य तकनीकें:', cx + 32, colY + 104);
      ctx.font = '11px monospace';
      ctx.fillStyle = '#a855f7';
      ctx.fillText('  - PHP / Python / Node.js', cx + 32, colY + 124);
      ctx.fillText('  - MySQL / Database Storage', cx + 32, colY + 142);
      ctx.fillText('  - Apache / Nginx Daemons', cx + 32, colY + 160);
      ctx.fillText('  - REST APIs (JSON Data)', cx + 32, colY + 178);

      // Connecting Bridge in Middle
      ctx.textAlign = 'center';
      ctx.strokeStyle = '#10b981';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(cx - 20, colY + colH / 2);
      ctx.lineTo(cx + 20, colY + colH / 2);
      ctx.stroke();

      ctx.fillStyle = '#10b981';
      ctx.font = 'bold 11px sans-serif';
      ctx.fillText('API / HTTP', cx, colY + colH / 2 - 8);

      ctx.restore();
    }
  },
  {
    id: 'js-event-flow',
    title: 'JavaScript Event Flow Cycle',
    description: '3-phase DOM event propagation: Capture ➔ Target ➔ Bubble',
    unit: 6,
    draw: (ctx, width, height, isDark) => {
      const textColor = isDark ? '#f8fafc' : '#0f172a';
      const cx = width / 2;

      ctx.save();
      ctx.textAlign = 'center';

      ctx.fillStyle = textColor;
      ctx.font = 'bold 18px sans-serif';
      ctx.fillText('JavaScript Event Flow (Event Propagation Phases)', cx, 36);

      const colW = 140;
      const colH = 90;
      const colY = 70;

      // Phase 1: Capturing
      ctx.fillStyle = isDark ? '#1e293b' : '#eff6ff';
      ctx.strokeStyle = '#3b82f6';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(cx - 190, colY, colW, colH, 8);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#3b82f6';
      ctx.font = 'bold 13px sans-serif';
      ctx.fillText('1. Capturing Phase', cx - 120, colY + 28);
      ctx.fillStyle = textColor;
      ctx.font = '10px sans-serif';
      ctx.fillText('Window ➔ Document', cx - 120, colY + 50);
      ctx.fillText('➔ Body ➔ Target Parent', cx - 120, colY + 68);

      // Phase 2: Target
      ctx.fillStyle = isDark ? '#1e293b' : '#ecfdf5';
      ctx.strokeStyle = '#10b981';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(cx - 70, colY, colW, colH, 8);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#10b981';
      ctx.font = 'bold 13px sans-serif';
      ctx.fillText('2. Target Phase', cx, colY + 28);
      ctx.fillStyle = textColor;
      ctx.font = '10px sans-serif';
      ctx.fillText('Event reaches clicked', cx, colY + 50);
      ctx.fillText('DOM Element (<button>)', cx, colY + 68);

      // Phase 3: Bubbling
      ctx.fillStyle = isDark ? '#1e293b' : '#faf5ff';
      ctx.strokeStyle = '#a855f7';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(cx + 50, colY, colW, colH, 8);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#a855f7';
      ctx.font = 'bold 13px sans-serif';
      ctx.fillText('3. Bubbling Phase', cx + 120, colY + 28);
      ctx.fillStyle = textColor;
      ctx.font = '10px sans-serif';
      ctx.fillText('Event bubbles upward', cx + 120, colY + 50);
      ctx.fillText('Target ➔ Body ➔ Window', cx + 120, colY + 68);

      // Key Takeaway
      ctx.fillStyle = isDark ? '#cbd5e1' : '#475569';
      ctx.font = '11px sans-serif';
      ctx.fillText('addEventListener(event, handler, useCapture) -> useCapture defaults to false (Bubbling).', cx, colY + colH + 40);

      ctx.restore();
    }
  },
  {
    id: 'w3css-grid-12',
    title: 'W3.CSS 12-Column Grid System',
    description: 'Responsive classes: w3-col s12 m6 l4 layout',
    unit: 5,
    draw: (ctx, width, height, isDark) => {
      const textColor = isDark ? '#f8fafc' : '#0f172a';
      const cx = width / 2;

      ctx.save();
      ctx.textAlign = 'center';

      ctx.fillStyle = textColor;
      ctx.font = 'bold 18px sans-serif';
      ctx.fillText('W3.CSS 12-Column Responsive Grid Architecture', cx, 36);

      const gridW = Math.min(560, width - 80);
      const colW = gridW / 12;
      const startX = cx - gridW / 2;

      // Draw 12 columns
      ctx.font = 'bold 10px monospace';
      for (let i = 0; i < 12; i++) {
        ctx.fillStyle = isDark ? '#1e293b' : '#f1f5f9';
        ctx.strokeStyle = '#0284c7';
        ctx.lineWidth = 1;
        ctx.fillRect(startX + i * colW, 65, colW - 2, 40);
        ctx.strokeRect(startX + i * colW, 65, colW - 2, 40);

        ctx.fillStyle = '#0284c7';
        ctx.fillText(`${i + 1}`, startX + i * colW + colW / 2 - 1, 90);
      }

      // Responsive breakdown bars
      // Row 1: w3-col s12
      ctx.fillStyle = isDark ? '#0369a1' : '#bae6fd';
      ctx.fillRect(startX, 120, gridW - 2, 28);
      ctx.fillStyle = isDark ? '#ffffff' : '#0369a1';
      ctx.font = 'bold 11px sans-serif';
      ctx.fillText('Small Screens (Mobile): .w3-col.s12 (100% width)', cx, 138);

      // Row 2: 2 x m6
      ctx.fillStyle = isDark ? '#047857' : '#a7f3d0';
      ctx.fillRect(startX, 155, gridW / 2 - 3, 28);
      ctx.fillRect(startX + gridW / 2 + 1, 155, gridW / 2 - 3, 28);
      ctx.fillStyle = isDark ? '#ffffff' : '#065f46';
      ctx.fillText('Medium: .w3-col.m6 (50%)', startX + gridW / 4, 173);
      ctx.fillText('Medium: .w3-col.m6 (50%)', startX + (3 * gridW) / 4, 173);

      // Row 3: 3 x l4
      ctx.fillStyle = isDark ? '#6b21a8' : '#e9d5ff';
      const thirdW = gridW / 3;
      ctx.fillRect(startX, 190, thirdW - 3, 28);
      ctx.fillRect(startX + thirdW + 1, 190, thirdW - 3, 28);
      ctx.fillRect(startX + 2 * thirdW + 2, 190, thirdW - 3, 28);
      ctx.fillStyle = isDark ? '#ffffff' : '#581c87';
      ctx.fillText('.w3-col.l4 (33.3%)', startX + thirdW / 2, 208);
      ctx.fillText('.w3-col.l4 (33.3%)', startX + (3 * thirdW) / 2, 208);
      ctx.fillText('.w3-col.l4 (33.3%)', startX + (5 * thirdW) / 2, 208);

      ctx.restore();
    }
  }
];
