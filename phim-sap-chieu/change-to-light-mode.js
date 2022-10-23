let check_light_mode=localStorage.getItem("check_light_mode");
console.log(check_light_mode);
if(check_light_mode==null) check_light_mode=0;
else if(check_light_mode==1) {
    change_to_light();
    check_light_mode=1;
    localStorage.setItem("check_light_mode",check_light_mode);
}
function change_to_light() {
    check_light_mode^=1;
    console.log(check_light_mode);
    localStorage.setItem("check_light_mode",check_light_mode);
    
    var body = document.body;
    //body
    body.classList.toggle("light-body");
    document.getElementById("light").classList.toggle("light-background");
    var title=body.getElementsByTagName("h2");
    for (let j = 0; j < title.length; j++) {
        title[j].classList.toggle("light-h2");
    }
    //nav
    var nav = document.getElementsByTagName("nav");
    nav[0].classList.toggle("light-nav");
    //article
    var article = document.getElementsByTagName("article");
    for (let i = 0; i < article.length; i++) {
        article[i].classList.toggle("light-article");
        var head = article[i].getElementsByTagName("h1");
        head[0].classList.toggle("light-h1");
    }
    //main
    var main = document.getElementsByClassName("main");
    for (let i = 0; i < main.length; i++) {
        
        var main_item=main[i].getElementsByClassName("item");
        for (let j = 0; j < main_item.length; j++) {
            main_item[j].classList.toggle("light-main-item");
        }

        var main_item_trailer=main[i].getElementsByClassName("trailer");
        for (let j = 0; j < main_item_trailer.length; j++) {
            main_item_trailer[j].classList.toggle("light-main-item-trailer");
        }
    }
    //search
    var search = document.getElementById("search");
    search.classList.toggle("light-search");
    //phim hot
    var phimhot = document.getElementById("phim-hot");
   
    var phimhot_item = phimhot.getElementsByClassName("item");
    
    for (let i = 0; i < phimhot_item.length; i++) {
        phimhot_item[i].classList.toggle("light-phim-hot-item");

        phimhot_item[i].getElementsByTagName("a")[0].classList.toggle("light-phim-hot-item-a");
    }
}
