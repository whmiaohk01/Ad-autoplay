const options = {
  autoplay: "muted",
  controls: true,
  id: "videocontent",
  language: "zh-TW",
  muted : true,
  playsinline: true,
  restoreEl: true,
  preload: "auto",
  restoreEl: true,
  sources: [{src: "https://storage.googleapis.com/gvabox/media/samples/stock.mp4",}],
}
let videoElement;
function initDesktopAutoplayExample(){
  videoElement = document.createElement("video-js");
  videoElement.classList.add('vjs-big-play-centered');
  document.getElementById('content').appendChild(videoElement);
  const player = videojs(videoElement, options, () => {
    videojs.log('player is ready');
  });
  player.ima({
    adTagUrl:"https://pubads.g.doubleclick.net/gampad/ads?iu=/21775744923/external/vmap_ad_samples&sz=640x480&cust_params=sample_ar%3Dpremidpost&ciu_szs=300x250&gdfp_req=1&ad_rule=1&output=vmap&unviewed_position_start=1&env=vp&impl=s&cmsid=496&vid=short_onecue&correlator=",
    disableCustomPlaybackForIOS10Plus: true,
    adWillPlayMuted:true,
  locale: 'zh_tw',
  adLabel: '廣告剩餘',
  debug:true,
  adLabelNofN: '/',
  vpaidMode: window.google.ima.ImaSdkSettings.VpaidMode.INSECURE,
  contribAdsSettings: {
    allowVjsAutoplay: true,
    liveCuePoints: false,
  },
  })
}