D("qubatura.art", REGISTRAR_OVH, DnsProvider(PROVIDER_OVH),
  DefaultTTL(3600),

  // OVH Domain Redirection
  // https://forum.rootnode.pl/topic/1228-www-in-txt-3welcome/?do=findComment&comment=11633
  OVH_REDIRECT("@", "https://qubatura.com.pl", 302),
  OVH_REDIRECT("www", "https://qubatura.com.pl", 302),

  MX("@", 10, "mx3.mail.ovh.net."),
  MX("@", 1, "mx4.mail.ovh.net."),

  CNAME("autoconfig", "mailconfig.ovh.net."),
  CNAME("autodiscover", "mailconfig.ovh.net."),
  CNAME("ftp", "qubatura.art."),

  SRV("_autodiscover._tcp", 0, 0, 443, "mailconfig.ovh.net."),
  SRV("_imaps._tcp", 0, 0, 993, "ssl0.ovh.net."),
  SRV("_submission._tcp", 0, 0, 465, "ssl0.ovh.net.")
);
