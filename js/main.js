//animation first page
const tl = gsap.timeline({defaults: {ease: 'power1.out'} });

tl.to('.text', {y:'0%', duration: 1, stagger: 0.25});
tl.to('.slider', {y: '-100%', duration: 1.5, delay: 0.5});
tl.to('.intro', {y: '-100%', duration: 1}, '-=1');
tl.fromTo('nav', {opacity: 0}, {opacity: 1, duration: 1});
tl.fromTo('.firstText', {opacity: 0}, {opacity: 1, duration: 1}, '-=1');

//smooth scroll
const more = document.querySelector('.more a')




const smoothScrool = (e) =>{
    e.preventDefault();
    window.scrollTo({
        top: document.querySelector(`#describe`).offsetTop,
        behavior: 'smooth'
    })
    console.log('siema eniu')
}

more.addEventListener('click', smoothScrool)

// global variables
const h1 = document.querySelector('h1');
const p = document.querySelector('p')
const lgRadio = document.querySelectorAll('input')
const label = document.querySelectorAll('label')
const button = document.querySelector('.landing button')

const divLanguage = document.querySelector('.language')
divLanguage.addEventListener('click', ()=>{
    lgRadio.forEach(element => { if(element.checked){
        label[0].classList.remove('active')
        label.forEach(el => {
            el.classList.remove('active')
        })

        // console.log(element.id);
        let id = element.id;
        // console.log(id)

        h1.textContent = language[`${id}`].welcome;
        p.textContent = language[`${id}`].p;
        button.textContent = language[`${id}`].button;

        label.forEach(element => {
            if(element.htmlFor == id){
                element.classList.add('active')
            }
            
        });
        // label[1].classList.add('label')

        element.checked = false;
    }
        
    });
})

//change language
const language = {
    pol: {
        welcome: "Cześć",
        p : "Nazywam sie",
        button: "Wiecej"
    },
    en: {
        welcome: "Hi",
        p : "My name is",
        button: "More"
    },
    de: {
        welcome: "Hallo",
        p : "Ich heisse",
        button: "Mehr"
    }
}



//cubic

const cube = document.querySelector('.cube')
const interestText = document.querySelector('.interest')

const classCube = ['show-front', 'show-right', 'show-back', 'show-left', 'show-top', 'show-bottom'];
const interests = ['Sport', 'Podróze', 'Góry', 'Morsowanie', 'Języki obce', 'Dobre jedzenie' ]
let count = 0;

const changeSide = ()=>{    
    if(count<=classCube.length-1){
        cube.classList.add(`${classCube[count]}`)
        interestText.textContent = interests[count]
    }else{
        cube.classList.remove(`${classCube[count-1]}`)
        count = 0;
        interestText.textContent = interests[count]
    }
    // console.log(count)
    cube.classList.remove(`${classCube[count-1]}`)
    count++
    

}

let intervalCube = setInterval(changeSide, 3000);
// intervalCube()
let flag = true;

function clearOrResume(){
    console.log(flag)
    if(flag){
        clearInterval(intervalCube);
        flag = !flag;
    }else{
        intervalCube = setInterval(changeSide, 3000);
        flag = !flag;
    }
}
// clearInterval(intervalCube)
// cube.addEventListener('click', clearInterval(intervalCube) )
cube.addEventListener('click', clearOrResume)