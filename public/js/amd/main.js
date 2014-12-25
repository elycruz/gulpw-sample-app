(function(context){context.sjl=context.sjl||{};var slice=Array.prototype.slice,notLCaseFirst=typeof context.sjl.lcaseFirst!="function",notUCaseFirst=typeof context.sjl.ucaseFirst!="function",noExtractBoolFromArrayStart=typeof context.sjl.extractBoolFromArrayStart!="function",noExtractBoolFromArrayEnd=typeof context.sjl.extractBoolFromArrayEnd!="function";typeof context.sjl.argsToArray!="function"&&(context.sjl.argsToArray=function(args){return slice.call(args,0,args.length)});if(typeof context.sjl.isset!="function"){function isSet(value){return value!==undefined&&value!==null}context.sjl.isset=function(){var retVal=!1,check;if(arguments.length>1)for(var i in arguments){i=arguments[i],check=isSet(i);if(!check){retVal=check;break}}else arguments.length===1&&(retVal=isSet(arguments[0]));return retVal}}typeof context.sjl.classOf!="function"&&(context.sjl.classOf=function(val){return typeof val=="undefined"?"Undefined":val===null?"Null":function(){var retVal=Object.prototype.toString.call(val);return retVal.substring(8,retVal.length-1)}()}),typeof context.sjl.classOfIs!="function"&&(context.sjl.classOfIs=function(obj,humanString){return context.sjl.classOf(obj)===humanString});if(typeof context.sjl.empty!="function"){function isEmptyObj(obj){var retVal=obj===!0?!1:!0;for(var key in obj)if(obj.hasOwnProperty(key)){retVal=!1;break}return retVal}function isEmptyValue(value){var retVal;return context.sjl.classOfIs(value,"Array")||context.sjl.classOfIs(value,"String")?retVal=value.length===0:context.sjl.classOfIs(value,"Number")&&value!==0?retVal=!1:retVal=value===0||value===!1||value===undefined||value===null||isEmptyObj(value),retVal}context.sjl.empty=function(){var retVal,check,i,item,args=context.sjl.argsToArray(arguments);if(args.length>1){retVal=!1;for(i=0;i<args.length-1;i+=1){item=args[i],check=isEmptyValue(item);if(check){retVal=!0;break}}}else args.length===1?retVal=isEmptyValue(args[0]):retVal=!0;return retVal}}typeof context.sjl.namespace!="function"&&(context.sjl.namespace=function(ns_string,objToSearch,valueToSet){var parts=ns_string.split("."),parent=objToSearch,shouldSetValue=context.sjl.classOfIs(valueToSet,"Undefined")?!1:!0,i;for(i=0;i<parts.length;i+=1)context.sjl.classOfIs(parent[parts[i]],"Undefined")&&(parent[parts[i]]={}),i===parts.length-1&&shouldSetValue&&(parent[parts[i]]=valueToSet),parent=parent[parts[i]];return parent});if(notLCaseFirst||notUCaseFirst)function changeCaseOfFirstChar(str,func,thisFuncsName){var search,char,right,left;if(!context.sjl.classOfIs(str,"String"))throw new TypeError(thisFuncsName+" expects parameter 1 "+'to be of type "String".  '+'Value received: "'+context.sjl.classOf(str)+'".');return search=str.search(/[a-z]/i),context.sjl.classOfIs(search,"Number")&&search>-1&&(char=str.substr(search,1)[func](),right=str.substr(search+1,str.length-1),left=search!==0?str.substr(0,search):"",str=left+char+right),str}notLCaseFirst&&(context.sjl.lcaseFirst=function(str){return changeCaseOfFirstChar(str,"toLowerCase","lcaseFirst")}),notUCaseFirst&&(context.sjl.ucaseFirst=function(str){return changeCaseOfFirstChar(str,"toUpperCase","ucaseFirst")}),typeof context.sjl.camelCase&&(context.sjl.camelCase=function(str,upperFirst,replaceStrRegex){upperFirst=upperFirst||!1,replaceStrRegex=replaceStrRegex||/[^a-z\d]/i;var newStr="",i,parts=str.split(replaceStrRegex);for(i=0;i<parts.length;i+=1)/[a-z\d]/.test(parts[i])&&(newStr+=context.sjl.ucaseFirst(parts[i]));return upperFirst||(newStr=context.sjl.lcaseFirst(newStr)),newStr});if(noExtractBoolFromArrayStart||noExtractBoolFromArrayEnd)function extractBoolFromArray(array,startOrEndBln){var expectedBool=startOrEndBln?array[0]:array[array.length-1],retVal=!1;return context.sjl.classOfIs(expectedBool,"Boolean")?retVal=startOrEndBln?array.shift():array.pop():context.sjl.classOfIs(expectedBool,"Undefined")&&(startOrEndBln?array.shift():array.pop(),retVal=!1),retVal}noExtractBoolFromArrayStart&&(context.sjl.extractBoolFromArrayStart=function(array){return extractBoolFromArray(array,!0)}),noExtractBoolFromArrayEnd&&(context.sjl.extractBoolFromArrayEnd=function(array){return extractBoolFromArray(array,!1)})})(typeof window=="undefined"?global:window),function(context){context.sjl=context.sjl||{},typeof context.sjl.getValueFromObj!="function"&&(context.sjl.getValueFromObj=function(key,obj,args,raw){args=args||null,raw=raw||!1;var retVal=null;return context.sjl.classOfIs(key,"String")&&context.sjl.isset(obj)&&(retVal=key.indexOf(".")!==-1?context.sjl.namespace(key,obj):typeof obj[key]!="undefined"?obj[key]:null,context.sjl.classOfIs(retVal,"Function")&&context.sjl.empty(raw)&&(retVal=args?retVal.apply(obj,args):retVal.apply(obj))),retVal}),typeof context.sjl.setValueOnObj!="function"&&(context.sjl.setValueOnObj=function(key,value,obj){var setterFunc="set"+context.sjl.camelCase(key,!0),retVal=obj;return context.sjl.isset(obj[setterFunc])?retVal=obj[setterFunc](value):key.indexOf(".")!==-1?retVal=context.sjl.namespace(key,obj,value):obj[key]=typeof value!="undefined"?value:null,retVal});if(typeof context.sjl.extend=="undefined"){function extend(o,p,deep,useLegacyGettersAndSetters){deep=deep||!1,useLegacyGettersAndSetters=useLegacyGettersAndSetters||!1;if(!sjl.isset(o)||!sjl.isset(p))return o;for(var prop in p)deep&&!useLegacyGettersAndSetters?!context.sjl.empty(o[prop])&&!context.sjl.empty(o[prop])&&context.sjl.classOfIs(o[prop],"Object")&&context.sjl.classOfIs(p[prop],"Object")?context.sjl.extend(deep,o[prop],p[prop]):o[prop]=p[prop]:useLegacyGettersAndSetters?context.sjl.setValueOnObj(prop,context.sjl.getValueFromObj(prop,p),o):o[prop]=p[prop];return o}context.sjl.extend=function(){if(arguments.length===0)return;var args=context.sjl.argsToArray(arguments),deep=context.sjl.extractBoolFromArrayStart(args),useLegacyGettersAndSetters=context.sjl.extractBoolFromArrayEnd(args),arg0=args.shift(),arg;for(arg in args)arg=args[arg],sjl.classOfIs(arg,"Object")&&extend(arg0,arg,deep,useLegacyGettersAndSetters);return arg0}}typeof context.sjl.clone!="function"&&(context.sjl.clone=function(obj){return context.sjl.extend(!0,{},obj)}),typeof context.sjl.jsonClone!="function"&&(context.sjl.jsonClone=function(obj){return JSON.parse(JSON.stringify(obj))})}(typeof window=="undefined"?global:window),function(context){typeof context.sjl.copyOfProto=="undefined"&&(context.sjl.copyOfProto=function(proto){if(proto==null)throw TypeError("`copyOfProto` function expects param1 to be a non-null value.");if(Object.create)return Object.create(proto);var type=typeof proto;if(type!=="object"&&type!=="function")throw TypeError();function func(){}return func.prototype=proto,new func});if(typeof context.sjl.defineSubClass=="undefined"){function resolveConstructor(val){var isString=sjl.classOfIs(val,"String"),originalString=val,_val=val;if(isString){_val=sjl.camelCase(_val,!0);try{eval("_val = function "+_val+"(){}")}catch(e){throw new Error('An error occurred while trying to define a sub class using: "'+originalString+'" as a sub class in `sjl.defineSubClass`.  '+'In unminified source: "./src/sjl/sjl-oop-util-functions.js"')}}if(!sjl.classOfIs(_val,"Function")&&isString)throw new Error('Could not create constructor from string: "'+originalString+'".');if(!sjl.classOfIs(_val,"Function")&&!isString)throw new Error('`sjl.defineSubClass` requires constructor or string to create a subclass of ".  In unminified source "./src/sjl/sjl-oop-util-functions.js"');return _val}context.sjl.defineSubClass=function(superclass,constructor,methods,statics){var _constructor=resolveConstructor(constructor);return _constructor.prototype=context.sjl.copyOfProto(superclass.prototype||superclass),_constructor.extend=function(constructor_,methods_,statics_){return context.sjl.defineSubClass(this,constructor_,methods_,statics_)},_constructor.prototype.constructor=constructor,methods&&context.sjl.extend(_constructor.prototype,methods),statics&&context.sjl.extend(_constructor,statics),_constructor}}typeof context.sjl.throwNotOfTypeError=="undefined"&&(context.sjl.throwNotOfTypeError=function(value,paramName,funcName,expectedType){throw Error(funcName+" expects "+paramName+' to be of type "'+expectedType+'".  Value received: '+value)})}(typeof window=="undefined"?global:window),function(context){context.sjl.Extendable=context.sjl.defineSubClass(Function,function Extendable(){})}(typeof window=="undefined"?global:window),function(context){context.sjl=context.sjl||{},context.sjl.Attributable=context.sjl.Extendable.extend(function Attributable(){},{attrs:function(attrs){var self=this,retVal=self;switch(context.sjl.classOf(attrs)){case"Array":retVal=self._getAttribs(attrs);break;case"Object":context.sjl.extend(!0,self,attrs,!0);break;case"String":retVal=context.sjl.getValueFromObj(attrs,self);break;default:retVal=self._getAttribs(attrs)}return retVal},attr:function(attrs){return this.attrs(attrs)},_getAttribs:function(attrsList){var attrib,out={},self=this;if(!context.sjl.classOfIs(attrsList,"Array"))return;for(attrib in attrsList)attrib=attrsList[attrib],out[attrib]=typeof self[attrib]!="undefined"?context.sjl.getValueFromObj(attrib,self):null;return out}})}(typeof window=="undefined"?global:window),function(context){context.sjl=context.sjl||{},context.sjl.Optionable=context.sjl.Extendable.extend(function Optionable(options){this.options=new context.sjl.Attributable,this.merge.apply(this,sjl.argsToArray(arguments))},{setOption:function(key,value){return context.sjl.setValueOnObj(key,value,this.options),this},setOptions:function(options){return context.sjl.classOfIs(options,"Object")&&this.options.attrs(options),this},getOption:function(key){return context.sjl.getValueFromObj(key,this.options)},getOptions:function(options){var classOfOptions=sjl.classOf(options),retVal=null;return classOfOptions==="Array"||classOfOptions==="String"?retVal=this.options.attrs(options):console.warn('Tried to set options using a value of type "'+classOfOptions+'" on `Optionable.getOptions`.'),retVal},get:function(keyOrArray){var retVal=null,classOfKeyOrArray=sjl.classOf(keyOrArray);if(classOfKeyOrArray==="String"||classOfKeyOrArray==="Array")retVal=this.getOptions(keyOrArray);return retVal},set:function(){var self=this,args=sjl.argsToArray(arguments),typeOfArgs0=sjl.classOf(args[0]);return typeOfArgs0==="String"?self.setOption(args[0],args[1]):typeOfArgs0==="Object"&&self.setOptions(args[0]),self},has:function(nsString){var parts=nsString.split("."),i,nsStr,retVal=!1;if(parts.length>1){nsStr=parts.shift();for(i=0;i<=parts.length;i+=1){retVal=!sjl.empty(sjl.namespace(nsStr,this.options));if(!retVal)break;nsStr+="."+parts[i]}}else retVal=!sjl.empty(sjl.namespace(nsString,this.options));return retVal},merge:function(options){var args=sjl.argsToArray(arguments),useLegacyGettersAndSetters=sjl.extractBoolFromArrayEnd(args),tailConcat=args;return useLegacyGettersAndSetters&&(tailConcat=args.concat([useLegacyGettersAndSetters])),sjl.extend.apply(sjl,[!0,this.options].concat(tailConcat)),this}})}(typeof window=="undefined"?global:window),function(context){context.sjl.Iterator=context.sjl.Extendable.extend(function Iterator(values,pointer){if(!(this instanceof sjl.Iterator))return new sjl.Iterator(values,pointer);this.collection=values||[],this.pointer=sjl.classOfIs(pointer,"Number")?parseInt(pointer,10):0},{current:function(){var self=this;return self.valid()?{done:!1,value:self.getCollection()[self.getPointer()]}:{done:!0}},next:function(){var self=this,pointer=self.getPointer(),retVal=self.valid()?{done:!1,value:self.getCollection()[pointer]}:{done:!0};return self.pointer=pointer+1,retVal},rewind:function(){this.pointer=0},valid:function(){return this.getPointer()<this.getCollection().length},getPointer:function(defaultNum){return defaultNum=sjl.classOfIs(defaultNum,"Number")?isNaN(defaultNum)?0:defaultNum:0,context.sjl.classOfIs(this.pointer,"Number")||(this.pointer=parseInt(this.pointer,10),isNaN(this.pointer)&&(this.pointer=defaultNum)),this.pointer},getCollection:function(){return context.sjl.classOfIs(this.collection,"Array")?this.collection:[]}})}(typeof window=="undefined"?global:window),define("sjl",function(){}),define("lib/mvc/module/Module",["sjl","amplify"],function(){return sjl.Extendable.extend(function Module(){this.initializers=[],amplify.subscribe("app:start",this,this.runInitializers)},{runInitializers:function(){var self=this;self.initializers.forEach(function(init){init.call(self)})},addInitializer:function(callback){this.initializers.push(callback)}})}),define("modules/application/ApplicationModule",["lib/mvc/module/Module","jquery","amplify"],function(Module){var baseConstructor=function Application(){},Constructor=sjl.Extendable.extend(baseConstructor,{run:function(){$("#main-content").html("<h3>Application launched!</h3>"),console.log("Application launched"),amplify.publish("app:start")}});return new Constructor}),define("lib/webgl/WebGl",["sjl"],function(){return sjl.Extendable.extend(function WebGlContext(elmOrSelector){var self=this,gl=null,elm=null,classOfElmOrSelector=sjl.classOf(elmOrSelector),selector=null;if(sjl.empty(elmOrSelector))throw new Error('`sjl.WebGlContext` requires parameter 1 to be either an HtmlElement or a String.Parameter type recieved "'+classOfInitParam+'".');switch(classOfElmOrSelector){case"HTMLCanvasElement":gl=self.getGlContextFromElm(elmOrSelector);break;case"String":selector=elmOrSelector,elm=document.querySelector(elmOrSelector),gl=self.getGlContextFromElm(elm);break;default:selector=elmOrSelector,elm=document.querySelector(elmOrSelector),gl=self.getGlContextFromElm(elm)}self.glInstance=gl,self.element=elm,self.selector=selector},{getGlContextFromElm:function(canvasElm){var gl=null,failureMessage="Failed to get webgl context.  Could not get gl context for this browser.";if(!sjl.classOfIs(canvasElm.getContext,"Function"))throw new Error(failureMessage);try{gl=canvasElm.getContext("webgl")||canvasElm.getContext("experimental-webgl")}catch(e){throw new Error(failureMessage)}return gl}})}),define("modules/webgl-experiments/WebGlExperimentsModule",["lib/mvc/module/Module","lib/webgl/WebGl","jquery"],function(Module,WebGl){var Constructor=Module.extend(function WebGlExperiments(){Module.call(this),this.addInitializer(this.init)},{init:function(){$("body").append('<canvas id="canvas" width="550px" height="400px" style="background: #ff0000;"></canvas>');var gl=new WebGl("#canvas");console.log("WebGlExperiments module just ran.")}});return new Constructor}),define("main",["modules/application/ApplicationModule","modules/webgl-experiments/WebGlExperimentsModule","amplify"],function(app,webglExp){app.run()});