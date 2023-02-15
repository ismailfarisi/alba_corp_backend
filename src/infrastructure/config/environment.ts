


export default (() => {
  const environment = {
    port: process.env.PORT || 4000,
    jwtSecretKey: process.env.JWT_SECRET_KEY || 'secret'
  };

  return environment;
})();