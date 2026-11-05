const environment = {
  "env": "production",
  "jarvis": {
    "root_url": "https://accounts.nvgs.nvidia.com",
    "x-metrics": "5ZjiARedWmKOoXlrQRFkblcGoDlJGPOT0oHz4C03hOS72FpYLX0LRmdNk8GbhBIJ",
    "cn_request_authorize_url": "https://accounts-pipl.nvgs.nvidia.cn/api/1/oauth/authorize"
  },
  "offDeviceAuthenticationClient": {
    "clientID": "183560589800374851",
    "redirect": "https://login.nvgs.nvidia.com/off-device/status"
  },
  "oauthPortalClient": {
    "clientID": "187289777443177027",
    "redirectV1": "https://login.nvgs.nvidia.com/v1/redemption"
  },
  "userDataMigrationClient": {
    "clientID": "1082821597424967680",
    "redirectUrl": "https://login.nvgs.nvidia.com/data-migration"
  },
  "reporting": {
    "excludeFields": [
      "key",
      "code",
      "user_token",
      "account_token",
      "user_id",
      "email",
      "authorizeEmail",
      "display_name",
      "birthdate",
      "deviceId"
    ],
    "datadogRumAppId": "76cfc4f9-358d-45a7-9c22-c627078ac9c5",
    "datadogRumToken": "pub3241a4e4e74034b695b78524f17fd4d3",
    "pingdomId": "59037be156e3291b57990094",
    "pingdomJs": "//rum-static.pingdom.net/pa-59037be156e3291b57990094.js",
    "deviceFingerprintTrackerJs": "https://www.ipqualityscore.com/api/login.nvgs.nvidia.com/Rk100bCUmQJ7dFE0oifEm9mpSpZ8Sa4F0cdWZefGVlFBOsDZvqqb9VlAKbwlvAif2nYEA3JZOaSVmfAlEmB5eokFMzBt7seRgooC21ntF0xYrtZMf1enMwsw4OLDmpkOZ6JGI3lXITxllXRrWg6oW4aohbGkk35Ce8eWKgk3xfaG1eVzPLalb6z3ZcXT32XWZK6BWPW4jdkmP0SV7mhFTX8vXdeMF5aArz9mePwAWn9jqsD18AAKpzj5kVo4Mlgh/learn.js",
    "deviceFingerprintTrackerImg": "https://www.ipqualityscore.com/api/login.nvgs.nvidia.com/Rk100bCUmQJ7dFE0oifEm9mpSpZ8Sa4F0cdWZefGVlFBOsDZvqqb9VlAKbwlvAif2nYEA3JZOaSVmfAlEmB5eokFMzBt7seRgooC21ntF0xYrtZMf1enMwsw4OLDmpkOZ6JGI3lXITxllXRrWg6oW4aohbGkk35Ce8eWKgk3xfaG1eVzPLalb6z3ZcXT32XWZK6BWPW4jdkmP0SV7mhFTX8vXdeMF5aArz9mePwAWn9jqsD18AAKpzj5kVo4Mlgh/pixel.png"
  },
  "UI": {
    "showThirdPartyProvidersOnCreateAccount": true
  },
  "security": {
    "hcaptchaScriptURL": "https://hcaptcha.com/1/api.js",
    "useCredentialForCorsAccessControlRequests": true,
    "webauthnSupported": true,
    "passkeyEnabled": true,
    "gRecaptchaSiteKey": "6LfXUZwUAAAAAHji7hGadq2vtHUeBI_l7iZ6ayNt",
    "googleOneTapClientId": "155210405517-kbt47nvbj2s2gs29k1l4al4qeo8cqp7s.apps.googleusercontent.com",
    "hCaptchaSiteKey": "3443d8f6-da7a-4326-929f-4d7fc89ab0d1",
    "passiveHCaptchaSiteKey": "9c0371c8-26b5-4729-abdf-5c0547e6e91b"
  },
  "autoLoginInterstitialPage": {
    "enabled": true,
    "enabledWhenEmailKnownByUser": false
  },
  "profilePortalLink": "https://profile.nvgs.nvidia.com/",
  "language_list": [
    {
      "code": "cs-CZ",
      "name": "\u010ce\u0161tina"
    },
    {
      "code": "da-DK",
      "name": "Dansk"
    },
    {
      "code": "de-DE",
      "name": "Deutsch"
    },
    {
      "code": "en-GB",
      "name": "English (UK)"
    },
    {
      "code": "en-US",
      "name": "English (US)"
    },
    {
      "code": "es-ES",
      "name": "Espa\u00f1ol (Espa\u00f1a)"
    },
    {
      "code": "es-MX",
      "name": "Espa\u00f1ol (M\u00e9xico)"
    },
    {
      "code": "fr-FR",
      "name": "Fran\u00e7ais"
    },
    {
      "code": "it-IT",
      "name": "Italiano"
    },
    {
      "code": "hu-HU",
      "name": "Magyar"
    },
    {
      "code": "nl-NL",
      "name": "Nederlands"
    },
    {
      "code": "nb-NO",
      "name": "Norsk (Bokm\u00e5l)"
    },
    {
      "code": "pl-PL",
      "name": "Polski"
    },
    {
      "code": "pt-BR",
      "name": "Portugu\u00eas (Brasil)"
    },
    {
      "code": "pt-PT",
      "name": "Portugu\u00eas (Portugal)"
    },
    {
      "code": "ro-RO",
      "name": "Rom\u00e2n\u0103"
    },
    {
      "code": "sk-SK",
      "name": "Sloven\u010dina"
    },
    {
      "code": "sl-SI",
      "name": "Sloven\u0161\u010dina"
    },
    {
      "code": "fi-FI",
      "name": "Suomi"
    },
    {
      "code": "sv-SE",
      "name": "Svenska"
    },
    {
      "code": "ar-SA",
      "name": "\u200f\u0627\u0644\u0639\u0631\u0628\u064a\u0629\u200f"
    },
    {
      "code": "tr-TR",
      "name": "T\u00fcrk\u00e7e"
    },
    {
      "code": "el-GR",
      "name": "\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac"
    },
    {
      "code": "bg-BG",
      "name": "\u0431\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438"
    },
    {
      "code": "ru-RU",
      "name": "\u0420\u0443\u0441\u0441\u043a\u0438\u0439"
    },
    {
      "code": "uk-UA",
      "name": "\u0443\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430"
    },
    {
      "code": "th-TH",
      "name": "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22"
    },
    {
      "code": "ko-KR",
      "name": "\ud55c\uad6d\uc5b4"
    },
    {
      "code": "ja-JP",
      "name": "\u65e5\u672c\u8a9e"
    },
    {
      "code": "zh-CN",
      "name": "\u7b80\u4f53\u4e2d\u6587"
    },
    {
      "code": "zh-TW",
      "name": "\u7e41\u9ad4\u4e2d\u6587"
    }
  ],
  "default_language": "en-US"
};