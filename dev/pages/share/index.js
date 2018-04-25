// pages/share/index.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl:null,
    levelId:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      imgUrl: options.imgUrl,
      levelId: options.levelId
    });
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
    return {
      title: '来猜猜我画的是什么',
      path: `/pages/games/draw-guess/guess-pic/index?id=${this.data.levelId}`,
      imageUrl: this.data.imgUrl,
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },

  clickSave: function(){
    wx.saveImageToPhotosAlbum({
      filePath: this.data.imgUrl,
      complete: res=>{
        console.log(res);
      }
    })
  },

  clickBack: function(){
    console.log("返回首页");
  }
})