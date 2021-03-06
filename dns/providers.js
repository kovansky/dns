// Registrars
var REGISTRAR_NONE = NewRegistrar("none", "NONE");
var REGISTRAR_OVH  = NewRegistrar("ovh", "OVH");

// DNS Providers
var PROVIDER_CLOUDFLARE = NewDnsProvider("cloudflare", "CLOUDFLAREAPI");
var PROVIDER_OVH        = NewDnsProvider("ovh", "OVH");

// Other definitions
var LUTHARON         = IP("151.80.140.22"); // Lutharon VPS IP address
var ZENBOX_DCOACH    = IP("2.57.138.154"); // Zenbox DesignCoach server IP
var OVH_REDIR_SERVER = IP("213.186.33.5"); // OVH redirects service IP
