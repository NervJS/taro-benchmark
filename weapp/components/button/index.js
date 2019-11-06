Component({
  properties: {
    bid: String,
    title: String
  },
  methods: {
    handleTap () {
      this.triggerEvent('click')
    }
  }
})