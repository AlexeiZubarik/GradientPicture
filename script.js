window.onload = function() {
    let img = document.getElementById('img');

    document.getElementById('container').appendChild(getCanvasFromImg(img));
    // getBase64Image(img)
    const canvas = this.document.getElementsByTagName('canvas')[0];
    console.log(getArrayImageData(canvas));
};

function getCanvasFromImg(img) {
    const canvas = document.createElement('canvas');

    canvas.width = img.width;
    canvas.height = img.height;
    canvas.getContext('2d').drawImage(img, 0, 0);

    return canvas;
}

function getArrayImageData(canvas) {
    const ctx = canvas.getContext('2d');
    const arrayData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;

    return getArrayRGB(arrayData);
}

function getArrayRGB(data) {
    const arrayRGB = [];
    
    data.forEach((element, i) => {
        if (i % 4 === 0) {
            arrayRGB.push([]);
        }
        arrayRGB[arrayRGB.length - 1].push(element);
    });

    return arrayRGB;
}