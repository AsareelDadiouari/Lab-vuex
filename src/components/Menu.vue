<template>
  <div>
    <hr>
    <div class="menu">
      <router-link to="contact"><img id="contact" width="30" height="30" src="https://www.flaticon.com/svg/static/icons/svg/860/860800.svg" alt="users"></router-link>
      <img width="30" height="30" src="https://www.flaticon.com/svg/static/icons/svg/633/633515.svg" alt="phone">
      <div class="message">
        <p id="number">{{unreadMessages}}</p>
        <img width="30" height="30" src="https://www.flaticon.com/svg/static/icons/svg/1086/1086560.svg" alt="messages">
      </div>
      <router-link to="/"><img id="menu" width="30" height="30" src="https://www.flaticon.com/svg/static/icons/svg/633/633611.svg" alt="credit"></router-link>
    </div>
  </div>
</template>

<script>
export default {
name: "Menu",
  props: {
    unreadMessages: Number
  }
}
</script>

<style scoped>
.menu {
  display: flex;
  margin-right: 100px;
}

.menu > img, .message, #contact , #menu{
  margin: 0 25px;
}

#number {
  border-radius: 50%;
  display: inline-block;
  color: white;
  background-color: blue;
  width: 20px;
}

hr {
  width: 3px;
  color: red;
}

.message {
  display: flex;
}

</style>
