import axios from "axios";
import {
  FETCH_NJOFTIME_FAILURE,
  FETCH_NJOFTIME_SUCCESS,
  FETCH_NJOFTIME_REQUEST,
  POST_NJOFTIME_FAILURE,
  POST_NJOFTIME_REQUEST,
  POST_NJOFTIME_SUCCESS,
  DELETE_NJOFTIME_FAILURE,
  DELETE_NJOFTIME_REQUEST,
  DELETE_NJOFTIME_SUCCESS,
  UPDATE_NJOFTIME_SUCCESS,
  UPDATE_NJOFTIME_FAILURE,
  UPDATE_NJOFTIME_REQUEST,
  POST_ANTARET_VISITOR_REQUEST,
  POST_ANTARET_VISITOR_SUCCESS,
  POST_ANTARET_VISITOR_FAILURE,
  FETCH_ANTARET_ADMIN_REQUEST,
  FETCH_ANTARET_ADMIN_FAILURE,
  FETCH_ANTARET_ADMIN_SUCCESS,
  DELETE_ANTARET_REQUEST,
  DELETE_ANTARET_SUCCESS,
  DELETE_ANTARET_FAILURE,
  UPDATE_ANTARET_FAILURE,
  UPDATE_ANTARET_SUCCESS,
  UPDATE_ANTARET_REQUEST,
  POST_POSTIME_FAILURE,
  POST_POSTIME_REQUEST,
  POST_POSTIME_SUCCESS,
  FETCH_POSTIME_FAILURE,
  FETCH_POSTIME_SUCCESS,
  FETCH_POSTIME_REQUEST,
  UPDATE_POSTIMET_SUCCESS,
  UPDATE_POSTIMET_REQUEST,
  UPDATE_POSTIMET_FAILURE,
  DELETE_POSTIMET_REQUEST,
  DELETE_POSTIMET_SUCCESS,
  DELETE_POSTIMET_FAILURE,
  FETCH_NJOFTIMET_VISITORS_REQUEST,
  FETCH_NJOFTIMET_VISITORS_SUCCESS,
  FETCH_NJOFTIMET_VISITORS_FAILURE,
  SEND_PJESMARRESIT_REQUEST,
  SEND_PJESMARRESIT_SUCCESS,
  SEND_PJESMARRESIT_FAILURE,
  FETCH_POSTS_VISITOR_FAILURE,
  FETCH_POSTS_VISITOR_REQUEST,
  FETCH_POSTS_VISITOR_SUCCESS,
  FETCH_POSTIM_VISITOR_FAILURE,
  FETCH_POSTIM_VISITOR_REQUEST,
  FETCH_POSTIM_VISITOR_SUCCESS,
} from "./actions";
import {
  fetchDataRequest,
  fetchDataSuccess,
  fetchDataFailure,
} from "./actions";
import { useParams } from "react-router-dom";
const URL = "http://sayit7-env.eba-fcef4qft.eu-west-2.elasticbeanstalk.com";
export const fetchData = (page) => {
  return async (dispatch) => {
    dispatch(fetchDataRequest(FETCH_NJOFTIME_REQUEST));
    try {
      const resoponse = await axios.get(
        `${URL}/api/test/getNjoftimet/${page}`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token1"),
          },
        }
      );
      const data = resoponse.data;
      if (data.size != 0) {
        const data1 = data.map((d) => {
          return { ...d, photo1: d.photo.imageData };
        });
        dispatch(fetchDataSuccess(data1, FETCH_NJOFTIME_SUCCESS));
      } else {
        dispatch(fetchDataSuccess(data, FETCH_NJOFTIME_SUCCESS));
      }
    } catch (error) {
      dispatch(fetchDataFailure(error.message, FETCH_NJOFTIME_FAILURE));

      console.log(error);
    }
  };
};

