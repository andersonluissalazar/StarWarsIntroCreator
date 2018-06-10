class AudioController {
  constructor() {
    this.audio = document.querySelector('#themeAudio');
    this.isLoaded = false;
    this.audioLoadPromise = new Promise((resolve) => {
      this.audio.oncanplaythrough = () => resolve();
    });

    this.audio.load();
  }

  loadAudio() {
    if (!this.isLoaded) {
      this.audio.load();
      this.isLoaded = true;
    }
  }

  canPlay() {
    return this.audioLoadPromise;
  }

  play() {
    return new Promise(async (resolve, reject) => {
      // this.audio.currentTime = 92;
      // this.audio.playbackRate = 3;
      this.reset();
      try {
        await this.audio.play();
      } catch (error) {
        reject(error);
        return;
      }

      const endedListener = () => {
        resolve();
      };
      this.audio.addEventListener('ended', endedListener);
    });
  }

  reset() {
    this.audio.pause();
    this.audio.currentTime = 0;
  }
}

export default new AudioController();