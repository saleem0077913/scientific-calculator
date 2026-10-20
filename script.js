const display = document.getElementById("display");


// ===============================
// DISPLAY VALUE ADD
// ===============================

function appendValue(value) {
    display.value += value;
}


// ===============================
// CLEAR ALL
// ===============================

function clearDisplay() {
    display.value = "";
}


// ===============================
// DELETE LAST CHARACTER
// ===============================

function deleteLast() {
    display.value = display.value.slice(0, -1);
}


// ===============================
// CALCULATE
// ===============================

function calculate() {

    try {

        let expression = display.value;

        // Percentage
        expression = expression.replace(
            /(\d+(\.\d+)?)%/g,
            "($1/100)"
        );

        let result = eval(expression);

        if (!isFinite(result)) {
            display.value = "Error";
        } else {
            display.value = result;
        }

    } catch (error) {

        display.value = "Error";

    }
}


// ===============================
// SCIENTIFIC FUNCTIONS
// ===============================

function scientific(type) {

    try {

        let value = parseFloat(display.value);

        if (isNaN(value)) {
            display.value = "Error";
            return;
        }

        let result;


        // SIN
        if (type === "sin") {

            result = Math.sin(value * Math.PI / 180);

        }


        // COS
        else if (type === "cos") {

            result = Math.cos(value * Math.PI / 180);

        }


        // TAN
        else if (type === "tan") {

            result = Math.tan(value * Math.PI / 180);

        }


        // LOG
        else if (type === "log") {

            if (value <= 0) {
                display.value = "Error";
                return;
            }

            result = Math.log10(value);

        }


        // LN
        else if (type === "ln") {

            if (value <= 0) {
                display.value = "Error";
                return;
            }

            result = Math.log(value);

        }


        // SQUARE ROOT
        else if (type === "sqrt") {

            if (value < 0) {
                display.value = "Error";
                return;
            }

            result = Math.sqrt(value);

        }


        display.value = result;

    } catch (error) {

        display.value = "Error";

    }
}


// ===============================
// SQUARE
// ===============================

function square() {

    try {

        let value = parseFloat(display.value);

        if (isNaN(value)) {
            display.value = "Error";
            return;
        }

        display.value = value * value;

    } catch (error) {

        display.value = "Error";

    }
}


// ===============================
// POWER
// ===============================

function power() {

    try {

        let base = parseFloat(display.value);

        if (isNaN(base)) {
            display.value = "Error";
            return;
        }

        let exponent = prompt("Enter power:");

        if (exponent === null || exponent === "") {
            return;
        }

        exponent = parseFloat(exponent);

        if (isNaN(exponent)) {
            display.value = "Error";
            return;
        }

        display.value = Math.pow(base, exponent);

    } catch (error) {

        display.value = "Error";

    }
}


// ===============================
// KEYBOARD SUPPORT
// ===============================

document.addEventListener("keydown", function(event) {

    let key = event.key;


    // Numbers
    if (key >= "0" && key <= "9") {

        appendValue(key);

    }


    // Operators
    else if (
        key === "+" ||
        key === "-" ||
        key === "*" ||
        key === "/" ||
        key === "." ||
        key === "(" ||
        key === ")"
    ) {

        appendValue(key);

    }


    // Enter
    else if (key === "Enter") {

        calculate();

    }


    // Backspace
    else if (key === "Backspace") {

        deleteLast();

    }


    // Escape
    else if (key === "Escape") {

        clearDisplay();

    }

});