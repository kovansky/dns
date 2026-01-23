D(
    "alchemiawnetrza.pl",
    REGISTRAR_OVH,
    DnsProvider(PROVIDER_OVH),
    DefaultTTL(3600),

    A("@", DOMENOMANIA_DCOACH),
    A("www", DOMENOMANIA_DCOACH),

    A("mail", DOMENOMANIA_DCOACH),

    MX("@", 0, "mail.alchemiawnetrza.pl."),

    TXT(
        "_dmarc",
        "v=DMARC1; p=quarantine; sp=none; adkim=r; aspf=r; pct=100; fo=0; rf=afrf; ri=86400; rua=mailto:dmarc@alchemiawnetrza.pl; ruf=mailto:dmarc@alchemiawnetrza.pl"
    ),
    TXT(
        "defautl._domainkey",
        "v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAua7j9Nu1WW0OUsrEZqHEhRJHB195sKDl90KkjF7XLWHa3xTGPnGN55q23QSFB7rSmdbf3gfLBE8cg4ye+hZrUk7ViSrHQ7EZwERHlcob0N1gz+iGIB0gbaZTf8S2emUzwAnFk1J9/RY2cVVl2RPCJte6jJEymvk67PqPSiBgtilOJeuqXfUyJ7ZVoU7FN8H9QfUtd3xIAua9U/1gySIOnS1zBnrt72HH9otyuWai75X+bPpxAaqgBk26+7DtEwEyAptGfyzRerhzbD3Hm2eyAqPl6JL/nxObjV0up4lTL5hDeBT4jTuK8bWsZ+wv9wnlIUd+fI17Np8g85fOOLggiwIDAQAB;"
    ),

    SPF_BUILDER({
        label: "@",
        parts: [
            "v=spf1",
            // Domenomania
            "ip4:185.17.40.218",
            "ip4:185.17.43.201",
            "include:spf.domenomania.pl",
            // General
            "-all"
        ]
    }),
);
