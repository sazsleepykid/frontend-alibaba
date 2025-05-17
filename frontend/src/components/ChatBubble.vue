<template>
  <div class="chat-bubble" :class="message.sender">
    <div class="avatar">
      <div class="avatar-icon">{{ message.sender === 'ai' ? 'AI' : 'U' }}</div>
    </div>
    <div class="bubble-content">
      <div v-if="message.mediaType === 'text'" class="text-content">
        <div v-if="message.title" class="content-title">{{ message.title }}</div>
        <div v-html="formattedContent"></div>
      </div>
      <div v-else-if="message.mediaType === 'image'" class="image-content">
        <img :src="message.content" alt="Image content" />
      </div>
      <div v-else class="text-content">
        {{ message.content }}
      </div>
      
      <div v-if="message.actions && message.actions.length" class="action-buttons">
        <button 
          v-for="action in message.actions" 
          :key="action.label"
          class="action-btn"
        >
          {{ action.label }}
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'ChatBubble',
  props: {
    message: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const formattedContent = computed(() => {
      // Replace newlines with <br> tags and handle equation formatting
      return props.message.content
        .replace(/\n/g, '<br>')
        .replace(/v = λ × f/g, '<strong>v = λ × f</strong>')
        .replace(/y\(x,t\) = A sin\(kx - ωt\)/g, '<strong>y(x,t) = A sin(kx - ωt)</strong>');
    });

    return { formattedContent };
  }
});
</script>

<style scoped>
.chat-bubble {
  display: flex;
  margin-bottom: 1.5rem;
  max-width: 80%;
}

.chat-bubble.user {
  margin-left: auto;
  flex-direction: row-reverse;
}

.avatar {
  margin: 0 0.75rem;
}

.avatar-icon {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.875rem;
}

.chat-bubble.ai .avatar-icon {
  background-color: #e6f7f5;
  color: #009688;
}

.chat-bubble.user .avatar-icon {
  background-color: #e0e0e0;
  color: #555;
}

.bubble-content {
  background-color: #f5f5f5;
  padding: 1rem;
  border-radius: 8px;
  max-width: calc(100% - 64px);
}

.chat-bubble.ai .bubble-content {
  background-color: #f5f5f5;
}

.chat-bubble.user .bubble-content {
  background-color: #e6f7f5;
}

.content-title {
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.text-content {
  line-height: 1.5;
}

.image-content img {
  max-width: 100%;
  border-radius: 4px;
}

.action-buttons {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.75rem;
}

.action-btn {
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 0.375rem 0.75rem;
  font-size: 0.875rem;
  cursor: pointer;
}

.action-btn:hover {
  background-color: #f0f0f0;
}
</style>
