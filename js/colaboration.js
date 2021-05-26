let PointCalibrate = 0;
let calibrationPoints = {};
const buttons = [
    buttton1 = {
        name: "Pt1",
        amountOfClicks: 0,
        top: 0,
        left: 50,
    },
    buttton2 = {
        name: "Pt2",
        amountOfClicks: 0,
        top: 90,
        left: 678
    },
    buttton3 = {
        name: "Pt3",
        amountOfClicks: 0,
        top: 79,
        left: 234
    },
    buttton4 = {
        name: "Pt4",
        amountOfClicks: 0,
        top: 679,
        left: 40
    }
]

{

    const setButtons = () => {

        buttons.forEach(element => {
                console.log(element.top)

            let input = document.createElement("input")
            input.id = element.name;
            input.class = "calibration";
            input.type = "button";
            input.value = "0";
            input.style.cssText = `position:fixed;top:${element.top}rem;left:${element.left}rem`
            document.querySelector('.calibrationDiv').appendChild(input);
        })
    }

    const clearCanvas = () => {
       calibrationPoints = document.querySelectorAll(".calibration")
        calibrationPoints.forEach(item => item.style.display = 'none')
        var canvas = document.querySelector(".canvas");
        let context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
    }


    const PopUpInstruction = () => {
        clearCanvas();
        swal({
            title: "Calibrate",
            text: "Please click on each of the 9 points on the screen. You must click on each point 5 times till it goes yellow. This will calibrate your eye movements.",
            buttons: {
                cancel: false,
                confirm: true
            }
        }).then(isConfirm => {
            ShowCalibrationPoint();
            ready();
        });

    }


    const ShowCalibrationPoint = () => {
        calibrationPoints.forEach(item => item.style.display = 'block')
    }

    const ready = () => {
        console.log("dit werkt")
        calibrationPoints.forEach(item => item.addEventListener('click', handleClick))
    }

    const handleClick = (e) => {
        let id = e.currentTarget.id
        const filteredButton = buttons.filter(item => item.name === id)
        if (filteredButton[0].amountOfClicks != 5) {
            filteredButton[0].amountOfClicks++
            e.currentTarget.value = filteredButton[0].amountOfClicks
        } else if (filteredButton[0].amountOfClicks == 5) {
            e.currentTarget.style.backgroundColor = "yellow";
            PointCalibrate++;

        }
        if (filteredButton[0].amountOfClicks < 5) {
            let opacity = 0.2 * filteredButton[0].amountOfClicks + 0.2;
            console.log(opacity)
            e.currentTarget.style.opacity = opacity;
        }

        checkAllPoints();
    }

    const checkAllPoints = () => {
        if (PointCalibrate == 4) {
            clearCanvas();
            swal({
                title: "Thank you",
                text: "The experience can start now",
                closeOnEsc: false,
                allowOutsideClick: false,
                closeModal: true
            }).then(isConfirm => {
            });
        }
    }
    const init = () => {
        setButtons();
        PopUpInstruction()
    }

    init();
}

