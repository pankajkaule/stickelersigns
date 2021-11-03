function generateThumbnailForImage(file, getData, isURL = false, url) {
  function urlToFile(url, filename, mimeType) {
    return fetch(url)
      .then(function (res) {
        return res.arrayBuffer();
      })
      .then(function (buf) {
        return new File([buf], `${filename}_thumbnail`, { type: mimeType });
      });
  }

  const canvas = document.getElementById('image-generator');
  const image = document.createElement('img');
  image.src = isURL ? url : URL.createObjectURL(file);
  image.onload = async () => {
    var wrh = image.width / image.height;
    var newWidth = canvas.width;
    var newHeight = newWidth / wrh;
    if (newHeight > canvas.height) {
      newHeight = canvas.height;
      newWidth = newHeight * wrh;
    }
    var xOffset = newWidth < canvas.width ? (canvas.width - newWidth) / 2 : 0;
    var yOffset = newHeight < canvas.height ? (canvas.height - newHeight) / 2 : 0;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(image, xOffset, yOffset, newWidth, newHeight);
    getData({
      base64: canvas.toDataURL('image/png'),
      generatedFile: await urlToFile(canvas.toDataURL('image/png'), file.name, 'image/png'),
    });
    ctx.clearRect(0, 0, newWidth, newWidth);
  };
}

export default generateThumbnailForImage;
