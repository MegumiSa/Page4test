var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
;

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
});

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'menu1' },
      { text: 'menu2' },
      { text: 'menu3' }
    ]
  }
});

Vue.component('open-modal',{
  template : `
    <div id="overlay">
        <div id="content">
          <p>これがモーダルウィンドウです。</p>
          <button v-on:click="closeModal">close</button>
        </div>
    </div>
    `
});

new Vue({
  el: '#app5',
  data: {
    showContent: false
  },
  methods:{
    openModal: function(){
      this.showContent = true
    },
    closeModal: function(){
      this.showContent = false
    }
  }
})