var postArray = JSON.parse(localStorage.getItem("postArray")) || [];

updateTable();

function addPostBlack() {
    var postHeader = document.getElementById("postHeader").innerText;
    var postDate = document.getElementById("postDate").innerText;
    var postContent = document.getElementById("postContent").innerText;
    var postRating = document.getElementById("postRating").innerText;
    var post = {
        postHeader: postHeader,
        postDate: postDate,
        postContent: postContent,
        postRating: postRating,
        postColor: "bg-dark"
    };
    postArray.push(post);
    localStorage.setItem("postArray", JSON.stringify(postArray));
    updateTable();
}

function addPostWhite() {
    var postHeader = document.getElementById("postHeader").innerText;
    var postDate = document.getElementById("postDate").innerText;
    var postContent = document.getElementById("postContent").innerText;
    var postRating = document.getElementById("postRating").innerText;
    var post = {
        postHeader: postHeader,
        postDate: postDate,
        postContent: postContent,
        postRating: postRating,
        postColor: "bg-light"
    };
    postArray.push(post);
    localStorage.setItem("postArray", JSON.stringify(postArray));
    updateTable();
}

function deleteCell(button) {
    var index = button.closest('.tr').querySelector('.th').innerText;
    console.log(index)
    postArray.splice(index, 1);
    localStorage.setItem("postArray", JSON.stringify(postArray));
    updateTable();
}

function updateTable() {
    var tableBody = document.querySelector("#postInMain tbody");
    tableBody.innerHTML = "";

    for (var i = 0; i < postArray.length; i++) {
        var newRow = document.createElement("tr");
        newRow.classList.add("tr")

        var postNumberCell = document.createElement("th");
        postNumberCell.setAttribute("scope", "row");
        postNumberCell.classList.add("th")
        postNumberCell.innerText = i;

        var headerCell = document.createElement("td");
        headerCell.innerText = postArray[i].postHeader;

        var dateCell = document.createElement("td");
        dateCell.innerText = postArray[i].postDate;

        var deleteCell = document.createElement("td");
        deleteCell.setAttribute("width", "20%");

        var deleteButton = document.createElement("button");
        deleteButton.setAttribute("type", "button");
        deleteButton.setAttribute("class", "btn btn-primary fs-4 text-light mt-1");
        deleteButton.textContent = "Delete";
        deleteButton.setAttribute("onClick", "deleteCell(this)")

        deleteCell.appendChild(deleteButton);

        newRow.appendChild(postNumberCell);
        newRow.appendChild(headerCell);
        newRow.appendChild(dateCell);
        newRow.appendChild(deleteCell);

        tableBody.appendChild(newRow);
    }
}