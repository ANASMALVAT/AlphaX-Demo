import {configureStore} from "@reduxjs/toolkit"
import alphaPlatformReducer from "./slices/alphaPlatformSlice"
import dropdownSliceReducer from "./slices/dropDownSlice"
import problemCategories from "./slices/problemCategorySlice"
import problemTypeSlice from "./slices/problemTypeSlice"
import userLoginWindow from "./slices/userLoginWindow"
import userLoginWindowSlice from "./slices/userAuthentication"
import alphaNotification from "./slices/alphaNotification"
import alphaRunning from "./slices/alphaRunning"
import alphaConsole from "./slices/alphaConsole"
import userAuthorization from "./slices/userAuthorizationSlice"
import outputWindowSlice from "./slices/outputWindowSlice"
import codeDialog  from "./slices/codeDialog"
import solutionSlice from "./slices/solutionSlice"
import alphaUser from "./slices/alphaUser"
import alphaPremiumUser from "./slices/alphaPremiumUser"
import loginCredentials from "./slices/loginCredentials"

const store = configureStore({
    reducer:{
      alphaPlatform:alphaPlatformReducer,
      dropdownValues:dropdownSliceReducer,
      problemCategories:problemCategories,
      userLoginWindow:userLoginWindow,
      userLogin:userLoginWindowSlice,
      alphaNotification:alphaNotification,
      alphaRunning:alphaRunning,
      alphaConsole:alphaConsole,
      problemType:problemTypeSlice,
      userAuthorization:userAuthorization,
      outputWindow:outputWindowSlice,
      codeDialog:codeDialog,
      solutionLanguage:solutionSlice,
      alphaUser:alphaUser,
      alphaPremiumUser:alphaPremiumUser,
      loginCredentials:loginCredentials
    },
  });

  export default store;