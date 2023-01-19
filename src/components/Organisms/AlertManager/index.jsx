import React, { useEffect } from "react";
import { useAlertHandlerContext } from "../../../contexts/alert_handler";
import Alert from "../../Atoms/Alert";
const AlertManager = () => {
  const AlertHandlerContext = useAlertHandlerContext();
  useEffect(() => {
    if (AlertHandlerContext.visible == true) {
      setTimeout(AlertHandlerContext.closeAlert, 5000);
    }
  }, [AlertHandlerContext]);
  return (
    <Alert
      alertVisible={AlertHandlerContext.visible}
      alertErrorText={AlertHandlerContext.errorText}
    />
  );
};
export default AlertManager;
