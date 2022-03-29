// Adiciona o texto ao meme logo ao ser digitado
function printText() {
  const text = document.getElementById('text-input').value;
  document.getElementById('meme-text').innerText = text;
}

document.getElementById('text-input').addEventListener('input', printText);

// Adiciona a imagem ao meme ao ser selecionada
function printImg() {
  const img = URL.createObjectURL(this.files[0]);
  document.getElementById('meme-image-container').style.backgroundImage = `url(${img})`;
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

for (const btn of document.getElementsByTagName('button')) {
  btn.addEventListener('click', customer);
}
