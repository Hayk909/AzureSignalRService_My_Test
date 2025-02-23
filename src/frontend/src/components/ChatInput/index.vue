<template>
  <IonFooter>
    <IonToolbar>
      <IonItem>
        <IonInput
          v-model="message"
          :placeholder="$t('enter_message')"
          @keyup.enter="sendMessage"
        />
        <IonButton :disabled="!message.trim()" @click="sendMessage">
          <IonIcon :icon="sendOutline" />
        </IonButton>
      </IonItem>
    </IonToolbar>
  </IonFooter>
</template>

<script setup lang="ts">
import { ref, unref, defineEmits } from 'vue';
import {
  IonFooter, IonToolbar, IonItem, IonInput, IonButton, IonIcon,
} from '@ionic/vue';
import dayjs from 'dayjs';
// eslint-disable-next-line import/no-extraneous-dependencies
import { sendOutline } from 'ionicons/icons';
import { useStorage } from '@vueuse/core';

const nickname = useStorage('nickname', '');

const message = ref('');
const emit = defineEmits(['send']);

const sendMessage = () => {
  if (!message.value.trim()) return;

  emit('send', {
    user: unref(nickname),
    text: unref(message),
    timestamp: dayjs().toISOString(),
  });

  message.value = '';
};
</script>
