let wind = document.querySelector('.window');
let cont = document.querySelector('.container');

const list = [
    './img/cat1.gif',
    './img/cat2.gif',
    './img/cat3.gif',
    './img/cat4.gif',
    './img/cat5.gif',
    './img/cat6.gif',
    './img/cat7.gif'
];

let img =[];

// формування контейнера
const render = () => {
    let contHTML = "";
    for (let i=0; i<list.length; i++) {
        contHTML += `
            <div class="item">                
                    <img src="${list[i]}" alt="cat" height="150" id="img${i}">                
            </div>
            `;
    }
    cont.innerHTML = contHTML;
 
    for (let i=0; i<list.length; i++) {
        img[i] = document.querySelector(`#img${i}`);
        img[i].addEventListener('click', changeImage);
    }    

};

const changeImage = (ev) => {
   let n = Number(ev.target.id.slice(3));
   let windHTML = `<img src="${list[n]}" alt="cat" height="650">`;
   wind.innerHTML = windHTML;
};

render();

/*
let inp = document.querySelector('.inp');
let btn_add = document.querySelector('.btn_add');
let btn_clear = document.querySelector('.btn_clear');
let div_select = document.querySelector('.div_select');
let cont = document.querySelector('.container');

const professionList = [
    {profession: "Вчитель", picture: "./img/teacher.jpg"},
    {profession: "Лікар", picture: "./img/doctor.jpg"},
    {profession: "Будівельник", picture: "./img/worker.jpg"},
    {profession: "Інженер", picture: "./img/ingener.jpg"},
    {profession: "Програміст", picture: "./img/programmer.jpg"},
    {profession: "Кухар", picture: "./img/cooker.jpg"},
    {profession: "Військовий", picture: "./img/soldat.jpg"},
    {profession: "Безробітний", picture: "./img/unemployed.jpg"}
];

let users = [];
let btn = [];

// Пошук користувача в масиві
const findUser = (item) => {
    for (let i=0; i<users.length; i++) {
        if (item === users[i].name) return true;
    }
    return false;
}

// формування контейнера
const render = () => {
    let contHTML = "";
    for (let i=0; i<users.length; i++) {
        contHTML += `
            <div class="item">
                <div class="number">
                    ${(i+1)}
                </div>
                <div class="name">
                    ${users[i].name}
                </div>
                <div class="profession">
                    ${users[i].profession}
                </div>
                <div class="picture">
                    <img src="${users[i].picture}" alt="prof" height="100">
                </div>
                <div class="div_btn">
                    <button class="btn_item" ><img src="./img/basket.png" width="60" id="btn${i}"></button> 
                </div>
            </div>
            `;
    }
    cont.innerHTML = contHTML;
    for (let i=0; i<users.length; i++) {
        btn[i] = document.querySelector(`#btn${i}`);
        btn[i].addEventListener('click', removeItem);
    }    
};

// Видалення елемента
const removeItem = (ev) => {
    let n = Number(ev.target.id.slice(3));
    users.splice(n,1);
    render();
};

// Формування select
let selectHTML = `<select name="select" class="select">`;
for (let i=0; i<professionList.length; i++) {
    selectHTML += `<option value="item${i}">${professionList[i].profession}</option>`;
}   
selectHTML += `</select>`;
div_select.innerHTML = selectHTML;
let select = document.querySelector('.select');

// Додавання користувача
btn_add.addEventListener('click', () => {
    let userName = inp.value;
    if (!userName) return;
    if (findUser(userName)) {
        alert("Такий користувач вже існує !");
        return;
    }
    let selectNumber = Number(select.value.slice(4));
    let profession = professionList[selectNumber].profession;
    let picture = professionList[selectNumber].picture;
    users.push({name: userName, profession: profession, picture: picture});
    inp.value = "";
    render();   
});

// повна очистка списка і контейнера
btn_clear.addEventListener('click', () => {
    users = [];
    btn = [];
    cont.innerHTML = "";
});
*/