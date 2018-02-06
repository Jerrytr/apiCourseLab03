/* global $ */

let imageContainer = $('#imageContainer');
let currentImage;

function addImage(url) {
    imageContainer = $('#imageContainer');

    let image = $('<img />', {
        src: url,
        });
    imageContainer.append(image);

    // Using the "is" method we can ask if the image is the first one
    if (image.is(':first-child')) {
        currentImage = image;
    } else {
        image.hide();
    }

    return image;
}

function showImage(image) {
    currentImage.hide();
    currentImage = image;
    image.show();
}

function nextImage() {
    let image = currentImage.next();
    if (image.length == 0) {
        image = $(' #imageContainer').children().first();
    }
    showImage(image);
}

function prevImage() {
    let image = currentImage.prev();
    if (image.length == 0) {
        image = $(' #imageContainer').children().last();
    }
    showImage(image);
}

addImage('http://placekitten.com/200/301');
addImage('http://placekitten.com/300/302');
addImage('http://placekitten.com/280/280');

 $('#nextCat').click(function() {
    nextImage();
 });

$('#prevCat').click(function() {
    prevImage();
});
