function printTime(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
function print(timer, callBack){
    let intervalID = setInterval(function (){
        callBack();
        if(--timer < 0){
            clearInterval(intervalID);
        }
    }, 1000);
}
console.log("time will run for 5 seconds.");
print(5, printTime);
