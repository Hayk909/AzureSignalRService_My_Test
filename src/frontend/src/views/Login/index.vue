<template>
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>{{ $t('enter_nickname') }}</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent class="ion-padding">
      <form @submit.prevent="onSubmit">
        <div class="input-container">
          <IonLabel position="floating" class="styled-label">{{ $t('nickname') }}</IonLabel>
          <IonInput
            v-model="username"
            :class="{'error-input': errors.username}"
            class="styled-input"
            type="text"
            :placeholder="$t('enter_nickname')"
          />
        </div>

        <div class="error-container">
          <IonText class="error-text" :class="{ show: errors.username }">
            {{ errors.username }}
          </IonText>
        </div>

        <IonButton
          :disabled="!isValid"
          expand="full"
          type="submit"
          class="transition-btn"
        >
          {{ $t('enter') }}
        </IonButton>
      </form>
    </IonContent>
  </IonPage>
</template>

<script setup lang="ts">
import {
  IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonLabel, IonText, IonInput, IonButton,
} from '@ionic/vue';
import { useLogin } from './features';

const {
  username,
  errors,
  isValid,
  onSubmit,
} = useLogin();
</script>

<style scoped lang="scss">
@use "./styles/index"
</style>
