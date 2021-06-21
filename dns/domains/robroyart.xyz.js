D("robroyart.xyz", REGISTRAR_NONE, DnsProvider(PROVIDER_CLOUDFLARE),
    DefaultTTL(1),

    A("*", LUTHARON),
    A("@", LUTHARON, CF_PROXY_ON),
    A("www", LUTHARON, CF_PROXY_ON),

    MX('@', 10, 'eforward1.registrar-servers.com.'),
    MX('@', 10, 'eforward2.registrar-servers.com.'),
    MX('@', 10, 'eforward3.registrar-servers.com.'),
    MX('@', 15, 'eforward4.registrar-servers.com.'),
    MX('@', 20, 'eforward5.registrar-servers.com.'),

    SPF_BUILDER({
        label: "@",
        parts: [
            "v=spf1",
            "include:spf.efwd.registrar-servers.com",
            "~all"
        ]
    })
)
