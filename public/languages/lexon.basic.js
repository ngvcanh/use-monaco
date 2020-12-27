(()=>{var u=Object.create,r=Object.defineProperty,k=Object.getPrototypeOf,f=Object.prototype.hasOwnProperty,x=Object.getOwnPropertyNames,b=Object.getOwnPropertyDescriptor,d=e=>r(e,"__esModule",{value:!0}),a=(e,t)=>()=>(t||(t={exports:{}},e(t.exports,t)),t.exports),g=(e,t)=>{d(e);for(var o in t)r(e,o,{get:t[o],enumerable:!0})},n=(e,t,o)=>{if(d(e),t&&typeof t=="object"||typeof t=="function")for(let i of x(t))!f.call(e,i)&&i!=="default"&&r(e,i,{get:()=>t[i],enumerable:!(o=b(t,i))||o.enumerable});return e},s=e=>e&&e.__esModule?e:n(r(e!=null?u(k(e)):{},"default",{value:e,enumerable:!0}),e),l=a(y=>{n(y,s(require("monaco-editor-core")))}),m=a(w=>{g(w,{conf:()=>_,language:()=>v});var _={comments:{lineComment:"COMMENT"},brackets:[["(",")"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:":",close:"."}],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:"`",close:"`"},{open:'"',close:'"'},{open:"'",close:"'"},{open:":",close:"."}],folding:{markers:{start:new RegExp("^\\s*(::\\s*|COMMENT\\s+)#region"),end:new RegExp("^\\s*(::\\s*|COMMENT\\s+)#endregion")}}},v={tokenPostfix:".lexon",ignoreCase:!0,keywords:["lexon","lex","clause","terms","contracts","may","pay","pays","appoints","into","to"],typeKeywords:["amount","person","key","time","date","asset","text"],operators:["less","greater","equal","le","gt","or","and","add","added","subtract","subtracted","multiply","multiplied","times","divide","divided","is","be","certified"],symbols:/[=><!~?:&|+\-*\/\^%]+/,tokenizer:{root:[[/^(\s*)(comment:?(?:\s.*|))$/,["","comment"]],[/"/,{token:"identifier.quote",bracket:"@open",next:"@quoted_identifier"}],["LEX$",{token:"keyword",bracket:"@open",next:"@identifier_until_period"}],["LEXON",{token:"keyword",bracket:"@open",next:"@semver"}],[":",{token:"delimiter",bracket:"@open",next:"@identifier_until_period"}],[/[a-z_$][\w$]*/,{cases:{"@operators":"operator","@typeKeywords":"keyword.type","@keywords":"keyword","@default":"identifier"}}],{include:"@whitespace"},[/[{}()\[\]]/,"@brackets"],[/[<>](?!@symbols)/,"@brackets"],[/@symbols/,"delimiter"],[/\d*\.\d*\.\d*/,"number.semver"],[/\d*\.\d+([eE][\-+]?\d+)?/,"number.float"],[/0[xX][0-9a-fA-F]+/,"number.hex"],[/\d+/,"number"],[/[;,.]/,"delimiter"]],quoted_identifier:[[/[^\\"]+/,"identifier"],[/"/,{token:"identifier.quote",bracket:"@close",next:"@pop"}]],space_identifier_until_period:[[":","delimiter"],[" ",{token:"white",next:"@identifier_rest"}]],identifier_until_period:[{include:"@whitespace"},[":",{token:"delimiter",next:"@identifier_rest"}],[/[^\\.]+/,"identifier"],[/\./,{token:"delimiter",bracket:"@close",next:"@pop"}]],identifier_rest:[[/[^\\.]+/,"identifier"],[/\./,{token:"delimiter",bracket:"@close",next:"@pop"}]],semver:[{include:"@whitespace"},[":","delimiter"],[/\d*\.\d*\.\d*/,{token:"number.semver",bracket:"@close",next:"@pop"}]],whitespace:[[/[ \t\r\n]+/,"white"]]}}}),p=s(l());function c(e){p.languages.register(e)}c({id:"lexon",extensions:[".lex"],aliases:["Lexon"],loader:function(){return Promise.resolve().then(()=>s(m()))}});})();