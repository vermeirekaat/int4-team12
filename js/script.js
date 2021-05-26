
{
    const pictures = ["dog", "cat"]
    let xPredictions = []

    let PointCalibrate = 0;
    let calibrationPoints = {};

    const buttons = [
        buttton2 = {
            name: "Pt2",
            amountOfClicks: 0,
            top: 30,
            left: 0
        },
        buttton3 = {
            name: "Pt3",
            amountOfClicks: 0,
            top: 30,
            left: 100
        }
    ]
    const setButtons = () => {
        buttons.forEach(element => {
            console.log(element.top)

            let input = document.createElement("input")
            input.id = element.name;
            input.className = "calibration";
            input.type = "button";
            input.value = "0";
            input.style.cssText = `position:fixed;top:${element.top}rem;left:${element.left}rem`
            document.querySelector('.calibrationDiv').appendChild(input);
        })
        calibrationPoints = document.querySelectorAll(".calibration")
    }

    const clearWindow = () => {
        calibrationPoints.forEach(item => item.style.display = 'none')
    }


    const PopUpInstruction = () => {
        clearWindow();
        swal({
            title: "Calibrate",
            text: "Please click on each of the 2 points on the screen. You must click on each point 5 times till it goes yellow. This will calibrate your eye movements.",
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
        console.log(calibrationPoints)
        calibrationPoints.forEach(item => item.addEventListener('click', handleClick))
    }

    const handleClick = (e) => {
        let id = e.currentTarget.id
        const filteredButton = buttons.filter(item => item.name === id)
        if (filteredButton[0].amountOfClicks != 5) {
            filteredButton[0].amountOfClicks++
            e.currentTarget.value = filteredButton[0].amountOfClicks
        } else if (filteredButton[0].amountOfClicks === 5) {
            e.currentTarget.style.backgroundColor = "yellow";
            PointCalibrate++;
            console.log(PointCalibrate);

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
            clearWindow();
            swal({
                title: "Thank you",
                text: "The experience can start now",
                closeOnEsc: false,
                allowOutsideClick: false,
                closeModal: true
            }).then(isConfirm => {
                clearWindow();
                setImages();
            });
        }
    }


    const startWebgazer = async () => {
        await webgazer.setGazeListener(function (data, elapsedTime) {
            if (data == null) {
                return;
            }
            let xprediction = data.x; //these x coordinates are relative to the viewport
            let yprediction = data.y; //these y coordinates are relative to the viewport
            if (document.querySelector(".cat")) {
                xPredictions.push(xprediction);
                console.log(xPredictions)
                if (xPredictions[5] >= 450) {
                    removeImage("cat");
                } else {
                    removeImage("dog");
                }
            }
            //console.log(elapsedTime); //elapsed time is based on time since begin was called
        }).begin();

    }

    const removeImage = (kindPerson) => {
        setTimeout(function () {
            const list = document.querySelector(".calibrationDiv")
            list.innerHTML = "";
            swal({
                title: "Who are you",
                text: `You are a ${kindPerson}person`,
                closeOnEsc: false,
                allowOutsideClick: false,
                closeModal: true
            }).then(isConfirm => {
                setImages();
            });
            xPredictions.length = 0;

        }, 2000);
    }


    const setImages = async () => {
        for (let index = 0; index < pictures.length; index++) {
            let image = document.createElement("img")
            image.src = `../assets/${pictures[index]}.jpeg`;
            image.alt = pictures[index];
            image.className = pictures[index];
            document.querySelector(".calibrationDiv").appendChild(image)
        }
    }



    const init = () => {
        startWebgazer();
        setButtons();
        PopUpInstruction()
    }

    init()

}