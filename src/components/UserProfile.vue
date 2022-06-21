<!-- HTML -->
<template>
  <div class="user-profile">
    <div class="user-profile__user-panel">
      <h1 class="user-profile__username">{{ user.username }}</h1>
      <div class="user-profile__admin-badge" v-if="user.isAdmin">admin</div>
      <div class="user-profile__follower-count">
        <strong>Followers:</strong> {{ followers }}
      </div>
      <form class="user-profile__create-twoot" @submit.prevent="createNewTwoot">
        <label for="newTwoot"><strong>New Twoot</strong></label>
        <textarea id="newTwoot" rows="4" v-model="newTwootContent" />
        <div class="user-profile__create-twoot-type">
          <label for="newTwootType"><strong>type:</strong></label>
          <select id="newTwootType" v-model="selectedTwootType">
            <option
              :value="option.value"
              v-for="(option, index) in twootTypes"
              :key="index"
            >
              {{ option.name }}
            </option>
          </select>
        </div>
        <button>Twoot!</button>
      </form>
    </div>
    <div class="user-profile_twoots-wrapper">
      <TwootItem
        v-for="twoot in user.twoots"
        :key="twoot.id"
        :username="user.username"
        :twoot="twoot"
        @favorite="toggleFavorite"
      />
    </div>
  </div>
</template>

<!-- JS  -->
<!-- import then export as a component to render it -->
<script>
import TwootItem from './TwootItem'

export default {
  name: 'UserProfile',
  components: { TwootItem },
  data() {
    // this data function returns the data the forms the state of this component
    return {
      newTwootContent: '',
      selectedTwootType: 'instant',
      twootTypes: [
        { value: 'draft', name: 'Draft' },
        { value: 'instant', name: 'Instant Twoot' },
      ],
      followers: 0,
      user: {
        id: 1,
        username: 'ianherri',
        firstName: 'ian',
        lastName: 'herri',
        email: 'ian@example.com',
        isAdmin: false,
        twoots: [
          { id: 1, content: 'my first twoot!' },
          { id: 2, content: 'my second twoot! This one is longer' },
        ],
      },
    }
  },
  // this 'watches' the state and executes stuff
  // you get two parameters, old value and new valu for all data properties referenced
  watch: {
    followers(newFollowerCount, oldFollowerCount) {
      if (oldFollowerCount < newFollowerCount) {
        console.log(`${this.user.username} has gained a follower`)
      }
    },
  },
  // these seem to be computed data points
  computed: {
    fullName() {
      return `${this.user.firstName} ${this.user.lastName}`
    },
  },
  // these are methods for tthe component
  methods: {
    followUser() {
      this.followers++
    },
    toggleFavorite(id) {
      console.log(`favorited twoot`, id)
    },
    createNewTwoot() {
      if (this.newTwootContent && this.selectedTwootType !== 'draft') {
        this.user.twoots.unshift({
          id: this.user.twoots.length + 1,
          content: this.newTwootContent,
        })
        this.newTwootContent = ''
      }
    },
  },
  // runs whenever the component is loaded
  mounted() {
    this.followUser()
  },
}
</script>

<!-- CSS styles -->
<style>
.user-profile {
  display: grid;
  grid-template-columns: 1fr 3fr;
  width: 100%;
  padding: 50px 5%;
}

.user-profile__user-panel {
  display: flex;
  flex-direction: column;
  margin-right: 50px;
  padding: 20px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid #dfe3e8;
  margin-bottom: auto;
}

.user-profile__admin-badge {
  background: purple;
  color: white;
  border-radius: 5px;
  margin-right: auto;
  padding: 4px;
  margin-top: 10px;
  margin-bottom: 10px;
}

.user-profile__create-twoot {
  padding-top: 20px;
  display: block;
  direction: column;
}

h1 {
  margin: 0;
}
</style>
