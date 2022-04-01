const setData = (modal, { title, categories, view, code, src, by }) => {
    modal.querySelector(".modal-portfolio__title span").textContent = title
    modal.querySelector(".modal-portfolio__categories span").textContent =
        categories
    modal
        .querySelector(".modal-portfolio__view")
        .setAttribute("href", `${view}`)
    console.log(code)
    if (code) {
        modal.querySelector(".modal-portfolio__code").classList.remove("_hide")
        modal.querySelector(".modal-portfolio__code").href = code
    } else {
        modal.querySelector(".modal-portfolio__code").classList.add("_hide")
        modal.querySelector(".modal-portfolio__code").href = "#"
    }
    if (by) {
        modal.querySelector(".modal-portfolio__by").classList.remove("_hide")
        modal.querySelector(".modal-portfolio__by").innerHTML = by
    } else {
        modal.querySelector(".modal-portfolio__by").classList.add("_hide")
        modal.querySelector(".modal-portfolio__by").innerHTML = ""
    }
    modal.querySelector(".modal-portfolio__bg").setAttribute("src", `${src}`)
}

export default setData
