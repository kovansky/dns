// Registrars
var REGISTRAR_NONE = NewRegistrar("none", "NONE")

// DNS Providers
var PROVIDER_NAMECHEAP = NewDnsProvider("namecheap_sandbox", "NAMECHEAP")

// Domains
D("dnstest.live", REGISTRAR_NONE, DnsProvider(PROVIDER_NAMECHEAP),
    A("@", "151.80.140.22"))
