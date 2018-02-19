import {APP_CONFIG} from '../const/appConfig';
import {API_URLS} from '../model/newsAPI/config';
import {ACTIONS} from './actionsConst';
import {AppDispatcher} from './dispatcher';

export class SourcesActions {

    constructor() {
        this.apiKey  = APP_CONFIG.defaultModel.apikey;
        this.dispatcher = new AppDispatcher();
    }

    loadNewsSources() {
        const {url, params = {}} = API_URLS.sources;
        fetch(this.getUrl(url, params))
            .then(response => response.json())
            .then(data => {
                this.dispatcher.dispatch({
                    type: ACTIONS.LOAD_SOURCES,
                    sources: data.sources
                });
            })
            .catch(() => {
                /*
                * For simplicity we dispatch a reset action
                * */
                this.dispatcher.dispatch({
                    type: ACTIONS.RESET_SOURCES
                });
            });
    }

    /* UTILS */
    getUrl(url, params) {
        const paramsObj = [];
        params.apikey = this.apiKey;
        Object.keys(params).forEach(key => paramsObj.push(`${key}=${encodeURIComponent(params[key])}`));
        return `${url}?${paramsObj.join('&')}`;
    }
}