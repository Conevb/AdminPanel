<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Product;
use App\Http\Resources\Product as ProductResource;
use Cart;

class ProductController extends Controller
{
  // Display list of products
  public function index($search='')
  {
    $perPage = 15;

    if($search=='') {
      $products = Product::with('category')->paginate($perPage);
    }else{
      $products = Product::with('category')->where('title', 'like', "%$search%")->paginate($perPage);
    }
    return ProductResource::collection($products);
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(Request $request)
  {
      
  }

  // Display selected product
  public function show($id)
  {
    $product = Product::with('category')->where('id', $id)->get();
    return ProductResource::collection($product);
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, $id)
  {
      //
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function destroy($id)
  {
      //
  }
}
