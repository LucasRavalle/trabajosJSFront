window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    titulo.addEventListener('mouseover', function(){
        titulo.style.color = 'red'
    })
    titulo.addEventListener('mouseout', function(){
        titulo.style.color = 'black'
    })

    let input = document.querySelector("#titulo")
    let estadoSecreto= 0

    const key = (key)=>{
        switch(true){
            case estadoSecreto=== 0 && key.toLowerCase()==="s": 
                estadoSecreto++
                break
            case estadoSecreto=== 1 && key.toLowerCase()==="e": 
                estadoSecreto++
                break
            case estadoSecreto=== 2 && key.toLowerCase()==="c": 
                estadoSecreto++
                break
            case estadoSecreto=== 3 && key.toLowerCase()==="r": 
                estadoSecreto++
                break
            case estadoSecreto=== 4 && key.toLowerCase()==="e": 
                estadoSecreto++
                break
            case estadoSecreto=== 5 && key.toLowerCase()==="t": 
                estadoSecreto++
                break
            case estadoSecreto=== 6 && key.toLowerCase()==="o": 
                alert("Secreto magico") 
                estadoSecreto=0
                break
            
            default:
                estadoSecreto=0
                break
        }
    }


    input.addEventListener("keypress",(event)=>{
        console.log(event.key)
        key(event.key)
        

    })

}