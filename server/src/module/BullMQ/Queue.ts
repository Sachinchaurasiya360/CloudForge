import {Queue} from "bullmq"

export const connection = {
    host:process.env.REDIS_HOST,
    port:6379,
    maxRetriesPerRequest: null,
}

export const BuildQueue= new Queue("BuildQueue",{
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