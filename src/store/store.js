import Vue from 'vue'
import Vuex from 'vuex'
import 'es6-promise/auto'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        messages: [],
        contacts: []
    },
    mutations: {
        OPERATE_MESSAGE(state, index) {
            state.messages[index].read = !state.messages[index].read ;
        },

        SET_MESSAGES(state, payload) {
            state.messages = payload
        },

        SET_CONTACTS(state, payload) {
            state.contacts = payload
        }
    },
    getters: {
        numberOfUnreadMessages(state) {
            let count = 0;
            for (let message of state.messages){
                if (!message.read)
                    count++;
            }
            return count;
        },
        sortMessagesByDate(state) {
            state.messages.sort((a, b) => a - b);
            return state.messages;
        },
        sortContactByName(state) {
            state.contacts.sort((a, b) => a - b);
            return state.contacts;
        }
    },
    actions: {
        async setContact(context) {
            try {
                const response = await Vue.axios.get('https://io-labs.fr/messenger/contacts.json');
                context.commit('SET_CONTACTS', response.data)
            } catch (err) {
                console.log(err)
            }
        },
       async setMessages(context) {
            try {
                const response = await Vue.axios.get('https://io-labs.fr/messenger/messages.json');
                context.commit('SET_MESSAGES', response.data)
            } catch (err){
                console.log(err)
            }
        }
    },
    namespaced: true
})

export default store
