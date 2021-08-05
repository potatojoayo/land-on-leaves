export default function (
  { $axios },
  inject
) {
  const axios = $axios.create({
    baseURL: process.env.BASE_URL,
  })
  const login = (email, password) => {
    axios
      .post('rest_auth/login/', {
        email,
        password,
      })
      .then((res) => {
        const token = res.data.key
        axios
          .get('rest_auth/user/', {
            headers: {
              Authorization:
                'Token ' + token,
            },
          })
          .then((res) =>
            console.log(res)
          )
      })
  }
  const api = {
    login,
  }
  inject('api', api)
}
