pipeline {
    agent any
    
    stages {
        stage('Checkout') {
      steps {
        checkout scm
      }
        }
        stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
        }
        stage('Start Shopping Store App') {
      steps {
        sh '''
                    chmod +x './ShoppingStoreApp/shopping-store-linux-amd64'
                    ./ShoppingStoreApp/shopping-store-linux-amd64 &
                '''
      }
        }
        stage('Run tests') {
      matrix {
        axes {
          axis {
            name 'CONTAINER'
            values '1', '2', '3', '4', '5'
          }
        }
        stages {
          stage("Run tests in container ${CONTAINER}") {
            steps {
              sh 'npm run cy:run -- --browser chrome --spec cypress/tests/**/*.spec.ts'
            }
          }
        }
      }
        }
        stage('Upload Allure results') {
      steps {
        archiveArtifacts artifacts: 'allure-results/**', allowEmptyArchive: true
      }
        }
    }
}
