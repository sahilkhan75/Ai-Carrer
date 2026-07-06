import axios from "axios";
import { oauth2client } from "../config/googleconfig.js";
import TryCatch from "../middleware/trycatch.js";
import User from "../models/user.js";
import jwt from "jsonwebtoken";
export const loginUser = TryCatch(async (req, res) => {
    const { code } = req.body;
    if (!code) {
        return res.status(400).json({
            message: "Authorization code is required"
        });
    }
    const googleRes = await oauth2client.getToken(code);
    oauth2client.setCredentials(googleRes.tokens);
    const userRes = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${googleRes.tokens.access_token}`);
    const { name, email, picture } = userRes.data;
    let user = await User.findOne({ email });
    if (!user) {
        user = await User.create({
            name,
            email,
            image: picture,
        });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SEC, { expiresIn: "15d" });
    res.json({
        message: "user logged in successfully",
        token,
        user,
    });
});
