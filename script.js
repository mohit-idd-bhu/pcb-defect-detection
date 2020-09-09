var ptr=0;
slide();
function slide(){
    if(ptr==3){
        ptr=0;
    }
    if(ptr==0){
        document.getElementById('bimg').style.backgroundImage="url(code1.jpg)";
    }
    if(ptr==1){
        document.getElementById('bimg').style.backgroundImage="url(code2.jpg)";
    }
    if(ptr==2){
        document.getElementById('bimg').style.backgroundImage="url(code3.jpg)";
    }
    ptr++;
    setTimeout(slide,3000);
}