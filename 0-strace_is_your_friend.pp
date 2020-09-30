exec {'/etc/php5/apache2/php.ini':
path     => ['/usr/bin', '/sbin', '/bin', '/usr/sbin'],
command  => "sed -i 's/display_errors = Off/c\display_errors = On' /etc/php5/apache2/php.ini",
provider => 'shell',}
