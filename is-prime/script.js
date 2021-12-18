function isPrime1(n) {
    if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) return false;
    var m = Math.sqrt(n); //returns the square root of the passed value
    for (var i = 2; i <= m; i++)
        if (n % i == 0) return false;
    return true;
}

let input1 = document.querySelector("#in1");
let btn1 = document.querySelector("#button1");
let output1 = document.querySelector("#out1");

btn1.addEventListener("click", (e) => {
    if (input1.value !== "") {
        output1.innerHTML = isPrime1(input1.value) ? `${input1.value} - tub son.` : `${input1.value} - tub son emas.`;
        input1.value = "";
    } else {
        output1.innerHTML = "";
    }
})

let input2 = document.querySelector("#in2");
let btn2 = document.querySelector("#button2");
let output2 = document.querySelector("#out2");

btn2.addEventListener("click", (e) => {
    if (input2.value !== "") {
        let stopValue = Number(input2.value);
        let list = [];
        for (let i = 2; i<=stopValue; i++) {
            if (isPrime1(i)) {
                list.push(i);
            }
        }
        if (list.length) {
            table = document.createElement("table");
            output2.innerHTML = `${input2.value}gacha bo'lgan tub sonlar ${list.length} ta.`;
            for (let j=0; j <= Math.round(list.length / 15); j++) {
                trow = document.createElement("tr");
                for (let k = 0; k < 15; k++) {
                    tdata = document.createElement("td");
                    tdata. innerHTML = list[15 * j + k] ? list[15 * j + k] : "";
                    trow.appendChild(tdata);
                }
                table.appendChild(trow);
            }
            output2.appendChild(table);
        } else {
            output2.innerHTML = "Kiritilgan qiymatgacha tub sonlar mavjud emas.";
        }
        input2.value = "";
    } else {
        output2.innerHTML = "";
    }
})