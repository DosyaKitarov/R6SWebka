window.onload = function() {
    var isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
        // Пользователь вошел, скрываем форму
        var loginForm = document.querySelector(".login-form");
        var registrationForm = document.querySelector(".registration-form");
        var toggleButton = document.getElementById("toggleButton");
        var accountInfo = document.getElementById("accountInfo");
        var userInformation = JSON.parse(localStorage.getItem("account"));

        loginForm.style.display = "none";
        registrationForm.style.display = "none";
        toggleButton.style.display = "none";
        accountInfo.style.display = "block";

        document.getElementById("nicknameField").innerText = "Nickname: " + userInformation.nickname;
        document.getElementById("firstNameField").innerText = "First name: " + userInformation.firstName;
        document.getElementById("lastNameField").innerText = "Last name: " + userInformation.lastName;
        document.getElementById("birthdateField").innerText = "Date of Birth: " + userInformation.birthdate;
        document.getElementById("emailField").innerText = "Email: " + userInformation.email;
    }
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
        password: password
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

    if (accountJSON) {
        // Разбираем JSON для проверки данных
        var account = JSON.parse(accountJSON);

        // Проверка введенных данных с данными аккаунта
        if (loginEmail === account.email && loginPassword === account.password) {
            alert("Вход выполнен успешно!");
            localStorage.setItem("isLoggedIn", "true");
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