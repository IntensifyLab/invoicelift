import type { FastifyPluginAsync } from "fastify";

export const healthRoutes: FastifyPluginAsync = async (app) => {
  app.get("/health", async () => ({
    status: "ok",
    service: "api",
    timestamp: new Date().toISOString(),
  }));
};

// Contribution check by lisap at 2024-11-15T02:53:47

// Contribution check by karen-s at 2025-02-19T08:24:49

// Contribution check by alexdev99 at 2025-05-26T13:55:51
