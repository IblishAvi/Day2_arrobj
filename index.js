

document.querySelector('#container')
        const randomColor  =function(){
            let color = "#";
            const hex="0123456789ABCDEF";
            for (let i=0;i<6;i++){
                    color+=hex[Math.floor(Math.random() *16 )];
            }
            return color;
        };
        let intervalId,id2;
        const   startInterval =function (){
             intervalId =  setInterval(changeBgColor,1000);
               function  changeBgColor(){
                container.style.backgroundColor = randomColor();
        }
        Id2 =  setInterval(changeBgColor1,10000);
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
