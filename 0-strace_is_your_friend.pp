exec {'/etc/php5/apache2/php.ini':
path     => ['/usr/bin', '/sbin', '/bin', '/usr/sbin'],
command  => "sed -i '/display_er rors = On/c\display_errors = On' php.ini",
provider => 'shell',}
