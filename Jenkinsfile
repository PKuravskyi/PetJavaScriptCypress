pipeline {
	agent {
		docker {
			image 'cypress/base:latest'
		}
	}

    stages {
        // stage('Clone repository') {
        //     steps {
        //         git branch: 'main', url: 'https://github.com/PKuravskyi/PetTypeScriptCypress.git'
        //     }
        // }

        stage('Install dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Run tests') {
			steps {
				script {
					sh '''
						echo 'Starting Shopping Store App'
						chmod +x './ShoppingStoreApp/shopping-store-linux-amd64'
						./ShoppingStoreApp/shopping-store-linux-amd64 &
					'''
					sh 'npm run cy:run:default'
				}
			}
		}
	}
}
