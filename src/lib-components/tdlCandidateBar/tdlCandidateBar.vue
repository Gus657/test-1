<template>
  <md-toolbar
    :class="[
      themeClass,
      'tdl-candidate-bar',
      { 'tdl-candidate-bar--has-bottom-bar': hasBottomBar, 'tdl-candidate-bar--has-applications': opportunitiesAndRanks.length }
    ]"
    :style="style"
  >
    <div
      v-if="selectedOpportunityRank"
      class="tdl-candidate-bar__list-container"
    >
      <md-input-container
        class="tdl-candidate-bar__list"
        md-clear
      >
        <div
          v-if="!selectedOpportunityIsPending"
          class="tdl-candidate-bar__rank rank"
        >
          <span class="md-label">
            {{$t("You rank ")}}&nbsp;
          </span>
          <a
            class="md-label rank__positions"
            :href="selectedCandidateRankingURL"
            target="_blank"
          >
            <span class="md-subheading">
              {{selectedOpportunityRank.position ? numberToOrdinal(selectedOpportunityRank.position) : '?'}}
            </span>
            <span>
              {{$t("out of $total", { total: selectedOpportunityRank.total || '?' })}}
            </span>
          </a>
          <span class="md-label">
            &nbsp;{{$t("for ")}}&nbsp;
          </span>
        </div>
        <div
          v-else
          class="tdl-candidate-bar__rank rank"
        >
          <span class="md-label rank__finish">
            {{$t("Finish your application for")}}&nbsp;
          </span>
        </div>
        <md-select
          v-if="opportunitiesAndRanks.length > 0"
          name="opportunity"
          id="opportunity"
          v-model="selectedOpportunityId"
          :md-menu-options="{ mdSize: isMobile() ? 6 : 7, mdDirection: 'top left', mdAlignTrigger: true }"
          block-scroll
        >
          <md-option
            v-for="opportunityAndRank in opportunitiesAndRanks"
            :key="opportunityAndRank.opportunityId"
            :value="opportunityAndRank.opportunityId"
          >
            {{opportunityAndRank.opportunityObjective}}
          </md-option>
        </md-select>
      </md-input-container>
    </div>
    <div class="tdl-candidate-bar__completion-container">
      <div class="tdl-candidate-bar__completion completion">
        <div
          class="completion__animation"
          ref="animation"
        />
        <div
          v-if="!genomeIsComplete"
          class="completion__steps"
        >
          <div :class="['completion__t-rex', { 'completion__t-rex--hidden': Number.isInteger(completion.step + completion.progress) }]"/>
          <div :class="['completion__step md-label', { 'completion__step--is-ios': isiOS() }]">
            <md-icon
              class="completion__icon"
              :icon-svg="mdiCreation"
            />
          </div>
          <div
            v-for="step in completionSteps"
            :key="step"
            :class="['completion__step md-label', { 'completion__step--locked': step > completion.step, 'completion__step--is-ios': isiOS() }]"
            :ref="'step' + step"
          >
            <md-icon
              v-if="step > completion.step"
              class="completion__icon"
              :icon-svg="mdiLock"
            />
            <md-icon
              v-else-if="step < completion.step"
              class="completion__icon"
              :icon-svg="mdiCheck"
            />
            <template v-else>
              {{step}}
            </template>
          </div>
        </div>
        <div
          v-else-if="selectedOpportunityRank"
          class="tdl-candidate-bar__rank-progress rank-progress"
        >
          <span>
            {{selectedOpportunityRank.total ? numberToOrdinal(selectedOpportunityRank.total) : '?'}}
          </span>
          <div class="rank-progress__bar">
            <md-icon
              class="rank-progress__icon"
              :icon-svg="mdiRocket"
            />
          </div>
          <span>
            {{numberToOrdinal(1)}}
          </span>
        </div>
        <template v-if="isInGenomeCompletionPage && !genomeIsComplete">
          <template v-if="selectedOpportunityRank">
            <p
              v-if="selectedOpportunityIsPending"
              class="completion__ranking-criteria"
            >
              {{$t("Complete your basic genome")}}
            </p>
            <p
              v-else-if="!genomeIsComplete"
              class="completion__ranking-criteria"
            >
              {{$t("Rank higher by completing your genome")}}
            </p>
          </template>
          <p
            v-else-if="!genomeIsComplete"
            class="completion__genome"
          >
            {{$t("Complete your professional genome")}}
          </p>
        </template>
        <template v-else>
          <template v-if="selectedOpportunityRank">
            <a
              v-if="selectedOpportunityIsPending"
              class="completion__genome completion__genome--link md-label"
              :href="completeYourGenomeUrl"
              target="_blank"
            >
              {{$t("Complete your basic genome")}}
            </a>
            <a
              v-else-if="genomeIsComplete"
              class="completion__ranking-criteria completion__ranking-criteria--link md-label"
              :href="rankingCriteriaUrl"
              target="_blank"
            >
              {{$t("Ranking criteria and tips")}}
            </a>
            <a
              v-else-if="!genomeIsComplete"
              class="completion__genome completion__genome--link md-label"
              :href="completeYourGenomeUrl"
              target="_blank"
            >
              {{$t("Complete your professional genome")}}
            </a>
          </template>
          <a
            v-else-if="!genomeIsComplete"
            class="completion__genome completion__genome--link md-label"
            :href="completeYourGenomeUrl"
            target="_blank"
          >
            {{$t("Complete your professional genome")}}
          </a>
        </template>
      </div>
    </div>
  </md-toolbar>
</template>

<script src="./tdlCandidateBar.js"></script>
<style src="./tdlCandidateBar.scss" lang="scss"></style>
<i18n src="./tdlCandidateBar.json"></i18n>
