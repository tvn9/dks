# Docker 

## Container and Images Commands

| Commands                                        | Description                                       |
| ----------------------------------------------- | ------------------------------------------------- |
| docker container prune                          | remove all containers                             |
| docker container rm \<container ID\>            | remove container                                  |
| docker logs \<container ID\>                    | show all logs from a container                    |
| docker start \<container ID\>                   | start a container in detach mode by default       |
| docker stop \<container ID\>                    | stop a running container (delay up to 10 seconds) |
| docker kill \<container ID\>                    | hard stop a running container                     |
| docker exec -it \<id\> bash                     | start a cli evironment on a container             |
| docker run --detach -p 8080:8080 \<image name\> | create & run a new container in detach mode       |
| docker container run --publish 80:80 nginx      | start nginx container on port 80:80               |
| docker system prune                             | remove all containers                             |
| docker container top                            | process list in one container                     |
| docker container inspect                        | details of one container config                   |
| docker container stats                          | performance stats for all containers              |
| docker rm \<container id\>                      | remove a container                                |
| docker rmi \<image id\>                         | remove an image                                   |
| docker container run -it \<container id\> bash  | start new container interactively                 |
| docker container exec -it \<container id\> bash | run additional command in existing container      |
| docker build .                                  | build a new image configured in Dockerfile        |
| docker tag \<image id\> \<username\projectname> | add name to an un-name images                     |
| docker build -t dks/app1 .                      | build a new image with a name                     |
| docker start -a -i \<container ID\>             | start a container in attach and interactive mode  |
| docker run -p 80:80 -d --rm 49533d5e8e1f        | option --rm remove the container after it stop    |
| docker image inspect 3bbace02aa21               | inspect the detail info from an image             |
| docker network inspect \<network name\>         | show all network configuration on localhost       |

## Copy files to and from container file system

| Commands                                           | Description                             |
| -------------------------------------------------- | --------------------------------------- |
| docker cp \<local path\> \<container-name:/usr/app | copy file from local drive to container |



## Docker Compose (docker-compose) 

| Commands             | Description                           |
| -------------------- | ------------------------------------- |
| docker-compose up -d | Buill all images and start containers |
| docker-compose down  | Stop and remove all containers        |

## Docker (Dockerfile)

## Assignments Results

Assignment 01

1. Start a mysql container with options -d -p --name -e 
   docker container run -d -p 3306:3306 --name mysqldb -e MYSQL_RANDOM_ROOT_PASSWORD=yes mysql 

2. Start an appache server on port 8080 --name webserver  
   docker container run -d --name webserver -p 8080:80 httpd 

3. Start nginx server with -d -p --name  
   docker container run -d --name webproxy -p 80:80 nginx 

