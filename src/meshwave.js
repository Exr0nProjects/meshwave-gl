"strict mode";
(() => {
    function render() {
        canvas = document.getElementById('meshwave-canvas');
        (() => {
            canvas.width = canvas.clientWidth;
            canvas.height = canvas.clientWidth;
        })();
        let ms = Date.now();
        ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "rgb(0, 200, 0)";
        ctx.fillRect(100 + (ms/10)%100, 100, 600, 600);
        window.requestAnimationFrame(render);
    }

    window.addEventListener("load", () => {
        window.requestAnimationFrame(render);
    });
})();

