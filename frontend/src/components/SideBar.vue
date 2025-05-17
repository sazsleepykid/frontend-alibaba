<template>
  <aside class="sidebar">
    <div class="sidebar-header">
      <div class="sidebar-logo">
        <span class="logo-letter">S</span>
      </div>
      <span class="sidebar-title">AliTeach</span>
    </div>
    
    <button class="new-session-btn">New Study Session</button>
    
    <div class="recent-sessions">
      <h3 class="section-title">Recent Study Sessions</h3>
      <ul class="session-list">
        <li v-for="session in sessions" :key="session.id" 
            class="session-item"
            :class="{ active: session.id === activeSessionId }"
            @click="selectSession(session.id)">
          <div class="session-icon">{{ session.icon }}</div>
          <div class="session-name">{{ session.name }}</div>
        </li>
      </ul>
    </div>
    
    <div class="user-info">
      <div class="user-initials">JS</div>
      <div class="user-name">Jamie Smith</div>
    </div>
  </aside>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'Sidebar',
  setup() {
    const router = useRouter();
    const activeSessionId = ref('physics');
    
    const sessions = ref([
      { id: 'physics', name: 'Physics: Wave Theory', icon: 'P' },
      { id: 'math', name: 'Math: Calculus Review', icon: 'M' },
      { id: 'history', name: 'History: Ancient Rome', icon: 'H' }
    ]);
    
    const selectSession = (sessionId: string) => {
      activeSessionId.value = sessionId;
      router.push(`/session/${sessionId}`);
    };
    
    const startNewSession = () => {
      // Logic to start a new session
      router.push('/new-session');
    };
    
    return { 
      sessions, 
      activeSessionId, 
      selectSession,
      startNewSession
    };
  }
});
</script>

<style scoped>
.sidebar {
  width: 240px;
  height: 100%;
  background-color: white;
  border-right: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
  padding: 1rem;
}

.sidebar-header {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
}

.sidebar-logo {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background-color: #009688;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-right: 0.5rem;
}

.sidebar-title {
  font-weight: 600;
  font-size: 1.1rem;
}

.new-session-btn {
  background-color: #009688;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.75rem;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 1.5rem;
  transition: background-color 0.2s;
}

.new-session-btn:hover {
  background-color: #00877a;
}

.section-title {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.75rem;
}

.session-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.session-item {
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 4px;
  margin-bottom: 0.25rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.session-item:hover {
  background-color: #f5f5f5;
}

.session-item.active {
  background-color: #e6f7f5;
}

.session-icon {
  width: 24px;
  height: 24px;
  border-radius: 4px;
  background-color: #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.75rem;
  font-size: 0.8rem;
}

.session-item.active .session-icon {
  background-color: #009688;
  color: white;
}

.user-info {
  margin-top: auto;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-top: 1px solid #f0f0f0;
  margin-top: 1rem;
  padding-top: 1rem;
}

.user-initials {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.75rem;
  font-size: 0.8rem;
  font-weight: 600;
}

.user-name {
  font-weight: 500;
  font-size: 0.9rem;
}

.recent-sessions {
  flex: 1;
  overflow-y: auto;
}
</style>