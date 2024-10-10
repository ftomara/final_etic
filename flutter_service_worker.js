'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "509436709d81c84cbeff4f5074baeebd",
"version.json": "8d96e3feec8c21f667fc1c333fe3bb06",
"index.html": "ccbe3045be9fcbfc3e370758167a2177",
"/": "ccbe3045be9fcbfc3e370758167a2177",
"main.dart.js": "e34f6c407943ab09a95b92ea15e79995",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "95ed34658a9432083f729c2cdc193391",
"assets/AssetManifest.json": "86c5ba76726a247c91290e89f5e5b527",
"assets/NOTICES": "68e5cd54b84e2c16da4c18c844aabc8e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "50364b3ed903c005449aa0855c9dcb98",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "434b89b29a3558ebe0f709a42774bac1",
"assets/fonts/MaterialIcons-Regular.otf": "1bab2e3641d3953f43240e2b5b9b429a",
"assets/assets/images/greenhouse_1.svg": "42e9f9b1457438e1978fa0fc8cd9f66f",
"assets/assets/images/CO2_graph.png": "a89bfd55a8912f2530f8803c6b22f540",
"assets/assets/images/image_frame/Marine%2520Life.svg": "b5e702d687a4464020bc6cba59fe5457",
"assets/assets/images/image_frame/Sea%2520Level%2520Rising.svg": "c1c0ce67789305d4f1155bd6f2664ed5",
"assets/assets/images/image_frame/Ocean%2520Acidification.svg": "b67096246a42038c645cf8a3610eed46",
"assets/assets/images/image_frame/Wild%2520Fires.svg": "5170efe4f4103e18a712d7db8997a5d3",
"assets/assets/images/image_frame/Ice%2520Melting.svg": "4b27352731ccabea770931798e403268",
"assets/assets/images/image_frame/Air%2520Quality.svg": "124efe1fde2b6a06aa0518502634240a",
"assets/assets/images/image_frame/Global%2520Warming.svg": "36f74efc72f53ddc49f7f799ebef04f1",
"assets/assets/images/image_frame/Greenhouse%2520Gases.svg": "58184e6444a49024c27e7a048de3cecf",
"assets/assets/images/Carbon_2024.png": "1d1f934129c6aa9d5de0f1c7a48bc130",
"assets/assets/images/fire_graph_2.avif": "2a14e6b68f79798d074a0f47bd17edf6",
"assets/assets/images/Carbon_2018.png": "77cc4669673dc950d38b63f3c7cbd048",
"assets/assets/images/blue_arrowed_btn.svg": "1ab766eef785954a6703c5839be9f1d2",
"assets/assets/images/send_icon.svg": "424e949515aa3ba61f8293ef483d53d5",
"assets/assets/images/sea_ice_2024_min_1080p60.mp4": "ce1dc846230f8be353340ba66dbc1a9c",
"assets/assets/images/wildfires_icon.jpg": "8239798fdb1edc2bcad866658d586a44",
"assets/assets/images/global_sea_level.mp4": "fdeeb53f3414a91916c162a7c9df0b2d",
"assets/assets/images/antartica_change.mp4": "ce1dc846230f8be353340ba66dbc1a9c",
"assets/assets/images/Press%2520on%2520any%2520image%2520to%2520Start%2520Your%2520Investigation.svg": "48aab307abe30b54582682995d2c145c",
"assets/assets/images/greenhouse_3.svg": "545bcdc1e1f4600c1e042d831848a1bb",
"assets/assets/images/ArrowLeft&Right.svg": "5eab0a8442b4c35b7628755b84ca2478",
"assets/assets/images/greenhouse_2.svg": "2b38cc095524decc15b3dc615d6fb103",
"assets/assets/images/Methane_sources.png": "ed6eee8673764adb9a5c97f302e02a02",
"assets/assets/images/choose_frame.svg": "c0729c2778e39f1f5fc5b9ac5bbdbfd6",
"assets/assets/images/Explore-Ai-chat.png": "abaa3fd97fe32516efe549f702bae619",
"assets/assets/images/Sakta.mp3": "dcabb24940ea02e6803978c38405931a",
"assets/assets/images/greenhouse.png": "ca57e482d429de38599d048327843537",
"assets/assets/images/HexTech_Glod.svg": "71ea8143cf92548da2895264ddf08334",
"assets/assets/images/carbon_collage.jpg": "df92e79897caf32d363550bf966f633e",
"assets/assets/images/carbon_collage.png": "c600780efb58243d737538a2eeed05cc",
"assets/assets/images/green_icon.png": "7d52310123ab389fea235847de213ef1",
"assets/assets/images/Screenshot%25202024-09-20%2520at%252010.17.01%25E2%2580%25AFPM%25201.png": "13ac3ae3a0c5f16146b1f0ae2a3c79ae",
"assets/assets/images/N2O_graph.png": "54b4673919215a7bc2e213e91ac0127c",
"assets/assets/images/greenhouse_4.svg": "2b38cc095524decc15b3dc615d6fb103",
"assets/assets/images/atmosphere.jpg": "aa71e392f451159485a075775e513947",
"assets/assets/images/NO2_map.png": "777288f3fd6afadbdf9dbe950971477b",
"assets/assets/images/biosphere%2520(2).png": "8bacf34acddde6e11254f336abfb9466",
"assets/assets/images/HexTech_Blue.svg": "7e18eb5a077e0cb93ca71efed2275bd1",
"assets/assets/images/bleached&not_bleached.png": "60bddadbd9aac4f388141d54176723af",
"assets/assets/images/wildfires_1.jpg": "f46f0eb5723378fef0869225d7929089",
"assets/assets/images/greenhouse_4.png": "bc0ce789ec99d951bf618df435593646",
"assets/assets/images/sea_icon.webp": "976847d91e4ce8ebe1d46891029ed40e",
"assets/assets/images/btn.svg": "e3f207a8e0e2b0e370f5ccfa15567a9a",
"assets/assets/images/connecting_line.svg": "a8ebf561e79e2fa8e427fd6ab90a7aa5",
"assets/assets/images/Marine_life_icon.png": "a12c0e5c36fd347097946cd86324ef3f",
"assets/assets/images/Orbiting_Carbon.png": "0e1ca5211d934f15e974491b37b47128",
"assets/assets/images/wildfires_3.png": "1fc3ca1ea958d31e484c90847ab9bd78",
"assets/assets/images/star_pin.svg": "1c740da855818b3d0a5d69efe6d9482e",
"assets/assets/images/2018VS2024.png": "661ab3b57623ed32cef7ff74834207d0",
"assets/assets/images/Ocean_Acidification_Icon.png": "47434b5247d282e677dcdd94b54a1a4a",
"assets/assets/images/rising_level.mp4": "f2c14ec0d3fb3368d0086f442dacb5db",
"assets/assets/images/main_title.svg": "e77371e673e2de29b8e5b1c7a0b24227",
"assets/assets/images/greenhouse_2.png": "bc0ce789ec99d951bf618df435593646",
"assets/assets/images/clownfish.png": "354baeb9e02994d8cd6b8a3dc4ba2f9b",
"assets/assets/images/greenhouse_3.png": "ea78a628b9664fabc2365e54937585ec",
"assets/assets/images/global_icon.jpg": "b9c05f94b2c64e29a58fa325bab3bba0",
"assets/assets/images/board_frame.svg": "6034c706066c66bed88fdf890e566536",
"assets/assets/images/HexTech_Blue2.svg": "16785c387c43cd77aabc58917b27d520",
"assets/assets/images/image-frame1.svg": "93cc3542ed12d1d7c52687918b0a90ae",
"assets/assets/images/greenhouse_1.png": "892b93630d4181a25546aead2f45ce3e",
"assets/assets/images/carbon_graph.png": "832b7f6b9cc9b7f8d03a3898001b99c7",
"assets/assets/images/info_board.svg": "d9bc43d1dd4694c6051bd636a63ad594",
"assets/assets/images/bleached_coral.png": "c504973349414f85d126441d9e717e74",
"assets/assets/images/sea_icon.png": "42947b1e7029b483aa5310e408983089",
"assets/assets/images/fullbg.png": "8f35370b44045f9689f1eda83082c790",
"assets/assets/images/bg.svg": "3327dd142eb86918d57e920e599a3bc3",
"assets/assets/images/Acidification_process.png": "0fe464edbe7cef8b5e94fa8baff4fb33",
"assets/assets/images/Data.json": "89200428daa13b16d4aa52fa8a58adf3",
"assets/assets/images/wildfires.png": "1fc3ca1ea958d31e484c90847ab9bd78",
"assets/assets/images/seaice.png": "35b3b48316ec53ebdd01de423b768878",
"assets/assets/images/mean_sea_level.png": "7d4e569350936d8cb31d4666a1611db7",
"assets/assets/images/gris_with_vel_i_200204-202311_1080p25.mp4": "c224b15835650c3f34d2201f98ad07ef",
"assets/assets/images/questions_extended.json": "b9407d20e1cec07b223c3bc0ac6ba7a7",
"assets/assets/images/Marine.png": "1118ebe76a67b3f4a931e7406fa8eccd",
"assets/assets/images/app_bar_with_text.svg": "87ad100f7f4e12b9bbc29e0c464e390d",
"assets/assets/images/close_icon.svg": "5576c273313fdfb8b8807b19ff84b64c",
"assets/assets/images/Methane_Collage.png": "0863d2e39c19751e5cc51b8651c4fbd9",
"assets/assets/images/hydrosphere.jpeg": "b9ecfab1c0d6aa2963539aae58d7e2a2",
"assets/assets/images/image-frame.svg": "8948302636d6ef1e2eec55869480d0ab",
"assets/assets/images/Ocean_Carbon_concentration.png": "e4ed05e39e36cb868bcb37831d271ae1",
"assets/assets/images/pressed_btn.svg": "67fcf3921255bb5ed424a1062fb4633c",
"assets/assets/images/PM2.5.png": "3eb36cdf30425dfcea53efbc3b9aaf56",
"assets/assets/images/hint_icon.png": "aba19d251f4eb69d2953c8b545b5ec92",
"assets/assets/images/Air_Quality_Icon.png": "6d5cddf3ef2f7b91be47b10f5b4e6d40",
"assets/assets/images/intro.mp4": "05b1e0c088f7d70a7850735387267ff3",
"assets/assets/images/interaction_ice_sheet.jpg.webp": "8b6b32af2beca6658524b266649bcf4b",
"assets/assets/images/Sea_Star.png": "604f094a4a29095ba68ddebc7c88196d",
"assets/assets/images/green_affect.png": "f019619f33236001a6673231576d886f",
"assets/assets/images/outro.mp4": "7a15aa9ec0bd3cbac52e2c6daa5820f2",
"assets/assets/images/last.png": "ef15738e9b459da1f770faac481620d5",
"assets/assets/images/human.svg": "8828c09974b878560799ecde52fa4f39",
"assets/assets/images/Press%2520on%2520any%2520image%2520to%2520Start.svg": "d21ad990eaa3a4ea9e4d453ba940b1a8",
"assets/assets/images/app_bar.svg": "66ed50ab2c57b13f25c91686437f3eeb",
"assets/assets/images/pressed_blue_arrowed_btn.svg": "cfb4e1973abe33428b334dc6d50c648b",
"assets/assets/images/Ice_Sheets.mp4": "60c34c30b04d4f6708c88b6fde482c54",
"assets/assets/images/HexTech_Glod2.svg": "71ea8143cf92548da2895264ddf08334",
"assets/assets/images/ice_icon.jpg.webp": "8562027aa2a5dac01b09ed721ff939e6",
"assets/assets/images/greenland.mp4": "c224b15835650c3f34d2201f98ad07ef",
"assets/assets/images/Group%252025.svg": "03e5978827db12c68e02c02bc7b05823",
"assets/assets/images/hint.svg": "1dfb0742cc5a9af52d7b47b2fc0117a0",
"assets/assets/images/Methane_2016.png": "103aa97f96339b73476b63be104f7bd5",
"assets/assets/images/ai_avatar.svg": "8c79e32a2cecfe2384ad87cc993f8626",
"assets/assets/images/cryosphere.jpg": "6d1f6d49a700d3c789af24f20214dcb5",
"assets/assets/images/ant_graph.png": "55c939ca98d5b384c8db6e8b59208121",
"assets/assets/images/bg.png": "8e41779f19d3d69e3037efb334b3bf2d",
"assets/assets/images/fullbg.svg": "cb848d372e28b23ae4c52266564b73d1",
"assets/assets/images/fire_graph_1.avif": "a4a3ceca31272778456144646b72f21f",
"assets/assets/images/Acidification_process.svg": "2a3855ac4264cc49de86b35977610fcb",
"assets/assets/images/global_icon2.png": "2cba1e9ef81088f447a8dc5c97d72ade",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
