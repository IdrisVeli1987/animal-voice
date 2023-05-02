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
];

const containerEl = document.querySelector(".container");
animals.forEach((data) => {
  const animalEl = document.createElement("div");
  animalEl.classname = "animal";

  const imgEl = document.createElement("img");
  img.src = `./img/${data.img}`;
  img.alt = `menim heyvanlarim - ${data.name}`;

  const audioEl = document.createElement("audio");
  audioEl.src = `./sounds/${data.audio}`;

  imgEl.onclick = () => {
    audioEl.play();
  };
  animalEl.append(imgEl, audioEl);
  containerEl.appendChild(animalEl);
});
