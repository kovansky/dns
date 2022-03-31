D("akademiaurzadzania.pl", REGISTRAR_NONE, DnsProvider(PROVIDER_OVH),
  DefaultTTL(3600),

  // OVH Domain Redirection
  // https://forum.rootnode.pl/topic/1228-www-in-txt-3welcome/?do=findComment&comment=11633
  TXT("@", "4|designcoach.pl"), // Redirect to designcoach.pl [302]
  TXT("www", "4|designcoach.pl"),

  A("@", LUTHARON),
  A("www", LUTHARON),

  MX("@", 10, "mx3.mail.ovh.net."),
  MX("@", 1, "mx4.mail.ovh.net.")
);
