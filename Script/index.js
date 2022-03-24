document.querySelector("#form").addEventListener("submit", mytask);

// var collecdata = JSON.parse(localStorage.getItem("datalist"));

var datalist;
if (JSON.parse(localStorage.getItem("listdata")) === null) {
    datalist = [];
} else {
    datalist = JSON.parse(localStorage.getItem("listdata"));
}



function mytask() {
    event.preventDefault();
    var name = document.querySelector("#name").value;
    var qty = document.querySelector("#qty").value;
    var pri = document.querySelector("#priority").value;
    var obj = {
        "name": name,
        "quantity": qty,
        "priority": pri,
    }
    datalist.push(obj);
    localStorage.setItem("listdata", JSON.stringify(datalist));
}