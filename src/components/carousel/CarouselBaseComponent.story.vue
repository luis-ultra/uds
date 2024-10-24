<template>
  <Story>
    <Variant title="Default">
      <CarouselBaseComponent header-title="Carousel">
        <ul>
          <li v-for="index in 15" :key="index">
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
      </CarouselBaseComponent>
    </Variant>
  </Story>
</template>
<script setup lang="ts">
import ButtonComponent from '../button/ButtonComponent.vue'
import GameCard from '../card/GameCard.vue'
import CarouselBaseComponent from './CarouselBaseComponent.vue'
</script>
