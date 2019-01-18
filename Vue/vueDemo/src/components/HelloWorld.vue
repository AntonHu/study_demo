<template>
  <div class="hello">
    <test @test="test1">hehe1</test>
    <test @test="test2">hehe2</test>
  </div>
</template>

<script>
  import Test from './test.vue'

  export default {
    name: 'HelloWorld',
    components:{Test},
    methods:{
      test1(){
        console.log(1)
      },
      test2(){
        console.log(2)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
