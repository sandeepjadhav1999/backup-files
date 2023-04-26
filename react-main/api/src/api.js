import axios from 'axios'


const searchImage = async (term) =>{
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers:{
            Authorization:'Client-ID 2jtoQ91uKE0xxXF7EtON8dnyDBf5JVn_e3hqJSkZZLw'
        },
        params:{
            query:term
        }
    })
    return response.data.results
}

export default searchImage