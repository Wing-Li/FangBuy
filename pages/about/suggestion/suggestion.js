// pages/about/suggestion/suggestion.js

const AV = require('../../../utils/av-weapp-min');

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  /**
   * 提交建议
   */
  bindFormSubmit: function (e) {
    console.log(e.detail.value.textarea)
    wx.showLoading({
      title: '正在提交',
    })
    // 声明类型
    var Suggestion = AV.Object.extend('Suggestion');
    // 新建对象
    var suggestion = new Suggestion();
    // 设置名称
    suggestion.set('content', e.detail.value.textarea);
    suggestion.save().then(function (todo) {
      wx.hideLoading()

      wx.showToast({
        title: '提交成功',
        duration: 1500
      })

      // 返回上一级页面
      setTimeout(function () {
        wx.navigateBack({
          delta: 1
        })
      }, 1500)

    }, function (error) {
      wx.hideLoading()

      wx.showToast({
        title: '提交失败',
      })
    });

  }
})