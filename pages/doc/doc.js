
const app = getApp();

Page({
  data: {
    //article将用来存储towxml数据
    article: {}
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    var type = options.type;
    var requsetUrl;

    if (type == 'buyNew') {
      requsetUrl = 'https://wycode.cn/upload/lyl/BuyNewHouse.md';
    } else if (type == 'buyOld') {
      requsetUrl = 'https://wycode.cn/upload/lyl/BuyOldHouse.md';
    } else if (type == 'buyHelp') {
      requsetUrl = 'https://wycode.cn/upload/lyl/BuyHouseHelp.md';
    } else {
      requsetUrl = 'https://wycode.cn/upload/lyl/BuyHouseHelp.md';
    }

    const _ts = this;

    wx.showLoading({
      title: '加载中',
    })

    //请求markdown文件，并转换为内容
    wx.request({
      url: requsetUrl,
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: (res) => {
        //将markdown内容转换为towxml数据
        let data = app.towxml.toJson(res.data, 'markdown');

        //设置文档显示主题，默认'light'
        // data.theme = 'dark';
        //设置数据
        _ts.setData({
          article: data
        });
        wx.hideLoading()
      },
      fail: function (res) {
        wx.hideLoading()
        wx.showToast({
          title: '加载失败',
          icon: 'none',
          duration: 1500
        })
      }
    });
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