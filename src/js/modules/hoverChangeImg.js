// import ibg from '../basic/ibg';
import isMobile from "../basic/checkMobile.js"

const hoverImg = (hoverSelector) => {
    if (!isMobile.any()) {
        const hoverSelectors = document.querySelectorAll(hoverSelector)

        for (let item of hoverSelectors) {
            const hover = item.querySelector(".portfolio__img.hovering")
            const unhover = item.querySelector(".portfolio__img.unhovering")
            item.addEventListener("mouseenter", () => {
                changeImg(hover, unhover)
            })
            item.addEventListener("mouseleave", () => {
                unchangeImg(hover, unhover)
            })
        }
        function changeImg(hover, unhover) {
            hover.classList.add("active")
            unhover.classList.add("active")
        }
        function unchangeImg(hover, unhover) {
            hover.classList.remove("active")
            unhover.classList.remove("active")
        }
    }
}

export default hoverImg
