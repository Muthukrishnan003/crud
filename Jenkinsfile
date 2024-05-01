pipeline{
    agent any
    stages{
        stage('clone'){
            steps{
                sh 'git clone https://github.com/Muthukrishnan003/crud.git -b main '
            }
        }
	      stage('npm install'){
            steps{
                sh 'npm install'
            }
        }
    }
}

