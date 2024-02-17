pipeline {
    agent any
		
    parameters {
        gitParameter branchFilter: 'origin/(.*)', defaultValue: 'main', name: 'BRANCH', type: 'PT_BRANCH'
    }

    environment {
        BUILD_TRIGGER_BY = "${currentBuild.getBuildCauses()[0].userId}"
    }

    stages {
        stage('Checkout repository') {
            steps {
				echo "Build triggered by: ${BUILD_TRIGGER_BY}"
                git branch: "${params.BRANCH}", url: 'https://github.com/vkozub/PetProjectJS.git'
            }
        }

        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run tests') {
			steps {
				script {
					currentBuild.description = "${BUILD_TRIGGER_BY}"
					sh '''
						chmod +x './ShoppingStoreApp/shopping-store-linux-amd64'
						./ShoppingStoreApp/shopping-store-linux-amd64 &
					'''
					sh "npm run cy:run"
				}
			}
		}
	}
}
