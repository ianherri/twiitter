<!-- HTML -->
<template>
  <form
    class="create-twoot-panel"
    @submit.prevent="createNewTwoot"
    :class="{ '--exceeded': newTwootCharacterCount > 180 }"
  >
    <label for="newTwoot"
      ><strong>New Twoot</strong> ({{ newTwootCharacterCount }} / 180)</label
    >
    <textarea id="newTwoot" rows="4" v-model="newTwootContent" />

    <div class="create-twoot-panel__submit">
      <div class="create-twoot-type">
        <label for="newTwootType"><strong>type: </strong></label>
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

      <button>Twoot It!</button>
    </div>
  </form>
</template>

<!-- JS  -->
<!-- import then export as a component to render it -->
<script>
export default {
  name: 'CreateTwootPanel',
  data() {
    // this data function returns the data the forms the state of this component
    return {
      newTwootContent: '',
      selectedTwootType: 'instant',
      twootTypes: [
        { value: 'draft', name: 'Draft' },
        { value: 'instant', name: 'Instant Twoot' },
      ],
    }
  },
  // these seem to be computed data points
  computed: {
    newTwootCharacterCount() {
      return this.newTwootContent.length
    },
  },
  // these are methods for tthe component
  methods: {
    createNewTwoot() {
      if (this.newTwootContent && this.selectedTwootType !== 'draft') {
        this.$emit('add-twoot', this.newTwootContent)
        this.newTwootContent = ''
      }
    },
  },
}
</script>

<!-- CSS styles -->
<style lang="scss" scoped>
.create-twoot-panel {
  padding-top: 20px;
  display: block;
  direction: column;

  button {
    margin-top: 10px;
    border-radius: 4px;
  }

  .create-twoot-panel__submit {
    margin-top: 10px;
    display: block;
  }

  &.--exceeded {
    color: red;
    border-color: red;
  }
}
h1 {
  margin: 0;
}
</style>
