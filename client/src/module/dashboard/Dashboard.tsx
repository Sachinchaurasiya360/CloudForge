import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import Navbar from "./Navbar";
import apiClient from "../../utils/axios";

interface Project {
  id: number;
  projectName: string;
  techStack: string;
  AwsProjectFileUrl: string | null;
}

interface ApiErrorResponse {
  message?: string;
  errors?: Record<string, string[]>;
}

export default function Dashboard() {
  const [projectName, setProjectName] = useState("");
  const [techStack, setTechStack] = useState("");
  const [projectData, setProjectData] = useState<Project[]>([]);
  const [userName, setUserName] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [projectsLoading, setProjectsLoading] = useState(true);

  function getErrorMessage(error: unknown) {
    if (axios.isAxiosError<ApiErrorResponse>(error)) {
      const data = error.response?.data;
      const fieldErrors = data?.errors ? Object.values(data.errors).flat() : [];

      if (fieldErrors.length > 0) {
        return fieldErrors[0];
      }

      if (data?.message) {
        return data.message;
      }

      if (!error.response) {
        return "Could not reach the server.";
      }
    }

    return "Something went wrong. Please try again.";
  }

  const fetchProjects = useCallback(async () => {
    const response = await apiClient.get<Project[]>("/dashboard/getallproject");
    setProjectData(response.data);
  }, []);

  async function deleteProject(projectId: number) {
    apiClient.delete("/dashboard/deleteproject", {
      data: {
        projectId,
      },
    });

    await fetchProjects();
  }
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setSuccessMessage("");
    setLoading(true);

    try {
      await apiClient.post("/dashboard/createproject", {
        projectName: projectName.trim(),
        techStack,
      });

      await fetchProjects();
      setProjectName("");
      setTechStack("");
      setSuccessMessage("Project created successfully.");
    } catch (error) {
      setError(getErrorMessage(error));
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    async function fetchDashboardData() {
      try {
        const [meResponse, projectsResponse] = await Promise.all([
          apiClient.get("/auth/me"),
          apiClient.get<Project[]>("/dashboard/getallproject"),
        ]);

        setUserName(meResponse.data.user?.name ?? "");
        setProjectData(projectsResponse.data);
      } catch (error) {
        setError(getErrorMessage(error));
      } finally {
        setProjectsLoading(false);
      }
    }

    fetchDashboardData();
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f8fb] text-[#111827]">
      <Navbar />

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-8">
        <section className="flex flex-col justify-between gap-3 border-b border-[#e5e7eb] pb-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm text-[#6b7280]">Dashboard</p>
            <h1 className="mt-1 text-2xl font-semibold tracking-normal">
              Hello{userName ? `, ${userName}` : ""}
            </h1>
          </div>

          <div className="text-sm text-[#6b7280]">
            {projectData.length} project{projectData.length === 1 ? "" : "s"}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[360px_1fr]">
          <form
            onSubmit={handleSubmit}
            className="h-fit rounded-lg border border-[#e5e7eb] bg-white p-5 shadow-sm"
          >
            <div className="mb-5">
              <h2 className="text-base font-semibold">Create project</h2>
              <p className="mt-1 text-sm text-[#6b7280]">
                Choose a stack and start a new workspace.
              </p>
            </div>

            <div className="space-y-4">
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium">
                  Project name
                </span>
                <input
                  autoComplete="off"
                  required
                  minLength={3}
                  maxLength={20}
                  value={projectName}
                  type="text"
                  onChange={(e) => setProjectName(e.target.value)}
                  className="w-full rounded-lg border border-[#d1d5db] bg-white px-3 py-2 text-sm outline-none transition focus:border-[#6c5ce7] focus:ring-2 focus:ring-[#6c5ce7]/15"
                  placeholder="my-cloud-app"
                />
              </label>

              <label className="block">
                <span className="mb-1.5 block text-sm font-medium">
                  Project technology
                </span>
                <select
                  required
                  value={techStack}
                  onChange={(e) => setTechStack(e.target.value)}
                  className="w-full rounded-lg border border-[#d1d5db] bg-white px-3 py-2 text-sm outline-none transition focus:border-[#6c5ce7] focus:ring-2 focus:ring-[#6c5ce7]/15"
                >
                  <option value="">Select tech</option>
                  <option value="REACT">React</option>
                  <option value="NEXTJS">Next.js</option>
                </select>
              </label>

              {error && (
                <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
                  {error}
                </p>
              )}

              {successMessage && (
                <p className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-700">
                  {successMessage}
                </p>
              )}

              <button
                type="submit"
                className="w-full rounded-lg bg-[#111827] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#1f2937] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Creating..." : "Create project"}
              </button>
            </div>
          </form>

          <section className="rounded-lg border border-[#e5e7eb] bg-white p-5 shadow-sm">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <h2 className="text-base font-semibold">Recent projects</h2>
                <p className="mt-1 text-sm text-[#6b7280]">
                  Your latest created workspaces.
                </p>
              </div>
            </div>

            {projectsLoading ? (
              <div className="rounded-lg border border-dashed border-[#d1d5db] px-4 py-8 text-center text-sm text-[#6b7280]">
                Loading projects...
              </div>
            ) : projectData.length === 0 ? (
              <div className="rounded-lg border border-dashed border-[#d1d5db] px-4 py-8 text-center text-sm text-[#6b7280]">
                No projects created yet.
              </div>
            ) : (
              <div className="grid gap-3">
                {projectData.map((project) => (
                  <article
                    key={project.id}
                    className="rounded-lg border border-[#e5e7eb] px-4 py-3"
                  >
                    <button
                      type="button"
                      className="flex  justify-center items-center bg-black"
                      onClick={() => deleteProject(project.id)}
                    >
                      Delete Project
                    </button>
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="font-medium">{project.projectName}</h3>
                        <p className="mt-1 text-sm text-[#6b7280]">
                          {project.AwsProjectFileUrl ?? "File URL pending"}
                        </p>
                      </div>
                      <span className="w-fit rounded-md bg-[#eef2ff] px-2 py-1 text-xs font-medium text-[#3730a3]">
                        {project.techStack}
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </section>
        </section>
      </main>
    </div>
  );
}
