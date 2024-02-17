pipeline {
    agent any
		
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

    environment {
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

        stage('Checkout repository') {
            steps {
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
