import User from "../Models/User.js";
import JWT from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

// firstName, lastName, email, password, province, city, areaCode

export const register = {
    validator: async (req, res, next) => {
        const canadianProvinces = [
            'Alberta',
            'British Columbia',
            'Manitoba',
            'New Brunswick',
            'Newfoundland and Labrador',
            'Nova Scotia',
            'Ontario',
            'Prince Edward Island',
            'Quebec',
            'Saskatchewan',
            'Northwest Territories',
            'Nunavut',
            'Yukon'
          ];
          const { firstName, lastName, email, password, province, city, areaCode } = req.body;

          if(!isNaN(firstName)){
            return res.json({message: "Enter valid first name"})
          }    
          if(!isNaN(lastName)){
            return res.json({message: "Enter valid last name"})
          }    
          if(!canadianProvinces.includes(province)){
            return res.json({message: "Enter valid province"})
          }    
          if(!isNaN(city)){
            return res.json({message: "Enter valid city"})
          }
          if(!isValidEmail(email)){
            return res.json({message : "Invalid email format"})
          }
      
          if(!isValidPassword(password)){
            return res.json({message : "Password should be at least 8 characters long and contain a combination of letters, numbers, and special characters"})
          }
        next();
    },
    controller: async (req, res) => {
        try {
            const newUser = await User.create({
                username: req.body.username,
                email: req.body.email,
                mobile: req.body.mobile,
                location: req.body.location,
                // password: CryptoJS.AES.encrypt(req.body.password, process.env.AES_SEC_KEY).toString()
                password: req.body.password
            })
            const { password, ...other } = newUser._doc;
            return res.status(200).send({
                "message": "Account Creation Successful",
                ...other
            });
        }
        catch (e) {
            console.log(e);
            if (e.keyValue?.username) {
                return res.status(409).send("Username Already Exists");
            }
            else if (e.keyValue?.email) {
                return res.status(409).send("Email Address Already Exists");
            }
            else if (e.keyValue?.mobile) {
                return res.status(409).send("Mobile Number Already Exists");
            }
            else {
                return res.status(500).send("Registration Failed");
            }
        }
    }
}

export const login = {
    validator: async (req, res, next) => {
        if (!req.body.username || !req.body.password) {
            return res.status(400).send("Please Fill all the Fields");
        }
        next();
    },
    controller: async (req, res) => {
        try {
            const findUser = await User.findOne({
                username: req.body.username
            });


            if (!findUser) {
                return res.status(401).send("Invalid Credintials find ");
            }

            if (findUser.password !== req.body.password) {
                return res.status(401).send("Invalid Credintials pass");
            }

            const accessToken = JWT.sign(
                {
                    id: findUser._id,
                },
                process.env.JWT_SEC_KEY,
                { expiresIn: "3d" }
            );

            const { password, ...others } = findUser._doc;

            return res.status(201).json({
                "success": true,
                ...others,
                accessToken
            });

        }
        catch (e) {
            return res.status(500).send("Login Failed Internal Server Error");
        }
    }
}
