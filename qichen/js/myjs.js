function preNode(obj){
	//obj的上一个兄弟节点
	if(obj.previousElementSibling){
		return obj.previousElementSibling;
	}else{
		return obj.previousSibling;
	}
}



function nextNode(obj){
	//obj的下一个兄弟节点
	if(obj.nextElementSibling){
		return obj.nextElementSibling;
	}else{
		return obj.nextSibling;
	}
}



function lastNode(obj){
	//obj的最后一个子元素
	if(obj.lastElementChild){
		return obj.lastElementChild;
	}else{
		return obj.lastChild;
	}
}

function firstNode(obj){
	//obj的第一个子元素
	if(obj.firstElementChild){
		return obj.firstElementChild;
	}else{
		return obj.firstChild;
	}
}


function objoffset(obj){
	//obj距离文档顶部和左部的距离
	var con=obj;
	var l=0;
	var t=0;
	if(obj.offsetTop===null){
		return;
	}
	while(obj){
		if(con==obj){
			l+=obj.offsetLeft;
			t+=obj.offsetTop;
			obj=obj.offsetParent;
		}
		l+=obj.offsetLeft+obj.clientLeft;
		t+=obj.offsetTop+obj.clientTop;
		obj=obj.offsetParent;
	}

	return {top:t,left:l};
}

/*通过类名获取元素*/
function byclassName(parent,obj) {
	if(!parent.nodeName){
		var parent=document.getElementById(parent);
	}
	var tags=parent.all||parent.getElementsByTagName('*');
	var arr=[];
	for (var i = 0; i<tags.length; i++) {
		var tags_arr=tags[i].className.split(" ");
		/*if(tags[i].className.indexOf(obj)!=-1){
			arr.push(tags[i]);
		}*/
		for (var j = 0; j<tags_arr.length; j++){
			if(tags_arr[j]==obj){
				arr.push(tags[i]);
				break;
			}
		}
		
	};
	return arr;
};

//得到当前时间
function CurentTime(){ 
    var now = new Date();
   
    var year = now.getFullYear();       //年
    var month = now.getMonth() + 1;     //月
    var day = now.getDate();            //日
   
    var hh = now.getHours();            //时
    var mm = now.getMinutes();          //分
   
    var clock = year + "-";
   
    if(month < 10)
        clock += "0";
   
    clock += month + "-";
   
    if(day < 10)
        clock += "0";
       
    clock += day + " ";
   
    if(hh < 10)
        clock += "0";
       
    clock += hh + ":";
    if (mm < 10) clock += '0'; 
    clock += mm; 
    return(clock); 
} 

// 判断一个对象的值为空
function isEmptyObject(e) {  
    var t;  
    for (t in e)  {
        return false;  
    }
    return true;
}  


// 设置cookie

function setCookie(user,value,day){
	var date=new Date();
	date.setDate(date.getDate()+day);
	document.cookie=user+"="+escape(value)+";expires="+date;
}

// 获取cookie
function getAllCookie(){
	var cookie=document.cookie;
	var arr1=cookie.split("; ");
	for(var i=0;i<arr1.length;i++){
		arr1[i]=arr1[i].split("=");
	}
	return arr1;
}

// 查询cookie中是否含有key
function getCookie(str){
	var arr1=unescape(document.cookie).split("; ");
	for(var i=0;i<arr1.length;i++){
		var arr2;
		arr2=arr1[i].split("=");
		if(arr2[0]==str){
			return arr2[1];
		}
	}
}
// 删除cookie
function removeCookie(str){
	setCookie(str,'12',-5);
}