const axios = require('axios')


axios
    .get('https://rickandmortyapi.com/api/character/6')
    .then(
        (response) => response.data,
        (reason) => `1: ${reason.response.data.error}`
    )
    .then(
        (data) => console.log(data),
        ({ response }) => console.log(
            `2: ${response.data.error}`
        )
    )
    .catch(
        (axiosError) => console.log(axiosError)
    )
    .finally(
        () => console.log("Hello World!")
    )