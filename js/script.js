let backLoaded = false;
let frontLoaded = false;

const backPhoto = document.getElementById('back-photo');
const frontPhoto = document.getElementById('front-photo');
const site = document.querySelector('.site');

backPhoto.onload = () => {
    backLoaded = true;
    checkReady();
};

frontPhoto.onload = () => {
    frontLoaded = true;
    checkReady();
};

function checkReady() {
    if (backLoaded && frontLoaded) {
        document.querySelector('.front-photo').remove();
        site.classList.remove('hidden');
    }
}

// başlangıçta site gizli
site.classList.add('hidden');
