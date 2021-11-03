function generateThumbnailForVideo(file, getData, isUrl = false, url) {
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
  const video = document.createElement('video');
  video.id = 'video_generator';
  video.accept = 'video/mp4';
  video.autoplay = true;
  video.src = isUrl ? url : URL.createObjectURL(file);
  video.addEventListener('loadeddata', async () => {
    var wrh = video.videoWidth / video.videoHeight;
    var newWidth = canvas.width;
    var newHeight = newWidth / wrh;
    if (newHeight > canvas.height) {
      newHeight = canvas.height;
      newWidth = newHeight * wrh;
    }
    var xOffset = newWidth < canvas.width ? (canvas.width - newWidth) / 2 : 0;
    var yOffset = newHeight < canvas.height ? (canvas.height - newHeight) / 2 : 0;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, xOffset, yOffset, newWidth, newHeight);
    getData({
      base64: canvas.toDataURL('image/png'),
      generatedFile: await urlToFile(canvas.toDataURL('image/png'), file.name, 'image/png'),
    });
  });
  video.addEventListener('timeupdate', () => {
    if (video.currentTime > 2) {
      video.pause();
    }
  });
}

export default generateThumbnailForVideo;
