import express from "express";
import bodyParser from "body-parser";
import mongoose from 'mongoose';

const app = express();
const port = 3000;
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("/login", (req, res) => {
    res.render("login.ejs");
})
app.get("/register", (req, res) => {
    res.render("register.ejs");
})

mongoose.connect("mongodb://127.0.0.1:27017/userDB", {useNewUrlParser: true});

const userSchema = {
  email: String,
  password: String,
};

const User = new mongoose.model("User", userSchema);

app.post("/register", (req, res) => {
    const newUser = new User({
        email: req.body.username,
        password: req.body.password
    });
    newUser.save()
        .then(() => {
            res.render("secrets");
        })
        .catch((err) => {
            console.log(err);
        });
});
app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    User.findOne({email:username})
    .then((foundUser) => {
        if (foundUser) {
            if (foundUser.password === password) {
                res.render("secrets");
            } else {
                res.send("Incorrect password. Please try again.");
            }
        } else {
            res.send("User not found. Please register first.");
        }
    })
    .catch((err) => {
        console.log(err);
        res.send("Error occurred during login. Please try again.");
    });
});

app.post("/logout", (req, res) => {
    res.redirect("/");
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})
