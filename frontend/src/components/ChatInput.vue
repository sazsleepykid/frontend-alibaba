<template>
  <div class="chat-input">
    <div class="input-actions">
      <button class="action-btn add">
        <span class="icon">+</span>
        Add Media
      </button>
      <div class="format-buttons">
        <button class="format-btn">T</button>
        <button class="format-btn">🖼️</button>
        <button class="format-btn">✏️</button>
        <button class="format-btn">⚙️</button>
      </div>
    </div>
    <div class="input-container">
      <textarea 
        v-model="message" 
        placeholder="Ask a question or type / for commands..."
        @keydown.enter.prevent="sendMessage"
      ></textarea>
      <button class="send-button" @click="sendMessage" :disabled="!message.trim()">
        <span class="send-icon">→</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'ChatInput',
  emits: ['send'],
  setup(props, { emit }) {
    const message = ref('');

    const sendMessage = () => {
      if (message.value.trim()) {
        emit('send', message.value);
        message.value = '';
      }
    };

    return { message, sendMessage };
  }
});
</script>

<style scoped>
.chat-input {
  border-top: 1px solid #e0e0e0;
  padding: 0.75rem 1.5rem 1.5rem;
}

.input-actions {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
}

.action-btn {
  display: flex;
  align-items: center;
  background: none;
  border: none;
  color: #009688;
  font-weight: 500;
  cursor: pointer;
  padding: 0.375rem 0.75rem;
  border-radius: 4px;
}

.action-btn:hover {
  background-color: #f0f0f0;
}

.action-btn .icon {
  margin-right: 0.375rem;
}

.format-buttons {
  display: flex;
  gap: 0.5rem;
}

.format-btn {
  width: 32px;
  height: 32px;
  border-radius: 4px;
  border: 1px solid #e0e0e0;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.format-btn:hover {
  background-color: #f0f0f0;
}

.input-container {
  display: flex;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
}

textarea {
  flex: 1;
  border: none;
  padding: 0.75rem;
  min-height: 48px;
  resize: none;
  font-family: inherit;
  font-size: 0.95rem;
}

textarea:focus {
  outline: none;
}

.send-button {
  width: 48px;
  background-color: #009688;
  border: none;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.send-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.send-icon {
  font-size: 1.25rem;
}
</style>
