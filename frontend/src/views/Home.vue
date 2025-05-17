<template>
  <div class="home-view">
    <TopNav />
    <div class="layout">
      <Sidebar />
      <main class="main-content">
        <h1>Welcome to AliTeach</h1>
        <p>Select a recent session from the sidebar or start a new study session.</p>
        
        <div class="session-cards">
          <div v-for="session in recentSessions" :key="session.id" class="session-card" @click="goToSession(session.id)">
            <div class="card-icon" :class="session.subject.toLowerCase()">
              {{ session.subject[0] }}
            </div>
            <div class="card-content">
              <h3>{{ session.title }}</h3>
              <p>{{ session.lastActive }}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import TopNav from '../components/TopNavBar.vue';
import Sidebar from '../components/SideBar.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    TopNav,
    Sidebar
  },
  setup() {
    const router = useRouter();
    
    const recentSessions = ref([
      {
        id: 'physics-1',
        title: 'Physics: Wave Theory',
        subject: 'Physics',
        lastActive: 'Last active 2 hours ago'
      },
      {
        id: 'math-1',
        title: 'Math: Calculus Review',
        subject: 'Math',
        lastActive: 'Last active yesterday'
      },
      {
        id: 'history-1',
        title: 'History: Ancient Rome',
        subject: 'History',
        lastActive: 'Last active 3 days ago'
      }
    ]);
    
    const goToSession = (sessionId: string) => {
      router.push(`/session/${sessionId}`);
    };
    
    return {
      recentSessions,
      goToSession
    };
  }
});
</script>

<style scoped>
.layout {
  display: flex;
  height: calc(100vh - 64px);
}

.main-content {
  flex: 1;
  padding: 2rem;
  background-color: #f9f9f9;
  overflow-y: auto;
}

.session-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.session-card {
  display: flex;
  background-color: white;
  border-radius: 8px;
  padding: 1.25rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.session-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.card-icon {
  width: 48px;
  height: 48px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.25rem;
  margin-right: 1rem;
  color: white;
}

.card-icon.physics {
  background-color: #2196F3;
}

.card-icon.math {
  background-color: #4CAF50;
}

.card-icon.history {
  background-color: #FF9800;
}

.card-content h3 {
  margin: 0 0 0.5rem;
  font-size: 1.1rem;
}

.card-content p {
  margin: 0;
  color: #666;
  font-size: 0.875rem;
}
</style>