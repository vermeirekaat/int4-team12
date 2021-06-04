{

    const randomProgress = () => {
        const $progress = document.querySelector('.progress');
        $progress.value = Math.random() * 100;

        console.log("test");

    }

    const init = ()=> {
        setInterval(randomProgress, 1000)
    }

    init();
}