D("akademiaurzadzania.pl", REGISTRAR_NONE, DnsProvider(PROVIDER_OVH),
  DefaultTTL(3600),

  // OVH Domain Redirection
  // https://forum.rootnode.pl/topic/1228-www-in-txt-3welcome/?do=findComment&comment=11633
  OVH_REDIRECT("@", "https://designcoach.pl", 302),
  OVH_REDIRECT("www", "https://designcoach.pl", 302),

  MX("@", 10, "mx3.mail.ovh.net."),
  MX("@", 1, "mx4.mail.ovh.net.")
);
