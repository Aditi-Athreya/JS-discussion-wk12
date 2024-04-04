document.querySelector("#subscribe").addEventListener("click", function() {
    console.log("this.checked");
    if (this.checked) {
    document.querySelector("#emailDiv").style.display = "block";
    }
    else {
    document.querySelector("#emailDiv").style.display = "none";
    }
});

document.addEventListener("click", function() {
    const currentTime = new Date().toLocaleTimeString();
    alert("Current time: " + currentTime);
});

