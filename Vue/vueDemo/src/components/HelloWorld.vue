<template>
  <div class="hello">
    <span>我要：</span>
    <input type="text" v-model="count">
    <spoan>条</spoan>
    <button @click="btnRes">获取</button>
    <test @test="test1">hehe1</test>
    <test @test="test2">hehe2</test>
    <table id="testTable" border="1">
      <tr v-if="index!=0" v-for="(item,index) in tableData">
        <td v-for="val in item">{{ val }}</td>
      </tr>
      <tr v-else>
        <th v-for="val in tableData[0]">{{ val }}</th>
      </tr>
    </table>
  </div>
</template>

<script>
  import Test from './test.vue'

  export default {
    name: 'HelloWorld',
    components:{Test},
    data(){
        return {
          count:0,
          tableData:[]
        }
    },
    methods:{
      test1(){
        console.log(1)
      },
      test2(){
        console.log(2)
      },
      btnRes(){
        let _this = this
        _this.$http.get('http://localhost:9999/add',{
          params:{
            count:_this.count
          }
        }).then((res)=>{
          if(res.data.ret == 1)
            _this.tableData = res.data.data
          else alert(res.data.msg)
        }).catch((err)=>{
          console.log(err)
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #testTable{
    border-collapse: collapse;
    width: 100%;
    margin:10px auto
  }
  #testTable th{
    height: 50px;
  }
</style>
