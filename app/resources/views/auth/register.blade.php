@extends('layout')

@section('content')
  <div class="flex justify-center">
    <div class="w-8/12 bg-indigo-400 p-6 rounded-lg">
      <form action="{{ route('register') }}" method="POST">
        @csrf
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2 ml-2" for="name">
            Name
          </label>
          <input type="text" name="name" id="name" placeholder="Name"
            class="bg-gray-100 border-2 w-full p-4 rounded-lg @error('name') border-red-500 @enderror"
            value="{{ old('name') }}">

          @error('name')
            <div class="rext-red-500 mt-2 text-sm">
              {{ $message }}
            </div>
          @enderror
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2 ml-2" for="username">
            Username
          </label>
          <input type="text" name="username" id="username" placeholder="Username"
            class="bg-gray-100 border-2 w-full p-4 rounded-lg @error('username') border-red-500 @enderror"
            value="{{ old('username') }}">

          @error('username')
            <div class="rext-red-500 mt-2 text-sm">
              {{ $message }}
            </div>
          @enderror
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2 ml-2" for="email">
            Email
          </label>
          <input type="text" name="email" id="email" placeholder="Email"
            class="bg-gray-100 border-2 w-full p-4 rounded-lg @error('email') border-red-500 @enderror"
            value="{{ old('email') }}">

          @error('email')
            <div class="rext-red-500 mt-2 text-sm">
              {{ $message }}
            </div>
          @enderror
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2 ml-2" for="password">
            Password
          </label>
          <input type="password" name="password" id="password" placeholder="Password"
            class="bg-gray-100 border-2 w-full p-4 rounded-lg @error('password') border-red-500 @enderror">

          @error('password')
            <div class="rext-red-500 mt-2 text-sm">
              {{ $message }}
            </div>
          @enderror
        </div>
        <div class="mb-4">

          <input type="password" name="password_confirmation" id="password" placeholder="Password again"
            class="bg-gray-100 border-2 w-full p-4 rounded-lg @error('password_confirmation') border-red-500 @enderror">
        </div>
        <div class="w-full flex">
          <button type="submit" class="bg-blue-500 text-white px-10 py-3 rounded font-medium m-auto">Register</button>
        </div>
      </form>
    </div>
  @endsection
