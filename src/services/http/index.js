const EnHancedFetch = (method,url,data)=> {
    return fetch(url)
    .then(res => {
        if (!res.ok) {
            throw new Error(res.status); // Will take you to the `catch` below
        }
      
        return res.json();
    })
    .catch(error => {
        console.log(error);
    })
}

export default EnHancedFetch;