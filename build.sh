
TAG=$(date +%s);nerdctl --namespace k8s.io build -t my-fastify-service-image:$TAG .

kubectl create namespace fastify
sed -i '/mysql/! s/\(image:.*:\).*$/\1'"$TAG"'/' deployment.yaml

kubectl apply -f deployment.yaml
