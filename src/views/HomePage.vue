<!--<template>-->
<!--  <div class="main-container">-->

<!--    <swiper-->
<!--        :effect="'cards'"-->
<!--        :grabCursor="true"-->
<!--        :centeredSlides="true"-->
<!--        :modules="modules"-->
<!--        :cards-effect="{-->
<!--          perSlideOffset: 16,-->
<!--          perSlideRotate: 2,-->
<!--          // slideShadows: false,-->
<!--        }"-->
<!--        class="mySwiper"-->
<!--    >-->
<!--      <swiper-slide v-for="(functionBar, index) in functionBars" :key="functionBar" :style="randomRgb(index)">-->
<!--        {{ index }}-->
<!--      </swiper-slide>-->
<!--    </swiper>-->
<!--  </div>-->
<!--</template>-->
<!--<script>-->

<!--import {EffectCards, Swiper} from "swiper";-->
<!--import {SwiperSlide} from "swiper/vue";-->

<!--export default {-->
<!--  components: {-->
<!--    Swiper,-->
<!--    SwiperSlide,-->
<!--  },-->
<!--  data() {-->
<!--    return {-->
<!--      functionBars: ["相册", "日记", "相册"],-->
<!--      randomRgb(index) {-->
<!--        let colorList = [-->
<!--          "#f1dbff", "#8cd5fe", "#bde3cc", "#fed9a5",-->
<!--          "#f1fe88", "#feafaf", "#b8b7fe"-->
<!--        ]-->
<!--        return {-->
<!--          backgroundColor: colorList[index % colorList.length]-->
<!--        };-->
<!--      },-->
<!--    }-->
<!--  },-->
<!--  setup() {-->
<!--    const swiper = new Swiper('.swiper', {-->
<!--      onAny(eventName, ...args) {-->
<!--        console.log('Event: ', eventName);-->
<!--        console.log('Event data: ', args);-->
<!--      }-->
<!--    });-->
<!--    return {-->
<!--      modules: [EffectCards],-->
<!--      swiper-->
<!--    };-->
<!--  },-->
<!--};-->
<!--</script>-->

<!--<style lang="scss">-->


<!--</style>-->