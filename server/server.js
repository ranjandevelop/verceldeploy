const express = require("express");
const multer = require("multer");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const sendEmail = require("./mail");
const mongoose = require("mongoose");

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use("/uploads", express.static("uploads"));

// MongoDB connection
mongoose
  .connect(
    "mongodb+srv://ranjankwork:rKAWy4HIN5Mjd2yn@cluster0.l5tvn.mongodb.net/",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log("MongoDB connection error:", err));

// Mongoose Schemas
const UserSchema = new mongoose.Schema({
  username: String,
  phone_number: String,
  password: String,
});

const PostSchema = new mongoose.Schema({
  // user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: String,
  date: String,
  price: String,
  location: String,
  image_url: String,
  caption: String,
  created_at: { type: Date, default: Date.now },
});

const User = mongoose.model("User", UserSchema);
const Post = mongoose.model("Post", PostSchema);

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Append extension
  },
});

const upload = multer({ storage: storage });

// API routes

// 1. User Signup
app.post("/signup", async (req, res) => {
  const { username, phone_number, password } = req.body;

  try {
    const newUser = new User({ username, phone_number, password });
    await newUser.save();
    res
      .status(201)
      .json({ message: "User registered successfully", userId: newUser._id });
  } catch (error) {
    res.status(500).json({ message: "User registration failed", error });
  }
});

