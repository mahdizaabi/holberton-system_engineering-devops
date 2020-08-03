# a manifest that kills a process named killmenow

exec { 'pkill':
path     => ['/usr/bin', '/sbin', '/bin', '/usr/sbin'],
command  => 'pkill -f killmenow',
provider => 'shell',}
