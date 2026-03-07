import { AuthenticationService } from "./Auth.service.js";
import type { Request, Response } from "express";
import { loginValidator, signupValidator } from "./Auth.validation.js";
import jwt from "jsonwebtoken";

export class AuthenticationController {
  constructor(private authService: AuthenticationService) {}

  async signup(req: Request, res: Response) {
    try {
      const result = signupValidator.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({
          message: "Invalid input data",
          success: false,
          error: result.error.flatten().fieldErrors,
        });
      }

      const isUserExist = await this.authService.isEmailExists(
        result.data.email,
      );
      if (isUserExist) {
        return res.status(400).json({
          message: "Email already exists",
          success: false,
        });
      }
      const hashedPassword = await this.authService.hashPassword(
        result.data.password,
      );

      const createuser = await this.authService.registerUser(
        result.data.name,
        result.data.email,
        hashedPassword,
      );

      return res.status(201).json({
        message: "User registered successfully",
        success: true,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Internal Server Error",
      });
    }
  }

  async Login(req: Request, res: Response) {
    try {
      const result = loginValidator.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({
          message: "Invalid input data",
          success: false,
          error: result.error.flatten().fieldErrors,
        });
      }
      const isUserExist = await this.authService.isEmailExists(
        result.data.email,
      );
      console.log("User data ", isUserExist);
      if (!isUserExist) {
        return res.status(400).json({
          message: "Invalid email ",
          success: false,
        });
      }

      const isPasswordValid = await this.authService.comparePassword(
        result.data.password,
        isUserExist.password,
      );
      console.log("Password valid ", isPasswordValid);
      if (!isPasswordValid) {
        return res.status(400).json({
          message: "Invalid password",
          success: false,
        });
      }
      const token = jwt.sign(
        {
          userId: isUserExist.id,
          email: isUserExist.email,
          name: isUserExist.name,
        },
        process.env.JWT_SECRET_KEY as string,
        { expiresIn: "1h" },
      );
      res.cookie("token", token, {
        httpOnly: true,
        sameSite: "lax",
        expires: new Date(Date.now() + 60 * 60 * 1000),
      });

      return res.status(200).json({
        message: "Login successful",
        success: true,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Internal server error",
      });
    }
  }

  verifyToken = (req: Request, res: Response, next: Function) => {
    const token = req.cookies.token;
    console.log("Token from cookie ", token);
    console.log("something hit")
    if (!token) {
      return res.status(400).json({
        message: "User is not Authenticated",
        success: false,
      });
    }
    const verifyToken = jwt.verify(token, process.env.JWT_SECRET_KEY as string);
    if (!verifyToken) {
      return res.status(400).json({
        message: "Invalid token",
        success: false,
      });
    }
    
    req.body.user = verifyToken;
    next();
  };
}
