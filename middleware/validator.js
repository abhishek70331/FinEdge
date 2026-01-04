const validateTransaction = (req, res, next) => {
    const {type, category, amount, date} = req.body;

    // typpe validation
    if(!type || (type !== 'income' && type !== 'expense')){
        return res.status(400).json({ 
            success: false,
            message: "type must be income or expense"
         })
    }

    // category validation
    if(!category || typeof category !== 'string'){
        return res.status(400).json({ 
            success: false,
            message: "category must be a non-empty string"
         })
    }

    // amount validation
    if(amount === undefined || typeof amount !== 'number' || amount <= 0){
        return res.status(400).json({ 
            success: false,
            message: "amount must be a positive number"
         })
    }

    // date validation
    if(!date || isNaN(Date.parse(date))){
        return res.status(400).json({ 
            success: false,
            message: "date must be a valid date string"
         })
    }   

    // If all validations pass, proceed to the next middleware/controller
    next();
}

module.exports = {validateTransaction};