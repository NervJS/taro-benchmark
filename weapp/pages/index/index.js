const diffObjToPath = require('../../utils/index.js')
const fetchData = require('../../models/index.js')

const startTime = Date.now()

Page({
  data: {
    data: [],
    selected: 0
  },

  onLoad () {
    this.setData({
      data: fetchData(),
      selected: 0
    }, () => {
      console.log(`init => 回调时间：${Date.now() - startTime}ms`)
      wx.showToast({
        icon: 'none',
        title: `init => 回调时间：${Date.now() - startTime}ms`,
        duration: 3000,
      })
    })
  },

  run () {
    const startTime = Date.now()
    this.setData({
      data: fetchData(),
      selected: 0
    }, () => {
      console.log(`run => 回调时间：${Date.now() - startTime}ms`)
      wx.showToast({
        icon: 'none',
        title: `run => 回调时间：${Date.now() - startTime}ms`,
        duration: 3000,
      })
    })
  },

  add () {
    const startTime = Date.now()
    const data = {
      data: [...this.data.data, ...fetchData().slice(0, 20)]
    }
    // const data = diffObjToPath({data: [...this.data.data, ...fetchData().slice(0, 20)]}, this.data)
    this.setData(data, () => {
      console.log(`add => 回调时间：${Date.now() - startTime}ms`)
      wx.showToast({
        icon: 'none',
        title: `add => 回调时间：${Date.now() - startTime}ms`,
        duration: 3000,
      })
    })
  },

  update () {
    const startTime = Date.now()
    const data = [...this.data.data]
    for (let i = 0; i < data.length; i += 10) {
      const item = data[i]
      data[i] = {
        ...item,
        title: `${item.title}!!!`
      }
    }
    this.setData({
      data
    }, () => {
      console.log(`update => 回调时间：${Date.now() - startTime}ms`)
      wx.showToast({
        icon: 'none',
        title: `update => 回调时间：${Date.now() - startTime}ms`,
        duration: 3000,
      })
    })
      
  },

  swaprows () {
    const startTime = Date.now()
    const data = [...this.data.data]
    if (data.length !== 400) return
    let temp = data[1]
    data[1] = data[398]
    data[398] = temp
    this.setData({
      data
    }, () => {
      console.log(`swapRows => 回调时间：${Date.now() - startTime}ms`)
      wx.showToast({
        icon: 'none',
        title: `swapRows => 回调时间：${Date.now() - startTime}ms`,
        duration: 3000,
      })
    })
  },

  select (e) {
    const startTime = Date.now()
    const id = e.currentTarget.dataset.id
    this.setData({
      selected: id
    }, () => {
      console.log(`select => 回调时间：${Date.now() - startTime}ms`)
      wx.showToast({
        icon: 'none',
        title: `select => 回调时间：${Date.now() - startTime}ms`,
        duration: 3000,
      })
    })
  },

  clear () {
    this.setData({ data: [], selected: 0 })
  }
})