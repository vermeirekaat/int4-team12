
{
    let canvas = document.querySelector('.canvas'),
        context = canvas.getContext('2d');

    const startWebgazer = () => {
        webgazer.setGazeListener(function (data, elapsedTime) {
            if (data == null) {
                return;
            }
            let xprediction = data.x; //these x coordinates are relative to the viewport
            let yprediction = data.y; //these y coordinates are relative to the viewport
            console.log(elapsedTime); //elapsed time is based on time since begin was called
        }).begin();
    }

    const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        /**
         * Your drawings need to be inside this function otherwise they will be reset when 
         * you resize the browser window and the canvas goes will be cleared.
         */
        drawStuff();
    }


    function drawStuff() {
        // do your drawing stuff here
    }

const init = () => {
    startWebgazer();
    drawStuff();
    window.addEventListener('resize', resizeCanvas, false);
}

init()

}