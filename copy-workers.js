const shellac = require('shellac').default;
shellac`
  $ mkdir -p dist/workers
  $ mkdir -p public/workers
  $ mkdir -p dist/css
  $ cp public/style.css dist/css/style.css
  $ for x in .next/static/workers/*.monaco.worker.js;do cp $x "dist/workers/\${x##.next/static/workers/}";done
  $ for x in .next/static/workers/*.monaco.worker.js;do cp $x "public/workers/\${x##.next/static/workers/}";done
`;
