import axios from "axios";;

export const getPlacesData = async(bl_lat, bl_lng, tr_lat, tr_lng, type) => {
        try {
                                                                                        // reataurants
        const {data: {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
            {params: {
                bl_latitude: bl_lat ?  bl_lat : '11.847676',
                bl_longitude: bl_lng ? bl_lng : '108.473209',
                tr_longitude: tr_lng ? tr_lng :'109.149359',
                tr_latitude: tr_lat ? tr_lat :'12.838442',
                limit: '30',
                currency: 'USD',
                subcategory: 'hotel,bb,specialty',
                adults: '1'
              },
              headers: {
                'X-RapidAPI-Key': 'eca73d6f4cmsh55fead43da32297p1dc8e0jsn020704d72195',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
              },
            }
            );
            return data;
        } catch (error) {
            return null
        }
}