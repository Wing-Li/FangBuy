// pages/transaction/old/old.js

var that;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    SystemHeight: wx.getSystemInfoSync().screenHeight * 0.82,
    ZongJia: 0.0,
    MianJi: 0.0,
    PingGuJia: 0.0,
    PingGuDanJia: 0.0,

    ChaJia: 0.0,

    ShouFuBL: 0.3,
    ShouFu: 0.0,

    ZhongJieFeiBL: 0.03,
    ZhongJieFei: 0.0,

    QiShuiBL: 0.01,
    QiShui: 0.0,

    GeShuiBL: 0.01,
    GeShui: 0.0,

    DanBaoFeiBL: 0.015,
    DanBaoFei: 0.0,

    PingGuFeiBL: 0.003,
    PingGuFei: 0.0,

    DengJiFei: 80,

    GuoHuFei: 600,

    DaXiuJiJin: 0.0,

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
  onShareAppMessage: function (res) {
    return {
      title: '买房首付款计算器',
      path: 'pages/index/index',
      imageUrl: '../../../assets/img/share_img.jpg'
    }
  },


  bindZongJia: function (e) {
    var zongjia = e.detail.value;
    var zhongjiefei = zongjia * that.ZhongJieFeiBL;
    var chajia = zongjia - that.PingGuJia;

    this.setData({
      ZongJia: zongjia,
      ZhongJieFei: zhongjiefei,
      ChaJia: chajia
    })
  },

  bindMianJi: function (e) {
    var mianji = e.detail.value;
    var danjia = that.PingGuJia / mianji;

    this.setData({
      MianJi: mianji,
      PingGuDanJia: danjia
    })
  },

  bindPingGuJia: function (e) {
    var pinggujia = e.detail.value;

    // 评估单价
    var pingGuDanJia = pinggujia / that.MianJi;
    // 评估差价
    var chaJia = that.ZongJia - pinggujia;
    // 首付
    var shouFu = pinggujia * that.ShouFuBL;
    // 契税
    var qiShui = pinggujia * that.QiShuiBL;
    // 个税
    var geShui = pinggujia * that.GeShuiBL;
    // 担保按揭费
    var danBaoFei = pinggujia * (1 - that.ShouFuBL) * that.DanBaoFeiBL;
    // 评估费
    var pingGuFei = pinggujia * that.PingGuFeiBL;


    this.setData({
      PingGuJia: pinggujia,
      PingGuDanJia: pingGuDanJia,
      ChaJia: chaJia,
      ShouFu: shouFu,
      QiShui: qiShui,
      GeShui: geShui,
      DanBaoFei: danBaoFei,
      PingGuFei: pingGuFei
    })
  },

  bindPingGuDanJia: function (e) {
    var pinggudanjia = e.detail.value;
    var pinggujia = pinggudanjia * that.MianJi;

    // 评估差价
    var chaJia = that.ZongJia - pinggujia;
    // 首付
    var shouFu = pinggujia * that.ShouFuBL;
    // 契税
    var qiShui = pinggujia * that.QiShuiBL;
    // 个税
    var geShui = pinggujia * that.GeShuiBL;
    // 担保按揭费
    var danBaoFei = pinggujia * (1 - that.ShouFuBL) * that.DanBaoFeiBL;
    // 评估费
    var pingGuFei = pinggujia * that.PingGuFeiBL;

    this.setData({
      PingGuJia: pinggujia,
      PingGuDanJia: pinggudanjia,
      ChaJia: chaJia,
      ShouFu: shouFu,
      QiShui: qiShui,
      GeShui: geShui,
      DanBaoFei: danBaoFei,
      PingGuFei: pingGuFei
    })
  },

  /**
   * 评估差价
   */
  bindChaJia: function (e) {
    this.setData({
      ChaJia: parseInt(e.detail.value)
    })
  },

  /**
   * 首付
   */
  bindShouFuBL: function (e) {
    var shoufubl = e.detail.value;
    var shoufu = that.PingGuJia * shoufubl;
    var danbaofei = that.PingGuJia * (1 - shoufubl) * that.DanBaoFeiBL;
    this.setData({
      ShouFuBL: shoufubl,
      ShouFu: shoufu,
      DanBaoFei: danbaofei
    })
  },
  bindShouFu: function (e) {
    var shoufu = parseInt(e.detail.value);
    var danbaofei = (that.PingGuJia - shoufu) * that.DanBaoFeiBL;
    this.setData({
      ShouFu: shoufu,
      DanBaoFei: danbaofei
    })
  },

  /**
   * 中介费
   */
  bindZhongJieFeiBL: function (e) {
    var zhongjiefeibl = e.detail.value;
    var zhongjiefei = that.PingGuJia * zhongjiefeibl;
    this.setData({
      ZhongJieFeiBL: zhongjiefeibl,
      ZhongJieFei: zhongjiefei
    })
  },
  bindZhongJieFei: function (e) {
    this.setData({
      ZhongJieFei: parseInt(e.detail.value)
    })
  },

  /**
   * 契税
   */
  bindQiShuiBL: function (e) {
    var qishuibl = e.detail.value;
    var qishui = that.PingGuJia * qishuibl;
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
   * 个税
   */
  bindGeShuiBL: function (e) {
    var geshuibl = e.detail.value;
    var geshui = that.PingGuJia * geshuibl;
    this.setData({
      GeShuiBL: geshuibl,
      GeShui: geshui
    })
  },
  bindGeShui: function (e) {
    this.setData({
      GeShui: parseInt(e.detail.value)
    })
  },

  /**
   * 担保按揭费
   */
  bindDanBaoFeiBL: function (e) {
    var danbaofeibl = e.detail.value;
    var danbaofei = that.PingGuJia * (1 - that.ShouFuBL) * danbaofeibl;
    this.setData({
      DanBaoFeiBL: danbaofeibl,
      DanBaoFei: danbaofei
    })
  },
  bindDanBaoFei: function (e) {
    this.setData({
      DanBaoFei: parseInt(e.detail.value)
    })
  },

  /**
   * 评估费
   */
  bindPingGuFeiBL: function (e) {
    var pinggufeibl = e.detail.value;
    var pinggufei = that.PingGuJia * pinggufeibl;
    this.setData({
      PingGuFeiBL: pinggufeibl,
      PingGuFei: pinggufei
    })
  },
  bindPingGuFei: function (e) {
    this.setData({
      PingGuFei: parseInt(e.detail.value)
    })
  },

  /**
   * 登记费
   */
  bindDengJiFei: function (e) {
    this.setData({
      DengJiFei: parseInt(e.detail.value)
    })
  },

  /**
   * 过户费
   */
  bindGuoHuFei: function (e) {
    this.setData({
      GuoHuFei: parseInt(e.detail.value)
    })
  },

  /**
   * 大修基金
   */
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
    var zong = d.ChaJia + d.ShouFu + d.ZhongJieFei + d.QiShui + d.GeShui + d.DanBaoFei + d.PingGuFei + d.DengJiFei + d.GuoHuFei + d.DaXiuJiJin + d.QiTa;

    this.setData({

      ZongShouFu: zong,
    })
  }
})