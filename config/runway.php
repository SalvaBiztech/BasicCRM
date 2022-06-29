<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Resources
    |--------------------------------------------------------------------------
    |
    | Configure the resources (models) you'd like to be available in Runway.
    |
    */

    'resources' => [
        // \App\Models\Order::class => [
        //     'name' => 'Orders',

        //     'blueprint' => [
        //         'sections' => [
        //             'main' => [
        //                 'fields' => [
        //                     [
        //                         'handle' => 'price',
        //                         'field' => [
        //                             'type' => 'number',
        //                             'validate' => 'required',
        //                         ],
        //                     ],
        //                 ],
        //             ],
        //         ],
        //     ],
        // ],

        \App\Models\Project::class => [
            'name' => 'Projects',

            'blueprint' => [
                'sections' => [
                    'main' => [
                        'fields' => [
                            [
                                'handle' => 'title',
                                'Disply' => 'Title',
                                'field' => [
                                    'type' => 'text',
                                    'validate' => 'required',
                                ],
                            ],
                        ],
                    ],
                ],
            ],
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Disable Migrations?
    |--------------------------------------------------------------------------
    |
    | Should Runway's migrations be disabled?
    | (eg. not automatically run when you next vendor:publish)
    |
    */

    'disable_migrations' => false,

];
