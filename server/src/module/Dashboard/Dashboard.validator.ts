import {z} from "zod"
import { techStack } from "../../Database/src/generated/prisma/enums.js"

export const createProjectValidator= z.object({
    projectName: z.string().min(3).max(20),
    techStack: z.enum(Object.values(techStack) as unknown as [techStack, ...techStack[]])
})

// We can infer the zod types and used here 