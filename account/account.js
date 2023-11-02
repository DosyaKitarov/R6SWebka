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
        favAttack: "../operators/imges/attack/blitz.png",
        favAttackName: "Blitz",
        favDefense: "../operators/imges/defense/kapkan.png",
        favDefenseName: "Kapkan",
        rank: "imges/platinum5.png",
        rankName: "Platinum 5"
    };
    localStorage.setItem("KitareCBT", JSON.stringify(KitareCBT))
    var KitareCBT = localStorage.getItem("KitareCBT")
}
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
        favAttack: "../operators/imges/attack/ace.png",
        favAttackName: "Ace",
        favDefense: "../operators/imges/defense/alibi.png",
        favDefenseName: "Alibi",
        rank: "imges/bronze4.png",
        rankName: "Bronze 4"
    };
    localStorage.setItem("MelchiorCBT", JSON.stringify(MelchiorCBT))
    var MelchiorCBT = localStorage.getItem("MelchiorCBT")
}
window.onload = function() {
    var isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
        // Пользователь вошел, скрываем форму
        var currentLogin = localStorage.getItem("currentLogin")
        if (currentLogin == "user") {
            var userInformation = JSON.parse(localStorage.getItem("account"));
            usersLogin(userInformation);
        } else if (currentLogin == "kitare") {
            var userInformation = JSON.parse(localStorage.getItem("KitareCBT"));
            usersLogin(userInformation);
        } else if (currentLogin == "melchior") {
            var userInformation = JSON.parse(localStorage.getItem("MelchiorCBT"));
            usersLogin(userInformation);
        } else {
            adminLogin()
        }
    }
}

function adminLogin() {
    var reg = document.getElementById("reg");
    var toggleButton = document.getElementById("toggleButton");
    var accountInfo = document.getElementById("accountInfo");
    var adminPanel = document.getElementById("adminPanel");
    reg.style.display = "none";
    toggleButton.style.display = "none";
    accountInfo.style.display = "none";
    adminPanel.style.display = "block";

    var KitareCBT = JSON.parse(localStorage.getItem("KitareCBT"));
    var MelchiorCBT = JSON.parse(localStorage.getItem("MelchiorCBT"));

    document.getElementById("nickName1").textContent = KitareCBT.nickname;
    document.getElementById("firstName1").textContent = KitareCBT.firstName;
    document.getElementById("lastName1").textContent = KitareCBT.lastName;
    document.getElementById("birthdate1").textContent = KitareCBT.birthdate;
    document.getElementById("email1").textContent = KitareCBT.email;
    document.getElementById("password1").textContent = KitareCBT.password;
    document.getElementById("favAttack1").textContent = KitareCBT.favAttackName;
    document.getElementById("favDefense1").textContent = KitareCBT.favDefenseName;

    document.getElementById("nickName2").textContent = MelchiorCBT.nickname;
    document.getElementById("firstName2").textContent = MelchiorCBT.firstName;
    document.getElementById("lastName2").textContent = MelchiorCBT.lastName;
    document.getElementById("birthdate2").textContent = MelchiorCBT.birthdate;
    document.getElementById("email2").textContent = MelchiorCBT.email;
    document.getElementById("password2").textContent = MelchiorCBT.password;
    document.getElementById("favAttack2").textContent = MelchiorCBT.favAttackName;
    document.getElementById("favDefense2").textContent = MelchiorCBT.favDefenseName;

    var User = JSON.parse(localStorage.getItem("account"));

    document.getElementById("nickName3").textContent = User.nickname;
    document.getElementById("firstName3").textContent = User.firstName;
    document.getElementById("lastName3").textContent = User.lastName;
    document.getElementById("birthdate3").textContent = User.birthdate;
    document.getElementById("email3").textContent = User.email;
    document.getElementById("password3").textContent = User.password;
    document.getElementById("favAttack3").textContent = User.favAttackName;
    document.getElementById("favDefense3").textContent = User.favDefenseName;
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
    // Найдем элементы формы и кнопки
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
    // Получите данные из формы и обновите объекты KitareCBT и MelchiorCBT
    KitareCBT.nickname = document.getElementById("nickName1").textContent;
    KitareCBT.firstName = document.getElementById("firstName1").textContent;
    KitareCBT.lastName = document.getElementById("lastName1").textContent;
    KitareCBT.birthdate = document.getElementById("birthdate1").textContent;
    KitareCBT.email = document.getElementById("email1").textContent;
    KitareCBT.password = document.getElementById("password1").textContent;
    KitareCBT.favAttackName = document.getElementById("favAttack1").textContent;
    KitareCBT.favDefenseName = document.getElementById("favDefense1").textContent;

    MelchiorCBT.nickname = document.getElementById("nickName2").textContent;
    MelchiorCBT.firstName = document.getElementById("firstName2").textContent;
    MelchiorCBT.lastName = document.getElementById("lastName2").textContent;
    MelchiorCBT.birthdate = document.getElementById("birthdate2").textContent;
    MelchiorCBT.email = document.getElementById("email2").textContent;
    MelchiorCBT.password = document.getElementById("password2").textContent;
    MelchiorCBT.favAttackName = document.getElementById("favAttack2").textContent;
    MelchiorCBT.favDefenseName = document.getElementById("favDefense2").textContent;

    // Обновите объект пользователя из формы
    var user = {
        nickname: document.getElementById("nickName3").textContent,
        firstName: document.getElementById("firstName3").textContent,
        lastName: document.getElementById("lastName3").textContent,
        birthdate: document.getElementById("birthdate3").textContent,
        email: document.getElementById("email3").textContent,
        password: document.getElementById("password3").textContent,
        favAttackName: document.getElementById("favAttack3").textContent,
        favDefenseName: document.getElementById("favDefense3").textContent
    };

    // Преобразуйте объект аккаунта пользователя в JSON и сохраните его в LocalStorage
    var accountJSON = JSON.stringify(user);
    localStorage.setItem("account", accountJSON);
    localStorage.setItem("KitareCBT", JSON.stringify(KitareCBT));
    localStorage.setItem("MelchiorCBT", JSON.stringify(MelchiorCBT));

    // Сохраните обновленные данные KitareCBT и MelchiorCBT в LocalStorage, если необходимо
    // Этот код может быть добавлен здесь

    // Данные успешно сохранены
    alert("Данные успешно сохранены!");
}


