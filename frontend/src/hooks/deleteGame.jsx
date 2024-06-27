   import { request } from "../utils/axios-utils";
   
   // DELETE with Axios
   export const deleteGame = (id) => {
    request({
        url: `/api/v1/games/${id}`,
        method: 'delete',
    })
 };