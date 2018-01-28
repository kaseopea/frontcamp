import {NewsAPIClientAdapter} from './clientAdapter';


export class NewsAPIClientProxy {
    constructor(clientConfig) {
        this.clientConfig = clientConfig;
        this.client = null;
    }

    createClient() {
        if ((typeof this.clientConfig.apiKey === 'string') && (this.clientConfig.keywords.length)) {
            this.client = new NewsAPIClientAdapter(this.clientConfig);
            return this.client;
        }
        return 'Invalid API Key';
    }


}