var postArray = JSON.parse(localStorage.getItem("postArray")) || [];
var currentLogin = localStorage.getItem("currentLogin")
for (i = 0; i < postArray.length; i++) {
    createCard(postArray[i], i)
}
if (postArray.length != 0) {
    document.getElementById("nothing").style.display = "none";
} else {
    document.getElementById("nothing").style.display = "block";
}

function sendComment(button, index) {
    var commentDiv = document.createElement("div");
    l = postArray[index].postCommentsCount;
    commentDiv.id = `comment${l}`

    var hrLine = document.createElement("hr");
    hrLine.setAttribute("class", "hr");

    var userInfoDiv = document.createElement("div");
    userInfoDiv.setAttribute("class", "row");

    var pfp = document.createElement("div");
    pfp.setAttribute("class", "col-5");

    var imgElement = document.createElement("img");
    if (currentLogin == "Kitare.CBT")
        imgElement.src = "account/imges/KitarePFP.png";
    else if (currentLogin == "Melch1or.CBT")
        imgElement.src = "account/imges/MelchiorPFP.png";
    else
        imgElement.src = "account/imges/noPFP.webp";
    imgElement.className = "img-thumbnail rounded";
    imgElement.style.width = "100%";

    var nameAndDate = document.createElement("div");
    nameAndDate.setAttribute("class", "col-7");

    var name = document.createElement("div");
    name.setAttribute("class", "row");

    var nameText = document.createElement("p");
    var color = postArray[index].postColor;
    if (color == "bg-dark") {
        nameText.setAttribute("class", "h3 text-light");
    } else {
        nameText.setAttribute("class", "h3 text-dark");
    }


    nameText.innerText = currentLogin;

    var date = document.createElement("div");
    date.setAttribute("class", "row");

    var dateText = document.createElement("p");
    dateText.setAttribute("class", "h6 text-secondary");
    dt = getDate()
    dateText.innerText = dt;

    name.appendChild(nameText);
    date.appendChild(dateText);
    nameAndDate.appendChild(name);
    nameAndDate.appendChild(date);
    pfp.appendChild(imgElement);
    userInfoDiv.appendChild(pfp);
    userInfoDiv.appendChild(nameAndDate);

    var commentaryAndDeleteDiv = document.createElement("div");
    commentaryAndDeleteDiv.setAttribute("class", "row");

    var commentaryTextDiv = document.createElement("div");
    commentaryTextDiv.setAttribute("class", "row");

    var text = document.createElement("p");
    text.setAttribute("class", "h2");
    yourText = document.getElementById("textarea").textContent;
    text.innerText = yourText

    var buttonDiv = document.createElement("div");
    buttonDiv.setAttribute("class", "col");

    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "btn btn-danger btn-sm";
    btn.textContent = "Delete";
    btn.setAttribute("onClick", `deleteComment(${index},${l})`);

    buttonDiv.appendChild(btn);
    commentaryTextDiv.appendChild(text);
    commentaryAndDeleteDiv.appendChild(commentaryTextDiv);
    commentaryAndDeleteDiv.appendChild(buttonDiv);

    commentDiv.appendChild(hrLine);
    commentDiv.appendChild(userInfoDiv);
    commentDiv.appendChild(commentaryAndDeleteDiv);
    var comments = button.closest(`.commentsPost${index}`)
    var write = document.querySelector(`.writeComment${index}`)
    comments.appendChild(commentDiv);
    comments.insertBefore(commentDiv, write)

    var commentary = {
        user: currentLogin,
        date: dt,
        comment: yourText
    }
    postArray[index].postCommentsCount++;
    postArray[index].postComments.push(commentary)
    localStorage.setItem("postArray", JSON.stringify(postArray));
}

function getDate() {
    var months = [
        "January", "February", "March",
        "April", "May", "June",
        "July", "August", "September",
        "October", "November", "December"
    ];

    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = months[currentDate.getMonth()];
    var hours = currentDate.getHours().toString().padStart(2, '0');
    var minutes = currentDate.getMinutes().toString().padStart(2, '0');

    return `${day} ${month} ${hours}:${minutes}`;

}

function deleteComment(postIndex, comIndex) {
    var commentsDiv = document.querySelector(`.commentsPost${postIndex} #comment${comIndex}`);

    commentsDiv.remove();

    postArray[postIndex].postComments.splice(comIndex, 1);

    postArray[postIndex].postCommentsCount--;

    localStorage.setItem("postArray", JSON.stringify(postArray));

}

