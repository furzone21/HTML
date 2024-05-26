function rez() {
    var k1, k2, result;
    k1 = document.getElementById('k1').value;
    k2 = document.getElementById('k2').value;
    result = k1 * k2;
    result = result.toFixed(2);
    document.getElementById('textrez').innerHTML = 'Вартість квитків: ' + result + ' грн.';
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

document.oncopy = function(e) {
    e.clipboardData.setData("text/plain", "Копіювання на сайті заборонено!");
    e.preventDefault();
};