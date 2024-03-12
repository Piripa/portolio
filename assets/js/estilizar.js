
function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 150 * i)
    });

}
function typeWriterArray(elemento,descricoes){
        descricoes.forEach((descricao,i) => {
            setTimeout(()=>{
                elemento.innerHTML = descricao
            }, 2000 * i)
            
        });
    
    
       
}



const titulo = document.querySelector('h1');
const descricoes = [' Vinicius Alessandro',' studying Computer Engineering',' Back-End Development']
const texto = document.getElementById('textoAlternador')
typeWriter(titulo);
typeWriterArray(texto,descricoes)