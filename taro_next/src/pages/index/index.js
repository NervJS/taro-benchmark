import React, { Component } from 'react'
import { View, Button, Image } from '@tarojs/components'
import fetchData from '../../models'

import './index.scss'

const startTime = Date.now()

class Index extends Component {
  state = {
    data: [],
    selected: 0,
  }

  config = {
    navigationBarTitleText: 'Taro'
  }

  componentWillMount () {
    this.setState({
      data: fetchData(),
      selected: 0
    }, () => {
      console.log(`init => 回调时间：${Date.now() - startTime}ms`)
      wx.showToast({
        icon: 'none',
        title: `init => 回调时间：${Date.now() - startTime}ms`,
        duration: 1500,
      })
    })
  }

  run = () => {
    const startTime = Date.now()
    this.setState({
      data: fetchData(),
      selected: 0
    }, () => {
      console.log(`run => 回调时间：${Date.now() - startTime}ms`)
      wx.showToast({
        icon: 'none',
        title: `run => 回调时间：${Date.now() - startTime}ms`,
        duration: 1500,
      })
    })
  }

  add = () => {
    const startTime = Date.now()
    this.setState({
      data: this.state.data.concat(fetchData().slice(0, 20))
    }, () => {
      console.log(`add => 回调时间：${Date.now() - startTime}ms`)
      wx.showToast({
        icon: 'none',
        title: `add => 回调时间：${Date.now() - startTime}ms`,
        duration: 1500,
      })
    })
  }

  update = () => {
    const startTime = Date.now()
    const data = this.state.data
    for (let i = 0; i < data.length; i += 10) {
      const item = data[i]
      data[i] = {
        ...item,
        title: `${item.title}!!!`
      }
    }
    this.forceUpdate(() => {
      console.log(`update => 回调时间：${Date.now() - startTime}ms`)
      wx.showToast({
        icon: 'none',
        title: `update => 回调时间：${Date.now() - startTime}ms`,
        duration: 1500,
      })
    })
  }

  swapRows = () => {
    const startTime = Date.now()
    const data = this.state.data
    if (data.length !== 400) return
    let temp = data[1]
    data[1] = data[398]
    data[398] = temp
    this.forceUpdate(() => {
      console.log(`swapRows => 回调时间：${Date.now() - startTime}ms`)
      wx.showToast({
        icon: 'none',
        title: `swapRows => 回调时间：${Date.now() - startTime}ms`,
        duration: 1500,
      })
    })
  }

  select = (idx) => {
    const startTime = Date.now()
    this.setState({
      selected: idx
    }, () => {
      console.log(`select => 回调时间：${Date.now() - startTime}ms`)
      wx.showToast({
        icon: 'none',
        title: `select => 回调时间：${Date.now() - startTime}ms`,
        duration: 1500,
      })
    })
  }

  clear = () => {
    this.setState({ data: [], selected: 0 })
  }

  render() {
    return (
      <View className='container'>
        <View className='jumbotron'>
          <Button onClick={this.run}>Create 40 goods</Button>
          <Button onClick={this.add}>Append 20 goods</Button>
          <Button onClick={this.update}>Update every 10th good</Button>
          <Button onClick={this.swapRows}>Swap good</Button>
          <Button onClick={this.clear}>Clear</Button>
        </View>
        <View className='list'>
          {
            this.state.data.map((item, idx) => {
              return (
                <View className={idx % 2 ? (this.state.selected === idx ? 'item selected right' : 'item right') : (this.state.selected === idx ? 'item selected' : 'item')} key={idx} >
                  <View className='image_wrap' onClick={this.select.bind(this, idx)}>
                    <Image className='image' src={item.img} mode='aspectFit' />
                  </View>
                  <View class='title'>{item.title}</View>
                  <View class='price'>¥ {item.price}</View>
                </View>
              )
            })
          }
        </View>
      </View>
    )
  }
}

export default Index
