FROM mysql:lts

LABEL creator="Jose Duarte, Software Developer. follow me: https://www.linkedin.com/in/duartydev/"

ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASE=gocrud
ENV MYSQL_PASSWORD=root

CMD ["mysqld", "--port=3306", "--bind-address=0.0.0.0"]

COPY create_table.sql /docker-entrypoint-initdb.d/

EXPOSE 3306