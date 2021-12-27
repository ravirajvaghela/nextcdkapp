import * as cdk from "@aws-cdk/core";
import * as codecommit from "@aws-cdk/aws-codecommit";
import * as lambda from "@aws-cdk/aws-lambda";
//import * as apigw from "@aws-cdk/aws-apigateway";
import * as amplify from "@aws-cdk/aws-amplify";
import * as codebuild from '@aws-cdk/aws-codebuild';

// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CdkInfraStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

     const amplifyApp = new amplify.App(this, "amplifyNextApp", {
      sourceCodeProvider: new amplify.GitHubSourceCodeProvider({
        owner: '[ravirajvaghela]',
        repository: '[ravirajvaghela/cdkrepo]',
        oauthToken: cdk.SecretValue.secretsManager('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')
      }),
    });
    amplifyApp.addBranch("main");
  }
}
