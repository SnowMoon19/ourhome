<template>
  <div class="main-container">
    <swiper
        ref="mySwiper"
        :effect="'cards'"
        :grabCursor="true"
        :centeredSlides="true"
        :slidesPerView="'auto'"
        :cards-effect="{
          perSlideOffset: 14,
          perSlideRotate: 3,
          slideShadows: false,
        }"
        @slideChange="onSlideChange"
        :loop="true"
        :modules="modules"
    >
      <swiper-slide v-for="(functionBar, index) in functionBars" :key="functionBar">
        <el-button class="functionBar" :style="randomRgb(index)" @click="goToFunctionPage(index)">
          {{ functionBar.name }}
        </el-button>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import {Swiper, SwiperSlide} from "swiper/vue";

import "swiper/css";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCards } from "swiper";

export default {
  name: "HomePage",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      functionBars: [
        {
          name: "测试1",
          url: "/firstRecord"
        },
        {
          name: "测试2",
          url: "/firstRecord"
        },
        {
          name: "测试3",
          url: "/firstRecord"
        },
        {
          name: "测试4",
          url: "/firstRecord"
        },
      ],
      nowFunctionIndex: 0, // 当前的索引
    }
  },
  methods: {
    /**
     * 只有swiper对象才可以触发，滑动时更新当前的索引值
     */
    onSlideChange(swiper) {
      this.nowFunctionIndex = swiper.activeIndex % this.functionBars.length;
      console.log(this.nowFunctionIndex);
    },
    goToFunctionPage(index) {
      if (index === this.nowFunctionIndex) {
        this.$router.push(this.functionBars[index].url);
      }
    }
  },
  setup() {
    const randomRgb = (index) => {
      let colorList = [
        "#f1dbff", "#8cd5fe", "#bde3cc", "#fed9a5",
        "#f1fe88", "#feafaf", "#b8b7fe"
      ]
      return {
        backgroundColor: colorList[index % colorList.length]
      };
    };
    return {
      modules: [EffectCards],
      randomRgb
    };
  },
};
</script>

<style lang="scss">
.swiper {
  width: 100vw;
  height: 50vh;
  margin-top: 20vh;
  padding-top: 10vh;
}

.swiper-slide {
  border-radius: 2rem; //外边框设置的弧度要与内按键相同，不然就出现残影
  width: 45vw;
  height: 45vh;
  //background: rgba(0, 0, 0, 0) center;
}

.functionBar {
  color: black;
  height: 40vh;
  width: 60vw;
  font-size: 3rem;
  font-family: 华光准圆_CNKI;
  border-radius: 2rem;
  border-left-color: black;
  border-right-color: black;
  border-width: 10px;
  border-top-color: black;
  border-bottom-color: black;
  box-shadow: 0 0 5px rgba(0, 0, 0, 60);
  background: center;
  &:hover {
    //background: white !important; // 子模块的hover背景色
    color: white;
    cursor: pointer;
  }
}

//.swiper-button-next {
//  width: 1000px;
//  background: black;
//}
</style>