import TContact from "~/types/contacts";
import { useI18n } from "vue-i18n";
import { ref } from "vue";
export const Contact = () => {
    const { t } = useI18n();
    const contactData = ref<TContact>({
        title: t('contact.title'),
        sub: t('contact.sub'),
        address: t('contact.address'),
        phone: t('contact.phone'),
        mail: t('contact.mail'),
        address_item: t('contact.address_item'),
        phone_item: t('contact.phone_item'),
        mail_item: t('contact.mail_item')
    });
    return contactData.value
}