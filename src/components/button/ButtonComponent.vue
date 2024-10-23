<script setup lang="ts">
// the ".ce.vue" suffix is used to define a custom element
const { theme, size, direction } = defineProps({
  theme: {
    type: String,
    default: 'fill-purple',
    validator: (value: string) =>
      [
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
      ].includes(value),
  },
  size: {
    type: String,
    default: 'md',
    validator: (value: string) => ['sm', 'md', 'lg'].includes(value),
  },
  direction: {
    type: String,
    default: 'horizontal',
    validator: (value: string) => ['horizontal', 'vertical'].includes(value),
  },
  isIcon: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <button
    type="button"
    :class="[
      'uds-btn',
      `uds-btn--${theme}`,
      `uds-btn--${size}`,
      `uds-btn--${direction}`,
      { 'uds-btn--icon': isIcon },
    ]"
  >
    <slot />
  </button>
</template>

<style lang="scss">
@use '@/scss';

.#{scss.$prefix}btn {
  border: none;
  cursor: pointer;
  user-select: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-decoration-line: none;
  flex-shrink: 0;
  @include scss.transition();

  &[disabled],
  &:disabled {
    cursor: not-allowed;
    pointer-events: none;
  }

  &:focus-visible {
    outline-offset: 2px;
    outline: scss.$color-border-white-medium solid 2px;
  }

  // Size
  &,
  &--md {
    // default size: medium
    @include scss.typography('body-m', 'bold');
    padding: scss.$spacing-spacing-2 scss.$spacing-spacing-4;
    border-radius: scss.$radius-radius-3;
    gap: scss.$spacing-spacing-2;
    height: 40px;
    min-width: 112px;
    > .#{scss.$prefix}icon {
      font-size: scss.$iconography-font-size-6;
      line-height: scss.$iconography-font-size-6;
    }
  }

  &--sm {
    @include scss.typography('caption-l', 'bold');
    padding: scss.$spacing-spacing-1 scss.$spacing-spacing-3;
    border-radius: scss.$radius-radius-2;
    gap: scss.$spacing-spacing-1;
    height: 32px;
    min-width: 96px;
    > .#{scss.$prefix}icon {
      font-size: scss.$iconography-font-size-5;
      line-height: scss.$iconography-font-size-5;
    }
  }

  &--lg {
    @include scss.typography('body-l', 'bold');
    padding: scss.$spacing-spacing-2 scss.$spacing-spacing-8;
    border-radius: scss.$radius-radius-4;
    gap: scss.$spacing-spacing-3;
    height: 48px;
    min-width: 144px;
    > .#{scss.$prefix}icon {
      font-size: scss.$iconography-font-size-8;
      line-height: scss.$iconography-font-size-8;
    }
    &.#{scss.$prefix}btn--vertical {
      @include scss.typography('body-m', 'bold');
      padding: scss.$spacing-spacing-4 scss.$spacing-spacing-8;
      border-radius: scss.$radius-radius-6;
      gap: scss.$spacing-spacing-2;
    }
  }

  &--vertical {
    flex-direction: column;
    height: auto;
  }

  &--icon {
    padding: scss.$spacing-spacing-2;
    min-width: initial;
    width: 40px;

    &.#{scss.$prefix}btn--sm {
      padding: scss.$spacing-spacing-1;
      width: 32px;
    }
    &.#{scss.$prefix}btn--lg {
      padding: scss.$spacing-spacing-2;
      width: 48px;
    }
  }

  // Variants
  &--fill {
    &-purple {
      @include scss.interactive-surface-bg('solid', 'purple');
      color: scss.$color-text-primary;
    }
    &-white {
      @include scss.interactive-surface-bg('solid', 'white');
      color: scss.$color-text-inverted;
    }
    &-yellow {
      @include scss.interactive-surface-bg('solid', 'yellow');
      color: scss.$color-text-inverted;
    }
    &-red {
      @include scss.interactive-surface-bg('solid', 'red');
      color: scss.$color-text-primary;
    }
  }

  &--transparent {
    &-purple {
      @include scss.interactive-surface-bg('transparent', 'purple');
      @include scss.get-utility(map-get(scss.$utilities, 'blur'), '32');
      color: scss.$color-text-purple;
    }
    &-white {
      @include scss.interactive-surface-bg('transparent', 'white');
      @include scss.get-utility(map-get(scss.$utilities, 'blur'), '32');
      color: scss.$color-text-primary;
    }
    &-red {
      @include scss.interactive-surface-bg('transparent', 'red');
      @include scss.get-utility(map-get(scss.$utilities, 'blur'), '32');
      color: scss.$color-text-red;
    }
    &-black {
      @include scss.interactive-surface-bg('transparent', 'black');
      @include scss.get-utility(map-get(scss.$utilities, 'blur'), '32');
      color: scss.$color-text-primary;
    }
  }

  &--ghost {
    &-purple {
      @include scss.interactive-surface-bg('ghost', 'purple');
      color: scss.$color-text-purple;
    }
    &-white {
      @include scss.interactive-surface-bg('ghost', 'white');
      color: scss.$color-text-secondary;
      &:active {
        color: scss.$color-text-primary;
      }
      &:hover {
        color: scss.$color-text-primary;
      }
    }
    &-red {
      @include scss.interactive-surface-bg('ghost', 'red');
      color: scss.$color-text-red;
    }
    &-green {
      @include scss.interactive-surface-bg('ghost', 'green');
      color: scss.$color-text-green;
    }
  }
}
</style>
