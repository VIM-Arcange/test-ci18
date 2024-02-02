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
    biometrics_reason: 'Autoriser HiveAuth à utiliser vos données biométriques pour vous authentifier',
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