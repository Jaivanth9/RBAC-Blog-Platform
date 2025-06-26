const express = require('express')
const router = express.Router();
const mongoose = require('mongoose')
const User = mongoose.model("User")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../config/key')
const requireLogin = require('../middleware/requireLogin')
const checkRole = require('../middleware/roleCheck');
router.put("/makeadmin/:id", requireLogin, checkRole("admin"), async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { role: "admin" },
      { new: true }
    );
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json({ message: "User promoted to admin", user });
  } catch (err) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

router.post('/admin-only', requireLogin, checkRole('admin'), (req, res) => {
  res.send("Only admin can access this route");
});

router.post("/signup", (req, res) => {
    console.log("📨 Signup Request received:", req.body); // Add this line
const {name,email,password} = req.body 
    if(!email || !password || !name){
       return res.status(422).json({error:"please add all the fields"}) 
    }
    User.findOne({email:email})
    .then((savedUser)=>{
        if(savedUser){
           return res.status(422).
           json({error:"user already exists with that email"})
        }
        bcrypt.hash(password,12)
        .then(hashedpassword=>{
              const user = new User({
                  email,
                  password:hashedpassword,
                  name
              })
      
              user.save()
              .then(user=>{
                  res.json({message:"saved successfully"})
              })
              .catch(err=>{
                  console.log(err)
              })
        })
       
    })
    .catch(err=>{
      console.log(err)
    })

});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log("📥 Login attempt:", email, password);

  if (!email || !password) {
    console.log("⚠️ Missing email or password");
    return res.status(422).json({ error: "please add email or password" });
  }

  try {
    const savedUser = await User.findOne({ email });

    if (!savedUser) {
      console.log("❌ User not found for email:", email);
      return res.status(422).json({ error: "Invalid Email or password" });
    }

    const doMatch = await bcrypt.compare(password, savedUser.password);
    if (doMatch) {
      console.log("✅ Password matched");

      const token = jwt.sign({ _id: savedUser._id }, JWT_SECRET);
      const { _id, name, email, role } = savedUser;

      return res.json({ token, user: { _id, name, email, role } });
    } else {
      console.log("❌ Incorrect password");
      return res.status(422).json({ error: "Invalid Email or password" });
    }

  } catch (err) {
    console.error("🔥 Error during login:", err);
    return res.status(500).json({ error: "Something went wrong" });
  }
});
module.exports = router;
