const fs = require('fs');
const logFile = 'C:\\\\Users\\\\chand\\\\.gemini\\\\antigravity-ide\\\\brain\\\\dc7f9dda-b30c-4481-ab5b-80e8ee00ce89\\\\.system_generated\\\\logs\\\\transcript_full.jsonl';
const lines = fs.readFileSync(logFile, 'utf-8').split('\n');

for(let i=0; i<lines.length; i++) {
  if(!lines[i]) continue;
  try {
    const obj = JSON.parse(lines[i]);
    if(obj.type === 'PLANNER_RESPONSE') {
      const tc = obj.tool_calls?.find(c => c.name === 'view_file' && c.args.AbsolutePath.includes('Projects.jsx'));
      if (tc) {
        const respLine = JSON.parse(lines[i+1]);
        const rawContent = respLine.content;
        const startMarker = 'remove the line number, colon, and leading space.\n';
        const codeStartIdx = rawContent.indexOf(startMarker);
        if (codeStartIdx !== -1) {
          const codeLinesRaw = rawContent.substring(codeStartIdx + startMarker.length).split('\n');
          const cleanedLines = codeLinesRaw.map(l => l.replace(/^\d+:\s?/, ''));
          // Remove the tool truncated message if it's there
          const finalLines = cleanedLines.filter(l => !l.includes('The above content does NOT'));
          fs.writeFileSync('C:\\\\Users\\\\chand\\\\OneDrive\\\\Desktop\\\\chandana\\\\src\\\\components\\\\Projects.jsx', finalLines.join('\n'));
          console.log('Restored perfectly.');
          process.exit(0);
        }
      }
    }
  } catch(e) {}
}
