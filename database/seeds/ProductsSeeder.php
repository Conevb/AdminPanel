<?php

use Illuminate\Database\Seeder;

class ProductsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Category::class, 10)->create()->each(function($c){
          for($i=0; $i<30; $i++){
            $c->products()->save(factory(App\Product::class)->make());
          }
        });
    }
}
