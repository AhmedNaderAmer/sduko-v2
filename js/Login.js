let labels= document.getElementsByTagName("label");
let the_button = document.getElementsByTagName("button")[0];



function store_cookie() { 
var userName = document.getElementById("User").value;
var level_num = document.getElementById("select").value;
var a_year_from_now = new Date()
a_year_from_now.setFullYear(a_year_from_now.getFullYear() + 1);
document.cookie = "userName=" + userName + ";expires=" + a_year_from_now.toGMTString();  
document.cookie = "level=" + level_num + ";expires=" + a_year_from_now.toGMTString();
}

switch(window.location.protocol) {
    case 'file:':
        alert("you must run it from a server");
        window.close();
      break;
 }
