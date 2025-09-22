<template>
  <button class="base-button" :disabled="disabled" type="button" @click="$emit('click')">
    <slot />
  </button>
</template>

<script setup>
  const props = defineProps({ disabled: { type: Boolean, default: false } });
</script>

<style scoped>
  .base-button {
    height: 44px;
    border-radius: 10px;
    padding: 0 16px;
    font-weight: 600;
    background: var(--primary);
    color: white;
    border: none;
    cursor: pointer;
    transition:
      transform 0.06s ease,
      box-shadow 0.06s ease;
  }
  .base-button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
  .base-button:not(:disabled):active {
    transform: translateY(1px);
  }
</style>
