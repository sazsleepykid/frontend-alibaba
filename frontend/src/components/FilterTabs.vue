<template>
  <div class="filter-tabs">
    <button 
      v-for="(count, type) in counts" 
      :key="type"
      class="tab"
      :class="{ active: activeTab === type }"
      @click="setActiveTab(type)"
    >
      <span class="tab-icon" :class="type.toLowerCase()">{{ getIcon(type) }}</span>
      <span class="tab-label">{{ formatType(type) }}</span>
      <span class="tab-count">{{ count }}</span>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'FilterTabs',
  props: {
    counts: {
      type: Object,
      required: true
    }
  },
  setup() {
    const activeTab = ref('');

    const setActiveTab = (tab: string) => {
      activeTab.value = activeTab.value === tab ? '' : tab;
    };

    const getIcon = (type: string) => {
      const icons: Record<string, string> = {
        '3D': '🧊',
        'Text': '📝',
        'Audio': '🔊',
        'Image': '🖼️'
      };
      return icons[type] || '📄';
    };

    const formatType = (type: string) => {
      return type === '3D' ? '3D Concept' : type;
    };

    return { activeTab, setActiveTab, getIcon, formatType };
  }
});
</script>

<style scoped>
.filter-tabs {
  display: flex;
  padding: 0.75rem 1.5rem;
  gap: 0.75rem;
  border-bottom: 1px solid #e0e0e0;
  background-color: #f9f9f9;
}

.tab {
  display: flex;
  align-items: center;
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.875rem;
  color: #555;
}

.tab:hover {
  background-color: #f0f0f0;
}

.tab.active {
  background-color: #e6f7f5;
  color: #009688;
}

.tab-icon {
  margin-right: 0.5rem;
  font-size: 1rem;
}

.tab-count {
  margin-left: 0.5rem;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 0.125rem 0.375rem;
  font-size: 0.75rem;
}

.tab.active .tab-count {
  background-color: rgba(0, 150, 136, 0.2);
}
</style>
