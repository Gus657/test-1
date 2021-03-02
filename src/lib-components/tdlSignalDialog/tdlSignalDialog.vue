<template>
  <tdl-fullscreendialog
    :dialog-title="$t('Signals')"
    plain-view
    dialog-submit-button="hidden"
    @on-close="close"
    @cancel="close"
    ref="dialog"
  >
    <div class="signal-dialog">
      <p class="md-subtitle signal-dialog__description">
        {{$t("When someone signals you, they're telling you they'd consider working with you.")}}
      </p>
      <div class="signal-dialog__actions">
        <md-button
          class="md-primary md-raised"
          @click="mainAction.action"
        >
          {{mainAction.text}}
        </md-button>
      </div>
    </div>
  </tdl-fullscreendialog>
</template>

<script src="./tdlSignalDialog.js" lang="ts"></script>
<style src="./tdlSignalDialog.scss" lang="scss" scoped></style>
