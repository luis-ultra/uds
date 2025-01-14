<script setup lang="ts">
import { computed, ref, useTemplateRef } from 'vue'
import ButtonComponent from '../button/ButtonComponent.vue'
import IconComponent from '../icon/IconComponent.vue'

defineProps<{
  headerTitle: string
}>()

const emit = defineEmits(['titleClick'])

const itemIndex = ref(0)

const slidesContainer = useTemplateRef<HTMLElement>('slidesContainer')

const list = computed(
  () => slidesContainer.value?.getElementsByTagName('ul')[0],
)
const items = computed(() => list.value?.getElementsByTagName('li'))

const itemsBySlide = computed(() => {
  const containerWidth = list.value?.offsetWidth || 0
  const itemWidth = items.value?.[0].offsetWidth || 0
  return Math.floor(containerWidth / itemWidth)
})

function scrollToItem(index: number) {
  const offsetLeft = items.value?.[index].offsetLeft
  list.value?.scrollTo({ left: offsetLeft, behavior: 'smooth' })
}

function scroll(direction: 'next' | 'prev') {
  const offset = direction === 'next' ? itemsBySlide.value : -itemsBySlide.value
  const nextIndex = itemIndex.value + offset
  itemIndex.value = Math.max(
    0,
    Math.min((items.value?.length || 0) - 1, nextIndex),
  )
  scrollToItem(itemIndex.value)
}
</script>
<template>
  <div class="uds-carousel-base">
    <div class="uds-carousel-base__header">
      <div class="uds-carousel-base__header-title">
        <h3 class="uds-typography-headline-s-black" @click="emit('titleClick')">
          {{ headerTitle }}
        </h3>
        <ButtonComponent
          theme="ghost-white"
          :is-icon="true"
          @click="emit('titleClick')"
        >
          <IconComponent name="chevron_right" />
        </ButtonComponent>
      </div>
      <div class="uds-carousel-base__header-actions">
        <ButtonComponent
          :is-icon="true"
          theme="transparent-white"
          @click="scroll('prev')"
        >
          <IconComponent name="chevron_left" />
        </ButtonComponent>
        <ButtonComponent
          :is-icon="true"
          theme="transparent-white"
          @click="scroll('next')"
        >
          <IconComponent name="chevron_right" />
        </ButtonComponent>
      </div>
    </div>
    <div ref="slidesContainer">
      <!-- example: <ul class="uds-carousel-base__slides"> <li class="uds-carousel-base__item">Item 1</li> </ul> -->
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
@use 'sass:map';
@use '@/scss';

.uds-carousel-base {
  display: flex;
  flex-direction: column;
  color: scss.$color-text-primary;
  @include scss.get-utility(map.get(scss.$utilities, 'gap'), '4');

  &__header {
    display: flex;

    &-title {
      flex: 1;
      display: flex;
      align-items: center;
      @include scss.get-utility(map.get(scss.$utilities, 'gap'), '1');
    }

    &-actions {
      display: flex;
      @include scss.get-utility(map.get(scss.$utilities, 'gap'), '1');
    }
  }

  &__slides {
    display: flex;
    flex-wrap: nowrap;
    overflow-y: visible;
    overflow-x: scroll;
    scrollbar-width: none;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    scroll-margin-inline-start: 2.5rem;

    // for lists
    list-style: none;
    margin: 0;
    padding: 0;
  }

  &__item {
    scroll-snap-align: start;
    display: flex;
    flex-shrink: 0;
  }
}
</style>
