<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="leaveIndex" @mouseenter="enterShow">
        <h2 class="all">全部商品分类</h2>
        <!-- 三级联动 和过渡动画-->
        <transition name="sort">
          <div class="sort" v-show="show">
            <div class="all-sort-list2" @click="goSearch">
              <!-- 一级 -->
              <div class="item" v-for="(c1, index) in categoryList" :key="c1.categoryId">
                <h3 @mouseenter="changeIndex(index)" :class="{ cur: currentIndex == index }">
                  <a href="javascript:;" :data-categoryName="c1.categoryName" :data-category1Id="c1.categoryId">{{ c1.categoryName }}</a>
                </h3>
                <!-- 二级，三级 -->
                <div class="item-list clearfix" :style="{ display: currentIndex == index ? 'block' : 'none' }">
                  <div class="subitem" v-for="c2 in c1.categoryChild" :key="c2.categoryId">
                    <dl class="fore">
                      <dt>
                        <a href="javascript:;" :data-categoryName="c2.categoryName" :data-category2Id="c2.categoryId">{{ c2.categoryName }}</a>
                      </dt>
                      <dd>
                        <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                          <a href="javascript:;" :data-categoryName="c3.categoryName" :data-category3Id="c3.categoryId">{{ c3.categoryName }}</a>
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
//引入方式：是把lodash全部功能函数引入
//最好的引入方式：按需加载
// import throttle from 'lodash/throttle'
import { throttle } from 'lodash'
export default {
  name: 'TypeNav',

  data() {
    return {
      //当前这个属性决定了到底哪个h3上有类名
      currentIndex: -1,
      //控制分类列表的显示和隐藏
      show: true,
    }
  },

  mounted() {
    //如果不是home组件，将分类隐藏
    if (this.$route.path !== '/home') {
      this.show = false
    }
  },
  computed: {
    ...mapState({
      categoryList: (state) => state.home.categoryList,
    }),
  },

  methods: {
    //鼠标进入修改响应式数据currentIndex属性
    //throttle回调函数别用箭头函数，可能出现上下文this问题
    changeIndex: throttle(function (index) {
      this.currentIndex = index
    }, 50),
    //鼠标移开触发此函数
    leaveIndex() {
      this.currentIndex = -1
      if (this.$route.path !== '/home') {
        this.show = false
      }
    },
    //通过事件委派点击链接跳转到search页面
    goSearch(event) {
      // this.$router.push('/search')

      let element = event.target
      //event.target.dataset可以获得节点的自定义属性和属性值
      let { categoryname, category1id, category2id, category3id } = element.dataset
      if (categoryname) {
        //整理路由跳转的参数
        let location = { name: 'search' }
        let query = { categoryName: categoryname }
        //一级分类，二级分类，三级分类的a标签
        if (category1id) {
          //一定是a标签：二级目录
          query.category1Id = category1id
        } else if (category2id) {
          //一定是a标签：三级目录
          query.category2Id = category2id
        } else {
          query.category3Id = category3id
        }
        //如果路由跳转的时候，带有params参数,捎带传递过去
        if (this.$route.params) {
          location.params = this.$route.params
          //整理完参数后动态给路径配置query属性
          location.query = query
          //路由跳转
          this.$router.push(location)
        }
      }
    },
    //当鼠标移入的时候，让商品列表进行展示
    enterShow() {
      if (this.$route.path !== '/home') {
        this.show = true
      }
    },
  },
}
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;
  // border-bottom: 2px solid green;

  .container {
    width: 1200px;
    // width: 800px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }
          .cur {
            background: skyblue;
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          // &:hover {
          //   .item-list {
          //     display: block;
          //   }
          // }
        }

        // .item:hover {
        //   background: skyblue;
        // }
      }
    }
    //过渡动画的样式
    //过渡动画的开始状态(进入)
    .sort-enter {
      height: 0px;
      // transform: rotate(0deg);
    }
    //过渡动画结束状态
    .sort-enter-to {
      height: 461px;
      // transform: rotate(700deg);
    }
    //定义动画的时间、速率
    .sort-enter-active {
      transition: all 0.5s linear;
      overflow: hidden;
    }
  }
}
</style>
