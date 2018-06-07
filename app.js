//app.js

const Towxml = require('./towxml/main');     //引入towxml库
const AV = require('./utils/av-weapp-min.js'); // LeanCloud

AV.init({
  appId: 'TnnQLQgR5cW3r2RhQXODjUAX-gzGzoHsz',
  appKey: 'zXQWtJPi8jpES09u3o73wvj4',
});



App({

  onLaunch: function () {

  },

  towxml: new Towxml()                    //创建towxml对象，供小程序页面使用

})