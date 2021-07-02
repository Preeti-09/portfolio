import About from './CardData/About/About'
import Skills from './CardData/Skills/Skills'
import Awards from './CardData/Awards/Awards'
import Contact from './CardData/Contact/Contact'
import Projects from './CardData/Projects/Projects'

export const cards = [
    {
        "id": "/about",
        "title": "A Little About Me",
        "content": "This is Preeti Ranjan Singh from India.",
        "image": "/about.jpg",
        "component": <About />
    },
    {
        "id": "/skills",
        "title": "Skills",
        "content": "All the technical skills I have learnt till now",
        "image": "/skills.jpg",
        "component": <Skills />
    },
    {
        "id": "/projects",
        "title": "Projects",
        "content": "Checkout the projects I have built so far.",
        "image": "/projects.jpg",
        "component": <Projects />
    },
    {
        "id": "/awards",
        "title": "Awards & Certifications",
        "content": "Achievements in my life",
        "image": "/awards.jpg",
        "component": <Awards />
    },
    {
        "id": "/contact",
        "title": "Contact Details",
        "content": "Contact me (^.^)",
        "image": "/contact.jpg",
        "component": <Contact />
    },
    {
        "id": "/resume",
        "title": "Resume",
        "content": "Download resume",
        "image": "/resume.png",
        "component": ""
    }
]
