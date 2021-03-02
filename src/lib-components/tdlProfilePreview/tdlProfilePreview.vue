<template>
  <md-theme md-name="default">
    <tdl-fullscreendialog
      :dialog-alias="dialogRouteQuery"
      class="tdl-profile-preview"
      :dialog-title="$t('Preview')"
      :dialog-ok-text="''"
      dialog-submit-button="hidden"
      :plain-view="true"
      @on-open="mountSignalsFeatureDiscovery()"
      @on-close="$emit('preview-dialog-closed')"
      @cancel="closeDialog"
      ref="profilePreviewDialog">
      <div v-if="person">
        <div class="preview">
          <div v-if="!!person.picture" class="preview__image" :style="{ backgroundImage: `url(${person.picture})` }"></div>
          <div v-if="!!person.picture" class="preview__scrim"></div>
          
          <div class="preview__share">
            <div class="md-icon-button">
              <md-icon>share</md-icon>
            </div>
          </div>     

          <div class="preview__content">
            <tdl-entity-picture
              class="preview__avatar"
              :entity="person"
              :borderWidth="5"
              :size="120"/>

            <h1 v-if="person.name" class="preview__headline md-headline"> {{$t("Hello, my name is")}} {{ person.name }} <md-icon v-if="person.verified" class="md-icon mdi mdi-check-decagram preview__headline--icon"></md-icon></h1>
            <h2 v-if="person.professionalHeadline" class="preview__title md-title"> {{person.professionalHeadline}} </h2>

            <div class="preview__call-to-actions">
              <div class="preview__call-to-action call-to-action">
                <md-button class="call-to-action__stat-button preview-button">
                  <span class="md-headline call-to-action__stat">
                    <span>{{person.stats.signalers}}</span><md-icon md-iconset="mdi mdi-human-handsup"></md-icon>
                  </span>
                  <div class="md-body-1 call-to-action__text">{{$t("signalers")}}</div>
                </md-button>
                <md-button class="call-to-action__button md-primary md-raised preview-button" ref="signalButtonPreview">SIGNAL</md-button>
              </div>

              <div class="preview__call-to-action call-to-action">
                <md-button class="call-to-action__stat-button preview-button">
                  <span class="md-headline call-to-action__stat">
                    <tdl-weight-render :value="person.weight" size="x-small"></tdl-weight-render>
                  </span>
                  <div class="md-body-1 call-to-action__text">{{$t("recommendation weight")}}</div>
                </md-button>
                <md-button class="call-to-action__button md-primary md-raised preview-button">{{$t("RECOMMEND")}}</md-button>
              </div>

              <div class="preview__call-to-action call-to-action call-to-action--only-button">
                <md-button class="call-to-action__button md-primary md-raised preview-button">{{$t("MESSAGE")}}</md-button>
              </div>
            </div>
          </div>

          <div v-if="displayFeatureDiscovery" :class="['preview__feature-discovery feature-discovery', {'feature-discovery--open': isFeatureDiscoveryOpen}]" ref="signalsFeatureDiscovery">
            <div class="feature-discovery__tap-target"/>
            <div class="feature-discovery__wave"/>
            <div class="feature-discovery__content">
              <h3>{{$t("Signals")}}</h3>
              <p>{{$t("Are a new way of networking. Let")}} {{extractFirstWord(person.name)}} {{$t("know that you may consider working together in future opportunities.")}}</p>
            </div>
          </div>

        </div>
      </div>
    </tdl-fullscreendialog>
  </md-theme>
</template>

<script src="./tdlProfilePreview.js"></script>
<style src="./tdlProfilePreview.scss" lang="scss" scoped></style>
<i18n src="./tdlProfilePreview.json"></i18n>
