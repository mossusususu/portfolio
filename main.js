const boxes = document.querySelectorAll('.box');

// Intersection Observerの設定
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // 要素が表示されたら 'show' クラスを追加
      entry.target.classList.add('show');
      observer.unobserve(entry.target); // 一度表示されたら監視を終了
    }
  });
});

// すべてのbox要素に対してオブザーバーを適用
boxes.forEach(box => {
  observer.observe(box);
});

document.addEventListener("DOMContentLoaded", function () {
  const target = document.querySelector("h1");
  const squares = document.querySelector(".square-animation");

  window.addEventListener("scroll", function () {
      const rect = target.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          squares.classList.add("animate");
      } else {
          squares.classList.remove("animate");
      }
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menuicon");
  const linkMenu = document.querySelector(".link");

  menuIcon.addEventListener("click", function () {
    menuIcon.classList.toggle("rotate");
    linkMenu.classList.toggle("open");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menuicon");
  const linkMenu = document.querySelector(".linksp");

  menuIcon.addEventListener("click", function () {
    linkMenu.classList.toggle("open");  // メニューの開閉を切り替え
  });
});
