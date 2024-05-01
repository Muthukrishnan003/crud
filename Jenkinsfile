pipeline{
    agent any
    stages{
        stage('clone'){
            steps{
		sh 'git clone https://github.com/Muthukrishnan003/crud.git -b main '
            }
        }
	 stage('json-server'){
             steps{
		echo "json-server"
            }
        }
    }
}

