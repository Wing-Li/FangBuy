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

    ShouFuBL: 0.3,
    ShouFu: 0.0,
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

  bindShouFuBL: function (e) {
    this.setData({
      shouFuBL: e.detail.value
    }, function () {
      that.calculationResults();
    })
  },
  bindShouFu: function (e) {
    this.setData({
      showFu: e.detail.value
    }, function () {
      that.calculationResults();
    })
  },

  /**
   * 计算结果
   */
  calculationResults: function () {
    var shouFu = this.data.PingGuJia * this.data.ShouFuBL;

    this.setData({
      ShouFu: shouFu,
    })
  }
})
