D("duzymodelarz.pl", REGISTRAR_OVH, DnsProvider(PROVIDER_OVH),
	DefaultTTL(3600),

	A('@', AZYMONDIAS),
	A('www', AZYMONDIAS),

	A("mail", DOMENOMANIA_DCOACH),
	MX("@", 0, "mail.duzymodelarz.pl."),

	TXT("_dmarc", "v=DMARC1;  v=DMARC1;p=quarantine;sp=none;adkim=r;aspf=r;pct=100;fo=0;rf=afrf;ri=86400;rua=mailto:dmarc@designcoach.pl;ruf=mailto:dmarc@designcoach.pl"),
	TXT("default._domainkey", "v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAtdVYz4d9IvjvaYJTcUvQM2kJGh4kAVU3feeGwbs15YCTnfJy8QQW2wey3NOdVqgPQVLT+bawnjUyvY0GEXyMCl2I+z0vINTHORoqdZHrmEzOCf4xEy06q4V5BN7sMr0rO+u2Ej79sVbHcnWKjuqCrHb77jj9YObilGyRnrhYtVVDlBoWqSKRWtVAGIy4GfS+oQlqIHRq0kFgKX0f2shXMgiroyKY5zRPtnA0CLuMKTGXD+I8BGzjBrRmqS6/x+ryNuF04bMd9cCbCRS/U6IzF8rtyNgYdJZFqs3Wl7DSjVlN6Hw6VykFcOQvZvCCOJPpyG2d4J1KfEPznknm5mLkKQIDAQAB;"),
	SPF_BUILDER({
		label: "@",
		parts: [
			"v=spf1",
			// Domenomania
			"ip4:185.17.40.218",
			"ip4:185.17.43.200",
			"ip4:185.17.43.198",
			"include:spf.domenomania.pl",
			// General
			"-all"
		]
	})
)
