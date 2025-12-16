class ApiError extends Error {
    constructor(
        statusCode,
        message= "Something went wrong",
        errors = [],
        stack = ""
    ){
        // Override the parent Error class
        super(message)
        this.statusCode = statusCode
        this.data = null // Standard, usually null on error
        this.message = message
        this.success = false // Obviously false
        this.errors = errors

        if (stack) {
            this.stack = stack
        } else {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export  {ApiError}