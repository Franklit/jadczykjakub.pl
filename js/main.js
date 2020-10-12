//animation first page
// const tl = gsap.timeline({defaults: {ease: 'power1.out'} });

// tl.to('.text', {y:'0%', duration: 1, stagger: 0.25});
// tl.to('.slider', {y: '-100%', duration: 1.5, delay: 0.5});
// tl.to('.intro', {y: '-100%', duration: 1}, '-=1');
// tl.fromTo('nav', {opacity: 0}, {opacity: 1, duration: 1});
// tl.fromTo('.firstText', {opacity: 0}, {opacity: 1, duration: 1}, '-=1');

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

const lgRadio = document.querySelectorAll('input')
const label = document.querySelectorAll('label')

// global variables from top
const h1Top = document.querySelector('h1');
const pTop = document.querySelector('p')
const aTop = document.querySelector('a span')


// variables from Describe
const h1Desc = document.querySelector('.describe h1') 
const h2Desc = document.querySelectorAll('.describe h2')
const h3Desc = document.querySelectorAll('.describe h3')
// variables from Portfolio

const h1Port = document.querySelector(".portfolio h1")



const divLanguage = document.querySelector('.language')
divLanguage.addEventListener('click', ()=>{
    lgRadio.forEach(element => { if(element.checked){
        //remove last active
        label[0].classList.remove('active')
        label.forEach(el => {
            el.classList.remove('active')
        })


        let id = element.id;    

        //Top page
        h1Top.textContent = languages.Top[`${id}`].h1Top;
        pTop.textContent = languages.Top[`${id}`].pTop;
        aTop.textContent = languages.Top[`${id}`].aTop
        

        //describe page
        h1Desc.textContent = languages.Desc[`${id}`].h1Desc;

        h2Desc.forEach((element, index) => { 
            element.textContent = languages.Desc[`${id}`].h2Desc[index];   
        });


        h3Desc.forEach((element, index) => {
            element.textContent = languages.Desc[`${id}`].h3Desc[index];
        });

        // portfolio page
        h1Port.textContent = languages.Port[`${id}`].h1Port

        label.forEach(element => {
            if(element.htmlFor == id){
                element.classList.add('active')
            }
            
        });

        element.checked = false;
    }
        
    });
})



const languages = {
    Top: {
        pol: {
            h1Top: "Cześć",
            pTop : "Nazywam sie",
            aTop: "Zobacz Wiecej"
        },
        en: {
            h1Top: "Hi",
            pTop : "My name is",
            aTop: "See More"
        },
        de: {
            h1Top: "Hallo",
            pTop : "Ich heisse",
            aTop: "Sieh Mehr"
        }
        },
    Desc: {
            pol: {
                h1Desc: "Co potrafie",
                h2Desc: ["Tworze strony internetowe", "Języki Obce"],
                h3Desc: ["Nowoczene", "Responsywne", "Estetyczne", "Niemiecki B1", "Angielski C1"],
                

            },
            en: {
                h1Desc: "What can I do",
                h2Desc: ["I create websites", "foreign language"],
                h3Desc: ["modern", "Responsive", "aesthetic", "German B1", "English C1"],

            },
            de: {
                h1Desc: "Was kann Ich machen",
                h2Desc: ["Ich erstelle Websites","fremdsprachen"],
                h3Desc: ["modern", "Reactionschnell", "ästhetisch", "Deutsch B1", "Englisch C1"],
            }
        },
    Port: {
        pol: {
            h1Port: "Moje Projekty",

        },
        en: {
            h1Port: "My Projects",


        },
        de: {
            h1Port: "Meine Projekte",

        }
    },

}





//cubic interests

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

cube.addEventListener('click', clearOrResume)