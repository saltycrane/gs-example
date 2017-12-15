# Gluestick Static Site Nginx Docker Example

## Usage

```
$ NODE_ENV=production gluestick build --static
$ docker build -t my-gs-nginx .
$ docker run -d -p 9090:80 my-gs-nginx
$ # go to http://localhost:9090
```
