<template>
  <md-dialog :class="[themeClass]" md-open-from="#custom" md-close-to="#custom" ref="shareForm">
    <md-dialog-title>{{$t("Share")}}</md-dialog-title>

    <md-dialog-content>
      <md-list>
        <md-list-item v-for="name in avalableOptions"
          v-on:click="openLink(config[name])" :key="name">
          <md-icon :icon-svg="config[name].icon"></md-icon>
          <span>{{config[name].label}}</span>
        </md-list-item>
        <md-list-item ref="clipboardItem" class="clipboard-item">
          <md-input-container>
            <template #label>{{clipboardText}}</template>
            <md-input class="clipboard-input" ref="urlInput" v-model="url" readonly></md-input>
          </md-input-container>
        </md-list-item>
      </md-list>
    </md-dialog-content>
    <md-dialog-actions>
      <md-button class="md-primary" @click="close">{{$t("Close")}}</md-button>
    </md-dialog-actions>
  </md-dialog>
</template>


<script src="./tdlSharePopup.js"></script>
<style src="./tdlSharePopup.scss" lang="scss"></style>
