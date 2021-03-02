<template>
  <md-theme md-name="light">
    <tdl-fullscreendialog
      :dialog-alias="dialogRouteQuery"
      class="tdl-recommendation-preview"
      dialog-cancel-text="close"
      dialog-ok-text=""
      :dialog-title="$t('Preview')"
      dialog-submit-button="hidden"
      :dialog-progress-bar="!strengths && !person"
      @on-close="closePreview"
      @cancel="closePreview"
      ref="recommendationsPreviewDialog">
      <div v-if="strengths && strengths.length && person">
        <div class="preview">
          <tdl-entity-picture
            :entity="person"
            :borderWidth="5"
            :borderColor="entityPictureBorderColor"
            :size="64"
          />
          <p class="md-subheading-1">{{person.name}} {{$t("is building his/her professional reputation.")}}</p>
          <br/>
          <p class="md-subheading-1">{{$t("For which strengths and skills can you recommend")}} {{firstWord(person.name)}}?</p>
          <md-chips v-model="strengths"></md-chips>
          <md-input-container>
            <div class="preview-input preview-input--select">{{$t("Relationship*")}}</div>
          </md-input-container>
          <p class="md-subheading-1 duration-label duration-label--topspace">{{$t("Duration of your interaction for this recommendation:")}}</p>
          <div class="radio-group radio-group--grid">
            <md-radio
              class="radio-group__option"
              v-for="(item, index) in radioOptions"
              :key="index"
              v-model="radioModel"
              :md-value="item['value']"
              name="radioModel">
              <span v-html="item['label']"></span>
            </md-radio>
          </div>
          <md-button md-theme="default" class="md-raised md-primary preview-button">{{$t("RECOMMEND")}}</md-button>
          <br>
        </div>
      </div>
    </tdl-fullscreendialog>
  </md-theme>
</template>

<script src="./tdlRecommendationPreview.js"></script>
<style src="./tdlRecommendationPreview.scss" lang="scss"></style>
<i18n src="./tdlRecommendationPreview.json"></i18n>
