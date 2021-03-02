<template>
  <div class="tdl-tab" :class="[themeClass]">
      <md-button :href="href" class="md-primary tdl-tab-button" :class="{ 'md-active': isActive }" @click="tabClicked($event)">
        <slot></slot>
      </md-button>
  </div>
</template>

<script src="./tdlTab.js"></script>
<style src="./tdlTab.scss" lang="scss"></style>
