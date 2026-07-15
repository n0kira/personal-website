const selectionModel = document.getElementById('toggleModel');
const options = document.querySelectorAll(`.modelOption`);
const model3D = document.getElementById('model3D');

selectionModel.addEventListener("click", () => {
    options.forEach(option => {
        option.classList.toggle("selected")
        if (option.classList.contains("selected")) {
            let model = option.innerHTML.toLowerCase();
            model3D.src = `models/${model}.glb`
        }
    });
})
