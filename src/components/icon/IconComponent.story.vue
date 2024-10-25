<template>
  <Story>
    <Variant title="Default">
      <template #controls>
        <HstSelect v-model="state.size" :options="sizes" title="Size" />
        <HstRadio v-model="state.weight" :options="weights" title="Weight" />
        <HstSelect v-model="state.icon" :options="icons" title="Icon" />
      </template>
      <div class="uds-text-primary">
        <IconComponent
          :name="state.icon"
          :size="state.size"
          :weight="state.weight"
        />
      </div>
    </Variant>
    <Variant title="List of icons">
      <div class="uds-row uds-g-0 uds-text-primary">
        <div v-for="icon in icons" :key="icon" class="uds-col">
          <span>{{ icon }}</span>
          <IconComponent :name="icon" />
        </div>
      </div>
    </Variant>
  </Story>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import tokens from '../../design-system/nebula/tokens.json'
import IconComponent from './IconComponent.vue'

const sizes = Object.keys(tokens.iconography.font.size)
const weights = Object.keys(tokens.iconography.font.weight)
const icons = Object.keys(tokens.content['icon-glyph'])

const state = ref({
  size: sizes[5],
  weight: weights[0],
  icon: icons[1],
})
</script>
<style>
.uds-row {
  width: 768px;
}
.uds-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid white;
}
</style>
