// This is a higher-order function (a function that accepts a function)
const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        // Execute the function, if it fails, catch it and pass to next()
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
    }
}

module.exports = asyncHandler;