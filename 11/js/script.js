let navMenu=document.querySelector(".menu__popover"),navToggle=document.querySelector(".menu__toggle");navMenu.classList.remove("menu__popover--nojs"),navToggle.addEventListener("click",(function(){navMenu.classList.contains("menu__popover--closed")?(navMenu.classList.remove("menu__popover--closed"),navMenu.classList.add("menu__popover--opened")):(navMenu.classList.add("menu__popover--closed"),navMenu.classList.remove("menu__popover--opened"))}));