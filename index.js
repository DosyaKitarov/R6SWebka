var postArray = JSON.parse(localStorage.getItem("postArray")) || [];

for (i = 0; i < postArray.length; i++) {
    createCard(postArray[i])
}
if (postArray.length != 0) {
    document.getElementById("nothing").style.display = "none";
} else {
    document.getElementById("nothing").style.display = "block";
}

function createCard(post) {

    var cardDiv = document.createElement("div");
    if (post.postColor == "bg-dark") {
        cardDiv.setAttribute("class", "card text-white bg-dark mb-3 me-1 col-3");
    } else {
        cardDiv.setAttribute("class", "card text-dark bg-light mb-3 me-1 col-3");
    }
    cardDiv.setAttribute("style", "max-width: 18rem;");


    var cardHeaderDiv = document.createElement("div");
    cardHeaderDiv.setAttribute("class", "card-header h1");
    cardHeaderDiv.innerText = post.postHeader;


    var cardBodyDiv = document.createElement("div");
    cardBodyDiv.setAttribute("class", "card-body");

    var dateTitle = document.createElement("h5");
    dateTitle.setAttribute("class", "card-title h2");
    dateTitle.innerText = post.postDate;


    var contentParagraph = document.createElement("p");
    contentParagraph.setAttribute("class", "card-text h2");
    contentParagraph.innerText = post.postContent;


    var rowDiv = document.createElement("div");
    rowDiv.setAttribute("class", "row text-center");


    for (var i = 0; i < 3; i++) {
        var colDiv = document.createElement("div");
        colDiv.setAttribute("class", "col-4");


        if (i === 0 || i === 2) {
            var likeButton = document.createElement("a");
            likeButton.setAttribute("class", i === 0 ? "btn btn-primary btn-lg likeButton" : "btn btn-primary btn-lg dislikeButton");
            likeButton.setAttribute("onclick", i === 0 ? "postLike(this)" : "postDislike(this)");

            var img = document.createElement("img");
            img.setAttribute("src", i === 0 ? "imges/thumbs-up-regular.svg" : "imges/thumbs-down-regular.svg");
            img.setAttribute("class", "img-fluid");
            img.setAttribute("width", "100%");

            likeButton.appendChild(img);
            colDiv.appendChild(likeButton);
        } else if (i === 1) {
            var countParagraph = document.createElement("p");
            countParagraph.setAttribute("class", "h1 count");
            countParagraph.innerText = post.postRating;
            colDiv.appendChild(countParagraph);
        }

        rowDiv.appendChild(colDiv);
    }


    cardBodyDiv.appendChild(dateTitle);
    cardBodyDiv.appendChild(contentParagraph);
    cardBodyDiv.appendChild(rowDiv);


    cardDiv.appendChild(cardHeaderDiv);
    cardDiv.appendChild(cardBodyDiv);

    document.querySelector(".posts").appendChild(cardDiv);
}