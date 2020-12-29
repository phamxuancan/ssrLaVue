!function(root,factory){"object"==typeof exports&&"object"==typeof module?module.exports=factory():"function"==typeof define&&define.amd?define([],factory):"object"==typeof exports?exports.VueNoUiSlider=factory():root.VueNoUiSlider=factory()}(this,function(){return function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.i=function(value){return value},__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{configurable:!1,enumerable:!0,get:getter})},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=2)}([function(module,exports){var g,_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj};g=function(){return this}();try{g=g||Function("return this")()||(0,eval)("this")}catch(e){"object"===("undefined"==typeof window?"undefined":_typeof(window))&&(g=window)}module.exports=g},function(module,exports,__webpack_require__){__webpack_require__(5);var Component=__webpack_require__(6)(__webpack_require__(4),__webpack_require__(7),"data-v-e91d3600",null);module.exports=Component.exports},function(module,__webpack_exports__,__webpack_require__){"use strict";(function(global){function install(Vue){Vue.component("vue-nouislider",__WEBPACK_IMPORTED_MODULE_0__components_noUiSlider_vue___default.a)}Object.defineProperty(__webpack_exports__,"__esModule",{value:!0});var __WEBPACK_IMPORTED_MODULE_0__components_noUiSlider_vue__=__webpack_require__(1),__WEBPACK_IMPORTED_MODULE_0__components_noUiSlider_vue___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_noUiSlider_vue__);__webpack_require__.d(__webpack_exports__,"VueNoUiSlider",function(){return __WEBPACK_IMPORTED_MODULE_0__components_noUiSlider_vue___default.a}),__webpack_exports__.install=install;var plugin={install:install};__webpack_exports__.default=plugin;var GlobalVue=null;"undefined"!=typeof window?GlobalVue=window.Vue:void 0!==global&&(GlobalVue=global.Vue),GlobalVue&&GlobalVue.use(plugin)}).call(__webpack_exports__,__webpack_require__(0))},function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_FACTORY__,__WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__,_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj};/*! nouislider - 9.2.0 - 2017-01-11 10:35:34 */
!function(factory){__WEBPACK_AMD_DEFINE_ARRAY__=[],__WEBPACK_AMD_DEFINE_FACTORY__=factory,void 0!==(__WEBPACK_AMD_DEFINE_RESULT__="function"==typeof __WEBPACK_AMD_DEFINE_FACTORY__?__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__):__WEBPACK_AMD_DEFINE_FACTORY__)&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}(function(){"use strict";function addNodeTo(target,className){var div=document.createElement("div");return addClass(div,className),target.appendChild(div),div}function unique(array){return array.filter(function(a){return!this[a]&&(this[a]=!0)},{})}function closest(value,to){return Math.round(value/to)*to}function offset(elem,orientation){var rect=elem.getBoundingClientRect(),doc=elem.ownerDocument,docElem=doc.documentElement,pageOffset=getPageOffset();return/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(pageOffset.x=0),orientation?rect.top+pageOffset.y-docElem.clientTop:rect.left+pageOffset.x-docElem.clientLeft}function isNumeric(a){return"number"==typeof a&&!isNaN(a)&&isFinite(a)}function addClassFor(element,className,duration){duration>0&&(addClass(element,className),setTimeout(function(){removeClass(element,className)},duration))}function limit(a){return Math.max(Math.min(a,100),0)}function asArray(a){return Array.isArray(a)?a:[a]}function countDecimals(numStr){numStr=String(numStr);var pieces=numStr.split(".");return pieces.length>1?pieces[1].length:0}function addClass(el,className){el.classList?el.classList.add(className):el.className+=" "+className}function removeClass(el,className){el.classList?el.classList.remove(className):el.className=el.className.replace(new RegExp("(^|\\b)"+className.split(" ").join("|")+"(\\b|$)","gi")," ")}function hasClass(el,className){return el.classList?el.classList.contains(className):new RegExp("\\b"+className+"\\b").test(el.className)}function getPageOffset(){var supportPageOffset=void 0!==window.pageXOffset,isCSS1Compat="CSS1Compat"===(document.compatMode||"");return{x:supportPageOffset?window.pageXOffset:isCSS1Compat?document.documentElement.scrollLeft:document.body.scrollLeft,y:supportPageOffset?window.pageYOffset:isCSS1Compat?document.documentElement.scrollTop:document.body.scrollTop}}function getActions(){return window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"}}function subRangeRatio(pa,pb){return 100/(pb-pa)}function fromPercentage(range,value){return 100*value/(range[1]-range[0])}function toPercentage(range,value){return fromPercentage(range,range[0]<0?value+Math.abs(range[0]):value-range[0])}function isPercentage(range,value){return value*(range[1]-range[0])/100+range[0]}function getJ(value,arr){for(var j=1;value>=arr[j];)j+=1;return j}function toStepping(xVal,xPct,value){if(value>=xVal.slice(-1)[0])return 100;var va,vb,pa,pb,j=getJ(value,xVal);return va=xVal[j-1],vb=xVal[j],pa=xPct[j-1],pb=xPct[j],pa+toPercentage([va,vb],value)/subRangeRatio(pa,pb)}function fromStepping(xVal,xPct,value){if(value>=100)return xVal.slice(-1)[0];var va,vb,pa,pb,j=getJ(value,xPct);return va=xVal[j-1],vb=xVal[j],pa=xPct[j-1],pb=xPct[j],isPercentage([va,vb],(value-pa)*subRangeRatio(pa,pb))}function getStep(xPct,xSteps,snap,value){if(100===value)return value;var a,b,j=getJ(value,xPct);return snap?(a=xPct[j-1],b=xPct[j],value-a>(b-a)/2?b:a):xSteps[j-1]?xPct[j-1]+closest(value-xPct[j-1],xSteps[j-1]):value}function handleEntryPoint(index,value,that){var percentage;if("number"==typeof value&&(value=[value]),"[object Array]"!==Object.prototype.toString.call(value))throw new Error("noUiSlider ("+VERSION+"): 'range' contains invalid value.");if(percentage="min"===index?0:"max"===index?100:parseFloat(index),!isNumeric(percentage)||!isNumeric(value[0]))throw new Error("noUiSlider ("+VERSION+"): 'range' value isn't numeric.");that.xPct.push(percentage),that.xVal.push(value[0]),percentage?that.xSteps.push(!isNaN(value[1])&&value[1]):isNaN(value[1])||(that.xSteps[0]=value[1]),that.xHighestCompleteStep.push(0)}function handleStepPoint(i,n,that){if(!n)return!0;that.xSteps[i]=fromPercentage([that.xVal[i],that.xVal[i+1]],n)/subRangeRatio(that.xPct[i],that.xPct[i+1]);var totalSteps=(that.xVal[i+1]-that.xVal[i])/that.xNumSteps[i],highestStep=Math.ceil(Number(totalSteps.toFixed(3))-1),step=that.xVal[i]+that.xNumSteps[i]*highestStep;that.xHighestCompleteStep[i]=step}function Spectrum(entry,snap,direction,singleStep){this.xPct=[],this.xVal=[],this.xSteps=[singleStep||!1],this.xNumSteps=[!1],this.xHighestCompleteStep=[],this.snap=snap,this.direction=direction;var index,ordered=[];for(index in entry)entry.hasOwnProperty(index)&&ordered.push([entry[index],index]);for(ordered.length&&"object"===_typeof(ordered[0][0])?ordered.sort(function(a,b){return a[0][0]-b[0][0]}):ordered.sort(function(a,b){return a[0]-b[0]}),index=0;index<ordered.length;index++)handleEntryPoint(ordered[index][1],ordered[index][0],this);for(this.xNumSteps=this.xSteps.slice(0),index=0;index<this.xNumSteps.length;index++)handleStepPoint(index,this.xNumSteps[index],this)}function testStep(parsed,entry){if(!isNumeric(entry))throw new Error("noUiSlider ("+VERSION+"): 'step' is not numeric.");parsed.singleStep=entry}function testRange(parsed,entry){if("object"!==(void 0===entry?"undefined":_typeof(entry))||Array.isArray(entry))throw new Error("noUiSlider ("+VERSION+"): 'range' is not an object.");if(void 0===entry.min||void 0===entry.max)throw new Error("noUiSlider ("+VERSION+"): Missing 'min' or 'max' in 'range'.");if(entry.min===entry.max)throw new Error("noUiSlider ("+VERSION+"): 'range' 'min' and 'max' cannot be equal.");parsed.spectrum=new Spectrum(entry,parsed.snap,parsed.dir,parsed.singleStep)}function testStart(parsed,entry){if(entry=asArray(entry),!Array.isArray(entry)||!entry.length)throw new Error("noUiSlider ("+VERSION+"): 'start' option is incorrect.");parsed.handles=entry.length,parsed.start=entry}function testSnap(parsed,entry){if(parsed.snap=entry,"boolean"!=typeof entry)throw new Error("noUiSlider ("+VERSION+"): 'snap' option must be a boolean.")}function testAnimate(parsed,entry){if(parsed.animate=entry,"boolean"!=typeof entry)throw new Error("noUiSlider ("+VERSION+"): 'animate' option must be a boolean.")}function testAnimationDuration(parsed,entry){if(parsed.animationDuration=entry,"number"!=typeof entry)throw new Error("noUiSlider ("+VERSION+"): 'animationDuration' option must be a number.")}function testConnect(parsed,entry){var i,connect=[!1];if("lower"===entry?entry=[!0,!1]:"upper"===entry&&(entry=[!1,!0]),!0===entry||!1===entry){for(i=1;i<parsed.handles;i++)connect.push(entry);connect.push(!1)}else{if(!Array.isArray(entry)||!entry.length||entry.length!==parsed.handles+1)throw new Error("noUiSlider ("+VERSION+"): 'connect' option doesn't match handle count.");connect=entry}parsed.connect=connect}function testOrientation(parsed,entry){switch(entry){case"horizontal":parsed.ort=0;break;case"vertical":parsed.ort=1;break;default:throw new Error("noUiSlider ("+VERSION+"): 'orientation' option is invalid.")}}function testMargin(parsed,entry){if(!isNumeric(entry))throw new Error("noUiSlider ("+VERSION+"): 'margin' option must be numeric.");if(0!==entry&&(parsed.margin=parsed.spectrum.getMargin(entry),!parsed.margin))throw new Error("noUiSlider ("+VERSION+"): 'margin' option is only supported on linear sliders.")}function testLimit(parsed,entry){if(!isNumeric(entry))throw new Error("noUiSlider ("+VERSION+"): 'limit' option must be numeric.");if(parsed.limit=parsed.spectrum.getMargin(entry),!parsed.limit||parsed.handles<2)throw new Error("noUiSlider ("+VERSION+"): 'limit' option is only supported on linear sliders with 2 or more handles.")}function testPadding(parsed,entry){if(!isNumeric(entry))throw new Error("noUiSlider ("+VERSION+"): 'padding' option must be numeric.");if(0!==entry){if(parsed.padding=parsed.spectrum.getMargin(entry),!parsed.padding)throw new Error("noUiSlider ("+VERSION+"): 'padding' option is only supported on linear sliders.");if(parsed.padding<0)throw new Error("noUiSlider ("+VERSION+"): 'padding' option must be a positive number.");if(parsed.padding>=50)throw new Error("noUiSlider ("+VERSION+"): 'padding' option must be less than half the range.")}}function testDirection(parsed,entry){switch(entry){case"ltr":parsed.dir=0;break;case"rtl":parsed.dir=1;break;default:throw new Error("noUiSlider ("+VERSION+"): 'direction' option was not recognized.")}}function testBehaviour(parsed,entry){if("string"!=typeof entry)throw new Error("noUiSlider ("+VERSION+"): 'behaviour' must be a string containing options.");var tap=entry.indexOf("tap")>=0,drag=entry.indexOf("drag")>=0,fixed=entry.indexOf("fixed")>=0,snap=entry.indexOf("snap")>=0,hover=entry.indexOf("hover")>=0;if(fixed){if(2!==parsed.handles)throw new Error("noUiSlider ("+VERSION+"): 'fixed' behaviour must be used with 2 handles");testMargin(parsed,parsed.start[1]-parsed.start[0])}parsed.events={tap:tap||snap,drag:drag,fixed:fixed,snap:snap,hover:hover}}function testTooltips(parsed,entry){if(!1!==entry)if(!0===entry){parsed.tooltips=[];for(var i=0;i<parsed.handles;i++)parsed.tooltips.push(!0)}else{if(parsed.tooltips=asArray(entry),parsed.tooltips.length!==parsed.handles)throw new Error("noUiSlider ("+VERSION+"): must pass a formatter for all handles.");parsed.tooltips.forEach(function(formatter){if("boolean"!=typeof formatter&&("object"!==(void 0===formatter?"undefined":_typeof(formatter))||"function"!=typeof formatter.to))throw new Error("noUiSlider ("+VERSION+"): 'tooltips' must be passed a formatter or 'false'.")})}}function testFormat(parsed,entry){if(parsed.format=entry,"function"==typeof entry.to&&"function"==typeof entry.from)return!0;throw new Error("noUiSlider ("+VERSION+"): 'format' requires 'to' and 'from' methods.")}function testCssPrefix(parsed,entry){if(void 0!==entry&&"string"!=typeof entry&&!1!==entry)throw new Error("noUiSlider ("+VERSION+"): 'cssPrefix' must be a string or `false`.");parsed.cssPrefix=entry}function testCssClasses(parsed,entry){if(void 0!==entry&&"object"!==(void 0===entry?"undefined":_typeof(entry)))throw new Error("noUiSlider ("+VERSION+"): 'cssClasses' must be an object.");if("string"==typeof parsed.cssPrefix){parsed.cssClasses={};for(var key in entry)entry.hasOwnProperty(key)&&(parsed.cssClasses[key]=parsed.cssPrefix+entry[key])}else parsed.cssClasses=entry}function testUseRaf(parsed,entry){if(!0!==entry&&!1!==entry)throw new Error("noUiSlider ("+VERSION+"): 'useRequestAnimationFrame' option should be true (default) or false.");parsed.useRequestAnimationFrame=entry}function testOptions(options){var parsed={margin:0,limit:0,padding:0,animate:!0,animationDuration:300,format:defaultFormatter},tests={step:{r:!1,t:testStep},start:{r:!0,t:testStart},connect:{r:!0,t:testConnect},direction:{r:!0,t:testDirection},snap:{r:!1,t:testSnap},animate:{r:!1,t:testAnimate},animationDuration:{r:!1,t:testAnimationDuration},range:{r:!0,t:testRange},orientation:{r:!1,t:testOrientation},margin:{r:!1,t:testMargin},limit:{r:!1,t:testLimit},padding:{r:!1,t:testPadding},behaviour:{r:!0,t:testBehaviour},format:{r:!1,t:testFormat},tooltips:{r:!1,t:testTooltips},cssPrefix:{r:!1,t:testCssPrefix},cssClasses:{r:!1,t:testCssClasses},useRequestAnimationFrame:{r:!1,t:testUseRaf}},defaults={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",cssPrefix:"noUi-",cssClasses:{target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",ltr:"ltr",rtl:"rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"},useRequestAnimationFrame:!0};Object.keys(tests).forEach(function(name){if(void 0===options[name]&&void 0===defaults[name]){if(tests[name].r)throw new Error("noUiSlider ("+VERSION+"): '"+name+"' is required.");return!0}tests[name].t(parsed,void 0===options[name]?defaults[name]:options[name])}),parsed.pips=options.pips;var styles=[["left","top"],["right","bottom"]];return parsed.style=styles[parsed.dir][parsed.ort],parsed.styleOposite=styles[parsed.dir?0:1][parsed.ort],parsed}function closure(target,options,originalOptions){function addOrigin(base,handleNumber){var origin=addNodeTo(base,options.cssClasses.origin),handle=addNodeTo(origin,options.cssClasses.handle);return handle.setAttribute("data-handle",handleNumber),0===handleNumber?addClass(handle,options.cssClasses.handleLower):handleNumber===options.handles-1&&addClass(handle,options.cssClasses.handleUpper),origin}function addConnect(base,add){return!!add&&addNodeTo(base,options.cssClasses.connect)}function addTooltip(handle,handleNumber){return!!options.tooltips[handleNumber]&&addNodeTo(handle.firstChild,options.cssClasses.tooltip)}function getGroup(mode,values,stepped){if("range"===mode||"steps"===mode)return scope_Spectrum.xVal;if("count"===mode){if(!values)throw new Error("noUiSlider ("+VERSION+"): 'values' required for mode 'count'.");var v,spread=100/(values-1),i=0;for(values=[];(v=i++*spread)<=100;)values.push(v);mode="positions"}return"positions"===mode?values.map(function(value){return scope_Spectrum.fromStepping(stepped?scope_Spectrum.getStep(value):value)}):"values"===mode?stepped?values.map(function(value){return scope_Spectrum.fromStepping(scope_Spectrum.getStep(scope_Spectrum.toStepping(value)))}):values:void 0}function generateSpread(density,mode,group){function safeIncrement(value,increment){return(value+increment).toFixed(7)/1}var indexes={},firstInRange=scope_Spectrum.xVal[0],lastInRange=scope_Spectrum.xVal[scope_Spectrum.xVal.length-1],ignoreFirst=!1,ignoreLast=!1,prevPct=0;return group=unique(group.slice().sort(function(a,b){return a-b})),group[0]!==firstInRange&&(group.unshift(firstInRange),ignoreFirst=!0),group[group.length-1]!==lastInRange&&(group.push(lastInRange),ignoreLast=!0),group.forEach(function(current,index){var step,i,q,newPct,pctDifference,pctPos,type,steps,realSteps,stepsize,low=current,high=group[index+1];if("steps"===mode&&(step=scope_Spectrum.xNumSteps[index]),step||(step=high-low),!1!==low&&void 0!==high)for(step=Math.max(step,1e-7),i=low;i<=high;i=safeIncrement(i,step)){for(newPct=scope_Spectrum.toStepping(i),pctDifference=newPct-prevPct,steps=pctDifference/density,realSteps=Math.round(steps),stepsize=pctDifference/realSteps,q=1;q<=realSteps;q+=1)pctPos=prevPct+q*stepsize,indexes[pctPos.toFixed(5)]=["x",0];type=group.indexOf(i)>-1?1:"steps"===mode?2:0,!index&&ignoreFirst&&(type=0),i===high&&ignoreLast||(indexes[newPct.toFixed(5)]=[i,type]),prevPct=newPct}}),indexes}function addMarking(spread,filterFunc,formatter){function getClasses(type,source){var a=source===options.cssClasses.value,orientationClasses=a?valueOrientationClasses:markerOrientationClasses,sizeClasses=a?valueSizeClasses:markerSizeClasses;return source+" "+orientationClasses[options.ort]+" "+sizeClasses[type]}function getTags(offset,source,values){return'class="'+getClasses(values[1],source)+'" style="'+options.style+": "+offset+'%"'}function addSpread(offset,values){values[1]=values[1]&&filterFunc?filterFunc(values[0],values[1]):values[1],out+="<div "+getTags(offset,options.cssClasses.marker,values)+"></div>",values[1]&&(out+="<div "+getTags(offset,options.cssClasses.value,values)+">"+formatter.to(values[0])+"</div>")}var element=document.createElement("div"),out="",valueSizeClasses=[options.cssClasses.valueNormal,options.cssClasses.valueLarge,options.cssClasses.valueSub],markerSizeClasses=[options.cssClasses.markerNormal,options.cssClasses.markerLarge,options.cssClasses.markerSub],valueOrientationClasses=[options.cssClasses.valueHorizontal,options.cssClasses.valueVertical],markerOrientationClasses=[options.cssClasses.markerHorizontal,options.cssClasses.markerVertical];return addClass(element,options.cssClasses.pips),addClass(element,0===options.ort?options.cssClasses.pipsHorizontal:options.cssClasses.pipsVertical),Object.keys(spread).forEach(function(a){addSpread(a,spread[a])}),element.innerHTML=out,element}function pips(grid){var mode=grid.mode,density=grid.density||1,filter=grid.filter||!1,values=grid.values||!1,stepped=grid.stepped||!1,group=getGroup(mode,values,stepped),spread=generateSpread(density,mode,group),format=grid.format||{to:Math.round};return scope_Target.appendChild(addMarking(spread,filter,format))}function baseSize(){var rect=scope_Base.getBoundingClientRect(),alt="offset"+["Width","Height"][options.ort];return 0===options.ort?rect.width||scope_Base[alt]:rect.height||scope_Base[alt]}function attachEvent(events,element,callback,data){var method=function(e){return!scope_Target.hasAttribute("disabled")&&(!hasClass(scope_Target,options.cssClasses.tap)&&(!!(e=fixEvent(e,data.pageOffset))&&(!(events===actions.start&&void 0!==e.buttons&&e.buttons>1)&&((!data.hover||!e.buttons)&&(e.calcPoint=e.points[options.ort],void callback(e,data))))))},methods=[];return events.split(" ").forEach(function(eventName){element.addEventListener(eventName,method,!1),methods.push([eventName,method])}),methods}function fixEvent(e,pageOffset){e.preventDefault();var x,y,touch=0===e.type.indexOf("touch"),mouse=0===e.type.indexOf("mouse"),pointer=0===e.type.indexOf("pointer");if(0===e.type.indexOf("MSPointer")&&(pointer=!0),touch){if(e.touches.length>1)return!1;x=e.changedTouches[0].pageX,y=e.changedTouches[0].pageY}return pageOffset=pageOffset||getPageOffset(),(mouse||pointer)&&(x=e.clientX+pageOffset.x,y=e.clientY+pageOffset.y),e.pageOffset=pageOffset,e.points=[x,y],e.cursor=mouse||pointer,e}function calcPointToPercentage(calcPoint){var location=calcPoint-offset(scope_Base,options.ort),proposal=100*location/baseSize();return options.dir?100-proposal:proposal}function getClosestHandle(proposal){var closest=100,handleNumber=!1;return scope_Handles.forEach(function(handle,index){if(!handle.hasAttribute("disabled")){var pos=Math.abs(scope_Locations[index]-proposal);pos<closest&&(handleNumber=index,closest=pos)}}),handleNumber}function moveHandles(upward,proposal,locations,handleNumbers){var proposals=locations.slice(),b=[!upward,upward],f=[upward,!upward];handleNumbers=handleNumbers.slice(),upward&&handleNumbers.reverse(),handleNumbers.length>1?handleNumbers.forEach(function(handleNumber,o){var to=checkHandlePosition(proposals,handleNumber,proposals[handleNumber]+proposal,b[o],f[o]);!1===to?proposal=0:(proposal=to-proposals[handleNumber],proposals[handleNumber]=to)}):b=f=[!0];var state=!1;handleNumbers.forEach(function(handleNumber,o){state=setHandle(handleNumber,locations[handleNumber]+proposal,b[o],f[o])||state}),state&&handleNumbers.forEach(function(handleNumber){fireEvent("update",handleNumber),fireEvent("slide",handleNumber)})}function fireEvent(eventName,handleNumber,tap){Object.keys(scope_Events).forEach(function(targetEvent){var eventType=targetEvent.split(".")[0];eventName===eventType&&scope_Events[targetEvent].forEach(function(callback){callback.call(scope_Self,scope_Values.map(options.format.to),handleNumber,scope_Values.slice(),tap||!1,scope_Locations.slice())})})}function documentLeave(event,data){"mouseout"===event.type&&"HTML"===event.target.nodeName&&null===event.relatedTarget&&eventEnd(event,data)}function eventMove(event,data){if(-1===navigator.appVersion.indexOf("MSIE 9")&&0===event.buttons&&0!==data.buttonsProperty)return eventEnd(event,data);var movement=(options.dir?-1:1)*(event.calcPoint-data.startCalcPoint);moveHandles(movement>0,100*movement/data.baseSize,data.locations,data.handleNumbers)}function eventEnd(event,data){scope_ActiveHandle&&(removeClass(scope_ActiveHandle,options.cssClasses.active),scope_ActiveHandle=!1),event.cursor&&(document.body.style.cursor="",document.body.removeEventListener("selectstart",document.body.noUiListener)),document.documentElement.noUiListeners.forEach(function(c){document.documentElement.removeEventListener(c[0],c[1])}),removeClass(scope_Target,options.cssClasses.drag),setZindex(),data.handleNumbers.forEach(function(handleNumber){fireEvent("set",handleNumber),fireEvent("change",handleNumber),fireEvent("end",handleNumber)})}function eventStart(event,data){if(1===data.handleNumbers.length){var handle=scope_Handles[data.handleNumbers[0]];if(handle.hasAttribute("disabled"))return!1;scope_ActiveHandle=handle.children[0],addClass(scope_ActiveHandle,options.cssClasses.active)}event.preventDefault(),event.stopPropagation();var moveEvent=attachEvent(actions.move,document.documentElement,eventMove,{startCalcPoint:event.calcPoint,baseSize:baseSize(),pageOffset:event.pageOffset,handleNumbers:data.handleNumbers,buttonsProperty:event.buttons,locations:scope_Locations.slice()}),endEvent=attachEvent(actions.end,document.documentElement,eventEnd,{handleNumbers:data.handleNumbers}),outEvent=attachEvent("mouseout",document.documentElement,documentLeave,{handleNumbers:data.handleNumbers});if(document.documentElement.noUiListeners=moveEvent.concat(endEvent,outEvent),event.cursor){document.body.style.cursor=getComputedStyle(event.target).cursor,scope_Handles.length>1&&addClass(scope_Target,options.cssClasses.drag);var f=function(){return!1};document.body.noUiListener=f,document.body.addEventListener("selectstart",f,!1)}data.handleNumbers.forEach(function(handleNumber){fireEvent("start",handleNumber)})}function eventTap(event){event.stopPropagation();var proposal=calcPointToPercentage(event.calcPoint),handleNumber=getClosestHandle(proposal);if(!1===handleNumber)return!1;options.events.snap||addClassFor(scope_Target,options.cssClasses.tap,options.animationDuration),setHandle(handleNumber,proposal,!0,!0),setZindex(),fireEvent("slide",handleNumber,!0),fireEvent("set",handleNumber,!0),fireEvent("change",handleNumber,!0),fireEvent("update",handleNumber,!0),options.events.snap&&eventStart(event,{handleNumbers:[handleNumber]})}function eventHover(event){var proposal=calcPointToPercentage(event.calcPoint),to=scope_Spectrum.getStep(proposal),value=scope_Spectrum.fromStepping(to);Object.keys(scope_Events).forEach(function(targetEvent){"hover"===targetEvent.split(".")[0]&&scope_Events[targetEvent].forEach(function(callback){callback.call(scope_Self,value)})})}function checkHandlePosition(reference,handleNumber,to,lookBackward,lookForward){return scope_Handles.length>1&&(lookBackward&&handleNumber>0&&(to=Math.max(to,reference[handleNumber-1]+options.margin)),lookForward&&handleNumber<scope_Handles.length-1&&(to=Math.min(to,reference[handleNumber+1]-options.margin))),scope_Handles.length>1&&options.limit&&(lookBackward&&handleNumber>0&&(to=Math.min(to,reference[handleNumber-1]+options.limit)),lookForward&&handleNumber<scope_Handles.length-1&&(to=Math.max(to,reference[handleNumber+1]-options.limit))),options.padding&&(0===handleNumber&&(to=Math.max(to,options.padding)),handleNumber===scope_Handles.length-1&&(to=Math.min(to,100-options.padding))),to=scope_Spectrum.getStep(to),(to=limit(to))!==reference[handleNumber]&&to}function toPct(pct){return pct+"%"}function updateHandlePosition(handleNumber,to){scope_Locations[handleNumber]=to,scope_Values[handleNumber]=scope_Spectrum.fromStepping(to);var stateUpdate=function(){scope_Handles[handleNumber].style[options.style]=toPct(to),updateConnect(handleNumber),updateConnect(handleNumber+1)};window.requestAnimationFrame&&options.useRequestAnimationFrame?window.requestAnimationFrame(stateUpdate):stateUpdate()}function setZindex(){scope_HandleNumbers.forEach(function(handleNumber){var dir=scope_Locations[handleNumber]>50?-1:1,zIndex=3+(scope_Handles.length+dir*handleNumber);scope_Handles[handleNumber].childNodes[0].style.zIndex=zIndex})}function setHandle(handleNumber,to,lookBackward,lookForward){return!1!==(to=checkHandlePosition(scope_Locations,handleNumber,to,lookBackward,lookForward))&&(updateHandlePosition(handleNumber,to),!0)}function updateConnect(index){if(scope_Connects[index]){var l=0,h=100;0!==index&&(l=scope_Locations[index-1]),index!==scope_Connects.length-1&&(h=scope_Locations[index]),scope_Connects[index].style[options.style]=toPct(l),scope_Connects[index].style[options.styleOposite]=toPct(100-h)}}function setValue(to,handleNumber){null!==to&&!1!==to&&("number"==typeof to&&(to=String(to)),!1===(to=options.format.from(to))||isNaN(to)||setHandle(handleNumber,scope_Spectrum.toStepping(to),!1,!1))}function valueSet(input,fireSetEvent){var values=asArray(input),isInit=void 0===scope_Locations[0];fireSetEvent=void 0===fireSetEvent||!!fireSetEvent,values.forEach(setValue),options.animate&&!isInit&&addClassFor(scope_Target,options.cssClasses.tap,options.animationDuration),scope_HandleNumbers.forEach(function(handleNumber){setHandle(handleNumber,scope_Locations[handleNumber],!0,!1)}),setZindex(),scope_HandleNumbers.forEach(function(handleNumber){fireEvent("update",handleNumber),null!==values[handleNumber]&&fireSetEvent&&fireEvent("set",handleNumber)})}function valueReset(fireSetEvent){valueSet(options.start,fireSetEvent)}function valueGet(){var values=scope_Values.map(options.format.to);return 1===values.length?values[0]:values}function destroy(){for(var key in options.cssClasses)options.cssClasses.hasOwnProperty(key)&&removeClass(scope_Target,options.cssClasses[key]);for(;scope_Target.firstChild;)scope_Target.removeChild(scope_Target.firstChild);delete scope_Target.noUiSlider}function getCurrentStep(){return scope_Locations.map(function(location,index){var nearbySteps=scope_Spectrum.getNearbySteps(location),value=scope_Values[index],increment=nearbySteps.thisStep.step,decrement=null;!1!==increment&&value+increment>nearbySteps.stepAfter.startValue&&(increment=nearbySteps.stepAfter.startValue-value),decrement=value>nearbySteps.thisStep.startValue?nearbySteps.thisStep.step:!1!==nearbySteps.stepBefore.step&&value-nearbySteps.stepBefore.highestStep,100===location?increment=null:0===location&&(decrement=null);var stepDecimals=scope_Spectrum.countStepDecimals();return null!==increment&&!1!==increment&&(increment=Number(increment.toFixed(stepDecimals))),null!==decrement&&!1!==decrement&&(decrement=Number(decrement.toFixed(stepDecimals))),[decrement,increment]})}function bindEvent(namespacedEvent,callback){scope_Events[namespacedEvent]=scope_Events[namespacedEvent]||[],scope_Events[namespacedEvent].push(callback),"update"===namespacedEvent.split(".")[0]&&scope_Handles.forEach(function(a,index){fireEvent("update",index)})}function removeEvent(namespacedEvent){var event=namespacedEvent&&namespacedEvent.split(".")[0],namespace=event&&namespacedEvent.substring(event.length);Object.keys(scope_Events).forEach(function(bind){var tEvent=bind.split(".")[0],tNamespace=bind.substring(tEvent.length);event&&event!==tEvent||namespace&&namespace!==tNamespace||delete scope_Events[bind]})}function updateOptions(optionsToUpdate,fireSetEvent){var v=valueGet(),updateAble=["margin","limit","padding","range","animate","snap","step","format"];updateAble.forEach(function(name){void 0!==optionsToUpdate[name]&&(originalOptions[name]=optionsToUpdate[name])});var newOptions=testOptions(originalOptions);updateAble.forEach(function(name){void 0!==optionsToUpdate[name]&&(options[name]=newOptions[name])}),newOptions.spectrum.direction=scope_Spectrum.direction,scope_Spectrum=newOptions.spectrum,options.margin=newOptions.margin,options.limit=newOptions.limit,options.padding=newOptions.padding,scope_Locations=[],valueSet(optionsToUpdate.start||v,fireSetEvent)}var scope_Base,scope_Handles,scope_Connects,scope_Self,actions=getActions(),scope_Target=target,scope_Locations=[],scope_HandleNumbers=[],scope_ActiveHandle=!1,scope_Spectrum=options.spectrum,scope_Values=[],scope_Events={};if(scope_Target.noUiSlider)throw new Error("noUiSlider ("+VERSION+"): Slider was already initialized.");return function(target){addClass(target,options.cssClasses.target),0===options.dir?addClass(target,options.cssClasses.ltr):addClass(target,options.cssClasses.rtl),0===options.ort?addClass(target,options.cssClasses.horizontal):addClass(target,options.cssClasses.vertical),scope_Base=addNodeTo(target,options.cssClasses.base)}(scope_Target),function(connectOptions,base){scope_Handles=[],scope_Connects=[],scope_Connects.push(addConnect(base,connectOptions[0]));for(var i=0;i<options.handles;i++)scope_Handles.push(addOrigin(base,i)),scope_HandleNumbers[i]=i,scope_Connects.push(addConnect(base,connectOptions[i+1]))}(options.connect,scope_Base),scope_Self={destroy:destroy,steps:getCurrentStep,on:bindEvent,off:removeEvent,get:valueGet,set:valueSet,reset:valueReset,__moveHandles:function(a,b,c){moveHandles(a,b,scope_Locations,c)},options:originalOptions,updateOptions:updateOptions,target:scope_Target,pips:pips},function(behaviour){behaviour.fixed||scope_Handles.forEach(function(handle,index){attachEvent(actions.start,handle.children[0],eventStart,{handleNumbers:[index]})}),behaviour.tap&&attachEvent(actions.start,scope_Base,eventTap,{}),behaviour.hover&&attachEvent(actions.move,scope_Base,eventHover,{hover:!0}),behaviour.drag&&scope_Connects.forEach(function(connect,index){if(!1!==connect&&0!==index&&index!==scope_Connects.length-1){var handleBefore=scope_Handles[index-1],handleAfter=scope_Handles[index],eventHolders=[connect];addClass(connect,options.cssClasses.draggable),behaviour.fixed&&(eventHolders.push(handleBefore.children[0]),eventHolders.push(handleAfter.children[0])),eventHolders.forEach(function(eventHolder){attachEvent(actions.start,eventHolder,eventStart,{handles:[handleBefore,handleAfter],handleNumbers:[index-1,index]})})}})}(options.events),valueSet(options.start),options.pips&&pips(options.pips),options.tooltips&&function(){var tips=scope_Handles.map(addTooltip);bindEvent("update",function(values,handleNumber,unencoded){if(tips[handleNumber]){var formattedValue=values[handleNumber];!0!==options.tooltips[handleNumber]&&(formattedValue=options.tooltips[handleNumber].to(unencoded[handleNumber])),tips[handleNumber].innerHTML=formattedValue}})}(),scope_Self}function initialize(target,originalOptions){if(!target.nodeName)throw new Error("noUiSlider ("+VERSION+"): create requires a single element.");var options=testOptions(originalOptions,target),api=closure(target,options,originalOptions);return target.noUiSlider=api,api}var VERSION="9.2.0";Spectrum.prototype.getMargin=function(value){var step=this.xNumSteps[0];if(step&&value/step%1!=0)throw new Error("noUiSlider ("+VERSION+"): 'limit', 'margin' and 'padding' must be divisible by step.");return 2===this.xPct.length&&fromPercentage(this.xVal,value)},Spectrum.prototype.toStepping=function(value){return value=toStepping(this.xVal,this.xPct,value)},Spectrum.prototype.fromStepping=function(value){return fromStepping(this.xVal,this.xPct,value)},Spectrum.prototype.getStep=function(value){return value=getStep(this.xPct,this.xSteps,this.snap,value)},Spectrum.prototype.getNearbySteps=function(value){var j=getJ(value,this.xPct);return{stepBefore:{startValue:this.xVal[j-2],step:this.xNumSteps[j-2],highestStep:this.xHighestCompleteStep[j-2]},thisStep:{startValue:this.xVal[j-1],step:this.xNumSteps[j-1],highestStep:this.xHighestCompleteStep[j-1]},stepAfter:{startValue:this.xVal[j-0],step:this.xNumSteps[j-0],highestStep:this.xHighestCompleteStep[j-0]}}},Spectrum.prototype.countStepDecimals=function(){var stepDecimals=this.xNumSteps.map(countDecimals);return Math.max.apply(null,stepDecimals)},Spectrum.prototype.convert=function(value){return this.getStep(this.toStepping(value))};var defaultFormatter={to:function(value){return void 0!==value&&value.toFixed(2)},from:Number};return{version:VERSION,create:initialize}})},function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0});var noUiSlider=__webpack_require__(3);__webpack_exports__.default={name:"nouislider",props:{config:{type:Object,required:!0},values:{type:Array,required:!0},id:{type:String,required:!1}},data:function(){return{slider:null}},methods:{updateValue:function(value,handle){this.$set(this.values,handle,value[handle])},uniqueId:function(){function s4(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return"vue-nouislider-"+s4()+s4()}},computed:{sliderId:function(){return void 0===this.id?this.uniqueId():this.id}},mounted:function(){var _this=this;this.slider=document.getElementById(this.sliderId),this.config.start=this.values,noUiSlider.create(this.slider,this.config),this.slider.noUiSlider.on("update",this.updateValue),this.$parent.$on("updateValue",function(value){_this.slider.noUiSlider.set(value)}),this.slider.noUiSlider.on("change",function(newValues){_this.$parent.$emit("newValueSet",newValues)}),this.slider.noUiSlider.on("start",function(){_this.$parent.$off("updateValue")}),this.slider.noUiSlider.on("end",function(){_this.$parent.$on("updateValue",function(value){_this.slider.noUiSlider.set(value)})})}}},function(module,exports){},function(module,exports){module.exports=function(rawScriptExports,compiledTemplate,scopeId,cssModules){var esModule,scriptExports=rawScriptExports=rawScriptExports||{},type=typeof rawScriptExports.default;"object"!==type&&"function"!==type||(esModule=rawScriptExports,scriptExports=rawScriptExports.default);var options="function"==typeof scriptExports?scriptExports.options:scriptExports;if(compiledTemplate&&(options.render=compiledTemplate.render,options.staticRenderFns=compiledTemplate.staticRenderFns),scopeId&&(options._scopeId=scopeId),cssModules){var computed=Object.create(options.computed||null);Object.keys(cssModules).forEach(function(key){var module=cssModules[key];computed[key]=function(){return module}}),options.computed=computed}return{esModule:esModule,exports:scriptExports,options:options}}},function(module,exports){module.exports={render:function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",[_c("div",{staticClass:"vue-nouislider",attrs:{id:_vm.sliderId}})])},staticRenderFns:[]}}])});