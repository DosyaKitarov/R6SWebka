var postArray = JSON.parse(localStorage.getItem("postArray")) || [];

for (i = 0; i < postArray.length; i++) {
    createCard(postArray[i])
}


function createCard(post) {
    // Создаем основной div
    var cardDiv = document.createElement("div");
    cardDiv.setAttribute("class", "card text-white bg-primary mb-3 me-1 col-3");
    cardDiv.setAttribute("style", "max-width: 18rem;");

    // Создаем div для заголовка
    var cardHeaderDiv = document.createElement("div");
    cardHeaderDiv.setAttribute("class", "card-header h1");
    cardHeaderDiv.innerText = post.postHeader;

    // Создаем div для основного контента
    var cardBodyDiv = document.createElement("div");
    cardBodyDiv.setAttribute("class", "card-body");

    // Создаем заголовок h5 для даты
    var dateTitle = document.createElement("h5");
    dateTitle.setAttribute("class", "card-title h2");
    dateTitle.innerText = post.postDate;

    // Создаем параграф для новостного контента
    var contentParagraph = document.createElement("p");
    contentParagraph.setAttribute("class", "card-text h2");
    contentParagraph.innerText = post.postContent;

    // Создаем div с классом row и текстовым центром
    var rowDiv = document.createElement("div");
    rowDiv.setAttribute("class", "row text-center");

    // Создаем три колонки внутри rowDiv
    for (var i = 0; i < 3; i++) {
        var colDiv = document.createElement("div");
        colDiv.setAttribute("class", "col-4");

        // Добавляем кнопку like, количество и кнопку dislike
        if (i === 0 || i === 2) {
            var likeButton = document.createElement("a");
            likeButton.setAttribute("class", i === 0 ? "btn btn-dark btn-lg likeButton" : "btn btn-dark btn-lg dislikeButton");
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

    // Добавляем все элементы в cardBodyDiv
    cardBodyDiv.appendChild(dateTitle);
    cardBodyDiv.appendChild(contentParagraph);
    cardBodyDiv.appendChild(rowDiv);

    // Добавляем заголовок и cardBodyDiv в основной div
    cardDiv.appendChild(cardHeaderDiv);
    cardDiv.appendChild(cardBodyDiv);

    // Добавляем созданный элемент в контейнер с классом "posts"
    document.querySelector(".posts").appendChild(cardDiv);
}