const THEMES = {
    light: {
        Toggle: 'hsl(230, 22%, 74%)',
        BG: 'hsl(0, 0%, 100%)',
        BGtop: 'hsl(225, 100%, 98%)',
        CardBG: 'hsl(227, 47%, 96%)',
        Text: 'hsl(228, 12%, 44%)',
        Text2: 'hsl(230, 17%, 14%)',
    },
    dark: {
        Toggle: 'linear-gradient(hsl(210, 78%, 56%), hsl(146, 68%, 55%))',
        BG: 'hsl(230, 17%, 14%)',
        BGtop: 'hsl(232, 19%, 15%)',
        CardBG: 'hsl(228, 28%, 20%)',
        Text: 'hsl(228, 34%, 66%)',
        Text2: 'hsl(0, 0%, 100%)',
    }
}

const toggle = document.querySelector(".header-mode-toggle")
const toggleTexts = document.querySelectorAll(".header-mode-text")

toggle.addEventListener("change", toggleMode)

function toggleMode(e) {
    const mode = e.target.checked? 'dark' : 'light'
    renderMode(mode)
    toggleTexts.forEach(text => text.classList.toggle("hidden"))
}

function renderMode(mode) {
    const root = document.querySelector(":root")
    const themes = THEMES[`${mode}`]
    const keys = Object.keys(themes)
    keys.forEach(key => {
        root.style.setProperty(`--${key}`, `${themes[key]}`)
    })    
}