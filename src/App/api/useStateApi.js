import { useState, useEffect, useReducer, useCallback } from "react";

import { FETCHING, FETCHED, ERROR } from "./actions";
import dataFetchReducer from "./reducer";
import methods from "./apiAgent";

const BaseURL = "https://osd-sidekick.herokuapp.com/api";

const useStateApi = (initialUrl = BaseURL, initialData = "") => {
  const [{ url, method, data }, setConfig] = useState({
    url: initialUrl,
    method: "get",
    data: initialData
  });

  const [state, dispatch] = useReducer(dataFetchReducer, {
    isFetching: false,
    error: "",
    data: initialData
  });

  useEffect(() => {
    let isRequestCancelled = false;

    (async () => {
      dispatch({ type: FETCHING });

      try {
        console.log(methods[method], "meethof");
        const result = await methods[method]({
          url,
          ...(method === "post" && { data })
        });
        console.log(result, "result after fetching");
        dispatch({
          type: FETCHED,
          payload: result
        });
      } catch (error) {
        console.log(error, "error");
        if (!isRequestCancelled) {
          dispatch({
            type: ERROR,
            payload: error.response
              ? error.response.body || error.response.error
              : "General error"
          });
        }
      }
    })();

    return () => {
      isRequestCancelled = true;
    };
  }, [url, method, data]);

  const doFetch = useCallback((fetchUrl = BaseURL) => {
    setConfig({ method: "get", url: fetchUrl });
  }, []);

  const doSend = useCallback((sendUrl = BaseURL, sendData) => {
    console.log(sendData, "data");
    setConfig({
      method: "post",
      url: sendUrl,
      data: { ...sendData }
    });
  }, []);
  console.log(state, "state");
  return {
    ...state,
    doFetch,
    doSend
  };
};

export default useStateApi;
