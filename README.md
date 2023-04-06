# Fastify Graceful Shutdown Example
## Requirements
- working kubectl setup
- docker

## Build
Build & Deploy with 
```shell
./build.sh
```

## Usage

1. Watch for Pod logs 
```shell
kubectl logs -nfastify -lapp=fastify -f
```
2. Watch in a seperate terminal for changes in the deployment
```
 watch kubectl get pods  -n fastify
```
3. Kill a fastify container and check the output from (1)

