// Добавляем видео
const videogallery = [
  {
    src: "https://v3.cdnpk.net/videvo_files/video/free/2014-12/large_preview/Raindrops_Videvo.mp4",
    title: "Raindrops in Super Slow Motion",
  },
  {
    src: "https://v3.cdnpk.net/videvo_files/video/free/2015-03/large_preview/fire_background_loop2_videvo2.mp4",
    title: "Fire Background Loop",
  },
  {
    src: "https://v3.cdnpk.net/videvo_files/video/free/2019-02/large_preview/190111_05_Construction_Drone_02.mp4",
    title: "Flying Over Construction Site",
  },
  {
    src: "https://v3.cdnpk.net/videvo_files/video/free/2015-08/large_preview/FireworksSlowMotion.mp4",
    title: "Fireworks in Super Slow Motion",
  },
];

// добавляем фото
const photogallery = [
  {
    src: "https://images.unsplash.com/photo-1547643835-04cd59c17da4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Автомобиль на берегу моря",
  },
  {
    src: "https://images.unsplash.com/photo-1685367024091-12959d6430ef?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Лодка на пляже",
  },
  {
    src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Дорога через пустыню",
  },
  {
    src: "https://images.unsplash.com/photo-1496950866446-3253e1470e8e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Набор путешественника",
  },
  {
    src: "https://images.unsplash.com/photo-1483247416020-58799b6de4c1?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Глобус на подоконнике",
  },

  
];

let list = [];
let column = [];

// находим стрелки вперед и назад
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const film = document.querySelectorAll(".film");

// указываем какой из массивов загрузить в зависимости от локации
if (window.location.href.includes("/photogallery.html")) {
  list = photogallery;
} else if (window.location.href.includes("/videogallery.html")) {
  list = videogallery;
}

const row = document.querySelector(".row");
const title = document.querySelector(".caption");
const number = document.querySelector(".numbertext");
const caption = document.querySelector("#caption");
const titleVideo = document.querySelector(".video");
const titleImg = document.querySelector(".image");

// создаем карточки из массива
const arr = list.map((i) => {
  const url = encodeURI(i.src);
  const alt = i.title.replace(/\s+/g, "_");
  if (column.length < list.length) {
    const div = document.createElement("div");
    div.className = "column";
    if (window.location.href.includes("/photogallery.html")) {
      div.innerHTML = `<img class='image' src=${url} alt=${alt}'></img><h2 class='caption'>${i.title}</h2>`;
    } else if (window.location.href.includes("/videogallery.html")) {
      div.innerHTML = `<video class='film' type="video/mp4" src=${url} poster='https://plus.unsplash.com/premium_photo-1710409625244-e9ed7e98f67b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></video><h2 class='caption'>${i.title}</h2>`;
    }

    row.append(div);
  }
});

const columnList = document.querySelectorAll(".column");
