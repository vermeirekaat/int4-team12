{

    const button = document.querySelector('.button')

    const handleMouseMove = (e) => {
        console.log("move")
        console.log(e.pageX)
        let x = e.pageX - 100
        let y = e.pageY - 100
        button.style.cssText = `position:absolute; left:${x}px;top:${y}px`;
    }

    const handleClick = () => {
        console.log("click");
    }


    const init = () => {
        console.log("script")
       document.addEventListener("mousemove", handleMouseMove)
       button.addEventListener("click", handleClick)
    }

    init ();
}