function createCard(post, index) {
    var cardDiv = document.createElement("div");
    if (post.postColor == "bg-dark") {
        cardDiv.setAttribute("class", "card text-white bg-dark mb-3 me-1 col-3");
    } else {
        cardDiv.setAttribute("class", "card text-dark bg-light mb-3 me-1 col-3");
    }
    cardDiv.setAttribute("style", "max-width: 18rem;");

    var cardHeaderDiv = document.createElement("div");

    var cardHeaderDiv = document.createElement("div");
    if (post.postColor == "bg-dark") {
        cardHeaderDiv.setAttribute("class", "card-header h1 border-light");
    } else {
        cardHeaderDiv.setAttribute("class", "card-header h1 border-dark");
    }

    cardHeaderDiv.innerText = post.postHeader;

    var cardBodyDiv = document.createElement("div");
    if (post.postColor == "bg-dark") {
        cardBodyDiv.setAttribute("class", "card-body border-light");
    } else {
        cardBodyDiv.setAttribute("class", "card-body border-dark");
    }


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

    var cardFooterDiv = document.createElement("div");
    if (post.postColor == "bg-dark") {
        cardFooterDiv.setAttribute("class", "card-footer border-light h1");
    } else {
        cardFooterDiv.setAttribute("class", "card-footer border-dark h1");
    }


    var commentsSection = document.createElement("div");
    commentsSection.setAttribute("class", `commentsPost${index}`)
    commentsSection.setAttribute("style", "display :block");
    var commentsHeader = document.createElement("p");
    commentsHeader.setAttribute("class", "h2");
    commentsHeader.innerText = "Comments";

    var toggleButton = document.createElement("button");
    toggleButton.setAttribute("type", "button");
    toggleButton.setAttribute("class", "btn btn-primary btn-lg");
    toggleButton.setAttribute("style", "margin-left: 39%");
    toggleButton.innerText = "-";
    toggleButton.setAttribute("onClick", `toggleComments(this,${index})`);

    for (i = 0; i < post.postComments.length; i++) {
        var commentDiv = document.createElement("div");
        commentDiv.id = `comment${i}`

        var hrLine = document.createElement("hr");
        hrLine.setAttribute("class", "hr ");

        var userInfoDiv = document.createElement("div");
        userInfoDiv.setAttribute("class", "row");

        var pfp = document.createElement("div");
        pfp.setAttribute("class", "col-5");

        var imgElement = document.createElement("img");
        if (post.postComments[i].user == "Kitare.CBT")
            imgElement.src = "account/imges/KitarePFP.png";
        else if (post.postComments[i].user == "Melch1or.CBT")
            imgElement.src = "account/imges/MelchiorPFP.png";
        else
            imgElement.src = "account/imges/noPFP.webp";
        imgElement.className = "img-thumbnail rounded";
        imgElement.style.width = "100%";

        var nameAndDate = document.createElement("div");
        nameAndDate.setAttribute("class", "col-7");

        var name = document.createElement("div");
        name.setAttribute("class", "row");

        var nameText = document.createElement("p");
        if (post.color == "bg-dark") {
            nameText.setAttribute("class", "h3 text-light");
        } else {
            nameText.setAttribute("class", "h3 text-dark");

        }
        postUser = post.postComments[i].user;
        nameText.innerText = postUser;

        var date = document.createElement("div");
        date.setAttribute("class", "row");

        var dateText = document.createElement("p");
        dateText.setAttribute("class", "h6 text-secondary");
        dateText.innerText = post.postComments[i].date;

        name.appendChild(nameText);
        date.appendChild(dateText);
        nameAndDate.appendChild(name);
        nameAndDate.appendChild(date);
        pfp.appendChild(imgElement);
        userInfoDiv.appendChild(pfp);
        userInfoDiv.appendChild(nameAndDate);

        var commentaryAndDeleteDiv = document.createElement("div");
        commentaryAndDeleteDiv.setAttribute("class", "row");

        var commentaryTextDiv = document.createElement("div");
        commentaryTextDiv.setAttribute("class", "row");

        var text = document.createElement("p");
        text.setAttribute("class", "h2");
        text.innerText = post.postComments[i].comment;

        var buttonDiv = document.createElement("div");
        buttonDiv.setAttribute("class", "col");

        var btn = document.createElement("button");
        btn.type = "button";
        btn.className = "btn btn-danger btn-sm";
        btn.textContent = "Delete";
        btn.setAttribute("onClick", `deleteComment(${index},${i})`);
        if (postUser != currentLogin && currentLogin != "admin")
            btn.setAttribute("style", "display: none")
        buttonDiv.appendChild(btn);
        commentaryTextDiv.appendChild(text);
        commentaryAndDeleteDiv.appendChild(commentaryTextDiv);
        commentaryAndDeleteDiv.appendChild(buttonDiv);

        commentDiv.appendChild(hrLine);
        commentDiv.appendChild(userInfoDiv);
        commentDiv.appendChild(commentaryAndDeleteDiv);


        var comments = commentsSection
        comments.appendChild(commentDiv);

    }




    var writeCommentSection = document.createElement("div");
    writeCommentSection.setAttribute("class", `writeComment${index}`);

    var yourCommentary = document.createElement("p");
    yourCommentary.setAttribute("class", "h3");
    yourCommentary.innerText = "Your commentary";

    var commentTextarea = document.createElement("td");
    commentTextarea.id = "textarea";
    commentTextarea.contentEditable = true;

    var sendButton = document.createElement("button");
    sendButton.setAttribute("type", "button");
    sendButton.setAttribute("class", "btn btn-warning btn-sm");
    sendButton.innerText = "Send";
    sendButton.setAttribute("onClick", `sendComment(this,${index})`);

    commentsHeader.appendChild(toggleButton);

    writeCommentSection.appendChild(yourCommentary);
    writeCommentSection.appendChild(commentTextarea);
    writeCommentSection.appendChild(sendButton);


    cardFooterDiv.appendChild(commentsHeader);
    commentsSection.appendChild(writeCommentSection);
    cardFooterDiv.appendChild(commentsSection);

    cardDiv.appendChild(cardHeaderDiv);
    cardDiv.appendChild(cardBodyDiv);
    cardDiv.appendChild(cardFooterDiv);

    document.querySelector(".posts").appendChild(cardDiv);
}

function toggleComments(button, index) {
    var state = button.innerText;
    var comments = document.querySelector(`.commentsPost${index}`)

    if (state == "-") {
        comments.style.display = "none";
        button.innerText = "+";
    } else {
        comments.style.display = "block";
        button.innerText = "-";
    }

}