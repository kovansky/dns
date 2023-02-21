D("eduquality.eu", REGISTRAR_OVH, DnsProvider(PROVIDER_OVH),
    DefaultTTL(3600),

    A('@', '213.32.10.205'),
    A('www', '213.32.10.205'),

    MX('@', 100, 'mx3.mail.ovh.net.'),
    MX('@', 1, 'mx1.mail.ovh.net.'),
    MX('@', 5, 'mx2.mail.ovh.net.'),

    TXT("_github-pages-challenge-kovansky", "25d2909c338b1a326513c2fc8cd00a"),

    // Sendinblue mailing
    TXT("@", "sendinblue-code:db57fe1ad62c147c5f8cb33330078645"),
    TXT("mail._domainkey.eduquality.eu", "k=rsa;p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDeMVIzrCa3T14JsNY0IRv5/2V1/v2itlviLQBwXsa7shBD6TrBkswsFUToPyMRWC9tbR/5ey0nRBH0ZVxp+lsmTxid2Y2z+FApQ6ra2VsXfbJP3HE6wAO0YTVEJt1TmeczhEd2Jiz/fcabIISgXEdSpTYJhb0ct0VJRxcg4c8c7wIDAQAB"),
    SPF_BUILDER({
        label: "@",
        parts: [
            "v=spf1",
            "include:mx.ovh.com", // OVH mail
            "include:spf.sendinblue.com", // Sendinblue transactional mailing
            "mx",
            "-all"
        ]
    }),

    // Github Pages
    CNAME("staging", "kovansky.github.io."),
    // OVH defaults
    CNAME('autoconfig', 'mailconfig.ovh.net.'),
    CNAME('autodiscover', 'mailconfig.ovh.net.'),
    CNAME('ftp', 'eduquality.eu.'),

    SRV('_autodiscover._tcp', 0, 0, 443, 'mailconfig.ovh.net.'),
    SRV('_imaps._tcp', 0, 0, 993, 'ssl0.ovh.net.'),
    SRV('_submission._tcp', 0, 0, 465, 'ssl0.ovh.net.')
)
