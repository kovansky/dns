D("qubatura.art", REGISTRAR_NONE, DnsProvider(PROVIDER_OVH),
  DefaultTTL(3600),

  A("@", LUTHARON),
  A("*", LUTHARON),
  A("www", LUTHARON),

  MX("@", 10, "mx3.mail.ovh.net."),
  MX("@", 1, "mx4.mail.ovh.net."),

  TXT("@", "1|www.qubatura.art"),
  TXT("www", "3|welcome"),

  CNAME("autoconfig", "mailconfig.ovh.net."),
  CNAME("autodiscover", "mailconfig.ovh.net."),
  CNAME("ftp", "qubatura.art."),

  SRV("_autodiscover._tcp", 0, 0, 443, "mailconfig.ovh.net."),
  SRV("_imaps._tcp", 0, 0, 993, "ssl0.ovh.net."),
  SRV("_submission._tcp", 0, 0, 465, "ssl0.ovh.net.")
);
