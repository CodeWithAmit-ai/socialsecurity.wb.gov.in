const form = document.getElementById("applicationForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name =
    document.getElementById("name").value.trim();

    const aadhaar =
    document.getElementById("aadhaar").value.trim();

    if (name === "") {

        alert("Applicant Name Required");
        return;

    }

    if (aadhaar.length !== 12) {

        alert("Enter Valid Aadhaar Number");
        return;

    }

    window.location.href = "status.html";

});

// Photo Preview

const photoUpload =
document.getElementById("photoUpload");

if (photoUpload) {

    photoUpload.addEventListener(
        "change",
        function () {

            const file =
            this.files[0];

            if (file) {

                document
                .getElementById("preview")
                .src =
                URL.createObjectURL(file);

            }

        }
    );

}

// Print Button

const printBtn =
document.getElementById("printBtn");

if (printBtn) {

    printBtn.addEventListener(
        "click",
        () => {

            window.print();

        }
    );

}