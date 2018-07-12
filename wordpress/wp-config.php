<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wordpress');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'admin@123');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'O]Q(:`l|3izh5b)OH X[&06%.[~,_ucqyr[DQ3_S!tr(:ghI!!^%;-K=kltz+9DE');
define('SECURE_AUTH_KEY',  '+N*,-=firE^F};9-i{G7 M<o!j,cpxh8.)-tx7IughCp*jw)?IX8hTHc>fGWr&OR');
define('LOGGED_IN_KEY',    '<Q0?`V?N:S2As: I3AS]%FWLuDrsN67z#i^!KU5P%~bR14e$*gAn&d%]pY?e;[!p');
define('NONCE_KEY',        '3I;dSP%T=:vI0|3Z~KyVZ_uW#_*K6N`ps}~4NbqZW:^N[,BpUO*rW0ix()eKbvlG');
define('AUTH_SALT',        '0794j^izV?hyHB67$mq~-;B>#L {@%K+<EWH}$<~l-U2<u2WGoqP<t.3xIzG[)lE');
define('SECURE_AUTH_SALT', '+c#W-kOEyvG}r{8M0TI`mULY# omRkQr+7-l5]8.El].o?uK.|6Nh!H]rMw.-^u$');
define('LOGGED_IN_SALT',   '-0@*S&j,7i1J:qE{|9yC(dBM|4Tu+Hrh|(t7>2YCj=ZpdS;]T.idJk7[Ya)6j+Z,');
define('NONCE_SALT',       'WGgem26!-!7z.q3Ec>H6qPKR/-g|PtLZaGd5>=!cR+*vGUjrB%4pN_*[S+eQVJvj');
/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
