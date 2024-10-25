<template>
  <Story>
    <GameCardCarousel
      header-title="Carousel"
      :games="games"
      @game-click="handleGameClick"
      @title-click="handleTitleClick"
    />
  </Story>
</template>
<script setup lang="ts">
import GameCardCarousel, { type Game } from './GameCardCarousel.vue'

const game: Game = {
  id: '1',
  header: 'Game',
  subtitle: 'Subtitle',
  imageSrc: 'https://i.imgur.com/IGrj36O.png',
  buttonText: 'Button',
}

const games = Array(15)
  .fill({})
  .map((_, index) => ({
    ...game,
    id: `${index + 1}`,
  }))

function handleGameClick(game: Game) {
  console.log('🚀 ~ handleGameClick ~ game:', game)
}
function handleTitleClick() {
  console.log('🚀 ~ handleTitleClick ~ handleTitleClick')
}
</script>
