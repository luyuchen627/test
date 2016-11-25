$(function(){
	var platform=navigator.userAgent.toLowerCase();
	var x=0;
	var moveover=false;
	var scrolltimer=null;

	$(".mlogo").toggle(function(){
		$(".mnav").slideDown("slow");
		$(".mzixun").animate({
			top:240
		},"slow")
	},function(){
			$(".mzixun").animate({
				top:60
			},"slow");
			$(".mnav").slideUp("slow");
		}
	);//左侧动画

	$(".hlist").hover(function(){
		$(".hnavbg").stop().animate({"left":$(this).index()*152})
	});//头部导航动画

	$(".time").text(function(){
		var time=new Date();
		var year=time.getFullYear();
		var month=time.getMonth()+1;
		var day=time.getDate();
		return year+"年"+month+"月"+day+"日";
	});

	setInterval(function(){
		$(".deng").attr("src","img/dengpao1.png");
		setTimeout(function(){
			$(".deng").attr("src","img/deng.png");
		},500);
	},1000);

	$('.hnindex').hover(function(){
		$(this).find(".miaoshu").show().stop().animate({
			width:100
		},500)
	},function(){
		$(this).find(".miaoshu").stop().animate({
			width:0
		},500,function(){
			$(this).find(".miaoshu").hide();
		})
	});
	$('.hnindex').click(function(){
		x=$(this).index();
		move(x);
		$(this).addClass("hnindexsel").siblings().removeClass("hnindexsel");
	})


	if(platform.indexOf("firefox")!=-1){
		window.addEventListener("DOMMouseScroll",function(event){
			var e=event||window.event;
			e.preventDefault();
			var dic=-e.detail;
			clearTimeout(scrolltimer);
			scrolltimer=setTimeout(function(){
				wheel(dic);
			},500);
		},false)
	}else{
		window.onmousewheel=function(event){
			var e=event||window.event;
			if(e.preventDefault){
				e.preventDefault();
			}else{
				e.returnValue=false;
			}
			clearTimeout(scrolltimer);
			scrolltimer=setTimeout(function(){
				wheel(e.wheelDelta);
			},500);	
		}
	}

	function wheel(dic){
		var parent=$(".page").eq(x).children();
		while(parent.length>0){
			parent.removeAttr("style");
			parent=parent.children();
		}
		if(dic>0){
			x--;
			if(x<=0){x=0;}	
		}else{
			x++;
			if(x>=$(".page").length){x=$(".page").length-1};	
		}
		move(x);
	}

	
})