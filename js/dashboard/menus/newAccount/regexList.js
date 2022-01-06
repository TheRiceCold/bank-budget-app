const regexList = [
  {
    regex: /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/,
    message: 'Fullname is not valid'
  },
  {
    regex: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Email is not valid, e.g. me@mydomain.com'
  },
  {
    regex: /^(09|639)\d{9}$/,
    message: 'Mobile no. must be a valid, 09 or 639 format'
  },
  {
    regex: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/,
    message: 'Password must 8 - 20 characters'
  },
  {
    regex: null,
    message: ''
  },
  {
    regex: null,
    message: ''
  }
]

export { regexList } 
