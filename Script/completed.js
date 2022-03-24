var compledcoll = JSON.parse(localStorage.getItem("completed"));
console.log(compledcoll);

compledcoll.forEach(function(el) {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.innerText = el.name;
    var td2 = document.createElement("td");
    td2.innerText = el.quantity;
    var td3 = document.createElement("td");
    td3.innerText = el.priority;

    tr.append(td1, td2, td3);
    document.querySelector("#body").append(tr);
});