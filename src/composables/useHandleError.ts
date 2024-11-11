import { useCustomToast } from "@/composables/useCustomToast";
import { useI18n } from "vue-i18n";

export const useHandleError = () => {
  const { showToast } = useCustomToast();
  const { t } = useI18n();

  function handleError(error: any) {
    if (error) {
      showToast(
        error?.data?.messages?.[0]?.message ?? t("something_went_wrong"),
        "error"
      );
    }
  }

  return { handleError };
};
