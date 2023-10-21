var pressed = false;

function likePress() {
    if (pressed == false) {
        pressed = true;
        alert("Thanks!");
        console.log("Done");
    }else{
        var ans = prompt("You want to change your mind? Y/N")
        if (ans=="Y"||ans=="y"){
            alert("Okay! Press rate button again.")
            pressed=false
        } else if(ans=="N"||ans=="n"){
            alert("Okay!")
        }
    }
}

function dislikePress() {
    if (pressed == false) {
        pressed = true;
        prompt("Tell us what you didn't like?");
        alert("Thanks! We heard you!");
        console.log("Done");
    }else{
        var ans = prompt("You want to change your mind? Y/N")
        if (ans=="Y"||ans=="y"){
            alert("Okay! Press rate button again.")
            pressed=false
        } else if(ans=="N"||ans=="n"){
            alert("Okay!")
        }
    }
}
