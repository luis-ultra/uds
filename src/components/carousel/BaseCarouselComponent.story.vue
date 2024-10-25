<template>
  <Story>
    <Variant title="Default">
      <BaseCarouselComponent header-title="Carousel">
        <ul class="uds-carousel-base__slides">
          <li class="uds-carousel-base__item first-slide">Example</li>
          <li v-for="index in 15" :key="index" class="uds-carousel-base__item">
            <GameCard
              :header="`Placeholder Header ${index}`"
              subtitle="Placeholder Subtitle"
              image-src="https://i.imgur.com/IGrj36O.png"
            >
              <template #game-card-actions>
                <ButtonComponent theme="transparent-white">
                  Purchase
                </ButtonComponent>
              </template>
            </GameCard>
          </li>
        </ul>
      </BaseCarouselComponent>
    </Variant>
  </Story>
</template>
<script setup lang="ts">
import ButtonComponent from '../button/ButtonComponent.vue'
import GameCard from '../card/GameCard.vue'
import BaseCarouselComponent from './BaseCarouselComponent.vue'
</script>
<style>
.first-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(10, 74, 138);
  width: 100%;
}
</style>
