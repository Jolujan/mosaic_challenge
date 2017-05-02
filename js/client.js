function previewFile() {
    var preview = document.querySelector('#preview__image');
    var file = document.querySelector('input[type=file]').files[0];
    var reader = new FileReader();

    reader.onloadend = function() {
        preview.src = reader.result;
    };

    if (file) {
        reader.readAsDataURL(file);
        preview.classList.remove("preview__image--hidden");
    }

    if(!preview.classList.contains("preview__image--hidden") && !file){
        preview.src = "";
        preview.classList.add("preview__image--hidden");
    }

};
