<!-- HTML -->
<template>
  <div class="twoot-item" @click="favoriteTwoot(twoot.id)">
    <div class="user-profile__twoot">
      <div class="twoot-item__user">@{{ username }}</div>
      <div class="twoot-item__content">
        {{ twoot.content }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TwootItem',
  // props used to pass data from parent to child
  // these props are defined in the userprofile component
  props: {
    username: {
      type: String,
      required: true,
    },
    twoot: {
      type: Object,
      required: true,
    },
  },
  methods: {
    favoriteTwoot(id) {
      this.$emit('favorite', id)
    },
  },
}
</script>

<!-- CSS styles -->
<style lang="scss" scoped>
.twoot-item {
  padding: 20px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid #dfe3e8;
  box-sizing: border-box;
  max-width: 400px;
  word-wrap: break-word;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
}
</style>
