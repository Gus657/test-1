<template>
  <tdl-fullscreendialog
    class="liquid-dialog signals-dialog"
    dialog-alias="signals-about"
    dialog-ok-text=""
    :dialog-title="$t('What are signals?')"
    plain-view
    closable
    dialog-submit-button="hidden"
    ref="dialog"
    @cancel="close"
    @on-close="handleClose"
  >
    <div class="signals-dialog__container">
      <img
        v-lazyload
        data-url="https://s3-us-west-2.amazonaws.com/bio-media/static/signals-about.png"
        class="signals-dialog__image"
        alt="Signals"
      >

      <p class="md-subheading signals-dialog__text">
        {{$t("Signals are a way of compiling a list of people you’ll consider working with.")}}
        {{$t("Others can signal you as well.")}}
      </p>

      <p class="md-subheading signals-dialog__text">
        {{$t("By signaling a person or organization you notify them that you’ll consider working with them. Thus:")}}
      </p>

      <ul class="md-subheading signals-dialog__text">
        <li>
          {{$t("You will be notified of all or relevant jobs they post or when they’re open to new opportunities (your choice).")}}
        </li>
        <li>
          {{$t("When they search for talent, they’ll notice you signaled them.")}}
        </li>
        <li>
          {{$t("Your signals are only visible to people you have signaled. You can, however, share them with others to collaborate.")}}
        </li>
      </ul>

      <p class="md-subheading signals-dialog__text">
        {{$t("55% of jobs are filled via referrals")}}
        <a href="https://zerista.s3.amazonaws.com/item_files/ab2f/attachments/458970/original/source_of_hire_2018_pdf.pdf" target="_blank">
          <sup> 1 </sup>
        </a>
        {{$t(". With Signals, Torre makes it easy for you.")}}
      </p>
      <div v-if="!signalsOnboardingFinished" class="signals-dialog__cta-container">
        <md-button class="signals-dialog__call-to-action md-primary md-raised" @click="goToTutorial">{{$t("SIGNALS TUTORIAL")}}</md-button>
      </div>
    </div>
  </tdl-fullscreendialog>
</template>

<script src="./tdlSignalsAboutDialog.js"></script>
<style src="./tdlSignalsAboutDialog.scss" lang="scss"></style>