function registerAccount() {
    // Собираем данные из формы регистрации
    var nickname = document.getElementById("nickname").value;
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var birthdate = document.getElementById("birthdate").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Создаем объект для аккаунта
    var account = {
        nickname: nickname,
        firstName: firstName,
        lastName: lastName,
        birthdate: birthdate,
        email: email,
        password: password,
        pfp: "imges/nopfp.webp",
        favAttack: "imges/recruit.png",
        favAttackName: "Recruit",
        favDefense: "imges/recruit.png",
        favDefenseName: "Recruit",
        rank: "imges/norank.png",
        rankName: "UNRANKED"
    };
    // Преобразуем объект аккаунта в JSON
    var accountJSON = JSON.stringify(account);

    // Сохраняем JSON в LocalStorage
    localStorage.setItem("account", accountJSON);

    // Теперь аккаунт зарегистрирован и сохранен в LocalStorage
    // Вы можете переключиться на форму входа
    toggleForm();
}

function login() {
    // Собираем данные из формы входа
    var loginEmail = document.getElementById("exampleInputEmail1").value;
    var loginPassword = document.getElementById("exampleInputPassword1").value;

    // Получаем JSON аккаунта из LocalStorage
    var accountJSON = localStorage.getItem("account");
    var KitareCBT = JSON.parse(localStorage.getItem("KitareCBT"));
    var MelchiorCBT = JSON.parse(localStorage.getItem("MelchiorCBT"));
    if (accountJSON) {
        // Разбираем JSON для проверки данных
        var account = JSON.parse(accountJSON);

        // Проверка введенных данных с данными аккаунта
        if (loginEmail === account.email && loginPassword === account.password) {
            alert("Вход выполнен успешно!");
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("currentLogin", "user");
        } else if (loginEmail === KitareCBT.email && loginPassword === KitareCBT.password) {
            alert("Вход выполнен успешно!");
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("currentLogin", "kitare")
        } else if (loginEmail === MelchiorCBT.email && loginPassword === MelchiorCBT.password) {
            alert("Вход выполнен успешно!");
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("currentLogin", "melchior")
        } else if (loginEmail === "admin@admin.com" && loginPassword === "root") {
            alert("Вход выполнен успешно!");
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("currentLogin", "admin")
        } else {
            alert("Ошибка входа. Пожалуйста, проверьте введенные данные.");
        }
    } else {
        alert("Аккаунт не найден. Пожалуйста, зарегистрируйтесь.");
    }
}

function logout() {
    localStorage.setItem("isLoggedIn", "false")
    location.reload();
}
