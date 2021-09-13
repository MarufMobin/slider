const img = [
    'img/pic-1.jpg',
    'img/pic-2.jpg',
    'img/pic-3.jpg',
    'img/pic-4.jpg',
    'img/pic-5.jpg',
    'img/pic-6.jpg',
    'img/pic-7.jpg',
    'img/pic-8.jpg',
    'img/pic-9.jpg',
    'img/pic-10.jpg',
    'img/pic-11.jpg',
    'img/pic-12.jpg',
    'img/pic-13.jpg'
];

let imgInit = 0;
const imgSlider = document.getElementById('slider-img')
setInterval( () =>{
    if( imgInit >= img.length){
        imgInit = 0;
    }
    const imgUrl = img[imgInit];
    imgSlider.setAttribute( "src", imgUrl);
    imgInit++;

}, 1500)