"use strict";

var vm = new Vue({
  el: "#app",
  data: {
    keyword: "",
    cards: [{
      title: "自我介紹",
      cover: "https://pic.pimg.tw/iting35/1500815907-2788180835.jpg?v=1500815980",
      address: "號 2 樓, No. 16赤峰街47巷大同區台北市103",
      tel: "02 2550 7288",
      opentime: "今日正常營業，14:00-2130",
      title_url: "https://www.facebook.com/IlluminationBooks/",
      bgimage: ""
    }, {
      title: "浮光書店2",
      cover: "https://pic.pimg.tw/iting35/1500815907-2788180835.jpg?v=1500815980",
      address: "號 2 樓, No. 16赤峰街47巷大同區台北市103",
      tel: "02 2550 7288",
      opentime: "今日正常營業，14:00-2130",
      title_url: "https://www.facebook.com/IlluminationBooks/",
      bgimage: ""
    }, {
      title: "浮光書店3",
      cover: "https://pic.pimg.tw/iting35/1500815907-2788180835.jpg?v=1500815980",
      address: "號 2 樓, No. 16赤峰街47巷大同區台北市103",
      tel: "02 2550 7288",
      opentime: "今日正常營業，14:00-2130",
      title_url: "https://www.facebook.com/IlluminationBooks/",
      bgimage: ""
    }, {
      title: "浮光書店4",
      cover: "https://pic.pimg.tw/iting35/1500815907-2788180835.jpg?v=1500815980",
      address: "號 2 樓, No. 16赤峰街47巷大同區台北市103",
      tel: "02 2550 7288",
      opentime: "今日正常營業，14:00-2130",
      title_url: "https://www.facebook.com/IlluminationBooks/",
      bgimage: ""
    }, {
      title: "浮光書店5",
      cover: "https://pic.pimg.tw/iting35/1500815907-2788180835.jpg?v=1500815980",
      address: "號 2 樓, No. 16赤峰街47巷大同區台北市103",
      tel: "02 2550 7288",
      opentime: "今日正常營業，14:00-2130",
      title_url: "https://www.facebook.com/IlluminationBooks/",
      bgimage: ""
    }, {
      title: "浮光書店6",
      cover: "https://pic.pimg.tw/iting35/1500815907-2788180835.jpg?v=1500815980",
      address: "號 2 樓, No. 16赤峰街47巷大同區台北市103",
      tel: "02 2550 7288",
      opentime: "今日正常營業，14:00-2130",
      title_url: "https://www.facebook.com/IlluminationBooks/",
      bgimage: ""
    }]
  },
  mounted: function mounted() {
    swiper = new Swiper('.carousel', {
      effect: 'cards',
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      pagination: {
        el: '.swiper-pagination',
        type: "fraction"
      }
    });
  }
});