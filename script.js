console.log('hi i am JS');
const LOGIN = document.querySelector(".login");
const PASSWORD = document.querySelector(".pass");
const GO = document.querySelector(".go");

GO.addEventListener('click', () => {
    let login = LOGIN.value;
    let password = PASSWORD.value;
    if(login == "shin&klem" & password == "123"){
        alert("good!");
    }else{
        alert("no");
    }
});