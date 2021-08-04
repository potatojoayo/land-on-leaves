export default function (
  { $axios },
  inject
) {
  const axios = $axios.create({
    baseURL: process.env.BASE_URL,
  })
  function login(email, password) {
    axios
      .post('/rest-auth/login/', {
        email,
        password,
      })
      .then((res) => {
        const token = res.data.key
        console.log(res)
        axios
          .get(
            'https://dev.com:8000/u/customer/2/',
            {
              headers: {
                Authorization:
                  'Token ' + token,
              },
            }
          )
          .then((res) => {
            console.log(res)
          })
      })
  }

  const api = {
    login,
  }

  inject('api', api)
}
