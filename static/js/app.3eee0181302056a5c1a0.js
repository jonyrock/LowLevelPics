webpackJsonp([0,2],[,function(t,e,r){r(68);var n=r(0)(r(36),r(124),"data-v-5c0a2df5",null);t.exports=n.exports},,function(t,e,r){r(60);var n=r(0)(r(49),r(113),"data-v-32f45b12",null);t.exports=n.exports},,function(t,e,r){var n=r(0)(null,r(134),null,null);t.exports=n.exports},function(t,e,r){var n=r(0)(r(17),r(122),null,null);t.exports=n.exports},function(t,e,r){var n=r(0)(r(32),r(120),null,null);t.exports=n.exports},function(t,e,r){r(69);var n=r(0)(r(33),r(125),"data-v-5c779515",null);t.exports=n.exports},function(t,e,r){r(61);var n=r(0)(r(35),r(114),"data-v-33c5e2cc",null);t.exports=n.exports},function(t,e,r){var n=r(0)(r(39),r(128),null,null);t.exports=n.exports},function(t,e,r){r(62);var n=r(0)(r(47),r(115),"data-v-3803e8a9",null);t.exports=n.exports},,function(t,e,r){"use strict";var n=r(2),s=r.n(n);s.a.component("block",r(79)),s.a.component("arrow",r(77)),s.a.component("labeledArrow",r(83)),s.a.component("dearrow",r(82)),s.a.component("curvyArrow",r(81)),s.a.component("blockTitle",r(78)),s.a.component("boxedText",r(80)),s.a.component("tdots",r(84))},function(t,e,r){r(67);var n=r(0)(r(16),r(123),null,null);t.exports=n.exports},function(t,e,r){r(52);var n=r(0)(r(26),r(103),null,null);t.exports=n.exports},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app",components:{pics:r(89)}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={components:{arrowEndPath:r(5)}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=21;e.default={props:{x1:{type:Number,required:!0},y1:{type:Number,required:!0},x2:{type:Number,required:!0},y2:{type:Number,required:!0},isDashed:{type:Boolean,default:!1},strokeWidth:{type:Number,default:2}},components:{arrowEnd:r(6)},computed:{cx1:function(){return this.x1},cy1:function(){return this.y1},cx2:function(){return this.x2-this.ev[0]*n},cy2:function(){return this.y2-this.ev[1]*n},ev:function(){var t=[this.x2-this.x1,this.y2-this.y1],e=Math.sqrt(t[0]*t[0]+t[1]*t[1]);return[t[0]/e,t[1]/e]}}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{x:0}},mounted:function(){var t=this.$parent.$el.getBBox();this.x=(t.width+t.x)/2}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["width","height","x","y","label"],computed:{translate:function(){return"translate("+this.x+", "+this.y+")"}}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{x:{type:Number,default:0},y:{type:Number,default:0},value:{type:String}},computed:{translate:function(){return"translate("+this.x+", "+this.y+")"},letters:function(){return this.value.split("").map(function(t,e){return{value:t,i:e,x:20*e}})}}}},function(t,e,r){"use strict";function n(){var t=12*this.strokeWidth,e=2*this.strokeWidth;this.corner&&(e=0);var r={rl:[[t,-e],[-t,e]],tr:[[-e,-t],[t,e]],rr:[[t,-e],[t,e]]},n=r[this.orientation];if("rl"==this.orientation&&this.y1<this.y2&&(n[0][1]=e,n[1][1]=-e),!n)throw new Error("Can`t find orientation");return[[n[0][0]+this.x1,n[0][1]+this.y1],[n[1][0]+this.x2,n[1][1]+this.y2]]}Object.defineProperty(e,"__esModule",{value:!0});var s=r(51);e.default={props:{x1:{type:Number,required:!0},y1:{type:Number,required:!0},x2:{type:Number,required:!0},y2:{type:Number,required:!0},isDashed:{type:Boolean,default:!1},orientation:{type:String,default:"rl"},strokeWidth:{type:Number,default:2},corner:{type:Boolean,default:!1}},computed:{d:function(){var t=n.bind(this)(),e=[this.x2,this.y2],r=9*this.strokeWidth,a=this.orientation[this.orientation.length-1];return"l"===a&&(e[0]-=r,this.corner||(t[1][0]-=r)),"r"===a&&(e[0]+=r,this.corner||(t[1][0]+=r)),s.line().curve(this.corner?s.curveLinear:s.curveCatmullRom).x(function(t){return t[0]}).y(function(t){return t[1]})([[this.x1,this.y1],t[0],t[1],e])},dashArray:function(){return this.isDashed?"5, 5":"0"},marker:function(){return this.corner?"carrow-end-l":"carrow-end-"+this.orientation[this.orientation.length-1]}},components:{arrowEndPath:r(5)}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=22;e.default={props:["x1","y1","x2","y2"],components:{arrowEnd:r(6)},computed:{cx1:function(){return+this.x1+this.ev[0]*n},cy1:function(){return+this.y1+this.ev[1]*n},cx2:function(){return+this.x2-this.ev[0]*n},cy2:function(){return+this.y2-this.ev[1]*n},ev:function(){var t=[this.x2-this.x1,this.y2-this.y1],e=Math.sqrt(t[0]*t[0]+t[1]*t[1]);return[t[0]/e,t[1]/e]}}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=25;e.default={props:["x1","y1","x2","y2"],data:function(){return{slotTransform:""}},mounted:function(){var t=this.$slots.default[0].elm,e=t.getBBox(),r=this.mx,n=this.my;r-=e.x,r-=e.width/2,n-=e.y,n-=e.height/2,this.slotTransform="translate("+r+", "+n+")"},computed:{mx:function(){return(+this.x1+ +this.x2)/2},my:function(){return(+this.y1+ +this.y2)/2},anchors:function(){return[{x:+this.x1,y:+this.y1},{x:+this.mx-this.ev.x*n/2,y:+this.my-this.ev.y*n/2},{x:this.mx+this.ev.x*n/2,y:this.my+this.ev.y*n/2},{x:+this.x2,y:+this.y2}]},ev:function(){var t=[this.x2-this.x1,this.y2-this.y1],e=Math.sqrt(t[0]*t[0]+t[1]*t[1]);return{x:t[0]/e,y:t[1]/e}}}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{x:{type:Number,required:!0},y:{type:Number,required:!0}}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["picName"]}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["name","x","y"],components:{},computed:{},methods:{}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={components:{fc:r(85)},computed:{},methods:{}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{height:{type:Number,default:185}}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={components:{memory:r(7)},computed:{},methods:{}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(2);r.n(n).a.component("cpuBase",r(87)),e.default={components:{p1:r(101),p2:r(102),p3_1:r(91),p3_2:r(92),p4:r(90),p5:r(86),p6:r(88),p7:r(94)}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["x","y"],components:{mu:r(8)}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["address","y","value"],computed:{translate:function(){return"translate(0, "+this.y+")"}}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={components:{r:r(1),rb:r(9),mu:r(8)},computed:{leftX:function(){return 50},rightX:function(){return 130}},methods:{line:function(t){return 20*t+25}}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(4);e.default={props:["x","y","value"],components:{r:r(1)},computed:{name:function(){return this.$slots.default[0].text},transform:function(){return"translate("+(this.x-40)+" "+(this.y+5)+") scale(0.5)"},value1:function(){return n.take(this.value,8).join("")},value2:function(){return n.drop(this.value,8).join("")}},data:function(){return{}}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["x","y"]}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={components:{r:r(1)},computed:{leftX:function(){return 50},rightX:function(){return 130}},methods:{line:function(t){return 20*t+25}}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={components:{rb:r(9)},computed:{leftX:function(){return 46.5},rightX:function(){return 133.5}},methods:{line:function(t){return 49*t-10}}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{x:{type:Number,required:!0},y:{type:Number,required:!0},text:{type:String,required:!0}},computed:{lines:function(){var t=20,e=this.text.split(","),r=this.y-e.length*t/2;return e.map(function(e,n){return{text:e,y:n*t+r}})}}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{x:{type:Number,required:!0},y:{type:Number,required:!0}}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={components:{tb:r(3),il:r(95),sep:r(11),r:r(1),bt:r(10),memory:r(96),pointers:r(99),sn:r(100)},computed:{lis:function(){return[{x:0,name:"Page Directory,Pointer Tables",items:"bb.s5b.b",filled:["13","","5","9","4"]},{x:160,name:"Page Directory",items:"bb.s6.bb",filled:["3","3","6","7","4"]},{x:320,name:"Page Table",items:"bs3.bb.b",filled:["14","3","","","0"]}]}},methods:{}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{name:{type:String,required:!0},x:{type:Number,required:!0},items:{type:String,required:!0},filled:{type:[Array,String],default:function(){return[]}}},components:{tb:r(3),sep:r(11),bt:r(10)},computed:{blocks:function(){for(var t=0,e=[],r=0,n=0;n<this.items.length;n++){var s=this.items[n],a={type:s};a.y=t,"b"!=s&&"s"!=s||(t+=120,a.filled=this.filled[r],r++),"."==s&&(t+=15),"s"==s&&(a.shift=+this.items[n+1],n++),e.push(a)}return e}}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{x:{type:Number,required:!0},y:{type:Number,required:!0}},components:{pf:r(97)}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{x:{type:Number,default:0},y:{type:Number,required:!0},shift:{type:Number,default:0},filled:{type:[String,Array],default:""}},components:{tb:r(3)}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{x1:{type:Number,required:!0},y1:{type:Number,required:!0},x2:{type:Number,required:!0},y2:{type:Number,required:!0},isPath:{type:Boolean,default:!1}},computed:{lines:function(){var t=20,e=this.text.split(","),r=this.y-e.length*t/2;return e.map(function(e,n){return{text:e,y:n*t+r}})}}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={components:{pt:r(98)}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{x:{type:Number,required:!0}}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{x:{type:Number,required:!0},y:{type:Number,required:!0},name:{type:String,required:!0}}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(4),s=10;e.default={props:{cols:{type:Number,required:!0},x:{type:Number,required:!0},y:{type:Number,required:!0},shift:{type:Number,default:0},filled:{type:[String,Array],default:""}},components:{eti:r(93)},computed:{height:function(){return this.cols*s},ccols:function(){var t=this.filled;return n.map(Array(this.cols-1),function(e,r){return{y:(r+1)*s,hole:!~t.indexOf(r+"")}})},holes:function(){var t="string"==typeof this.filled?this.filled.split("").map(function(t){return+t}):this.filled;return n(n.range(this.cols)).difference(t).map(function(t){return t*s}).value()},shiftY2:function(){return this.shift*s}},methods:{}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={components:{m:r(7)}}},,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,r){var n=r(0)(r(18),r(132),null,null);t.exports=n.exports},function(t,e,r){var n=r(0)(r(19),r(118),null,null);t.exports=n.exports},function(t,e,r){r(59);var n=r(0)(r(20),r(112),"data-v-31ec5277",null);t.exports=n.exports},function(t,e,r){r(65);var n=r(0)(r(21),r(119),"data-v-49dc7d14",null);t.exports=n.exports},function(t,e,r){r(66);var n=r(0)(r(22),r(121),"data-v-52027a29",null);t.exports=n.exports},function(t,e,r){r(72);var n=r(0)(r(23),r(133),"data-v-80fda7dc",null);t.exports=n.exports},function(t,e,r){r(75);var n=r(0)(r(24),r(137),"data-v-9a0ed18e",null);t.exports=n.exports},function(t,e,r){var n=r(0)(r(25),r(131),null,null);t.exports=n.exports},function(t,e,r){r(53);var n=r(0)(r(27),r(104),"data-v-01f722b2",null);t.exports=n.exports},function(t,e,r){r(71);var n=r(0)(r(28),r(130),"data-v-7ab5dd42",null);t.exports=n.exports},function(t,e,r){r(55);var n=r(0)(r(29),r(106),"data-v-043fbc2e",null);t.exports=n.exports},function(t,e,r){r(57);var n=r(0)(r(30),r(108),"data-v-264b0077",null);t.exports=n.exports},function(t,e,r){r(76);var n=r(0)(r(31),r(138),null,null);t.exports=n.exports},function(t,e,r){r(56);var n=r(0)(r(34),r(107),"data-v-1b85a58f",null);t.exports=n.exports},function(t,e,r){r(64);var n=r(0)(r(37),r(117),null,null);t.exports=n.exports},function(t,e,r){r(63);var n=r(0)(r(38),r(116),null,null);t.exports=n.exports},function(t,e,r){var n=r(0)(r(40),r(126),null,null);t.exports=n.exports},function(t,e,r){r(70);var n=r(0)(r(41),r(129),"data-v-79592616",null);t.exports=n.exports},function(t,e,r){r(73);var n=r(0)(r(42),r(135),"data-v-879e338c",null);t.exports=n.exports},function(t,e,r){r(54);var n=r(0)(r(43),r(105),"data-v-03950e26",null);t.exports=n.exports},function(t,e,r){var n=r(0)(r(44),r(127),null,null);t.exports=n.exports},function(t,e,r){var n=r(0)(r(45),r(139),null,null);t.exports=n.exports},function(t,e,r){var n=r(0)(r(46),r(109),null,null);t.exports=n.exports},function(t,e,r){r(74);var n=r(0)(r(48),r(136),"data-v-906b3f3c",null);t.exports=n.exports},function(t,e,r){var n=r(0)(null,r(111),null,null);t.exports=n.exports},function(t,e,r){r(58);var n=r(0)(r(50),r(110),"data-v-2b4f782f",null);t.exports=n.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.picName?r("h3",[t._v(t._s(t.picName))]):t._e(),t._v(" "),t._t("default")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("g",{attrs:{transform:"translate("+t.x+", "+t.y+")"}},[r("text",{staticClass:"monofont",attrs:{"text-anchor":"middle",x:"90",y:"20"}},[t._v("\n    "+t._s(t.name)+".asm\n  ")]),t._v(" "),r("arrow",{attrs:{x1:"90",y1:"25",x2:"90",y2:"60"}}),t._v(" "),r("g",{attrs:{transform:"translate(0,61)"}},[r("block",{attrs:{width:"180",height:"70",x:"5",y:"0",label:"Preprocessor"}}),t._v(" "),r("block",{attrs:{width:"180",height:"70",x:"5",y:"150",label:"Compiler"}}),t._v(" "),r("labeledArrow",{attrs:{x1:"90",y1:"70",x2:"90",y2:"150"}},[r("text",[t._v("code with substitutions")])])],1),t._v(" "),r("g",{attrs:{transform:"translate(0,281)"}},[r("arrow",{attrs:{x1:"90",y1:"0",x2:"90",y2:"35"}}),t._v(" "),r("text",{staticClass:"monofont",attrs:{"text-anchor":"middle",x:"90",y:"50"}},[t._v("\n      "+t._s(t.name)+".o\n    ")])],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("block",{attrs:{x:t.x,y:t.y,width:"140",height:"485"}},[r("blockTitle",[t._v(" Physical Memory ")]),t._v(" "),r("g",{attrs:{transform:"translate(0, 40)"}},[r("pf",{attrs:{x:0,y:0,filled:"0123456789"}}),t._v(" "),r("pf",{attrs:{x:0,y:105,filled:"0123456789"}}),t._v(" "),r("tdots",{attrs:{x:60,y:205}}),t._v(" "),r("pf",{attrs:{x:0,y:225,shift:"4",filled:"0123456789"}}),t._v(" "),r("tdots",{attrs:{x:60,y:325}}),t._v(" "),r("pf",{attrs:{x:0,y:345,filled:"0123456789"}})],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("block",{attrs:{width:"190",height:t.height,x:"0",y:"0"}},[r("blockTitle",[t._v(" CPU ")]),t._v(" "),r("block",{attrs:{width:"180",height:"70",x:"5",y:"30",label:"Control Unit"}}),t._v(" "),r("block",{attrs:{width:"180",height:"70",x:"5",y:"105",label:"ALU"}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{attrs:{width:"592",height:"352"}},[r("g",{staticClass:"nonactive",attrs:{transform:"translate(1,1)"}},[r("cpuBase",{attrs:{height:350}})],1),t._v(" "),r("block",{attrs:{width:"180",height:160,x:"5",y:"181"}},[r("blockTitle",[t._v("Registers")]),t._v(" "),r("g",{staticClass:"nonactive"},[r("r",{attrs:{x:t.leftX,y:t.line(1)}},[t._v("rax")]),t._v(" "),r("r",{attrs:{x:t.leftX,y:t.line(2)}},[t._v("rbx")]),t._v(" "),r("r",{attrs:{x:t.leftX,y:t.line(3)}},[t._v("rcx")]),t._v(" "),r("r",{attrs:{x:t.leftX,y:t.line(4)}},[t._v("rdx")]),t._v(" "),r("r",{attrs:{x:t.leftX,y:t.line(6)}},[t._v("rip")]),t._v(" "),r("r",{attrs:{x:t.rightX,y:t.line(1)}},[t._v("rsi")]),t._v(" "),r("r",{attrs:{x:t.rightX,y:t.line(2)}},[t._v("rdi")]),t._v(" "),r("g",{staticClass:"active"},[r("rb",{attrs:{x:t.rightX,y:t.line(3.2),value:"00000000E2809473"}},[t._v("rsp")])],1),t._v(" "),r("r",{attrs:{x:t.leftX,y:t.line(5)}},[t._v("rbp")]),t._v(" "),r("r",{attrs:{x:t.rightX,y:t.line(6)}},[t._v("rflags")])],1)],1),t._v(" "),r("block",{staticClass:"nonactive",attrs:{width:"270",height:"250",x:"300",y:51}},[r("blockTitle",[t._v(" Memory ")]),t._v(" "),r("g",{attrs:{transform:"translate(10, 35)"}},[r("mu",{attrs:{y:"0",value:"11011100",address:"0000 0000"}}),t._v(" "),r("mu",{attrs:{y:"30",value:"10011110",address:"0000 0001"}}),t._v(" "),r("mu",{attrs:{y:"60",value:"11111001",address:"0000 0002"}}),t._v(" "),r("g",{staticClass:"active"},[r("mu",{attrs:{y:"120",value:"00010110",address:"E280 9473"}})],1),t._v(" "),r("mu",{attrs:{y:"180",value:"00110010",address:"FFFF FFFF"}})],1),t._v(" "),r("tdots",{attrs:{x:135,y:140}}),t._v(" "),r("tdots",{attrs:{x:135,y:200}})],1),t._v(" "),r("g",{staticClass:"nonactive"},[r("dearrow",{attrs:{x1:"190",y1:"100",x2:"300",y2:"100"}})],1),t._v(" "),r("curvyArrow",{attrs:{x1:178,y1:288,x2:304,y2:218.5,isDashed:!0}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{attrs:{width:"566",height:"352"}},[r("block",{attrs:{width:"180",height:"70",x:"5",y:"1",label:"Data Stack"}}),t._v(" "),r("block",{attrs:{width:"180",height:"70",x:"5",y:"121",label:"CPU"}}),t._v(" "),r("block",{attrs:{width:"180",height:"70",x:"5",y:"241",label:"Return Stack"}}),t._v(" "),r("memory",{attrs:{x:"295",y:62}}),t._v(" "),r("dearrow",{attrs:{x1:"90",y1:"71",x2:"90",y2:"121"}}),t._v(" "),r("dearrow",{attrs:{x1:"90",y1:"191",x2:"90",y2:"241"}}),t._v(" "),r("dearrow",{attrs:{x1:"185",y1:"156",x2:"295",y2:"156"}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("g",{attrs:{transform:"translate(0, 50)"}},[r("g",{attrs:{transform:"translate(160, 0)"}},[r("pt",{attrs:{x1:0,x2:79,y1:115,y2:205,isPath:!0}}),t._v(" "),r("pt",{attrs:{x1:0,x2:79,y1:145,y2:1}}),t._v(" "),r("pt",{attrs:{x1:0,x2:79,y1:165,y2:300}}),t._v(" "),r("pt",{attrs:{x1:0,x2:79,y1:285,y2:409}}),t._v(" "),r("pt",{attrs:{x1:0,x2:79,y1:335,y2:97}})],1),t._v(" "),r("g",{attrs:{transform:"translate(320, 0)"}},[r("pt",{attrs:{x1:0,x2:79,y1:13,y2:1}}),t._v(" "),r("pt",{attrs:{x1:0,x2:79,y1:29,y2:97}}),t._v(" "),r("pt",{attrs:{x1:0,x2:79,y1:249,y2:205,isPath:!0}}),t._v(" "),r("pt",{attrs:{x1:0,x2:79,y1:376,y2:313}}),t._v(" "),r("pt",{attrs:{x1:0,x2:79,y1:445,y2:409}})],1),t._v(" "),r("g",{attrs:{transform:"translate(480, 0)"}},[r("pt",{attrs:{x1:0,x2:79,y1:29,y2:1}}),t._v(" "),r("pt",{attrs:{x1:0,x2:79,y1:125,y2:205}}),t._v(" "),r("pt",{attrs:{x1:0,x2:79,y1:257,y2:97,isPath:!0}}),t._v(" "),r("pt",{attrs:{x1:0,x2:79,y1:372,y2:301}}),t._v(" "),r("pt",{attrs:{x1:0,x2:79,y1:445,y2:409}})],1),t._v(" "),r("g",{attrs:{transform:"translate(640, 0)"}},[r("pt",{attrs:{x1:0,x2:85,y1:13,y2:38}}),t._v(" "),r("pt",{attrs:{x1:0,x2:85,y1:37,y2:143}}),t._v(" "),r("pt",{attrs:{x1:0,x2:85,y1:125,y2:263,isPath:!0}}),t._v(" "),r("pt",{attrs:{x1:0,x2:85,y1:413,y2:383}})],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{attrs:{width:"272",height:"192"}},[r("m",{attrs:{x:"1",y:"1"}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{attrs:{width:"500",height:"220"}},[r("g",{attrs:{transform:"translate(10,10)"}},[r("cpuBase"),t._v(" "),r("block",{attrs:{width:"180",height:"70",x:"300",y:"65",label:"Memory"}}),t._v(" "),r("dearrow",{attrs:{x1:"190",y1:"100",x2:"300",y2:"100"}})],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("g",{attrs:{transform:t.translate}},[r("rect",{staticClass:"background",attrs:{width:t.width,height:t.height,rx:"10",ry:"10"}}),t._v(" "),t.label?r("text",{staticClass:"label",attrs:{"text-anchor":"middle",x:t.width/2,y:t.height/2+5}},[t._v(" "+t._s(t.label)+" ")]):t._e(),t._v(" "),t._t("default")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("g",{attrs:{transform:"translate("+t.x+", "+t.y+")"}},[t._l(t.ccols,function(t){return r("line",{attrs:{x1:"0",x2:"100",y1:t.y,y2:t.y}})}),t._v(" "),t._l(t.holes,function(t){return r("eti",{attrs:{x:.5,y:t}})}),t._v(" "),t.shift?r("curvyArrow",{attrs:{x1:102,x2:102,y1:0,y2:t.shiftY2,strokeWidth:.9,corner:!0,orientation:"rr"}}):t._e(),t._v(" "),r("rect",{attrs:{x:"0",y:"0",width:"100",height:t.height,fill:"none"}})],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("g",[r("r",{attrs:{x:t.x,y:t.y}},[t._v(" "+t._s(t.name)+" ")]),t._v(" "),r("g",{attrs:{transform:t.transform}},[r("boxedText",{attrs:{value:t.value1}}),t._v(" "),r("boxedText",{attrs:{value:t.value2,y:"29"}})],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("line",{attrs:{x1:t.x,x2:t.x,y1:"50",y2:"550"}})},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{attrs:{width:"192",height:"482"}},[r("g",{staticClass:"nonactive",attrs:{transform:"translate(1,1)"}},[r("cpuBase",{attrs:{height:480}})],1),t._v(" "),r("block",{attrs:{width:"180",height:287,x:"5",y:"181"}},[r("blockTitle",[t._v("Registers")]),t._v(" "),r("rb",{attrs:{x:t.leftX,y:t.line(1),value:"D64905E5E92004D3"}},[t._v("rax")]),t._v(" "),r("rb",{attrs:{x:t.leftX,y:t.line(2),value:"68D1071186DB5372"}},[t._v("rbx")]),t._v(" "),r("rb",{attrs:{x:t.leftX,y:t.line(3),value:"686DB5C539637133"}},[t._v("rcx")]),t._v(" "),r("rb",{attrs:{x:t.leftX,y:t.line(4),value:"735437D42396E5A1"}},[t._v("rdx")]),t._v(" "),r("rb",{attrs:{x:t.leftX,y:t.line(5.2),value:"72396437DD396E33"}},[t._v("rip")]),t._v(" "),r("rb",{attrs:{x:t.rightX,y:t.line(1),value:"E280947337D42391"}},[t._v("rsi")]),t._v(" "),r("rb",{attrs:{x:t.rightX,y:t.line(2),value:"534C972C3AD1248F"}},[t._v("rdi")]),t._v(" "),r("rb",{attrs:{x:t.rightX,y:t.line(3),value:"B3AD80ABD802E112"}},[t._v("rsp")]),t._v(" "),r("rb",{attrs:{x:t.rightX,y:t.line(4),value:"75732E3E8B7D4211"}},[t._v("rbp")]),t._v(" "),r("rb",{attrs:{x:t.rightX,y:t.line(5.2),value:"FF8B2489118BD2B5"}},[t._v("rflags")])],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{attrs:{width:"192",height:"352"}},[r("g",{staticClass:"nonactive",attrs:{transform:"translate(1,1)"}},[r("cpuBase",{attrs:{height:350}})],1),t._v(" "),r("block",{attrs:{width:"180",height:160,x:"5",y:"181"}},[r("blockTitle",[t._v("Registers")]),t._v(" "),r("r",{attrs:{x:t.leftX,y:t.line(1)}},[t._v("rax")]),t._v(" "),r("r",{attrs:{x:t.leftX,y:t.line(2)}},[t._v("rbx")]),t._v(" "),r("r",{attrs:{x:t.leftX,y:t.line(3)}},[t._v("rcx")]),t._v(" "),r("r",{attrs:{x:t.leftX,y:t.line(4)}},[t._v("rdx")]),t._v(" "),r("r",{attrs:{x:t.leftX,y:t.line(6)}},[t._v("rip")]),t._v(" "),r("r",{attrs:{x:t.rightX,y:t.line(1)}},[t._v("rsi")]),t._v(" "),r("r",{attrs:{x:t.rightX,y:t.line(2)}},[t._v("rdi")]),t._v(" "),r("r",{attrs:{x:t.rightX,y:t.line(3)}},[t._v("rsp")]),t._v(" "),r("r",{attrs:{x:t.rightX,y:t.line(4)}},[t._v("rbp")]),t._v(" "),r("r",{attrs:{x:t.rightX,y:t.line(6)}},[t._v("rflags")])],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("text",{attrs:{x:t.x,y:"20","text-anchor":"middle"}},[t._t("default")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("g",{attrs:{transform:t.translate}},[r("rect",{staticClass:"background",attrs:{width:"160",height:"25",rx:"1",ry:"1"}}),t._v(" "),t._l(t.letters,function(e){return r("g",[r("text",{staticClass:"monofont",attrs:{x:e.x+10,y:"18"}},[t._v("\n      "+t._s(e.value)+"\n    ")]),t._v(" "),0!=e.i?r("line",{class:e.i%4==0?"bigSeparator":"separator",attrs:{y1:"0",y2:"25",x1:e.x,x2:e.x}}):t._e()])})],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("block",{attrs:{width:"270",height:"190",x:t.x,y:t.y}},[r("blockTitle",[t._v(" Memory ")]),t._v(" "),r("g",{attrs:{transform:"translate(10, 35)"}},[r("mu",{attrs:{y:"0",value:"11011100",address:"0000 0000"}}),t._v(" "),r("mu",{attrs:{y:"30",value:"10011110",address:"0000 0001"}}),t._v(" "),r("mu",{attrs:{y:"60",value:"11111001",address:"0000 0002"}}),t._v(" "),r("mu",{attrs:{y:"120",value:"00110010",address:"FFFF FFFF"}})],1),t._v(" "),r("tdots",{attrs:{x:135,y:140}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("g",[r("defs",[r("marker",{attrs:{id:"carrow-end-r",markerWidth:"10",markerHeight:"10",refX:"0",refY:"4",orient:"auto",markerUnits:"strokeWidth"}},[r("g",{attrs:{transform:"translate(8,0) scale(-1,1)"}},[r("arrowEndPath")],1)]),t._v(" "),r("marker",{attrs:{id:"carrow-end-l",markerWidth:"10",markerHeight:"10",refX:"0",refY:"4",orient:"auto",markerUnits:"strokeWidth"}},[r("arrowEndPath")],1)]),t._v(" "),r("path",{staticClass:"linePath",attrs:{fill:"none",d:t.d,"stroke-width":t.strokeWidth,"marker-end":"url(#"+t.marker+")","stroke-dasharray":t.dashArray}})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("marker",{attrs:{id:"arrow-end",markerWidth:"12",markerHeight:"20",refX:"0",refY:"4",orient:"auto-start-reverse",markerUnits:"strokeWidth"}},[r("arrowEndPath")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("h1",[t._v(" Low level pics ")]),t._v(" "),r("pics")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("text",{staticClass:"monofont",attrs:{x:t.x,y:t.y}},[t._t("default")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("g",{attrs:{transform:t.translate}},[r("text",{staticClass:"monofont",attrs:{"text-anchor":"left",x:"0",y:"17.5"}},[t._v(t._s(t.address))]),t._v(" "),r("boxedText",{attrs:{x:90,value:t.value}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("g",{attrs:{transform:"translate("+t.x+", "+t.y+")"}},[r("rect",{attrs:{y:"1",fill:"url(#crosshatch)",width:"330",height:"31",transform:"scale(0.3)","stroke-width":"0"}})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("g",{attrs:{transform:"translate("+t.x+", "+t.y+")"}},[r("text",{attrs:{x:60,y:0,"text-anchor":"middle","font-size":"13"}},[t._v("\n    page frame\n  ")]),t._v(" "),r("g",{class:t.shift?"":"nonactive",attrs:{transform:"scale(0.8)"}},[r("tb",{attrs:{x:25,y:10,cols:10,width:40,shift:t.shift,filled:t.filled}})],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("g",t._l(t.lines,function(e){return r("text",{attrs:{x:t.x,y:e.y,"text-anchor":"middle"}},[t._v("\n    "+t._s(e.text)+"\n  ")])}))},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{attrs:{width:"850",height:"650"}},[r("defs",[r("pattern",{attrs:{id:"crosshatch",patternUnits:"userSpaceOnUse",width:"16",height:"16"}},[r("image",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc4JyBoZWlnaHQ9JzgnPgogIDxyZWN0IHdpZHRoPSc4JyBoZWlnaHQ9JzgnIGZpbGw9JyNmZmYnLz4KICA8cGF0aCBkPSdNMCAwTDggOFpNOCAwTDAgOFonIHN0cm9rZS13aWR0aD0nMC41JyBzdHJva2U9JyNhYWEnLz4KPC9zdmc+Cg==",x:"0",y:"0",width:"16",height:"16"}})])]),t._v(" "),r("bt",{attrs:{x:110,y:35,text:"Page Map, Level 4"}}),t._v(" "),r("g",{attrs:{id:"pml4",transform:"translate(60, 120)"}},[r("tb",{attrs:{x:0,y:0,cols:30,shift:4,filled:[4,7,9,21,26]}}),t._v(" "),r("r",{attrs:{x:"45",y:"-40"}},[t._v("cr3")]),t._v(" "),r("arrow",{attrs:{x1:40,x2:-7,y1:-35,y2:3,strokeWidth:"1"}})],1),t._v(" "),r("g",{attrs:{id:"innerLevels",transform:"translate(200, 1)"}},t._l(t.lis,function(t){return r("il",{attrs:{x:t.x,items:t.items,name:t.name,filled:t.filled}})})),t._v(" "),r("memory",{attrs:{x:705,y:40}}),t._v(" "),r("pointers"),t._v(" "),r("g",{attrs:{id:"address"}}),t._v(" "),r("g",{attrs:{id:"shift-names"}},[r("sn",{attrs:{x:163,y:116,name:"A"}}),t._v(" "),r("sn",{attrs:{x:321,y:252,name:"B"}}),t._v(" "),r("sn",{attrs:{x:481,y:252,name:"C"}}),t._v(" "),r("sn",{attrs:{x:641,y:145,name:"D"}}),t._v(" "),r("sn",{attrs:{x:806,y:310,name:"E"}})],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{attrs:{width:"580",height:"591"}},[r("fc",{attrs:{name:"first",x:"0",y:"0"}}),t._v(" "),r("fc",{attrs:{name:"second",x:"390",y:"0"}}),t._v(" "),r("block",{attrs:{width:"180",height:"70",x:"200",y:"370",label:"Linker"}}),t._v(" "),r("text",{attrs:{"text-anchor":"middle",x:"290",y:"330"}},[t._v("\n    libraries\n  ")]),t._v(" "),r("arrow",{attrs:{x1:"290",y1:335,x2:"290",y2:"370"}}),t._v(" "),r("block",{attrs:{width:"180",height:"70",x:"200",y:"520",label:"Loader"}}),t._v(" "),r("labeledArrow",{attrs:{x1:"290",y1:"440",x2:"290",y2:"520"}},[r("text",[t._v("executable file")])]),t._v(" "),r("arrow",{attrs:{x1:"90",y1:"340",x2:"200",y2:"410"}}),t._v(" "),r("arrow",{attrs:{x1:"480",y1:"340",x2:"380",y2:"410"}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("text",{attrs:{"font-weight":"bold",x:t.x,y:t.y,"text-anchor":"middle"}},[t._v(" ... ")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("g",[r("defs",[r("arrowEnd")],1),t._v(" "),r("line",{attrs:{x1:t.cx1,y1:t.cy1,x2:t.cx2,y2:t.cy2,"stroke-width":t.strokeWidth,"marker-end":"url(#arrow-end)",markerUnits:"10"}})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("g",[r("defs",[r("arrowEnd")],1),t._v(" "),r("line",{attrs:{x1:t.cx1,y1:t.cy1-2,x2:t.cx2,y2:t.cy2-2,"stroke-width":"2"}}),t._v(" "),r("line",{staticStyle:{stroke:"none"},attrs:{x1:t.cx1,y1:t.cy1,x2:t.cx2,y2:t.cy2,"stroke-width":"2","marker-end":"url(#arrow-end)","marker-start":"url(#arrow-end)"}}),t._v(" "),r("line",{attrs:{x1:t.cx1,y1:t.cy1+2,x2:t.cx2,y2:t.cy2+2,"stroke-width":"2"}})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("path",{attrs:{d:"M0,1 L0,7 L9,4 z"}})},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("g",{attrs:{transform:"translate("+t.x+", 0)"}},[r("sep",{attrs:{x:0}}),t._v(" "),r("bt",{attrs:{text:t.name,x:80,y:35}}),t._v(" "),r("g",{attrs:{transform:"translate(0, 50) scale(0.8)"}},t._l(t.blocks,function(e){return r("g",["b"==e.type?r("tb",{staticClass:"nonactive",attrs:{x:50,y:e.y,cols:10,filled:e.filled}}):t._e(),t._v(" "),"s"==e.type?r("tb",{attrs:{x:50,y:e.y,cols:10,filled:e.filled,shift:e.shift}}):t._e(),t._v(" "),"."==e.type?r("tdots",{attrs:{x:100,y:e.y}}):t._e()],1)}))],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("g",{attrs:{transform:"translate(12,13)"}},[r("text",{attrs:{x:t.x,y:t.y}},[t._v(" "+t._s(t.name)+" ")])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("g",[r("arrow",{attrs:{x1:t.anchors[2].x,y1:t.anchors[2].y,x2:t.anchors[3].x,y2:t.anchors[3].y}}),t._v(" "),r("line",{attrs:{x1:t.anchors[0].x,y1:t.anchors[0].y,x2:t.anchors[1].x,y2:t.anchors[1].y}}),t._v(" "),r("g",{attrs:{transform:t.slotTransform}},[t._t("default")],2)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("picHolder",{attrs:{picName:"Von Neumann Architecture - 1"}},[r("p1")],1),t._v(" "),r("picHolder",{attrs:{picName:"Von Neumann Architecture - 2"}},[r("p2")],1),t._v(" "),r("table",{staticStyle:{width:"500px"}},[r("tr",[r("td",[r("picHolder",{attrs:{picName:"Registers - Version 1"}},[r("p3_1")],1)],1),t._v(" "),r("td",[r("picHolder",{attrs:{picName:"Registers - Version 2"}},[r("p3_2")],1)],1)])]),t._v(" "),r("picHolder",{attrs:{picName:"Stack register"}},[r("p4")],1),t._v(" "),r("picHolder",{attrs:{picName:"Compilation pipeline"}},[r("p5")],1),t._v(" "),r("picHolder",{attrs:{picName:"Forth machine"}},[r("p6")],1),t._v(" "),r("picHolder",{attrs:{picName:"Virtual address translation"}},[r("p7")],1),t._v(" "),r("div",{staticStyle:{height:"400px"}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("curvyArrow",{class:t.isPath?"":"nonactive",attrs:{x1:t.x1,x2:t.x2,y1:t.y1,y2:t.y2,strokeWidth:1,orientation:"rl",isDashed:!t.isPath}})},staticRenderFns:[]}},,,function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(2),s=r.n(n),a=r(14),i=r.n(a);r(13);s.a.component("picHolder",r(15)),new s.a({el:"#app",template:"<app/>",components:{app:i.a}})}],[142]);
//# sourceMappingURL=app.3eee0181302056a5c1a0.js.map