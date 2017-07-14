/**
 * Created by chenmf on 2017/6/30.
 */
const KEY = 'vue2_notes'

export default {
  set: function (val) {
    localStorage.setItem(KEY, JSON.stringify(val))
  },
  get: function () {
    return localStorage.getItem(KEY)
  },
  clear: function () {
    localStorage.removeItem(KEY)
  }
}
