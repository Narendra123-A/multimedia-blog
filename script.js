// Multimedia Blog - Audio/Video Playback Controller
// Automatically pauses any playing audio/video when another media track starts playing.

document.addEventListener('DOMContentLoaded', () => {
  const mediaElements = document.querySelectorAll('audio, video');

  mediaElements.forEach((media) => {
    media.addEventListener('play', () => {
      mediaElements.forEach((otherMedia) => {
        if (otherMedia !== media && !otherMedia.paused) {
          otherMedia.pause();
        }
      });
    });
  });
});
