<template>
  <div class="tdl-entity-render" :class="[themeClass, {'tdl-entity-render--vertical': vertical}]" :style="cssProps">
    <div v-if="displayPicture" class="tdl-entity-render__picture">
      <tdl-entity-picture
        :entity="entity"
        :borderWidth="imageBorderWidth"
        :size="imageSize"
        :default-margin="false"
        :shape="shape"
      />
    </div>
    <div class="tdl-entity-render__entity-data">
      <h5 :class="['tdl-entity-render__entity-name', {'md-subheading-1': !vertical}, {'md-body-1': vertical}]">
        <a v-if="href" class="tdl-entity-render__link" :href="href" target="_blank">{{entity.name}}</a>
        <span v-else>
          {{entity.name}}
          <span>
            <md-icon v-if="vertical && entityType === 'person'" :icon-svg="mdiMinusCircleIcon" class="tdl-entity-render__icon-rotated"></md-icon>
            <md-tooltip>{{entity.name.replace(/ .*/, "")}} {{$t("doesn’t have a Torre genome, yet.")}}</md-tooltip>
          </span>
        </span>
        <span v-if="entity.nameSuffix" class="text-contrast-54">
          {{entity.nameSuffix}}
        </span>
        <span v-if="displayVerified" :class="[{'tdl-entity-render__verified': !displayWeight}, {'tdl-entity-render__verified-weight': displayWeight}]">
          <md-icon
            :icon-svg="mdiCheckDecagramIcon"
            :size="`${iconSize}px`"
            class="text-contrast-54"
          ></md-icon>
          <md-tooltip md-direction="bottom">
            {{$t("Verified")}}
          </md-tooltip>
        </span>
        <span v-if="displayWeight">
          <tdl-weight-render
            :value="entity.weight"
            icon-color="rgba(0,0,0,0.87)"
            :icon-size="iconSize"
            :person-id="entity.id"
            icon-position="left"
            :infoIcon-display="false"
            :trackable="true"
            :dot-divider="true"
            :dot-divider-size="8"
            :trackRender="trackWeight">
          </tdl-weight-render>
        </span>
      </h5>
      <span
        v-if="displayProfessionalHeadline"
        :class="['tdl-entity-render__professional-headline', {'md-caption': !vertical}, {'md-label': vertical}]"
        :title="entity.professionalHeadline"
      >
        {{entity.professionalHeadline}}
      </span>
      <span v-else-if="vertical" class="tdl-entity-render__professional-headline"></span>
      <span
        v-if="entity.jobsPosted"
        :class="['tdl-entity-render__jobs-posted md-caption']"
      >
        {{entity.jobsPosted}}
      </span>
    </div>
    <div class="tdl-entity-render__actions">
      <tdl-signal-button
        v-if="signalButtonInfo"
        :entityName="entity.name"
        :entityType="entityType"
        :username="signalButtonInfo.username"
        :stateType="signalButtonInfo.signalState"
        :notificationsType="signalButtonInfo.notificationsType"
        @about-signals="aboutSignals"
        @state-update="handleStateUpdate"
        @notifications-type-update="(newType) => handleNotificationsTypeUpdate(newType)"
      />
    </div>
  </div>
</template>

<style src="./tdlEntityRender.scss" lang="scss" scoped></style>
<script src="./tdlEntityRender.js"></script>
<i18n src="./tdlEntityRender.json"></i18n>
