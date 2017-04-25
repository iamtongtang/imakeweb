new Vue({
  el: '#app',
  data: {
    results: []
  },
  mounted() {
    axios.get("http://connect.thairath.co.th/ws/thairath/content")
    .then(response => {this.results = response.data.items})
  }
});