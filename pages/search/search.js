// js文件
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    listShow: {}
  },
 
  /*下拉列表按钮函数*/
  toggleList: function (e) {
    let obj = this.data.listShow;
    // 获取当前鼠标点击的下拉列表的index.
    let index = e.currentTarget.dataset.index;
    // 如果对象里存在这个index的属性就切换它的show, 不存在添加index属性并设置它的show
    if (obj[index]) {
      obj[index].show = !this.data.listShow[index].show;
    } else {
      obj[index] = {};
      obj[index].show = true;
      // listHeight的作用主要为下拉动画效果做准备, 从0到70的动画过度. 
      obj[index].listHeight = "70px";
    }
    this.setData({
      listShow: obj
    });
  }
 
})