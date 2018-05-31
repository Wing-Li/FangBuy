//index.js
//获取应用实例
const app = getApp()
var that;

Page({
  data: {

  },

  onLoad: function () {
    
  },

  bindNew: function (){
    wx.navigateTo({
      url: '/pages/transaction/new/new'
    })
  },

  bindOld: function (){
    wx.navigateTo({
      url: '/pages/transaction/old/old'
    })
  }
})
