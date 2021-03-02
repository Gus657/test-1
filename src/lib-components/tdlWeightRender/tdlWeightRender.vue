<template>
  <span class="recommendation-weight" :class="[themeClass]" :style="cssProps">
    <span v-if="dotDivider" class="recommendation-weight__dot">
      <md-icon 
        :icon-svg="mdiCircleIcon"
        :size="`${dotDividerSize}px`"
      ></md-icon>
    </span>
    <span v-if="iconPosition === 'left' && iconDisplay" class="recommendation-weight__left-column">
      <md-icon 
        v-if="!plusIcon"
        :icon-svg="mdiWeightIcon"
        :size="`${iconSize}px`"
      ></md-icon>
      <tdl-weight-icon
        v-else
        :icon-size="iconSize"
      ></tdl-weight-icon>
      <md-tooltip
        class="recommendation-weight__tooltip"
        md-direction="bottom"
      >
        {{$t('Weight adds credibility to recommendations. Weighted recommendations are given by people who’ve been recommended by others. Your recommendation weight is thus the sum of the weights of the recommendations you’ve received.')}}
      </md-tooltip>
    </span>
    <span class="recommendation-weight__value">{{readableWeight}}</span>
    <span class="recommendation-weight__right-column" :class="{'recommendation-weight__right-column--information-icon': infoIconDisplay}">
      <span v-if="iconPosition === 'right' && iconDisplay" class="recommendation-weight__icon-container">
        <md-icon
          v-if="!plusIcon" 
          :icon-svg="mdiWeightIcon"
          :size="`${iconSize}px`"
        ></md-icon>
        <tdl-weight-icon
          v-else
          :icon-size="iconSize"
        ></tdl-weight-icon>
        <md-tooltip
          v-if="!infoIconDisplay"
          class="recommendation-weight__tooltip"
          md-direction="bottom">
            {{$t('Weight adds credibility to recommendations. Weighted recommendations are given by people who’ve been recommended by others. Your recommendation weight is thus the sum of the weights of the recommendations you’ve received.')}}
        </md-tooltip>
      </span>
      <a v-if="infoIconDisplay" @click.prevent="weightInfo">
        <md-icon
          class="recommendation-weight__information-icon"
          :icon-svg="mdiInformationIcon"
          :icon-color="themeColor"
        ></md-icon>
      </a>
    </span>
  </span>
</template>

<script src="./tdlWeightRender.js"></script>
<style src="./tdlWeightRender.scss" lang="scss" scoped></style>
