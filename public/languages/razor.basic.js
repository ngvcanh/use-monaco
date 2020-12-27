(()=>{var b=Object.create,i=Object.defineProperty,k=Object.getPrototypeOf,x=Object.prototype.hasOwnProperty,y=Object.getOwnPropertyNames,T=Object.getOwnPropertyDescriptor,c=e=>i(e,"__esModule",{value:!0}),l=(e,t)=>()=>(t||(t={exports:{}},e(t.exports,t)),t.exports),w=(e,t)=>{c(e);for(var r in t)i(e,r,{get:t[r],enumerable:!0})},n=(e,t,r)=>{if(c(e),t&&typeof t=="object"||typeof t=="function")for(let o of y(t))!x.call(e,o)&&o!=="default"&&i(e,o,{get:()=>t[o],enumerable:!(r=T(t,o))||r.enumerable});return e},m=e=>e&&e.__esModule?e:n(i(e!=null?b(k(e)):{},"default",{value:e,enumerable:!0}),e),a=l(f=>{n(f,m(require("monaco-editor-core")))}),u=l(g=>{w(g,{conf:()=>S,language:()=>E});var s=m(a()),h=["area","base","br","col","embed","hr","img","input","keygen","link","menuitem","meta","param","source","track","wbr"],S={wordPattern:/(-?\d*\.\d\w*)|([^\`\~\!\@\$\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\s]+)/g,comments:{blockComment:["<!--","-->"]},brackets:[["<!--","-->"],["<",">"],["{","}"],["(",")"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"}],surroundingPairs:[{open:'"',close:'"'},{open:"'",close:"'"},{open:"<",close:">"}],onEnterRules:[{beforeText:new RegExp("<(?!(?:"+h.join("|")+"))(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$","i"),afterText:/^<\/(\w[\w\d]*)\s*>$/i,action:{indentAction:s.languages.IndentAction.IndentOutdent}},{beforeText:new RegExp("<(?!(?:"+h.join("|")+"))(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$","i"),action:{indentAction:s.languages.IndentAction.Indent}}]},E={defaultToken:"",tokenPostfix:"",tokenizer:{root:[[/@@/],[/@[^@]/,{token:"@rematch",switchTo:"@razorInSimpleState.root"}],[/<!DOCTYPE/,"metatag.html","@doctype"],[/<!--/,"comment.html","@comment"],[/(<)(\w+)(\/>)/,["delimiter.html","tag.html","delimiter.html"]],[/(<)(script)/,["delimiter.html",{token:"tag.html",next:"@script"}]],[/(<)(style)/,["delimiter.html",{token:"tag.html",next:"@style"}]],[/(<)([:\w]+)/,["delimiter.html",{token:"tag.html",next:"@otherTag"}]],[/(<\/)(\w+)/,["delimiter.html",{token:"tag.html",next:"@otherTag"}]],[/</,"delimiter.html"],[/[ \t\r\n]+/],[/[^<@]+/]],doctype:[[/@[^@]/,{token:"@rematch",switchTo:"@razorInSimpleState.comment"}],[/[^>]+/,"metatag.content.html"],[/>/,"metatag.html","@pop"]],comment:[[/@[^@]/,{token:"@rematch",switchTo:"@razorInSimpleState.comment"}],[/-->/,"comment.html","@pop"],[/[^-]+/,"comment.content.html"],[/./,"comment.content.html"]],otherTag:[[/@[^@]/,{token:"@rematch",switchTo:"@razorInSimpleState.otherTag"}],[/\/?>/,"delimiter.html","@pop"],[/"([^"]*)"/,"attribute.value"],[/'([^']*)'/,"attribute.value"],[/[\w\-]+/,"attribute.name"],[/=/,"delimiter"],[/[ \t\r\n]+/]],script:[[/@[^@]/,{token:"@rematch",switchTo:"@razorInSimpleState.script"}],[/type/,"attribute.name","@scriptAfterType"],[/"([^"]*)"/,"attribute.value"],[/'([^']*)'/,"attribute.value"],[/[\w\-]+/,"attribute.name"],[/=/,"delimiter"],[/>/,{token:"delimiter.html",next:"@scriptEmbedded.text/javascript",nextEmbedded:"text/javascript"}],[/[ \t\r\n]+/],[/(<\/)(script\s*)(>)/,["delimiter.html","tag.html",{token:"delimiter.html",next:"@pop"}]]],scriptAfterType:[[/@[^@]/,{token:"@rematch",switchTo:"@razorInSimpleState.scriptAfterType"}],[/=/,"delimiter","@scriptAfterTypeEquals"],[/>/,{token:"delimiter.html",next:"@scriptEmbedded.text/javascript",nextEmbedded:"text/javascript"}],[/[ \t\r\n]+/],[/<\/script\s*>/,{token:"@rematch",next:"@pop"}]],scriptAfterTypeEquals:[[/@[^@]/,{token:"@rematch",switchTo:"@razorInSimpleState.scriptAfterTypeEquals"}],[/"([^"]*)"/,{token:"attribute.value",switchTo:"@scriptWithCustomType.$1"}],[/'([^']*)'/,{token:"attribute.value",switchTo:"@scriptWithCustomType.$1"}],[/>/,{token:"delimiter.html",next:"@scriptEmbedded.text/javascript",nextEmbedded:"text/javascript"}],[/[ \t\r\n]+/],[/<\/script\s*>/,{token:"@rematch",next:"@pop"}]],scriptWithCustomType:[[/@[^@]/,{token:"@rematch",switchTo:"@razorInSimpleState.scriptWithCustomType.$S2"}],[/>/,{token:"delimiter.html",next:"@scriptEmbedded.$S2",nextEmbedded:"$S2"}],[/"([^"]*)"/,"attribute.value"],[/'([^']*)'/,"attribute.value"],[/[\w\-]+/,"attribute.name"],[/=/,"delimiter"],[/[ \t\r\n]+/],[/<\/script\s*>/,{token:"@rematch",next:"@pop"}]],scriptEmbedded:[[/@[^@]/,{token:"@rematch",switchTo:"@razorInEmbeddedState.scriptEmbedded.$S2",nextEmbedded:"@pop"}],[/<\/script/,{token:"@rematch",next:"@pop",nextEmbedded:"@pop"}]],style:[[/@[^@]/,{token:"@rematch",switchTo:"@razorInSimpleState.style"}],[/type/,"attribute.name","@styleAfterType"],[/"([^"]*)"/,"attribute.value"],[/'([^']*)'/,"attribute.value"],[/[\w\-]+/,"attribute.name"],[/=/,"delimiter"],[/>/,{token:"delimiter.html",next:"@styleEmbedded.text/css",nextEmbedded:"text/css"}],[/[ \t\r\n]+/],[/(<\/)(style\s*)(>)/,["delimiter.html","tag.html",{token:"delimiter.html",next:"@pop"}]]],styleAfterType:[[/@[^@]/,{token:"@rematch",switchTo:"@razorInSimpleState.styleAfterType"}],[/=/,"delimiter","@styleAfterTypeEquals"],[/>/,{token:"delimiter.html",next:"@styleEmbedded.text/css",nextEmbedded:"text/css"}],[/[ \t\r\n]+/],[/<\/style\s*>/,{token:"@rematch",next:"@pop"}]],styleAfterTypeEquals:[[/@[^@]/,{token:"@rematch",switchTo:"@razorInSimpleState.styleAfterTypeEquals"}],[/"([^"]*)"/,{token:"attribute.value",switchTo:"@styleWithCustomType.$1"}],[/'([^']*)'/,{token:"attribute.value",switchTo:"@styleWithCustomType.$1"}],[/>/,{token:"delimiter.html",next:"@styleEmbedded.text/css",nextEmbedded:"text/css"}],[/[ \t\r\n]+/],[/<\/style\s*>/,{token:"@rematch",next:"@pop"}]],styleWithCustomType:[[/@[^@]/,{token:"@rematch",switchTo:"@razorInSimpleState.styleWithCustomType.$S2"}],[/>/,{token:"delimiter.html",next:"@styleEmbedded.$S2",nextEmbedded:"$S2"}],[/"([^"]*)"/,"attribute.value"],[/'([^']*)'/,"attribute.value"],[/[\w\-]+/,"attribute.name"],[/=/,"delimiter"],[/[ \t\r\n]+/],[/<\/style\s*>/,{token:"@rematch",next:"@pop"}]],styleEmbedded:[[/@[^@]/,{token:"@rematch",switchTo:"@razorInEmbeddedState.styleEmbedded.$S2",nextEmbedded:"@pop"}],[/<\/style/,{token:"@rematch",next:"@pop",nextEmbedded:"@pop"}]],razorInSimpleState:[[/@\*/,"comment.cs","@razorBlockCommentTopLevel"],[/@[{(]/,"metatag.cs","@razorRootTopLevel"],[/(@)(\s*[\w]+)/,["metatag.cs",{token:"identifier.cs",switchTo:"@$S2.$S3"}]],[/[})]/,{token:"metatag.cs",switchTo:"@$S2.$S3"}],[/\*@/,{token:"comment.cs",switchTo:"@$S2.$S3"}]],razorInEmbeddedState:[[/@\*/,"comment.cs","@razorBlockCommentTopLevel"],[/@[{(]/,"metatag.cs","@razorRootTopLevel"],[/(@)(\s*[\w]+)/,["metatag.cs",{token:"identifier.cs",switchTo:"@$S2.$S3",nextEmbedded:"$S3"}]],[/[})]/,{token:"metatag.cs",switchTo:"@$S2.$S3",nextEmbedded:"$S3"}],[/\*@/,{token:"comment.cs",switchTo:"@$S2.$S3",nextEmbedded:"$S3"}]],razorBlockCommentTopLevel:[[/\*@/,"@rematch","@pop"],[/[^*]+/,"comment.cs"],[/./,"comment.cs"]],razorBlockComment:[[/\*@/,"comment.cs","@pop"],[/[^*]+/,"comment.cs"],[/./,"comment.cs"]],razorRootTopLevel:[[/\{/,"delimiter.bracket.cs","@razorRoot"],[/\(/,"delimiter.parenthesis.cs","@razorRoot"],[/[})]/,"@rematch","@pop"],{include:"razorCommon"}],razorRoot:[[/\{/,"delimiter.bracket.cs","@razorRoot"],[/\(/,"delimiter.parenthesis.cs","@razorRoot"],[/\}/,"delimiter.bracket.cs","@pop"],[/\)/,"delimiter.parenthesis.cs","@pop"],{include:"razorCommon"}],razorCommon:[[/[a-zA-Z_]\w*/,{cases:{"@razorKeywords":{token:"keyword.cs"},"@default":"identifier.cs"}}],[/[\[\]]/,"delimiter.array.cs"],[/[ \t\r\n]+/],[/\/\/.*$/,"comment.cs"],[/@\*/,"comment.cs","@razorBlockComment"],[/"([^"]*)"/,"string.cs"],[/'([^']*)'/,"string.cs"],[/(<)(\w+)(\/>)/,["delimiter.html","tag.html","delimiter.html"]],[/(<)(\w+)(>)/,["delimiter.html","tag.html","delimiter.html"]],[/(<\/)(\w+)(>)/,["delimiter.html","tag.html","delimiter.html"]],[/[\+\-\*\%\&\|\^\~\!\=\<\>\/\?\;\:\.\,]/,"delimiter.cs"],[/\d*\d+[eE]([\-+]?\d+)?/,"number.float.cs"],[/\d*\.\d+([eE][\-+]?\d+)?/,"number.float.cs"],[/0[xX][0-9a-fA-F']*[0-9a-fA-F]/,"number.hex.cs"],[/0[0-7']*[0-7]/,"number.octal.cs"],[/0[bB][0-1']*[0-1]/,"number.binary.cs"],[/\d[\d']*/,"number.cs"],[/\d/,"number.cs"]]},razorKeywords:["abstract","as","async","await","base","bool","break","by","byte","case","catch","char","checked","class","const","continue","decimal","default","delegate","do","double","descending","explicit","event","extern","else","enum","false","finally","fixed","float","for","foreach","from","goto","group","if","implicit","in","int","interface","internal","into","is","lock","long","nameof","new","null","namespace","object","operator","out","override","orderby","params","private","protected","public","readonly","ref","return","switch","struct","sbyte","sealed","short","sizeof","stackalloc","static","string","select","this","throw","true","try","typeof","uint","ulong","unchecked","unsafe","ushort","using","var","virtual","volatile","void","when","while","where","yield","model","inject"],escapes:/\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/}}),d=m(a());function p(e){d.languages.register(e)}p({id:"razor",extensions:[".cshtml"],aliases:["Razor","razor"],mimetypes:["text/x-cshtml"],loader:function(){return Promise.resolve().then(()=>m(u()))}});})();