{

    let width = window.innerWidth;
    let height = window.innerHeight;

    let stage = new PIXI.Container();
    let renderer = PIXI.autoDetectRenderer(width, height, { transparent: true });
    renderer.autoResize = true;
    document.body.appendChild(renderer.view);

    const displacementSprite = PIXI.Sprite.fromImage('./assets/displacement-circle.png');
    displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
    displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.MIRRORED_REPEAT;
    displacementSprite.scale.y = 1;
    displacementSprite.scale.x = 1;

    const displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);
    displacementFilter.padding = 10;
    displacementFilter.scale.x = 10;
    displacementFilter.scale.y = 10;

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

    const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(stage);
    }


    const text = new PIXI.Text(
        '',
        {
            fontSize: 90,
            lineHeight: 70,
            fill: 0xf5c944,
            align: 'center',
            wordWrap: true,
            whiteSpace: 'normal',
            padding: 50,
            text:''
        });


    stage.addChild(displacementSprite);

    stage.addChild(text);

    const updateText = (value) => {
        console.log(value)
        text.text = value;
        text.position.x = 300;
        text.position.y = 200;

        text.filters = [displacementFilter];
    }

    const init = () => {
        TrackPointer(function (pointer) {
            displacementSprite.x = pointer.px;
            displacementSprite.y = pointer.py;
        });
        animate();
        
        const input = document.getElementById('input');
        updateText(input.value);
        input.addEventListener('input', (e) => { updateText(input.value); });
    }

    init();
}

