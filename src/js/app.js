import "./basic/ibg.js"
import "./basic/anim-scroll.js"
import navPosition from "./modules/fix-navigation.js"
import burger from "./modules/burger.js"
import "./modules/isotope.js"

import isMobile from "./modules/isMobile.js"
import popup from "./modules/popup-portfolio.js"
import hoverImg from "./modules/hoverChangeImg.js"
import { circleText } from "./modules/circle-text.js"
import "./modules/chart.js"
import slowmotion from "./modules/slowAnchorMove.js"
import "./modules/anim-scroll.js"
import "./modules/fixLinkModal.js"
import "./modules/anim-scroll.js"

window.addEventListener("DOMContentLoaded", function () {
    const $mainscreen = document.querySelector(".main")

    setTimeout(() => {
        $mainscreen.classList.add("_loaded")
    }, 500)

    navPosition()
    burger(".menu__burger", ".menu__body", ".menu__item a")
    isMobile(".portfolio__item")
    popup(
        ".portfolio__item",
        ".modal-portfolio",
        ".overlay",
        ".modal-portfolio__close"
    )
    hoverImg(".portfolio__item")
    circleText(".circle__text p")
    slowmotion("[href^='#']")
})
