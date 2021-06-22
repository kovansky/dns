D("f4dev.me", REGISTRAR_NONE, DnsProvider(PROVIDER_CLOUDFLARE),
    A("*", LUTHARON),
    A("@", "192.30.252.153", CF_PROXY_ON), // Github Pages
    A("@", "192.30.252.154", CF_PROXY_ON), // Github Pages

    MX("@", 0, "f4dev-me.mail.protection.outlook.com."),

    CNAME("autodiscover", "autodiscover.outlook.com.", CF_PROXY_ON),
    CNAME("www", "kovansky.github.io.", CF_PROXY_ON), // Github Pages
    CNAME("plugincontroller", "hosting.gitbook.io."), // Plugincontroller documentation

    TXT("default._domainkey", "v=DKIM1; k=rsa; s=email; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC+kqPUJ7zu9Cjl/XOEaE7IGh+1f70Xelv0xwS5eQYh9ZQZdsfs74cc3lxgFr66ysDyD6wV41qyi/8r5A17HWMSiZ2KC6yqohPXh37J/DRIaw4Pfxcl2CAdxWeQFqtqoLvzf5AX1qFzoOz8oqPb0OpPs2TGMPyvnpYSUC1jcvGTDQIDAQAB"),
    TXT("_dmarc", "v=DMARC1; p=none; fo=1; rua=mailto:root@f4dev.me"),

    SPF_BUILDER({
        label: "@",
        parts: [
            "v=spf1",
            "include:spf.protection.outlook.com",
            "-all"
        ]
    }),

    TXT("@", "protonmail-verification=bbdbabda930c1f93a30c9476ddf19b60d5d4c4ad"),
    TXT("@", "google-site-verification=brapgpnqQD1QcBSyGqgeo0I983unWXauUPZp7P6bQxo"),
    TXT("@", "MS=ms48550399"),
    TXT("ovhcontrol", "NP3Bj12omhML0lDqx2cEmw")
)
