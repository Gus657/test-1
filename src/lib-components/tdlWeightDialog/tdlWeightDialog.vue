<template>
  <tdl-fullscreendialog
    class="recommendations-weight-dialog"
    dialog-ok-text=""
    :plain-view="true"
    :dialog-title="$t('Recommendation weight')"
    @on-close="handleClose"
    @cancel="close"
    ref="dialog">
    <div class="content-area content-area--first">
      <p class="md-subheading-1">{{$t("Weight adds credibility to recommendations. Weighted recommendations are given by people who’ve been recommended by others. Your recommendation weight is thus the sum of the weights of the recommendations you’ve received.")}}</p>
      <div class="recommendations-weight-dialog__video-container">
        <video
          id="reputationWeightVideo"
          v-lazyload
          data-url="https://s3-us-west-2.amazonaws.com/bio-media/static/reputationWeight.mp4"
          controls
          controlsList="nodownload nofullscreen"
          poster="https://s3-us-west-2.amazonaws.com/bio-media/static/reputationWeight.png"
        >
          {{$t("Your browser does not support the video tag.")}}
        </video>
      </div>
    </div>
    <div class="content-area">
      <h2 class="md-title">{{$t("How weight is calculated")}}</h2>
      <p class="md-subheading-1">{{$t("The weight of each recommendation is determined by:")}}</p>
      <ul>
        <li class="md-subheading-1" v-html="$t('The <i>longevity of the affiliation</i> between the <i>recommender</i> and the <i>recommended</i>. Longer relationships will yield greater weight.')"></li>
        <li class="md-subheading-1" v-html="$t('The <i>weight of recommendations</i> received by the recommender. So the more recommendations you have, the greater the weight of the recommendations you give.')"></li>
        <li class="md-subheading-1" v-html="$t('The <i>type of relationship</i> between the <i>recommender</i> and the <i>recommended</i>.')"></li>
        <li class="md-subheading-1" v-html="$t('The <i>number of recommendations</i> given by the <i>recommender</i>. With each recommendation you give, the overall weight of your recommendations diminishes proportionally. This means that if you recommend selectively, your recommendations will have greater weight than those given by someone who doesn\'t recommend selectively.')"></li>
      </ul>
    </div>
    <div class="content-area">
      <h2 class="md-title">{{$t("Weights per skill")}}</h2>
      <p class="md-subheading-1">{{$t("The recommendation weight of a skill is the sum of the recommendations that include such skill. The weight of recommendations with multiple skills is divided equally among all.")}}</p>
    </div>
    <div class="content-area">
      <h2 class="md-title">{{$t("The math")}}</h2>
      <p class="md-subheading-1">{{$t("The weight of any given recommendation,")}} <b>wr</b>, {{$t("is calculated using this formula:")}}</p>
      <tdl-weight-dialog-formula />
      <p class="md-subheading-1" v-html="$t('<i><b>t</b></i> is the recommendation weight of the recommender. When the <i>recommender</i> is verified and has a recommendation weight below 100 (for example, new users), <i><b>t</b></i> becomes 100. When the <i>recommender</i> hasn’t been verified yet, <i><b>t</b></i> becomes 0.')"></p>
      <br>
      <p class="md-subheading-1" v-html="$t('<i><b>Lr</b></i> is the longevity of the affiliation between the <i>recommender</i> and the <i>recommended</i>.')"></p>
      <br>
      <p class="md-subheading-1" v-html="$t('<i><b>Fr</b></i> is the relationship type factor. For most relationships, the factor is 1. For recommendations where the <i>recommender</i> is the subordinate (for example, if you were led, hired, taught, mentored by - or received investment from - the person you’re recommending) the factor is the golden ratio (φ = 1.6180339887…).')"></p>
      <br>
      <p class="md-subheading-1"><i><b>d</b></i> {{$t("is the damping factor. A new recommendation can alter the weight of many other recommendations both directly and indirectly. Because of that, recommendation weights must be calculated cyclically. To make recommendation weights easier and faster to compute, the dampening factor slightly reduces the weight of a recommendation. The damping factor is 0.9.")}}</p>
      <br/>
      <p class="md-subheading-1" v-html="$t('The summation adds the multiplication of longevities as well as factors for all the recommendations given by the <i>recommender</i>.')"></p>
      <br>
      <p class="md-subheading-1">{{$t("This formula may be adjusted from time to time to guarantee the relevance of the overall recommendation weight.")}}</p>
    </div>
  </tdl-fullscreendialog>
</template>

<script src="./tdlWeightDialog.js"></script>
<style src="./tdlWeightDialog.scss" lang="scss"></style>
