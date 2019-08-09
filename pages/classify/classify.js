// pages/classify/classify.js
// Page({

//   /**
//    * 页面的初始数据
//    */
//   data: {

//   },

//   /**
//    * 生命周期函数--监听页面加载
//    */
//   onLoad: function (options) {

//   },

//   /**
//    * 生命周期函数--监听页面初次渲染完成
//    */
//   onReady: function () {

//   },

//   /**
//    * 生命周期函数--监听页面显示
//    */
//   onShow: function () {

//   },

//   /**
//    * 生命周期函数--监听页面隐藏
//    */
//   onHide: function () {

//   },

//   /**
//    * 生命周期函数--监听页面卸载
//    */
//   onUnload: function () {

//   },

//   /**
//    * 页面相关事件处理函数--监听用户下拉动作
//    */
//   onPullDownRefresh: function () {

//   },

//   /**
//    * 页面上拉触底事件的处理函数
//    */
//   onReachBottom: function () {

//   },

//   /**
//    * 用户点击右上角分享
//    */
//   onShareAppMessage: function () {

//   }
// })


var app = getApp();
Page({
  data: {
    goods: {
      1: {
        id: 1,
        name: 'Tssd',
        pic: '../../resource/icon-xingxing.png',
        sold: 1014,
        price: 2
      },
      2: {
        id: 2,
        name: '协同',
        pic: '../../resource/icon-xingxing.png',
        sold: 1029,
        price: 3
      },
      3: {
        id: 3,
        name: '微管理',
        pic: '../../resource/icon-xingxing.png',
        sold: 1030,
        price: 2
      },
      4: {
        id: 4,
        name: '易打',
        pic: '../../resource/icon-xingxing.png',
        sold: 1059,
        price: 1
      },
      5: {
        id: 5,
        name: 'CAD',
        pic: '../../resource/icon-xingxing.png',
        sold: 1029,
        price: 2
      },
      6: {
        id: 6,
        name: 'Revit',
        pic: '../../resource/icon-xingxing.png',
        sold: 1064,
        price: 2
      },
      7: {
        id: 7,
        name: 'Mep',
        pic: '../../resource/icon-xingxing.png',
        sold: 814,
        price: 3
      },
      8: {
        id: 8,
        name: 'Tsmf',
        pic: '../../resource/icon-xingxing.png',
        sold: 124,
        price: 3
      },
      9: {
        id: 9,
        name: 'Tssc',
        pic: '../../resource/icon-xingxing.png',
        sold: 102,
        price: 5
      }
    },
    goodsList: [
      {
        id: 'hot',
        classifyName: '热销',
        goods: [1, 2, 3, 4, 5]
      },
      {
        id: 'new',
        classifyName: '新品',
        goods: [1, 3]
      },
      {
        id: 'vegetable',
        classifyName: '主打',
        goods: [1, 6, 5]
      },
      {
        id: 'mushroom',
        classifyName: '信息化',
        goods: [2, 7, 8, 9]
      },
      {
        id: 'food',
        classifyName: '超赞',
        goods: [3, 4]
      }
    ],
  
    scroll_height: 0,
  },
  onLoad: function (options) {
    var windowHeight = wx.getSystemInfoSync().windowHeight // 屏幕的高度
    var windowWidth = wx.getSystemInfoSync().windowWidth // 屏幕的宽度
    this.setData({
      scroll_height: windowHeight * 750 / windowWidth
    })
  },
  onShow: function () {
    this.setData({
      classifySeleted: this.data.goodsList[0].id
    });
  },
  onGoodsScroll: function (e) {
    var scrollTop = e.detail.scrollTop,  //滚动的Y轴
      h = 0,
      classifySeleted;
    this.data.goodsList.forEach(function (classify, i) {
      var _h = 30 + classify.goods.length * 72;   //获取右侧内容每个部分的高度
      if (scrollTop >= h-150) {
        classifySeleted = classify.id;
      }
      h += _h;
    });
    this.setData({
      classifySeleted: classifySeleted
    });
  },
  tapClassify: function (e) {
    var self = this;
    var id = e.target.dataset.id;
    self.setData({
      classifyViewed: id
    });

    setTimeout(function () {
      self.setData({
        classifySeleted: id
      });
    }, 100);
  },

});

