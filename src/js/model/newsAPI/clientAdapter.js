import {NewsAPIClient} from './client';
import {TEXT} from '../../const/messages';

export class NewsAPIClientAdapter {
    constructor(clientConfig) {
        this.client = new NewsAPIClient(clientConfig);
        this.clientConfig = clientConfig;
    }

    loadDefaultNews() {
        const {keywords} = this.clientConfig.keywords;
        const query = keywords[Math.floor(Math.random() * keywords.length)];
        return new Promise((resolve, reject) => {
            this.client.getNewsByParam('q', query)
                .then((data) => (data.length) ? resolve(data) : reject(new Error(TEXT.noNewsByKeyword)))
                .catch((err) => reject(err));
        });
    }

    loadNewsSources() {
        return new Promise((resolve, reject) => {
            this.client
                .getNewsSources()
                .then((data) => (data.length) ? resolve(data) : reject(new Error(TEXT.noNewsSources)))
                .catch((err) => reject(err));
        });
    }


}