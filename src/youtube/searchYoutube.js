export const searchYoutube = ({query,max,key}, callback) =>{
    const httpRequest = new XMLHttpRequest();
    httpRequest.open(
        'GET',
        `https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&key=${key}&q=${query}&maxResults=${max}`
    );
    httpRequest.send();
    httpRequest.onreadystatechange = function(){
        if(httpRequest.readyState === httpRequest.DONE){
            if(httpRequest.status===200){
                const response = JSON.parse(httpRequest.responseText);
                callback(response.items);
            } else{
                console.error(httpRequest.responseText);
            }
        }
    };
};