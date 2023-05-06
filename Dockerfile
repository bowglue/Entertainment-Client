FROM httpd:latest
#COPY ./test /usr/local/apache2/htdocs/videos
# COPY ./htaccess /usr/local/apache2/htdocs/.htaccess
COPY ./data/video /usr/local/apache2/htdocs/videos