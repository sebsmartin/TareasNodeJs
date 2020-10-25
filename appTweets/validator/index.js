exports.userSignupValidator = (req, res, next) => { 

    req.check("name", "Name is requiered").notEmpty(); 
    req.check("surnames", "surnames is requiered").notEmpty();  
    req.check("email", "Email must be between 3 to 32 characters")
    .matches(/.+\@.+\..+/)
    .withMessage("Email must contain @")
    .isLength({
        min: 4,
        max: 32
    });
     req.check("Password", "Password is requered").notEmpty();
    req.check("message", "message is requiered").notEmpty(); 
    const errors = req.ValidationErrors();
    if (errors) {
        const firstError = errors.map(errors => errors.msg)[0];
        return res.status(400).json({ error : firstError})
    }
    next();


}