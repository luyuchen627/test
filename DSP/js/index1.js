function move(x){
	if(x==0){
		$(".header").stop().animate({
			bottom:0
		})
	}else{
		$(".header").stop().animate({
			bottom:$(window).height()-$(".header").height()
		})
	}
	$('.hnindex').eq(x).addClass("hnindexsel").siblings().removeClass("hnindexsel");
	$(".page").eq(x).css("display","block").siblings().css("display","none");
	$(".page").eq(x).find(".pitem1text").hide().slideDown();
	$(".page").eq(x).find(".rt").show().css("width",200).animate({width:20});
	$(".page").eq(x).find(".lb").show().css("width",200).animate({width:20});
	$(".page").eq(x).find(".pitem2").fadeIn(2000);
	$(".page").eq(x).find(".pitem3").animate({
		width:"100%",
		opacity:1
	},1000);
	switch(x){
		case 1:
			$(".p2item5").find("img").eq(0).hide().delay(500).slideDown("easeInCubic");
			break;
		case 2:
			$(".p3item5").find("img").eq(0).hide().delay(1000).slideDown(500,"easeOutBounce")
			$(".p3item5").find("img").eq(1).hide().delay(1400).slideDown("slow","easeInCubic");
			$(".p3item5").find("img").eq(2).hide().delay(1400).slideDown("slow","easeInCubic");
			$(".p3item5").find("img").eq(3).hide().delay(1400).slideDown("slow","easeInCubic");
			break;
		case 3:
			$(".p4item5").delay(1000).hide().fadeIn("slow");
			$(".p4item5 .p4list").delay(1000).fadeIn("slow");
			$(".p4tab").delay(1200).slideDown("slow","easeOutElastic");
			break;
		case 4:
			$(".p4item5").delay(1000).hide().fadeIn("slow");
			$(".p5bg").delay(1000).slideDown("slow","easeOutElastic");
			$(".p5img2").delay(1500).stop().animate({width:276},"slow");
			break;
		case 5:
			$(".p6img1").delay(1000).slideDown("slow","easeOutElastic",function(){
				$(".p6img2mask").show().stop().delay(200).animate({height:"0",top:345},"slow","easeOutQuint");
				$(".p6img2").show();
			});
			break;
		case 6:
			$(".p7img1").addClass("p7lr");
			break;
		default:
			break;
	}
}
