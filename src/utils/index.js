import React from "react";
import PropTypes from "prop-types";
import { txHashStatus } from "@src/apis/read/txStatus";
import { toast } from "react-toastify";
import TransactionNotification from "@components/TransactionNotification";
import { colorGrayscaleBody, colorGrayscaleDark } from "@src/colors";
import xIcon from "@src/assets/icon-x.png";
import _ from "lodash";
import { NOTIFICATION_TYPES } from "@src/constants";

let lastTxState = {};
let pendingToastId = {};

export const onTransaction = ({ txHash, callback }) => {
  return new Promise((resolve, reject) => {
    try {
      txHashStatus(txHash).subscribe({
        next: ({ state, txHash }) => {
          state !== lastTxState[txHash]
            ? activateNotification({
                txHash,
                notificationType: state,
              })
            : null;
          lastTxState[txHash] = state;
        },
        complete: () => {
          !_.isNil(callback) ? callback() : null;
          resolve();
        },
        error: (error) => {
          reject(error);
        },
      });
    } catch (error) {
      reject(error);
      console.log("ERROR_TXHASH", error);
    }
  });
};

export const activateNotification = ({ txHash, notificationType }) => {
  const options = {
    position: "bottom-left",
    autoClose: notificationType === NOTIFICATION_TYPES.PENDING ? false : 5000,
    onOpen: () => {
      if (
        notificationType !== NOTIFICATION_TYPES.PENDING &&
        pendingToastId[txHash]
      ) {
        toast.dismiss(pendingToastId[txHash]);
        pendingToastId[txHash] = undefined;
      }
    },
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: true,
    progress: undefined,
    closeButton: CloseButton,
    style: {
      backgroundColor: colorGrayscaleDark,
      border: `1px solid ${colorGrayscaleBody}`,
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      padding: "10px",
      position: "relative",
      width: "390px",
      borderRadius: 15,
    },
  };
  const toastId = toast(
    <TransactionNotification
      txHash={txHash}
      notificationType={notificationType}
    />,
    options,
  );
  if (notificationType === NOTIFICATION_TYPES.PENDING) {
    pendingToastId[txHash] = toastId;
  }
};

const CloseButton = ({ closeToast }) => (
  <img src={xIcon} style={{ width: 12, height: 12 }} onClick={closeToast} />
);

CloseButton.propTypes = {
  closeToast: PropTypes.func,
};
