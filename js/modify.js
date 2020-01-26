var local_cookie = document.cookie.split("A|A")[document.cookie.split("A|A").length - 1];
var percent = Math.round(parseFloat(local_cookie) * 100)
console.log(percent)
document.getElementById("fb-perc").innerHTML = "<p style= \"position: absolute; left: 75%; margin-left: -20px; font-size: 170%;\">"+ percent +"%</p"
document.getElementById("fb-res").innerHTML = "<div class=\"c100 p"+percent+" big\">\<span><img src = \"logoFB.png\" style = \"width: 30%; height: 30%;\"></span>\<div class=\"slice\"><div class=\"bar\"></div><div class=\"fill\"></div></div></div><div class=\"c100 p42 big\"><span><img src = \"logoS.png\" style = \"width: 30%; height: 30%;\"></span><div class=\"slice\"><div class=\"bar\"></div><div class=\"fill\"></div></div></div><div class=\"c100 p69 big\"><span><img src = \"logoT.png\" style = \"width: 30%; height: 30%;\"></span><div class=\"slice\"><div class=\"bar\"></div><div class=\"fill\"></div></div></div>"
console.log(document.cookie)