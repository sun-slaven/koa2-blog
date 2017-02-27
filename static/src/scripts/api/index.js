const getRequest = (url,data)=> {
    return $.ajax({
        type: 'GET',
        url: url,
        data: data,
        dataType: 'json'
    })
}

const postRequest = (url,data)=> {
    return $.ajax({
        type: 'POST',
        url: url,
        data: data,
        dataType: 'json'
    })
}

export {
    getRequest,
    postRequest
}