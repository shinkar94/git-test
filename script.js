console.log('hi i am JS');
const LOGIN = document.querySelector(".login");
const PASSWORD = document.querySelector(".pass");
const GO = document.querySelector(".go");
const DIVPASSWORD = document.querySelector(".password");
const PODPAS = document.querySelector(".podpas");
const ONEH = document.querySelector(".oneH");
const LBL = document.querySelector(".lbl");
const WRAPPER = document.querySelector(".wrapper");
const HED = document.querySelector(".hed");

GO.addEventListener('click', () => {
    let login = LOGIN.value;
    let password = PASSWORD.value;
    if(login == "shin&klem" & password == "123"){
        DIVPASSWORD.style.animation = `goodCheck 1s linear 0s forwards, 
        chekDvig 1s linear 1s forwards`;
        PODPAS.style.display = "none";
        ONEH.style.animation = "notHel 1s linear 0s forwards";
        LBL.style.animation = "LBLcenter 0.1s linear 2s forwards";
        WRAPPER.style.backgroundImage =  "linear-gradient(45deg, black 0%, black 100%)";
        HED.style.animation = "hedVisabiliti 1s linear 1.5s forwards";
    }else{
        DIVPASSWORD.style.animation = "notCheck 0.5s linear 0s forwards";
    }
});