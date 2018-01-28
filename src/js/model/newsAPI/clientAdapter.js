import {NewsAPIClient} from './client';
import {APP_CONFIG} from '../../const/appConfig';

export class NewsAPIClientAdapter extends NewsAPIClient {
    constructor(clientConfig) {
        super(clientConfig);
    }

    loadDefaultNews() {
        const query = this.keywords[Math.floor(Math.random() * this.keywords.length)];
        return new Promise((resolve, reject) => {
            this.getNewsByParam('q', query)
                .then((data) => (data.length) ? resolve(data) : reject(new Error('No Results for this keyword'))) // Move this message to config
                .catch((err) => reject(err));
        });
    }


}