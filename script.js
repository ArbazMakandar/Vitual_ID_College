function generateID() {
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let college = document.getElementById("college").value;
    let department = document.getElementById("department").value;
    let year = document.getElementById("year").value;
    let qrText = document.getElementById("qr-text").value;
    let color = document.getElementById("color").value;
    let photoInput = document.getElementById("photo");
    let logoInput = document.getElementById("college-logo");

    // Update ID Card Text
    document.getElementById("id-name").textContent = name || "Your Name";
    document.getElementById("id-roll").textContent = roll || "Roll Number";
    document.getElementById("id-college").textContent = college || "College Name";
    document.getElementById("id-department").textContent = department || "Department";
    document.getElementById("id-year").textContent = year || "Year";
    document.getElementById("id-card").style.backgroundColor = color;

    // Handle Profile Photo Upload
    let idPhoto = document.getElementById("id-photo");
    if (photoInput.files.length > 0) {
        let reader = new FileReader();
        reader.onload = function (e) {
            idPhoto.src = e.target.result;
        };
        reader.readAsDataURL(photoInput.files[0]);
    } else {
        idPhoto.src = "";
    }

    // Handle College Logo Upload
    let idLogo = document.getElementById("id-logo");
    if (logoInput.files.length > 0) {
        let reader = new FileReader();
        reader.onload = function (e) {
            idLogo.src = e.target.result;
        };
        reader.readAsDataURL(logoInput.files[0]);
    } else {
        idLogo.src = "";
    }

    // Generate QR Code with user-entered data
    document.getElementById("qr-code").innerHTML = "";
    new QRCode(document.getElementById("qr-code"), {
        text: qrText,
        width: 70,
        height: 70
    });

    // Show ID Card Page
    document.getElementById("form-page").classList.add("hidden");
    document.getElementById("id-card-page").classList.remove("hidden");
}

function downloadID() {
    html2canvas(document.getElementById("id-card")).then(canvas => {
        let link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "College_ID.png";
        link.click();
    });
}
