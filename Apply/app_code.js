document.getElementById('sub').onclick=check;

function check(){
    let sn=document.getElementById('name').value;
    let sp=document.getElementById('pass').value;
    if(sn=="mohit"&&sp=="mohit"){
        window.location.href="http://www.w3schools.com";
    }
    else{
        window.alert('wrong');
    }
}