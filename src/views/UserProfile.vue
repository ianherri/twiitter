<!-- HTML -->
<template>
  <div class="user-profile">
    <div class="user-profile__user-panel">
      <h1 class="user-profile__username">{{ state.user.username }}</h1>
      <h2>{{ userId }}</h2>
      <div class="user-profile__admin-badge" v-if="state.user.isAdmin">
        admin
      </div>
      <div class="user-profile__follower-count">
        <strong>Followers:</strong> {{ state.followers }}
      </div>
      <CreateTwootPanel @add-twoot="addTwoot" />
    </div>
    <div class="user-profile_twoots-wrapper">
      <TwootItem
        v-for="twoot in state.user.twoots"
        :key="twoot.id"
        :username="state.user.username"
        :twoot="twoot"
      />
    </div>
  </div>
</template>

<!-- JS  -->
<!-- import then export as a component to render it -->
<script>
import { reactive, computed } from 'vue'
import { useRoute } from 'vue-router'
import TwootItem from '../components/TwootItem.vue'
import CreateTwootPanel from '../components/CreateTwootPanel.vue'
import { users } from '@/assets/users'

export default {
  name: 'UserProfile',
  components: { TwootItem, CreateTwootPanel },

  setup() {
    const route = useRoute()
    const userId = computed(() => route.params.userId)

    const state = reactive({
      followers: 0,
      user: users[userId.value - 1] || users[0],
    })

    function addTwoot(twoot) {
      state.user.twoots.unshift({
        id: state.user.twoots.length + 1,
        content: twoot,
      })
    }

    return {
      state,
      addTwoot,
      userId,
    }
  },
}
</script>

<!-- CSS styles -->
<style lang="scss" scoped>
.user-profile {
  display: grid;
  grid-template-columns: 1fr 3fr;
  width: 100%;
  padding: 50px 5%;
  .user-profile__user-panel {
    display: flex;
    flex-direction: column;
    margin-right: 50px;
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid #dfe3e8;
    margin-bottom: auto;

    .user-profile__admin-badge {
      background: purple;
      color: white;
      border-radius: 5px;
      margin-right: auto;
      padding: 4px;
      margin-top: 10px;
      margin-bottom: 10px;
    }

    &.--exceeded {
      color: red;
      border-color: red;
    }
  }
  h1 {
    margin: 0;
  }
}
</style>
