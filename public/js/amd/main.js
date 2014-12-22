(function(context){context.sjl=context.sjl||{};var slice=Array.prototype.slice,notLCaseFirst=typeof context.sjl.lcaseFirst!="function",notUCaseFirst=typeof context.sjl.ucaseFirst!="function",noExtractBoolFromArrayStart=typeof context.sjl.extractBoolFromArrayStart!="function",noExtractBoolFromArrayEnd=typeof context.sjl.extractBoolFromArrayEnd!="function";typeof context.sjl.argsToArray!="function"&&(context.sjl.argsToArray=function(args){return slice.call(args,0,args.length)});if(typeof context.sjl.isset!="function"){function isSet(value){return value!==undefined&&value!==null}context.sjl.isset=function(){var retVal=!1,check;if(arguments.length>1)for(var i in arguments){i=arguments[i],check=isSet(i);if(!check){retVal=check;break}}else arguments.length===1&&(retVal=isSet(arguments[0]));return retVal}}typeof context.sjl.classOf!="function"&&(context.sjl.classOf=function(val){return typeof val=="undefined"?"Undefined":val===null?"Null":function(){var retVal=Object.prototype.toString.call(val);return retVal.substring(8,retVal.length-1)}()}),typeof context.sjl.classOfIs!="function"&&(context.sjl.classOfIs=function(obj,humanString){return context.sjl.classOf(obj)===humanString});if(typeof context.sjl.empty!="function"){function isEmptyObj(obj){var retVal=obj===!0?!1:!0;for(var key in obj)if(obj.hasOwnProperty(key)){retVal=!1;break}return retVal}function isEmptyValue(value){var retVal;return context.sjl.classOfIs(value,"Array")||context.sjl.classOfIs(value,"String")?retVal=value.length===0:context.sjl.classOfIs(value,"Number")&&value!==0?retVal=!1:retVal=value===0||value===!1||value===undefined||value===null||isEmptyObj(value),retVal}context.sjl.empty=function(){var retVal,check,i,item,args=context.sjl.argsToArray(arguments);if(args.length>1){retVal=!1;for(i=0;i<args.length-1;i+=1){item=args[i],check=isEmptyValue(item);if(check){retVal=!0;break}}}else args.length===1?retVal=isEmptyValue(args[0]):retVal=!0;return retVal}}typeof context.sjl.namespace!="function"&&(context.sjl.namespace=function(ns_string,objToSearch,valueToSet){var parts=ns_string.split("."),parent=objToSearch,shouldSetValue=context.sjl.classOfIs(valueToSet,"Undefined")?!1:!0,i;for(i=0;i<parts.length;i+=1)context.sjl.classOfIs(parent[parts[i]],"Undefined")&&!shouldSetValue?parent[parts[i]]={}:i===parts.length-1&&shouldSetValue&&(parent[parts[i]]=valueToSet),parent=parent[parts[i]];return parent});if(notLCaseFirst||notUCaseFirst)function changeCaseOfFirstChar(str,func,thisFuncsName){var search,char,right,left;if(!context.sjl.classOfIs(str,"String"))throw new TypeError(thisFuncsName+" expects parameter 1 "+'to be of type "String".  '+'Value received: "'+context.sjl.classOf(str)+'".');return search=str.search(/[a-z]/i),context.sjl.classOfIs(search,"Number")&&search>-1&&(char=str.substr(search,1)[func](),right=str.substr(search+1,str.length-1),left=search!==0?str.substr(0,search):"",str=left+char+right),str}notLCaseFirst&&(context.sjl.lcaseFirst=function(str){return changeCaseOfFirstChar(str,"toLowerCase","lcaseFirst")}),notUCaseFirst&&(context.sjl.ucaseFirst=function(str){return changeCaseOfFirstChar(str,"toUpperCase","ucaseFirst")}),typeof context.sjl.camelCase&&(context.sjl.camelCase=function(str,upperFirst,replaceStrRegex){upperFirst=upperFirst||!1,replaceStrRegex=replaceStrRegex||/[^a-z\d]/i;var newStr="",i,parts=str.split(replaceStrRegex);for(i=0;i<parts.length;i+=1)/[a-z\d]/.test(parts[i])&&(newStr+=context.sjl.ucaseFirst(parts[i]));return upperFirst||(newStr=context.sjl.lcaseFirst(newStr)),newStr});if(noExtractBoolFromArrayStart||noExtractBoolFromArrayEnd)function extractBoolFromArray(array,startOrEndBln){var expectedBool=startOrEndBln?array[0]:array[array.length-1],retVal=!1;return context.sjl.classOfIs(expectedBool,"Boolean")?retVal=startOrEndBln?array.shift():array.pop():context.sjl.classOfIs(expectedBool,"Undefined")&&(startOrEndBln?array.shift():array.pop(),retVal=!1),retVal}noExtractBoolFromArrayStart&&(context.sjl.extractBoolFromArrayStart=function(array){return extractBoolFromArray(array,!0)}),noExtractBoolFromArrayEnd&&(context.sjl.extractBoolFromArrayEnd=function(array){return extractBoolFromArray(array,!1)})})(typeof window=="undefined"?global:window),function(context){context.sjl=context.sjl||{},typeof context.sjl.getValueFromObj!="function"&&(context.sjl.getValueFromObj=function(key,obj,args,raw){args=args||null,raw=raw||!1;var retVal=null;return context.sjl.classOfIs(key,"String")&&context.sjl.isset(obj)&&(retVal=key.indexOf(".")!==-1?context.sjl.namespace(key,obj):typeof obj[key]!="undefined"?obj[key]:null,context.sjl.classOfIs(retVal,"Function")&&context.sjl.empty(raw)&&(retVal=args?retVal.apply(obj,args):retVal.apply(obj))),retVal}),typeof context.sjl.setValueOnObj!="function"&&(context.sjl.setValueOnObj=function(key,value,obj){var setterFunc="set"+context.sjl.camelCase(key,!0),retVal=obj;return context.sjl.isset(obj[setterFunc])?retVal=obj[setterFunc](value):key.indexOf(".")!==-1?retVal=context.sjl.namespace(key,value,obj):obj[key]=typeof value!="undefined"?value:null,retVal});if(typeof context.sjl.extend=="undefined"){function extend(o,p,deep,useLegacyGettersAndSetters){deep=deep||!1,useLegacyGettersAndSetters=useLegacyGettersAndSetters||!1;if(!sjl.isset(o)||!sjl.isset(p))return o;for(var prop in p)deep?!context.sjl.empty(o[prop])&&!context.sjl.empty(o[prop])&&context.sjl.classOfIs(o[prop],"Object")&&context.sjl.classOfIs(p[prop],"Object")?context.sjl.extend(deep,o[prop],p[prop]):o[prop]=p[prop]:useLegacyGettersAndSetters?context.sjl.setValueOnObj(prop,context.sjl.getValueFromObj(prop,p),o):o[prop]=p[prop];return o}context.sjl.extend=function(){if(arguments.length===0)return;var args=context.sjl.argsToArray(arguments),deep=context.sjl.extractBoolFromArrayStart(args),useLegacyGettersAndSetters=context.sjl.extractBoolFromArrayEnd(args),arg0=args.shift();for(arg in args)arg=args[arg],sjl.classOfIs(arg,"Object")&&extend(arg0,arg,deep,useLegacyGettersAndSetters);return arg0}}typeof context.sjl.clone!="function"&&(context.sjl.clone=function(obj){return context.sjl.extend(!0,{},obj)})}(typeof window=="undefined"?global:window),function(context){typeof Function.prototype.extend=="undefined"&&(Function.prototype.extend=function(constructor,methods,statics){return context.sjl.defineSubClass(this,constructor,methods,statics)})}(typeof window=="undefined"?global:window),function(context){typeof context.sjl.copyOfProto=="undefined"&&(context.sjl.copyOfProto=function(proto){if(proto==null)throw TypeError("`inherit` function expects param1 to be a non-null value.");if(Object.create)return Object.create(proto);var type=typeof proto;if(type!=="object"&&type!=="function")throw TypeError();function func(){}return func.prototype=proto,new func});if(typeof context.sjl.defineSubClass=="undefined"){function resolveConstructor(val){var isString=sjl.classOfIs(val,"String"),originalString=val,_val=val;if(isString){_val=sjl.camelCase(_val,!0);try{eval("_val = function "+_val+"(){}")}catch(e){throw new Error('An error occurred while trying to define a sub class using: "'+originalString+'" as a sub class in `sjl.defineSubClass`.  '+'In unminified source: "./src/sjl/sjl-oop-util-functions.js"')}}if(!sjl.classOfIs(_val,"Function")&&isString)throw new Error('Could not create constructor from string: "'+originalString+'".');if(!sjl.classOfIs(_val,"Function")&&!isString)throw new Error('`sjl.defineSubClass` requires constructor or string to create a subclass of ".  In unminified source "./src/sjl/sjl-oop-util-functions.js"');return _val}context.sjl.defineSubClass=function(superclass,constructor,methods,statics){var _constructor=resolveConstructor(constructor);return _constructor.prototype=context.sjl.copyOfProto(superclass.prototype||superclass),_constructor.prototype.constructor=constructor,methods&&context.sjl.extend(_constructor.prototype,methods),statics&&context.sjl.extend(_constructor,statics),_constructor}}typeof context.sjl.throwNotOfTypeError=="undefined"&&(context.sjl.throwNotOfTypeError=function(value,paramName,funcName,expectedType){throw Error(funcName+" expects "+paramName+' to be of type "'+expectedType+'".  Value received: '+value)})}(typeof window=="undefined"?global:window),function(context){function Extendable(){}var proto=Extendable.prototype;proto.extend=function(constructor,methods,statics){return context.sjl.defineSubClass(this,constructor,methods,statics)},context.sjl.Extendable=Extendable}(typeof window=="undefined"?global:window),function(context){context.sjl=context.sjl||{},context.sjl.Attributable=context.sjl.Extendable.extend(function Attributable(){},{attrs:function(attrs){var self=this,retVal=self;switch(context.sjl.classOf(attrs)){case"Array":retVal=self._getAttribs(attrs);break;case"Object":context.sjl.extend(!0,self,attrs,!0);break;default:retVal=self._getAttribs(attrs)}return retVal},attr:function(attrs){return this.attrs(attrs)},_getAttribs:function(attrsList){var attrib,out={},self=this;if(!context.sjl.classOfIs(attrsList,"Array"))return;for(attrib in attrsList)attrib=attrsList[attrib],out[attrib]=typeof self[attrib]!="undefined"?context.sjl.getValueFromObj(attrib,self):null;return out}})}(typeof window=="undefined"?global:window),function(context){context.sjl=context.sjl||{},context.sjl.Optionable=context.sjl.Extendable.extend(function Optionable(options){this.options=new context.sjl.Attributable,context.sjl.classOfIs(options,"Object")&&this.setOptions(options)},{setOption:function(key,value){return context.sjl.setValueOnObj(key,value,this.options),this},setOptions:function(options){return context.sjl.classOfIs(options,"Object")&&this.options.attrs(options),this},getOption:function(key){return context.sjl.getValueFromObj(key,this.options)},getOptions:function(options){var retVal=null;return context.sjl.classOfIs(options,"Array")&&(retVal=this.options.attrs(options)),retVal}})}(typeof window=="undefined"?global:window),function(context){context.sjl=context.sjl||{},context.sjl.validator=context.sjl.isset(context.sjl.validator)?context.sjl.validator:{},context.sjl.AbstractValidator=context.sjl.Optionable.extend(function AbstractValidator(options){var self=this;context.sjl.Optionable.call(self,{messages:[],messageTemplates:{},messageVariables:{},messagesMaxLength:100,valueObscured:!1,value:null}),context.sjl.isset(options.customMessageTemplates)&&(customTemplates=options.customMessageTemplates,options.customeMessageTemplates=null,delete options.customeMessageTemplates,self.setCustomMessageTemplates(customTemplates)),self.setOptions(options)},{getMessagesMaxLength:function(){var self=this,maxMessageLen=self.getOption("maxMessagesLength");return context.sjl.classOfIs(maxMessageLen,"Number")?maxMessageLen:-1},getMessages:function(){var self=this,messages=self.getOption("messages");return context.sjl.classOfIs(messages,"Array")?messages:[]},setMessages:function(messages){return this.options.messages=context.sjl.classOfIs(messages,"Array")?messages:[],this},clearMessages:function(){this.options.messages=[]},isValid:function(value){throw Error('Can not instantiate `AbstractValidator` directly, all class named with a prefixed "Abstract" should not be instantiated.')},isValueObscured:function(){var self=this,valObscured=self.getOption("valueObscured");return context.sjl.classOfIs(valObscured,"Boolean")?valObscured:!1},setValue:function(value){return this.options.value=value,this.options.messages=[],this},getValue:function(value){var self=this;return context.sjl.classOfIs(value,"Undefined")?this.getOption("value"):function(){return self.setValue(value),value}()},addErrorByKey:function(key){var self=this,messageTemplate=self.getOption("messageTemplates"),messages=self.getOption("messages");return context.sjl.classOfIs(key,"String")&&context.sjl.isset(messageTemplate[key])?typeof messageTemplate[key]=="function"?messages.push(messageTemplate[key].apply(self)):context.sjl.classOfIs(messageTemplate[key],"String")&&messages.push(messageTemplate[key]):context.sjl.classOfIs(key,"function")?messages.push(key.apply(self)):messages.push(key),self},getMessageTemplates:function(){return this.options.messageTemplates},setMessageTemplates:function(templates){if(!sjl.classOfIs(templates,"Object"))throw new Error('`AddToBagModel.setMessageTemplates` expects parameter 1 to be of type "Object".');return this.options.messagesTemplates=templates,this},updateMessageTemplates:function(templates){var self=this;if(!sjl.classOfIs(templates,"Object"))throw new Error('`AddToBagModel.updateMessageTemplates` expects parameter 1 to be of type "Object".');return self.options.messageTemplates=sjl.extend(!0,self.getMessageTemplates(),templates),self}})}(typeof window=="undefined"?global:window),function(context){context.sjl=context.sjl||{},context.sjl.ValidatorChain=context.sjl.AbstractValidator.extend(function ValidatorChain(options){context.sjl.AbstractValidator.call(this,{breakChainOnFailure:!1}),this.setOptions(options)},{isValid:function(value){var self=this,retVal=!0,validators,validator;value=self.getValue(value),self.verifyValidatorsInChain(),self.clearMessages(),validators=self.getValidators();for(validator in validators){validator=validators[validator];if(validator.isValid(value))continue;retVal=!1,self.appendMessages(validator.getMessages());if(self.getOption("breakChainOnFailure"))break}return retVal},addValidator:function(validator){var self=this;if(!self.verifyHasValidatorInterface(validator))throw new Error("addValidator of ValidatorChain only accepts validators that have the validator interface (['isValid', 'getMessages'])");return self.getValidators().push(validator),self},addValidators:function(validators){for(var validator in validators)this.addValidator(validators[validator])},addByName:function(value){},prependByName:function(value){},mergeValidatorChain:function(validatorChain){},appendMessages:function(messages){var self=this;return self.setMessages(self.getMessages().concat(messages)),self},getValidators:function(){var self=this;return context.sjl.isset(self.options.validators)||(self.options.validators=[]),self.options.validators},setValidators:function(validators){if(!context.sjl.classOfIs(validators,"Array"))throw new Error('`setValidators` of `ValidatorChain` expects `param1` to be of type "Array".');return this.addValidators(validators),this},verifyHasValidatorInterface:function(validator){var _interface=["isValid","getMessages"],retVal=!0;for(value in _interface){value=_interface[value];if(!context.sjl.isset(validator[value])||typeof validator[value]!="function"){retVal=!1;break}}return retVal},verifyValidatorsInChain:function(validatorChain){var self=this,validators,validator;validatorChain=validatorChain||self,validators=validatorChain.getValidators();for(validator in validators){validator=validators[validator];if(!self.verifyHasValidatorInterface(validator))throw new Error("A validator with out the validator interfacewas found in ValidatorChain.  Please check the validators you are passing in and make sure that they have the validator interface (['isValid', 'getMessages']).")}return self}})}(typeof window=="undefined"?global:window),function(context){function throwNotIntError(value,paramName,funcName,expectedType){throw Error(funcName+" expects "+paramName+' to be of type "'+expectedType+'".  Value received: '+value)}context.sjl=context.sjl||{},context.sjl.InRangeValidator=context.sjl.AbstractValidator.extend(function InRangeValidator(options){context.sjl.AbstractValidator.call(this,{min:0,messageTemplates:{NOT_IN_RANGE_EXCLUSIVE:function(){return'The input value is not exclusively between "'+this.getMin()+'" and "'+this.getMax()+'".'},NOT_IN_RANGE_INCLUSVE:function(){return'The input value is not inclusively between "'+this.getMin()+'" and "'+this.getMax()+'".'},INVALID_TYPE:function(){return'The value "'+this.getValue()+'" is expected to be of type "Number".'}},inclusive:!0,max:9999}),this.setOptions(options)},{isValid:function(value){var self=this,retVal=!1;return value=context.sjl.isset(value)?value:self.getValue(),context.sjl.classOfIs(value,"Number")?(self.getInclusive()?(retVal=value>=this.getMin()&&value<=this.getMax(),retVal||self.addErrorByKey("NOT_IN_RANGE_INCLUSVE")):(retVal=value>this.getMin()&&value<this.getMax(),retVal||self.addErrorByKey("NOT_IN_RANGE_EXCLUSIVE")),retVal):(self.addErrorByKey("INVALID_TYPE"),retVal)},getMin:function(){return this.getOption("min")},getMax:function(){return this.getOption("max")},getInclusive:function(){return this.getOption("inclusive")},setMin:function(min){if(context.sjl.classOfIs(min,"Number"))return this.setOption("min",min);throwNotIntError(min,"min","InRangeValidator.setMin","Number")},setMax:function(max){if(context.sjl.classOfIs(max,"Number"))return this.setOption("max",max);throwNotIntError(max,"max","InRangeValidator.setMax","Number")},setInclusive:function(value){if(context.sjl.classOfIs(value,"Boolean"))return this.setOption("inclusive",value);throwNotIntError(value,"parameter 1","InRangeValidator.setInclusive","Boolean")}})}(typeof window=="undefined"?global:window),function(context){context.sjl=context.sjl||{},context.sjl.RegexValidator=context.sjl.AbstractValidator.extend(function RegexValidator(options){context.sjl.AbstractValidator.call(this,{pattern:/./,messageTemplates:{DOES_NOT_MATCH_PATTERN:function(){return'The value passed in does not match pattern"'+this.getPattern()+'".  Value passed in: "'+this.getValue()+'".'}}}),this.setOptions(options)},{isValid:function(value){var self=this,retVal=!1;return self.clearMessages(),value=self.getValue(value),retVal=self.getPattern().test(value),self.getMessages().length>0&&self.clearMessages(),retVal===!1&&self.addErrorByKey("DOES_NOT_MATCH_PATTERN"),retVal},getPattern:function(){return this.options.pattern},setPattern:function(pattern){if(context.sjl.classOfIs(pattern,"RegExp"))return this.clearMessages(),this.options.pattern=pattern;throw new Error('RegexValidator.setPattern expects `pattern` to be of type "RegExp".  Type and value recieved: type: "'+context.sjl.classOf(pattern)+'"; value: "'+pattern+'"')}})}(typeof window=="undefined"?global:window),function(context){context.sjl=context.sjl||{},context.sjl.Input=context.sjl.Optionable.extend(function Input(options){var name=null;context.sjl.classOfIs(options,"String")&&(name=options),context.sjl.Optionable.call(this,{allowEmpty:!1,continueIfEmpty:!1,breakOnFailure:!1,fallbackValue:null,filterChain:null,name:name,required:!0,validatorChain:null,value:null,messages:[]}),this.setOptions(options)},{isValid:function(value){var self=this,validatorChain,retVal=!1;return self.clearMessages(),!self.getContinueIfEmpty(),validatorChain=self.getValidatorChain(),value=value||self.getValue(),retVal=validatorChain.isValid(value),retVal===!1&&self.hasFallbackValue()&&(self.setValue(self.getFallbackValue()),retVal=!0),self.setMessages(),retVal},getInputFilter:function(){return this.options.inputFilter},setInputFilter:function(value){this.options.inputFilter=value},getFilterChain:function(){return this.options.filterChain},setFilterChain:function(value){this.options.filterChain=value},getValidatorChain:function(){var self=this;return context.sjl.isset(self.options.validatorChain)||(self.options.validatorChain=new context.sjl.ValidatorChain({breakOnFailure:self.getBreakOnFailure()})),self.options.validatorChain},setValidatorChain:function(value){return context.sjl.classOfIs(value,"Object")&&context.sjl.isset(value.validators)?this.getValidatorChain().setOption("validators",value.validators):this.options.validatorChain=value,this},getName:function(){return this.options.name},setName:function(value){this.options.name=value},getRawValue:function(){return this.options.rawValue},setRawValue:function(value){this.options.rawValue=value},getValue:function(value){return this.options.value},setValue:function(value){this.options.value=this.options.rawValue=value},getFallbackValue:function(){return this.options.fallbackValue},setFallbackValue:function(value){this.options.fallbackValue=value},hasFallbackValue:function(){return!context.sjl.classOfIs(this.getFallbackValue(),"Undefined")&&!context.sjl.classOfIs(this.getFallbackValue(),"Null")},getRequired:function(){return this.options.required},setRequired:function(value){this.options.required=value},getAllowEmpty:function(){return this.options.allowEmpty},setAllowEmpty:function(value){this.options.allowEmpty=value},getBreakOnFailure:function(){return this.options.breakOnFailure},setBreakOnFailure:function(value){this.options.breakOnFailure=value},getContinueIfEmpty:function(){return this.options.breakOnFailure},setContinueIfEmpty:function(value){this.options.continueIfEmpty=value},clearMessages:function(){this.options.messages=[]},setMessages:function(messages){var self=this;return context.sjl.classOfIs(messages,"Array")?self.options.messages=messages:self.options.messages=self.getValidatorChain().getMessages(),self},getMessages:function(){var self=this;return context.sjl.isset(self.options.messages)||(self.options.messages=[]),self.options.messages}})}(typeof window=="undefined"?global:window),function(context){context.sjl=context.sjl||{},context.sjl.InputFilter=context.sjl.Optionable.extend(function InputFilter(options){context.sjl.Optionable.call(this,{data:[],inputs:{},invalidInputs:[],validInputs:[],validationGroup:null}),this.setOptions(options)},{add:function(value){return value instanceof context.sjl.Input&&(this.getInputs()[value.getName()]=value),this},get:function(value){return this.getInputs()[value]},has:function(value){return this.getInputs().hasOwnProperty(value)},isValid:function(){var self=this,inputs=self.getInputs(),data=self.getData();self.clearInvalidInputs(),self.clearValidInputs(),self.setDataOnInputs();if(context.sjl.empty(data))throw new Error("InputFilter->isValid could'nt find any data for validation.");return self.validateInputs(inputs,data)},validateInput:function(input,dataMap){var name=input.getName(),dataExists=context.sjl.isset(dataMap[name]),data=dataExists?dataMap[name]:null,required=input.getRequired(),allowEmpty=input.getAllowEmpty(),continueIfEmpty=input.getContinueIfEmpty(),retVal=!0;return!dataExists&&!required?retVal=!0:!dataExists&&required&&allowEmpty&&!continueIfEmpty?retVal=!0:dataExists&&context.sjl.empty(data)&&!required?retVal=!0:dataExists&&context.sjl.empty(data)&&required&&allowEmpty&&!continueIfEmpty?retVal=!0:input.isValid()||(retVal=!1),retVal},validateInputs:function(inputs,data){var self=this,validInputs={},invalidInputs={},retVal=!0,input,name;inputs=inputs||self.getInputs(),data=data||self.getRawValues();for(input in inputs)name=input,input=inputs[input],self.validateInput(input,data)?validInputs[name]=input:invalidInputs[name]=input;return context.sjl.empty(invalidInputs)?retVal=!0:retVal=!1,self.setOption("validInputs",validInputs),self.setOption("invalidInputs",invalidInputs),retVal},setInputs:function(inputs){var self=this,input,name,validators;context.sjl.classOfIs(inputs,"Object")||(self.options.inputs=inputs={});for(input in inputs)name=input,validators=self._getValidatorsFromInputHash(inputs[input]),inputs[input].validators=null,delete inputs[input].validators,context.sjl.isset(inputs[input].name)||(inputs[input].name=name),input=new context.sjl.Input(inputs[input]),input.getValidatorChain().addValidators(validators),self.options.inputs[input.getName()]=input;return self},getInputs:function(){var self=this;return context.sjl.classOfIs(self.options.inputs,"Object")||(self.options.inputs={}),self.options.inputs},remove:function(value){var self=this,inputs=self.options.inputs;return inputs.hasOwnProperty(value)&&(inputs[value]=null,delete self.options.inputs[value]),self},setData:function(data){var self=this;return self.options.data=data,self},getData:function(){return this.options.data},setValidationGroup:function(){},setValidationGroup:function(){},getInvalidInputs:function(){return context.sjl.classOfIs(this.options.invalidInputs,"Object")||(this.options.invalidInputs={}),this.options.invalidInputs},getValidInputs:function(){return context.sjl.classOfIs(this.options.validInputs,"Object")||(this.options.validInputs={}),this.options.validInputs},getRawValues:function(){var self=this,rawValues={},input,invalidInputs=self.getInvalidInputs();for(input in invalidInputs)input=invalidInputs[input],rawValues[input.getName()]=input.getRawValue();return rawValues},getValues:function(){var self=this,values={},input,invalidInputs=self.getInvalidInputs();for(input in invalidInputs)input=invalidInputs[input],values[input.getName()]=input.getValue();return values},getMessages:function(){var self=this,messages={},input,key,invalidInputs=self.getInvalidInputs();for(key in invalidInputs)input=invalidInputs[key],messages[input.getName()]=input.getMessages();return messages},setDataOnInputs:function(data){var self=this,inputs=self.getInputs(),key;data=data||self.getData();for(key in data){if(!context.sjl.isset(inputs[key])||!context.sjl.isset(data[key]))continue;inputs[key].setValue(data[key])}},clearValidInputs:function(){this.setOption("validInputs",{})},clearInvalidInputs:function(){this.setOption("invalidInputs",{})},_getValidatorsFromInputHash:function(inputHash){return context.sjl.isset(inputHash.validators)?inputHash.validators:null}},{factory:function(inputSpec){if(!context.sjl.classOfIs(inputSpec,"Object")||!context.sjl.isset(inputSpec.inputs))throw new Error('InputFilter class expects param 1 to be of type "Object".');var inputFilter=new context.sjl.InputFilter;return inputFilter.setInputs(inputSpec.inputs),inputFilter},VALIDATE_ALL:0})}(typeof window=="undefined"?global:window),function(context){context.sjl.Iterator=context.sjl.Extendable.extend(function Iterator(values,pointer){if(!(this instanceof sjl.Iterator))return new sjl.Iterator(values,pointer);this.collection=values||[],this.pointer=sjl.classOfIs(pointer,"Number")?parseInt(pointer,10):0},{current:function(){var self=this;return self.valid()?{done:!1,value:self.getCollection()[self.getPointer()]}:{done:!0}},next:function(){var self=this,pointer=self.getPointer(),retVal=self.valid()?{done:!1,value:self.getCollection()[pointer]}:{done:!0};return self.pointer=pointer+1,retVal},rewind:function(){this.pointer=0},valid:function(){return this.getPointer()<this.getCollection().length},getPointer:function(defaultNum){return defaultNum=sjl.classOfIs(defaultNum,"Number")?isNaN(defaultNum)?0:defaultNum:0,context.sjl.classOfIs(this.pointer,"Number")||(this.pointer=parseInt(this.pointer,10),isNaN(this.pointer)&&(this.pointer=defaultNum)),this.pointer},getCollection:function(){return context.sjl.classOfIs(this.collection,"Array")?this.collection:[]}})}(typeof window=="undefined"?global:window),define("sjl",function(){}),define("lib/mvc/module/Module",["sjl","amplify"],function(){return sjl.Extendable.extend(function Module(){this.initializers=[],amplify.subscribe("app:start",this,this.runInitializers)},{runInitializers:function(){var self=this;self.initializers.forEach(function(init){init.call(self)})},addInitializer:function(callback){this.initializers.push(callback)}})}),define("modules/application/ApplicationModule",["lib/mvc/module/Module","jquery","amplify"],function(Module){var baseConstructor=function Application(){},Constructor=sjl.Extendable.extend(baseConstructor,{run:function(){$("#main-content").html("<h3>Application launched!</h3>"),console.log("Application launched"),amplify.publish("app:start")}});return new Constructor}),define("lib/webgl/WebGl",["sjl"],function(){return sjl.Extendable.extend(function WebGlContext(elmOrSelector){var self=this,gl=null,elm=null,classOfElmOrSelector=sjl.classOf(elmOrSelector),selector=null;if(sjl.empty(elmOrSelector))throw new Error('`sjl.WebGlContext` requires parameter 1 to be either an HtmlElement or a String.Parameter type recieved "'+classOfInitParam+'".');switch(classOfElmOrSelector){case"HTMLCanvasElement":gl=self.getGlContextFromElm(elmOrSelector);break;case"String":selector=elmOrSelector,elm=document.querySelector(elmOrSelector),gl=self.getGlContextFromElm(elm);break;default:selector=elmOrSelector,elm=document.querySelector(elmOrSelector),gl=self.getGlContextFromElm(elm)}self.glInstance=gl,self.element=elm,self.selector=selector},{getGlContextFromElm:function(canvasElm){var gl=null,failureMessage="Failed to get webgl context.  Could not get gl context for this browser.";if(!sjl.classOfIs(canvasElm.getContext,"Function"))throw new Error(failureMessage);try{gl=canvasElm.getContext("webgl")||canvasElm.getContext("experimental-webgl")}catch(e){throw new Error(failureMessage)}return gl}})}),define("modules/webgl-experiments/WebGlExperimentsModule",["lib/mvc/module/Module","lib/webgl/WebGl","jquery"],function(Module,WebGl){var Constructor=Module.extend(function WebGlExperiments(){Module.call(this),this.addInitializer(this.init)},{init:function(){$("body").append('<canvas id="canvas" width="550px" height="400px" style="background: #ff0000;"></canvas>');var gl=new WebGl("#canvas");console.log("WebGlExperiments module just ran.")}});return new Constructor}),define("main",["modules/application/ApplicationModule","modules/webgl-experiments/WebGlExperimentsModule","amplify"],function(app,webglExp){app.run()});