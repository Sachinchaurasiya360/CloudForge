import { integer, pgEnum, pgTable, serial, text,boolean , timestamp} from "drizzle-orm/pg-core"

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  password:text("password").notNull(),
  isActive: boolean("is_active").default(true),
  createdAt:timestamp("time_stampt",{withTimezone:true})
})

export const projectDeployedStatus= pgEnum("project status",[
    "PENDING",
    "QUEUE",
    "BUILDING",
    "SUCCESSFUL"
])
export const deployedProject=pgTable("deployed_project",{
    userid:integer("user_id").references(()=> users.id),
    githubUrl:text("github_url").notNull(),
    deploymentId:text("deployment_id"),
    status: projectDeployedStatus("status").default("PENDING")
})