function getCurrentTime(){
    let time = new Date();
    return time.getTime();
}

export function setItem(key, value){
    let data = {
        values: value,
        time: getCurrentTime()
    }

    localStorage.setItem(key, JSON.stringify(data));
}

export function getItem(key){
    let data = localStorage.getItem(key);
    if(!data){
        return null;
    }
    else if(getCurrentTime() - JSON.parse(data).time > 1000 *15){
        return null;
    }
    else
    {
        console.log('load from local storage');
        return JSON.parse(data)['values'];
    }
}

export function removeItem(key){
    localStorage.removeItem(key);
}

export function clearItem(){
    localStorage.clear();
}




