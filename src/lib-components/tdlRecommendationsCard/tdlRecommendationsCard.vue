<template>
  <div class="tdl-recommendations-card" :class="[themeClass]" :style="cssProps">
    <div class="tdl-recommendations-card__container" @click.prevent="cardClicked()">
      <md-card class="recommendation-card" :class="{'recommendation-card--no-shadow': noShadow}">
        <md-card-content v-if="highlight !== 'view-all' && person" class="recommendation-card__content">
          <div class="md-body-1 recommendation-card__title">
            <span v-if="highlight">
              <md-icon :icon-svg="highlights[highlight].iconset"></md-icon>
              {{highlights[highlight].title}}
            </span>
          </div>
          <hr :class="{ 'no-highlight': !highlight }">
          <p v-if="action === 'given'" class="md-body-1 content-body content-body--first-name">{{personFirstName(connection.personSource.name)}} {{$t("recommends:")}}</p>
          <div class="content-picture">
            <tdl-entity-picture
              :entity="person"
              :size="80"
              :border-width="6"
              border-color="#ffffff"
              box-shadow="0px 2px 4px rgba(0,0,0,0.5)"
              :default-margin="false">
            </tdl-entity-picture>
          </div>
          <h2 class="md-subheading content-subheading">
            <span class="content-subheading--nowrap content-subheading--overflow">
              {{person.name}}
              <md-icon
                v-if="person.verified"
                :icon-svg="mdiVerifiedIcon"
                class="mdi mdi-check-decagram content-subheading__icon"
              >
                <md-tooltip md-direction="bottom">{{$t("Verified")}}</md-tooltip>
              </md-icon>
            </span>
            <span class="content-subheading--nowrap">
              <tdl-weight-render
                :value="person.weight"
                icon-color="rgba(0,0,0,0.87)"
                :icon-size="19"
                :person-id="person.id"
                icon-position="left"
                :infoIcon-display="false"
                :trackable="true"
                :dot-divider="true"
                :dot-divider-size="8">
              </tdl-weight-render>
            </span>
          </h2>
          <p class="md-body-1 content-body content-body--nowrap">{{person.professionalHeadline}}</p>
          <div class="content-strengths" :style="{'background-color': strengthsColor }">
            <div v-if="action === 'received'" class="md-body-1 content-strengths__title">{{$t("Recommends")}} <span class="tdl-recommendations-card__person-target-name">{{personFirstName(connection.personTarget.name)}}</span> {{$t("for")}}</div>
            <div class="md-subheading content-strengths__content" v-html="strengthsToString(connection.recommendation.strengths)"></div>
            <div class="content-strengths__quotations content-strengths__quotations--open"></div>
            <div class="content-strengths__quotations content-strengths__quotations--close"></div>
          </div>
          <div class="content-relationship">
            <p v-if="action === 'received' && connection.relationship" class="md-body-1">{{personFirstName(person.name)}} {{relationshipActionBeforeAndAfter()[0]}}<span class="tdl-recommendations-card__person-target-name">{{personFirstName(connection.personTarget.name)}}</span>{{relationshipActionBeforeAndAfter()[1]}} <template v-if="connection.relationship !== 'awarder' && connection.relationship !== 'awardee' && connection.relationship !== 'achieved'">{{$t("for")}} {{duration[connection.recommendation.duration]}}</template></p>
            <p v-if="action === 'given' && connection.relationship" class="md-body-1">{{personFirstName(connection.personSource.name)}} {{relationshipAction(personFirstName(person.name))}} <template v-if="connection.relationship !== 'awarder' && connection.relationship !== 'awardee' && connection.relationship !== 'achieved'">{{$t("for")}} {{duration[connection.recommendation.duration]}}</template></p>
            <p class="md-body-1 recommendation-weight-wrapper">
              {{$t("Recommendation weight:")}}
              <tdl-weight-render
                :value="connection.recommendation.weight"
                icon-color="rgba(255,255,255,0.65)"
                :icon-size="20"
                :person-id="person.id"
                icon-position="left"
                :infoIcon-display="false"
                :trackable="true"
                :plus-icon="true">
              </tdl-weight-render>
            </p>
          </div>
        </md-card-content>
        <md-card-content v-else class="recommendation-card__content recommendation-card__content--view-all">
          <span><md-icon :icon-svg="highlights[highlight].iconset" size="62px"></md-icon></span>
          <md-button class="md-primary">{{highlights[highlight].title}}</md-button>
        </md-card-content>
      </md-card>
    </div>
  </div>
</template>

<script src="./tdlRecommendationsCard.js"></script>
<style src="./tdlRecommendationsCard.scss" lang="scss"></style>
