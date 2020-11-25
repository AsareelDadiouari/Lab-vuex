<template>
  <div id="app">
    <div class="main">
      <router-view></router-view>
      <Menu :unread-messages="countUnread" />
    </div>
  </div>
</template>

<script>


import Menu from "@/components/Menu";
export default {
  name: 'App',
  components: {
    Menu,
  },
  computed:{
    messages (){
      return this.$store.getters.sortMessagesByDate;
    },
    countUnread(){
      return this.$store.getters.numberOfUnreadMessages;
    }
  },
  created() {
    this.$store.dispatch('setMessages')
  },
  mounted() {
    this.$store.dispatch('setContact')
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 2%;
  margin-left: 40%;
}

.main {
  width: 375px;
  height: auto;
  background-color: #ffffff;
  border: thick solid #000000;
  border-radius: 20px;
}
</style>
