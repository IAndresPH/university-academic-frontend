<template>
  <div class="base-input">
    <label v-if="label" :for="id" class="label">{{ label }}</label>
    <input
      :id="id"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :aria-invalid="!!error"
      class="input"
    />
    <p v-if="error" class="error" role="alert">{{ error }}</p>
  </div>
</template>

<script setup>
  const props = defineProps({
    modelValue: { type: [String, Number], default: '' },
    label: { type: String, default: '' },
    placeholder: { type: String, default: '' },
    type: { type: String, default: 'text' },
    error: { type: String, default: '' },
  });
  const emit = defineEmits(['update:modelValue']);
  const id = 'base-input-' + Math.random().toString(36).slice(2, 9);
</script>

<style scoped>
  .base-input {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
  }
  .label {
    font-size: 0.9rem;
    color: var(--muted);
  }
  .input {
    height: 44px;
    padding: 0 12px;
    border-radius: 8px;
    border: 1px solid #e6e9ee;
    font-size: 0.95rem;
    outline: none;
  }
  .input:focus {
    box-shadow: 0 0 0 4px rgba(30, 111, 184, 0.08);
    border-color: var(--primary);
  }
  .error {
    color: var(--danger);
    font-size: 0.85rem;
    margin-top: 0.25rem;
  }
</style>
