<template>
  <div class="tdl-boards-slide">
    <md-button
      :class="[
        'md-fab md-clean tdl-boards-slide__control-button',
        { 'tdl-boards-slide__control-button--hidden': isFirstSlide }
      ]"
      @click="goToPrevSlide"
    >
      <md-icon :icon-svg="mdiArrowLeftIcon"></md-icon>
    </md-button>

    <md-card class="tdl-boards-slide__card">
      <md-boards
        ref="boards"
        :md-swipeable="true"
        :hide-dots="hideDots"
        @change="handleBoardChange"
      >
        <md-board
          v-for="(slide, index) in slides"
          class="tdl-boards-slide__slide slide"
          :key="index"
        >
          <div class="slide__media-container">
            <component
              v-if="slide.component"
              :is="slide.component"
              v-bind="slide.props"
            ></component>
            <img
              v-if="slide.image"
              v-lazyload
              :data-url="slide.image"
              :alt="slide.title"
            />
            <video
              v-if="slide.video"
              :ref="`video-${index}`"
              muted
              loop
              playsinline
              :poster="slide.poster"
            >
              <source :src="slide.video" type="video/mp4">
              Your browser does not support the video tag.
            </video>
          </div>
          <div class="slide__content">
            <p class="md-headline slide__title">
              {{slide.title}}
            </p>
            <p class="md-subheading slide__text">
              {{slide.text}}
            </p>
            <md-button
              class="md-raised slide__button"
              @click="goToNextSlide"
            >
              {{ nextActionButtonText }}
            </md-button>
          </div>
        </md-board>
      </md-boards>
    </md-card>

    <md-button
      :class="[
        'md-fab md-clean tdl-boards-slide__control-button',
        { 'tdl-boards-slide__control-button--hidden': isLastSlide }
      ]"
      @click="goToNextSlide"
    >
      <md-icon :icon-svg="mdiArrowRightIcon"></md-icon>
    </md-button>
  </div>
</template>

<script src="./tdlBoardsSlide.js" lang="js"></script>
<style src="./tdlBoardsSlide.scss" lang="scss" scoped></style>
