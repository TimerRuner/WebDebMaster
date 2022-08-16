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
    value: 0.9,
})
$(".js .bar").circleProgress({
    value: 0.85,
})
$(".react .bar").circleProgress({
    value: 0.7,
})
$(".next .bar").circleProgress({
    value: 0.6,
})
$(".native .bar").circleProgress({
    value: 0.4,
})
$(".ts .bar").circleProgress({
    value: 0.5,
})
$(".node .bar").circleProgress({
    value: 0.5,
})
$(".express .bar").circleProgress({
    value: 0.5,
})
$(".mysql .bar").circleProgress({
    value: 0.6,
})
$(".mongo .bar").circleProgress({
    value: 0.6,
})
$(".postgre .bar").circleProgress({
    value: 0.7,
})
$(".graph .bar").circleProgress({
    value: 0.45,
})
$(".webs .bar").circleProgress({
    value: 0.5,
})
