const WEB_URL = "http://starlord.hackerearth.com/TopRamen"

const getProducts = ()=>{
    return fetch(WEB_URL);
}

export {
    getProducts
};