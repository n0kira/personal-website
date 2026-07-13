const discoverBtn = document.getElementById('discover');
const detailsTxt = document.getElementById('details');

let isActive = false;

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


const videosPreviews = document.querySelectorAll(".thumbnail");

videosPreviews.forEach(video => {
    video.addEventListener("mouseenter", (e) => {
        if (e.target.tagName == "VIDEO") {
            video.play().catch(error => {
                console.log("Interact with the page first.")
            });
        }
    });

    video.addEventListener("mouseleave", (e) => {
         if (e.target.tagName == "VIDEO") {
            video.pause();
            video.currentTime = 0;
         }
    });
});
