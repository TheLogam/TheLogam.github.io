function showNext(step) {
    // Mostra a section correspondente
    var section = document.getElementById("section" + step);
    var imagem = document.getElementById('img')
    imagem.src = 'gatotriste.jpg'
    section.classList.add("visible");

    // Mostra a próxima div, se houver
    var nextDiv = document.getElementById("div" + (step + 1));
    if (nextDiv) {
      nextDiv.classList.add("visible");
    }
  }