export default class EventBus {
  get events (): {} {
    return this._events
  }

  set events (value: {}) {
    this._events = value
  }

  private _events: {}

  constructor () {
    this._events = {}
  }

  emit (eventName, data) {
    if (this._events[eventName]) {
      this._events[eventName].forEach(function (fn) {
        fn(data)
      })
    }
  }

  on (eventName, fn) {
    this._events[eventName] = this._events[eventName] || []
    this._events[eventName].push(fn)
  }

  off (eventName, fn) {
    if (this._events[eventName]) {
      for (let i = 0; i < this._events[eventName].length; i++) {
        if (this._events[eventName][i] === fn) {
          this._events[eventName].splice(i, 1)
          break
        }
      }
      
    }
  }
}
