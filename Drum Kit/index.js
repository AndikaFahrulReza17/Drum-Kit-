// This is the JavaScript file for the Drum Kit project

// use buttons to play sound
/*const button = document.querySelectorAll("button");

function clickSound() {
    const sound = this.innerHTML;
   switch (sound) {
        case "w":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
        break;
        
        case "a":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
        break;
        
        case "s":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

        case "d":
            var tom1 = new Audio('sounds/tom-1.mp3');  
            tom1.play();
        break;

        case "j":
            var tom2 = new Audio('sounds/tom-2.mp3');  
            tom2.play();
        break;
        
        case "k":
            var tom3 = new Audio('sounds/tom-3.mp3');  
            tom3.play();
        break;

        case "l":
            var tom4 = new Audio('sounds/tom-4.mp3');  
            tom4.play();
        break;
        
        default:
            console.log(sound);       
}

}

button.forEach(function(button) {
    button.addEventListener("click", clickSound);
});


//using keydown to play sound
function keySound(event){
    const key = event.key.toLowerCase();
    switch (key) {
        case "w":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
        break;
        
        case "a":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
        break;
        
        case "s":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

        case "d":
            var tom1 = new Audio('sounds/tom-1.mp3');  
            tom1.play();
        break;

        case "j":
            var tom2 = new Audio('sounds/tom-2.mp3');  
            tom2.play();
        break;
        
        case "k":
            var tom3 = new Audio('sounds/tom-3.mp3');  
            tom3.play();
        break;

        case "l":
            var tom4 = new Audio('sounds/tom-4.mp3');  
            tom4.play();
        break;
        
        default:
            console.log(key);       
}

}

document.addEventListener("keydown", keySound);*/

//Simplified code using a functions to play sound

function playSound(key){
    switch(key){
        case "w":
            new Audio('sounds/crash.mp3').play();
            break;
        case "a":
            new Audio('sounds/kick-bass.mp3').play();
            break;
        case "s":
            new Audio('sounds/snare.mp3').play();
            break;
        case "d":
            new Audio('sounds/tom-1.mp3').play();
            break;
        case "j":
            new Audio('sounds/tom-2.mp3').play();
            break;
        case "k":
            new Audio('sounds/tom-3.mp3').play();
            break;
        case "l":
            new Audio('sounds/tom-4.mp3').play();
            break;
        default:
            console.log("Unmapped key/button: ", key);
    }
}

// function to add animation
function Animation(key){
    let activebutton = document.querySelector("." + key);
    activebutton.classList.add("pressed");
    setTimeout(function() {
        activebutton.classList.remove("pressed");
    }, 100);
}

//event listener for button clicks
document.querySelectorAll('button').forEach(button => {
    button.addEventListener("click", function() {
        playSound(this.innerHTML.toLowerCase());
        Animation(this.innerHTML.toLowerCase());
    });
});

//event listener for keydown events 
document.addEventListener("keydown", function(event) {
    playSound(event.key.toLowerCase());
    Animation(event.key.toLowerCase());
})