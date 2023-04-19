// navbar

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
        if (scrollY >= 200) {
                navbar.classList.add('background');
        } else{
                navbar.classList.remove('background');  
        }
        // console.log('scroll');
})

// Image Collage Blur Effect

const collageImage = [...document.querySelectorAll('.collage-img')];

collageImage.map( (item, i) => {
        item.addEventListener('mouseover', () => {
                collageImage.map((image, index) => {
                        if(index != i){
                                image.style.filter = `blur(15px)`;
                                item.style.zIndex = 2;
                        }
                })
        })
} )

collageImage.map( (item, i) => {
        item.addEventListener('mouseleave', () => {
                collageImage.map((image, index) => {
                        if(index != i){
                                image.style = null;
                        }
                })
        })
} )

