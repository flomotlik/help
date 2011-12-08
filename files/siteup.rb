require 'httparty'
response = HTTParty.get(ARGV[0])
exit 1 if response.code != 200