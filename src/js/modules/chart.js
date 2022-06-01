const elements = document.querySelectorAll(".chart .bar")
console.log(elements)
let options = {
    startAngle: -1.55,
    size: 150,
    value: 0.9,
    fill: { color: "#e87e04" },
}
$(".chart .bar")
    .circleProgress(options)
    .on("circle-animation-progress", function (event, progress, stepValue) {
        $(this)
            .parent()
            .find("span")
            .text(String(stepValue.toFixed(2).substr(2)) + "%")
    })

$(".css .bar").circleProgress({
    value: 0.85,
})
$(".js .bar").circleProgress({
    value: 0.8,
})
$(".react .bar").circleProgress({
    value: 0.7,
})
$(".next .bar").circleProgress({
    value: 0.5,
})
$(".native .bar").circleProgress({
    value: 0.4,
})
$(".ts .bar").circleProgress({
    value: 0.5,
})
