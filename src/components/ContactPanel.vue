<template>
  <div id="contact">
    <div v-for="(contact, index) in contacts" :key="index">
      <ContactView :contact-picture="contact.profileImage" :contact-name="contact.name" />
    </div>
  </div>
</template>

<script>
import ContactView from "@/components/ContactView";
export default {
name: "ContactPanel",
  components: {ContactView},
  computed:{
    contacts (){
      return this.$store.getters.sortContactByName;
    }
  }
}
</script>

<style scoped>
#contact {
  min-height: 500px;
}
</style>
