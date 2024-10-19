<script setup>
defineProps({
  msg: String,
})
</script>

<template>
  <h1 class="test-green">{{ msg }}</h1>
</template>

<style lang="scss">
@use '../design-system/nebula/scss/tokens';

.test-green {
  color: tokens.$color-text-green;
}
</style>
