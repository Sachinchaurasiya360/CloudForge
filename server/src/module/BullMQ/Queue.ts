import {Queue} from "bullmq"

const connection = {
    host:process.env.REDIS_HOST,
    port:6379,
    maxRetriesPerRequest: null,
}

export const DeploymentQueue= new Queue("deployment",{
    connection,
    defaultJobOptions:{
        removeOnComplete:true,
        removeOnFail:true,
        attempts:3,
        backoff:{
            type:"exponential",
            delay:1000
        }
    }

})