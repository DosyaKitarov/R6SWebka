var KitareCBT = JSON.parse(localStorage.getItem("KitareCBT"))
if (KitareCBT == null) {
    KitareCBT = {
        nickname: "Kitare.CBT",
        firstName: "Dossymzhan",
        lastName: "Zhailau",
        birthdate: "03-05-2004",
        email: "Leron.ru2004@gmail.com",
        password: "Kitare2004",
        pfp: "imges/KitarePFP.png",
        favAttackName: "Blitz",
        favAttack: "../operators/imges/attack/" + "blitz.png",
        favDefenseName: "Kapkan",
        favDefense: "../operators/imges/defense/" + "kapkan.png",
        rank: "imges/platinum5.png",
        rankName: "Platinum 5"
    };
    localStorage.setItem("KitareCBT", JSON.stringify(KitareCBT))
    var KitareCBT = localStorage.getItem("KitareCBT")
}
var usersArray = JSON.parse(localStorage.getItem("usersArray")) || []
var MelchiorCBT = JSON.parse(localStorage.getItem("MelchiorCBT"))
if (MelchiorCBT == null) {
    MelchiorCBT = {
        nickname: "Melch1or.CBT",
        firstName: "Islam",
        lastName: "Sharan",
        birthdate: "04-11-2005",
        email: "mcmatrix88@gmail.com",
        password: "Isko228",
        pfp: "imges/MelchiorPFP.png",
        favAttackName: "Ace",
        favAttack: "../operators/imges/attack/" + "ace.png",
        favDefenseName: "Alibi",
        favDefense: "../operators/imges/defense/" + "alibi.png",
        rank: "imges/bronze4.png",
        rankName: "Bronze 4"
    };
    localStorage.setItem("MelchiorCBT", JSON.stringify(MelchiorCBT))
    var MelchiorCBT = localStorage.getItem("MelchiorCBT")
}

window.onload = function() {
    var isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
        var currentLogin = localStorage.getItem("currentLogin")
        if (currentLogin == KitareCBT.nickname) {
            var userInformation = JSON.parse(localStorage.getItem("KitareCBT"));
            usersLogin(userInformation);
        } else if (currentLogin == MelchiorCBT.nickname) {
            var userInformation = JSON.parse(localStorage.getItem("MelchiorCBT"));
            usersLogin(userInformation);
        } else if (currentLogin == "admin") {
            adminLogin()
        } else {
            for (var i = 0; i < usersArray.length; i++) {
                if (currentLogin == usersArray[i].nickname) {
                    var userInformation = usersArray[i];
                    usersLogin(userInformation);
                }
            }
        }
    } else {
        document.getElementById("reg").style.display = "block";
    }
}


function adminLogin() {
    var reg = document.getElementById("reg");
    var toggleButton = document.getElementById("toggleButton");
    var accountInfo = document.getElementById("accountInfo");
    var adminPanel = document.getElementById("adminPanel");
    var tableBody = document.querySelector("#usersPanel tbody");
    tableBody.innerHTML = "";

    reg.style.display = "none";
    toggleButton.style.display = "none";
    accountInfo.style.display = "none";
    adminPanel.style.display = "block";

    createUs(KitareCBT)
    createUs(MelchiorCBT)
    for (var i = 0; i < usersArray.length; i++) {
        var newRow = document.createElement("tr");
        newRow.classList.add("tr")

        var NumberCell = document.createElement("th");
        NumberCell.setAttribute("scope", "row");
        NumberCell.classList.add("th")
        NumberCell.innerText = i + 3;

        var nickname = document.createElement("td");
        nickname.innerText = usersArray[i].nickname;
        nickname.id = "nickname" + NumberCell;
        nickname.contentEditable = true;

        var firstName = document.createElement("td");
        firstName.innerText = usersArray[i].firstName;
        firstName.id = "firstName" + NumberCell;
        firstName.contentEditable = true;

        var lastName = document.createElement("td");
        lastName.innerText = usersArray[i].lastName;
        lastName.id = "lastName" + NumberCell;
        lastName.contentEditable = true;

        var birthdate = document.createElement("td");
        birthdate.innerText = usersArray[i].birthdate;
        birthdate.id = "birthdate" + NumberCell;
        birthdate.contentEditable = true;

        var email = document.createElement("td");
        email.innerText = usersArray[i].email;
        email.id = "email" + NumberCell;
        email.contentEditable = true;

        var password = document.createElement("td");
        password.innerText = usersArray[i].password;
        password.id = "password" + NumberCell;
        password.contentEditable = true;

        var favAttackName = document.createElement("td");
        favAttackName.innerText = usersArray[i].favAttackName;
        favAttackName.id = "favAttackName" + NumberCell;
        favAttackName.contentEditable = true;

        var favDefenseName = document.createElement("td");
        favDefenseName.innerText = usersArray[i].favDefenseName;
        favDefenseName.id = "favDefenseName" + NumberCell;
        favDefenseName.contentEditable = true;

        var deleteBox = document.createElement("td");
        deleteBox.setAttribute("width", "20%");

        var deleteButton = document.createElement("button");
        deleteButton.setAttribute("type", "button");
        deleteButton.setAttribute("class", "btn btn-primary fs-4 text-light mt-1");
        deleteButton.textContent = "Delete";
        deleteButton.setAttribute("onClick", "deleteAcc(this)")

        deleteBox.appendChild(deleteButton);
        newRow.appendChild(NumberCell);
        newRow.appendChild(nickname);
        newRow.appendChild(firstName);
        newRow.appendChild(lastName);
        newRow.appendChild(birthdate);
        newRow.appendChild(email);
        newRow.appendChild(password);
        newRow.appendChild(favAttackName);
        newRow.appendChild(favDefenseName);
        newRow.appendChild(deleteBox);

        tableBody.appendChild(newRow);
    }

}

