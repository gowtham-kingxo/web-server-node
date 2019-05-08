console.log('Client side javascript file is loaded!')



const weatherForm = document.querySelector('form')
const searchElement = document.querySelector('input')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = searchElement.value
    
        const weatherURL = 'http://localhost:3000/weather?address=' + location

        fetch(weatherURL)
        .then((response) => {
            response.json().then(data => {
                if(data.error) {
                    console.log('error', data.error)
                    return;
                }
    
                console.log('location', data.location)
                console.log('forecast', data.forecast)
            })
        })


})