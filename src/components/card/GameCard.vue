<script setup lang="ts">
import { computed } from 'vue'

export type GameCardColor = 'white' | 'purple' | 'red' | 'green'
export type GameCardVariant = 'default' | 'loading' | 'grayscale' | 'skeleton'

interface Props {
  header: string
  subtitle: string
  imageSrc: string
  helpLabel?: string
  color?: GameCardColor
  variant?: GameCardVariant
  loadingPercentage?: number
  displayLoadingPercentage?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  color: 'white',
  variant: 'default',
  loadingPercentage: 0,
  displayLoadingPercentage: false,
})

// Helper to calculate the progress bar in the loading circle
const loadingSvgCircleRadius = 14

const variantClass = computed(() => {
  const baseClass = 'uds-game-card--'
  switch (props.variant) {
    case 'grayscale':
      return `${baseClass}filter-${props.variant}`
    case 'loading':
      return `${baseClass}status-${props.variant}`
    case 'skeleton':
      return `${baseClass}status-${props.variant}`
    case 'default':
    default:
      return ''
  }
})

const helpLabelClass = computed(() => {
  return props.color === 'white' ? '' : `uds-text-${props.color}`
})

const loadingIndicatorClass = computed(() => {
  return props.color === 'white' ? '' : `uds-spinning-wheel--${props.color}`
})

const loadingStrokeDashArray = computed(() => {
  return Math.PI * loadingSvgCircleRadius * 2
})

const loadingStrokeDashOffset = computed(() => {
  return loadingStrokeDashArray.value * (1 - props.loadingPercentage / 100)
})
</script>

<template>
  <div :class="`uds-game-card ${variantClass}`">
    <template v-if="variant === 'skeleton'">
      <figure class="uds-game-card__figure"></figure>
      <div>
        <div class="uds-game-card__subtitle"></div>
        <div class="uds-game-card__title"></div>
      </div>
      <div class="uds-game-card__actions"></div>
    </template>
    <template v-else>
      <figure class="uds-game-card__figure">
        <img v-if="imageSrc" :src="imageSrc" :alt="header" />
        <div
          v-if="variant === 'loading'"
          :class="`uds-spinning-wheel ${loadingIndicatorClass}`"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <circle
              cx="16"
              cy="16"
              r="14"
              stroke="white"
              stroke-opacity="0.1"
              stroke-width="4"
            />
            <circle
              class="uds-spinning-wheel__progress-bar"
              cx="16"
              cy="16"
              :r="loadingSvgCircleRadius"
              transform="rotate(-90 16 16)"
              stroke="white"
              stroke-width="4"
              :stroke-dasharray="loadingStrokeDashArray"
              :stroke-dashoffset="loadingStrokeDashOffset"
              stroke-linecap="round"
            />
          </svg>
          <span v-if="displayLoadingPercentage">{{ loadingPercentage }}%</span>
        </div>
        <div class="uds-game-card__figure__header">
          <slot name="game-card-header-actions"></slot>
        </div>
      </figure>
      <div>
        <div class="uds-game-card__subtitle">
          {{ subtitle }}
        </div>
        <div
          :class="[
            'uds-game-card__title',
            { 'uds-game-card__title--short': !!helpLabel },
          ]"
        >
          {{ header }}
        </div>
      </div>
      <div
        v-if="helpLabel"
        :class="`uds-game-card__help-label ${helpLabelClass}`"
      >
        {{ helpLabel }}
      </div>
      <div class="uds-game-card__actions">
        <slot name="game-card-actions"></slot>
      </div>
    </template>
  </div>
</template>

<style lang="scss">
@use '@/scss';

$component-selector: '.#{scss.$prefix}game-card';

#{$component-selector} {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: scss.$spacing-spacing-3;
  padding: scss.$spacing-spacing-2;
  border-radius: scss.$radius-radius-4;
  color: scss.$color-text-tertiary;
  min-width: 256px;
  max-width: 320px;
  @include scss.typography('body-m');
  @include scss.transition();

  &:hover {
    background-color: scss.$color-interactive-surface-transparent-white-enabled;

    #{$component-selector}__figure__header {
      opacity: 1;
      position: absolute;
      top: scss.$spacing-spacing-2;
      right: scss.$spacing-spacing-2;
    }
  }

  &__figure {
    position: relative;
    aspect-ratio: 3 / 4;
    overflow: hidden;
    margin: 0;
    border-radius: scss.$radius-radius-2;
    background-color: scss.$color-background-white-light;

    img,
    video,
    iframe {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &__header {
      opacity: 0;
    }
  }

  &__subtitle {
    height: 1lh;
    @include scss.line-clamp(1);
  }

  &__title {
    height: 2lh;
    margin-bottom: scss.$spacing-spacing-2;
    color: scss.$color-text-primary;
    @include scss.typography('body-l', 'bold');
    @include scss.line-clamp(2);

    &--short {
      height: 1lh;
      margin-bottom: unset;
      @include scss.line-clamp(1);
    }
  }

  &__help-label {
    @include scss.line-clamp(1);
  }

  &__actions {
    display: flex;
    gap: scss.$spacing-spacing-2;
    min-height: 40px; // medium button size
  }

  &--filter-grayscale {
    figure {
      img,
      iframe {
        opacity: 0.5;
        mix-blend-mode: luminosity;
      }
    }
  }

  &--status-loading {
    figure {
      img,
      iframe {
        filter: blur(16px);
      }
    }
  }

  &--status-skeleton {
    width: 100%;

    #{$component-selector} {
      &__subtitle {
        width: 64%;
      }

      &__subtitle,
      &__title {
        &::after {
          content: ' ';
          display: block;
          height: 1em;
          background-color: scss.$color-background-white-light;
          border-radius: scss.$radius-radius-4;
        }
      }

      &__actions::after {
        content: ' ';
        width: 50%;
        background-color: scss.$color-background-white-light;
        border-radius: scss.$radius-radius-4;
      }
    }
  }
}

// @include scss.media-breakpoint-down('sm') {
//   #{$component-selector}__subtitle {
//     @include scss.typography('caption-l', 'regular');
//   }
// }

// Todo: move to a shared component
// based on https://codepen.io/JMChristensen/pen/AGbeEy
.#{scss.$prefix}spinning-wheel {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: scss.$spacing-spacing-1;
  @include scss.typography('caption-l');

  &__progress-bar {
    transition: stroke-dashoffset 300ms ease-out;
    // Math expression to calculate this value: (PI * RADIUS * 2) * (1 - PERCENTAGE / 100)
    //  where RADIUS is svg->circle->r
    //  stroke-dashoffset: 65.973; // 25%
  }

  &--purple {
    color: scss.$color-text-purple;

    .#{scss.$prefix}spinning-wheel__progress-bar {
      stroke: scss.$color-border-purple;
    }
  }

  &--red {
    color: scss.$color-text-red;

    .#{scss.$prefix}spinning-wheel__progress-bar {
      stroke: scss.$color-border-red;
    }
  }

  &--green {
    color: scss.$color-text-green;

    .#{scss.$prefix}spinning-wheel__progress-bar {
      stroke: scss.$color-border-green;
    }
  }
}
</style>
