D("designcoach.pl", REGISTRAR_OVH, DnsProvider(PROVIDER_OVH),
  DefaultTTL(900),

  A("@", DOMENOMANIA_DCOACH),
  A("*", DOMENOMANIA_DCOACH),
  A("www", DOMENOMANIA_DCOACH),
  A("preview", DOMENOMANIA_DCOACH), // Drafts website
  A("prezent", DOMENOMANIA_DCOACH),
  A("mail", DOMENOMANIA_DCOACH),
  A("panel", AZYMONDIAS),

  MX("@", 0, "mail.designcoach.pl."),

  CNAME("_96C2D4280C9AC09B2B5AAD694C5F69E9", "73CF3CD81224E3E9D499C5446D51A18F.9FE2C266CE89B0D5DF89FEA0F1375AC9.t0897039001607076961.comodoca.com."), // SSL
  CNAME("autoconfig", "mua-ac-1.zenbox.pl."), // Mailbox
  CNAME("autodiscover", "mua-ac-1.zenbox.pl."), // Mailbox
  CNAME("_8016cafd54cf83dff1c996a4a0c65f3d.new", "_d94b6f88f5827b1573c4ca8c842fd4ce.qwknvqrlct.acm-validations.aws."), // AWS ACM validation
  CNAME("_a3810d97ed44081327f51e3a15380bf6.www.new", "_e2c54b76b65dac794ffbbf514eb3f7cf.qwknvqrlct.acm-validations.aws."), // AWS ACM validation
  CNAME("new", "d2vrajn1j2g4zf.cloudfront.net."),
  CNAME("www.new", "d2vrajn1j2g4zf.cloudfront.net."),

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
  }),

  TXT("@", "dcf8f214ee54b3bc14df21425f163c65f3a29620e6ea070a91dbf68798a9928e"),
  TXT("www", "dcf8f214ee54b3bc14df21425f163c65f3a29620e6ea070a91dbf68798a9928e")
);