export const postoNjoftime = (body1, page) => {
  return async (dispatch) => {
    dispatch(fetchDataRequest(POST_NJOFTIME_REQUEST));
    try {
      const response = await axios.post(
        `${URL}/api/test/postonjoftime1/${page}`,
        body1,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token1"),
          },
        }
      );
      const data = response.data.body;
      if (data.size != 0) {
        const data1 = data.map((d) => {
          return { ...d, photo1: d.photo.imageData };
        });
        dispatch(fetchDataSuccess(data1, FETCH_NJOFTIME_SUCCESS));
      } else {
        dispatch(fetchDataSuccess(data, FETCH_NJOFTIME_SUCCESS));
      }
    } catch (error) {
      dispatch(fetchDataFailure(error.message, POST_NJOFTIME_FAILURE));
    }
  };
};
export const deleteNjoftime = (id, page) => {
  return async (dispatch) => {
    const data1 = new FormData();
    data1.append("id", id);

    dispatch(fetchDataRequest(DELETE_NJOFTIME_REQUEST));

    try {
      const response = await axios.delete(
        `${URL}/api/test/deletenjoftime/${page}/${id}`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token1"),
          },
        }
      );

      const data = response.data.body;
      if (data.size != 0) {
        const data1 = data.map((d) => {
          return { ...d, photo1: d.photo.imageData };
        });
        dispatch(fetchDataSuccess(data1, FETCH_NJOFTIME_SUCCESS));
      } else {
        dispatch(fetchDataSuccess(data, FETCH_NJOFTIME_SUCCESS));
      }
    } catch (error) {
      dispatch(fetchDataFailure(error.message, DELETE_NJOFTIME_FAILURE));
    }
  };
};

export const updateNjoftimet = (body, page) => {
  return async (dispatch) => {
    dispatch(fetchDataRequest(UPDATE_NJOFTIME_REQUEST));
    try {
      const response = await axios.put(
        `${URL}/api/test/updateNjoftime/${page}`,
        body,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token1"),
          },
        }
      );

      const data = response.data.body;
      if (data.size != 0) {
        const data1 = data.map((d) => {
          return { ...d, photo1: d.photo.imageData };
        });
        dispatch(fetchDataSuccess(data1, FETCH_NJOFTIME_SUCCESS));
      } else {
        dispatch(fetchDataSuccess(data, FETCH_NJOFTIME_SUCCESS));
      }
    } catch (error) {
      dispatch(fetchDataFailure(error.message, UPDATE_NJOFTIME_FAILURE));
    }
  };
};
export const antaretPost = (bashkohuFormState) => {
  return async (dispatch) => {
    if (
      bashkohuFormState.emri == "" ||
      bashkohuFormState.mosha == "" ||
      bashkohuFormState.arsimi == "" ||
      bashkohuFormState.institucioni == "" ||
      bashkohuFormState.numri == "" ||
      bashkohuFormState.email == "" ||
      bashkohuFormState.vendbanim == "" ||
      bashkohuFormState.doethemi == ""
    ) {
      dispatch(
        fetchDataFailure(
          "Ju lutem plotesoni te gjitha fushat ne menyren e duhur  / Please complete all the fields in proper way",
          POST_ANTARET_VISITOR_FAILURE
        )
      );
    } else {
      try {
        const response = await axios.post(
          `${URL}/api/test/addAntaretFromVisitors`,
          bashkohuFormState,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );

        const data = response.data.body;
        dispatch(fetchDataSuccess(data, POST_ANTARET_VISITOR_SUCCESS));
      } catch (error) {
        dispatch(
          fetchDataFailure(
            "Ju lutem plotesoni te gjitha fushat ne menyren e duhur  / Please complete all the fields in proper way",
            POST_ANTARET_VISITOR_FAILURE
          )
        );
      }
    }
  };
};
export const GetAntaretAdmin = () => {
  return async (dispatch) => {
    dispatch(fetchDataRequest(FETCH_ANTARET_ADMIN_REQUEST));
    try {
      const response = await axios.get(`${URL}/api/test/getAntaretFromAdmin`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token1"),
        },
      });

      const data = response.data.body;
      dispatch(fetchDataSuccess(data, FETCH_ANTARET_ADMIN_SUCCESS));
    } catch (error) {
      dispatch(fetchDataFailure(error.message, POST_ANTARET_VISITOR_FAILURE));
    }
  };
};

export const deleteAntar = (id) => {
  return async (dispatch) => {
    dispatch(fetchDataRequest(DELETE_ANTARET_REQUEST));

    try {
      const response = await axios.delete(
        `${URL}/api/test/deleteArtaret/${id}`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token1"),
          },
        }
      );

      const data = response.data.body;
      dispatch(fetchDataSuccess(data, DELETE_ANTARET_SUCCESS));
    } catch (error) {
      dispatch(fetchDataFailure(error.message, DELETE_ANTARET_FAILURE));
    }
  };
};

