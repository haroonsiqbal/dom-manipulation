/*
    This code will only return the first section component
    even though there are three components with the same
    class
*/
const sectionEls = document.querySelectorAll(".article__section")

sectionEls.forEach(
    (currentNode) => { currentNode.classList.add("goldBackground") }
)

/*
    This code will only return the third section component
*/
const footerEl = document.querySelector(".article__footer")

/*
    Get reference to the section with the class of `smallText`
    and remove that class. Then add a new class of `largeText`
*/
const smallTextEl = document.querySelector(".smallText")
smallTextEl.classList.remove("smallText")
smallTextEl.classList.add("largeText")

const articleBody = document.querySelector(".article__body")
articleBody.classList.add("blueText")

const articleHeader = document.querySelector(".article__header")
articleHeader.classList.add("fatBorder")

