import {API_URLS} from './config';
import {APP_CONFIG} from '../../const/appConfig';

export class NewsAPIClient {
    constructor(config) {
        this.provider = config.provider;
        this.apikey = config.apiKey;
        this.keywords = config.keywords;
    }

    loadDefaultNews() {
        const keywords = APP_CONFIG.defaultKeywords;
        const query = keywords[Math.floor(Math.random() * keywords.length)];
        return new Promise((resolve, reject) => {
            this.client
                .getNewsByParam('q', query)
                .then((data) => resolve(data))
                .catch((err) => reject(err));
        });
    }

    getNewsSources() {
        return new Promise((resolve, reject) => {
            const {url, params = {}} = API_URLS.sources;
            fetch(this.getUrl(url, params))
                .then(response => response.json())
                .then(data => resolve(data.sources))
                .catch(err => reject(err.message));
        });
    }

    getNewsByParam(param, value) {
        return new Promise((resolve, reject) => {
            const {url, params = {}} = API_URLS.news;
            fetch(this.getUrl(url, Object.assign({}, params, {
                [param]: value
            })))
                .then(response => response.json())
                .then(data => {
                    const dataWithIds = NewsAPIClient.injectIds(data.articles);
                    resolve(dataWithIds);
                })
                .catch(err => reject(err.message));
        });
    }

    /* UTILS */
    getUrl(url, params) {
        const paramsObj = [];
        params.apikey = this.apikey;
        Object.keys(params).forEach(key => paramsObj.push(`${key}=${encodeURIComponent(params[key])}`));
        return `${url}?${paramsObj.join('&')}`;
    }

    static injectIds(data) {
        let indexId = 0;
        return data.map(item => {
            indexId += 1;
            item.id = indexId;
            return item;
        });
    }
}
