<template>
  <div class="media-controls">
    <button 
      v-for="control in controls" 
      :key="control.label"
      class="control-button"
      @click="$emit('action', control.action)"
    >
      {{ control.label }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MediaControls',
  props: {
    controls: {
      type: Array,
      required: true
    }
  },
  emits: ['action']
});
</script>

<style scoped>
.media-controls {
  display: flex;
  gap: 0.75rem;
  margin-top: 0.75rem;
}

.control-button {
  background-color: #f0f0f0;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  color: #333;
  cursor: pointer;
  transition: background-color 0.2s;
}

.control-button:hover {
  background-color: #e0e0e0;
}
</style>
