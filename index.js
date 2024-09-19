

const container =document.querySelector('#container');
const ele = document.querySelector('#count');

        const randomColor  = function(){
            let color = "#";
            let hex="0123456789ABCDEF";
            for (let i=0;i<6;i++){
                    color+=hex[Math.floor(Math.random() *16 )];
            }
            return color;
        };
        let intervalId,Id2;
        
        const   startInterval =function (){
             intervalId =  setInterval(changeBgColor,1000);
               function  changeBgColor(){
                container.style.backgroundColor = randomColor();
                ele.textContent++;
        }
         Id2 =  setInterval(changeBgColor1,5000);
               function  changeBgColor1(){
                document.body.style.backgroundColor = randomColor();
        }
        }
        
        const stopInterval  = function (){
            clearInterval(intervalId);
            clearInterval(Id2)

        } ;
        
        document.querySelector('#startbtn').addEventListener("click",startInterval()) ;
        document.querySelector('#stopbtn').addEventListener("click",stopInterval());

const RandomColor = function(){
    let hex = "0123456789ABCDEF";
    let color = '#'
    for(let i= 0;i<6;i++)
    {
        color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
}
let interval,interval2;
document.querySelector('#container')
const StartChangeColor =function(){
    interval =setInterval(changeColor,1000);
    function changeColor(){
        document.body.style.backgroundColor = RandomColor();
    }
    interval2 =setInterval(changeColor2,5000);
    function changeColor2(){
        container.style.backgroundColor = randomColor();
    }
}

const StopChangeColor = function(){
    clearInterval(interval)
    clearInterval(interval2)

}
document.querySelector('#startbtn').addEventListener("click",StartChangeColor());
document.querySelector('#stopbtn').addEventListener("click",StopChangeColor());
