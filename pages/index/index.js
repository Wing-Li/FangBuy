//index.js
//获取应用实例
const app = getApp()
var that;

Page({
  data: {
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

    ZongShouFu:0.0,
  },

  onLoad: function () {
    that = this;
  },

  // test: function () {
  //   var s = this.data.ZongJia;
  //   console.log(s);
  // },

  bindZongJia: function (e) {
    this.setData({
      ZongJia: e.detail.value
    }, function () {
      that.calculationResults()
    })
  },
  bindMianJi: function (e) {
    this.setData({
      MianJi: e.detail.value
    }, function () {
      that.calculationResults()
    })
  },
  bindPingGuJia: function (e) {
    this.setData({
      PingGuJia: e.detail.value
    }, function () {
      that.calculationResults();
    })
  },
  bindPingGuDanJia: function (e) {
    this.setData({
      PingGuDanJia: e.detail.value
    }, function () {
      that.calculationResults();
    })
  },

  /**
   * 评估差价
   */
  bindChaJia: function (e) {
    this.setData({
      ChaJia: e.detail.value
    }, function () {
      that.calculationResults();
    })
  },

  /**
   * 首付
   */
  bindShouFuBL: function (e) {
    this.setData({
      ShouFuBL: e.detail.value
    }, function () {
      that.calculationResults();
    })
  },
  bindShouFu: function (e) {
    this.setData({
      ShouFu: e.detail.value
    }, function () {
      that.calculationResults();
    })
  },

  /**
   * 中介费
   */
  bindZhongJieFeiBL: function (e) {
    this.setData({
      ZhongJieFeiBL: e.detail.value
    }, function () {
      that.calculationResults();
    })
  },
  bindZhongJieFei: function (e) {
    this.setData({
      ZhongJieFei: e.detail.value
    }, function () {
      that.calculationResults();
    })
  },

  /**
   * 契税
   */
  bindQiShuiBL: function (e) {
    this.setData({
      QiShuiBL: e.detail.value
    }, function () {
      that.calculationResults();
    })
  },
  bindQiShui: function (e) {
    this.setData({
      QiShui: e.detail.value
    }, function () {
      that.calculationResults();
    })
  },

  /**
   * 个税
   */
  bindGeShuiBL: function (e) {
    this.setData({
      GeShuiBL: e.detail.value
    }, function () {
      that.calculationResults();
    })
  },
  bindGeShui: function (e) {
    this.setData({
      GeShui: e.detail.value
    }, function () {
      that.calculationResults();
    })
  },

  /**
   * 担保按揭费
   */
  bindDanBaoFeiBL: function (e) {
    this.setData({
      DanBaoFeiBL: e.detail.value
    }, function () {
      that.calculationResults();
    })
  },
  bindDanBaoFei: function (e) {
    this.setData({
      DanBaoFei: e.detail.value
    }, function () {
      that.calculationResults();
    })
  },

  /**
   * 评估费
   */
  bindPingGuFeiBL: function (e) {
    this.setData({
      PingGuFeiBL: e.detail.value
    }, function () {
      that.calculationResults();
    })
  },
  bindPingGuFei: function (e) {
    this.setData({
      PingGuFei: e.detail.value
    }, function () {
      that.calculationResults();
    })
  },

  /**
   * 登记费
   */
  bindDengJiFei: function (e) {
    this.setData({
      DengJiFei: e.detail.value
    }, function () {
      that.calculationResults();
    })
  },

  /**
   * 过户费
   */
  bindGuoHuFei: function (e) {
    this.setData({
      GuoHuFei: e.detail.value
    }, function () {
      that.calculationResults();
    })
  },

  /**
   * 大修基金
   */
  bindDaXiuJiJin: function (e) {
    this.setData({
      DaXiuJiJin: e.detail.value
    }, function () {
      that.calculationResults();
    })
  },

  /**
   * 其他
   */
  bindQiTa: function (e) {
    this.setData({
      QiTa: e.detail.value
    }, function () {
      that.calculationResults();
    })
  },

  /**
   * 计算结果
   */
  calculationResults: function () {
    var d = this.data;

    // 评估单价
    var pingGuDanJia = d.PingGuJia / d.MianJi;
    // 评估差价
    var chaJia = d.ZongJia - d.PingGuJia;
    // 首付
    var shouFu = d.PingGuJia * d.ShouFuBL;
    // 中介费
    var zhongJieFei = d.ZongJia * d.ZhongJieFeiBL;
    // 契税
    var qiShui = d.PingGuJia * d.QiShuiBL;
    // 个税
    var geShui = d.PingGuJia * d.GeShuiBL;
    // 担保按揭费
    var danBaoFei = d.PingGuJia * 0.7 * d.DanBaoFeiBL;
    // 评估费
    var pingGuFei = d.PingGuJia * d.PingGuFeiBL;
    
    // 总首付款
    var zong = chaJia + shouFu + zhongJieFei + qiShui + geShui + danBaoFei + pingGuFei + d.GuoHuFei + d.DaXiuJiJin + d.QiTa;

    this.setData({
      PingGuDanJia: pingGuDanJia,
      ChaJia: chaJia,
      ShouFu: shouFu,
      ZhongJieFei: zhongJieFei,
      QiShui: qiShui,
      GeShui: geShui,
      DanBaoFei: danBaoFei,
      PingGuFei: pingGuFei,
      
      ZongShouFu: zong,
    })
  }
})
