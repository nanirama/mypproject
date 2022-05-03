pipeline {
    agent {
        label "jenkins-corp"
    }
    environment {
            IAM_ROLE_SHOWCASE="$env.LEGACY_IAM_ROLE_S3"
            S3_PRODUCTION_BUCKET_NAME="swapcard-showcase-production"
            S3_DEVELOPMENT_BUCKET_NAME="swapcard-showcase-develop"
            S3_DEVELOPMENT_PUBLIC_BUCKET_NAME="swapcard-showcase-develop-public-2"
    }
    stages {
        stage('Prepare') {
            steps {
                checkout scm: [
                        $class: 'GitSCM',
                        branches: scm.branches,
                        doGenerateSubmoduleConfigurations: false,
                        extensions: scm.extensions + [[$class: 'SubmoduleOption', parentCredentials: true]],
                        submoduleCfg: [],
                        userRemoteConfigs: scm.userRemoteConfigs
                ]
            }
        }
        stage ("Build image") {
            steps {
                withCredentials([usernamePassword(credentialsId: 'jx-pipeline-git-github-github', usernameVariable: 'GITHUB_USERNAME', passwordVariable: 'GITHUB_TOKEN')]) {
                    container('buildkit') {
                        sh """
                        BUILDCTL_CONNECT_RETRIES_MAX=100 buildctl-daemonless.sh \
                        --debug build \
                        --progress=plain \
                        --frontend=dockerfile.v0 \
                        --opt build-arg:NPM_TOKEN=${GITHUB_TOKEN} \
                        --local context=. \
                        --local dockerfile=. \
                        --output type=tar,dest=showcase.tar
                        """
                    }
                }
            }
        }
        stage('Deploy in dev') {
            when {
                expression { BRANCH_NAME ==~ /develop/ }
            }
            steps {
                container('buildtools') {
                    sh """
                        . sts-assumerole ${IAM_ROLE_SHOWCASE} AWSCLI-showcase-s3-Session > /dev/null
                        tar -xvf showcase.tar usr/src/app
                        aws s3 sync ./usr/src/app/public s3://${S3_DEVELOPMENT_BUCKET_NAME} --delete --cache-control public,max-age=31536000,immutable --acl public-read --exclude '*.html' --exclude '*/page-data.json' --region 'eu-west-1'
                        aws s3 sync ./usr/src/app/public s3://${S3_DEVELOPMENT_BUCKET_NAME} --delete --cache-control max-age=0,no-cache,no-store,must-revalidate --acl public-read --content-type text/html --exclude '*.json' --include '*.html' --region 'eu-west-1'
                        aws s3 sync ./usr/src/app/public s3://${S3_DEVELOPMENT_BUCKET_NAME} --delete --cache-control max-age=0,no-cache,no-store,must-revalidate --acl public-read --content-type application/json --include '*.json' --region 'eu-west-1'
                    """
                }
            }
        }
        stage('Deploy in production') {
            when {
                expression { BRANCH_NAME ==~ /master/ }
            }
            steps {
                container('buildtools') {
                    sh """
                        . sts-assumerole ${IAM_ROLE_SHOWCASE} AWSCLI-showcase-s3-Session > /dev/null
                        tar -xvf showcase.tar usr/src/app
                        aws s3 sync ./usr/src/app/public s3://${S3_PRODUCTION_BUCKET_NAME} --delete --cache-control public,max-age=31536000,immutable --acl public-read --exclude '*.html' --exclude '*/page-data.json' --region 'eu-west-1'
                        aws s3 sync ./usr/src/app/public s3://${S3_PRODUCTION_BUCKET_NAME} --delete --cache-control max-age=0,no-cache,no-store,must-revalidate --acl public-read --content-type text/html --exclude '*.json' --include '*.html' --region 'eu-west-1'
                        aws s3 sync ./usr/src/app/public s3://${S3_PRODUCTION_BUCKET_NAME} --delete --cache-control max-age=0,no-cache,no-store,must-revalidate --acl public-read --content-type application/json --include '*.json' --region 'eu-west-1'
                    """
                }
            }
        }
    }
}
