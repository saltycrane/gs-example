# Gluestick Static Site Example

Tested with Node 8.4.0, npm 5.6.0, Docker 17.09.1, aws-cli 1.14.11 on macOS 10.12.6

## Build on local machine then serve with Nginx in Docker

```bash
$ # assume Node.js and gluestick-cli are installed already
$ git clone https://github.com/saltycrane/gs-examples.git
$ cd gs-examples/static-site
$ npm install
$ NODE_ENV=production gluestick build --static
$ docker build -f Dockerfile-runonly -t my-gs-nginx .
$ docker run -d -p 9090:80 my-gs-nginx
$ # go to http://localhost:9090
```

## Build on local machine then upload to S3

```bash
$ # assume Node.js, gluestick-cli, and awscli tools are installed already
$ git clone https://github.com/saltycrane/gs-examples.git
$ cd gs-examples/static-site
$ npm install
$ NODE_ENV=production ASSET_URL=/saltycrane/gs-static-ex/assets gluestick build --static
$ aws s3 sync --acl public-read build s3://saltycrane/gs-static-ex
$ # go to https://s3.amazonaws.com/saltycrane/gs-static-ex/static/main.html
```

## Build in Docker and serve with Nginx in Docker

```bash
$ # assume Node.js and gluestick-cli are installed already
$ git clone https://github.com/saltycrane/gs-examples.git
$ cd gs-examples/static-site
$ docker build -f Dockerfile-build-and-run -t my-gs-nginx2 .
$ docker run -d -p 9090:80 my-gs-nginx2
$ # go to http://localhost:9090
```
