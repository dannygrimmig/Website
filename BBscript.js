//get URL of API
let URL = "https://breakingbadapi.com/api/characters"
console.log(URL)

//go and fetch the URL
fetch(URL)
    //once the URL is fetched, set it equal to res, convert to json
    .then(res => res.json())
    .then(convertedData => {
        console.log(convertedData)
        
        let results = convertedData
        console.log(results)
        //console.log(info)

        let grabCharContainer = document.querySelector('#char-container')

        for (let i = 0; i < results.length; i++) {
            const { name, occupation, img} = results[i]
            let createImg = document.createElement('img')
            let createParaTag = document.createElement('p')
            let createH1Tag = document.createElement('h1')

            createH1Tag.innerHTML = name
            createParaTag.innerHTML = `${name} is a ${occupation}`
            createImg.setAttribute('src', img)



            grabCharContainer.appendChild(createH1Tag)
            grabCharContainer.appendChild(createParaTag)
            grabCharContainer.appendChild(createImg)
        }
    })