//document.addEventListener('click', (event) => {
//  event.preventDefault()
//})

//document.querySelector('h1').style.color = 'darkblue'

//Snippets

//console.log() //log -Tab or enter

//ctrl+shift+p - snippet- javascript
//console.log('DD')  //logm, tab-after finished typing

const getUser = async () => {
  //fetch data
  try {
    const res = await fetch('https://vk.com')
    const data = await res.json()
  } catch (e) {
    console.log(e)
  }
}

//const el = document.querySelector('#el') //getid

getUser()
