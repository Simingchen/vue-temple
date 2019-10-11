import Layout from '../views/layout.vue'
const importPage = require('../router/_import_' + process.env.NODE_ENV)

// 金额格式化
export function formatMoney (s1, n) {
  let s
  if (s1 !== undefined && s1 !== null) {
    s = s1
  } else {
    s = 0
  }
  n = n > 0 && n <= 20 ? n : 2
  s = parseFloat((s + '').replace(/[^\d.-]/g, '')).toFixed(n) + ''
  const l = s.split('.')[0].split('').reverse()
  const r = s.split('.')[1]
  let t = ''
  for (let i = 0; i < l.length; i++) {
    t += l[i] + ((i + 1) % 3 === 0 && (i + 1) !== l.length ? ',' : '')
  }
  const moy = t.split('').reverse().join('') + '.' + r
  return moy
}

// 时间格式化 ps: 'yyyy-MM-dd'
export function dateFtt (fmt, date) {
  var o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    'S': date.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) { fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length)) }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return fmt
}

// 当前时间转 ps: 201903
export function dateFom () {
  const date = new Date()
  const year = date.getFullYear()
  let month = date.getMonth() + 1
  month = (month < 10 ? '0' + month : month)
  const mydate = (year.toString() + month.toString())
  const dates = parseInt(mydate)
  return dates
}

// 遍历后台传来的路由字符串，转换为组件对象
export function filterAsyncRouter (asyncRouterMap) {
  asyncRouterMap.forEach(item => {
    if (item.component === 'layout') {
      item.component = Layout
    } else {
      item.component = importPage(item.component)
    }

    if (item.children && item.children.length > 0) {
      item.children.forEach(element => {
        element.component = importPage(element.component)
      })
    }
  })

  return asyncRouterMap
}

// 数字四舍五入（保留n位小数）
export function getFloat (number, n) {
  n = n ? parseInt(n) : 0
  if (n <= 0) return Math.round(number)
  const numbers = Math.round(number * Math.pow(10, n)) / Math.pow(10, n)
  return numbers
}

// 字符串转对象
export function stringRotationObject (str) {
  const obj = {}
  const arry1 = str.split('&')
  for (let i = 0; i < arry1.length; i++) {
    const arry2 = arry1[i].split('=')
    obj[arry2[0]] = arry2[1]
  }
  return obj
}

// 校验是否含特殊字符
export function containSpecialStr (str) {
  // (\ )
  var containSpecial = RegExp(/[(\~)(\!)(\@)(\#)(\$)(\%)(\^)(\&)(\*)(\()(\))(\+)(\=)(\[)(\])(\{)(\})(\|)(\\)(\;)(\:)(\')(\")(\,)(\/)(\<)(\>)(\?)(\)]+/)
  return (containSpecial.test(str))
}
