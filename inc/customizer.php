<?php
/**
 * voilarts17 Theme Customizer.
 *
 * @package voilarts17
 */

/**
 * Add postMessage support for site title and description for the Theme Customizer.
 *
 * @param WP_Customize_Manager $wp_customize Theme Customizer object.
 */
function voilarts17_customize_register( $wp_customize ) {
	$wp_customize->get_setting( 'blogname' )->transport         = 'postMessage';
	$wp_customize->get_setting( 'blogdescription' )->transport  = 'postMessage';
	$wp_customize->get_setting( 'header_textcolor' )->transport = 'postMessage';

	// Add our social link options.
	$wp_customize->add_section(
		'voilarts17_social_links_section',
		array(
			'title'       => esc_html__( 'Social Links', 'voilarts17' ),
			'description' => esc_html__( 'These are the settings for social links. Please limit the number of social links to 5.', 'voilarts17' ),
			'priority'    => 90,
		)
	);

	// Create an array of our social links for ease of setup.
	$social_networks = array( 'facebook', 'googleplus', 'instagram', 'linkedin', 'twitter' );

	// Loop through our networks to setup our fields.
	foreach ( $social_networks as $network ) {

		$wp_customize->add_setting(
			'voilarts17_' . $network . '_link',
			array(
				'default' => '',
				'sanitize_callback' => 'voilarts17_sanitize_customizer_url',
	        )
	    );
	    $wp_customize->add_control(
	        'voilarts17_' . $network . '_link',
	        array(
	            'label'   => sprintf( esc_html__( '%s Link', 'voilarts17' ), ucwords( $network ) ),
	            'section' => 'voilarts17_social_links_section',
	            'type'    => 'text',
	        )
	    );
	}

	// Add our Footer Customization section section.
	$wp_customize->add_section(
		'voilarts17_footer_section',
		array(
			'title'    => esc_html__( 'Footer Customization', 'voilarts17' ),
			'priority' => 90,
		)
	);

	// Add our copyright text field.
	$wp_customize->add_setting(
		'voilarts17_copyright_text',
		array(
			'default' => '',
		)
	);
	$wp_customize->add_control(
		'voilarts17_copyright_text',
		array(
			'label'       => esc_html__( 'Copyright Text', 'voilarts17' ),
			'description' => esc_html__( 'The copyright text will be displayed beneath the menu in the footer.', 'voilarts17' ),
			'section'     => 'voilarts17_footer_section',
			'type'        => 'text',
			'sanitize'    => 'html',
		)
	);
}
add_action( 'customize_register', 'voilarts17_customize_register' );

/**
 * Binds JS handlers to make Theme Customizer preview reload changes asynchronously.
 */
function voilarts17_customize_preview_js() {
	wp_enqueue_script( 'voilarts17_customizer', get_template_directory_uri() . '/assets/scripts/customizer.js', array( 'customize-preview' ), '20151215', true );
}
add_action( 'customize_preview_init', 'voilarts17_customize_preview_js' );

/**
 * Sanitize our customizer text inputs.
 *
 * @param  string $input Text saved in Customizer input fields.
 * @return string        Sanitized output.
 *
 * @author Corey Collins
 */
function voilarts17_sanitize_customizer_text( $input ) {
	return sanitize_text_field( force_balance_tags( $input ) );
}

/**
 * Sanitize our customizer URL inputs.
 *
 * @param  string $input The URL we need to validate.
 * @return string        Sanitized output.
 *
 * @author Corey Collins
 */
function voilarts17_sanitize_customizer_url( $input ) {
	return esc_url( $input );
}
