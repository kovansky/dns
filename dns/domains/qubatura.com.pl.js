D("qubatura.com.pl", REGISTRAR_OVH, DnsProvider(PROVIDER_OVH),
  DefaultTTL(3600),

  A("@", LUTHARON),
  A("*", LUTHARON),
  A("www", LUTHARON),

  MX("@", 10, "mx1.zenbox.pl."),
  MX("@", 20, "mx1.zenbox.pl."),
  MX("@", 30, "mx1.zenbox.pl."),

  CNAME("autoconfig", "mua-ac-1.zenbox.pl."), // Mailbox
  CNAME("autodiscover", "mua-ac-1.zenbox.pl."), // Mailbox

  TXT("_dmarc", "v=DMARC1; p=none; sp=none"),
  TXT("_domainkey", "o=~"),
  TXT("@", "v=spf1 a mx include:_spf.zenbox.pl -all"),
  TXT("@", "google-site-verification=iWWhFbCz36-Y3pgr7-1_j4XzjIJu7V8VpQ3-LJEgPeI"),
  TXT("x._domainkey", "v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAo9NP5ykqDSTOt/E4y5aTwHS3hDFViUWoTgmuOoYCQeLQTR+cRm91pLI7ouMhfw1Msi/9fNTKVw+C58gs01ENvkdaNEMEnbjCYTXdB3mRvCAGlNb/IuRZjfQDjgi+gAu3r3oCsHV8aS8mIcSlKxbSQqjb+ADyyk7lv7G4VwktSXKU3fFm3EMTOUexM+dkojC8MIO2suxrBkXwd3CMklqTpiFzchGhXbfCzSMnpaBEfNu9rCX7ulq4wdxj0a18Hl7N/8o/BBoL6M1s3m+UKyTJYEXS7toYI+e6SVdQ0ybm7FCqGxuXpPPvndOkoAv+gLOQ2aBEP8r7o7TgDbvaBW3frwIDAQAB")
);
