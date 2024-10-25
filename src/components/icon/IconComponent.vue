<template>
  <i
    :class="[
      `uds-icon`,
      `uds-icon-${name}`,
      { [`uds-icon--${size}`]: size },
      { [`uds-icon--${weight}`]: weight },
    ]"
  ></i>
</template>
<script setup lang="ts">
defineProps({
  name: {
    type: String,
    required: true,
  },
  size: {
    type: String,
  },
  weight: {
    type: String,
  },
})
</script>
