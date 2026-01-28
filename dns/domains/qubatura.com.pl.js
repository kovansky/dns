D("qubatura.com.pl", REGISTRAR_OVH, DnsProvider(PROVIDER_OVH),
  DefaultTTL(3600),

  A("@", AZYMONDIAS),
  A("*", AZYMONDIAS),
  A("www", AZYMONDIAS),

  A("mail", DOMENOMANIA_DCOACH),

  MX("@", 0, "mail.qubatura.com.pl."),

  TXT(
      "_dmarc",
      " v=DMARC1;p=quarantine;sp=none;adkim=r;aspf=r;pct=100;fo=0;rf=afrf;ri=86400;rua=mailto:dmarc@qubatura.com.pl;ruf=mailto:dmarc@qubatura.com.pl ",
  ),
  TXT(
      "default._domainkey",
      "v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAyU9AmWuXMmjKx2eDcH9cAXYeuNTfC405PINPZ3h19T3Uv/XCljYDce6DpgaSLhGyNmvbbBMQ22bEkuID0tx2HH4+0fI7yQO8H9UtLnvw8c+Msy2+CmKpDddtYWHvTZ5s0chv/syHxdnjCbJzTmLvUcX9EGn4KfEOctGftgkBdaynYTqKTC90AYz1NgwbJyYmnWcshlaUtCWrsYwn4OLht53/m22NfBIjyZmEWH5iPJDyrCvZD/ZtDfL8yrqf8FtnHX/JnctzhPgwv7DAj4dPKH5ZjKhl+vLzMuDGdYmsezmV7mY9QsNjGW/5Cg20KOnU9mYrGcaLr8qmLrK5DUJtjQIDAQAB;",
  ),
  SPF_BUILDER({
      label: "@",
      parts: [
          "v=spf1",
          "+a",
          "+mx",
          "+ip4:185.17.43.198",
          "+ip4:185.17.40.218",
          "+ip4:185.17.43.200",
          "+include:spf.domenomania.pl",
          "-all",
      ],
  }),
  TXT(
      "@",
      "google-site-verification=iWWhFbCz36-Y3pgr7-1_j4XzjIJu7V8VpQ3-LJEgPeI",
  ),
);
