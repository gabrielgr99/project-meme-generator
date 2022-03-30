// Adiciona o texto ao meme logo ao ser digitado
function printText() {
  const text = document.getElementById('text-input').value;
  document.getElementById('meme-text').innerText = text;
}

document.getElementById('text-input').addEventListener('input', printText);

// Adiciona a imagem ao meme ao ser selecionada
const memeId = 'meme-image';
function printImg() {
  const img = URL.createObjectURL(this.files[0]);
  document.getElementById(memeId).style.backgroundImage = `url(${img})`;
}

document.getElementById('meme-insert').addEventListener('input', printImg);

// Adiciona estilo à borda do meme
function customer() {
  const tag = document.getElementById('meme-image-container');
  if (this.id === 'fire') {
    tag.style.border = '3px dashed red';
  } else if (this.id === 'water') {
    tag.style.border = '5px double blue';
  } else {
    tag.style.border = '6px groove green';
  }
}

[...document.getElementsByTagName('button')].forEach((element) => {
  element.addEventListener('click', customer);
});

// Adiciona imagens prontas ao fundo do meme
function setImg() {
  const tag = document.getElementById(memeId);
  console.log(this.src);
  if (this.id === 'meme-1') {
    tag.src = this.src;
  } else if (this.id === 'meme-2') {
    tag.src = this.src;
  } else if (this.id === 'meme-3') {
    tag.src = this.src;
  } else {
    tag.src = this.src;
  }
}

[...document.getElementsByTagName('img')].forEach((element) => {
  element.addEventListener('click', setImg);
});
