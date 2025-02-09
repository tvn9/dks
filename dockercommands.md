# Docker Commands Nodes

| Commands                                   | Description                                       |
| ------------------------------------------ | ------------------------------------------------- |
| docker container prune                     | remove all containers                             |
| docker image prune                         | remove all imgages                                |
| docker container rm \<container ID\>       | remove container                                  |
| docker logs \<IDabc1234\>                  | show all logs from a container                    |
| docker stop \<container ID\>               | stop a running container (delay up to 10 seconds) |
| docker kill \<container ID\>               | hard stop a running container                     |
| docker exec -it \<id\> bash                | start a cli evironment on a container             |
| docker container run --publish 80:80 nginx | start nginx container on port 80:80               |
| docker system prune                        | remove all containers                             |
|                                            |


## Assignments Results

Assignment 01

1. Start a mysql container with options -d -p --name -e 
   docker container run -d -p 3306:3306 --name mysqldb -e MYSQL_RANDOM_ROOT_PASSWORD=yes mysql 
2. Start an appache server on port 8080 --name webserver  
   docker container run -d --name webserver -p 8080:80 httpd 
3. Start nginx server with -d -p --name  
   docker container run -d --name webproxy -p 80:80 nginx 

