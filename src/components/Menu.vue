<template>
  <div>
    <hr>
    <div class="menu">
      <img width="30" height="30" src="https://www.flaticon.com/svg/static/icons/svg/860/860800.svg" alt="users">
      <img width="30" height="30" src="https://www.flaticon.com/svg/static/icons/svg/633/633515.svg" alt="phone">
      <div class="message">
        <p id="number">{{unreadMessages}}</p>
        <img width="30" height="30" src="https://www.flaticon.com/svg/static/icons/svg/1086/1086560.svg" alt="messages">
      </div>
      <img width="30" height="30" src="https://www.flaticon.com/svg/static/icons/svg/633/633611.svg" alt="credit">
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
  padding-bottom: 10px;
}

.menu > img, .message {
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
