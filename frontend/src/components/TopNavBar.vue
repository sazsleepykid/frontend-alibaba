<template>
  <nav class="top-nav">
    <div class="logo">
      <span class="logo-text">AliTeach</span>
    </div>
    <ul class="nav-links">
      <li><a href="#" class="nav-link">Learning</a></li>
      <li><a href="#" class="nav-link">About</a></li>
      <li><a href="#" class="nav-link">Community</a></li>
    </ul>
    <div class="user-avatar">
      <div class="avatar-container">
        <img v-if="userImage" :src="userImage" alt="User avatar" />
        <div v-else class="avatar-placeholder">
          {{ userInitials }}
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'TopNav',
  props: {
    userName: {
      type: String,
      default: 'JS'
    },
    userImage: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    // Using computed without ref
    const userInitials = computed(() => {
      if (!props.userName) return 'U';
      
      return props.userName
        .split(' ')
        .map(name => name[0] || '')
        .join('')
        .toUpperCase();
    });

    return { userInitials };
  }
});
</script>

<style scoped>
.top-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 2rem;
  border-bottom: 1px solid var(--border);
  background-color: white;
  height: 64px;
}

.logo {
  display: flex;
  align-items: center;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--primary);
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.nav-link {
  text-decoration: none;
  color: var(--text-primary);
  font-weight: 500;
  transition: color 0.2s;
}

.nav-link:hover {
  color: var(--primary);
  text-decoration: none;
}

.user-avatar {
  display: flex;
  align-items: center;
}

.avatar-container {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  overflow: hidden;
  background-color: var(--border);
}

.avatar-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.avatar-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--border);
  color: var(--text-primary);
  font-weight: 600;
  font-size: 0.875rem;
}
</style>