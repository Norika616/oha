//
//ドロワーメニュー
//
jQuery("#js-drawer-icon").on("click", function (e) {
  // ↓ブラウザのデフォルト機能を無効化
  e.preventDefault();
  jQuery("#js-drawer-icon").toggleClass("is-checked");
  jQuery("#js-drawer-content").toggleClass("is-checked");
});

//
//navをクリックしたらそのコンテンツへ移動
//ハンバーガーアイコンを初期状態
//ドロワーメニューを閉じる
//
jQuery('#js-drawer-content a[href^="#"]').on("click", function (e) {
  jQuery("#js-drawer-icon").removeClass("is-checked");
  jQuery("#js-drawer-content").removeClass("is-checked");
});

//
//モーダル開く
//
jQuery(".js-modal-open").on("click", function (e) {
  e.preventDefault();
  jQuery("#js-about-modal")[0].showModal();
});

//
//モーダル閉じる
//
jQuery(".js-modal-close").on("click", function (e) {
  e.preventDefault();
  jQuery("#js-about-modal")[0].close();
});

//
//アコーディオンメニュー
//
jQuery(".js-accordion").on("click", function (e) {
  e.preventDefault();

  if (jQuery(this).parent().hasClass("is-open")) {
    jQuery(this).parent().removeClass("is-open");
    jQuery(this).next().slideUp();
  } else {
    jQuery(this).parent().addClass("is-open");
    jQuery(this).next().slideDown();
  }
});

//
// スワイパー
//
const swiper = new Swiper("#js-gallery-swiper", {
  spaceBetween: 82,
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: "#js-gallery-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: "#js-gallery-next",
    prevEl: "#js-gallery-prev",
  },
});

//
// スムーススクロール
//
jQuery('a[href^="#"]').on("click", function (e) {
  const speed = 300;
  const id = jQuery(this).attr("href");
  const target = jQuery("#" == id ? "html" : id);
  const position = jQuery(target).offset().top;
  jQuery("html,body").animate(
    {
      scrollTop: position, //ページ一番上
    },
    speed,
    "swing" //swing or linear
  );
});

//
// スクロールに合わせてトップに戻るボタンを表示
//
jQuery(window).on("scroll", function () {
  if (100 < jQuery(window).scrollTop()) {
    jQuery("#js-pagetop").addClass("is-show");
  } else {
    jQuery("#js-pagetop").removeClass("is-show");
  }
});
