// let imageContainer = $('#imageContainer');

function addImage(url) {
    // Create a HTML element using jQuery and store it in a variable
    let element = $('<div />', {
        id: 'myDiv',
    });
    // ... then you can manipulate element using jQuery
    element.text('Hello World!');

    imageContainer = $('#imageContainer');
    // console.log(imageContainer);

    let image = $('<img />', {
        src: url,
        });
        // .appendTo($(imageContainer));
    imageContainer.append(image);
    // console.log(imageContainer);
    // console.log(image);
    // console.log(image);
    // Using the "is" method we can ask if the image is the first one
    if (image.is(':first-child')) {
        globalImage = image;
    } else {
        image.hide();
    }
    // ...is method returns true or false so it can be used in a if clause

    return image;
}

function showImage(image) {
    // console.log(image);
    globalImage.hide();
    // console.log(globalImage);
    // console.log(globalImage);
    globalImage = image;
    image.show();
}

function nextImage() {
    // console.log('nextImage');
    // let image = $( 'imageContainer').next();
    let image = globalImage.next();
    console.log(image.length);
    if (image.length == 0) {
        console.log('nolla');
        
    }
    console.log(image);
    // console.log(image);
    // console.log(imageContainer);
     showImage(image);
}

function prevImage() {
    let image = globalImage.prev();
    showImage(image);
}

let img1 = addImage('http://placekitten.com/200/301');
let img2 = addImage('http://placekitten.com/300/302');
let img3 = addImage('http://placekitten.com/280/280');

showImage(img1);

 $('#nextCat').click(function() {
    nextImage();
 });

$('#prevCat').click(function() {
    prevImage();
});
