// pages/transaction/new/new.js

var that;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    SystemHeight: wx.getSystemInfoSync().screenHeight * 0.82,
    DanJia: 0.0,
    MianJi: 0.0,
    ZongJia: 0.0,

    ShouFuBL: 0.0,
    ShouFu: 0.0,

    QiShuiBL: 0.01,
    QiShui: 0.0,

    DanBaoFeiBL: 0.015,
    DanBaoFei: 0.0,

    DaXiuJiJin: 0.0,

    DengJiFei: 80,

    QiTa: 0.0,

    ZongShouFu:0.0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that = this.data;
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

  bindDanJia: function (e) {
    var danjia = e.detail.value;
    var zongjia = danjia * that.MianJi;

    this.setData({
      DanJia: danjia,
      ZongJia: zongjia
    })
  },
  bindMianJi: function (e) {
    var mianji = e.detail.value;
    var zongjia = that.DanJia * mianji;

    this.setData({
      DanJia: danjia,
      ZongJia: zongjia
    })
  },

  /**
   * 首付
   */
  bindShouFuBL: function (e) {
    var shoufubl = e.detail.value;
    var shoufu = that.ZongJia * shoufubl;
    this.setData({
      ShouFuBL: shoufubl,
      ShouFu: shoufu
    })
  },
  bindShouFu: function (e) {
    this.setData({
      ShouFu: e.detail.value
    })
  },

  /**
   * 契税
   */
  bindQiShuiBL: function (e) {
    var qishuibl = e.detail.value;
    var qishui = that.ZongJia * qishuibl;
    this.setData({
      QiShuiBL: qishuibl,
      QiShui: qishui
    })
  },
  bindQiShui: function (e) {
    this.setData({
      QiShui: e.detail.value
    })
  },

  /**
   * 担保按揭费
   */
  bindDanBaoFeiBL: function (e) {
    var danbaofeibl = e.detail.value;
    var danbaofei = that.ZongJia * danbaofeibl;
    this.setData({
      DanBaoFeiBL: danbaofeibl,
      DanBaoFei: danbaofei
    })
  },
  bindDanBaoFei: function (e) {
    this.setData({
      DanBaoFei: e.detail.value
    })
  },


})