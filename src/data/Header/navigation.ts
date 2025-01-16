import { useI18n } from "vue-i18n";

export const navigation = () => {
    const { t } = useI18n();
    return [
        {
            title: t('nav.home'),
            path: "/",
        },
        {
            title: t('nav.services'),
            path: "/services",
        },
        {
            title: t('nav.products'),
            path: "/products",
        },
        {
            title: t('nav.about'),
            path: "/about",
        },
        {
            title: t('nav.contacts'),
            path: "/contacts",
        }

    ];
};