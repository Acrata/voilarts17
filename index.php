<?php
/**
 * The main template file.
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package voilarts17
 */

get_header(); ?>

	<div class="wrap">
		<div class="primary content-area">
			<main id="main" class="site-main" role="main">
					<?php  get_template_part('newloop');?>

			</main><!-- #main -->
		</div><!-- .primary -->

		<?php //get_sidebar(); ?>

	</div><!-- .wrap -->

<?php get_footer(); ?>