export const updaetAntaret = (body) => {
  return async (dispatch) => {
    dispatch(fetchDataRequest(UPDATE_ANTARET_REQUEST));
    try {
      const response = await axios.put(`${URL}/api/test/updateAntar`, body, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token1"),
        },
      });

      const data = response.data.body;
      dispatch(fetchDataSuccess(data, UPDATE_ANTARET_SUCCESS));
    } catch (error) {
      dispatch(fetchDataFailure(error.message, UPDATE_ANTARET_FAILURE));
    }
  };
};

export const postoPostime = (body, page) => {
  return async (dispatch) => {
    dispatch(fetchDataRequest(POST_POSTIME_REQUEST));
    try {
      const response = await axios.post(
        `${URL}/api/test/postoPostime/${page}`,
        body,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token1"),
          },
        }
      );

      const data = response.data.body;

      dispatch(fetchDataSuccess(data, POST_POSTIME_SUCCESS));
    } catch (error) {
      dispatch(fetchDataFailure(error.message, POST_POSTIME_FAILURE));
    }
  };
};

export const getPostimet = (page) => {
  return async (dispatch) => {
    dispatch(fetchDataRequest(FETCH_POSTIME_REQUEST));
    try {
      const response = await axios.get(`${URL}/api/test/getPostimet/${page}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token1"),
        },
      });

      const data = response.data.body;

      dispatch(fetchDataSuccess(data, FETCH_POSTIME_SUCCESS));
    } catch (error) {
      dispatch(fetchDataFailure(error.message, FETCH_POSTIME_FAILURE));
    }
  };
};

export const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      const base64String = reader.result.split(",")[1];
      resolve(base64String);
    };

    reader.onerror = (error) => {
      reject(error);
    };

    reader.readAsDataURL(file);
  });
};
export const UppdePost = (file, page) => {
  return async (dispatch) => {
    dispatch(fetchDataRequest(UPDATE_POSTIMET_REQUEST));
    try {
      const response = await axios.put(
        `${URL}/api/test/updatepost/${page}`,
        file,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token1"),
          },
        }
      );

      const data = response.data.body;

      dispatch(fetchDataSuccess(data, UPDATE_POSTIMET_SUCCESS));
    } catch (error) {
      dispatch(fetchDataFailure(error.message, UPDATE_POSTIMET_FAILURE));
    }
  };
};
export const DELETEPOST = (id1, page) => {
  return async (dispatch) => {
    dispatch(fetchDataRequest(DELETE_POSTIMET_REQUEST));
    try {
      const response = await axios.delete(
        `${URL}/api/test/deletePostimet/${id1}/${page}`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token1"),
          },
        }
      );

      const data = response.data.body;

      dispatch(fetchDataSuccess(data, DELETE_POSTIMET_SUCCESS));
    } catch (error) {
      dispatch(fetchDataFailure(error.message, DELETE_POSTIMET_FAILURE));
    }
  };
};

export const getNjoftimetFromVisitors = (page) => {
  return async (dispatch) => {
    dispatch(fetchDataRequest(FETCH_NJOFTIMET_VISITORS_REQUEST));
    try {
      const response = await axios.get(
        `${URL}/api/test/getNjoftimetVisitor/${page}`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );

      const data = response.data.body;

      dispatch(fetchDataSuccess(data, FETCH_NJOFTIMET_VISITORS_SUCCESS));
    } catch (error) {
      fetchDataFailure(error.message, FETCH_NJOFTIMET_VISITORS_FAILURE);
    }
  };
};

export const PostoPjestammeret = (body) => {
  return async (dispatch) => {
    if (
      body.arsimi != "" &&
      body.doethemi != "" &&
      body.email != "" &&
      body.emri != "" &&
      body.institucioni != "" &&
      body.mosha != "" &&
      body.numri != "" &&
      body.vendbanim != ""
    ) {
      dispatch(fetchDataRequest(SEND_PJESMARRESIT_REQUEST));
      try {
        const response = await axios
          .post(`${URL}/api/test/registerPjestar`, body, {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          })
          .then((response) => {
            const data = response.data.body;
            dispatch(fetchDataSuccess(data, SEND_PJESMARRESIT_SUCCESS));
          });
      } catch (error) {
        dispatch(fetchDataFailure(body, SEND_PJESMARRESIT_FAILURE));
      }
    } else {
      dispatch(fetchDataFailure([], SEND_PJESMARRESIT_FAILURE));
    }
  };
};
export const GetPjesmarresitNjoftim = (page) => {
  return async (dispatch) => {
    dispatch(fetchDataRequest(FETCH_ANTARET_ADMIN_REQUEST));
    try {
      const response = await axios.get(
        `${URL}/test/getPjesmarreitNjoftim/${page}`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token1"),
          },
        }
      );

      const data = response.data.body;
      dispatch(fetchDataSuccess(data, FETCH_ANTARET_ADMIN_SUCCESS));
    } catch (error) {
      dispatch(fetchDataFailure(error.message, POST_ANTARET_VISITOR_FAILURE));
    }
  };
};

export const pjesmarresitpost = (page, bashkohuFormState) => {
  return async (dispatch) => {
    if (
      bashkohuFormState.emri == "" ||
      bashkohuFormState.mosha == "" ||
      bashkohuFormState.arsimi == "" ||
      bashkohuFormState.institucioni == "" ||
      bashkohuFormState.numri == "" ||
      bashkohuFormState.email == "" ||
      bashkohuFormState.vendbanim == "" ||
      bashkohuFormState.doethemi == ""
    ) {
      dispatch(
        fetchDataFailure(
          "Ju lutem plotesoni te gjitha fushat ne menyren e duhur  / Please complete all the fields in proper way",
          POST_ANTARET_VISITOR_FAILURE
        )
      );
    } else {
      try {
        const response = await axios.post(
          `${URL}/api/test/postPjesmarresitNjoftim/${page}`,
          bashkohuFormState,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token1"),
            },
          }
        );

        const data = response.data.body;
        dispatch(fetchDataSuccess(data, POST_ANTARET_VISITOR_SUCCESS));
      } catch (error) {
        dispatch(
          fetchDataFailure(
            "Ju lutem plotesoni te gjitha fushat ne menyren e duhur  / Please complete all the fields in proper way",
            POST_ANTARET_VISITOR_FAILURE
          )
        );
      }
    }
  };
};
export const updaetPjesmarresit = (page, body) => {
  return async (dispatch) => {
    dispatch(fetchDataRequest(UPDATE_ANTARET_REQUEST));
    try {
      const response = await axios.put(
        `${URL}/api/test/updatePjesmarresitNjoftim/${page}`,
        body,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token1"),
          },
        }
      );

      const data = response.data.body;
      dispatch(fetchDataSuccess(data, UPDATE_ANTARET_SUCCESS));
    } catch (error) {
      dispatch(fetchDataFailure(error.message, UPDATE_ANTARET_FAILURE));
    }
  };
};
export const deleteAntar1 = (id) => {
  return async (dispatch) => {
    dispatch(fetchDataRequest(DELETE_ANTARET_REQUEST));

    try {
      const response = await axios.delete(
        `${URL}/api/test/deletePjesmarresit/${id}`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token1"),
          },
        }
      );

      const data = response.data.body;
      dispatch(fetchDataSuccess(data, DELETE_ANTARET_SUCCESS));
    } catch (error) {
      dispatch(fetchDataFailure(error.message, DELETE_ANTARET_FAILURE));
    }
  };
};
export const getPostsVisitor = (page) => {
  return async (dispatch) => {
    dispatch(fetchDataRequest(FETCH_POSTS_VISITOR_REQUEST));
    try {
      const response = await axios.get(
        `${URL}/api/test/getPostimetDesktop/${page}`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );

      const data = response.data.body;
      dispatch(fetchDataSuccess(data, FETCH_POSTS_VISITOR_SUCCESS));
    } catch (error) {
      dispatch(fetchDataFailure(error.message, FETCH_POSTS_VISITOR_FAILURE));
    }
  };
};
export const getPostimVisitor = (page) => {
  return async (dispatch) => {
    dispatch(fetchDataRequest(FETCH_POSTIM_VISITOR_REQUEST));
    try {
      const response = await axios.get(
        `${URL}/api/test/getPostimVisitor/${page}`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );

      const data = response.data.body;
      dispatch(fetchDataSuccess(data, FETCH_POSTIM_VISITOR_SUCCESS));
    } catch (error) {
      dispatch(fetchDataFailure(error.message, FETCH_ANTARET_ADMIN_FAILURE));
    }
  };
};
export const getPostsVisitorMobile = (page) => {
  return async (dispatch) => {
    dispatch(fetchDataRequest(FETCH_POSTS_VISITOR_REQUEST));
    try {
      const response = await axios.get(
        `${URL}/api/test/getPostimetVisitorMobile/${page}`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );

      const data = response.data.body;
      dispatch(fetchDataSuccess(data, FETCH_POSTS_VISITOR_SUCCESS));
    } catch (error) {
      dispatch(fetchDataFailure(error.message, FETCH_POSTS_VISITOR_FAILURE));
    }
  };
};
