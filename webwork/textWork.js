var i = 0;
function countadd(){
     i=i+1;
     postMessage(i);
     setTimeout("countadd()",1000);
}
countadd();