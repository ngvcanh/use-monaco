import { monacoPlugin } from '../../monaco';

export default ({ uri }) =>
  monacoPlugin({ name: 'graphql', dependencies: ['core.worker'] }, (monaco) => {
    return monaco.worker.register({
      label: 'graphql',
      languageId: 'graphql',
      options: {
        languageConfig: {
          schemaConfig: {
            uri,
          },
        },
      },
      src: () =>
        new Worker(
          monaco.worker.baseWorkerPath + 'graphql.monaco.worker.js'

          // 'https://5000-ed0c8379-fe8c-4547-a1eb-f34c4a98b5ca.ws-us03.gitpod.io/worker.js'
        ),
      providers: {
        hover: true,
        documentFormattingEdit: true,
        completionItem: true,
        diagnostics: true,
      },
    });
  });
