// This is just an example,
// so you can safely delete all default props below
export default {
  failed: false,
  success: false,
  menu: {
    accounts: false,
    about: false,
    lock: false,
    logs: false
  },
  logs: {
    success_copy_clipboard: false,
    error_copy_clipboard: false
  },
  scan: {
    error_scan: false,
    error_permission_denied: false,
    error_start_scan: false
  },
  login: {
    pin_create: false,
    pin_confirm: false,
    pin_enter: false,
    pin_mismatch: false,
    pin_forgotten: false,
    pin_init: false,
    pin_reset: false,
    pin_error: false,
    failed: false,
    biometrics_unavailable: false,
    confirm_reset: {
      title: false,
      message: false
    }
  },
  store_auth: {
    biometrics_reason: false,
    biometrics_title: false,
    biometrics_subtitle: false,
    //"Unlock HiveAuth with your Biometrics",
    biometrics_description: false
  },
  accounts: {
    btn_add: false,
    empty_sessions: false,
    keys: false,
    sessions: false
  },
  accounts_key: {
    confirm_delete_key: {
      title: false,
      message: false
    },
    confirm_delete_account: {
      title: false,
      message: false
    },
    account_deleted: false,
    key_deleted: false
  },
  account_session: {
    expires: false,
    empty: false,
    confirm_delete_session: {
      title: false,
      message: false
    },
    whilelists: {
      title: false,
      deleted: false
    }
  },
  dialog_auth_req: {
    text: false,
    timeout: false
  },
  dialog_challenge_req: { text: false },
  dialog_sign_req: {
    text: false,
    whitelist: false
  },
  import_key: {
    title: {
      account: false,
      key: false
    },
    success: false,
    failed: false,
    no_match: false,
    error_owner_key: false,
    invalid: false,
    invalid_keychain_export: false,
    username: {
      label: false,
      placeholder: false
    },
    key: {
      label: false,
      placeholder: false
    },
    btn_import: false
  },
  operation_details: {
    pretty: false,
    raw: false
  },
  main_page: { no_pending_request: false },
  main_layout: {
    connected: false,
    disconnected: false,
    registered: false,
    auth_ack: false,
    sign_ack: false,
    challenge_ack: false,
    auth_not_found: false,
    account_not_found: false
  },
  btn_ok: false,
  btn_cancel: false,
  btn_add: false,
  btn_save: false,
  btn_update: false,
  btn_approve: false,
  btn_reject: false,
  not_supported: false,
  request_expired: false
};