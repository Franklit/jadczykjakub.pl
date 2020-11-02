
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
const h1Desc = document.querySelector('.describe h1') ;
const h2Desc = document.querySelectorAll('.describe h2');
const h3Desc = document.querySelectorAll('.describe h3');
const pDesc = document.querySelectorAll('.describe p');
// variables from Portfolio
const h1Port = document.querySelector(".portfolio h1");
const h4Port = document.querySelectorAll('.portfolio h4');
const pPort = document.querySelectorAll('.portfolio p');
//variables contact
const quote = document.querySelector('.contact .quote');
const h1Cont = document.querySelector('.contact .h1Cont');
const h2Cont = document.querySelector('.contact h2');

const divLanguage = document.querySelector('.languageChoice');
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
        pDesc.forEach((element, index) => {
            element.textContent = languages.Desc[`${id}`].pDesc[index];
        });
        // portfolio page
        h1Port.textContent = languages.Port[`${id}`].h1Port;
        
        h4Port.forEach((element, index) => {
            element.textContent = languages.Port[`${id}`].h4Port[index];
        });
        pPort.forEach((element, index) => {
            element.textContent = languages.Port[`${id}`].pPort[index];
        });

        //contact page
        quote.textContent = languages.Cont[`${id}`].quote;
        h1Cont.textContent = languages.Cont[`${id}`].h1Cont;
        h2Cont.textContent= languages.Cont[`${id}`].h2Cont;
        if(id === "pol"){
            interests = interestsPl;
        }else if(id === "de"){
            interests = interestsDe;
        }else if(id === 'en'){
            interests = interestsEn;
        }


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
                h1Desc: "Co potrafie?",
                h2Desc: ["Tworze strony internetowe", "Języki Obce"],
                h3Desc: ["Nowoczene", "Responsywne", "Estetyczne", "Niemiecki B1", "Angielski C1"],
                pDesc: ["Tworząc projekty, zdobywam doświadczenie rozszerzając swoją wiedzę o nowe biblioteki/frameworki. Zwracam uwage na czytelność kodu, ulepszając go z każdym nowym projektem.", "Korzystając z media queries, strony tworze tak by dostosowywały się do różnych rozdzielczości ekranów. Strony są czytelne dla wszystkich urządzeń które je przeglądają.", "Korzystając z programu Photoshop edytuje/tworze grafiki tak, by ich zawartość wpasowała się w moje projekty. Dużą wage przywiązuje do spójności projektów od strony wizualnej.", "Niemieckiego ucze się od 12 miesięcy, krótka ale intensywna nauka. Komunikacja na poziomie średnio-zaawansowanym.","3 miesiące mieszkania z niemiecką rodziną." , "Angielskiego ucze sie od wielu lat. W tym języku na codzien oglądam filmy oraz czytam książki.",  "2x 4 miesiące pracy w USA"],
                

            },
            en: {
                h1Desc: "My skills",
                h2Desc: ["I create websites", "foreign language"],
                h3Desc: ["modern", "Responsive", "aesthetic", "German B1", "English C1"],
                pDesc: ["By creating projects, I gain experience by expanding my knowledge with new libraries / frameworks. I pay attention to the readability of the code, improving it with each new project.", "By using media queries, pages are created to adapt to different screen resolutions. The pages are readable by all devices that view them.", "Using Photoshop, I edit / create graphics so that their content fits into my projects. He pays a lot of attention to the visual consistency of the projects.", "I have been learning German for 12 months, a short but intensive study. Intermediate level communication",   "3 months of living with a German family.", "I have been learning English for many years. I watch movies and read books on a daily basis in this language.",  "2x 4 months of work in the USA"],

            },
            de: {
                h1Desc: "meine Fähigkeiten",
                h2Desc: ["Ich erstelle Websites","fremdsprachen"],
                h3Desc: ["modern", "Reactionschnell", "ästhetisch", "Deutsch B1", "Englisch C1"],
                pDesc: ["Durch das Erstellen von Projekten sammle ich Erfahrung, indem ich mein Wissen mit neuen Bibliotheken / Frameworks erweitere. Ich achte auf die Lesbarkeit des Codes und verbessere ihn mit jedem neuen Projekt.", "Mithilfe von Medienabfragen werden Seiten erstellt, um sie an unterschiedliche Bildschirmauflösungen anzupassen. Die Seiten können von allen Geräten gelesen werden, die sie anzeigen.", "Mit Photoshop bearbeite / erstelle ich Grafiken so, dass ihr Inhalt in meine Projekte passt. Er achtet sehr auf die visuelle Konsistenz der Projekte.", "Ich lerne seit 12 Monaten Deutsch, ein kurzes, aber intensives Studium. Kommunikation auf mittlerer Ebene.","3 Monate bei einer deutschen Familie leben.", "Ich lerne seit vielen Jahren Englisch. Ich schaue täglich Filme und lese Bücher in dieser Sprache.",  "2x 4 Monate Arbeit in den USA"],
            }
        },
    Port: {
        pol: {
            h1Port: "Moje Projekty",
            h4Port: ['Konwerter Walut', 'Strona Fizjoterapia', 'Strona Handmade', 'In Progress'],
            pPort: ['Konwerter sprawdzający relacje dwóch dowolnych walut. Aktualne kursy walut z wykorzystaniem API.', 'Zagospodarowanie przestrzeni z użyciem Flexboxa. Nawigacja śledząca aktualną pozycje uzyskana za pomocą JavaScript.', 'aleria uzyskana za pomocą biblioteki Lightbox. Form validation frond-end oraz nawigacja śledząca pozycje za pomocą Javascript.', '...'],

        },
        en: {
            h1Port: "My Projects",
            h4Port: ['Currency Converter', 'Web Physiotherapy', 'Web Handmade', 'In Progess'],
            pPort: ['Converter checking relations of any two currencies. Current exchange rates using API.', 'Development of space with the use of Flexbox. Navigation tracking the current position obtained using JavaScript.', ' Gallery obtained with the Lightbox library. Form validation front-end and position tracking using Javascript. ', '...'],

        },
        de: {
            h1Port: "Meine Projekte",
            h4Port: ['Converter', 'Web Physiotherapie', 'Web Handgemacht ', 'In progress'],
            pPort: ['Konverter prüft die Beziehungen zweier beliebiger Währungen. Aktuelle Wechselkurse über API.', 'Raumentwicklung mit Flexbox. Navigation zur Verfolgung der aktuellen Position, die mit JavaScript ermittelt wurde.', 'Galerie mit der Lightbox-Bibliothek erhalten. Formularvalidierung Front-End und Positionsverfolgung mit Javascript.', '...'],
        }
    },
    Cont: {
        pol: {
            quote: "Kiedy uczeń jest gotowy, pojawi się mistrz",
            h1Cont: "zainteresowania",
            h2Cont: "Kontakt",
        },
        en: {
            quote: "When the student is ready, the master appears",
            h1Cont: "interests",
            h2Cont: "Contact",            
        },
        de: {
            quote: "Wenn der Lehrling bereit ist, erscheint der Meister",
            h1Cont: "interessen",
            h2Cont: "Kontakt",
        }
        },

}

//cubic interests

const cube = document.querySelector('.cube')
const interestText = document.querySelector('.interest')

const classCube = ['show-front', 'show-right', 'show-back', 'show-left', 'show-top', 'show-bottom'];

let interests = ['Sport', 'Podróze', 'Góry', 'Morsowanie', 'Języki obce', 'Dobre jedzenie'];
let interestsPl = ['Sport', 'Podróze', 'Góry', 'Morsowanie', 'Języki obce', 'Dobre jedzenie'];
let interestsEn = ['Sport', 'Travel', 'Mountains', 'Cold Bath', 'Foreign Languages', 'Good Food'];
let interestsDe = ['Sport', 'Reise', 'Berge', 'Kaltes Bad', 'Fremdsprachen', 'Gutes Essen'];
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
    cube.classList.remove(`${classCube[count-1]}`)
    count++
    

}

let intervalCube = setInterval(changeSide, 3000);
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



