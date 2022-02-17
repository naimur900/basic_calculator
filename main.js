document.getElementById("keypad").addEventListener('click', function (event) {
    // console.log(event.target.innerText);
    let pressed = event.target.innerText;
    if (isNaN(pressed) && pressed != "." && pressed != "+" && pressed != "-" && pressed != "/" && pressed != "*" && pressed != "%") {
        if (pressed == "=") {
            let current_value = document.getElementById("screen").value
            document.getElementById("screen").value = eval(current_value);
        }

        else if (pressed == "<") {
            x = document.getElementById("screen").value + "";
            document.getElementById("screen").value = x.slice(0, -1);
        }

        else if (pressed == "AC") {
            document.getElementById("screen").value = "";
        }

        else if (pressed == "Light") {
            document.getElementById("mode").innerText = "Dark"
            change_theme("light");
        }

        else if(pressed == "Dark"){
            document.getElementById("mode").innerText = "Light"
            change_theme("dark");
        }
    }
    else {
        let prev_value = document.getElementById("screen").value + "";
        input_add_on_screen(prev_value, pressed);
    }
})

function input_add_on_screen(prev_value, pressed) {
    let new_value = prev_value + pressed;
    document.getElementById("screen").value = new_value;
    document.getElementById("screen").style.fontSize = 'larger';
    document.getElementById("screen").style.fontWeight = '500';
}

function change_theme(switcher) {
    if(switcher == "light"){
        document.body.style.setProperty('background-color', 'rgb(219, 219, 219)', 'important');
        let all_keys = document.getElementsByClassName("keys");
        for (let key of all_keys) {
            key.style.setProperty('background-color', 'rgb(133, 133, 133)', 'important');
        }
    }
    else if(switcher == "dark"){
        document.body.style.setProperty('background-color', 'rgb(52, 52, 73)', 'important');
        let all_keys = document.getElementsByClassName("keys");
        for (let key of all_keys) {
            key.style.setProperty('background-color', 'rgb(38, 38, 54)', 'important');
        }
    }
    
}