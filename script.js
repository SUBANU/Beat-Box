let beats={
    "65":{
        beat:new Beat("./assets/piano331 A.mp3"),
        button:new Button("#00fffe",65)
    },
    "83":{
        beat:new Beat("./assets/piano209 S.mp3"),
        button:new Button("#00fffe",83)
    },
    "68":{
        beat:new Beat("./assets/piano208 D.mp3"),
        button:new Button("#00fffe",68)
    },
    "70":{
        beat:new Beat("./assets/drumsticks F.mp3"),
        button:new Button("#ff00ff",70)
    },
    "71":{
        beat:new Beat("./assets/drumsnayroll G.mp3"),
        button:new Button("#ff00ff",71)
    },
    "72":{
        beat:new Beat("./assets/phrelmusical H.mp3"),
        button:new Button("#ff00ff",72)
    },
    "74":{
        beat:new Beat("./assets/cymbalsuspended J.mp3"),
        button:new Button("#ffffff",74)
    },
    "75":{
        beat:new Beat("./assets/musicalcompose K.mp3"),
        button:new Button("#ffffff",75)
    },
    "76":{
        beat:new Beat("./assets/musicalorches L.mp3"),
        button:new Button("#ffffff",76)
    }
    
}


triggerbeat=(event)=>{
    let keyCode=event.keyCode;
    if(keyCode in beats){
        let keyPress=beats[keyCode];
        keyPress.beat.play();
        keyPress.button.select();
        setTimeout(()=>{keyPress.button.deselect()},100)
    }

}
const mybeat=document.querySelectorAll(".button")

mybeat.forEach(beat=>beat.addEventListener('click',()=>{
    let keyPress=beats[beat.id];
    keyPress.beat.play();
    keyPress.button.select();
    setTimeout(()=>{keyPress.button.deselect()},100);
    
}));

//  const end=(event)=>{
//     let keyCode=event.keyCode;
//     if(keyCode in beats){
//         let keyPress=beats[keyPress];
//         keyPress.button.deselect();
//     }
// }
//document.addEventListener('keyup',end);
 document.addEventListener('keyup',triggerbeat);



