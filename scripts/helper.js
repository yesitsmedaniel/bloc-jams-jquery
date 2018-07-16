class Helper {
  playPauseAndUpdate(song) {
    console.log("called playPauseAndUpdate with " + song);
    player.playPause(song);
    $('.total-time').text(player.getDuration() );
  };
}
const helper = new Helper();
