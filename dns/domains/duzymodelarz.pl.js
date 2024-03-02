D("duzymodelarz.pl", REGISTRAR_OVH, DnsProvider(PROVIDER_OVH),
	DefaultTTL(3600),

	A('@', '213.186.33.5'),
	A('www', '213.186.33.5'),

	CNAME('ftp', 'duzymodelarz.pl.'),

	TXT('@', 'v=spf1 include:mx.ovh.com -all'),
	TXT('@', '1|www.duzymodelarz.pl'),
	TXT('www', '3|welcome'),

	MX('@', 1, 'mx1.mail.ovh.net.'),
	MX('@', 5, 'mx2.mail.ovh.net.'),
	MX('@', 100, 'mx3.mail.ovh.net.')
)
