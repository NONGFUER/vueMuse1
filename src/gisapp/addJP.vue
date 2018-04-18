<template>
<div class="demo-vsteper-container">
  <div class="step2">
    <p>基盘信息</p>
    <div class="step2-box">
      <div><span>基盘名称</span><input type="text"  placeholder="基盘名称" maxlength="10"></div>
      <div><span>确度</span><input type="text"      placeholder="确度" maxlength="10"></div>
      <div><span>基盘类别</span><input type="text"  placeholder="基盘类别"></div>
      <div><span>基盘区域</span><input type="text"  placeholder="基盘区域"></div>
      <div><span>基盘地址</span><input type="text"  placeholder="基盘地址" maxlength="10"></div>
      <div><span>基盘街道</span><input type="text"  placeholder="基盘街道" maxlength="10"></div>
    </div>
     <p>基盘明细</p>
    <div class="step2-box">
      <div><span>预估日商</span><input type="number"  placeholder="预估日商" maxlength="10" class="rish"><span class="danwei">元</span></div>
      <div><span>预估租金</span><input type="number"  placeholder="确度" maxlength="10" class="rish"><span class="danwei">元</span></div>
      <div><span>面积</span><input type="number"  placeholder="面积" class="rish60"><span class="danwei">平方</span></div>
      <div><span>店宽</span><input type="number"  placeholder="店宽" class="rish"><span class="danwei">米</span></div>
      <div><span>立地</span><input type="text"  placeholder="立地" maxlength="10"></div>
      <div><span>视野</span><input type="text"  placeholder="视野" maxlength="10"></div>
      <div><span>主商圈</span><input type="text"  placeholder="主商圈" maxlength="10"></div>
      <div><span>副商圈</span><input type="text"  placeholder="副商圈" maxlength="10"></div>
    </div>
    <p>道路信息</p>
    <div class="step2-box">
      <div><span>车辆停靠</span><input type="text"  placeholder="车辆停靠" maxlength="10"></div>
      <div><span>通行方向</span><input type="text"  placeholder="通行方向" maxlength="10"></div>
      <div><span>路宽类型</span><input type="text"  placeholder="路宽类型"></div>
    </div>
  </div>  
  <div class="fbutton">
    <mu-raised-button label="下一步" fullWidth backgroundColor="#39ac6a"/>
  </div>
</div>
</template>

<script>
export default {
  name:'addJP',
  components: {
  
  },
  data () {
    return {
      activeStep: 0,
      game1: 0,
      list: ['阴阳师', '影之刃', '天下HD', '穿越火线', '英雄联盟', '王者荣耀'],
      value:"",
      multiLineInput: '',
      multiLineInputErrorText: ''
    }
  },
  computed: {
    finished () {
      return this.activeStep > 2
    }
  },
  methods: {
    handleNext () {
      this.activeStep++
    },
    handlePrev () {
      this.activeStep--
    },
    reset () {
      this.activeStep = 0
    },
    handleInputOverflow (isOverflow) {
      this.inputErrorText = isOverflow ? '超过啦！！！！' : ''
    },
    handleMultiLineOverflow (isOverflow) {
      this.multiLineInputErrorText = isOverflow ? '超过啦！！！！' : ''
    }
  }
}
</script>

<style lang="css">
.paper-content{
  padding: 0.1333rem;
}
.demo-vsteper-container{
  max-width: 10rem;
  margin: auto;
}

.demo-step-button {
  margin-top: 12px;
  margin-right: 12px;
}
.label{
  margin-top: 0.2667rem;
  margin-right: 0.1333rem;
  font-size: 16px;
  position: absolute;
  font-weight: 600;
  color: #222;
}
.paper-input{
  width:6.6667rem;
  float: right;
}
.clearfix:after {
   content:""; 
   display: block; 
   clear:both; 
}
/* lj */
.step2 p {
    color: #999;
    font-size: 16px;
    padding-left: 0.4rem;
    height: 0.88rem;
    line-height: 0.88rem;
    margin: 0;
}
.step2-box {
    padding: 0 0.4rem;
    background: #fff;
}
.step2-box span{
  font-size: 14px;
}
.step2-box div {
    border-bottom: 1px solid #e6e6e6;
    height: 1.2267rem;
    line-height: 1.2267rem;
    position: relative;
}
.step2-box div input {
    position: absolute;
    padding: 0;
    height: 1.1267rem;
    right: 0;
    border: 0;
    width: 80%;
    font-size: 14px;
    text-align: right;
    box-sizing: border-box;
}
input {
    outline: 0;
}
.rish{
  padding-right: 0.5333rem !important;
}
.rish60{
  padding-right: 0.8rem !important;
}
.danwei{
  position: absolute;
  right: 0;
  line-height:1.1267rem
}
.fbutton{
  width:7.2rem;
  margin: 20px auto;
}
</style>