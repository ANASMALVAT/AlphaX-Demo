"use strict";(self.webpackChunkalpha_algo=self.webpackChunkalpha_algo||[]).push([[7899,3047],{99726:(e,n,a)=>{var t=a(75525);function o(e){e.register(t),function(e){e.languages.django={comment:/^\{#[\s\S]*?#\}$/,tag:{pattern:/(^\{%[+-]?\s*)\w+/,lookbehind:!0,alias:"keyword"},delimiter:{pattern:/^\{[{%][+-]?|[+-]?[}%]\}$/,alias:"punctuation"},string:{pattern:/("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,greedy:!0},filter:{pattern:/(\|)\w+/,lookbehind:!0,alias:"function"},test:{pattern:/(\bis\s+(?:not\s+)?)(?!not\b)\w+/,lookbehind:!0,alias:"function"},function:/\b[a-z_]\w+(?=\s*\()/i,keyword:/\b(?:and|as|by|else|for|if|import|in|is|loop|not|or|recursive|with|without)\b/,operator:/[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,number:/\b\d+(?:\.\d+)?\b/,boolean:/[Ff]alse|[Nn]one|[Tt]rue/,variable:/\b\w+\b/,punctuation:/[{}[\](),.:;]/};var n=/\{\{[\s\S]*?\}\}|\{%[\s\S]*?%\}|\{#[\s\S]*?#\}/g,a=e.languages["markup-templating"];e.hooks.add("before-tokenize",(function(e){a.buildPlaceholders(e,"django",n)})),e.hooks.add("after-tokenize",(function(e){a.tokenizePlaceholders(e,"django")})),e.languages.jinja2=e.languages.django,e.hooks.add("before-tokenize",(function(e){a.buildPlaceholders(e,"jinja2",n)})),e.hooks.add("after-tokenize",(function(e){a.tokenizePlaceholders(e,"jinja2")}))}(e)}e.exports=o,o.displayName="django",o.aliases=["jinja2"]},75525:e=>{function n(e){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(a,t,o,i){if(a.language===t){var r=a.tokenStack=[];a.code=a.code.replace(o,(function(e){if("function"===typeof i&&!i(e))return e;for(var o,s=r.length;-1!==a.code.indexOf(o=n(t,s));)++s;return r[s]=e,o})),a.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(a,t){if(a.language===t&&a.tokenStack){a.grammar=e.languages[t];var o=0,i=Object.keys(a.tokenStack);!function r(s){for(var l=0;l<s.length&&!(o>=i.length);l++){var u=s[l];if("string"===typeof u||u.content&&"string"===typeof u.content){var c=i[o],g=a.tokenStack[c],p="string"===typeof u?u:u.content,f=n(t,c),d=p.indexOf(f);if(d>-1){++o;var k=p.substring(0,d),b=new e.Token(t,e.tokenize(g,a.grammar),"language-"+t,g),h=p.substring(d+f.length),m=[];k&&m.push.apply(m,r([k])),m.push(b),h&&m.push.apply(m,r([h])),"string"===typeof u?s.splice.apply(s,[l,1].concat(m)):u.content=m}}else u.content&&r(u.content)}return s}(a.tokens)}}}})}(e)}e.exports=n,n.displayName="markupTemplating",n.aliases=[]}}]);