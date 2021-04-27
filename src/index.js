import * as Tone from "tone";

Tone.Transport.bpm.value = 126.25;
Tone.Transport.loop = true;
Tone.Transport.loopStart = "0:0:0";
Tone.Transport.loopEnd = "4:0:0";

const audioFiles = [
  "https://f.4bars.media/6E/52/6E52A9C1F2DD41ABA6397F82CD3C619B.ogg",
  "https://f.4bars.media/C1/1C/C11C71DBF1CF40FE85CF1044515F115C.ogg",
  "https://f.4bars.media/E8/F1/E8F1E4E304334B5580D23F9CCC376278.ogg",
  "https://f.4bars.media/2A/EB/2AEBDC8619BF411A900EDFF406103150.ogg"
];

audioFiles.forEach(url => {
  const player = new Tone.Player(url);
  player.autostart = false;
  player.loop = true;
  player.loopStart = "0:0:0";
  player.loopEnd = "4:0:0";
  player.toMaster().sync();
  player.start();
});

Tone.loaded().then(() => {
  document.querySelector("button").textContent = "start";
  document.querySelector("button").addEventListener("click", () => {
    Tone.Transport.start();
  });
});
