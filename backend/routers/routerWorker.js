const express = require("express")
const conn = require("../database/index.js")
const workerRouter = express.Router()
require('dotenv').config();
const bcrypt = require("bcrypt");
const { authenticateToken } = require("../middlewares/jwt.js");
const jwt = require('jsonwebtoken');
const multer = require('multer')
const fs = require('fs');


workerRouter.post('/addworkerman',(req,res)=>{
    const{workerFirstName}= req.body
    const{workerLastName}= req.body
    const{workerAdress}= req.body
    const{workerEmail}= req.body
    const{workerCategory}= req.body
    const{workerDateOfBirth}= req.body
    const{workerPhoneNumber}= req.body
    const{workerJob}= req.body
    const{workerPassword}= req.body
    const sql = `INSERT INTO workers (workerFirstName, workerLastName, workerAdress, workerEmail, workerCategory, workerDateOfBirth, workerPhoneNumber, workerJob,workerPassword ) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);`
    conn.query(sql ,[workerFirstName, workerLastName, workerAdress, workerEmail, workerCategory, workerDateOfBirth, workerPhoneNumber, workerJob,workerPassword],(err,results)=>{
          if (err){

            console.log(err)
            res.status(500).json(err)
        }
        res.status(200).json(results)
    })
})

workerRouter.post('/addworker', async (req, res) => {
    const {
        workerFirstName,
        workerLastName,
        workerAdress,
        workerEmail,
        workerCategory,
        workerDateOfBirth,
        workerPhoneNumber,
        workerJob,
        workerPassword,
        imageUrl
    } = req.body;
  
    const hashedPassword = async () => {
        try {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(workerPassword, salt);
            return hashedPassword;
        } catch (error) {
            console.log(error);
        }
    };
  
    const hPassword = await hashedPassword();
  
    const sql = `INSERT INTO workers (workerFirstName, workerLastName, workerAdress, workerEmail, workerCategory, workerDateOfBirth, workerPhoneNumber, workerJob,workerPassword,imageUrl) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?,?);`
    conn.query(sql, [workerFirstName, workerLastName, workerAdress, workerEmail, workerCategory, workerDateOfBirth, workerPhoneNumber, workerJob, hPassword,imageUrl], (err, results) => {
        if (err) {
            console.log(err)
            res.status(500).json(err)
        }
        res.status(200).json(results)
    })
  })

workerRouter.put('/completeAprofile/:id', (req, res) => {
    const id = req.params.id;
    const { workerProfessionalSummary, workerYearsOfExperience } = req.body;
    const sql = `UPDATE workers
                 SET workerProfessionalSummary = ?, workerYearsOfExperience = ? ,workerFirstName = ? , workerLastName = ? , workerAdress= ? , workerEmail=?, workerCategory= ? , workerDateOfBirth= ? , workerPhoneNumber = ?,workerJob=?, workerPassword = ? , workerNumberOfJobs=?
                 WHERE workersId = ?, `;
    conn.query(sql, [workerNumberOfJobs, workerPassword, workerJob, workerPhoneNumber, workerDateOfBirth, workerCategory, workerEmail, workerAdress, workerLastName, workerFirstName, workerProfessionalSummary, workerYearsOfExperience, id], (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).json(err);
        }
        res.status(200).json(results);
    });
});
workerRouter.put('/update/:id', (req, res) => {
    const id = req.params.id;
    const { workerProfessionalSummary, workerYearsOfExperience,workerFirstName, workerLastName, workerAdress, workerEmail, workerCategory, workerDateOfBirth, workerPhoneNumber, workerJob, workerPassword, workerNumberOfJobs } = req.body;
    const sql = `UPDATE workers
                 SET workerFirstName = ? , workerLastName = ? , workerAdress= ? , workerEmail=?, workerCategory= ? , workerDateOfBirth= ? , workerPhoneNumber = ?,workerJob=?, workerPassword = ? , workerNumberOfJobs=?
                 WHERE workersId = ?`;
    conn.query(sql, [workerFirstName, workerLastName, workerAdress, workerEmail, workerCategory, workerDateOfBirth, workerPhoneNumber, workerJob, workerPassword, workerNumberOfJobs, id], (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).json(err);
      }
      res.status(200).json(results);
    });
  });
  

workerRouter.delete('/deleteWorker/:id', (req, res) => {
    const id = req.params.id;

    const sql = `DELETE FROM workers WHERE workersId = ?`;
    conn.query(sql, [id], (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).json(err);
        }
        res.status(200).json(results);
    });
});


workerRouter.get('/getworkers', (req, res) => {
    const sql = `SELECT * FROM workers;`
    conn.query(sql, (err, results) => {
        if (err) {
            console.log(err)
            res.status(500).json(err)
        }
        res.status(200).json(results)
    })
})


