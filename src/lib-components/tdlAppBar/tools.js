import { mdiMagnify } from "@mdi/js";
import { mdiBullhorn } from "@mdi/js";
import { mdiBriefcaseSearch } from "@mdi/js";
import { mdiAccount } from "@mdi/js";
import { mdiBriefcase } from "@mdi/js";
import { mdiBriefcaseClock } from "@mdi/js";
import { mdiHumanGreeting } from "@mdi/js";
import { mdiForum } from "@mdi/js";

export function getTools({ DISCOVERY_BASE_URL, BIO_BASE_URL }, i18n, mobile = false) {
  const locale = !!i18n.locale && i18n.locale !== 'undefined' ? '/' + i18n.locale : '';

  const search = {
    id: 'search',
    name: i18n.t('Search'),
    url: `${DISCOVERY_BASE_URL}${locale}/search`,
    iconSvg: mdiMagnify
  };
  const postAJob = {
    id: 'talent',
    name: i18n.t('Post a job'),
    url: `${DISCOVERY_BASE_URL}${locale}/postings/post`,
    iconSvg: mdiBullhorn
  };
  const jobs = {
    id: 'opportunities',
    name: i18n.t('Jobs/gigs'),
    url: `${DISCOVERY_BASE_URL}${locale}/search/jobs`,
    iconSvg: mdiBriefcaseSearch
  };
  const bio = {
    id: 'bio',
    name: i18n.t('Your genome'),
    url: `${BIO_BASE_URL}${locale}/_a/your-bio`,
    iconSvg: mdiAccount
  };
  const yourJobs = {
    id: 'yourJobs',
    name: i18n.t('Your jobs'),
    url: `${DISCOVERY_BASE_URL}/login?intent=listings&next=${locale}/postings/list/posted`,
    target: '_self',
    iconSvg: mdiBriefcase
  };
  const alerts = {
    id: 'alerts',
    name: i18n.t('Alerts'),
    url: `${DISCOVERY_BASE_URL}${locale}/jobalerts/onboarding`,
    iconSvg: mdiBriefcaseClock
  };
  const signals = {
    id: 'signals',
    name: i18n.t('Signals'),
    url: `${BIO_BASE_URL}/_a/your-signals`,
    iconSvg: mdiHumanGreeting
  };
  const messages = {
    id: 'messenger',
    name: i18n.t('Messages'),
    url: `${DISCOVERY_BASE_URL}/login?intent=messenger&next=${locale}/messenger`,
    iconSvg: mdiForum
  };

  return mobile ? [ jobs, postAJob, bio, messages ] : [ search, jobs, postAJob, yourJobs, alerts, bio, signals, messages ];
}
