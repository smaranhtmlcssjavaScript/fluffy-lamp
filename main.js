timer_counter = 0;
timer_check = "";
answer_holder = "";
score = 0;
arraydraw = ["cat","pepper","bowl","bottle", "ruler", "pencil"];
drawn_sketch = "";
randomnumber = Math.floor((Math.random()*arraydraw.length));
sketch = arraydraw[randomnumber];
document.getElementById("stbd").innerHTML = sketch;
console.log(sketch);

function updateCanvas() {
    background("white");
    randomnumber = Math.floor((Math.random()*arraydraw.length));
    console.log(sketch);
    sketch = arraydraw[randomnumber];
    document.getElementById("stbd").innerHTML = sketch;
}

function setup() {
    canvas = createCanvas(280, 280);
    canvas.center();
    background("white");
}
function clearCanvas() {
    background("white");
}
function draw() {
    check_sketch()
    if (drawn_sketch == sketch) {
        answer_holder = "set";
        score++;
        document.getElementById("score").innerHTML = score;
    }
}

function check_sketch() {
    timer_counter++;
    document.getElementById("timer").innerHTML = "Timer: " + timer_counter;
    console.log(timer_counter);
    if (timer_counter > 400) {
        timer_counter = 0;
        timer_check = "completed";
    }
    if (timer_check == "completed") {
        timer_check = "";
        answer_holder = "";
        updateCanvas()
    }
}

