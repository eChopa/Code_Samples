let requestParams = {
    method: "GET",
    headers : {
        "Content-type": "application/json"
    }
}
let request = new Request('url', requestParams)

const checkFetchRequestHTTP = response => {
    if(!response.ok) {
        throw Error(`${response.status} : ${response.responseText} - ${response.url}`)
    }
    else {return response}
}

fetch(request)
    .then(checkFetchRequestHTTP)
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.log(error)
    })