// 2. User Login
app.post("/login", async (req, res) => {
  const { phone_number, password } = req.body;

  try {
    const user = await User.findOne({ phone_number, password });
    if (user) {
      res.status(200).json({ message: "Login successful", user });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error during login", error });
  }
});

// 3. Show all posts
app.get("/posts", async (req, res) => {
  try {
    const posts = await Post.find().sort({ created_at: -1 }); // Removed populate for user_id
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching posts", error });
  }
});
// app.get("/posts", async (req, res) => {
//   try {
//     const posts = await Post.find()
//       .populate("user_id", "username")
//       .sort({ created_at: -1 });
//     res.status(200).json(posts);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching posts", error });
//   }
// });

// 4. Upload a post with an image and additional fields
app.post("/upload-post", upload.single("image"), async (req, res) => {
  console.log("Request Body:", req.body); // Log incoming request body
  console.log("Uploaded File:", req.file); // Log uploaded file info

  const { title, date, price, location, caption } = req.body;
  const image_url = req.file ? `/uploads/${req.file.filename}` : null;

  // Validate required fields
  if (!title || !date || !price || !location) {
    return res
      .status(400)
      .json({ message: "Please provide all required fields." });
  }

  try {
    // Create a new post without user_id
    const newPost = new Post({
      title,
      date,
      price,
      location,
      image_url,
      caption,
    });

    // Save the post to the database
    await newPost.save();
    res
      .status(201)
      .json({ message: "Post uploaded successfully", postId: newPost._id });
  } catch (error) {
    console.error("Error uploading post:", error); // Log the full error object
    res
      .status(500)
      .json({ message: "Error uploading post", error: error.message }); // Send error message
  }
});

// app.post("/upload-post", upload.single("image"), async (req, res) => {
//   // const { user_id, title, date, price, location, caption } = req.body;
//   const image_url = req.file ? `/uploads/${req.file.filename}` : null;

//   // Validate required fields
//   // if (!title || !date || !price || !location) {
//   //   return res
//   //     .status(400)
//   //     .json({ message: "Please provide all required fields." });
//   // }

//   // Validate user_id format
//   // if (!mongoose.Types.ObjectId.isValid(user_id)) {
//   //   return res.status(400).json({ message: "Invalid user ID format." });
//   // }

//   try {
//     // Check if the user exists
//     // const user = await User.findById(user_id);
//     // if (!user) {
//     //   return res.status(404).json({ message: "User not found." });
//     // }

//     // Create a new post
//     const newPost = new Post({
//       // user_id: mongoose.Types.ObjectId(user_id), // Convert to ObjectId
//       title,
//       date,
//       price,
//       location,
//       image_url,
//       caption,
//     });

//     // Save the post to the database
//     await newPost.save();
//     res
//       .status(201)
//       .json({ message: "Post uploaded successfully", postId: newPost._id });
//   } catch (error) {
//     console.error("Error uploading post:", error);
//     res.status(500).json({ message: "Error uploading post", error });
//   }
// });

// app.post("/upload-post", upload.single("image"), async (req, res) => {
//   const { user_id, title, date, price, location, caption } = req.body;
//   const image_url = req.file ? `/uploads/${req.file.filename}` : null;

//   // Validate required fields
//   if (!user_id || !title || !date || !price || !location) {
//     return res
//       .status(400)
//       .json({ message: "Please provide all required fields." });
//   }

//   // Validate user_id format
//   if (!mongoose.Types.ObjectId.isValid(user_id)) {
//     return res.status(400).json({ message: "Invalid user ID format." });
//   }

//   try {
//     // Check if the user exists
//     const user = await User.findById(user_id);
//     if (!user) {
//       return res.status(404).json({ message: "User not found." });
//     }

//     // Create a new post
//     const newPost = new Post({
//       user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
//       title: String,
//       date: String,
//       price: String,
//       location: String,
//       image_url: String,
//       caption: String,
//       created_at: { type: Date, default: Date.now },
//     });

//     // Save the post to the database
//     await newPost.save();
//     res
//       .status(201)
//       .json({ message: "Post uploaded successfully", postId: newPost._id });
//   } catch (error) {
//     console.error("Error uploading post:", error);
//     res.status(500).json({ message: "Error uploading post", error });
//   }
// });

// app.post("/upload-post", upload.single("image"), async (req, res) => {
//   const { user_id, title, date, price, location, caption } = req.body;
//   const image_url = req.file ? `/uploads/${req.file.filename}` : null;

//   // Ensure the required fields are provided
//   if (!user_id || !title || !date || !price || !location) {
//     return res
//       .status(400)
//       .json({ message: "Please provide all required fields." });
//   }

//   // Validate ObjectId
//   if (!mongoose.Types.ObjectId.isValid(user_id)) {
//     return res.status(400).json({ message: "Invalid user ID format." });
//   }

//   try {
//     // Check if user exists
//     const user = await User.findById(user_id);
//     if (!user) {
//       return res.status(404).json({ message: "User not found." });
//     }

//     // Create the new post
//     const newPost = new Post({
//       user_id: mongoose.Types.ObjectId(user_id), // Convert to ObjectId
//       title,
//       date,
//       price,
//       location,
//       image_url,
//       caption,
//     });
//     await newPost.save();
//     res
//       .status(201)
//       .json({ message: "Post uploaded successfully", postId: newPost._id });
//   } catch (error) {
//     res.status(500).json({ message: "Error uploading post", error });
//   }
// });

// app.post("/upload-post", upload.single("image"), async (req, res) => {
//   console.log(req.file); // Log the file information
//   const { user_id, title, date, price, location, caption } = req.body;
//   const image_url = req.file ? `/uploads/${req.file.filename}` : null;

//   if (!user_id || !title || !date || !price || !location) {
//     return res
//       .status(400)
//       .json({ message: "Please provide all required fields." });
//   }

//   try {
//     const newPost = new Post({
//       user_id,
//       title,
//       date,
//       price,
//       location,
//       image_url,
//       caption,
//     });
//     await newPost.save();
//     res
//       .status(201)
//       .json({ message: "Post uploaded successfully", postId: newPost._id });
//   } catch (error) {
//     res.status(500).json({ message: "Error uploading post", error });
//   }
// });

// Email sending API
// app.post("/send-email", async (req, res) => {
//   const { to, subject, text } = req.body;

//   try {
//     await sendEmail(to, subject, text);
//     res.status(200).json({ message: "Email sent successfully" });
//   } catch (error) {
//     console.error("Error sending email:", error);
//     res.status(500).json({ message: "Failed to send email", error });
//   }
// });

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// const express = require("express");
// const mysql = require("mysql2");
// const multer = require("multer");
// const bodyParser = require("body-parser");
// const path = require("path");
// const cors = require("cors");
// const sendEmail = require("./mail");

// const app = express();
// const port = 3001;

// app.use(cors());
// app.use(bodyParser.json());
// app.use("/uploads", express.static("uploads"));

// // MySQL database connection
// const db = mysql.createConnection({
//   host: "marconix.co.in",
//   user: "marconix_developer",
//   password: "Websitedeveloper",
//   database: "marconix_mystivibes",
// });

// db.connect((err) => {
//   if (err) throw err;
//   console.log("MySQL connected...");
// });

// // Multer configuration for file uploads
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/");
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + path.extname(file.originalname)); // Append extension
//   },
// });

