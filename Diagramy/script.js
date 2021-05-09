var jeden = document.getElementById("1");
var dwa = document.getElementById("2");
var trzy = document.getElementById("3");

jeden.addEventListener("click", kreskajd)
jeden.addEventListener("click", kreskajt)

dwa.addEventListener("click", kreskadj)
dwa.addEventListener("click", kreskadt)

trzy.addEventListener("click", kreskatj)
trzy.addEventListener("click", kreskatd)

function kreskajd(){
    dwa.onclick = function(){
        var c = document.getElementById("myCanvas");
        c.width = window.innerWidth;
        c.height = window.innerHeight;
        var ctx = c.getContext("2d");
        ctx.moveTo(250, 110);
        ctx.lineTo(1200, 225);
        ctx.stroke();
    }
}
function kreskajt(){
    trzy.onclick = function(){
        var c = document.getElementById("myCanvas");
        c.width = window.innerWidth;
        c.height = window.innerHeight;
        var ctx = c.getContext("2d");
        ctx.moveTo(250, 110);
        ctx.lineTo(600, 330);
        ctx.stroke();
    }
}
function kreskadj(){
    jeden.onclick = function(){
        var c = document.getElementById("myCanvas");
        c.width = window.innerWidth;
        c.height = window.innerHeight;
        var ctx = c.getContext("2d");
        ctx.moveTo(250, 110);
        ctx.lineTo(1200, 225);
        ctx.stroke();
    }
}
function kreskadt(){
    trzy.onclick = function(){
        var c = document.getElementById("myCanvas");
        c.width = window.innerWidth;
        c.height = window.innerHeight;
        var ctx = c.getContext("2d");
        ctx.moveTo(600, 350);
        ctx.lineTo(1200, 225);
        ctx.stroke();
    }
}
function kreskatj(){
        jeden.onclick = function(){
        var c = document.getElementById("myCanvas");
        c.width = window.innerWidth;
        c.height = window.innerHeight;
        var ctx = c.getContext("2d");
        ctx.moveTo(250, 110);
        ctx.lineTo(600, 330);
        ctx.stroke();
    }
}
function kreskatd(){
        dwa.onclick = function(){
        var c = document.getElementById("myCanvas");
        c.width = window.innerWidth;
        c.height = window.innerHeight;
        var ctx = c.getContext("2d");
        ctx.moveTo(600, 350);
        ctx.lineTo(1200, 225);
        ctx.stroke();
    }
}