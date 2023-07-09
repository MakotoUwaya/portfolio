"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[3139],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var p=r.createContext({}),s=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,p=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),d=s(n),m=o,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(k,i(i({ref:e},u),{},{components:n})):r.createElement(k,i({ref:e},u))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3474:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i=["components"],l={title:"Windows 11 \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",authors:["makoto"],tags:["UEFI","Windows11"]},p=void 0,s={permalink:"/portfolio/blog/2022/02/07/windows11-install",editUrl:"https://github.com/MakotoUwaya/portfolio/tree/main/blog/2022-02-07/windows11-install.mdx",source:"@site/blog/2022-02-07/windows11-install.mdx",title:"Windows 11 \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",description:"PC \u5165\u308c\u66ff\u3048\u306e\u7d9a\u304d",date:"2022-02-07T00:00:00.000Z",formattedDate:"2022\u5e742\u67087\u65e5",tags:[{label:"UEFI",permalink:"/portfolio/blog/tags/uefi"},{label:"Windows11",permalink:"/portfolio/blog/tags/windows-11"}],readingTime:5.945,hasTruncateMarker:!1,authors:[{name:"\u4e0a\u5c4b \u8aa0",title:"\u958b\u767a\u8005",url:"https://github.com/MakotoUwaya",imageURL:"https://github.com/MakotoUwaya.png",key:"makoto"}],frontMatter:{title:"Windows 11 \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",authors:["makoto"],tags:["UEFI","Windows11"]},prevItem:{title:"GPU \u3092\u65b0\u8abf\u3057\u305f",permalink:"/portfolio/blog/2023/07/08/rtx950-replace"},nextItem:{title:"Intel 12th Gen CPU \u306b\u63db\u88c5\u3057\u305f",permalink:"/portfolio/blog/2022/02/02/lga1700-replace"}},u={authorsImageUrls:[void 0]},c=[{value:"PC \u5165\u308c\u66ff\u3048\u306e\u7d9a\u304d",id:"pc-\u5165\u308c\u66ff\u3048\u306e\u7d9a\u304d",level:2},{value:"\u4f55\u304c\u554f\u984c\u3060\u3063\u305f\u306e\u304b",id:"\u4f55\u304c\u554f\u984c\u3060\u3063\u305f\u306e\u304b",level:2},{value:"\u8a66\u884c\u932f\u8aa4",id:"\u8a66\u884c\u932f\u8aa4",level:3},{value:"MBR disk \u304b\u3089 GPT disk \u3078\u306e\u5909\u63db",id:"mbr-disk-\u304b\u3089-gpt-disk-\u3078\u306e\u5909\u63db",level:3},{value:"Windows 11 \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",id:"windows-11-\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",level:2},{value:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",id:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",level:2},{value:"\u7d42\u308f\u308a",id:"\u7d42\u308f\u308a",level:2}],d={toc:c};function m(t){var e=t.components,l=(0,o.Z)(t,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,l,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"pc-\u5165\u308c\u66ff\u3048\u306e\u7d9a\u304d"},"PC \u5165\u308c\u66ff\u3048\u306e\u7d9a\u304d"),(0,a.kt)("p",null,"\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u306e\u6e96\u5099\u306f\u4e00\u901a\u308a\u5b8c\u4e86\u3057\u3066\u3001\u30de\u30b6\u30fc\u30dc\u30fc\u30c9\u306e UEFI \u8a2d\u5b9a\u753b\u9762\u3092\u8d77\u52d5\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u305f\u3002\n\u30c7\u30d5\u30a9\u30eb\u30c8\u3060\u3068\u6d3e\u624b\u306b\u5149\u3092\u653e\u3063\u3066\u3044\u305f\u306e\u3067\u3001\u30b9\u30c3\u3068\u7121\u52b9\u5316\u3057\u3066\u304a\u304f\u3002"),(0,a.kt)("p",null,"CPU\u3001Memory\u3001GPU\u304c\u554f\u984c\u306a\u304f\u8a8d\u8b58\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u305f\u308a\u3001\u51b7\u5374\u30d5\u30a1\u30f3\u306e\u56de\u8ee2\u6570\u3092\u8abf\u6574\u3057\u3066\u904a\u3093\u3067\u307f\u305f\u308a\u3057\u305f\u5f8c\u3001\n\u3055\u3066\u3001\u30d6\u30fc\u30c8\u30b7\u30fc\u30b1\u30f3\u30b9\u306e\u9806\u5e8f\u3067\u3082\u8a2d\u5b9a\u3059\u308b\u304b\u3001\u3068\u305d\u308c\u3089\u3057\u3044\u753b\u9762\u306b\u5207\u308a\u66ff\u3048\u3066\u307f\u305f\u304c\u3001\u30d6\u30fc\u30c8\u53ef\u80fd\u306a HDD \u304c1\u3064\u3082\u7121\u3044\u3002"),(0,a.kt)("p",null,"\u3042\u308c\uff1f M.2 \u306e\u53d6\u4ed8\u30bd\u30b1\u30c3\u30c8\u9593\u9055\u3048\u305f\u304b\u306a\uff1f SATA \u30823\u3064\u3068\u3082\u63a5\u7d9a\u30df\u30b9\u3057\u3066\u308b\u3068\u304b\u3042\u308b\u306e\u304b\uff1f\u3068\u601d\u3044\u3001",(0,a.kt)("br",{parentName:"p"}),"\n","\u518d\u8d77\u52d5\u3057\u3066 F11 \u30ad\u30fc\u3092\u9023\u6253\u3059\u308b\u3082\u300c\u30d6\u30fc\u30c8\u53ef\u80fd\u306a\u30c7\u30d0\u30a4\u30b9\u304c\u3042\u308a\u307e\u305b\u3093\u300d\u3068\u306a\u308b\u3002"),(0,a.kt)("p",null,"\u307e\u3042\u3044\u3044\u304b\u30fb\u30fb\u30fbWindows 10 \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u30e1\u30c7\u30a3\u30a2(USB)\u5165\u308c\u3066\u8d77\u52d5\u3059\u308c\u3070\u30c7\u30a3\u30b9\u30af\u304c\u898b\u3048\u308b\u304b\u3069\u3046\u304b\u5206\u304b\u308b\u306f\u305a",(0,a.kt)("br",{parentName:"p"}),"\n","\u30fb\u30fb\u30fb\u3057\u304b\u3057\u3001\u3053\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u30e1\u30c7\u30a3\u30a2\u3059\u3089\u8a8d\u8b58\u3055\u308c\u306a\u3044\u3002"),(0,a.kt)("p",null,"\u3053\u3053\u304b\u3089 UEFI \u306e\u8a2d\u5b9a\u5024\u30921\u3064\u3065\u3064\u30c1\u30a7\u30c3\u30af\u3059\u308b\u4f5c\u696d\u304c\u59cb\u307e\u3063\u305f\u3002\u3002\u3002"),(0,a.kt)("h2",{id:"\u4f55\u304c\u554f\u984c\u3060\u3063\u305f\u306e\u304b"},"\u4f55\u304c\u554f\u984c\u3060\u3063\u305f\u306e\u304b"),(0,a.kt)("p",null,"\u7d50\u8ad6\u304b\u3089\u8a00\u3046\u3068\u3001Windows 10 \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u30e1\u30c7\u30a3\u30a2(USB)\u3092\u4f7f\u3063\u3066\u3044\u308b\u3068 UEFI \u3067\u306f\u8a8d\u8b58\u3055\u308c\u306a\u3044\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://nomadit.jp/pc/windows/post-11298"},"\u3010OS\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3011Windows10\u306eUSB\u30e1\u30e2\u30ea\u30fc\u306fUEFI\u30d6\u30fc\u30c8\u3067\u304d\u306a\u3044\u305f\u3081\u4f5c\u308a\u76f4\u3059\u5fc5\u8981\u3042\u308a"))),(0,a.kt)("p",null,"\u3053\u306e\u30d6\u30ed\u30b0\u306b\u66f8\u3044\u3066\u3042\u308b\u901a\u308a\u3067\u3001 Rufus \u3092\u4f7f\u3063\u3066 USB \u30e1\u30e2\u30ea\u30fc\u306b Windows 10 \u306e ISO \u30c7\u30fc\u30bf\u3092\u66f8\u304d\u8fbc\u3080\u3053\u3068\u3067 UEFI \u30d6\u30fc\u30c8\u304c\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u3063\u305f\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","(\u4eca\u307e\u3067\u7279\u306b\u5fc5\u8981\u304c\u306a\u304f\u3001 USB \u30e1\u30e2\u30ea\u203b\u30ea\u30e0\u30fc\u30d0\u30d6\u30eb\u30c7\u30a3\u30b9\u30af \u3092\u6301\u3063\u3066\u3044\u306a\u304b\u3063\u305f\u306e\u3067 32GB \u3067 1,000\u5186\u304f\u3089\u3044\u306e\u88fd\u54c1\u3092\u8cfc\u5165\u3057\u305f)"),(0,a.kt)("h3",{id:"\u8a66\u884c\u932f\u8aa4"},"\u8a66\u884c\u932f\u8aa4"),(0,a.kt)("p",null,"\u3053\u3053\u306b\u884c\u304d\u3064\u304f\u307e\u3067\u306b\u3001\u30bb\u30ad\u30e5\u30a2\u30d6\u30fc\u30c8\u3092\u7121\u52b9\u5316\u3057\u305f\u308a\u3001\u30ec\u30ac\u30b7\u30fc\u8d77\u52d5\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u6709\u52b9\u5316\u3057\u305f\u308a\u3068\u8ff7\u8d70\u3057\u3066\u3057\u307e\u3063\u305f\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u307e\u3055\u304b\u30e1\u30fc\u30ab\u30fc\u7d14\u6b63\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u30e1\u30c7\u30a3\u30a2\u304c\u30ec\u30ac\u30b7\u30fc\u306a\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5\u306b\u3057\u304b\u5bfe\u5fdc\u3057\u3066\u3044\u306a\u3044\u3068\u306f\u8003\u3048\u3082\u53ca\u3070\u305a\u3001",(0,a.kt)("br",{parentName:"p"}),"\n","\u300c\u3053\u306e\u30e1\u30c7\u30a3\u30a2\u3092\u4f7f\u3063\u3066\u4f55\u304b\u8a2d\u5b9a\u3092\u5909\u3048\u308c\u3070 UEFI \u30d6\u30fc\u30c8\u5bfe\u5fdc\u3067\u304d\u308b\u306f\u305a\u300d\u3068\u3044\u3046\u3068\u3053\u308d\u3067\u601d\u8003\u3057\u3066\u3044\u305f\u306e\u3067\u3001\u7121\u99c4\u306b MBR \u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u3057\u307e\u3044\n\u5f8c\u304b\u3089 UEFI \u30e1\u30c7\u30a3\u30a2\u3067\u30af\u30ea\u30fc\u30f3\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3092\u3059\u308b\u7fbd\u76ee\u306b\u306a\u3063\u305f\u3002"),(0,a.kt)("h3",{id:"mbr-disk-\u304b\u3089-gpt-disk-\u3078\u306e\u5909\u63db"},"MBR disk \u304b\u3089 ",(0,a.kt)("a",{parentName:"h3",href:"https://docs.microsoft.com/ja-jp/windows-hardware/manufacture/desktop/windows-and-gpt-faq?view=windows-11"},"GPT disk")," \u3078\u306e\u5909\u63db"),(0,a.kt)("p",null,"MBR disk \u306f UEFI \u304b\u3089\u8a8d\u8b58\u3055\u308c\u306a\u3044\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u305b\u3063\u304b\u304f UEFI \u30d6\u30fc\u30c8\u53ef\u80fd\u306a USB \u30e1\u30e2\u30ea\u3067 Windows 10 \u30a4\u30f3\u30b9\u30c8\u30fc\u30e9 \u3092\u8d77\u52d5\u3057\u3066\u3082\u3001 MBR \u306e\u30c7\u30a3\u30b9\u30af\u304c\u898b\u3048\u308b\u3053\u3068\u306f\u7121\u3044\u3002"),(0,a.kt)("p",null,"\u305d\u3053\u3067\u3001",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows-server/storage/disk-management/change-an-mbr-disk-into-a-gpt-disk"},"\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9"),"\u3092\u53c2\u8003\u306b\n\u30a4\u30f3\u30b9\u30c8\u30fc\u30e9\u306e\u30c7\u30a3\u30b9\u30af\u9078\u629e\u753b\u9762\u3067\u30b3\u30de\u30f3\u30c9\u30d7\u30ed\u30f3\u30d7\u30c8\u3092\u8d77\u52d5(\u30ad\u30fc\u30dc\u30fc\u30c9\u306e\u300cShift\u300d\u3068\u300cF10\u300d\u3092\u62bc\u4e0b)\u3057\u3001 diskpart \u3092\u4f7f\u3063\u3066 GPT disk \u306b\u5909\u63db\u3059\u308b",(0,a.kt)("br",{parentName:"p"}),"\n","(",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/ja-jp/windows-server/storage/disk-management/change-an-mbr-disk-into-a-gpt-disk"},"\u65e5\u672c\u8a9e\u30da\u30fc\u30b8"),"\u3060\u3068\n\u30b3\u30de\u30f3\u30c9\u306e\u8868\u8a18\u304c\u304a\u304b\u3057\u3044\u306e\u3067\u6ce8\u610f)"),(0,a.kt)("p",null,"GPT disk \u306b\u5909\u63db\u3057\u305f\u5f8c\u306f\u3001 UEFI \u306e\u30d6\u30fc\u30c8\u9078\u629e\u753b\u9762\u304b\u3089\u3082\u53c2\u7167\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u3063\u305f\uff01"),(0,a.kt)("p",null,"\u3053\u306e\u30bf\u30a4\u30df\u30f3\u30b0\u3067\u3001\u30ec\u30ac\u30b7\u30fc\u8d77\u52d5\u30aa\u30d7\u30b7\u30e7\u30f3\u306f\u7121\u52b9\u5316\u3057\u3066\u30bb\u30ad\u30e5\u30a2\u30d6\u30fc\u30c8\u3092\u6709\u52b9\u5316\u3057\u305f\u3002"),(0,a.kt)("h2",{id:"windows-11-\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},"Windows 11 \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,a.kt)("p",null,"Windows 10 \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u304c\u6210\u529f\u3057\u3001\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u3082\u3059\u3079\u3066\u9069\u7528\u3057\u305f\u72b6\u614b\u3067 Windows 11 \u306e\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u30c4\u30fc\u30eb\u3092\u5b9f\u884c\u3057\u305f\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","M.2 \u306e\u66f8\u304d\u8fbc\u307f\u304c\u9ad8\u901f\u306a\u304a\u9670\u3067\u3001\u307b\u3068\u3093\u3069\u6642\u9593\u3082\u304b\u304b\u3089\u305a\u7121\u4e8b\u306b\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u304c\u5b8c\u4e86\u3002\n\u8db3\u639b\u30514\u65e5\u304b\u3051\u3066\u65b0\u3057\u3044 OS \u306e UI \u3092\u76ee\u306b\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u305f\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"windows11-task-manager",src:n(654).Z,width:"3840",height:"2160"})),(0,a.kt)("h2",{id:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"winget")," \u304c\u304b\u306a\u308a\u4f7f\u3044\u3084\u3059\u304f\u306a\u3063\u3066\u3044\u3066\u3001 Windows 11 \u3060\u3068\u6a19\u6e96\u3067\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u305f\u3002\n\u30d1\u30c3\u30b1\u30fc\u30b8\u540d\u3092\u6307\u5b9a\u3057\u3066 install \u3059\u308b\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u7528\u610f\u3057\u3066\u304a\u304f\u3060\u3051\u3067\u3001\u307b\u3068\u3093\u3069\u81ea\u52d5\u7684\u306b\u5fc5\u8981\u306a\u30c4\u30fc\u30eb\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u304c\u7d42\u308f\u3063\u3066\u3057\u307e\u3063\u305f\u3002"),(0,a.kt)("p",null,"\u8a2d\u5b9a\u3092\u5fa9\u5143\u3059\u308b\u30b9\u30af\u30ea\u30d7\u30c8\u3082\u4f5c\u3063\u3066\u304a\u304f\u3068\u3082\u3063\u3068\u697d\u304c\u3067\u304d\u305d\u3046\u3060\u304c\u3001\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u5dee\u7570\u306b\u3088\u3063\u3066\u5fae\u5999\u306b\u6319\u52d5\u304c\u9055\u3063\u305f\u308a\u3059\u308b\u306e\u3067\n\u3053\u306e\u3042\u305f\u308a\u306f\u52d5\u4f5c\u78ba\u8a8d\u3082\u517c\u306d\u3066\u624b\u52d5\u64cd\u4f5c\u3067\u898b\u3066\u3044\u304f\u611f\u3058\u3067\u3082\u826f\u3044\u304b\u3082\u77e5\u308c\u306a\u3044\u3002"),(0,a.kt)("h2",{id:"\u7d42\u308f\u308a"},"\u7d42\u308f\u308a"),(0,a.kt)("p",null,"PC \u5165\u308c\u66ff\u3048\u3082\u5b8c\u4e86\u3057\u3066\u3001\u306a\u306b\u3082\u304b\u3082\u304c\u30b5\u30af\u30b5\u30af\u52d5\u4f5c\u3057\u3066\u304a\u308a\u3001Windows 11 \u4f7f\u3044\u5012\u3057\u3066\u307f\u3088\u3046\u3068\u3044\u3046\u6c17\u6301\u3061\u306b\u306a\u3063\u3066\u3044\u308b\u3002"),(0,a.kt)("p",null,"\u4eca\u306e\u3068\u3053\u308d Windows 10 \u3067\u52d5\u4f5c\u3057\u3066\u3044\u3066 11 \u3067\u306f\u52d5\u304b\u306a\u3044\u3068\u3044\u3046\u3082\u306e\u306f\u4e00\u3064\u3082\u306a\u3044\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","UI \u306f\u597d\u304d\u5acc\u3044\u3042\u308b\u3068\u601d\u3046\u304c\u3001\u89d2\u4e38\u306e\u30a6\u30a3\u30f3\u30c9\u30a6\u30c7\u30b6\u30a4\u30f3\u306f\u3057\u3070\u3089\u304f\u4f7f\u3063\u3066\u3044\u305f\u3089\u6163\u308c\u3066\u3057\u307e\u3063\u305f\u3002"),(0,a.kt)("p",null,"\u30a8\u30af\u30b9\u30d7\u30ed\u30fc\u30e9\u306e\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u30e1\u30cb\u30e5\u30fc\u306f\u3001\u5206\u304b\u308a\u3084\u3059\u3055\u3092\u8ffd\u53ca\u3057\u3066\u73fe\u72b6\u306e\u5f62\u306b\u306a\u3063\u305f\u3068\u601d\u308f\u308c\u308b\u304c\u3001\n\u304b\u306a\u308a\u306e\u983b\u5ea6\u3067\u300cShow more options\u300d\u3092\u9078\u3093\u3067\u65e7\u6765\u306e\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u30e1\u30cb\u30e5\u30fc\u3092\u8868\u793a\u3057\u3066\u3044\u308b\u6c17\u304c\u3059\u308b\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u65e5\u5e38\u7684\u306a\u64cd\u4f5c\u6027\u306f\u5c11\u3057\u3065\u3064\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3057\u3066\u3044\u3053\u3046\u3068\u601d\u3046\u3002"),(0,a.kt)("p",null,"\u305b\u3063\u304b\u304f\u3060\u304b\u3089\u8fd1\u3044\u3046\u3061\u306b ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/apps/winui/"},"WinUI 3")," \u306b\u3082\u5165\u9580\u3057\u3066\u307f\u3088\u3046\u304b\u306a\u3002"))}m.isMDXComponent=!0},654:function(t,e,n){e.Z=n.p+"assets/images/windows11-task-manager-57bea7965a95b62fa50c357270cf9be4.png"}}]);