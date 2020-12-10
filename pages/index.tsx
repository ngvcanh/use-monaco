import React from 'react';
import { useMonacoEditor, useEditor, useTextModel } from '../src';
import themes from '../src/themes';

import { typings, prettier, graphql } from '../src/plugins';

let Editor = () => {
  const { containerRef, monaco, loading } = useMonacoEditor({
    paths: {
      monaco: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.21.2/min/vs',
      workers: 'http://localhost:3000/workers/',
    },
    themes: themes as any,
    plugins: [
      prettier(['graphql']),
      typings(),
      graphql({
        uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
      }),
    ],
    defaultValue: `
    query { allFilms { edges { node { id }}} }
    
    `,
    path: 'index2.graphql',
    language: 'graphql',
    theme: 'vs-light',
    // editorDidMount: (editor, monaco) => {
    //   monaco.languages.typescript.loadTypes('faunadb', '2.13.0');
    //   monaco.languages.typescript.exposeGlobal('faunadb', 'query', 'q');
    // },
  });

  // const model = useTextModel({
  //   defaultValue: `query { allFilms { edges { node { id }}} }`,
  //   path: 'index2.graphql',
  //   language: 'graphql',
  //   monaco,
  // });

  // const { containerRef: editorRef } = useEditor({
  //   monaco,
  //   model,
  // });

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
        {/* <div ref={editorRef} style={{ width: '50vw', height: '100%' }} /> */}
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
