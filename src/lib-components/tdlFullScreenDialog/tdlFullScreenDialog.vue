<template>
  <md-dialog
    ref="dialog"
    :class="['tdl-full-screen-dialog', {'plain-view': plainView}, themeClass]"
    :md-shutdown-transition="dialogShutdownTransition"
    :md-click-outside-to-close="!dialogProcessing && closable"
    :md-esc-to-close="!dialogProcessing && closable"
    @open="open"
    @close="close"
  >
    <div class="dialog-overlay" v-if="dialogProcessing"> </div>
    <md-whiteframe class="md-large" md-elevation="1">
      <md-toolbar class="top-actions-toolbar">
        <md-button v-if="closable" @click.native="cancelDialog()" class="md-icon-button">
          <md-icon :icon-svg="mdiCloseIcon"></md-icon>
        </md-button>
        <div class="dialog-titles">
          <p v-if="dialogSubtitle" class="md-caption modal-title-text">{{ dialogSubtitle }}</p>
          <p v-if="dialogTitle" class="md-title modal-title-text">{{ dialogTitle }}</p>
        </div>
        <slot name="extra-actions"></slot>
        <slot name="toolbar-actions">
          <md-button
            v-show="dialogSubmitButton !== 'hidden'"
            class="md-primary md-raised top-action"
            :disabled="dialogSubmitButton === 'disabled'"
            @click.native="actionDialog()">
              {{dialogOkText}}
          </md-button>
        </slot>
      </md-toolbar>
    </md-whiteframe>

    <md-dialog-title class="md-caption modal-title">
      <div class="modal-title-group" :class="{'plain-view': plainView}">
        <div class="dialog-titles">
          <p v-if="dialogSubtitle" class="md-caption dialog-subtitle">{{ dialogSubtitle }}</p>
          <p v-if="dialogTitle">{{ dialogTitle }}</p>
        </div>
        <div class="modal-title__extra-actions">
          <slot name="extra-actions"></slot>
        </div>
        <md-button v-if="closable" @click.native="cancelDialog()" class="md-icon-button">
          <md-icon :icon-svg="mdiCloseIcon"></md-icon>
        </md-button>
      </div>
      <slot name="title-extra"></slot>
    </md-dialog-title>

    <md-dialog-content :style="{'background': dialogContentBackground}" ref="dialogContent">
      <slot></slot>
      <tdl-overlay v-if="showProgressBar">
        <md-spinner md-indeterminate></md-spinner>
      </tdl-overlay>
    </md-dialog-content>

    <md-dialog-actions
      :class="{'always-visible': allowDialogActionsInMobile}"
      v-if="dialogCancelText || $slots['dialog-actions'] || dialogOkText"
    >
      <md-button class="md-primary" @click.native="cancelDialog()" v-if="cancellable">{{dialogCancelText}}</md-button>
      <slot name="dialog-actions">
        <md-button
          v-show="dialogSubmitButton !== 'hidden'"
          class="md-primary md-raised"
          :disabled="dialogSubmitButton === 'disabled'"
          @click.native="actionDialog()">
            {{dialogOkText}}
        </md-button>
      </slot>
    </md-dialog-actions>

  </md-dialog>
</template>

<script src="./tdlFullScreenDialog.js"></script>
<style src="./tdlFullScreenDialog.scss" lang="scss"></style>
