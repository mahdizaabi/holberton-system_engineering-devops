#puppet manifest to set up nginx webserver on the remote machine

package { 'nginx':
ensure  => latest,
}

exec { 'execution':
command => 'nginx start',
path    => '/etc/init.d',
}

file_line { 'sudo_rule':
path => '/etc/nginx/sites-available/default',
line => 'rewrite ^/redirect_me https://www.youtube.com/watch?v=QH2-TGUlwu4 permanent;',
}

exec { 'restart':
command => 'nginx restart',
path    => '/etc/init.d',
}
