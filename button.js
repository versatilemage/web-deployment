let myleads = []
const inputEl = document.getElementById("input-el")
const ulel = document.getElementById("ul-l")
const inputBtn = document.getElementById("input-btn")
const stopanimation = document.getElementById("input-btn1")
const container = document.getElementById ("contain")
const deletebtn = document.getElementById("input-btn3")
const tabbtn = document.getElementById("input-btn2")

const leadsfromlocalstorage = JSON.parse(localStorage.getItem("myleads"))
console.log(leadsfromlocalstorage)

if (leadsfromlocalstorage) {
    myleads = leadsfromlocalstorage
    render(myleads)
}

console.log(localStorage.getItem("myleads"))

function render (leads){
    let listitems = ""
    for (let i=0 ;i < leads.length; i++) {
        listitems +=`
        <li>
            <a target='_blank' href='${leads[i]}'>
                ${leads[i]}
            </a>
        </li>`
    console.log(listitems)
}

ulel.innerHTML = listitems
}

stopanimation.addEventListener("click",function(){
    container.style.animationPlayState="paused"
})

stopanimation.addEventListener("dblclick",function(){
    container.style.animationPlayState="running"
})

deletebtn.addEventListener("click",function(){
    localStorage.clear()
    myleads = []
    render(myleads)
})

inputBtn.addEventListener("click", function(){
    myleads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myleads",JSON.stringify(myleads))
    render(myleads)
})

tabbtn.addEventListener("click",function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myleads.push(tabs[0].url)
        localStorage.setItem("myleads",JSON.stringify(myleads))
        render(myleads)
    })    
})