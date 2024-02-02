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
  },
};
