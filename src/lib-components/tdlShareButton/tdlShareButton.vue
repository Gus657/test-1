<template>
  <div class="tdl-share-button">
    <md-button @click.prevent="handleShareClicked" class="md-icon-button" :class="{ 'md-primary': primaryColor }" :theme="theme">
      <md-icon :icon-svg="mdiShareVariantIcon"></md-icon>
      <md-tooltip v-if="showTooltip" :md-direction="tooltipDirection ? tooltipDirection : 'bottom'">{{$t("Share")}}</md-tooltip>
    </md-button>

    <md-dialog ref="shareUrlDialog" :style="dialogStyles">
      <md-dialog-content>
        <p class="md-subheading">{{message}}</p>
        <p class="tdl-share-button-url"><a class="md-primary" :href="url" target="_blank" ref="url">{{url}}</a></p>
      </md-dialog-content>

      <md-dialog-actions>
        <md-button class="md-primary" @click="closeDialog()" ref="copy">{{$t("copy url")}}</md-button>
        <md-button class="md-primary" @click="closeDialog()">{{$t("close")}}</md-button>
      </md-dialog-actions>
    </md-dialog>
  </div>
</template>

<script src="./tdlShareButton.js"></script>

<style lang="scss" scoped>
.tdl-share-button-url {
  margin-top: 20px;
}
</style>
