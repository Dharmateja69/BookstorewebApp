import bcryptjs from 'bcryptjs';
import user from './../Models/user.model.js';
export const signup = async(req, res) => {

    try {
        const { fullname, email, password } = req.body;
        const User = await user.findOne({ email });
        if (User) {
            res.status(400).json({ message: "User already exist" });
        }
        const hashpassword = await bcryptjs.hash(password,10);
        const createdUser = new user({

            fullname:fullname,
            email:email,
            password:hashpassword,
        });
        await createdUser.save();
        res.status(201).json({ message: "User created successfully",user:
            {
                _id:createdUser._id,
                fullname:createdUser.fullname,
                email:createdUser.email,
            }
         });

    } catch (error) {

        console.log("Error:", +error.message);
        res.status(500).json({ message: "Internal  server error" });

    }
}; 

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const User = await user.findOne({ email });

        if (!User) {
            return res.status(400).json({ message: "Invalid username or password" });
        }

        const isMatch = await bcryptjs.compare(password, User.password);

        if (!isMatch) {
            return res.status(400).json({ message: "Invalid username or password" });
        }

        res.status(200).json({
            message: "Login successful",
            user: {
                _id: User._id,
                fullname: User.fullname,
                email: User.email
            },
        });
    } catch (error) {
        console.log("Error:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};