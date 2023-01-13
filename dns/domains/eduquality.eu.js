D("eduquality.eu", REGISTRAR_OVH, DnsProvider(PROVIDER_OVH),
    DefaultTTL(3600),

    A('@', '213.186.33.5'),
    A('www', '213.186.33.5'),

    MX('@', 100, 'mx3.mail.ovh.net.'),
    MX('@', 1, 'mx1.mail.ovh.net.'),
    MX('@', 5, 'mx2.mail.ovh.net.'),

    TXT('@', 'v=spf1 include:mx.ovh.com ~all'),
    TXT("_github-pages-challenge-kovansky", "25d2909c338b1a326513c2fc8cd00a"),

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
