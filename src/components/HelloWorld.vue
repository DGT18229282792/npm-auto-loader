<template>
  <div class="hello">
    <button @click="testPop">测试</button>
    <!-- <dgtMessagr ref="dgtMessagrRef"></dgtMessagr> -->
    <dgt-message ref="messageRef"></dgt-message>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods:{
    testPop(){
      console.log(this.$refs.messageRef)
      this.$refs.messageRef.MessageFun('shimie')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
