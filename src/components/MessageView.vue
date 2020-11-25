<template>
  <div @click="changeRead">
    <div class="mess">
      <img height="70" width="70" :src="contactPicture" alt="ProfilePicture">
      <div class="second">
        <div class="nameAndMess">
          <div  id="ContactName" >{{contactName}}</div>
          <div ref="ContactMessage" :style="!read ? newMessageStyle : read" id="ContactMessage">{{contactMessage[contactMessage.length-1]}}</div> <!-- Contact last message -->
        </div>
        <div class="readAndHours">
          <div id="date" > {{date.split(' ')[4].substring(0, 5)}}</div>
          <img v-if="read" height="20" width="20" src="https://articles-images.sftcdn.net/wp-content/uploads/sites/2/2014/11/icon-blue.jpg" alt="vue">
          <img v-else height="20" width="20" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Icon_1_blue.svg/1200px-Icon_1_blue.svg.png" alt="vue">
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
name: "MessageView",
  props: {
    id: Number,
    contactPicture: String,
    contactName: String,
    read: Boolean,
    contactMessage: Array,
    date: String,
  },
  data() {
    return {
      newMessageStyle: {
        fontWeight: 'bold'
      },
    }
  },
  methods: {
    changeRead(){
      this.$emit( 'onMessageViewClicked')
    }
  },
}
</script>

<style scoped>
.mess {
  display: flex;
  cursor: pointer;
}

#ContactName {
 font-weight: bold;
  float: left;
}

#ContactMessage {
  color: #807d7d;
  width: auto;
  float: left;
  margin-right: 30px;
}

.nameAndMess {
}

img {
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
}
.readAndHours {
}

.second {
  display: flex;
  justify-content: space-between;
}

#date {
  color: #807d7d;
}
</style>
