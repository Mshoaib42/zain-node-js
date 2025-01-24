const errorHandling = (err, req, res, next) => {
  console.error(err.stack); // Use console.error for better logging
  return res.status(500).json({
    status: 500,
    message: "Something Went Wrong",
    error: err.message,
  });
};

export default errorHandling;
