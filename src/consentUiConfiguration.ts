import * as t from 'io-ts';
import { makeEnum } from '@transcend-io/type-utils';


/** Actions for buttons in modals */
export const ModalButtonActions = makeEnum({
  SaveAndClose: 'SaveAndClose',
  AcceptAllAndClose: 'AcceptAllAndClose',
  RejectAllAndClose: 'RejectAllAndClose',
});

/** Type override */
export type ModalButtonAction =
  (typeof ModalButtonActions)[keyof typeof ModalButtonActions];

/** All action types for buttons */
export const ButtonAction = makeEnum({
  ...ModalButtonActions,
  OpenModal: 'OpenModal',
});

/** Type override */
export type ButtonAction = (typeof ButtonAction)[keyof typeof ButtonAction];

/** Button Type */
export const ButtonType = makeEnum({
  Default: 'default',
  Link: 'link',
});

/** Type override */
export type ButtonType = (typeof ButtonType)[keyof typeof ButtonType];