// const upload = multer({ storage: storage });

// // API routes

// // 1. User Signup
// app.post("/signup", (req, res) => {
//   const { username, phone_number, password } = req.body;
//   const query =
//     "INSERT INTO users (username, phone_number, password) VALUES (?, ?, ?)";
//   db.query(query, [username, phone_number, password], (err, result) => {
//     if (err) {
//       res.status(500).json({ message: "User registration failed", error: err });
//     } else {
//       res.status(201).json({
//         message: "User registered successfully",
//         userId: result.insertId,
//       });
//     }
//   });
// });

// // 2. User Login
// app.post("/login", (req, res) => {
//   const { phone_number, password } = req.body;
//   const query = "SELECT * FROM users WHERE phone_number = ? AND password = ?";
//   db.query(query, [phone_number, password], (err, results) => {
//     if (err) {
//       res.status(500).json({ message: "Error during login", error: err });
//     } else if (results.length > 0) {
//       res.status(200).json({ message: "Login successful", user: results[0] });
//     } else {
//       res.status(401).json({ message: "Invalid credentials" });
//     }
//   });
// });

// // 3. Show all posts
// app.get("/posts", (req, res) => {
//   const query = `
//         SELECT posts.*, users.username
//         FROM posts
//         JOIN users ON posts.user_id = users.id
//         ORDER BY posts.created_at DESC;
//     `;
//   db.query(query, (err, results) => {
//     if (err) {
//       res.status(500).json({ message: "Error fetching posts", error: err });
//     } else {
//       res.status(200).json(results);
//     }
//   });
// });

// // 4. Upload a post with an image and additional fields
// app.post("/upload-post", upload.single("image"), (req, res) => {
//   const { user_id, title, date, price, location, caption } = req.body;
//   const image_url = req.file ? `/uploads/${req.file.filename}` : null;

//   // Ensure the required fields are provided
//   if (!user_id || !title || !date || !price || !location) {
//     return res
//       .status(400)
//       .json({ message: "Please provide all required fields." });
//   }

//   const query = `
//       INSERT INTO posts (user_id, title, date, price, location, image_url, caption)
//       VALUES (?, ?, ?, ?, ?, ?, ?)
//   `;

//   db.query(
//     query,
//     [user_id, title, date, price, location, image_url, caption],
//     (err, result) => {
//       if (err) {
//         return res
//           .status(500)
//           .json({ message: "Error uploading post", error: err });
//       }
//       res.status(201).json({
//         message: "Post uploaded successfully",
//         postId: result.insertId,
//       });
//     }
//   );
// });
// // 4. Upload a post with an image
// // app.post("/upload-post", upload.single("image"), (req, res) => {
// //   const { user_id, caption } = req.body;
// //   const image_url = req.file ? `/uploads/${req.file.filename}` : null;

// //   const query =
// //     "INSERT INTO posts (user_id, image_url, caption) VALUES (?, ?, ?)";
// //   db.query(query, [user_id, image_url, caption], (err, result) => {
// //     if (err) {
// //       res.status(500).json({ message: "Error uploading post", error: err });
// //     } else {
// //       res.status(201).json({
// //         message: "Post uploaded successfully",
// //         postId: result.insertId,
// //       });
// //     }
// //   });
// // });
// // Email sending API
// app.post("/send-email", async (req, res) => {
//   const { to, subject, text } = req.body;

//   try {
//     await sendEmail(to, subject, text);
//     res.status(200).json({ message: "Email sent successfully" });
//   } catch (error) {
//     console.error("Error sending email:", error);
//     res.status(500).json({ message: "Failed to send email", error });
//   }
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });
