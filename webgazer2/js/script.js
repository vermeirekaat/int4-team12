{
    const pictures = ["dog", "cat"];
    const newPictures = ["messi", "ronaldo"]
    const result = []
    
    let newImages 
    let startLookTime = Number.POSITIVE_INFINITY;
    let lookDirection = null;
    let haveDirection = false;
    const LOOK_DELAY = 500 // 0.5sec
    const LEFT_CUTOFF = window.innerWidth / 4;
    const RIGHT_CUTOFF = window.innerWidth - window.innerWidth / 4;


    const setImages = (images) => {
        for (let index = 0; index < images.length; index++) {
            let image = document.createElement("img")
            image.src = `./assets/${images[index]}.jpeg`;
            image.alt = images[index];
            image.className = images[index];
            document.querySelector(".images_container").appendChild(image)
        }
        newImages = images
    }


    //save data, won't need to calibrate again
    window.saveDataAcrossSessions = true

    webgazer.setGazeListener((data, timestamp) => {
        if (data == null) {
            return
        }
        if (data.x < LEFT_CUTOFF && lookDirection !== 'LEFT' && haveDirection !== true) {
            //left
            startLookTime = timestamp;
            lookDirection = 'LEFT';
            haveDirection = true;
        } else if (data.x > RIGHT_CUTOFF && lookDirection !== 'RIGHT' && haveDirection !== true) {
            //right
            startLookTime = timestamp;
            lookDirection = 'RIGHT';
            haveDirection = true;
        } else if (data.x >= LEFT_CUTOFF && data.x <= RIGHT_CUTOFF) {
            //center
            startLookTime = Number.POSITIVE_INFINITY;
            lookDirection = null;
        }

        if (startLookTime + LOOK_DELAY < timestamp) {
            if (lookDirection === 'LEFT'){
                result.push(newImages[0])
                removeImage(newImages[0])
            } else if (lookDirection === 'RIGHT') {
                result.push(newImages[1])
                removeImage(newImages[1])
            }

        }

    }).begin();

    const removeImage = (kindPerson) => {
        const list = document.querySelector(".images_container")
        list.innerHTML = "";
            swal({
                title: "Who are you?",
                text: `You are a ${kindPerson}person`,
                closeOnEsc: false,
                allowOutsideClick: false,
                closeModal: true
            }).then(isConfirm => {
               setImages(newPictures)
                haveDirection = false;
            });
    }



    const init = () => {
        setImages(pictures)
    }

    init();

}