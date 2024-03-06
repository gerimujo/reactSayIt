import { BASHKOHU_REGISTER_FORM_ACTIVE } from "./actions";
import {
  FETCH_NJOFTIME_FAILURE,
  FETCH_NJOFTIME_SUCCESS,
  FETCH_NJOFTIME_REQUEST,
  POST_NJOFTIME_FAILURE,
  POST_NJOFTIME_SUCCESS,
  POST_NJOFTIME_REQUEST,
  DELETE_NJOFTIME_FAILURE,
  DELETE_NJOFTIME_REQUEST,
  DELETE_NJOFTIME_SUCCESS,
  NJOFTIM_HAP_UPDATE,
  UPDATE_NJOFTIM_PART_TIPI,
  UPDATE_NJOFTIM_PART_VENDI,
  UPDATE_NJOFTIM_PART_TITULLI,
  UPDATE_NJOFTIM_PART_DATA,
  UPDATE_NJOFTIM_PART_PERSHKRIM,
  UPDATE_NJOFTIM_PART_ORA,
  UPDATE_NJOFTIME_FAILURE,
  UPDATE_NJOFTIME_SUCCESS,
  UPDATE_NJOFTIME_REQUEST,
  POST_ANTARET_VISITOR_REQUEST,
  POST_ANTARET_VISITOR_SUCCESS,
  POST_ANTARET_VISITOR_FAILURE,
  RETURN_ANTARET_NORMAL,
  MENU_HAP_TELEFON,
  MENU_MBYLL_TELEFON,
  MENU_STATIK_TELEFON,
  FETCH_ANTARET_ADMIN_FAILURE,
  FETCH_ANTARET_ADMIN_REQUEST,
  FETCH_ANTARET_ADMIN_SUCCESS,
  DELETE_ANTARET_FAILURE,
  DELETE_ANTARET_SUCCESS,
  DELETE_ANTARET_REQUEST,
  REGISTER_FORM_ACTIVE_UPDATE,
  SET_REGISTER_FORM_ANTAR_FOR_UPDATE,
  UPDATE_ANTARET_FAILURE,
  UPDATE_ANTARET_SUCCESS,
  UPDATE_ANTARET_REQUEST,
  POST_POSTIME_REQUEST,
  POST_POSTIME_FAILURE,
  POST_POSTIME_SUCCESS,
  FETCH_POSTIME_FAILURE,
  FETCH_POSTIME_SUCCESS,
  FETCH_POSTIME_REQUEST,
  POSTIME_UPDATE_ACTIVE,
  POSTIME_UPDATE_POST,
  UPDATE_POSTIMET_FAILURE,
  UPDATE_POSTIMET_SUCCESS,
  UPDATE_POSTIMET_REQUEST,
  DELETE_POSTIMET_FAILURE,
  DELETE_POSTIMET_SUCCESS,
  DELETE_POSTIMET_REQUEST,
  FETCH_NJOFTIMET_VISITORS_REQUEST,
  FETCH_NJOFTIMET_VISITORS_FAILURE,
  FETCH_NJOFTIMET_VISITORS_SUCCESS,
  REGISTER_NOFTIM_PJESTAR,
  SEND_PJESMARRESIT_FAILURE,
  SEND_PJESMARRESIT_SUCCESS,
  SEND_PJESMARRESIT_REQUEST,
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

const ActiveFormState = {
  activeForm: {
    bashkohuFormActive: false,
    AdminNjoftimetActive: { status: false, type: "post" },
    AdminPostActive: { status: false, type: "post" },
    njoftimet: [{}],
    postimet: [{}],
    njoftimhapUpdate: {},
    antaret: [{ loading: false, data: [], error: "" }],
    idmenu: { idmenu: "menustatik", idpartComponent: "menutelefonstatik" },
    bashkohuFormActiveUpdate: false,
    bashkohuFormUpdateAntar: {},
    postimeUpdateStatus: false,
    PostimUpdatePost: {},
    njoftimetVisitor: {},
    njoftimetPjestarRregjistrohu: {},
    njoftimetPjestarRregjistrohuShenim: "",
    postsVisitor: {},
    postimhap: {},
  },
};

const ActiveFormReducer = (state = ActiveFormState, action) => {
  switch (action.type) {
    case "BASHKOHU_REGISTER_FORM_ACTIVE":
      return {
        activeForm: {
          ...state.activeForm,
          bashkohuFormActive:
            state.activeForm.bashkohuFormActive == false ? true : false,
          antaret: { ...state.activeForm.antaret, error: "" },
          bashkohuFormActiveUpdate: false,
          njoftimetPjestarRregjistrohuShenim: "",
        },
      };
    case "REGISTER_NOFTIM_PJESTAR": {
      return {
        activeForm: {
          ...state.activeForm,
          bashkohuFormActive:
            state.activeForm.bashkohuFormActive == false ? true : false,
          njoftimetPjestarRregjistrohu: action.payload,
        },
      };
    }
    case "ADMIN_POSTO_NJOFTIM": {
      return {
        activeForm: {
          ...state.activeForm,
          AdminNjoftimetActive: {
            status:
              state.activeForm.AdminNjoftimetActive.status == true
                ? false
                : true,
            type: "post",
          },
        },
      };
    }
    case "ADMIN_UPDATE_NJOFTIM": {
      return {
        activeForm: {
          ...state.activeForm,
          AdminNjoftimetActive: {
            status:
              state.activeForm.AdminNjoftimetActive.status == true
                ? false
                : true,
            type: "update",
          },
        },
      };
    }
    case "ADMIN_POSTO_POSTIM": {
      return {
        activeForm: {
          ...state.activeForm,
          AdminPostActive: {
            status:
              state.activeForm.AdminPostActive.status == true ? false : true,
            type: "post",
          },
          PostimUpdatePost: {},
        },
      };
    }
    case "ADMIN_UPDATE_POSTIM": {
      return {
        activeForm: {
          ...state.activeForm,
          AdminPostActive: {
            status:
              state.activeForm.AdminPostActive.status == true ? false : true,
            type: "update",
          },
        },
      };
    }
    case FETCH_NJOFTIME_REQUEST: {
      return {
        activeForm: {
          ...state.activeForm,
          njoftimet: { loading: true },
        },
      };
    }
    case FETCH_NJOFTIME_SUCCESS: {
      return {
        activeForm: {
          ...state.activeForm,
          njoftimet: { loading: false, data: action.payload, error: "" },
        },
      };
    }
    case FETCH_NJOFTIME_FAILURE: {
      return {
        activeForm: {
          ...state.activeForm,
          njoftimet: {
            loading: false,
            data: state.activeForm.njoftimet.data,
            error: action.payload,
          },
        },
      };
    }
    case POST_NJOFTIME_REQUEST: {
      return {
        activeForm: {
          ...state.activeForm,
          njoftimet: { loading: true },
        },
      };
    }
    case POST_NJOFTIME_SUCCESS: {
      return {
        activeForm: {
          ...state.activeForm,
          njoftimet: { loading: false, data: action.payload, error: "" },
        },
      };
    }
    case POST_NJOFTIME_FAILURE: {
      return {
        activeForm: {
          ...state.activeForm,
          njoftimet: {
            loading: false,
            data: state.activeForm.njoftimet.data,
            error: action.payload,
          },
        },
      };
    }
    case DELETE_NJOFTIME_REQUEST: {
      return {
        activeForm: {
          ...state.activeForm,
          njoftimet: { loading: true },
        },
      };
    }
    case DELETE_NJOFTIME_SUCCESS: {
      return {
        activeForm: {
          ...state.activeForm,
          njoftimet: { loading: false, data: action.payload, error: "" },
        },
      };
    }
    case DELETE_NJOFTIME_FAILURE: {
      return {
        activeForm: {
          ...state.activeForm,
          njoftimet: {
            ...state.activeForm.njoftimet,
            loading: false,

            error: action.payload,
          },
        },
      };
    }
    case "NJOFTIM_HAP_UPDATE": {
      return {
        activeForm: {
          ...state.activeForm,
          njoftimhapUpdate: action.payload,
        },
      };
    }
    case "UPDATE_NJOFTIME_REQUEST": {
      return {
        activeForm: {
          ...state.activeForm,
          njoftimet: { loading: true },
        },
      };
    }
    case "UPDATE_NJOFTIME_FAILURE": {
      return {
        activeForm: {
          ...state.activeForm,
          njoftimet: {
            loading: false,
            data: state.activeForm.njoftimet.data,
            error: action.payload,
          },
        },
      };
    }
    case "UPDATE_NJOFTIME_SUCCESS": {
      return {
        activeForm: {
          ...state.activeForm,
          njoftimet: { loading: false, data: action.payload, error: "" },
        },
      };
    }
    case "POST_ANTARET_VISITOR_REQUEST": {
      return {
        activeForm: {
          ...state.activeForm,
          antaret: { loading: true, data: [], error: "" },
        },
      };
    }
    case "POST_ANTARET_VISITOR_SUCCESS": {
      return {
        activeForm: {
          ...state.activeForm,
          antaret: {
            loading: false,
            data: action.payload,
            error: "Regjistruar me sukses / Registered successfully",
          },
        },
      };
    }
    case "POST_ANTARET_VISITOR_FAILURE": {
      return {
        activeForm: {
          ...state.activeForm,
          antaret: {
            loading: false,
            data: state.activeForm.antaret.data,
            error: action.payload,
          },
        },
      };
    }
    case "MENU_STATIK_TELEFON": {
      return {
        activeForm: {
          ...state.activeForm,
          idmenu: {
            idmenu: "menustatik",
            idpartComponent: "menutelefonstatik",
          },
        },
      };
    }
    case "MENU_HAP_TELEFON": {
      return {
        activeForm: {
          ...state.activeForm,
          idmenu: { idmenu: "menuhap", idpartComponent: "menuhaptelefon" },
        },
      };
    }
    case "MENU_MBYLL_TELEFON": {
      return {
        activeForm: {
          ...state.activeForm,
          idmenu: { idmenu: "menumbyll", idpartComponent: "menumbylltelefon" },
        },
      };
    }
    case "FETCH_ANTARET_ADMIN_FAILURE": {
      return {
        activeForm: {
          ...state.activeForm,
          antaret: {
            loading: false,
            data: state.activeForm.antaret.data,
            error: action.payload,
          },
        },
      };
    }
    case "FETCH_ANTARET_ADMIN_REQUEST": {
      return {
        activeForm: {
          ...state.activeForm,
          antaret: { loading: true, data: [], error: "" },
        },
      };
    }
    case "FETCH_ANTARET_ADMIN_SUCCESS": {
      return {
        activeForm: {
          ...state.activeForm,
          antaret: { loading: false, data: action.payload, error: "" },
        },
      };
    }
    case "DELETE_ANTARET_FAILURE": {
      return {
        activeForm: {
          ...state.activeForm,
          antaret: {
            loading: false,
            data: state.activeForm.antaret.data,
            error: action.payload,
          },
        },
      };
    }
    case "DELETE_ANTARET_SUCCESS": {
      return {
        activeForm: {
          ...state.activeForm,
          antaret: { loading: false, data: action.payload, error: "" },
        },
      };
    }
    case "DELETE_ANTARET_REQUEST": {
      return {
        activeForm: {
          ...state.activeForm,
          antaret: { loading: true, data: [], error: "" },
        },
      };
    }
    case REGISTER_FORM_ACTIVE_UPDATE: {
      return {
        activeForm: {
          ...state.activeForm,
          bashkohuFormActiveUpdate: !state.activeForm.bashkohuFormActiveUpdate,
        },
      };
    }

    case "SET_REGISTER_FORM_ANTAR_FOR_UPDATE": {
      return {
        activeForm: {
          ...state.activeForm,
          bashkohuFormUpdateAntar: action.payload,
          bashkohuFormActiveUpdate: true,
          bashkohuFormActive: true,
        },
      };
    }
    case "UPDATE_ANTARET_REQUEST": {
      return {
        activeForm: {
          ...state.activeForm,
          antaret: { loading: true, data: [], error: "" },
        },
      };
    }
    case "UPDATE_ANTARET_SUCCESS": {
      return {
        activeForm: {
          ...state.activeForm,
          antaret: {
            loading: false,
            data: action.payload,
            error: "Update is done",
          },
        },
      };
    }
    case "UPDATE_ANTARET_FAILURE": {
      return {
        activeForm: {
          ...state.activeForm,
          antaret: {
            loading: false,
            data: state.activeForm.antaret.data,
            error: "Update is not done",
          },
        },
      };
    }
    case "POST_POSTIME_FAILURE": {
      return {
        activeForm: {
          ...state.activeForm,
          postimet: {
            loading: false,
            data: state.activeForm.postimet.data,
            error: action.payload,
          },
        },
      };
    }
    case "POST_POSTIME_SUCCESS": {
      return {
        activeForm: {
          ...state.activeForm,
          postimet: { loading: false, data: action.payload, error: "" },
        },
      };
    }
    case "POST_POSTIME_REQUEST": {
      return {
        activeForm: {
          ...state.activeForm,
          postimet: { loading: true, data: [], error: "" },
        },
      };
    }
    case "FETCH_POSTIME_FAILURE": {
      return {
        activeForm: {
          ...state.activeForm,
          postimet: {
            loading: false,
            data: state.activeForm.postimet.data,
            error: action.payload,
          },
        },
      };
    }
    case "FETCH_POSTIME_SUCCESS": {
      return {
        activeForm: {
          ...state.activeForm,
          postimet: { loading: false, data: action.payload, error: "" },
        },
      };
    }
    case "FETCH_POSTIME_REQUEST": {
      return {
        activeForm: {
          ...state.activeForm,
          postimet: { loading: true, data: [], error: "" },
        },
      };
    }
    case "POSTIME_UPDATE_ACTIVE": {
      return {
        activeForm: {
          ...state.activeForm,
          postimeUpdateStatus: true,
        },
      };
    }
    case "POSTIME_UPDATE_POST": {
      return {
        activeForm: {
          ...state.activeForm,
          PostimUpdatePost: action.payload,

          AdminPostActive: { status: true, type: "update" },
        },
      };
    }
    case "UPDATE_POSTIMET_FAILURE": {
      return {
        activeForm: {
          ...state.activeForm,
          postimet: {
            loading: false,
            data: state.activeForm.postimet.data,
            error: action.payload,
          },
        },
      };
    }
    case "UPDATE_POSTIMET_REQUEST": {
      return {
        activeForm: {
          ...state.activeForm,
          postimet: { loading: true, data: [], error: "" },
        },
      };
    }
    case "UPDATE_POSTIMET_SUCCESS": {
      return {
        activeForm: {
          ...state.activeForm,
          postimet: { loading: false, data: action.payload, error: "" },
        },
      };
    }
    case "DELETE_POSTIMET_FAILURE": {
      return {
        activeForm: {
          ...state.activeForm,
          postimet: {
            loading: false,
            data: state.activeForm.postimet.data,
            error: action.payload,
          },
        },
      };
    }
    case "DELETE_POSTIMET_SUCCESS": {
      return {
        activeForm: {
          ...state.activeForm,
          postimet: { loading: false, data: action.payload, error: "" },
        },
      };
    }
    case "DELETE_POSTIMET_REQUEST": {
      return {
        activeForm: {
          ...state.activeForm,
          postimet: { loading: true, data: [], error: "" },
        },
      };
    }
    case "FETCH_NJOFTIMET_VISITORS_FAILURE": {
      return {
        activeForm: {
          ...state.activeForm,
          njoftimetVisitor: {
            loading: false,
            data: state.activeForm.njoftimetVisitor.data,
            error: action.payload,
          },
        },
      };
    }
    case "FETCH_NJOFTIMET_VISITORS_SUCCESS": {
      return {
        activeForm: {
          ...state.activeForm,
          njoftimetVisitor: { loading: false, data: action.payload, error: "" },
        },
      };
    }
    case "FETCH_ANTARET_ADMIN_REQUEST": {
      return {
        activeForm: {
          ...state.activeForm,
          njoftimetVisitor: { loading: true, data: [], error: "" },
        },
      };
    }
    case SEND_PJESMARRESIT_SUCCESS: {
      return {
        activeForm: {
          ...state.activeForm,
          njoftimetPjestarRregjistrohuShenim:
            "Bere me sukses / Done succesfully",
        },
      };
    }
    case SEND_PJESMARRESIT_FAILURE: {
      return {
        activeForm: {
          ...state.activeForm,
          njoftimetPjestarRregjistrohuShenim:
            "Ndodhi nje problem / An error occurred",
        },
      };
    }
    case "FETCH_POSTS_VISITOR_SUCCESS": {
      return {
        activeForm: {
          ...state.activeForm,
          postsVisitor: { loading: false, data: action.payload, error: "" },
        },
      };
    }
    case "FETCH_POSTS_VISITOR_FAILURE": {
      return {
        activeForm: {
          ...state.activeForm,
          postsVisitor: {
            loading: false,
            data: state.activeForm.postsVisitor.data,
            error: action.payload,
          },
        },
      };
    }
    case "FETCH_POSTS_VISITOR_REQUEST": {
      return {
        activeForm: {
          ...state.activeForm,
          postsVisitor: { loading: true, data: [], error: "" },
        },
      };
    }
    case "FETCH_POSTIM_VISITOR_FAILURE": {
      return {
        activeForm: {
          ...state.activeForm,
          postimhap: {
            loading: false,
            data: state.activeForm.postimhap.data,
            error: action.payload,
          },
        },
      };
    }
    case "FETCH_POSTIM_VISITOR_REQUEST": {
      return {
        activeForm: {
          ...state.activeForm,
          postimhap: { loading: true, data: [], error: "" },
        },
      };
    }
    case "FETCH_POSTIM_VISITOR_SUCCESS": {
      return {
        activeForm: {
          ...state.activeForm,
          postimhap: { loading: false, data: action.payload, error: "" },
        },
      };
    }
    default:
      return state;
  }
};
export default ActiveFormReducer;
