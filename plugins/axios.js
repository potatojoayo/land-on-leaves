import axios from 'axios'
const login = (email, password) => {
  axios
    .post(
      process.env.BASE_URL +
        'rest_auth/login/',
      {
        email,
        password,
      }
    )
    .then((res) => {
      const token = res.data.key
      axios
        .get(
          process.env.BASE_URL +
            'rest_auth/user/',
          {
            headers: {
              Authorization:
                'Token ' + token,
            },
          }
        )
        .then((res) => console.log(res))
    })
}

export default function (
  { $axios },
  inject
) {
  inject('api', (email, password) =>
    login(email, password)
  )
}
