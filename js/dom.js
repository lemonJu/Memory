memory.dom['$'] = function(selector, context){
	context = context || document;

	var result = [],
		idElem = new RegExp("^#[a-zA-Z0-9\\-]*"),
		classElem = new RegExp("^\\.{1}[a-zA-Z0-9\\-]*"),
		tagElem = new RegExp("^[a-zA-Z0-9\\-]*$");
		_selector = selector.substring(1,selector.length);

	var hasClass = function(element,className){
		var reg = new RegExp("^|\\s" + className +"\\s|$");
		return reg.test(element.className);
	},
	getByClass = function(className){
		var result = [],
			nodes = context.getElementsByTagName("*");
		for(var i = 0;i < nodes.length;i++){
			if( hasClass(nodes[i],className) ){
				result[result.length] = nodes[i];
			}
		}
		return result;
	};

	//如果已经是dom返回自身
	if (selector.nodeType) return selector;

	//如果不是dom元素，nodeType == 9 为document ==1 为普通的dom
	if (!context.nodeType || (context.nodeType != 9 && context.nodeType != 1)){
		return result;
	}

	//是id选择器
	if (selector.match(idElem) && selector.match(idElem)[0].length == selector.length){
		result[result.length] = context.getElementById(_selector);
		return result;
	} else if (selector.match(classElem) && selector.match(classElem)[0].length == selector.length){
		//如果是类选择器
		if(document.getElementsByClassName)
			return context.getElementsByClassName(_selector);
		return getByClass(_selector);
	} else if (selector.match(tagElem) && selector.match(tagElem)[0].length == selector.length){
		//如果是名称选择器
		return context.getElementsByTagName(selector);
	} else {
		//其他选择器 兼容ie8+
		if(document.querySelectorAll)
			return context.querySelectorAll(selector);
		return [];
	}


};