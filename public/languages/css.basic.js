(()=>{var p=Object.create,o=Object.defineProperty,k=Object.getPrototypeOf,g=Object.prototype.hasOwnProperty,b=Object.getOwnPropertyNames,x=Object.getOwnPropertyDescriptor,s=e=>o(e,"__esModule",{value:!0}),m=(e,t)=>()=>(t||(t={exports:{}},e(t.exports,t)),t.exports),f=(e,t)=>{s(e);for(var n in t)o(e,n,{get:t[n],enumerable:!0})},i=(e,t,n)=>{if(s(e),t&&typeof t=="object"||typeof t=="function")for(let r of b(t))!g.call(e,r)&&r!=="default"&&o(e,r,{get:()=>t[r],enumerable:!(n=x(t,r))||n.enumerable});return e},a=e=>e&&e.__esModule?e:i(o(e!=null?p(k(e)):{},"default",{value:e,enumerable:!0}),e),l=m(y=>{i(y,a(require("monaco-editor-core")))}),u=m(v=>{f(v,{conf:()=>w,language:()=>h});var w={wordPattern:/(#?-?\d*\.\d\w*%?)|((::|[@#.!:])?[\w-?]+%?)|::|[@#.!:]/g,comments:{blockComment:["/*","*/"]},brackets:[["{","}"],["[","]"],["(",")"]],autoClosingPairs:[{open:"{",close:"}",notIn:["string","comment"]},{open:"[",close:"]",notIn:["string","comment"]},{open:"(",close:")",notIn:["string","comment"]},{open:'"',close:'"',notIn:["string","comment"]},{open:"'",close:"'",notIn:["string","comment"]}],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"}],folding:{markers:{start:new RegExp("^\\s*\\/\\*\\s*#region\\b\\s*(.*?)\\s*\\*\\/"),end:new RegExp("^\\s*\\/\\*\\s*#endregion\\b.*\\*\\/")}}},h={defaultToken:"",tokenPostfix:".css",ws:`[ 	
\r\f]*`,identifier:"-?-?([a-zA-Z]|(\\\\(([0-9a-fA-F]{1,6}\\s?)|[^[0-9a-fA-F])))([\\w\\-]|(\\\\(([0-9a-fA-F]{1,6}\\s?)|[^[0-9a-fA-F])))*",brackets:[{open:"{",close:"}",token:"delimiter.bracket"},{open:"[",close:"]",token:"delimiter.bracket"},{open:"(",close:")",token:"delimiter.parenthesis"},{open:"<",close:">",token:"delimiter.angle"}],tokenizer:{root:[{include:"@selector"}],selector:[{include:"@comments"},{include:"@import"},{include:"@strings"},["[@](keyframes|-webkit-keyframes|-moz-keyframes|-o-keyframes)",{token:"keyword",next:"@keyframedeclaration"}],["[@](page|content|font-face|-moz-document)",{token:"keyword"}],["[@](charset|namespace)",{token:"keyword",next:"@declarationbody"}],["(url-prefix)(\\()",["attribute.value",{token:"delimiter.parenthesis",next:"@urldeclaration"}]],["(url)(\\()",["attribute.value",{token:"delimiter.parenthesis",next:"@urldeclaration"}]],{include:"@selectorname"},["[\\*]","tag"],["[>\\+,]","delimiter"],["\\[",{token:"delimiter.bracket",next:"@selectorattribute"}],["{",{token:"delimiter.bracket",next:"@selectorbody"}]],selectorbody:[{include:"@comments"},["[*_]?@identifier@ws:(?=(\\s|\\d|[^{;}]*[;}]))","attribute.name","@rulevalue"],["}",{token:"delimiter.bracket",next:"@pop"}]],selectorname:[["(\\.|#(?=[^{])|%|(@identifier)|:)+","tag"]],selectorattribute:[{include:"@term"},["]",{token:"delimiter.bracket",next:"@pop"}]],term:[{include:"@comments"},["(url-prefix)(\\()",["attribute.value",{token:"delimiter.parenthesis",next:"@urldeclaration"}]],["(url)(\\()",["attribute.value",{token:"delimiter.parenthesis",next:"@urldeclaration"}]],{include:"@functioninvocation"},{include:"@numbers"},{include:"@name"},["([<>=\\+\\-\\*\\/\\^\\|\\~,])","delimiter"],[",","delimiter"]],rulevalue:[{include:"@comments"},{include:"@strings"},{include:"@term"},["!important","keyword"],[";","delimiter","@pop"],["(?=})",{token:"",next:"@pop"}]],warndebug:[["[@](warn|debug)",{token:"keyword",next:"@declarationbody"}]],import:[["[@](import)",{token:"keyword",next:"@declarationbody"}]],urldeclaration:[{include:"@strings"},[`[^)\r
]+`,"string"],["\\)",{token:"delimiter.parenthesis",next:"@pop"}]],parenthizedterm:[{include:"@term"},["\\)",{token:"delimiter.parenthesis",next:"@pop"}]],declarationbody:[{include:"@term"},[";","delimiter","@pop"],["(?=})",{token:"",next:"@pop"}]],comments:[["\\/\\*","comment","@comment"],["\\/\\/+.*","comment"]],comment:[["\\*\\/","comment","@pop"],[/[^*/]+/,"comment"],[/./,"comment"]],name:[["@identifier","attribute.value"]],numbers:[["-?(\\d*\\.)?\\d+([eE][\\-+]?\\d+)?",{token:"attribute.value.number",next:"@units"}],["#[0-9a-fA-F_]+(?!\\w)","attribute.value.hex"]],units:[["(em|ex|ch|rem|vmin|vmax|vw|vh|vm|cm|mm|in|px|pt|pc|deg|grad|rad|turn|s|ms|Hz|kHz|%)?","attribute.value.unit","@pop"]],keyframedeclaration:[["@identifier","attribute.value"],["{",{token:"delimiter.bracket",switchTo:"@keyframebody"}]],keyframebody:[{include:"@term"},["{",{token:"delimiter.bracket",next:"@selectorbody"}],["}",{token:"delimiter.bracket",next:"@pop"}]],functioninvocation:[["@identifier\\(",{token:"attribute.value",next:"@functionarguments"}]],functionarguments:[["\\$@identifier@ws:","attribute.name"],["[,]","delimiter"],{include:"@term"},["\\)",{token:"attribute.value",next:"@pop"}]],strings:[['~?"',{token:"string",next:"@stringenddoublequote"}],["~?'",{token:"string",next:"@stringendquote"}]],stringenddoublequote:[["\\\\.","string"],['"',{token:"string",next:"@pop"}],[/[^\\"]+/,"string"],[".","string"]],stringendquote:[["\\\\.","string"],["'",{token:"string",next:"@pop"}],[/[^\\']+/,"string"],[".","string"]]}}}),c=a(l());function d(e){c.languages.register(e)}d({id:"css",extensions:[".css"],aliases:["CSS","css"],mimetypes:["text/css"],loader:function(){return Promise.resolve().then(()=>a(u()))}});})();
