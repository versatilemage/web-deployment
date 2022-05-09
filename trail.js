const welcomeEl = document.getElementById("welcome-el")
function greetuser (welcome,user,words) {
    welcomeEl.textContent = `${welcome}, ${user}, ${words}`
}

greetuser("how you doing","ashu","munda")

function getfirst (arr) {
    return arr[0]
}

let firstcard = getfirst([10, 2, 5])
console.log(firstcard)



