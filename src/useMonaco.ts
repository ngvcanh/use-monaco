import { useEffect } from 'react';
import React from 'react';
import type * as monacoApi from 'monaco-editor';
import addons, { compose, monacoPlugin } from './monaco';
import { asDisposable, noop } from './monaco/utils';
import loadMonaco from './monaco';

import themePlugin from './plugins/theme';
import editorPlugin from './plugins/shortcuts';
import workerPlugin from './plugins/worker';
import languagePlugin from './plugins/languages';

export interface UseMonacoOptions {
  paths?: {
    monaco?: string;
    workers?: string;
  };
  onLoad?: (
    monaco: typeof monacoApi
  ) => monacoApi.IDisposable | monacoApi.IDisposable[] | undefined;
  plugins?: monacoApi.plugin.IPlugin[];
  onThemeChange?: (theme: string, monaco: typeof monacoApi) => void;
  themes?: { [key: string]: monacoApi.editor.IStandaloneThemeData | any };
  theme?: string | monacoApi.editor.IStandaloneThemeData;
}

export const useMonaco = ({
  paths,
  onLoad = noop,
  themes = {},
  theme = 'vs-dark',
  onThemeChange = noop,
  plugins = [],
}: UseMonacoOptions = {}) => {
  const [monaco, setMonaco] = React.useState<null | typeof monacoApi>(null);

  useEffect(() => {
    console.log(plugins);
    const cancelable = loadMonaco(paths.monaco, [
      workerPlugin(paths.workers),
      languagePlugin,
      editorPlugin,
      themePlugin({ themes, onThemeChange }),
      ...plugins,
    ]);
    cancelable
      .then((monaco) => {
        setMonaco(monaco);
      })
      .catch((error) =>
        console.error(
          'An error occurred during initialization of Monaco:',
          error
        )
      );
    return;
  }, []);

  useEffect(() => {
    const disposable = asDisposable(onLoad(monaco));
    return disposable.dispose;
  }, [monaco]);

  React.useEffect(() => {
    if (monaco) monaco.editor.setTheme(theme);
  }, [monaco, theme]);

  return {
    monaco,
    loading: Boolean(monaco),
  };
};
