import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { connectToDb } from './db.js';

const secretKey = "You can't hack bartersHub"

//login function
export async function login(req, res) {
    try {
  
      const db = await connectToDb();
  
      const { email, password } = req.body;
  
      if (!email || !password) {
        return res.json({ error: "Email and password are required." });
      }
  
      // Find user by email
      const foundUser = await db.collection('users').findOne({ email });
  
      if (!foundUser) {
        return res.json({ error: "User not found." });
      }
      else{
        // Compare hashed password with provided password
        const passwordMatch = await bcrypt.compare(password, foundUser.password);
    
        if (passwordMatch) {
            console.log(foundUser.firstName)
            const token = jwt.sign({ userId: foundUser._id, firstName : foundUser.firstName }, secretKey, { expiresIn: '1h' });
            req.session.token = token
            return res.redirect('/products')
        } else {
            return res.json({ error: "Incorrect password." });
        }
      }
  
      
    } catch (error) {
      console.error("Error during login:", error);
      return res.json({ error: "Internal server error." });
    }
  }