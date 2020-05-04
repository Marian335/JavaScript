let value =  ["Text", "Randome text", "MORE TEXT"];

function addText(){

    let elements = document.querySelectorAll('ul');



    for (let i = 0; i <elements.length; i ++) {

        elements[i].innerHTML = value[i];

    }

}

function noText(){

    let elements = document.querySelectorAll('ul');



    for (let i = 0; i <elements.length; i ++) {

        elements[i].innerHTML = "";

    }

}



function countli(){

    let elements = document.querySelectorAll('li');



    let elem = document.getElementById('AllLi');

    elem.innerHTML = elements.length;

}



function hide(){

    let elem = document.getElementById('hideButton')

    elem.style.display = "none";

}



hide_show = true;



function hide_showMenu(){

    let elem = document.getElementById('Menu')

    if(hide_show == true){

        hide_show = false

        elem.style.display = "none";

    } else {

        hide_show = true

        elem.style.display ="block";

    }

}



function changeAllA(){

    var array = [];

    var links = document.getElementsByTagName("a");

    for(var i=0; i<links.length; i++) {

        array.push(links[i].href);

        var mbHTTP = array[i].slice(0,7)

        var mbFTP = array[i].slice(0,6)

        if(mbHTTP == "http://" || mbFTP == "ftp://"){

            var mbHTTP = array[i].slice(0,19)

            if(mbHTTP == "http://internal.com"){

                continue

            }

            links[i].setAttribute("id", "external-red");



        }

        var mbHTTP = array[i].slice(0,7)

    }



}