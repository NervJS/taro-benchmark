import { Component } from 'react'
import { View, Button } from '@tarojs/components'
import Taro from '@tarojs/taro'

import './index.scss'

Taro.options.debug = true

const random = (max) => Math.round(Math.random() * 1000) % max

const A = ["pretty", "large", "big", "small", "tall", "short", "long", "handsome", "plain", "quaint", "clean",
  "elegant", "easy", "angry", "crazy", "helpful", "mushy", "odd", "unsightly", "adorable", "important", "inexpensive",
  "cheap", "expensive", "fancy"]
const C = ["red", "yellow", "blue", "green", "pink", "brown", "purple", "brown", "white", "black", "orange"]
const N = ["table", "chair", "house", "bbq", "desk", "car", "pony", "cookie", "sandwich", "burger", "pizza", "mouse",
  "keyboard"]

let nextId = 1

const buildData = (count) => {
  const data = new Array(count)

  for (let i = 0; i < count; i++) {
    data[i] = {
      id: nextId++,
      label: `${A[random(A.length)]} ${C[random(C.length)]} ${N[random(N.length)]}`,
    }
  }

  return data
}

const initialState = { data: [], selected: 0 }

class Row extends Component {
  shouldComponentUpdate(nextProps) {
    const { item, selected } = this.props

    return nextProps.item !== item || nextProps.selected !== selected
  }

  onSelect = () => {
    const { item, dispatch } = this.props

    dispatch({ type: 'SELECT', id: item.id })
  }

  onRemove = () => {
    const { item, dispatch } = this.props

    dispatch({ type: 'REMOVE', id: item.id })
  }

  render() {
    const { item } = this.props

    return (
      <View className="row">
        <View className="row-1">{item.id}</View>
        <View className="row-2">
          <View>{item.label}</View>
        </View>
        <View className="row-3" onClick={this.onRemove}>
          delete
        </View>
      </View>
    )
  }
}

class Jumbotron extends Component {
  shouldComponentUpdate () {
    return false
  }

  render() {
    const { dispatch } = this.props

    return (
      <View className="jumbotron">
        <View className="jumbotron-title">React keyed</View>
        <View className="jumbotron-row">
          <Button className='jumbotron-row-button' type="primary" id="run" onClick={() => dispatch({ type: 'RUN' })} >Create 500 rows</Button>
          <Button className='jumbotron-row-button' type="primary" id="runlots" onClick={() => dispatch({ type: 'RUN_LOTS' })} >Create 1,000 rows</Button>
          <Button className='jumbotron-row-button' type="primary" id="add" onClick={() => dispatch({ type: 'ADD' })} >Append 500 rows</Button>
          <Button className='jumbotron-row-button' type="primary" id="update" onClick={() => dispatch({ type: 'UPDATE' })} >Update every 10th row</Button>
          <Button className='jumbotron-row-button' type="primary" id="clear" onClick={() => dispatch({ type: 'CLEAR' })} >Clear</Button>
          <Button className='jumbotron-row-button' type="primary" id="swaprows" onClick={() => dispatch({ type: 'SWAP_ROWS' })} >Swap Rows</Button>
        </View>
      </View>
    )
  }
}

export default class Main extends Component {
  state = initialState

  dispatch = (action) => {
    const { data } = this.state
    console.log('click time: ', Date.now())

    switch (action.type) {
      case 'RUN':
        return this.setState({ data: buildData(500), selected: 0 })
      case 'RUN_LOTS':
        return this.setState({ data: buildData(1000), selected: 0 })
      case 'ADD':
        return this.setState({ data: data.concat(buildData(500))})
      case 'UPDATE': {
        const newData = data.slice(0)

        for (let i = 0; i < newData.length; i += 10) {
          const r = newData[i]

          newData[i] = { id: r.id, label: r.label + " !!!" }
        }

        return this.setState({ data: newData })
      }
      case 'CLEAR':
        return this.setState({ data: [], selected: 0 })
      case 'SWAP_ROWS': {
        if (data.length > 498) {
          return this.setState({ data: [data[0], data[498], ...data.slice(2, 498), data[1], data[499]] })
        }

        return
      }
      case 'REMOVE': {
        const idx = data.findIndex((d) => d.id === action.id)

        return this.setState({ data: [...data.slice(0, idx), ...data.slice(idx + 1)] })
      }
      case 'SELECT':
        return this.setState({ selected: action.id })
    }
  }

  render() {
    const { data, selected } = this.state

    return (
      <View className="container">
        <Jumbotron dispatch={this.dispatch} />
        <View>
          {data.map((item) => (
            <Row key={item.id} item={item} selected={selected === item.id} dispatch={this.dispatch} />
          ))}
        </View>
      </View>
    )
  }
}
