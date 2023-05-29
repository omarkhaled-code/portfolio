const hamIcon = document.querySelector(".wrapper-hamburger");
const navbar = document.querySelector(".navbar")

hamIcon.onclick = () => {
    hamIcon.classList.toggle("active");
    navbar.classList.toggle("active")
}



let section = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");
window.onscroll = () => {
    section.forEach(na => {
        let top = window.scrollY;
        let offset = na.offsetTop - 150;
        let height = na.offsetHeight;
        let id = na.getAttribute('id')
        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[ href*=' + id + ']').classList.add("active")

            })
        }
    })
    let header = document.querySelector("header")
    header.classList.toggle('sticky', window.scrollY > 100)
    hamIcon.classList.remove("active");
    navbar.classList.remove("active")

}

let shuffles = document.querySelectorAll(".spans span");
let imgs_filter = document.querySelectorAll(".portfolio-box")

shuffles.forEach((e) => {
    e.addEventListener("click", removeactive)
    e.addEventListener("click", filter)
})

function removeactive() {
    shuffles.forEach((e) => {
        e.classList.remove("active")
        this.classList.add("active")
    })
}
function filter() {
    imgs_filter.forEach((img) => {
        img.style.display = "none"
    })
    document.querySelectorAll(this.dataset.li).forEach((e) => {
        e.style.display = 'flex'
    })
}
let Read_Less = document.querySelector(".less")
Read_Less.style.display = "none"
let Read_More = document.querySelector(".more")
Read_More.onclick = function () {
    let moreText = document.createElement("p")
    let moreContent = document.createTextNode(`As a dedicated front-end developer, my passion for creating visually stunning and user- friendly
    interfaces is matched only by my attention to detail. With years of experience under
    my belt, I am proud to have the skills to deliver high-quality results for any project, no matter
    the scope.`)
    moreText.appendChild(moreContent)
    moreText.className = "textm"
    document.querySelector(".about-content .info").appendChild(moreText)
    Read_Less.style.display = "block"
    Read_More.style.display = "none"
}
Read_Less.onclick = function () {
    document.querySelector(".textm").remove()
    Read_More.style.display = "block"
    Read_Less.style.display = "none"
}




