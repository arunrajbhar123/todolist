var getdata = JSON.parse(localStorage.getItem("listdata"));
// console.log(getdata);
getdata.forEach(function(el, i, arr) {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.innerText = el.name;
    var td2 = document.createElement("td");
    td2.innerText = el.quantity;
    var td3 = document.createElement("td");
    td3.innerText = el.priority;
    var td4 = document.createElement("td");
    var btn = document.createElement("button");
    btn.innerText = "Mark as complete";
    btn.addEventListener("click", function() {
        sendcomplete(el);
    });
    td4.append(btn);
    tr.append(td1, td2, td3, td4);
    document.querySelector("#body").append(tr);
});
var getmarkdata = JSON.parse(localStorage.getItem("completed"));
var complete;
if (getmarkdata === null) {
    complete = [];
} else {
    complete = getmarkdata;
}

function sendcomplete(el) {
    complete.push(el);
    localStorage.setItem("completed", JSON.stringify(complete));
}