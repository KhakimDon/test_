import { useI18n } from "vue-i18n";
import type { TCard, TWhyUs } from "~/types/components/card";

export const cards = () => {
    const { t } = useI18n();
    return <TCard[]>[
        {
            icon: 2,
            title: t('cards.time.title'),
            sub: t('cards.time.sub'),
        },
        {
            icon: 1,
            title: t('cards.workload.title'),
            sub: t('cards.workload.sub'),
        },
        {
            icon: 4,
            title: t('cards.inconsistencies.title'),
            sub: t('cards.inconsistencies.sub'),
        },
        {
            icon: 3,
            title: t('cards.documentation.title'),
            sub: t('cards.documentation.sub'),
        }
    ]
}

export const whyUs = () => {
    const { t } = useI18n();
    return <TWhyUs[]>[
        {
            title: t('why_us.1'),
        },
        {
            title: t('why_us.2'),
        },
        {
            title: t('why_us.3'),
        },
        {
            title: t('why_us.4'),
        },
        {
            title: t('why_us.5'),
        },
        {
            title: t('why_us.7'),
        },
        {
            title: t('why_us.6'),
        },
        {
            title: t('why_us.9'),
        },
        {
            title: t('why_us.8'),
        },
        {
            title: t('why_us.10'),
        }

    ]
}