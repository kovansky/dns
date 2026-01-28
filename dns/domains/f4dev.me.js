D("f4dev.me", REGISTRAR_NONE, DnsProvider(PROVIDER_CLOUDFLARE),
    A("*", AZYMONDIAS),

    A("koravari", KORAVARI),

    // ZHP Migration
    A("hufiec", ZHP_NOWE),
    A("5dw", ZHP_NOWE),
    A("platforma2", ZHP_NOWE),

    // GitHub Pages f4dev
    A("@", "192.30.252.153", CF_PROXY_ON),
    A("@", "192.30.252.154", CF_PROXY_ON),

    // Platforma hufiec
    A("platforma", "178.32.203.125", CF_PROXY_ON),
    A("www.platforma", "178.32.203.125", CF_PROXY_ON),
    AAAA("platforma", "2001:41d0:301:5::27", CF_PROXY_ON),
    AAAA("www.platforma", "2001:41d0:301:5::27", CF_PROXY_ON),

    // UFO Media
    OVH_REDIRECT("ufo.cms", "https://panel.ufomedia.pl/admin", 301),
    A("ufo.preview", AZYMONDIAS, CF_PROXY_OFF),
    CNAME("ufo.fly", "ufo-starbase.fly.dev."),
    CNAME('ufo-assets', 'public.r2.dev.', CF_PROXY_ON),

    // Old Zen panel
    OVH_REDIRECT("zen-cms", "https://panel.zencentrum.pl", 301),

    // Mailing
    TXT("mailing", "brevo-code:d9a1747d2432c54b9b182c5481c6176a"),
    TXT('mail._domainkey.mailing', "k=rsa;p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDeMVIzrCa3T14JsNY0IRv5/2V1/v2itlviLQBwXsa7shBD6TrBkswsFUToPyMRWC9tbR/5ey0nRBH0ZVxp+lsmTxid2Y2z+FApQ6ra2VsXfbJP3HE6wAO0YTVEJt1TmeczhEd2Jiz/fcabIISgXEdSpTYJhb0ct0VJRxcg4c8c7wIDAQAB"),

    // M365 configuration
    MX("@", 0, "f4dev-me.mail.protection.outlook.com."),

    CNAME("www", "kovansky.github.io.", CF_PROXY_ON), // Github Pages
    CNAME("autodiscover", "autodiscover.outlook.com.", CF_PROXY_OFF), // M365 Autodiscover
    CNAME("plugincontroller", "hosting.gitbook.io.", CF_PROXY_OFF), // Plugincontroller documentation

    // M365 configuration
    TXT("default._domainkey", "v=DKIM1; k=rsa; s=email; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC+kqPUJ7zu9Cjl/XOEaE7IGh+1f70Xelv0xwS5eQYh9ZQZdsfs74cc3lxgFr66ysDyD6wV41qyi/8r5A17HWMSiZ2KC6yqohPXh37J/DRIaw4Pfxcl2CAdxWeQFqtqoLvzf5AX1qFzoOz8oqPb0OpPs2TGMPyvnpYSUC1jcvGTDQIDAQAB"),
    TXT("_dmarc", "v=DMARC1;p=none;rua=mailto:8c96870c92@rua.easydmarc.eu,mailto:root@f4dev.me,mailto:4dcf81fb10834d589a8ecb4fc5cd665a@dmarc-reports.cloudflare.net;ruf=mailto:8c96870c92@ruf.easydmarc.eu;fo=1"), // EasyDMARC; Cloudflare DMARC Management

    SPF_BUILDER({
        label: "@",
        parts: [
            "v=spf1",
            "include:spf.protection.outlook.com",
            "-all"
        ]
    }),

    // Domain verificators
    TXT("@", "protonmail-verification=bbdbabda930c1f93a30c9476ddf19b60d5d4c4ad"),
    TXT("@", "google-site-verification=brapgpnqQD1QcBSyGqgeo0I983unWXauUPZp7P6bQxo"),
    TXT("@", "MS=ms48550399"),
    TXT("ovhcontrol", "NP3Bj12omhML0lDqx2cEmw"),
    TXT("_github-pages-challenge-kovansky", "007ed8d070b9f6c96a12597268b299")
)
