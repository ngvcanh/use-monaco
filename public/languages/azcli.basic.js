(()=>{var d=Object.create,i=Object.defineProperty,k=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,g=Object.getOwnPropertyNames,x=Object.getOwnPropertyDescriptor,a=e=>i(e,"__esModule",{value:!0}),l=(e,t)=>()=>(t||(t={exports:{}},e(t.exports,t)),t.exports),y=(e,t)=>{a(e);for(var o in t)i(e,o,{get:t[o],enumerable:!0})},r=(e,t,o)=>{if(a(e),t&&typeof t=="object"||typeof t=="function")for(let n of g(t))!u.call(e,n)&&n!=="default"&&i(e,n,{get:()=>t[n],enumerable:!(o=x(t,n))||o.enumerable});return e},s=e=>e&&e.__esModule?e:r(i(e!=null?d(k(e)):{},"default",{value:e,enumerable:!0}),e),c=l(z=>{r(z,s(require("monaco-editor-core")))}),f=l(C=>{y(C,{conf:()=>L,language:()=>v});var L={comments:{lineComment:"#"}},v={defaultToken:"keyword",ignoreCase:!0,tokenPostfix:".azcli",str:/[^#\s]/,tokenizer:{root:[{include:"@comment"},[/\s-+@str*\s*/,{cases:{"@eos":{token:"key.identifier",next:"@popall"},"@default":{token:"key.identifier",next:"@type"}}}],[/^-+@str*\s*/,{cases:{"@eos":{token:"key.identifier",next:"@popall"},"@default":{token:"key.identifier",next:"@type"}}}]],type:[{include:"@comment"},[/-+@str*\s*/,{cases:{"@eos":{token:"key.identifier",next:"@popall"},"@default":"key.identifier"}}],[/@str+\s*/,{cases:{"@eos":{token:"string",next:"@popall"},"@default":"string"}}]],comment:[[/#.*$/,{cases:{"@eos":{token:"comment",next:"@popall"}}}]]}}}),m=s(c());function p(e){m.languages.register(e)}p({id:"azcli",extensions:[".azcli"],aliases:["Azure CLI","azcli"],loader:function(){return Promise.resolve().then(()=>s(f()))}});})();
