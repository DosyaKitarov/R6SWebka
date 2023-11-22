var pressed = false;
var isLoggedIn = localStorage.getItem("isLoggedIn");

function likePress() {
    if (pressed == false) {
        pressed = true;
        alert("Thanks!");
        console.log("Done");
    } else {
        var ans = prompt("You want to change your mind? Y/N")
        if (ans == "Y" || ans == "y") {
            alert("Okay! Press rate button again.")
            pressed = false
        } else if (ans == "N" || ans == "n") {
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
    } else {
        var ans = prompt("You want to change your mind? Y/N")
        if (ans == "Y" || ans == "y") {
            alert("Okay! Press rate button again.")
            pressed = false
        } else if (ans == "N" || ans == "n") {
            alert("Okay!")
        }
    }
}

function postLike(button) {
    if (isLoggedIn === "true") {
        var countElement = button.closest('.card').querySelector(".count");
        var likeButton = button;
        var dislikeButton = button.closest('.card').querySelector(".dislikeButton");

        var currentCount = parseInt(countElement.textContent);

        if (!likeButton.disabled && !dislikeButton.disabled) {
            countElement.textContent = currentCount + 1;
            likeButton.disabled = true;
            countElement.classList.add("text-success");
        } else if (!likeButton.disabled && dislikeButton.disabled) {
            countElement.textContent = currentCount + 2;
            likeButton.disabled = true;
            dislikeButton.disabled = false;
            countElement.classList.replace("text-danger", "text-success");
        }
    } else {
        alert("Please Log in!")
    }


}

function postDislike(button) {
    if (isLoggedIn === "true") {
        var countElement = button.closest('.card').querySelector(".count");
        var likeButton = button.closest('.card').querySelector(".likeButton");
        var dislikeButton = button;

        var currentCount = parseInt(countElement.textContent);

        if (!dislikeButton.disabled && !likeButton.disabled) {
            countElement.textContent = currentCount - 1;
            dislikeButton.disabled = true;
            countElement.classList.add("text-danger");
        } else if (!dislikeButton.disabled && likeButton.disabled) {
            countElement.textContent = currentCount - 2;
            likeButton.disabled = false;
            dislikeButton.disabled = true;
            countElement.classList.replace("text-success", "text-danger");
        }
    } else {
        alert("Please Log in!");
    }
}