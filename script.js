let sprite = document.getElementById('sprite')
let n = sprite.dataset.score

sprite.addEventListener('click', ()=>{
    sprite.dataset.score = n++

    if (n == 15) {
        alert("Vous avez Gagné")
        n = 0
    }
})
