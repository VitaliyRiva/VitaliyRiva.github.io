  // Работа с модальным окном при клике у товара на "Купить"
  var catalogbuyCatalogVideo = document.querySelectorAll(".production-process__order");
  var catalogbuyCatalog = document.querySelectorAll(".catalog-product__order");
  var catalogbuy = document.querySelectorAll(".top-product__order");
  var catalogbuypopup = document.querySelector(".modal-basket");
  var catalogbuyclose = catalogbuypopup.querySelector(".modal-content-close");
  var catalogbuychekout = catalogbuypopup.querySelector(".modal-basket__button-add");

  // Цикличность действия вызова окна у товара на "Купить"
  for (var i = 0; i < catalogbuy.length; i++) {
    catalogbuy[i].addEventListener("click", function(event) {
      event.preventDefault();
      catalogbuypopup.classList.add("modal-basket--show");
    });
  }
  for (var i = 0; i < catalogbuyCatalog.length; i++) {
    catalogbuyCatalog[i].addEventListener("click", function(event) {
      event.preventDefault();
      catalogbuypopup.classList.add("modal-basket--show");
    });
  }
  for (var i = 0; i < catalogbuyCatalogVideo.length; i++) {
    catalogbuyCatalogVideo[i].addEventListener("click", function(event) {
      event.preventDefault();
      catalogbuypopup.classList.add("modal-basket--show");
    });
  }
  // Закрытие модального окна на кнопку "Оформить заказ"
  catalogbuychekout.addEventListener("click", function(event) {
    event.preventDefault();
    catalogbuypopup.classList.remove("modal-basket--show");
  });
    // Закрытие модального окна на кнопку "Крестик"
  catalogbuyclose.addEventListener("click", function(event) {
    event.preventDefault();
    catalogbuypopup.classList.remove("modal-basket--show");
  });
    // Закрытие на клавишу "ESC"
  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (catalogbuypopup.classList.contains("modal-basket--show")) {
        catalogbuypopup.classList.remove("modal-basket--show");
      }
    }
  });
