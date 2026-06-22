import {S3Client} from "@aws-sdk/client-s3"

export const s3 = new S3Client({
    region: process.env.region!,
    credentials:{
        accessKeyId:process.env.accessKeyId!,
        secretAccessKey:process.env.secretAccessKey!
    }
})