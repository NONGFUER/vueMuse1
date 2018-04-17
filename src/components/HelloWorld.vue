<template>
 <mu-appbar title="Title">
  <mu-icon-button icon="menu" slot="left"/>
  <mu-flat-button label="expand_more" slot="right"/>
  <mu-icon-button icon="expand_more" slot="right"/>
</mu-appbar>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
