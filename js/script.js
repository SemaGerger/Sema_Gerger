const backPhoto = document.getElementById("back-photo");
const frontPhoto = document.getElementById("front-photo");
const frontImage = frontPhoto;

let backLoaded = false;
let frontLoaded = false;

backPhoto.onload = () => {
    backLoaded = true;
    tryStart();
};

frontPhoto.onload = () => {
    frontLoaded = true;
    tryStart();
};

function tryStart() {
    if (backLoaded && frontLoaded) {
        // animasyonu başlat
        frontImage.classList.add("animate");

        // overlay göster
        document.getElementById("welcome-overlay")
            .classList.remove("hidden");
    }
}
