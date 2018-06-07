const AV = require('../../utils/av-weapp-min');

const app = getApp();

Page({
  data: {
    //article将用来存储towxml数据
    article: {}
  },
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中',
    })

    // 页面初始化 options为页面跳转所带来的参数
    var type = options.type;
    var requsetUrl;

    if (type == 'buyNew') {
      requsetUrl = 'BuyNewHouse';
    } else if (type == 'buyOld') {
      requsetUrl = 'BuyOldHouse';
    } else if (type == 'buyHelp') {
      requsetUrl = 'BuyHouseHelp';
    } else {
      requsetUrl = 'BuyHouseHelp';
    }

    const _ts = this;

    new AV.Query('Docs')
      .equalTo('title', requsetUrl)
      .first()
      .then(content => {
        //将markdown内容转换为towxml数据
        let data = app.towxml.toJson(content.attributes.content, 'markdown');

        //设置数据
        _ts.setData({
          article: data
        });
        wx.hideLoading()
      })
      .catch(console.error);
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})