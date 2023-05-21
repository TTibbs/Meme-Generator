const generateBtn = document.querySelector('.meme-container .generate-btn');
const memeImage = document.querySelector('.meme-container img');
const memeTitle = document.querySelector('.meme-container .meme-title');
const memeAuthor = document.querySelector('.meme-container .meme-author');

const updateDetails = (url, title, author) => {
  memeImage.setAttribute("src", url);
  memeTitle.innerHTML = "Title: " + title;
  memeAuthor.innerHTML = "Meme Author: " + author;
}

const generateMeme = () => {
  fetch("https://meme-api.com/gimme")
    .then((response) => response.json())
    .then((data) => {
      updateDetails(data.url, data.title, data.author);
    });
};

generateBtn.addEventListener('click', generateMeme);

const isDarkMode = () => {
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
}

console.log(isDarkMode());