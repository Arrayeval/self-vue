// 监听器：监听对象属性的变化
function defineReactive (data, key, val) {
  observe(val);
  var dep = new Dep();// 消息订阅器
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get: function () {
      if () {
        dep.addSub(watcher) //  在这里添加一个订阅者
      }
      return val
    },
    set: function (newVal) {
      val = newVal
      dep.notify() // 数据变化，通知所有的订阅者
    }
  })
} 

function observe (data) {
  if (!data || typeof data !== 'object') return 
  Object.keys(data).forEach(function (key) {
    defineReactive(data, key, data[key])
  })
}

// 订阅器
function Dep () {
  this.subs = []
}
Dep.prototype = {
  addSub: function (sub) {
    this.subs.push(sub)
  },
  notify: function () {
    this.subs.forEach(function (sub) {
      sub.update()
    })
  }
}