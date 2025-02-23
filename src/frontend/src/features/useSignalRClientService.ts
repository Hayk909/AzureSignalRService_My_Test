import { ref } from 'vue';
import { SignalRService } from '@api/services';
import { Message } from '@/types';

// So we use another PORT=5000 and server answers with CORS Error
// I was needed to add CORS policy to server app and use this direct URL
const HUB_URL = 'http://localhost:3209/messenger/hub';

export const useSignalRClientService = () => {
  const signalR: SignalRService = new SignalRService(HUB_URL);

  const data = ref<Message[]>([]);

  /**
   * Adding new message object to data function
   * @param {Message} item - Message information
   */
  const addMessage = (item: Message): void => {
    data.value.push(item);
  };

  // Initialize SignalRService
  const initialize = async (): Promise<void> => {
    await signalR.start();

    // Listening message receiving eventer
    signalR.on('ReceiveMessage', (user, text, timestamp) => {
      addMessage({
        user,
        text,
        timestamp,
      });
    });
  };

  /**
   * Message Sending Function
   * @param {Message} message - Message information
   */
  const sendMessage = async (message: Message) => {
    await signalR.send<Message>('SendMessage', message);
  };

  return {
    data,
    initialize,
    sendMessage,
  };
};
