const API =
  'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
  el: '#app',
  data: {
    userSearch: '',
  },
  methods: {
    getJson(url) {
      return fetch(url)
        .then((result) => result.json())
        .catch((error) => {
          // console.log(error)
          this.$refs.error.text = error;
        });
    },
    postJson(url, data) {
      return fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((result) => result.json())
        .catch((error) => {
          // console.log(error)
          this.$refs.error.text = error;
        });
    },
    putJson(url, data) {
      return fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((result) => result.json())
        .catch((error) => {
          // console.log(error)
          this.$refs.error.text = error;
        });
    },
  },
  mounted() {},
});
