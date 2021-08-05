export default function (
  { $axios },
  inject
) {
  const axios = $axios.create({
    baseURL: process.env.BASE_URL,
  })

  async function login(
    email,
    password
  ) {
    const res = await axios.post(
      '/rest-auth/login/',
      {
        email,
        password,
      }
    )
    const token = res.data.key
    axios.defaults.headers.common.Authorization =
      'Token ' + token
    axios.get('/rest-auth/user/')
  }

  const api = {
    login,
  }

  inject('api', api)
}
