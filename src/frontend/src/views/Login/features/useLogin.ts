import * as yup from 'yup';
import { computed, unref } from 'vue';
import { useRouter } from 'vue-router';
import { useForm, useField, YupSchema } from 'vee-validate';
import { RemovableRef, useStorage } from '@vueuse/core';
import { useI18n } from 'vue-i18n';
import { AVATARS_MOCKS } from '@/constants';
import { getRandom } from '@/utils';
import { AppRoutes } from '@/enum';

export const useLogin = () => {
  const { t } = useI18n();
  // Validation using yup lib
  const schema: YupSchema = yup.object({
    username: yup.string().required(t('nickname_required')).min(3, t('nickname_min_length')),
  });

  const { handleSubmit, errors, meta } = useForm({
    validationSchema: schema,
  });

  const isValid = computed<boolean>(() => unref(meta).valid);

  const { value: username } = useField<string>('username');

  const router = useRouter();
  const storedNickname: RemovableRef<string> = useStorage('nickname', ''); // Save nickname in localStorage
  const storedAvatar: RemovableRef<string> = useStorage('avatar', ''); // Save avatar name in localStorage

  const onSubmit = handleSubmit((): void => {
    if (!unref(isValid)) return;

    storedNickname.value = unref(username).trim();
    storedAvatar.value = getRandom<string>(AVATARS_MOCKS);

    router.push({ name: AppRoutes.Chat });
  });

  return {
    username,
    errors,
    isValid,
    onSubmit,
  };
};
