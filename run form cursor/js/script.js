{

    const button = document.querySelector('.button')

    const handleMouseMove = (e) => {
        console.log("move")
        console.log(e.pageX)
        let x = e.pageX - 100
        let y = e.pageY - 100
        button.style.cssText = `position:absolute; left:${x}px;top:${y}px`;
    }

    const init = () => {
       document.addEventListener("mousemove", handleMouseMove)
    }

    init ();
}