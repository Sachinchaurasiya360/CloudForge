import z from "zod"
export const handleRequestValidator= z.object({
    githuburl:z.string().url()
})

