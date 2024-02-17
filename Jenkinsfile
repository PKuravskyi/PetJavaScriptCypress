pipeline {
    agent { docker { image 'node:20.11.1-alpine3.19' } }
		
    parameters {
		gitParameter(branchFilter: 'origin/(.*)',
			defaultValue: 'main',
			name: 'GIT_BRANCH',
			type: 'PT_BRANCH',
			listSize: '10',
			quickFilterEnabled: true,
			sortMode: 'ASCENDING_SMART',
			selectedValue: 'DEFAULT',
			useRepository: 'git@github.com:PKuravskyi/PetTypeScriptCypress.git')
	}

    stages {
		stage('Add triggered by') {
			steps {
				script {
					build_triggered_by = "${currentBuild.getBuildCauses()[0].shortDescription} / ${currentBuild.getBuildCauses()[0].userId}"
					build_triggered_by = build_triggered_by - ('user ')
					user_name = build_triggered_by.split('/')[0]
					currentBuild.description = "${user_name}"
				}
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
