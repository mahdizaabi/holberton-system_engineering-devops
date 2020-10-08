exec { 'set limit':
  command => 'sed -i \'s/^ULI.*=.*/ULIMIT="-n 4096"/g\' /etc/default/nginx',
  path    => '/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin',
}

exec { 'restart':
  command => 'nginx restart',
  path    => '/etc/init.d/',
}