workerRouter.get('/getWorkersInfo', (req, res) => {
    const sql = `SELECT workerFirstName, workerJob, workerHourlyPrice,workerRating  FROM workers;`;
    conn.query(sql, (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).json(err);
        return;
      }
      res.status(200).json(results);
    });
  });

  workerRouter.get('/getWorkers/:workerCategory', (req, res) => {
    const workerCategory = req.params.workerCategory
    const sql = `SELECT workerFirstName, workerJob, workerHourlyPrice,workerRating FROM workers WHERE workerCategory= ?;`
    conn.query(sql, [workerCategory], (err, results) => {
        if (err) {
            console.log(err)
            res.status(500).json(err)
        }
        res.status(200).json(results)
    })
})
  

workerRouter.get('/getWorker/:id', (req, res) => {
    const id = req.params.id
    const sql = `SELECT * FROM workers WHERE workersId = ?;`
    conn.query(sql, [id], (err, results) => {
        if (err) {
            console.log(err)
            res.status(500).json(err)
        }
        res.status(200).json(results)
    })
})

workerRouter.put('/editprofile/:id', (req, res) => {
    const id = req.params.id
    const { workerPhoneNumber, workerAdress, workerEmail, workerJob, workerCategory } = req.body
    const sql = `UPDATE workers
    SET workerPhoneNumber = ?, workerAdress = ?, workerEmail = ?, workerJob = ?, workerCategory = ? WHERE workersId = ?`;
    conn.query(sql, [workerPhoneNumber, workerAdress, workerEmail, workerJob, workerCategory, id], (err, results) => {
        if (err) {
            console.log(err)
            res.status(500).json(err)
        }
        res.status(200).json(results)
    })
})

workerRouter.put('/editWorkInfo/:id', (req, res) => {
    const id = req.params.id
    const { workerYearsOfExperience, workerProfessionalSummary } = req.body
    const sql = `UPDATE workers
    SET workerYearsOfExperience = ?, workerProfessionalSummary = ? WHERE workersId = ?;`
    conn.query(sql, [workerYearsOfExperience, workerProfessionalSummary, id], (err, results) => {
        if (err) {
            console.log(err)
            res.status(500).json(err)
        }
        res.status(200).json(results)
    })
})

workerRouter.post('/login', authenticateToken, async (req, res) => {
    const { workerEmail, workerPassword } = req.body;
    const sql = `SELECT * FROM workers WHERE workerEmail = ?`;
    conn.query(sql, [workerEmail], async (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).json({ error: 'Internal server error' });
        } else if (results.length === 0) {
            res.status(401).json({ error: 'Invalid email' });
        } else {
            try {
                const worker = results[0];
                const match = await bcrypt.compare(workerPassword, worker.workerPassword);
                if (!match) {
                    res.status(401).json({ error: 'Invalid password' });
                } else {
                    const token = jwt.sign(worker, process.env.SECRET, { expiresIn: '24h' });
                    res.status(200).json({ token: token ,data: worker});
                }
            } catch (err) {
                console.log(err);
                res.status(500).json({ error: 'Internal server error' });
            }
        }
    });
  });
  workerRouter.post('/uploadFile', (req, res, next) => {
    const storage = multer.diskStorage({
      destination: function (req, file, cb) {
        const uplDir="uploads/"
        if(!fs.existsSync(uplDir)){
            fs.mkdirSync(uplDir)
        }
        cb(null, uplDir);
      },
      filename: function (req, file, cb) {
        cb(null, file.originalname);
      }
    });
  
    const upload = multer({ storage }).single('profile-image');
    upload(req, res, function (err) {
      if (err) {
        return res.send(err);
      }
      console.log('File uploaded to server');
      console.log(req.file);
  
      // SEND FILE TO CLOUDINARY
      const cloudinary = require('cloudinary').v2;
      cloudinary.config({
        cloud_name: 'dilwfvmbr',
        api_key: '443273299735126',
        api_secret: 'gv4yova2aVkz0IyYgwRcqAjV7EM',
        secure: true
      });
  
      const path = require('path');
      const filePath = path.resolve(req.file.path);
      const uniqueFilename = new Date().toISOString(); 
  
      cloudinary.uploader.upload(filePath, {
        public_id: `Workers/${uniqueFilename}`,
        tags: 'Workers'
      }, function (err, result) {
        if (err) {
          console.log('Error uploading file to Cloudinary');
          return res.send(err);
        }
  
        
        fs.unlinkSync(filePath);
  
        res.json(result.url);
      }).then();
    })
    
  });


module.exports = workerRouter