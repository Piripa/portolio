
function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 150 * i)
    });

}
function typeWriterArray(elemento, descricoes) {
    let i = 0;
    let j = 0;
    const interval = setInterval(() => {
        if (i < descricoes.length) {
            const descricao = descricoes[i];
            const letras = descricao.split('');
            if (j < letras.length) {
                elemento.innerHTML += letras[j];
                j++;
            }
            else {
                elemento.innerHTML = '';
                j = 0;
                i++;
            }
        }
        else {
            clearInterval(interval);
            typeWriterArray(elemento, descricoes);
        }
    }, 200);
}




const titulo = document.querySelector('h1');
const descricoes = [' Vinicius Alessandro', ' studying Computer Engineering', ' Back-End Development']
const texto = document.getElementById('textoAlternador')
typeWriter(titulo);
typeWriterArray(texto, descricoes)