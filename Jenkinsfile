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
		script {
                    // Use apt commands within script block
                    sh 'apt update'
                    sh 'apt install -y package-name'
                }
            }
        }
    }
}

