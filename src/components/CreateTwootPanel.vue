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
    <textarea id="newTwoot" rows="4" v-model="state.newTwootContent" />

    <div class="create-twoot-panel__submit">
      <div class="create-twoot-type">
        <label for="newTwootType"><strong>type: </strong></label>
        <select id="newTwootType" v-model="state.selectedTwootType">
          <option
            :value="option.value"
            v-for="(option, index) in state.twootTypes"
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
import { reactive, computed } from 'vue'

export default {
  name: 'CreateTwootPanel',

  setup(props, ctx) {
    const state = reactive({
      newTwootContent: '',
      selectedTwootType: 'instant',
      twootTypes: [
        { value: 'draft', name: 'Draft' },
        { value: 'instant', name: 'Instant Twoot' },
      ],
    })

    const newTwootCharacterCount = computed(() => state.newTwootContent.length)

    function createNewTwoot() {
      if (state.newTwootContent && state.selectedTwootType !== 'draft') {
        ctx.emit('add-twoot', state.newTwootContent)
        state.newTwootContent = ''
      }
    }

    return {
      state,
      newTwootCharacterCount,
      createNewTwoot,
    }
  },
}
</script>

<!-- CSS styles -->
<style lang="scss" scoped>
.create-twoot-panel {
  padding-top: 20px;
  display: block;
  direction: column;

  .create-twoot-panel__submit {
    margin-top: 10px;
    display: block;
  }

  textarea {
    border: 1px solid #dfe3e8;
    border-radius: 5px;
    resize: none;
  }

  &.--exceeded {
    color: red;
    border-color: red;
  }

  button {
    margin-top: 10px;
    padding: 5px 10px 5px 10px;
    border-radius: 4px;
    background-color: deeppink;
    border: 0;
    color: white;
    justify-self: right;
  }
}
h1 {
  margin: 0;
}
</style>
