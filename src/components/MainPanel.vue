<template>
  <div class="mainPanel container">
    <div class="front">
      <p class="chats">Chats</p>
      <div class="icons-front">
        <img id="loupe" height="25" width="25" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSrOdmH3AIyOWqevRVthpOgfgE1ELQsqfYPOg&usqp=CAU" alt="magnifiyingGglass">
        <img height="25" width="25" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQEW6cYCskPmeQqCRSMsvB6sll3_BrA1OJ30g&usqp=CAU" alt="plus">
      </div>
    </div>
    <div class="part">
      <p id="All">All</p>
      <p>Favourite</p>
      <p>Channels</p>
    </div>
    <hr>
    <div class="messages">
      <div v-for="(message, index) in messages" :key="index">
        <MessageView @onMessageViewClicked="changeMessageState(index)" ref="message" :contact-picture="message.sender.profileImage" :id=parseInt(message.id) :contact-name="message.sender.name" :contact-message="[message.content]" :read="message.read" :date="message.date" />
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
import MessageView from "@/components/MessageView";
import 'es6-promise/auto';

export default {
name: "MainPanel",
  components: { MessageView},
  props: {
    //messages: {}
  },
  data: function () {
  return {
      index: Number
    }
  },
  methods: {
    changeMessageState(index){
      this.$store.commit('OPERATE_MESSAGE', index)
    }
  },
  computed:{
    messages (){
      return this.$store.getters.sortMessagesByDate;
    }
  }

}
</script>

<style scoped>
.mainPanel {

 /* width: 375px;
  height: auto;
  background-color: #ffffff;
  border: thick solid #000000;
  border-radius: 20px;*/
}

.part{
  display: flex;
  margin-bottom: 10px;
}

.part > p {
  margin: 0 5px;
}

.chats {
  font-size: 25px;
  font-weight: bold;
  margin-top: 10px;

}

.icons-front {
  display: flex;
  margin-top: 17px;
}

#loupe {
  margin-right: 17px;
}

.front {
  display: flex;
  justify-content: space-between;
}

#All {
  color: #05b5ff;
}

.messages {
  overflow-y: scroll;
  height: 600px;
}
</style>
