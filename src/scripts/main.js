AOS.init();

const paper = document.querySelectorAll('.letter__container__paper')
const triangle = document.getElementsByClassName('letter__container__top')[0]


const resetAnimations = () => {
       paper[1].classList.remove('letter__container__paper--second-active');
       const allChildrens = [...paper[0].children, ...paper[1].children];
       allChildrens.forEach(child => {
           child.style.opacity = 0;
       },0);
};

let btnClicked = null
const yes = document.getElementById('yes').addEventListener('click', () => {
    resetAnimations();
    btnClicked = 'yes'
    paper.forEach(p => {
        p.style.display = 'none'; 
    });
});


const no = document.getElementById('no').addEventListener('click', () => {
    resetAnimations();
    btnClicked = 'no'
    paper.forEach(p => {
        p.style.display = 'none'; 
    });

});

const letter = document.getElementById('letter').addEventListener('click', ()=>{

    if(!paper[1].classList.contains('letter__container__paper--second-active') &&  btnClicked ==  null){
        triangle.classList.toggle('letter__container__top--is-active')
        paper[0].classList.toggle('letter__container__paper--is-active')
    
        paper[0].addEventListener('animationend', () => {
            if (paper[0].classList.contains('letter__container__paper--is-active')) {
                paper[1].classList.add('letter__container__paper--second-active')
            }
    
            const allChildrens = [];
            const childrens1 = paper[0].children;
            allChildrens.push(...Array.from(childrens1));
    
            const childrens2 = paper[1].children;
            allChildrens.push(...Array.from(childrens2));
    
            allChildrens.forEach(child => {
                child.style.opacity = 1;
            });
        }, { once: true });
    }
})



// -----------------------------------------------------------------------------------------------------------------
const birthday = new Date('Dec 12, 2024 19:30:00')
const timeStampBirthday = birthday.getTime()

const interval = setInterval(function(){
    const currentdate = new Date()
    const timeStampCurrent = currentdate.getTime()
    const distance = timeStampBirthday - timeStampCurrent

    const day = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('time').innerHTML = `${day}d ${hours}h ${minutes}m ${seconds}s`

    if(distance < 0){
        clearInterval(interval)
        document.getElementById('time').innerHTML = `Evendo expirado`
    }

},1000)

