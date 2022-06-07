import config from '../config.json'



export const getTextList = async ()=>{
   return fetch(`${config.url}getAll`, {
        method: 'GET', // or 'PUT'
        // body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(res =>  res.json())
      .catch(error => console.error('Error:', error))
      .then(response =>  response);
}

export const getText = async (data)=>{
    return fetch(`${config.url}iecho?text=${data}`, {
        method: 'GET', // or 'PUT'
        // body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => response);
}