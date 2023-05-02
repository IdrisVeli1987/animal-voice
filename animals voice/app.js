const animals = [
  {
    name: "inek",
    img: "inek.jpg",
    audio: "inek.ogg",
  },
  {
    name: "it",
    img: "it.jpg",
    audio: "it.ogg",
  },
  {
    name: "sir",
    img: "sir.jpg",
    audio: "sir.flac",
  },
  {
    name: "jiraf",
    img: "jiraf.jpg",
    audio: "jiraf.oga",
  },
  {
    name: "raccoon",
    img: "raccoon.jpg",
    audio: "raccoon.flac",
  },
];

const containerEl = document.getElementById("root");

animals.forEach((data) => {
  const animalEl = document.createElement("div");
  animalEl.className = "animal";

  const imgEl = document.createElement("img");
  imgEl.src = `./img/${data.img}`;
  imgEl.alt = `Menim heyvanlarim ${data.name}`;

  const audioEl = document.createElement("audio");
  audioEl.src = `./sounds/${data.audio}`;
  imgEl.onclick = () => {
    audioEl.play();
  };

  animalEl.append(imgEl, audioEl);
  containerEl.appendChild(animalEl);
});
