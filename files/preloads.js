
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/polyfills.CqZeYl46.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/app.DLwcMCTy.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/LegacyVaultedShippingMethods.C8EYPDyF.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/DeliveryMethodSelectorSection.CkUbNGau.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/useUnauthenticatedErrorModal.B0fJkwcO.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/AmazonPayPCIButton.BKFqq5Aa.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/ShopPayCaptcha.CdHv1QqI.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/CheckoutAsGuest.TScJ0ex3.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/useRefEffect.CAM7Ubs4.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/ShopPayLogo.0by4BmOG.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/hooks.C48vZRHa.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/LocalizationExtensionField.C3iftEfY.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/useShowShopPayOptin.BhZT7E5Z.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/Rollup.Phl-hT9h.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/useShopPayRequiresVerification.BzVGxwE7.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/Section.HhwjXzTN.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/GooglePayPCIButton.DvVBUMCH.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/PayButtonSection.Dsg8XqjE.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/RageClickCapture.BJFyzPLP.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/useInstallmentsErrorHandler.D_FJmXc1.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/index.C0G1TtoE.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/DutyOptions.Dqx-_KFs.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/SubscriptionPriceBreakdown.CymDnjVU.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/useAmazonContact.UNmBFfPb.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/StockProblemsLineItemList.DwURlyxr.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/useGetBuyWithPrimeCheckoutSessionId.5EkPDD_H.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/index.CVIoTZUO.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/assets/app.BtDbFeTa.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/assets/LegacyVaultedShippingMethods.Bp61D3vS.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/assets/DeliveryMethodSelectorSection.Gt99Mw9F.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/assets/ShopPayCaptcha.CUoq2pCx.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/assets/CheckoutAsGuest.C0wRU6wV.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/assets/ShopPayLogo.D_HPU8Dh.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/assets/LocalizationExtensionField.BO3829nT.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/assets/Rollup.mj3hAev9.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/assets/Section.BzDw6wmZ.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/assets/PayButtonSection.DF7trkKf.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/assets/RageClickCapture.DnkQ4tsk.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/assets/DutyOptions.Bd1Z60K2.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/assets/SubscriptionPriceBreakdown.Bqs0s4oM.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/assets/useAmazonContact.D-Ox6Dnf.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/assets/StockProblemsLineItemList.CxdIQKjw.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/assets/useGetBuyWithPrimeCheckoutSessionId.DVQdwG9J.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0882/1512/6365/files/volet_png_checkout_x320.png?v=1729178969"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  