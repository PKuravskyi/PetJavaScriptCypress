pipeline {
	agent {
		docker {
			image 'cypress/included'
		}
	}

    stages {
        stage('Install dependencies') {
            steps {
                sh 'npm ci'
            }
        }

		stage('Start Shopping Store App') {
			steps {
				script {
					sh '''
						chmod +x './ShoppingStoreApp/shopping-store-linux-amd64'
						./ShoppingStoreApp/shopping-store-linux-amd64 &
					'''
				}
			}
		}

        stage('Run tests') {
			steps {
				script {
					sh 'npm run cy:run'
				}
			}
		}
	}
}
