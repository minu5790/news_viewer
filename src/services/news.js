import axios from 'axios';
class News {
    constructor(key){
        this.key = key;
    }

    async mostPopular(category){ 

        const category_query = category === 'all' ? '' : `&category=${category}`;
        const result =await axios.get(`https://newsapi.org/v2/top-headlines?country=kr${category_query}&apiKey=${this.key}`).catch(Error=>console.log(Error));

        return result.data.articles;
    }


}

export default News;