import { useI18n } from "vue-i18n";
import { TFirstPage } from "@/types/common";

export const FirstSection = () => {
    const { t } = useI18n();
    return <TFirstPage>{
        sub: t('first.sub'),
        title: t('first.title'),
        text: t('first.text'),
        contacts: t('first.contacts'),
        about: t('first.about'),
    }
};