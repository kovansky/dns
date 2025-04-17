D("tycidomki.pl", REGISTRAR_OVH, DnsProvider(PROVIDER_OVH),
	DefaultTTL(3600),

	A('@', AZYMONDIAS),
	A('www', AZYMONDIAS),
	A('panel', AZYMONDIAS),
	A('static', AZYMONDIAS),

	A("nowa", AZYMONDIAS),
	A("nowe", AZYMONDIAS),
	A("admin", AZYMONDIAS),

	A("mail", DOMENOMANIA_DCOACH),
	MX("@", 0, "mail.tycidomki.pl."),

	TXT("_dmarc", "v=DMARC1;  v=DMARC1;p=quarantine;sp=none;adkim=r;aspf=r;pct=100;fo=0;rf=afrf;ri=86400;rua=mailto:dmarc@designcoach.pl;ruf=mailto:dmarc@designcoach.pl"),
	TXT("default._domainkey", "v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAm4+yJ+gTXTl7CkD+58EBpQ1C/TzqC7jV5yh3TKWIg1e82PleF1q2jfVi0HGAzvWAB3PreH310uSho8dHYoEhUyPUmW0b4qGeokvp0dlL5j5m+dcWvKMe+jg2skOMrETA8bTzXiO3dt8ytBlfjODCwxYA5ln8ofn1CLOqCxmQRvpjtyyOezL0QtNdpRpUdM3/IbluWYo+LzowzbqqDjwC1cN5j2ykI9gXjHY7HEUoCzhFl7Ndz73EQF8nQc3d3BKwvIUTiZiEUZ5PUB8DLU/7crBdb+EQIf31AsN7tQ7+Ia/wY83fJdQbsQW2xJq/WY8sQ6ujRdIkCcgPzOOLSrsykwIDAQAB;"),
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
