D("duzymodelarz.pl", REGISTRAR_OVH, DnsProvider(PROVIDER_OVH),
	DefaultTTL(3600),

	A('@', AZYMONDIAS),
	A('www', AZYMONDIAS),

	A("mail", DOMENOMANIA_DCOACH),
	MX("@", 0, "mail.duzymodelarz.pl."),

	TXT("_dmarc", "v=DMARC1;  v=DMARC1;p=quarantine;sp=none;adkim=r;aspf=r;pct=100;fo=0;rf=afrf;ri=86400;rua=mailto:dmarc@designcoach.pl;ruf=mailto:dmarc@designcoach.pl"),
	TXT("default._domainkey", "v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAtDwbTKX5x271GpZ2pa4Ru6/aS4IaTm/wMmngI94eQ2tnhhMg50Z4m88milVa645WW+dFAT/hn9yE4p5oN/a3QCv/apNmG5wuaccKSvnNIlDGPuOvaQTsyODOj2ThafbsjxDCgw5it3D4n8cCNakM1HOVjrjsUUeWP0h6tIx199VwCxkpSs09gkAnx+WzuAlM9y3PfoZBJJ2uIN8tgo+1T0DBldxy+gXuIDajhf1bOtLJ5tjBicC00P241VLZaXsTTMO1clPeBVMN59svYIboiioX12OkiKiPpc3K+s80LpWfs70iwLcE8OE+mhMYgB7FphS4C1ktPN/S5D74gPzHQQIDAQAB;"),
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
