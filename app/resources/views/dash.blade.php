@extends('layout')

@section('content')
  <div class="flex justify-center">
    <div class="w-8/12 bg-indigo-400 p-6 rounded-lg">
      <div id="app"></div>
      <script src="{{ mix('js/app.js') }}"></script>
    </div>
  @endsection
