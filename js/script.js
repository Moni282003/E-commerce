function twoes(){
    document.getElementById('one').style.display = 'none';
    document.getElementById('two').style.display = 'flex';
    document.getElementById('twoes').style.display = 'inline';
    document.getElementById('onees').style.display = 'none';
}
function ones(){
    document.getElementById('one').style.display = 'flex';
    document.getElementById('two').style.display = 'none';
    document.getElementById('twoes').style.display = 'none';
    document.getElementById('onees').style.display = 'inline';
}

var MainImg=document.getElementById('MainImg');
var smallimage=document.getElementsByClassName('small_image');
smallimage[0].onclick=function(){
    MainImg.src=smallimage[0].src;
}
smallimage[1].onclick=function(){
    MainImg.src=smallimage[1].src;
}
smallimage[2].onclick=function(){
    MainImg.src=smallimage[2].src;
}
smallimage[3].onclick=function(){
    MainImg.src=smallimage[3].src;
}