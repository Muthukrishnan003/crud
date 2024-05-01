pipeline{
    agent any
    stages{
        stage('clone'){
            steps{
		sh 'rm -r *'
		sh 'git clone https://github.com/Muthukrishnan003/crud.git -b main '
            }
        }
	      stage('npm install'){
            steps{
		sh 'apt update'
                sh 'apt install npm'
            }
        }
    }
}

