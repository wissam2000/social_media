import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

/* REGISTER USER */
export const register = async (req, res) => { //request from front end, response to front end
    try {
        const {
            firstName,
            LastName,
            email,
            password,
            picturePath,
            friends,
            location,
            occupation } = req.body; //front end should send object with these arguments

        const salt = await bcrypt.genSalt(); //used to encrypt password

        const passwordHash = await bcrypt.hash(password, salt);

        const newUser = new User({
            firstName,
            LastName,
            email,
            password: passwordHash,
            picturePath,
            friends,
            location,
            occupation,
            viewedProfile: Math.floor(Math.random * 1000), //just random for now, maybe implement?
            impressions: Math.floor(Math.random * 1000) //just random for now

        });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}