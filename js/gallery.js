function upDate(previewPic){

var x=previewPic.src;

var y=previewPic.getAttribute("alt");

document.getElementById("image").style.backgroundImage='url('+x+')';

document.getElementById("image").innerHTML=y;

}

 
function unDo(){

    document.getElementById("image").style.backgroundImage='url("")';

    document.getElementById("image").innerHTML='Hover over an image below to display here.';
}