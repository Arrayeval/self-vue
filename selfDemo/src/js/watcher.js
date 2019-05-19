import Dep from "./Dep"
function Watcher (vm, exp, cb) {
  this.cb = cb;
  this.vm = vm;
  this.exp = exp;
  this.value = this.get();
}

Watcher.prototype = {
  update: function () {
    this.run()
  },
  run: function () {
    var value = this.vm.data[this.exp];
    var oldVal = this.value;
    if (value !== oldVal) {
      this.value = value
      this.cb.call(this.vm, value, oldVal)
    }
  },
  get () {
    Dep.target = this
    var value = this.vm.data[this.exp] // 读取一个对象中的属性会触发 Object.defineProperty 的get方法
    Dep.target = null
    return value
  }
}

export default Watcher