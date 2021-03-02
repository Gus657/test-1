<template>
  <div class="tdl-cards-gallery" :style="cssProps">
    <div class="tdl-cards-gallery__section-container">
      <div :class="['tdl-cards-gallery__action tdl-cards-gallery__action--less', {'tdl-cards-gallery__action--overlapping': buttonOverlapping}]">
        <md-button v-if="showLessButton" :class="['md-icon-button md-primary', {'md-raised': buttonRaised}]" :disabled="isMoving" :theme="theme" @click="moveToPreviousCard">
          <md-icon :icon-svg="buttonIconSet[0]" size="30px"></md-icon>
        </md-button>
      </div>
      <div
        class="tdl-cards-gallery__cards-container"
        :class="{'tdl-cards-gallery__cards-container--less-content': cardsNumber <= cardsPerScreen}"
        :style="{'max-width': currentContainerWidth > 0 && !removeMaxWidthConstraint ? `${currentContainerWidth}px` : ''}"
        ref="container"
      >
        <div class="tdl-cards-gallery__cards-list" ref="cardsList">
          <slot></slot>
        </div>
      </div>
      <div :class="['tdl-cards-gallery__action tdl-cards-gallery__action--more', {'tdl-cards-gallery__action--overlapping': buttonOverlapping}]">
        <md-button v-if="showMoreButton" :class="['md-icon-button md-primary', {'md-raised': buttonRaised}]" :disabled="isMoving" :theme="theme" @click="moveToNextCard">
          <md-icon :icon-svg="buttonIconSet[1]" size="30px"></md-icon>
        </md-button>
      </div>
    </div>
  </div>
</template>

<script src="./tdlCardsGallery.js"></script>
<style src="./tdlCardsGallery.scss" lang="scss" scoped></style>
<i18n src="./tdlCardsGallery.json"></i18n>
