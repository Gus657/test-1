<template>
  <div
      v-if="timerIsRunning"
      :class="['tdl-countdown', { 'tdl-countdown--inline': inline }, { 'tdl-countdown--contrast': contrast }, { 'tdl-countdown--big': big }]"
  >

    <div v-if="!inline && label" :class="['tdl-countdown__label', labelClass]">
      <span><md-icon v-if="labelIconset" :md-iconset="labelIconset"></md-icon></span>
      <label>{{label}}</label>
    </div>

    <div :class="['tdl-countdown__timer timer', { 'timer--has-icon': label && labelIconset }]">
      <span v-if="inline && label" :class="['tdl-countdown__label--inline', labelClass]">{{label}}</span>
      <span class="timer__box">
        <div class="timer__number">{{time.days}}</div>
        <div class="timer__small" v-if="time.days != 1">{{$t("days")}}</div>
        <div class="timer__small" v-else>{{$t("day")}}</div>
      </span>
      <span class="timer__separator"></span>
      <span class="timer__box">
        <div class="timer__number">{{time.hours}}</div>
        <div class="timer__small" v-if="time.hours != 1">{{$t("hours")}}</div>
        <div class="timer__small" v-else>{{$t("hour")}}</div>
      </span>
      <span class="timer__separator"></span>
      <span class="timer__box">
        <div class="timer__number">{{time.minutes}}</div>
        <div class="timer__small">{{$t("min")}}</div>
      </span>
      <span class="timer__separator"></span>
      <span class="timer__box">
        <div class="timer__number">{{time.seconds}}</div>
        <div class="timer__small">{{$t("sec")}}</div>
      </span>

      <div class="timer__edit">
        <slot name="edit-button"></slot>
      </div>
    </div>

  </div>
</template>

<script src="./tdlCountdown.js" lang="ts"></script>
<style src="./tdlCountdown.scss" lang="scss" scoped></style>
