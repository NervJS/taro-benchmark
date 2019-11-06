Component({
  options: {
    addGlobalClass: true
  },
  methods: {
    run() {
      this.triggerEvent('run');
    },
    add() {
      this.triggerEvent('add');
    },
    update() {
      this.triggerEvent('update');
    },
    swaprows() {
      this.triggerEvent('swaprows');
    },
    clear() {
      this.triggerEvent('clear');
    }
  }
});