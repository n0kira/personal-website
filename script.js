var discoverBtn = document.getElementById('discover');
var detailsTxt = document.getElementById('details');

var isActive = false;

discoverBtn.addEventListener("click", () => {
    if (!isActive) {
        discoverBtn.textContent = "Hide Details";
        detailsTxt.style.display = "block";
        isActive = true;
    } else {
        discoverBtn.textContent = "Click here to know more!";
        detailsTxt.style.display = "none";
        isActive = false;
    }
})
