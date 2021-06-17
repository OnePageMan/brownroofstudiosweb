document.getElementById('hamburger').addEventListener(
    'click', ()=>{
        document.getElementById('lisLst').style.display = 'block'
        document.getElementById('close').style.display = 'block'
        document.getElementById('hamburger').style.display = 'none'
    }
)

document.getElementById('close').addEventListener(
    'click', ()=>{
        document.getElementById('lisLst').style.display = 'none'
        document.getElementById('close').style.display = 'none'
        document.getElementById('hamburger').style.display = 'block'
    }
)