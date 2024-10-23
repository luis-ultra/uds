<template>
  <i :class="`uds-icon uds-icon-${name}`"></i>
</template>
<script setup lang="ts">
defineProps({
  name: {
    type: String,
    required: true,
  },
})
</script>
