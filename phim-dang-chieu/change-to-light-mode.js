let check_light_mode=localStorage.getItem("check_light_mode");
if(check_light_mode==null) check_light_mode=0;
else if(check_light_mode==1) {
    change_to_light();
    check_light_mode=1;
    localStorage.setItem("check_light_mode",check_light_mode);
}
function change_to_light() {
    check_light_mode^=1;
    localStorage.setItem("check_light_mode",check_light_mode);
    
    var body = document.body;
    //body
    body.classList.toggle("light-body");
    document.getElementById("light").classList.toggle("light-background");
}
