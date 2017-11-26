

// vue component for bootstrap jumbotron
Vue.component('bs-jumbo', {
  template: `
    <div class="jumbotron">
      <h1 class="display-3">{{titlemessage}}</h1>
      <p class="lead">{{subTitle}}</p>
      <hr class="my-4">
      <p>{{mainMessage}}</p>
      <p class="lead">
        <a class="btn btn-primary" role="button" @click="alertButton">Click Me!</a>
      </p>
    </div>`,
  props:["titlemessage"],
  data: function(){
    return{
      subTitle: "This is the sub title text",
      mainMessage: "This is the main text"
    }
  },
  methods: {
    alertButton: function(){
      alert("You built a component");
    }
  }
});


// main vm info
var vm = new Vue({
  el: '#app',
  data: {

  },
})
