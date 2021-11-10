import axios from "axios"

export async function getData(dispatch) {
    return new Promise(async (resolve, reject) => {
        await axios.get('https://api.fixyar.com/api/network.php')
            .then(async res => {
                console.log(res.data)
                if (res.data) {
                    await dispatch({
                        type: "GETDATA",
                        payload: res.data
                    })
                    resolve(res)
                }
            })
    })
}