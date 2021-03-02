<template>
  <div class="tdl-preference-selector" :class="[themeClass]">
    <md-checkbox class="md-primary md-subheading-1" name="active" v-model="active">{{placeholder}}</md-checkbox>
    <md-switch
      class="tdl-preference-selector__switch md-primary md-subheading-1"
      name="private"
      v-model="private"
      :disabled="!active"
    >
      {{$t("Private")}} <span class="tdl-preference-selector__caption">{{$t("(hidden from others)")}}</span>
    </md-switch>
  </div>
</template>

<script src="./tdlPreferenceSelector.js"></script>
<style src="./tdlPreferenceSelector.scss" lang="scss"></style>
