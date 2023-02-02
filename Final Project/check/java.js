function send(){
    document.getElementById('demo').innerHTML="Sended Succesfully!";
    return false;
}
function price(){
    var a=document.getElementById('qua').value;
    document.getElementById('pri').innerHTML="Total Price is: "+a*2+"$";
}