function createUs(user) {
    var tableBody = document.querySelector("#usersPanel tbody");
    var newRow = document.createElement("tr");
    newRow.classList.add("tr")

    var NumberCell = document.createElement("th");
    NumberCell.setAttribute("scope", "row");
    NumberCell.classList.add("th")
    if (user == KitareCBT) {
        NumberCell.innerText = 1;
    } else {
        NumberCell.innerText = 2;
    }


    var nickname = document.createElement("td");
    nickname.innerText = user.nickname;
    nickname.id = "nickname" + NumberCell;
    nickname.contentEditable = true;

    var firstName = document.createElement("td");
    firstName.innerText = user.firstName;
    firstName.id = "firstName" + NumberCell;
    firstName.contentEditable = true;

    var lastName = document.createElement("td");
    lastName.innerText = user.lastName;
    lastName.id = "lastName" + NumberCell;
    lastName.contentEditable = true;

    var birthdate = document.createElement("td");
    birthdate.innerText = user.birthdate;
    birthdate.id = "birthdate" + NumberCell;
    birthdate.contentEditable = true;

    var email = document.createElement("td");
    email.innerText = user.email;
    email.id = "email" + NumberCell;
    email.contentEditable = true;

    var password = document.createElement("td");
    password.innerText = user.password;
    password.id = "password" + NumberCell;
    password.contentEditable = true;

    var favAttackName = document.createElement("td");
    favAttackName.innerText = user.favAttackName;
    favAttackName.id = "favAttackName" + NumberCell;
    favAttackName.contentEditable = true;

    var favDefenseName = document.createElement("td");
    favDefenseName.innerText = user.favDefenseName;
    favDefenseName.id = "favDefenseName" + NumberCell;
    favDefenseName.contentEditable = true;

    newRow.appendChild(NumberCell);
    newRow.appendChild(nickname);
    newRow.appendChild(firstName);
    newRow.appendChild(lastName);
    newRow.appendChild(birthdate);
    newRow.appendChild(email);
    newRow.appendChild(password);
    newRow.appendChild(favAttackName);
    newRow.appendChild(favDefenseName);
    tableBody.appendChild(newRow);
}

function usersLogin(userInformation) {
    var reg = document.getElementById("reg");
    var toggleButton = document.getElementById("toggleButton");
    var accountInfo = document.getElementById("accountInfo");

    reg.style.display = "none";
    toggleButton.style.display = "none";
    accountInfo.style.display = "block";

    document.getElementById("nicknameField").innerText = "Nickname: " + userInformation.nickname;
    document.getElementById("firstNameField").innerText = "First name: " + userInformation.firstName;
    document.getElementById("lastNameField").innerText = "Last name: " + userInformation.lastName;
    document.getElementById("birthdateField").innerText = "Date of Birth: " + userInformation.birthdate;
    document.getElementById("emailField").innerText = "Email: " + userInformation.email;
    document.getElementById("pfp").src = userInformation.pfp;
    document.getElementById("favAttack").src = userInformation.favAttack;
    document.getElementById("favDefense").src = userInformation.favDefense;
    document.getElementById("rank").src = userInformation.rank;
    document.getElementById("rankName").innerText = userInformation.rankName;
}

function toggleForm() {
    var loginForm = document.querySelector(".login-form");
    var registrationForm = document.querySelector(".registration-form");
    var toggleButton = document.getElementById("toggleButton")

    if (registrationForm.style.display == "none") {
        loginForm.style.display = "none";
        registrationForm.style.display = "block";
        toggleButton.innerText = "Already have an account?";
    } else {
        loginForm.style.display = "block";
        registrationForm.style.display = "none";
        toggleButton.innerText = "Don't have an account?";
    }
}

