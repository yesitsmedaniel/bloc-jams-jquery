class Helper {
  playPauseAndUpdate(song) {
    console.log("called playPauseAndUpdate with " + song);
    player.playPause(song);
    $('.total-time').text(player.getDuration(song) );
  };
}
const helper = new Helper();
