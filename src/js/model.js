import {APP_CONFIG} from './const/appConfig';
import {NewsAPIClientProxy} from './model/newsAPI/clientProxy';

class ClientConfig {
    constructor(config) {
        this.provider = config.provider || null;
        this.apiKey = config.apikey || '';
        this.keywords = config.keywords || [];
    }
}

export class NewsModelFactory {
    constructor(clientConfig) {
        this.clientParams = new ClientConfig(Object.assign({}, clientConfig || APP_CONFIG.defaultModel));
    }

    create(provider) {
        // If we use NewsAPI Default Provider
        if (provider === this.clientParams.provider) {
            const clientProxy = new NewsAPIClientProxy(this.clientParams);
            return clientProxy.createClient();
        }

        return {};
    }
}
