import { mdiMagnify } from "@mdi/js";
import { mdiBullhorn } from "@mdi/js";
import { mdiBriefcaseSearch } from "@mdi/js";
import { mdiBriefcase } from "@mdi/js";
import { mdiBriefcaseClock } from "@mdi/js";
import { mdiHumanGreeting } from "@mdi/js";
import { mdiAccount } from "@mdi/js";
import { mdiForum } from "@mdi/js";
import { mdiRoadVariant } from "@mdi/js";
import { mdiLightbulb } from "@mdi/js";
import { mdiCodeTags } from "@mdi/js";
import { mdiHelpCircle } from "@mdi/js";
import { mdiWeb } from "@mdi/js";

export function defaultDrawerOptions({
                                       DISCOVERY_BASE_URL,
                                       BIO_BASE_URL,
                                       HOMEPAGES_BASE_URL,
                                       REMOTER_BASE_URL,
                                       STARRGATE_BASE_URL,
                                       TORRE_ABOUT_BASE_URL,
                                       TORRE_PROTOCOL_BASE_URL
                                     }, i18n) {
  return [
    {
      text: i18n.t('Search'),
      url: `${DISCOVERY_BASE_URL}${!!i18n.locale && i18n.locale !== 'undefined' ? '/' + i18n.locale : ''}/search`,
      target: '_self',
      iconSvg: mdiMagnify
    },
    {
      text: i18n.t('Jobs/gigs'),
      url: `${DISCOVERY_BASE_URL}${!!i18n.locale && i18n.locale !== 'undefined' ? '/' + i18n.locale : ''}/postings`,
      target: '_self',
      iconSvg: mdiBriefcaseSearch
    },
    {
      text: i18n.t('Post a job'),
      url: `${DISCOVERY_BASE_URL}${!!i18n.locale && i18n.locale !== 'undefined' ? '/' + i18n.locale : ''}/postings/post`,
      target: '_self',
      iconSvg: mdiBullhorn
    },
    {
      text: i18n.t('Your jobs (posted or applied)'),
      url: `${DISCOVERY_BASE_URL}${!!i18n.locale && i18n.locale !== 'undefined' ? '/' + i18n.locale : ''}/postings/list`,
      target: '_self',
      iconSvg: mdiBriefcase
    },
    {
      text: i18n.t('Alerts (preferences)'),
      url: `${DISCOVERY_BASE_URL}${!!i18n.locale && i18n.locale !== 'undefined' ? '/' + i18n.locale : ''}/jobalerts/onboarding`,
      target: '_self',
      iconSvg: mdiBriefcaseClock
    },
    {
      text: i18n.t('Your genome'),
      url: `${BIO_BASE_URL}${!!i18n.locale && i18n.locale !== 'undefined' ? '/' + i18n.locale : ''}/_a/your-bio`,
      target: '_self',
      iconSvg: mdiAccount
    },
    {
      text: i18n.t('Signals'),
      url: `${BIO_BASE_URL}${!!i18n.locale && i18n.locale !== 'undefined' ? '/' + i18n.locale : ''}/_a/your-signals`,
      target: '_self',
      iconSvg: mdiHumanGreeting
    },
    {
      text: i18n.t('Messages'),
      url: `${DISCOVERY_BASE_URL}/login?intent=messenger&next=${i18n.locale ? '/' + i18n.locale : ''}/messenger`,
      target: '_self',
      iconSvg: mdiForum,
      divider: true
    },
    {
      text: i18n.t('Torre\'s product roadmap'),
      url: 'https://trello.com/b/FFNkJBBo/torre-transparent-product-roadmap',
      target: '_blank',
      iconSvg: mdiRoadVariant
    },
    {
      text: i18n.t('Request features'),
      url: `${HOMEPAGES_BASE_URL}${!!i18n.locale && i18n.locale !== 'en' ? '/' + i18n.locale : ''}/request-feature`,
      target: '_blank',
      iconSvg: mdiLightbulb
    },
    {
      text: i18n.t('API for developers'),
      url: `${HOMEPAGES_BASE_URL}${!!i18n.locale && i18n.locale !== 'en' ? '/' + i18n.locale : ''}/request-api`,
      target: '_blank',
      iconSvg: mdiCodeTags
    },
    {
      text: i18n.t('Help'),
      url: `${HOMEPAGES_BASE_URL}${!!i18n.locale && i18n.locale !== 'en' ? '/' + i18n.locale : ''}/help`,
      iconSvg: mdiHelpCircle,
      target: '_blank',
      divider: true
    },
    {
      text: i18n.t('$locale'),
      iconSvg: mdiWeb,
      dialogRef: 'localeSelector',
      divider: true
    }
  ];

}
