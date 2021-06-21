D("polishkendamacommunity.pl", REGISTRAR_OVH, DnsProvider(PROVIDER_OVH),
    DefaultTTL(3600),

    MX('@', 1, 'mx1.mail.ovh.net.'),
    MX('@', 5, 'mx2.mail.ovh.net.'),
    MX('@', 100, 'mx3.mail.ovh.net.'),

    A('@', '151.80.140.22'),
    A('*', '151.80.140.22'),
    A('www', '151.80.140.22'),

    TXT('@', '1|www.polishkendamacommunity.pl'),
    TXT('@', 'v=spf1 include:mx.ovh.com ~all'),
    TXT('www', '3|welcome'),

    CNAME('ftp', 'polishkendamacommunity.pl.'),
    CNAME('autoconfig', 'mailconfig.ovh.net.'),
    CNAME('autodiscover', 'mailconfig.ovh.net.'),

    SRV('_autodiscover._tcp', 0, 0, 443, 'mailconfig.ovh.net.'),
    SRV('_imaps._tcp', 0, 0, 993, 'ssl0.ovh.net.'),
    SRV('_submission._tcp', 0, 0, 465, 'ssl0.ovh.net.')
)
