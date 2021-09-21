//get URL
let URL = "https://api.chucknorris.io/jokes/random"
console.log(URL)

fetch(URL)
    .then(res => res.json())
    .then(convertedData => {
        //console.log(convetedData)
        let {categories, created_at, icon_url, id, updated_at, url, value} = convertedData
        //console.log(value)

        let grabCharContainer = document.querySelector('#char-container')
        let createH1Tag = document.createElement('h1')
        createH1Tag.innerHTML = value
        grabCharContainer.appendChild(createH1Tag)
        

    }) 