pipeline {
	agent {
		docker {
			image 'cypress/base:latest'
		}
	}

    stages {
        stage('Install dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Run tests') {
			steps {
				script {
					sh '''
						chmod +x './ShoppingStoreApp/shopping-store-linux-amd64'
						./ShoppingStoreApp/shopping-store-linux-amd64 &
					'''
					sh 'npm run cy:run:default'
				}
			}
		}
	}
}
