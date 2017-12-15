# Gluestick Static Site Nginx Docker Example

## Usage

```bash
$ # assume Node.js, gluestick, and yarn are installed already
$ git clone https://github.com/saltycrane/gs-examples.git
$ cd gs-examples
$ cd static-site
$ yarn  # or npm install
$ NODE_ENV=production gluestick build --static
$ docker build -t my-gs-nginx .
$ docker run -d -p 9090:80 my-gs-nginx
$ # go to http://localhost:9090
```
