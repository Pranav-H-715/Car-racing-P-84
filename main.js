var canvas=document.getElementById("canvas")
var context=canvas.getContext("2d")
var rh=90
var rw=100
var rx=10
var ry=10
var r2h=90
var r2w=100
var r2x=10
var r2y=100
var bg,r,r2
var rand=Math.floor(Math.random()*5)
function add(){
    bg=new Image()//creating new image and storing it in variable
    bg.onload=uploadbg//uploadbg function should be called only when the bg loads
    bg.src="racing.jpg"
    r=new Image()
    r.onload=uploadr
    r.src="car1.png"
    r2=new Image()
    r2.onload=uploadr2
    r2.src="car1.png"
}
function uploadbg(){
    context.drawImage(bg,0,0,canvas.width,canvas.height)
}
function uploadr(){
    context.drawImage(r,rx,ry,rw,rh)
}
function uploadr2(){
    context.drawImage(r2,r2x,r2y,r2w,r2h)
}
window.addEventListener("keydown",kd)
function kd(e){
    var kcode=e.keyCode
    if (kcode=="37"){
        left()
    }
    else if (kcode=="38"){
        up()
    }
    else if (kcode=="39"){
        right()
    }
    else if (kcode=="40"){
        down()
    }
    if (kcode=="65"){
        left2()
    }
    else if (kcode=="87"){
        up2()
    }
    else if (kcode=="68"){
        right2()
    }
    else if (kcode=="83"){
        down2()
    }
    if(rx>=700){
        document.getElementById("win").innerHTML="Car 1 is the winner"
    }
    else if(r2x>=700){
        document.getElementById("win").innerHTML="Car 2 is the winner"
    }
}
function left(){
    if (rx>=0){
        rx=rx-5
        uploadbg()
        uploadr()
        uploadr2()
    }
}
function up(){
    if (ry>=0){
        ry=ry-5
        uploadbg()
        uploadr()
        uploadr2()
    }
}
function right(){
    if (rx<=700){
        rx=rx+5
        uploadbg()
        uploadr()
        uploadr2()
    }
}
function down(){
    if (ry<=260){
        ry=ry+5
        uploadbg()
        uploadr()
        uploadr2()
    }
}
function left2(){
    if (r2x>=0){
        r2x=r2x-5
        uploadbg()
        uploadr2()
        uploadr()
    }
}
function up2(){
    if (r2y>=0){
        r2y=r2y-5
        uploadbg()
        uploadr2()
        uploadr()
    }
}
function right2(){
    if (r2x<=700){
        r2x=r2x+5
        uploadbg()
        uploadr2()
        uploadr()
    }
}
function down2(){
    if (r2y<=260){
        r2y=r2y+5
        uploadbg()
        uploadr2()
        uploadr()
    }
}