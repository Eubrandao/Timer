pipeline {
    agent any
    environment {
        AWS_ACCOUNT_ID="AKIA2WM2VTQS6XBRYO6S"
	AWS_DEFAULT_REGION="sa-east-1"
	CLUSTER_NAME="default"
	SERVICE_NAME="timer"
	TASK_DEFINITION_NAME="first-pipe"
	DESIRED_COUNT="1"
	IMAGE_REPO_NAME="demo"
	IMAGE_TAG="${env.BUILD_ID}"
	REPOSITORY_URI = “${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_DEFAULT_REGION}.amazonaws.com/${IMAGE_REPO_NAME}”
	registryCredential = "demo-admin-user"
    }
   
    stages {

    // Tests
    stage('Unit Tests') {
      steps{
        script {
          sh 'npm install'
	  sh 'npm test -- --watchAll=false'
        }
      }
    }
        
    // Building Docker images
    stage('Building image') {
      steps{
        script {
          dockerImage = docker.build "${IMAGE_REPO_NAME}:${IMAGE_TAG}"
        }
      }
    }
   
    // Uploading Docker images into AWS ECR
    stage('Pushing to ECR') {
     steps{  
         script {
			docker.withRegistry("https://" + REPOSITORY_URI, "ecr:${AWS_DEFAULT_REGION}:" + registryCredential) {
                    	dockerImage.push()
                	}
         }
        }
      }
      
    stage('Deploy') {
     steps{
            withAWS(credentials: registryCredential, region: "${AWS_DEFAULT_REGION}") {
                script {
			sh './script.sh'
                }
            } 
        }
      }      
      
    }
}
