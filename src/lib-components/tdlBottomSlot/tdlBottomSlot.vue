<template>
  <md-whiteframe class="tdl-bottom-slot" md-elevation="4" ref="bottomBar">
    <md-toolbar class="tdl-bottom-slot-toolbar" :md-theme="theme">
      <slot>
      </slot>
    </md-toolbar>
  </md-whiteframe>
</template>

<script src="./tdlBottomSlot.js"></script>
<style src="./tdlBottomSlot.scss" lang="scss"></style>
