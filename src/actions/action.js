export const getCity = () => {
    return (dispatch) => {
        const url="http://siashmed.com/app/index.php/Homepopup/get_metro_city";
        fetch(url,{
                    method:'POST',
                    body:`key=mypharmacy_alllist&currentcity=''`,
                headers:{
                        'Accept':'application/json',
                        'Content-Type':'application/x-www-form-urlencoded'
                    }     
            })
            .then(res => res.json())
            .then(res => dispatch({
                        type:'GET_ALL_CITY',
                        payload:res.result
            }))
    }
}
export const selectCity = (cityName) =>({
                type:'SELECT_CITY',
                payload:cityName
            })
  

    