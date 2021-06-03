{
    const input = document.querySelector(".input");
    const text = ["d", "i", "t", " ", "i", "s", " ", "e", "e", "n", " ", "t", "e", "s", "t"]

    let counter = 0
    let textMaker = ''

    const handleInput = () =>{
        if (counter < text.length){
            textMaker = textMaker + text[counter];
            input.value = textMaker;
            console.log(textMaker);
            counter++
        } else {
            input.value = "dit is een test"
        }

    }


    const init = () => {
        input.addEventListener("input", handleInput);
    }
    init();
}