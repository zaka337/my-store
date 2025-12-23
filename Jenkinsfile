pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out code...'
                // Jenkins pulls code automatically
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    echo 'Building React/Vite Image...'
                    // Windows command to build
                    bat 'docker build -t react-viva .'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    echo 'Deploying Container...'
                    // 1. Stop old container (ignore error if none exists)
                    bat 'docker stop react-demo || exit 0'
                    // 2. Remove old container
                    bat 'docker rm react-demo || exit 0'
                    // 3. Run new container on Port 8080
                    bat 'docker run -d -p 8080:80 --name react-demo react-viva'
                }
            }
        }
    }
}