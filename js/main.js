   /*galeria*/
var i = 0; //start point
var images = [];
var time = 3000;
//imagens list

images[0] = './img/w.jpg';
images[1] = './img/w2.jpg';
images[2] = './img/w3.jpg';



//change imagens
function changeImg() {

document.getElementById("galery-img").src = images[i];


if (i < images.length -1  ){

    i++;

}else {
    i = 0;
}
setTimeout("changeImg()", time);

}
window.onload = changeImg;

