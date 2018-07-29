#!/bin/sh

echo "FQDN: $FQDN"

#replace server_name in nginx conf
cp -Rf /etc/nginx/conf/template.conf /etc/nginx/conf.d/default.conf

#on alpine
sed -i "s/\$FQDN/$FQDN/g" /etc/nginx/conf.d/default.conf

nginx -g 'daemon off;'
