import './bootstrap.js';
/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */
import './styles/app.css';
// assets/app.js

// Import base CSS
import './styles/base.css';

// Import page-specific CSS
import './styles/pages/home.css';
import './styles/pages/profile.css';
import './styles/pages/search.css';
import './styles/pages/chat.css';
import './styles/pages/settings.css';
import './styles/pages/listing.css';

// Start the Stimulus application
import './bootstrap';
console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');
