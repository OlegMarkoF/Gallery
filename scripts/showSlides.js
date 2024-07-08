let slideIndex = 1;

showSlides(slideIndex);


function showSlides(n) {
  if (n > columnList.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = columnList.length;
  }

  columnList[slideIndex - 1].className += " active";
  const active = document.querySelector(".active");
  const activeVideo = active.querySelector("video");
  const activeTitle = active.querySelector(".caption");
  const activeImg = active.querySelector("img");
  if (window.location.href.includes("/photogallery.html")) {
    titleImg.src = activeImg.src;
  } else if (window.location.href.includes("/videogallery.html")) {
    titleVideo.src = activeVideo.src;
  }
  caption.textContent = activeTitle.textContent;

  number.innerHTML = slideIndex + " / " + columnList.length;
}

// переключение между видео при клике на карточку + логика переключения порядкового номера
function addActive() {
  columnList.forEach((item) => {
    item.addEventListener("click", () => {
      columnList.forEach((el) => {
        el.classList.remove("active");
      });
      item.classList.add("active");

      const active = document.querySelector(".active");
      const activeVideo = active.querySelector("video");
      const activeTitle = active.querySelector(".caption");
      const activeImg = active.querySelector("img");
      if (window.location.href.includes("/photogallery.html")) {
        titleImg.src = activeImg.src;
      } else if (window.location.href.includes("/videogallery.html")) {
        titleVideo.src = activeVideo.src;
      }
      caption.textContent = activeTitle.textContent;

      for (let i = 0; i < columnList.length; i++) {
        const activeCard = columnList[i].classList.contains("active");
        if (activeCard === true) {
          slideIndex = Array.from(columnList).indexOf(columnList[i]);
          number.innerHTML = slideIndex + 1 + " / " + columnList.length;
        }
      }
    });
  });

// логика работы кнопки Prev
  prev.addEventListener("click", () => {
    if (slideIndex > 1) {
      const active = document.querySelector(".active");
      const activeVideo = active.previousElementSibling.querySelector("video");
      const activeTitle =
        active.previousElementSibling.querySelector(".caption");
      const activeImg = active.previousElementSibling.querySelector("img");
      if (window.location.href.includes("/photogallery.html")) {
        titleImg.src = activeImg.src;
      } else if (window.location.href.includes("/videogallery.html")) {
        titleVideo.src = activeVideo.src;
      }
      caption.textContent = activeTitle.textContent;
    }
    columnList.forEach((el) => {
      const activeCard = el.classList.contains("active");
      if (activeCard === true) {
        slideIndex = Array.from(columnList).indexOf(el);

        if (slideIndex < 1) {
          slideIndex = columnList.length;
          number.innerHTML = slideIndex + " / " + columnList.length;
          row.lastElementChild.classList.add("active");
          const activeVideo = row.lastElementChild.querySelector("video");
          const activeTitle = row.lastElementChild.querySelector(".caption");
          const activeImg = row.lastElementChild.querySelector("img");
          if (window.location.href.includes("/photogallery.html")) {
            titleImg.src = activeImg.src;
          } else if (window.location.href.includes("/videogallery.html")) {
            titleVideo.src = activeVideo.src;
          }
          caption.textContent = activeTitle.textContent;
        }
        el.classList.remove("active");
        el.previousElementSibling.classList.add("active");
        number.innerHTML = slideIndex + " / " + columnList.length;
      }
    });
  });

// логика работы кнопки Next
  next.addEventListener("click", () => {
    if (slideIndex >= 0) {
      const active = document.querySelector(".active");
      active.classList.remove("active");
      const nextElement = active.nextElementSibling;
      slideIndex = Array.from(columnList).indexOf(nextElement);
      if (slideIndex < 0) {
        number.innerHTML = slideIndex + " / " + columnList.length;
        const firstElement = row.firstElementChild;
        slideIndex = Array.from(columnList).indexOf(firstElement);
        number.innerHTML = slideIndex + 1 + " / " + columnList.length;
        firstElement.classList.add("active");
        const activeVideo = firstElement.querySelector("video");
        const activeTitle = firstElement.querySelector(".caption");
        const activeImg = firstElement.querySelector("img");
        if (window.location.href.includes("/photogallery.html")) {
          titleImg.src = activeImg.src;
        } else if (window.location.href.includes("/videogallery.html")) {
          titleVideo.src = activeVideo.src;
        }
        caption.textContent = activeTitle.textContent;
      }
      nextElement.classList.add("active");
      const activeVideo = nextElement.querySelector("video");
      const activeTitle = nextElement.querySelector(".caption");
      const activeImg = nextElement.querySelector("img");
      if (window.location.href.includes("/photogallery.html")) {
        titleImg.src = activeImg.src;
      } else if (window.location.href.includes("/videogallery.html")) {
        titleVideo.src = activeVideo.src;
      }
      caption.textContent = activeTitle.textContent;
      number.innerHTML = slideIndex + 1 + " / " + columnList.length;
    }
  });
}

addActive();