function save() {
    KitareCBT.nickname = document.getElementById("nickName1").textContent;
    KitareCBT.firstName = document.getElementById("firstName1").textContent;
    KitareCBT.lastName = document.getElementById("lastName1").textContent;
    KitareCBT.birthdate = document.getElementById("birthdate1").textContent;
    KitareCBT.email = document.getElementById("email1").textContent;
    KitareCBT.password = document.getElementById("password1").textContent;
    KitareCBT.favAttackName = document.getElementById("favAttack1").textContent;
    KitareCBT.favDefenseName = document.getElementById("favDefense1").textContent;
    KitareCBT.favAttack = "../operators/imges/attack/" + document.getElementById("favAttack1").textContent.toLowerCase() + ".png";
    KitareCBT.favDefense = "../operators/imges/defense/" + document.getElementById("favDefense1").textContent.toLowerCase() + ".png";


    MelchiorCBT.nickname = document.getElementById("nickName2").textContent;
    MelchiorCBT.firstName = document.getElementById("firstName2").textContent;
    MelchiorCBT.lastName = document.getElementById("lastName2").textContent;
    MelchiorCBT.birthdate = document.getElementById("birthdate2").textContent;
    MelchiorCBT.email = document.getElementById("email2").textContent;
    MelchiorCBT.password = document.getElementById("password2").textContent;
    MelchiorCBT.favAttackName = document.getElementById("favAttack2").textContent;
    MelchiorCBT.favDefenseName = document.getElementById("favDefense2").textContent;
    MelchiorCBT.favAttack = "../operators/imges/attack/" + document.getElementById("favAttack2").textContent.toLowerCase() + ".png";
    MelchiorCBT.favDefense = "../operators/imges/defense/" + document.getElementById("favDefense2").textContent.toLowerCase() + ".png";

    for (var i = 0; i < usersArray.length; i++) {
        var user = {
            nickname: document.getElementById("nickName" + NumberCell).textContent,
            firstName: document.getElementById("firstName" + NumberCell).textContent,
            lastName: document.getElementById("lastName" + NumberCell).textContent,
            birthdate: document.getElementById("birthdate" + NumberCell).textContent,
            email: document.getElementById("email" + NumberCell).textContent,
            password: document.getElementById("password" + NumberCell).textContent,
            favAttackName: document.getElementById("favAttack" + NumberCell).textContent,
            favDefenseName: document.getElementById("favDefense" + NumberCell).textContent,
            favAttack: "../operators/imges/attack/" + document.getElementById("favAttack" + NumberCell).textContent.toLowerCase() + ".png",
            favDefense: "../operators/imges/defense/" + document.getElementById("favDefense" + NumberCell).textContent.toLowerCase() + ".png"
        };
        usersArray[i] = user
    }

    var accountJSON = JSON.stringify(usersArray);
    localStorage.setItem("usersArray", accountJSON);
    localStorage.setItem("KitareCBT", JSON.stringify(KitareCBT));
    localStorage.setItem("MelchiorCBT", JSON.stringify(MelchiorCBT));

    alert("Data saved!");
}


function deleteAcc(button) {
    var index = button.closest('.tr').querySelector('.th').innerText;
    usersArray.splice(index - 3, 1);
    localStorage.setItem("usersArray", JSON.stringify(usersArray));
    adminLogin()
}

function registerAccount() {
    var nickname = document.getElementById("nickname").value;
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var birthdate = document.getElementById("birthdate").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;


    if (!nickname || !firstName || !lastName || !birthdate || !email || !password) {
        alert("Please fill in all required fields.");
        return;
    }
    var favOp = "Recruit";
    var account = {
        nickname: nickname,
        firstName: firstName,
        lastName: lastName,
        birthdate: birthdate,
        email: email,
        password: password,
        pfp: "imges/nopfp.webp",
        favAttackName: favOp,
        favAttack: "imges/" + favOp.toLowerCase() + ".png",
        favDefenseName: favOp,
        favDefense: "imges/" + favOp.toLowerCase() + ".png",
        rank: "imges/noRank.png",
        rankName: "UNRANKED"
    };

    usersArray.push(account)
    alert("Success");
    var usersJSON = JSON.stringify(usersArray);
    localStorage.setItem("usersArray", usersJSON);

    toggleForm();
}



function login() {
    var loginEmail = document.getElementById("exampleInputEmail1").value;
    var loginPassword = document.getElementById("loginPassword").value;

    var KitareCBT = JSON.parse(localStorage.getItem("KitareCBT"));
    var MelchiorCBT = JSON.parse(localStorage.getItem("MelchiorCBT"));


    if (loginEmail.toLowerCase() === KitareCBT.email.toLowerCase() && loginPassword === KitareCBT.password) {
        alert("Succeed!");
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("currentLogin", KitareCBT.nickname)
    } else if (loginEmail.toLowerCase() === MelchiorCBT.email.toLowerCase() && loginPassword === MelchiorCBT.password) {
        alert("Succeed!");
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("currentLogin", MelchiorCBT.nickname)
    } else if (loginEmail.toLowerCase() === "admin@admin.com" && loginPassword === "root") {
        alert("Succeed!");
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("currentLogin", "admin")
    } else {
        for (var i = 0; i < usersArray.length; i++) {
            if (loginEmail === usersArray[i].email.toLowerCase() && loginPassword === usersArray[i].password) {
                alert("Succeed!");
                localStorage.setItem("isLoggedIn", "true");
                localStorage.setItem("currentLogin", usersArray[i].nickname)
                location.reload()
            }
        }
        alert("Ошибка входа. Пожалуйста, проверьте введенные данные.");
    }

}

function logout() {
    localStorage.setItem("isLoggedIn", "false")
    location.reload();
}