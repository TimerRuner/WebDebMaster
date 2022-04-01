const slowmotion = (link) => {
    const links = document.querySelectorAll(link)

    for (let anchor of links) {
        anchor.addEventListener("click", (e) => {
            e.preventDefault()
            const blockID = anchor.getAttribute("href").substr(1)

            document.getElementById(blockID).scrollIntoView({
                behavior: "smooth",
                block: "start",
            })
        })
    }
}

export default slowmotion
