const validation = () => ({
    email: {
      presence: {
        allowEmpty: false,
        message: 'Please enter Email',
      },
      email: {
        message: 'Please enter valid Email',
      },
    },
    password: {
      presence: {
        allowEmpty: false,
        message: 'Please enter Password',
      },
    },
   });
  
  export default validation;
  