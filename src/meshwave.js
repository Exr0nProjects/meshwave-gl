"strict mode";
(() => {
    function render() {
        canvas = document.getElementById('meshwave-canvas');
        (() => {
            canvas.width = canvas.clientWidth;
            canvas.height = canvas.clientWidth;
        })();
        (() => {
            let ms = Date.now();
            let gl = canvas.getContext('2d');
        })();
        window.requestAnimationFrame(render);
    }

    window.addEventListener("load", () => {
        window.requestAnimationFrame(render);
    });
})();

