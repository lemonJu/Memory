var addScript = function(setting, callback){
	var src = setting["url"],
		//默认60s超时
		timeout = setting["timeout"] || 1000,
		parentNode = setting["parentNode"] || document.body,
		//是否加载完成
		done = false,
        errorCallBack = setting["errorCallBack"] || function(){},
		handle,
		//判断是否是老的ie
		isOldIE = !!document.attachEvent && !(window.opera && toString.call(window.opera) == '[object Opera]');
	var getRandId = function(){
		return 'as_' + parseInt(Math.random()*100);
	};

    for(i = 0;i < src.length ;i++){
        var scriptTag = document.createElement("script");

        scriptTag.src = src[i];

        if( isOldIE ) {
            scriptTag.event = "onclick";
            scriptTag.id = scriptTag.htmlFor = "sc1";
        }

        parentNode.appendChild(scriptTag);

        handle = window.setTimeout(function(){
            done = true;
            throw new Error("timeout : " + src);
            errorCallBack.call(window,{message:"time out",url : scriptTag.src});
            scriptTag.parentNode.removeChild(scriptTag);
        },timeout);

        scriptTag.onload = scriptTag.onreadystatechange = function(e) {
            if ( isOldIE && /loaded|complete/.test(scriptTag.readyState) ) {
                try {
                    scriptTag.onclick();
                } catch( e ) {}
            }
            clearTimeout(handle);
            //不能取消事件函数
            //scriptTag.onload = null;
            //scriptTag.onreadystatechange = null;
            //执行回调
            done = true;
            callback(scriptTag);
        };
    }
};