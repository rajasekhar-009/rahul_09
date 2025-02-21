document.getElementById("imageForm").addEventListener("submit", async function(e) {
    e.preventDefault(); // Prevent default form submission behavior

    const formData = new FormData();
    const imageFile = document.getElementById("imageUpload").files[0];
    formData.append("image", imageFile);

    // Send image to the backend for prediction
    const response = await fetch('/predict', {
        method: 'POST',
        body: formData
    });

    const data = await response.json();

    // Display the result
    document.getElementById("prediction").innerText = data.prediction ? "Face Mask Detected!" : "No Face Mask Detected!";
    document.getElementById("resultImage").src = data.result_image;
});
