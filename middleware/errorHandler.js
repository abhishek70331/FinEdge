const errorHandler = (err, req, res, next) => {
    // 🔒 Handle invalid JSON body
    if (err.type === "entity.parse.failed") {
        return res.status(400).json({
        success: false,
        message: "Invalid or empty JSON body"
        });
    }

    console.error("Error:",err);

    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(statusCode).json({ 
        success: false,
        message
     });  
}

module.exports = errorHandler;