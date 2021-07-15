
var liens = document.querySelectorAll('.liens a')

liens.forEach(lien =>{
    lien.addEventListener('click',function(){
        var to = 'http://localhost:5050/'+this.innerText
        $.get(to,(data)=>{
            $('.container').html(data)
        })
    })
})