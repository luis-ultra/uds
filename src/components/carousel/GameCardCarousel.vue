<template>
  <BaseCarouselComponent
    :header-title="headerTitle"
    @titleClick="handleTitleClick"
  >
    <ul class="uds-carousel-base__slides uds-game-card-carousel">
      <li v-for="game in games" :key="game.id" class="uds-carousel-base__item">
        <GameCard
          :header="game.header"
          :subtitle="game.subtitle"
          :image-src="game.imageSrc"
        >
          <template #game-card-actions>
            <ButtonComponent
              v-if="game.buttonText"
              theme="transparent-white"
              @click="handleGameClick(game)"
            >
              {{ game.buttonText }}
            </ButtonComponent>
          </template>
        </GameCard>
      </li>
    </ul>
  </BaseCarouselComponent>
</template>
<script setup lang="ts">
import ButtonComponent from '../button/ButtonComponent.vue'
import GameCard from '../card/GameCard.vue'
import BaseCarouselComponent from './BaseCarouselComponent.vue'

export interface Game {
  id: string
  header: string
  subtitle: string
  imageSrc: string
  buttonText?: string
  buttonLink?: string
}

export interface Props {
  headerTitle: string
  headerTitleLink?: string
  games: Game[]
}

const props = defineProps<Props>()

const emit = defineEmits<{
  (e: 'titleClick'): void
  (e: 'gameClick', game: Game): void
}>()

const handleTitleClick = () => {
  if (props.headerTitleLink) {
    window.location.assign(props.headerTitleLink)
  }
  emit('titleClick')
}

const handleGameClick = (game: Game) => {
  if (game.buttonLink) {
    window.open(game.buttonLink)
  }
  emit('gameClick', game)
}
</script>
<style lang="scss">
@use '@/scss';

$component-selector: '#{scss.$prefix}game-card-carousel';

:root {
  --#{$component-selector}-grid-gap: #{scss.$spacing-spacing-4};

  @include scss.media-breakpoint-up('sm') {
    --#{$component-selector}-grid-gap: #{scss.$spacing-spacing-8};
  }
}

.#{$component-selector}.uds-carousel-base__slides {
  gap: var(--#{$component-selector}-grid-gap);

  li.uds-carousel-base__item {
    flex: 0 0 auto;
    width: 60%;

    @include scss.media-breakpoint-up('sm') {
      $columns: 3;
      width: calc(
        (100% - (var(--#{$component-selector}-grid-gap) * ($columns - 1))) /
          $columns
      );
    }

    @include scss.media-breakpoint-up('md') {
      $columns: 4;
      width: calc(
        (100% - (var(--#{$component-selector}-grid-gap) * ($columns - 1))) /
          $columns
      );
    }

    @include scss.media-breakpoint-up('lg') {
      $columns: 5;
      width: calc(
        (100% - (var(--#{$component-selector}-grid-gap) * ($columns - 1))) /
          $columns
      );
    }

    @include scss.media-breakpoint-up('xl') {
      $columns: 7;
      width: calc(
        (100% - (var(--#{$component-selector}-grid-gap) * ($columns - 1))) /
          $columns
      );
    }
  }
}
</style>
