// auteur moet nog toegevoegd worden

const TrackPointer = (callback) => {

    let frame;

    let pointer = {
        px: 0,
        py: 0,
        track: function (e) {
            pointer.px = e.clientX;
            pointer.py = e.clientY;
            frame = requestAnimationFrame(update);
        },
    };

    callback = (callback || function () { });

    const update = () => {
        frame = null;
        callback(pointer);
    }

    document.addEventListener('mousemove', pointer.track);

    return pointer;

}
