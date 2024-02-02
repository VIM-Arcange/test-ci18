// This is just an example,
// so you can safely delete all default props below
export default {
  failed: 'Échec de l\'action',
  success: 'L\'action est réussie',
  menu: {
    accounts: 'Comptes',
    about: 'À propos',
    lock: 'Verrouiller l\'application',
    logs: 'Journaux'
  },
  logs: {
    success_copy_clipboard: 'Données copiées dans le presse-papier',
    error_copy_clipboard: 'Echec de la copie des données dans le Presse-papiers'
  },
  scan: {
    error_scan: 'Échec du scan du QR code',
    error_permission_denied: 'Autorisation d’accès à l’appareil photo refusée',
    error_start_scan: 'Permissions refusées ou Erreur lors de l\'obtention des permissions de l\'appareil photo'
  },
  login: {
    pin_create: 'Choisissez votre code PIN',
    pin_confirm: 'Confirmez votre code PIN',
    pin_enter: 'Saisissez votre code PIN',
    pin_mismatch: 'Les codes PIN ne correspondent pas !',
    pin_forgotten: 'Code PIN oublié ?',
    pin_init: 'Code PIN initialisé',
    pin_reset: 'Réinitialisation effectuée',
    pin_error: 'Erreur lors de l\'initialisation du code PIN',
    failed: 'Echec de l\'authentification',
    biometrics_unavailable: 'Les fonctions biométriques de l\'appareil ne sont pas disponible. Veuillez les activer et redémarrer l\'application.',
    confirm_reset: {
      title: 'Confirmez la réinitialisation du code PIN',
      message: '<span class="text-red"><b>ATTENTION:</b></span> Si cous réinitilisez votre code PIN, toutes les données y compris vos clés et authentifications seront supprimées.<br>Vous devrez alors réimporter vos clés.'
    }
  },
  store_auth: {
    biometrics_reason: 'Allow HiveAuth to use your biometrics to Authenticate',
    biometrics_title: 'Authenticate',
    biometrics_subtitle: '',
    //"Unlock HiveAuth with your Biometrics",
    biometrics_description: 'Provide your FaceID or Touch ID to unlock HiveAuth'
  },
  accounts: {
    btn_add: 'Add an Account',
    empty_sessions: 'No sessions found',
    keys: 'Keys',
    sessions: 'Sessions'
  },
  accounts_key: {
    confirm_delete_key: {
      title: 'Remove Key',
      message: 'Are you sure you want to remove this key?'
    },
    confirm_delete_account: {
      title: 'Remove Account',
      message: 'Removing that key will also remove the account. Do you want to continue?'
    },
    account_deleted: 'The account has been removed',
    key_deleted: 'The key has been removed'
  },
  account_session: {
    expires: 'Expires',
    empty: 'No sessions found',
    confirm_delete_session: {
      title: 'Delete session',
      message: 'Are you sure you want to delete this session?'
    },
    whilelists: {
      title: 'Whitelisted operations',
      deleted: 'Operation whitelist removed'
    }
  },
  dialog_auth_req: {
    text: 'wants to authenticate on',
    timeout: 'Session validity'
  },
  dialog_challenge_req: { text: 'wants to validate a challenge' },
  dialog_sign_req: {
    text: 'wants to sign a transaction with the following operation(s):',
    whitelist: 'Do not prompt again for {type} operations'
  },
  import_key: {
    title: {
      account: 'Import your Hive account and key',
      key: 'Import your account key'
    },
    success: 'Key is securely stored',
    failed: 'Failed to validate key',
    no_match: 'No matching key',
    error_owner_key: 'Importing an owner key is not allowed',
    invalid: 'Invalid {type} Key',
    invalid_keychain_export: 'The keychain export contains an invalid key',
    username: {
      label: 'Username',
      placeholder: 'Enter your Hive username'
    },
    key: {
      label: 'Private {type} Key',
      placeholder: 'Enter or scan your private key'
    },
    btn_import: 'Import'
  },
  operation_details: {
    pretty: 'Pretty',
    raw: 'Raw'
  },
  main_page: { no_pending_request: 'No pending request' },
  main_layout: {
    connected: 'connected',
    disconnected: 'disconnected',
    registered: ' registered',
    auth_ack: 'Authentication approved',
    sign_ack: 'Transaction signed',
    challenge_ack: 'Challenge signed',
    auth_not_found: 'No valid authentication found',
    account_not_found: 'Account {name} is not managed'
  },
  btn_ok: 'OK',
  btn_cancel: 'Cancel',
  btn_add: 'Add',
  btn_save: 'Save',
  btn_update: 'Update',
  btn_approve: 'Approve',
  btn_reject: 'Reject',
  not_supported: 'Feature not supported yet',
  request_expired: 'Request expired'
};