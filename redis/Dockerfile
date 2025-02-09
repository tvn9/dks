# Use and exisiting docker image as a base
FROM alpine

# Download and install and dependency
RUN apk add --update redis

# Tell the image what to do when it starts as a container
CMD ["redis-server"]

