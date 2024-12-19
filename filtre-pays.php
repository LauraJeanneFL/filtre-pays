<?php
/*
Plugin Name: Filtre Pays
Description: Permet de filtrer les destinations par pays via l'API REST de WordPress.
Version: 1.0
Author: Laura-Jeanne Fournier
*/

function filtre_pays_enqueue_scripts() {
    wp_enqueue_script(
        'filtre-pays-script',
        plugin_dir_url(__FILE__) . 'js/filtre-pays.js',
        ['jquery'],
        filemtime(plugin_dir_path(__FILE__) . 'js/filtre-pays.js'),
        true
    );
}
add_action('wp_enqueue_scripts', 'filtre_pays_enqueue_scripts');

function filtre_pays_register_rest_route() {
    register_rest_route('filtre-pays/v1', '/destinations', [
        'methods' => 'GET',
        'callback' => 'filtre_pays_get_destinations',
        'args' => [
            'pays' => [
                'required' => true,
                'sanitize_callback' => 'sanitize_text_field',
            ],
        ],
    ]);
}
add_action('rest_api_init', function () {
    error_log('REST API initialisée pour filtre-pays');
    register_rest_route('filtre-pays/v1', '/destinations', [
        'methods' => 'GET',
        'callback' => 'filtre_pays_get_destinations',
        'args' => [
            'pays' => [
                'required' => true,
                'sanitize_callback' => 'sanitize_text_field',
            ],
        ],
    ]);
});
function filtre_pays_get_destinations($request) {
    $pays = $request->get_param('pays');
    $query = new WP_Query([
        'post_type' => 'post',
        's' => $pays,
        'posts_per_page' => 30,
    ]);

    $destinations = [];
    foreach ($query->posts as $post) {
        $destinations[] = [
            'title' => $post->post_title,
            'link' => get_permalink($post),
        ];
    }
    return rest_ensure_response($destinations);
}