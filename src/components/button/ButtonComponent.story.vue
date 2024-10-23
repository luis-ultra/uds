<script setup lang="ts">
import { ref } from 'vue'
import ButtonComponent from './ButtonComponent.vue'

const themes = [
  'fill-purple',
  'fill-white',
  'fill-yellow',
  'fill-red',
  'transparent-purple',
  'transparent-white',
  'transparent-red',
  'transparent-black',
  'ghost-purple',
  'ghost-white',
  'ghost-red',
  'ghost-green',
]
const sizes = ['md', 'sm', 'lg']
const directions = ['horizontal', 'vertical']

const state = ref({
  theme: themes[0],
  size: sizes[0],
  disabled: false,
  direction: directions[0],
})
</script>

<template>
  <Story>
    <template #controls>
      <HstSelect v-model="state.theme" :options="themes" title="Theme" />
      <HstRadio v-model="state.size" :options="sizes" title="Size" />
      <HstCheckbox v-model="state.disabled" title="Disabled" />
      <HstRadio
        v-model="state.direction"
        :options="directions"
        title="Direction"
      />
    </template>

    <Variant title="Default">
      <ButtonComponent
        :theme="state.theme"
        :size="state.size"
        :disabled="state.disabled"
        >Click me!</ButtonComponent
      >
    </Variant>
    <Variant title="Text + Icon">
      <ButtonComponent
        :theme="state.theme"
        :size="state.size"
        :disabled="state.disabled"
        :direction="state.direction"
      >
        <span class="uds-icon uds-icon-ultra_games"></span>
        Click me!
      </ButtonComponent>
    </Variant>
    <Variant title="Icon">
      <ButtonComponent
        :is-icon="true"
        :theme="state.theme"
        :size="state.size"
        :disabled="state.disabled"
      >
        <span class="uds-icon uds-icon-ultra_games"></span>
      </ButtonComponent>
    </Variant>
  </Story>
</template>
