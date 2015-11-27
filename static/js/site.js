// Copyright 2013 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

(function() {

function addGplusButton() {
  window.___gcfg = {
    lang: 'zh-CN'
  };
  var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
  po.src = 'https://apis.google.com/js/plusone.js?onload=onLoadCallback';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
}

function openFeedback(e) {
  e.preventDefault();
  userfeedback.api.startFeedback({productId: 86265});
}

function addGoogleFeedback() {
  [].forEach.call(document.querySelectorAll('[data-feedback]'), function(el, i) {
    el.addEventListener('click', openFeedback);
  });
}


// Auto syntax highlight all pre tags.
function prettyPrintCode() {
  var pres = document.querySelectorAll('pre');
  for (var i = 0, pre; pre = pres[i]; ++i) {
    pre.classList.add('prettyprint');
  }
  window.prettyPrint && prettyPrint();
}

function setupGotoOriginalLink() {
  document.getElementById('goto-original').href =
      "https://developer.chrome.com" + location.pathname;
}

prettyPrintCode();
//addGoogleFeedback();
addGplusButton();
setupGotoOriginalLink();

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-25062424-1', 'crxdoc-zh.appspot.com');
ga('send', 'pageview');

})();
