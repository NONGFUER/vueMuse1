<template>
    <div class="main_start ">
        <section class="page  ">
            <div class="content-area">
            <div class="mod_box house_lists">              
                <div class="tab_bar flexbox vux-1px-b" data-mark="booth" id="s5">
                    <div class="tab_tit box_col q_district"  data-mark="booth_area" @click="tab(1)">
                        <h2 class="tit">区域</h2>
                        <i class="icon_triangle_down"></i>
                    </div>
                    <div class="tab_tit box_col q_price" data-mark="booth_price" @click="tab(2)">
                        <h2 class="tit">价格</h2>
                        <i class="icon_triangle_down"> </i>
                    </div>
                    <div class="tab_tit box_col active" data-mark="booth_model" @click="tab(3)">
                        <h2 class="tit">多选 </h2>
                        <i class="icon_triangle_down"></i>
                    </div>
                    <div class="tab_tit box_col q_more" data-mark="booth_more" @click="tab(4)">
                        <h3 class="tit">更多</h3>
                        <i class="icon_triangle_down"></i>
                    </div>
                </div>        
            
                <div class="mod_cont">
                    <ul class="lists" data-mark="list_container" >       
                    <li class="pictext" v-for="item in 5" :key="item">
                        <a href="javascript:" @click="go(`jpDetail`)" class="a_mask"></a>
                        <div class="flexbox">
                            <div class="mod_media">
                                <div class="media_main">
                                    <img src="https://image1.ljcdn.com/shfdfs-image/20171014/0f115fd0-4bc3-4fe0-b56f-49226a29f6b7.jpg.210x164.jpg" alt="" class="lazyload">
                                </div>
                            </div>
                            <div class="item_list">
                                <div class="item_main">嘉兴旭辉广场店</div>
                                <div class="item_other text_cut" title="杉林新月环林东路875弄二手房">62.26m²/62.26m²/杉林新月环林东路875弄</div>
                                <div class="item_minor"><span class="price_total"><em>360</em><span class="unit">万</span></span><span class="unit_price">57823元/月</span></div>
                                <div class="tag_box">
                                    <span class="tag subway_house" style="background-color:rgba(89,171,253,0.15);color:rgb(89,171,253)" title="地铁二手房">有摆座</span>
                                    <span class="tag five" style="background-color:rgba(242,161,47,0.15);color:rgb(242,161,47)" title="满五年二手房">住宅型</span>
                                    <span class="tag haskey" style="background-color:rgba(51,190,133,0.15);color:rgb(51,190,133)" title="随时看房二手房">随时看房</span>
                                    <span class="tag elevator" style="background-color:rgba(123,189,255,0.15);color:rgb(123,189,255)" title="有电梯二手房">有摆座</span>
                                </div>
                            </div>
                        </div>
                    </li>
                    </ul>
                </div>               
            </div>
        </div>
    </section>
    <section class="layer_fixed filter_box" style="" data-mark="panel_box" v-if="isMenuActive" @click.self="toggleMenu" >
    
    <header class="tab_bar flexbox">
        <div class="tab_tit box_col" data-mark="button_area" v-bind:class="{ active: isActive1 }" @click="tab(1)">
            <span class="tit">
                区域
            </span>
            <i class="icon_triangle_down">
            </i>
        </div>
        <div class="tab_tit box_col" data-mark="button_price" v-bind:class="{ active: isActive2 }" @click="tab(2)">
            <span class="tit">
                时间
            </span>
            <i class="icon_triangle_down">
            </i>
        </div>
        <div class="tab_tit box_col" v-bind:class="{ active: isActive3 }" data-mark="button_model" @click="tab(3)">
            <span class="tit">
                确度
            </span>
            <i class="icon_triangle_down">
            </i>
        </div>
        <div class="tab_tit box_col" data-mark="button_more" v-bind:class="{ active: isActive4 }" @click="tab(4)">
            <span class="tit">
                更多
            </span>
            <i class="icon_triangle_down">
            </i>
        </div>
    </header>
    
    <div class="content" >       
        <div id="s1" class="filter_item lists_area" v-bind:class="{ active: isActive1 }" data-mark="panel_area">
    
        </div>
        <div id="s2" class="filter_item lists_price" v-bind:class="{ active: isActive2 }" data-mark="panel_price">

        </div>   
        <div id="s3" class="filter_item lists_model " v-bind:class="{ active: isActive3 }" data-mark="panel_model" >

        </div>   
        <div id="s4" class="filter_item lists_more" v-bind:class="{ active: isActive4 }" data-mark="panel_more">     
            <div class="opt_box">
                <a href="javascript:;" class="btn btn_link" data-act="clear">
                    清空条件
                </a>
                <a href="javascript:;" class="btn btn_green q_button" data-act="submit">
                    确定
                </a>
            </div>
        </div>
       
    </div>
        
</section> 
    <mu-float-button icon="add" class="demo-float-button fb" @click="go(`addJP`)" />
  </div>
</template>

<script>


const show = false;
const isActive11 = false;
const isActive21 = false;
const isActive31 = false;
const isActive41 = false;
const isMenuA = false;
export default {
  name: 'jipan',
  components: {
   
  },
  methods: {
      // eslint-disable-next-line
    change(val, label) {
      // console.log('change', val, label);
    },
    toggleMenu() {
      this.isMenuActive = !this.isMenuActive;
      // console.log('event', e);
    },
    tab(num) {
      this.isMenuActive = true;
      if (num === 1) {
        this.isActive1 = true;
        this.isActive2 = false;
        this.isActive3 = false;
        this.isActive4 = false;
      } else if (num === 2) {
        this.isActive1 = false;
        this.isActive2 = true;
        this.isActive3 = false;
        this.isActive4 = false;
      } else if (num === 3) {
        this.isActive1 = false;
        this.isActive2 = false;
        this.isActive3 = true;
        this.isActive4 = false;
      } else if (num === 4) {
        this.isActive1 = false;
        this.isActive2 = false;
        this.isActive3 = false;
        this.isActive4 = true;
      }
    },
    go(name) {
      alert(1);
      this.$router.push(`${name}`);
    },
  },
  data() {
    return {
      showStatus: show,
      isActive1: isActive11,
      isActive2: isActive21,
      isActive3: isActive31,
      isActive4: isActive41,
      isMenuActive: isMenuA,
      radioArea: ['89以下', '90～119', '120及以上'],
      commonList: ['S(已签约)', 'H(一周内)', 'A(一月内)', 'B(三月内)', 'C(半年内)'],
      areaList: ['89以下', '90～119', '120及以上'],
      checklist002: [],
      checkAreaList: [],
    };
  },
};
</script>

<style lang="less">
@import '../styles/ljbase.less';
.icon{
  position: relative;
}
.checklist{
    width: 100%;
    font-size:14px;
}
p{
    font-size: 14px !important;
}
.fb{
    right: 41px;
    bottom: 80px;
    position: fixed;
    z-index: 999;
}

</style>
