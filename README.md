# Minimal Node.js Kubernetes example

## Dev

    npm start
    open http://localhost:8080


## Deploy
Edit the version of the `image` in `k8s/deployment.yaml`. Then run this:

    docker build -t gcr.io/qubernetes/nodejs:0.1 .

    gcloud docker -- push gcr.io/qubernetes/nodejs:0.1

    kubectl apply -f k8s
