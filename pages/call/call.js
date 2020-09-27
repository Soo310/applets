Page({
  data: {
      content: [],
      px: ['●>>教务处 150XXXXXXXX', '●>>行政处 150XXXXXXXX','●>>教学秘书 150XXXXXXXX','●>>辅导员   150XXXXXXXX'],
      ph: ['●>>教务处 150XXXXXXXX', '●>>行政处 150XXXXXXXX','●>>教学秘书 150XXXXXXXX','●>>辅导员   150XXXXXXXX'],
      pxopen1: false,
      pxshow1: false,
      active1:true,
      pxopen2: false,
      pxshow2: false,
      active2:true,
      imgUrl: "../../images/close.png"
  },

  onLoad: function() {

  },
  listpx1: function(e) {
      console.log(e)
      if (this.data.pxopen1) {
          this.setData({
              pxopen1: false,
              pxshow1: false,
              active1: true,
              imgUrl: "../../images/close.png"
          })
      } else {
          this.setData({
              content: this.data.px,
              pxopen1: true,
              pxshow1: false,
              active1:false,
              imgUrl: "../../images/open.png"
          })
      }
      console.log(e.target)
  }
,
  listpx2: function(e) {
    console.log(e)
    if (this.data.pxopen2) {
        this.setData({
            pxopen2: false,
            pxshow2: false,
            active2: true,
            imgUrl: "../../images/close.png"
        })
    } else {
        this.setData({
            content: this.data.ph,
            pxopen2: true,
            pxshow2: false,
            active2:false,
            imgUrl: "../../images/open.png"
        })
    }
    console.log(e.target)
}
})