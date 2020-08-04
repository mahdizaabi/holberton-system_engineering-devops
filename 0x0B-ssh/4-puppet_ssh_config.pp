# Set up the ssh configuration file
exec { 'configuration_file':
  command => 'sed -i "s|PasswordAuthentication yes|PasswordAuthentication no", /etc/ssh/ssh_config',
  path    => '/bin',
}
