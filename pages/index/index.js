//index.js
//获取应用实例
const app = getApp()
var that;

Page({
  data: {

  },

  onLoad: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {
    return {
      title: '买房首付款计算器',
      path: 'pages/index/index',
      imageUrl: '../../assets/img/share_img.jpg'
    }
  },

  /**
   * 跳转到关于页面
   */
  bindAbout: function (){
    wx.navigateTo({
      url: '/pages/about/suggestion/suggestion'
    })
  },

  /**
   * 跳转到计算页面
   */
  bindNew: function () {
    wx.navigateTo({
      url: '/pages/transaction/new/new'
    })
  },

  bindOld: function () {
    wx.navigateTo({
      url: '/pages/transaction/old/old'
    })
  },

  /**
   * 跳转到文档页面
   */
  bindNewDoc: function () {
    wx.navigateTo({
      url: '/pages/doc/doc?type=buyNew'
    })
  },
  bindOldDoc: function () {
    wx.navigateTo({
      url: '/pages/doc/doc?type=buyOld'
    })

  },

  /**
   * 跳转到买房流程
   */
  bindHelpDoc: function () {
    wx.navigateTo({
      url: '/pages/doc/doc?type=buyHelp'
    })

  },

})
