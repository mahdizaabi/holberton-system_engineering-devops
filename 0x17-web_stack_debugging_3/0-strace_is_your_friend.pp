# Fix the log Errors, catch the error and fixe it
exec {'/etc/php5/apache2/php.ini':
  path     => ['/usr/bin', '/sbin', '/bin', '/usr/sbin'],
  command  => "sed -i '/display_errors = Os/c\display_errors = On' /etc/php5/apache2/php.ini",
  provider => 'shell',}

exec {'/etc/init.d/apache2':
  path     => ['/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin'],
  command  => '/etc/init.d/apache2 restart',
  provider => 'shell',}
