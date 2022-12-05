//alert("helos")
function val(){
    let name=document.getElementById("name").value
    let password=document.getElementById("password").value
    if(name==null||name==""){
        alert("fill in name");
    }
    else if(password.length<6){
        alert("password needs to be more than 6 character");
    }
    else{
        alert("loading.....100%");
    }
}