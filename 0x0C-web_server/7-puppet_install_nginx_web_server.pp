#puppet manifest to set up nginx webserver on the remote machine

package { 'nginx':
ensure  => installed,
}

exec { 'execution':
command => 'nginx start',
path    => '/etc/init.d',
}

file { '/var/www/html/index.nginx-debian.html':
content => 'Holberton School',
}

file_line { 'redirection':
ensure => present,
path   => '/etc/nginx/sites-available/default',
after  => 'listen 80 default_server;',
line   => 'rewrite ^/redirect_me https://www.youtube.com/watch?v=QH2-TGUlwu4 permanent;',
}

service { 'nginx':
  ensure  => running,
  require => Package['nginx'],
}
