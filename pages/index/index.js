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
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '买房首付款计算器',
      path: 'pages/index/index'
    }
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
    wx.showLoading({
      title: '加载中',
    })
    wx.downloadFile({
      url: 'https://wycode.cn/upload/lyl/BuyNewHouse.docx',
      success: function (res) {
        var filePath = res.tempFilePath
        wx.openDocument({
          filePath: filePath,
          success: function (res) {
            console.log('打开文档成功')
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
        })
      },
      fail: function (res) {
        wx.hideLoading()
        wx.showToast({
          title: '加载失败',
          icon: 'none',
          duration: 1500
        })
      }
    })
  },
  bindOldDoc: function () {
    wx.showLoading({
      title: '加载中',
    })
    wx.downloadFile({
      url: 'https://wycode.cn/upload/lyl/BuyOldHouse.docx',
      success: function (res) {
        var filePath = res.tempFilePath
        wx.openDocument({
          filePath: filePath,
          success: function (res) {
            console.log('打开文档成功')
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
        })
      },
      fail: function (res) {
        wx.hideLoading()
        wx.showToast({
          title: '加载失败',
          icon: 'none',
          duration: 1500
        })
      }
    })

  },


  bindHelpDoc: function () {
    wx.showLoading({
      title: '加载中',
    })
    wx.downloadFile({
      url: 'https://wycode.cn/upload/lyl/BuyHouseHelp.docx',
      success: function (res) {
        var filePath = res.tempFilePath
        wx.openDocument({
          filePath: filePath,
          success: function (res) {
            console.log('打开文档成功')
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
        })
      },
      fail: function (res) {
        wx.hideLoading()
        wx.showToast({
          title: '加载失败',
          icon: 'none',
          duration: 1500
        })
      }
    })

  },


  /**
   * 分享本程序
   */
  bindShareApp: function () {

  },


})
