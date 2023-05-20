
const STATE = {
    FULFILLED: 'fulfilled',
    PENDING: 'pending',
}
/**
 * This promise will have 2 states:
 * pending and fulfilled
 */
class MyPromise {

    _state = STATE.PENDING
    _value = undefined
    _handlerList = []

    constructor(executor) {
        if (typeof executor !== 'function') {
            throw new TypeError("The executor is not a function.")
        }
        const resolve = this._internalResolve
        executor(resolve)
    }

    _internalResolve = (data) => {
        if (this._state !== STATE.PENDING) return
        this._state = STATE.FULFILLED
        this._value = data

        this._state !== STATE.PENDING && this._callHandlers(this._value)
    }

    
    then = (handler) => {
        _handlerList.push(
            typeof handler === 'function'
                ? handler
                : undefined
        )
        this._state !== STATE.PENDING && this._callHandlers(this._value)
    }

    _callHandlers = (value) => {
        while (this._handlerList.length) {
            const handler = this._handlerList.shift()
            this._state !== STATE.PENDING && handler && handler(value)
        }
    }

    finally = (cb) => {
        this.then(cb)
    }
}





module.exports = MyPromise



