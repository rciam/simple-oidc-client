var settings = {
      title: 'Create Tokens',
      //authority: 'http://snf-761524.vm.okeanos.grnet.gr:8080/openid-connect-server-webapp',
      authority: 'http://localhost:8080/openid-connect-server-webapp',
      client_id: 'client',
      popup_redirect_uri: 'http://localhost/jsApp/popup.html',
      silent_redirect_uri: 'http://localhost/jsApp/silent-renew.html',
      post_logout_redirect_uri: 'http://localhost/jsApp/index.html',

      response_type: 'id_token token',
      scope: 'openid profile email offline_access',

      accessTokenExpiringNotificationTime: 4,
      automaticSilentRenew: true,

      //display user data
      debug: true,

      filterProtocolClaims: false
};