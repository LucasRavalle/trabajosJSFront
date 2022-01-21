window.addEventListener('load', () => {
    console.log('vinculacion exitosa');
    const qs = (tag) => {
        return document.querySelector(tag)
    }

    const funcValidate = (obj) => {
        let arr = Object.values(validate)
        if(!arr.includes(false)){
            button.disabled= false
            button.classList.remove('bttn-invalid')
        } else{
            button.disabled = true
            button.classList.add('bttn-invalid')
        }
    }
   
    const form = qs("form")
    const inputs = document.querySelectorAll("input")
    const small = document.querySelectorAll('small') 
    const title = qs("#title")
    const smallTitle = qs('small.title')
    const rating = qs('#rating')
    const smallRating = qs('.rating')
    const awards = qs('#awards')
    const smallAwards = qs('.awards')
    const date = qs('#date')
    const smallDate = qs('small.date')
    const length = qs('#length')
    const smallLength = qs('.length')
    const genre = qs('#genre_id')
    const smallGenre = qs('.genre_id')
    const button = qs('button.botonAgregar')
    

    const validate = {
        title: false,
        rating: false, 
        awards: false,
        length: false
    }
    
    button.disabled = true
    button.classList.add('bttn-invalid')

    title.focus()

    title.addEventListener('input', (e) => {
        if(e.target.value.length < 3){
            title.classList.add('is-invalid')
            title.classList.remove('is-valid')
            smallTitle.innerHTML = 'El titulo debe tener más de 3 caracteres'
            validate.title = false
        } else{
            title.classList.remove('is-invalid')
            title.classList.add('is-valid')
            smallTitle.innerHTML = ''
            validate.title= true
        }

        funcValidate(validate)
    })
    
    rating.addEventListener('input', (e) => {
        if(e.target.value < 0 || e.target.value > 10){
           rating.classList.add('is-invalid')
           rating.classList.remove('is-valid')
           smallRating.innerHTML = 'La calificación debe estar entre 0 y 10'
           validate.rating = false
        } else{
           rating.classList.remove('is-invalid')
           rating.classList.add('is-valid')
           smallRating.innerHTML = ''
           validate.rating = true
        }

        funcValidate(validate)
    })
    
    awards.addEventListener('input', (e) => {
        if(e.target.value < 0 || e.target.value > 10){
           awards.classList.add('is-invalid')
           awards.classList.remove('is-valid')
           smallAwards.innerHTML = 'La cantidad de premios debe estar entre 0 y 10'
           validate.awards = false
        } else{
           awards.classList.remove('is-invalid')
           awards.classList.add('is-valid')
           smallAwards.innerHTML = ''
           validate.awards = true
        }

        funcValidate(validate)
    })

    length.addEventListener('input', (e) => {
        if(e.target.value < 60 || e.target.value > 360){
           length.classList.add('is-invalid')
           length.classList.remove('is-valid')
           smallLength.innerHTML = 'La duración debe estar entre 60 y 360 minutos'
           validate.length = false
        } else{
           length.classList.remove('is-invalid')
           length.classList.add('is-valid')
           smallLength.innerHTML = ''
           validate.length = true
        }

        funcValidate(validate)
    })

    genre.addEventListener('input', (e) => {
        if(e.target.value<1 || e.target.value>12){
            genre.classList.remove("is-valid")
            genre.classList.add("is-invalid")
            smallGenre.innerHTML= "Debes elegir una opcion"
            smallGenre.classList.add("is-invalid")
            validate.genre=false
        }else{
            genre.classList.remove("is-invalid")
            genre.classList.add("is-valid")
            smallGenre.innerHTML=""
            smallGenre.classList.remove("is-invalid")
            validate.genre=true
        }

        funcValidate(validate)
    })
    

    form.addEventListener("submit", (e) => {
        
        for( let i = 0; i < inputs.length; i++){
            if(inputs[i].value === ""){
                e.preventDefault()
                inputs[i].classList.add('is-invalid')
                small[i].innerHTML = 'Este campo no puede estar vacío'
            } else if (inputs[i].classList.contains('is-invalid')){
                inputs[i].classList.remove('is-invalid')
                small[i].innerHTML = ""
            }
        } 

        
        if(title.value.length < 3){
            e.preventDefault()
                title.classList.add('is-invalid')
                title.classList.remove('is-valid')
                smallTitle.innerHTML = 'El titulo debe tener más de 3 caracteres'
            } else{
                title.classList.remove('is-invalid')
                title.classList.add('is-valid')
                smallTitle.innerHTML = ''
        }

        if(rating.value < 0 || rating.value > 10){
            e.preventDefault()
            rating.classList.add('is-invalid')
            smallRating.innerHTML = 'La calificación debe estar entre 0 y 10'
        } 

        if(awards.value < 0 || awards.value > 10){
            e.preventDefault()
            awards.classList.add('is-invalid')
            smallAwards.innerHTML = 'La cantidad de premios debe estar entre 0 y 10'
        }

        if(length.value < 60 || length.value > 360){
            e.preventDefault()
            length.classList.add('is-invalid')
            smallLength.innerHTML = 'La duración debe estar entre 60 y 360 minutos'
        }

        if(genre.value === ""){
            e.preventDefault()
                genre.classList.add('is-invalid')
                genre.classList.remove('is-valid')
                smallGenre.innerHTML = 'Debes seleccionar un género'
            } else{
                genre.classList.remove('is-invalid')
                genre.classList.add('is-valid')
                smallGenre.innerHTML = ''
        }

        
        })


    
    date.addEventListener("input",(e)=>{
        const now = new Date() 
        let dateMovie = Date.parse(e.target.value)
        let actual = Date.parse(now)
    
           
        if (actual<dateMovie){
            date.classList.remove("is-valid")
            date.classList.add("is-invalid")
            smallDate.innerHTML= "La fecha tiene que ser anterior a la actual"
            smallDate.classList.add("is-invalid")
            validate.date=false
        }else{
            date.classList.remove("is-invalid")
            date.classList.add("is-valid")
            smallDate.innerHTML=""
            smallDate.classList.remove("is-invalid")
            validate.date=true
        }
        funcValidate(validate)
    })
})