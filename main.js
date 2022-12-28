function preload() {

}
function setup() {
    canvas = createCanvas(400,400)
    canvas.position(70,250)
    video = createCapture(400,400)
    video.hide()

    tint_color=""
}
function draw() {
    image(video,0,0,400,400)
    tint(tint_color)

    fill(red, green, blue)
    stroke(red, green, blue)
    rect(0, 390, 400, 10)
    rect(390, 0, 10, 400)
    rect(0, 0, 400, 10)
    rect(0, 0, 10, 400)
}
function changefilter() {
    tint_color = document.getElementById("colore").value
    red = document.getElementById("red").value
    green = document.getElementById("green").value
    blue = document.getElementById("blue").value
}

function take_snapshot() {
    save("filter.png")
}