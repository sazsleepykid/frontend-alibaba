<template>
  <div class="chat-header">
    <div class="session-info">
      <h1 class="session-title">{{ title }}</h1>
      <span class="session-time">Started {{ formattedTime }}</span>
    </div>
    <div class="header-actions">
      <button class="action-button favorite">
        <span class="icon">★</span>
      </button>
      <button class="action-button more">
        <span class="icon">⋮</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'ChatHeader',
  props: {
    title: {
      type: String,
      required: true
    },
    startedAt: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const formattedTime = computed(() => {
      // Simple formatting, can be enhanced with a date library
      return props.startedAt;
    });

    return { formattedTime };
  }
});
</script>

<style scoped>
.chat-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #e0e0e0;
}

.session-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
  color: #333;
}

.session-time {
  font-size: 0.875rem;
  color: #666;
}

.header-actions {
  display: flex;
  gap: 0.5rem;
}

.action-button {
  background: none;
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.action-button:hover {
  background-color: #f0f0f0;
}

.icon {
  font-size: 1.25rem;
  color: #666;
}
</style>