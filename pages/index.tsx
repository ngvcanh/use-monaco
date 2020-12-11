import React from 'react';
<<<<<<< HEAD
import { useMonacoEditor, useEditor, useTextModel } from '../src';
import themes from '../src/themes';

import { typings, prettier } from '../src/plugins';

const defaultValue = `<body>
<div id="root"></div>
<script defer type="module">
  import {
    useMonacoEditor,
    prettier,
  } from 'https://cdn.pika.dev/use-monaco@0.0.3';
  import themes from 'https://cdn.pika.dev/use-monaco@0.0.3/themes';
  import * as React from 'https://cdn.pika.dev/react';
  import ReactDOM from 'https://cdn.pika.dev/react-dom';
  import htm from 'https://cdn.pika.dev/htm';
  const html = htm.bind(React.createElement);

  let Editor = () => {
    const { containerRef, monaco, model, loading } = useMonacoEditor({
      plugins: [prettier(['graphq'])],
      themes,
      theme: 'github',
      path: 'model.graphql',
      defaultValue: ['type Query {}'].join('\\n'),
    });

    return html\`<div
      ref=\${containerRef}
      style=\${{ height: 800, width: 600 }}
    />\`;
  };

  ReactDOM.render(html\`<\${Editor} />\`, document.getElementById('root'));
</script>
</body>
`;

const otherDefaultValue = `<body>
<div id="root"></div>
<script defer type="module">
  import {
    useMonacoEditor,
    prettier,
  } from 'https://cdn.pika.dev/use-monaco@0.0.3';
  import themes from 'https://cdn.pika.dev/use-monaco@0.0.3/themes';
  import * as React from 'https://cdn.pika.dev/react';
  import ReactDOM from 'https://cdn.pika.dev/react-dom';
  import htm from 'https://cdn.pika.dev/htm';
  const html = htm.bind(React.createElement);
=======
import { useMonacoEditor } from '../src';
import themes from '../src/themes';
import { typings } from '../src/plugins/typings';
import { prettier } from '../src/plugins/prettier';
import { graphql } from '../src/plugins/graphql';

const defaultValue = `
import {
  useMonacoEditor,
  prettier,
} from 'https://cdn.pika.dev/use-monaco@0.0.3';
import themes from 'https://cdn.pika.dev/use-monaco@0.0.3/themes';
import * as React from 'https://cdn.pika.dev/react';
import ReactDOM from 'https://cdn.pika.dev/react-dom';
import htm from 'https://cdn.pika.dev/htm';
const html = htm.bind(React.createElement);
>>>>>>> slow

let Editor = () => {
  const { containerRef, monaco, model, loading } = useMonacoEditor({
    plugins: [prettier(['graphq'])],
    themes,
    theme: 'github',
    path: 'model.graphql',
    defaultValue: ['type Query {}'].join('\n'),
  });

  return html\`<div
    ref=\${containerRef}
    style=\${{ height: 800, width: 600 }}
  />\`;
};

ReactDOM.render(html\`<\${Editor} />\`, document.getElementById('root'));

`;

let Editor = () => {
  const { containerRef, monaco, loading } = useMonacoEditor({
    paths: {
      monaco: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.20.0/min/vs',
      workers: 'http://localhost:3000/_next/static/',
    },
    themes: themes as any,
    plugins: [
      prettier(['typescript']),
      typings(),
      // graphql({
      //   uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
      // }),
    ],
    path: 'index.ts',
    language: 'typescript',
    defaultValue,
    theme: 'vs-light',
    editorDidMount: (editor, monaco) => {
      monaco.languages.typescript.loadTypes('faunadb', '2.13.0');
      monaco.languages.typescript.exposeGlobal('faunadb', 'query', 'q');
    },
  });

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <style
        // @ts-ignore
        jsx
        global
      >
        {`
          body {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont;
          }
        `}
      </style>
      <pre
        style={{ fontFamily: 'SF Mono', fontWeight: 'bold', marginLeft: 32 }}
      >
        🗒️{' '}
        <a
          href="https://github.com/nksaraf/use-monaco"
          style={{ textDecoration: 'none' }}
        >
          use-monaco
        </a>
      </pre>
      <div style={{ display: 'flex', flex: 1 }}>
        <div ref={containerRef} style={{ width: '100vw', height: '100%' }} />
      </div>
    </div>
  );
};

export default () => {
  return (
    <div>
      <Editor />
    </div>
  );
};
