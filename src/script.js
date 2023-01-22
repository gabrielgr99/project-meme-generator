const memeId = document.getElementById('meme-image');

// Adiciona o texto ao meme logo ao ser digitado
document.getElementById('text-input').addEventListener('input', () => {
  const text = document.getElementById('text-input').value;
  document.getElementById('meme-text').innerText = text;
});

// Adiciona a imagem ao meme ao ser selecionada
document.getElementById('meme-insert').addEventListener('input', (element) => {
  const img = URL.createObjectURL(element.target.files[0]);
  memeId.src = img;
});

// Adiciona estilo à borda do meme
[...document.getElementsByTagName('button')].forEach((element) => {
  element.addEventListener('click', () => {
    const tag = document.getElementById('meme-image-container');
    tag.style.border = element.value;
  });
});

// Adiciona imagens prontas ao fundo do meme
[...document.getElementsByTagName('img')].forEach((element) => {
  element.addEventListener('click', () => {
    memeId.src = element.src;
  });
});
