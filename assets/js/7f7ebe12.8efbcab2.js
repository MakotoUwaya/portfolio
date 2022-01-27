"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[248],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(n),f=r,d=m["".concat(u,".").concat(f)]||m[f]||p[f]||l;return n?a.createElement(d,o(o({ref:t},c),{},{components:n})):a.createElement(d,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7462),r=n(7294),l=n(2389),o=n(9548),i=n(6010),u="tabItem_LplD";function s(e){var t,n,l,s=e.lazy,c=e.block,p=e.defaultValue,m=e.values,f=e.groupId,d=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,o.lx)(b,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===p?p:null!=(t=null!=p?p:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=v[0])?void 0:l.props.value;if(null!==h&&!b.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,o.UB)(),w=g.tabGroupChoices,y=g.setTabGroupChoices,N=(0,r.useState)(h),j=N[0],O=N[1],T=[],x=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var E=w[f];null!=E&&E!==j&&b.some((function(e){return e.value===E}))&&O(E)}var C=function(e){var t=e.currentTarget,n=T.indexOf(t),a=b[n].value;a!==j&&(x(t),O(a),null!=f&&y(f,a))},J=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;n=T[a]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.currentTarget)-1;n=T[r]||T[T.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":c},d)},b.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:function(e){return T.push(e)},onKeyDown:J,onFocus:C,onClick:C},l,{className:(0,i.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":j===t})}),null!=n?n:t)}))),s?(0,r.cloneElement)(v.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}function c(e){var t=(0,l.Z)();return r.createElement(s,(0,a.Z)({key:String(t)},e))}},2208:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},assets:function(){return m},toc:function(){return f},default:function(){return v}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=n(9877),i=n(8215),u=["components"],s={title:"Snowpack \u3067 Jest v27 \u306b\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u3059\u308b",authors:["makoto"],tags:["Snowpack","React","Jest","npm"]},c=void 0,p={permalink:"/portfolio/blog/2022/01/22/snowpack-jest-v27-fix",editUrl:"https://github.com/MakotoUwaya/portfolio/tree/main/blog/2022-01-22/snowpack-jest-v27-fix.mdx",source:"@site/blog/2022-01-22/snowpack-jest-v27-fix.mdx",title:"Snowpack \u3067 Jest v27 \u306b\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u3059\u308b",description:"Jest v27 \u306b\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u3059\u308b\u3068\u3001 Jest \u5b9f\u884c\u6642\u306b\u30a8\u30e9\u30fc\u304c\u51fa\u308b",date:"2022-01-22T00:00:00.000Z",formattedDate:"2022\u5e741\u670822\u65e5",tags:[{label:"Snowpack",permalink:"/portfolio/blog/tags/snowpack"},{label:"React",permalink:"/portfolio/blog/tags/react"},{label:"Jest",permalink:"/portfolio/blog/tags/jest"},{label:"npm",permalink:"/portfolio/blog/tags/npm"}],readingTime:2.17,truncated:!1,authors:[{name:"\u4e0a\u5c4b \u8aa0",title:"\u958b\u767a\u8005",url:"https://github.com/MakotoUwaya",imageURL:"https://github.com/MakotoUwaya.png",key:"makoto"}],frontMatter:{title:"Snowpack \u3067 Jest v27 \u306b\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u3059\u308b",authors:["makoto"],tags:["Snowpack","React","Jest","npm"]},nextItem:{title:"Start Docusaurus Blog",permalink:"/portfolio/blog/start-blog"}},m={authorsImageUrls:[void 0]},f=[{value:"Jest v27 \u306b\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u3059\u308b\u3068\u3001 Jest \u5b9f\u884c\u6642\u306b\u30a8\u30e9\u30fc\u304c\u51fa\u308b",id:"jest-v27-\u306b\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u3059\u308b\u3068-jest-\u5b9f\u884c\u6642\u306b\u30a8\u30e9\u30fc\u304c\u51fa\u308b",children:[],level:2},{value:"\u539f\u56e0",id:"\u539f\u56e0",children:[],level:2},{value:"\u66ab\u5b9a\u5bfe\u5fdc",id:"\u66ab\u5b9a\u5bfe\u5fdc",children:[{value:"\u554f\u984c\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u30a2\u30f3\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",id:"\u554f\u984c\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u30a2\u30f3\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",children:[],level:3},{value:"\u5fc5\u8981\u306a\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u500b\u5225\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",id:"\u5fc5\u8981\u306a\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u500b\u5225\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",children:[],level:3},{value:"Jest v27 \u306b\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u3059\u308b",id:"jest-v27-\u306b\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u3059\u308b",children:[],level:3},{value:"\u52d5\u4f5c\u78ba\u8a8d",id:"\u52d5\u4f5c\u78ba\u8a8d",children:[],level:3}],level:2},{value:"Snowpack \u306f\u3082\u3046\u958b\u767a\u3057\u3066\u306a\u3044\uff1f",id:"snowpack-\u306f\u3082\u3046\u958b\u767a\u3057\u3066\u306a\u3044",children:[],level:2}],d={toc:f};function v(e){var t=e.components,s=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"jest-v27-\u306b\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u3059\u308b\u3068-jest-\u5b9f\u884c\u6642\u306b\u30a8\u30e9\u30fc\u304c\u51fa\u308b"},"Jest v27 \u306b\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u3059\u308b\u3068\u3001 Jest \u5b9f\u884c\u6642\u306b\u30a8\u30e9\u30fc\u304c\u51fa\u308b"),(0,l.kt)("p",null,"Snowpack \u306e Issue ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/withastro/snowpack/issues/3398"},"#3398")," \u3067\u5831\u544a\u3055\u308c\u3066\u3044\u308b\u901a\u308a\u3001",(0,l.kt)("br",{parentName:"p"}),"\n","React \u5411\u3051 Jest config \u5185\u3067\u53c2\u7167\u3057\u3066\u3044\u308b Jest \u30d0\u30fc\u30b8\u30e7\u30f3\u304c\u53e4\u3044\u305f\u3081\u3001\u5b9f\u884c\u6642\u30a8\u30e9\u30fc\u306b\u306a\u3063\u3066\u3057\u307e\u3046"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u25cf Test suite failed to run\nTypeError: Cannot destructure property 'config' of 'cacheKeyOptions' as it is undefined.\n  at Object.getCacheKey (node_modules/babel-jest/build/index.js:217:14)\n")),(0,l.kt)("p",null,"\u79c1\u304c\u78ba\u8a8d\u3057\u305f\u74b0\u5883\u3067\u306f\u5168\u3066\u306e\u30c6\u30b9\u30c8\u3067\u4e0a\u8a18\u306e\u30a8\u30e9\u30fc\u304c\u51fa\u3066\u3044\u305f"),(0,l.kt)("h2",{id:"\u539f\u56e0"},"\u539f\u56e0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"npm \u3067\u914d\u4fe1\u3055\u308c\u3066\u3044\u308b Snowpack \u306e\u6700\u65b0\u7248\u306f v3.8.8(2022-01-22\u73fe\u5728)"),(0,l.kt)("li",{parentName:"ul"},"Jest \u5229\u7528\u6642\u306e config \u3068\u3057\u3066",(0,l.kt)("a",{parentName:"li",href:"https://www.snowpack.dev/guides/jest"},"\u63a8\u5968"),"\u3055\u308c\u3066\u3044\u308b ",(0,l.kt)("inlineCode",{parentName:"li"},"@snowpack/app-scripts-react")," \u306f v2.0.1 \u304c\u6700\u65b0\u3067\u3001",(0,l.kt)("br",{parentName:"li"}),"\u6700\u7d42\u30ea\u30ea\u30fc\u30b9\u306f2021-03\u9803"),(0,l.kt)("li",{parentName:"ul"},"\u540c\u4e00\u30ea\u30dd\u30b8\u30c8\u30ea\u3067\u7ba1\u7406\u3055\u308c\u3066\u3044\u308b",(0,l.kt)("a",{parentName:"li",href:"https://github.com/withastro/snowpack/blob/97b2e94e627cab0e79162ce4ed7a3768d64b5591/create-snowpack-app/app-scripts-react/package.json#L23"},"@snowpack/app-scripts-react"),"\u306f v2.0.1 \u6642\u70b9\u3060\u3068 babel-jest v26.2.2 \u3092\u53c2\u7167\u3057\u3066\u3044\u308b"),(0,l.kt)("li",{parentName:"ul"},"\u305d\u306e\u5f8c\u3001",(0,l.kt)("a",{parentName:"li",href:"https://github.com/withastro/snowpack/commit/f77639b81f61c47b69f7a5df27648f36146ab25f#diff-e5b2a9577e92c42f45ebb12756f19173200914f261c323ee12bc8f76da565261"},"f77639b"),"\u306e\u30b3\u30df\u30c3\u30c8\u3067 Jest v27 \u5bfe\u5fdc\u304c\u884c\u308f\u308c\u3066\u3044\u308b\u304c\u3001\u30ea\u30ea\u30fc\u30b9\u304c\u884c\u308f\u308c\u3066\u304a\u3089\u305a npm \u304c\u66f4\u65b0\u3055\u308c\u306a\u3044")),(0,l.kt)("h2",{id:"\u66ab\u5b9a\u5bfe\u5fdc"},"\u66ab\u5b9a\u5bfe\u5fdc"),(0,l.kt)("h3",{id:"\u554f\u984c\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u30a2\u30f3\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},"\u554f\u984c\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u30a2\u30f3\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@snowpack/app-scripts-react")," \u3092\u30a2\u30f3\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,l.kt)("li",{parentName:"ul"},"Jest \u306e config \u30d5\u30a1\u30a4\u30eb\u304b\u3089 require \u3092\u524a\u9664\u3057\u3066\u3001transform \u306a\u3069\u5fc5\u8981\u306a\u7b87\u6240\u306e\u307f\u30b3\u30d4\u30fc",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"babelTransform.js")," ",(0,l.kt)("inlineCode",{parentName:"li"},"fileTransform.js")," ",(0,l.kt)("inlineCode",{parentName:"li"},"importMetaBabelPlugin.js")," \u306e3\u30d5\u30a1\u30a4\u30eb\u3092\u30b3\u30d4\u30fc\u3057\u305f")))),(0,l.kt)("h3",{id:"\u5fc5\u8981\u306a\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u500b\u5225\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},"\u5fc5\u8981\u306a\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u500b\u5225\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,l.kt)("p",null,"\u4e0b\u8a18\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u304c\u4e0d\u8db3\u3057\u305f\u72b6\u614b\u306b\u306a\u308b\u306e\u3067\u8ffd\u52a0\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"babel-jest")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"babel-preset-react-app")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@snowpack/plugin-dotenv"))),(0,l.kt)("h3",{id:"jest-v27-\u306b\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u3059\u308b"},"Jest v27 \u306b\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u3059\u308b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"@types/jest \u3082\u5408\u308f\u305b\u3066 v27 \u306b\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u3059\u308b")),(0,l.kt)("h3",{id:"\u52d5\u4f5c\u78ba\u8a8d"},"\u52d5\u4f5c\u78ba\u8a8d"),(0,l.kt)("p",null,"\u30c6\u30b9\u30c8\u304c\u6210\u529f\u3059\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3059\u308b"),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"npm",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"npm run test\n"))),(0,l.kt)(i.Z,{value:"yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"yarn test\n")))),(0,l.kt)("h2",{id:"snowpack-\u306f\u3082\u3046\u958b\u767a\u3057\u3066\u306a\u3044"},"Snowpack \u306f\u3082\u3046\u958b\u767a\u3057\u3066\u306a\u3044\uff1f"),(0,l.kt)("p",null,"2021\u5e7410\u6708\u4ee5\u964d\u30ea\u30ea\u30fc\u30b9\u3082\u7121\u304f\u3001\u30b3\u30fc\u30c9\u3082\u307b\u3068\u3093\u3069\u52d5\u3044\u3066\u3044\u306a\u3044"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"snowpack_contributoers",src:n(9042).Z,width:"1896",height:"919"})),(0,l.kt)("p",null,"\u4eca\u3069\u3093\u306a\u72b6\u614b\u306a\u3093\u3060\u308d\u3046\u304b\u30fb\u30fb\u30fb",(0,l.kt)("br",{parentName:"p"}),"\n","CRAv5 + Vite \u304c\u5b89\u5b9a\u3057\u3066\u52d5\u3044\u3066\u3044\u308b\u306e\u3067\u978d\u66ff\u3048\u3057\u3088\u3046\u304b\u306a"))}v.isMDXComponent=!0},9042:function(e,t,n){t.Z=n.p+"assets/images/snowpack_contributoers-792aeab0fb3345d1ee2181296f8cbe48.png"}}]);