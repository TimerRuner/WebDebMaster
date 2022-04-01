let bubu = document.querySelectorAll(".bubu")

for (let i = 0; i < bubu.length; i++) {
    bubu[i].onclick = function (e) {
        e.preventDefault() // Блокирует переход по ссылке
        this.onclick = null
    }
}
