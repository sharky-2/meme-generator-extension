document.body.addEventListener('mouseover', (event) => {
  if (event.target.tagName.toLowerCase() === 'img') {
    const memeText = getRandomMemeText();
    addMemeText(event.target, memeText);
  }
});

function getRandomMemeText() {
  const texts = [
    "When you realize it's Monday tomorrow...",
    "Expectation: Vacation. Reality: Work.",
    "Me vs. the guy she told me not to worry about.",
    "This is fine.",
    "When you try your best but you don't succeed."
  ];
  return texts[Math.floor(Math.random() * texts.length)];
}

function addMemeText(image, text) {
  let memeTextElement = document.createElement('div');
  memeTextElement.classList.add('meme-text');
  memeTextElement.textContent = text;
  
  image.style.position = 'relative';
  memeTextElement.style.position = 'absolute';
  memeTextElement.style.top = '10px';
  memeTextElement.style.left = '10px';
  memeTextElement.style.fontSize = '20px';
  memeTextElement.style.color = 'white';
  memeTextElement.style.textShadow = '2px 2px 5px rgba(0, 0, 0, 0.7)';
  memeTextElement.style.fontWeight = 'bold';
  memeTextElement.style.background = 'rgba(0, 0, 0, 0.5)';
  memeTextElement.style.padding = '5px';
  memeTextElement.style.borderRadius = '5px';

  image.style.position = 'relative';
  image.parentElement.appendChild(memeTextElement);
}
