//for adding eventlistner in a loop
/*let x=document.querySelectorAll('button').length;
for(var i=0;i<x;i++)
{
    document.querySelectorAll('button')[i].addEventListener("click",function (){
        //alert("I got clicked");
        this.style.color="white";//this is used for accessing the html
    });
}*/
/*let a=document.querySelectorAll('button').length;
for(let i=0;i<a;i++)
{
document.querySelectorAll('button')[i].addEventListener('click',function (){
    var audio=new Audio("sounds/kick-bass.mp3");
    audio.play();
});

}*/
//using switch case for playing the song
let a = document.querySelectorAll('button').length;
for(let i=0;i<a;i++)
{
    document.querySelectorAll('button')[i].addEventListener('click', function () {
        let on_button = this.innerHTML;
         makes_sound(on_button);
         annimation(on_button);
    });
}

//using key press eventlistner
document.addEventListener("keypress",function(event)
{
    makes_sound(event.key);
    annimation(event.key);
});

function makes_sound(key)
{
    switch (key) {
        case 'w':
            {
                let s="sounds/crash.mp3";
                sound_(s);
                break;
            }
        case 'a':
            {
               let s="sounds/kick-bass.mp3";
               sound_(s);
                break;
            }
        case 's':
            {
               let s="sounds/snare.mp3";
               sound_(s);
                break;
            }
        case 'd':
            {
                let s="sounds/tom-1.mp3";
                sound_(s);
                break;
            }
        case 'j':
            {
                let s="sounds/tom-2.mp3";
                sound_(s);
                break;
            }
        case 'k':
            {
                let s="sounds/tom-3.mp3";
                sound_(s);
                break;
            }
        case 'l':
            {
                let s="sounds/tom-4.mp3";
                sound_(s);
                break;
            }
    }

}

function sound_(s)
{
    let audio = new Audio(s);
                audio.play();
}
//animation
function annimation(key)
{
    let x=document.querySelectorAll("."+key);
    x.classList.add("pressed");
    setTimeout(function(){
        x.classList.remove("pressed");
    }, 1000);
}
