const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const mysql = require("mysql");
const app = express();
const port = 3001;
const path = require("path");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = mysql.createConnection({
  host: "127.0.0.1",
  port: 3308,
  user: "root",
  password: "MYSQL@2002",
  database: "form_db",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Database connected");
});

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.get("/submit_email", (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 8;
  const offset = (page - 1) * limit;

  db.query(
    `SELECT * FROM form_submit ORDER BY id DESC LIMIT ? OFFSET ?`,
    [limit, offset],
    (err, results) => {
      if (err) return res.status(500).json({ message: "Database error" });

      res.json({ emails: results });
    }
  );
});

app.delete("/delete_email/:id", (req, res) => {
  const id = req.params.id;

  db.query(`DELETE FROM form_submit WHERE id = ?`, [id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Database error" });
    }

    res.sendStatus(204);
  });
});

app.post("/send_email", (req, res) => {
  const { email, name, phone, message } = req.body;

  // Log the received data for debugging
  console.log("Received data:", { email, name, phone, message });

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  db.query(
    "INSERT INTO form_submit (name, email, phone, message) VALUES (?, ?, ?, ?)",
    [name, email, phone, message],
    (err, result) => {
      if (err) {
        console.error("Error storing form submission:", err);
        return res
          .status(500)
          .json({ message: "Failed to store form submission" });
      }

      if (result.affectedRows == 1) {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: "vishal2510sharma@gmail.com",
            pass: "adumrozthalgjdwt",
          },
        });

        const mailOptions = {
          from: "vishal2510sharma@gmail.com",
          to: "vishal2510sharma@gmail.com",
          replyTo: email,
          subject: `New Contact Form Submission from ${name}`,
          text:
            `You have received a new message from your website contact form.\n\n` +
            `Here are the details:\n\n` +
            `Name: ${name}\n` +
            `Email: ${email}\n` +
            `Phone: ${phone}\n` +
            `Message:\n${message}`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log(error);
            return res.status(500).json({ message: "Error sending email" });
          } else {
            console.log("Email sent: " + info.response);
            return res.status(200).json({
              message: "Form submission stored and email sent successfully",
            });
          }
        });
      } else {
        return res
          .status(500)
          .json({ message: "Failed to store form submission" });
      }
    }
  );
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  db.query(
    "SELECT * FROM user WHERE email = ?",
    [email],
    async (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error" });
      }

      if (results.length === 0) {
        return res.status(401).json({ message: "Incorrect email or password" });
      }

      const user = results[0];

      const isMatch = password === user.password;

      if (!isMatch) {
        return res.status(401).json({ message: "Incorrect email or password" });
      }

      res.status(200).json({ message: "Login successful" });
    }
  );
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
