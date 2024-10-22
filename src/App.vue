<script setup lang="ts">
import { defineCustomElement } from 'vue'
import ButtonComponent from '@/components/button/ButtonComponent.ce.vue'

customElements.define('uds-button', defineCustomElement(ButtonComponent))
</script>

<template>
  <div class="uds-container text-center">
    <h1 class="uds-typography-headline-l-bold">Ultra Design System - Nebula</h1>
    <br />
    <uds-button>Web Component Example</uds-button>
  </div>
</template>
