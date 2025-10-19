const translations = {
    ru: {
        translate1: "Тарифы",
        translate2: "Опции",
        translate3: "Номера", 
        translate4: "Душанбе"
        
    },
    en: {
        translate1: "Fares",
        translate2: "Option",
        translate3: "Numbers",
        translate4: "Dushanbe"
    }
};


function nextSlide() {
  index++;
  showSlide(index);

  // если дошли до клона — резко вернуться на первый
  if (index === total - 1 ) {
    setTimeout(() => {
      slides.style.transition = 'none';
      slides.style.transform = translateX(0);
      index = 0;
    }, 1000); // подождать, пока закончится анимация
  }
}

function changeLanguage(){
    const lang = document.getElementById("language").value;

    document.getElementById("translate1").textContent = translations[lang].translate1;
    document.getElementById("translate2").textContent = translations[lang].translate2;
    document.getElementById("translate3").textContent = translations[lang].translate3;
    document.getElementById("translate4").textContent = translations[lang].translate4; 

    localStorage.setItem("lang", lang);

}

window.onload = () => {
    const savedLang = localStorage.getItem("lang") || "ru";
    document.getElementById("language").value = savedLang;
    changeLanguage();
};

    



 const track = document.querySelector('.carousel-track');
  const cards = document.querySelectorAll('.news-card');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');

  const cardWidth = 320; // ширина карточки с margin
  let position = 0;

  // Дублируем карточки для бесконечной прокрутки
  cards.forEach(card => {
    const clone = card.cloneNode(true);
    track.appendChild(clone);
  });

  const totalCards = track.children.length;

  function moveNext() {
    position += cardWidth;
    if (position >= cardWidth * (totalCards / 2)) {
      track.style.transition = 'none';
      position = 0;
      track.style.transform = `translateX(-${position}px)`;
      // Принудительный ререндер, чтобы transition снова сработал
      void track.offsetWidth;
    }
    track.style.transition = 'transform 0.5s ease';
    track.style.transform = `translateX(-${position}px)`;
  
  }

  function movePrev() {
    if (position === 0) {
      track.style.transition = 'none';
      position = cardWidth * (totalCards / 2);
      track.style.transform = `translateX(-${position}px)`;
    
    }
    position -= cardWidth;
    track.style.transition = 'transform 0.5s ease';
    track.style.transform = `translateX(-${position}px)`;
     void track.offsetWidth;
  }

  nextBtn.addEventListener('click', moveNext);
  prevBtn.addEventListener('click', movePrev);

  // Автопрокрутка
  setInterval(moveNext, 3000);




   







  

