{
    let mouseArray = [];

    const addMouses = (e) => {
        for (let index = 0; index < 2; index++) {
            const mouse = document.createElement("img");
            const x = e.pageX * index + 10;
            const y = e.pageY * index + 10;
            mouse.src = "./assets/mousje.png";
            mouse.className = `mouse`;
            mouse.style.cssText = `position:absolute; left:${x}px;top:${y}px`;
            document.querySelector(".container").appendChild(mouse);
        }
        deleteFirst()
    }

    const deleteFirst = () => {
        const firstMouse = document.querySelectorAll(".mouse")[0];
        const mouses = document.querySelectorAll(".mouse")
        for(let index = 0; index < mouses.length; index++){
            let number = index * 2
            mouses[number].style.display = "none";
        }
        const thirdMouse = document.querySelectorAll(".mouse")[2];
        console.log(firstMouse)
        firstMouse.style.display = "none";
        thirdMouse.style.display = "none";
    }

    const init = () => {
        document.addEventListener("mousemove", (e) => addMouses(e))
        
    }

    init();
}