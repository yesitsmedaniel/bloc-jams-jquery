class Helper {
  playPauseAndUpdate(song) => {
    console.log("called playPauseAndUpdate with " + song);
    player.playPause(song);
};
const helper = new Helper()

}
