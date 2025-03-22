document.addEventListener("DOMContentLoaded", async () => {
    const imageInput = document.getElementById("imageInput");
    const preview = document.getElementById("preview");
    const result = document.getElementById("result");

    const model = await mobilenet.load();
    console.log("Modelo cargado");

    imageInput.addEventListener("change", async (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = async (e) => {
                preview.src = e.target.result;
                const img = new Image();
                img.src = e.target.result;
                img.onload = async () => {
                    const predictions = await model.classify(img);
                    result.innerText = `Predicción: ${predictions[0].className} con ${Math.round(predictions[0].probability * 100)}% de confianza`;
                };
            };
            reader.readAsDataURL(file);
        }
    });
});

