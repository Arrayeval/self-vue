function SelfVue (options) {
    var self = this
    this.vm = this;
    this.data = options.data

    Object.keys(this.data).forEach(function (key) {
        self.proxyKeys(key)
    }) 

    observe(this.data)
    // el.innerHTML = this.data[exp]
    // new Watcher(this, exp, function (value) {
    //     console.log(this)
    //     el.innerHTML = value
    // });
    new Compile(options.el, this.vm);
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