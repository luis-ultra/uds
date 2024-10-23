<script setup lang="ts">
import { defineCustomElement } from 'vue'
import ButtonComponent from '@/components/button/ButtonComponent.vue'

customElements.define(
  'uds-button',
  defineCustomElement(ButtonComponent, { shadowRoot: false }),
)
</script>

<template>
  <div class="uds-container text-center">
    <h1 class="uds-typography-headline-l-bold">Ultra Design System - Nebula</h1>
    <br />
    <uds-button>Web Component Example</uds-button>
  </div>
</template>
