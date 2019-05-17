// 监听器：监听对象属性的变化
import Dep from "./Dep"
function defineReactive (data, key, val) {
  observe(val);
  var dep = new Dep();// 消息订阅器
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get: function () {
      if (Dep.target) {
        dep.addSub(Dep.target) //  在这里添加一个订阅者
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

export default observe