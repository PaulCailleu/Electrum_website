<?php
/*
Plugin Name: Carte du monde - Avion de papier
Description: Une carte du monde intéractive qui permet d'y ajouter des liens
Version: 1.0
Author: Esteban Antonio-Mota
*/

function register_world_map_block() {
    // Enqueue block editor scripts and styles
    wp_register_script(
        'world-map-block-script',
        plugins_url('block.js', __FILE__),
        array('wp-blocks', 'wp-element', 'wp-editor', 'wp-components', 'wp-i18n'),
        '1.0',
        true
    );

    wp_register_style(
        'world-map-block-editor-style',
        plugins_url('editor.css', __FILE__),
        array(),
        '1.0'
    );

    wp_register_style(
        'world-map-block-style',
        plugins_url('style.css', __FILE__),
        array(),
        '1.0'
    );

    // Register block type
    register_block_type('aviondepapier/world-map-block', array(
        'editor_script' => 'world-map-block-script',
        'editor_style'  => 'world-map-block-editor-style',
        'style'         => 'world-map-block-style',
        'render_callback' => 'render_world_map_block',
        'attributes'    => array(
            'countries' => array(
                'type'    => 'string',
                'default' => '',
            ),
            'links' => array(
                'type'    => 'object',
                'default' => array(),
            ),
        ),
    ));
}
add_action('init', 'register_world_map_block');

function render_world_map_block($attributes) {
    $countries = explode(',', $attributes['countries']);
    $links = $attributes['links'];
    $showCountryList = isset($attributes['showCountryList']) ? $attributes['showCountryList'] : true;

    // Load the SVG map
    $svg = file_get_contents(plugin_dir_path(__FILE__) . 'assets/world-map.svg');

    // Highlight countries and add links
    foreach ($links as $country => $link) {
        $country = trim($country);
        $countryName = esc_html($link['name']);
        $link = esc_url($link['link']);

        $svg = preg_replace(
            "/id=\"$country\"/",
            "id=\"$country\" data-country=\"$countryName\" style=\"fill:#ffd700;cursor:pointer;\" onclick=\"window.location.href='$link';\"",
            $svg
        );
    }

    $countryListHtml = "";
    if ($showCountryList && !empty($links)) {
        $countryListHtml .= "<div class='worldmap-country-list'>";
        $countryListHtml .= "<h3>Pays:</h3>";
        $countryListHtml .= "<div class='country-grid'>";

        foreach ($links as $country => $link) {
            $countryListHtml .= "<a href=\"{$link['link']}\" target='_blank' class='country-item'>{$link['name']}</a>";
        }

        $countryListHtml .= "</div></div>";
    }


    return '<div class="worldmap-container">' . $svg . '</div>' . $countryListHtml;
}


function enqueue_worldmap_frontend_script() {
    if (is_admin()) {
        return; // Éviter de charger le script dans l'admin
    }

    global $post;
    if (isset($post) && has_block('aviondepapier/world-map-block', $post->post_content)) {
        // Chargement du script uniquement si le bloc est présent dans la page
        wp_enqueue_script(
            'world-map-frontend-script',
            plugins_url('frontend.js', __FILE__),
            array('wp-dom-ready', 'wp-element'),
            '1.0',
            true
        );
    }
}
add_action('wp_enqueue_scripts', 'enqueue_worldmap_frontend_script');