const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require("constants");

const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": require("../img/logo.png")
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": require("../img/header-img.png")
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": require("../img/mid-page-accent.jpg"),
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src',siteContent["nav"]["img-src"]);
let navLinks = document.querySelectorAll('header nav a');
for (let i = 0; i < navLinks.length; i++){
    navLinks[i].textContent = siteContent['nav'][`nav-item-${i+1}`]
    navLinks[i].style.color = 'green'
}

let cta = document.querySelector('.cta')
cta.querySelector('h1').textContent = siteContent['cta']['h1']
cta.querySelector('button').textContent = siteContent['cta']['button']
cta.querySelector('img').src = siteContent['cta']['img-src']

let topContent = document.querySelectorAll('.main-content .top-content .text-content')
topContent[0].querySelector('h4').textContent = siteContent['main-content']['features-h4']
topContent[0].querySelector('p').textContent = siteContent['main-content']['features-content']
topContent[1].querySelector('h4').textContent = siteContent['main-content']['about-h4']
topContent[1].querySelector('p').textContent = siteContent['main-content']['about-content']
document.querySelector('#middle-img').src = siteContent['main-content']['middle-img-src']
let bottomContent = document.querySelectorAll('.main-content .bottom-content .text-content')
bottomContent[0].querySelector('h4').textContent = siteContent['main-content']['services-h4']
bottomContent[0].querySelector('p').textContent = siteContent['main-content']['services-content']
bottomContent[1].querySelector('h4').textContent = siteContent['main-content']['product-h4']
bottomContent[1].querySelector('p').textContent = siteContent['main-content']['product-content']
bottomContent[2].querySelector('h4').textContent = siteContent['main-content']['vision-h4']
bottomContent[2].querySelector('p').textContent = siteContent['main-content']['vision-content']

let contact = document.querySelectorAll('.contact h4, .contact p')
contact[0].textContent = siteContent['contact']['contact-h4']
contact[1].textContent = siteContent['contact']['address']
contact[2].textContent = siteContent['contact']['phone']
contact[3].textContent = siteContent['contact']['email']

document.querySelector('footer p').textContent = siteContent['footer']['copyright']

let lastA = document.querySelector('header nav').appendChild(document.querySelector('header nav a').cloneNode())
lastA.textContent = 'pasta'
let firstA = document.querySelector('header nav').prepend(document.querySelector('header nav a').cloneNode())
document.querySelector('header nav a').textContent = 'wallet'
document.querySelector('.cta-text button').addEventListener('click',()=>{
    let h1 = document.querySelector('.cta h1')
    let splitText = h1.textContent.split('')
    h1.textContent = ''
    for (let i = 0; i < splitText.length; i++){
        h1.innerHTML += `<span>${splitText[i]}</span>`
    }
    let allSpans = h1.querySelectorAll('span')
    let timerIndex = 0
    let animTimer = setInterval(() =>{
        let iSpan = allSpans[timerIndex]
        iSpan.style.color = 'white'
        iSpan.style.transition = 'all .5s ease'
        setTimeout(() => {
            iSpan.style.transition = 'all .2s ease'
            iSpan.style.color = 'black'

        },500)
        timerIndex++
        if (timerIndex >= allSpans.length){
            clearInterval(animTimer)
        }
    },50)
})