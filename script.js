// Adiciona o texto ao meme logo ao ser digitado
function printText() {
  const text = document.getElementById('text-input').value;
  document.getElementById('meme-text').innerText = text;
}

document.getElementById('text-input').addEventListener('input', printText);

// Adiciona a imagem ao meme ao ser selecionada
function printImg(event) {
  const img = URL.createObjectURL(this.files[0]);
  document.getElementById('meme-image-container').style.backgroundImage = `url(${img})`
}

document.getElementById('meme-insert').addEventListener('input', printImg);
