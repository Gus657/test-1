<template>
  <md-dialog class="tdl-interstitial" ref="dialogInterstitial" @close="closed">
    <div class="tdl-interstitial__header">
      <md-button @click="close" class="md-icon-button">
        <md-icon :icon-svg="mdiCloseIcon"></md-icon>
      </md-button>
      <span class="md-title tdl-interstitial__header--text">Torre {{type}}</span>
    </div>
    <div class="tdl-interstitial__content">
      <div class="tdl-interstitial__content--text">
        <span class="md-title tdl-interstitial__content--text__caption">{{$t('Consider Torre $type', { type: type })}}</span>
        <div class="md-title tdl-interstitial__content--text__benefits">
          <p v-for="(content, index) in interstitialContent" :key="index" class="md-subheading-2"> - {{$t(content)}}</p>
        </div>
      </div>
      <div class="tdl-interstitial__content--image">
        <img
          v-lazyload
          :data-url="imageUrl"
          :alt="type"
        >
      </div>
      <div class="tdl-interstitial__buttons">
        <md-button :href="link" class="md-raised md-primary">{{$t('Learn more')}}</md-button>
        <md-button @click="close">{{$t('No, Thank you')}}</md-button>
      </div>
    </div>
  </md-dialog>
</template>

<script src="./tdlInterstitial.js"></script>
<style src="./tdlInterstitial.scss" lang="scss" scoped></style>
