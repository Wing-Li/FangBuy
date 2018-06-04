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

    ShouFuBL: 0.3,
    ShouFu: 0.0,

    QiShuiBL: 0.01,
    QiShui: 0.0,

    DanBaoFeiBL: 0.015,
    DanBaoFei: 0.0,

    DaXiuJiJinBL: 0.01,
    DaXiuJiJin: 0.0,

    DengJiFei: 80,

    QiTa: 0.0,

    ZongShouFu: 0.0,
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

  bindDanJia: function (e) {
    var danjia = e.detail.value;
    var zongjia = danjia * that.MianJi;

    var shoufu = zongjia * that.ShouFuBL;
    var qishui = zongjia * that.QiShuiBL;
    var danbaoanjie = zongjia * (1 - that.ShouFuBL) * that.DanBaoFeiBL;
    var daxiujijin = zongjia * that.DaXiuJiJinBL;

    this.setData({
      DanJia: parseInt(danjia),
      ZongJia: zongjia,
      ShouFu: shoufu,
      QiShui: qishui,
      DanBaoFei: danbaoanjie,
      DaXiuJiJin: daxiujijin
    })
  },
  bindMianJi: function (e) {
    var mianji = e.detail.value;
    var zongjia = that.DanJia * mianji;

    var shoufu = zongjia * that.ShouFuBL;
    var qishui = zongjia * that.QiShuiBL;
    var danbaoanjie = zongjia * (1 - that.ShouFuBL) * that.DanBaoFeiBL;
    var daxiujijin = zongjia * that.DaXiuJiJinBL;

    this.setData({
      MianJi: parseFloat(mianji),
      ZongJia: zongjia,
      ShouFu: shoufu,
      QiShui: qishui,
      DanBaoFei: danbaoanjie,
      DaXiuJiJin: daxiujijin
    })
  },

  bindZongJia: function (e) {
    var zongjia = parseFloat(e.detail.value);

    var shoufu = zongjia * that.ShouFuBL;
    var qishui = zongjia * that.QiShuiBL;
    var danbaoanjie = zongjia * (1 - that.ShouFuBL) * that.DanBaoFeiBL;
    var daxiujijin = zongjia * that.DaXiuJiJinBL;

    this.setData({
      ZongJia: zongjia,
      ShouFu: shoufu,
      QiShui: qishui,
      DanBaoFei: danbaoanjie,
      DaXiuJiJin: daxiujijin
    })
  },

  /**
   * 首付
   */
  bindShouFuBL: function (e) {
    var shoufubl = e.detail.value;
    if (shoufubl == 0) return;

    var shoufu = that.ZongJia * shoufubl;
    var danbaofei = that.ZongJia * (1 - shoufubl) * that.DanBaoFeiBL;
    this.setData({
      ShouFuBL: shoufubl,
      ShouFu: shoufu,
      DanBaoFei: danbaofei
    })
  },
  bindShouFu: function (e) {
    var shoufu = parseInt(e.detail.value);
    var danbaofei = (that.ZongJia - shoufu) * that.DanBaoFeiBL;
    this.setData({
      ShouFu: shoufu,
      DanBaoFei: danbaofei
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
      QiShui: parseInt(e.detail.value)
    })
  },

  /**
   * 担保按揭费
   */
  bindDanBaoFeiBL: function (e) {
    var danbaofeibl = e.detail.value;
    var danbaofei = that.ZongJia * (1 - that.ShouFuBL) * danbaofeibl;
    this.setData({
      DanBaoFeiBL: danbaofeibl,
      DanBaoFei: parseInt(danbaofei)
    })
  },
  bindDanBaoFei: function (e) {
    this.setData({
      DanBaoFei: parseInt(e.detail.value)
    })
  },

  /**
   * 大修基金
   */
  bindDaXiuJiJinBL: function (e) {
    var daxiujijinbl = e.detail.value;
    var daxiujijin = that.ZongJia * daxiujijinbl;
    this.setData({
      DaXiuJiJinBL: daxiujijinbl,
      DaXiuJiJin: parseInt(daxiujijin)
    })
  },
  bindDaXiuJiJin: function (e) {
    this.setData({
      DaXiuJiJin: parseInt(e.detail.value)
    })
  },

  /**
   * 其他
   */
  bindQiTa: function (e) {
    this.setData({
      QiTa: parseInt(e.detail.value)
    })
  },

  /**
   * 计算结果
   */
  calculationResults: function () {
    var d = this.data;

    // 总首付款
    var zong = d.ShouFu + d.QiShui + d.DanBaoFei + d.DaXiuJiJin + d.DengJiFei + d.QiTa;

    this.setData({
      ZongShouFu: zong,
    })
  }
})