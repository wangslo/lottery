// 引用图片路径
let a = require('./img/banner1.png')
let b = require('./img/banner2.jpg')
let c = require('./img/banner3.jpg')
let lotteryImg1 = require('./img/1.png')
let lotteryImg2 = require('./img/1.png')
let lotteryImg3 = require('./img/1.png')
let lotteryImg4 = require('./img/1.png')
let lotteryImg5 = require('./img/1.png')
let lotteryImg6 = require('./img/1.png')
let lotteryImg7 = require('./img/1.png')
let shareImg = require('./img/tools/share.png')
let commentImg = require('./img/tools/comment.png')
let goodImg = require('./img/tools/good.png')
let goodImg2 = require('./img/tools/good2.png')
let collectImg = require('./img/tools/collect.png')
let iconFaceImg = require('./img/tools/icon-face.png')
let img1 = require('./img/persional/1.png')
let img2 = require('./img/persional/2.png')
let img3 = require('./img/persional/3.png')
let img4 = require('./img/persional/4.png')
let img5 = require('./img/persional/icon-inter.png')

let lotterys = [
  {
    img: lotteryImg1,
    title: '双色球',
    type: 'ssq'
  },
  {
    img: lotteryImg2,
    title: '福彩3D',
    type: 'fc3d'
  },
  {
    img: lotteryImg3,
    title: '七乐彩',
    type: 'qlc'
  },
  {
    img: lotteryImg4,
    title: '大乐透',
    type: 'dlt'
  },
  {
    img: lotteryImg5,
    title: '七星彩',
    type: 'qxc'
  },
  {
    img: lotteryImg6,
    title: '排列三',
    type: 'pls'
  },
  {
    img: lotteryImg7,
    title: '排列五',
    type: 'plw'
  },
]
let tools = [shareImg,commentImg,goodImg,goodImg2,collectImg,iconFaceImg]
let personal_icon = [img1,img2,img3,img4,img5]

// 导出图片
module.exports = {
  a,
  b,
  c,
  lotterys,
  tools,
  personal_icon
}
