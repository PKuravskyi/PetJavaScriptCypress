pipeline {
	agent any

	tools {
		nodejs '20.11.1'
	}
		
    parameters {
		choice(name: 'TestType', choices: ['smoke', 'ui', 'api'], description: 'Select type of test')
	}

    stages {
		stage('Add triggered by') {
			steps {
				script {
					build_triggered_by = "${currentBuild.getBuildCauses()[0].shortDescription} / ${currentBuild.getBuildCauses()[0].userId}"
					build_triggered_by = build_triggered_by - ('user ')
					user_name = build_triggered_by.split('/')[0]
					currentBuild.description = "<b>${user_name}</b>"
				}
			}
		}

        stage('Clone repository') {
            steps {
                git branch: 'main', url: 'https://github.com/PKuravskyi/PetTypeScriptCypress.git'
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
