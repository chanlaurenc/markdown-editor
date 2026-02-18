const app = Vue.createApp({
  data() {
    return {
      message: 'Type here...'
    };
  },
  computed: {
    htmlOutput() {
      return marked.parse(this.message);
    },
    charCount() {
      const textOnly = this.htmlOutput.replace(/<[^>]*>/g, '');
      return textOnly.length;
    }
  }
});

app.mount('#app');