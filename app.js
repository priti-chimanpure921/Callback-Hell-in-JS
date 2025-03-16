//Nesting of callbacks is called callback hell
let h1 = document.querySelector("h1");

function changeColor(color,delay,nextColor)
{
    setTimeout(()=>{
        h1.style.color = color;
        if(nextColor)
            nextColor();
    },delay);
   
}

changeColor("red",1000,()=>
{
    changeColor("orange",1000,()=>{
        changeColor("green",1000,()=>{
            changeColor("yellow",1000);
        });
    });
});

//callback hell while storing data to DB
function saveToDB(data,success,failure)
{
    let internetSpeed = Math.floor(Math.random() * 10) + 1 ;
    if(internetSpeed > 5)
        success();
    else
        failure();
}

saveToDB("Apna College1" , ()=>{

    console.log("Success1 : Data1 saved to DB");
    
    saveToDB("Apna college2" , ()=>{

        console.log("Success2 : Data2 saved to DB");
        
        saveToDB("Apna college3" , ()=>{
            console.log("Success3 : Data3 saved to DB");
        }, ()=>{
            console.log("Failure3 : Data3 is not saved to DB");
        });
    }, ()=>{
        console.log("Failure2 : Data2 not saved to DB");
    });
}, ()=>{
    console.log("Failure1 : Data1 not saved to DB");
});