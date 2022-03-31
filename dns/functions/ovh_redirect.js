function OVH_REDIRECT(domain, target, code) {
  code     = +code;
  var type = code === 302 ? "1" : code === 301 ? "4" : false;

  if(type === false) {
    return;
  }

  return [
    TXT(domain, code + "|" + target, TTL(60)),
    A(domain, OVH_REDIR_SERVER, TTL(0))
  ];
}