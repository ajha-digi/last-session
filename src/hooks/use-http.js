import { useState } from "react";
import instance from "../services/https.services";

export const useHttps = () => {
  const [response, setResponse] = useState();

  const fetchRequest = async (method, endPoint) => {
    let fetchResp;
    try {
      switch (method) {
        case "GET":
          fetchResp = await instance.get(endPoint);
          break;
        case "POST":
          fetchResp = await instance.post(endPoint);
          break;
        case "PUT":
          fetchResp = await instance.put(endPoint);
          break;
        case "DELETE":
          fetchResp = await instance.delete(endPoint);
          break;
        default:
          throw new Error("Unsupported method");
      }
      setResponse(fetchResp);
    } catch (err) {
      console.log(err);
      
    }
    return fetchResp;
  };

  // Wrapper functions for specific HTTP methods
  const getRequest = (endPoint, headers) =>  fetchRequest("GET", endPoint, null, headers);
  const postRequest = (endPoint, data, headers) => fetchRequest("POST", endPoint, data, headers);
  const putRequest = (endPoint, data, headers) => fetchRequest("PUT", endPoint, data, headers);
  const deleteRequest = (endPoint, headers) => fetchRequest("DELETE", endPoint, null, headers);

  return {
    response,
    getRequest,
    postRequest,
    putRequest,
    deleteRequest,
  };
};

export default useHttps;
