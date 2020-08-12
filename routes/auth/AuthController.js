const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require ('../../models/userModel');
const dotenv = require ('dotenv');

dotenv.config();

//Validation
const Joi = require('joi');

// const schema = {
//     name: Joi.string().min(6).required(),
//     email: Joi.string().min(6).required().email(),
//     password: Joi.string().min(6).required()
// }

const schema = Joi.object().keys({
    name : Joi.string().min(6).required(),
    email : Joi.string().min(6).required().trim().email(),
    password: Joi.string().min(6).required()
})

router.post('/register', (req,res) => {

    const hashedPassword = bcrypt.hashSync(req.body.password,8);

    const user = new User ({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        });    


    Joi.assert(user, schema,(err,result)=>{
        if (err){
            res.send(err)
        }else{
            console.log(result)

        }
    })
       
    
        //     const createdUser = user.save();
        //     res.send(createdUser);
                
        // }catch(err){
        //     res.status(400).send(err);
        // }



        
    });
    // to validate before creating a user
    // const validation = Joi.validate(req.body,schema);
    // res.send(validation);

    // const hashedPassword = bcrypt.hashSync(req.body.password,8);
    // const user = new User ({
    //     name: req.body.name,
    //     email: req.body.email,
    //     password: hashedPassword
    // });

    // try{
    //     const createdUser = user.save();
    //     res.send(createdUser);
        
    // }catch(err){
    //     res.status(400).send(err);
    // }

    // // user.save()
    // //     .then(data => {
    // //         res.json(data);
    // //     })
    // //     .catch (err => {
    // //         res.json({message:err})
    // //     });

    // // console.log(process.env.SECRET);
        

    // // const token = jwt.sign({ id: user._id}, process.env.SECRET,{
    // //     expiresIn:86400
    // // });

    // res.status(200).send({auth : true , token: token});


module.exports = router;