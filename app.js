let images = document.querySelectorAll('.containerImg');
const btnPreceed = document.querySelector('.preceed i');
const btnNext = document.querySelector('.next i');

let imgActive = 0;
images[0].classList.add('active')

btnNext.addEventListener('click',function(){
    imgActive++
    if(imgActive==images.length){
        imgActive = 0;
    }
    images.forEach(image => {
        image.classList.remove('active')
    })
    images[imgActive].classList.add('active')
})

btnPreceed.addEventListener('click',function(){
    imgActive--
    if(imgActive<0){
        imgActive = images.length-1;
    }
    images.forEach(image => {
        image.classList.remove('active')
    })
    images[imgActive].classList.add('active')
})