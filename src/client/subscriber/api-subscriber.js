const baseUrl = "http://localhost:4000";

const create = (subscriber) => {
    return fetch(baseUrl + "/subscribers", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(subscriber)
    })
    .then(response => {
        return response.json()
    }).catch(err => console.log(err))
}

const list = () => {
    return fetch('/subscribers', {
        method: 'GET'
    }).then(response => {
        response.json()
    }).catch(err => console.log(err))
}

export {
    create, 
    list
}