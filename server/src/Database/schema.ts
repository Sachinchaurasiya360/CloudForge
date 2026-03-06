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
    "SUCESSFUL"
])
export const deployedProject=pgTable("deployed project",{
    userid:integer("user id").references(()=> users.id),
    id:serial("id").primaryKey(),
    githubUrl:text("githhub url").notNull(),
    deploymentId:text("deployment id").notNull(),
    status: projectDeployedStatus("status").default("PENDING")
})