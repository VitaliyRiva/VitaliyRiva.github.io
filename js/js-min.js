var navMain=document.querySelector(".main-nav"),navToggle=document.querySelector(".main-nav__toggle"),menuOverlay=document.querySelector(".menu-overlay");navToggle.addEventListener("click",function(){navMain.classList.contains("main-nav--closed")?(navMain.classList.toggle("main-nav--opened"),navMain.classList.remove("main-nav--closed")):(navMain.classList.toggle("main-nav--closed"),navMain.classList.remove("main-nav--opened")),menuOverlay.classList.contains("menu-overlay--closed")?menuOverlay.classList.toggle("menu-overlay--opened"):(menuOverlay.classList.toggle("menu-overlay--closed"),menuOverlay.classList.remove("menu-overlay--opened"))});