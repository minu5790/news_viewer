import axios from 'axios';
class News {
    constructor(key){
        this.key = key;
    }

    async mostPopular(){ 
        const result =await axios.get(`https://newsapi.org/v2/top-headlines?country=ng&apiKey=${this.key}`).catch(Error=>console.log(Error));
 
        return result.data.articles;
    }


}

export default News;