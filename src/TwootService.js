import axios from 'axios'

const url = 'http://localhost:3000/api/posts/'

class TwootService {
  //get twoots

  static getTwoots() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url)
        const data = res.data
        resolve(
          data.map((twoot) => ({
            ...twoot,
            createdAt: new Date(twoot.createdAt),
          }))
        )
      } catch (err) {
        reject(err)
      }
    })
  }

  //create twoots
  static insertTwoot(text) {
    return axios.post(url, {
      text,
    })
  }
  // delete twoots

  static deleteTwoot(id) {
    return axios.delete(`${url}${id}`)
  }
}

export default TwootService
