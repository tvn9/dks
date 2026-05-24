# syntax=docker/dockerfile:1

FROM golang:1.26.3

# Set destination for COPY
WORKDIR /test-go-app

# Download Go modules
COPY go.mod ./
RUN go mod download 

# Copy the source code
COPY *.go ./

# Build
RUN CGO_ENABLE=0 GOOS=linux go build -o /go-app

# Allow docker container to run the app on port :8080
EXPOSE 8080

# Run
CMD ["/go-app"]
