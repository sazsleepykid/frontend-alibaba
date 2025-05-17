<script lang="ts">
import { defineComponent, ref, computed, onMounted, nextTick, watch } from 'vue';
import { useRoute } from 'vue-router';
import TopNav from '../components/TopNavBar.vue';
import Sidebar from '../components/SideBar.vue';
import ChatHeader from '../components/ChatHeader.vue';
import FilterTabs from '../components/FilterTabs.vue';
import ChatBubble from '../components/ChatBubble.vue';
import ChatInput from '../components/ChatInput.vue';

// Define the message types properly
interface BaseMessage {
  id: string;
  sender: 'user' | 'ai';
  content: string;
  mediaType: string;
}

interface SimpleMessage extends BaseMessage {
  title?: undefined;
  actions?: undefined;
}

interface DetailedMessage extends BaseMessage {
  title: string;
  actions: { label: string; action: string }[];
}

type Message = SimpleMessage | DetailedMessage;

export default defineComponent({
  name: 'ChatView',
  components: {
    TopNav,
    Sidebar,
    ChatHeader,
    FilterTabs,
    ChatBubble,
    ChatInput
  },
  setup() {
    const route = useRoute();
    const messagesContainer = ref<HTMLElement | null>(null);
    const activeFilter = ref('');
    const userQuestion = ref('');
    
    // Session data
    const session = ref({
      id: route.params.id as string,
      title: 'Physics: Wave Theory',
      startedAt: 'Started 20 minutes ago',
      mediaCounts: {
        '3D': 3,
        'Text': 5,
        'Audio': 2,
        'Image': 4
      }
    });
    
    // Messages data with proper typing
    const messages = ref<Message[]>([
      {
        id: '1',
        sender: 'ai',
        content: "Let's explore wave theory in physics. I've prepared some resources in different formats. You can click the tabs above to filter by media type. What would you like to start with?",
        mediaType: 'text'
      },
      {
        id: '2',
        sender: 'ai',
        title: 'Key Wave Equations',
        content: `Wave Speed Equation:
v = λ × f

Where v is wave speed, λ is wavelength, and f is frequency

Wave Function:
y(x,t) = A sin(kx - ωt)

Where A is amplitude, k is wave number, and ω is angular frequency

These equations are fundamental to understanding how waves propagate and interact with different mediums.`,
        mediaType: 'text',
        actions: [
          { label: 'Download as PDF', action: 'download' },
          { label: 'Practice problems', action: 'practice' }
        ]
      }
    ]);
    
    // Computed property for filtered messages
    const displayMessages = computed(() => {
      if (!activeFilter.value) {
        return messages.value;
      }
      return messages.value.filter(msg => msg.mediaType === activeFilter.value.toLowerCase());
    });
    
    // Filter content by media type
    const filterContent = (filter: string) => {
      activeFilter.value = filter;
    };
    
    // Send a new message
    const sendMessage = (text: string) => {
      userQuestion.value = text;
      
      // Add user message
      messages.value.push({
        id: Date.now().toString(),
        sender: 'user',
        content: text,
        mediaType: 'text'
      });
      
      // Simulate AI response after a delay
      setTimeout(() => {
        let response: Message;
        
        if (text.toLowerCase().includes('wave equation')) {
          response = {
            id: (Date.now() + 1).toString(),
            sender: 'ai',
            title: 'Wave Equation Summary',
            content: `The wave equation describes how waves propagate:

∂²u/∂t² = c² · ∂²u/∂x²

Where:
- u is the displacement
- t is time
- x is position
- c is the wave speed

This equation applies to many types of waves including sound waves, light waves, and water waves.`,
            mediaType: 'text',
            actions: [
              { label: 'See examples', action: 'examples' }
            ]
          };
        } else {
          response = {
            id: (Date.now() + 1).toString(),
            sender: 'ai',
            content: `That's a great question about ${text}. Let me provide some information about that aspect of wave theory.`,
            mediaType: 'text'
          };
        }
        
        messages.value.push(response);
        userQuestion.value = '';
        
        // Scroll to bottom after message is added
        scrollToBottom();
      }, 1000);
    };
    
    // Scroll to the bottom of the messages container
    const scrollToBottom = async () => {
      await nextTick();
      if (messagesContainer.value) {
        messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
      }
    };
    
    // Watch for changes in messages and scroll to bottom
    watch(
      () => messages.value.length,
      () => scrollToBottom()
    );
    
    // Scroll to bottom on mount
    onMounted(() => {
      scrollToBottom();
    });
    
    return {
      session,
      messages,
      displayMessages,
      activeFilter,
      userQuestion,
      messagesContainer,
      sendMessage,
      filterContent
    };
  }
});
</script>