const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userinfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    // 第一功能区
    sortRows: [{
      image: "../../resource/icon-xingxing.png",
      title: "待付款",
      url: "./"
    },{
      image: "../../resource/icon-xingxing.png",
      title: "待发货",
      url: "./"
    },
    {
      image: "../../resource/icon-tiyu.png",
      title: "待收货",
      url: "./"
    },
    {
      image: "../../resource/icon-zhanhui.png",
      title: "待评价",
      url: "./"
    },
    {
      image: "../../resource/icon-fuli.png",
      title: "退款维权",
      url: "./"
    }
    ],
    // 第二功能区
    sortRows2: [{
      image: "../../resource/icon-xingxing.png",
      title: "任务中心",
      url: "./"
    },
    {
      image: "../../resource/icon-tiyu.png",
      title: "购物车 ",
      url: "./"
    },
    {
      image: "../../resource/icon-zhanhui.png",
      title: "赠  品 ",
      url: "./"
    },
    {
      image: "../../resource/icon-fuli.png",
      title: "商家电话",
      url: "./"
      },
      {
        image: "../../resource/icon-xingxing.png",
        title: "客服热线",
        url: "./"
      },
      {
        image: "../../resource/icon-tiyu.png",
        title: "收货地址",
        url: "./"
      },
      {
        image: "../../resource/icon-zhanhui.png",
        title: "拼团抢购",
        url: "./"
      },
      {
        image: "../../resource/icon-fuli.png",
        title: "账号设置",
        url: "./"
      },
    ],
    testCode:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }

var that=this;
// GET请求
    // wx.request({
    //   url: 'http://localhost:82/test', //仅为示例，并非真实的接口地址
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   method:'GET',
    //   dataType:'json',
    //   success(res) {
    //     console.log(res.data)
    //     that.setData({
    //       testCode: res.data
    //     })
       
    //   }
    // })

// post请求
    wx.request({
      url: 'http://localhost:82/test2', //仅为示例，并非真实的接口地址
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: 'POST',
      dataType: 'json',
      success(res) {
        console.log(666666)
       

      }
    })

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

  }
})