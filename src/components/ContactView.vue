<template>
  <div>
    <div class="mess">
      <img height="70" width="70" :src="contactPicture" alt="ProfilePicture">
      <div class="second">
        <div class="nameAndMess">
          <div  id="ContactName" >{{contactName}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "ContactView",
  props:{
    contactPicture: String,
    contactName: String
  },

}
</script>

<style scoped>
.mess {
  display: flex;
  cursor: pointer;
}
.second {
  display: flex;
  justify-content: space-between;
}

img {
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
}

</style>
