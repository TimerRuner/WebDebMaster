const getDataModal = (getSelector) => {
    const title = getSelector.querySelector(".hover__title").textContent,
        categories =
            getSelector.querySelector(".hover__categories").textContent,
        view = getSelector.querySelector(".hover__view").getAttribute("href"),
        src = getSelector
            .querySelector(".portfolio__img")
            .getAttribute("data-src")
    let code = null
    if (getSelector.querySelector(".hover__code")) {
        code = getSelector.querySelector(".hover__code").getAttribute("href")
    }
    let by = null
    if (getSelector.querySelector(".hover__by")) {
        by = getSelector.querySelector(".hover__by").textContent
    }
    return {
        title: title,
        categories: categories,
        view: view,
        code: code,
        src: src,
        by,
    }
}

export default getDataModal
