// class AppError extends Error {
//     constructor(message, statusCode) {
//       super(message); // Calling the parent constructor
  
//       this.statusCode = statusCode;
//       this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
//       this.isOperational = true;
//       Error.captureStackTrace(this, this.constructor);
//     }
//   }
  
  const AppError = {
    message: message,
    statusCode: statusCode,
    status: `${statusCode}` .startsWith('4') ? 'fail': 'error',
    isOperational: true,
  }
  module.exports = AppError;