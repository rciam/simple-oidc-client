# simple-oidc-client
A simple OpenID Connect (OIDC) client for browser-based JavaScript applications

Simple OIDC Client - setup

We use several third-party libraries to support our application:

    jQuery
    Bootstrap
    oidc-client-js

We are going to install them with npm, the Node.js front-end package manager. If you don’t have npm installed, you can follow these instructions on the npm website. Once npm is installed, open a command-line prompt in the Simple OIDC Client folder:

$ npm install jquery
$ npm install bootstrap
$ npm install oidc-client

By default, npm installs packages in the node_modules folder.

Important npm packages are usually not committed to source control. If you cloned the repository containing the final source code and want to restore the npm packages, open a command-line prompt in the Simple OIDC Client folder and run npm install to restore packages.

We also create a basic index.html and a popup.html file.

We have two HTML files because oidc-client can open a popup to show the login form to the user.

Simple OIDC Client - authentication

Now that we have everything we need, we can configure our login settings in configuration.js.

// helper function to show data to the user
function display(selector, data) {
    if (data && typeof data === 'string') {
        data = JSON.parse(data);
    }
    if (data) {
        data = JSON.stringify(data, null, 2);
    }

    $(selector).text(data);
}

var settings = {
	title: 'Create Tokens',
    authority: 'https://localhost:8080',
    client_id: 'client',
    popup_redirect_uri: 'http://localhost:8080/popup.html',

    response_type: 'id_token',
    scope: 'openid profile',
	
	accessTokenExpiringNotificationTime: 4,
    automaticSilentRenew: true,
	
	//display user data
	debug: false,

    filterProtocolClaims: true
};

Let’s go quickly through the settings:

    authority is the base URL of our IdentityServer instance. This will allow oidc-client to query the metadata endpoint so it can validate the tokens
    client_id is the id of the client we want to use when hitting the authorization endpoint
    popup_redirect_uri is the redirect URL used when using the signinPopup method. If you prefer not having a popup and redirecting the user in the main window, you can use the redirect_uri property and the signinRedirect method
    response_type defines in our case that we only expect an identity token back
    scope defines the scopes the application asks for
    filterProtocolClaims indicates to oidc-client if it has to filter some OIDC protocol claims from the response: nonce, at_hash, iat, nbf, exp, aud, iss and idp
	
Source: https://identityserver.github.io/Documentation/docsv2/overview/jsGettingStarted.html