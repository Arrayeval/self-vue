import Compile from './compile'
import Observe from './observer'

function SelfVue (options) {
    var self = this
    this.vm = this;
    this.data = options.data
    this.methods = options.methods
    Object.keys(this.data).forEach(function (key) {
        self.proxyKeys(key)
    }) 
    Observe(this.data)
    new Compile(options.el, this.vm);
    
    options.mounted.call(this)
    return this;
}

SelfVue.prototype = {
    proxyKeys (key) {
        var self = this;
        Object.defineProperty(this, key, {
            enumerable: false,
            configurable: true,
            get: function () {
                return self.data[key]
            },
            set: function (newVal) {
                self.data[key] = newVal
            }
        })
    }
}

export default SelfVue