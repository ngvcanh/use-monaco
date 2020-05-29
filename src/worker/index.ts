// @ts-ignore
// import { MirrorTextModel } from 'monaco-editor/esm/vs/editor/common/model/mirrorTextModel';

// MirrorTextModel.prototype.getFullModelRange = function () {
//   return {
//     startLineNumber: 1,
//     endLineNumber: this._lines.length,
//     startColumn: 1,
//     endColumn: this._lines[this._lines.length - 1].length + 1,
//   };
// };

// @ts-ignor
// import * as workerApi from 'monaco-editor/esm/vs/editor/editor.worker';

import { BaseWorker, IWorkerContext } from './base-worker';
// import * as Comlink from 'comlink';

// import '../../node_modules/monaco-editor/esm/vs/editor/editor.worker';
import { SimpleWorkerServer } from '../../node_modules/monaco-editor/esm/vs/base/common/worker/simpleWorker.js';
import { EditorSimpleWorker } from '../../node_modules/monaco-editor/esm/vs/editor/common/services/editorSimpleWorker.js';

// console.log(SimpleWorkerServer, EditorSimpleWorker);

// console.log(self.monaco);
// interface IWorkerInitializer {
//   initialize: (
//     initalizer: (ctx: IWorkerContext, createData: any) => any
//   ) => void;
// }

const hashCode = function (s: string) {
  var hash = 0;
  if (s.length == 0) {
    return hash;
  }
  for (var i = 0; i < s.length; i++) {
    var char = s.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
};

export * from './base-worker';

declare global {
  const importScripts: any;
}

export const importScript = async (src: string) => {
  const _this = self as any;
  if (_this.define) {
    return await new Promise((resolve, reject) => {
      _this.define(`${hashCode(src)}`, [src], (val: any) => {
        resolve(val);
      });
    });
  } else {
    importScripts(src);
    // throw new Error('Not on AMD');
  }
};

var initialized = false;

export function initialize(name: string, WorkerClass: typeof BaseWorker) {
  if (initialized) {
    return;
  }
  initialized = true;
  var simpleWorker = new SimpleWorkerServer(
    function (msg) {
      console.log('here');

      //@ts-ignore
      self.postMessage(msg);
    },
    function (host) {
      return new EditorSimpleWorker(host, (ctx, options) => {
        return new WorkerClass(ctx, options);
      });
    }
  );
  self.onmessage = function (e) {
    simpleWorker.onmessage(e.data);
  };
  self[name + 'MonacoWorker'] = WorkerClass;
}

// @ts-ignore
self.initialize = initialize;
// @ts-ignore
self.BaseWorker = BaseWorker;

// self.onmessage = function (e) {
//   // Ignore first message in this case and initialize if not yet initialized
//   if (!initialized) {
//     // @ts-ignore
//     initialize(null);
//   }
// };

// // export const monacoWorker: IWorkerInitializer = workerApi;
// export const initialize = (name: string, WorkerClass: typeof BaseWorker) => {
//   // @ts-ignore
//   self[name + 'MonacoWorker'] = WorkerClass;

//   const server = new WorkerServer();

//   Comlink.expose(server);

//   // self.onmessage = () => {
//   //   try {
//   //     monacoWorker.initialize((ctx, options) => {
//   //       return new WorkerClass(ctx, options);
//   //     });
//   //   } catch (err) {
//   //     console.error(err);
//   //     throw err;
//   //   }
//   // };
// };
