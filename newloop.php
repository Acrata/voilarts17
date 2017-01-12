<?php
$page = get_page_by_path( 'nosotros' );
$contact_page_id_vv = pll_get_post($page->ID);
$opts = array(
    'post_type' => 'artist',
    'post_parent' => '0',
    'posts_per_page' => 3,
    'lang' => pll_current_language()
  );
$arty = array(
    'page_id' => $contact_page_id_vv,
    'posts_per_page' => 1,
    'post_parent' => '0',
    'lang' => pll_current_language()
  );
?>
<?php $my_query_art = new WP_Query($arty);?>
    <div class="about-index">
<?php
while ($my_query_art->have_posts()) : $my_query_art->the_post();
$do_not_duplicate = $post->ID;?>

<?php $attachment_id_about = get_post_thumbnail_id($post->ID);?>

    <div class="about-index-item">
<div class="res-img">
   <img src="<?php echo wp_get_attachment_image_url( $attachment_id_about, 'custom-size' ) ?>"
     srcset="<?php echo wp_get_attachment_image_srcset( $attachment_id_about, 'custom-size' ) ?>"
     sizes="<?php echo wp_get_attachment_image_sizes( $attachment_id_about, 'custom-size' ) ?>" />
</div>
        <div class="about-item">
            <h1 class="title-voil-entry"><?php the_title();?></h1>
            <?php the_content(); ?>
        </div>
    </div>

 <?php endwhile; ?>
    </div>
<div class="title-artist"><h1>Artistas</h1></div>
<div class="artist-index">

<?php $my_query = new WP_Query($opts);
while ($my_query->have_posts()) : $my_query->the_post();
$do_not_duplicate = $post->ID;
$attachment_id = get_post_thumbnail_id($post->ID);
?>
            <?php $pllid =  pll_get_post($post->ID)?>
            <?php $invo = get_post_meta($pllid,'show_title_voil',true)?>



    <div class="artist-list-vv">
<div class="res-img">
   <img src="<?php echo wp_get_attachment_image_url( $attachment_id, 'index-artist' ) ?>"
     srcset="<?php echo wp_get_attachment_image_srcset( $attachment_id, 'index-artist' ) ?>"
     sizes="<?php echo wp_get_attachment_image_sizes( $attachment_id, 'index-artist' ) ?>" />
</div>
        <div class="artist-item">
            <h1 class="title-voil"><?php the_title();?></h1>
                <p>
                    <span class="show-title-voil"><?php echo $invo; ?></span>
                </p>
            <p><?php the_excerpt(); ?></p>
            <h3 class="shows-voil">Shows</h3>
            <ul class="artist-childs">
            <?php wp_list_pages( array(
            'child_of' => get_the_ID()
            , 'post_type' => 'artist'
            ,'title_li' => ''
            ) ); ?>
            </ul>
        </div>
    </div>

 <?php endwhile; ?>

</div>
