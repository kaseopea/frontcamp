export class Dispatcher {
    constructor() {
        this.id = 0;
        this.callbacks = {};
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
