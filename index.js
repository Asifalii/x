let mylead = []

const inputEl = document.getElementById("input-El")
const btnEl = document.getElementById("btn-El")
const ulEl = document.getElementById("ul-El")
const deleteEl = document.getElementById("delete-El")
const tabBtn = document.getElementById("save-El")
// localStorage.clear()

const leadfromlocalStorage =   JSON.parse(localStorage.getItem("myleds")) 

if(leadfromlocalStorage){
    mylead = leadfromlocalStorage
    render(mylead)
}


tabBtn.addEventListener("click", function(){
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
         mylead.push(tabs[0].url) 
         localStorage.setItem("myleds", JSON.stringify(mylead))
         render(mylead)

  })
})

function render(lead){
    let listItems = ""
    for(let i = 0; i < lead.length; i++){
           listItems += `
                        <li>
                        <a target='_blank' href='${lead[i]}'>${lead[i]}</a>
                        </li>
                        `
    }
        ulEl.innerHTML = listItems
    
    }


deleteEl.addEventListener("dblclick" , function(){
    localStorage.clear()
    mylead = []
    render(mylead)
})



btnEl.addEventListener("click",function(){
    mylead.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myleds", JSON.stringify(mylead))
    render(mylead)
})

