<template>
<div>
    
  <mu-appbar title="首页" >
    <mu-icon-button icon="menu" slot="left"/>
    <mu-flat-button label="上海" class="demo-flat-button" labelPosition="before" icon="location_on" secondary slot="right"/>
  </mu-appbar>
  <!-- <mu-refresh-control :refreshing="refreshing" :trigger="trigger" @refresh="refresh"/> -->
   <div class="swiper-inner">
    <swiper :options="swiperOption" >
            <swiper-slide class="slide1"></swiper-slide>
            <swiper-slide class="slide2"></swiper-slide>
            <swiper-slide class="slide3"></swiper-slide>
            <swiper-slide class="slide4"></swiper-slide>           
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
   </div>
  <div  class="gridbox col_4">
    <div class="box_col" v-for=" i in 8" :key="i" @click='go(labels[i-1].adres)'>
        <div class="icon-style icon-common" :class="labels[i-1].class"></div>
        <div class="name">{{labels[i-1].label}}</div>
    </div>   
  </div>
  <mu-paper style="position:fixed;bottom:0;width:100%" >
    <mu-bottom-nav  :value="bottomNav" @change="handleChange">
        <mu-bottom-nav-item value="home" title="首页" icon="restore"/>
        <mu-bottom-nav-item value="message" title="消息" icon="favorite"/>
        <mu-bottom-nav-item value="mine" title="我" icon="location_on"/>
    </mu-bottom-nav>
  </mu-paper>
</div>
</template>
<script>
const iconLabels = [{
  label: '基盘',
  class: 'icon-jipan',
  adres: 'jipan',
}, {
  label: '竞争店',
  class: 'icon-jingzhengdian',
  adres: 'jingzhengdian',
}, {
  label: '店铺',
  class: 'icon-mart',
  adres: 'mart',
}, {
  label: '合约管理',
  class: 'icon-agree',
  adres: 'agree',
}, {
  label: '开发报表',
  class: 'icon-excel',
  adres: 'excel',
}, {
  label: '地图找店',
  class: 'icon-gis',
  adres: 'gis',
}, {
  label: '查成交',
  class: 'icon-deal',
  adres: 'deal',
}, {
  label: '开发百科',
  class: 'icon-wiki',
  adres: 'wiki',
}];
export default {
   name: 'Home',
   data () {
    return {
      labels: iconLabels,
      bottomNav: 'home',
      swiperOption: {
          effect: 'coverflow',
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: 'auto',
          loop:true,
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true
          },
          pagination: {
            el: '.swiper-pagination'
          }
      },
      refreshing: false,
      trigger: null
    }
  },
  methods: {
    handleChange (val) {
      this.bottomNav = val
    },
    refresh () {
        this.refreshing = true
        setTimeout(() => {
            this.refreshing = false
        }, 2000)
    },
    go(name) {
      this.$router.push(`${name}`);
    },
  },
  mounted () {
    this.trigger = this.$el
  },
}
</script>

<style lang="less">
.swiper-inner {
    width: 100%;
    height: 4rem;
    margin-top: 0.4rem;
    margin-bottom: 0.4rem;
  }
.swiper-slide {
    background-position: center;
    background-size: cover;
    width: 8rem;
    height: 4rem;
}
.swiper-slide {
    background-position: center;
    background-size: cover;
    &.slide1 {
      background-image:url('../assets/a.jpg')
    }
    &.slide2 {
      background-image:url('../assets/b.jpg')
    }
    &.slide3 {
      background-image:url('../assets/c.jpg')
    }
    &.slide4 {
      background-image:url('../assets/d.jpg')
    }
    &.slide5 {
      background-image:url('../assets/d.jpg')
    }
     &.slide6 {
      background-image:url('../assets/d.jpg')
    }
     &.slide7 {
      background-image:url('../assets/d.jpg')
    }
     &.slide8 {
      background-image:url('../assets/d.jpg')
    }

  }
  .icon-jipan{
  background-position: 0px -4.48rem;
}
.icon-jingzhengdian{
  background-position: 0px -3.36rem;
}
.icon-mart{
  background-position: 0px -31.36rem;
}
.icon-agree{
  background-position: 0px -5.6rem;
}
.icon-biz{
  background-position: 0px -10.08rem;
}
.icon-gis{
  background-position: 0px -83.0025px;
}
.icon-deal{
  background-position: 0px -33.6rem;
}
.icon-wiki{
  background-position: 0px -8.96rem;
}
.icon-excel{
  background-position: 0px -10.08rem;
}
.icon-common{
    display: inline-block;
    width: 0.8533rem;
    height: 0.8533rem;
    margin: 0.2933rem;   
    background-size: 0.8533rem 39.2533rem;
    background-repeat: no-repeat;
    background-image: url(../assets/sprite.svg);
    -webkit-transform: scale(1.6875);
    -moz-transform: scale(1.6875);
    -ms-transform: scale(1.6875);
    -o-transform: scale(1.6875);
    transform: scale(1.6875);
    vertical-align: middle;
    align-items: center;
}
.name{
    margin-top: 0;
    color: #222;
    font-size: 14px;
    text-align: center;
}

.gridbox.col_4 .box_col {
    width: 25%;
    margin: 0.4rem 0 0;
}
.gridbox .box_col {
    float: left;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    text-align: center;
}
.gridbox:after, .gridbox:before {
    display: table;
    content: "";
}

.gridbox:after, ol.inline:after, ul.inline:after {
    clear: both;
}
</style>
