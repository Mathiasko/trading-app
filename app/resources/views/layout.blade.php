<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link href="{{ asset('css/app.css') }}" rel="stylesheet">

  <title>Laravel</title>

  <!-- Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

  <style>
    body {
      font-family: 'Nunito', sans-serif;
    }

  </style>
</head>

<body>
  <nav class="p-6 mb-6 bg-indigo-600 flex justify-between">
    <ul class="flex items-center">
      <li class="p-3">
        <a href="/">Home</a>
      </li>
      <li class="p-3">
        <a href="">Dash</a>
      </li>
      <li class="p-3">
        <a href="">Posts</a>
      </li>
    </ul>

    <ul class="flex items-center">

      {{-- @if (auth()->user()) --}}
      @auth
        <li class="p-3">
          <a href="">{{ auth()->user()->name }}</a>
        </li>
        <li class="p-3">
          <form action="{{ route('logout') }}" method="POST" class="inline">
            @csrf
            <button type="submit">Logout</button>
          </form>
        </li>
      @endauth

      {{-- @else --}}

      @guest
        <li class="p-3">
          <a href="{{ route('login') }}">Login</a>
        </li>
        <li class="p-3">
          <a href="{{ route('register') }}">Register</a>
        </li>
      @endguest
      {{-- @endif --}}

    </ul>
  </nav>
  @yield('content')
</body>
