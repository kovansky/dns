D("wnetrzabardzoosobiste.pl", REGISTRAR_NONE, DnsProvider(PROVIDER_OVH),
  DefaultTTL(3600),

  // OVH Domain Redirection
  // https://forum.rootnode.pl/topic/1228-www-in-txt-3welcome/?do=findComment&comment=11633
  TXT("@", "4|designcoach.pl"), // Redirect to designcoach.pl [302]
  TXT("www", "4|designcoach.pl"),

  A("@", LUTHARON),
  A("www", LUTHARON),

  MX("@", 10, "mx3.mail.ovh.net."),
  MX("@", 1, "mx4.mail.ovh.net."),

  CNAME("autoconfig", "mailconfig.ovh.net."),
  CNAME("autodiscover", "mailconfig.ovh.net."),
  CNAME("ftp", "wnetrzabardzoosobiste.pl."),

  SRV("_autodiscover._tcp", 0, 0, 443, "mailconfig.ovh.net."),
  SRV("_imaps._tcp", 0, 0, 993, "ssl0.ovh.net."),
  SRV("_submission._tcp", 0, 0, 465, "ssl0.ovh.net.")
);
