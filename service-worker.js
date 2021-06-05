/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "2052d6d777e2e45683fd2bdae584b406"
  },
  {
    "url": "assets/css/0.styles.a7880592.css",
    "revision": "5bde3b3b162fee7d8aecf564f799cab8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.cf2cfa44.js",
    "revision": "69a4b5a3ef216254c657b86fe1fbfb42"
  },
  {
    "url": "assets/js/10.0277ffd4.js",
    "revision": "e8904011a5b2482470f942ab17891ed3"
  },
  {
    "url": "assets/js/100.df2d018c.js",
    "revision": "5ec628ccbff6b19f302394252da27b93"
  },
  {
    "url": "assets/js/101.31889bde.js",
    "revision": "45822f4edcf633e9a969f49edb590ecc"
  },
  {
    "url": "assets/js/102.3705978c.js",
    "revision": "77d120053dcd3fed494cca2d51407590"
  },
  {
    "url": "assets/js/103.93853dcc.js",
    "revision": "38336a60500d79977ce1519274bb5362"
  },
  {
    "url": "assets/js/104.35256f42.js",
    "revision": "c1f806374dee9373f41f78e5f4546310"
  },
  {
    "url": "assets/js/105.09bab73b.js",
    "revision": "53d2df17383dd0b81dec24f1b55aeb74"
  },
  {
    "url": "assets/js/106.1ad7a30d.js",
    "revision": "e0d14adc14f7db3746d697deaf082845"
  },
  {
    "url": "assets/js/107.482abc97.js",
    "revision": "8811c7b585ff3c23fd83b6c1c9e86922"
  },
  {
    "url": "assets/js/108.8c409228.js",
    "revision": "6787fdbd0b7a2f8798c67274c7bc7efd"
  },
  {
    "url": "assets/js/109.372c6ec4.js",
    "revision": "3b467ff08ef2bc57e343c142b85589ec"
  },
  {
    "url": "assets/js/11.d4d2d97c.js",
    "revision": "f5a8003c2a6bb60faa4e7a267877170c"
  },
  {
    "url": "assets/js/110.1a8b8f53.js",
    "revision": "913c1b31c84123dfafacb8482bcf9c47"
  },
  {
    "url": "assets/js/111.4e833890.js",
    "revision": "b2c777fd34aa6540e1e6bbfbe241bb4e"
  },
  {
    "url": "assets/js/112.e3909aa0.js",
    "revision": "4890e96d2c8475097eedc162fb74318e"
  },
  {
    "url": "assets/js/113.83b61b9d.js",
    "revision": "024399e699d75823e1f2705bd212fffd"
  },
  {
    "url": "assets/js/114.9370e5d2.js",
    "revision": "c17dae329f0b7f4739265e8d6520c1cf"
  },
  {
    "url": "assets/js/115.cdcb7d41.js",
    "revision": "c4a0534a03c0c900e0d8bbac3f92573d"
  },
  {
    "url": "assets/js/116.b56c0def.js",
    "revision": "a17caf9b49e378b6463039e36230597d"
  },
  {
    "url": "assets/js/117.6d259aec.js",
    "revision": "34bcce1476a60ce10ac1cab3b0630b4b"
  },
  {
    "url": "assets/js/118.fa575b08.js",
    "revision": "e46c13511aa26cc913badc300f922cde"
  },
  {
    "url": "assets/js/119.2cda16c9.js",
    "revision": "74cc62cbdfa1afd3dfb52aa7e8122e33"
  },
  {
    "url": "assets/js/12.f04acebe.js",
    "revision": "90251245b979056700e635137c1b5176"
  },
  {
    "url": "assets/js/120.40f71a9a.js",
    "revision": "41646be45bd3c37c456ca167ed6fb27e"
  },
  {
    "url": "assets/js/121.4edc6624.js",
    "revision": "e25af8c3419f95fd45214d44aaa91615"
  },
  {
    "url": "assets/js/122.e1d43a20.js",
    "revision": "57803ceb080a9889af84c39069caa495"
  },
  {
    "url": "assets/js/123.9db1519b.js",
    "revision": "8e0166729c0ec6038d19d120a257b04e"
  },
  {
    "url": "assets/js/124.4c0194f3.js",
    "revision": "252ad1903a7acdd8b7fe5f46ec908e69"
  },
  {
    "url": "assets/js/125.3fc91cd4.js",
    "revision": "e03754b727e19ffe348fbb6d381663ac"
  },
  {
    "url": "assets/js/13.482a47f2.js",
    "revision": "9b596d02f19e229baa8b421a40774188"
  },
  {
    "url": "assets/js/14.6b127884.js",
    "revision": "217384ee0d893f1e563f99c59e944aab"
  },
  {
    "url": "assets/js/15.0c34cf49.js",
    "revision": "fc7711b7094bb0d330db21d028b944a0"
  },
  {
    "url": "assets/js/16.09542060.js",
    "revision": "eb848e7f3f55af8cd08d1668645a29da"
  },
  {
    "url": "assets/js/17.43428c96.js",
    "revision": "bf3e17e7eee3422334ff2fe20d6940e9"
  },
  {
    "url": "assets/js/18.6ad98c43.js",
    "revision": "578065a649a0cb300488f04705afbe73"
  },
  {
    "url": "assets/js/19.49232992.js",
    "revision": "22ac1d2e6995c5746d6e03ac2116b93c"
  },
  {
    "url": "assets/js/20.2286ce32.js",
    "revision": "b71c6bf4b09056e2673c9e01b903ef44"
  },
  {
    "url": "assets/js/21.ca0f63b8.js",
    "revision": "160418c015ce9ae7e4d063d4668bc2ec"
  },
  {
    "url": "assets/js/22.08972e24.js",
    "revision": "0c9c912ac99e2ea2af8746126d909c89"
  },
  {
    "url": "assets/js/23.915b6ece.js",
    "revision": "344aba7c984a653c3536029b82a41c1c"
  },
  {
    "url": "assets/js/24.e5d515b2.js",
    "revision": "f7f78036303b6acb23f23bdc9fdd5698"
  },
  {
    "url": "assets/js/25.7b6adb43.js",
    "revision": "2ff4348d79d66dfaba87fe5af4e7e8c0"
  },
  {
    "url": "assets/js/26.22ca48fd.js",
    "revision": "81c95635d3010011b7bc52ad91494df0"
  },
  {
    "url": "assets/js/27.934432ef.js",
    "revision": "c66293a3985a905e57c4a7e6d0ca128d"
  },
  {
    "url": "assets/js/28.3bce605a.js",
    "revision": "026f73b92f27a967b4cfb0ac3e362e1f"
  },
  {
    "url": "assets/js/29.e3dea7b4.js",
    "revision": "0e4b6e5cd5927220501a1a03a756d36c"
  },
  {
    "url": "assets/js/3.b8e8312a.js",
    "revision": "7b783085c30ae1013d07ff60c07afa8e"
  },
  {
    "url": "assets/js/30.3c038624.js",
    "revision": "71946026f6896e758b9734c8cff90992"
  },
  {
    "url": "assets/js/31.b3c40768.js",
    "revision": "227e9b6d2ddc6890ed0f5575748cf78e"
  },
  {
    "url": "assets/js/32.1a9c3f73.js",
    "revision": "0fedd11af4aa1150abb221927db75d80"
  },
  {
    "url": "assets/js/33.803ac61c.js",
    "revision": "9b423c3dd16dfffd36aa117b6baf5d0d"
  },
  {
    "url": "assets/js/34.7d5cc4f8.js",
    "revision": "185941b5e2b1f33c39f53f15d1783d13"
  },
  {
    "url": "assets/js/35.dd549d57.js",
    "revision": "cfc922fc91ae3004851672b38311536c"
  },
  {
    "url": "assets/js/36.19dde78f.js",
    "revision": "23a1431cb214819db7ab815e1283ec81"
  },
  {
    "url": "assets/js/37.64bb624d.js",
    "revision": "b1ec7b6f3ae67e1fc36a48a150297857"
  },
  {
    "url": "assets/js/38.ae4d7893.js",
    "revision": "a1471009a6dca3a78d9d34c7d0de3f48"
  },
  {
    "url": "assets/js/39.ed0be2f8.js",
    "revision": "67d1b50ebc0b6591ca64c58deca528cd"
  },
  {
    "url": "assets/js/4.21b6e6f3.js",
    "revision": "db46cf49dbdb4ab474f5a632bacb4942"
  },
  {
    "url": "assets/js/40.4ec66cc0.js",
    "revision": "fab050c5849195be57eb5321519ab19a"
  },
  {
    "url": "assets/js/41.887f9078.js",
    "revision": "9bec050268398b7ec5324ee450782ee2"
  },
  {
    "url": "assets/js/42.0fe9d13e.js",
    "revision": "2dc8f9c88993d8bd306bc4ef43a60ea8"
  },
  {
    "url": "assets/js/43.b95a6aa9.js",
    "revision": "f95815632a999f1efd44564de1c79a5c"
  },
  {
    "url": "assets/js/44.42d7938e.js",
    "revision": "dd13318d1e43c9f1d4025de64b571234"
  },
  {
    "url": "assets/js/45.68f514c1.js",
    "revision": "86f20cc6fe99b3aafdb56db08e7b2d47"
  },
  {
    "url": "assets/js/46.fc3f5d3c.js",
    "revision": "d8164e0ae62ad08a510042b6d67306d3"
  },
  {
    "url": "assets/js/47.8c92e079.js",
    "revision": "fa38554f20c3496d77fb7c1cd1be7898"
  },
  {
    "url": "assets/js/48.81f06c0a.js",
    "revision": "6b9b48c78faa45b42c98dfd932d0b09a"
  },
  {
    "url": "assets/js/49.77a03327.js",
    "revision": "d538093dfb97563284932e6b0535e365"
  },
  {
    "url": "assets/js/5.9bdec314.js",
    "revision": "435f915ccdfd0c7159ead4816b932292"
  },
  {
    "url": "assets/js/50.f2e7985b.js",
    "revision": "3daaef2f0401a93aba513e93b6017a57"
  },
  {
    "url": "assets/js/51.43936b2b.js",
    "revision": "d88ecf8331cee77ef715387b037e1698"
  },
  {
    "url": "assets/js/52.63d07ad3.js",
    "revision": "b521252a5eb1b5c4ca9ae779d101988a"
  },
  {
    "url": "assets/js/53.9c855fb5.js",
    "revision": "4107b82d81ad9a2cc1bfebac7d3ecfac"
  },
  {
    "url": "assets/js/54.e616d1e2.js",
    "revision": "0819cfc5013efef134fca597df7ed999"
  },
  {
    "url": "assets/js/55.48db8c74.js",
    "revision": "75971ebdc3a13512115db75a17ac10a7"
  },
  {
    "url": "assets/js/56.eaa7bd43.js",
    "revision": "f333031dc5c07664814144de642932e3"
  },
  {
    "url": "assets/js/57.2608b2d6.js",
    "revision": "1086497f5a98553110e4d53b34e76444"
  },
  {
    "url": "assets/js/58.32e5b2fc.js",
    "revision": "7433dc428fa95f69c4da8c28e87126c5"
  },
  {
    "url": "assets/js/59.d0d8d369.js",
    "revision": "007ee3fb76945ae5b3c6e879d718410f"
  },
  {
    "url": "assets/js/6.e2f6bf4c.js",
    "revision": "c7a4d7a2dfd3cf4efe864d99a7feb9b1"
  },
  {
    "url": "assets/js/60.2897ddec.js",
    "revision": "083650a93da52618e744fa10965c78a9"
  },
  {
    "url": "assets/js/61.7adf6382.js",
    "revision": "7681235515117b07d71c5ac400e18bb7"
  },
  {
    "url": "assets/js/62.270114cc.js",
    "revision": "261151749f4525e1bb1614d2937482e7"
  },
  {
    "url": "assets/js/63.6b2f27b1.js",
    "revision": "880be6df3fe2bbd1be6958268d179dbe"
  },
  {
    "url": "assets/js/64.63182289.js",
    "revision": "bb8623852fa57250ba2a1d9bd1bbba84"
  },
  {
    "url": "assets/js/65.76db3be2.js",
    "revision": "e02efbdfa95c91dffa409918b6a0aa3f"
  },
  {
    "url": "assets/js/66.9dc7626f.js",
    "revision": "2ba01a6d32527b265235d9d78f5853d2"
  },
  {
    "url": "assets/js/67.6cb9cc89.js",
    "revision": "010c27b3b71b9ebc8e4214653082f634"
  },
  {
    "url": "assets/js/68.16929219.js",
    "revision": "07625705fc067bb171c827e4d610b94a"
  },
  {
    "url": "assets/js/69.93d7dab7.js",
    "revision": "cef8ee3103b5123d7a23046e896f26d4"
  },
  {
    "url": "assets/js/7.97feefa4.js",
    "revision": "e061ef8c149f97765d1fc4624fe1909d"
  },
  {
    "url": "assets/js/70.cc1fca2c.js",
    "revision": "5fefa60833461fa2bae1d8bbfa43807e"
  },
  {
    "url": "assets/js/71.d32cd886.js",
    "revision": "c5a0ea6dea13c2aa3a5a31056f63ab4c"
  },
  {
    "url": "assets/js/72.a25f47db.js",
    "revision": "e4e919a8ccb9b02c3f30928cea805f8c"
  },
  {
    "url": "assets/js/73.36c0bacd.js",
    "revision": "fe35a43984d97bb5df1a97a55e4b9a0f"
  },
  {
    "url": "assets/js/74.204b7ae0.js",
    "revision": "b598a8661fe696138af0ca746acdf86a"
  },
  {
    "url": "assets/js/75.15dcad64.js",
    "revision": "6ed5981c568ec84811fd6ce7b477e2e1"
  },
  {
    "url": "assets/js/76.914e34dd.js",
    "revision": "303195e732e02f1d77c6b82e7ab02583"
  },
  {
    "url": "assets/js/77.076c646d.js",
    "revision": "815b46705c05a0b069b4de12c793f907"
  },
  {
    "url": "assets/js/78.c529113b.js",
    "revision": "bf793dc641dc09c38e177bbddaa3cc17"
  },
  {
    "url": "assets/js/79.9447981e.js",
    "revision": "0d5f67ea8b5cbc6693fc72063ca30667"
  },
  {
    "url": "assets/js/8.d5feeda5.js",
    "revision": "648b88bac27d55a7883596a8ea9a7dbc"
  },
  {
    "url": "assets/js/80.93e38996.js",
    "revision": "6787fa76ef9630d63645f8191b4604a7"
  },
  {
    "url": "assets/js/81.e9bb139e.js",
    "revision": "adf03b5d97da82204d36bfc044b88485"
  },
  {
    "url": "assets/js/82.f28e2fb5.js",
    "revision": "d97599339559a9daa2b430711350a6c1"
  },
  {
    "url": "assets/js/83.9f3ada5d.js",
    "revision": "e2b47760214477273cb7343167d5333f"
  },
  {
    "url": "assets/js/84.ba040a6c.js",
    "revision": "0972d0c3fc99599d685082e057faaaf4"
  },
  {
    "url": "assets/js/85.7ed11393.js",
    "revision": "2b5219baa11986e0a8d66a7db1d56422"
  },
  {
    "url": "assets/js/86.0ecb012f.js",
    "revision": "b858255e191ffa765fdcfb6659a0adc3"
  },
  {
    "url": "assets/js/87.252b098a.js",
    "revision": "9915b3ea2e8e9db3152329ed9d510023"
  },
  {
    "url": "assets/js/88.1f1dfd94.js",
    "revision": "dd5091e6b4a99f7533be37daca27a998"
  },
  {
    "url": "assets/js/89.9844ece8.js",
    "revision": "f39b85d69e9df4c407648c8ddffb9127"
  },
  {
    "url": "assets/js/9.129d32eb.js",
    "revision": "65a9632301b87595a17cd46d45bc42c5"
  },
  {
    "url": "assets/js/90.7c9128c1.js",
    "revision": "aedc682c997da0d8b2e2a78e5aaf5bc2"
  },
  {
    "url": "assets/js/91.04b4754c.js",
    "revision": "1b565ec7133e46897ae038069b6f1b51"
  },
  {
    "url": "assets/js/92.ced3b971.js",
    "revision": "b467310842ffb8bf6ecebb18ab415d86"
  },
  {
    "url": "assets/js/93.7f14ad99.js",
    "revision": "d43260960aa3c6d969e1428e0eaa7982"
  },
  {
    "url": "assets/js/94.b9cce96a.js",
    "revision": "734a9cb0093ee3231af7ae5d7439e7ae"
  },
  {
    "url": "assets/js/95.67cddfe3.js",
    "revision": "8f09289a68376e98ad9fd71175bb4815"
  },
  {
    "url": "assets/js/96.a2289574.js",
    "revision": "96f84e27d1fd6ab362a972746a18749a"
  },
  {
    "url": "assets/js/97.b24b3766.js",
    "revision": "3aad4572993600f6e5b5bfe60909223f"
  },
  {
    "url": "assets/js/98.b40aa3fd.js",
    "revision": "5182c3564587ac0a7b7647e2a20afb35"
  },
  {
    "url": "assets/js/99.0c1269c0.js",
    "revision": "c8ccac6283512440050a991aee31b7bb"
  },
  {
    "url": "assets/js/app.3cee6877.js",
    "revision": "3de55f244c4622d8ebfaeba1d48c6011"
  },
  {
    "url": "de/api/Detect.html",
    "revision": "2ef8ca3a4d251af7f6b4c67c1a79b410"
  },
  {
    "url": "de/api/Guidelines.html",
    "revision": "02b21d1264198689a561e3fb425715ec"
  },
  {
    "url": "de/api/Ui.html",
    "revision": "00203dcb6cb723adbe452140ca8f2afd"
  },
  {
    "url": "de/effects/API.html",
    "revision": "605fd71aba2368ad35458d6a3ae8b042"
  },
  {
    "url": "de/effects/index.html",
    "revision": "5943be3ec69de40ee31fbdbec231e401"
  },
  {
    "url": "de/effects/OurFirstEffect.html",
    "revision": "ebee2e9ef130902eefba3eff41bdb43c"
  },
  {
    "url": "de/index.html",
    "revision": "44bf24a2fd2307a1af14a432b41db867"
  },
  {
    "url": "de/json/Authorization.html",
    "revision": "ffb7140adf6a71455215a33c6861e978"
  },
  {
    "url": "de/json/Control.html",
    "revision": "ea47784fbf6dfbe32c2b31abfa857260"
  },
  {
    "url": "de/json/index.html",
    "revision": "8240a7a52cf1d6c2b40d4189d3704b2c"
  },
  {
    "url": "de/json/ServerInfo.html",
    "revision": "3eaa065d8030f92a56e6e5b50146c663"
  },
  {
    "url": "de/json/Subscribe.html",
    "revision": "f20c3cfa25ffd8b56b47e63a742bd536"
  },
  {
    "url": "de/user/advanced/Advanced.html",
    "revision": "5cdc72d522b49ee26846a39d5a3ba981"
  },
  {
    "url": "de/user/advanced/Support.html",
    "revision": "66a018f883d421a16e8df2f7622fe38c"
  },
  {
    "url": "de/user/HyperBian.html",
    "revision": "d5273b9a843feac0f99c024747af3308"
  },
  {
    "url": "de/user/index.html",
    "revision": "927b7c7ca84ffc79b90685bfa3030bf9"
  },
  {
    "url": "de/user/Installation.html",
    "revision": "aebb745db4dad365237d24e9ae580525"
  },
  {
    "url": "de/user/Konfiguration.html",
    "revision": "316219d49209119c8697b7c04da6cd0e"
  },
  {
    "url": "de/user/leddevices/gpio/piblaster.html",
    "revision": "356bd90aa766199f82edaf525f654903"
  },
  {
    "url": "de/user/leddevices/index.html",
    "revision": "a2a227fdc29cc8fe52acc0ace367e478"
  },
  {
    "url": "de/user/leddevices/network/atmoorb.html",
    "revision": "8bbc1d73f3be295e72913c8127c4857c"
  },
  {
    "url": "de/user/leddevices/network/cololight.html",
    "revision": "04ba2f4ddc094f99ee3967eccc846c52"
  },
  {
    "url": "de/user/leddevices/network/fadecandy.html",
    "revision": "169823ce53c0486ea831e8ae48dfb407"
  },
  {
    "url": "de/user/leddevices/network/nanoleaf.html",
    "revision": "d7c2f1fe83412c21dce7e83c52a1f587"
  },
  {
    "url": "de/user/leddevices/network/philipshue.html",
    "revision": "b16d812b3603d0565967e74e142a7174"
  },
  {
    "url": "de/user/leddevices/network/tinkerforge.html",
    "revision": "64a3fec143215d0aadd854b28bb08da5"
  },
  {
    "url": "de/user/leddevices/network/tpm2net.html",
    "revision": "45693a38245cb3b535214a044442dac5"
  },
  {
    "url": "de/user/leddevices/network/udpartnet.html",
    "revision": "9d0b6969cfb48e3a0f1bf35891fc276e"
  },
  {
    "url": "de/user/leddevices/network/udpe131.html",
    "revision": "75e5486a51b71467e355048000e09a9a"
  },
  {
    "url": "de/user/leddevices/network/udph801.html",
    "revision": "0427a4271eca1f251926c36751cf9868"
  },
  {
    "url": "de/user/leddevices/network/udpraw.html",
    "revision": "ab7e59e506c49e8ff9107ff7793b3c48"
  },
  {
    "url": "de/user/leddevices/network/wled.html",
    "revision": "6062f7c0db26115853537a196871d092"
  },
  {
    "url": "de/user/leddevices/network/yeelight.html",
    "revision": "3999c24cd85a3789862dbf102bd7e7e8"
  },
  {
    "url": "de/user/leddevices/others/debug.html",
    "revision": "b938db9c33ba08d42d349a915a6bcdd4"
  },
  {
    "url": "de/user/leddevices/spi/apa102.html",
    "revision": "1190564fef4b176047fc015f60b04dc3"
  },
  {
    "url": "de/user/leddevices/spi/apa104.html",
    "revision": "7192b34de4be689acc5cd2ced84c4b1d"
  },
  {
    "url": "de/user/leddevices/spi/lpd6803.html",
    "revision": "646a194c04abaf417df7e2f2cbededf5"
  },
  {
    "url": "de/user/leddevices/spi/lpd8806.html",
    "revision": "4444f177fbf0ea3fc5a25fa2c2c88f81"
  },
  {
    "url": "de/user/leddevices/spi/p9813.html",
    "revision": "59736c2937cf1cf2657b7e5c793f1cbc"
  },
  {
    "url": "de/user/leddevices/spi/sk6812.html",
    "revision": "f5b9bf58b7c61f34c04b20eb692d3a39"
  },
  {
    "url": "de/user/leddevices/spi/sk6822.html",
    "revision": "ef097f5f2774b794a73a7832f00ebbd5"
  },
  {
    "url": "de/user/leddevices/spi/sk9822.html",
    "revision": "513b62ac3a49020984bb6c98b0a59ff8"
  },
  {
    "url": "de/user/leddevices/spi/ws2801.html",
    "revision": "46662fb8c7b48e1c771748e1e1173559"
  },
  {
    "url": "de/user/leddevices/spi/ws2812.html",
    "revision": "5450abd985b8f9d6478c4b762ef0b627"
  },
  {
    "url": "de/user/leddevices/usb/adalight.html",
    "revision": "768bbe1ead4a1cbe4b1723435e1518ac"
  },
  {
    "url": "de/user/leddevices/usb/atmo.html",
    "revision": "8b320ca5e15dbaf61be86d5b96b9791c"
  },
  {
    "url": "de/user/leddevices/usb/dmx.html",
    "revision": "37991621d35d96851cddaab58f9573fd"
  },
  {
    "url": "de/user/leddevices/usb/hyperion-usbasp.html",
    "revision": "0d4070b4fdc26ab8005699ff2405c3ff"
  },
  {
    "url": "de/user/leddevices/usb/karate.html",
    "revision": "5c513437bdc0b6b776fd472d708bb3dd"
  },
  {
    "url": "de/user/leddevices/usb/lightpack.html",
    "revision": "af8870c2065ea0663cae9449c181ba90"
  },
  {
    "url": "de/user/leddevices/usb/multilightpack.html",
    "revision": "a1de95efec43690078d0579b6a8b191c"
  },
  {
    "url": "de/user/leddevices/usb/paintpack.html",
    "revision": "850ef7a42fd6dc6979458fb005e0e93b"
  },
  {
    "url": "de/user/leddevices/usb/rawhid.html",
    "revision": "aa700e34603ced923ddd86226b9aa656"
  },
  {
    "url": "de/user/leddevices/usb/sedu.html",
    "revision": "6cf62a9a581ea1c01974f67e27b6f2ef"
  },
  {
    "url": "de/user/leddevices/usb/tpm2.html",
    "revision": "6478a92711aa43be3ff7fa1dff30c1dd"
  },
  {
    "url": "en/addons/API.html",
    "revision": "9d6f06fe518796da6184031ae189b891"
  },
  {
    "url": "en/addons/index.html",
    "revision": "902c81fbef0fb12d3855bd50d2eb8ed0"
  },
  {
    "url": "en/addons/OurFirstAddon.html",
    "revision": "84cd62b6ea2ebc056f5851f5c797cf04"
  },
  {
    "url": "en/api/Detect.html",
    "revision": "7fc58af663b55ae08bc7c5b4dc666473"
  },
  {
    "url": "en/api/Guidelines.html",
    "revision": "721c2b96f0a9448c892db5a9c0e6d950"
  },
  {
    "url": "en/api/Ui.html",
    "revision": "e9b4c3abd1761ed6cede6518f3e0e138"
  },
  {
    "url": "en/effects/API.html",
    "revision": "ba77f83f0b89faee00fd5852d763faf4"
  },
  {
    "url": "en/effects/index.html",
    "revision": "90e8904c4f54ae9982b74d0dfe01c0ba"
  },
  {
    "url": "en/effects/OurFirstEffect.html",
    "revision": "29809c17dbea437621b08c872bdf721b"
  },
  {
    "url": "en/json/Authorization.html",
    "revision": "57306f98502e9c1a6b21a647aff47a9e"
  },
  {
    "url": "en/json/Control.html",
    "revision": "549e617d305c201b421dbb3744601cef"
  },
  {
    "url": "en/json/index.html",
    "revision": "d4a52d5c498f2a96c26b7a97289ad2d0"
  },
  {
    "url": "en/json/ServerInfo.html",
    "revision": "884f76a5c3c6868b642076d055c36ba3"
  },
  {
    "url": "en/json/Subscribe.html",
    "revision": "b4ff03d60cb138509bb23b6f0cf38f0d"
  },
  {
    "url": "en/user/advanced/Advanced.html",
    "revision": "6169072c895f7e59cce774f00af8fb72"
  },
  {
    "url": "en/user/advanced/Support.html",
    "revision": "7113a2a15b27a679b0abbcf6abe55898"
  },
  {
    "url": "en/user/Configuration.html",
    "revision": "6af456ef8e1d170d3da6573a6b9faa01"
  },
  {
    "url": "en/user/HyperBian.html",
    "revision": "466ea6ee03dbbc53cf16169676ec5073"
  },
  {
    "url": "en/user/index.html",
    "revision": "db3a8a4d1e3900f6992ecd171d3f59d4"
  },
  {
    "url": "en/user/Installation.html",
    "revision": "e1680b8c576efb424b76ccc48007bcf6"
  },
  {
    "url": "en/user/leddevices/gpio/piblaster.html",
    "revision": "92d5b73233f0a81f839fc9955ab1b223"
  },
  {
    "url": "en/user/leddevices/index.html",
    "revision": "1a54bd6449d2f71b15c69090277fd71f"
  },
  {
    "url": "en/user/leddevices/network/atmoorb.html",
    "revision": "f524e32fc0e02ac772c2e061fb88c4aa"
  },
  {
    "url": "en/user/leddevices/network/cololight.html",
    "revision": "908ed6823548ceb7518e5b663240d637"
  },
  {
    "url": "en/user/leddevices/network/fadecandy.html",
    "revision": "cfdc3592b6c67a08c34b221cb3b517e8"
  },
  {
    "url": "en/user/leddevices/network/nanoleaf.html",
    "revision": "f6cf4e45f63381e25b6ef9e7dcb3d764"
  },
  {
    "url": "en/user/leddevices/network/philipshue.html",
    "revision": "b7d7e445c66ac1c4805493fe42d39745"
  },
  {
    "url": "en/user/leddevices/network/tinkerforge.html",
    "revision": "b0a2bb6c577792a963c387e03ea5d07a"
  },
  {
    "url": "en/user/leddevices/network/tpm2net.html",
    "revision": "740b99a498b3568e5056e105886f0746"
  },
  {
    "url": "en/user/leddevices/network/udpartnet.html",
    "revision": "528296410a526596948f4e500e75d3ea"
  },
  {
    "url": "en/user/leddevices/network/udpe131.html",
    "revision": "b7364cbb77743638dd58116722f32e68"
  },
  {
    "url": "en/user/leddevices/network/udph801.html",
    "revision": "209aa70b830f6308f07becc9d93ee7ac"
  },
  {
    "url": "en/user/leddevices/network/udpraw.html",
    "revision": "6f4355abb9f4f1d704a52e38a66e1e22"
  },
  {
    "url": "en/user/leddevices/network/wled.html",
    "revision": "c340aacfad0ca31568ee64d6b773a4a8"
  },
  {
    "url": "en/user/leddevices/network/yeelight.html",
    "revision": "9b8deddc5f8cd3d1df7fac7740c3a6cc"
  },
  {
    "url": "en/user/leddevices/others/debug.html",
    "revision": "376709a75385213ab253bf85962a2002"
  },
  {
    "url": "en/user/leddevices/spi/apa102.html",
    "revision": "d538a0b5133dd5764a8792cd41dbe88a"
  },
  {
    "url": "en/user/leddevices/spi/apa104.html",
    "revision": "379635b23f9d8a155524c8cf84f559de"
  },
  {
    "url": "en/user/leddevices/spi/lpd6803.html",
    "revision": "28508bdf4ccb08ee039812d9a5205157"
  },
  {
    "url": "en/user/leddevices/spi/lpd8806.html",
    "revision": "8046beb7ce0d69c2b52563642ced7f07"
  },
  {
    "url": "en/user/leddevices/spi/p9813.html",
    "revision": "5cc014cef60796dffabb4471f7088019"
  },
  {
    "url": "en/user/leddevices/spi/sk6812.html",
    "revision": "22fa32b68dd1694d0d9f35455a030a94"
  },
  {
    "url": "en/user/leddevices/spi/sk6822.html",
    "revision": "f242435b35029bbe88252f02a322e94b"
  },
  {
    "url": "en/user/leddevices/spi/sk9822.html",
    "revision": "5ce58cd21e8b3b37904be70f2afa8f91"
  },
  {
    "url": "en/user/leddevices/spi/ws2801.html",
    "revision": "601063d2f39097c921291e446de3fe56"
  },
  {
    "url": "en/user/leddevices/spi/ws2812.html",
    "revision": "a60b47535afcd1dfaec71b3bea134f59"
  },
  {
    "url": "en/user/leddevices/usb/adalight.html",
    "revision": "3785f6729af38a30692ecd8f896d3ab4"
  },
  {
    "url": "en/user/leddevices/usb/atmo.html",
    "revision": "68a764b03e260d03da4ae48c00b8e9f4"
  },
  {
    "url": "en/user/leddevices/usb/dmx.html",
    "revision": "79de1550989b4b4ab45e036d1aeead60"
  },
  {
    "url": "en/user/leddevices/usb/hyperion-usbasp.html",
    "revision": "71d7d9dda68705d2e154de8baf85a272"
  },
  {
    "url": "en/user/leddevices/usb/karate.html",
    "revision": "04367431d72d2c7646a4456522cc2f3f"
  },
  {
    "url": "en/user/leddevices/usb/lightpack.html",
    "revision": "ab7c75c26e4cccce820305b2b5cbf0ca"
  },
  {
    "url": "en/user/leddevices/usb/multilightpack.html",
    "revision": "5d138deadfc45b4bde68e919023c758e"
  },
  {
    "url": "en/user/leddevices/usb/paintpack.html",
    "revision": "67105a169888c8816448c09328479759"
  },
  {
    "url": "en/user/leddevices/usb/rawhid.html",
    "revision": "670e02ea196894b012d694efea9e0e13"
  },
  {
    "url": "en/user/leddevices/usb/sedu.html",
    "revision": "cbf6382de9d3f43a4d0d55e148d700aa"
  },
  {
    "url": "en/user/leddevices/usb/tpm2.html",
    "revision": "87761b3de281f8ea496eaa4c1c2486cc"
  },
  {
    "url": "hyperion_logo_dark.png",
    "revision": "002fd7f8af81855feddb69dc92febb0c"
  },
  {
    "url": "hyperion_logo_light.png",
    "revision": "2812c09870a7a84dea88b57776bdfa70"
  },
  {
    "url": "icons/apple-icon-120x120.png",
    "revision": "5e1e9bb3baacce6670406f1d42bb7177"
  },
  {
    "url": "icons/apple-icon-152x152.png",
    "revision": "2a78e0cc6a0296e2f453358d2c4d86ca"
  },
  {
    "url": "icons/apple-icon-167x167.png",
    "revision": "4537db323d098e6ec9186345c62bc594"
  },
  {
    "url": "icons/apple-icon-180x180.png",
    "revision": "65e328eb3ac563c40fff352eac1ebe31"
  },
  {
    "url": "icons/apple-launch-1125x2436.png",
    "revision": "7c76bb2da1bf063068e4c73459b614cd"
  },
  {
    "url": "icons/apple-launch-1242x2208.png",
    "revision": "61d0bb9cde264e1b1dd963971df55bd2"
  },
  {
    "url": "icons/apple-launch-1242x2688.png",
    "revision": "a4415665e9bd2bfef4c81a56f7253e9b"
  },
  {
    "url": "icons/apple-launch-1536x2048.png",
    "revision": "e5f187adff88099d65cda39d4d370d6c"
  },
  {
    "url": "icons/apple-launch-1668x2224.png",
    "revision": "98e31d8ccaab2bd0376f9e66dd0c781b"
  },
  {
    "url": "icons/apple-launch-1668x2388.png",
    "revision": "62f2562ec45458d562cfbdc7ce49b83b"
  },
  {
    "url": "icons/apple-launch-2048x2732.png",
    "revision": "59cf420a057b00ffbc4299c902e30297"
  },
  {
    "url": "icons/apple-launch-640x1136.png",
    "revision": "06935b9d3118d6a165bee1b28b3e9944"
  },
  {
    "url": "icons/apple-launch-750x1334.png",
    "revision": "65ddce5962aebe47ff1fafabced21b4e"
  },
  {
    "url": "icons/apple-launch-828x1792.png",
    "revision": "fd9d1e7433a0d6a243504f84bf528760"
  },
  {
    "url": "icons/favicon-128x128.png",
    "revision": "1f67931e9f8f5859f0a326de9695f996"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "41d819752d98a5e8f8ca8a79a20ea095"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "a0d026eea3e0e0236872028561624c86"
  },
  {
    "url": "icons/favicon-96x96.png",
    "revision": "e85956a895cea454c0361a867df96b2a"
  },
  {
    "url": "icons/icon-128x128.png",
    "revision": "d024af605d3ba562f86c5c6c29720a4d"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "4310df837ffb78ac982eb4151309d70a"
  },
  {
    "url": "icons/icon-256x256.png",
    "revision": "c8e09f3c73e3a914bae1a3d00ad2c090"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "203f32e2af95629ffe0e4afb07638326"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "43cb3b7a8ba9e081827c249e969692f0"
  },
  {
    "url": "icons/ms-icon-144x144.png",
    "revision": "cffb030240897a3ffe9df38694205c23"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "a87900de9189b99f164b409015f24d05"
  },
  {
    "url": "images/de/user_config_access.png",
    "revision": "b7d15b87a18e88ef43b37d95bd499e3a"
  },
  {
    "url": "images/de/user_config_dash.png",
    "revision": "a7a06a394f91d302733135d15eaf69d3"
  },
  {
    "url": "images/de/user_config_lang.png",
    "revision": "fe2d68fa190a603bfa51c0b337ba4a74"
  },
  {
    "url": "images/de/user_hyperbian_new_text_file.png",
    "revision": "4e52ac429ed7637e17d677090e0e76a1"
  },
  {
    "url": "images/de/user_hyperbian_rename_to_wpa_supplicant.png",
    "revision": "c8149ed94b1dad896d56f42423d13753"
  },
  {
    "url": "images/de/user_hyperbian_ssh_file.png",
    "revision": "1ffe78064787a7c8837d7ae9047f420e"
  },
  {
    "url": "images/de/user_hyperbian_wpa_supplicant_content.png",
    "revision": "2cd80d00ffba45334089956da663c74e"
  },
  {
    "url": "images/en/avahi-browse.jpg",
    "revision": "17a5d14a7fdc7ac22f0d0932763b1ecc"
  },
  {
    "url": "images/en/http_jsonrpc.jpg",
    "revision": "62d9e3005e7459a2ec04cb21d8b53b78"
  },
  {
    "url": "images/en/owneff_1.jpg",
    "revision": "42df0877dec353c8928386585e8b29b5"
  },
  {
    "url": "images/en/owneff_2.jpg",
    "revision": "95b8085101c2786b888e4ed29482dac5"
  },
  {
    "url": "images/en/owneff_3.gif",
    "revision": "94cd6cf07479827a49482b8c66fb66d8"
  },
  {
    "url": "images/en/owneff_4.gif",
    "revision": "86b86b1d3c2fb754c6c9b2ead9ea43a0"
  },
  {
    "url": "images/en/user_bbmodes.jpg",
    "revision": "e9c2447c1192cb239ba701ae90144624"
  },
  {
    "url": "images/en/user_config_access.png",
    "revision": "277bdad757e277cb3d4eff789e6cf4bf"
  },
  {
    "url": "images/en/user_config_dash.png",
    "revision": "3fb0621492ef0a608122d95ddf0c9d7b"
  },
  {
    "url": "images/en/user_config_lang.png",
    "revision": "c0a82b37d3d40f422acf51dc0700aa33"
  },
  {
    "url": "images/en/user_gammacurve.png",
    "revision": "1bc6325ef5dd3cafa09d40d0e4f65d8b"
  },
  {
    "url": "images/en/user_hyperbian_ssh.jpg",
    "revision": "294a39092c04a7880011cfd796e3b194"
  },
  {
    "url": "images/en/user_hyperbian_wpa_suppli1.jpg",
    "revision": "0c8f576283244a8e8eb5ec01d9b4c3ae"
  },
  {
    "url": "images/en/user_hyperbian_wpa_suppli2.jpg",
    "revision": "928f049e2b9e69a159be4a9bd54d4bc4"
  },
  {
    "url": "images/en/user_hyperbian_wpa_suppli3.jpg",
    "revision": "4dfa192aac47e5fc899d5b47434ed036"
  },
  {
    "url": "images/en/user_ledlayout.jpg",
    "revision": "2815e5ab254a09a7c24af33d169c0e66"
  },
  {
    "url": "images/en/user_ledlayout1.jpg",
    "revision": "6da17c4ff33ca70b66709f4d924ae865"
  },
  {
    "url": "images/en/user_ledlayout2.jpg",
    "revision": "fa9d66601d016ac2ed520b93eff35bee"
  },
  {
    "url": "images/en/user_ledlayout3.jpg",
    "revision": "dcbaae37bc6bf1c23cf57a43d3bef19c"
  },
  {
    "url": "index.html",
    "revision": "4e61c93d871ca980d2307e8c4ccdb79d"
  },
  {
    "url": "not_found_dark.png",
    "revision": "b3c830790f3ca0106f3abf45ce34f5bb"
  },
  {
    "url": "not_found_light.png",
    "revision": "b7ff198048be214b3c0dcc864a215ebd"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})