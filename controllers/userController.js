const fs = require("fs/promises");
const path = require("path");
const crypto = require("crypto");
const User = require("../models/userModel");

const FILE_PATH = path.join(__dirname, "../data/user.json");

const readUsers = async () => {
    const data = await fs.readFile(FILE_PATH, "utf-8");
    return JSON.parse(data);
}

const writeUsers = async (users) => {
    await fs.writeFile(FILE_PATH, JSON.stringify(users, null, 2))
}

/**
 * POST /users
 * Register new user
 */

const registerUser = async (req, res, next) => {
    try {
        const { name, email } = req.body;

        if( !name || !email ){
            return res.status(400).json({ message: "Name and email are required" });
        }

        const users = await readUsers();

        const existingUser = users.find(users => users.email === email)
        if(existingUser){
            return res.status(409).json({ message: "User with this email already exists" });
        }

        const user = new User({
            id: crypto.randomUUID(),
            name,
            email
        });
        users.push(user);
        await writeUsers(users);
        res.status(201).json(user);


    }catch (error) {
        next(error);
    }
}

module.exports = {
    registerUser
}