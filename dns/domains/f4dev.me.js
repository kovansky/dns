D("f4dev.me", REGISTRAR_NONE, DnsProvider(PROVIDER_CLOUDFLARE),
    A("*", LUTHARON),
    // GitHub Pages
    A("@", "192.30.252.153", CF_PROXY_ON),
    A("@", "192.30.252.154", CF_PROXY_ON),
    // Platforma hufiec
    A("platforma", "178.32.203.125", CF_PROXY_ON),
    A("www.platforma", "178.32.203.125", CF_PROXY_ON),
    AAAA("platforma", "2001:41d0:301:5::27", CF_PROXY_ON),
    AAAA("www.platforma", "2001:41d0:301:5::27", CF_PROXY_ON),
    // Debugging strony hufca
    A("hufiec2", "178.32.203.125", CF_PROXY_ON),
    A("www.hufiec2", "178.32.203.125", CF_PROXY_ON),
    AAAA("hufiec2", "2001:41d0:301:5::27", CF_PROXY_ON),
    AAAA("www.hufiec2", "2001:41d0:301:5::27", CF_PROXY_ON),
    // ZHP tests
    CNAME("zhp-tests", "zhp-tests.azurewebsites.net."),
    TXT("asuid.zhp-tests", "59AD87167F51C48A766AD27F7323B2C08FF48AE5A2B5C67D7CF6A80F216A7E66"),
    CNAME("www.zhp-tests", "zhp-tests.azurewebsites.net."),
    TXT("www.asuid.zhp-tests", "59AD87167F51C48A766AD27F7323B2C08FF48AE5A2B5C67D7CF6A80F216A7E66"),

    // M365 configuration
    MX("@", 0, "f4dev-me.mail.protection.outlook.com."),

    CNAME("www", "kovansky.github.io.", CF_PROXY_ON), // Github Pages
    CNAME("autodiscover", "autodiscover.outlook.com.", CF_PROXY_OFF), // M365 Autodiscover
    CNAME("plugincontroller", "hosting.gitbook.io.", CF_PROXY_OFF), // Plugincontroller documentation
    CNAME('zen-preview', 'kovansky.github.io.', CF_PROXY_ON), // Podgląd motywu Zen

    // M365 configuration
    TXT("default._domainkey", "v=DKIM1; k=rsa; s=email; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC+kqPUJ7zu9Cjl/XOEaE7IGh+1f70Xelv0xwS5eQYh9ZQZdsfs74cc3lxgFr66ysDyD6wV41qyi/8r5A17HWMSiZ2KC6yqohPXh37J/DRIaw4Pfxcl2CAdxWeQFqtqoLvzf5AX1qFzoOz8oqPb0OpPs2TGMPyvnpYSUC1jcvGTDQIDAQAB"),
    TXT("_dmarc", "v=DMARC1;p=none;rua=mailto:8c96870c92@rua.easydmarc.eu,mailto:root@f4dev.me;ruf=mailto:8c96870c92@ruf.easydmarc.eu;fo=1"), // EasyDMARC

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
    TXT("_github-pages-challenge-kovansky", "007ed8d070b9f6c96a12597268b299"),
)
