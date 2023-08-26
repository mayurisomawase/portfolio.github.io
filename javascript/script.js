
document.getElementById("javascript5").style.display="block";

function some(){
        $(".side-bar").css({
            "right":"0%"
    
        });
    }


function second(){
        $(".side-bar").css({
            "right":"100%"
        });
    }



function function1(){
    document.getElementById("javascript").style.display="block";
    document.getElementById("javascript1").style.display="none";
    document.getElementById("javascript2").style.display="none";
    document.getElementById("javascript3").style.display="none";
    document.getElementById("javascript4").style.display="none";
    document.getElementById("javascript5").style.display="none";
}

function function2(){
    document.getElementById("javascript").style.display="none";
    document.getElementById("javascript1").style.display="block";
    document.getElementById("javascript2").style.display="none";
    document.getElementById("javascript3").style.display="none";
    document.getElementById("javascript4").style.display="none";
    document.getElementById("javascript5").style.display="none";
}

function function3(){
    document.getElementById("javascript").style.display="none";
    document.getElementById("javascript1").style.display="none";
    document.getElementById("javascript2").style.display="block";
    document.getElementById("javascript3").style.display="none";
    document.getElementById("javascript4").style.display="none";
    document.getElementById("javascript5").style.display="none";
}

function function4(){
    document.getElementById("javascript").style.display="none";
    document.getElementById("javascript1").style.display="none";
    document.getElementById("javascript2").style.display="none";
    document.getElementById("javascript3").style.display="block";
    document.getElementById("javascript4").style.display="none";
    document.getElementById("javascript5").style.display="none";
}
function function5(){
    document.getElementById("javascript").style.display="none";
    document.getElementById("javascript1").style.display="none";
    document.getElementById("javascript2").style.display="none";
    document.getElementById("javascript3").style.display="none";
    document.getElementById("javascript4").style.display="block";
    document.getElementById("javascript5").style.display="none";
}
function function6(){
    document.getElementById("javascript").style.display="none";
    document.getElementById("javascript1").style.display="none";
    document.getElementById("javascript2").style.display="none";
    document.getElementById("javascript3").style.display="none";
    document.getElementById("javascript4").style.display="none";
    document.getElementById("javascript5").style.display="block";
}

$(document).ready(function(){
    $('.piechart').easyPieChart({
       
       barColor:"crimson",
        trackColor:"grey",
        //  duration: 2000, enabled: true,
        rotate:180,
        lineWidth:10,
        scaleLength:0,
        size:150,
    
    })
})

function alertfunction(){
    alert("your form is submitted")
}

