<script setup lang="ts">
import { ref } from 'vue'
import GameCard, {
  type GameCardColor,
  type GameCardVariant,
} from './GameCard.vue'
import ButtonComponent from '../button/ButtonComponent.vue'
import IconComponent from '../icon/IconComponent.vue'

const header = ref('Alias aut deserunt esse explicabo harum, illum laudantium')
const subtitle = ref('Lorem ipsum dolor sit amet consectetur adipisicing elit')
const helpLabel = ref('Adipisicing')
const variant = ref<GameCardVariant>('default')
const color = ref<GameCardColor>('white')
const loadingPercentage = ref(25)
const displayLoadingPercentage = ref(true)
const imageSrc = ref('https://i.imgur.com/IGrj36O.png')
const gameCardColor = ['white', 'purple', 'red', 'green']
const gameCardVariant = ['default', 'loading', 'grayscale', 'skeleton']
</script>

<template>
  <Story>
    <template #controls>
      <HstRadio v-model="color" :options="gameCardColor" title="Color" />
      <HstRadio v-model="variant" :options="gameCardVariant" title="Variant" />
    </template>
    <GameCard
      :header="header"
      :subtitle="subtitle"
      :image-src="imageSrc"
      :help-label="helpLabel"
      :variant="variant"
      :color="color"
      :loading-percentage="loadingPercentage"
      :display-loading-percentage="displayLoadingPercentage"
    >
      <template #game-card-header-actions>
        <ButtonComponent theme="transparent-white" :is-icon="true">
          <IconComponent name="heart" />
        </ButtonComponent>
      </template>
      <template #game-card-actions>
        <ButtonComponent theme="transparent-white"> Purchase </ButtonComponent>
      </template>
    </GameCard>
  </Story>
</template>
