/* AppDispatcher Class Singleton */
export class AppDispatcher {
    constructor() {
        if (typeof AppDispatcher.instance === 'object') {
            return AppDispatcher.instance;
        }
        this.id = 0;
        this.callbacks = {};
        AppDispatcher.instance = this;
        return this;
    }

    register(callback) {
        this.callbacks[this.id] = callback;
        return this.id++;
    }

    unregister(id) {
        delete this.callbacks[id];
    }

    dispatch(payload) {
        Object.keys(this.callbacks).forEach((key) => {
            if (Object.prototype.hasOwnProperty.call(this.callbacks, key)) {
                this.callbacks[key](payload);
            }
        });
    }
}
