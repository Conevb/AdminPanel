<?php

use Faker\Generator as Faker;

$factory->define(App\Product::class, function (Faker $faker) {
    return [
        'title' => $faker->sentence(),
        'price' => $faker->randomFloat(2, 100, 50000),
        'description' => $faker->paragraph()
    ];
});
