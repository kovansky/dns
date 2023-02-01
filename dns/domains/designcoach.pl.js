D("designcoach.pl", REGISTRAR_OVH, DnsProvider(PROVIDER_OVH),
  DefaultTTL(900),

  A("@", ZENBOX_DCOACH),
  A("*", ZENBOX_DCOACH),
  A("www", ZENBOX_DCOACH),
  A("preview", ZENBOX_DCOACH), // Drafts website
  A("localhost", IP("127.0.0.1")),
  A("panel", AZYMONDIAS),

  MX("@", 10, "mx1.zenbox.pl."),
  MX("@", 20, "mx1.zenbox.pl."),
  MX("@", 30, "mx1.zenbox.pl."),

  CNAME("_96C2D4280C9AC09B2B5AAD694C5F69E9", "73CF3CD81224E3E9D499C5446D51A18F.9FE2C266CE89B0D5DF89FEA0F1375AC9.t0897039001607076961.comodoca.com."), // SSL
  CNAME("autoconfig", "mua-ac-1.zenbox.pl."), // Mailbox
  CNAME("autodiscover", "mua-ac-1.zenbox.pl."), // Mailbox
  CNAME("_8016cafd54cf83dff1c996a4a0c65f3d.new", "_d94b6f88f5827b1573c4ca8c842fd4ce.qwknvqrlct.acm-validations.aws."), // AWS ACM validation
  CNAME("_a3810d97ed44081327f51e3a15380bf6.www.new", "_e2c54b76b65dac794ffbbf514eb3f7cf.qwknvqrlct.acm-validations.aws."), // AWS ACM validation

  TXT("_dmarc", "v=DMARC1; p=none; sp=none"),
  TXT("_domainkey", "o=~"),
  TXT("@", "v=spf1 a mx include:_spf.zenbox.pl -all"),

  TXT("@", "dcf8f214ee54b3bc14df21425f163c65f3a29620e6ea070a91dbf68798a9928e"),
  TXT("www", "dcf8f214ee54b3bc14df21425f163c65f3a29620e6ea070a91dbf68798a9928e")
  // TXT("x._domainkey", "v=DKIM1; k=rsa;" +
  //     "
  //     p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA1u3vMBgucfHZcs/yCYsX1Jx++HpiLvYa5aS88JovMnBHhCfA4zYPbRIOfnukGqc/Ksu0bjQMSHBMxltmQZX4ZvjxVfDKgtC9n0UpkSf2LgV2YI+uFUxXx9Zs3W80FTlGgBkcDfl/1Og6FID67/7e2+V7qqKkEgzPjgnxb4h4ZLy1RL+KfUNgnj71MtuKUrUeaFzIpBYClrPbeqsDcdSjre7o8BiLqBLK0KLMzyHjfxypVlo/NDuGh7NnIpUZgJxVIACsWyw2HJAed+7fRIcVOM+o7wj3WmF/+wq+oml+qBfGrKnYL1hmUgsA9dMbwR9XdXFGpZ7Rhyo2cw+c1MYWMQIDAQAB")
  // FixMe: add using DKIM builder
);
