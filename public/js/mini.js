(function(n){typeof define=="function"&&define.amd?define(n):n()})(function(){"use strict";var _=Object.defineProperty;var A=(n,t,i)=>t in n?_(n,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[t]=i;var S=(n,t,i)=>(A(n,typeof t!="symbol"?t+"":t,i),i);function getDefaultExportFromCjs(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Identifier,JSXIdentifier,JSXPunctuator,JSXString,JSXText,KeywordsWithExpressionAfter,KeywordsWithNoLineTerminatorAfter,LineTerminatorSequence,MultiLineComment,Newline,NumericLiteral,Punctuator,RegularExpressionLiteral,SingleLineComment,StringLiteral,Template,TokensNotPrecedingObjectLiteral,TokensPrecedingExpression,WhiteSpace;RegularExpressionLiteral=/\/(?![*\/])(?:\[(?:(?![\]\\]).|\\.)*\]|(?![\/\\]).|\\.)*(\/[$_\u200C\u200D\p{ID_Continue}]*|\\)?/yu,Punctuator=/--|\+\+|=>|\.{3}|\??\.(?!\d)|(?:&&|\|\||\?\?|[+\-%&|^]|\*{1,2}|<{1,2}|>{1,3}|!=?|={1,2}|\/(?![\/*]))=?|[?~,:;[\](){}]/y,Identifier=/(\x23?)(?=[$_\p{ID_Start}\\])(?:[$_\u200C\u200D\p{ID_Continue}]|\\u[\da-fA-F]{4}|\\u\{[\da-fA-F]+\})+/yu,StringLiteral=/(['"])(?:(?!\1)[^\\\n\r]|\\(?:\r\n|[^]))*(\1)?/y,NumericLiteral=/(?:0[xX][\da-fA-F](?:_?[\da-fA-F])*|0[oO][0-7](?:_?[0-7])*|0[bB][01](?:_?[01])*)n?|0n|[1-9](?:_?\d)*n|(?:(?:0(?!\d)|0\d*[89]\d*|[1-9](?:_?\d)*)(?:\.(?:\d(?:_?\d)*)?)?|\.\d(?:_?\d)*)(?:[eE][+-]?\d(?:_?\d)*)?|0[0-7]+/y,Template=/[`}](?:[^`\\$]|\\[^]|\$(?!\{))*(`|\$\{)?/y,WhiteSpace=/[\t\v\f\ufeff\p{Zs}]+/yu,LineTerminatorSequence=/\r?\n|[\r\u2028\u2029]/y,MultiLineComment=/\/\*(?:[^*]|\*(?!\/))*(\*\/)?/y,SingleLineComment=/\/\/.*/y,JSXPunctuator=/[<>.:={}]|\/(?![\/*])/y,JSXIdentifier=/[$_\p{ID_Start}][$_\u200C\u200D\p{ID_Continue}-]*/yu,JSXString=/(['"])(?:(?!\1)[^])*(\1)?/y,JSXText=/[^<>{}]+/y,TokensPrecedingExpression=/^(?:[\/+-]|\.{3}|\?(?:InterpolationIn(?:JSX|Template)|NoLineTerminatorHere|NonExpressionParenEnd|UnaryIncDec))?$|[{}([,;<>=*%&|^!~?:]$/,TokensNotPrecedingObjectLiteral=/^(?:=>|[;\]){}]|else|\?(?:NoLineTerminatorHere|NonExpressionParenEnd))?$/,KeywordsWithExpressionAfter=/^(?:await|case|default|delete|do|else|instanceof|new|return|throw|typeof|void|yield)$/,KeywordsWithNoLineTerminatorAfter=/^(?:return|throw|yield)$/,Newline=RegExp(LineTerminatorSequence.source);var jsTokens_1=function*(n,{jsx:t=!1}={}){var i,l,o,s,a,r,e,h,m,p,E,d,y,f;for({length:r}=n,s=0,a="",f=[{tag:"JS"}],i=[],E=0,d=!1;s<r;){switch(h=f[f.length-1],h.tag){case"JS":case"JSNonExpressionParen":case"InterpolationInTemplate":case"InterpolationInJSX":if(n[s]==="/"&&(TokensPrecedingExpression.test(a)||KeywordsWithExpressionAfter.test(a))&&(RegularExpressionLiteral.lastIndex=s,e=RegularExpressionLiteral.exec(n))){s=RegularExpressionLiteral.lastIndex,a=e[0],d=!0,yield{type:"RegularExpressionLiteral",value:e[0],closed:e[1]!==void 0&&e[1]!=="\\"};continue}if(Punctuator.lastIndex=s,e=Punctuator.exec(n)){switch(y=e[0],m=Punctuator.lastIndex,p=y,y){case"(":a==="?NonExpressionParenKeyword"&&f.push({tag:"JSNonExpressionParen",nesting:E}),E++,d=!1;break;case")":E--,d=!0,h.tag==="JSNonExpressionParen"&&E===h.nesting&&(f.pop(),p="?NonExpressionParenEnd",d=!1);break;case"{":Punctuator.lastIndex=0,o=!TokensNotPrecedingObjectLiteral.test(a)&&(TokensPrecedingExpression.test(a)||KeywordsWithExpressionAfter.test(a)),i.push(o),d=!1;break;case"}":switch(h.tag){case"InterpolationInTemplate":if(i.length===h.nesting){Template.lastIndex=s,e=Template.exec(n),s=Template.lastIndex,a=e[0],e[1]==="${"?(a="?InterpolationInTemplate",d=!1,yield{type:"TemplateMiddle",value:e[0]}):(f.pop(),d=!0,yield{type:"TemplateTail",value:e[0],closed:e[1]==="`"});continue}break;case"InterpolationInJSX":if(i.length===h.nesting){f.pop(),s+=1,a="}",yield{type:"JSXPunctuator",value:"}"};continue}}d=i.pop(),p=d?"?ExpressionBraceEnd":"}";break;case"]":d=!0;break;case"++":case"--":p=d?"?PostfixIncDec":"?UnaryIncDec";break;case"<":if(t&&(TokensPrecedingExpression.test(a)||KeywordsWithExpressionAfter.test(a))){f.push({tag:"JSXTag"}),s+=1,a="<",yield{type:"JSXPunctuator",value:y};continue}d=!1;break;default:d=!1}s=m,a=p,yield{type:"Punctuator",value:y};continue}if(Identifier.lastIndex=s,e=Identifier.exec(n)){switch(s=Identifier.lastIndex,p=e[0],e[0]){case"for":case"if":case"while":case"with":a!=="."&&a!=="?."&&(p="?NonExpressionParenKeyword")}a=p,d=!KeywordsWithExpressionAfter.test(e[0]),yield{type:e[1]==="#"?"PrivateIdentifier":"IdentifierName",value:e[0]};continue}if(StringLiteral.lastIndex=s,e=StringLiteral.exec(n)){s=StringLiteral.lastIndex,a=e[0],d=!0,yield{type:"StringLiteral",value:e[0],closed:e[2]!==void 0};continue}if(NumericLiteral.lastIndex=s,e=NumericLiteral.exec(n)){s=NumericLiteral.lastIndex,a=e[0],d=!0,yield{type:"NumericLiteral",value:e[0]};continue}if(Template.lastIndex=s,e=Template.exec(n)){s=Template.lastIndex,a=e[0],e[1]==="${"?(a="?InterpolationInTemplate",f.push({tag:"InterpolationInTemplate",nesting:i.length}),d=!1,yield{type:"TemplateHead",value:e[0]}):(d=!0,yield{type:"NoSubstitutionTemplate",value:e[0],closed:e[1]==="`"});continue}break;case"JSXTag":case"JSXTagEnd":if(JSXPunctuator.lastIndex=s,e=JSXPunctuator.exec(n)){switch(s=JSXPunctuator.lastIndex,p=e[0],e[0]){case"<":f.push({tag:"JSXTag"});break;case">":f.pop(),a==="/"||h.tag==="JSXTagEnd"?(p="?JSX",d=!0):f.push({tag:"JSXChildren"});break;case"{":f.push({tag:"InterpolationInJSX",nesting:i.length}),p="?InterpolationInJSX",d=!1;break;case"/":a==="<"&&(f.pop(),f[f.length-1].tag==="JSXChildren"&&f.pop(),f.push({tag:"JSXTagEnd"}))}a=p,yield{type:"JSXPunctuator",value:e[0]};continue}if(JSXIdentifier.lastIndex=s,e=JSXIdentifier.exec(n)){s=JSXIdentifier.lastIndex,a=e[0],yield{type:"JSXIdentifier",value:e[0]};continue}if(JSXString.lastIndex=s,e=JSXString.exec(n)){s=JSXString.lastIndex,a=e[0],yield{type:"JSXString",value:e[0],closed:e[2]!==void 0};continue}break;case"JSXChildren":if(JSXText.lastIndex=s,e=JSXText.exec(n)){s=JSXText.lastIndex,a=e[0],yield{type:"JSXText",value:e[0]};continue}switch(n[s]){case"<":f.push({tag:"JSXTag"}),s++,a="<",yield{type:"JSXPunctuator",value:"<"};continue;case"{":f.push({tag:"InterpolationInJSX",nesting:i.length}),s++,a="?InterpolationInJSX",d=!1,yield{type:"JSXPunctuator",value:"{"};continue}}if(WhiteSpace.lastIndex=s,e=WhiteSpace.exec(n)){s=WhiteSpace.lastIndex,yield{type:"WhiteSpace",value:e[0]};continue}if(LineTerminatorSequence.lastIndex=s,e=LineTerminatorSequence.exec(n)){s=LineTerminatorSequence.lastIndex,d=!1,KeywordsWithNoLineTerminatorAfter.test(a)&&(a="?NoLineTerminatorHere"),yield{type:"LineTerminatorSequence",value:e[0]};continue}if(MultiLineComment.lastIndex=s,e=MultiLineComment.exec(n)){s=MultiLineComment.lastIndex,Newline.test(e[0])&&(d=!1,KeywordsWithNoLineTerminatorAfter.test(a)&&(a="?NoLineTerminatorHere")),yield{type:"MultiLineComment",value:e[0],closed:e[1]!==void 0};continue}if(SingleLineComment.lastIndex=s,e=SingleLineComment.exec(n)){s=SingleLineComment.lastIndex,d=!1,yield{type:"SingleLineComment",value:e[0]};continue}l=String.fromCodePoint(n.codePointAt(s)),s+=l.length,a=l,d=!1,yield{type:h.tag.startsWith("JSX")?"JSXInvalid":"Invalid",value:l}}};const jsTokens=getDefaultExportFromCjs(jsTokens_1),RESERVED_KEYWORDS=["await","async","break","case","catch","class","const","continue","debugger","default","delete","do","else","enum","export","extends","false","finally","for","function","if","implements","import","in","instanceof","interface","let","new","null","undefined","package","private","protected","public","return","super","switch","static","this","throw","try","true","typeof","var","void","while","with","yield"],OPERATORS=["=","+=","-=","*=","/=","%=","+","-","--","+","++","/","*","%"],VAR_DECLARATION=["var","const","let"],TOKEN={StringLiteral:"StringLiteral",NoSubstitutionTemplate:"NoSubstitutionTemplate",TemplateHead:"TemplateHead",TemplateMiddle:"TemplateMiddle",TemplateTail:"TemplateTail",RegularExpressionLiteral:"RegularExpressionLiteral",MultiLineComment:"MultiLineComment",SingleLineComment:"SingleLineComment",IdentifierName:"IdentifierName",PrivateIdentifier:"PrivateIdentifier",NumericLiteral:"NumericLiteral",Punctuator:"Punctuator",WhiteSpace:"WhiteSpace",LineTerminatorSequence:"LineTerminatorSequence",Invalid:"Invalid",ReservedWord:"ReservedWord",Operator:"Operator"},RULE={replace:"replace"};class Lexer{constructor(t){this._code=t,this._tokens=[],this._rules=[],this._hasRan=!1}_getLastToken(t=this._tokens.length,i=[TOKEN.WhiteSpace,TOKEN.LineTerminatorSequence]){for(let l=t-1;l>=0;l--){const o=this._tokens[l];if(!i.includes(o.type))return o}return null}_tokenize(){var o,s;if(this._hasRan)return;this._hasRan=!1,this._tokens=[];let t=!1,i=[],l=[];for(const a of jsTokens(this._code)){if(a.type==="IdentifierName")if(RESERVED_KEYWORDS.includes(a.value))a.type=TOKEN.ReservedWord;else if(t){const r=this._getLastToken();(r==null?void 0:r.type)===TOKEN.Punctuator&&[",","{"].includes(r.value)&&(a.parent=i.join("."))}else{const r=this._tokens[this._tokens.length-1],e=this._tokens[this._tokens.length-2];if((r==null?void 0:r.type)===TOKEN.Punctuator&&(r==null?void 0:r.value)==="."&&((e==null?void 0:e.type)===TOKEN.IdentifierName||(e==null?void 0:e.type)===TOKEN.ReservedWord||(e==null?void 0:e.value)==="this")){let h=3,m=e.parent?`${e.parent}.${e.value}`:e.value;this._tokens[this._tokens.length-h];let p=!1;e.method&&(p=!0),a.parent=m,a.calculated=p}else(r==null?void 0:r.type)===TOKEN.WhiteSpace&&(e==null?void 0:e.type)===TOKEN.ReservedWord&&VAR_DECLARATION.includes(e.value)?a.declaration=!0:(r==null?void 0:r.type)===TOKEN.Punctuator&&(r==null?void 0:r.value)==="."&&(e==null?void 0:e.type)===TOKEN.Punctuator&&(e==null?void 0:e.value)===")"&&e!=null&&e.calledBy&&(a.parent=e.calledBy,a.calculated=!0)}else if(a.type==="Punctuator"){if(OPERATORS.includes(a.value)){if(a.type=TOKEN.Operator,a.value.endsWith("=")){const r=this._getLastToken();(r==null?void 0:r.type)===TOKEN.IdentifierName&&(r.assignment=!0),a.assignment=!0}}else if(a.value==="{"){let r=this._getLastToken();(r&&r.type===TOKEN.Punctuator&&[":",",","("].includes(r.value)||r.type===TOKEN.Operator)&&(t=!0,[",","("].includes(r.value)||(r=this._getLastToken(r.index),i.push(r.value)))}else if(a.value==="}"&&t)i.pop(),i.length===0&&(t=!1);else if(a.value==="("){const r=this._getLastToken();if((r==null?void 0:r.type)===TOKEN.IdentifierName){(o=this._tokens[r.index].parent)!=null&&o.length&&(this._tokens[r.index].method=!0),a.calledBy=(s=r.parent)!=null&&s.length?`${r.parent}.${r.value}`:r.value,l.push(a.calledBy);let e=this._getLastToken(r.index),h=!1;if((e==null?void 0:e.type)===TOKEN.Punctuator&&e.value==="."){let m=null,p=0;for(;m==null&&(e=this._getLastToken(e.index),e!=null);)p>0?e.type===TOKEN.Punctuator&&e.value==="("&&(p-=1):e.type===TOKEN.Punctuator&&e.value===")"?p+=1:e.type===TOKEN.IdentifierName&&(m=e.parent?`${e.parent}.${e.value}`:e.value,e.method&&(h=!0));m!=null&&(this._tokens[r.index].parent=m,this._tokens[r.index].calculated=h)}}}else if(a.value===")")a.calledBy=l[l.length-1],l.pop();else if(["[","."].includes(a.value)){const r=this._getLastToken();this._tokens[r.index].accessed=!0}}this._tokens.push({...a,index:this._tokens.length})}this._hasRan=!0}replace(t){this._rules.push({rule:RULE.replace,condition:t})}filter(t){return this.tokens.filter(i=>i.type===t)}get tokens(){return this._tokenize(),this._tokens}output(){return this._hasRan||this._tokenize(),this._tokens.map(t=>{for(const i of this._rules)if(i.rule===RULE.replace){const l=i.condition(t);typeof l=="string"&&(t.value=l)}return t.value}).join("")}}S(Lexer,"TOKEN",TOKEN);class Entity{constructor(n){this.element=n,this.tagName=n.tagName,this.initialState={className:n.className},this.variables=[],this.dynamicAttributes=[],this.dependencies=[],this.id=this.generateEntityUUID(),this._getDynamicAttributes()}setAsParent(){this.uuid=this.id,this.element.dataset.uuid=this.uuid}isParent(){return!!this.uuid}_getDynamicAttributes(){const n=[":class",":text",":value"],t=["document","window","proxyWindow"],l=Array.from(this.element.attributes).filter(o=>!n.includes(o.name)&&o.name.startsWith(":")&&this.element.hasAttribute(o.name.slice(1)));this.dynamicAttributes=l.map(o=>(new Lexer(o.value).filter(Lexer.TOKEN.IdentifierName).forEach(a=>{var h,m;if(t.includes(a.value)||a.value==="el"||a.declaration||a.assignment||a.accessed||a.method||a.calculated)return;const r=(h=a.parent)==null?void 0:h.split(".");if(t.includes(r==null?void 0:r[0])||((m=a.parent)==null?void 0:m.length)===0)return;const e=a.parent?`${a.parent}.${a.value}`:a.value;this.dependencies.includes(e)||this.dependencies.push(e)}),o.name)),this.dynamicAttributes=[...new Set(this.dynamicAttributes)],this.dependencies=[...new Set(this.dependencies)],this._initDependencies()}_initDependencies(){this.dependencies.forEach(n=>{if(n.startsWith("el.")){this.setAsParent();const t=n.replace("el.","");window[this.uuid]||(window[this.uuid]={}),window[this.uuid][t]=MiniJS.tryFromLocal(n.replace("el.",this.uuid)),this.dependencies.includes(this.uuid)||this.dependencies.push(this.uuid)}else window[n]=MiniJS.tryFromLocal(n)})}getVariablesFromEvents(){const n=["event","document","window","this","proxyWindow","$","Date","proxyWindow","MiniJS"];this.allEvents.forEach(t=>{const i=this.element.getAttribute(t),l=new Lexer(i),o=[];l.filter(Lexer.TOKEN.IdentifierName).forEach(s=>{var e,h;if(n.includes(s.value)||s.value==="el"||s.declaration||s.accessed||s.method||s.calculated)return;const a=(e=s.parent)==null?void 0:e.split(".");if(n.includes(a==null?void 0:a[0])||((h=s.parent)==null?void 0:h.length)===0)return;const r=s.parent?`${s.parent}.${s.value}`:s.value;if(!o.includes(r)){if(r.startsWith("el.")){this.setAsParent();const m=r.replace("el.","");window[this.uuid]||(window[this.uuid]={}),window[this.uuid][m]=MiniJS.tryFromLocal(r.replace("el.",this.uuid)),o.includes(this.uuid)||o.push(this.uuid)}else window[r]=r.startsWith("$")?MiniJS.tryFromLocal(r):window[r]??void 0;o.push(r)}}),MiniJS.variables.push(...o)}),MiniJS.variables=[...new Set(MiniJS.variables)]}getVariables(){const n=MiniJS.variables,t=Array.from(this.element.attributes).map(l=>l.value),i=[...new Set(n.filter(l=>t.find(o=>o.includes(l))))];for(let l of i){if(typeof window[l]=="function"){const o=n.filter(s=>window[l].toString().includes(s));i.concat(o)}l.includes("el.")&&!this.parent&&(this.parent=this.getParent())}this.variables=i}get allEvents(){const n=MiniJS.allEvents,t=new Set(n);return Array.from(this.element.attributes).map(o=>o.name).filter(o=>{if(t.has(o))return!0;if(!o.startsWith(":"))return!1;const s=`on${o.substring(1)}`;return t.has(s)})}get baseClasses(){return this.initialState.className.split(" ")}_eventAction(n){const t=this.element.getAttribute(n);return this._sanitizeExpression(t)}_sanitizeExpression(n){const t=new Lexer(n);return t.replace(i=>{if(i.type===Lexer.TOKEN.ReservedWord&&i.value==="this"&&i.parent==null&&!i.declaration)return"this.element"}),t.replace(i=>{if(i.type===Lexer.TOKEN.IdentifierName&&i.value==="$"&&i.parent==null&&!i.declaration&&!i.assignment)return"document.querySelector"}),this.parent&&t.replace(i=>{if(i.type===Lexer.TOKEN.IdentifierName&&i.value==="el"&&i.parent==null&&!i.declaration)return`proxyWindow['${this.parent.uuid}']`}),this.variables.forEach(i=>{t.replace(l=>{if(l.type===Lexer.TOKEN.IdentifierName&&l.value===i&&l.parent==null&&!l.declaration)return`proxyWindow.${i}`})}),t.output()}_sanitizeContentExpression(n){if(n.includes("el.")){let t=this.parent;this.variables.forEach(i=>{if(i.includes("el.")){const l=`proxyWindow.${t.uuid}['${i.replace("el.","")}']`;n=n.replace(i,l)}})}return n}getParent(){if(this.isParent())return this;{let n=this.element,t=n.parentNode;for(;!t.dataset.uuid;)n=t,t=n.parentNode;return MiniJS.elements.find(l=>l.uuid==t.dataset.uuid)}}generateEntityUUID(){return"Entity"+Date.now()+Math.floor(Math.random()*1e4)}evaluateEventAction(attrName){eval(this._eventAction(attrName))}evaluateClass(){const classExpr=this.element.getAttribute(":class");if(classExpr){const newClassNames=eval(this._sanitizeContentExpression(classExpr)),classesCombined=[...this.baseClasses,...newClassNames.split(" ")].join(" ");this.element.className=classesCombined}}evaluateLoadEvents(){this.element.getAttribute(":load")&&this.evaluateEventAction(":load")}evaluateEach(){const eachExpr=this.element.getAttribute(":each");if(eachExpr){const[args,iterable]=eachExpr.split(" in "),[variable,indexName]=args.split(",").map(n=>n.trim()),items=eval(iterable);this.childClone||(this.childClone=this.element.innerHTML);let newHTML="";items.forEach((n,t)=>{newHTML+=this.childClone.replaceAll(indexName,t).replaceAll(variable,`'${n}'`)}),this.element.innerHTML=newHTML;const elements=this.element.querySelectorAll("*");for(let n=0;n<elements.length;n++){const t=new Entity(elements[n]);t.getVariablesFromEvents(),t.getVariables(),t.applyEventBindings(),t.evaluateAll(),MiniJS.elements.push(t)}}}evaluateAll(){this.evaluateValue(),this.evaluateClass(),this.evaluateText(),this.evaluateDynamicAttributes()}evaluateDynamicAttributes(){this.dynamicAttributes.forEach(attr=>{const expr=this.element.getAttribute(attr);if(!expr)return;const newValue=eval(this._sanitizeExpression(expr)),nativeAttr=attr.slice(1);this.element[nativeAttr]!==newValue&&newValue!=null&&(this.element[nativeAttr]=newValue)})}evaluateText(){const textExpr=this.element.getAttribute(":text");if(textExpr){const newText=eval(this._sanitizeContentExpression(textExpr));(newText||newText=="")&&(this.element.innerText=newText)}}evaluateValue(){const valueExpr=this.element.getAttribute(":value");if(valueExpr){const newValue=eval(valueExpr);this.element.value!==newValue&&newValue!=null&&(this.element.value=newValue)}const checkedExpr=this.element.getAttribute(":checked");if(checkedExpr){const newValue=eval(checkedExpr);newValue&&(this.element.checked=newValue)}}applyEventBindings(){const n=this.element;this.allEvents.forEach(t=>{n[t]=()=>{this.evaluateEventAction(t)}}),n.hasAttribute(":change")&&(n.type=="checkbox"||n.tagName=="select"?n.addEventListener("change",t=>{this.evaluateEventAction(":change")}):n.addEventListener("input",t=>{this.evaluateEventAction(":change")})),n.hasAttribute(":clickout")&&document.addEventListener("click",t=>{document.body.contains(t.target)&&(n.contains(t.target)||this.evaluateEventAction(":clickout"))}),n.hasAttribute(":press")&&(n.addEventListener("keyup",t=>{t.target===n&&["Enter","Space"].includes(t.code)&&(t.code=="Space"&&t.preventDefault(),this.evaluateEventAction(":press"))}),n.addEventListener("click",t=>{this.evaluateEventAction(":press")}),n.addEventListener("touchstart",t=>{this.evaluateEventAction(":press")})),Array.from(n.attributes).forEach(t=>{if(t.name.startsWith(":")&&!MiniJS.allCustomBindings.includes(t.name)){const i=t.name.substring(1);n.addEventListener(i,l=>{this.evaluateEventAction(t.name)})}else if(t.name.startsWith(":keyup.")){const[i,l]=t.name.split("."),o=i.substring(1);let s=l[0].toUpperCase()+l.slice(1);if(["up","down","left","right"].includes(l))s="Arrow"+s;else if(!["enter","space"].includes(l))return;n.addEventListener(o,a=>{a.target===n&&a.key===s&&this.evaluateEventAction(t.name)})}})}hasAttribute(n){return!!this.element.getAttribute(n)}}class MiniArray extends Array{constructor(...t){super(...t)}get first(){return this[0]}get last(){return this.at(-1)}nextItem(t){const i=this.indexOf(t)+1;return i>=this.length?this.first:this.at(i)}previousItem(t){const i=this.indexOf(t)-1;return i<0?this.last:this.at(i)}toggle(t){let i;if(Array.isArray(t))i=t;else{let l=this.indexOf(t);l===-1?i=this.concat(t):i=this.slice(0,l).concat(this.slice(l+1))}return new MiniArray(...i)}add(t){if(this.indexOf(t)!==-1)return this;const l=this.concat(t);return new MiniArray(...l)}remove(t){let i=this.indexOf(t);if(i===-1)return this;const l=this.slice(0,i).concat(this.slice(i+1));return new MiniArray(...l)}subtract(t){return new MiniArray(...this.filter(i=>!t.includes(i)))}search(t){const i=t.toLowerCase().split(/\s+/),l=this.filter(o=>{const s=o.toLowerCase();return i.every(a=>s.includes(a))});return new MiniArray(...l)}}let nativeProps=Object.getOwnPropertyNames(window);const MiniJS$1=(()=>{window.proxyWindow=null;const n=Symbol("isProxy");let t=[],i=[],l=[],o=[],s=[":each"],a=[":text",":class",":value",":checked"],r=[":change",":clickout",":keyup.up",":keyup.left",":keyup.down",":keyup.right",":keyup.enter",":keyup.space",":press"];const e={set:function(u,c,g){let x=g;const v=u.__parent__?`${u.__parent__}.${c}`:c;return u[c]=x,c[0]==="$"&&localStorage.setItem(c,JSON.stringify(x)),l.includes(v)&&(w(v),E([v])),!0},get:function(u,c){return c===n?!0:u[c]}};function h(){const u=["div","a","input","textarea","select","button","video","audio","img","form","details","iframe","canvas"],c=new Set;u.forEach(g=>{const x=document.createElement(g);for(let v in x)v.startsWith("on")&&c.add(v)}),o=[...c]}async function m(){await b();let u=performance.now();d(),h(),L(),f(),E(),I(),p(),w();const g=performance.now()-u;console.log(`myFunction took ${g}ms to run.`)}function p(){Object.defineProperty(Number.prototype,"times",{get:function(){return Array.from({length:this})}})}function E(u=l){u.forEach(c=>{Array.isArray(proxyWindow[c])&&!(proxyWindow[c]instanceof MiniArray)&&(proxyWindow[c]=new MiniArray(...proxyWindow[c]))})}function d(){proxyWindow=new Proxy(window,e)}function y(){l=Object.getOwnPropertyNames(window).filter(c=>!nativeProps.includes(c)&&!t.includes(c))}function f(){y(),i.forEach((u,c)=>{u.getVariablesFromEvents(c)}),i.forEach((u,c)=>{u.getVariables()})}function T(u){try{if(u.startsWith("$")){const c=localStorage.getItem(u);return c==null?c:JSON.parse(c)}return}catch{return}}function w(u=null){i.forEach(c=>{var g;(c.variables.includes(u)||u==null||c.uuid==u||((g=c.parent)==null?void 0:g.uuid)==u||c.dependencies.includes(u))&&(c.evaluateEach(),c.evaluateAll())})}function I(){i.forEach(u=>{u.applyEventBindings()})}function L(){var u=document.body.getElementsByTagName("*");for(let c=0;c<u.length;c++){const g=u[c],x=new Entity(g);N(x.element.parentElement)||i.push(x)}}function N(u){for(;u;){if(u.hasAttribute&&u.hasAttribute(":each"))return!0;u=u.parentElement}return!1}function b(){return new Promise(u=>{document.readyState=="loading"?document.addEventListener("DOMContentLoaded",u):u()})}return m().catch(u=>{console.error("Error initializing MiniJS:",u)}),{get elements(){return i},set elements(u){return u},get variables(){return l},set variables(u){l=u},get ignore(){return t},set ignore(u){t=u},get allCustomBindings(){return[...a,...r,...s]},get allEvents(){return[...o,...r]},get window(){return proxyWindow},tryFromLocal:T}})();window.MiniJS=MiniJS$1});