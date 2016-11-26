onmessage=function(e) {
     console.time("开始");
     var a=0;
     for(var i=0;i<parseInt(e.data);i++){
          a += Math.sqrt(i);
     }

     postMessage(a);
     console.timeEnd("结束");
}

