<?php
/**
 * voilarts17 functions and definitions.
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package voilarts17
 */

if ( ! function_exists( 'voilarts17_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function voilarts17_setup() {
		/**
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on voilarts17, use a find and replace
		 * to change 'voilarts17' to the name of your theme in all the template files.
		 * You will also need to update the Gulpfile with the new text domain
		 * and matching destination POT file.
		 */
		load_theme_textdomain( 'voilarts17', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/**
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/**
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus( array(
			'primary' => esc_html__( 'Primary Menu', 'voilarts17' ),
			'mobile'  => esc_html__( 'Optional Mobile Menu', 'voilarts17' ),
		) );

		/**
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support( 'html5', array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
		) );

		// Set up the WordPress core custom background feature.
		add_theme_support( 'custom-background', apply_filters( 'voilarts17_custom_background_args', array(
			'default-color' => 'ffffff',
			'default-image' => '',
		) ) );

	}
endif; // voilarts17_setup
add_action( 'after_setup_theme', 'voilarts17_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function voilarts17_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'voilarts17_content_width', 640 );
}
add_action( 'after_setup_theme', 'voilarts17_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function voilarts17_widgets_init() {

	// Define sidebars.
	$sidebars = array(
		'sidebar-1'  => esc_html__( 'Sidebar 1', 'voilarts17' ),
		// 'sidebar-2'  => esc_html__( 'Sidebar 2', 'voilarts17' ),
		// 'sidebar-3'  => esc_html__( 'Sidebar 3', 'voilarts17' ),
	);

	// Loop through each sidebar and register.
	foreach ( $sidebars as $sidebar_id => $sidebar_name ) {
		register_sidebar( array(
			'name'          => $sidebar_name,
			'id'            => $sidebar_id,
			'description'   => sprintf( esc_html__( 'Widget area for %s', 'voilarts17' ), $sidebar_name ),
			'before_widget' => '<aside class="widget %2$s">',
			'after_widget'  => '</aside>',
			'before_title'  => '<h3 class="widget-title">',
			'after_title'   => '</h3>',
		) );
	}

}
add_action( 'widgets_init', 'voilarts17_widgets_init' );

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Custom functions that act independently of the theme templates.
 */
require get_template_directory() . '/inc/extras.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
require get_template_directory() . '/inc/jetpack.php';

/**
 * Load styles and scripts.
 */
require get_template_directory() . '/inc/scripts.php';
/* public my_add_show_title() {{{ */
/**
 * Add a show title field below post or page title.
 * my_add_show_title
 *
 * @access public
 * @return void
 */
function my_add_show_title() {
  piklist('field', array(
    'type' => 'text'
    ,'field' => 'show_title_voil'
    ,'template' => 'field' // format the field without a label
    ,'attributes' => array(
      'class' => 'large-text'
      ,'placeholder' => 'Enter show title here'
    )
  ));
}
/* }}} */
add_action('edit_form_after_title', 'my_add_show_title');

// add image for artist parent page
add_image_size('parent-artist-list',320,200, true);
function child_scripts_menu (){
    wp_dequeue_script('voilarts-scripts');
    wp_enqueue_script('child_scripts', get_stylesheet_directory_uri() . '/assets/scripts/project.min.js', array('jquery'), true);
}
add_action('wp_print_scripts', 'child_scripts_menu', 100);
add_filter('show_admin_bar', '__return_false');

// check if polylang exist & enabled
    function lang_sel_voil($output, $args) {
        $translations = pll_the_languages(array('raw'=>1));
        $output = '';
        $output .= '<div class="lang-btn-group" role="group">
            <ul class="lang-menu">';
            foreach ($translations as $key => $value) {
            $output .= '<li><a class="button" href="'.$value['url'].'"> ' .$value['slug'].'</a></li>';
            //$output .= '<li><a class="lang-item-slug" href="'.$value['url'].'"> ' .$value['slug'].'</a></li>';
            //$output .= '<li><a class="lang-item-slug" href="'.$value['url'].'"><img src="'.$value['flag'].'" alt="'.$value['slug'].'"> ' .$value['slug'].'</a></li>';
        }
        $output .= '</ul></div>';
        return $output;
    }


add_filter('pll_the_languages', 'lang_sel_voil', 10, 2);


// menus
add_action( 'after_setup_theme', 'register_my_menu' );
function register_my_menu() {
  register_nav_menu( 'slide_menu', __( 'Slide Menu', 'voilarts' ) );
}
