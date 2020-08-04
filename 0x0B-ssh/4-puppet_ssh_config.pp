# Set up the ssh configuration file
exec { 'configuration_file':
  command => 'echo "IdentityFile ~/.ssh/holberton\nPasswordAuthentication no\n" >> /etc/ssh/ssh_config',
  path    => ['/bin'],
}
