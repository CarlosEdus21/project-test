<template> 
<Myheader></Myheader>

<router-view></router-view>

</template>

<script>
  
  import browsernotifications from './components/browsernotifications.vue';
  
  export default{
    components:{
      browsernotifications,
      
      
    }
  }
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
}
</style>