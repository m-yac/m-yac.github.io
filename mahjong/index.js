
tiles = {
  "Dots": [
    "https://upload.wikimedia.org/wikipedia/commons/b/b3/MJt1-.svg",
    "https://upload.wikimedia.org/wikipedia/commons/a/a4/MJt2-.svg",
    "https://upload.wikimedia.org/wikipedia/commons/4/44/MJt3-.svg",
    "https://upload.wikimedia.org/wikipedia/commons/6/66/MJt4-.svg",
    "https://upload.wikimedia.org/wikipedia/commons/7/72/MJt5-.svg",
    "https://upload.wikimedia.org/wikipedia/commons/8/86/MJt6-.svg",
    "https://upload.wikimedia.org/wikipedia/commons/6/6c/MJt7-.svg",
    "https://upload.wikimedia.org/wikipedia/commons/6/66/MJt8-.svg",
    "https://upload.wikimedia.org/wikipedia/commons/f/f5/MJt9-.svg"
  ],
  "Bamboos": [
    "https://upload.wikimedia.org/wikipedia/commons/2/28/MJs1b6-.svg",
    "https://upload.wikimedia.org/wikipedia/commons/9/97/MJs2-.svg",
    "https://upload.wikimedia.org/wikipedia/commons/1/1f/MJs3-.svg",
    "https://upload.wikimedia.org/wikipedia/commons/b/b1/MJs4-.svg",
    "https://upload.wikimedia.org/wikipedia/commons/6/61/MJs5-.svg",
    "https://upload.wikimedia.org/wikipedia/commons/6/63/MJs6-.svg",
    "https://upload.wikimedia.org/wikipedia/commons/8/8a/MJs7-.svg",
    "https://upload.wikimedia.org/wikipedia/commons/b/be/MJs8-.svg",
    "https://upload.wikimedia.org/wikipedia/commons/f/f3/MJs9-.svg"
  ],
  "Characters": [
    "https://upload.wikimedia.org/wikipedia/commons/3/32/MJw1-.svg",
    "https://upload.wikimedia.org/wikipedia/commons/7/70/MJw2-.svg",
    "https://upload.wikimedia.org/wikipedia/commons/d/d0/MJw3-.svg",
    "https://upload.wikimedia.org/wikipedia/commons/6/6b/MJw4-.svg",
    "https://upload.wikimedia.org/wikipedia/commons/4/4b/MJw5-.svg",
    "https://upload.wikimedia.org/wikipedia/commons/4/4c/MJw6-.svg",
    "https://upload.wikimedia.org/wikipedia/commons/c/c0/MJw7-.svg",
    "https://upload.wikimedia.org/wikipedia/commons/d/d3/MJw8-.svg",
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/MJw9-.svg"
  ],
  "Winds": [
    "tiles/MJf1-.svg",
    "tiles/MJf2-.svg",
    "tiles/MJf3-.svg",
    "tiles/MJf4-.svg"
  ],
  "Dragons": [
    "https://upload.wikimedia.org/wikipedia/commons/6/61/MJd1v2-.svg",
    "https://upload.wikimedia.org/wikipedia/commons/f/f0/MJd2v3-.svg",
    "tiles/MJd3b-.svg"
  ]
}

flowers = [
  "https://upload.wikimedia.org/wikipedia/commons/1/14/MJh1-.svg",
  "https://upload.wikimedia.org/wikipedia/commons/e/e0/MJh2-.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/25/MJh3-.svg",
  "https://upload.wikimedia.org/wikipedia/commons/b/b7/MJh4-.svg",
  "https://upload.wikimedia.org/wikipedia/commons/1/10/MJh5v1-.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/26/MJh6v1-.svg",
  "https://upload.wikimedia.org/wikipedia/commons/6/65/MJh7v1-.svg",
  "https://upload.wikimedia.org/wikipedia/commons/9/92/MJh8v1-.svg"
]

function changeBanner() {
  [].forEach.call(document.images, function(v, i) {
      document.images[i].hidden = i !== index
  });
  index = (index + 1) % document.images.length;
}
window.onload = function() {
  setInterval(changeBanner, 1000)
};









