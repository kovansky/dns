D("tycidomki.pl", REGISTRAR_OVH, DnsProvider(PROVIDER_OVH),
	DefaultTTL(3600),

	A('@', AZYMONDIAS),
	A('www', AZYMONDIAS),
	A('panel', AZYMONDIAS),

	SPF_BUILDER({
		label: "@",
		parts: [
			"v=spf1",
			"include:mx.ovh.com",
			"-all"
		]
	}),

	MX('@', 1, 'mx1.mail.ovh.net.'),
	MX('@', 5, 'mx2.mail.ovh.net.'),
	MX('@', 100, 'mx3.mail.ovh.net.')
)
