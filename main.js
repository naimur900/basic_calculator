document.getElementById("keypad").addEventListener('click', function (event) {
    // console.log(event.target.innerText);
    let pressed = event.target.innerText;
    console.log(pressed);
    if (isNaN(pressed) && pressed != "." && pressed != "+" && pressed != "-" && pressed != "/" && pressed != "*" && pressed != "√") {
        if (pressed == "=") {
            let current_value = document.getElementById("screen").value
            document.getElementById("screen").value = eval(current_value);
        }

        else if(pressed == "<") {
            x = document.getElementById("screen").value + "";
            document.getElementById("screen").value = x.slice(0, -1);
        }

        else if(pressed == "AC"){
            document.getElementById("screen").value = "";
        }
    }
    else {
        let prev_value = document.getElementById("screen").value + "";
        input_add(prev_value, pressed);
    }
})

function input_add(prev_value, pressed) {
    let new_value = prev_value + pressed;
    document.getElementById("screen").value = new_value;
    document.getElementById("screen").style.fontSize = 'larger';
    document.getElementById("screen").style.fontWeight = '500';
}