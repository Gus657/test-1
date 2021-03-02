<template>
  <tdl-fullscreendialog
    :dialog-alias="dialogRouteQuery"
    class="tdl-signals-email-preview"
    :class="[themeClass]"
    :dialog-title="$t('Preview')"
    dialog-ok-text=""
    dialog-submit-button="hidden"
    :always-close="true"
    :plain-view="true"
    @on-close="$emit('preview-dialog-closed')"
    @cancel="$emit('preview-dialog-closed')"
    ref="signalsEmailPreviewDialog">
    <div v-if="person">
      <div class="preview">
        <tdl-entity-picture
          class="preview__avatar"
          shape="hexagon"
          :default-margin="false"
          :entity="person"
          :borderWidth="4"
          :size="64"
        />
        <p v-if="person.name" class="preview__signaler preview__paragraph">{{ person.name }}</p>
        <p v-if="person.professionalHeadline"
           class="preview__signaler-headline preview__paragraph md-caption">
          {{person.professionalHeadline}}</p>
        <p class="preview__signal-state preview__paragraph">{{$t("signaled you")}}</p>
        <p class="preview__signal-state-explanation preview__paragraph md-caption">
          ({{extractFirstWord(person.name)}} {{$t("may consider working with you)")}}</p>

        <md-button class="preview__call-to-action md-primary md-raised">{{$t("SIGNAL BACK")}}</md-button>
        <md-button class="preview__call-to-action md-raised">{{$t("VIEW GENOME")}}</md-button>
      </div>
    </div>
  </tdl-fullscreendialog>
</template>

<script src="./tdlSignalsEmailPreview.js"></script>
<style src="./tdlSignalsEmailPreview.scss" lang="scss" scoped></style>
