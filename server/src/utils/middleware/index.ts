import jwt from "jsonwebtoken";
import type { Request, Response, NextFunction } from "express";

// The login route signs { userId, email, name } — see Auth.controller.ts.
export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = req.cookies?.token;

  if (!token) {
    return res.status(401).json({
      message: "User is not Authenticated",
      success: false,
    });
  }

  try {
    // jwt.verify throws on an invalid or expired token, so it must be guarded.
    const payload = jwt.verify(token, process.env.JWT_SECRET_KEY as string);
    (req as any).user = payload;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid or expired token",
      success: false,
    });
  }
};
