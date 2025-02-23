<template>
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>{{ $t('chat') }}</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <div class="chat-container">
        <div class="messages-list">
          <ChatMessage
            v-for="msg in messages"
            :key="msg.id"
            :sender="msg.user"
            :avatar="msg.avatar"
            :message="msg.text"
            :timestamp="msg.timestamp"
            :is-mine="msg.isMine"
          />
        </div>
      </div>
    </IonContent>

    <ChatInput @send="sendMessage" />
  </IonPage>
</template>

<script setup lang="ts">
import { unref, computed, onMounted } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import {
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
} from '@ionic/vue';
import ChatInput from '@components/ChatInput/index.vue';
import ChatMessage from '@components/ChatMessage/index.vue';

import { useStorage } from '@vueuse/core';
import { useSignalRClientService } from '@/features';
import { ChatMessage as IChatMessage } from '@/types';
import { getAvatarByName, getRandom } from '@/utils';
import { AVATARS_MOCKS } from '@/constants';

const { initialize, sendMessage, data } = useSignalRClientService();

const nickname = useStorage('nickname', '');
const avatar = useStorage('avatar', '');

/**
 *
 * @param {string} name - Name of user
 * @returns {boolean} - The value means , is the message relate to current user
 */
const currentUser = (name: string): boolean => unref(nickname) === name;
/**
 *
 * @param {string} name - Name of user
 * @returns {string} - The value is the path of avatar image
 */
const getAvatar = (name: string): string => {
  const rightAvatar = currentUser(name)
    ? unref(avatar)
    : getRandom(AVATARS_MOCKS.filter((image) => image !== unref(avatar)));

  return getAvatarByName(rightAvatar);
};

/**
 * Filtered array of messages
 */
const messages = computed<IChatMessage[]>(() => unref(data).map((item) => ({
  ...item,
  id: uuidv4(),
  avatar: getAvatar(item.user),
  isMine: currentUser(item.user),
})));

onMounted(async () => {
  await initialize();
});
</script>

<style lang="scss" scoped>
@use "./styles/index"
</style>
