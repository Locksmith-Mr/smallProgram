// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "bnrUrl": [{
      "url": "../../resource/swiper/banner1.png"
    }, {
        "url": "../../resource/swiper/banner2.png"
    }, {
        "url": "../../resource/swiper/banner3.png"
    }],
    sortRows: [{
        image: "../../resource/icon-xingxing.png",
        title: "易打软件",
        url: "./"
      },
      {
        image: "../../resource/icon-tiyu.png",
        title: "Psee软件",
        url: "./"
      },
      {
        image: "../../resource/icon-zhanhui.png",
        title: "探索者软件",
        url: "./"
      },
      {
        image: "../../resource/icon-fuli.png",
        title: "抢购",
        url: "./"
      },
      {
        image: "../../resource/icon-zhanhui.png",
        title: "Tssd软件",
        url: "./"
      },
      {
        image: "../../resource/icon-tiyu.png",
        title: "微管理",
        url: "./"
      },
      {
        image: "../../resource/icon-fuli.png",
        title: " 签到",
        url: "./"
      }, {
        image: "../../resource/icon-xingxing.png",
        title: " 官网",
        url: "../gov/gov"
      }
    ],
    shopList:[
     {
        image: "../../resource/swiper/banner1.png",
        content: "专业出图 | 效率至上 | 功能齐全 | 价格实惠",
        title:"Tssd软件",
        price:"77777777",
        url: "./",
        id:0
      },
      {
        image: "../../resource/swiper/banner2.png",
        content: "为签章而生 | 专注转一 | 自带CA认证 | 一键安装",
        title: "微管理软件",
        price: "9999999",
        url: "./",
        id: 1
      },
      {
        image: "../../resource/swiper/banner3.png",
        content: "协作办公 | 多重权限 | 操作简单 | 安装方便",
        title: "协同软件",
        price: "88888888",
        url: "./",
        id: 2
      },
    ]
  },
  // 方法区
  // 跳转详情页
  detail:function(event){
    var postID=event.currentTarget.dataset.id;
    var content = this.data.shopList[postID];
    content=JSON.stringify(content);
    wx.navigateTo({
      url: '../detail/detail?content=' + content,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
     path:"home"
  }
})