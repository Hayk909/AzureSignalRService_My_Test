<template>
  <IonItem
    class="message-item"
    :class="messageItemClasses"
  >
    <IonAvatar v-if="!isMine" slot="start">
      <img :src="avatar" alt="Avatar">
    </IonAvatar>

    <IonGrid>
      <IonRow class="message-content">
        <IonCol>
          <div class="message-header">
            <span class="sender-name">{{ sender }}</span>
            <span class="timestamp">{{ formattedTime }}</span>
          </div>
          <div class="message-text">
            {{ message }}
          </div>
        </IonCol>
      </IonRow>
    </IonGrid>

    <IonAvatar v-if="isMine" slot="end">
      <img :src="avatar" alt="Avatar">
    </IonAvatar>
  </IonItem>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import dayjs from 'dayjs';
import {
  IonItem, IonAvatar, IonGrid, IonRow, IonCol,
} from '@ionic/vue';

interface Props {
  sender: string
  avatar: string
  message: string
  timestamp: string | dayjs.Dayjs
  isMine?: boolean
}

const props = defineProps<Props>();

/**
 * Computed Ref Variable that return the current time with format HH:mm
 */
const formattedTime = computed<string>(() => dayjs().format('HH:mm'));

const messageItemClasses = { 'my-message': props.isMine, 'other-message': !props.isMine };
</script>

<style lang="scss" scoped>
@use "./styles/index"
</style>
